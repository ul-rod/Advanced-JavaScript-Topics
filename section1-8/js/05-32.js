/**
 * 5.32
 * Changing property attributes
 */

var guitar = {
    type: "electric",
    brand: "Gibson",
    model: "Les Paul",
    color: "tobacco burst",
    strings: 6,
    serial: "8 1641"
};

console.log("guitar", guitar); // [obj]
console.log("serial", guitar.serial); // "8 1641"
console.log(guitar.propertyIsEnumerable("serial")); // true

// Change the guitar (object) attribute:
Object.defineProperty(guitar, "serial", {enumerable: false});
console.log(guitar.propertyIsEnumerable("serial")); // false

// Change the guitar (object) attribute:
// Prevent removal of serial property.
Object.defineProperty(guitar, "serial", {configurable: false});
