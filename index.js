var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your name?")
console.log("Welcome " + userName + ' Lets play');

var score = 0;


function play(Question, Answer) {
  var userAnswer = readlineSync.question(Question);
  if (userAnswer === Answer) {
    console.log("Yes!!! You R right");
    score++;
  }
  else {
    console.log("Wrongggggg");
    score--;
  }
  console.log("Your score till now is" + score);
}


var QuestionList = [
  {
    Question: 'IS Umar Tall?',
    Answer: 'yes'
  },
  {
    Question: "Is Umar lives in Ambivvali?",
    Answer: 'yes'
  },
  {
    Question: 'Umar is doing ENgineering?',
    Answer: 'yes'
  }
]

for (i = 0; i < QuestionList.length; i++) {
  var currentQuestion = QuestionList[i];
  play(currentQuestion.Question, currentQuestion.Answer);
}
console.log("your final score is : "+score);
















