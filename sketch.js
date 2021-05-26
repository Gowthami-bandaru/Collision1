var fixedRect, movingRect;
var g1, g2, g3,g4;

function setup() {
  createCanvas(1200,1000);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = 'cyan';
  fixedRect.debug = true;

  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = 'cyan';
  movingRect.debug = true;


 
  g1 = createSprite(100,100,50,50);
  g1.shapeColor = 'purple';

  g2 = createSprite(200,100,50,50);
  g2.shapeColor = 'purple';

  g3 = createSprite(300,100,50,50);
  g3.shapeColor = 'purple';

  g4 = createSprite(400,100,50,50);
  g4.shapeColor = 'purple';

  

}

function draw() {
  background(0); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x);
  if (isTouching(movingRect, g1)){
    movingRect.shapeColor = 'pink';
    g1.shapeColor = 'pink';
  }
  else{
    movingRect.shapeColor = 'cyan';
     g1.shapeColor = 'purple';
  }
  
  
  drawSprites();
}


