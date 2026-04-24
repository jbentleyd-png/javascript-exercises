const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numArray) {
  let total = 0;
  for (n in numArray) {
    total += numArray[n];
  }
  return total;
};

const multiply = function (numArray) {
  let product = 1;
  for (n in numArray) {
    product *= numArray[n];
  }
  return product;
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (number) {
  if (number == 0 || number == 1) {
    return 1;
  } else {
    let i = number;
    do {
      i--;
      number *= i;
    } while (i > 1);
    return number;
  }
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
