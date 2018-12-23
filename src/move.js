class Move {
  constructor(currCordinate) {
    this.currCordinate = currCordinate;
  }

  down() {
    return { row: this.currCordinate.row + 1, col: this.currCordinate.col };
  }

  up() {
    return { row: this.currCordinate.row - 1, col: this.currCordinate.col };
  }

  left() {
    return { row: this.currCordinate.row, col: this.currCordinate.col - 1 };
  }

  right() {
    return { row: this.currCordinate.row, col: this.currCordinate.col + 1 };
  }
}
