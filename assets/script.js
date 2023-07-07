//Start Pseudocode Here

//GIVEN I am taking a code quiz

//html selectors... ex. var startButtonEl=document.querySelector("#class-id")
//Global Variables 
    //Question Number:
    //Score: How much time you have left
    //Store time in seconds, set as 300 seconds. var time-left

var startButton = document.querySelector("#start-Button");
var headerTitle = document.querySelector("$javascript-title");
var timerEl = document.getElementByID("#timer-count");
var winCounter = 0;
var loseCounter = 0;
var questionCounter = 0;
var timeInterval;
var timeLeft;
var answerCorrect;
var answerIncorrect;

var quizQuestions = [
    {   question: "1. What does 'console.log'() do?", 
        answerList:[
            "a. console.log() (logs) writes a window prompt.\n",
            "b. console.log() (logs) creates a global varaiable in the console.\n",
            "c. console.log() (logs) writes/prints a message to the console.\n",
            "d. console.log() (logs) creates a local varaiable in the console."]
        correctAnswer:2
    },{
        question:"2. How do you access the 'console' on a web browser?",
        answerList:[
            "a. Right click --> Inspect --> Console \n",
            "b. Right click --> View Page Source --> Sources --> Console\n",
            "c. Right click --> View Page Source --> Console \n", 
            "d. Right click --> Sources --> Console "]
        correctAnswer:0
    },{ 
        question:"3. Which of the options below properly links a Javascript file to HTML?",
        answerList:[
            "a. <link href=scripts.js></script>. \n", 
            "b. <link rel=javascript href=scripts.js></script> \n", 
            "c. <script href=scripts.js></script> \n", 
            "d. <script src=scripts.js></script> "]
        correctAnswer:3
    },{    
        question:"4. What file extension is used for Javascript files?",
        answerList:[
            "a.  .jv  \n", 
            "b.  .js  \n", 
            "c.  .jsc  \n",
            "d.  .jscr  "],
        correctAnswer:1
    },{    
        question:"5. What is the simplest way to declare a variable in Javascript?",
        answerList:[
            "a.  .jv  \n", 
         "b.  .js  \n", 
         "c.  .jsc  \n",
         "d.  .jscr  ", 
        ],
        correctAnswer:2
    },{    
        question:"6. Choose the best answerList. What is 'var' in Javascript?",
        answerList:[
            "a. A fixed global container of value", 
            "b. A container for a value, like a number or a string.\n",
            "c. A container for numbers, like 5 or 'five'\n", 
            "A container for value of a local object"]
        correctAnswer:1
    },{    
        question:"7. What is a function in Javascript?",
        answerList:[
            "a. A Javascript function is a block of code used to assign values to an object.\n", 
            "b. A Javascript function is a block of code used to print information to the console.\n", 
            "c. A JavaScript function is a block of code designed to perform a particular task\n",
            "d. A Javascript function is a block of code used to assign elements to an object."]
        correctAnswer:2
    },{    
        question:"8. What is an Object in Javascript?",
        answerList:[
            "a. An 'Object' in Javascript is a single part of a larger group ", 
            "b. An 'Object' in Javascript is a variable that contain multiple values.\n", 
            "c. An 'Object' in Javascript is a thing, like a car, or boat.",
            "d. An 'Object' in Javascript is is the value associated with a variable"]
        correctAnswer:1
    },{    
        question:"9. What is an element in Javascript?",
        answerList:[
            "a. An Element in Javascript is a single part of a larger group\n",
            "b. An Element in Javascript is a variable that contain multiple values. \n",
            "c. An Element in Javascript is a thing, like a car, or boat.\n", 
            "d. An Element in Javascript is the value associated with a variable"]
        correctAnswer:0
    },{    
        question:"10. What is a property in Javascript?", 
        answerList:[
            "a. A 'Property' in Javascript is a single part of a larger group\n", 
            "b. A 'Property' in Javascript is a variable that contain multiple values.\n", 
            "c. A 'Property' in Javascript is a thing, like a car, or boat.\n", 
            "d. A 'Property' in Javascript is a the value associated with a variable",]
        correctAnswer:3
    },{    
        question:"11. What is a 'Primitive' in Javascript?", 
        answerList:[
            "a. In Javascript, a 'Primitive' is an object that has a value of nothing.\n", 
            "b. In Javascript, a 'Primitive' is an object that has a value of nothing.\n", 
            "c. In Javascript, a 'Primitive' is a function that is not yet complete.\n", 
            "d. In Javascript, a 'Primitive' is data that is not an object and has no methods. "]
        correctAnswer:3
    },{    
        question:"12. In the following code, which is the Object?\n var Student = {\n, firstName: 'John'\n lastName: 'Doe',\n age: 50,\n zodia Sagittarius",
        answerList:[
            "a. age\n", 
            "b. Sagittarius\n", 
            "c. Student \n", 
            "d. var"]
        correctAnswer:2
    },{    
        question:"13. In the following code, which is the Element?\n var Student = \n firstName: 'John',\n lastName: 'Doe',\n age: 50,\n zodia Sagittarius",
        answerList:[
            "a. age\n", 
            "b. Sagittarius\n", 
            "c. Student \n", 
            "d. var"]
        correctAnswer:0
    },{    
        question:"14. In the following code, which is the Property?\n var Student = \n firstName: 'John,'\n lastName: 'Doe',\n age: 50,\n zodia Sagittarius",
        answerList:[
            "a. age\n", 
            "b. Sagittarius\n", 
            "c. Student \n", 
            "d. var"]
        correctAnswer:1
    },{    
        question:"15. What is an Arithematic Operator in Javascript?",
        answerList:[
            "a. Arithematic operators combine with numbers to form an expression that returns a single number\n", 
            "b. Arithematic operators combine two elements in an object\n", 
            "c. Arithematic operators combine with strings, booleans and numbers to form an expression that evaluates to true or false\n", 
            "d. operators take in two or more expressions and return true or false "]
        correctAnswer:0
    },{    
        question:"16. What is a Comparison Opoerator in Javascript?",
        answerList:[
            "a. Comparison operators combine with numbers to form an expression that returns a single number\n", 
            "b. Comparison operators compare two items to see if they are the same or true.\n", 
            "c. Comparison operators combine with strings, booleans and numbers to form an expression that evaluates to true or false\n",
            "d. Comparison operators take in two or more expressions and return true or false ", 
        ]
        correctAnswer:2
    },{    
        question:"17. What is a Logical Operator in Javascript?",
        answerList:[
            "a. Logical operators combine with numbers to form an expression that returns a single number\n", 
             "b. Logical operators take in two or more numbers to form a true or false.  \n", 
            "c. Logical operators combine with strings, booleans and numbers to form an expression that evaluates to true or false\n", 
             "d. Logical operators take in two or more expressions and return true or false." 
        ]
        correctAnswer:3
    },{    
        question:"18. The typeof operator returns a string indicating the type of a 
        answerList:[
            "a. number\n", 
            "b. object\n", 
            "c. symbol\n", 
            "d. object",
        ]
        correctAnswer:0
    },{    
        question:"19. The 'typeof' operator returns a string indicating the type of a datatypes value.\n What does the following code return?\n, 'console.log'(typeof true) ", 
        answerList:[
            "a. number\n", 
            "b. object\n", 
            "c. symbol\n", 
            "d. object",
        ]
        correctAnswer:3
    },{
        question:"20. What is a callback?"
        answerList:[
            "a. number\n", 
            "b. object\n", 
            "c. symbol\n", 
            "d. object",
        ]
        correctAnswer:2
    }     
]
//console.log(combinedQuestion[1]);

