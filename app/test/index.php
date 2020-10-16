<?php

class Test{

    public function __construct(){

        if (!file_exists("test.json")) {
            $cryptoCompareGet = curl_init();
            curl_setopt($cryptoCompareGet, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($cryptoCompareGet, CURLOPT_URL, "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=50&tsym=EUR");
            curl_setopt($cryptoCompareGet, CURLOPT_USERAGENT, "ItQuelle Bot");
            $row = curl_exec($cryptoCompareGet);
            curl_close($cryptoCompareGet);
            file_put_contents("test.json", $row, LOCK_EX);
        }else{
            $row = file_get_contents("test.json");
        }

        $ArrayList = [];

        $json = json_decode($row, 1);

        foreach($json["Data"] as $key => $value){
            $ArrayList[$key] = [
                "position"  => $key+1,
                "name"      => $value["CoinInfo"]["FullName"],
                "symbol"    => $value["CoinInfo"]["Name"],
                "url"       => "https://www.cryptocompare.com" . $value["CoinInfo"]["Url"],
                "icon"      => "https://www.cryptocompare.com" . $value["CoinInfo"]["ImageUrl"],
                "price"     => number_format($value["RAW"]["EUR"]["PRICE"], 2, ",", "."),
                "supply"    => number_format($value["RAW"]["EUR"]["SUPPLY"], 2, ",", "."),
                "mktcap"    => number_format($value["RAW"]["EUR"]["MKTCAP"], 0, ",", "."),
                "volume"    => number_format($value["RAW"]["EUR"]["TOTALVOLUME24HTO"], 0, ",", "."),
                "change"    => number_format($value["RAW"]["EUR"]["CHANGEPCT24HOUR"], 2, ",", "."),
            ];
        }

        echo json_encode(
            $ArrayList,
            JSON_UNESCAPED_UNICODE
        );

    }

}

$initialize = new Test();