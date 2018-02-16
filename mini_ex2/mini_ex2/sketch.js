function setup() {
createCanvas(windowWidth,windowHeight);
frameRate(3);

}

function draw() {
background(160,196,232)

//iphone
noStroke();
fill(0);
rect(180, 130, 280, 480, 20);

//skærm
fill('rgba(255,255,255,0.9)');
rect(200,150,240,400);

//knap
fill(40)
stroke(30)
strokeWeight(2);
ellipse(320,580,40,40);

//skærm øverst
stroke(200)
strokeWeight(1);
line(200,190,439,190);

noStroke();
textSize(16);
fill(0)
text('Slap dog Allan',270,180);

textSize(10);
text('04.37',310,160);


//taleboble 1
fill(75,150,255)
rect(285, 200, 140, 20, 7);

triangle(410, 204, 407, 220, 435, 220);
//text
fill(240)
textSize(14);
var words = ['hej', 'med', 'dig', 'flotte'];
var word = random(words); // select random word
text(word, 293, 215); // draw the word

var b = ['dig', 'med', 'hej', 'flotte'];
var b = random(b); // select random word
text(b, 326, 215); // draw the word

var c = ['flotte', 'med', 'hej', 'dig'];
var c = random(c); // select random word
text(c, 358, 215); // draw the word

var d = ['dig', 'flotte', 'hej', 'med'];
var d = random(d); // select random word
text(d, 390, 215); // draw the word



//taleboble 2
fill(200)
rect(220, 225, 138, 20, 7);

triangle(235, 235, 235, 245, 206, 245);

//text
fill(0)
textSize(14);
var e = ['skal ', 'du', 'med', 'hejm'];
var e = random(e); // select random word
text(e, 230, 240); // draw the word

var f = ['skal ', 'du', 'med', 'hejm'];
var f = random(f); // select random word
text(f, 260, 240); // draw the word

var g = ['skal ', 'du', 'med', 'hejm'];
var g = random(g); // select random word
text(g, 290, 240); // draw the word

var h = ['skal ', 'du', 'med', 'hejm'];
var h = random(h); // select random word
text(h, 320, 240); // draw the word



//taleboble 3
fill(75,150,255)
rect(360, 250, 65, 60, 7);

triangle(410, 294, 407, 310, 435, 310);

//text
fill(240)
textSize(14);
var i = ['hjk', 'mi', 'fut', 'nej'];
var i = random(i); // select random word
text(i, 370, 265); // draw the word

text('.',370,285)

var i = ['jieliss', 'dumpap', 'nejnej', 'nej'];
var i = random(i); // select random word
text(i, 370, 305); // draw the word



//taleboble 4
fill(200)
rect(220, 315, 50, 20, 7);
triangle(230, 325, 235, 335, 206, 335);

//text
fill(0);
text('??',230,330)



//boble 5
noFill();
stroke(200);
rect(285,350,140,20,9);



//Tastatur
noStroke();
fill(200)
rect(200,380,240,170)

//mellemrum
fill('rgba(255,255,255,0.9)')
stroke(200)
rect(265,510,110,32,2)
noStroke();
fill(0)
textSize(14);
text('mellemrum',285,530)

//Retur
fill(170)
stroke(160)
rect(385,510,50,31,2)
noStroke();
fill(0)
textSize(14);
text('Retur',395,530)

//1 2 3
fill(170)
stroke(160)
rect(205,510,50,31,2)
noStroke();
fill(0)
textSize(14);
text('1 2 3',210,530)

//taster

for (var x = 5; x < 220; x = x+26){
for (var y = 5; y < 100; y = y+40){
push();
translate(x, y);
drawTast();
pop();
		}
	}


//overskrift
textSize(50)
strokeWeight(1.5);
stroke(70,106,142);
fill(100,136,172);
text('How to drunk-text', 130, 70);

console.log(mouseX,mouseY)

}

function drawTast() {
fill('rgba(255,255,255,0.9)')
stroke(200)
rect(198,385,23,31,2)
fill(0)
noStroke();
textSize(16);
var p = ['a','b','c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w'];
var p = random(p);
text(p, 206, 405);
  }
