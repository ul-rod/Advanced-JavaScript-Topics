/**
 * 5.33.c
 * Making Objects Immutable
 *  `freezing` an object
 *    - cannot add or delete properties
 *    - cannot change value of existing properties
 */

var artist = {
  firstName: "Foy",
  lastName: "Vance",
  nationality: "Irish",
  trait: "mustache",
  instruments: ["guitar", "piano", "vocals"]
};

// `seal` the object:
Object.freeze(artist);

// After we freeze the object, we can no
// longer add, remove or change properties.
// This will ail silently (unless in Strict Mode):
artist.hometown = "Dublin";
artist.firstName = "Fred";

// Output our object:
console.log(artist);
