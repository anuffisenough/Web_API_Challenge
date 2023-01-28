var timeCounter = document.getElementById("time-left");
var timeLeft = 76;
var quizH1 = document.getElementById("quiz-intro");
var questionsDiv = document.getElementById("questions");
var answersDiv = document.getElementById("answers");
var createButton = document.createElement("button");
var startButton = createButton;
var createAnswersList = document.createElement("ul");
var answersList = createAnswersList



//renders HighScores link, quiz section, heading, description of the quiz, and clickable "Start Quiz" button.
function initializeQuiz() {
    timeCounter.textContent = "Time: " + "0";
    quizH1.textContent = "Coding Quiz Challenge";
    questionsDiv.textContent = "Let's take a quick quiz to test your knowledge of basic JavaScript fundamentals. You'll have 75 seconds to answer 5 questions. Each correct answer will earn you points, each wrong answer will reduce timer by 15 seconds. Good luck!";
    startButton.textContent = "Start Quiz";
    answersDiv.appendChild(startButton);
};

function quizProgression() {
    var answerOption1 = createButton;
    var answerOption2 = createButton;
    var answerOption3 = createButton;
    var answerOption4 = createButton;
        quizH1.remove();
        startButton.remove();    
        questionsDiv.textContent = "The acronym 'JSON' is short for 'JavaScript ______ Notation'?";
        answersDiv.appendChild(createAnswersList);
        answerOption1.textContent = "A. Obvious";
        answersList.appendChild(answerOption1);
        answerOption1.textContent = "B. Ordinary";
        answersList.appendChild(answerOption2);
        answerOption1.textContent = "C. Object";
        answersList.appendChild(answerOption3);
        answerOption1.textContent = "D. Optimal";
        answersList.appendChild(answerOption4);
}

//add function to add event listener to "answers section", where all clickable buttons will be contained. Click will clear the div, start/display timer. and render next set of content
startButton.addEventListener("click", function() {
    setTime();
    quizProgression();
})


//creates and displays the decrementing 75 seconds once use clicks "Start Quiz"
function setTime() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeCounter.textContent = "Time: " + timeLeft;

        if(timeLeft === 0) {
            clearInterval(timerInterval);
            console.log("Time's up!");
        }

    }, 1000);
};

initializeQuiz();