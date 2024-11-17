function calculateSquareRoot() {
    // Display confirmation dialog
    const userConfirmed = confirm("Should I calculate the square root?");

    // Reference to the output element
    const output = document.getElementById('six_output');

    if (userConfirmed) {
        // Ask the user for a number
        const number = parseFloat(prompt("Please enter a number:"));

        // Check if the input is valid
        if (isNaN(number)) {
            output.innerHTML = "Invalid input. Please enter a valid number.";
        } else if (number < 0) {
            // Square root of a negative number is not defined
            output.innerHTML = "The square root of a negative number is not defined.";
        } else {
            // Calculate and display the square root
            const squareRoot = Math.sqrt(number).toFixed(2);
            output.innerHTML = `The square root of ${number} is ${squareRoot}.`;
        }
    } else {
        // User chose to cancel
        output.innerHTML = "The square root is not calculated.";
    }
}
