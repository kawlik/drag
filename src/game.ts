import { Canvas } from './contents/canvas';
import { Player } from './contents/player';

export class Game {
	private canvas: Canvas;
	private player: Player;

	constructor(private readonly container: HTMLElement) {
		this.canvas = new Canvas(container, 400, 800);
        this.player = new Player(200, 500, 15, 15, 0);
	}

    public animate(): void {
        this.update();
        this.render();
    }

    private render(): void {
        this.canvas.clear();
        this.player.render(this.canvas.ctx);
    }

    private update(): void {
        this.player.update(this.canvas.cvs);
    }
}
