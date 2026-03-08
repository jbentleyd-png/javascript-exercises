const convertToCelsius = function (F) {
  const decimalC = (F - 32) * (5 / 9);
  const C = Math.round(decimalC * 10) / 10;
  return C;
};

console.log(convertToCelsius(50) + "C");

const convertToFahrenheit = function (C) {
  const decimalF = C * (9 / 5) + 32;
  const F = Math.round(decimalF * 10) / 10;
  return F;
};

console.log(convertToFahrenheit(20) + "F");

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
