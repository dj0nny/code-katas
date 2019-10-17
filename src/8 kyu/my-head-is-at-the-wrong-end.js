// classic mode

const fixTheMeerkat = (arr) => {
  const tail = arr[0];
  const body = arr[1];
  const head = arr[2];

  return [head, body, tail];
}

// using array methods

const fixTheMeerkat = (arr) => {
  const tail = arr.shift();
  const head = arr.pop();
  arr.unshift(head);
  arr.push(tail);
  return arr;
}

// using ES6 array deconstruction

const fixTheMeerkat = (arr) => {
  const [tail, body, head] = arr;
  return [head, body, tail];
}

// one line solution

const fixTheMeerkat = (arr) => {
  return arr.reverse();
}


console.log(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
console.log(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
console.log(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
console.log(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);
