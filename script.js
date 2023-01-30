var timeLeft = 76;
var score = 0;

var timeCounter = document.getElementById("time-left");
var quizH1 = document.getElementById("quiz-intro");
var questionsDiv = document.getElementById("questions");
var answersDiv = document.getElementById("answers");
var answersUl = document.getElementsByTagName("ul");
var answerLi = document.getElementsByTagName("li");
var quizDiv = document.getElementsByTagName("div");

var answersUl = document.createElement("ul");
var createAnswerLi = document.createElement("li");
var validationSpan = document.createElement("span");
var initialsDiv = document.createElement("div");
var initialsInputSpan =document.createElement("span");
var initialsInput = document.createElement("input");

var startButton = document.createElement("button");
var answerOption1 = document.createElement("button");
var answerOption2 = document.createElement("button");
var answerOption3 = document.createElement("button");
var answerOption4 = document.createElement("button");
var submitButton = document.createElement("button");

//renders HighScores link, quiz section, heading, description of the quiz, and clickable "Start Quiz" button.
function initializeQuiz() {
    timeCounter.textContent = "Time: " + "0";
    quizH1.textContent = "Coding Quiz Challenge";
    questionsDiv.textContent = "Let's take a quick quiz to test your knowledge of basic JavaScript fundamentals. You'll have 75 seconds to answer 5 questions. Each correct answer will earn you points, each wrong answer will reduce timer by 15 seconds. Good luck!";
    startButton.textContent = "Start Quiz";
    answersDiv.appendChild(startButton);
};

function incorrectAnswer1() {
    event.stopPropagation();
    timeLeft -= 15;
    question2();
    validationSpan.textContent = "Wrong!";
    answersDiv.appendChild(validationSpan);    
};

function correctAnswer1() {
    event.stopPropagation();
  //  score += 100;
    question2();
    validationSpan.textContent = "Correct!";
    answersDiv.appendChild(validationSpan);   
};

function incorrectAnswer2() {
    event.stopPropagation();
    timeLeft -= 15;
    question3();
    validationSpan.textContent = "Wrong!";
    answersDiv.appendChild(validationSpan);
};

function correctAnswer2() {
    event.stopPropagation();
 //   score += 100;
    question3();
    validationSpan.textContent = "Correct!";
    answersDiv.appendChild(validationSpan);    
};

function incorrectAnswer3() {
    event.stopPropagation();
    validationSpan.remove();
    timeLeft -= 15;
    question4();
    validationSpan.textContent = "Wrong!";
    answersDiv.appendChild(validationSpan);    
};

function correctAnswer3() {
    event.stopPropagation();
    validationSpan.remove();
 //   score += 100;
    question4();
    validationSpan.textContent = "Correct!";
    answersDiv.appendChild(validationSpan);    
};

function incorrectAnswer4() {
    event.stopPropagation();
    validationSpan.remove();
    timeLeft -= 15;
    question5();
    validationSpan.textContent = "Wrong!";
    answersDiv.appendChild(validationSpan);    
};

function correctAnswer4() {
    event.stopPropagation();
    validationSpan.remove();
//    score += 100;
    question5();
    validationSpan.textContent = "Correct!";
    answersDiv.appendChild(validationSpan);
};

function incorrectAnswer5() {
    event.stopPropagation();
    validationSpan.remove();
    timeLeft -= 15;
    validationSpan.textContent = "Wrong!";
    answersDiv.appendChild(validationSpan);
    finalScore();
};

function correctAnswer5() {
    event.stopPropagation();
    validationSpan.remove();
 //   score += 100;
    validationSpan.textContent = "Correct!";
    answersDiv.appendChild(validationSpan);
    finalScore();
};

function question1() {
    //Clears the intro heading, removes the start button, adjusts the styling of the question section
        quizH1.textContent = "";
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

    //Sets event listener for buttons to determine correct/incorrect answers, time deduction and score increase
        answerOption1.addEventListener("click", incorrectAnswer1);

        answerOption2.addEventListener("click", incorrectAnswer1);

        answerOption3.addEventListener("click", correctAnswer1);

        answerOption4.addEventListener("click", incorrectAnswer1);
};

function question2() {
        answerOption1.removeEventListener("click", incorrectAnswer1);

        answerOption2.removeEventListener("click", incorrectAnswer1);

        answerOption3.removeEventListener("click", correctAnswer1);

        answerOption4.removeEventListener("click", incorrectAnswer1);

        questionsDiv.textContent = "'Template literal' notation typically DOES NOT use which of the following characters?";
        answerOption1.textContent = "A. *";
        answersDiv.appendChild(answerOption1);
        answerOption2.textContent = "B. $";
        answersDiv.appendChild(answerOption2);
        answerOption3.textContent = "C. `";
        answersDiv.appendChild(answerOption3);
        answerOption4.textContent = "D. {}";
        answersDiv.appendChild(answerOption4);

        answerOption1.addEventListener("click", correctAnswer2);

        answerOption2.addEventListener("click", incorrectAnswer2);

        answerOption3.addEventListener("click", incorrectAnswer2);

        answerOption4.addEventListener("click", incorrectAnswer2);

};

