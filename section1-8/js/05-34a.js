/**
 * 5.34.a
 * ES6 Object features
 * Concise properties and concise methods.
 */

var firstName = "Foy";
var lastName = "Vance";

// Add a new property with the same property name (key)
// as the existing variable above:
var artist = {
  // Concise properties:
  firstName,
  lastName,
  // Concise method:
  fullName(){
    return this.firstName + " " + this.lastName;
  }
};

console.log(artist);
// Object { firstName: "Foy", lastName: "Vance", fullName: fullName() }

artist.fullName();
// "Foy Vance"
