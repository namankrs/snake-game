const ax = require("axel");

const generateBackdrop = function() {
  ax.clear();
  ax.bg(255, 255, 255);
  ax.box(1, 20, 120, 30);
};

const generateSnake = function({ x, y }) {
  ax.bg(0, 0, 0);
  ax.box(x, y, 1, 1);
};

const moveSnake = function() {
  eraseSnake();
  generateSnake({ x: x++, y });
};

module.exports = {
  generateBackdrop,
  moveSnake,
  generateSnake
};
