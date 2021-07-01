var astronaut
var bg,sleep,brush,exercise,eat,bath,move;

function preload(){
  bg= loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym1.png","images/gym2.png","images/gym2.png");
  eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png");
  bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png");
  move= loadAnimation("images/move.png","images/move1.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
astronaut=createSprite(300,230);
astronaut.addAnimation("sleep",sleep)
astronaut.scale=0.1
}

function draw() {
  background(bg);
  textSize(20)
 text("Press UP Arrow to brush",200,200) 
 text("Press Down Arrow to exercise",200,200) 
 text("Press Left Arrow to bath",200,200) 
 text("Press Right Arrow to eat",200,200) 
 text("Press M to move",200,200) 

if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y=350

}
if(keyDown("Down_ARROW")){
  astronaut.addAnimation("exercise",exercise);
  astronaut.changeAnimation("exercise");
  astronaut.y=350
  
}
if(keyDown("Left_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y=350
  astronaut.x=150
}
if(keyDown("Right_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y=350
  astronaut.x=300
}
if(keyDown("m")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.y=350
 astronaut.velocityX=1
 astronaut.velocityY=1 
}
  drawSprites();
}