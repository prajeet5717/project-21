var car,wall;
var speed,weight,thickness;

function setup() {
 createCanvas(1600,400);

  thickness=random(22,83);
  speed = random(223,321);  
  weight=random(30,52);
   
  car = createSprite(50, 200, 50, 5);
        
  car.velocityX = speed;

  car.shapeColour=color(225);



  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColour=color(80,80,80);
}


function draw() {
//createEdgeSprites();
  background(0); 
  
  if(wall.x -car.x< (wall.width+car.width)/2)                
{
  wall.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22500;
  if(deformation>180)
  {
    wall .shapeColor=color(255,0,0);
  }
  
  if(deformation<180 && deformation>100)
  {
   wall.shapeColor=color(230,230,0);
  }

  if(deformation<100)
  {
    wall .shapeColor=color(0,255,0);
    
  }
}

if(wall.x -car.x< (wall.width+car.width)/2)                
{
  wall.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22500;
  if(deformation>180)
  {
    wall .shapeColor=color(255,0,0);
  }
  
  if(deformation<180 && deformation>100)
  {
   wall.shapeColor=color(230,230,0);
  }

  if(deformation>100)
  {
    wall .shapeColor=color(255,0,0);
    
  }
}


 /*if(isTouching(bullet,wall)) {
    wall.width=thickness;

    bullet.velocityX=0;
    damage = Math.round(0.5*weight*speed*speed/(thickness*thickness*thickness));
     
    if(damage>10) {
      wall.shapeColor="red";
     // rating="BAD";
      }
  
      if(damage<10) {
        wall.shapeColor="green";
       // rating="GOOD";
      }
}
*/
 drawSprites();
}

