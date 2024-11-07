/**
 * Methods available on the Array Prototype:
 *  reduce()
 *    combines the elements of an array using the function that you specify
 *  map()
 *    passes each array item into a function you spedify and returns a new array
 *    consisting of values returned from that function
 *  filter()
 *    returns a new array, usually a sub-set of the original array
 */

let arr = [1, 2, 3, 4, 5];

let total = arr.reduce(function(accumulator, elem){
  return accumulator + elem;
}, 0);

console.log('total: ', total);

let arrSquared = arr.map(function(elem) {
  // return elem * elem;
  return elem ** 2;
});

console.log('arrSquared: ', arrSquared);

let lessThanThree = arr.filter(function(elem){
  return elem < 3;
});

console.log('lessThanThree: ', lessThanThree);

// The original array was not changed:
console.log('arr: ', arr);
