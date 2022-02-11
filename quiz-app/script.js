const quizData = [
  {
    question: "Who the Prime Minister of UK?",
    a: "Boris Johnson",
    b: "Tony Blair",
    c: "Christine Blake",
    d: "John Smith",
    answer: "a",
  },
  {
    question: "What is the capital of UK?",
    a: "Birmingham",
    b: "London",
    c: "Edinburgh",
    d: "Cardiff",
    answer: "b",
  },
  {
    question: "What is world population in 2020?",
    a: "3.032 billion",
    b: "4.511 billion",
    c: "7.753 billion",
    d: "8.123 billion",
    answer: "c",
  },
  {
    question: "How many colours are in a rainbow?",
    a: "5",
    b: "8",
    c: "7",
    d: "6",
    answer: "c",
  },
  {
    question: "Which city was most visited in 2019?",
    a: "Paris",
    b: "London",
    c: "Dubai",
    d: "Bangkok",
    answer: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].answer) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});




