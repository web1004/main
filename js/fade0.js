$(document).ready(function(){

  // setInterval(콜백함수, 시간);
  $(".fade-item:gt(0)").hide();
  setInterval(function(){
    $(".fade-item:first-child").fadeOut(500).next().fadeIn(500);
    $(".fade-item:first-child").appendTo('.fade');
  }, 3500);

});