$(document).ready(function () {

 //$img 선택자 변수이름! $는 선택자라고 구분하기 위해써준것임. 원래는 변수이름에서는 써주지 않아도 됨
  let $img = $(".changeimg ul li");
  let $btn = $(".btn ul li");
  let $lbtn = $(".side_btn .lbtn");
  let $rbtn = $(".side_btn .rbtn");
  let oldidx=0; //기존이미지
  let idx=0; //새로 바뀌는 이미지
  let img_n = $img.length; // .length -> 1,2,3...개수를 세어서 변수를 저장한다.


  //이미지와 버튼이 바뀌는 함수
  function changeImg(idx){ //매개변수가 있는 함수 --> idx는 선택되는 이미지
  
    if(oldidx != idx){ //기존의 이미지와 선택된 이미지가 다를때...
    
      $btn.eq(oldidx).removeClass("active");//기존 하단버튼 비활성화 -> active 클래스를 삭제
      $btn.eq(idx).addClass("active"); //선택된 하단버튼 활성화- > active 클래스를 추가
      $img.eq(oldidx).stop().fadeOut("300");//기존 이미지 사라짐
      $img.eq(idx).stop().fadeIn("300");//기존 이미지 나타남
    }

    oldidx = idx; //선택된 이미지는 다시 기존이미지로 저장되어서 Fade Out...(중요!!->계속 돌릴수 있음.)

  }



  //자동함수 생성
  function changeAuto(){

    idx++;
    //선택한 이미지가 마지막일때 다시 처음 이미지부터 시작
    if(idx>img_n-1){ //index는 0부터 시작하고 length는 1부터 시작하므로 1을 빼주어야 마지막 숫자가 맞음
      idx=0;
    }
    changeImg(idx);


  }

  timer=setInterval(changeAuto,4000); //4초 간격으로 함수를 자동재생(자동 슬라이드 가능.)



  //하단버튼 클릭시.....
  $btn.click(function(){


    clearInterval(timer); //버튼클릭시 자동함수 해지->clearInterval(변수) -> 클릭과 동시에 이것부터 하라!(위에 timer 변수를 만든 이유)
    idx=$(this).index(); //0,1,2....
    changeImg(idx);
    timer=setInterval(changeAuto,4000);//버튼을 클릭 안할대는 다시 함수 자동재생

  });


  //좌우버튼 클릭시.....
  $rbtn.click(function(){

    clearInterval(timer);
    idx++;
    if(idx>img_n-1){ //선택한 이미지가 0,1,2...4 마지막일대 맨처음부터 다시 시작
      idx=0;
    }
    changeImg(idx);
    timer=setInterval(changeAuto,4000);

  });


  $lbtn.click(function(){
    
    clearInterval(timer);
    idx--;
    if(idx<0){ //선택한 이미지가 0,1,2...4 마지막일대 맨처음부터 다시 시작
      idx=img_n-1; //총개수 5-1=4(index 0,1,2,3,4)
    }
    changeImg(idx);
    timer=setInterval(changeAuto,4000);

  });







});
