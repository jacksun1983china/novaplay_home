<?php
namespace app\common\model;

use think\Model;

class Hall extends Model
{
    protected $table = 'np_hall';

    protected $autoWriteTimestamp = 'int';

    /**
     * 关联截图
     */
    public function screenshots()
    {
        return $this->hasMany('HallScreenshot', 'hall_id')->order('sort_order asc');
    }

    /**
     * 关联翻译
     */
    public function translations()
    {
        return $this->hasMany('HallTranslation', 'hall_id');
    }

    /**
     * tags 字段自动 JSON 序列化
     */
    public function getTagsAttr($value)
    {
        if (empty($value)) return [];
        if (is_array($value)) return $value;
        $decoded = json_decode($value, true);
        return is_array($decoded) ? $decoded : [];
    }

    public function setTagsAttr($value)
    {
        if (is_array($value)) return json_encode($value, JSON_UNESCAPED_UNICODE);
        return $value;
    }
}
