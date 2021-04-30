var garden,rabbit;
var gardenImg,rabbitImg;
var leaf,leafImg;
var apples,applesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
 
   apples = Math.round(random(20,30));
  leaf = Math.round(random(20,30));
   edges= createEdgeSprites();
  rabbit.collide(edges);
  
  if(World.frameCount % 80==0){
    if(apples == 1){
      
      
    }
    createApples();
      createLeaf();
  
    
    
  }
  
  
 
  if(keyDown("RIGHT_ARROW")){
    rabbit.velocityX = 3;
    }

    if(keyDown("LEFT_ARROW")){
    rabbit.velocityX = -3;
    } 
 
  
  
  
  
  
  
  
  drawSprites();
  
}



function createApples(){
 apples =createSprite(200,Math.round(random(50,20)),40 , 70 , 70);
  apples.addImage(applesImg);
  apples.velocityY = 2;
  apples.scale= 0.1
  apples.lifetime = 120;
}

 function createLeaf(){
  leaf = createSprite(300,Math.round(random(50,20)), 40 ,70 ,70);
   leaf.addImage(leafImg);
   leaf.scale =0.1;
   leaf.velocityY = 3;
   leaf.liftime = 140;
   
 } 


