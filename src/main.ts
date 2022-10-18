import { Canvas } from './game/canvas'
import { Game } from './game/game';
import './style.css'

const cv = new Canvas('canvas1', window.innerWidth, window.innerHeight);
const game = new Game(cv.size);
game.init();
game.draw(cv.ctx);
function animate() {
    
}

animate();