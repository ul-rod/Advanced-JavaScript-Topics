"use strict";

// Create Prototype Object:
var objProto = {
    greet () {
        console.log(this.greeting);
    }
}

// Factory Function:
const greeting3 = function(greeting) {
    // Create an object:
    let obj = Object.create(objProto);
    // Assign the `greeting` property:
    obj.greeting = greeting;
    // Return the new Object:
    return obj;
};

var greet3 = greeting3('Hello World');
//greet3.greet(); // Hello World

document.querySelector('#button').addEventListener('click', function () { greet3.greet() });
