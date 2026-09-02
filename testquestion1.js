// Test
let circle;

function setup() {
    new Canvas(600, 400);
//    world.gravity.y = 10;

function draw() {
    background(0);
    if (mouse.presses()) {
        circle = new Sprite(mouse.x, mouse.y, 50);
//        circle.collider = 'dynamic';
}
    }
//    fill(random(255), random(255), random(255));
}

// circle.gravity.y
