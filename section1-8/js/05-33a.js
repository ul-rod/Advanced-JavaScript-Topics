/**
 * 5.33.a
 * Making Objects Immutable
 *  `writable` attribute of properties
 */

var artist = {
  firstName: "Foy",
  lastName: "Vance",
  nationality: "Irish",
  trait: "mustache",
  instruments: ["guitar", "piano", "vocals"]
};

// Make a property immutable by setting the
// `writable` attribute to FALSE:
Object.defineProperty(artist, "nationality", {
  writable: false
});

// This will fail silently (unless we use Strict Mode)
// because we made the property unwritable:
artist.nationality = "Hungarian";

// Output our object:
console.log(artist);
