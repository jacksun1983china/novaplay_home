<?php
namespace app\admin\controller;

use app\common\controller\BaseController;
use app\common\model\SiteConfig;

class Config extends BaseController
{
    /**
     * 获取所有配置
     * GET /admin/config
     */
    public function index()
    {
        // 返回完整配置行（含 remark）
        $rows = SiteConfig::field('cfg_key, cfg_value, cfg_type, remark')->select();
        return $this->success($rows->toArray());
    }

    /**
     * 批量更新配置
     * PUT /admin/config
     * Body: { key1: value1, key2: value2, ... }
     */
    public function update()
    {
        $data = input('put.');
        if (empty($data)) {
            return $this->fail('没有提交任何数据', 422);
        }

        SiteConfig::batchUpdate($data);

        return $this->success(null, '配置更新成功');
    }
}
