<?php
// +----------------------------------------------------------------------
// | NovaPlay API 路由配置
// +----------------------------------------------------------------------

// ============================================================
// 前台 API 路由（无需鉴权）
// ============================================================
\Route::group('api', function () {

    // 站点配置（首页 Hero、联系方式等）
    \Route::get('config',              'api/Config/index');

    // 大厅列表（首页展示）
    \Route::get('halls',               'api/Hall/index');
    // 大厅详情
    \Route::get('halls/:slug',         'api/Hall/detail');

    // 游戏列表
    \Route::get('games',               'api/Game/index');
    // 游戏详情
    \Route::get('games/:slug',         'api/Game/detail');

    // 合作模式
    \Route::get('partnerships',        'api/Partnership/index');

    // 自定义开发服务
    \Route::get('services',            'api/Service/index');

    // 多语言翻译
    \Route::get('translations/:lang',  'api/Translation/index');

    // 包网平台
    \Route::get('turnkey',             'api/Turnkey/index');
    \Route::get('turnkey/plans',       'api/Turnkey/plans');

    // FAQ
    \Route::get('faqs',               'api/Faq/index');

    // 提交询盘
    \Route::post('inquiry',            'api/Inquiry/submit');

})->middleware(['app\common\middleware\Cors']);

// ============================================================
// 后台管理 API 路由
// ============================================================
\Route::group('admin', function () {

    // 登录（不需要 JWT 验证）
    \Route::post('login',              'admin/Auth/login');
    \Route::post('logout',             'admin/Auth/logout');
    \Route::get('profile',             'admin/Auth/profile');

    // 仪表盘统计
    \Route::get('dashboard',           'admin/Dashboard/index');

    // 站点配置管理
    \Route::get('config',              'admin/Config/index');
    \Route::put('config',              'admin/Config/update');

    // 大厅管理
    \Route::get('halls',               'admin/Hall/index');
    \Route::post('halls',              'admin/Hall/create');
    \Route::get('halls/:id',           'admin/Hall/detail');
    \Route::put('halls/:id',           'admin/Hall/update');
    \Route::delete('halls/:id',        'admin/Hall/delete');
    \Route::post('halls/:id/sort',     'admin/Hall/sort');
    // 大厅截图
    \Route::post('halls/:id/screenshots',        'admin/Hall/addScreenshot');
    \Route::delete('halls/:id/screenshots/:sid', 'admin/Hall/deleteScreenshot');
    // 大厅翻译
    \Route::get('halls/:id/translations',        'admin/Hall/getTranslations');
    \Route::post('halls/:id/translations',       'admin/Hall/saveTranslations');

    // 游戏管理
    \Route::get('games',               'admin/Game/index');
    \Route::post('games',              'admin/Game/create');
    \Route::get('games/:id',           'admin/Game/detail');
    \Route::put('games/:id',           'admin/Game/update');
    \Route::delete('games/:id',        'admin/Game/delete');

    // 合作模式管理
    \Route::get('partnerships',        'admin/Partnership/index');
    \Route::put('partnerships/:id',    'admin/Partnership/update');

    // 自定义开发服务管理
    \Route::get('services',            'admin/Service/index');
    \Route::post('services',           'admin/Service/create');
    \Route::put('services/:id',        'admin/Service/update');
    \Route::delete('services/:id',     'admin/Service/delete');

    // 多语言翻译管理
    \Route::get('translations',        'admin/Translation/index');
    \Route::post('translations/batch', 'admin/Translation/batchSave');

    // 询盘管理
    \Route::get('inquiries',           'admin/Inquiry/index');
    \Route::put('inquiries/:id/read',  'admin/Inquiry/markRead');
    \Route::delete('inquiries/:id',    'admin/Inquiry/delete');

    // 图片上传
    \Route::post('upload',             'admin/Upload/image');

})->middleware([
    'app\common\middleware\Cors',
    'app\admin\middleware\AdminAuth',
])->except(['admin/Auth/login', 'admin/Auth/logout']);
