<?php
namespace app\api\controller;

use app\common\controller\BaseController;
use app\common\model\SiteConfig;

/**
 * 前台站点配置接口
 * GET /api/config
 */
class Config extends BaseController
{
    public function index()
    {
        $config = SiteConfig::getAll();
        return $this->success($config);
    }
}
