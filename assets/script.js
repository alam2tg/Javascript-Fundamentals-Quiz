//Start Pseudocode Here

//GIVEN I am taking a code quiz

//html selectors... ex. var startButtonEl=document.querySelector("#class-id")
/*Global Variables 
    Question Number:
    Score: How much time you have left
    Store time in seconds, set as 300 seconds. var time-left */
var questionsArray = ["what is 1+1"]

    //array of answers[["Answer 1, Answer 2, Answer 3, Answer 4]] 
    var answersArray=[]
    var answerCorrect=[]
                
    ex.  answers[2][3] = Questions 2, answer C

/*WHEN I click the start button
THEN a timer starts and I am presented with a question*/
function startGame() {
    // Start button disappears
    // Welcome text disappears
    // First question appears
            //Answers for first question appears
    // Timer starts
}

function startTimer() {
    //set interval --
    // decrement the time left variable
    // check when interval = 0
}

function answerSelected() {
    //triggered by an event listener on the options
    //correct or wrong event.target = compare with elements in correct answersArray
    //if correct - correct - 
    //else message, incorrect
        //reduce time by 10 seconds
    //load the next question - so call function "newQuestion"
}

/*WHEN I answer a question
THEN I am presented with another question*/
function newQuestion() {
    //presented with the new question
     //presented with new response question
    //increment the question variable ++ of array
    //If you are at the end of the array - endGame function
}

/*WHEN I answer a question incorrectly
THEN time is subtracted from the clock*/
function incorrectAnswer() {
    // or use function newQuestion
    // reduce time by 10 seconds
        

}



/*WHEN all questions are answered or the timer reaches 0
THEN the game is over*/
function endGame() {
    //questions/answers disappears
    //message "all done!" + summary text
    //input field for initials add eventListener
    //stop decerementing var time left
}

/*WHEN the game is over
THEN I can save my initials and score*/
function afterSubmit(){
    //insert new score into High Scores
        //initialField.value
        //create score object
    //shows High Score
    //options to start over and clear highscore
}


//add eventListener for 
//add eventListener for user triggering initials.
    //attach eventListner to var...
    //var submitInitials
