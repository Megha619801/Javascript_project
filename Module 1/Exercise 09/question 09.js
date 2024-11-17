function isPrime() {
    // Get the number from the user
    const num = parseInt(prompt("Enter an integer:"), 10);

    // Validate the input
    if (isNaN(num) || num <= 1) {
        document.getElementById('nine_output').innerHTML = "Please enter an integer greater than 1.";
        return;
    }

    let isPrime = true;

    // Check for factors other than 1 and itself
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    // Display the result
    if (isPrime) {
        document.getElementById('nine_output').innerHTML = `${num} is a prime number.`;
    } else {
        document.getElementById('nine_output').innerHTML = `${num} is not a prime number.`;
    }
}