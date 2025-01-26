// Function to add two numbers
function add(number1, number2) {
    return number1 + number2;
}

// Function to subtract two numbers
function subtract(number1, number2) {
    return number1 - number2;
}

// Function to multiply two numbers
function multiply(number1, number2) {
    return number1 * number2;
}

// Function to divide two numbers (with validation for division by zero)
function divide(number1, number2) {
    if (number2 === 0) {
        return 'Cannot divide by 0';
    }
    return number1 / number2;
}

// Event listener for the addition button
document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;  // Validate input for number1
    const number2 = parseFloat(document.getElementById('number2').value) || 0;  // Validate input for number2
    const result = add(number1, number2);  // Perform addition
    document.getElementById('calculation-result').textContent = result;  // Display result
});

// Event listener for the subtraction button
document.getElementById('subtract').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;  // Validate input for number1
    const number2 = parseFloat(document.getElementById('number2').value) || 0;  // Validate input for number2
    const result = subtract(number1, number2);  // Perform subtraction
    document.getElementById('calculation-result').textContent = result;  // Display result
});

// Event listener for the multiplication button
document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;  // Validate input for number1
    const number2 = parseFloat(document.getElementById('number2').value) || 0;  // Validate input for number2
    const result = multiply(number1, number2);  // Perform multiplication
    document.getElementById('calculation-result').textContent = result;  // Display result
});

// Event listener for the division button
document.getElementById('divide').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;  // Validate input for number1
    const number2 = parseFloat(document.getElementById('number2').value) || 0;  // Validate input for number2
    const result = divide(number1, number2);  // Perform division
    document.getElementById('calculation-result').textContent = result;  // Display result
});
