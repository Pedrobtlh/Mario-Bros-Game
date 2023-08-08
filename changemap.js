const gameBoard = document.querySelector('.game-board')
const pipe = document.querySelector('.pipe');


export function changemap() {
    

 gameBoard.style.backgroundImage = 'url("./docs/download.png")'
 pipe.src='./docs/bullet.png'
 pipe.style.width = '140px'
    
  }


  export function changemap2(){
    gameBoard.style.backgroundImage = 'url("./docs/869.jpg")'
    pipe.src='./docs/doodle.gif'

  }

  export function changemap3(){
    gameBoard.style.backgroundImage = 'url("./docs/download3.png")'
    pipe.src= './docs/plant.png'
  }

  export function changemap4(){
    gameBoard.style.backgroundImage = 'url("./docs/download4.png")'
    pipe.src= './docs/pipe.png'

  }

