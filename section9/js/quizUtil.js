/**
 * QUIZ Utilities
*/

var UTIL = (function(U){

  // Set up a "sub-module":
  var sub = U.quiz = U.quiz || {};

  // Dependencies ("sub-module"):
  var strU = U.string;
  var domU = U.dom;
  var domElem = U.dom.domElem;

  var checkAnswer = function(value) {
      var ans;
      var correct;
      var result;

      hideFeedback();

      if (value !== "") {
          ans = strU.breakOut(domU.data(domElem('#q01'), 'answer'), ",");
          correct = ans.every(function(val) {
              return (value.indexOf(val) > -1);
          });
          result = (correct) ? 'correct' : 'incorrect';
          displayFeedback(result);
      } else {
          displayFeedback('no-answer');
      }
  };

  var displayFeedback = function(result) {
      var feedback = domElem('.feedback.' + result);
      domU.addClass(feedback, 'visible');
  };

  var hideFeedback = function() {
      var feedback = domElem('.feedback.visible');
      domU.removeClass(feedback, 'visible');
  };

  // Public method assigned to the "sub-module":
  sub.checkAnswer = checkAnswer;

  // Return the "full" object (not just the "sub-module"):
  return U;

})(UTIL || {});
