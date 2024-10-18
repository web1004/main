$(document).ready(function(){

  let fadeContainer = $(".fade"),
      fadeImage = fadeContainer.find(".fade-items ul li"),
      fadePrev = fadeContainer.find(".side-btn .prev"),
      fadeNext = fadeContainer.find(".side-btn .next"),
      oldidx = 0,  //기존이미지 index
      idx=0,  //새로 바꾸는 이미지 index
      fadeCount = fadeImage.length, //length메서드:1,2,3....개수를 세어줌
      interval = 4000;

  //이미지와 버튼이 바뀌는 함수
  function fadeAni(idx){  //매개변수가 있는 함수 ->idx는 선택되는 이미지
    if(oldidx != idx){  //기존의 이미지와 선택된 이미지가 다를때...
      fadeImage.eq(oldidx).stop().fadeOut("300"); //기존 이미지 사라짐
      fadeImage.eq(idx).stop().fadeIn("300"); //새로 바뀌는 이미지 나타남  
    };
    oldidx = idx; //새로 바뀐 이미지는 이미지는 다시 기존이미지로 저장되어서 Fade Out...
  };

  //자동Fade함수
  //일정시간마다 할일: setInterval(함수명,시간) / clearInterval(변수) 
  function fadeAuto(){
    fadeTimer = setInterval(function(){
    //현재가 (0+1)%5=1,(1+1)%5=2,(2+1)%5=3, (3+1)%5=4, (4+1)%5=0  
    idx = (oldidx + 1) % fadeCount;
    fadeAni(idx);  
    },interval);
  };
  fadeAuto();

  //좌우버튼
  fadePrev.click(function(){
    idx--;
    if(idx < 0){ //선택한 이미지가 4,3,2,1,0 첫번째일때 맨 마지막부터 다시 시작
      idx=fadeCount-1;  //fadeCount는 length로 센 개수 5에서 1을 빼야 마지막 index 4가 됨
    }
    fadeAni(idx);
  });
  fadeNext.click(function(){
    idx++;
    if(idx > fadeCount-1){ //선택한 이미지가 0,1,2,3,4 마지막번째일때 맨 처음부터 다시 시작
      idx=0;  
    }
    fadeAni(idx);
  });

  //전체영역에 마우스를 올리면 자동함수 멈추고 다시 마우스가 나오면 자동함수 실행
  fadeContainer.mouseenter(function(){
    clearInterval(fadeTimer);
  })
  .mouseleave(function(){
    fadeAuto();
  });

});