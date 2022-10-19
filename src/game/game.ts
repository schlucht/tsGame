import { Point } from "../geometry/point";
import { Rect } from "../geometry/rect";
import { Size } from "../geometry/size";
import { RandomDigit } from "../math/random";
import { Canvas } from "./canvas";
import { Particle } from "./particle";

export class Game {

    particles: Particle[] = [];
    image: HTMLImageElement;
    imgPos: Point;
    constructor (public canvas: Canvas) {
        this.image = document.getElementById('image1')! as HTMLImageElement;
        this.imgPos = new Point(
            this.canvas.size.width * 0.5 - this.image.width * 0.5,
            this.canvas.size.height * 0.5 -  this.image.height * 0.5
        )        
    }

    public init(){
        for (let i = 0; i < 10; i++) {
            this.particles.push(new Particle(new Rect(
                new Point(
                    RandomDigit(this.canvas.size.width), 
                    RandomDigit(this.canvas.size.height)),
                new Size(10, 10)
            )))
        }
    }

    public draw(){
        this.particles.forEach(particle => particle.draw(this.canvas.ctx))
        this.canvas.ctx.drawImage(this.image, this.imgPos.x, this.imgPos.y);
    }
    public update() {
        this.particles.forEach(particle => particle.update());
    }
    
}