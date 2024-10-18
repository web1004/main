$(document).ready(function(){

  let $img = $(".changeimg ul li"),
      $text = $(".changeimg ul li .des"),
      $lbtn = $(".side_btn .lbtn"),
      $rbtn = $(".side_btn .rbtn"),
      oldImg=0,
      newImg=0,
      oldText=0,
      newText=0,
      count = $img.length;

  //이미지 전환효과 함수
  function changeImg(newImg){ 
    if(oldImg != newImg){
      $img.eq(oldImg).removeClass("imgVisible");
      $img.eq(newImg).addClass("imgVisible");
    }
    oldImg = newImg;
  };

  //텍스트 전환효과 함수
  function changeText(newText){ 
    if(oldText != newText){
      $text.eq(oldText).removeClass("textVisible");
      $text.eq(newText).addClass("textVisible");
    };
    oldText = newText;
  };

  //자동함수 생성
  function autoImg(){
    newImg++;
    if(newImg>count-1){ 
      newImg=0;
    }
    changeImg(newImg);
  };
  function autoText(){
    newText++;
    if(newText>count-1){ 
      newText=0;
    }
    changeText(newText);
  };
  timerImg = setInterval(autoImg,4000); 
  timerText = setInterval(autoText,4000);
  
  //좌우버튼
  $lbtn.click(function(){
    newImg--;
    if(newImg < 0){ 
      newImg=count-1;  
    }
    changeImg(newImg);

    newText--;
    if(newText<0){ 
      newText=count-1;
    }
    changeText(newText);
  });
  $rbtn.click(function(){
    newImg++;
    if(newImg>count-1){ 
      newImg=0;
    }
    changeImg(newImg);

    newText++;
    if(newText>count-1){ 
      newText=0;
    }
    changeText(newText);
  });

  //마우스오버 멈춤
  $(".fadeShow").mouseenter(function(){
    clearInterval(timerImg);
    clearInterval(timerText);
  })
  .mouseleave(function(){
    timerImg = setInterval(autoImg,4000); 
    timerText = setInterval(autoText,4000);
  });

});