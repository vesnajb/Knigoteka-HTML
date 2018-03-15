
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
        slideIndex = 1;
    }    

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
            marginPosition -= 200;
            document.querySelector(".book_slides").style.marginLeft = marginPosition + '%';
        }else{
        marginPosition += 25;
        document.querySelector(".book_slides").style.marginLeft = marginPosition + '%';
        }
    }else{
        marginPosition -= 25;
        document.querySelector(".book_slides").style.marginLeft = marginPosition + '%';
    }
    if(marginPosition > 200){
        marginPosition = 0;
        document.querySelector(".book_slides").style.marginLeft = 0;
    }else if(marginPosition < -200){
        marginPosition = 0;
        document.querySelector(".book_slides").style.marginLeft = 0;
    } 
   };

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

