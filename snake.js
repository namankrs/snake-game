class Snake {
  constructor(initXCordinate, initYCordinate) {
    this.initXCordinate = initXCordinate;
    this.initYCordinate = initYCordinate;
  }

  generate() {
    return { x: this.initXCordinate, y: this.initYCordinate };
  }
}
