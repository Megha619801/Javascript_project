function checkLeapYear() {
    // Get the year input from the user
    const year = parseInt(document.getElementById('yearInput').value, 10);

    // Check if the input is a valid number
    if (isNaN(year) || year <= 0) {
        document.getElementById('five_output').innerHTML = "Please enter a valid positive year.";
        return;
    }

    // Determine if the year is a leap year
    let isLeapYear = false;
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        isLeapYear = true;
    }

    // Display the result
    if (isLeapYear) {
        document.getElementById('five_output').innerHTML = `${year} is a leap year!`;
    } else {
        document.getElementById('five_output').innerHTML = `${year} is not a leap year.`;
    }
}
