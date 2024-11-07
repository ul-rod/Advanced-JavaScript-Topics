/**
 * 3.19
 * Using the `bind()` method (on the function prototype) is
 * similar to `call()` and `apply()`, but has a few unique
 * differences.
 *
 * `bind()` returns a new function.
 * The first argument becomes the value for `this`
 * One or more arguments may be passed which will be bound
 * to the new function. For example:
 * var func = function.bind(this, arg1, arg2);
 */

var beatles_1 = {
  firstName: "George",
  lastName: "Harrison",
  instrument: "Lead guitar"
};

var beatles_2 = {
  firstName: "Ringo",
  lastName: "Starkey",
  instrument: "Drums"
};

var greetUser = function(greeting, punc) {
  console.log(greeting + " " + this.firstName + punc);
};

var morningGreet = greetUser.bind(beatles_1, "Good morning", "!");
morningGreet();
// "Good morning George!"

var afternoonGreet = greetUser.bind(beatles_2, "Good afternoon", ".");
afternoonGreet();
// "Good afternoon Ringo."
