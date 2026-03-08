const reverseString = function (input) {
  let output = [];
  for (i = 0; i < input.length; i++) {
    output[i] = input.charAt(i);
  }
  output.reverse();
  output = output.join("");
  return output;
};

console.log(reverseString("dog"));
console.log(reverseString("goat"));

// Do not edit below this line
module.exports = reverseString;
