function setup() {
    new Canvas(800, 600);
    background(150); // grayscale 0 - 255 black - white


    for (let i = 0; i < 10; i++) {
        
        fill(i * 30, i * 30, 0);
        rect(200, 200 + i * 50, 20, 20);

    }
}

function draw() {
    
}