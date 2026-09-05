// VARIABLES
let sprite;
let floor;

const jumps = 1;
let jumpChance = jumps;

function setup() {
    new Canvas(600, 400);
    displayMode('centered');
    background(250);
    world.gravity.y = 10;

    sprite = new Sprite(300, 200, 30, 30, "dynamic");

    floor = new Sprite(300, 400, 2400, 20, "static");
}

function preload() {

}

function draw() {
    background(250);

    if (sprite.x >= width / 2) {
        camera.x = sprite.x;
    } else {
        camera.x = width / 2;
    }

    if (sprite.collide(floor) && jumpChance < jumps) {
        jumpChance = jumps;
    }

    // if (sprite.y >= height / 2) {
    //     camera.y = sprite.y;
    // } else {
    //     camera.y = height / 2;
    // }

    if (kb.presses("space") || mouse.presses("left")) {
        if (jumpChance === jumps) {
            sprite.vel.y += -5;
            jumpChance -= 1;
        } 
    }

    sprite.vel.x = 6
}