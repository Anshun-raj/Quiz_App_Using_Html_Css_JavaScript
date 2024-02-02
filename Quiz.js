const quiz = [
  {
    question: "What is the most used programming language in 2021?",
    ans1text: "Java",
    ans2text: "C",
    ans3text: "Python",
    ans4text: "JavaScript",
    answer: "JavaScript",
  },
  {
    question: "Who is the President of US?",
    ans1text: "Joe Biden",
    ans2text: "Donald Trump",
    ans3text: "Barack Obama",
    ans4text: "George Bush",
    answer: "Joe Biden",
  },
  {
    question: "What does HTML stand for?",
    ans1text: "Hypertext Markup Language",
    ans2text: "Cascading Style Sheet",
    ans3text: "Jason Object Notation",
    ans4text: "Helicopters Terminals Motorboats Lamborginis",
    answer: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    ans1text: "1996",
    ans2text: "1995",
    ans3text: "1994",
    ans4text: "none of the above",
    answer: "1995",
  },
  {
    question: "Which year narendra modi was elected as a prime minister?",
    ans1text: "1999",
    ans2text: "2021",
    ans3text: "2008",
    ans4text: "2014",
    answer: "2014",
  },
  {
    question: "Which year india won the world cup 2nd time?",
    ans1text: "1983",
    ans2text: "2019",
    ans3text: "2011",
    ans4text: "2003",
    answer: "2011",
  },
];

const ques = document.getElementById("quizQues");

const opt1 = document.getElementById("quizOpt1");

const opt2 = document.getElementById("quizOpt2");

const opt3 = document.getElementById("quizOpt3");

const opt4 = document.getElementById("quizOpt4");

const submit = document.getElementById("btn");

let currQues = 0;

let score = 0;

ques.innerText = quiz[currQues].question;

opt1.innerText = quiz[currQues].ans1text;

opt2.innerText = quiz[currQues].ans2text;

opt3.innerText = quiz[currQues].ans3text;

opt4.innerText = quiz[currQues].ans4text;

submit.addEventListener("click", dynamicEvent);

function dynamicEvent() {
  const clickedAns = document.querySelector('input[type="radio"]:checked');

  if (clickedAns === null) {
    alert("Please select an answer");
  } else {
    if (clickedAns.nextElementSibling.innerText === quiz[currQues].answer) {
      score++;
    }
    currQues++;
    if (currQues < quiz.length) {
      ques.innerText = quiz[currQues].question;

      opt1.innerText = quiz[currQues].ans1text;

      opt2.innerText = quiz[currQues].ans2text;

      opt3.innerText = quiz[currQues].ans3text;

      opt4.innerText = quiz[currQues].ans4text;
    } else {
      alert("Your score is " + score + " out of " + quiz.length);
      clickedAns.checked = false;
    }
  }
}
