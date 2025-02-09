const quizQuestions = [
  {
    question: "What is the capital of India?",
    options: ["Bhopal", "Mumbai", "Delhi", "Kolkata"],
    correctAnswer: "Delhi"
  },
  {
    question: "Which is the northernmost state of India?",
    options: ["Jharkhand", "Rajasthan", "Jammu and Kashmir", "Gujarat"],
    correctAnswer: "Jammu and Kashmir"
  },
  {
    question: "Which river forms India's boundary with Bangladesh?",
    options: ["Yamuna", "Ganges", "Brahmaputra", "Godavari"],
    correctAnswer: "Brahmaputra"
  },
  {
    question: "How many states does India have?",
    options: ["29", "28", "26", "27"],
    correctAnswer: "28"
  },
  {
    question: "How many Union Territories does India have?",
    options: ["9", "7", "8", "6"],
    correctAnswer: "8"
  },
  {
    question: "What is the capital of Madhya Pradesh?",
    options: ["Bhopal", "Indore", "Ujjain", "Gwalior"],
    correctAnswer: "Bhopal"
  },
  {
    question: "Which city is known as the 'Pink City' of India?",
    options: ["Jaipur", "Varanasi", "Jodhpur", "Lucknow"],
    correctAnswer: "Jaipur"
  },
  {
    question: "Who wrote the Indian National Anthem?",
    options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Mahatma Gandhi"],
    correctAnswer: "Rabindranath Tagore"
  },
  {
    question: "Which is the longest river in India?",
    options: ["Ganga", "Brahmaputra", "Yamuna", "Godavari"],
    correctAnswer: "Ganga"
  },
  {
    question: "Which is the highest mountain peak in India?",
    options: ["Kangchenjunga", "Nanda Devi", "Mount Everest", "K2"],
    correctAnswer: "Kangchenjunga"
  }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 100;
let timerInterval;

document.getElementById("start-quiz-button").addEventListener("click", function() {
  document.getElementById("rules-container").style.display = "none";
  document.getElementById("question-container").style.display = "block";
  startQuiz();
});

function startQuiz() {
  displayQuestion();
  startTimer();
}

function displayQuestion() {
  if (currentQuestionIndex >= quizQuestions.length) {
    return endQuiz();
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");

  questionText.innerHTML = currentQuestion.question;
  answerButtons.innerHTML = "";

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("answer-button");
    answerButtons.appendChild(button);

    button.addEventListener("click", function() {
      checkAnswer(option);
    });
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
  }

  currentQuestionIndex++;
  displayQuestion();
}

function startTimer() {
  timerInterval = setInterval(function() {
    timeLeft--;

    document.getElementById("timer").textContent = timeLeft;

    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timerInterval);

  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score} out of ${quizQuestions.length}</p>
    <p>Score Percentage: ${(score / quizQuestions.length) * 100}%</p>
  `;
}
