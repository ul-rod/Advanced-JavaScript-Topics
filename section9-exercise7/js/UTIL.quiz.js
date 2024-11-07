/**
 * Quiz UTILITIES
 */

var UTILITY = (function(U) {

  // Get the STRING and DOM sub-modules:
  var STR = U.string;
  var DOM = U.dom;

  // Quiz Methods:
  var initQuiz = function() {
    DOM.assignEvent(DOM.getDomElement('.btn-primary'),'click', function() {
      checkAnswer(DOM.getDomElement('#q01_ans')[0].value);
    });
  };

  var checkAnswer = function(value) {
    var ans;
    var correct;
    var result;

    hideFeedback();

    if (value !== "") {
      ans = STR.breakOut(DOM.data(DOM.getDomElement('#q01'), 'answer'), ",");
      correct = ans.every(function(val) {
        return (value.toUpperCase().indexOf(val.toUpperCase()) > -1);
      });

      result = (correct) ? 'correct' : 'incorrect';
      displayFeedback(result);
    }

    else {
      displayFeedback('no-answer');
    }
  };

  var displayFeedback = function(result) {
    var feedback = DOM.getDomElement('.feedback.' + result);
    DOM.addClass(feedback, 'visible');
  };

  var hideFeedback = function() {
    var feedback = DOM.getDomElement('.feedback.visible');
    DOM.removeClass(feedback, 'visible');
  };

  // Setup a sub-module:
  var sub = U.quiz = {};
  sub.initQuiz = initQuiz;

  return U;

})(UTILITY || {});
