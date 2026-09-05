let player;
let floor;

function setup(){
    new Canvas(600,400);
    background("blue");
    world.gravity.y=10;
    player=new Sprite(300,100,30,30,"dynamic");
    player.color="red";
    
    floor=new Sprite(300,350,2400,20,"static");
    floor.color="green";

}

function draw(){
}