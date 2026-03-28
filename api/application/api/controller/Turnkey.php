<?php
namespace app\api\controller;
use app\common\controller\BaseController;
use app\common\model\TurnkeyPlan;
use app\common\model\TurnkeyFeature;
use app\common\model\TurnkeyProcess;

class Turnkey extends BaseController
{
    /**
     * 获取包网平台完整数据（套餐、功能亮点、上线流程）
     */
    public function index()
    {
        $plans = TurnkeyPlan::where('status', 1)->order('sort_order asc')->select();
        $features = TurnkeyFeature::where('status', 1)->order('sort_order asc')->select();
        $process = TurnkeyProcess::where('status', 1)->order('step_number asc')->select();

        return $this->success([
            'plans'    => $plans->toArray(),
            'features' => $features->toArray(),
            'process'  => $process->toArray(),
        ]);
    }

    /**
     * 获取套餐列表
     */
    public function plans()
    {
        $list = TurnkeyPlan::where('status', 1)->order('sort_order asc')->select();
        return $this->success($list->toArray());
    }
}
