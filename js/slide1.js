$(document).ready(function () {

  let $simg=$(".slide ul");
  let $simgli=$(".slide ul li");
  let $sbtn=$(".slide_btn ul li");
  let $snext=$(".slide_side_btn .nex");
  let $spre=$(".slide_side_btn .pre");
  let simg_w=$simgli.width(); //이미지의 가로너비
  let simg_n=$simgli.length; 
  let soldidx=0; 
  let sindex=0;
  

  //index번째 비주얼이미지 이동하는 함수생성
  function slideImg(sindex){ 
    targetX=-(sindex*simg_w) //움직이는 거리(너비)
    $simg.stop().animate({left:targetX},600); //위에서 계산한 거리만큼 움직임
    $sbtn.eq(soldidx).removeClass("active"); //기존버튼 비활성화
    $sbtn.eq(sindex).addClass("active"); //선택버튼 활성화
    soldidx=sindex; 
  };

  //자동함수 생성
  function slideAuto(){
    sindex++;
    if(sindex == simg_n){ //simg_n은 이미지개수 5, index는 0,1,2,3,4
      sindex=0;
    }
    slideImg(sindex); 
  };

  auto = setInterval(slideAuto,4000);  

  //하단버튼
  $sbtn.click(function(){
    clearInterval(auto); 
    $(".play").hide();
    $(".stop").show();
    sindex=$(this).index();
    slideImg(sindex);
    auto = setInterval(slideAuto,4000);  
  });

  //좌우버튼
  $spre.click(function(){
    clearInterval(auto); 
    $(".play").hide();
    $(".stop").show();
    sindex--;
    if(sindex<0){ 
      sindex=simg_n-1;
    }
    slideImg(sindex);
    auto = setInterval(slideAuto,4000);
  });

  $snext.click(function(){
    clearInterval(auto);
    $(".play").hide();
    $(".stop").show();
    sindex++;
    if(sindex == simg_n){ 
      sindex=0;
    }
    slideImg(sindex); 
    auto = setInterval(slideAuto,4000);
  });

  //Play,Stop버튼
  $(".play").hide(); //처음에는 Stop버튼을 보이게 하기위해 Play버튼을 숨김
  
  $(".stop").click(function(){
    clearInterval(auto);
    $(".stop").hide();
    $(".play").show();
  });
  $(".play").click(function(){
    auto = setInterval(slideAuto,4000);
    $(".play").hide();
    $(".stop").show();
  });

});