// Function to hide the element - hide title, hide start button,
function hideElements() {
    combinedQuestion = document.getElementById("#questions-container");
    elementToHide.style.display = "none";
  }



  // Event listener for window load
window.onload = hideElement;

/*WHEN I click the start button
THEN a timer starts and I am presented with a question*/
$(document).ready(function(){
    questionCounter = 0; //track question number
    var answerSelected = []; //Array containing answers
    var questionsContainer =$("#questions-container")

    displayNext();


function startQuiz() {  //display questions, 
    timeLeft = 300; 
    question = document.getElementById("start-button");
        for (i=0; i < question.length; i++){
            var questionShow = questions"i";
            question.hidden = !question.hidden;
        }
    answersArray = document.getElementById("start-button");
        for (i=0; i < answersArray.length; i++){
            var answers = answersArray"i";
            question.hidden = !question.hidden;
        }
    }

var start = document.getElementByID("start-button");


// Welcome text disappears

// First question appears
displayMessage();
    //Answers for first question appears

// Timer starts 
//set interval --
// decrement the time left variable
// check when interval = 0
function startTimer() {
timeInterval = setInterval(function(){
    if (timeLeft > 0) {
        timeLeft--;
        timerEl.textContent = timeLeft +  seconds remaining; 
    }
    else (timeLeft === 0) {
        timerEl.textContent = ;
        clearInterval(timeInterval);
        displayMessage("Game Over!")
        }  
    },1000);
}


function answerSelected() {
    answerCorrect;
    answerIncorrect;
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

/*WHEN I answerList a question
THEN I am presented with another question*/
function newQuestion() {
    //presented with the new question
     //presented with new response question
    //increment the question variable ++ of array
    //If you are at the end of the array - endGame function
}

/*WHEN I answerList a question incorrectly
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




//add eventListener for user triggering initials.
    //attach eventListner to var...
    //var submitInitials

//add eventListener to start quizz
document.addEventListener('DOMContentLoaded',function(){
    var hideElements = document.getElementById("#start-button"); 
    hideElements.addEventListener("click", function(){   
        var elementsToHide = ["start-button", "javascript-title"]; 

        elementsToHide.forEach(function(elementId){  
            var hiddenEl = document.getElementById(elementId);
            if(hiddenEl) {
                element.style.display='none';
            }
        })
    })
})
 //use "click" to initiate function --> hide elements in array 
 //forEach iterates through array hiddenEl to execution hide function
document.addEventListener('DOMContentLoaded',function(){
    var showElements = document.getElementById("#start-button");
    showELements.addEventListener("click", function(){
        var elementsToShow = ["questions-container","timer","answer-container"];
        
        elementsToShow.forEach(function(elementID){
            var displayEl = document.getElementById(elementID);
            if(displayEl){
                element.style.display='block';
            }
        })
    })
})
 //use "click





start = document.addEventListener("click", function(){

}

var startTimer = document.getElementById("start-button").addEventListener("click", startTimer)

var answerCorrect = addEventListener(click, "answerList-correct");
var answerIncorrect = addEventListener(click, "answerList-incorrect");
var submitStart = addEventListener(click,"#start-button");
var answerSelected = addEventListener(click,"#answer");

//start.addEventListener("click", startGame)
//start.addEventLister("click",hideElements)