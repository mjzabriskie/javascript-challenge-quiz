var startBtnEl = document.querySelector("#start-btn");
var nextBtnEl = document.querySelector("#next-btn");
var choice1BtnEl = document.querySelector(".choice");
var questionContEl = document.querySelector("#question-container");
var questionTxtEl = document.querySelector("#question");
var questionAnswerEl = document.querySelector("#answer-buttons");
var scoreCount = 0;



var randomQuestions;
var questionCount = 0;

function startQuiz(){
    startBtnEl.classList.add("hide");
    questionContEl.classList.remove("hide");
    nextBtnEl.classList.remove("hide");
    nextQuestion();
}

function nextQuestion(){
    questionTxtEl.innerHTML = questions[questionCount].question;
    for (i = 1; i <= 4; i++){
        var optionBtn = questionAnswerEl.querySelector(".btn:nth-child("+i+")");
        var btnAnswer = questions[questionCount].answers[i-1];

        optionBtn.textContent = btnAnswer.choice;

        //Removing leftover true class from previous questions
        if(optionBtn.classList.contains("true")){
            optionBtn.classList.remove("true");
        }
        //Removing leftover false class from previous questions
        if(optionBtn.classList.contains("false")){
            optionBtn.classList.remove("false");
        }

        optionBtn.classList.add(btnAnswer.correct);

        if(btnAnswer.choice == "invisible"){
            optionBtn.classList.add(btnAnswer.choice);
        }else{//Removing invisible when it's no longer needed.
            if(optionBtn.classList.contains("invisible")){
                optionBtn.classList.remove("invisible");
            }
        }
    }
    questionCount++;
}

function chooseAnswer(event){
    if(event.target.classList.contains("true")){
        console.log("Correct!");
        scoreCount++;
    } else {
        console.log("Wrong!");
    }

}

startBtnEl.addEventListener('click', startQuiz);
nextBtnEl.addEventListener('click', nextQuestion);
questionAnswerEl.addEventListener('click', chooseAnswer);



