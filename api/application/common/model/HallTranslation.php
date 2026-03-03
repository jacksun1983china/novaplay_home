<?php
namespace app\common\model;

use think\Model;

class HallTranslation extends Model
{
    protected $table = 'np_hall_translation';
    protected $autoWriteTimestamp = false;

    public function setUpdatedAtAttr()
    {
        return time();
    }
}
