import { domReady } from './generalUtil.js';
import { $, assignEvent, data, addClass, removeClass } from './domUtil.js';
import { breakOut } from './stringUtil.js';

/**
 * Quiz Functionality
*/
var initQuiz = function() {
        assignEvent($('.fill-in-submit.btn-primary'),'click', function() {
            hideFeedback();
            checkAnswer($('#q01_ans')[0].value);
        });
    };

var checkAnswer = function(value) {
        var ans,
            correct,
            result;

        if (value !== "") {
            ans = breakOut(data($('#q01'), 'answer'), ",");
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
        var feedback = $('.feedback.' + result);
        addClass(feedback, 'visible');
    };

var hideFeedback = function() {
        var feedback = $('.feedback.visible');
        removeClass(feedback, 'visible');
    };

/**
 * Setup
 */
domReady(function() {
    initQuiz();
});

export { displayFeedback };
