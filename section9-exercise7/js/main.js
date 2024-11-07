/**
 * Main App:
 */

var MAINAPP = (function(app, U) {

  // Dependencies ("sub-module"):
  var DOM = U.dom;
  var QUIZ = U.quiz;

  DOM.domReady(function() {
    QUIZ.initQuiz();
  });

})(MAINAPP || {}, UTILITY);
