// VARIABLES
let sprite;
let floor;

function setup() {
    new Canvas(600, 400);
    displayMode('centered');
    background(250);
    world.gravity.y = 10;

    sprite = new Sprite(300, 200, 30, 30);

    floor = new Sprite(300, 400, 2400, 20, "static");
}

function preload() {

}

function draw() {
    background(250);
}