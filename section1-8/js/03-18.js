/**
 * 3.18
 * `call()` and `apply()` allow us to invoke a function
 * as if it was a method for some other object, which
 * allows us to bind `this` to an object of our choosing.
 *
 * Using `call()`, i.e., function.call(this, arg1, arg2)
 *  - The first argument is an obj that will become `this`
 *  - One or more arguments may be sent to the function
 *
 * Using `apply()`, i.e., function.apply(this, [arg1, arg2])
 *  - The first argument is an obj that will become `this`
 *  - One or more arguments may be sent to the function may
 *    follow in a single array
 */

var usr1 = {
  firstName: "John",
  lastName: "Lennon",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var usr2 = {
  firstName: "Paul",
  lastName: "McCartney"
};

var greetUser = function(greeting, punc) {
  console.log(greeting + " " + this.firstName + punc);
};

// `call()`
// ---------------------------------------------------- //
// Execute the `greetuser` function via the `call` method
// passing to it the `usr1` object and the needed argument
// for the `greetUser()` function.
// Therefore `this` is bound to `usr1`:
greetUser.call(usr1, 'Howdy', '!');
// "Howdy John!"

// Do the same thing, but pass in the `usr2` object and
// change the greeting argument:
greetUser.call(usr2, 'Good morning', '.');
// "Good morning Paul."


// `apply()`
// ---------------------------------------------------- //
// The same as the above, with the only difference being
// how we pass the arguments (as an array):
greetUser.apply(usr1, ['Howdy', '!']);
// "Howdy John!"
greetUser.apply(usr2, ['Good morning', '.']);
// "Good morning Paul."


// Overriding `this`
// ---------------------------------------------------- //
// Use `call()` to bind `this` to the `usr2` object:
console.log( usr1.fullName.call(usr2) );
// "Paul McCartney"
