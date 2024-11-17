function rollDice() {
    // Ask the user for the number of dice rolls
    const rolls = parseInt(prompt("Enter the number of dice rolls:"), 10);

    // Validate the input
    if (isNaN(rolls) || rolls <= 0) {
        document.getElementById('seven_output').innerHTML = "Please enter a valid positive number.";
        return;
    }

    let sum = 0;

    // Roll the dice the specified number of times
    for (let i = 0; i < rolls; i++) {
        const roll = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
        sum += roll;
    }

    // Display the result
    document.getElementById('seven_output').innerHTML = `You rolled ${rolls} dice. The sum of the results is ${sum}.`;
}
