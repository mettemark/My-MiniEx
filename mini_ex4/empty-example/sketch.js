
var button;
var count = 0;
var trans = 100;
var speed = 1;
var display = false;
var c;

function setup() {

createCanvas(windowWidth,windowHeight);
frameRate(200);
button = createButton('');
button.position(width/2,height/2);
button.mousePressed(doDisplay);
button.style('border-radius','50%');
button.style('padding','20px');
button.style('background-color',color(255,0,0));
background(255);
}

function draw() {

fill(255);
noStroke();
ellipse(50,50,30,30);
fill(255,0,0);
noStroke();
textSize(40);
stroke(2);
text('Click button',width/2-75,height/2+100);
text('to start recording',width/2-120,height/2+150);
text('Press space',width/2-80,height/2+220);
text('to stop recording',width/2-120,height/2+270);

if(display) {
if (count < 100) {
count++;
if (count == 100)
{
count = 0;
}
}
drawThrobber();
}
}

function drawThrobber(){ //recording sign
trans = trans + speed;
if (count == 100 || count==0) {
  speed = -speed;
}

fill(255,0,0,trans);
stroke(0)
ellipse(50,50,30,30);

text('recording...',70,90)

}

function doDisplay() {
  display = true;
}

function keyPressed() {
if (keyCode === 32) {
fill(0)
textSize(20)
noStroke();
var words = ['recording...', 'still recording...','try again','one more time','still recording..'];
var words = random(words);
text(words,random(width-150),random(height));
  }
}
