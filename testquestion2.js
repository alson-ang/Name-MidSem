function setup() {
    createCanvas(600,400);
    background(255);
    world.gravity.y = 5;
}        

function draw() {
    background(255);
    if (mouse.presses()) {
        ball = new Sprite(mouseX,mouseY,20);
    
}
}