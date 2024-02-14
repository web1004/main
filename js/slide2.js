$(document).ready(function () {

  // 슬라이더 너비 높이, 슬라이드 개수, 전체 슬라이드 너비
  let slideWidth = $('#slider').width();
  let slideHeight = $('#slider').height();
  let slideCount = $('.slide-item').length;
  let slideItemsWidth = slideWidth * slideCount;

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
  }

  // Prev Function(왼쪽버튼을 클릭하면 오른쪽방향으로 움직임)
  function slideRight(){
    $('.slide-items').stop().animate({left: slideWidth}, 500, function(){
      $('.slide-items').css({'left': 0});
      $('.slide-item:last-child').prependTo('.slide-items');
    });
  }

  slideAuto = setInterval(sldeLeft, 4000);
  
  // Next Prev Button
  $('.next').click(function(e){
    e.preventDefault();
    sldeLeft();  
  });

  $('.prev').click(function(e){
    e.preventDefault();
    slideRight();
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



