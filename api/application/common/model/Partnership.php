<?php
namespace app\common\model;

use think\Model;

class Partnership extends Model
{
    protected $table = 'np_partnership';
    protected $autoWriteTimestamp = false;

    public function getStepsAttr($value)
    {
        if (empty($value)) return [];
        $decoded = json_decode($value, true);
        return is_array($decoded) ? $decoded : [];
    }

    public function setStepsAttr($value)
    {
        if (is_array($value)) return json_encode($value, JSON_UNESCAPED_UNICODE);
        return $value;
    }
}
