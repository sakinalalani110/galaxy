  
var bgImg;
var rocketImg;
var asteroid,asteroidImg;
var gameState = "play"


function preload(){
 
  rocketImg = loadImage("rocket.png");
  asteroidImg = loadImage("asteroid.png");
}

function setup() {
  createCanvas(400,600);
  
  asteroidGroup = new Group();
  
  rocket = createSprite(200,200,50,50);
  rocket.scale = 0.3;
  rocket.addImage("rocket", rocketImg);
}


function draw() {
  background(0);

  
  if (gameState === "play") {
    
    if(keyDown(LEFT_ARROW)){
        rocket.x = rocket.x - 3;

      // write a code to move left when left arrow is pressed

    }
    if(keyDown(RIGHT_ARROW)){
  
          rocket.x = rocket.x + 3;

      // write a code to move left when right arrow is pressed
      
    }
    if(keyDown("space")){
  
         rocket.velocityY = -10;

      // write a code to move up when space arrow is pressed
      
    }
  
  rocket.velocityY = rocket.velocityY + 0.8;
  
   
      //write a condition for infinte scrolling tower
    
      spawnDoors();

  
//write a code to make invisibleBlockGroup collide with ghost destroy the ghost and make gamestate to end.
    
    
    if(asteroidGroup.isTouching(rocket) || rocket.y > 600){
      rocket.destroy();
      gameState = "end"
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var asteroid = createSprite(200, -50);
   
    //add the random function
    asteroid.x=Math.round(random(120,400));
    asteroid.addImage(asteroidImg);
    asteroid.velocityY = 1;
    asteroid.scale=0.08;
    //change the depth of the ghost and door
    
     
rocket.depth = asteroid.depth;
    rocket.depth =1;
    
    //assign lifetime for the  door, climber and invisible block

    asteroid.lifetime = 800;
   
    //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are door, climber and invisible block
    
     asteroidGroup.add(asteroid);
  }
}

