
// =====================================
// GRADE 6 CHAOS HQ
// INTERACTIVE WEBSITE FUNCTIONS
// =====================================


// 1. EXCUSE GENERATOR

const excuses = [
    "My homework and I have decided to take a break.",
    "My pen ran out of motivation.",
    "I was going to do it, but then the universe happened.",
    "My notebook is currently unavailable for comment.",
    "I thought the deadline was a suggestion.",
    "My brain opened 47 tabs and crashed.",
    "The homework was completed in another dimension.",
    "I spent so long finding my pencil that I ran out of time.",
    "My calculator and I had a disagreement.",
    "I was mentally prepared. Physically? Not so much.",
    "The assignment and I are currently in a complicated relationship.",
    "I forgot my homework, but I remembered my lunch.",
    "My textbook has officially become a decorative object.",
    "I blinked and suddenly it was submission day.",
    "I was busy preparing for the next assignment.",
    "My timetable has personally betrayed me.",
    "The instructions were clear. My brain was not.",
    "I have no explanation. Only confidence.",
    "My pencil was on a journey of self-discovery.",
    "I thought we were having a homework-free era.",
    "I opened my notebook and immediately needed a break.",
    "My brain is still buffering.",
    "I was waiting for inspiration. It never arrived.",
    "The assignment was there yesterday. I swear.",
    "I have a strong academic relationship with procrastination."
];

let excuseCount = 0;
let previousExcuse = -1;

const excuseButton = document.getElementById("excuse-button");
const excuseOutput = document.getElementById("excuse-output");
const excuseCounter = document.getElementById("excuse-count");

excuseButton.addEventListener("click", function () {

    let randomIndex;

    // Prevent the same excuse appearing twice in a row
    do {
        randomIndex = Math.floor(Math.random() * excuses.length);
    } while (randomIndex === previousExcuse);

    previousExcuse = randomIndex;

    excuseOutput.textContent = excuses[randomIndex];

    excuseCount++;

    excuseCounter.textContent =
        "EXCUSES GENERATED: " + excuseCount;

});


// 2. RANDOM SCHOOL ADVICE GENERATOR

const tips = [
    "Keep an extra pen. It might become your best friend.",
    "Never underestimate the power of a good lunch.",
    "Read the question twice before answering.",
    "Write your name on your answer sheet. Future you will be grateful.",
    "Keep your school bag organised. Your future self deserves peace.",
    "Start projects early. Cardboard does not magically cut itself.",
    "Ask questions when you are confused. Nobody knows everything.",
    "Take breaks while studying. Your brain is not a machine.",
    "Check your timetable before packing your bag.",
    "A little preparation can save a lot of panic.",
    "Don't let one difficult test define your abilities.",
    "Remember that sleep is important too."
];

const tipButton = document.getElementById("tip-button");
const tipOutput = document.getElementById("tip-output");

tipButton.addEventListener("click", function () {

    const randomTip = Math.floor(Math.random() * tips.length);

    tipOutput.textContent = tips[randomTip];

});


// 3. SCHOOL MOOD SELECTOR

const moodButtons = document.querySelectorAll(".mood-button");
const moodOutput = document.getElementById("mood-output");

moodButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove selection from all buttons
        moodButtons.forEach(function (item) {
            item.classList.remove("selected");
        });

        // Highlight selected button
        button.classList.add("selected");

        // Show selected mood
        moodOutput.textContent = button.dataset.mood;

    });

});


// 4. SCHOOL QUIZ

const questions = [
    {
        question: "Which subject usually involves equations?",
        options: [
            "Mathematics",
            "Art",
            "Music",
            "Physical Education"
        ],
        answer: 0
    },

    {
        question: "What is the name of a book used to record school notes?",
        options: [
            "Dictionary",
            "Notebook",
            "Atlas",
            "Magazine"
        ],
        answer: 1
    },

    {
        question: "Which of these is a good study habit?",
        options: [
            "Ignoring every question",
            "Studying only at midnight",
            "Revising regularly",
            "Never checking your answers"
        ],
        answer: 2
    }
];

let currentQuestion = 0;
let quizScore = 0;
let questionAnswered = false;

const quizNumber = document.getElementById("quiz-number");
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizFeedback = document.getElementById("quiz-feedback");
const nextButton = document.getElementById("next-question");

function showQuestion() {

    questionAnswered = false;

    const question = questions[currentQuestion];

    quizNumber.textContent =
        "QUESTION " + (currentQuestion + 1) +
        " OF " + questions.length;

    quizQuestion.textContent = question.question;

    quizOptions.innerHTML = "";

    quizFeedback.textContent = "";

    nextButton.hidden = true;

    question.options.forEach(function (option, index) {

        const button = document.createElement("button");

        button.textContent = option;
        button.classList.add("quiz-option");

        button.addEventListener("click", function () {
            checkAnswer(index, button);
        });

        quizOptions.appendChild(button);

    });

}


function checkAnswer(selectedIndex, selectedButton) {

    if (questionAnswered) {
        return;
    }

    questionAnswered = true;

    const correctAnswer = questions[currentQuestion].answer;

    const allOptions =
        document.querySelectorAll(".quiz-option");

    allOptions.forEach(function (button, index) {

        button.disabled = true;

        if (index === correctAnswer) {
            button.classList.add("correct");
        }

    });

    if (selectedIndex === correctAnswer) {

        quizScore++;

        quizFeedback.textContent =
            "CORRECT! Your brain is functioning. 🎉";

    } else {

        selectedButton.classList.add("wrong");

        quizFeedback.textContent =
            "NOT QUITE! The correct answer is highlighted.";

    }

    if (currentQuestion === questions.length - 1) {

        nextButton.textContent = "SEE FINAL SCORE";

    } else {

        nextButton.textContent = "NEXT QUESTION →";

    }

    nextButton.hidden = false;

}


nextButton.addEventListener("click", function () {

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        showQuestion();

    } else {

        showFinalScore();

    }

});


function showFinalScore() {

    quizNumber.textContent = "QUIZ COMPLETED";

    quizQuestion.textContent =
        "YOU FINISHED THE SCHOOL QUIZ!";

    quizOptions.innerHTML = "";

    quizFeedback.textContent =
        "YOUR SCORE: " + quizScore + " / " + questions.length;

    nextButton.textContent = "PLAY AGAIN";

    nextButton.hidden = false;

    nextButton.onclick = function () {

        currentQuestion = 0;
        quizScore = 0;

        nextButton.onclick = null;

        showQuestion();

    };

}


// 5. WELCOME MESSAGE IN THE CONSOLE

console.log("Welcome to Grade 6 Chaos HQ!");
console.log("School survival mode activated.");
console.log("Good luck. You're going to need it.");


// 6. START THE QUIZ

showQuestion();
