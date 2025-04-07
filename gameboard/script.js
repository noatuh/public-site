// Trivia questions
const questions = {
    1: {
        100: { question: "What is the capital of France?", answer: "Paris" },
        200: { question: "Which river runs through London?", answer: "Thames" },
        300: { question: "Which continent is the Sahara Desert located?", answer: "Africa" },
        400: { question: "What is the largest country by landmass?", answer: "Russia" },
        500: { question: "Which US state is known as the Sunshine State?", answer: "Florida" }
    },
    2: {
        100: { question: "What planet is known as the Red Planet?", answer: "Mars" },
        200: { question: "What is the hardest natural substance on Earth?", answer: "Diamond" },
        300: { question: "What is the chemical symbol for gold?", answer: "Au" },
        400: { question: "Which gas makes up most of the Earth's atmosphere?", answer: "Nitrogen" },
        500: { question: "What is the speed of light?", answer: "299,792,458 meters per second" }
    },
    3: {
        100: { question: "Who was the first President of the United States?", answer: "George Washington" },
        200: { question: "During which war was the Battle of Gettysburg fought?", answer: "American Civil War" },
        300: { question: "Who discovered America?", answer: "Christopher Columbus" },
        400: { question: "What year did World War II end?", answer: "1945" },
        500: { question: "Which Egyptian queen was known for her relationships with Julius Caesar and Mark Antony?", answer: "Cleopatra" }
    },
    4: {
        100: { question: "What is 10 + 10?", answer: "20" },
        200: { question: "What is the square root of 144?", answer: "12" },
        300: { question: "What is the value of Pi (up to two decimal places)?", answer: "3.14" },
        400: { question: "What is 25% of 200?", answer: "50" },
        500: { question: "Solve for x: 2x + 4 = 10", answer: "x = 3" }
    },
    5: {
        100: { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" },
        200: { question: "What is the first book of the Bible?", answer: "Genesis" },
        300: { question: "Who wrote '1984'?", answer: "George Orwell" },
        400: { question: "Which novel features a whale named Moby Dick?", answer: "'Moby Dick' by Herman Melville" },
        500: { question: "Who is the author of 'Pride and Prejudice'?", answer: "Jane Austen" }
    }
};

// Show question in modal
function showQuestion(category, value) {
    const questionObj = questions[category][value];
    document.getElementById('question-text').innerText = questionObj.question;
    document.getElementById('answer-text').innerText = questionObj.answer;
    document.getElementById('answer-text').style.display = 'none';
    document.getElementById('question-modal').style.display = 'block';
}

// Show answer
function showAnswer() {
    document.getElementById('answer-text').style.display = 'block';
}

// Close modal
document.getElementById('close').onclick = function() {
    document.getElementById('question-modal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == document.getElementById('question-modal')) {
        document.getElementById('question-modal').style.display = 'none';
    }
}
