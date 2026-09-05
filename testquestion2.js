let square;
let floor;

function setup() {
    new Canvas(600,400);

    //game
    background(0);
    world.gravity.y = 10;

    //square
    square = new Sprite(300,0,30,30);
    square.collider = "dynamic";

    //floor 
    floor = new Sprite(0,385,2400,30);
    floor.collider = "static";
}

function draw() {
    background(0)
}