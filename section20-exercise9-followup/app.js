
const array = [10, 0, 90, 80, 50, 0, 60];

// Function to clone an Object:
const cloneObj = function (obj) {
    return JSON.parse(JSON.stringify(obj));
};

const pipe = function (...fns) {
    return function (x) {
        return fns.reduce(function (v, f) {
            return f(v);
        }, x);
    }
};

// Function to map student data to their scores:
const mapStudentData = function(array, sID) {
    return array.map(function(val, index) {
        return {
            studentID: sID,
            activityID: index,
            score: val
        };
    });
};

const fullData = mapStudentData(array, 1001);
console.log('fullData: ', fullData);

// Remove the lowest score:
const removeLowScore = function(arr) {
    const min = Math.min(...arr.map(val => val.score));
    const newArray = cloneObj(arr)
    newArray.splice(newArray.findIndex(elem => elem.score === min), 1);
    return newArray;
};

const lowScoreRemoved = removeLowScore(fullData);
console.log('lowScoreRemoved: ', lowScoreRemoved);

const sumScoreAttribute = function(arr) {
    return arr.reduce((result, elem) => result + elem.score, 0);
};

const computeAverage = function(arr) {
    return sumScoreAttribute(arr) / arr.length;
};

const lowAverage = computeAverage(fullData);
console.log('lowAverage: ', lowAverage);

// Function composition (using `pipe`):
const highAverage = pipe(
    removeLowScore,
    computeAverage);

console.log('highAverage: ', highAverage(fullData));

const filterZeroScores = function(arr) {
    return arr.filter(elem => elem.score === 0);
};

const zeroAssignments = filterZeroScores(fullData);
console.log('zeroAssignments: ', zeroAssignments);


