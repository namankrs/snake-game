let finalBoard = function(side) {
  let emptyBoard = new Array(side)
    .fill("")
    .map(x => new Array(side - 2).fill(" ").map(x => x.slice()));

  return emptyBoard;
};

let board = finalBoard(10);
board[5][5] = "*";
console.log(board);
