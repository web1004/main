$(document).ready(function(){
	
	let imgp_w= $(".slidep ul li").width();   //이미지의 가로너비
	let simgp_n= $(".slidep ul li").length;  //이미지의 총개수  
	let soldidxp=0;  //기존이미지
	let sindexp=0;  //선택된 새이미지

  let g_pop=$(".slidep ul li").index();
  $(".page span:nth-child(1)").text(g_pop+1); //index는 0부터 시작하므로 페이지를 표시하기 위해 1을 더함


  //index번째 비주얼이미지 이동하는 함수생성
  function slidepImg(sindexp){

    targetpX=-(sindexp*imgp_w); //움직이는 거리(너비)
    $(".slidep ul").animate({left:targetpX},600);
    soldidxp=sindexp;

  } 


  //다음버튼 클릭
  $(".sidep_btn .nexp").click(function(){

    sindexp++;	
		if(sindexp>=simgp_n-1){ //마지막 이미지까지 가면 마지막 이미지에서 멈춤
      sindexp=4; //0,1,2,3,4 로 마지막이미지          
    }
		slidepImg(sindexp);

    if(g_pop<4){
			g_pop++;
			$(".page span:nth-child(1)").text(g_pop+1); //바뀌는 페이지 표시
		}

  });


  //이전버튼 클릭
  $(".sidep_btn .prep").click(function(){

    sindexp--;	
		if(sindexp<0){ //첫번째 이미지까지 가면 첫번째 이미지에서 멈춤
      sindexp=0; //4,3,2,1,0 으로 첫번째이미지          
    }
		slidepImg(sindexp);

    if(g_pop>0){
			g_pop--;
			$(".page span:nth-child(1)").text(g_pop+1); //바뀌는 페이지 표시
		}

  });

});