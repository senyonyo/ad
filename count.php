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

<html>
  <head>
    <title>お礼</title>
  </head>
  <body>
    <p>ご協力ありがとうございました!</p>
    <p>良い春休みを！</p>
    <p>ご不明な点がございましたら、</br>
       <a href="mailto:t16438as@sfc.keio.ac.jp">t16438as@sfc.keio.ac.jp</a></br>
       <a href="mailto:senyo@sfc.wide.ad.jp">senyo@sfc.wide.ad.jp</a></br>
       <a href="https://twitter.com/varia_unguenta">Twitter:@varia_unguenta</a></br>
       まで、ご連絡ください。
    </p>
  </body>
</html>

