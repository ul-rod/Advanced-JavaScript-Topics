/**
 * Recursion
 *  In JavaScript, recursion is a programming technique where
 *  a function calls itself. It's a powerful way to solve problems
 *  that can be broken down into smaller, similar subproblems.
 *
 * Call Stack
 *  In JavaScript, the call stack is a data structure that
 *  keeps track of the order in which functions are called
 *  and executed. It operates on the principle of Last In,
 *  First Out (LIFO), meaning the last function added to
 *  the stack is the first one to be executed and removed.
 */

// This is recursive, because this function
// calls itself:
const factorial = function(num){
  if (num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

// Rewritten using arrow functions:
const factorial2 = num => (num == 1) ? 1 : num * factorial(num - 1);

console.log('factorial(5) : ', factorial(5));
console.log('factorial2(5) : ', factorial2(5));

/**
 * The Stack, how the above is working:
 *  5 * factorial(4)
 *  5 * 4 * factorial(3)
 *  5 * 4 * 3 * factorial(2)
 *  5 * 4 * 3 * 2 * factorial(1)
 *  5 * 4 * 3 * 2 * 1
 *  5 * 4 * 3 * 2
 *  5 * 4 * 6
 *  5 * 24
 *  120
 */
