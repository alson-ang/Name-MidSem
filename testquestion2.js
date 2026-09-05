let x;
let y;
let circle;
function setup () {
    createCanvas(600, 400);
    background("white")
    world.gravity.y = 10;
}
function draw () {
    background("white")
    if (mouse.presses()) {
        circle = new Sprite();
        circle.x = mouseX;
        circle.y = mouseY;
        circle.mass = 2
        circle.diameter = 40;
    }    
}