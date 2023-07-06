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
var question;
var answer;
var answerCorrect;
var answerIncorrect;

    question = [
            {text = '1. What does console.log() do?',}, 
            {text = '2. How do you access the "console" on a web browser?'},
            {text = '3. Which of the options below properly links a Javascript file to HTML?'},
            {text = '4. What file extension is used for Javascript files?'},
            {text = '5. What is the simplest way to declare a variable in Javascript?'}, 
            {text = '6. Choose the best answer. What is "var" in Javascript?'},
            {text = '7. What is a function in Javascript?'},
            {text = '8. What is an Object in Javascript?'},
            {text = '9. What is an element in Javascript?'}, 
            {text = '10. What is a property in Javascript?'}, 
            {text = '11. What is a "Primitive" in Javascript?'}, 
            {text = '12. In the following code, which is the Object?\n'},
            {text = 'var Student = {\n',
                        'firstName: "John"\n',
                        'lastName: "Doe"\n',
                        'age: 50\n',
                        'zodiac: Sagittarius }'},
            {text = '13. In the following code, which is the Element?\n',
                'var Student = \n',
                    'firstName: "John"\n',
                    'lastName: "Doe"\n',
                    'age: 50\n',
                    'zodiac: Sagittarius'
            }, 
            {text = '14. In the following code, which is the Property?\n',
                'var Student = \n',
                    'firstName: "John"\n', 
                    'lastName: "Doe"\n', 
                    'age: 50\n', 
                    'zodiac: Sagittarius'},
            {text = '15. What is an Arithematic Operator in Javascript?'},
            {text = '16. What is a Comparison Opoerator in Javascript?'},
            {text = '17. What is a Logical Operator in Javascript?'},
            {text = "18. The 'typeof' operator returns a string indicating the 'type' of a datatype's 'value'. What does the following code return? \n",
                'console.log(typeof 42);'},
            {text="19. The 'typeof' operator returns a string indicating the 'type' of a datatype's value.\n",
            "What does the following code return?\n",
                "console.log(typeof true);"}, 
            {text="20. What is a callback?"}
        ]
    
    answers = {
        answerABCD = [
            [
                {text: "a. 'console.log()' ('logs') writes a window prompt.",correct: false},
                {text: "b. 'console.log()' ('logs') creates a global varaiable in the console.",correct: false},
                {text: "c. 'console.log()' ('logs') writes/prints a message to the console.", correct: true},
                {text: "d. 'console.log()' ('logs') creates a local varaiable in the console.", correct: false},
            ],[  
                {text: "a. 'Right click' --> 'Inspect' --> 'Console' \n"correct: }
                {text: "b. 'Right click' --> 'View Page Source' --> 'Sources' --> 'Console'\n", correct: false},
                {text: "c. 'Right click' --> 'View Page Source' --> 'Console' \n", correct: false},
                {text: "d. 'Right click' --> 'Sources' --> 'Console' ", correct: false},
            ],[  

                {text: "a. <link href='scripts.js'></script>. \n", correct: false},
                {text: "b. <link rel='javascript' href='scripts.js'></script> \n", correct: false},
                {text: "c. <script href='scripts.js'></script> \n", correct: false},
                {text: "d. <script src='scripts.js'></script> ", correct: },
            ],[  

                {text: "a. <link href='scripts.js'></script> \n", correct: false},
                {text: "b. <link rel='javascript' href='scripts.js'></script> \n", correct: },
                {text: "c. <script href='scripts.js'></script> \n", correct: false},
                {text: "d. <script src='scripts.js'></script>", correct: false},
            ],[  
                {text: "a. ' .jv ' \n", correct: false},
                {text: "b. ' .js ' \n", correct: false},
                {text: "c. ' .jsc ' \n", correct: },
                {text: "d. ' .jscr ' ", correct: false},
            ],[  
                {text: "a. let \n", correct: false},
                {text: "b. const  \n", correct: },
                {text: "c. var  \n", correct: false},
                {text: "d. int ", correct: false},
            ],[  
                {text: "a. A fixed global container of value \n", correct: false},
                {text: "b. A container for a value, like a number or a string. \n", correct: false},
                {text: "A container for numbers, like 5 or 'five'\n", correct: },
                {text: "d. A container for value of a local object", correct: false},
            ],[  
                {text: "a. A Javascript function is a block of code used to assign values to an object. \n", correct: },
                {text: "b. A Javascript function is a block of code used to print information to the console. \n", correct: false},
                {text: "c. A JavaScript function is a block of code designed to perform a particular task. \n", correct: false},
                {text: "d. A Javascript function is a block of code used to assign elements to an object.", correct: false},
            ],[  
                {text: "a. An 'Object' in Javascript is a single part of a larger group  \n", correct: false},
                {text: "b. An 'Object' in Javascript is a variable that contain multiple values.  \n", correct: false},
                {text: "c. An 'Object' in Javascript is a thing, like a car, or boat. \n", correct: false},
                {text: "d. An 'Object' in Javascript is is the value associated with a variable ", correct: },
            ],[  
                {text: "a. An Element in Javascript is a single part of a larger group \n", correct: false},
                {text: "b. An Element in Javascript is a variable that contain multiple values.\n", correct: false},
                {text: "c. An Element in Javascript is a thing, like a car, or boat.\n", correct: false},
                {text: "d. An Element in Javascript is the value associated with a variable ", correct: },
            ],[  
                {text: "a. A 'Property' in Javascript is a single part of a larger group\n", correct: false},
                {text: "b. A 'Property' in Javascript is a variable that contain multiple values.  \n", correct: false},
                {text: "c. A 'Property' in Javascript is a thing, like a car, or boat. \n", correct: false},
                {text: "d. A 'Property' in Javascript is a the value associated with a variable ", correct: true}
            ],[  
                {text: "a. In Javascript, a 'Primitive' is an object that has a value of nothing.\n", correct: false},
                {text: "a. In Javascript, a 'Primitive' is an object that has a value of nothing. \n", correct: false},
                {text: "c. In Javascript, a 'Primitive' is a function that is not yet complete. \n", correct: false},
                {text: "d. In Javascript, a 'Primitive' is data that is not an object and has no methods.", correct: true}
            ],[  
                {text: "a. age\n", correct: false},
                {text: "b. Sagittarius\n", correct: false},
                {text: "c. Student\n", correct: true},
                {text: "d. var", correct: false}
            ],[  
                {text: "a. age\n", correct: true},
                {text: "b. Sagittarius\n", correct: false},
                {text: "c. Student\n", correct: false},
                {text: "d. var", correct: false},
            ],[  
                {text: "a. age\n", correct: false},
                {text: "b. Sagittarius\n", correct: true},
                {text: "c. Student\n", correct: false},
                {text: "d. var", correct: false},
            ],[  
                {text: "a. Arithematic operators combine with numbers to form an expression that returns a single number\n", correct: true},
                {text: "b. Arithematic operators combine two elements in an object\n", correct: false},
                {text: "c. Arithematic operators combine with strings, booleans and numbers to form an expression that evaluates to true or false\n", correct: false},
                {text: "d. operators take in two or more expressions and return true or false ", correct: false},
            ],[  
                {text: "a. Comparison operators combine with numbers to form an expression that returns a single number\n", correct: false},
                {text: "b. Comparison operators compare two items to see if they are the same or true.\n", correct: false},
                {text: "c. Comparison operators combine with strings, booleans and numbers to form an expression that evaluates to true or false\n", correct: true},
                {text: "d. Comparison operators take in two or more expressions and return true or false ", correct: false},
            ],[  
                {text: "a. number\n", correct: false},
                {text: "b. object\n", correct: false},
                {text: "c. symbol\n", correct: false},
                {text: "d. object", correct: true},
            ],[  
                {text: "a. number\n", correct: false},
                {text: "b. object\n", correct: false},
                {text: "c. symbol\n", correct: false},
                {text: "d. object", correct: true},
            ],[  
                {text: "a. A variable.\n", correct: false},
                {text: "b. A datatype.\n", correct: false},
                {text: "c. A function. \n", correct: true},
                {text: "d. A string. ", correct: false}
            ]
        ]
    }


