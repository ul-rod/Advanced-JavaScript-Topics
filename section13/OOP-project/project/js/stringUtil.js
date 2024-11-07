/**
 * String Utility Functions:
 */

var UTIL = (function(s) {

    var numChar = function(str, char) {
        return (str.split(char).length - 1);
    };

    var breakOut = function(str, delim) {
        var arr = str.split(delim);
        return arr.map(function(val) {
            return val.trim();
        });
    };

    //Set up sub Module
    var sub = s.string = s.string || {};

    //Public Methods
    sub.numChar = numChar;
    sub.breakOut = breakOut;

    return s;

})(UTIL || {});
