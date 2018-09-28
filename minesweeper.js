document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [ {
            row: 0,
            col: 0,  
            isMine:false, 
            hidden:true,
            isMarked: false,
            surroundingMines: "",
            },
           {
             row: 0, 
             col: 1, 
             isMine:true  , 
             hidden:true,
             isMarked: false,
            // surroundingMines: "",
            }, 
            
            {
             row: 0,
             col: 2, 
             isMine:false, 
             hidden:true,
             isMarked: false,
            //  surroundingMines: "",
            },
            
            {
             row: 1, 
             col: 0, 
             isMine:true, 
             hidden:true,
             isMarked: false,
            // surroundingMines: "",
            },

            {
             row: 1,
             col: 1, 
             isMine:true, 
             hidden:true,
             isMarked: false,
            //  surroundingMines: "",
            },
            {
             row: 1,
             col: 2, 
             isMine:true, 
             hidden:true,
             isMarked: false,
            //  surroundingMines: "",
            },
            {
             row: 2,
             col: 0, 
             isMine:true, 
             hidden:true,
             isMarked: false,
            //  surroundingMines: "",
            },
            {
             row: 2,
             col: 1, 
             isMine:true, 
             hidden:true,
             isMarked: false,
            //  surroundingMines: "",
            },
            {
             row: 2,
             col: 2, 
             isMine:true, 
             hidden:true,
             isMarked: false,
            //  surroundingMines: "",
            }
            
            ]
            
  /*
  cells is an object property.
 You can access (get) a property on an object by using either dot notation (board.cells) or bracket notation (board['cells']).
 The value inside the brackets in bracket notation can be a string variable: (board[propertyName]).
 You can access the first object inside the cells array using dot and array notation (board.cells[0]) or bracket and array notation (board['cells'][0]).
 You can access a property on that object using dot and array notation (board.cells[0].row).
  */
  
  
            // {row: 0, col: 1},
            // {row: 0, col: 1},
            // {row: 0, col: 1},] 
  // [ {row: 4, col: 4},{row: 4, col: 4} ]
  // cells: ['a', 'b', 'c', 'd'] - no object  
  // cells: [0, 1, 2, 3, 4, 5, 6, 7, 8] - no object
  // cells: [{}, {}, {}, {}] - no object
}
  


function startGame () {
    // console.log ("startGame called")
      var cells = document.getElementsByClassName('board')[0].children
     console.log(board.cells, "cells length?") /* FIXED - damnit undefined */
      // let i = 0
      // console.log(i, "i value before loop") //loop works

      for (i = 0; i <= 8; i ++) { 
        var cell = board.cells[i]
        countSurroundingMines(cell)

        // console.log(i, " i value after loop") //loop works 
        console.log("properties cell: ", cell, "cell index: ", i) /*  */
        
      
      }


  
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
  // console.log(board.cells, "after initboard") //check init problems after setting up the for loop
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

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

  var surroundingCells = lib.getSurroundingCells(cell['row'], cell['col'])
  console.log("Surrounding is: ", surroundingCells) 
  
    for (count = 0; surroundingCells == (cell['isMine'][true]) ; count++) {


      console.log('count value', count)
      console.log('surrounding value', surroundingCells.length )
      // cell['surroundingMines'] = surroundingCells
      return count
    }
 
  // console.log(cell)
  // console.log("surrounding is", surroundingCells)

}

