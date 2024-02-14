$(document).ready(function () {

  // 슬라이더 너비 높이, 슬라이드 개수, 전체 슬라이드 너비
  let slideWidth = $('#slider').width();
  let slideHeight = $('#slider').height();
  let slideCount = $('.slide-item').length;
  let slideItemsWidth = slideWidth * slideCount;
  let index = 0;
  let currentIndex = 0;

  // 슬라이드의 기본 위치
  $('.slide-item').css({'width': slideWidth, 'height': slideHeight});
  $('.slide-items').css({'width': slideItemsWidth, 'height': slideHeight});
  $('.slide-item:last-child').prependTo($('.slide-items'));
  $('.slide-items').css({'margin-left': -slideWidth});

  // Next Function(오른쪽버튼을 클릭하면 왼쪽방향으로 움직임)
  function sldeLeft(){
    $('.slide-items').stop().animate({'left': -slideWidth}, 500, function(){
      $('.slide-items').css({'left': 0});
      $('.slide-item:first-child').appendTo('.slide-items');
    });
  };

  // Prev Function(왼쪽버튼을 클릭하면 오른쪽방향으로 움직임)
  function slideRight(){
    $('.slide-items').stop().animate({left: slideWidth}, 500, function(){
      $('.slide-items').css({'left': 0});
      $('.slide-item:last-child').prependTo('.slide-items');
    });
  };

  slideAuto = setInterval(sldeLeft, 4000);

  //해당 인덱스의 슬라이드로 이동하는 함수
  function goToSlide(sindex){
    smove=-(slideWidth*sindex);
    $(".slide-items").animate({"left":smove});

  };

  // 활성화된 인디케이터를 업데이트하는 함수
  function updateActiveIndicator(sindex){

  };
  
  
  // Next Prev Button
  $('.next').click(function(e){
    e.preventDefault();
    sldeLeft();  
  });

  $('.prev').click(function(e){
    e.preventDefault();
    slideRight();
  });

  //Indicator Button
  $('.indicator-button li').click(function() {
    let sindex = $(this).index(); // 현재 클릭된 버튼의 인덱스를 가져옵니다.
    goToSlide(sindex); // 해당 인덱스의 슬라이드로 이동하는 함수를 호출합니다.
    updateActiveIndicator(sindex); // 활성화된 인디케이터를 업데이트하는 함수를 호출합니다.
  });
  
  // Autoplay Control
  $('#toggle').click(function(){
    if($(this).is(':checked')) {
      clearInterval(slideAuto);
    }
    else {
      slideAuto = setInterval(sldeLeft, 4000);
    }
  });

});