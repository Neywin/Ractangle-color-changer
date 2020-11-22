var rec1, rec2;

function setup() {
  createCanvas(800,400);
  rec1 = createSprite(200,200,50,100);
  rec2 = createSprite(400,300,50,100);
}

function draw() {
  background(255,255,255);  

 rec1.y = mouseY;
 rec1.x = mouseX;

 rec1.shapeColor = "red";
 rec2.shapeColor = "green";

 if (rec1.x - rec2.x < rec1.width/2 + rec2.width/2 && rec2.x - rec1.x < rec1.width/2 + rec2.width/2 &&
  rec1.y - rec2.y < rec1.height/2 + rec2.height/2 && rec2.y - rec1.y < rec1.height/2 + rec2.height/2){
   rec1.shapeColor = "purple";
   rec2.shapeColor = "purple";
 }

  drawSprites();
}