<?php
namespace app\admin\controller;

use app\common\controller\BaseController;
use app\common\model\Hall as HallModel;
use app\common\model\HallScreenshot;
use app\common\model\HallTranslation;

class Hall extends BaseController
{
    /**
     * 大厅列表
     * GET /admin/halls?page=1&limit=20&status=&keyword=
     */
    public function index()
    {
        $page    = max(1, (int)input('get.page', 1));
        $limit   = min(100, max(1, (int)input('get.limit', 20)));
        $status  = input('get.status', '');
        $keyword = input('get.keyword', '');

        $query = HallModel::order('sort_order desc, id asc');

        if ($status !== '') {
            $query->where('status', (int)$status);
        }
        if ($keyword) {
            $query->where('name', 'like', "%{$keyword}%");
        }

        $total = $query->count();
        $halls = $query->page($page, $limit)->select();

        return $this->success([
            'list'      => $halls->toArray(),
            'total'     => $total,
            'page'      => $page,
            'per_page'  => $limit,
            'last_page' => ceil($total / $limit),
        ]);
    }

    /**
     * 大厅详情
     * GET /admin/halls/:id
     */
    public function detail($id)
    {
        $hall = HallModel::with(['screenshots', 'translations'])->find($id);
        if (!$hall) {
            return $this->fail('大厅不存在', 404);
        }
        return $this->success($hall->toArray());
    }

    /**
     * 创建大厅
     * POST /admin/halls
     */
    public function create()
    {
        $data = input('post.');
        $data = $this->filterHallData($data);

        // 自动生成 slug
        if (empty($data['slug'])) {
            $data['slug'] = $this->generateSlug($data['name'] ?? '');
        }

        // 检查 slug 唯一性
        if (HallModel::where('slug', $data['slug'])->count()) {
            $data['slug'] = $data['slug'] . '-' . time();
        }

        $data['created_at'] = time();
        $data['updated_at'] = time();

        $hall = HallModel::create($data);

        return $this->success(['id' => $hall->id], '创建成功');
    }

    /**
     * 更新大厅
     * PUT /admin/halls/:id
     */
    public function update($id)
    {
        $hall = HallModel::find($id);
        if (!$hall) {
            return $this->fail('大厅不存在', 404);
        }

        $data = input('put.');
        $data = $this->filterHallData($data);
        $data['updated_at'] = time();

        $hall->save($data);

        return $this->success(null, '更新成功');
    }

    /**
     * 删除大厅
     * DELETE /admin/halls/:id
     */
    public function delete($id)
    {
        $hall = HallModel::find($id);
        if (!$hall) {
            return $this->fail('大厅不存在', 404);
        }

        // 级联删除截图和翻译
        HallScreenshot::where('hall_id', $id)->delete();
        HallTranslation::where('hall_id', $id)->delete();
        $hall->delete();

        return $this->success(null, '删除成功');
    }

    /**
     * 更新排序
     * POST /admin/halls/:id/sort
     * Body: { sort_order: 10 }
     */
    public function sort($id)
    {
        $sortOrder = (int)input('post.sort_order', 0);
        HallModel::where('id', $id)->update(['sort_order' => $sortOrder]);
        return $this->success(null, '排序更新成功');
    }

    /**
     * 添加截图
     * POST /admin/halls/:id/screenshots
     * Body: { url: '...', sort_order: 0 }
     */
    public function addScreenshot($id)
    {
        $hall = HallModel::find($id);
        if (!$hall) {
            return $this->fail('大厅不存在', 404);
        }

        $url       = input('post.url', '');
        $sortOrder = (int)input('post.sort_order', 0);

        if (empty($url)) {
            return $this->fail('截图 URL 不能为空', 422);
        }

        $screenshot = HallScreenshot::create([
            'hall_id'    => $id,
            'url'        => $url,
            'sort_order' => $sortOrder,
        ]);

        return $this->success(['id' => $screenshot->id], '截图添加成功');
    }

    /**
     * 删除截图
     * DELETE /admin/halls/:id/screenshots/:sid
     */
    public function deleteScreenshot($id, $sid)
    {
        HallScreenshot::where('id', $sid)->where('hall_id', $id)->delete();
        return $this->success(null, '截图删除成功');
    }

    /**
     * 获取大厅翻译
     * GET /admin/halls/:id/translations
     */
    public function getTranslations($id)
    {
        $translations = HallTranslation::where('hall_id', $id)->select();
        return $this->success($translations->toArray());
    }

    /**
     * 保存大厅翻译（批量）
     * POST /admin/halls/:id/translations
     * Body: [{ lang, name, subtitle, description }, ...]
     */
    public function saveTranslations($id)
    {
        $hall = HallModel::find($id);
        if (!$hall) {
            return $this->fail('大厅不存在', 404);
        }

        $translations = input('post.translations/a', []);

        foreach ($translations as $t) {
            $lang = $t['lang'] ?? '';
            if (empty($lang)) continue;

            HallTranslation::where('hall_id', $id)->where('lang', $lang)->delete();

            HallTranslation::create([
                'hall_id'     => $id,
                'lang'        => $lang,
                'name'        => $t['name'] ?? '',
                'subtitle'    => $t['subtitle'] ?? '',
                'description' => $t['description'] ?? '',
                'updated_at'  => time(),
            ]);
        }

        return $this->success(null, '翻译保存成功');
    }

    private function filterHallData(array $data): array
    {
        $allowed = ['name', 'slug', 'subtitle', 'description', 'cover_url', 'tags',
                    'demo_url', 'cta_type', 'is_featured', 'sort_order', 'status'];
        return array_intersect_key($data, array_flip($allowed));
    }

    private function generateSlug(string $name): string
    {
        $slug = strtolower(preg_replace('/[^a-zA-Z0-9]+/', '-', $name));
        return trim($slug, '-') ?: 'hall-' . time();
    }
}
