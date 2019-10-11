const multiplyAll = (numbers) => (n) => {
  if (numbers.length === 0) {
    return [];
  }

  return numbers.map((element) => element * n);
};


console.log(multiplyAll([1, 2, 3])(1), [1, 2, 3]);
console.log(multiplyAll([1, 2, 3])(2), [2, 4, 6]);
console.log(multiplyAll([1, 2, 3])(0), [0, 0, 0]);
console.log(multiplyAll([])(10), [], 'should return an empty array');
