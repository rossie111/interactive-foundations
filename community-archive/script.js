console.log('Hello!');

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('overlap');
}

function draw() {

	strokeWeight(1);

   //stroke(random(255), random(255), random(255));
   stroke(112, 253, 76);
   //stroke(random(100,255), random(100,255), random(100,255));

   line(mouseX, mouseY, pmouseX, pmouseY);

	// let r = random(255);
	// let g = random(255);
	// let b = random(255);

 //  if (mouseIsPressed) {
 //    fill(255,0,0);
 //  } else {
 //    fill(r,g,b);
 //  }
 //  // noStroke();
 //  // stroke(255, 204, 0);
 //  // strokeWeight(10);
 //  ellipse(mouseX, mouseY, 20, 20);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}