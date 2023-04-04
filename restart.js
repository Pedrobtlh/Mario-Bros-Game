export function restart(ev){
    if(ev.code === 'Enter'){
        
        pontos = 0
    
        pipe.style = 'animation'
        pipe.style.left = 400
    
      

        mario.style = 'animation'
        mario.src = 'docs/mario-run.gif'
    
        contador.innerText = pontos
    
        // A partir daqui o jogo volta ao Normal Visualmente, porém não respeita as regras do Jogo
    
    
    
    } const loop = setInterval(()=>{ // Retornamos com o Loop para que O Mario Continue Sendo Monitorado
    
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
    
    
    
    }

    document.addEventListener('keydown', restart)
    const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const contador = document.querySelector('.contador')
let pontos = 0
let canoPassado = false
const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
const marioDiedsong = new Audio('./mario-died.mp3')
marioDiedsong.volume = 0.3;