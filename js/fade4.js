$(document).ready(function(){

  let $img = $(".main-visual ul li .main-image"),
      $text = $(".main-visual ul li .main-text"),
      $btn = $(".main-btn a"),
      oldImg=0,
      newImg=0,
      oldText=0,
      newText=0,
      count = $img.length;

  //이미지 전환효과 함수
  function changeImg(newImg){ 
    if(oldImg != newImg){
      $btn.eq(oldImg).removeClass("active");
      $btn.eq(newImg).addClass("active");
      $img.eq(oldImg).removeClass("imgVisible");
      $img.eq(newImg).addClass("imgVisible");
    }
    oldImg = newImg;
  };

  //텍스트 전환효과 함수
  function changeText(newText){ 
    if(oldText != newText){
      $btn.eq(oldText).removeClass("active");
      $btn.eq(newText).addClass("active");
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
  
  //인디케이터
  $btn.click(function(){
    newImg=$(this).index();
    changeImg(newImg);

    newText=$(this).index();
    changeText(newText);
  });

  //마우스오버 멈춤
  $("main").mouseenter(function(){
    clearInterval(timerImg);
    clearInterval(timerText);
  })
  .mouseleave(function(){
    timerImg = setInterval(autoImg,4000); 
    timerText = setInterval(autoText,4000);
  });

});