/**
 * 4.27 - 4.29
 * Abstraction and DRY coding, pt 2 (optional).
 */

// Set up the init() function to initialize event handlers:
function init() {

  var clckCnt = 0;
  var h2 = document.querySelector("#wrapper h2");
  var logo = document.querySelector("#wrapper img");
  var ul = document.querySelector("#wrapper ul");

  // Change BG color on click:
  h2.addEventListener("click", function(){
    this.style.color = "red";
  });

  // Change img src and add border on click:
  logo.addEventListener("click", function(){
    this.src = "img/js-logo-2.png";
    this.style.border = "solid";
  });

  // Change font color on click for child elements:
  ul.addEventListener("click", function(){
    while(clckCnt < ul.childNodes.length && ul.childNodes[clckCnt].nodeType !== 1){
      clckCnt++;
    }
    if (clckCnt < ul.childNodes.length) {
      ul.childNodes[clckCnt].style.color = "red";
    }
    clckCnt++;
  });

}

// Make sure the page is loaded, before running
// the `init()` function that will act upon DOM
// elements.
window.addEventListener("load", init);
