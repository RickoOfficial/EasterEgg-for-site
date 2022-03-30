class Player {
	constructor() {
		this.pos = createVector(width/2, height/2);
		this.heading = 0;
		this.rotation = 0
		this.vel = createVector(0, 0);
		this.speed = 1;
		this.r = 20;
	}

	update() {
		this.move();
		this.edge();
		this.heading += this.rotation;
		this.rotation = 0;
		this.pos.add(this.vel);
		this.vel.mult(this.speed/100*95);
	}

	draw() {
		push();
		translate(this.pos);
		// scale(width/100/100*10);
		scale(1.5);

		rotate(this.heading);

		triangle(-this.r, -this.r, this.r, 0, -this.r, this.r);
		pop();
	}

	move() {
		if(keys[37] == true) {
			this.rotation += -0.1;
		}
		if(keys[38] == true) {
			this.vel.add(p5.Vector.fromAngle(this.heading).mult(this.speed));
		}
		if(keys[39] == true) {
			this.rotation += 0.1;
		}
		if(keys[40] == true) {
			this.vel.sub(p5.Vector.fromAngle(this.heading).mult(this.speed/2));
		}
	}

	edge() {
		if(this.pos.x > width + this.r*2) this.pos.x = 0 -this.r*1.5;
		if(this.pos.x < -this.r*2) this.pos.x = width + this.r*1.5;
		if(this.pos.y < 150 && this.vel.y < 0 && pageYOffset !== 0) {
			window.scroll(0, pageYOffset + (this.vel.y*1.5))
			this.pos.y -= this.vel.y;
		}
		if(this.pos.y > height-150 && this.vel.y > 0 && pageYOffset !== documentMaxHeight) {
			window.scroll(0, pageYOffset + (this.vel.y*1.5))
			this.pos.y -= this.vel.y;
		}
		if(this.pos.y > height + this.r*2) {
			this.pos.y = 0 -this.r*1.5;
			window.scroll(0, 0);
		}
		if(this.pos.y < -this.r*2) {
			this.pos.y = height + this.r*1.5;
			window.scroll(0, documentMaxHeight);
		}
	}
}