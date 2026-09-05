function setup(){
    createCanvas(600,600)
    background('grey')
}
function draw(){
    for(let i = 0; i < 10; i++){
        fill(10 + i * 25)
        circle(50 + i * 50, 50 + i * 50, 40)
    }
}