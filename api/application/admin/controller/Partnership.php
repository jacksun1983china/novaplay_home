<?php
namespace app\admin\controller;

use app\common\controller\BaseController;
use app\common\model\Partnership as PartnershipModel;

class Partnership extends BaseController
{
    public function index()
    {
        $list = PartnershipModel::order('sort_order asc')->select();
        return $this->success($list->toArray());
    }

    public function update($id)
    {
        $item = PartnershipModel::find($id);
        if (!$item) return $this->fail('记录不存在', 404);

        $allowed = ['title', 'description', 'is_recommended', 'steps', 'sort_order', 'status'];
        $data = array_intersect_key(input('put.'), array_flip($allowed));
        $data['updated_at'] = time();

        $item->save($data);
        return $this->success(null, '更新成功');
    }
}
