const questions = [
    {
        questions: "What year was the United Nations established?",
        answer: [
            { Text: "1905", correct: false},
            { Text: "1945", correct: true},
            { Text: "1925", correct: false},
            { Text: "1995", correct: false},
        ]
    },
    {
        questions: "What artist has the most streams on Spotify?",
        answer: [
            { Text: "BTS", correct: false},
            { Text: "Drake", correct: true},
            { Text: "Travis Scott", correct: false},
            { Text: "Lil Wayne", correct: false},
        ]  
    },
    {
        questions: "What country has won the most World Cups?",
        answer: [
            { Text: "Brazil", correct: true},
            { Text: "Denmark", correct: false},
            { Text: "Thailand", correct: false},
            { Text: "Libya", correct: false},
        ]     
    },
    {
        questions: "What Netflix show had the most streaming views in 2021?",
        answer: [
            { Text: "Squid Game", correct: true},
            { Text: "Mr Queen", correct: false},
            { Text: "GOblin", correct: false},
            { Text: "Nevertheless", correct: false},
        ]    
    },
    {
        questions: "What is the largest Spanish-speaking city in the world?",
        answer: [
            { Text: "Brazil", correct: false},
            { Text: "Chad", correct: false},
            { Text: "Mexico City", correct: true},
            { Text: "America", correct: false},
        ]    
    },
    {
        questions: "Which planet has the most moons?",
        answer: [
            { Text: "Earth", correct: false},
            { Text: "Saturn", correct: true},
            { Text: "Mars", correct: false},
            { Text: "Jupiter", correct: false},
        ]   
    },
    {
        questions: "How many elements are in the periodic table?",
        answer: [
            { Text: "106", correct: false},
            { Text: "200", correct: false},
            { Text: "100", correct: false},
            { Text: "118", correct: true},
        ]   
    },
    {
        questions: "What country has the highest life expectancy?",
        answer: [
            { Text: "Britain", correct: false},
            { Text: "Hong Kong", correct: true},
            { Text: "Nigeria", correct: false},
            { Text: "South Korea", correct: false},
        ]  
    }

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const secondButton = document.getElementById("second-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    secondButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestionIndex = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
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
    secondButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classListadd("incorrect")
    }
}


startQuiz();