//Start Pseudocode Here

//GIVEN I am taking a code quiz

//html selectors... ex. var startButtonEl=document.querySelector("#class-id")
//Global Variables 
//Question Number:
//Score: How much time you have left
//Store time in seconds, set as 300 seconds. var time-left

var startButton = document.getElementById("start");
var quizQuestions = document.getElementById("quiz");
var question = document.getElementById("questions");
// var  = document.getElementById();
// var  = document.getElementById();
// var  = document.getElementById();
// var  = document.getElementById();
var answer = document.getElementsByClassName("answer");
var questionNumber = document.getElementById("questionNumber");
var welcomePage = document.getElementById("hello-welcome-container");


var quizQuestions = [

     {
          question: "1. What does 'console.log'() do?",
          choices: [
          "console.log() (logs) writes a window prompt.",
          "console.log() (logs) creates a global varaiable in the console.",
          "console.log() (logs) writes/prints a message to the console.",
          "console.log() (logs) creates a local varaiable in the console."],
          correctAnswer:2
     },
      {
          question: "2. How do you access the 'console' on a web browser?",
          choices:[
          "Right click --> Inspect --> Console",
          "Right click --> View Page Source --> Sources --> Consol",
          "Right click --> View Page Source --> Console",
          "Right click --> Sources --> Console "],
          correctAnswer:0 
     }, {
          question: "3. Which of the options below properly links a Javascript file to HTML?",
          choices:[
          "<link href=scripts.js></script>.",
          "<link rel=javascript href=scripts.js></script>",
          "<script href=scripts.js></script>",
          "<script src=scripts.js></script> "],
          correctAnswer:2 
     }, {
          question: "4. What file extension is used  for Javascript files?",
          choices:[
          "  .jv ",
          "  .js ",
          "  .jsc ",
          "  .jscr  "],
          correctAnswer:1 
     },{
          question: "5. What is the simplest way to declare a variable in Javascript?",
          choices:[
           "  .jv ",
          "  .js ",
          "  .jsc ",
          "  .jscr  "],
          correctAnswer:2 
     }, {
          question: "6. Choose the besWhat is 'var' in Javascript?",
          choices:[
          "A fixed global container of value",
          "A container  for a value, like a number  or a string",
          "A container  for numbers, like 5  or 'five",
          "A container  for value of a local object"],
          correctAnswer:1 
     }, {

          question: "7. What is a function in JavascchoiceDript?",
          choices:[
          "A Javascript function is a block of code used to assign values to an object",
          "A Javascript function is a block of code used to print in formation to choiceDthe console",
          "A JavaScript function is a block of code designed to per form a particular tas",
          "A Javascript function is a block of code used to assign elements to an object."],
          correctAnswer:2 
     }, {
          question: "8. What is an Object in Javascript?",
          choices:[
          "An 'Object' in Javascript is a single part of a larger group ",
          "An 'Object' in Javascript is a variable that contain multiple values",
          "An 'Object' in Javascript is a thing, like a car,  or boat.",
          "An 'Object' in Javascript is is the value associated with a variable"],
          correctAnswer:1 
     }, {
          question: "9. What is an element in Javascript?",
          choices:[
          "An Element in Javascript is a single part of a larger grou",
          "An Element in Javascript is a variable that contain multiple values.",
          "An Element in Javascript is a thing, like a car,  or boat",
          "An Element in Javascript is the value associated with a variable"],
          correctAnswer:0 
     }, {
          question: "10. What is a property in Javascript?",
          choices:[
          "A 'Property' in Javascript is a single part of a larger grou",
          "A 'Property' in Javascript is a variable that contain multiple values",
          "A 'Property' in Javascript is a thing, like a car,  or boat",
          "A 'Property' in Javascript is a the value associated with a variable"],
          correctAnswer:3
     }, {
          question: "11. What is a 'Primitive' in Javascript?",
          choices:[
          "In Javascript, a 'Primitive' is an object that has a value of nothing",
          "In Javascript, a 'Primitive' is an object that has a value of nothing",
          "In Javascript, a 'Primitive' is a function that is not yet complete",
          "In Javascript, a 'Primitive' is data that is not an object and has no methods. "],
          correctAnswer:3 
     }, {
          question: "12. In the following code, which is the Object var Student = , firstName: 'John lastName: 'Doe' age: 50 zodia Sagittarius",
          choices:[
          " ag",
          " Sagittariu",
          " Student",
          " var"],
          correctAnswer:2 
     }, {
          question: "13. In the following code, which is the Element var Student = firstName: 'John' lastName: 'Doe' age: 50 zodia Sagittarius",
          choices:[
          "age",
          "Sagittariu",
          "Student",
          "var"],
          correctAnswer:0
     },{
          question: "14. In the following code, which is the Property var Student = firstName: 'John, lastName: 'Doe' age: 50 zodia Sagittarius",
          choices:[
          "age",
          "Sagittarius",
          "Student ",
          "var"],
          correctAnswer: 1
     },{
          question: "15. What is an Arithematic Opera tor in Javascript?",
          choices:[
          "Arithematic opera tors combine with numbers to form an expression that returns a single number",
          "Arithematic operators combine two elements in an object",
          "Arithematic operators combine with strings, booleans and numbers to  form an expression that evaluates to true  or false",
          "operators take in two  or  more expressions and return true or false"],
          correctAnswer: 0
     },{
          question: "16. What is a Comparison Opoera tor in Javascript?",
          choices:[
          "Comparison operators combine with numbers to  form an expression that returns a sigle number",
          " Comparison operators compare two items to see if they are the same  or true.",
          " Comparison operators combine with strings, booleans and numbers to  form an expression that evaluates to true  or false",
          " Comparison operators take in two  or  more expressions and return true  or false "],
          correctAnswer: 2
     },{
          question: "17. What is a Logical Opera tor in Javascript?",
          choices:[
          " Logical operators combine with numbers to  form an expression that returns a single number",
          " Logical operators take in two  or  more numbers to  form a true  or false.  ",
          " Logical operators combine with strings, booleans and numbers to  form an expression that evaluates to true  or false",
          " Logical opera tors take in two  or  more expressions and return true or false."],
          correctAnswer: 3
     },{
          question: "18. The typeof opera tor returns a string indicating the type of a datatype's value.",
          choices:[
          "number",
          "object",
          "symbol",
          "object"],
          correctAnswer: 0
     }, {
          question: "19. The 'typeof' opera tor returns a string indicating the type of a datatypes value What does the following code return, 'console.log'(typeof true) ",
          choices:[
          "number",
          "object",
          "symbol",
          "object",],
          correctAnswer: 3
     }, {
          question: "20. What is a callback?",
          choices:[
          "A variable",
          "A datatype.",
          "A function. ",
          "A string. "],
          correctAnswer: 2 
     }
];

