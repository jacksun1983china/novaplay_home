<?php
namespace app\admin\controller;

use app\common\controller\BaseController;
use app\common\model\Inquiry as InquiryModel;

class Inquiry extends BaseController
{
    public function index()
    {
        $page    = max(1, (int)input('get.page', 1));
        $limit   = min(100, max(1, (int)input('get.limit', 20)));
        $is_read = input('get.is_read', '');

        $query = InquiryModel::order('created_at desc');
        if ($is_read !== '') {
            $query->where('is_read', (int)$is_read);
        }

        $total    = $query->count();
        $inquiries = $query->page($page, $limit)->select();

        return $this->success([
            'list'      => $inquiries->toArray(),
            'total'     => $total,
            'page'      => $page,
            'per_page'  => $limit,
            'last_page' => ceil($total / $limit),
        ]);
    }

    public function markRead($id)
    {
        InquiryModel::where('id', $id)->update(['is_read' => 1]);
        return $this->success(null, '已标记为已读');
    }

    public function delete($id)
    {
        InquiryModel::where('id', $id)->delete();
        return $this->success(null, '删除成功');
    }
}
