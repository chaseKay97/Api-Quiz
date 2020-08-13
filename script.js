ar startBtn = document.getElementById("startBtn");

var startPage = document.getElementById("startPage");
var header = document.getElementById(".header");
var quizPage = document.getElementById("quizPage");
var scorePage = document.getElementById("scorePage");

var choice1 = document.getElementById("btn1");
var choice2 = document.getElementById("btn2");
var choice3 = document.getElementById("btn3");
var choice4 = document.getElementById("btn4");
var correctOption = document.getElementById("correctBtn");
//questions \/
var questionArr = [
  {
    "quizQuestion" : "Commonly referred to the building block languages of the internet:",
    "btn1" : "1. Numbers, strings and booleans",
    "btn2" : "2. TML, CSS, Javascript",
    "btn3" : "3. You have no idea ",
    "btn4" : "4. HTTPS, DSL, USPS",
  },{
    "quizQuestion" : "HTML is to content as CSS is to _____:",
    "btn1" : "1. You have no idea",
    "btn2" : "2. Machine learning",
    "btn3" : "3. Styling elements",
    "btn4" : "4. Programming logic",
  },{
    "quizQuestion" : "Which companies created and support Angular and React:",
    "btn1" : "1. You have no idea",
    "btn2" : "2. Google",
    "btn3" : "3. Samsung",
    "btn4" : "4. Facebook",
  },{
    "quizQuestion" : "An array can be used to store values of what type:",
    "btn1" : "1. Numbers, strings and booleans",
    "btn2" : "2. You have no idea",
    "btn3" : "3. All of the above",
    "btn4" : "4. None of the above",
  },{
    "quizQuestion" : "A function must include what _____:",
    "btn1" : "1. Quotation marks",
    "btn2" : "2. String values",
    "btn3" : "3. You have no idea",
    "btn4" : "4. Parenthesis",
  }
]


var correctResponse = [
  {
    0 : "1. HTTPS, DSL, USPS",
    1 : "2. Google ",
    2 : "3. Styling elements",
    3 : "3. All of the above",
    4 : "4. Parenthesis",
  }
]
var startScore = 0;
var qIndex = 0;

var quizAnswer = document.getElementById("quizAnswer");
var score = document.getElementById("score");
var cachedAnswer = document.getElementById("quizAnswer");

var initials = document.getElementById("initials");
var initialInput = document.getElementById("initialInput");
var initialBtn = document.getElementById("initialBtn");
//
function startQuiz() {
  document.getElementById("startPage").style.display = "none";
  document.getElementById("quizPage").style.display = "block";
  document.querySelector(".header").style.display = "block";
  document.getElementById("scorePage").style.display = "none";
};
startBtn.addEventListener("click", function(){ 
  startQuiz();
  quizTimer();
  localStorage.setItem("score", startScore);
});


function showQ() {
  var q = questionArr[qIndex];

  quizQuestion.innerHTML = q.quizQuestion;

  choice1.innerHTML = q.btn1;
  choice1.setAttribute("data-answer", q.btn1);
  choice2.innerHTML = q.btn2;
  choice2.setAttribute("data-answer", q.btn2);
  choice3.innerHTML = q.btn3;
  choice3.setAttribute("data-answer", q.btn3);
  choice4.innerHTML = q.btn4;
  choice4.setAttribute("data-answer", q.btn4);
};

showQ();

choice1.addEventListener("click", function(){
  
  var optionText = document.getElementById("btn1").getAttribute("data-answer");
 
  answerQuery(0,optionText);
});

choice2.addEventListener("click", function(){
  var optionText = document.getElementById("btn2").getAttribute("data-answer");
  answerQuery(1,optionText);
});

choice3.addEventListener("click", function(){
   var optionText = document.getElementById("btn3").getAttribute("data-answer");
    answerQuery(2,optionText);
});

choice4.addEventListener("click", function(){
  var optionText = document.getElementById("btn4").getAttribute("data-answer");
   answerQuery(3,optionText);
});
function scoreTracker() {
  var storedScore = localStorage.getItem("score");
  var scoreUpdate = document.querySelector("#score");

  scoreUpdate.innerText = "Score: " + storedScore;
}
function answerQuery(questionIndex, optionText){
  event.preventDefault();
  if (qIndex == 3 || qIndex == 4) {
    questionIndex++;
  }
  var answer = correctResponse[0][questionIndex];

  if (optionText === answer) {
    qIndex++;
    quizAnswer.textContent = "Correct!";
    score++;
    localStorage.setItem("score", score);
    showQ();
    scoreTracker();
 else {
    qIndex++;
    quizAnswer.textContent = "Incorrect!";
    score--;
    localStorage.setItem("score", score);
    showQ();
    scoreTracker();
  }
}


