         
var monkey , monkey_running
var banana ,bananaImage, obstacle1, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,600)
  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("run",monkey_running);
monkey.scale=0.1
  
ground=createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2
console.log(ground.x);
  
  
  survivalTime=0;
  
 FoodGroup=new Group();
 obstacleGroup=new Group();
}



function draw() {
  background("white");
  
  spawnFood();
  spawnObstacles();
  
  
  if(ground.x>0){
  ground.x=ground.width/2
}
 if(keyDown("space")){
   monkey.velocityY=-10;
   
 }
 
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
   
 if(obstacleGroup.isTouching(monkey)){
   
   obstacleGroup.setVelocityXEach(0);
   FoodGroup.setVelocityXEach(0);
   
   obstacleGroup.setLifetimeEach(-1);
   FoodGroup.setLifetimeEach(-1);
   
   ground.velocityX=0;
   
   survivalTime=0;
 }
  
drawSprites();
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime:"+survivalTime,230,20);
  
}

function spawnFood(){
  if (frameCount % 80 === 0) {
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage("fruit",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime=200;
    
    FoodGroup.add(banana);
}
}
function spawnObstacles(){
  
    if (frameCount % 300 === 0){
   obstacle = createSprite(600,330,10,40);
   obstacle.x= Math.round(random(600,600));
   obstacle.addImage("image",obstaceImage);
   obstacle.scale=0.1;
   obstacle.velocityX = -3 ;
   obstacle.lifetime=200;
      
   obstacleGroup.add(obstacle);
  }

}

