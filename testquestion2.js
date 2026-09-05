function setup(){
    createCanvas(600,600);
    background(220);
}
function draw(){
    for(let i=0; i<10; i++){
        fill(i*25);
        circle(10 + i*30,10 + i*30,20);
}
}