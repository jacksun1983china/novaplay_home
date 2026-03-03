<?php
namespace app\common\model;

use think\Model;

class SiteConfig extends Model
{
    protected $table = 'np_site_config';
    protected $autoWriteTimestamp = false;

    /**
     * 获取所有配置，返回 key => value 的关联数组
     */
    public static function getAll(): array
    {
        $rows = self::field('cfg_key, cfg_value, cfg_type')->select();
        $result = [];
        foreach ($rows as $row) {
            $value = $row['cfg_value'];
            // cfg_type=3 时自动解析 JSON
            if ($row['cfg_type'] == 3 && !empty($value)) {
                $decoded = json_decode($value, true);
                $value = is_array($decoded) ? $decoded : $value;
            }
            $result[$row['cfg_key']] = $value;
        }
        return $result;
    }

    /**
     * 批量更新配置
     */
    public static function batchUpdate(array $data): void
    {
        foreach ($data as $key => $value) {
            if (is_array($value)) {
                $value = json_encode($value, JSON_UNESCAPED_UNICODE);
            }
            self::where('cfg_key', $key)->update([
                'cfg_value'  => $value,
                'updated_at' => time(),
            ]);
        }
    }
}
