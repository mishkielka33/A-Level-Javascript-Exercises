// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const checkButton = document.getElementById('checkButton');
    
    // Add click event listener to the button
    checkButton.addEventListener('click', calculateLeague);
});

// Function to calculate which league the player belongs to
function calculateLeague() {
    // TODO: Get the handicap value from the input field
    let handicap = parseFloat(document.getElementById('handicap').value);
    let league = 0
    // TODO: Check if the handicap is less than 13
    if (handicap < 13) {
        league = 1;
    } else if (handicap >= 13) {
        league = 2;
    }
    // TODO: Display the appropriate message in the result paragraph
    document.getElementById('result').textContent = `You are in league ${league}`
}
