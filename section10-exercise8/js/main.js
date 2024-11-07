/**
 * Exercise 8:
 * Open the json file and then populate index.html with the data from the json file.
 * You many need to use the following JS functions:
 *  document.getElementsByTagName()
 *  document.getElementById()
 *  innerHTML()
 */

var MAINAPP = (function (app) {

  var jsonObj = {};

  // Load JSON data:
  var loadJSON = function (path) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType('application/json');
    xobj.open('GET', path);
    xobj.onreadystatechange = function () {
      if (xobj.readyState === 4) {
        app.jsonObj = JSON.parse(xobj.responseText);
        displayData(app.jsonObj);
      }
    };
    xobj.send(null);
  };

  // Display data to HTML page:
  var displayData = function(dataObj) {
    // H2:
    if (Object.hasOwn(dataObj, 'heading')) {
      const h2 = document.getElementsByTagName("h2")[0];
      h2.innerHTML = dataObj.heading;
    }

    // Bullets (li):
    if (Object.hasOwn(dataObj, 'bullets')) {
      if (Array.isArray(dataObj.bullets)) {
        const items = dataObj.bullets;
        for (let i = 0; i < items.length; i++) {
          let elementName = 'b' + (i+1);
          let element = document.getElementById(elementName);
          if (element) {
            element.innerHTML = items[i];
          }
        }
      }
    }
  };

  // Call the `loadJSON()` function to load JSON data
  // after the DOM is ready:
  document.addEventListener('DOMContentLoaded', function () {
    loadJSON('json/data.json');
  }, false);

  // Save (make public):
  app.jsonObj = jsonObj;
  app.loadJSON = loadJSON;

  // Return app object:
  return app;

})(MAINAPP || {});
