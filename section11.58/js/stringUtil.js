/**
 * String Functionality
*/

var numChar = function(str, char) {
        return (str.split(char).length - 1);
    };

var breakOut = function(str, delim) {
        var arr = str.split(delim);
        return arr.map(function(val) {
            return val.trim();
        });
    };

export { numChar, breakOut };
