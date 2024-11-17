function simulateDiceProbability() {
    // Ask the user for the number of dice and the target sum
    const numberOfDice = parseInt(prompt("Enter the number of dice:"), 10);
    const targetSum = parseInt(prompt("Enter the target sum of the dice rolls:"), 10);

    // Validate input
    if (isNaN(numberOfDice) || isNaN(targetSum) || numberOfDice <= 0 || targetSum <= 0) {
        document.getElementById('ten_output').innerHTML =
            "Please enter valid positive integers for the number of dice and the target sum.";
        return;
    }

    // Simulation parameters
    const simulations = 10000; // Number of repetitions
    let successfulRolls = 0;

    // Simulate dice rolls
    for (let i = 0; i < simulations; i++) {
        let sum = 0;
        for (let j = 0; j < numberOfDice; j++) {
            sum += Math.floor(Math.random() * 6) + 1; // Roll a die (random number between 1 and 6)
        }

        // Check if the sum matches the target sum
        if (sum === targetSum) {
            successfulRolls++;
        }
    }

    // Calculate the probability
    const probability = (successfulRolls / simulations) * 100;

    // Display the result
    document.getElementById('ten_output').innerHTML =
        `Probability to get sum ${targetSum} with ${numberOfDice} dice is ${probability.toFixed(2)}%.`;
}