 export const jump = () => {
    mario.classList.add('jump');
    soundJump.play()
    setTimeout(()=>{
       mario.classList.remove('jump')
    } ,500)
   }

   const mario = document.querySelector('.mario')
   const soundJump = new Audio('./jump-audio.mp3')
   soundJump.volume = 0.2; // Define o volume para 20%

   document.addEventListener('keydown', jump)
