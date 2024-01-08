$(document).ready(function () {

  let $sUpimg=$(".slideUp ul");
  let $sUpimgli=$(".slideUp ul li");
  let $sUpbtn=$(".slideUp_btn ul li");
  let sUpimg_h=$sUpimgli.height(); //이미지의 세로높이
  let sUpimg_n=$sUpimgli.length; 
  let sUpoldidx=0; 
  let sUpindex=0;
  

  //index번째 비주얼이미지 이동하는 함수생성
  function slideUpImg(sUpindex){ 
    targetY=-(sUpindex*sUpimg_h) 
    $sUpimg.stop().animate({top:targetY},600); 
    $sUpbtn.eq(sUpoldidx).removeClass("activeup"); 
    $sUpbtn.eq(sUpindex).addClass("activeup"); 
    sUpoldidx=sUpindex; 
  };

  //자동함수 생성
  function slideUpAuto(){
    sUpindex++;
    if(sUpindex == sUpimg_n){ 
      sUpindex=0;
    }
    slideUpImg(sUpindex); 
  };

  autoUp = setInterval(slideUpAuto,4000);  

  //하단버튼
  $sUpbtn.click(function(){
    clearInterval(autoUp); 
    $(".playup").hide();
    $(".stopup").show();
    sUpindex=$(this).index();
    slideUpImg(sUpindex);
    autoUp = setInterval(slideUpAuto,4000);  
  });


  //Play,Stop버튼
  $(".playup").hide(); 
  
  $(".stopup").click(function(){
    clearInterval(autoUp);
    $(".stopup").hide();
    $(".playup").show();
  });
  $(".playup").click(function(){
    autoUp = setInterval(slideUpAuto,4000);
    $(".playup").hide();
    $(".stopup").show();
  });

});