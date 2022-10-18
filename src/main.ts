import { Canvas } from './game/canvas'
import { Game } from './game/game';
import './style.css'

const cv = new Canvas('canvas1', window.innerWidth, window.innerHeight);
const game = new Game(cv);
game.init();
game.draw();
function animate() {
    
}

animate();