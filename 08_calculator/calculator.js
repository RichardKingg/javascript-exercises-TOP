const add = function (a, b) {
  if (a === 0 && b === 0) {
    return 0;
  }
  return a + b;
};

const subtract = function (a, b) {
  let subNum = a - b;
  if (a === 0 && b === 0) {
    return 0;
  }
  return subNum;
};

const sum = function (array) {
  let arraySum = array.reduce((val1, val2) => {
    return val1 + val2;
  }, 0);
  return arraySum;
};

const multiply = function (array) {
  let arrayMult = array.reduce((val1, val2) => val1 * val2, 1);
  return arrayMult;
};

const power = function (a, b) {
  let powNum = a;
  for (let i = 1; i < b; i++) {
    powNum *= a;
  }
  return powNum;
};

const factorial = function (a) {
  let facNum = a;
  if (facNum === 0) return 1;
  for (let i = a - 1; i >= 1; i--) {
    facNum *= i;
  }
  return facNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
