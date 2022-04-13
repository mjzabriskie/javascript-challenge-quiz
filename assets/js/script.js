var gameContainerEl = document.querySelector("#game-main");
var startBtnEl = document.querySelector("#start-btn");
var timeEl = document.querySelector("#time-remaining");
var godMode = document.querySelector("#god-mode");
var godModeSelected;
var highScoresPEl = document.querySelector("#check-high-scores");
var introEl = document.querySelector("#intro");
var questionContainerEl = document.querySelector("#question-container");
var questionTxtEl = document.querySelector("#question");
var questionAnswerEl = document.querySelector("#answer-buttons");
var feedbackH2El = document.querySelector("#feedback");
var scoreBoardEl = document.querySelector("#score-board");
var scoreContainerEl = document.querySelector("#game-scores");
var scoreListEl = document.querySelector("#score-list");
var scoreFormEl = document.querySelector("#score-form");
var yourScore = document.querySelector("#your-score");
var scoreText = document.querySelector("#score-text");
var saveBtn = document.querySelector("#save-score");
var playAgainBtnEl = document.querySelector("#play-again");
var getPlayerInit = document.querySelector("input[name='player-initials']");
var highScorers = [];
var scoreCount = 0;
var questionCount = 0;
var timeRemaining = 10;
//Stops timer if player finishes before time runs out. See function countdown();
var gameFinished;




