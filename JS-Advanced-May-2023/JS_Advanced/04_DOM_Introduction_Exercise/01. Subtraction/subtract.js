function subtract() {
    const firstNum = Number(document.getElementById('firstNumber').value);
    const secondNum = Number(document.getElementById('secondNumber').value);
    const resultElement = document.getElementById('result');

    const result = firstNum - secondNum;

    resultElement.textContent = result;
}