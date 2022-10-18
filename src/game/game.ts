import { Point } from "../geometry/point";
import { Rect } from "../geometry/rect";
import { Size } from "../geometry/size";
import { RandomDigit } from "../math/random";
import { Particle } from "./particle";

export class Game {

    particles: Particle[] = [];
    constructor (public size: Size) {

    }

    public init(){
        for (let i = 0; i < 10; i++) {
            this.particles.push(new Particle(new Rect(
                new Point(RandomDigit(this.size.width), RandomDigit(this.size.height)),
                new Size(10, 10)
            )))
        }
    }

    public draw(ctx: CanvasRenderingContext2D){
        this.particles.forEach(particle => particle.draw(ctx))
    }
}