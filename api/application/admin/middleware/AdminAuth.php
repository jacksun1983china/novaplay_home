<?php
namespace app\admin\middleware;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use think\exception\HttpException;

/**
 * 后台 JWT 鉴权中间件
 * 所有 /admin/* 接口（除登录/登出）均需携带有效 Token
 */
class AdminAuth
{
    // 不需要鉴权的路由（模块/控制器/方法）
    protected $except = [
        'admin/auth/login',
        'admin/auth/logout',
    ];

    public function handle($request, \Closure $next)
    {
        $currentPath = strtolower($request->module() . '/' . $request->controller() . '/' . $request->action());

        // 白名单路由直接放行
        foreach ($this->except as $path) {
            if (strpos($currentPath, strtolower($path)) !== false) {
                return $next($request);
            }
        }

        // 获取 Authorization Header
        $authorization = $request->header('Authorization', '');
        if (empty($authorization) || strpos($authorization, 'Bearer ') !== 0) {
            return json(['code' => 401, 'msg' => 'Unauthorized: Token missing', 'data' => null], 401);
        }

        $token = substr($authorization, 7);

        try {
            $config = config('jwt.');
            $decoded = JWT::decode($token, new Key($config['secret'], $config['algorithm']));

            // 将管理员信息注入请求
            $request->adminId   = $decoded->admin_id ?? 0;
            $request->adminName = $decoded->username ?? '';

        } catch (\Firebase\JWT\ExpiredException $e) {
            return json(['code' => 401, 'msg' => 'Token expired, please login again', 'data' => null], 401);
        } catch (\Exception $e) {
            return json(['code' => 401, 'msg' => 'Invalid token: ' . $e->getMessage(), 'data' => null], 401);
        }

        return $next($request);
    }
}
