const { Snake } = require("./snake.js");
const { Move } = require("./move.js");
const { Board } = "./board.js";

const snake = new Snake(12, 12);
const snakeCordinates = snake.generate();
const board = new Board(25);
const move = new Move(snakeCordinates);
const initBoard = board.generate();

const integrate(board,snakeCordinates){
    let resultBoard = board.slice();
    resultBoard[snakeCordinates.row][snakeCordinates.col] = "=>";
    return resultBoard;
}

const insertSnake = integrate.bind(null,initBoard);
