import { Canvas } from './game/canvas'
import { Game } from './game/game';
import './style.css'

const cv = new Canvas('canvas1', window.innerWidth, window.innerHeight);
const game = new Game(cv);
game.init();
function animate() {
    cv.clear();    
    game.draw();
    game.update();
    window.requestAnimationFrame(animate);
}

animate();