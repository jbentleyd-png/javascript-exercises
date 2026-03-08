const removeFromArray = function (array, ...toBeRemoved) {
  let filtered = array;
  for (let i of toBeRemoved) {
    filtered = filtered.filter((item) => item !== i);
  }
  return filtered;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 3, "4"));

/* THIS would have been the faster way: 
const removeFromArray = function (array, ...toBeRemoved) {
  return array.filter(item => !toBeRemoved.includes(item));
};
*/

// Do not edit below this line
module.exports = removeFromArray;
