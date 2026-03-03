<?php
namespace app\api\controller;

use app\common\controller\BaseController;
use app\common\model\Partnership as PartnershipModel;

class Partnership extends BaseController
{
    public function index()
    {
        $list = PartnershipModel::where('status', 1)->order('sort_order asc')->select();
        return $this->success($list->toArray());
    }
}
