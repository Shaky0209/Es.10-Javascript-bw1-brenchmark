const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// -----------------------
// VARIABLES DEFINITION
// -----------------------
let node = document.getElementById("content");
let nodeWelcome = document.createElement("div");
let welcomeFirst;
let welcomeSecond;
let titleInst;
let pInstructions1;
let pInstructions2;
let instructionsUL;
let instructionLi;
let checkBox;
let labelCheck;
let labelText;
let checkboxText;
let footer;
let startButton;
let checkContent;
let count = 0;
let wrongAnswers = [];
let correctAnswer;
let answerInput;
let stepButton;
let shutDownTime;
let time;
let timeDisplay;
let cicle = 0;
let questionContent = document.createElement("div");
let score = 0;
let dataAnswer;
let testInput;
let testInputValue;
let currentQuestion;
let totalQuestion;
let footQuestion;
let casualCont = [];
let allAnswers;
let singleAnswer = {};
let nX;
let outAnswers = []
// -----------------------
nodeWelcome.setAttribute("id", "welcome");
node.appendChild(nodeWelcome);

// ----------------------
// FUNCTION DEFINITION
// ----------------------
let buttonControl = () => {
  startButton.setAttribute("value", "true");
  checkControl();
}

let checkControl = () => {

  if (checkBox.checked && startButton.value) {
    brenchmark();
    timer();
    removeWelcome()
  } else {
    startButton.setAttribute("value", "false");
  }
}

let removeWelcome = () => {
  if (cicle < 1) {
    nodeWelcome.innerHTML = "";
    cicle++
  }
}

let timer = () => {

  shutDownTime = 60;
  let time = setInterval(function () {

    if (timeDisplay) {
      node.removeChild(timeDisplay);
    }

    shutDownTime--;

    timeDisplay = document.createElement("p");
    timeDisplay.setAttribute("id", "timeDisplay");

    timeDisplay.appendChild(document.createTextNode(shutDownTime));
    node.appendChild(timeDisplay);

    if (shutDownTime < 11) {
      timeDisplay.style.color = "red";
    }

    if (shutDownTime === 0) {
      brenchmark();
    }

    if (shutDownTime === 0 && count === questions.length) {
      clearInterval(time);
    }
  }, 1000);
}

let randomAnswers = () => {
  casualCont = [];
  allAnswers = [];
  outAnswers = [];

  for (y = 0; y < wrongAnswers.length; y++) {
    singleAnswer = { label: wrongAnswers[y], value: "false" };
    allAnswers.push(singleAnswer);
  }
  singleAnswer = { label: correctAnswer, value: "true" };
  allAnswers.push(singleAnswer);

  for (z = 0; z < allAnswers.length; z++) {
    nX = Math.floor(Math.random() * allAnswers.length);
    casualCont.push(nX);

    if (casualCont.length > 1) {

      for (x = (casualCont.length - 2); x >= 0; x--) {

        if (nX == casualCont[x]) {
          casualCont.splice(x, 1);
          z--
          x++
        }
      }
    }
   
  }
  for(w = 0; w < allAnswers.length; w++){
    outAnswers.splice(casualCont[w], 0, allAnswers[w]);
  }
}

let createElement = () => {

  for (i = 0; i < outAnswers.length; i++) {
    answerInput = document.createElement("input");
    answerInput.setAttribute("type", "radio");
    answerInput.setAttribute("name", "answer");
    answerInput.setAttribute("value", outAnswers[i].value);
    inputLabel = document.createElement("label");
    inputLabel.setAttribute("name", "answer");
    inputLabel.innerText = outAnswers[i].label;
    toDown = document.createElement("br");
    questionContent.appendChild(answerInput);
    questionContent.appendChild(inputLabel);
    questionContent.appendChild(toDown);
  }

  stepButton = document.createElement("button");
  stepButton.setAttribute("id", "stepButton");
  stepButton.innerText = "Continue";
  questionContent.appendChild(stepButton);
  dataAnswer = document.getElementsByTagName("input");
  footQuestion = document.createElement("div");
  footQuestion.setAttribute("id", "footQuestion");
  node.appendChild(footQuestion);
  currentQuestion = document.createElement("p");
  totalQuestion = document.createElement("p");
  totalQuestion.setAttribute("id", "totalQuestion");
  currentQuestion.innerText = "QUESTION  " + count;
  totalQuestion.innerText = "  /  " + questions.length;
  footQuestion.appendChild(currentQuestion);
  footQuestion.appendChild(totalQuestion);
}

