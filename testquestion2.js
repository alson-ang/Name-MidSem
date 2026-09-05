let posx = 50;
let posy = 50;
let colour = 0;
function setup(){
    createCanvas(600,600);
    background(220);
    for(let count = 0;count<10;count++){
        fill(colour);
        circle(posx,posy,50);
        posy = posy + 50;
        posx = posx + 50;
        colour = colour+25
    }

}

function draw(){
}
