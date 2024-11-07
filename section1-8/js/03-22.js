/**
 * 3.22
 * Higher Order functions, callbacks, and the problem with `this`.
 * Higher Order functions are functions that operate on other functions
 * by either taking them as arguments or returning them. The fact that
 * JavaScript supports First Class functions makes it possible to
 * create Higher Order functions.
 * Reminder: First Class functions are functions that can be treated
 * as values (and can be passed as arguments or reassigned as variables).
 */

// I.e., adding an anonymous function as a callback:
document.addEventListener("DOMContentLoaded", function(){
  console.log("DOMContentLoaded");

  var hdr = document.querySelector("#hdr");
  hdr.addEventListener("click", function(){
    console.log("hdr clicked.");
  });
});

var firstName = "Eddie";
var lastName = "van Halen";
var band = "Van Halen";
var fullName = function() {
  setTimeout(function(){
    console.log(this.firstName + " " + this.lastName);
  }.bind(this), 1000);
};

fullName();
// "Eddie van Halen"

var guiarist1 = {
  firstName: "Mike",
  lastName: "McCready",
  band: "Pearl Jam"
};

var guiarist2 = {
  firstName: "Stone",
  lastName: "Gossard",
  band: "Pearl Jam"
}

fullName.call(guiarist1);
// "Mike McCready"

fullName.call(guiarist2);
// "Stone Gossard"
