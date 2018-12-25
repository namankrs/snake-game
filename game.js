let { moveSnake, generateBackdrop, generateSnake } = require("./src/lib");

generateBackdrop();

setInterval(moveSnake, 100);
