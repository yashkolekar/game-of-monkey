var survivalTime=0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
 
 monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,1200,10)
  ground.velocityX=-4
  ground.x=ground.width/2;
  console.log(ground.x)
  
  bananaGroup=new Group()
  
}


function draw() {
 background("white")
  stroke("white");
  textSize(20)
  fill("white")
  text("score:"+score,500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,100,50)
  
  if(ground.x < 0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")&& monkey.y>=100){
    monkey.velocityY=-12
    
  }
  monkey.velocityY=monkey.velocityY+0.8
  food()
  spawnObstacles()
  monkey.collide(ground)
  drawSprites();
}
function food(){
  if(World.frameCount%80===0){
 banana =createSprite(100,Math.round(random(120,200)),20,20)
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-2;
    banana.lifetime=300;
  bananaGroup.add(banana)
}

}
function spawnObstacles(){
  if(World.frameCount%300===0){
    obstacles=createSprite(300,320,20,20)
    obstacles.lifetime=300
    obstacles.addImage("obstacle",obstacleImage)
    obstacles.scale=0.1;
    obstacles.velocityX=-2
  }
  console.log(frameCount)
  
}
