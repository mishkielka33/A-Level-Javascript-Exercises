// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculatePayRise);

function calculatePayRise() {
    // TODO:
    // 1. Get the current salary, months back dated, and pay rise percentage
    let currentPay = parseFloat(document.getElementById('currentSalary').value);
    let months = parseFloat(document.getElementById('months').value);
    let rise = parseFloat(document.getElementById('percentage').value);
    // 2. Calculate:
    //    - New annual salary (current salary + percentage increase)
    let newPay = currentPay * (1 + (rise / 100));
    //    - Back pay (difference in monthly salary × number of months)
    let backPay = (newPay - currentPay) * months;
    // 3. Display both results formatted to 2 decimal places
    document.getElementById('newSalary').textContent = newPay.toFixed(2);
    document.getElementById('backPay').textContent = backPay.toFixed(2);
}
