<?php

namespace App\Http\Controllers\Auth\Admin;

use App\Events\AdminLoginHistory;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use App\Http\Requests\AdminLoginRequest;
use Illuminate\Support\Facades\Validator;

class LoginAdminController extends Controller
{
    public function __construct()
    {
//        $this->middleware('guest')->except('logout');

    }

    public function getLogin()
    {
        if (auth()->guard('admin')->user()) {
            return redirect()->route('dashboard');
        }
        return view('auth.admin.login');
    }

    /**
     * @throws ValidationException
     */

    public function postLogin(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => ['required', 'regex:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/'],
            'password' => ['required', 'min:6'],
//            'g-recaptcha-response' => 'required'

        ]);


        if (!$validator->fails()) {
            if (auth()->guard('admin')->attempt(['email' => $request->input('email'), 'password' => $request->input('password')])) {
                $admin = auth()->guard('admin')->user();

                event(new AdminLoginHistory($admin));
                return redirect()->route('dashboard')->with('success', 'Autenticazione avvenuta!');

            }

            return redirect()->back()->with('danger', 'Credenziali non corrispondenti');


        } else {

            return redirect()->back()->withErrors($validator->errors());

        }



    }

    protected function sendLoginResponse(Request $request)
    {
        $request->session()->regenerate();

        $this->clearLoginAttempts($request);

        if ($response = $this->authenticated($request, $this->guard()->user())) {
            return $response;
        }

        return $request->wantsJson()
            ? new JsonResponse([], 204)
            : redirect()->intended($this->redirectPath());
    }

    protected function sendFailedLoginResponse(Request $request)
    {
        throw ValidationException::withMessages([
            $this->username() => [trans('auth.failed')],
        ]);
    }

    public function username()
    {
        return 'email';
    }

    protected function guard()
    {
        return Auth::guard();
    }

    /**
     * Show the application logout.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|\Illuminate\Routing\Redirector
     */



    public function login()
    {

        return view('auth.admin.login');


    }

    public function adminLogout()
    {
        auth()->guard('admin')->logout();
        return redirect()->route('adminLogin')->with('success', 'Sei uscito correttamente');
    }

    public function pagination($items, $perPage = 5, $page = null, $options = [], $pageName = 'page')
    {
        $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);

        $items = $items instanceof Collection ? $items : Collection::make($items);
        return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, [
            'path' => LengthAwarePaginator::resolveCurrentPath(),
            'pageName' => $pageName,
        ], $options);
    }
}
