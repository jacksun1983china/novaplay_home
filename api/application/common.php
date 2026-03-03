<?php
// +----------------------------------------------------------------------
// | 公共函数文件
// +----------------------------------------------------------------------

if (!function_exists('api_success')) {
    function api_success($data = null, string $msg = 'success', int $code = 200)
    {
        return json(['code' => $code, 'msg' => $msg, 'data' => $data]);
    }
}

if (!function_exists('api_fail')) {
    function api_fail(string $msg = 'error', int $code = 400, $data = null)
    {
        return json(['code' => $code, 'msg' => $msg, 'data' => $data]);
    }
}
