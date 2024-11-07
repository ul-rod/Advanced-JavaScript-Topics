/**
 * 5.34.c
 * ES6 Object features
 * Object.assign() is a way to combine properties from
 * one or more other objects into a target object.
 * Will not copy over properties that are not enumerable.
 * Will not copy over properties not owned by the object.
 */

var artist = {
  firstName: "Foy",
  lastname: "Vance"
};

var inst = {
  instruments: {
    guitar: true,
    piano: true,
    saxophone: false,
    vocals: true
  }
}

var shows = {
  tourDates: {
    boston: "Dec 30, 2024",
    chicago: "Jan 1, 2025",
    milwaukee: "Jan 10, 2025",
    denver: "Feb 2, 2025"
  }
}

Object.assign(artist, inst, shows);

console.log(artist);
