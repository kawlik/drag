import { Subject } from './subject';

export abstract class Collective {
	protected subjects: Set<Subject>;

	constructor(
		protected x: number,
		protected y: number,
		protected r: number,
		protected vx: number,
		protected vy: number
	) {
		this.subjects = new Set<Subject>();
	}

	protected abstract append(): void;
	protected abstract adjust(): void;

	public render(ctx: CanvasRenderingContext2D): void {
		for (const subject of this.subjects) {
			subject.render(ctx);
		}
	}

	public update(cvs: HTMLCanvasElement): void {
		for (const subject of this.subjects) {
			subject.update(cvs);

			if (subject.hasOverflown) {
				this.subjects.delete(subject);
			}
		}
	}
}
