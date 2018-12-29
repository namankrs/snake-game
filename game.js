const readLine = require("readLine-sync");
let { moveSnake, generateBackdrop, generateSnake } = require("./src/lib");
const ax = require("axel");

let x = 5;
let y = 30;

const eraseSnake = function({ x, y }) {
  ax.bg(255, 255, 255);
  ax.box(x, y, 1, 1);
};

let lastMove = { x: 0, y: 0 };
generateBackdrop();
const makeMove = function() {
  eraseSnake(lastMove);
  let move = readLine.keyIn();
  if (move === "s") {
    let cordinates = { x, y: y++ };
    lastMove = cordinates;
    generateSnake(cordinates);
  }
  if (move === "d") {
    let cordinates = { x: x++, y };
    lastMove = cordinates;
    generateSnake(cordinates);
  }
  if (move === "w") {
    let cordinates = { x, y: y-- };
    lastMove = cordinates;
    generateSnake(cordinates);
  }
  if (move === "a") {
    let cordinates = { x: x--, y };
    lastMove = cordinates;
    generateSnake(cordinates);
  }
  if (move === "x") {
    process.exit(0);
  }
  generateSnake(lastMove);
};

setInterval(makeMove, 100);
