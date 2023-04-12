import { Subject } from '../../models/subject';

export class Spike extends Subject {
	public static vy: number = 0;

	constructor(x: number, y: number, r: number) {
		super(x, y, r);
	}

	public render(ctx: CanvasRenderingContext2D): void {
		ctx.beginPath();
		ctx.moveTo(this.x, this.y - this.r);
		ctx.lineTo(this.x + this.r, this.y);
		ctx.lineTo(this.x, this.y + this.r);
		ctx.lineTo(this.x - this.r, this.y);
		ctx.lineTo(this.x, this.y - this.r);
		ctx.fillStyle = 'blue';
		ctx.fill();
	}

	public update(cvs: HTMLCanvasElement): void {
		this.y += Spike.vy;

		if (this.y > cvs.height + this.r) {
			this.overflow = false;
		}
	}
}
