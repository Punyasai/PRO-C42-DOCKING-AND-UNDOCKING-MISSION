var hasDocked=false;
var iss,spacecraft;
var issImg,bg,spacecraft1Img,spacecraft2Img,spacecraft3Img,spacecraft4Img;


function preload(){
  bg=loadImage("images/spacebg.jpg")
  issImg=loadImage("images/iss.png")
  spacecraft1Img=loadImage("images/spacecraft1.png")
  spacecraft2Img=loadImage("images/spacecraft2.png")
  spacecraft3Img=loadImage("images/spacecraft3.png")
  spacecraft4Img=loadImage("images/spacecraft4.png")
}


function setup() {
  createCanvas(800,400);
  iss=createSprite(400, 150, 50, 50);
  iss.addImage(issImg);

  spacecraft=createSprite(350,300,50,50);
  spacecraft.addImage(spacecraft1Img);
  spacecraft.scale=0.2

}

function draw() {
  background(bg);
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);

    if(keyIsDown(UP_ARROW)){
      spacecraft.y = spacecraft.y -2;
      spacecraft.addImage(spacecraft2Img);
    }

    if(keyIsDown(RIGHT_ARROW)){
     spacecraft.addImage(spacecraft4Img);
     spacecraft.x = spacecraft.x + 1;
    }

    if(keyIsDown(LEFT_ARROW)){
      spacecraft.addImage(spacecraft3Img);
      spacecraft.x = spacecraft.x - 1;
     }

     if(keyIsDown(DOWN_ARROW)){
      spacecraft.y = spacecraft.y + 2;
      spacecraft.addImage(spacecraft2Img);

    }

     
  }

  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }
  
  drawSprites();
}