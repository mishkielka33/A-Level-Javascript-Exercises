// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculatePremium);
});

// Function to calculate the insurance premium
function calculatePremium() {
    // TODO: Get values from input fields
    let age = parseFloat(document.getElementById('age').value);
    let noClaims = parseFloat(document.getElementById('noClaims').value);
    let prevClaims = parseFloat(document.getElementById('noClaims').value);
    // TODO: Calculate base premium (£500)
    let price = 500
    let ageAdj = 0
    let noClaimsAdj = 0
    let prevClaimsAdj = 0
    // TODO: Apply age adjustment
    // Under 25: +50%
    // 25-40: No change
    // Over 40: -15%
    if (age < 25) {
        price = price * 1.5
    } else if (age > 40) {
        price = price * 0.85
    }
    ageAdj = price - 500
    // TODO: Apply no claims bonus
    // 0 years: No discount
    // 1-2 years: 10% discount
    // 3-5 years: 25% discount
    // Over 5 years: 35% discount
    if (noClaims > 5) {
        price = price * 0.65
    } else if (noclaims >= 3){
        price = price * 0.75
    } else if (noClaims >= 1){
        price = price * 0.9
    }
    noClaimsAdj = price - ageAdj
    // TODO: Add previous claims adjustment
    // Each claim adds 20%
    price = price * (claims * 0.2)
    prevClaimsAdj = price - noClaimsAdj
    // TODO: Display the final premium and the breakdown of calculations
    document.getElementById('result').textContent = `Final premium = £${price}.`
}
