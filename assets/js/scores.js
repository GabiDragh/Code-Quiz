//Target HTML elements used in this js file
var highscores = document.querySelector("#highscores");
var clearButton = document.querySelector('#clear');

var li;
var initialsText;

renderScores();

function renderScores () {//function from logic.js that gets executed when the submit button is pressed

    //get the information from local storage and display scores
    var lastScore = localStorage.getItem("finalScore");
         console.log(lastScore);
    var lastInitials = JSON.parse(localStorage.getItem("initials"));
         console.log(lastInitials);

    var initialsText;
    var initialsText = lastInitials + " - " + lastScore;
         console.log(initialsText);

    //Show a new highscores list item for each score submitted

        var li = document.createElement("li"); //create list element
        li.textContent = initialsText; //add content to the list element from the inititalsText variable
        highscores.appendChild(li); //append it to the list (highscores)

   

}

clearButton.addEventListener('click', function() { //function to clear scores - needs fixing

   highscores.value = "";
})


