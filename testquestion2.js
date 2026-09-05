function setup() {
	new Canvas(600, 400);
    world.gravity.y = 10
}

function draw() {
	background(220); 
	if (mouse.presses()) {
		new Sprite(mouse.x, mouse.y, 30);
ground = createSprite(300, 385, 600, 30);
ground.collider = 'static'; 
ground.bounciness = 0.7;
    }
}