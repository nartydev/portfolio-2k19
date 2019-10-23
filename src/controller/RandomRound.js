/* eslint-disable */
import Point from './Point';
import { TweenLite, Ease, Power4, Power1, TimelineLite } from 'gsap';
import 'cardinal-spline-js/curve.min';
import brexit from '../assets/mayileave.jpg';
import cotenature from '../assets/cotenature.jpg';
import transportsolidere from '../assets/transportsolidere.jpg';
import teaser from '../assets/teaser.jpg';
import Hermite_class from 'hermite-resize';

export default class RandomRound {
	constructor(_key, _cursor, _context, _sizes, _points, _home, _work, _bg) {
		this.id = _key;
		this.cursor = _cursor;
		this.sizes = _sizes;
		this.context = _context;
		this.points = _points;
		this.pointsInitial = [];
		this.home = _home;
		this.work = _work;

		var HERMITE = new Hermite_class();

		if (this.home) {
			if (window.innerWidth > 1200) {
				this.allPoint = [
					-97 + this.sizes.width / 2 + 35,
					-300 + this.sizes.height / 2,
					97 + this.sizes.width / 2 + 35,
					-300 + this.sizes.height / 2,
					255 + this.sizes.width / 2 + 35,
					-185 + this.sizes.height / 2,
					315 + this.sizes.width / 2 + 35,
					0 + this.sizes.height / 2,
					255 + this.sizes.width / 2 + 35,
					185 + this.sizes.height / 2,
					97 + this.sizes.width / 2 + 35,
					300 + this.sizes.height / 2,
					-97 + this.sizes.width / 2 + 35,
					300 + this.sizes.height / 2,
					-255 + this.sizes.width / 2 + 35,
					185 + this.sizes.height / 2,
					-315 + this.sizes.width / 2 + 35,
					0 + this.sizes.height / 2,
					-255 + this.sizes.width / 2 + 35,
					-185 + this.sizes.height / 2
				];
			} else {
				this.allPoint = [
					-97 / 3 + this.sizes.width / 2 + 10,
					-300 / 3 + this.sizes.height / 2,
					97 / 3 + this.sizes.width / 2 + 10,
					-300 / 3 + this.sizes.height / 2,
					255 / 3 + this.sizes.width / 2 + 10,
					-185 / 3 + this.sizes.height / 2,
					315 / 3 + this.sizes.width / 2 + 10,
					0 / 3 + this.sizes.height / 2,
					255 / 3 + this.sizes.width / 2 + 10,
					185 / 3 + this.sizes.height / 2,
					97 / 3 + this.sizes.width / 2 + 10,
					300 / 3 + this.sizes.height / 2,
					-97 / 3 + this.sizes.width / 2 + 10,
					300 / 3 + this.sizes.height / 2,
					-255 / 3 + this.sizes.width / 2 + 10,
					185 / 3 + this.sizes.height / 2,
					-315 / 3 + this.sizes.width / 2 + 10,
					0 / 3 + this.sizes.height / 2,
					-255 / 3 + this.sizes.width / 2 + 10,
					-185 / 3 + this.sizes.height / 2
				];
			}
		} else {
			if (this.work) {
				if (this.id === 0) {
					this.allPoint = [
						-36 + this.sizes.width + 50,
						-119 + this.sizes.height / 2,
						40 + this.sizes.width + 50,
						-117 + this.sizes.height / 2,
						101 + this.sizes.width + 50,
						-71 + this.sizes.height / 2,
						124 + this.sizes.width + 50,
						1 + this.sizes.height / 2,
						99 + this.sizes.width + 50,
						74 + this.sizes.height / 2,
						36 + this.sizes.width + 50,
						118 + this.sizes.height / 2,
						-39 + this.sizes.width + 50,
						117 + this.sizes.height / 2,
						-101 + this.sizes.width + 50,
						71 + this.sizes.height / 2,
						-124 + this.sizes.width + 50,
						-2 + this.sizes.height / 2,
						-99 + this.sizes.width + 50,
						-74 + this.sizes.height / 2
					];
				} else {
					this.allPoint = [
						-36 - 50,
						-119 + this.sizes.height / 2,
						40 - 50,
						-117 + this.sizes.height / 2,
						101 - 50,
						-71 + this.sizes.height / 2,
						124 - 50,
						1 + this.sizes.height / 2,
						99 - 50,
						74 + this.sizes.height / 2,
						36 - 50,
						118 + this.sizes.height / 2,
						-39 - 50,
						117 + this.sizes.height / 2,
						-101 - 50,
						71 + this.sizes.height / 2,
						-124 - 50,
						-2 + this.sizes.height / 2,
						-99 - 50,
						-74 + this.sizes.height / 2
					];
				}
			}
		}
		for (let i = 0; i < this.allPoint.length; i++) {
			if (i % 2 === 0) {
				this.pointsInitial.push(
					new Point(
						this.points[i],
						this.points[i + 1],
						this.allPoint[i],
						this.allPoint[i + 1],
						this.context,
						this.sizes,
						this.cursor,
						this.home,
						this.work
					)
				);
			}
		}
		this.idProject = 0;
		this.url = [ brexit, cotenature, transportsolidere, teaser ];
		this.speed = {};
		if (this.work) {
			this.color = '#000';
		} else {
			if (this.sizes.width < 700) {
				this.color = `#fff`;
			} else {
				this.color = `#FFF7C7`;
			}
		}
		this.v = 0;
		this.img = new Image();
		this.img.id = 'pp-principal';
		if (this.home) {
			this.img.src = this.url[this.idProject];
		}
		this.nextProject = false;

		this.widthFirst = this.sizes.width;
		this.heightFirst = this.sizes.height;
	}

