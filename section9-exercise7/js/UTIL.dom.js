/**
 * DOM UTILITIES
 */

var UTILITY = (function(U) {

  // Get the STRING sub-module:
  var STR = U.string;

  // DOM Methods:
  var getDomElement = function(domElement) {
      if (!singleSelector(domElement)) {
          try {
              return document.querySelectorAll(domElement);
          }
          catch(e) {
              console.log(e);
          }
      }
      else {
          if (domElement.indexOf('#') === 0) {
              try {
                  return [(document.getElementById(domElement.substring(1,domElement.length)))];
              }
              catch(e) {
                  console.log(e);
              }
          }
          else if (domElement.indexOf('.') === 0){
              try {
                  return document.getElementsByClassName(domElement.substring(1,domElement.length));
              }
              catch(e) {
                  console.log(e);
              }
          }
          else {
              try {
                  return document.getElementsByTagName(domElement);
              }
              catch(e) {
                  console.log(e);
              }
          }
      }
  };

  var singleSelector = function(str) {
      var arr;

      arr = str.split(" ");

    if (arr.length === 1 && STR.numChar(str, "#") <= 1 && STR.numChar(str, ".") <= 1) {
          return true;
      }
      else {
          return false;
      }
  };

  var assignEvent = function(de, event, funct) {
      // Use for loop since node list is not an array
      try {
          for (let i = 0; i < de.length; i++) {
              de[i].addEventListener(event, funct);
          }
      }
      catch(e) {
          console.log(e);
      }
  };

  var data = function(de, term) {
      var arr = [];
      if (de.length > 1) {
          for (let i = 0; i < de.length; i++) {
              arr[i] = de[i].getAttribute('data-' + term);
          }
      }
      else {
          return de[0].getAttribute('data-' + term);
      }
  };

  var addClass = function(de, cls) {
      for (let i = 0; i < de.length; i++) {
          if (de[i].classList) {
              de[i].classList.add(cls);
          }
          else {
              de[i].className += ' ' + cls;
          }
      }
  };

  var removeClass = function(de, cls) {
      for (let i = 0; i < de.length; i++) {
          if (de[i].classList) {
              de[i].classList.remove(cls);
          }
          else {
              de[i].className.replace(/\bcls\b/,'');
          }
      }
  };

  var domReady = function(funct) {
      document.addEventListener('DOMContentLoaded', function(){
          if (typeof funct === "function") {
              funct();
          }
      }, false);
  };

  // Setup a sub-module:
  let sub = U.dom = {};
  sub.getDomElement = getDomElement;
  sub.assignEvent = assignEvent;
  sub.data = data;
  sub.addClass = addClass;
  sub.removeClass = removeClass;
  sub.domReady = domReady;

  return U;

})(UTILITY || {});
