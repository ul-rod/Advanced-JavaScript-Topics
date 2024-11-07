/**
 * 4.25
 * Abstraction and DRY coding
 * ----------------------------
 * DRY: "Don't Repeat Yourself"
 *  > Refactoring should be a common practice to make your code better
 *
 * Abstraction
 *  > helps you from repeating yourself
 *  > Each significant piece of functionality should be implemented in
 *    just one place
 */

var sum = function(arr) {
  var total = 0;

  while (arr.length > 0) {
    total += arr.pop();
  }

  return total;
};

var findMultiples = function(start, end, multiple) {
  var multiples = [];

  while (start <= end) {
    if (start % multiple === 0) {
      multiples.push(start);
    }
    start++;
  }

  return multiples;
};

// Call anonymous function when the DOM has loaded:
document.addEventListener("DOMContentLoaded", function(){
  var start = 1;
  var end = 200;
  var multiple = 4;
  var multiples = findMultiples(start, end, multiple);
  var total = sum(multiples);
  var messg = `The sum of all numbers from ${start} to ${end} that are divisible by ${multiple} is: ${total}`;
  document.getElementById("content").innerHTML = messg;
});
