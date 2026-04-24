const findTheOldest = function (peopleArray) {
  let age;
  const currentYear = new Date().getFullYear();
  for (person in peopleArray) {
    if (peopleArray[person].yearOfDeath == undefined) {
      age = currentYear - peopleArray[person].yearOfBirth;
    } else {
      age = peopleArray[person].yearOfDeath - peopleArray[person].yearOfBirth;
    }
    peopleArray[person].age = age;
  }

  peopleArray.sort((a, b) => a.age - b.age); //sorts by age with arrow function as criterion
  console.log(JSON.stringify(peopleArray, null, 2)); //needs to be stringy to see object contents without a proper debugger

  return peopleArray.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
