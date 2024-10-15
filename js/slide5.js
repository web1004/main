/* 
(1)변수지정
(2)슬라이드 배치하기
(3)인디케이터 생성하기

(4)인디케이터로 슬라이드 이동하기
(5)좌우버튼으로 슬라이드 이동하기
(6)hasClass(), index()

(7)인디케이터 활성화 표시하기
(8)자동으로 움직이는 슬라이드 구현하기
*/

$(document).ready(function(){

  let container = $('.slideshow'),
      slideGroup = container.find('.slideshow-slides'),
      slides = slideGroup.find('a'),
      nav = container.find('.slideshow-nav'),
      indicator = container.find('.slideshow-indicator'),
      slideCount = slides.length,
      indicatorHtml = '',
      currentIndex = 0,
      duration = 500,
      easing = 'easeInOutExpo',
      interval = 3500,
      timer;


  //슬라이드를 가로로 배열
  //slides 마다 할일 : left 0%, 100%, 200%, 300%
  console.log(slides);
  
  slides.each(function(i){
    let newLeft = i * 100 + '%';
    $(this).css({left: newLeft});  //요소검사확인
    //<a href="">1</a>
    //let i=2; i=i+2; i+=2
    //indicatorHtml = indicatorHtml + ??
    //indicatorHtml += ??
    indicatorHtml += '<a href="">' + (i+1) + '</a>';
    console.log(indicatorHtml);
  });  //slides.each

  //A.text(B)  A요소의 B내용을 글씨형태로 추가또는 교체
  //A.html(B)  A요소의 B내용을 html형태로 추가또는 교체

  //indicator.text(indicatorHtml);
  indicator.html(indicatorHtml);



  //슬라이드이동함수
  function goToSlide(index){

    //i=0 left:0%, i=1 left:-100%, i=2 left:-200% , i=3 left:-300% 
    slideGroup.animate({left:-100*index + '%'}, duration, easing);
    currentIndex = index;
    //console.log(currentIndex);
    updateNav();  //처음인지, 마지막인지 검사 + active  

  };

  function updateNav(){

    let navPrev = nav.find('.prev');
    let navNext = nav.find('.next');

    //처음 currentIndex=0, 이전버튼이 안보이도록
    if(currentIndex == 0){
      navPrev.addClass('disabled');
    }else{
      navPrev.removeClass('disabled');
    }

    //마지막 currentIndex=3, 다음버튼이 안보이도록
    if(currentIndex == slideCount-1){
      navNext.addClass('disabled');
    }else{
      navNext.removeClass('disabled');
    }

    //indicator active(모든 요소에서 active빼고, 원하는 요소에만 axtive추가)
    /*  indicator.find('a').removeClass('active');
    //eq(숫자)
    indicator.find('a').eq(currentIndex).addClass('active'); */

    //indicator active(원하는 요소에만 active추가, 나머지들에서 active빼기)
    //형제자매는 siblings
    indicator.find('a').eq(currentIndex).addClass('active').siblings().removeClass('active');
    
  };

  //goToSlide(2); 

  //인디케이터로 이동하기
  indicator.find('a').click(function(e){
    e.preventDefault();
    let idx = $(this).index();
    //console.log(idx);
    goToSlide(idx);
  });

  //좌우버튼으로 이동하기
  //다음버튼클릭하면 currentIndex+1 -> goToSlide(?) 로 넘겨줌
  //이전버튼클릭하면 currentIndex-1 -> goToSlide(?) 로 넘겨줌

  /*  nav.find('.prev').click(function(e){
    e.preventDefault();
    //let i = currentIndex - 1;
    goToSlide(currentIndex - 1);
  });

  nav.find('.next').click(function(e){
    e.preventDefault();
    //let i = currentIndex + 1;
    goToSlide(currentIndex + 1);
  }); */


  nav.find('a').click(function(e){
    e.preventDefault();
    if($(this).hasClass('prev')){
      goToSlide(currentIndex - 1);
    }else{
      goToSlide(currentIndex + 1);
    }
  });

  updateNav(); 

  //자동슬라이드 함수
  function startTimer(){
    //일정시간마다 할일 
    //setInterval(할일, 시간) / clearInterval(이름)
    //할일(함수) function(){실제함수} 

    //timer = setInterval(할일, interval);
    timer = setInterval(function(){
      //nextIndex  c0 n1, c1 n2, .....c3 n0
      //(0+1)%4=1, ...(3+1)%4=0
      let nextIndex = (currentIndex + 1) % slideCount;
      goToSlide(nextIndex);
    }, interval);
  };

  startTimer();

  function stopTimer(){
    clearInterval(timer);
  };

  container.mouseenter(function(){
    stopTimer();
  })
  .mouseleave(function(){
    startTimer();
  });

});