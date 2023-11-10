import { Cell, CELL_STATUS } from './cell.js'

class Grid extends EventTarget {
    constructor(fieldCount, bombs) {
        super()
        this.fields = fieldCount
        this.bombs = bombs
        this.cells = this._randomField()
        this._setDigit()
        this.blankCells()
        this.eventBomb;
    }

    _draw() {
        let cs = []
        for (let y = 0; y < this.fields; y++) {
            let c
            for (let x = 0; x < this.fields; x++) {
                let cell = document.createElement('div')
                cell.classList.add('cell')                
                c = new Cell(x, y, cell)
                c.element = cell
                c.addEventListener('open', (e) => {
                    let cell = e.detail.target
                    this.eventBomb = new CustomEvent('click', {
                        detail: e.detail,
                    })
                    this.dispatchEvent(this.eventBomb)                    
                    cell.cellOpen()
                    if (cell.status === CELL_STATUS.BLANK) {
                        this.openBlanks(cell)
                    }
                    if (cell.status === CELL_STATUS.BOMB) {
                        cell.cellOpen()
                        this.dispatchEvent(this.eventBomb)
                        this.resetGrid()
                    }
                })
                cs.push(c)
            }
        }
        return cs
    }

    onClick(e) {        
        const flags = this.cells.filter(f => f.status === CELL_STATUS.FIXED)
        console.log(flags.length)
        this.dispatchEvent(this.eventBomb)
    }

    _randomField() {
        let mineFields = this.bombs
        let cs = this._draw()
        while (mineFields > 0) {
            let x = Math.floor(Math.random() * this.fields)
            let y = Math.floor(Math.random() * this.fields)

            let res = cs.filter((s) => s.x === x && s.y === y)
            if (res.some(s => s.status === CELL_STATUS.BOMB)) {
                continue
            }
            res.map(v => v.status = CELL_STATUS.BOMB)
            mineFields--;
        }
        return cs
    }

    _setDigit() {
        const bombs = this.cells.filter(f => f.status === CELL_STATUS.BOMB)
        bombs.forEach(cell => {
            let tiles = this._adjectedTiles(this.cells, { x: cell.x, y: cell.y })
            tiles.forEach(t => {
                this._setBombStaus(t)
            })
        })
    }

    _adjectedTiles(grid, { x, y }) {
        let tiles = []
        for (let offsetY = -1; offsetY <= 1; offsetY++) {
            for (let offsetX = -1; offsetX <= 1; offsetX++) {
                let c = grid.find(c => c.x === x + offsetX && c.y === y + offsetY)
                if (c) tiles.push(c)
            }
        }
        return tiles
    }

    _setBombStaus(c) {
        if (c && c.status !== CELL_STATUS.BOMB) {
            c.digit += 1
            c.status = CELL_STATUS.DIGIT
        }
    }
    resetGrid() {
        this.cells.forEach(cell => {
            cell.cellOpen()
        })
    }

    blankCells() {
        this.cells.forEach(cell => {
            if (cell.status === CELL_STATUS.NONE) {
                cell.status = CELL_STATUS.BLANK
            }
        })
    }  

    openBlanks(c) {
        let tiles = this._adjectedTiles(this.cells, c)
        console.log(tiles.length)
        let blankTiles = tiles.filter(f => f.status === CELL_STATUS.BLANK)

        tiles.forEach(t => {
            if (t) {
                t.cellOpen()
            }                
        })
    }

}

export { Grid }