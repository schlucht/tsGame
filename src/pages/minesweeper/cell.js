const CELL_STATUS = {
    NONE: 'none',
    BLANK: 'blank',
    BOMB: 'bomb',
    DIGIT: 'digit',
    FIXED: 'fixed',
}

class Cell extends EventTarget {

    constructor(x, y, element) {
        super()
        this.x = x
        this.y = y
        this.status = CELL_STATUS.NONE
        this.digit = 0
        this.element = element
        this.createCell()
        this.event = new CustomEvent("open", {
            detail: {
                target: this,
            }
        })
        this.eventFlag = new CustomEvent("flag", {
            detail: {
                target: this,
            }
        })    
    }

    createCell() {
        let cell = this.element
        cell.addEventListener('click', this.onOpen.bind(this))
        cell.addEventListener('contextmenu', this.onFlag.bind(this))
    }

    onOpen(e) {    
        this.dispatchEvent(this.event)
    }

    onFlag(e) {  
        let cell = this.element      
        cell.status = CELL_STATUS.FIXED
        cell.classList.add(CELL_STATUS.FIXED)
        cell.innerText = '🚩'
        this.dispatchEvent(this.eventFlag)
        e.preventDefault()
    }
    

    cellOpen() {
        let ele = this.element
        ele.classList.add(this.status, 'active')

        switch (this.status) {
            case CELL_STATUS.BOMB:
                ele.innerText = '🔥'
                break
            case CELL_STATUS.BLANK:
                ele.textContent = ''
                ele.style.backgroundColor = '#888'
                break
            case CELL_STATUS.DIGIT:
                ele.style.fontSize = '2rem'
                ele.style.fontWeight = '300'
                ele.textContent = this.digit
                switch (this.digit) {
                    case 1:
                        ele.style.color = 'blue'
                        break
                    case 2:
                        ele.style.color = 'green'
                        break
                    case 3:
                        ele.style.color = 'magenta'
                        break
                    default:
                        ele.style.color = 'orange'
                }
                break
            default:
                ele.textContent = ''
        }
    }


    openCell() {
        if (this.status === 'blank') {
            this.status = 'none'
        }
    }



}

export { Cell, CELL_STATUS }