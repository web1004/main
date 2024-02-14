$(document).ready(function(){

  /* menu_____________________________________________ */
  $(".sub").hide();

  $(".slide").hover(function(){
    $(this).find(".sub").stop().slideDown(500).css({"opacity":"1"});
    $(".sub_box").stop().slideDown(500);
  },function(){
    $(this).find(".sub").stop().slideUp(500).css({"opacity":"0"});
    $(".sub_box").stop().slideUp(500);
  });


  /* visual_______________________________________________________ */

  let $img = $(".main_visual ul li .main_img");
  let $text = $(".main_visual ul li .main_txt");
  let $btn = $(".m_btn ul li");
  let oldImg = 0;
  let newImg = 0;
  let oldText = 0;
  let newText = 0;
  let count = $img.length;

  //이미지와 버튼이 바뀌는 함수
  function changeImg(newImg){
    if(oldImg !=newImg){
      $btn.eq(oldImg).removeClass("active");
      $btn.eq(newImg).addClass("active");
      $img.eq(oldImg).removeClass("imgVisible");
      $img.eq(newImg).addClass("imgVisible");
    };
    oldImg=newImg;
  }

  //텍스트 전환 효과 함수
  function changeText(newText){
    if(oldText !=newText){
      $btn.eq(oldText).removeClass("active");
      $btn.eq(newText).addClass("active");
      $text.eq(oldText).removeClass("textVisible");
      $text.eq(newText).addClass("textVisible");
    };
      oldText=newText;
  }

  //자동함수 생성
  function autoImg(){
    newImg++;
    if(newImg>count-1){
      newImg=0;
    }
    changeImg(newImg);
  }
  
  function autoText(){
    newText++;
    if(newText>count-1){
      newText=0;
    }
    changeText(newText);

  };

  timer1=setInterval(autoImg,4000);
  timer2=setInterval(autoText,4000);

  //인디케이터

  $btn.click(function(){
    clearInterval(timer1);
    clearInterval(timer2);

    newImg=$(this).index();
    changeImg(newImg);

    newText=$(this).index();
    changeText(newText);
    
    timer1 = setInterval(changeAuto,4000);
    timer2 = setInterval(changeAuto,4000);
  });

});