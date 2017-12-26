function getRandomQoute() {
	var qoutes = ["Learn HTML5", "Learn Javascript", "Build A Website", "Learn PHP", "Learn Nodejs", "Learn Mongodb", "Learn Agularjs", "Learn MYSQL", "Learn Python", "Build an App", "Virtual Training", "Skype Avaiable", "Ecommerce Development", "Custom Applications", "Learn ES6", "Learn Jquery", "Learn CSS3"];
	var randomNumber = Math.floor(Math.random() * (qoutes.length));
	var random = qoutes[randomNumber];
	document.getElementById('randomWord').innerHTML = qoutes[randomNumber];
}

setInterval(function(){ getRandomQoute() }, 1000);