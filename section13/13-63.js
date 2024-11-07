/**
 * Different ways to set up a Prototype:
 * - By default (object)
 * - Create an object from a Constructor
 * - Object.create()
 */

// Create object to use as a Prototype:
var objProto = {
  greet: function(){
    console.log(this.greeting + "!");
  }
};

// Create a Constructor function:
// Note the uppercase "G":
var Greeting = function(term){
  this.greeting = term;
}

// Establish the prototype for our Constructor. Any object
// created from this constructor will have `objProto` as its
// Prototype:
Greeting.prototype = objProto;

var obj1a = new Greeting('Hola');
obj1a.greet(); // "Hola!"

var obj1b = new Greeting('Howdy');
obj1b.greet(); // "Howdy!"

// Use the `Object.create()` method to create an object from
// our prototype (above):
var obj2 = Object.create(objProto);
obj2.greeting = "Hello World";
obj2.greet(); // "Hello World!"

// Use the `Object.setPrototypeOf()` to set the prototype of
// an object:
var obj3 = {
  greeting: "Hi"
};
Object.setPrototypeOf(obj3, objProto);
obj3.greet(); // "Hi!"
