function oddOne(arr) {
  let oddIndex = -1;
  arr.forEach((element, index) => {
    if (element % 2 !== 0) {
      oddIndex = index;
    }
  });
  return oddIndex;
}

function oddOne(arr) {
  return arr.findIndex(x => x % 2 != 0);
}

console.log(oddOne([33, -76, 78, 10, -12, -44, -58, 54, -86, 78, 24, 92, 56, -72, -34, 82, -52, 54, 28]), 0);
console.log(oddOne([2, 16, 98, 10, 13, 78]), 4);
console.log(oddOne([4, -8, 98, -12, -7, 90, 100]), 4);
console.log(oddOne([2, 4, 6, 8]), -1);
