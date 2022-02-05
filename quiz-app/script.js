const quizData = [
{
    question: "Who the Prime Minister of UK?",
    a: "Boris Johnson",
    b: "Tony Blair",
    c: "Christine Blake",
    d: "John Smith",
    answer: "a"
},
{
    question: "What is the capital of UK?",
    a: "Birmingham",
    b: "London",
    c: "Edinburgh",
    d: "Cardiff",
    answer: "b"
},
{
    question: "What is world population in 2020?",
    a: "3.032 billion",
    b: "4.511 billion",
    c: "7.753 billion",
    d: "8.123 billion",
    answer: "c"
},
{
    question: "How many colours are in a rainbow?", 
    a: "5",
    b: "8",
    c: "7",
    d: "6",
    answer: "c"
},
{
    question: "Which city was most visited in 2019?",
    a: "Paris",
    b: "London",
    c: "Dubai",
    d: "Bangkok",
    answer: "d"
},
];

let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");

let currentQ = 0;

loadQuiz();

function loadQuiz(){


    currentQ ++;
}