var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            {choice: "<js>", correct: false},
            {choice: "<script>", correct: true},
            {choice: "<scripting>", correct: false},
            {choice: "<javascript>", correct: false}
        ]
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?<br>&lt;p id='demo'&gt;This is a demonstration.&lt;/p&gt;",
        answers: [
            {choice: "document.getElementById('demo').innerHTML = 'Hello World!';", correct: true},
            {choice: "document.getElement('p').innerHTML = 'Hello World!';", correct: false},
            {choice: "document.getElementByName('p').innerHTML = 'Hello World!';", correct: false},
            {choice: "#demo.innerHTML = 'Hello World!';", correct: false}
        ]
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: [
            {choice: "The <body> section", correct: false},
            {choice: "Both the <head> section and the <body> section are correct", correct: true},
            {choice: "The <head> section", correct: false},
            {choice: "It connects automatically to the HTML document", correct: false}
        ]
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: [
            {choice: "<script src='xxx.js'>", correct: true},
            {choice: "<script href='xxx.js'>", correct: false},
            {choice: "<script name='xxx.js'>", correct: false},
            {choice: "<source script='xxx.js'>", correct: false}
        ]
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        answers: [
            {choice: "True", correct: false},
            {choice: "False", correct: true},
            {choice: "invisible", correct: false},
            {choice: "invisible", correct: false}
        ]
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            {choice: "alert('Hello World');", correct: true},
            {choice: "msg('Hello World');", correct: false},
            {choice: "msgBox('Hello World');", correct: false},
            {choice: "alertBox('Hello World');", correct: false}
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            {choice: "function myFunction()", correct: true},
            {choice: "function:myFunction()", correct: false},
            {choice: "function = myFunction()", correct: false},
            {choice: "invisible", correct: false}
        ]
    },
    {
        question: "How do you call a function named 'myFunction'?",
        answers: [
            {choice: "myFunction()", correct: true},
            {choice: "call myFunction()", correct: false},
            {choice: "call function myFunction()", correct: false},
            {choice: "invisible", correct: false}
        ]
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: [
            {choice: "if (i == 5)", correct: true},
            {choice: "if i = 5 then", correct: false},
            {choice: "if i == 5 then", correct: false},
            {choice: "if i = 5", correct: false}
        ]
    },
    {
        question: "How does a WHILE loop start?",
        answers: [
            {choice: "while (i <= 10; i++)", correct: false},
            {choice: "while (i <= 10)", correct: true},
            {choice: "while i = 1 to 10", correct: false},
            {choice: "invisible", correct: false}
        ]
    },
    {
        question: "How does a FOR loop start?",
        answers: [
            {choice: "for (i <= 5; i++)", correct: false},
            {choice: "for i = 1 to 5", correct: false},
            {choice: "for (i = 0; i <= 5; i++)", correct: true},
            {choice: "for (i = 0; i <= 5)", correct: false}
        ]
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answers: [
            {choice: "'This is a comment", correct: false},
            {choice: "//This is a comment", correct: true},
            {choice: "<!--This is a comment-->", correct: false},
            {choice: "invisible", correct: false}
        ]
    },
    {
        question: "How to insert a comment that has more than one line?",
        answers: [
            {choice: "//This comment has<br>more than one line//", correct: false},
            {choice: "<!--This comment has<br>more than one line-->", correct: false},
            {choice: "/*This comment has<br>more than one line*/", correct: true},
            {choice: "invisible", correct: false}
        ]
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: [
            {choice: "var colors = (1:'red', 2:'green', 3:'blue')", correct: false},
            {choice: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", correct: false},
            {choice: "var colors = 'red', 'green', 'blue'", correct: false},
            {choice: "var colors = ['red', 'green', 'blue']", correct: true}
        ]
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        answers: [
            {choice: "Math.round(7.25)", correct: true},
            {choice: "round(7.25)", correct: false},
            {choice: "rnd(7.25)", correct: false},
            {choice: "Math.rnd(7.25)", correct: false}
        ]
    },
    {
        question: "What is the correct JavaScript syntax for opening a new window called 'w2' ?",
        answers: [
            {choice: "w2 = window.new('http://www.w3schools.com');", correct: false},
            {choice: "w2 = window.open('http://www.w3schools.com');", correct: true},
            {choice: "invisible", correct: false},
            {choice: "invisible", correct: false}
        ]
    },
    {
        question: "JavaScript is the same as Java.",
        answers: [
            {choice: "True", correct: false},
            {choice: "False", correct: true},
            {choice: "invisible", correct: false},
            {choice: "invisible", correct: false}
        ]
    },
    {
        question: "How can you detect the client's browser name?",
        answers: [
            {choice: "browser.name", correct: false},
            {choice: "client.navName", correct: false},
            {choice: "navigator.appName", correct: true},
            {choice: "invisible", correct: false}
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: [
            {choice: "onmouseclick", correct: false},
            {choice: "onchange", correct: false},
            {choice: "onmouseover", correct: false},
            {choice: "onclick", correct: true}
        ]
    },
    {
        question: "How do you declare a JavaScript variable?",
        answers: [
            {choice: "variable carName;", correct: false},
            {choice: "var carName;", correct: true},
            {choice: "v carName;", correct: false},
            {choice: "invisible", correct: false}
        ]
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            {choice: "=", correct: true},
            {choice: "x", correct: false},
            {choice: "-", correct: false},
            {choice: "*", correct: false}
        ]
    },
    {
        question: "What will the following code return: Boolean(10 > 9)",
        answers: [
            {choice: "true", correct: true},
            {choice: "false", correct: false},
            {choice: "NaN", correct: false},
            {choice: "invisible", correct: false}
        ]
    },
    {
        question: "What will the following code return: Boolean(10 > 9)",
        answers: [
            {choice: "Yes", correct: true},
            {choice: "No", correct: false},
            {choice: "invisible", correct: false},
            {choice: "invisible", correct: false}
        ]
    }
]