var fixedRect, movingRect
var obj1,obj2, obj3, obj4


function setup() {
  createCanvas(800,800);
  obj1 = createSprite(100,100,50,70);
  obj2 = createSprite(300,100,50,70);
 fixedRect = createSprite(400, 200, 70, 50);
  fixedRect.shapeColor = ("blue")
  fixedRect.velocityX = -2
  movingRect = createSprite(300,200,70,50)
  movingRect.shapeColor = ("blue")
  movingRect.velocityX = 2
  obj3 = createSprite (100,300,50,70) 
  obj3.shapeColor = "green"
  obj4 = createSprite (100,450,50,70)
  obj4.shapeColor = "green"

  obj1.velocityX = 2
  obj2.velocityX = -2
  obj3.velocityY = 2
  obj4.velocityY = -2
}

function draw() {
  background(255,255,255);  

  bounce(fixedRect,movingRect)

  if (isTouching(obj3,obj4)){
    obj3.shapeColor = "black"
    obj4.shapeColor = "black"
  }
  else {
    obj3.shapeColor = "green"
    obj4.shapeColor = "green"
  }

  drawSprites();
}

