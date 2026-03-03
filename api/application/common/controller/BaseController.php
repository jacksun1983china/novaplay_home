<?php
namespace app\common\controller;

/**
 * 公共基础控制器
 * 提供统一的 JSON 响应方法
 * 注意：不继承 think\Controller，避免 PHP 8.1 方法签名兼容性问题
 */
class BaseController
{
    /**
     * 成功响应
     */
    protected function success($data = null, string $msg = 'success', int $code = 200)
    {
        return json([
            'code' => $code,
            'msg'  => $msg,
            'data' => $data,
        ]);
    }

    /**
     * 失败响应
     */
    protected function fail(string $msg = 'error', int $code = 400, $data = null)
    {
        return json([
            'code' => $code,
            'msg'  => $msg,
            'data' => $data,
        ]);
    }

    /**
     * 分页响应
     */
    protected function paginate($paginator, string $msg = 'success')
    {
        return json([
            'code' => 200,
            'msg'  => $msg,
            'data' => [
                'list'     => $paginator->items(),
                'total'    => $paginator->total(),
                'per_page' => $paginator->listRows(),
                'page'     => $paginator->currentPage(),
                'last_page'=> $paginator->lastPage(),
            ],
        ]);
    }
}
