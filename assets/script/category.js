var n = null;
function display(n){
switch(n){
		case 0:
				var x = document.querySelectorAll(".category");
				for(i=0; i<x.length; i++){
					x[i].style.display = "block";
					document.querySelector(".bottom").style.display = "block";
				};
				for(i=0; i<12; i++){
					books[i].style.display = "block";
				  	};
				for(j=12; j<books.length; j++){
					books[j].style.display = "none";
				};	
			break;
		case 1:
				var y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".fiction");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 2:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".strucna");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 3:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".classic");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 4:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".psiho");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 5:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".poetry");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 6:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".bussines");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 7:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".dictionary");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 8:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".atlas");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 9:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".kids");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 10:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".young");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 11:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".school");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 12:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".tourism");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 13:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".food");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 14:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".health ");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 15:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".maps");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 16:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".religion");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 17:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".souvenir");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 18:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".coloring");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 19:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".magazines");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 20:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".strips");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 21:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".notebooks");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 22:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".games");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 23:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".esothery");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 24:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".life");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 25:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".packs");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
		case 26:
				y = document.querySelectorAll(".book");
			for(i=0; i<y.length; i++){
				y[i].style.display = "none";
			}
			var x = document.querySelectorAll(".over18");
			for(i=0; i<x.length; i++){
				x[i].style.display = "block";
				document.querySelector(".bottom").style.display = "none";
				}
			break;
			
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
	
};


function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

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

