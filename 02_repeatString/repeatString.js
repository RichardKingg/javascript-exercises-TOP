const repeatString = function (string, num) {
  if (num <= -1) {
    return "ERROR";
  }
  return string.repeat(num);
};

// Do not edit below this line
module.exports = repeatString;
