
var objProto = {
  greet: function () {
    console.log(this.greeting + " World");
  }
};

var Greeting = function (term) {
  this.greeting = term;
};

// Set the prototype:
Greeting.prototype = objProto;
// Then set the constructor:
Greeting.prototype.constructor = Greeting;

var obj1a = new Greeting("Hi");
