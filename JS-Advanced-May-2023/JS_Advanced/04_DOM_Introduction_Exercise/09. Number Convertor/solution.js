function solve() {
    const options = document.getElementById('selectMenuTo');

    const binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.innerHTML = 'Binary';

    const hexadecimalOption = document.createElement('option');
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.innerHTML = 'Hexadecimal';

    options.appendChild(binaryOption);
    options.appendChild(hexadecimalOption);

    const button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', result);
    
    function result() {
        const numberToConvert = Number(document.getElementById('input').value);
        const resultElement = document.getElementById('result');

        debugger

        if (options.value === 'binary') {
            resultElement.value = numberToConvert.toString(2);
        } else {
            resultElement.value = numberToConvert.toString(16).toUpperCase();
        }
    }
}