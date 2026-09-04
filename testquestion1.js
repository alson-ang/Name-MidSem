// Test
let ball;
let something;

function setup() {
    new Canvas(600, 400); createCanvas(600, 400);

    background(0); // grayscale 0 - 255 black - white
    world.gravity.y = 10;
    camera.x = 0; // Camera position

    ball = new Sprite(); // (x, y, width, height) or (x, y, diameter)
    ball.x = 0;
    ball.y = 0;
    ball.diameter = 10;
    ball.width = 10;
    ball.height = 10;
    ball.bounciness = 1;
    ball.color = "red";
    ball.collider = "dynamic"; // static / kinematic
}

function draw() {
    background(0);

    if (kb.presses("w")) {
        ball.x += 1;
        ball.vel.y = 10;
    }
     if (mouse.presses("left")) {
        
    }
    if (ball.collides(something)) {

    }
}


function keyPressed() {
    if (key === "w") {
        
    }
}