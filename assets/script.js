var timeLeft = 76;

var timeCounter = document.getElementById("time-left");
var quizH1 = document.getElementById("quiz-intro");
var questionsDiv = document.getElementById("questions");
var answersDiv = document.getElementById("answers");
var answersUl = document.getElementsByTagName("ul");
var answerLi = document.getElementsByTagName("li");


var answersUl = document.createElement("ul");
var createAnswerLi = document.createElement("li");

var startButton = document.createElement("button");
var answerOption1 = document.createElement("button");
var answerOption2 = document.createElement("button");
var answerOption3 = document.createElement("button");
var answerOption4 = document.createElement("button");

//renders HighScores link, quiz section, heading, description of the quiz, and clickable "Start Quiz" button.
function initializeQuiz() {
    timeCounter.textContent = "Time: " + "0";
    quizH1.textContent = "Coding Quiz Challenge";
    questionsDiv.textContent = "Let's take a quick quiz to test your knowledge of basic JavaScript fundamentals. You'll have 75 seconds to answer 5 questions. Each correct answer will earn you points, each wrong answer will reduce timer by 15 seconds. Good luck!";
    startButton.textContent = "Start Quiz";
    answersDiv.appendChild(startButton);
};

function question1() {
    //Clears the intro heading, removes the start button, adjusts the styling of the question section
        quizH1.remove();
        startButton.remove();  
        questionsDiv.setAttribute("style", "font-size: 20px; font-weight: bold");

    //Sets the question text, renders answer buttons, adds event listener and function to ul for answer clicks        
        questionsDiv.textContent = "The acronym 'JSON' is short for 'JavaScript ______ Notation'?";
        answerOption1.textContent = "A. Ordinary";
        answersDiv.appendChild(answerOption1);
        answerOption2.textContent = "B. Optimal";
        answersDiv.appendChild(answerOption2);
        answerOption3.textContent = "C. Object";
        answersDiv.appendChild(answerOption3);
        answerOption4.textContent = "D. Only";
        answersDiv.appendChild(answerOption4);

        answerOption3.addEventListener("click", function() {
            question2();
        })
    };

function question2() {
        questionsDiv.textContent = "'Template literal' notation typically DOES NOT use which of the following characters?";
        answerOption1.textContent = "A. *";
        answersDiv.appendChild(answerOption1);
        answerOption2.textContent = "B. $";
        answersDiv.appendChild(answerOption2);
        answerOption3.textContent = "C. `";
        answersDiv.appendChild(answerOption3);
        answerOption4.textContent = "D. {}";
        answersDiv.appendChild(answerOption4);

        answerOption1.addEventListener("click", function() {
            question3();
        })

};

function question3() {
        questionsDiv.textContent = "Events propogating outward from children elements to parents is referred to as ___________.";
        answerOption1.textContent = "A. Hoisting";
        answersDiv.appendChild(answerOption1);
        answerOption2.textContent = "B. Nesting";
        answersDiv.appendChild(answerOption2);
        answerOption3.textContent = "C. Defaulting";
        answersDiv.appendChild(answerOption3);
        answerOption4.textContent = "D. Bubbling";
        answersDiv.appendChild(answerOption4);

        answerOption4.addEventListener("click", function() {
            question4();
    })
};

function question4() {
        questionsDiv.textContent = "Which js operator indicates that two things are 'equal in type and value'?";
        answerOption1.textContent = "A. =";
        answersDiv.appendChild(answerOption1);
        answerOption2.textContent = "B. ===";
        answersDiv.appendChild(answerOption2);
        answerOption3.textContent = "C. ~";
        answersDiv.appendChild(answerOption3);
        answerOption4.textContent = "D. ==";
        answersDiv.appendChild(answerOption4);

        answerOption2.addEventListener("click", function() {
            question5();
})
};

function question5() {
        questionsDiv.textContent = "Which code block executes a saved function?";
        answerOption1.textContent = "A. (Pretty Please)";
        answersDiv.appendChild(answerOption1);
        answerOption2.textContent = "B. ()";
        answersDiv.appendChild(answerOption2);
        answerOption3.textContent = "C. >=";
        answersDiv.appendChild(answerOption3);
        answerOption4.textContent = "D. &&";
        answersDiv.appendChild(answerOption4);

        answerOption2.addEventListener("click", function() {
            question5();
})
}

//add function to add event listener to "answers section", where all clickable buttons will be contained. Click will clear the div, start/display timer. and render next set of content
startButton.addEventListener("click", function() {
    setTime();
    question1();
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