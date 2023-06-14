export class Canvas {
    public canvas: HTMLCanvasElement
    public ctx: CanvasRenderingContext2D
    constructor() {
        this.canvas = document.getElementById('canvas1') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d')!;
        this.draw()
    }

    private draw() {
        console.log('draw');
        this.ctx.fillRect(5,5,200,200);
    }
}