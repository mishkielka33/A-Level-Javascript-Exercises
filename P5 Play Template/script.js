let block;
let floor;
let ball; 
let points = 0;

function preload() {
}

function setup() {
	new Canvas(1000, 600);
	 block = new Sprite(350, 300, 50, 50, DYN);
	 ball = new Sprite(200, 200, 30, DYN); 
	 floor = new Sprite(500, 600, 1000, 10, STA);
	 world.gravity.y = 9.81;
	 block.bounciness = 1;
	//block.rotationSpeed = 3;
} 

function controls() {
	block.moveTowards(mouse, 0.10);
}

function draw () {
	
}

function update() {
	clear()
	block.moveTowards(mouse, 0.5);
	if (block.collides(floor)) {
		points = points + 1
	}
	};
 