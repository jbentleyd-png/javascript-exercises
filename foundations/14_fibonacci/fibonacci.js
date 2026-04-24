const fibonacci = function (num) {
  num = Number(num);
  if (num == 1 || num == 2) {
    return 1;
  } else if (num == 0) {
    return 0;
  } else if (num < 0) {
    return "OOPS";
  }

  const fibArr = [1, 1];
  let nextNum;
  while (fibArr.length < num) {
    nextNum = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
    fibArr.push(nextNum);
  }
  return nextNum;
};

// Do not edit below this line
module.exports = fibonacci;
