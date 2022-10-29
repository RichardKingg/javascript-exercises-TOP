const fibonacci = function (num) {
  let fibNum = parseInt(num);
  if (fibNum < 0) {
    return "OOPS";
  } else if (fibNum === 0) {
    return 0;
  }
  let fibFirst = 0;
  let fibLast = 1;
  let fibRes = 0;
  for (let i = 1; i < fibNum; i++) {
    fibRes = fibFirst + fibLast;
    fibFirst = fibLast;
    fibLast = fibRes;
  }
  return fibLast;
};

// Do not edit below this line
module.exports = fibonacci;
