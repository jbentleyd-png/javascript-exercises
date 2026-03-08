const repeatString = function (string, num) {
  if (num < 0) return "ERROR";
  let message = "";
  for (i = 0; i < num; i++) {
    message = message + string;
  }
  return message;
};

console.log(repeatString("hey", 3));
console.log(repeatString("hey", 0));
console.log(repeatString("hey", -1));

// Do not edit below this line
module.exports = repeatString;
