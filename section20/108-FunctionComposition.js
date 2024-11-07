/**
 * Function Composition:
 * Combining of functions for the purpose of forming
 * a new function or to perform some computation.
 *
 * Functions vs Procedures
 * Functions have an input
 * Functions have a return value
 * Functions are simplified to perform a single task.
 * Functions are small and specific and are easy to reuse.
 *
 * Functional Composition is putting together several,
 * smaller functions to perform a larger task.
 */

let myStr = 'Innovation distinguishes between a leader and a follower.';

const trim = str => str.replace(/^\s*|\s*$/g, '');
const noPunct = str => str.replace(/[?.,!]/g, '');
const capitalize = str => str.toUpperCase();
const breakout = str => str.split(" ");
const noArticles = str => (str !== "A" && str !== "AN" && str !== "THE");
const filterArticles = arr => arr.filter(noArticles);

// This is how one might Chain these functions together:
// Note: This is difficult to read and difficult to write!
// console.log(filterArticles(breakout(capitalize(noPunct(trim(str))))));

// So, instead, let's try to use Functional Composition:
const pipe = function (...fns) {
  return function (x) {
    return fns.reduce(function (v, f) {
      return f(v);
    }, x);
  }
};

// This composes a new function from all of the functions above:
const prepareString = pipe(
  trim,
  noPunct,
  capitalize,
  breakout,
  filterArticles
);

console.log(prepareString(myStr));
