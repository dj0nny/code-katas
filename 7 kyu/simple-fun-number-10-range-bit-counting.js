function rangeBitCount(a, b) {
  let binaryStr = '';
  let bitCounter = 0;

  for (let i = a; i <= b; i++) {
    binaryStr += (i).toString(2);
  }

  for (let i = 0; i < binaryStr.length; i++) {
    if (binaryStr[i] === '1') {
      bitCounter++;
    }
  }
  
  return bitCounter;
}

console.log(rangeBitCount(2,7) , 11);
console.log(rangeBitCount(0,1) , 1);
console.log(rangeBitCount(4,4) , 1);