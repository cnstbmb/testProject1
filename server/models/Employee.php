<?php
/**
 * Created by PhpStorm.
 * User: cnstbmb
 * Date: 29.01.17
 * Time: 12:50
 */

namespace app\models;
use Yii;


class Employee extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'userlist';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'country', 'phone'], 'required'],
            [['id'], 'integer'],
            [['name'], 'string', 'max' => 52],
            [['country'], 'string', 'max' => 52],
            [['phone'], 'integer']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'ФИО',
            'country' => 'Страна',
            'phone' => 'Телефон',
        ];
    }
}