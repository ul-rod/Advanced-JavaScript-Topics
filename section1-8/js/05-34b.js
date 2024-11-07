/**
 * 5.34.b
 * ES6 Object features
 * setPrototypeOf() is used to set the prototype of an object.
 */

// Create object to use as a prototype:
var objProto = {
  fullName(){
    return this.firstName + " " + this.lastName;
  }
};

// Create a basic object:
var obj = {
  firstName: "George",
  lastName: "Harrison"
};

// Set the object's prototype:
Object.setPrototypeOf(obj, objProto);

// Now we have access to the `fullName()` method
// after setting the prototype:
console.log( obj.fullName() );
// George Harrison
