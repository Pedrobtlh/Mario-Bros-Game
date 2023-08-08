const gameBoard = document.querySelector('.game-board')
const pipe = document.querySelector('.pipe');


export function changemap() {
    

 gameBoard.style.backgroundImage = 'url("./docs/download.png")'
 pipe.src='./docs/bullet.png'
 pipe.style.width = '140px'
    
  }


  export function changemap2(){
    gameBoard.style.backgroundImage = 'url("./docs/869.jpg")'


  }

