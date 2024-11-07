/**
 * String Utilities
*/

var UTIL = (function(U){

  // Set up a "sub-module":
  var sub = U.string = U.string || {};

  var numChar = function(str, char) {
      return (str.split(char).length - 1);
  };

  var breakOut = function(str, delim) {
      var arr = str.split(delim);
      return arr.map(function(val) {
          return val.trim();
      });
  };

  // Public methods and props assigned to
  // the "sub-module":
  sub.numChar = numChar;
  sub.breakOut = breakOut;

  // Return the "full" object (not just the "sub-module"):
  return U;

})(UTIL || {});
