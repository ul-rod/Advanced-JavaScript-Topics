/**
 * 5.39
 * Scope
 * Scope can be defined as a set of rules that determine where identifiers
 * (variables, functions etc)  are accessible within your code.
 */

var num1 = 1,
    num2 = 5;

function test() {
    var num3 = 10;

    console.log(num1, num2, num3, /* num4 */);
    // Uncaught ReferenceError: num4 is not defined

    function test2() {
        var num4 = 15;
        console.log(num1, num2, num3, num4);
    }

    test2();
}

test();

console.log(num1, num2, /* num3, num4 */);
// Uncaught ReferenceError: num3 is not defined
// Uncaught ReferenceError: num4 is not defined

/**
 * Rewriting this code without errors would look like this:
 */
var num1 = 12,
    num2 = 54;

function test() {
    var num3 = 95;
    console.log(num1, num2, num3);
    function test2() {
        var num4 = 48;
        console.log(num1, num2, num3, num4);
    }
    test2();
}

test();

console.log(num1, num2);
