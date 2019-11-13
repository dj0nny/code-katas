function count(string) {
  return string.split('').reduce((counts, char) => {
    counts[char] = counts[char] || 0;
    counts[char]++;
    return counts;
  }, {});
}

console.log(count("aba"), { a: 2, b: 1 });
console.log(count(""), {});