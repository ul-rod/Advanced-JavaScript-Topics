/**
 * Avoid "side-effects" in our code.
 * What are "side-effects"?
 * ---------------------------------------------
 * Changing a value globally in a function.
 * Throwing an exception.
 * Printing to the Screen or Logging.
 * Triggering an external process.
 * Invoking other functions that have side-effects.
 * -----------------------------------------------
 * NOTE: Sometimes we need to use them, but our job
 * as a developer is to manage when to use them, and
 * when not use them.
 */

// `cnt` is defined in Global Scope:
let cnt = 0;

let increment = function(){
  // `cnt` is incremented in this function which can cause a "Side Effect".
  // Makes our code harder to debug.
  // Makes our code more difficult to predict.
  cnt++;
  return cnt;
}

let increment2 = function (num) {
  // This does not modify anything outside the scope of the function.
  // This is a Pure Function.
  // It depends on input provided, not on external data.
  // The function does not produce any change beyond it's scope.
  // Given the same input, it will always return the same output.
  return num + 1;
}
