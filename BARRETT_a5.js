var r = 58;
var g = 127;
var b = 54;
var s = 50;
var swatch;

function setup() {
createCanvas (800, 600);
background (255);
swatch = loadImage("img/swatches.png");
}

function draw() {
strokeWeight (4);
stroke (0);

//draw color buttons
//red
fill (255, 0, 0);
rect (0, 550, 100, 50);

//green
fill (0, 255, 0);
rect (100, 550, 100, 50);

//blue
fill (0, 0, 255);
rect (200, 550, 100, 50);

//cyan
fill (0, 255, 255);
rect (300, 550, 100, 50);

//magenta
fill (255, 0, 255);
rect (400, 550, 100, 50);

//yellow
fill (255, 255, 0);
rect (500, 550, 100, 50);

//black
fill (0, 0, 0);
rect (600, 550, 100, 50);

//white
fill (255, 255, 255);
rect (700, 550, 100, 50);

// color & size indicators
fill(0);
rect(700, 500, 100, 50);
fill(r, g, b);
rect(700, 500, s+5, 50);

//size +
fill (255, 255, 255);
rect (600, 500, 50, 50);
fill(0);
ellipse(625, 525, 40, 40);

//size -
fill (255, 255, 255);
rect (650, 500, 50, 50);
fill(0);
ellipse(675, 525, 20, 20);

//clear button
fill (200);
rect (500, 500, 50, 50);
text ("clear", 510, 520);

//color clear
fill (r, g, b);
rect (550, 500, 50, 50);
fill (250);
text ("color", 560, 520);
text ("clear", 560, 540);

// color gradient selector
fill(0);
rect(0, 500, 500, 50);
image(swatch, 0, 500);


if (mouseIsPressed) {
  
// test red 
if ((mouseX > 0)&&(mouseX < 100)&&(mouseY > 550)&&(mouseY < 600)) {
 r=255; g=0;b=0;
}
// test green
if ((mouseX > 100)&&(mouseX < 200)&&(mouseY > 550)&&(mouseY < 600)) {
 r = 0; g = 255; b = 0;
}
// test blue
if ((mouseX > 200)&&(mouseX < 300)&&(mouseY > 550)&&(mouseY < 600)) {
 r = 0; g = 0; b = 255;
 }
 // test cyan
if ((mouseX > 300)&&(mouseX < 400)&&(mouseY > 550)&&(mouseY < 600)) {
 r=0; g=255;b=255;
}
// test magenta
if ((mouseX > 400)&&(mouseX < 500)&&(mouseY > 550)&&(mouseY < 600)) {
 r = 255; g = 0; b = 255;
}
//test yellow
if ((mouseX > 500)&&(mouseX < 600)&&(mouseY > 550)&&(mouseY < 600)) {
 r=255; g=255; b=0;
}
// test black 
if ((mouseX > 600)&&(mouseX < 700)&&(mouseY > 550)&&(mouseY < 600)) {
 r = 0; g = 0; b = 0;
}
// test white
if ((mouseX > 700)&&(mouseX < 800)&&(mouseY > 550)&&(mouseY < 600)) {
r=255;g=255; b=255;
}
//test size
if ((mouseX > 600)&&(mouseX < 650)&&(mouseY > 500)&&(mouseY < 550)){
s++;
}
if ((mouseX > 650)&&(mouseX < 700)&&(mouseY > 500)&&(mouseY < 550)){
s--;
}
if(s < 3){
 s = 3;
}
// clear screen
if ((mouseX > 500)&&(mouseX < 550)&&(mouseY > 500)&&(mouseY < 550)) {
  background(0);
}
// clear screen to current color
if ((mouseX > 550)&&(mouseX < 660)&&(mouseY > 500)&&(mouseY < 550)) {
   background(r, g, b);
}

//test red gradient
if ((mouseX > 0)&&(mouseX < 100)&&(mouseY > 500)&&(mouseY < 550)){
 var pixel = get(mouseX, mouseY);
 r = int(red(pixel));
}
//test green gradient
if ((mouseX > 100)&&(mouseX < 200)&&(mouseY > 500)&&(mouseY < 550)){
var pixel = get(mouseX, mouseY);
 g = int(green(pixel));
}
//test blue gradient
if ((mouseX > 200)&&(mouseX < 300)&&(mouseY > 500)&&(mouseY < 550)){
var pixel = get(mouseX, mouseY);
 b = int(blue(pixel));
}
// test custom swatch colors
if ((mouseX > 300)&&(mouseX < 500)&&(mouseY > 500)&&(mouseY < 550)) {
  var pixel = get(mouseX, mouseY);
  r = int(red(pixel));
  g = int(green(pixel));
  b = int(blue(pixel));
}

if (mouseY < 500) {
// draw line
 strokeWeight(s);
 stroke(r, g, b);
 line (mouseX, mouseY, pmouseX, pmouseY);
}
}
}
