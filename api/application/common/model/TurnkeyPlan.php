<?php
namespace app\common\model;
use think\Model;

class TurnkeyPlan extends Model
{
    protected $table = 'np_turnkey_plan';
    protected $autoWriteTimestamp = false;

    public function getFeaturesAttr($value)
    {
        if (empty($value)) return [];
        $decoded = json_decode($value, true);
        return is_array($decoded) ? $decoded : [];
    }

    public function setFeaturesAttr($value)
    {
        if (is_array($value)) return json_encode($value, JSON_UNESCAPED_UNICODE);
        return $value;
    }
}
