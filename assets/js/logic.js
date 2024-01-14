//console.log(questions);
var body = document.querySelector("body");
var h1 = document.querySelector("h1");
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var timerElement = document.querySelector(".timer");
var questionsElement = document.querySelector("#questions");
var questionTitleElement = document.querySelector("#question-title");
var choicesElement = document.querySelector("#choices");

//Insert pub quiz image under start button, inside the start-screen div
//Create image element within the start-screen div
var image = document.createElement("img");
//Set content and style
image.setAttribute("src", "./assets/img/19697.jpg");
image.setAttribute("style", "position: relative; width: 500px; padding: 10px; margin-left: 15px;");
//Append the image tag to the page
startScreen.appendChild(image);

//Style page
body.setAttribute("style", "font-family: emoji");
startButton.setAttribute("style", "background-color: navy; color: orange; size: 110%");


var wrongAnswer = false;
var timerInterval;
var timerCount = 0;
var selectedQuestion = "";
var firstQuestion = "";
var randomQuestion = "";
var firstQuestionDisplay = "";
var choicesList;

//Add the start button event
startButton.addEventListener("click", function() {
//Declare functions to run when button is pressed
startTimer(); 
askFirstQuestion(questions); 
});

//Define startTimer funtion
function startTimer () {
    timerCount = 90; //Set the timer
    
    timerInterval = setInterval(function(){
        timerCount--; //set counter to decrease
        timerElement.textContent = "Time: " + timerCount;
        if(timerCount <= 0) { //condition for when the timer gets to 0
            clearInterval(timerInterval);
            showScore(); //TODO:define function for showing scores when time finishes
        }
        //TODO:if (wrongAnswer && timerCount > 0) { //set condition if the answer is wrong and there is still time to take 10 seconds off the total time
                
    }, 1000);     
}
console.log(quizQuestions);

function askFirstQuestion(questions) {
    //Pick a random question from the array
    var firstQuestion = quizQuestions[Math.floor(Math.random()*quizQuestions.length)];
    console.log(firstQuestion);
    //Assign question title to the HTML object
    questionTitleElement.textContent = firstQuestion.questionTitle;
    console.log(questionTitleElement);


    
    //var newWindow = window.open('', '_blank');
    //newWindow.document.write(`<h2>${randomQuestion.questionTitle}</h2>`);
    // var choicesList = newWindow.document.createElement('ul');
    // randomQuestion.choices.forEach(choice => {
    //     var listItem = newWindow.document.createElement('li');
    //     listItem.textContent = choice.text;
    //     listItem.addEventListener('click', () => {
    //         //code on response 
    //     });
    //     choices.list.appendChild(listItem);
    // });
    //localStorage.setItem("quizQuestions", JSON.stringify(quizQuestions));
    //var quizStore = JSON.parse(localStorage.getItem("quizquestions"));
    //quizQuestions.textContent = quizStore;
    //console.log(quizStore);
 //newWindow.document.body.appendChild(choicesList);
};

console.log(firstQuestion);


//var randomFirst = askFirstQuestion(questions);
///console.log(randomFirst);

//function nextQuestion() {

//}

//When I click the start button (ADD EVENT LISTENER -CLICK), I want the timer to start (SET TIMER FUNCTION) and the first question to appear (PROMPT/DISPLAY????)
//Each question has a clickable button (ADD EVENT LISTENER-CLICK ON VARIABLE PROPERTY)
//When the answer in selected, next question appears (BONUS: select a random question once pressed next question?)
//In case of an incorrect answer, one second gets subtracted from the remaining time
//Quiz ends when it runs out of questions or the time finishes
//When the game is finished, the user sees the score and has the option to save his initals and the score (highscores.html file - store highscores highest to lowest + use localstorage set in index and get in highscores)

