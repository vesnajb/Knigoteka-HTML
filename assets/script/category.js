var n = null;
function display(n, event){
	if(n==0){
		var x = document.querySelectorAll(".category");

		for(i=0; i<x.length; i++){
			x[i].style.display = "block";
			document.querySelector(".bottom").style.display = "block";
			document.getElementById("naslov").innerHTML = "";
		}
		for(i=0; i<12; i++){
			books[i].style.display = "block";
		  	}
		for(j=12; j<books.length; j++){
			books[j].style.display = "none";
		}
	  	btns[0].className = btns[0].className.replace(" active", "");
	  	btns[0].className += " active";
				
	}else if(n==1){
		var y = document.querySelectorAll(".book");
		for(i=0; i<y.length; i++){
			y[i].style.display = "none";
		}
		var x = document.querySelectorAll(".fiction");
		for(i=0; i<x.length; i++){
			x[i].style.display = "block";
			document.querySelector(".bottom").style.display = "none";
			// document.getElementById("naslov").innerHTML = "Белетристика";
		}
	}else if(n==2){
		y = document.querySelectorAll(".book");
		for(i=0; i<y.length; i++){
			y[i].style.display = "none";
		}
		var x = document.querySelectorAll(".strucna");
		for(i=0; i<x.length; i++){
			x[i].style.display = "block";
			document.querySelector(".bottom").style.display = "none";
			// document.getElementById("naslov").innerHTML = "Стручна литература";

		}
		
// 	}else if(n==3){
// 		y = document.querySelectorAll(".book");
// 		for(i=0; i<y.length; i++){
// 			y[i].style.display = "none";
// 		}
// 		var x = document.querySelectorAll(".classic");
// 		for(i=0; i<x.length; i++){
// 			x[i].style.display = "block";
// 		}
// }
}};


var books = document.getElementsByClassName("book");
var btns = document.getElementsByClassName("btn");
var m = 0;
for(i=0; i<12; i++){
	books[i].style.display = "block";
  	}
for(j=12; j<books.length; j++){
	books[j].style.display = "none";
	}
// btns[0].className = btns[0].className.replace(" active", "");
btns[0].className += " active";

function slides(m){
	if(m==0){
		for(i=0; i<12; i++){
			books[i].style.display = "block";
			btns[m].classList.add("active");
		}
		for(j=12; j<books.length; j++){
			books[j].style.display = "none";
		};
		// btns[m].previousElementSibling.classList.remove("active");
		btns[m].nextElementSibling.classList.remove("active");
		btns[2].classList.remove("active");
	} else if(m==1){
		for (i=12; i<24; i++){
			books[i].style.display = "block";
			btns[m].classList.add("active");
	  	}
	  	for(i=0; i<12; i++){
			books[i].style.display = "none";
			btns[m].classList.add("active");
		};
		for(i=24; i<books.length; i++){
			books[i].style.display = "none";
		};
		btns[m].previousElementSibling.classList.remove("active");
		btns[m].nextElementSibling.classList.remove("active");
	}else if(m==2){
		for (i=24; i<books.length; i++){
			books[i].style.display = "block";
			btns[m].classList.add("active");
	  	};
	  	for(i=0; i<24; i++){
			books[i].style.display = "none";
		};
		btns[m].previousElementSibling.classList.remove("active");
		// btns[m].nextElementSibling.classList.remove("active");
		btns[0].classList.remove("active");
	}
	
	// btns[m].className += " active";
};
	
	


// document.querySelector(".category").addEventListener("click", display(0));

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("book_slide");
//   var btns = document.getElementsByClassName("btn");
//   if (n > slides.length) {
//   	slideIndex = 1}    
//   if (n < 1) {
//   	slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < btns.length; i++) {
//       btns[i].className = btns[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   btns[slideIndex-1].className += " active";
// }

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};