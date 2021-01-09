var a,b

function setup() {
  createCanvas(1200,800);
 a= createSprite(400, 200, 50, 50);
 b=createSprite(400,800,80,30)
a.shapeColor="red"
b.shapeColor="red"
a.velocityY=5
b.velocityY=-5
}

function draw() {
  background(0,0,0); 

 if (b.x-a.x<b.width/2+a.width/2&&a.x-b.x<b.width/2+a.width/2){
  b.velocityX = b.velocityX * (-1);
 a.velocityX = a.velocityX * (-1);


 }
if(b.y-a.y<b.height/2+a.height/2&&a.y-b.y<b.height/2+a.height/2){
  b.velocityY = b.velocityY * (-1);
 a.velocityY = a.velocityY * (-1);
}
  drawSprites();
}