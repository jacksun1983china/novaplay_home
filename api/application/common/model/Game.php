<?php
namespace app\common\model;

use think\Model;

class Game extends Model
{
    protected $table = 'np_game';
    protected $autoWriteTimestamp = 'int';
}
