export class Canvas {
	public readonly cvs: HTMLCanvasElement;
	public readonly ctx: CanvasRenderingContext2D;

	constructor(
		private readonly container: HTMLElement,
		private readonly dx: number,
		private readonly dy: number
	) {
		const canvas = document.createElement('canvas');

		canvas.width = dx;
		canvas.height = dy;

		this.cvs = canvas;
		this.ctx = canvas.getContext('2d')!;

		this.adjust();
		this.append();
	}

	public clear(): void {
		this.ctx.clearRect(0, 0, this.dx, this.dy);
	}

	private adjust(): void {
		const scale_x = this.container.clientWidth / this.dx;
		const scale_y = this.container.clientHeight / this.dy;
		const scale = Math.min(scale_x, scale_y);

		const trans_x = 0.5 * (this.container.clientWidth - scale * this.dx);
		const trans_y = 0.5 * (this.container.clientHeight - scale * this.dy);

		this.cvs.style.transformOrigin = `0 0`;
		this.cvs.style.transform = `translate(${trans_x}px, ${trans_y}px) scale(${scale})`;
	}

	private append(): void {
		this.container.append(this.cvs);
	}
}
