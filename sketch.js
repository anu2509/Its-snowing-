var bd1,bd2;
var girl,girlimg1,girlimg2,bg,bg1;
var snow,sni ;

function preload(){
  girlimg1 = loadImage("Girl.png")
  girlimg2 = loadImage("girl2.png")
  sni = loadImage("snow5.webp")
  bg1 = loadImage("skateeeee.png")
}
function setup() {
  createCanvas(800,400);
  bg = createSprite(400,200,800,400)
  bg.addImage(bg1)
  bg.depth = -1;
  bg.scale = 1.2
 girl = createSprite(50, 300, 50, 50);
 girl.addImage(girlimg1);
 girl.scale = 0.15;
 bd1 = createSprite(0, 0, 10, 800);
 bd1.visible = false;
 bd2 = createSprite(800, 0, 10, 800);
 bd2.visible = false;


 
 
}


function draw() {
  background(255); 

  textSize(15)
        fill("Purple")
        text("Press the 'space' key to see them move", 10, 15)
  
  if (keyDown("space")){
    girl.velocityX = 10;
    
   
   }

   if (frameCount%10 === 0){
    snow = createSprite(Math.round(random(0,800)),Math.random(10),15,15);
    snow.addImage(sni);
    snow.scale = 0.09
    snow.velocityY = 5;


   }

  
   if(girl.isTouching(bd2)){
     girl.addImage(girlimg2)
     girl.changeAnimation(girlimg2)
     girl.velocityX = -10;
     girl.scale = 1.001;

   } 
   
   

 
  
   
  drawSprites();
}


  





