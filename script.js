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
    {
        question : "What character have both Robert Downey Jr. and Benedict Cumberbatch played?",
        answers :[
            { text : "Doctor Strange", correct: false},
            { text : "Iron Man", correct: false},
            { text : "Sherlock Holmes", correct: true},
            { text : "Dr. Dolittle", correct: false},
        ]
    },
    {
        question : 'What city is known as "The Eternal City" ?',
        answers :[
            {text : "New York", correct: false},
            {text : "Rome", correct: true},
            {text : "London", correct: false},
            {text : "Milan", correct: false}
        ]
    },
    {
        question : "Kratos is the main character of what video game series?",
        answers :[
            {text : "Call of Duty", correct: false},
            {text : "God of War", correct: true},
            {text : "Assasins' creed", correct: false},
            {text : "Mortal Kombat", correct: false}
        ]
    },
    {
        question : "In what country would you find Mount Kilimanjaro?",
        answers :[
            {text : "Sudan", correct: false},
            {text : "South Africa", correct: false},
            {text : "Ethiopia", correct: false},
            {text : "Tanzania", correct: true}
        ]
    },
    {
        question : "How many bones do we have in an ear?",
        answers :[
            {text : "2", correct: false},
            {text : "7", correct: false},
            {text : "3", correct: true},
            {text : "6", correct: false}
        ]
    },
    {
        question : "What artist has the most streams on Spotify?",
        answers :[
            {text : "Taylor Swift", correct: false},
            {text : "Burna Boy", correct: false},
            {text : "Drake", correct: true},
            {text : "Beyonce", correct: false}
        ]
    },
    {
        question : 'What company was originally called "Cadabra"?',
        answers :[
            {text : "Amazon", correct: true},
            {text : "Microsoft", correct: false},
            {text : "Meta", correct: false},
            {text : "Nike", correct: false}
        ]
    },
    {
        question : "Who painted the Mona Lisa?",
        answers :[
            {text : "Raphael", correct: false},
            {text : "Caravaggio", correct: false},
            {text : "Michelangelo", correct: false},
            {text : "Leonardo da Vinci", correct: true}
        ]
    },
    {
        question : "What animal type is a Penguin?",
        answers :[
            {text : "Mammal", correct: false},
            {text : "Bird", correct: true},
            {text : "Reptile", correct: false},
            {text : "Insect", correct: false}
        ]
    },
];

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

function handleNextButton(){
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

startQuiz();