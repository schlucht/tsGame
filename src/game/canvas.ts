import { Size } from "../geometry/size";

export class Canvas{
    public canvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;
    public size: Size;
    
    constructor (id: string, width: number, height: number) {
        
        this.canvas = document.getElementById(id)! as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d')!;
        this.canvas.width = width;
        this.canvas.height = height;
        this.size = new Size(this.canvas.width, this.canvas.height);
        

    }

    clear() {
        this.ctx.clearRect(0, 0, this.size.width, this.size.height);
    }
}