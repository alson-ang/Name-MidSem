function setup(){
    new Canvas(600,400);
    world.gravity.y = 10;
    let base = new Sprite(300, 380, 600, 30);
    base.collider = 'static';
}
function draw(){
background(0);
    if (mouse.presses("left")){
        fill(random(0,225));
        let ball = new Sprite(mouse.x,mouse.y,40);
        ball.bounciness = 0.5;
        ball.drag = 0.4;
    }
}