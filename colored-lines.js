function setup(){
	createCanvas(400, 400);
	colorMode(HSB);
	c1 = new color[line];
	c2 = new color[line];
	coloredLines();
}

function draw(){
	background(255);
	for (var x = 10; x < width - 10; x = x + 10) {
		line(x, height/2, mouseX, mouseY);
	}
}

void coloredLines(){
  for (int x = 0; x < width; x++) {
    c1[x] = color(random (360), 100, 100);
    c2[x] = color(random (360), 100, 100);
  }
}
