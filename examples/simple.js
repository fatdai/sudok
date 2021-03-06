const Sudoku = require('..');

const grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 0, 8, 5],
  [0, 0, 1, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 5, 0, 7, 0, 0, 0],
  [0, 0, 4, 0, 0, 0, 1, 0, 0],
  [0, 9, 0, 0, 0, 0, 0, 0, 0],
  [5, 0, 0, 0, 0, 0, 0, 7, 3],
  [0, 0, 2, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 4, 0, 0, 0, 9],
];

const sudoku = new Sudoku(grid);

const start = Date.now();
console.log(sudoku.toString());
if (sudoku.solve(1)) {
  console.log('Solved quizz in', Date.now() - start, 'ms\n');
  for (let i = 0; i < sudoku.results.length; ++i) {
    console.log(sudoku.result(i));
  }
} else {
  console.log('Impossible!');
}
