class GameObject {
	constructor(el) {
		this.el = el;
		this.bound = this.el.getBoundingClientRect();
	}

	update() {
		this.bound = this.el.getBoundingClientRect();
		this.hit()
	}

	draw() {
		if(this.bound.y + this.bound.height < 0) return;
		push();
		translate(this.bound.x, this.bound.y);
		noStroke();
		fill(0, 255, 0, 255/5);
		rect(0, 0, this.bound.width, this.bound.height);
		pop();
	}

	hit() {
		if(mouseX > this.bound.left && mouseX < this.bound.right && mouseY > this.bound.top && mouseY < this.bound.bottom) {
			// console.log(this.el);
		}
	}
}