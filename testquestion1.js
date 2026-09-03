// Test
let ball;

function setup() {
    new Canvas(600, 400); createCanvas(600, 400);
    background(0);

    world.gravity.y = 10;

    ball = new Sprite(0, 0, 10, 10);
    ball.mass = 10;
    ball.drag = 10;
    ball.bounciness = 1;
}

function draw() {
    background(0);


}


function keyPressed() {
    if (key === "w") {
        ball.x += 2;
    }
}