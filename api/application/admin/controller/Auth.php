<?php
namespace app\admin\controller;

use app\common\controller\BaseController;
use app\common\model\Admin;
use Firebase\JWT\JWT;

/**
 * 后台认证控制器
 */
class Auth extends BaseController
{
    /**
     * 管理员登录
     * POST /admin/login
     * Body: { username, password }
     */
    public function login()
    {
        $username = input('post.username', '');
        $password = input('post.password', '');

        if (empty($username) || empty($password)) {
            return $this->fail('用户名和密码不能为空', 422);
        }

        $admin = Admin::where('username', $username)->find();

        if (!$admin) {
            return $this->fail('用户名或密码错误', 401);
        }

        if (!password_verify($password, $admin['password'])) {
            return $this->fail('用户名或密码错误', 401);
        }

        // 更新最后登录时间
        $admin->last_login = time();
        $admin->save();

        // 生成 JWT Token
        $config = config('jwt.');
        $payload = [
            'iss'      => 'novaplay-api',
            'iat'      => time(),
            'exp'      => time() + $config['expire'],
            'admin_id' => $admin['id'],
            'username' => $admin['username'],
        ];

        $token = JWT::encode($payload, $config['secret'], $config['algorithm']);

        return $this->success([
            'token'      => $token,
            'expires_in' => $config['expire'],
            'admin'      => [
                'id'       => $admin['id'],
                'username' => $admin['username'],
            ],
        ], '登录成功');
    }

    /**
     * 登出（前端清除 Token 即可，此接口仅作记录）
     * POST /admin/logout
     */
    public function logout()
    {
        return $this->success(null, '已退出登录');
    }

    /**
     * 获取当前登录信息
     * GET /admin/profile
     */
    public function profile()
    {
        $adminId = $this->request->adminId;
        $admin   = Admin::find($adminId);

        if (!$admin) {
            return $this->fail('管理员不存在', 404);
        }

        return $this->success([
            'id'         => $admin['id'],
            'username'   => $admin['username'],
            'last_login' => $admin['last_login'],
        ]);
    }
}
