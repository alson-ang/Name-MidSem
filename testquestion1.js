// Test
let ball;
let something;

function setup() {
    new Canvas(600, 400); createCanvas(600, 400);

    background(0);

    world.gravity.y = 10;

    camera.x = 0; // Camera position

    ball = new Sprite(0, 0, 10, 10); // (x, y, width, height) or (x, y, diameter)
    ball.mass = 10;
    ball.drag = 10;
    ball.bounciness = 1;
    ball.color = "red";
    ball.collider = "dynamic"; // static
}

function draw() {
    background(0);

    if (kb.presses("w")) {
        ball.x += 1;
        ball.vel.y = 10;
    }

    if (mouse.presses("left")) {

    }
}


function keyPressed() {
    if (key === "w") {
        
    }
}