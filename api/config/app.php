<?php
// +----------------------------------------------------------------------
// | 应用配置
// +----------------------------------------------------------------------
return [
    // 应用名称
    'app_name'         => 'NovaPlay API',
    // 应用地址
    'app_host'         => env('APP_HOST', ''),
    // 应用的命名空间
    'app_namespace'    => 'app',
    // 是否启用路由
    'url_route_on'     => true,
    // 路由使用完整匹配
    'route_complete_match' => false,
    // 是否强制使用路由
    'url_route_must'   => false,
    // 调试模式
    'app_debug'        => env('APP_DEBUG', false),
    // 应用 Trace
    'app_trace'        => false,
    // 应用模式状态
    'app_status'       => '',
    // 是否支持多模块
    'app_multi_module' => true,
    // 入口自动绑定模块
    'auto_bind_module' => false,
    // 注册的根命名空间
    'root_namespace'   => [],
    // 扩展函数文件
    'extra_file_list'  => [],
    // 默认输出类型
    'default_return_type' => 'json',
    // 默认 AJAX 数据返回格式,可选 json xml ...
    'default_ajax_return' => 'json',
    // 默认 JSONP 格式返回的处理方法
    'default_jsonp_handler' => 'jsonpReturn',
    // 默认 JSONP 请求的参数名
    'var_jsonp_handler'     => 'callback',
    // 默认时区
    'default_timezone' => 'Asia/Shanghai',
    // 是否开启多语言
    'lang_switch_on'   => false,
    // 默认全局过滤方法 用逗号分隔多个
    'default_filter'   => '',
    // 默认语言
    'default_lang'     => 'zh-cn',
    // 应用类库后缀
    'class_suffix'     => false,
    // 控制器类后缀
    'controller_suffix' => false,
];
