$(document).ready(function () {

  let $simg=$(".slide ul");
  let $simgli=$(".slide ul li");
  let $sbtn=$(".slide_btn ul li");
  let $snext=$(".slide_side_btn .rbtn");
  let $spre=$(".slide_side_btn .lbtn");
  let simg_w=$simgli.width(); //이미지의 가로너비
  let simg_n=$simgli.length; //이미지의 총개수
  let soldidx=0; //기존이미지
  let sindex=0; //선택된 새이미지


  //index번째 비주얼이미지 이동하는 함수생성
  function slideImg(sindex){

    targetX=-(sindex*simg_w) //움직이는 거리(너비)

    $simg.stop(true,true).animate({left:targetX},600); //위에서 계산한 거리만큼 움직임
    $sbtn.eq(soldidx).removeClass("active"); //기존버튼 비활성화
    $sbtn.eq(sindex).addClass("active"); //선택버튼 활성화
    soldidx=sindex;

  };


  //슬라이드 자동함수 생성
  function slideAuto(){
  
    sindex++;
    if(sindex==simg_n){ //simg_n은 이미지개수 5, index는 0,1,2,3,4
      sindex=0;
    }
    slideImg(sindex);
  
  };

  auto=setInterval(slideAuto,4000);

  //좌우버튼.....
  $snext.click(function(){

    clearInterval(auto);
    $(".play").hide();
    $(".stop").show();
    sindex++;
    if(sindex>simg_n-1){ //마지막 이미지까지 오면 다시 첫번째 이미지부터 다시...
      sindex=0;
    }
    slideImg(sindex);
    auto=setInterval(slideAuto,4000);

  });

  $spre.click(function(){

    clearInterval(auto);
    $(".play").hide();
    $(".stop").show();
    sindex--;
    if(sindex<0){ //첫번재 이미지까지 오면 다시 맨 마지막 이미지부터 다시...
      sindex=simg_n-1; //총개수 5(이미지 5컷)에서 1을 뺀 4 -> index=4(0,1,2,3,4)
    }
    slideImg(sindex);
    auto=setInterval(slideAuto,4000);

  });

});