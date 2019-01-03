var navImage = document.getElementById('splashMenu');
var showMenu = document.getElementById('showMenu');


navImage.addEventListener('click', function(){
	console.log(showMenu.style.display);
	if (showMenu.style.display == "") {
		showMenu.style.display = "block";
	} else if (showMenu.style.display == "block") {
		showMenu.style.display = "";
	}
});