export class Point {
 
    constructor(public X: number, public Y: number){           
    }

    /**
     * Added and new Point to this
     * @param p new Point for added
     * @returns this new Point
     */
    public Add(p: Point): Point {        
        this.X = this.X + p.X
        this.Y = this.Y + p.Y;       
        return this;
    }
    public Del(p: Point): Point {
        this.X = this.X - p.X;
        this.Y = this.Y - p.Y;        
        return this;
    }
    public Scale(f: number): Point {        
        this.X = this.X * f;
        this.Y =  this.Y * f;
        return this;
    }
    public Div (f: number): Point {
        if (f <= 0) return this;
        this.X = this.X / f;
        this.Y = this.Y / f;
        return this;
    }
    public toString(): string {
        return `X: ${this.X}, Y: ${this.Y}`;
    }
}