/* eslint-disable */

export default class Point {
	constructor(_x, _y, _ix, _iy, _context, _sizes, _cursor, _home, _work) {
		this.x = _x;
		this.ix = _ix;
		this.vx = 0;
		this.vy = 0;
		this.cx = 0;
		this.y = _y;
		this.iy = _iy;
		this.cy = 0;
		this.sizes = _sizes;
		this.cursor = _cursor;
		this.context = _context;

		if (_home) {
			this.viscosity = 200;
			this.mouseDist = 120;
			this.damping = 0.05;
		} else {
			this.viscosity = 200;
			this.mouseDist = 80;
			this.damping = 0.05;
		}

		this.angle = (Math.random() - 0.5) * Math.PI * 2;
		if (_work == false) {
			this.randomPosition();
		}
		this.resetAfterStart(_home);
	}

	resetAfterStart(home) {
		if (home) {
			setTimeout(() => {
				this.viscosity = 30;
				this.mouseDist = 120;
				this.damping = 0.1;
			}, 2000);
		} else {
			setTimeout(() => {
				this.viscosity = 30;
				this.mouseDist = 80;
				this.damping = 0.1;
			}, 2000);
		}
	}

	changePoint() {
		console.log(this.x, this.y);
		let vx = this.sizes.width / 2 - this.x;
		let vy = this.sizes.height / 2 - this.y;
		this.vx = vx / 7;
		this.vy = vy / 7;
		console.log(this.x, this.y);
		/* setTimeout(() => {
			this.vx = this.sizes.width * 2;
			this.vy = this.sizes.height * 2;
		}, 500); */
	}

	randomPosition() {
		let time = [ 3000, 6000, 4500 ];
		let interval = Math.floor(Math.random() * time.length);
		setInterval(() => {
			this.angle = -this.angle;
			interval = Math.floor(Math.random() * time.length);
		}, time[interval]);

		if (window.innerWidth > 700) {
			const loop = () => {
				window.requestAnimationFrame(loop);
				this.x += this.angle / 20;
				this.y += this.angle / 20;
			};
			loop();
		} else {
			const loop = () => {
				window.requestAnimationFrame(loop);
				this.x += this.angle / 40;
				this.y += this.angle / 40;
			};
			loop();
		}
	}

	coordX() {
		let dx = this.ix - this.cursor.x,
			dy = this.iy - this.cursor.y;
		this.vx += (this.ix - this.x) / this.viscosity;
		// Move point only when leaving color block
		if (
			(this.cursor.directionX > 0 && this.cursor.x > this.x) ||
			(this.cursor.directionX < 0 && this.cursor.x < this.x)
		) {
			if (Math.sqrt(dx * dx) < this.mouseDist && Math.sqrt(dy * dy) < this.mouseDist) {
				this.vx = this.cursor.speedMouseX / 8;
			}
		}

		this.vx *= 1 - this.damping;

		this.x += this.vx;
		return this.vx;
	}

	coordY() {
		let dx = this.ix - this.cursor.x,
			dy = this.iy - this.cursor.y;
		this.vy += (this.iy - this.y) / this.viscosity;

		if (
			(this.cursor.directionY > 0 && this.cursor.y > this.y) ||
			(this.cursor.directionY < 0 && this.cursor.y < this.y)
		) {
			if (Math.sqrt(dx * dx) < this.mouseDist && Math.sqrt(dy * dy) < this.mouseDist) {
				this.vy = this.cursor.speedMouseY / 8;
			}
		}

		this.vy *= 1 - this.damping;
		this.y += this.vy;
		return this.vy;
	}
}
