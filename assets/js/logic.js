//Target HTML elements used in this js file
var body = document.querySelector("body");
var h1 = document.querySelector("h1");
var wrapper = document.querySelector(".wrapper");
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var timerElement = document.querySelector(".timer");
var questionsElement = document.querySelector("#questions");
var questionTitleElement = document.querySelector("#question-title");
var choicesElement = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var feedback = document.querySelector("#feedback");


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
questionTitleElement.setAttribute("style", "text-align: center");
submitButton.setAttribute("style", "background-color: navy; color: orange; size: 110%");

//Create answers ordered list inside the choices div in HTML

var choicesList = document.createElement("ol");

//Append ordered list inside the choices div in HTML

choicesElement.appendChild(choicesList);

//Define variables used in this javascript file
var isWin = false;
var wrongAnswer = false;
var timerInterval;
var timerCount = 0;
var selectedQuestion = "";
var randomQuestion = "";
var choicesList;
var answer = "";
var addPoints = 0;
var subtractPoints = 0;


//When I click the start button (event listener for the start button at line 176 triggering the startGame function), I want the timer to start (startTimer function) and the first question to appear (askFirstQuestion function)
function startGame() {
isWin = false;
//Declare functions to run when button is pressed
startTimer(); 
askFirstQuestion(); 
};

//Define startTimer function
function startTimer () {
    timerCount = 80; //Set the timer length
    
    timerInterval = setInterval(function() {
        timerCount--; //set counter to decrease 
        timerElement.textContent = "Time: " + timerCount; //timer text display
        if(timerCount <= 0) { //condition for when the timer gets to 0
            clearInterval(timerInterval);//the timer stops preventing it from counting -0
            showScore(); //function for showing scores when time finishes
        }
                
    }, 1000);     
}
// console.log(quizQuestions);

//Define askFirstQuestion function 
function askFirstQuestion() {
    choicesList.textContent = ""; //clears the choices list content
    //Pick a random question from the array
    var randomQuestion = quizQuestions[Math.floor(Math.random()*quizQuestions.length)];
    console.log(randomQuestion);
    //Assign question title to the HTML object
    questionTitleElement.innerHTML = "";
    questionTitleElement.textContent = randomQuestion.questionTitle;
    // console.log(questionTitleElement);

    //Replace start screen div with question div
    startScreen.style.display = "none";
    questionsElement.style.display = "block";
    
    //Create clickable buttons and show answers as ordered list items
    for ( var i = 0; i < randomQuestion.answers.length; i++) {
        // console.log("this is in my for loop", randomQuestion.answers[i].text);
         //Create buttons and set them to trigger next question event
        var buttonEl = document.createElement("button"); //create button element
        buttonEl.textContent = randomQuestion.answers[i].text; //add text content
        buttonEl.onclick = function(event) { //add content - when the answer button is clicked the next question event is triggered
            nextQuestion(event);
        }
        buttonEl.setAttribute("data-isCorrect", randomQuestion.answers[i].isCorrect);//add data content - if the answer is correct or incorrect
        buttonEl.setAttribute("style", "background-color: navy; color: orange; size: 110%");//add style to match the start button, overwriting the css file
        choicesList.appendChild(buttonEl); //append each button to the choices ordered list
    }
     //Display ordered list
    choicesList.style.display = "block"; 
    
};

//Create a display message function to use in the nextquestion function when the user answers the question and in the initialsSubmit function when the user inserts his initials 

function displayMessage(type, message) { //code from class
    feedback.textContent = message; //the feedback HTML element is targeted, keeps the predefined css style
    feedback.setAttribute("class", type);
}

//When the answer button is clicked, the nextQuestion function is triggered
function nextQuestion(event) {
    // console.log(event.target);
    // console.log(event.target.getAttribute("data-isCorrect"));
    var userChoice = event.target.getAttribute("data-isCorrect"); 

    if (userChoice == "true") {  //if the answers is right, the following get executed before moving on to the next question:
       var correctAudio = new Audio('./assets/sfx/correct.wav') //the correct answer audio is played
       correctAudio.play();
    //    console.log("correct sound");
       addPoints+=3; //3 points get added to the score
    //    console.log(addPoints);
       displayMessage("success", "Correct!"); //the correct answer message is shown
       askFirstQuestion(); //moves on to select the next random question
    } else { //If answer wrong: ->    before moving to the next question
        timerCount-=5; //takes 5 seconds off timer,
        var incorrectAudio = new Audio('./assets/sfx/incorrect.wav') //plays the incorrect sound
        incorrectAudio.play(); 
        // console.log("Whoa!");
        subtractPoints-=1; //takes one point from final score
        // console.log(subtractPoints);
        displayMessage("error", "Wrong answer"); //displays wrong feedback message
        askFirstQuestion();//moves on to select the next random question
    }
    
}

//When time runs out, the end screen appears 
function showScore() {
    questionsElement.style.display = "none"; //replace the questions div element with the end screen one
    endScreen.style.display = "block";

    var displayScore = addPoints + subtractPoints; //variable to calculate the score
    // console.log(displayScore);

    finalScore.textContent = displayScore; //final score text display

    localStorage.setItem("finalScore", displayScore); //store the score in local storage
}


//The initials can be stored when the submit button is pressed (event listener at line 179)
function initialsSubmit () {

    var initialsStore = initials.value; //retrieve input from the HTML initials element
    console.log(initialsStore);

     if (initialsStore.length > 3) { //conditions for the initials length (max 3)
        displayMessage("error", "Whoa there! Keep it short - 3 characters MAX.");
     } else if (initialsStore.length <= 0) {
        displayMessage("error", "Be proud of your score, let us know who you are!");
     } else {
        displayMessage("success", "Yay! You are on the champs board!");
     }

    localStorage.setItem("initials", JSON.stringify(initialsStore)); //store the initials in local storage. 
}


startButton.addEventListener("click", startGame); //event listener button that starts the quiz game
submitButton.addEventListener("click", function(event){ //button event listener 
    event.preventDefault();
    initialsSubmit(); //function for initials submission
    renderScores(); //function for scores retrieval in logic.js
})



