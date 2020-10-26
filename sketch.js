var rect1, rect2, rect3, rect4;

function setup() {
  createCanvas(800,400);

  rect1 = createSprite(600, 100, 50, 50);
  rect1.shapeColor = "red";
  //rect1.velocityX = -3;
  //rect1.velocityY = 5;
  rect1.debug = true;

  rect2 = createSprite(600,300,50,50);
  rect2.shapeColor = "red";
  //rect2.velocityX = 3;
  //rect2.velocityY = -5;
  rect2.debug = true;

  rect3 = createSprite(200,100,50,50);
  rect3.shapeColor = "red";
  //rect3.velocityY = 5;

  rect4 = createSprite(200,300,50,50);
  rect4.shapeColor = "red";
  //rect4.velocityY = -5;

}

function draw() {
  background("cyan");  
  drawSprites();

  rect1.y = mouseY;
  rect1.x = mouseX

  if(isTouching(rect1, rect3)){
    rect1.shapeColor = "blue";
    rect3.shapeColor = "blue";
  }
  else{
    rect3.shapeColor = "red";
    rect1.shapeColor = "red";
  }

  bounce(rect1, rect2);

}

