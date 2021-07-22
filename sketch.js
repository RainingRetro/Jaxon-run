var path, pathImg
var runner1, runner2, runnerImg


function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  
  runnerImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  
  boy = createSprite(200, 380);
  boy.addAnimation("running",runnerImg);
  boy.scale = 0.1;

  invisibleGround1 = createSprite(0, 200, 10, 400);
  invisibleGround1.visible = false;

  invisibleGround2 = createSprite(390, 200, 10, 400);
  invisibleGround2.visible = false;
  
}

function draw() {
  background(0);

  //boy.velocityY = 2
  boy.x = World.mouseX;

  if(boy.x < 60)
  {
    boy.x = 60;
  }
    
  if(boy.x > 340)
  {
    boy.x = 340;
  }

  if(path.y > 400){
    path.y = height/2;
  }

  drawSprites();
}
