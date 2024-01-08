$(document).ready(function () {

  let imgp_w=$(".slidep ul li").width(); 
  let simgp_n= $(".slidep ul li").length;  
  let sindexp=0;

  let g_pop=$(".slidep ul li").index();
  $(".page span:nth-child(1)").text(g_pop+1); //index는 0부터 시작하므로 페이지를 표시하기 위해 1을 더함

  
  //index번째 비주얼이미지 이동하는 함수생성
  function slidepImg(sindexp){
    targetpX=-(sindexp*imgp_w); 
    $(".slidep ul").stop().animate({left:targetpX},600);
  };


  //이전보기
  $(".sidep_btn .prep").click(function(){
    sindexp--;
    if(sindexp<0){ 
      sindexp=0;
    }
    slidepImg(sindexp);

    if(g_pop>0){
			g_pop--;
			$(".page span:nth-child(1)").text(g_pop+1); //바뀌는 페이지 표시
		};

  });

  //다음보기
  $(".sidep_btn .nexp").click(function(){
    sindexp++;
    if(sindexp>=simgp_n-1){ 
      sindexp=4;
    }
    slidepImg(sindexp);

    if(g_pop<simgp_n){
			g_pop++;
			$(".page span:nth-child(1)").text(g_pop+1); //바뀌는 페이지 표시
		};
  });

});