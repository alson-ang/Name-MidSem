function setup(){ 
    createCanvas(600, 400); 
    background("black"); 
} 
function draw(){
    rect(390,100,100,100);
    fill("black");
    stroke("red");
    strokeWeight(10);
    circle(100, 150, 100);
    triangle(270, 50, 230, 200, 350, 200); 
}