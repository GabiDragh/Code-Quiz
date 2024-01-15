
var highscores = document.querySelector("#highscores");

//get info from local storage and display scores

localStorage.getItem("finalScore", displayScore);
console.log(displayScore);


//sort them highest to lowest
//when go back button is pressed, it returns to the quiz. When clear scores button is pressed, all scores are erased from the list (clear data?)
