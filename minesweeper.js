document.addEventListener('DOMContentLoaded', startGame)

var board = genBoard(6)

function genBoard(size) {
    var board = {
          cells: [ 
            
            // {
            //         row: 0,
            //         col: 0,  
            //         isMine:false, 
            //         hidden:true,
            //         isMarked: false
            //         },
            //         {
            //         row: 0, 
            //         col: 1, 
            //         isMine:true, 
            //         hidden:true,
            //         isMarked: false
            //         }, 
                    
            //         { 
            //         row: 0,
            //         col: 2, 
            //         isMine:false, 
            //         hidden:true,
            //         isMarked: false
            //         },
            //         {
            //         row: 0,
            //         col: 3, 
            //         isMine:true, 
            //         hidden:true,
            //         isMarked: false
            //         },
            //         {
            //         row: 1, 
            //         col: 0, 
            //         isMine:true, 
            //         hidden:true,
            //         isMarked: false
            //         },

            //         {
            //         row: 1,
            //         col: 1, 
            //         isMine:true, 
            //         hidden:true,
            //         isMarked: false
            //         },
            //         {
            //         row: 1,
            //         col: 2, 
            //         isMine:true, 
            //         hidden:true,
            //         isMarked: false
            //         },
            //         {
            //           row: 1,
            //           col: 3, 
            //           isMine:true, 
            //           hidden:true,
            //           isMarked: false
            //           },
            //         {
            //         row: 2,
            //         col: 0, 
            //         isMine:false, 
            //         hidden:true,
            //         isMarked: false
            //         },
            //         {
            //         row: 2,
            //         col: 1, 
            //         isMine:true, 
            //         hidden:true,
            //         isMarked: false
            //         },
            //         {
            //         row: 2,
            //         col: 2, 
            //         isMine:false, 
            //         hidden:true,
            //         isMarked: false
            //         },
            //         {
            //         row: 2,
            //         col: 3, 
            //         isMine:true, 
            //         hidden:true,
            //         isMarked: false
            //         },
            //         {
            //         row: 3,
            //         col: 0, 
            //         isMine:true, 
            //         hidden:true,
            //         isMarked: false
            //         },
            //         {
            //         row: 3,
            //         col: 1, 
            //         isMine:true, 
            //         hidden:true,
            //         isMarked: false
            //         },
            //         {
            //         row: 3,
            //         col: 2, 
            //         isMine:true, 
            //         hidden:true,
            //         isMarked: false
            //         },
            //         {
            //         row: 3,
            //         col: 3, 
            //         isMine:true, 
            //         hidden:true,
            //         isMarked: false
            //         }    
                  ]
        };
    for (var k = 0; k < size; k++) {
      for (var l = 0; l < size; l++) {
        board.cells.push({row:k, col:l, isMine:Math.random() < 0.3, isMarked:false, hidden:true})
      }
    }
    return board;
  }
  /*
  cells is an object property.
 You can access (get) a property on an object by using either dot notation (board.cells) or bracket notation (board['cells']).
 The value inside the brackets in bracket notation can be a string variable: (board[propertyName]).
 You can access the first object inside the cells array using dot and array notation (board.cells[0]) or bracket and array notation (board['cells'][0]).
 You can access a property on that object using dot and array notation (board.cells[0].row).
  */
 

function startGame () {
      for (var q = 0; q < board.cells.length; q++) { 
        board.cells[q].surroundingMines = countSurroundingMines(board.cells[q])
      }
    document.addEventListener("click", checkForWin);
    document.addEventListener("auxclick", checkForWin);
    lib.initBoard()
};

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?


function checkForWin () {
  var audioWin = new Audio('sounds/crowdcheering.wav');


  for (var i = 0; i < board.cells.length; i++) {
    
    if (board.cells[i].isMine === false && board.cells[i].hidden === true) {
      return
      }
    if (board.cells[i].isMine === true && board.cells[i].isMarked === false) {
      return
      }
    }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  
  lib.displayMessage('You win!')
  audioWin.play();


    //   if (board.cells[i].isMarked == true && board.cells[i].hidden == true) {
    //   console.log("Checkforwin - not won yet : There are still hidden cells")
    //   [lib.displayMessage('There are still some cells left!')];
    //   return
    // }

  

};

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.


function countSurroundingMines (cell) {
  console.log("countSurroundingMines called")
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0
  
    for (var k = 0; k < surrounding.length; k++) {
      if (surrounding[k].isMine === true ){
        count++
      } 
    }
    return count

};

// resetting the game
  function reset() {
    location.reload();
}


