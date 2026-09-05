function setup(){ 
createCanvas(600, 400); 
background("black");
}

function draw(){
    fill("black");
    stroke("red");
    strokeWeight(10);
    triangle(150, 200, 200, 210, 230, 260); 
    circle(100, 160, 50);
    rect(250, 150, 50, 50); 
}