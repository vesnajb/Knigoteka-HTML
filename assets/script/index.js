var slide = document.querySelector('.slider .slide');
var dot = document.querySelector('.slider .slide .dot');
var slideWidth = 1920;
var marginPosition = 0;

setInterval(function(){
  if(marginPosition > 3840){
    marginPosition -= 1920;
    slide.style.marginLeft = marginPosition + 'px';
  }else{
    marginPosition = 0;
    slide.style.marginLeft = 0;
  }
}, 3000);