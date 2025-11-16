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
    let prac = parseFloat(document.getElementById('practical').value);
    let pass = ""
    let avg = (theory + prac) / 2
    // TODO: Check if both scores are above 50% (Pass requirement)
    if (theory > 50 && prac > 50 && avg > 70){
        pass = "distinction"
    } else if (theory > 50 && prac > 50 && avg <= 70) {
        pass = "pass"
    } else {
        pass = "fail"
    }
    // TODO: If passed, calculate average and check if above 70% (Distinction requirement)
    
    // TODO: Display the appropriate grade (Pass, Distinction, or Fail)
    // Also display the average score
    document.getElementById('result').textContent = `Your average score was ${avg}: ${grade}`
}
