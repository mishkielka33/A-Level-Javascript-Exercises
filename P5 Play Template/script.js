let player;
let floor;
let ceiling;
let leftWall;
let rightWall;
let pointBox;
let points = 0;
let levelBox;
let level = 1;
let goal1;
let goal2;

function preload() {
}

function setup() {
	new Canvas(1000, 600);
	 player = new Sprite(350, 300, 50, 50);
	 player.color = blue;
	 ball = new Sprite(200, 200, 30, DYN); 
	 floor = new Sprite(500, 600, 1000, 10, STA);
	 ceiling = new Sprite(500, 1, 1000, 10, STA);
	 leftWall = new Sprite(0, 300, 10, 1000, STA);
	 rightWall = new Sprite(1000, 300, 10, 1000, STA);
	 world.gravity.y = 9.81;
	 pointBox = new Sprite(55, 30, 100, 50, STA);
	 pointBox.textSize = 40;
	 pointBox.text = points;
	 ball.bounciness = 1;
	 levelBox = new Sprite(500, 30, 100, 50, STA);
	 levelBox.textSize = 30;
	 levelBox.text = `Level ${level}`
	 let goal1 = new Sprite(10, 10, 50, DYN);
	
} 

function levels() {
	if (points < 10) {
	level = 1; 
	levelBox.text = `Level ${level}`
	player.rotationSpeed = 0
}
	else if (points > 10) {
		level = 2;
		levelBox.text = `Level ${level}`
		player.rotationSpeed = 3
	}
}


function controls() {
	player.moveTowards(mouse, 0.10);
}


function update() {
	clear();
	player.rotationSpeed = 0;
	player.moveTowards(mouse, 0.5);
	if (player.collides(ball)) {
		points = points + 1
		pointBox.text = points;
	};
	if (ball.collides(floor)) {
		points = 0
		pointBox.text = points;
		ball.overlaps(pointBox);
		ball.overlaps(levelBox);
	}

	//Levels

		if (points < 30) {
	level = 1; 
	levelBox.text = `Level ${level}`
}
	else if (points > 30) {
		level = 2;
		levelBox.text = `Level ${level}`
	}
	else if (points > 45) {
		level = 3;
			if (points < 10) {
	level = 1; 
	levelBox.text = `Level ${level}`
}
	else if (points > 10) {
		level = 2;
		levelBox.text = `Level ${level}`
	}
	else if (points > 5){
		
	}
	}
};
 