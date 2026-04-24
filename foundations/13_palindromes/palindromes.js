const palindromes = function (word) {
  const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const wordArray = Array.from(cleanWord);
  wordArray.reverse();
  let reverseWord = wordArray.join("");

  if (cleanWord == reverseWord) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
