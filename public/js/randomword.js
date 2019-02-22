function getRandomQoute() {
	var qoutes = [
		"Website Development",
		"App Development",
		"Digital Marketing",
		"Social Media Marketing",
		"Advertising",
		"Content Strategy",
		"Data Analytics",
		"Brand Strategy",
		"Business Consulting",
		"Logo Design",
		"Email Marketing",
		"Marketing Strategy",
		"SEO",
		"Content Marketing",
		"Virtual Training",
		"Ecommerce"
	];
	var randomNumber = Math.floor(Math.random() * (qoutes.length));
	var random = qoutes[randomNumber];

	document.getElementById('randomWord').innerHTML = qoutes[randomNumber];
}

function getRandomColor(){
	var colors = [
		"F03434", // red
		"D91E18", // red
		"F22613", // red
		"CF000F", // red
		"013243",
		"E4F1FE",
		"1F3A93",
		"019875",
		"1E824C",
		"FABE58",
		"F89406",
		"F2784B",
		"EB9532",
		"F9690E"
	];
	var randomColor = Math.floor(Math.random() * (colors.length));
	var random = colors[randomColor];

	document.getElementById('randomWord').style.color = "#" + random;
}

setInterval(function(){ 
	getRandomQoute();
	getRandomColor();
}, 1500);