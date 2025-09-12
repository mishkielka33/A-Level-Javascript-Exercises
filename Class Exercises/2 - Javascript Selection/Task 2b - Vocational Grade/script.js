// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateGrade);
});

// Function to calculate the Hang Gliding Certificate grade
function calculateGrade() {
    // TODO: Get the theory and practical exam scores
    let theory = parseFloat(document.getElementById('theory').value);
    let practical = parseFloat(document.getElementById('practical').value);
    let pass = false;
    let distinction = false;
    // TODO: Check if both scores are above 50% (Pass requirement)
    if (theory > 50 && practical > 50) {
        pass = true
    };
    // TODO: If passed, calculate average and check if above 70% (Distinction requirement)
    if ((theory + practical) / 2 > 70){
        distinction = true
    };
    // TODO: Display the appropriate grade (Pass, Distinction, or Fail)
    if (distinction === true){
        document.getElementById('result').textContent = 'Distinction'
    } else if (pass === true){
        document.getElementById('result').textContent = 'Pass'
    } else {
        document.getElementById('result').textContent = 'Fail'
    }
    // Also display the average score
    document.getElementById('average').textContent = `The average is ${(theory + practical)/2}`
}
