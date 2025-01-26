function checkAnswer() {
    // The correct answer is '4'
    var correctAnswer = "4";

    // Get the user's selected answer
    var userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
