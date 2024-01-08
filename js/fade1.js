$(document).ready(function(){

  let $img = $(".changeimg ul li");
  let $btn = $(".btn ul li");
  let $lbtn = $(".side_btn .lbtn");
  let $rbtn = $(".side_btn .rbtn");
  let oldidx = 0; //기존이미지
  let idx = 0; //새로 바뀌는 이미지
  let img_n = $img.length; // length메서드 -> 1,2,3...이미지의 개수를 세어서 변수를 저장

  //이미지와 버튼이 바뀌는 함수
  function changeImg(idx){ //매개변수가 있는 함수 ->idx는 선택되는 이미지
    if(oldidx != idx){ //기존의 이미지와 선택된 이미지가 다를때...
      $btn.eq(oldidx).removeClass("active"); //기존 하단버튼 비활성화 ->active 클래스를 삭제
      $btn.eq(idx).addClass("active"); //선택된 하단버튼 활성화- >active 클래스를 추가
      $img.eq(oldidx).stop().fadeOut("300"); //기존 이미지 사라짐
      $img.eq(idx).stop().fadeIn("300"); //새로 바뀌는 이미지 나타남  
    }
    oldidx = idx;  //새로 바뀐 이미지는 이미지는 다시 기존이미지로 저장되어서 Fade Out...
  };

  //자동함수 생성
  function changeAuto(){
    idx++;
    if(idx > img_n-1){ //index는 0부터, length는 1부터 시작하므로 1을 빼주어야 마지막 숫자가 맞음
      idx=0;
    }
    changeImg(idx);
  };

  timer = setInterval(changeAuto,4000); //4초 간격으로 함수를 자동재생

  //하단버튼
  $btn.click(function(){
    clearInterval(timer); //클릭하면 자동화부터 멈추게 함:자동함수 해지->clearInterval(변수)
    idx=$(this).index();
    changeImg(idx);
    timer = setInterval(changeAuto,4000);
  });

  //좌우버튼
  $lbtn.click(function(){
    clearInterval(timer);
    idx--;
    if(idx < 0){ //선택한 이미지가 4,3,2...0 첫번째일때 맨 마지막부터 다시 시작
      idx=img_n-1;
    }
    changeImg(idx);
    timer = setInterval(changeAuto,4000);
  });

  $rbtn.click(function(){
    clearInterval(timer);
    idx++;
    if(idx > img_n-1){ //선택한 이미지가 0,1,2,3...4 마지막번째일때 맨 처음부터 다시 시작
      idx=0;
    }
    changeImg(idx);
    timer = setInterval(changeAuto,4000);
  });

});