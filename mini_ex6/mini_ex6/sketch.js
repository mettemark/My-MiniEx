
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  frameRate(5)

}

function draw() {
push();
fill(100);
textSize(20);
text('All eyes on YOU',100,100);

pop();

let far = color(random(0,100),40);
let far1 = color(random(150,255),random(150,255),random(150,255),80);
let far2 = color(255,random(150,255),random(150,255),100);

  strokeWeight(1)

  if (random(1) <0.2) {
    stroke(far);
    fill(far);
      ellipseMode(CENTER);
      ellipse(windowWidth/2,windowHeight/2,random(20,300),random(20,300));

  } else if (random(1)>0.2 && random(1)<0.4){
    stroke(far1);
    fill(far1);
      ellipseMode(CENTER);
      ellipse(windowWidth/2,windowHeight/2,random(20,500),random(20,500));
  } else if (random(1)>0.4 && random(1)<0.6){
stroke(far2);
fill(far2);
  rectMode(CENTER);
  rect(windowWidth/2,windowHeight/2,random(300,600),random(300,800));
}

else if(random(1)>0.6 && random(1)<0.8){
  stroke(far);
  fill(far1);
    rectMode(CENTER);
    rect(windowWidth/2,windowHeight/2,random(300,500),random(300,500));
}
else {
background(far1)
}

}
