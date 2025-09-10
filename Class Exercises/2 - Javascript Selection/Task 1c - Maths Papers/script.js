// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateResult);
});

// Function to calculate if student passed or failed
function calculateResult() {
    // TODO: Get the marks for all three papers
    let mark1 = parseFloat(document.getElementById('paper1').value);
    let mark2 = parseFloat(document.getElementById('paper2').value);
    let mark3 = parseFloat(document.getElementById('paper3').value);
    let pass = false
    // TODO: Calculate the total mark
    let total = mark1 + mark2 + mark3
    // TODO: Check if total is greater than 160
    // TODO: Display the total mark and whether the student passed or failed
    if (total > 160) {
        document.getElementById('result').textContent = `Total mark: ${total}, pass.`
    } else {
        document.getElementById('result').textContent = `Total mark: ${total}, fail.`
    }
}