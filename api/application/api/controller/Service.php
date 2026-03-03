<?php
namespace app\api\controller;

use app\common\controller\BaseController;
use app\common\model\CustomService;

class Service extends BaseController
{
    public function index()
    {
        $list = CustomService::where('status', 1)->order('sort_order asc')->select();
        return $this->success($list->toArray());
    }
}
