const palindromes = function (string) {
  const stringFilt = string
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ""); //converts to lower case and removes special characters
  const len = stringFilt.length;

  for (i = 0; i < len; i++) {
    if (stringFilt[i] !== stringFilt[len - i - 1]) {
      // As long as the characters from each part match, the FOR loop will go on
      return false; // When the characters don't match anymore, false is returned and we exit the FOR loop
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
