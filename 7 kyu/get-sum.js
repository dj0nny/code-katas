function GetSum(a, b) {
  let sum = 0;
  if (a === b) {
    return a;
  }
  if (a > b) {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  } else {
    for (let k = a; k <= b; k++) {
      sum += k;
    }
  }
  return sum;
}


console.log(GetSum(-411, 308), -1);
console.log(GetSum(0, 1), 1);