function question3() {
        answerOption1.removeEventListener("click", correctAnswer2);

        answerOption2.removeEventListener("click", incorrectAnswer2);

        answerOption3.removeEventListener("click", incorrectAnswer2);

        answerOption4.removeEventListener("click", incorrectAnswer2);

        questionsDiv.textContent = "Events propogating outward from children elements to parents is referred to as ___________.";
        answerOption1.textContent = "A. Hoisting";
        answersDiv.appendChild(answerOption1);
        answerOption2.textContent = "B. Nesting";
        answersDiv.appendChild(answerOption2);
        answerOption3.textContent = "C. Defaulting";
        answersDiv.appendChild(answerOption3);
        answerOption4.textContent = "D. Bubbling";
        answersDiv.appendChild(answerOption4);

        answerOption1.addEventListener("click", incorrectAnswer3);

        answerOption2.addEventListener("click", incorrectAnswer3);

        answerOption3.addEventListener("click", incorrectAnswer3);

        answerOption4.addEventListener("click", correctAnswer3);
};

function question4() {
        answerOption1.removeEventListener("click", incorrectAnswer3);

        answerOption2.removeEventListener("click", incorrectAnswer3);

        answerOption3.removeEventListener("click", incorrectAnswer3);

        answerOption4.removeEventListener("click", correctAnswer3);

        questionsDiv.textContent = "Which js operator indicates that two things are 'equal in type and value'?";
        answerOption1.textContent = "A. =";
        answersDiv.appendChild(answerOption1);
        answerOption2.textContent = "B. ===";
        answersDiv.appendChild(answerOption2);
        answerOption3.textContent = "C. ~";
        answersDiv.appendChild(answerOption3);
        answerOption4.textContent = "D. ==";
        answersDiv.appendChild(answerOption4);

        answerOption1.addEventListener("click", incorrectAnswer4);

        answerOption2.addEventListener("click", correctAnswer4);

        answerOption3.addEventListener("click", incorrectAnswer4);

        answerOption4.addEventListener("click", incorrectAnswer4);
};

function question5() {
        answerOption1.removeEventListener("click", incorrectAnswer4);

        answerOption2.removeEventListener("click", correctAnswer4);

        answerOption3.removeEventListener("click", incorrectAnswer4);

        answerOption4.removeEventListener("click", incorrectAnswer4);

        questionsDiv.textContent = "Which code block executes a saved function?";
        answerOption1.textContent = "A. (Pretty Please)";
        answersDiv.appendChild(answerOption1);
        answerOption2.textContent = "B. ()";
        answersDiv.appendChild(answerOption2);
        answerOption3.textContent = "C. >=";
        answersDiv.appendChild(answerOption3);
        answerOption4.textContent = "D. &&";
        answersDiv.appendChild(answerOption4);

        answerOption1.addEventListener("click", incorrectAnswer5);

        answerOption2.addEventListener("click", correctAnswer5);

        answerOption3.addEventListener("click", incorrectAnswer5);

        answerOption4.addEventListener("click", incorrectAnswer5); 
};

function finalScore() {
        quizH1.setAttribute("style", "font-size: 20px; font-weight: bold; text-align: left; padding: 0px");
        quizH1.textContent = "All Done!";
        answerOption1.remove();
        answerOption2.remove();
        answerOption3.remove();
        answerOption4.remove();

        timeLeft;
        timeCounter.textContent = "Time: " + timeLeft;

        if (timeLeft >= 0) {
            score = timeLeft;
        } else {
            score = 0;
        };

        questionsDiv.setAttribute("style", "font-size: 18px;");
        questionsDiv.textContent = "Your final Score is: " + score;
        timeCounter.remove();
        questionsDiv.appendChild(initialsDiv);
        initialsInputSpan.setAttribute("style", "border: none; display: inline; font-style: normal;");
        initialsInputSpan.textContent = "Enter Initials: "
        initialsDiv.appendChild(initialsInputSpan);
        initialsDiv.appendChild(initialsInput);
        submitButton.textContent = "Submit";
        initialsDiv.appendChild(submitButton);

        submitButton.addEventListener("click", function() {
            var initials = initialsInput.value;
            localStorage.setItem("initials", initials);
        });

};

function renderHighScores() {
        

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

        if(timeLeft <= 0) {
      //      timeCounter.textContent = "";
            clearInterval(timerInterval);
            finalScore();
        }

    }, 1000);
};

initializeQuiz();