export class Point {
    p: Point;
    constructor(public x: number, public y: number){
        this.p = new Point(x, y);
    }

    public Add(p: Point): Point {
        this.p = new Point(this.p.x + p.x, this.p.y + p.y);
        return this.p;
    }
}