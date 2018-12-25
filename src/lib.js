const ax = require("axel");
let x = 10;
let y = 10;

const generateBackdrop = function() {
  ax.clear();
  ax.bg(255, 255, 255);
  ax.box(1, 20, 120, 30);
};

const generateSnake = function({ x, y }) {
  ax.bg(0, 0, 0);
  ax.box(x, y, 2, 1);
};

const moveSnake = function() {
  generateBackdrop();
  generateSnake({ x: x++, y });
};

module.exports = {
  moveSnake
};
