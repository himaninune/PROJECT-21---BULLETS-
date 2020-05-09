var wall, thickness;
var speed, weight;
var bullets;

function setup() {
  createCanvas(800, 400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);
  bullets = createSprite(50, 200, 30, 10);
  bullets.velocityX = speed;
  wall = createSprite(750, 200, thickness, 300);
  wall.shapeColor = (80, 80, 80);

}

function draw() {
  background('rgba(100%,0%,100%,0.5)');

  if (wall.x - bullets.x <= (wall.width + bullets.width) / 2) {
    bullets.velocityX = 0;
    var damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
    if (damage > 10) {
      bullets.shapeColor = rgb(255, 0, 0);
    }

    if (damage < 10) {
      bullets.shapeColor = rgb(0, 255, 0);
    }


  }

  if (speed > (wall.x - bullets.x)) {
    bullets.x = wall.x - 30;
  }

  drawSprites();
}