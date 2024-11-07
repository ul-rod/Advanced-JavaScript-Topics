"use strict";

// Class:
class Greeting1 {
    constructor(greet) {
        this.greeting = greet;
    }
    greet() {
        console.log(this.greeting);
    }
};

// Constructor:
const Greeting2 = function(greet) {
    this.greeting = greet;
    this.greet = () => console.log(this.greeting);
};

// Factory Function:
const greeting3 = function(greeting) {
    return {
        greet () {
            console.log(greeting);
        }
    }
};

var greet1 = new Greeting1('Hi');

var greet2 = new Greeting2('Hello');

var greet3 = greeting3('Hello World, this is a factory function!');

document.querySelector('#button').addEventListener('click', greet3.greet);
