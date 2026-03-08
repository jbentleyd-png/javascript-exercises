const leapYears = function (year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
};
console.log(leapYears(2000));
console.log(leapYears(1985));

// Do not edit below this line
module.exports = leapYears;
