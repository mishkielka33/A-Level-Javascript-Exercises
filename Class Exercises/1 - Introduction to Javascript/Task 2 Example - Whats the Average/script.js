// button click thing
document.getElementById('avgButton').addEventListener('click', findAverage);

function findAverage() {
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);
    let num3 = parseFloat(document.getElementById('number3').value);

    let average = (num1 + num2 + num3) / 3;

    document.getElementById('average').textContent = `The average is ${average}.`;
}