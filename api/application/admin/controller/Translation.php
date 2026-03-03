<?php
namespace app\admin\controller;

use app\common\controller\BaseController;
use app\common\model\Translation as TranslationModel;

class Translation extends BaseController
{
    /**
     * 获取所有翻译（按语言分组）
     * GET /admin/translations?lang=en
     */
    public function index()
    {
        $lang = input('get.lang', '');

        $query = TranslationModel::order('lang asc, trans_key asc');
        if ($lang) {
            $query->where('lang', $lang);
        }

        $rows = $query->select();

        // 按语言分组
        $grouped = [];
        foreach ($rows as $row) {
            $grouped[$row['lang']][$row['trans_key']] = $row['trans_value'];
        }

        return $this->success($grouped);
    }

    /**
     * 批量保存翻译
     * POST /admin/translations/batch
     * Body: { lang: 'en', translations: { key: value, ... } }
     */
    public function batchSave()
    {
        $lang         = input('post.lang', '');
        $translations = input('post.translations/a', []);

        if (empty($lang)) {
            return $this->fail('语言代码不能为空', 422);
        }

        foreach ($translations as $key => $value) {
            $exists = TranslationModel::where('lang', $lang)->where('trans_key', $key)->find();
            if ($exists) {
                $exists->save(['trans_value' => $value, 'updated_at' => time()]);
            } else {
                TranslationModel::create([
                    'lang'        => $lang,
                    'trans_key'   => $key,
                    'trans_value' => $value,
                    'updated_at'  => time(),
                ]);
            }
        }

        return $this->success(null, '翻译保存成功');
    }
}
