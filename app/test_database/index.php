<?php
require("../database.php");

class TestDatabase {

    use Database{
        Database::__construct as public __Database;
    }

    public function __construct(){

        $this->__Database();

        $get = $this->db->prepare("SELECT id FROM test WHERE name = ?");
        $get->execute([
            "ItQuelle"
        ]);
        $row = $get->fetch();

        // echo $row["id"];

    }

}