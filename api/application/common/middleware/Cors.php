<?php
namespace app\common\middleware;

/**
 * CORS 跨域中间件
 * 允许前台 React SPA 和后台管理系统跨域访问 API
 */
class Cors
{
    public function handle($request, \Closure $next)
    {
        $allowOrigins = [
            'https://novaplaygaming.com',
            'https://www.novaplaygaming.com',
            'https://admin.novaplaygaming.com',
            'http://localhost:3000',
            'http://localhost:5173',
            'http://localhost:5174',
        ];

        $origin = $request->header('Origin', '');

        // 开发环境允许所有来源
        if (env('APP_DEBUG', false)) {
            $allowOrigin = $origin ?: '*';
        } else {
            $allowOrigin = in_array($origin, $allowOrigins) ? $origin : $allowOrigins[0];
        }

        // 处理 OPTIONS 预检请求
        if ($request->method() === 'OPTIONS') {
            return response('', 204)
                ->header('Access-Control-Allow-Origin', $allowOrigin)
                ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH')
                ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin')
                ->header('Access-Control-Allow-Credentials', 'true')
                ->header('Access-Control-Max-Age', '86400');
        }

        $response = $next($request);

        return $response
            ->header('Access-Control-Allow-Origin', $allowOrigin)
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH')
            ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin')
            ->header('Access-Control-Allow-Credentials', 'true');
    }
}
