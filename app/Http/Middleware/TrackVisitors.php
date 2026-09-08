<?php

namespace App\Http\Middleware;

use App\Models\Visitor;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TrackVisitors
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $ip = $request->ip();
        if (Visitor::where('visited_at', today())->where('ip_address', $ip)->count() < 1)
        {
            Visitor::create([
                'visited_at' => today(),
                'ip_address' => $ip,
                'browser' => \request()->header('User-Agent')
            ]);
        }
        return $next($request);
    }
}
