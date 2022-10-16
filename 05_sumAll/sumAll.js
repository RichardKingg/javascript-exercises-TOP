const sumAll = function (x, y) {
  if (x < 0 || y < 0 || x !== Number(x) || y !== Number(y)) {
    return "ERROR";
  }
  let sum = 0;
  if (x < y) {
    for (let i = x; i <= y; i++) {
      sum += i;
    }
  } else {
    for (let i = y; i <= x; i++) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
