let player;
let gameObjects = [];
let keys = [];

function setup() {
	console.clear();
	createCanvas(window.innerWidth, window.innerHeight);
	document.body.style.overflow = 'hidden';

	let tempContainerForGameObjects = [];
	document.querySelectorAll('.gameObject').forEach(el => tempContainerForGameObjects.push(el));
	tempContainerForGameObjects.forEach(gameObject => {
		gameObjects.push(new GameObject(gameObject));
	});

	player = new Player()

	background(255);
	tmp = pageYOffset;
	window.scroll(0, 1000000000);
	documentMaxHeight = pageYOffset;
	window.scroll(0, tmp);
}

function draw() {
	clear();

	for(let GO of gameObjects) {
		GO.update();
		GO.draw();
	}

	player.update();
	player.draw();
}

function keyPressed(e) {
	keys[keyCode] = true;
}

function keyReleased() {
	keys[keyCode] = false;
}