	hidden() {
		setTimeout(() => {
			TweenLite.to(this.context, 1.2, {
				globalAlpha: 0,
				ease: Power4.easeOut
			});
		}, 500);
	}

	callTransition() {
		/* TweenLite.to(this.context, 0.5, {
           globalAlpha: 0,
           ease: Power4.easeOut,
        })
        TweenLite.to(this.context, 0.8, {
            globalAlpha: 1,
            ease: Power1.easeOut,
            delay:0.5
        }) */
		TweenLite.to(this.context, 0.5, {
			filter: 'brightness(0%)',
			ease: Power1.easeOut
		});
		TweenLite.to(this.context, 0.8, {
			filter: 'brightness(100%)',
			ease: Power1.easeOut,
			delay: 0.5
		});
	}

	changeURLImage(id) {
		this.nextProject = true;
		for (let _point of this.pointsInitial) {
			_point.changePoint();
		}
		setTimeout(() => {
			this.img.src = this.url[id];
			this.nextProject = false;
		}, 500);
	}

	draw() {
		this.pointsInitial.map((_point, i) => {
			const idX = i * 2;
			const idY = i * 2 + 1;
			this.points[idX] += _point.coordX();
			this.points[idY] += _point.coordY();
		});
		if (this.nextProject) {
			this.callTransition();
		}

		if (this.sizes.width < 700) {
			this.context.drawImage(
				this.img,
				0,
				this.sizes.height / 2 - 250 / 2,
				this.sizes.width,
				this.img.height * (450 / this.img.width)
			);
		} else {
			this.context.drawImage(this.img, 0, 0, this.sizes.width, this.sizes.height);
		}

		if (!this.work) {
			this.context.globalCompositeOperation = 'destination-atop';
		} else {
			this.context.globalCompositeOperation = 'source-over';
		}

		this.context.fillStyle = this.color;
		this.context.beginPath();
		this.context.curve(this.points, 0.5, 10, true);
		this.context.closePath();
		this.context.fill();
		this.context.globalCompositeOperation = 'source-over';
	}

	resize() {
		if (this.sizes.width < 700) {
			HERMITE.resize_image('pp-principal', null, null, 50);
		}
		for (let i = 0; i < this.allPoint.length; i++) {
			if (i % 2 === 0) {
				this.pointsInitial.push(
					new Point(
						this.points[i],
						this.points[i + 1],
						this.allPoint[i],
						this.allPoint[i + 1],
						this.context,
						this.sizes,
						this.cursor,
						this.home,
						this.work
					)
				);
			}
		}
	}

	changePoint() {
		let Timeline = new TimelineLite();
		for (let _point of this.pointsInitial) {
			Timeline.from(_point, 0.3, {
				x: _point.x + Math.floor(Math.random() * 60) - 30,
				y: _point.y + Math.floor(Math.random() * 60) - 30
			});
		}
	}

	scaleShape() {
		for (let _point of this.pointsInitial) {
			TweenLite.to(_point, 2, {
				x: this.sizes.width / 2,
				y: this.sizes.height / 2,
				ease: Power4.easeInOut
			});
		}
	}

	moveImage() {
		console.log('cccccc image');
		console.log(this.img);
		TweenLite.to(this.img, 0.5, {
			x: 0,
			y: 0,
			ease: Power4.easeInOut
		});
	}
}
