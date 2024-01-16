
var highscores = document.querySelector("#highscores");
//get info from local storage and display scores
var lastScore = localStorage.getItem("finalScore");
console.log(lastScore);
var lastInitials = JSON.parse(localStorage.getItem("initials"));
console.log(lastInitials);

    var initialsText;

    var initialsText = lastInitials + " - " + lastScore;
    console.log(initialsText);
   
renderScores();

function renderScores () {

    //Show a new highscores list item for each score submitted
    // for (var i = 0; i < initialsText.length; i++) {
    //     var initialsListItem = initialsText[i];

        var li = document.createElement("li");
        li.textContent = initialsText;
        highscores.appendChild(li);
    // }
    // highscores.push(initialsText);

}

//sort them highest to lowest
//when go back button is pressed, it returns to the quiz. When clear scores button is pressed, all scores are erased from the list (clear data?)
