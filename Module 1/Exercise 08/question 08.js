function findLeapYears() {
        // Get the start and end years from the user
        const startYear = parseInt(prompt("Enter the start year:"), 10);
        const endYear = parseInt(prompt("Enter the end year:"), 10);

        // Validate the input
        if (isNaN(startYear) || isNaN(endYear) || startYear <= 0 || endYear <= 0 || startYear > endYear) {
        document.getElementById('eight_output').innerHTML = "Please enter valid positive years with the start year less than or equal to the end year.";
        return;
        }

        let leapYears = [];

        // Find all leap years in the interval
        for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leapYears.push(year);
        }
        }

        // Generate HTML for the unordered list
        if (leapYears.length > 0) {
        const leapYearsList = leapYears.map(year => `<li>${year}</li>`).join('');
        document.getElementById('eight_output').innerHTML = `<ul>${leapYearsList}</ul>`;
        } else {
        document.getElementById('eight_output').innerHTML = "No leap years found in the given interval.";
        }
}
