$(document).ready(function(){

  // 슬라이더 너비 높이, 슬라이드 개수, 전체 슬라이드 너비
  let slideContainer = $('.slide'),
      slideWidth = slideContainer.width(),
      slideHeight = slideContainer.height(),
      slideCount = $('.slide-items li').length,
      slideItemsWidth = slideWidth * slideCount,
      slidePrev = slideContainer.find(".control .prev"),
      slideNext = slideContainer.find(".control .next"),
      control = $(".control .play-stop"),
      playBtn = control.find(".play"),
      stopBtn = control.find(".stop");

  let pageNumber = $('.slide-item').index();
  $(".page span:nth-child(1)").text(pageNumber+1); //index는 0부터 시작하므로 페이지를 표시하기 위해 1을 더함
    
  // 슬라이드의 기본 위치
  $('.slide-item').css({'width': slideWidth, 'height': slideHeight});  //각 li의 가로세로크기
  $('.slide-items').css({'width': slideItemsWidth, 'height': slideHeight});  //ul의 총 가로세로크기
  $('.slide-item:last-child').prependTo($('.slide-items')); //마지막li를 ul의 맨앞으로 위치
  $('.slide-items').css({'margin-left': -slideWidth}); //ul의 처음위치

  // Next Function(오른쪽버튼을 클릭하면 왼쪽방향으로 움직임)
  function slideLeft(){
    $('.slide-items').stop().animate({'left': -slideWidth}, 500, function(){
      $('.slide-items').css({'left': 0}); //최종위치
      $('.slide-item:first-child').appendTo('.slide-items'); //첫번째는 맨마지막으로 이동

      pageNumber++;
      if(pageNumber > slideCount-1){ 
        pageNumber=0;
      }
      $(".page span:nth-child(1)").text(pageNumber+1); 
    });
  };

  // Prev Function(왼쪽버튼을 클릭하면 오른쪽방향으로 움직임)
  function slideRight(){
    $('.slide-items').stop().animate({left: slideWidth}, 500, function(){
      $('.slide-items').css({'left': 0});
      $('.slide-item:last-child').prependTo('.slide-items');  //마지막번째는 맨처음으로 이동
    });

    pageNumber--;
    if(pageNumber < 0){ 
      pageNumber=slideCount-1;
    }
    $(".page span:nth-child(1)").text(pageNumber+1); 
  };

  slideAuto = setInterval(slideLeft, 4000);

  // Next Prev Button
  slidePrev.click(function(e){
    e.preventDefault();
    slideRight(); 
  });

  slideNext.click(function(e){
    e.preventDefault();
    slideLeft();  
  });

  //play-stop
  playBtn.hide();
  let check = true;

  control.click(function(){
    if(check){
      clearInterval(slideAuto);
      playBtn.show();
      stopBtn.hide();
      check = false;
    }else{
      slideAuto = setInterval(slideLeft, 4000);
      playBtn.hide();
      stopBtn.show();
      check = true;
    };
  });

});