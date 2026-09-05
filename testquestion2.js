let x;
let y;
let circle;
let floor;
function setup () {
    createCanvas(600, 400);
    background("white")
    world.gravity.y = 10;

    floor = new Sprite()
    floor.y = 400;
    floor.collider = "static";
    floor.width = 600;
    floor.height = 30;
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