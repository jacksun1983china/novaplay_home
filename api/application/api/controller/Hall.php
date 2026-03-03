<?php
namespace app\api\controller;

use app\common\controller\BaseController;
use app\common\model\Hall as HallModel;
use app\common\model\HallTranslation;

/**
 * 前台大厅接口
 */
class Hall extends BaseController
{
    /**
     * 大厅列表
     * GET /api/halls?featured=1&lang=en
     */
    public function index()
    {
        $featured = input('get.featured', 0);
        $lang     = input('get.lang', 'en');

        $query = HallModel::where('status', 1)->order('sort_order desc, id asc');

        if ($featured) {
            $query->where('is_featured', 1);
        }

        $halls = $query->with(['screenshots'])->select();

        // 注入多语言翻译
        $halls = $this->injectTranslations($halls->toArray(), $lang);

        return $this->success($halls);
    }

    /**
     * 大厅详情
     * GET /api/halls/:slug?lang=en
     */
    public function detail($slug)
    {
        $lang = input('get.lang', 'en');

        $hall = HallModel::where('slug', $slug)
            ->where('status', 1)
            ->with(['screenshots', 'translations'])
            ->find();

        if (!$hall) {
            return $this->fail('大厅不存在', 404);
        }

        $hallArr = $hall->toArray();

        // 应用翻译
        $translation = HallTranslation::where('hall_id', $hall['id'])
            ->where('lang', $lang)
            ->find();

        if ($translation) {
            if (!empty($translation['name']))        $hallArr['name']        = $translation['name'];
            if (!empty($translation['subtitle']))    $hallArr['subtitle']    = $translation['subtitle'];
            if (!empty($translation['description'])) $hallArr['description'] = $translation['description'];
        }

        return $this->success($hallArr);
    }

    /**
     * 注入多语言翻译到大厅列表
     */
    private function injectTranslations(array $halls, string $lang): array
    {
        if (empty($halls) || $lang === 'en') return $halls;

        $hallIds = array_column($halls, 'id');
        $translations = HallTranslation::where('hall_id', 'in', $hallIds)
            ->where('lang', $lang)
            ->select()
            ->toArray();

        $transMap = [];
        foreach ($translations as $t) {
            $transMap[$t['hall_id']] = $t;
        }

        foreach ($halls as &$hall) {
            if (isset($transMap[$hall['id']])) {
                $t = $transMap[$hall['id']];
                if (!empty($t['name']))     $hall['name']     = $t['name'];
                if (!empty($t['subtitle'])) $hall['subtitle'] = $t['subtitle'];
            }
        }

        return $halls;
    }
}