var answers=[["a. ,b. , c. ,d. "][""][""][""][""][""][""][""][""][""][""][""][""][""][""][""][""][""][""][""]]

var answersCorrect=[[""][""][""][""][""][""][""][""][""][""][""][""][""][""][""][""][""][""][""][""]]




function hideElements() {
    document.getElementById("questions").hidden = true;
    document.getElementById("answers-list").hidden = true;
    document.getElementById("timer-count").hidden = true;
}
window.onload = hideElements

/*WHEN I click the start button
THEN a timer starts and I am presented with a question*/

function startGame() {
    timeLeft = 300; 
    questionsArray = document.getElementById("start-button");
        for (i=0; i < questionsArray.length; i++){
            var question = questionsArray[i];
            question.hidden = !question.hidden;
        }
    answersArray = document.getElementById("start-button");
        for (i=0; i < answersArray.length; i++){
            var answers = answersArray[i];
            question.hidden = !question.hidden;
        }
}
function hideElements() {
    

}

var start = document.getElementByID("start-button");
start.addEventListener("click", startGame)
start.addEventLister("click",hideElements)

function startGameHide() {

}

var start = 
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

//add eventListener for user triggering initials.
    //attach eventListner to var...
    //var submitInitials

var answerCorrect = addEventListener(click, "answer-correct");
var answerIncorrect = addEventListener(click, "answer-incorrect");