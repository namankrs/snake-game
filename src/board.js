class Board {
  constructor(side) {
    this.side = side;
  }

  generate() {
    let emptyBoard = new Array(this.side - 2)
      .fill("")
      .map(x => new Array(this.side - 2).fill("  ").map(x => x.slice()));

    let filledLine = new Array(this.side - 2).fill("--");
    emptyBoard.unshift(filledLine.slice());
    emptyBoard.push(filledLine.slice());
    let finalBoard = emptyBoard.map(function(x) {
      x.unshift("|");
      x.push("|");
      return x;
    });
    return finalBoard;
  }

  integrateSnake(board, snakeCordinates) {
    let resultBoard = board.slice();
    resultBoard[snakeCordinates.row][snakeCordinates.col] = "=>";
    return resultBoard;
  }
}

module.exports = { Board };
