
const myArray = [10, 0, 90, 80, 50, 0, 60];

// 1) Create a function that will take the array and a student id (any number you want) as parameters.
// Use map to create a new array that stores each score in an object that includes the activity ID
// (first score is 0, second score 1, etc.) as well as the student ID.
const mapStudentData = function (myArray, sID) {
  return myArray.map(function (val, index) {
    return {
      studentID: sID,
      activityID: index,
      score: val
    };
  });
};

const fullData = mapStudentData(myArray, 1001);
console.log('1. fullData: ', fullData);


// 2) Create a function that will create a new array with the lowest score removed.
const removeLowScore = function (arr) {
  const min = Math.min(...arr.map(val => val.score));
  return arr.filter(elem => elem.score !== min);
};

const lowValueRemoved = removeLowScore(fullData);
console.log('2. lowValueRemoved: ', lowValueRemoved);

// 3) Create a function that will Sum the scores.
const sumScoreAttribute = function (arr) {
  return arr.reduce((result, elem) => result + elem.score, 0);
};

// 4) Create a function that will compute the average from an array passed in.
const computeAverage = function (arr) {
  return sumScoreAttribute(arr) / arr.length;
};

const highAverage = computeAverage(lowValueRemoved);
console.log('4a. highAverage: ', highAverage);
const lowAverage = computeAverage(fullData);
console.log('4b. lowAverage: ', lowAverage);

// 5) Create a function that will create a new array of score objects that have a 0 score.
const filterZeroScores = function (arr) {
  return arr.filter(elem => elem.score === 0);
};

const zeroAssignments = filterZeroScores(fullData);
console.log('5. zeroAssignments: ', zeroAssignments);
