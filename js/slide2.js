$(document).ready(function () {

  let $simg=$(".slide ul");
  let $simgli=$(".slide ul li");
  let $snext=$(".slide_side_btn .rbtn");
  let $spre=$(".slide_side_btn .lbtn");
  let simg_w=$simgli.width(); 
  let simg_n=$simgli.length; 
  let soldidx=0; 
  let sindex=0;
  

  //index번째 비주얼이미지 이동하는 함수생성
  function slideImg(sindex){ 
    targetX=-(sindex*simg_w) 
    $simg.stop().animate({left:targetX},600); 
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

  //좌우버튼
  $spre.click(function(){
    clearInterval(auto); 
    sindex--;
    if(sindex<0){ 
      sindex=simg_n-1;
    }
    slideImg(sindex);
    auto = setInterval(slideAuto,4000);
  });

  $snext.click(function(){
    clearInterval(auto);
    sindex++;
    if(sindex == simg_n){ 
      sindex=0;
    }
    slideImg(sindex); 
    auto = setInterval(slideAuto,4000);
  });

});