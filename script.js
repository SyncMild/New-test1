const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "High Transfer Machine Language",
        c: "Hyper Tool Multi Language",
        d: "Home Text Machine Language",
        correct: "a"
    },
    {
        question: "Which language is used for styling websites?",
        a: "Python",
        b: "Java",
        c: "CSS",
        d: "C++",
        correct: "c"
    },
    {
        question: "Which language makes websites interactive?",
        a: "JavaScript",
        b: "HTML",
        c: "CSS",
        d: "SQL",
        correct: "a"
    },
    {
        question: "Which tag is used for the largest heading in HTML?",
        a: "<head>",
        b: "<h1>",
        c: "<p>",
        d: "<title>",
        correct: "b"
    },
    {
        question: "Which company created JavaScript?",
        a: "Microsoft",
        b: "Google",
        c: "Netscape",
        d: "Apple",
        correct: "c"
    }
];

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

    const currentData = quizData[currentQuiz];

    questionEl.innerText = currentData.question;
    a_text.innerText = currentData.a;
    b_text.innerText = currentData.b;
    c_text.innerText = currentData.c;
    d_text.innerText = currentData.d;
}

function getSelected() {
    const answers = document.getElementsByName("answer");

    for (let answer of answers) {
        if (answer.checked) {
            return answer.id;
        }
    }

    return null;
}

function deselectAnswers() {
    const answers = document.getElementsByName("answer");

    for (let answer of answers) {
        answer.checked = false;
    }
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            document.getElementById("quiz-box").innerHTML = `
                <h2>You scored ${score} / ${quizData.length}</h2>
                <button onclick="location.reload()">Restart</button>
            `;
        }
    }
});
