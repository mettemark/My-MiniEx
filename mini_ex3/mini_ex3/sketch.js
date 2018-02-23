function setup() {
createCanvas(windowWidth,windowHeight);
background(230);
frameRate(20);
}

function draw() {
fill(230,80);
rect(0,0,width,height);
drawThrobber(13);
}


function drawThrobber(num) {
translate(width/2,height/2);
var cir=360/num*(frameCount%num);
rotate(radians(cir));
noStroke();
fill(random(255),random(255),random(255));
arc(0, 0, 300, 300, 0,0.5);

//ellipse(0,30,10,10)
//rect(0,0,50,50)
}
