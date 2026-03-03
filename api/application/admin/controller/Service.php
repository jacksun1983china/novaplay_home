<?php
namespace app\admin\controller;

use app\common\controller\BaseController;
use app\common\model\CustomService;

class Service extends BaseController
{
    public function index()
    {
        $list = CustomService::order('sort_order asc')->select();
        return $this->success($list->toArray());
    }

    public function create()
    {
        $allowed = ['icon', 'title', 'description', 'sort_order', 'status'];
        $data = array_intersect_key(input('post.'), array_flip($allowed));
        $data['updated_at'] = time();
        $item = CustomService::create($data);
        return $this->success(['id' => $item->id], '创建成功');
    }

    public function update($id)
    {
        $item = CustomService::find($id);
        if (!$item) return $this->fail('记录不存在', 404);

        $allowed = ['icon', 'title', 'description', 'sort_order', 'status'];
        $data = array_intersect_key(input('put.'), array_flip($allowed));
        $data['updated_at'] = time();
        $item->save($data);
        return $this->success(null, '更新成功');
    }

    public function delete($id)
    {
        $item = CustomService::find($id);
        if (!$item) return $this->fail('记录不存在', 404);
        $item->delete();
        return $this->success(null, '删除成功');
    }
}
