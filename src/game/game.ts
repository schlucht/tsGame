import { Point } from "../geometry/point";
import { Rect } from "../geometry/rect";
import { Size } from "../geometry/size";
import { RandomDigit } from "../math/random";
import { Canvas } from "./canvas";
import { Particle } from "./particle";

export class Game {

    particles: Particle[] = [];
    constructor (public canvas: Canvas) {
        this.canvas.canvas.addEventListener('mousemove', (e: MouseEvent) => {
            this.particles.forEach(particle => {
                if (particle.rect.point.x > e.clientX + 10) {
                    particle.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
                    particle.update(new Point(55, 16));  
                    particle.draw(canvas.ctx)                  
                }
            })
        })
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
        this.particles.forEach(particle => particle.update(new Point(5,5)))
    }
    
}