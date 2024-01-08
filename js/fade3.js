$(document).ready(function(){

  let $img = $(".changeimg ul li");
  let $text = $(".changeimg ul li .des");
  let $lbtn = $(".side_btn .lbtn");
  let $rbtn = $(".side_btn .rbtn");
  let oldImg=0;  
  let newImg=0; 
  let oldText=0;  
  let newText=0;
  let count = $img.length;
  
  //이미지 전환효과 함수
  function changeImg(newImg){ 
    if(oldImg != newImg){
      $img.eq(oldImg).removeClass("imgVisible");
			$img.eq(newImg).addClass("imgVisible"); 
    };
    oldImg = newImg;
  };

  //텍스스 전환효과 함수
  function changeText(newText){ 
    if(oldText != newText){
      $text.eq(oldText).removeClass("textVisible");
      $text.eq(newText).addClass("textVisible"); 
    };
    oldText = newText;
  };


  //자동함수 생성
  function autoImg(){
    newImg++;
    if(newImg>count-1){ 
      newImg=0;
    }
    changeImg(newImg);
  };

  function autoText(){
    newText++;
    if(newText>count-1){ 
      newText=0;
		}
		changeText(newText);
  }

  timer1=setInterval(autoImg,4000); 
  timer2=setInterval(autoText,4000); 


  //좌우버튼
  $rbtn.click(function(){
    clearInterval(timer1);
    clearInterval(timer2);

    newImg++;
    if(newImg>count-1){ 
      newImg=0;
    }
    changeImg(newImg);

    newText++;
    if(newText>count-1){ 
      newText=0;
		}
		changeText(newText);

    timer1=setInterval(autoImg,4000); 
    timer2=setInterval(autoText,4000); 
  });

  $lbtn.click(function(){
    clearInterval(timer1);
    clearInterval(timer2);

    newImg--;
    if(newImg<0){ 
      newImg=count-1;
    }
    changeImg(newImg);

    newText--;
    if(newText<0){ 
      newText=count-1;
		}
		changeText(newText);

    timer1=setInterval(autoImg,4000); 
    timer2=setInterval(autoText,4000); 
  });

});