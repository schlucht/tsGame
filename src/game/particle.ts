import { Point } from "../geometry/point";
import { Rect } from "../geometry/rect";

export class Particle {
    speed: Point;
    constructor(
        public rect: Rect,
        public color: string = 'black'
    ) {
        this.speed = new Point(1,1);
    }

    public draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.fillRect(
            this.rect.point.x, 
            this.rect.point.y, 
            this.rect.size.width, 
            this.rect.size.height);
    }

    public update(): void {
        
        this.rect.point.x += 1;
        this.rect.point.y += 1;
        
    }
}