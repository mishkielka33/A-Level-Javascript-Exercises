let smiley;

function setup() {
	new Canvas(500, 400);
	let smileText = `
..yyy
.yyyyy
yyyyyyy
yyyyyyy
.yyyyy
..yyy`;

	smiley = new Sprite();
	smiley.img = spriteArt(smileText, 32);
} 

function draw() {
    if (kb.pressing('up')) {
        smiley.scale *= 1.05;
	} else if (kb.pressing('down')) {
		smiley.scale *= 0.9;
	}
}