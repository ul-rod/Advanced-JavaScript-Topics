/**
 * General Utilities
*/

var UTIL = (function(U){

  var domReady = function(funct) {
    document.addEventListener('DOMContentLoaded', function(){
        if (typeof funct === "function") {
            funct();
        }
    }, false);
  };

  // Public methods:
  U.domReady = domReady;

  // Return the object:
  return U;

})(UTIL || {});
