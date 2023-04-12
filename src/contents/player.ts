import { Subject } from '../models/subject';

export class Player extends Subject {
	private ln: number;
	private rd: number;

	constructor(x: number, y: number, r: number, vx: number, vy: number) {
		super(x, y, r);

		this.ln = r * 2;
		this.rd = r / 2;

		Subject.vx = vx * (Math.random() < 0.5 ? -1 : 1);
		Subject.vy = vy;
	}

	public toggle(): void {
		Subject.vx = -Subject.vx;
	}

	public render(ctx: CanvasRenderingContext2D): void {
		ctx.beginPath();
		ctx.roundRect(this.x - this.r, this.y - this.r, this.ln, this.ln, this.rd);
		ctx.fillStyle = 'red';
		ctx.fill();
		ctx.closePath();
	}

	public update(cvs: HTMLCanvasElement): void {
		this.x += Subject.vx;

		if (this.x < this.r) {
			this.x = this.r;
		}

		if (this.x > cvs.width - this.r) {
			this.x = cvs.width - this.r;
		}
	}
}
