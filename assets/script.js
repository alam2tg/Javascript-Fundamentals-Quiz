//Start Pseudocode Here

//GIVEN I am taking a code quiz

//html selectors... ex. var startButtonEl=document.querySelector("#class-id")
//Global Variables 
    //Question Number:
    //Score: How much time you have left
    //Store time in seconds, set as 300 seconds. var time-left

const quiz = document.getElementById("quiz");
const quizQuestions;
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");




var quizQuestions = [
     {   
     question: "1. What does 'console.log'() do?", 
     choiceA: "a. console.log() (logs) writes a window prompt.\n",
     choiceB: "b. console.log() (logs) creates a global varaiable in the console.\n",
     choiceC: "c. console.log() (logs) writes/prints a message to the console.\n",
     choiceD: "d. console.log() (logs) creates a local varaiable in the console.",
     correctAnswer:"B"
    },{
     question:"2. How do you access the 'console' on a web browser?",
     choiceA: "a. Right click --> Inspect --> Console \n",
     choiceB: "b. Right click --> View Page Source --> Sources --> Console\n",
     choiceC: "c. Right click --> View Page Source --> Console \n", 
     choiceD: "d. Right click --> Sources --> Console ",
     correctAnswer:"A" 
    },{ 
     question:"3. Which of the options below properly links a Javascript file to HTML?",
     choiceA: "a. <link href=scripts.js></script>. \n", 
     choiceB: "b. <link rel=javascript href=scripts.js></script> \n", 
     choiceC: "c. <script href=scripts.js></script> \n", 
     choiceD: "d. <script src=scripts.js></script> ",
     correctAnswer:"C"
    },{    
     question:"4. What file extension is used  for Javascript files?",
     choiceA: "a.  .jv  \n", 
     choiceB: "b.  .js  \n", 
     choiceC: "c.  .jsc  \n",
     choiceD: "d.  .jscr  ",
 correctAnswer:"B"
    },{   
     question:"5. What is the simplest way to declare a variable in Javascript?",
     choiceA: "a.  .jv  \n", 
     choiceB: "b.  .js  \n", 
     choiceC: "c.  .jsc  \n",
     choiceD: "d.  .jscr  ",
     correctAnswer: "C"
    },{    
     question:"6. Choose the besWhat is 'var' in Javascript?",
     choiceA: "a. A fixed global container of value", 
     choiceB: "b. A container  for a value, like a number  or a string.\n",
     choiceC: "c. A container  for numbers, like 5  or 'five'\n", 
     choiceD: "A container  for value of a local object",
    tAnswer: "B"
    },{ 

     question:"7. What is a function in JavascchoiceDript?",
     choiceA: "a. A Javascript function is a block of code used to assign values to an object.\n"
     choiceB:  "b. A Javascript function is a block of code used to print in formation to choiceDthe console.\n", 
     choiceC: "c. A JavaScript function is a block of code designed to per form a particular task\n",
     choiceD: "d. A Javascript function is a block of code used to assign elements to an object.",
     correctAnswer:"C"
    },{ 
     question:"8. What is an Object in Javascript?",
     choiceA: "a. An 'Object' in Javascript is a single part of a larger group ", 
     choiceB: "b. An 'Object' in Javascript is a variable that contain multiple values.\n", 
     choiceC: "c. An 'Object' in Javascript is a thing, like a car,  or boat.",
     choiceD: "d. An 'Object' in Javascript is is the value associated with a variable",
     correctAnswer:"B"
    },{   
     question:"9. What is an element in Javascript?",
     choiceA: "a. An Element in Javascript is a single part of a larger group\n",
     choiceB: "b. An Element in Javascript is a variable that contain multiple values. \n",
     choiceC: "c. An Element in Javascript is a thing, like a car,  or boat.\n", 
     choiceD: "d. An Element in Javascript is the value associated with a variable",
     correctAnswer:"A"
    },{    
     question:"10. What is a property in Javascript?", 
     choiceA: "a. A 'Property' in Javascript is a single part of a larger group\n", 
     choiceB: "b. A 'Property' in Javascript is a variable that contain multiple values.\n", 
     choiceC: "c. A 'Property' in Javascript is a thing, like a car,  or boat.\n", 
     choiceD: "d. A 'Property' in Javascript is a the value associated with a variable",
     correctAnswer:"D"
    },{   
     question: "11. What is a 'Primitive' in Javascript?", 
     choiceA: "a. In Javascript, a 'Primitive' is an object that has a value of nothing.\n", 
     choiceB: "b. In Javascript, a 'Primitive' is an object that has a value of nothing.\n", 
     choiceC: "c. In Javascript, a 'Primitive' is a function that is not yet complete.\n", 
     choiceD: "d. In Javascript, a 'Primitive' is data that is not an object and has no methods. ",
     correctAnswer:"D"
    },{   
     question:"12. In the following code, which is the Object?\n var Student = {\n, firstName: 'John'\n lastName: 'Doe',\n age: 50,\n zodia Sagittarius",
     choiceA: "a. age\n", 
     choiceB: "b. Sagittarius\n", 
     choiceC: "c. Student \n", 
     choiceD: "d. var",
     correctAnswer:"C"
    },{
     question:"13. In the following code, which is the Element?\n var Student = \n firstName: 'John',\n lastName: 'Doe',\n age: 50,\n zodia Sagittarius",
     choiceA: "a. age\n", 
     choiceB: "b. Sagittarius\n", 
     choiceC: "c. Student \n", 
     choiceD: "d. var",
     correctAnswer:"A"
    },{    
     question:"14. In the following code, which is the Property?\n var Student = \n firstName: 'John,'\n lastName: 'Doe',\n age: 50,\n zodia Sagittarius",
     choiceA: "a. age\n", 
     choiceB: "b. Sagittarius\n", 
     choiceC: "c. Student \n", 
     choiceD: "d. var",
     correctAnswer:"B"
    },{    
     question:"15. What is an Arithematic Opera tor in Javascript?",
     choiceA: "a. Arithematic opera tors combine with numbers to  form an expression that returns a sichoiceBgle number\n", 
     choiceB: "b. Arithematic opera tors combine two elements in an object\n", 
     choiceC: "c. Arithematic opera tors combine with strings, booleans and numbers to  form an expression that evaluates to true  or false\n", 
     choiceD:"d. opera tors take in two  or  more expressions and return true  or false ",
     correctAnswer:"A"
    },{    
     question:"16. What is a Comparison Opoera tor in Javascript?",
     choiceA: "a. Comparison opera tors combine with numbers to  form an expression that returns a sigle number\n", 
     choiceB: "b. Comparison opera tors compare two items to see if they are the same  or true.\n", 
     choiceC: "c. Comparison opera tors combine with strings, booleans and numbers to  form an expression that evaluates to true  or false\n",
     choiceD:"d. Comparison opera tors take in two  or  more expressions and return true  or false ",
     correctAnswer:"C"
    },{    
     question:"17. What is a Logical Opera tor in Javascript?",
     choiceA: "a. Logical opera tors combine with numbers to  form an expression that returns a singe number\n", 
     choiceB: "b. Logical opera tors take in two  or  more numbers to  form a true  or choiceDfalse.  \n", 
     choiceC: "c. Logical opera tors combine with strings, booleans and numbers to  form an expression that evaluates to true  or false\n", 
     choiceD: "d. Logical opera tors take in two  or  more expressions and return true  or false.",
     correctAnswer:"D"
    },{    
     question:"18. The typeof opera tor returns a string indicating the type of a datatype's value.",
     choiceA: "a. number\n", 
     choiceB: "b. object\n", 
     choiceC: "c. symbol\n", 
     choiceD: "d. object",
     correctAnswer:"A"
    },{    
     question:"19. The 'typeof' opera tor returns a string indicating the type of a datatypes value.\n What does the following code return?\n, 'console.log'(typeof true) ", 
     choiceA: "a. number\n", 
     choiceB: "b. object\n", 
     choiceC: "c. symbol\n", 
     choiceD: "d. object" ,
     correctAnswer:"D"
    },{
     question:"20. What is a callback?",
     choiceA: "a. number\n", 
     choiceB: "b. object\n", 
     choiceC: "c. symbol\n", 
     choiceD: "d. object",,
     correctAnswer:"C"
     }
]     
;
console.log(quiz Questions);

