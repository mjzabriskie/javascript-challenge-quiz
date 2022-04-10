var startBtnEl = document.querySelector("#start-btn");
var nextBtnEl = document.querySelector("#next-btn");
var questionContEl = document.querySelector("#question-container");
var questionTxtEl = document.querySelector("#question");
var questionAnswerEl = document.querySelector("#answer-buttons");



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
        var btnAnswer = questions[questionCount].answers[i-1].choice;
        optionBtn.textContent = btnAnswer;//btnAnswer;//answers[i].choice;
        console.log(btnAnswer);
    }

    questionCount++;
}

function chooseAnswer(){

}

startBtnEl.addEventListener('click', startQuiz);
nextBtnEl.addEventListener('click', nextQuestion);



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
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?<br><br><p id='demo'>This is a demonstration.</p>",
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
            {choice: "hide"},
            {choice: "hide"}
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
            {choice: "hide"}
        ]
    },
    {
        question: "How do you call a function named 'myFunction'?",
        answers: [
            {choice: "myFunction()", correct: true},
            {choice: "call myFunction()", correct: false},
            {choice: "call function myFunction()", correct: false},
            {choice: "hide"}
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
            {choice: "hide"}
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
            {choice: "hide"}
        ]
    },
]