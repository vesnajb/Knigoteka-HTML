var li = document.getElementsByTagName("LI");

document.querySelector(".second").addEventListener("click", select());
	function select(){
	for (i=1; i<4; i++){
	li[i].style.display = "block";
	};
	for(i=4; i<li.length; i++){
	li[i].style.display = "none";
	}
}