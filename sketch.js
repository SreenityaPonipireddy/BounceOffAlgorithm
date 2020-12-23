var movingRect, fixedRect;


function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(200,200,100,100);
  movingRect.shapeColor="black";
  movingRect.debug=true;
  movingRect.velocityX=2;

  fixedRect=createSprite(1000, 200, 100, 100);
  fixedRect.shapeColor="purple";
  fixedRect.debug=true;
  fixedRect.velocityX=-2;

}

function draw() {
  background("teal");  

 //BounceOff
if(fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
  movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2){

    movingRect.velocityX=movingRect.velocityX*(-1);
    fixedRect.velocityX=fixedRect.velocityX*(-1)
}
if(fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2&&
  movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2){

    movingRect.velocityY=movingRect.velocityY*(-1);
    fixedRect.velocityY=fixedRect.velocityY*(-1);
  }

console.log(fixedRect.x-movingRect.x);
  drawSprites();
}