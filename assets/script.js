//Start Pseudocode Here

//GIVEN I am taking a code quiz

//html selectors... ex. var startButtonEl=document.querySelector("#class-id")
//Global Variables 
    //Question Number:
    //Score: How much time you have left
    //Store time in seconds, set as 300 seconds. var time-left
    //array of answers[["Answer 1, Answer 2, Answer 3, Answer 4]] 
var startButton = document.querySelector("#start-Button");
var timerEl = document.getElementByID('#timer-count');
var winCounter = 0;
var loseCounter = 0;
var timeInterval;
var timeLeft;
var answerCorrect = addEventListener(click, "answer-correct");
var answerIncorrect = addEventListener(click, "answer-incorrect");

var questionsArray = [[""]]
var answersArray=[["a. ,b. , c. ,d. "][""][""][""][""][""][""][""][""][""][""][""][""][""][""][""][""][""][""][""]]

var answersCorrect=[[""][""][""][""][""][""][""][""][""][""][""][""][""][""][""][""][""][""][""][""]]



function init() {
    
}   

document.getElementById("start-button").addEventListener(
    "click",
    () => {
        document.getElementById("start-button").hidden = true;
        document.getElementById("start-show").hidden = true;
        document.getElementById("questions").hidden = false;
        document.getElementById("answers-list").hidden = false;
        document.getElementById("timer-count").hidden = false;
    },
);

/*WHEN I click the start button
THEN a timer starts and I am presented with a question*/
function startGame() {
    timeLeft = 300;
    // Start button disappears
    var clickStart = document.getElementById("button");
    clickStart = 
    }
    // Welcome text disappears
    // First question appears
            //Answers for first question appears
    // Timer starts 
    //set interval --
    // decrement the time left variable
    // check when interval = 0
function startTimer() {
timeInterval = setInterval(function(){
    if (timeLeft > 0) {
        timeLeft--;
        timerEl.textContent = timeLeft + ' seconds remaining'; 
    }
    else (timeLeft === 0) {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage("Game Over!")
        }  
    },1000);
}


function answerSelected() {
    //triggered by an event listener on the options
    //correct or wrong event.target = compare with elements in correct answersArray
    //if correct - correct - 
    if
    //else message, incorrect
    else 
        timeLeft-10;
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
var start = addEventListener("button",startGame);
//add eventListener for user triggering initials.
    //attach eventListner to var...
    //var submitInitials
