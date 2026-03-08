const sumAll = function (firstNum, secondNum) {
  if (
    firstNum < 0 ||
    secondNum < 0 ||
    !Number.isInteger(firstNum) ||
    !Number.isInteger(secondNum)
  ) {
    return "ERROR";
  }

  const difference = Math.abs(firstNum - secondNum);
  const smallerNumber = firstNum > secondNum ? secondNum : firstNum;

  let output = smallerNumber;
  let nextNumber = smallerNumber + 1;
  for (i = 0; i < difference; i++) {
    output += nextNumber;
    nextNumber++;
  }

  return output;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
