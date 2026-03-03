<?php
namespace app\api\controller;

use app\common\controller\BaseController;
use app\common\model\Inquiry as InquiryModel;

class Inquiry extends BaseController
{
    /**
     * 提交询盘
     * POST /api/inquiry
     */
    public function submit()
    {
        $data = [
            'name'             => trim(input('post.name', '')),
            'contact'          => trim(input('post.contact', '')),
            'company'          => trim(input('post.company', '')),
            'partnership_type' => trim(input('post.partnership_type', '')),
            'message'          => trim(input('post.message', '')),
            'ip'               => $this->request->ip(),
            'is_read'          => 0,
            'created_at'       => time(),
        ];

        if (empty($data['name'])) {
            return $this->fail('姓名不能为空', 422);
        }
        if (empty($data['contact'])) {
            return $this->fail('联系方式不能为空', 422);
        }

        InquiryModel::create($data);

        return $this->success(null, '提交成功，我们将尽快与您联系！');
    }
}
