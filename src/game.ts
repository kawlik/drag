import { Canvas } from './contents/canvas';
import { Player } from './contents/player';

export class Game {
	private canvas: Canvas;
	private player: Player;

	private frame: number = 0;
	private score: number = 0;

	constructor(private readonly container: HTMLElement) {
		this.canvas = new Canvas(container, 400, 800);
		this.player = new Player(200, 500, 15, 15, 0);

		this.animate();
	}

	public toggle(): void {
		this.player.oppose();
	}

	private animate(): void {
		this.update();
		this.render();

		this.frame = requestAnimationFrame(this.animate.bind(this));
	}

	private render(): void {
		this.canvas.clear();
		this.player.render(this.canvas.ctx);
	}

	private update(): void {
		this.player.update(this.canvas.cvs);
	}
}
