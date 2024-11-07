/**
 * 3.20
 * Constructors:
 * A constructor is just a function that is invoked using the `new` keyword.
 * A constructor returns an object.
 * The purpose of the constructor is to create multiple objects that are similar.
 * The returned objects share the same prototype (which comes from the constructor).
 */

// Note the uppercase "G".
var Greeting = function() {

};

// Invoke two new instances of `Greeting`:
var greet1 = new Greeting();
var greet2 = new Greeting();

console.log("1.", greet1 === greet2); // 1. false
console.log("2.", greet1 instanceof Greeting); // 2. true
console.log("3.", greet2 instanceof Greeting); // 3. true
console.log("4.", greet1); // 4. Object {  }
