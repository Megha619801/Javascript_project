// Q.no.1

console.log("I'm printing to the console!")

// Q.no.2
// let username = prompt("What is your Name?")
// document.getElementById('target').innerHTML="Hello " + username;

// Q.no.3
// const num1 = parseInt(prompt("Enter the first integer:"));
// const num2 = parseInt(prompt("Enter the second integer:"));
// const num3 = parseInt(prompt("Enter the third integer:"));
//
// const sum = num1 + num2 + num3;
// const product = num1 * num2 * num3;
// const average = sum / 3;
//
// document.getElementById("output").innerHTML =`
//         <p>Sum: ${sum}</p>
//         <p>Product: ${product}</p>
//         <p>Average: ${average}</p>
// `;


// Q.4
//
// const name = document.getElementById('studentName').value.trim();
//
// if (!name) {
// document.getElementById('four_output').innerHTML = "Please enter a valid name.";
//
// }
//
//  // Generate a random number between 1 and 4
// const houseNumber = Math.floor(Math.random() * 4) + 1;
// let house;
//
// // Determine the house based on the random number
// switch (houseNumber) {
// case 1:
//     house = "Gryffindor";
//     break;
// case 2:
//     house = "Slytherin";
//     break;
// case 3:
//     house = "Hufflepuff";
//     break;
// case 4:
//     house = "Ravenclaw";
//     break;
// default:
//     house = "Unknown"; // Just in case something goes wrong
// }
//
// // Display the result
// document.getElementById('four_output').innerHTML = `${name}, you are ${house}!`;



// Q.5
//
// function checkLeapYear() {
//     // Get the year input from the user
//     const year = parseInt(document.getElementById('yearInput').value, 10);
//
//     // Check if the input is a valid number
//     if (isNaN(year) || year <= 0) {
//         document.getElementById('five_output').innerHTML = "Please enter a valid positive year.";
//         return;
//     }
//
//     // Determine if the year is a leap year
//     let isLeapYear = false;
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         isLeapYear = true;
//     }
//
//     // Display the result
//     if (isLeapYear) {
//         document.getElementById('five_output').innerHTML = `${year} is a leap year!`;
//     } else {
//         document.getElementById('five_output').innerHTML = `${year} is not a leap year.`;
//     }
// }


// Q.6
//
// function calculateSquareRoot() {
//     // Display confirmation dialog
//     const userConfirmed = confirm("Should I calculate the square root?");
//
//     // Reference to the output element
//     const output = document.getElementById('six_output');
//
//     if (userConfirmed) {
//         // Ask the user for a number
//         const number = parseFloat(prompt("Please enter a number:"));
//
//         // Check if the input is valid
//         if (isNaN(number)) {
//             output.innerHTML = "Invalid input. Please enter a valid number.";
//         } else if (number < 0) {
//             // Square root of a negative number is not defined
//             output.innerHTML = "The square root of a negative number is not defined.";
//         } else {
//             // Calculate and display the square root
//             const squareRoot = Math.sqrt(number).toFixed(2);
//             output.innerHTML = `The square root of ${number} is ${squareRoot}.`;
//         }
//     } else {
//         // User chose to cancel
//         output.innerHTML = "The square root is not calculated.";
//     }
// }




// Q.7
//
// function rollDice() {
//     // Ask the user for the number of dice rolls
//     const rolls = parseInt(prompt("Enter the number of dice rolls:"), 10);
//
//     // Validate the input
//     if (isNaN(rolls) || rolls <= 0) {
//         document.getElementById('seven_output').innerHTML = "Please enter a valid positive number.";
//         return;
//     }
//
//     let sum = 0;
//
//     // Roll the dice the specified number of times
//     for (let i = 0; i < rolls; i++) {
//         const roll = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
//         sum += roll;
//     }
//
//     // Display the result
//     document.getElementById('seven_output').innerHTML = `You rolled ${rolls} dice. The sum of the results is ${sum}.`;
// }


// Q.8
//
// function findLeapYears() {
//         // Get the start and end years from the user
//         const startYear = parseInt(prompt("Enter the start year:"), 10);
//         const endYear = parseInt(prompt("Enter the end year:"), 10);
//
//         // Validate the input
//         if (isNaN(startYear) || isNaN(endYear) || startYear <= 0 || endYear <= 0 || startYear > endYear) {
//         document.getElementById('eight_output').innerHTML = "Please enter valid positive years with the start year less than or equal to the end year.";
//         return;
//         }
//
//         let leapYears = [];
//
//         // Find all leap years in the interval
//         for (let year = startYear; year <= endYear; year++) {
//         if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//             leapYears.push(year);
//         }
//         }
//
//         // Generate HTML for the unordered list
//         if (leapYears.length > 0) {
//         const leapYearsList = leapYears.map(year => `<li>${year}</li>`).join('');
//         document.getElementById('eight_output').innerHTML = `<ul>${leapYearsList}</ul>`;
//         } else {
//         document.getElementById('eight_output').innerHTML = "No leap years found in the given interval.";
//         }
// }


// Q.9
//
// function isPrime() {
//     // Get the number from the user
//     const num = parseInt(prompt("Enter an integer:"), 10);
//
//     // Validate the input
//     if (isNaN(num) || num <= 1) {
//         document.getElementById('nine_output').innerHTML = "Please enter an integer greater than 1.";
//         return;
//     }
//
//     let isPrime = true;
//
//     // Check for factors other than 1 and itself
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//
//     // Display the result
//     if (isPrime) {
//         document.getElementById('nine_output').innerHTML = `${num} is a prime number.`;
//     } else {
//         document.getElementById('nine_output').innerHTML = `${num} is not a prime number.`;
//     }
// }


// Q.10

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