// Counts down from 90 seconds
function countdown() {
    timeInterval = setInterval(function () {
        if (gameFinished) {
            clearInterval(timeInterval);
        } else if (timeRemaining >= 0) {
            timeEl.textContent = "Seconds remaining: " + timeRemaining;
            timeRemaining--;
        } else {
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}

function startQuiz() {
    startBtnEl.classList.add("hide");
    introEl.classList.add("hide");
    highScoresPEl.classList.add("hide");
    questionContainerEl.classList.remove("hide");
    yourScore.classList.remove("hide");
    timeEl.classList.remove("hide");
    countdown();
    nextQuestion();
}

function nextQuestion() {
    if (questionCount >= questions.length) {
        endQuiz();
        return false;
    }

    yourScore.textContent = "Your score: " + scoreCount;

    feedbackH2El.classList.add("hide");

    questionTxtEl.innerHTML = questions[questionCount].question;
    for (i = 1; i <= 4; i++) {
        var optionBtn = questionAnswerEl.querySelector(".btn:nth-child(" + i + ")");
        var btnAnswer = questions[questionCount].answers[i - 1];

        optionBtn.disabled = false;

        optionBtn.textContent = btnAnswer.choice;

        //Removing leftover true class from previous questions
        if (optionBtn.classList.contains("true")) {
            optionBtn.classList.remove("true");
        }
        //Removing leftover false class from previous questions
        if (optionBtn.classList.contains("false")) {
            optionBtn.classList.remove("false");
        }
        //Removing leftover green class from previous questions
        if (optionBtn.classList.contains("green")) {
            optionBtn.classList.remove("green");
        }
        if (feedbackH2El.classList.contains("green")) {
            feedbackH2El.classList.remove("green");
        }
        //Removing leftover red class from previous questions
        if (optionBtn.classList.contains("red")) {
            optionBtn.classList.remove("red");
        }
        if (feedbackH2El.classList.contains("red")) {
            feedbackH2El.classList.remove("red");
        }

        optionBtn.classList.add(btnAnswer.correct);

        if (godModeSelected) {
            if (btnAnswer.correct) {
                optionBtn.classList.add("green");
            } else {
                optionBtn.classList.add("red");
            }
        }


        if (btnAnswer.choice == "invisible") {
            optionBtn.classList.add(btnAnswer.choice);
        } else {//Removing invisible when it's no longer needed.
            if (optionBtn.classList.contains("invisible")) {
                optionBtn.classList.remove("invisible");
            }
        }
    }
    questionCount++;
}

function chooseAnswer(event) {
    for (i = 1; i <= 4; i++) {
        var optionBtn = questionAnswerEl.querySelector(".btn:nth-child(" + i + ")");
        if (optionBtn.classList.contains("true")) {
            optionBtn.classList.add("green");
        } else {
            optionBtn.classList.add("red");
        }
        optionBtn.disabled = true;
    }

    if (event.target.classList.contains("true")) {
        feedbackH2El.innerHTML = "CORRECT!";
        feedbackH2El.classList.add("green");
        yourScore.textContent = "Your score: " + (scoreCount += 5);
    } else {
        feedbackH2El.innerHTML = "WRONG!";
        feedbackH2El.classList.add("red");
        timeRemaining -= 10;
    }
    feedbackH2El.classList.remove("hide");
    setTimeout(nextQuestion, 2000);
}

function responseFeedback() {
    nextQuestion();
}

function endQuiz() {
    if (timeRemaining > 0) {
        alert("Congratulations, you've finished the quiz!");
        gameFinished = true;
    } else {
        timeRemaining = 0;
        alert("You've run out of time!");
    }
    gameContainerEl.classList.add("hide");
    scoreContainerEl.classList.remove("hide");
    scoreText.innerHTML = "You scored " + scoreCount + " points!";
}

function saveScore() {
    localStorage.setItem("high-scorer", JSON.stringify(highScorers));
}

function loadScores() {
    var savedScores = localStorage.getItem("high-scorer");
    if (!savedScores) {
        return false;
    }

    savedScores = JSON.parse(savedScores);

    highScorers = savedScores;

    for (var i = 0; i < savedScores.length; i++) {
        if(i > 4){
            return false;
       } else {
            var scoreItemEl = document.createElement("li");
            scoreItemEl.textContent = savedScores[i].initials + " Score: " + scoreCount + " points";
            scoreListEl.append(scoreItemEl);
       }
    }
}

loadScores();

highScoresPEl.addEventListener("click", function () {
    gameContainerEl.classList.add("hide");
    scoreContainerEl.classList.remove("hide");
    scoreBoardEl.classList.remove("hide");
    scoreFormEl.classList.add("invisible");
    console.log(scoreFormEl.classList);
});

startBtnEl.addEventListener("click", startQuiz);
//nextBtnEl.addEventListener("click", nextQuestion);
questionAnswerEl.addEventListener("click", chooseAnswer);

playAgainBtnEl.addEventListener("click", function () {
    location.reload();
});

saveBtn.addEventListener("click", function () {
    if(!getPlayerInit.value){
        alert("Please enter your initials!");
    } else {

        var scoreItemEl = document.createElement("li");
        scoreItemEl.textContent = getPlayerInit.value.toUpperCase() + " Score: " + scoreCount + " points";
        scoreListEl.append(scoreItemEl);

        var playerInit = getPlayerInit.value.toUpperCase();
        var scoreDataObj = {
            initials: playerInit,
            score: scoreCount
        };
        highScorers.push(scoreDataObj);
        saveScore();
        scoreBoardEl.classList.remove("hide");
        scoreFormEl.classList.add("invisible");
        //loadScores();
    }
});

godMode.addEventListener("click", function () {
    var decision = confirm("You found me! Activate GOD MODE?");
    if (decision) {
        godModeSelected = true;
        startQuiz();
    }
})


var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { choice: "<js>", correct: false },
            { choice: "<script>", correct: true },
            { choice: "<scripting>", correct: false },
            { choice: "<javascript>", correct: false }
        ]
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?<br>&lt;p id='demo'&gt;This is a demonstration.&lt;/p&gt;",
        answers: [
            { choice: "document.getElementById('demo').innerHTML = 'Hello World!';", correct: true },
            { choice: "document.getElement('p').innerHTML = 'Hello World!';", correct: false },
            { choice: "document.getElementByName('p').innerHTML = 'Hello World!';", correct: false },
            { choice: "#demo.innerHTML = 'Hello World!';", correct: false }
        ]
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: [
            { choice: "The <body> section", correct: false },
            { choice: "The <head> section", correct: false },
            { choice: "Both the <head> section and the <body> section are correct", correct: true },
            { choice: "It connects automatically to the HTML document", correct: false }
        ]
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: [
            { choice: "<script src='xxx.js'>", correct: true },
            { choice: "<script href='xxx.js'>", correct: false },
            { choice: "<script name='xxx.js'>", correct: false },
            { choice: "<source script='xxx.js'>", correct: false }
        ]
    },
    {
        question: "The external JavaScript file must contain the &ltscript&gt tag.",
        answers: [
            { choice: "True", correct: false },
            { choice: "False", correct: true },
            { choice: "invisible", correct: false },
            { choice: "invisible", correct: false }
        ]
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            { choice: "alert('Hello World');", correct: true },
            { choice: "msg('Hello World');", correct: false },
            { choice: "msgBox('Hello World');", correct: false },
            { choice: "alertBox('Hello World');", correct: false }
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            { choice: "function myFunction()", correct: true },
            { choice: "function:myFunction()", correct: false },
            { choice: "function = myFunction()", correct: false },
            { choice: "invisible", correct: false }
        ]
    },
    {
        question: "How do you call a function named 'myFunction'?",
        answers: [
            { choice: "myFunction()", correct: true },
            { choice: "call myFunction()", correct: false },
            { choice: "call function myFunction()", correct: false },
            { choice: "invisible", correct: false }
        ]
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: [
            { choice: "if (i == 5)", correct: true },
            { choice: "if i = 5 then", correct: false },
            { choice: "if i == 5 then", correct: false },
            { choice: "if i = 5", correct: false }
        ]
    },
    {
        question: "How does a WHILE loop start?",
        answers: [
            { choice: "while (i <= 10; i++)", correct: false },
            { choice: "while (i <= 10)", correct: true },
            { choice: "while i = 1 to 10", correct: false },
            { choice: "invisible", correct: false }
        ]
    },
    {
        question: "How does a FOR loop start?",
        answers: [
            { choice: "for (i <= 5; i++)", correct: false },
            { choice: "for i = 1 to 5", correct: false },
            { choice: "for (i = 0; i <= 5; i++)", correct: true },
            { choice: "for (i = 0; i <= 5)", correct: false }
        ]
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answers: [
            { choice: "'This is a comment", correct: false },
            { choice: "//This is a comment", correct: true },
            { choice: "<!--This is a comment-->", correct: false },
            { choice: "invisible", correct: false }
        ]
    },
    {
        question: "How to insert a comment that has more than one line?",
        answers: [
            { choice: "//This comment has<br>more than one line//", correct: false },
            { choice: "<!--This comment has<br>more than one line-->", correct: false },
            { choice: "/*This comment has<br>more than one line*/", correct: true },
            { choice: "invisible", correct: false }
        ]
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: [
            { choice: "var colors = (1:'red', 2:'green', 3:'blue')", correct: false },
            { choice: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", correct: false },
            { choice: "var colors = 'red', 'green', 'blue'", correct: false },
            { choice: "var colors = ['red', 'green', 'blue']", correct: true }
        ]
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        answers: [
            { choice: "Math.round(7.25)", correct: true },
            { choice: "round(7.25)", correct: false },
            { choice: "rnd(7.25)", correct: false },
            { choice: "Math.rnd(7.25)", correct: false }
        ]
    },
    {
        question: "What is the correct JavaScript syntax for opening a new window called 'w2' ?",
        answers: [
            { choice: "w2 = window.new('http://www.w3schools.com');", correct: false },
            { choice: "w2 = window.open('http://www.w3schools.com');", correct: true },
            { choice: "invisible", correct: false },
            { choice: "invisible", correct: false }
        ]
    },
    {
        question: "JavaScript is the same as Java.",
        answers: [
            { choice: "True", correct: false },
            { choice: "False", correct: true },
            { choice: "invisible", correct: false },
            { choice: "invisible", correct: false }
        ]
    },
    {
        question: "How can you detect the client's browser name?",
        answers: [
            { choice: "browser.name", correct: false },
            { choice: "client.navName", correct: false },
            { choice: "navigator.appName", correct: true },
            { choice: "invisible", correct: false }
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: [
            { choice: "onmouseclick", correct: false },
            { choice: "onchange", correct: false },
            { choice: "onmouseover", correct: false },
            { choice: "onclick", correct: true }
        ]
    },
    {
        question: "How do you declare a JavaScript variable?",
        answers: [
            { choice: "variable carName;", correct: false },
            { choice: "var carName;", correct: true },
            { choice: "v carName;", correct: false },
            { choice: "invisible", correct: false }
        ]
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            { choice: "=", correct: true },
            { choice: "x", correct: false },
            { choice: "-", correct: false },
            { choice: "*", correct: false }
        ]
    },
    {
        question: "What will the following code return: Boolean(10 > 9)",
        answers: [
            { choice: "true", correct: true },
            { choice: "false", correct: false },
            { choice: "NaN", correct: false },
            { choice: "invisible", correct: false }
        ]
    },
    {
        question: "Is JavaScript case-sensitive?",
        answers: [
            { choice: "Yes", correct: true },
            { choice: "No", correct: false },
            { choice: "invisible", correct: false },
            { choice: "invisible", correct: false }
        ]
    }
]