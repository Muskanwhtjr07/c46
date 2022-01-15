var player,playerImage;
var road,bgImage;
var gift,giftImage;
var hole,holeImage;
var car,carImage;
var holesGroup,carGroup,giftGroup;
var PLAY=0;
var END=1;
var gameState=PLAY;
var gameOver,gameOverImage;
var gift=0;

function preload(){
  playerImage=loadImage("playerbgremoved.png");
  bgImage=loadImage("images.png");
  giftImage=loadImage("gift box.png");
  holeImage=loadImage("obstacle.png");
  carImage=loadImage("car.png");
}
function setup() {
  createCanvas(800,600);
  road=createSprite(400,300)
  road.addImage(bgImage)
  road.scale=0.5
  road.velocityY=2
  rectMode(CENTER)
  player=createSprite(400,550);
  player.addImage(playerImage);
  player.scale=0.3;
  holesGroup=new Group;
  carGroup=new Group;
  giftGroup=new Group;

}

function draw() {
  background(0);  
  if(road.y > 500){
    road.y = height/2;
  }
  textSize(20);
 
  if(gameState===PLAY){
if(keyDown("right")){
  player.x=player.x+4
  
}
if(keyDown("left")){
  player.x=player.x+-4
  
}
var obstacles = Math.round(random(1,3));
if(obstacles==1){
  createcar();
}else if(obstacles==2){
  createGift()
}else{
  createHoles()
}

if(player.collide(giftGroup)){
  gift=gift+1
  giftGroup.destroyEach();
}
  }

if(gameState===END){
  player.velocityX=0;
  road.velocityY=0;
  
}
edges=createEdgeSprites();
player.collide(edges);
  drawSprites();
  fill("red")
  text("Gift : "+gift,100,20);
}

function createcar() {
  if (World.frameCount % 100 == 0) {
car = createSprite(Math.round(random(50, width-50),100, 10, 10));
  car.addImage(carImage);
  car.scale=0.8;
  car.velocityY = 2;
  car.lifetime = 300;
  carGroup.add(car);
}
}
function createGift() {
  if (World.frameCount % 100 == 0) {
Gift = createSprite(Math.round(random(50, width-50),100, 10, 10));
  Gift.addImage(giftImage);
  Gift.scale=0.1
  Gift.velocityY = 2;
  Gift.lifetime = 300;
  giftGroup.add(Gift);
}
}
function createHoles() {
  if (World.frameCount % 100 == 0) {
hole = createSprite(Math.round(random(50, width-50),100, 10, 10));
  hole.addImage(holeImage);
  hole.scale=0.4
  hole.velocityY = 2;
  hole.lifetime = 300;
  holesGroup.add(hole);
}
}
