const ax = require("axel");
let x = 30;
let y = 30;

const generateBackdrop = function() {
  ax.clear();
  ax.bg(255, 255, 255);
  ax.box(1, 20, 120, 30);
  ax.bg(0, 0, 0);
};

const generateSnake = function({ x, y }) {
  ax.box(x, y, 2, 1);
};

const moveSnake = function() {
  ax.clear();
  if (x === 118) x = 1;
  if (y === 29) y = 1;
  generateBackdrop();
  ax.box(x++, y, 2, 1);
};

module.exports = {
  generateSnake,
  moveSnake,
  generateBackdrop
};
