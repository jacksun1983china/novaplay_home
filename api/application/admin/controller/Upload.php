<?php
namespace app\admin\controller;

use app\common\controller\BaseController;

class Upload extends BaseController
{
    /**
     * 上传图片
     * POST /admin/upload
     * Form-data: file (图片文件), dir (子目录: halls/games/hero/about)
     */
    public function image()
    {
        $uploadConfig = config('upload.');
        $dir          = input('post.dir', 'common');
        $dir          = preg_replace('/[^a-zA-Z0-9_-]/', '', $dir); // 安全过滤

        $file = $this->request->file('file');

        if (!$file) {
            return $this->fail('请选择要上传的文件', 422);
        }

        // 验证 MIME 类型
        $mime = $file->getMime();
        if (!in_array($mime, $uploadConfig['allowed_types'])) {
            return $this->fail('不支持的文件类型，仅允许 JPG/PNG/GIF/WebP', 422);
        }

        // 验证文件大小
        if ($file->getSize() > $uploadConfig['max_size']) {
            return $this->fail('文件大小超过限制（最大 5MB）', 422);
        }

        // 上传目录
        $uploadDir = ROOT_PATH . 'public' . DS . $uploadConfig['upload_path'] . DS . $dir;
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0755, true);
        }

        // 生成唯一文件名
        $ext      = strtolower($file->getExtension());
        $filename = date('Ymd') . '_' . uniqid() . '.' . $ext;

        // 移动文件
        $result = $file->move($uploadDir, $filename);

        if (!$result) {
            return $this->fail('文件上传失败：' . $file->getError(), 500);
        }

        // 返回访问 URL
        $url = rtrim($uploadConfig['base_url'], '/') . '/' . $uploadConfig['upload_path'] . '/' . $dir . '/' . $filename;

        return $this->success([
            'url'      => $url,
            'filename' => $filename,
            'size'     => $file->getSize(),
        ], '上传成功');
    }
}
