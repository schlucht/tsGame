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
            this.canvas.Size.Width * 0.5 - this.image.width * 0.5,
            this.canvas.Size.Height * 0.5 -  this.image.height * 0.5
        )        
    }

    public init(){
        for (let i = 0; i < 100; i++) {
            this.particles.push(new Particle(this))
        }
    }

    public draw(){
        this.particles.forEach(particle => particle.draw(this.canvas.ctx))
        this.canvas.ctx.drawImage(this.image, this.imgPos.X, this.imgPos.Y);
    }
    public update() {
        this.particles.forEach(particle => particle.update());
    }
    
}