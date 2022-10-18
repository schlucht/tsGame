import { Rect } from "../geometry/rect";

export class Particle {
    constructor(
        public rect: Rect
    ) {

    }

    public draw(context: CanvasRenderingContext2D) {
        context.fillRect(
            this.rect.point.x, 
            this.rect.point.y, 
            this.rect.size.width, 
            this.rect.size.height);
    }
}