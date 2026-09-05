let circle;
let ground;

function setup() {
    new Canvas(600, 400);
    world.gravity.y = 10;
    ground = new Sprite(300, 400, 600, 30);
    ground.collider = 'static';
}

function draw() {
    background(0);
    if (mouse.presses()) {
        circle = new Sprite(mouse.x, mouse.y, 50);
        circle.collider = 'dynamic';
        circle.bounciness = 0.2;
    }

}
    fill(random(255), random(255), random(255));