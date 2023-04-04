const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const contador = document.querySelector('.contador');
let pontos = 0;
let canoPassado = false;
const marioDiedsong = new Audio('./mario-died.mp3');
marioDiedsong.volume = 0.3;

import { jump } from "./jump.js" // Módulo que faz o Mário Pular

const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        marioDiedsong.play()

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.src = './docs/mario-dead.png'

        contador.innerText ='Aperte ENTER para Reniciar o Jogo'

        clearInterval(loop)
        

    } else if (pipePosition <= 0) {
        // Mario passou pelo cano
        if (!canoPassado) {
          canoPassado = true;
          pontos++;
          contador.innerText = pontos;
        }
      } else {
        // Mario não bateu no cano e ainda não passou
        canoPassado = false;
      }


},10)

import { restart } from "./restart.js" // Módulo responsável por fazer o jogo reniciar caso o Mário enconste no cano

document.addEventListener('keydown', restart)
document.addEventListener('keydown', jump)


