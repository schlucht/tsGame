import { Point } from "../geometry/point";
import { Rect } from "../geometry/rect";
import { Size } from "../geometry/size";
import { RandomDigit } from "../math/random";
import { Canvas } from "./canvas";

export class Particle {
    speed: Point;
    constructor(
        public rect: Rect,
        public color: string = 'black'
    ) {
        this.speed = new Point(RandomDigit(5) - 1, RandomDigit(2) - 1 );
        this.color = `hsl(${RandomDigit(360)}, 50%, 50%)`;
    }

    public draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.fillRect(
            this.rect.Point.X, 
            this.rect.Point.Y, 
            this.rect.Size.Width, 
            this.rect.Size.Height);
    }

    public update(gameSize: Size): void {
        if (this.rect.Point.X > gameSize.Width - this.rect.Width || this.rect.Point.X < 0) {
            this.speed.X *= -1;            
        }
        if (this.rect.Point.Y > gameSize.Height || this.rect.Point.Y < 0) {
            this.speed.Y *= -1;
        }
        this.rect.Point.Add(this.speed)        
    }
}