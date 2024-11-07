/**
 * 5.31
 * Detecting Object properties
 *
 * "in" keyword
 *  > if ([property name] in [object]) {}
 *  > Checks object and the prototype
 *
 * "hasOwnProperty()" function
 *  > if ([object].hasOwnProperty(([property name])) {}
 *  > Doesn't check the prototype
 */

var beatles1 = {
    firstName: "John",
    lastName: "Lennon",
    email: "john@apple.com",
    type: "admin",
    active: false,
    address: {
        street: "3 Savile Row",
        city: "London",
        country: "United Kingdom",
        postalcode: "W1"
    }
};

// Use a "for in" loop to iterate over properties:
for (var prop in beatles1) {
  console.log("Property name: ", prop);
}

// Another way to do this is
var properties = Object.keys(beatles1);
console.log("properties:", properties);

