const num = 50;
// This is not allowed:
// num = 100;
// Uncaught TypeError: invalid assignment to const 'num'

const arr = [3, 4, 2, 5, 1];
// This is allowed, because objects are mutable:
arr.sort();
// Array(5) [ 1, 2, 3, 4, 5 ]

const sortArr = function(numsArr) {
  return numsArr.sort();
}

const arr1 = [10, 12, 11, 18, 14];
const arr2 = sortArr(arr1);
// These (arr1, arr2) are now the same
// because objects are passed by reference!
console.log('arr1: ', arr1);
// arr1:  Array(5)[10, 11, 12, 14, 18]
console.log('arr2: ', arr2);
// arr2:  Array(5)[10, 11, 12, 14, 18]

// -------------------------------------------------- //

// To make immutable, use the Object.freeze() method:
// Create a New Array and freeze it:
const newArr = [3, 4, 2, 5, 1];
Object.freeze(newArr);
// newArr.sort();
// Uncaught TypeError: 0 is read-only

// -------------------------------------------------- //

// This function turns an object into JSON, so it is no
// longer an object. Then we parse it, turning it back
// into an object, and the original reference is lost,
// so we can clone it safely!
const cloneObject = function(obj) {
  return JSON.parse(JSON.stringify(obj));
};

var newNewObj = cloneObject(newArr);
console.log(newNewObj.sort());

