<?php
namespace app\api\controller;

use app\common\controller\BaseController;
use app\common\model\Translation as TranslationModel;

class Translation extends BaseController
{
    /**
     * 获取指定语言的所有翻译
     * GET /api/translations/:lang
     */
    public function index($lang)
    {
        $rows = TranslationModel::where('lang', $lang)->select();
        $result = [];
        foreach ($rows as $row) {
            $result[$row['trans_key']] = $row['trans_value'];
        }
        return $this->success($result);
    }
}
