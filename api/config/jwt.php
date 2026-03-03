<?php
// +----------------------------------------------------------------------
// | JWT 配置
// +----------------------------------------------------------------------
return [
    // JWT 签名密钥（生产环境请修改为随机长字符串）
    'secret'     => env('JWT_SECRET', 'novaplay_jwt_secret_change_in_production_2024'),
    // Token 有效期（秒），默认 7 天
    'expire'     => env('JWT_EXPIRE', 604800),
    // 算法
    'algorithm'  => 'HS256',
    // Token 前缀
    'prefix'     => 'Bearer',
];
