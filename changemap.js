const gameBoard = document.querySelector('.game-board')
const pipe = document.querySelector('.pipe');


export function changemap() {   
 gameBoard.style.backgroundImage = 'url("./docs/download.png")'
 gameBoard.style.borderBottom = '14px solid rgb(0,0,0)'
 pipe.src='./docs/bullet.png'
 pipe.style.width = '150px'

  }


  export function changemap2(){
    gameBoard.style.backgroundImage = 'url("./docs/869.jpg")'
    pipe.src='./docs/doodle.gif'
    pipe.style.width = '150px'
    gameBoard.style.borderBottom = '14px solid rgb(255,218,185)'
  }

  export function changemap3(){
    gameBoard.style.backgroundImage = 'url("./docs/download3.png")'
    gameBoard.style.borderBottom = '14px solid rgb(0,128,0)'
    pipe.src= './docs/plant.png'
    pipe.style.width = '150px'
  }

  export function changemap4(){
    gameBoard.style.backgroundImage = 'url("./docs/download4.png")'
    gameBoard.style.borderBottom = '14px solid rgb(245,255,250)'
    pipe.src= './docs/snowman.png'
    pipe.style.width = '160px'
  }
  export function changemap5(){
    gameBoard.style.backgroundImage = 'url("./docs/download5.png")'
    gameBoard.style.borderBottom = '14px solid rgb(139,69,19)'
    pipe.style.width = '140px'
    pipe.src= './docs/goomba.png'
    

  }
  export function changemap6(){
    gameBoard.style.backgroundImage = 'url("./docs/download6.png")'
    gameBoard.style.backgroundSize = 'cover'
    pipe.src= './docs/pipe.png'

  }
  export function changemap7(){
    gameBoard.style.backgroundImage = 'url("./docs/download7.png")'
    gameBoard.style.borderBottom = '14px solid rgb(220,220,220)'
    gameBoard.style.backgroundSize = 'cover'
    pipe.style.width = '140px'
    pipe.src= './docs/skeleton.png'

  }

