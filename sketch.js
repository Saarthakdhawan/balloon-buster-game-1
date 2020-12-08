var balloon,balloonImage;
var balloon1,balloonImage2;
var balloon2,balloonImage3;
var balloon3,balloonImage4;
var arrowImage;
var bow, bowImage;
var ground,groundImage;
var score;
var arrowG,redB,greenB,pinkB,blueB;
function preload(){
 //load your images here 
 balloonImage=loadImage("blue_balloon0.png");
  balloonImage2=loadImage("green_balloon0.png");
 balloonImage3=loadImage("pink_balloon0.png");
  balloonImage4=loadImage("red_balloon0.png");
  arrowImage=loadImage("arrow0.png");
  bowImage=loadImage("bow0.png");
  groundImage=loadImage("background0.png")
}

function setup() {
  createCanvas(500, 500);
   ground = createSprite(300,180,400,20);
  ground.addImage("ground",groundImage);
  ground.scale=5;
  ground.x = ground.width /2;
  ground.velocityX = -4; 
  
  bow=createSprite(450,200,10,10);
  bow.addImage("bow",bowImage);
 
  bow.scale=1.5;
  bow.y=World.mouseY;
 score=0; 
 arrowG=new Group();
  redB=new Group();
  greenB=new Group();
  blueB=new Group();
  pinkB=new Group();
}

function draw() {
  background("white");
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  var select_balloon=Math.round(random(1,4));
  console.log(select_balloon)
  if(World.frameCount%80==0){
    if(select_balloon==1){
      redballoon();
    }
    else if(select_balloon==2){
      blueballoon();
    }
    else if(select_balloon==3){
      greenballoon();
    }
    else {
      pinkballoon();
    }
    }
  
 //  let bow=createSprite(450,200,10,10);
  //bow.addImage("bow",bowImage);
 
  bow.scale=1.5;
  bow.y=World.mouseY;
  if (keyDown("space")){
   createarrow();
    
    }
  if(arrowG.isTouching(greenB)){
    greenB.destroyEach();
    arrowG.destroyEach();
    score=score+1;
  }
    if(arrowG.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowG.destroyEach();
    score=score+1;
  }
  if(arrowG.isTouching(redB)){
    redB.destroyEach();
    arrowG.destroyEach();
    score=score+1;
  }
  if(arrowG.isTouching(blueB)){
    blueB.destroyEach();
    arrowG.destroyEach();
    score=score+1;
  }
drawSprites();
  //add code here
  text.size=20;
  text("Score:"+score,270,30)
}

function createarrow(){
    arrow=createSprite(350,200,10,10);
  arrow.addImage("arrow",arrowImage)
  
    arrow.y=bow.y;
       arrow.velocityX=-6;
     arrow.scale=0.3;  
    arrow.lifetime=50;
        arrowG.add(arrow);
 
}
function redballoon(){
  var redballoo1=createSprite(0,Math.round(random(20,370)),10,10);
  redballoo1.addImage( balloonImage4);
  redballoo1.velocityX=3;
  redballoo1.lifetime=150;
  redballoo1.scale=0.1;
  redB.add(redballoo1)
}
function blueballoon(){
  var blueballoo1=createSprite(0,Math.round(random(20,370)),10,10);
  blueballoo1.addImage(  balloonImage);
  blueballoo1.velocityX=3;
  blueballoo1.lifetime=150;
 blueballoo1.scale=0.1;
  blueB.add(blueballoo1);
}
function greenballoon(){
  var greenballoo1=createSprite(0,Math.round(random(20,370)),10,10);
  greenballoo1.addImage(balloonImage2);
 greenballoo1.velocityX=3;
  greenballoo1.lifetime=150;
 greenballoo1.scale=0.1;
   greenB.add(greenballoo1);
}
function pinkballoon(){
  var pinkballoo1=createSprite(0,Math.round(random(20,370)),10,10);
  pinkballoo1.addImage(  balloonImage3);
  pinkballoo1.velocityX=3;
  pinkballoo1.lifetime=150;
 pinkballoo1.scale=1.5;
  pinkB.add(pinkballoo1);
}