/*WHEN I click the start button
// Hide title, welcome text,  start button,
     function clickStartHide() {
}*/
var start = document.getElementByID("start-button");


//WHEN I click the start button
//THEN a timer starts and I am presented with a  question*/
// First show quiz elements,  questions, answers

var lastQuestionIndex = quizQuestions.length-1;
var currentQuestionIndex = 0;


function startQuizQuestions() {
     let q = quizQuestions[currentQuestionIndex]; //local variable q
     question.innerHTML = "<p>" + q.question + "</p>"
     choiceA.innerHTML

}


// Timer starts 
     //set interval --
     // decrement the time left variable
     // check when interval = 0
var timer = document.getElementById("timer");
function startTimer() {
     timeInterval = setInterval(function(){
         if (timeLeft > 0) {
             timeLeft--;
             timerElement.textContent = timeLeft + " seconds remaining"; 
         }
         else (timeLeft === 0);{
             timerEl.textContent = 
             clearInterval(timeInterval);
             displayMessage("Game Over!");
             }  
         },1000);
     }

//triggered by an event listener on the options // correct  or wrong event.target = compare with elements in  correct answersArray
    //if  correct -  correct - 
    //else message, in correct
        //reduce time by 10 seconds
    //load the next  question - so call function "new Question"


/*WHEN   question
THEN I am presented with another  question*/
function newQuestion() {
    //presented with the new  question
     //presented with new response  question
    //increment the  question variable ++ of array
    //If you are at the end of the array - endGame function
}
/*WHEN answered incorrectly
THEN time is subtracted from the clock*/
var incorrectAnswer;
function incorrectAnswer() {
    //  or use function new Question
    // reduce time by 10 seconds
}



/*WHEN all  questions are answered  or the timer reaches 0
THEN the game is over*/
function endGame() {
    // questions/answers disappears
    //messagechoiceA"all done!" + summary text
    //input fieldchoiceB for initials add eventListener
    //stop decerechoiceCmenting varchoiceD time left
}

/*WHEN the game is over
THEN I can save my initials and s core*/
function afterSubmit(){
    //insert new score into High S cores
        //initialField.value
        //create score object
    //shows High Score
    //options to start over and clear highs core
}

 // forEach iterates through array hiddenEl to execution hide function
//start.addEventListener("click", schoiceDtartGame)
     //Show  Questions
var clickStartButton = document.getElementById("start-button");
     console.log(clickStartButton);

     clickStartButton.addEventListener("click", function(){
          
     })

//start.addEventLister("click",hideElements) 



    


//add eventListener  for user triggering initials.
    //attach eventListner to var...
    //var submitInitials