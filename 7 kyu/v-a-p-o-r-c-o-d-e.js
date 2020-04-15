const vaporcode = (string) => {
  let vaporwave = '';
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    if (letter !== ' ') {
      const uppercaseLetter = letter.toUpperCase();
      vaporwave += uppercaseLetter + '  ';
    }
  }
  return vaporwave.trim();
}

const vaporcode = (string) => {
  return string.toUpperCase()
  .split('')
  .filter(letter => letter !== ' ')
  .join('  ');
}

console.log(vaporcode("Let's go to the movies"),"L  E  T  '  S  G  O  T  O  T  H  E  M  O  V  I  E  S");
console.log(vaporcode("Why isn't my code working?"),"W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?");