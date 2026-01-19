let block;
let floor;
let ball;
let basket = loadImage('/assets/basket.jpg')

function preload() {
}

function setup() {
	new Canvas(1000, 600);
	 block = new Sprite(350, 300, 50, 50, DYN);
	 floor = new Sprite(500, 350, 1000, 10, STA);
	 basket = new Sprite(300, 300, )
	 world.gravity.y = 9.81;
	block.bounciness = 1;
	block.rotationSpeed = 3;
} 

function controls() {
	block.moveTowards(mouse, 0.10);
}

function draw () {
	
}

function update() {
	block.moveTowards(mouse, 0.5);
	};
 