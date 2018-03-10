
var slideIndex = 0;
showSlides();
var slides,dots;

function currentSlide(index) {
    if (index > slides.length) {
        index = 1}
    else if(index < 1){
        index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
          }
        slides[index-1].style.display = "flex";  
        dots[index-1].className += " active";

   }

function showSlides() {
    var i;
    slides = document.getElementsByClassName("slide");
    dots = document.getElementsByClassName("dot");
    
    for (i = 0; i < 3; i++) {
       slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > 3) {
        slideIndex = 1}    

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "flex";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 3 seconds
}




var marginPosition = 0;
   function changeBook(n){
    if(n<0){
        if(marginPosition==0){
            marginPosition -= 2400;
            document.querySelector(".book_slides").style.marginLeft = marginPosition + 'px';
        }else{
        marginPosition += 480;
        document.querySelector(".book_slides").style.marginLeft = marginPosition + 'px';
        }
    }else{
        marginPosition -= 480;
        document.querySelector(".book_slides").style.marginLeft = marginPosition + 'px';
    }
    if(marginPosition > 2400){
        marginPosition = 0;
        document.querySelector(".book_slides").style.marginLeft = 0;
    }else if(marginPosition < -2400){
        marginPosition = 0;
        document.querySelector(".book_slides").style.marginLeft = 0;
    } 
   };


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

