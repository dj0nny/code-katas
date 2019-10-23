function validate(n){
  const stringNumber = n.toString();
  let double = true;
  let sum = Number(stringNumber[stringNumber.length - 1]);

  for (let i = stringNumber.length - 2; i >= 0; i--) {
    let currentDigit = Number(stringNumber[i]);
    if (double) {
      currentDigit *= 2;
      double = false;
    } else {
      double = true;
    }

    if (currentDigit > 9) {
      currentDigit -= 9;
    }
    sum += currentDigit;
  }
  return (sum % 10 === 0);
}

console.log(validate(123), false);
console.log(validate(1), false);
console.log(validate(2121), true);
console.log(validate(1230), true);