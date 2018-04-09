function getRandomQoute() {
	var qoutes = [
		"Strategy & Consulting",
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
		"Search Engine Optimization",
		"Content Marketing",
		"Learn HTML5", 
		"Learn Javascript", 
		"Build A Website", 
		"Learn PHP", 
		"Learn Nodejs", 
		"Learn Mongodb", 
		"Learn Agularjs", 
		"Learn MYSQL", 
		"Learn Python", 
		"Build an App", 
		"Virtual Training", 
		"Skype Avaiable", 
		"Ecommerce Development", 
		"Custom Applications",
		"Learn ES6", 
		"Learn Jquery", 
		"Learn CSS3",
		"I Build Websites",
		"I Build Apps"
	];
	var randomNumber = Math.floor(Math.random() * (qoutes.length));
	var random = qoutes[randomNumber];

	document.getElementById('randomWord').innerHTML = qoutes[randomNumber];
}

function getRandomColor(){
	var colors = [
		"F03434",
		"D91E18",
		"F22613",
		"CF000F",
		"663399",
		"9A12B3",
		"013243",
		"E4F1FE",
		"1F3A93",
		"26A65B",
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
}, 1000);