function setup() {
    createCanvas(600,400);
    background(255);
    world.gravity.y = 5;
    floor = new Sprite(300,370,600,60,"static");
}        

function draw() {
    background(255);
    if (mouse.presses()) {
        ball = new Sprite(mouseX,mouseY,20);
    ball.bounciness = 0.9;
}
}