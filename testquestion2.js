
let size=50;
let posx=50;
let posy =50;
function setup(){ 
    createCanvas(600, 600); 
    background(220); 
} 
function draw(){
    for (let i = 0; i < 10; i++) {
        fill(0+i*25);
        circle(posx+i*50,posy+i*50,size);
    }
} 