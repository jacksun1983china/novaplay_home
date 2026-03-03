<?php
namespace app\admin\controller;

use app\common\controller\BaseController;
use app\common\model\Hall;
use app\common\model\Game;
use app\common\model\Inquiry;

class Dashboard extends BaseController
{
    public function index()
    {
        return $this->success([
            'halls_total'      => Hall::count(),
            'halls_online'     => Hall::where('status', 1)->count(),
            'games_total'      => Game::count(),
            'games_online'     => Game::where('status', 1)->count(),
            'inquiries_total'  => Inquiry::count(),
            'inquiries_unread' => Inquiry::where('is_read', 0)->count(),
        ]);
    }
}
