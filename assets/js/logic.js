//console.log(questions);

var startButton = document.querySelector("#start");
var timerElement = document.querySelector(".timer");
var questions = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");


var wrongAnswer = false;
var timer;
var timerCount = 0;
var selectedQuestion = "";
var firstQuestion;

//Add the start button event
startButton.addEventListener("click", function() {
timerCount = 120;
startTimer();
askFirstQuestion();
});

function startTimer () {
    //Set the timer
    timer = setInterval(function(){
        timerCount--; //set counter to decrease
        timerElement.textContent = timerCount;
        if(timerCount >=0) {
            if (wrongAnswer && timerCount > 0) { //set condition if the answer is wrong and there is still time to take 10 seconds off the total time
               count--;
            } //else {
                //show next question - function to choose a random one from the array
               //nextQuestion();  
            //}
        }
    }, 1000);

    // if (timerCount === 0) { //insert condition for when the timer gets to 0
    //     clearInterval(timer);
    //     showScore();
    // }
}

//function askFirstQuestion(questions) {
    //Pick a random question from the array
    //for (i = 0; i < questions.length; i++) {
    //firstQuestion = Math.floor(Math.random() * questions.length);
    //return questions[firstQuestion];
//}

//var randomFirst = askFirstQuestion(questions);
//console.log(randomFirst);

//function nextQuestion() {

//}
//When I click the start button (ADD EVENT LISTENER -CLICK), I want the timer to start (SET TIMER FUNCTION) and the first question to appear (PROMPT/DISPLAY????)
//Each question has a clickable button (ADD EVENT LISTENER-CLICK ON VARIABLE PROPERTY)
//When the answer in selected, next question appears (BONUS: select a random question once pressed next question?)
//In case of an incorrect answer, one second gets subtracted from the remaining time
//Quiz ends when it runs out of questions or the time finishes
//When the game is finished, the user sees the score and has the option to save his initals and the score (highscores.html file - store highscores highest to lowest + use localstorage set in index and get in highscores)




