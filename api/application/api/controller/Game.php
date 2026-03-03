<?php
namespace app\api\controller;

use app\common\controller\BaseController;
use app\common\model\Game as GameModel;

class Game extends BaseController
{
    /**
     * 游戏列表
     * GET /api/games?category=Slot&featured=1&page=1&limit=20
     */
    public function index()
    {
        $category = input('get.category', '');
        $featured = input('get.featured', 0);
        $page     = max(1, (int)input('get.page', 1));
        $limit    = min(100, max(1, (int)input('get.limit', 20)));

        $query = GameModel::where('status', 1)->order('sort_order desc, id asc');

        if ($category) {
            $query->where('category', $category);
        }
        if ($featured) {
            $query->where('is_featured', 1);
        }

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

    /**
     * 游戏详情
     * GET /api/games/:slug
     */
    public function detail($slug)
    {
        $game = GameModel::where('slug', $slug)->where('status', 1)->find();
        if (!$game) {
            return $this->fail('游戏不存在', 404);
        }
        return $this->success($game->toArray());
    }
}
