const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

buildQuiz();

submitButton.addEventListener('click', showResults);

const questions = [
    {
        question: "Which character says,'Damn good coffee!'?",
        answers: {
            a: "Benjamin Horne",
            b: "Dale Cooper",
            c: "Sheriff Truman",
        },
        correctAnswer: "b"
    },
    {
        question: "Where does 'Twin Peaks' take place?",
        answers: {
            a: "Oregon",
            b: "Canada",
            c: "Washington",
        },
        correctAnswer: "c"
    },
    {
        question: "Which character does Dana Ashbrook play?",
        answers: {
            a: "Bobby",
            b: "Leo",
            c: "Ed",
        },
        correctAnswer: "a",
    },
];