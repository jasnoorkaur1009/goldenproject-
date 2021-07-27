var man,bg,gold,key1,key2 ,key3,fire,water
var manimg,bgimg,goldimg,key1img,key2img ,key3img,fireimg,waterimg



function setup() {
  createCanvas(600,600);
  man=createSprite(300, 500, 50, 50);
  man.shapeColor="red"
  gold=createSprite(300, 100, 50, 50);
  fire=createSprite(100, 200, 50, 50);
  water=createSprite(500, 200, 50, 50);
  key1=createSprite(250, 150, 600, 10);
  key1.rotation=50
  key2=createSprite(400, 150, 600, 10);
  key2.rotation=-50
  key3=createSprite(300, 400, 600, 10);
  
}

function draw() {
  background("pink");  
  drawSprites()
}