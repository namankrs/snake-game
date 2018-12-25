const ax = require("axel");

let initX = 10;
let initY = 10;
let width = 2;
let height = 1;

function generate() {
  ax.clear();
  ax.bg(255, 255, 255);
  ax.box(1, 20, 120, 30);
  for (let i = 0; i < 100000; i++) {
    ax.bg(0, 255, 0);
    ax.box(10, 10, 2, 1);
  }
}
// function f(){
//   ax.clear();
//   ax.bg(255,255,255);
//   ax.box(1,20,120,30);
//   ax.bg(0,255,0);
//   ax.line(5,5,7,7)

// }
console.log(generate());
