/**
 * 5.40
 * Understanding Closure
 * > A Closure is the local variables for a function that are
 *   kept alive after the function has returned.
 */

// This is a closure.
var func1 = function() {
  var a = 10;
  var b = 15;
  var func2 = function() {
    console.log( a + b );
  };
  setTimeout(func2, 3000);
};

// `func1()` is called and completes before the
// `setTimeout()` function completes. And yet,
// `func2()` still has access to the variables,
// `a` and `b`.
func1();
