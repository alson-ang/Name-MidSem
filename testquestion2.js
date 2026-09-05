function setup(){
    createCanvas(600,400);
    world.gravity.y = 10;
    let floor = new Sprite()
    floor.y = 390;
    floor.w = 600;
    floor.h = 30;
    floor.collider = 'static';

}
function draw(){
        background(220);
        if (mouse.presses()){
            let s = new Sprite(mouse.x,mouse.y);
            s.collider = 'dynamic';
            s.diameter = 20;
            s.bounciness = 0.8;
            
        }
}
