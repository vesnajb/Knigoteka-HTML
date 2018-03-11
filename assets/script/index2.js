var n = null;
function display(n){
	if(n==0){
		x = document.querySelectorAll(".category");
		for(i=0; i<x.length; i++){
			x[i].style.display = "block";
		}
				
	}else if(n==1){
		y = document.querySelectorAll(".book");
		for(i=0; i<y.length; i++){
			y[i].style.display = "none";
		}
		var x = document.querySelectorAll(".fiction");
		for(i=0; i<x.length; i++){
			x[i].style.display = "block";
		}
		
		
	}else if(n==2){
		y = document.querySelectorAll(".book");
		for(i=0; i<y.length; i++){
			y[i].style.display = "none";
		}
		var x = document.querySelectorAll(".strucna");
		for(i=0; i<x.length; i++){
			x[i].style.display = "block";
		}
		
	}else if(n==3){
		y = document.querySelectorAll(".book");
		for(i=0; i<y.length; i++){
			y[i].style.display = "none";
		}
		var x = document.querySelectorAll(".classic");
		for(i=0; i<x.length; i++){
			x[i].style.display = "block";
		}
}
}