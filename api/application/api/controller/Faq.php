<?php
namespace app\api\controller;
use app\common\controller\BaseController;
use app\common\model\Faq as FaqModel;

class Faq extends BaseController
{
    /**
     * 获取 FAQ 列表，支持按分类筛选
     */
    public function index()
    {
        $category = input('get.category', '');
        $query = FaqModel::where('status', 1);

        if (!empty($category) && $category !== 'all') {
            $query = $query->where('category', $category);
        }

        $list = $query->order('sort_order asc')->select();
        return $this->success($list->toArray());
    }
}
