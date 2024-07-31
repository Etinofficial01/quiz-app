# quiz-app

A simple quiz app.

Html file consists of a main div that contains the quiz header, question and buttons to select options and one button to go to the next question.

CSS styling is added for tags in html file.

javaScript file consists of different functions.
First, varibale was created for storing the questions and answers
const questions = [
    {
        question : "Who is the ancient Greek god of the sun?",
        answers :[
            { text : "Zeus", correct: false},
            { text : "Apollo", correct: true},
            { text : "Hades", correct: false},
            { text : "Aphrodite", correct: false},
        ]
    },
]
//creating variables for questions, answer button, and next-btn
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

//score count
let currentQuestionIndex = 0;
let score = 0;

//function for startquiz
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

//function to update question
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
}
 //function to hide previous button in html
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

//function to listen for click on options
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

//function to handle click on button : see JavaScript file

//function to show final score: see JavaScript file