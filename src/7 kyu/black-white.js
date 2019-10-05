const mineColor = (file, rank) => {
  const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const rows = [1, 2, 3, 4, 5, 6, 7, 8];

  let colIndex;
  let rowIndex;
  let color = 'white';

  cols.forEach((element, index) => {
    if (element === file) {
      colIndex = index + 1;
    }
  });

  rows.forEach((element, index) => {
    if (element === rank) {
      rowIndex = index + 1;
    }
  });

  if (((colIndex % 2 === 0) && (rowIndex % 2 === 0)) || ((colIndex % 2 !== 0) && (rowIndex % 2 !== 0))) {
    color = 'black';
  }

  return color;
};

console.log(mineColor('a', 8), 'white');
console.log(mineColor('b', 2), 'black');
console.log(mineColor('f', 5), 'white');
