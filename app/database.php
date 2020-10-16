<?php
/**
 * @copyright ItQuelle
 */

trait Database{

    /**
     * @var PDO
     */

    var $db;
    var $options = [
        "host" => "localhost",
        "name" => "db_name",
        "user" => "db_user",
        "pass" => "db_pass"
    ];

    public function __construct(){

        try{

            $this->db = new PDO("mysql:host=".$this->options["host"].";dbname=".$this->options["name"].";charset=utf8", $this->options["user"], $this->options["pass"], [
                PDO::ATTR_EMULATE_PREPARES => true,
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
            ]);

        }catch(PDOException $e){
            die(
                $e->getMessage()
            );
        }

    }

    public function __destruct()
    {
        // TODO: Implement __destruct() method.
        $this->db = null;
    }

    // Set JSON
    public function setJSON(){

        $interfaceListener = [];
        $tableList = [];

        $get = $this->db->query("SHOW TABLES;")->fetchAll();
        foreach($get as $value){
            $tableList[$value["Tables_in_fonds"]] = [];
        }

        // Table Listener
        foreach($tableList as $key => $value){

            $getColumn = $this->db->query("SHOW COLUMNS FROM $key")->fetchAll();
            foreach($getColumn as $item){
                $tableList[$key][$item["Field"]] = "";
                array_push($interfaceListener, $item["Field"] . ":string;");
            }

        }

        echo join("\n", array_unique($interfaceListener));


        die;
    }

}

#@ Super Functions
function _Replace($e){ return str_replace(array(chr(0x27), chr(0xbf)), array("", ""), $e); }
function _Get($e){ return (!empty($_GET[$e])) ? _Replace(strip_tags(htmlspecialchars(addslashes($_GET[$e])))) : ""; }
function _Post($e){ return (!empty($_POST[$e])) ? _Replace(strip_tags(htmlspecialchars(addslashes($_POST[$e])))) : ""; }
function _Session($e){ return (!empty($_SESSION[$e])) ? _Replace(strip_tags(htmlspecialchars(addslashes($_SESSION[$e])))) : ""; }
function _Cookie($e){ return (!empty($_COOKIE[$e])) ? _Replace(strip_tags(htmlspecialchars(addslashes($_COOKIE[$e])))) : ""; }
function _Price($val){ $val = str_replace(",",".",$val); $val = preg_replace('/\.(?=.*\.)/', '', $val); return floatval($val); }