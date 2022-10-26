function setup() {
  createCanvas(400, 400);
  background(360);
  colorMode(HSB, 360, 100, 100, 100);
  blendMode(DIFFERENCE);
  farb = random(0, 10);
}
let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;
let x3 = 0;
let y3 = 0;

function draw() {
  
  
  rechteckeVertikal();

  rechteckeRechts();

  rechteckeLinksUnten();
}
function rechteckeVertikal() {
  if (farb < 5) {
  fill(random(0, 360), 100, 100, 100);}
  else {
    fill(random(0, 360));
  }
  print(farb);
  push();
  rotate(radians(0));
  rect(x1, y1, 2, 400);
  pop();
  x1 = x1 + 2;  
}
function rechteckeRechts() {
  fill(random(0, 360), 100, 100, 100);
  push();
  rotate(radians(45));
  rect(x2, y2, 2, -400);
  pop();
  x2 = x2 + 2;  
}
function rechteckeLinksUnten() {
  fill(random(0, 360), 100, 100, 100);
  //push();
  rotate(radians(45));
  translate(0, 100);
  rect(x3, y3, 2, 400);
  //pop();
  x3 = x3 + 2;  
}
