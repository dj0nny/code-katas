function LCS(x, y) {
   if (!x.length || !y.length) {
     return '';
   }

   let commonSequence = '';
   let lastX = x[x.length - 1];
   let lastY = y[y.length - 1];

   if (lastX === lastY) {
     commonSequence += lastX;
     x = x.slice(0, -1);
     y = y.slice(0, -1);
     return LCS(x, y) + commonSequence;
   }

   const left = LCS(x, y.slice(0, -1));
   const right = LCS(x.slice(0, -1), y);
   return (left.length > right.length ? left : right) + commonSequence;
}

console.log(LCS("a", "b"), "");
console.log(LCS("abcdef", "abc"), "abc");