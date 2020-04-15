function firstNonRepeated(s) {
  let encounter = false;
  let currentLetterIndex = 0;

  while (currentLetterIndex <= s.length - 1) {
    encounter = false;
    let currentChar = s[currentLetterIndex];
    
    for (let i = 0; i < s.length; i++) {
      if (currentLetterIndex !== i) {
        if (currentChar === s[i]) {
          encounter = true;
          break;
        }
      }
    }
    if (encounter) {
      currentLetterIndex++;
    } else {
      return currentChar;
    }
  }
  return null;
}

console.log(firstNonRepeated("test"), 'e');
console.log(firstNonRepeated("teeter"), 'r');
console.log(firstNonRepeated("1122321235121222"), '5');
console.log(firstNonRepeated("rend"), 'r');