import { Point } from "../geometry/point";
import { Rect } from "../geometry/rect";

export class Particle {
    constructor(
        public rect: Rect,
        public color: string = 'black'
    ) {

    }

    public draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.fillRect(
            this.rect.point.x, 
            this.rect.point.y, 
            this.rect.size.width, 
            this.rect.size.height);
    }

    public update(p: Point): void {
        this.rect.point.x += p.x;
        this.rect.point.y += p.y;
    }
}