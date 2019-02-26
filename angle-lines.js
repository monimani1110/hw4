var angleLines = 100;

function setup(){
	createCanvas(400, 400);
	colorMode(HSB);
}

function draw(){
	background(255);
	for (var x = 0; x < angleLines * 2; x ++) {
		line(x, height/2, x + 100, height/2 - 75);
	}
}
