// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateCommission);

function calculateCommission() {
    // TODO:
    // 1. Get all invoice numbers and amounts from the input fields
    let invoice1 = parseFloat(document.getElementById('invoice1').value);
    let invoice2 = parseFloat(document.getElementById('invoice2').value);
    let invoice3 = parseFloat(document.getElementById('invoice3').value);
    let amount1 = parseFloat(document.getElementById('amount1').value);
    let amount2 = parseFloat(document.getElementById('amount2').value);
    let amount3 = parseFloat(document.getElementById('amount3').value);
    // 2. Calculate:
    //    - Total sales amount
    let totalSales = amount1 + amount2 + amount3;
    //    - Commission (20% of total sales)
    let commission = totalSales * 0.2;
    // 3. Display:
    //    - Each sale's details
    document.getElementById('salesDetails').textContent = `Invoice ${invoice1} : £${amount1}, Invoice ${invoice2} : £${amount2}, Invoice ${invoice3} : £${amount3}.`;
    //    - Total sales amount
    document.getElementById('totalSales').textContent = totalSales.toFixed(2);
    //    - Commission earned
    document.getElementById('commission').textContent = commission.toFixed(2);
    // Note: Format all monetary values to 2 decimal places
}
