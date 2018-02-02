document.cookie.split("; ").map(it =>(it.split("="))).filter(it => it[0]=="session"?true:false).length ? 0 : (document.cookie="session="+Math.random())

var rand =[];
var kind =[ 'bitcoin','love','car'];
var data= { 
  1:{ 
    1:[8,9], 
    2:[7,8], 
    3:[1,2] 
  }, 
  2:{ 
    1:[1,2,3], 
    2:[7,8,9], 
    3:[4,5,6] 
  }, 
  3:{ 
    1:[4,5.6], 
    2:[4,5], 
    3:[8,9]
  }
}

function start(){
  i=1
  while (i<4){
    rand.push(Math.floor(Math.random()*3+1));
    i++;
  }
  console.log(rand);

  //document.getElementById('2').innerHTML = "<img src=" + kind[0] + 1 + "-00" + 9 +".jpg>";
 
  for(j=1;j<4;j++){
    word = kind[j-1];　//画像の種類
    for(k=1;k<10;k++){
     // document.getElementById(j).innerHTML += "<img src=\""+ word + rand[j-1] + "/" + word + rand[j-1] + "-00" + k +".jpg\">";
      if(data[j][rand[j-1]].indexOf(k)+1){ 
        //ボタンが有るところのリンク処理
        document.getElementById(j).innerHTML += "<a href=\"https://re75.info/senyo/ad/count.php?word=j-1&ok=1&position=[data[j-1][rand-1]]\"><img src=\""+ word + rand[j-1] + "/" + word + rand[j-1] + "-00" + k +".jpg\"></a>";
      }else{ 
        //ボタンが無いところのリンク処理
        document.getElementById(j).innerHTML += "<a href=\"https://re75.info/senyo/ad/count.php?word=j-1&ok=0&position=[data[j-1][rand-1]]\"><img src=\""+ word + rand[j-1] + "/" + word + rand[j-1] + "-00" + k +".jpg\"></a>";
      }
      if(k == 3 || k == 6){
        document.getElementById(j).innerHTML += "<br>";
      }

    }
  }  
};
