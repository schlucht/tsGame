import { Point } from "./point";
import { Size } from "./size";

export class Rect{
    public Size: Size;
    public Point: Point
    
    constructor(
        public X: number, 
        public Y: number, 
        public Width: number, 
        public Height: number) {
        this.Size = new Size(this.Width, this.Height);
        this.Point = new Point(this.X, this.Y)
    }

    toString(): string {
        return `X: ${this.X}, Y: ${this.Y}, Width: ${this.Width}, Height: ${this.Height}`;
    }
}