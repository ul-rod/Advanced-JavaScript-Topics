/**
 * JSON (JavaScript Object Notation)
 * ----------------------------------------
 * JSON is text structured like a JS Object.
 * JSON can store a JS Object as text.
 * JSON can be converted to JS (parse) and
 *  a JS Object can be converted to JSON (stringify)
 *  using the JS JSON Object.
 *
 * JSON Syntax
 * ----------------------------------------
 * Data is in name/value pairs separated by a colon.
 * The Name must be enclosed in "double quotes".
 * Data is separated by commas.
 * Curly braces hold objects.
 * Square brackets hold arrays.
 *
 * JSON Values
 * ----------------------------------------
 * string (double quotes)
 * number
 * object (curly braces)
 * array (square brackets)
 * boolean
 * null
 */

var json = '{"firstName":"George","lastName":"Harrison"}';

var obj = JSON.parse(json);

console.log(obj);
// Object { firstName: "George", lastName: "Harrison" }

var str = JSON.stringify(obj);

console.log(str);
// '{"firstName":"George","lastName":"Harrison"}'
