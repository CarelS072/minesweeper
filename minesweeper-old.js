document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [ {
            row: 0,
            col: 0,  
            isMine:false, 
            hidden:true,
            isMarked: false
            //surroundingMines: "",
            },
           {
             row: 0, 
             col: 1, 
             isMine:true  , 
             hidden:true,
             isMarked: false
            // surroundingMines: "",
            }, 
            
            { 
             row: 0,
             col: 2, 
             isMine:false, 
             hidden:true,
             isMarked: false
            //  surroundingMines: "",
            },
            {
            row: 0,
            col: 3, 
            isMine:true, 
            hidden:true,
            isMarked: false
            //  surroundingMines: "",
            },
            {
             row: 1, 
             col: 0, 
             isMine:true, 
             hidden:true,
             isMarked: false
            // surroundingMines: "",
            },

            {
             row: 1,
             col: 1, 
             isMine:true, 
             hidden:true,
             isMarked: false
            //  surroundingMines: "",
            },
            {
             row: 1,
             col: 2, 
             isMine:true, 
             hidden:true,
             isMarked: false
            //  surroundingMines: "",
          },
          {
           row: 1,
           col: 3, 
           isMine:false, 
           hidden:true,
           isMarked: false
          //  surroundingMines: "",
          },
          {
             row: 2,
             col: 0, 
             isMine:false, 
             hidden:true,
             isMarked: false
            //  surroundingMines: "",
            },
            {
             row: 2,
             col: 1, 
             isMine:true, 
             hidden:true,
             isMarked: false
            //  surroundingMines: "",
            },
            {
             row: 2,
             col: 2, 
             isMine:false, 
             hidden:true,
             isMarked: false
            //  surroundingMines: "",
          },
          {
           row: 2,
           col: 3, 
           isMine:true, 
           hidden:true,
           isMarked: false
          //  surroundingMines: "",
          },
          {
           row: 3,
           col: 0, 
           isMine:true, 
           hidden:true,
           isMarked: false
          //  surroundingMines: "",
          },
          {
          row: 3,
          col: 1, 
          isMine:true, 
          hidden:true,
          isMarked: false
          //  surroundingMines: "",
          },
          {
          row: 3,
          col: 2, 
          isMine:true, 
          hidden:true,
          isMarked: false
          //  surroundingMines: "",
          },
          {
          row: 3,
          col: 3, 
          isMine:true, 
          hidden:true,
          isMarked: false
          //  surroundingMines: "",
          }    ]
            
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
 //     var cells = document.getElementsByClassName('board')[0].children
      for (i = 0; i <= board.cells.length; i ++) { 
        board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
      }
      document.addEventListener("click", checkForWin);
      document.addEventListener("context", checkForWin);

  
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
  // console.log(board.cells, "after initboard") //check init problems after setting up the for loop
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (i = 0; i < board.cells.length; i ++){
    if (board.cells[i['isMine']]===true && board.cells[i['isMarked']]===false){
      return
    }
    else if (board.cells[i['isMine']]===true && board.cells[i['hidden']]===true) {
      return
    }
    lib.displayMessage('You win!')

  }

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
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count=0
  console.log("Surrounding is: ", surrounding) 
  
    for (var k = 0; k < surrounding.length; k++) {
      if (surrounding[k].isMine === true ){
        count++
        console.log(count)

      } 
      console.log(count)
      return count
    }
}

