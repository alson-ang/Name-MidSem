let ball;
let floor;
function setup() {
createCanvas(600,400);
background(220);
world.gravity.y = 5;
floor = new Sprite();
floor.width = 600;
floor.height=30;
floor.x = width/2;
floor.y = 390;
floor.collider=  'static';
floor.color = 'black';

}
function draw() {
    if (mouse.presses()) {
        ball = new Sprite();
        ball.diameter = 25;
        ball.x = mouseX;
        ball.y = mouseY;
        ball.bounciness = 0.2;
    }
    background(220);
        

}
