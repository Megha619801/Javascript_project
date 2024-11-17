const name = document.getElementById('studentName').value.trim();

if (!name) {
document.getElementById('four_output').innerHTML = "Please enter a valid name.";

}

 // Generate a random number between 1 and 4
const houseNumber = Math.floor(Math.random() * 4) + 1;
let house;

// Determine the house based on the random number
switch (houseNumber) {
case 1:
    house = "Gryffindor";
    break;
case 2:
    house = "Slytherin";
    break;
case 3:
    house = "Hufflepuff";
    break;
case 4:
    house = "Ravenclaw";
    break;
default:
    house = "Unknown"; // Just in case something goes wrong
}

// Display the result
document.getElementById('four_output').innerHTML = `${name}, you are ${house}!`;

