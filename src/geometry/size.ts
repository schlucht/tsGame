export class Size {
    public constructor(public Width: number, public Height: number) {      
    }

    public toString(): string {
        return `Width: ${this.Width}, Height: ${this.Height}`;
    }
}