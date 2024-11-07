/**
 * 5.33.b
 * Making Objects Immutable
 *  `sealing` an object
 *    - cannot add or delete properties
 *    - you can change the value of existing properties
 */

var artist = {
  firstName: "Foy",
  lastName: "Vance",
  nationality: "Irish",
  trait: "mustache",
  instruments: ["guitar", "piano", "vocals"]
};

// `seal` the object:
Object.seal(artist);

// After we sealed the object, we can no
// longer add new properties. This will
// fail silently (unless in Strict Mode):
artist.hometown = "Dublin";

// Output our object:
console.log(artist);
