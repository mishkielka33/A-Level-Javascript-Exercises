// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateCircle);

function calculateCircle() {
    // TODO:
    // 1. Get the radius value from the input field
    let radius = parseFloat(document.getElementById('radius').value);
    // 2. Calculate:
    //    - Circumference using the formula: 2 * π * radius
    //    - Area using the formula: π * radius^2
    let circ = 2 * Math.PI * radius
    let area = Math.PI * radius**2
    // 3. Display both results in their respective span elements
    document.getElementById('circumference').textContent = circ
    document.getElementById('area').textContent = area
    // Note: Use Math.PI for the value of π
}
