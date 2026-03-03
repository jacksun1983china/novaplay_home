<?php
namespace app\common\model;

use think\Model;

class Admin extends Model
{
    protected $table = 'np_admin';

    protected $hidden = ['password'];

    protected $autoWriteTimestamp = 'int';
}
