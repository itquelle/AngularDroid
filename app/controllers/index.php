<?php
#error_reporting(E_ALL);
#ini_set("display_errors", 1);

class Controllers{

    public function __construct(){

        $ControllerJS = "";

        $find = glob("../../java/controller/*.js", GLOB_BRACE);

        foreach($find as $key => $value){
            if(strpos($value, "index.js") === false) {
                $ControllerJS .= file_get_contents($value);
            }
        }

        file_put_contents("../../java/controller/index.js", $ControllerJS, LOCK_EX);

    }

}

$controllers = new Controllers();

?>
<script>
    setTimeout(function (){
        location.reload();
    }, 5000)
</script>