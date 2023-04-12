import { Canvas } from './contents/canvas';
import { Player } from './contents/player';
import { Spikes } from './contents/spikes';

export class Game {
	private canvas: Canvas;
	private player: Player;
	private spikes: Spikes;

	private frame: number = 0;
	private score: number = 0;

	constructor(private readonly container: HTMLElement) {
		this.canvas = new Canvas(container, 400, 800);
		this.player = new Player(200, 550, 20, 30, 0);
		this.spikes = new Spikes(400, 800, 25, 0, 10);

		this.animate();
	}

	public toggle(): void {
		this.player.toggle();
	}

	private animate(): void {
		this.update();
		this.render();

		this.frame = requestAnimationFrame(this.animate.bind(this));
	}

	private render(): void {
		this.canvas.clear();
		this.player.render(this.canvas.ctx);
		this.spikes.render(this.canvas.ctx);
	}

	private update(): void {
		this.player.update(this.canvas.cvs);
		this.spikes.update(this.canvas.cvs);
	}
}
