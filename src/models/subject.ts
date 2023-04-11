export abstract class Subject {
    public collides(subject1: Subject, subject2: Subject): boolean {
        const dx = (subject1.x - subject2.x) ** 2;
        const dy = (subject1.y - subject2.y) ** 2;

        return Math.sqrt(dx + dy) < subject1.r + subject2.r;
    }

    constructor(
        protected x: number,
        protected y: number,
        protected r: number,
        protected vx: number,
        protected vy: number,
    ) {}

    public abstract render(ctx: CanvasRenderingContext2D): void;
    public abstract update(cvs: HTMLCanvasElement): void;
}