import { Collective } from '../models/collective';
import { Spike } from './subjects/spike';

export class Spikes extends Collective {
	private count: number = 0;
	private frame: number = 0;

	constructor(x: number, y: number, r: number, vx: number, vy: number) {
		super(x, y, r, vx, vy);

		Spike.vx = vx;
		Spike.vy = vy;
	}

	protected append(): void {
		this.subjects.add(new Spike((Math.random() < 0.5 ? 0 : 1) * this.x, -this.r, this.r));
	}

	protected adjust(): void {
		this.count += 1;
	}

	public override update(cvs: HTMLCanvasElement): void {
		super.update(cvs);

		this.frame += 1;
		this.frame %= Math.max(20, 60 - this.count);

		if (this.frame < 1) {
			this.append();

			console.log(Spike.vy);
		}
	}
}
