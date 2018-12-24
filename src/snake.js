class Snake {
  constructor(initXCordinate, initYCordinate) {
    this.initXCordinate = initXCordinate;
    this.initYCordinate = initYCordinate;
  }

  generate() {
    return { row: this.initXCordinate, col: this.initYCordinate };
  }
}

module.exports = { Snake };
