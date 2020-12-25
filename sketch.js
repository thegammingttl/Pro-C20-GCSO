
var wall, car;
var speed, weight;

function setup() {
  
  createCanvas(1600, 400);

  //Giving speed,weight and a random value
  speed=random(55, 90);
  weight=random(400, 1500);

  //Creating Car
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  
  // Creating Wall
  wall=createSprite(1300, 200, 40, height/2);
  wall.shapeColor="pink";
}

function draw() {
  background("black");  

  //Creating Collision detection
  if (wall.x-car.x < (car.width+wall.width)/1.5) {
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;

    if (deformation>180) {
      car.shapeColor=color(255, 0, 0);
    }

    if (deformation<180 && deformation>100) {
      car.shapeColor=color(230, 230, 0);
    }

    if (deformation<100) {
      car.shapeColor=color(0, 255, 0);
    }

  }
  drawSprites();
}