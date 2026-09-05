let posX = 50;
let posY=50;

function setup(){ 
createCanvas(600, 600); 
background(220); 
}

function draw(){
    for(let i=0;i<10;i++){
        fill(0 +i*50);
        circle(posX +i*50, posY +i*50,50);
    }
}
