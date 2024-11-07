/**
 * Main JS Functionality
*/

var MAINAPP = (function(nsp, U) {

    // Dependencies ("sub-module"):
    var domU = U.dom;
    var domElem = U.dom.domElem;
    var qzU = U.quiz;

    var initQuiz = function() {
        domU.assignEvent(domElem('.fill-in-submit.btn-primary'),'click', function() {
            qzU.checkAnswer(domElem('#q01_ans')[0].value);
        });
    };

    // Setup:
    UTIL.domReady(function() {
        initQuiz();
    });

})(MAINAPP || {}, UTIL);
