/**
 * 3.23
 * Arrow functions.
 * Create a function with minimal syntax.
 * Solves problem for `this` in callback functions.
 */

var firstName = "Eddie";
var lastName = "van Halen";
var band = "Van Halen";
var fullName = function() {
  setTimeout(() => {
    console.log(this.firstName + " " + this.lastName)
  }, 1000);
};

fullName();
// "Eddie van Halen"

var guiarist1 = {
  firstName: "Mike",
  lastName: "McCready",
  band: "Pearl Jam"
};

fullName.call(guiarist1);
// "Mike McCready"

var guiarist2 = {
  firstName: "Stone",
  lastName: "Gossard",
  band: "Pearl Jam"
}

fullName.call(guiarist2);
// "Stone Gossard"

