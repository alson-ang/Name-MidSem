let width=600;
let height=400;
let player;
let floor;



function setup(){
    new Canvas(600,400);
    player=new Sprite();
    player.width=30;
    player.height=30;

    floor=new Sprite();
    floor.width=2400;
    floor.height=20;

    floor.y=400;
    floor.collider="static";
    world.gravity.y=10;
    
    
}

function draw(){
    background(255);
    camera.x=player.x;
    if (player.colliding(floor)){
        if (mouse.presses() || kb.presses("space")){
            player.vel.y=-5;

        }
    }
    player.vel.x=6;
}