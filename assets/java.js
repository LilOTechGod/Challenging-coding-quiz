// show Questions/answers on the screen constantly one after another
var secondsLeft = 80;
var startBtn1 = document.getElementById("startBtn");
var question = document.getElementById("question-text");
var currentQuestion= 0
var startDiv = document.getElementById('startDiv');
var questionSection = document.getElementById("questions-section");
var questionsAnswers = document.getElementById("question-answers");
var endOfGame1 = document.getElementById("endOfGame");

startBtn1.addEventListener("click", startGame);
    // startGame();

    var answers = document.getElementById("question-answers");
    var liO = document.createElement("li");
    liO.textContent ="answers";
    question-answers.appendChild(liO);

var questions = [
    {
      title: 'Commonly used data types DO NOT include?',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____?',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____?',
      choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
      answer: 'all of the above',
    },
    {
      title: 'String values must be enclosed within ____ when being assigned to variables?',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: 'quotes',
    },
    {
      title: 'A very useful tool used during development and debugging for printing content to the debugger is?',
      choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
      answer: 'console.log',
    },
    {
      title: 'What is used to get content centered?',
      choices: ['align-items', 'justify-content', 'align-content', 'color'],
      answer: 'justify-content', 
    },
  ];
  
  function startGame () {
    console.log("something");
    console.log(currentQuestion);
    startDiv.setAttribute("class", "hide")
    questionSection.removeAttribute("class")
    showQuestion ();
  }

    function showQuestion () {
    question.textContent = questions[currentQuestion].title
    questionsAnswers.textContent ="" 
     for(let i=0; i < questions[currentQuestion].choices.length; i++) {
        var button = document.createElement("button");
        button.textContent = questions[currentQuestion].choices[i];
        button.setAttribute("data-value", questions[currentQuestion].choices[i]);
        button.addEventListener("click", checkAnswer)
        questionsAnswers.appendChild(button);
    }
   
  }  

    function checkAnswer () {
        console.log(this.dataset.value)
        if (this.dataset.value === questions[currentQuestion].answer) {
            currentQuestion ++
            showQuestion () 
        }
        
    }

    function endGame () {
        console.log("end of game! Good job!");
        questionSection.setAttribute("class", "hide")
        endOfGame1.removeAttribute("class", "hide")

        
    }
// user selects an answer 

// correct/incorrect answer appears 

// track the number of correct answers

// next question appears

// reapeat process of show questions and answers until all questions are answered

// I save my initials and score

// redirects you to the highscore page

// redirects you to the option to go back or visit highscore

// go back it will restart game

// visit highscore it will redirect you to highscore page

// function for what happens when game starts,


