<?php

namespace App\Http\Controllers\Auth;

use App\Events\CustomerLoginHistory;
use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Wishlist;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

//    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('customer')->except('logout');
    }

    public function login()
    {

        return view('auth.customer.login');

    }
//    public function getLogin()
//    {
//
//        return view('pages.popup');
//    }

    public function showLoginForm()
    {
        if (auth()->guard('customer')->check()) {
            $customer = Auth::guard('customer')->user();
            $orders = auth()->guard('customer')->user()->orders()->with('products')->orderBy('created_at', 'DESC')->paginate(6);
            if (!$orders) {
                abort(404);
            }
            return view('auth.customer.login', [
                'orders' => $orders,
                'customer' => $customer]);
        } else {
            return view('auth.customer.login');
        }
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

        $remember = $request->filled('remember');

        if (!$validator->fails()) {
            if (auth()->guard('customer')->attempt(['email' => $request->input('email'), 'password' => $request->input('password')], $remember)) {
                $wishSession = session()->get('wishlist');
                if(session()->get('cart')) {
                    return redirect()->route('checkout')->with('success', 'Autenticazione avvenuta!');

                }

                if (isset($wishSession)) {

                    foreach ($wishSession as $wish) {

                        $wishItem = Wishlist::firstOrNew([
                            'customer_id' => auth()->guard('customer')->user()->id,
                            'product_id' => $wish['product_id']

                        ]);
                        session()->forget('wishlist');
                        $wishItem->save();
                    }


                }
                session()->forget('wishlist');
                $customer = auth()->user();

                event(new CustomerLoginHistory($customer));
                return redirect()->route('orders.index')->with('success', 'Autenticazione avvenuta!');

            }

            return redirect()->back()->with('danger', 'Credenziali non corrispondenti dai dati registrati');


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
        return Auth::guard('customer');
    }

    public function logout(Request $request)
    {
        Auth::guard('customer')->logout();
//        Session::flush();

        return redirect()->route('login')->with('success', 'Sei uscito correttamente');

    }

    protected function loggedOut(Request $request)
    {
        //
    }
}
