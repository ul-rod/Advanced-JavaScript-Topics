

var MAINAPP = (function(nsp, $, domU, strU) {

    /*
    Quiz Functionality
    */
    var contentObj = {},
        questionsArray = [],
        navigationProto = {}, // see below.
        prevBtn,
        nextBtn;

    var loadJSON = function(path) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType('application/json');
        xobj.open('GET', path);
        xobj.onreadystatechange = function() {
            if (xobj.readyState === 4) {
                contentObj = JSON.parse(xobj.responseText);
                //console.log(contentObj);
                parseData(contentObj);
            }
        };
        xobj.send(null);
    },
    parseData = function(cObj) {
        //set button text
        domU.setHTML($('.fill-in-submit'), cObj.buttonText);
        // Questions:
        questionsArray = cObj.questions;
        // Loop through array:
        for (let i = 0; i < questionsArray.length; i++) {
            // Replace object value with that of constructor,
            // because we need access to the methods in the
            // constructor:
            questionsArray[i] = new Question(questionsArray[i]);
        }
        console.log(questionsArray);
        setUpNavigation();
    },
    initQuiz = function() {
        loadJSON("../JSON/content.json");
    };

    // Question Constructor:
    var Question = function(obj) {
        var htmlDiv;
        // Transfer Data from obj to this new object:
        for (let prop in obj) {
            this[prop] = obj[prop];
        }

        this.result = "no-answer";
        this.studentResp = "";
        this.correct = false;
        this.questionDiv = (obj.type === "true-false") ? "multi-choice" : obj.type;

        //Assign DOM elements
        htmlDiv = $('#' + this.questionDiv)[0];
        this.questionField = htmlDiv.querySelector(".question-text");
        this.noAnswerFeed = htmlDiv.querySelector(".feedback.no-answer");
        this.correctFeed = htmlDiv.querySelector(".feedback.correct");
        this.inccorrectFeed = htmlDiv.querySelector(".feedback.incorrect");
        this.htmlDiv = htmlDiv;

        switch (this.questionDiv) {
            case "fill-in":
                this.populateTheQuestion = function () {
                    this.populateQuestion();
                    htmlDiv.querySelector('textarea').value = "";
                };
                this.checkTheAnswer = function () {
                    console.log("checkTheAnswer() => fill-in", this);

                    // The correct answer:
                    var ans;
                    // User entered value:
                    var value = htmlDiv.querySelector('textarea').value;

                    if (value !== "") {
                        ans = strU.breakOut(this.correctResp, ",");
                        this.correct = ans.every(function (val) {
                            return (value.indexOf(val) > -1);
                        });
                        this.result = (this.correct) ? 'correct' : 'incorrect';
                    }
                    this.hideFeedback();
                    this.displayFeedback();
                };
                break;
            case "multi-choice":
                var distractors = htmlDiv.querySelectorAll("label");
                var distractorsRadio = htmlDiv.querySelectorAll("input");
                this.populateTheQuestion = function () {
                    this.populateQuestion();
                    domU.addClass(distractors, 'remove');
                    for (let i = 0; i < distractors.length; i++) {
                        if (this.distractorText[i] !== undefined) {
                            distractors[i].innerHTML = this.distractorText[i];
                            domU.removeClass([distractors[i]], 'remove');
                        }
                    }
                    for (let i = 0; i < distractorsRadio.length; i++) {
                        distractorsRadio[i].checked = false;
                    }
                };
                this.checkTheAnswer = function () {
                    console.log("checkTheAnswer() => multi-choice", this);

                    for (let i = 0; i < distractors.length; i++) {
                        if (distractorsRadio[i].checked) {
                            this.studentResp = $('#' + distractorsRadio[i].id + '_label')[0].innerHTML;
                        }
                    }
                    if (this.studentResp !== "") {
                        this.correct = this.studentResp === this.correctResp;
                        this.result = (this.correct) ? 'correct' : 'incorrect';
                    }
                    this.hideFeedback();
                    this.displayFeedback();
                };
                break;
            default:
                this.populateTheQuestion = function () {
                    this.populateQuestion();
                };
                break;
        }
    };
    Question.prototype.displayQuestion = function () {
        var checkTheAnswer = this.checkTheAnswer.bind(this);
        domU.removeClass([this.htmlDiv], 'hidden-question');
        domU.assignEvent(this.htmlDiv.querySelectorAll(".btn-primary"), "click", function(){
            checkTheAnswer();
            console.log("here... clicky.")
        });
    };
    Question.prototype.hideQuestion = function () {
        domU.addClass([this.htmlDiv], 'hidden-question');
    };
    Question.prototype.populateQuestion = function () {
        //Set Question text
        this.questionField.innerHTML = this.questionText;
        this.noAnswerFeed.innerHTML = '<p><span>X </span>' + this.feedback.noAnswer + '</p>';
        this.correctFeed.innerHTML = '<p><span>&#10003 </span>' + this.feedback.correctAnswer + '</p>';
        this.inccorrectFeed.innerHTML = '<p><span>X </span>' + this.feedback.wrongAnswer + '</p>';
    };
    Question.prototype.hideFeedback = function () {
        var feedback = this.htmlDiv.querySelectorAll('.feedback.visible');
        domU.removeClass(feedback, 'visible');
    };
    Question.prototype.displayFeedback = function () {
        var feedback = $('.feedback.' + this.result);
        domU.addClass(feedback, 'visible');
    };
    Question.prototype.resetResonse = function () {
        console.log("resetResonse()", this);
        this.result = "no-answer";
        this.studentResp = "";
        this.correct = false;
    };

    // Navigation Object:
    var setUpNavigation = function(){
        var currQuestion = 0;
        navigationProto = {
            questionsArray: questionsArray,
            totalQuestions: questionsArray.length,
            hideQuestion: function () {
                var curQuestion = this.questionsArray[this.currentQuestion];
                curQuestion.hideQuestion();
            },
            showQuestion: function () {
                var newQuestion = this.questionsArray[this.currentQuestion];
                newQuestion.hideFeedback();
                newQuestion.resetResonse();
                newQuestion.populateTheQuestion();
                newQuestion.displayQuestion();
            },
            get currentQuestion() {
                return currQuestion;
            },
            set currentQuestion(val) {
                currQuestion = val;
            }
        };

        prevBtn = Object.create(navigationProto);
        prevBtn.goPrev = function (e) {
            if (this.currentQuestion > 0) {
                this.hideQuestion();
                this.currentQuestion = this.currentQuestion - 1;
                this.showQuestion();
            }
        };

        nextBtn = Object.create(navigationProto);
        nextBtn.goNext = function(e){
            if (this.currentQuestion < this.totalQuestions - 1) {
                this.hideQuestion();
                this.currentQuestion = this.currentQuestion + 1;
                this.showQuestion();
            }
        };

        $('.btn-prev')[0].addEventListener("click", function(e){
            prevBtn.goPrev(e);
        });
        $('.btn-next')[0].addEventListener("click", function (e) {
            nextBtn.goNext(e);
        });

        navigationProto.showQuestion();

        nsp.prevBtn = prevBtn;
        nsp.nextBtn = nextBtn;
    };


    /*
    Setup
    */
    UTIL.domReady(function() {
        initQuiz();
    });

    //Public Methods and Properties
    nsp.initQuiz = initQuiz;

    return nsp;

})(MAINAPP || {}, UTIL.dom.$, UTIL.dom, UTIL.string);
