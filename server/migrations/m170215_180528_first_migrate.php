<?php

use yii\db\Schema;
use yii\db\Migration;

class m170215_180528_first_migrate extends Migration
{
    public function up()
    {
        $this->createTable('userlist', [
            'id' => Schema::TYPE_PK . ' NOT NULL AUTO_INCREMENT',
            'name' => Schema::TYPE_CHAR . '(52) NOT NULL',
            'country' => Schema::TYPE_CHAR . '(52) NOT NULL',
            'phone' => Schema::TYPE_BIGINT . ' NOT NULL',
        ], 'ENGINE=InnoDB DEFAULT CHARSET=utf8');

        $this->insert('userlist', [
            'id' => 1,
            'name' => 'Yabarak Yabarak Yabarak ',
            'country' => 'Australia',
            'phone' => 79109991111]
        );
        $this->insert('userlist', [
            'id' => 2,
            'name' => 'Lucas Lucas Lucas ',
            'country' => 'Brazil',
            'phone' => 79206664444]
        );
        $this->insert('userlist', [
            'id' => 3,
            'name' => 'Olivier Olivier Olivier ',
            'country' => 'Canada',
            'phone' => 79107773333]
        );
        $this->insert('userlist', [
            'id' => 4,
            'name' => 'Yu Ming Yu Ming Yu Ming ',
            'country' => 'China',
            'phone' => 79201234567]
        );
        $this->insert('userlist', [
            'id' => 5,
            'name' => 'Walter Walter Walter ',
            'country' => 'Germany',
            'phone' => 79101119999]
        );
        $this->insert('userlist', [
            'id' => 6,
            'name' => 'Jean Jean Jean ',
            'country' => 'France',
            'phone' => 79105555555]
        );
        $this->insert('userlist', [
            'id' => 7,
            'name' => 'Ethan Ethan Ethan ',
            'country' => 'United Kingdom',
            'phone' => 79103337777]
        );
        $this->insert('userlist', [
            'id' => 8,
            'name' => 'Jayesh Jayesh Jayesh ',
            'country' => 'India',
            'phone' => 79202228888]
        );
        $this->insert('userlist', [
            'id' => 9,
            'name' => 'Ivan Ivan Ivan ',
            'country' => 'Russia',
            'phone' => 79207773333]
        );
        $this->insert('userlist', [
            'id' => 10,
            'name' => 'William William William ',
            'country' => 'United States',
            'phone' => 79204446666]
        );
    }

    public function down()
    {
        echo "m170215_180528_first_migrate cannot be reverted.\n";

        return false;
    }

    /*
    // Use safeUp/safeDown to run migration code within a transaction
    public function safeUp()
    {
    }

    public function safeDown()
    {
    }
    */
}
