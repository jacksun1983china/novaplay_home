<?php
namespace app\admin\controller;

use app\common\controller\BaseController;
use app\common\model\Game as GameModel;

class Game extends BaseController
{
    public function index()
    {
        $page     = max(1, (int)input('get.page', 1));
        $limit    = min(100, max(1, (int)input('get.limit', 20)));
        $status   = input('get.status', '');
        $category = input('get.category', '');
        $keyword  = input('get.keyword', '');

        $query = GameModel::order('sort_order desc, id asc');

        if ($status !== '') $query->where('status', (int)$status);
        if ($category)      $query->where('category', $category);
        if ($keyword)       $query->where('name', 'like', "%{$keyword}%");

        $total = $query->count();
        $games = $query->page($page, $limit)->select();

        return $this->success([
            'list'      => $games->toArray(),
            'total'     => $total,
            'page'      => $page,
            'per_page'  => $limit,
            'last_page' => ceil($total / $limit),
        ]);
    }

    public function detail($id)
    {
        $game = GameModel::find($id);
        if (!$game) return $this->fail('游戏不存在', 404);
        return $this->success($game->toArray());
    }

    public function create()
    {
        $data = $this->filterGameData(input('post.'));

        if (empty($data['slug'])) {
            $data['slug'] = $this->generateSlug($data['name'] ?? '');
        }
        if (GameModel::where('slug', $data['slug'])->count()) {
            $data['slug'] = $data['slug'] . '-' . time();
        }

        $data['created_at'] = time();
        $data['updated_at'] = time();

        $game = GameModel::create($data);
        return $this->success(['id' => $game->id], '创建成功');
    }

    public function update($id)
    {
        $game = GameModel::find($id);
        if (!$game) return $this->fail('游戏不存在', 404);

        $data = $this->filterGameData(input('put.'));
        $data['updated_at'] = time();
        $game->save($data);

        return $this->success(null, '更新成功');
    }

    public function delete($id)
    {
        $game = GameModel::find($id);
        if (!$game) return $this->fail('游戏不存在', 404);
        $game->delete();
        return $this->success(null, '删除成功');
    }

    private function filterGameData(array $data): array
    {
        $allowed = ['name', 'slug', 'category', 'cover_url', 'description',
                    'is_featured', 'sort_order', 'status'];
        return array_intersect_key($data, array_flip($allowed));
    }

    private function generateSlug(string $name): string
    {
        $slug = strtolower(preg_replace('/[^a-zA-Z0-9]+/', '-', $name));
        return trim($slug, '-') ?: 'game-' . time();
    }
}