/*WHEN I click the start button
// Hide title, welcome text,  start button,
     function clickStartHide() {
}*/
// First show quiz elements,  questions, answers
//both tests work.


//create function to display questions 1 by 1.
let currentQuestionIndex = 0;

function getQuestionHTML(index) {
     const validIndex = index >= 0 && index < quizQuestions.length;
     if (validIndex) {

          const currentQuestion = quizQuestions[
          index];

          // update title with current question
          var titleEl = document.getElementById("question-title");
          titleEl.textContent = currentQuestion.question;

          // clear out any old question choices
          var choicesEl = document.getElementById("choices");
          choicesEl.innerHTML = "";

          // loop over choices
          currentQuestion.choices.forEach(function (choice, i) {
               // create new button for each choice
               var choiceNode = document.createElement("button");
               choiceNode.setAttribute("class", "choice");
               choiceNode.setAttribute("value", choice);

               choiceNode.textContent = i + 1 + ". " + choice;

               // attach click event listener to each choice
               choiceNode.onclick = questionClick;

               // display on the page
               choicesEl.appendChild(choiceNode);
          });

     }
}


function questionClick() {
     // check if user guessed wrong
     if (this.value !== questions[
     currentQuestionIndex].correctAnswer) {
          // penalize time
          time -= 15;

          if (time < 0) {
               time = 0;
          }
          // display new time on page
          timerEl.textContent = time;
          feedbackEl.textContent = "Wrong!";
          feedbackEl.style.color = "red";
          feedbackEl.style.fontSize = "400%";
     } else {
          feedbackEl.textContent = "Correct!";
          feedbackEl.style.color = "green";
          feedbackEl.style.fontSize = "400%";
     }

     // flash right/wrong feedback
     feedbackEl.setAttribute("class", "feedback");
     setTimeout(function () {
          feedbackEl.setAttribute("class", "feedback hide");
     }, 1000);

     // next question
     currentQuestionIndex++;

     // time checker
     if (currentQuestionIndex === quizQuestions.length) {
          // quizEnd();
          Alert("Quiz ends!");
     } else {
          getQuestionHTML(currentQuestionIndex);
     }
}

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
function afterSubmit() {
     //insert new score into High S cores
     //initialFielvalue
     //create score object
     //shows High Score
     //options to start over and clear highs core
}

//start.addEventLister("click",hideElements) 

startButton.addEventListener("click", startQuiz);
function startQuiz() {
     startButton.style.display = "none";
     welcomePage.style.display = "none";
     quiz.style.display = "block";

     getQuestionHTML(currentQuestionIndex)
}

//add eventListener  for user triggering initials.
//attach eventListner to var...
//var submitInitials
