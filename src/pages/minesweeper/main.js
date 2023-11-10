import { Grid } from '/grid.js'
import { CELL_STATUS } from '/cell.js'


let mines = 10

const WIDTH = '50px'

const CANVAS = document.querySelector('.canvas')
const fieldInput = document.getElementById('fieldCount')
const reset = document.getElementById('btnReset')
const btnNew = document.getElementById('btnNew')
const blocker = document.getElementById('blocker')
const click = document.getElementById('click')
const gameover = document.querySelector('.gameover')

let grid;
let fields = 0;

create()

fieldInput.addEventListener('change', (e) => {
    fields = e.target.value
    
    if (fields <= 6) mines = 2
    if (fields >6 && fields <=10) mines = 10

    create()
})

reset.addEventListener('click', function (e) {
    grid.resetGrid()    
})

CANVAS.addEventListener('click', (e) => {
    click.innerHTML = +click.innerHTML + 1    
})

btnNew.addEventListener('click', function (e) {
    create()
    click.innerHTML = 0  
    gameover.style.display = 'none'
})

// Create Grid
function create() {
    fields = +fieldInput.value
    click.innerHTML = 0
    CANVAS.innerHTML = ""
    grid = new Grid(fields, mines)    
    blocker.innerHTML = mines = grid.bombs
    grid.addEventListener('click', (e) => {
        let c = e.detail.target        
        if (c.status === CELL_STATUS.BOMB) {
            gameover.style.display = 'block'
        }
    })

    grid.cells.forEach((cell) => {
        CANVAS.append(cell.element)
    })
    CANVAS.style.setProperty('--size', fields)
    CANVAS.style.setProperty('--width', WIDTH)
}

