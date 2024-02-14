$(document).ready(function () {

  // setInterval(콜백함수, 시간);
  // animate(속성값, 콜백함수);

  //슬라이드-가로방향
  hautoplay = setInterval(function(){
    $('.slide-horizontal-items').animate({left: '-940px'}, function(){
      $('.slide-horizontal-items').css({left: 0});
      $('.slide-hitem:first-child').appendTo('.slide-horizontal-items');
    });
  }, 4000);

  //슬라이드-세로방향
  vautoplay = setInterval(function(){
    $('.slide-vertical-items').animate({top: '-430px'}, function(){
      $('.slide-vertical-items').css({top: 0});
      $('.slide-vitem:first-child').appendTo('.slide-vertical-items');
    });
  }, 4000);

});