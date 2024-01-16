# Code-quiz
Week 6 Bootcamp Challenge

# Project description

In this week's challenge we are asked to add functionality to a quiz. 
The html and assets files have been provided. The HTML contains all the sections of the quiz, the assets containg the styling files and the audio files for the correct/incorrect sounds.

The current quiz has been adapted to show a pub quiz instead of the code quiz proposed in the assignment. 

The start screen has a title and a paragraph describing the rules of the game.

When the start quiz button is pressed, a question gets selected to display at random. There are three answer options, each assigned with the property whether it is correct or not.

If the user select the right answer, a sound plays and a message appears to indicate the answer has been recorded as correct, followed by the next question.

If the answer is incorrect, then a less pleasant sound plays, a message informs the user the answer selected is wrong and 5 seconds are taken off the timer before moving on to the next question.

When the time runs out, the end screen appears, where the scores are calculated by adding 3 points for each correct answer and subtracting a point for each incorrect one.

The player then has the possibility to record its score. A maximum of 3 characters can be introduced, otherwise the player gets prompted with a message to rectify its input. 

The score gets stored in the View highscores page, where a list of scores appears. At the press of the clear highscores button, the scores list erases. (or it should, it is not functional at the moment.)

## References

Questions included in the quiz are most of them taken from the Chase card game: Publisher: Ginger Fox Limited, ISBN: 5060132075036

Start screen image "http://www.freepik.com">Designed by katemangostar / Freepik"

Display message function code (lines 114-117) copied from the Bootcamp solved Student Activity 06-web-apis-module->03-clientside-storage-lesson->04-Stu-Local-Storage-Objects->solved->script.js file (lines 12-15).

## Links for application

Screenshot of the application 
![Application Screenshot](screencapture-file-C-Users-dragh-Bootcamp-Code-quiz-index-html-2024-01-16-23_29_33.png?raw=true "Application Screenshot")