let verifyAnswer = () => {

  for (a = 0; a < dataAnswer.length; a++) {

    testInput = dataAnswer[a].checked;
    testInputValue = dataAnswer[a].value;
    if (testInput === true && testInputValue == "true") {
      score++;
    }

  }
  if (count === questions.length) {
    end();
  }
}

let end = () => {

  shutDownTime = 1;
  if (shutDownTime <= 1) {
    timeDisplay.innerHTML = "";
  }
  footQuestion.innerHTML = "";
  questionContent.innerHTML = "";
  finalMess = document.createElement("p")
  finalMess.setAttribute("id", "finalMess");
  finalMess.innerText = "End of the test! Your score is " + score + " points!!!";
  questionContent.appendChild(finalMess);
}

// --------------------------------------------------------------------------------------------
let brenchmark = () => {

  if (count === questions.length) {
    end();
  } else {
    if (footQuestion) {
      node.removeChild(footQuestion);
    }

    questionContent.innerHTML = "";
    shutDownTime = 60;

    
    questionContent = document.createElement("div");
    questionContent.setAttribute("id", "questionContent");
    node.appendChild(questionContent);
    
    questionParagraph = document.createElement("p");
    questionParagraph.setAttribute("id", "question");
    questionParagraph.innerText = questions[count].question;
    questionContent.appendChild(questionParagraph);
    wrongAnswers = questions[count].incorrect_answers;
    correctAnswer = questions[count].correct_answer;
    
    count++

    randomAnswers();
    
    createElement();

    stepButton.addEventListener("click", verifyAnswer);
    stepButton.addEventListener("click", brenchmark);
  }
}

// ----------------------------------------------------------------------------------------------

let welcomePage = () => {

  welcomeFirst = document.createElement("p");
  welcomeSecond = document.createElement("p");
  welcomeFirst.setAttribute("id", "welcomeFirst");
  welcomeSecond.setAttribute("id", "welcomeSecond");
  welcomeFirst.innerText = "Welcome to";
  welcomeSecond.innerText = "your exam"
  nodeWelcome.appendChild(welcomeFirst);
  nodeWelcome.appendChild(welcomeSecond);

  titleInst = document.createElement("h4");
  titleInst.setAttribute("id", "titleInst");
  titleInst.innerText = "instructions"
  nodeWelcome.appendChild(titleInst);

  pInstructions1 = document.createElement("p");
  pInstructions1.setAttribute("class", "pInstructions");
  pInstructions1.innerText = "We don't expect most ingineers to know the answers to all fof theese"
  nodeWelcome.appendChild(pInstructions1);
  pInstructions2 = document.createElement("p");
  pInstructions2.setAttribute("class", "pInstructions");
  pInstructions2.innerText = "questions, so don't worry if you're unsure of a few of them."
  nodeWelcome.appendChild(pInstructions2);

  instructionsUL = document.createElement("ul");
  nodeWelcome.appendChild(instructionsUL);
  instructionLi = document.createElement("li");
  instructionLi.innerText = "Each question is timed and can only be answered once";
  instructionsUL.appendChild(instructionLi);
  instructionLi = document.createElement("li");
  instructionLi.innerText = "Changing broeser tab or opening other windows will invalidate the question.";
  instructionsUL.appendChild(instructionLi);
  instructionLi = document.createElement("li");
  instructionLi.innerText = "This exam will take approx. 0-5 minutes.";
  instructionsUL.appendChild(instructionLi);

  footer = document.createElement("div");
  footer.setAttribute("id", "divFoot");
  nodeWelcome.appendChild(footer);

  checkContent = document.createElement("div");
  checkContent.setAttribute("id", "checkContent");
  footer.appendChild(checkContent);
  checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("id", "checkbox");
  checkboxText = document.createElement("p");
  checkboxText.innerText = "I promise to answer myself whithout help from anyone";
  checkContent.appendChild(checkBox);
  checkContent.appendChild(checkboxText);

  startButton = document.createElement("button");
  startButton.setAttribute("value", "false");
  startButton.innerText = "PROCEED";
  footer.appendChild(startButton);
}

welcomePage();

startButton.addEventListener("click", buttonControl);

