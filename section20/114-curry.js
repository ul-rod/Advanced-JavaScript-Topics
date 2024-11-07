/**
 * Arity: the number of arguments passed to a function.
 * function test(arg1, arg2) {} // This has an arity of 2
 * function test(arg1, arg2, arg3) {} // This has an arity of 3
 *
 * Currying: a way of constructing functions that allows for the
 * partial evaluation of a functions arguments... thereby reducing
 * the arity of a function.
 */

// This function has an Arity of 2:
const greetUser = function (msg, name){
  console.log(msg + ' ' + name);
};

// Notice how the first argument is repeated:
greetUser('Hi', 'John');
greetUser('Hi', 'Paul');
greetUser('Hi', 'George');
greetUser('Hi', 'Ringo');

// With Currying, we can reduce the arity of the function:
const curryGreeting = function(greeting) {
    return function(name) {
        console.log(greeting + " " + name);
    };
};

// We pass the "greeting" argument in:
const welcomeGreet = curryGreeting("Welcome");
// And when we call this, all we need to do is
// pass in a single argument, the user's name:
welcomeGreet("Steve");
welcomeGreet("Mary");

