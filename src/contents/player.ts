import { Subject } from "../models/subject";

export class Player extends Subject {
    private len: number;
    private rad: number;

    constructor(
        x: number,
        y: number,
        r: number,
        vx: number,
        vy: number,
    ) {
        super(x, y, r, vx, vy);

        this.len = r * 2;
        this.rad = r / 2;
    }

    public render(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.roundRect(this.x, this.y, this.len, this.len, this.rad);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    }

    public update(cvs: HTMLCanvasElement): void {
        this.x += this.vx;

        if (this.x - this.r < 0) {
            this.x = 0;
        }

        if (this.x + this.r > cvs.width) {
            this.x = cvs.width - this.r;
        }
    }
}