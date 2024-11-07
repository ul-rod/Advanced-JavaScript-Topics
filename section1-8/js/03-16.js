/**
 * 3.16
 * Understanding prototypes:
 *
 * Almost every object is linked to another object.
 * That linked object is called the 'prototype'.
 *
 * Objects inherit properties and methodes from its
 * prototype ancestry.
 *
 * A prototype is assigned to any object.
 *
 * You can define an object's prototype.
 *
 * You can change the properties and methods of a prototype.
 */

// Create a new (empty) object:
var obj = {};

// "in" will look to see if `obj` has access to the method
// within the prototype chain:
console.log("1:", "toString" in obj); // TRUE

// "hasOwnProperty" will not look within the prototype chain:
console.log("2:", obj.hasOwnProperty("toString")); // FALSE

// Create a simple array:
var arr = [1, 2, 3];
console.log("3:", arr);
// Array(3) [1, 2, 3]
//   0: 1
//   1: 2
//   2: 3
//   length: 3
//   __proto__: Array[]

// Create a new variable of type Date:
var now = new Date();
console.dir("4:", now);
// Date Sun Oct 20 2024 19:34:32 GMT-0500 (Central Daylight Time)
//  <prototype>: Date.prototype { … }
