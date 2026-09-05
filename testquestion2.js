let square;
let floor;
let jumpChance = 0;

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

    //camera pos
    camera.x = square.x;
}

function draw() {
    background(0);
    // square.vel.x = 3;
    camera.x = square.x;

    if (jumpChance = 1) {
        if (kb.presses("space")) {
            //HOW TO DO 5 PIXELS?????
            //i tryed my best to get 5 pixels
            square.vel.y += 7;
            console.log(jumpChance);
        }
        else if(mouse.presses("left")) {
            // 5+++++++ pixel jump
            square.vel.y += 30;
        }
    }
    if (square.collides(floor)) {
        jumpChance += 1;
        if (jumpChance >= 2) {
            jumpChance = 0;
        }
    }
}