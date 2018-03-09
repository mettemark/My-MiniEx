let blobs=[];

function setup() {
createCanvas(windowWidth,windowHeight)

for(let i=0; i<blobs.length;i++){
blobs[i]=new blob(color(255,0,0),200,100,10)


}

}

function draw() {
background(200,100,100);

//text
fill(255);
noStroke();
text('Click mouse above line',20,80)
text('to drop snowball in basket',20,95)

//line
stroke(255);
line(0,100,windowWidth,100)

//basket
beginShape();
vertex(windowWidth/2-100,windowHeight-150)
vertex(windowWidth/2-120,windowHeight)
vertex(windowWidth/2+100,windowHeight)
vertex(windowWidth/2+80,windowHeight-150)
endShape(CLOSE);

for(let i=0; i<blobs.length;i++){
blobs[i].move();
blobs[i].show();
}
}

class blob{
constructor(color,x,y,r){
this.color=color;
this.x=x;
this.y=y;
this.r=r;
}

//make the blobs move
move(){
this.x=this.x+random(7,-7)
this.y=this.y+5
}

//show the blobs
show(){
noStroke();
ellipse(this.x,this.y,this.r*2,this.r*2);
}

}

//create new snowball when mouse is pressed
function mouseClicked(){
  if(mouseY<100){
append(blobs,new blob(color(255,0,0),mouseX,mouseY,10))
}
}
