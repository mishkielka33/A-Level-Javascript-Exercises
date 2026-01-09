let block;
let floor;
let ball;

function setup() {
	new Canvas(1000, 600);
	 block = new Sprite(350, 300, 50, 50, DYN);
	 floor = new Sprite(500, 350, 1000, 10, DYN);
	 floor.rotationSpeed = 1;
	 world.gravity.y = 9.81;

} 

function update() {
	if (mouse.presses()) {
		block.x = mouse.x;
		block.y = mouse.y;
		let ball = (50)
	};
	clear()
}; 