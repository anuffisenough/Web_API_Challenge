var timeCounter = document.getElementById("time-left");
var timeLeft = 76;
var quizH1 = document.getElementById("quiz-intro");
var questionsBox = document.getElementById("questions");
var answersBox = document.getElementById("answers");
const buttonAnswersArray = ["Start Quiz"];
var button = document.createElement("button");

//renders HighScores link, quiz section, heading, description of the quiz, and clickable "Start Quiz" button. Needs styling.
function initializeQuiz() {
    quizH1.textContent = "Coding Quiz Challenge";
    questionsBox.textContent = "Let's take a quick quiz to test your knowledge of basic JavaScript fundamentals. You'll have 75 seconds to answer 5 questions. Each correct answer will earn you points, each wrong answer will reduce timer by 15 seconds. Good luck!";
    button.textContent = buttonAnswersArray[0];
    answersBox.appendChild(button);
};
//add function to add event listener to "answers section", where all clickable buttons will be contained. Click will clear the div, start/display timer. and render next set of content
button.addEventListener("click", function() {
    setTime();
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

//setTime();