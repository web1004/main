$(document).ready(function(){

  //슬라이드-가로방향
  function horizontalSlider(){
    hautoplay = setInterval(function(){
      $(".slide-horizontal-items").animate({left: "-940px"},function(){
        $('.slide-horizontal-items').css({left: 0});  //최종위치
        $('.slide-hitem:first-child').appendTo('.slide-horizontal-items'); // 첫번째를 맨뒤로
      });      
    },4000);
  };
  horizontalSlider();

  //슬라이드-세로방향
  function  verticalSlider(){
    vautoplay = setInterval(function(){
      $(".slide-vertical-items").animate({top: "-430px"},function(){
        $('.slide-vertical-items').css({top: 0});  
        $('.slide-vitem:first-child').appendTo('.slide-vertical-items'); 
      });      
    },4000);
  };
  verticalSlider();


  //마우스 오버시 멈춤
  $('.slide-horizontal').mouseenter(function(){
    clearInterval(hautoplay);
  })
  .mouseleave(function(){
    horizontalSlider();
  });

  $('.slide-vertical').mouseenter(function(){
    clearInterval(vautoplay);
  })
  .mouseleave(function(){
    verticalSlider();
  });

});