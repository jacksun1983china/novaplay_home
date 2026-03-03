<?php
// [ 应用入口文件 ]
namespace think;

// 处理 CORS 预检请求（OPTIONS）—— 必须在框架加载前处理，否则路由匹配不到 OPTIONS 会返回 404
if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '*';
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, PATCH');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, Accept, Origin');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');
    header('Content-Length: 0');
    header('Content-Type: text/plain');
    http_response_code(204);
    exit(0);
}

// 加载基础文件
require __DIR__ . '/../thinkphp/base.php';

// 执行应用并响应
Container::get('app', [__DIR__ . '/../application'])
    ->run()
    ->send();
