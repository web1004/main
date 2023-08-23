$(document).ready(function () {

  let $sUpimg=$(".slideUp ul");
  let $sUpimgli=$(".slideUp ul li");
  let $sUpbtn=$(".slideUp_btn ul li");
  let sUpimg_h=$sUpimgli.height(); //이미지의 세로높이
  let sUpimg_n=$sUpimgli.length; //이미지의 총개수
  let sUpoldidx=0; //기존이미지
  let sUpindex=0; //선택된 새이미지


  //index번째 비주얼이미지 위로 이동하는 함수생성
  function slideUpImg(sUpindex){ 

    targetY=-(sUpindex*sUpimg_h) //움직이는 거리(높이)

    $sUpimg.stop().animate({top:targetY},600); //위에서 계산한 거리만큼 움직임
    $sUpbtn.eq(sUpoldidx).removeClass("activeup"); //기존버튼 비활성화
    $sUpbtn.eq(sUpindex).addClass("activeup"); //선택버튼 활성화
    sUpoldidx=sUpindex;
    
  };

  //자동함수 생성 
  function slideUpAuto(){

    sUpindex++;
    if(sUpindex == sUpimg_n){ //simg_n은 이미지개수 5, index는 0,1,2,3,4
      sUpindex=0;
    }
    slideUpImg(sUpindex); //함수호출

  }
  autoUp = setInterval(slideUpAuto,4000);  

  //우측에 있는 버튼
  $sUpbtn.click(function(){

    clearInterval(autoUp); 
    $(".playup").hide();
    $(".stopup").show();
    sUpindex=$(this).index();
    slideUpImg(sUpindex);
    autoUp = setInterval(slideUpAuto,4000);

  });

  //Play,Stop.....
  $(".playup").hide(); //처음에는 Stop버튼을 보이게 하기위해 Play버튼을 숨김

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