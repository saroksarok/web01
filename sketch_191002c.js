let posx = new Array(100);
let posy = new Array(100);
let radius = new Array(100);
let circleSize = 0;
let clicked = false;

function mousePressed() {
  clicked = !clicked;
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER);
  for (let i=0; i<100; i++) {
    posx[i] = width / 1; 
    posy[i] = height / 1;
  }
}




function draw() {

  background(0);
  circleSize = circleSize + 0.1;

  for (let i=0; i<100; i++) {
    radius[i] = 100*(1.3 + sin(circleSize + i*0.1));
    if (i==0) {
      posx[i] = posx[i] + (mouseX - posx[i])/1.2; 
      posy[i] = posy[i] + (mouseY - posy[i])/1.2;
    } else {
      posx[i] = posx[i] + (posx[i-1] - posx[i])/1.2; 
      posy[i] = posy[i] + (posy[i-1] - posy[i])/1.2;
    }

    stroke(0, 0, 0, 0); // 0 ~ 255 : 50% > 128
    for (let i=50; i>=0; i--) {
      fill(255-i, 100, i*5, 255);
      if (clicked==true) {
        rect(posx[i], posy[i], radius[i]*2.5, radius[i]/10);
      } else {
        rect(posx[i], posy[i], radius[i]/10, radius[i]*2.5);
      }
    }

}}
  
