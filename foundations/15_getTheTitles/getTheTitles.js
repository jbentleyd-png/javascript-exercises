const getTheTitles = function (bookArray) {
  const titleArray = [];
  for (book in bookArray) {
    titleArray.push(bookArray[book].title);
  }
  return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
