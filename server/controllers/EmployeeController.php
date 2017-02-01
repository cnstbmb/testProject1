<?php
/**
 * Created by PhpStorm.
 * User: cnstbmb
 * Date: 29.01.17
 * Time: 15:09
 */

namespace app\controllers;

use yii\rest\ActiveController;

class EmployeeController extends ActiveController
{
    public $modelClass = 'app\models\Employee';

    public function behaviors()
    {
        return
            \yii\helpers\ArrayHelper::merge(parent::behaviors(), [
                'corsFilter' => [
                    'class' => \yii\filters\Cors::className(),
                ],
            ]);
    }
}