export function restart(ev) {
  if (ev.code === 'Enter') {
       pontos = 0;

      gameBoard.style.backgroundImage = 'linear-gradient(#87CEEB,#E0F6FF)';
      pipe.src='./docs/pipe.png'
      pipe.style = 'animation';
      pipe.style.left = 400;

      mario.style = 'animation';
      mario.src = 'docs/mario-run.gif';

      contador.innerText = pontos;
  }

  const loop = setInterval(() => {
      const pipePosition = pipe.offsetLeft;
      const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

      if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
          pipe.style.animation = 'none';
          pipe.style.left = `${pipePosition}px`;

          marioDiedsong.play();

          mario.style.animation = 'none';
          mario.style.bottom = `${marioPosition}px`;
          mario.src = './docs/mario-dead.png';

          contador.innerText = 'Aperte ENTER para Reniciar o Jogo';

          clearInterval(loop);
      } else if (pipePosition <= 0) {
          if (!canoPassado) {
              canoPassado = true;
              pontos++;
              contador.innerText = pontos;

              if (pontos == 10) {
                  changemap();
              }
              if(pontos == 20){
                changemap2()
              }
              if(pontos == 30){
                changemap3()
              }
    
          }
      } else {
          canoPassado = false;
      }
  }, 10);
}

document.addEventListener('keydown', restart);

const gameBoard = document.querySelector('.game-board');
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const contador = document.querySelector('.contador');
let pontos = 0;
let canoPassado = false;
const marioDiedsong = new Audio('./mario-died.mp3');
marioDiedsong.volume = 0.3;

import { changemap } from "./changemap.js";
import { changemap2 } from "./changemap.js";
import { changemap3 } from "./changemap.js";
