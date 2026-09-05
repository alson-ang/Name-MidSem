function setup() {
    new Canvas(600, 400);
    world.gravity.y = 10;
    floor = new Sprite();
    floor.color = "blue";
    floor.y = 370;
    floor.width = 600;
    floor.collider = "static";
}

function draw() {
    background("black");
    if(mouse.presses()) {
        let s = new Sprite(mouseX, mouseY);
        s.diameter = 35;
        s.bounciness = 0.67;
    }
}