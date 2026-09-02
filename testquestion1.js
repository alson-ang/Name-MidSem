let circle;

function setup() {
    new Canvas(600, 400);
}

function draw() {
    if (mouse.presses()) {
        circle = new Sprite(mouse.x, mouse.y, 10);
    }
//    circle.collider = "dynamic";
//    circle.gravity.y = 10;
    fill(random(255), random(255), random(255));
}

// circle.gravity.y