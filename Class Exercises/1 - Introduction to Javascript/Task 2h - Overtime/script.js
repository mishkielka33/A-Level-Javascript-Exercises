// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculatePay);

function calculatePay() {
    // TODO:
    // 1. Get all input values:
    //    - Standard hourly rate
    let stanRate = parseFloat(document.getElementById('standardRate').value);
    //    - Overtime rate
    let overRate = parseFloat(document.getElementById('overtimeRate').value);
    //    - Basic hours worked
    let basicHours = parseFloat(document.getElementById('basicHours').value);
    //    - Overtime hours worked
    let overHours = parseFloat(document.getElementById('overtimeHours').value);
    // 2. Calculate:
    //    - Basic pay (standard rate × basic hours)
    let basicPay = stanRate * basicHours;
    //    - Overtime pay (overtime rate × overtime hours)
    let overPay = overRate * overHours;
    //    - Total pay (basic pay + overtime pay)
    let totalPay = basicPay + overPay;
    // 3. Display all amounts formatted to 2 decimal places
    document.getElementById('basicPay').textContent = basicPay.toFixed(2);
    document.getElementById('overtimePay').textContent = overPay.toFixed(2);
    document.getElementById('totalPay').textContent = totalPay.toFixed(2);
}
