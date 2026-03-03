<?php
// +----------------------------------------------------------------------
// | 文件上传配置
// +----------------------------------------------------------------------
return [
    // 上传根目录（相对于 public 目录）
    'upload_path'    => 'uploads',
    // 允许的图片 MIME 类型
    'allowed_types'  => ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    // 允许的扩展名
    'allowed_exts'   => ['jpg', 'jpeg', 'png', 'gif', 'webp'],
    // 最大文件大小（字节），默认 5MB
    'max_size'       => 5 * 1024 * 1024,
    // 图片访问基础 URL（生产环境改为你的域名）
    'base_url'       => env('UPLOAD_BASE_URL', 'https://api.novaplaygaming.com'),
];
