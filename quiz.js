const questions = [
    {
        questions: "Who is the biggest gym in the world",
        answers: [
            { text:"Gold's Gym Khalda", correct: true},
            { text:"Funsion Gym", correct: false},
            { text:"Monster Gym", correct: false},
            { text:"Alphaland Gym", correct: false},
        ]
    },
    {
        questions: "Who has most MR.OLYMPIA",
        answers: [
            { text:"Kevin Levrone", correct: false},
            { text:"Ronnie Coleman", correct: true},
            { text:"Jay Cutler", correct: false},
            { text:"Arnold Schwarzenegger", correct: false},
        ]
    },
    {
        questions: "Which year the first gym is created",
        answers: [
            { text:"1822", correct: false},
            { text:"1823", correct: false},
            { text:"1827", correct: false},
            { text:"1825", correct: true},
        ]
    },
    {
        questions: "Which sponsor is the the popular for gyms",
        answers: [
            { text:"Gym Town", correct: false},
            { text:"Be Strong", correct: false},
            { text:"Gym Floor", correct: false},
            { text:"Gym Shark", correct: true},
        ]
    },
    {
        questions: "Which is the hardest lift to do in the gym",
        answers: [
            { text:"Lateral Raises", correct: false},
            { text:"Shoulder Press", correct: false},
            { text:"Dead Lift", correct: true},
            { text:"Squats", correct: false},
        ]
    },
    {
        questions: "How is the most effective chest workout",
        answers: [
            { text:"Incline Press", correct: false},
            { text:"Dumbell Bench Press", correct: true},
            { text:"Chest Fly", correct: false},
            { text:"Incline Bench Press", correct: false},
        ]
    },
    {
        questions: "Which protein is most used",
        answers: [
            { text:"Hyper Mass", correct: false},
            { text:"Whey", correct: true},
            { text:"Creatine", correct: false},
            { text:"Pree Workout", correct: false},
        ]
    },
    {
        questions: "Which protein is the best to build muscle",
        answers: [
            { text:"Hyper Mass", correct: false},
            { text:"Whey", correct: false},
            { text:"Creatine", correct: true},
            { text:"Pree Workout", correct: false},
        ]
    },
    {
        questions: "Who has the hardest lift in the world",
        answers: [
            { text:"Eddie Hall", correct: true},
            { text:"Ronnie Coleman", correct: false},
            { text:"Tom Platz", correct: false},
            { text:"Kevin Levrone", correct: false},
        ]
    },
    {
        questions: "Who many kg is the hardest deadlift in the world",
        answers: [
            { text:"526", correct: false},
            { text:"470", correct: false},
            { text:"374", correct: false},
            { text:"501", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    questions;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

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




function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.
    length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
} 


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();