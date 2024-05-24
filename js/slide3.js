$(document).ready(function(){

  let slideWrapper = $('.slider'),
      slides = slideWrapper.find('.slide-list li'),
      currentIdx = 0,
      slideIndicator = slideWrapper.find('.slide-indicator a');

  //슬라이드배치
  //각각 할일이 있고, each-매개변수는 각각의 indx번호를 사용할수 있음
  slides.each(function(idx){
    $(this).css({left:`${idx*100}%`});  
  });

  //Indicator로 슬라이드 작동시키기
  slideIndicator.click(function(e){
    e.preventDefault();
    let idx = $(this).index();
    moveSlide(idx);
  });

  //moveSlid 함수
  function moveSlide(i){
    if(currentIdx === i) return; // 현재 0번인데 새로 클릭한게 0번이면 같으므로 아무것도 실행하지 않고 나감

    let currentSlide = slides.eq(currentIdx);
    let nextSlide = slides.eq(i);

    //다음 슬라이드가 순간  left 100%, animate 0
    //현재 슬라이드는 순간 left 0 animate -100%
    nextSlide.css({left:'100%'}).animate({left:'0%'});
    currentSlide.css({left:'0%'}).animate({left:'-100%'});
    currentIdx = i;

    //모든 Indicator에서 active제거하고, 현재 번호에 맞는 요소에 active추가
    slideIndicator.removeClass('active');
    slideIndicator.eq(currentIdx).addClass('active');
  };

  function autoSlide(){
    slideTimer = setInterval(function(){
      let ni = (currentIdx + 1)%slides.length;
      moveSlide(ni);
    },3000);
  };
  autoSlide();

  //마우스오버시 멈춤
  slideWrapper.mouseenter(function(){
    clearInterval(slideTimer);
  })
  .mouseleave(function(){
    autoSlide();
  });

});