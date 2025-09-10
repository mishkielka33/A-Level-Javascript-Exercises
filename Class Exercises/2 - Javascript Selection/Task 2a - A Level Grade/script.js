// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateGrade);
});

// Function to calculate the A-Level grade
function calculateGrade() {
    // TODO: Get the marks for all four components
    let mark1 = parseFloat(document.getElementById('comp1').value);
    let mark2 = parseFloat(document.getElementById('comp2').value);
    let mark3 = parseFloat(document.getElementById('comp3').value);
    let mark4 = parseFloat(document.getElementById('comp4').value);
    // TODO: Calculate the total marks
    let total = mark1 + mark2 + mark3 + mark4
    // TODO: Calculate the percentage (total possible marks is 400)
    let percentage = total / 4
    // TODO: Determine the grade based on the percentage
    // A: 80% or greater
    // B: 70% or greater
    // C: 60% or greater
    // D: 50% or greater
    // E: 40% or greater
    // U: Less than 40%
    let astar = false
    if (((mark3 + mark4) / 2 > 90) && percentage > 80) {
        document.getElementById('result').textContent = `${percentage}%, Grade A*`
    } else if (percentage > 80 && (mark3 + mark4) / 2 < 90) {
        document.getElementById('result').textContent = `${percentage}%, Grade A`
    } else if (percentage > 70) {
        document.getElementById('result').textContent = `${percentage}%, Grade B`
    } else if (percentage > 60) {
        document.getElementById('result').textContent = `${percentage}%, Grade C`
    } else if (percentage > 50) {
        document.getElementById('result').textContent = `${percentage}%, Grade D`
    } else if (percentage > 40) {
        document.getElementById('result').textContent = `${percentage}%, Grade E`
    } else {
        document.getElementById('result').textContent = `${percentage}%, Grade U`
    } 
    // TODO: Display the percentage and grade
}
