export abstract class Subject {
	public static vx: number;
	public static vy: number;

	public static collides(subject1: Subject, subject2: Subject): boolean {
		const dx = (subject1.x - subject2.x) ** 2;
		const dy = (subject1.y - subject2.y) ** 2;

		return Math.sqrt(dx + dy) < subject1.r + subject2.r;
	}

	protected overflow_x: boolean = false;
	protected overflow_y: boolean = false;

	constructor(protected x: number, protected y: number, protected r: number) {}

	public abstract render(ctx: CanvasRenderingContext2D): void;
	public abstract update(cvs: HTMLCanvasElement): void;

	public get hasOverflown(): boolean {
		return this.overflow_x || this.overflow_y;
	}
}
