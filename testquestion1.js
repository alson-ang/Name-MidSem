// Test
let ball;

function setup() {
    createCanvas(600, 400);

    world.gravity.y = 10

    ball = new Sprite(0, 0, 10, 10);
    ball.mass = 10;
    ball.drag = 10;
    ball.bounciness = 1;
}

function draw() {

}