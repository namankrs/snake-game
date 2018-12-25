const ax = require("axel");

const generateBackdrop = function() {
  ax.clear();
  ax.bg(255, 255, 255);
  ax.box(1, 20, 120, 30);
};

const generateSnake = function({ x, y }) {
  ax.bg(0, 255, 0);
  ax.box(x, y, 2, 1);
};

const generateNextPos = function({ x, y }) {
  x = x + 1;
  return { x, y };
};

const moveSnake = function(initCordinate, cycles) {
  for (let move = 0; move < cycles; move++) {
    generateBackdrop();
    generateSnake(initCordinate);
    initCordinate = generateNextPos(initCordinate);
  }
};

module.exports = {
  moveSnake
};
