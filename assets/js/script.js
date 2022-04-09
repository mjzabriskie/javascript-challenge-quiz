var startBtn = document.querySelector("#start-btn");
var questionEl = document.querySelector("#question-container");

function startQuiz(){
    startBtn.classList.add("hide");

    questionEl.classList.remove("hide");
    nextQuestion();
}

function nextQuestion(){

}

function chooseAnswer(){

}

startBtn.addEventListener('click', startQuiz);



var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            {text: "<js>", correct: false},
            {text: "<script>", correct: true},
            {text: "<scripting>", correct: false},
            {text: "<javascript>", correct: false}
        ]
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?<br><br><p id='demo'>This is a demonstration.</p>",
        answers: [
            {text: "document.getElementById('demo').innerHTML = 'Hello World!';", correct: true},
            {text: "document.getElement('p').innerHTML = 'Hello World!';", correct: false},
            {text: "document.getElementByName('p').innerHTML = 'Hello World!';", correct: false},
            {text: "#demo.innerHTML = 'Hello World!';", correct: false}
        ]
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: [
            {text: "The <body> section", correct: false},
            {text: "Both the <head> section and the <body> section are correct", correct: true},
            {text: "The <head> section", correct: false},
            {text: "It connects automatically to the HTML document", correct: false}
        ]
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: [
            {text: "<script src='xxx.js'>", correct: true},
            {text: "<script href='xxx.js'>", correct: false},
            {text: "<script name='xxx.js'>", correct: false},
            {text: "<source script='xxx.js'>", correct: false}
        ]
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        answers: [
            {text: "True", correct: false},
            {text: "False", correct: true},
            {text: "hide"},
            {text: "hide"}
        ]
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            {text: "alert('Hello World');", correct: true},
            {text: "msg('Hello World');", correct: false},
            {text: "msgBox('Hello World');", correct: false},
            {text: "alertBox('Hello World');", correct: false}
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            {text: "function myFunction()", correct: true},
            {text: "function:myFunction()", correct: false},
            {text: "function = myFunction()", correct: false},
            {text: "hide"}
        ]
    },
    {
        question: "How do you call a function named 'myFunction'?",
        answers: [
            {text: "myFunction()", correct: true},
            {text: "call myFunction()", correct: false},
            {text: "call function myFunction()", correct: false},
            {text: "hide"}
        ]
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: [
            {text: "if (i == 5)", correct: true},
            {text: "if i = 5 then", correct: false},
            {text: "if i == 5 then", correct: false},
            {text: "if i = 5", correct: false}
        ]
    },
    {
        question: "How does a WHILE loop start?",
        answers: [
            {text: "while (i <= 10; i++)", correct: false},
            {text: "while (i <= 10)", correct: true},
            {text: "while i = 1 to 10", correct: false},
            {text: "hide"}
        ]
    },
    {
        question: "How does a FOR loop start?",
        answers: [
            {text: "for (i <= 5; i++)", correct: false},
            {text: "for i = 1 to 5", correct: false},
            {text: "for (i = 0; i <= 5; i++)", correct: true},
            {text: "for (i = 0; i <= 5)", correct: false}
        ]
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answers: [
            {text: "'This is a comment", correct: false},
            {text: "//This is a comment", correct: true},
            {text: "<!--This is a comment-->", correct: false},
            {text: "hide"}
        ]
    },
]