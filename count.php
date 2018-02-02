<?php
  $obj["session"] = $_COOKIE["session"];
  $obj["word"] = $_GET["word"];
  $obj["position"] =$_GET["position"];
  $obj["ok"]=$_GET["ok"];
  $obj["ip"]=$_SERVER["REMOTE_ADDR"];
  $obj["time"]=time();
  $json=json_encode($obj);
  file_put_contents("save/log.jsons", $json+"\n", FILE_APPEND );
?>
