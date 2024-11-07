/**
 * String UTILITIES
 */

var UTILITY = (function(U) {

  // Methods:
  var numChar = function(str, char) {
    return (str.split(char).length - 1);
  };

  var breakOut = function(str, delim) {
    var arr = str.split(delim);
    return arr.map(function(val) {
        return val.trim();
    });
  };

  // Setup a sub-module:
  var sub = U.string = {};
  sub.numChar = numChar;
  sub.breakOut = breakOut;

  return U;

})(UTILITY || {});
