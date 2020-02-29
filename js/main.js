//PREP for TIC TAC TOE
//P : player 1 choice, player 2 choice,
//R: X or O  on DOM, winner, draw, loser, points of wins
//E: win 3 in a row, 8 possible ways to win (3 up and down, 3 left to right, and 2 diagonal ways)
//P: Tic Tac Toe Exercise ->
//click to place x and o
//win should be displayed in dom in the form of a counter,
// make game OOP
// create Scoreboard
// Select a box and display the player's selection
// Determine if player 1 or 2 win
// Reset button in case players want to play again
// Undo button if player makes mistake
// Tic tac toe grid made using border bottom and border right?
// Questions: how does the computer know how many times you win? Or where the x is and where the o is?

// worked on this with Sam, Ken, Miggie, Chi, Shane, Zikre with the mentorship of Ethan and Raymond


// document.getElementById("box1").addEventListener("click", playerMove)
// let playerOne = {name: "markerX", value: "X"}
// let playerTwo = {name: "markerO", value: "O" }
// let win = [
//   [1, 2, 3], //[box1, box2, box3]
//   [4, 5, 6], //[box4, box5, box6]
//   [7, 8, 9], //[box7, box8, box9]
//   [1, 4, 7], //etc...
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7], * but maybe should start withh zero instead of oone  if it is an array
// ];

// function Game() {
//   this.gameState = {
//     'box0': null,
//     'box1': null,
//   };
//   this.checkWin() {
//
//   }
// }
//
// let game = new Game()
let counter = 0;
const box0= document.getElementById('box0')
const box1= document.getElementById('box1')
const box2= document.getElementById('box2')
const box3= document.getElementById('box3')
const box4= document.getElementById('box4')
const box5= document.getElementById('box5')
const box6= document.getElementById('box6')
const box7= document.getElementById('box7')
const box8= document.getElementById('box8')
let winLose = document.getElementById("result")


function win(which){
  let winnerStatement = `The winner is: ${which}`; // template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them

  winLose.innerHTML = winnerStatement
  // alert ("winner"+ " " + which)
  // document.querySelectorAll(".box").forEach( box => {
  //     box.innerHTML = " "
  // })
}

function clearBoard (){
  document.querySelectorAll(".box").forEach( box => {
      box.innerHTML = " "
  })
  // returns  the  first element  that matches a specified CSS selector in the document and it only return the first elel
  document.querySelectorAll("#result").forEach( box =>{ //ment that matches the specified slectors
      box.innerHTML = " "
  })
  counter = 0
  winLose.innerHTML = ""
}

reset.addEventListener('click', clearBoard)

undo.addEventListener('click', noGo)

function noGo(){
  alert("NO TAKE BACKS!!")
}

function checkWin(){
  if(box0.innerHTML !== " " &&  box0.innerHTML === box1.innerHTML && box1.innerHTML === box2.innerHTML){
    win(box0.innerHTML) // after alert call a function that clears the board &
    //speciify if x win or O win
    // try to make both happen in one function
    // remember to update the counter to 0
  }if(box3.innerHTML !== " " &&  box3.innerHTML === box4.innerHTML && box4.innerHTML === box5.innerHTML){
    win(box3.innerHTML)
   }if(box6.innerHTML !== " " &&  box6.innerHTML === box7.innerHTML && box7.innerHTML === box8.innerHTML){
    win(box6.innerHTML)
  }if(box4.innerHTML !== " " &&  box0.innerHTML === box4.innerHTML && box4.innerHTML === box8.innerHTML){
    win(box4.innerHTML)
  }if(box2.innerHTML !== " " &&  box2.innerHTML === box4.innerHTML && box4.innerHTML === box6.innerHTML){
    win(box2.innerHTML)
  }if(box0.innerHTML !== " " &&  box0.innerHTML === box3.innerHTML && box3.innerHTML === box6.innerHTML){
    win(box0.innerHTML)
  }if(box1.innerHTML !== " " &&  box1.innerHTML === box4.innerHTML && box4.innerHTML === box7.innerHTML){
    win(box1.innerHTML)
  }if(box2.innerHTML !== " " &&  box2.innerHTML === box5.innerHTML && box5.innerHTML === box8.innerHTML){
    win(box2.innerHTML)
  }  //if else statement with logic of and + the three equals signs means it has to abosultely equal this  if not it wont run the syntax
}

function markBoxAndCheckWin(event){
console.log(winLose.innerHTML);
  const box = event.target

  if(box.innerHTML === "O" || box.innerHTML === "X"){
    alert("NO!")
    return;
  }

  counter += 1
  if(winLose.innerHTML===""){
    console.log("hello");
  if (counter % 2 == 0 ){ //we did remainder 2 here
    // game.gameState[box] = 'O'
    box.innerHTML= "O"
    // console.log ("0")
  }else{
    // console.log ("X")
    box.innerHTML= "X"
  // }if (totalBoxes === "X" || totalBoxes === "O"){
  //   alert("Tie")
  }
}
console.log("hello");
  if (counter === 9){
    document.getElementById("result").innerHTML = 'Draw, You Both Lose?'
  } // if the grid is absolutely filled with X and O and no one got three in a row, then the browser will push the message to the players
  checkWin()
  // console.log(counter, box)
}

function processBox(box){
  box.addEventListener('click', markBoxAndCheckWin) // the computer is listening for the click of the button and will let the user know the outcome at the end of the game
}

const totalBoxes = document.querySelectorAll('.box') // array of a box with miniboxes inside of it
// console.log(totalBoxes)
totalBoxes.forEach(processBox) // apply processBox to each Element of totalBoxes... does the same thing to each box on an individual basis.think of it like totalBoxes and forEach are handing each box to the function processBox.
