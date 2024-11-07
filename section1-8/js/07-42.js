/**
 * 7.42
 * Avoiding Global Variables
 *  Global variables can be changed anywhere (mistakenly)
 *  Global variables pollute the Global namespace, which can cause collisions
 *  Reliance on Global Variables avoids better programming patterns, and prevents
 *  you from thinking in a more modular way with your programming
 */

(function(){
  var counter = 0;
  var items = document.querySelectorAll("li");

  window.addEventListener("keydown", function(e){

    if (counter < items.length) {
      if (e.code == "ArrowDown") {
        items[counter].style.color = "green";
        counter++;
      }
    }

  }, false);
})();
