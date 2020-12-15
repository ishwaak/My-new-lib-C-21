var movinRect
var fixedRect
var x 
var y
var z 
var a 

function setup() 
{
  createCanvas(800,800);
  movinRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite(300,300,50,50);

  movinRect.shapeColor= "Green";
  fixedRect.shapeColor= "Blue";

  x = createSprite(30,300,50,50);
  z = createSprite(30,400,50,50);
  y = createSprite(30,500,50,50);
  a = createSprite(30,600,50,50);

  x.shapeColor= "Black";
  y.shapeColor= "Black";
  z.shapeColor= "Black";
  a.shapeColor= "Black";

  //fixedRect.velocityX= -1;
  x.velocityY=1;
  x.velocityX=1;

}

function draw() 
{
  background(255,255,255);  
  drawSprites();

  movinRect.x = World.mouseX;
  movinRect.y = World.mouseY;
  
  //Calling The Libary
  if(isTouching(movinRect,x))
  {
    x.shapeColor= "Black";
  }
  else
  {
    x.shapeColor= "Blue";
  }
  //End Calling The Libary

  Bounce(movinRect,x)

  x.debug = true ;
  movinRect.debug = true ;
 
  

}

