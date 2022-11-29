let x=300,y=300,sp=11,sp2=10
function setup() {
  createCanvas(600, 600);
  background(200, 300, 50)
}

function draw() {
  ;
  rectMode(CENTER)
  fill(0, 100, 0)
  noStroke
  rect(x, y, 10, 10)
  rect(y, x, 10, 10)
  rect(x, x, 10, 10)
  rect(y, y, 10, 10)
  rect(y+100, y+100, 10, 10)
  rect(x+100, x+100, 10, 10)
  rect(y+100, x+100, 10, 10)
  rect(x+100, x+100, 10, 10)
  rect(y+100, y-100, 10, 10)
  rect(x+100, y-100, 10, 10)
  rect(y+100, x-100, 10, 10)
  rect(x+100, x-100, 10, 10)
  rect(y-100, y+100, 10, 10)
  rect(x-100, y+100, 10, 10)
  rect(y-100, x+100, 10, 10)
  rect(x-100, x+100, 10, 10)
  rect(y-100, y-100, 10, 10)
  rect(x-100, y-100, 10, 10)
  rect(y-100, x-100, 10, 10)
  rect(x-100, x-100, 10, 10)
  
  rect(y+200, y+200, 10, 10)
  rect(x+200, x+200, 10, 10)
  rect(y+200, x+200, 10, 10)
  rect(x+200, x+200, 10, 10)
  rect(y+200, y-200, 10, 10)
  rect(x+200, y-200, 10, 10)
  rect(y+200, x-200, 10, 10)
  rect(x+200, x-100, 10, 10)
  rect(y-200, y+200, 10, 10)
  rect(x-200, y+200, 10, 10)
  rect(y-200, x+200, 10, 10)
  rect(x-200, x+200, 10, 10)
  rect(y-200, y-200, 10, 10)
  rect(x-200, y-200, 10, 10)
  rect(y-200, x-200, 10, 10)
  rect(x-200, x-200, 10, 10)
  x=x+sp
  y=y+sp2
  if(y>600) {
    sp2=-sp2
  }
  
  if(y<0) {
    sp2=-sp2
  }
  
  if(x>600) {
    sp=-sp
  }
  if(x<0) {
    sp=-sp
  }

}
