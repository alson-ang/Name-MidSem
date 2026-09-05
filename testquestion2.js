
let player;
let floor;
let playerAir=false;

function setup(){
    new Canvas(600,400);
    
    world.gravity.y=10;
    player=new Sprite(300,100,30,30,"dynamic");
    player.color="red";
    
    floor=new Sprite(300,350,2400,20,"static");
    floor.color="green";

};

function draw(){
    background("blue");
    camera.x=player.x;
    player.vel.x=6;

    if((kb.presses("space")||mouse.presses("left"))&& playerAir==false){
        player.vel.y=-5;
        playerAir=true;
    };


    if (player.collides(floor)){
        playerAir=false;
    };
};