function calculator() {

    let result = {
        selector1Element: '',
        selector2Element: '',
        resultSelectorElement: '',

        init(selector1, selector2, resultSelector) {
            this.selector1Element = document.querySelector(selector1);
            this.selector2Element = document.querySelector(selector2);
            this.resultSelectorElement = document.querySelector(resultSelector);
        },

        add() {
            const sum = Number(this.selector1Element.value) + Number(this.selector2Element.value);

            this.resultSelectorElement.value = sum;
        },

        subtract() {
            const subtraction = Number(this.selector1Element.value) - Number(this.selector2Element.value);

            this.resultSelectorElement.value = subtraction;
        }
    };

    return result;
}

const calculate = calculator();

calculate.init('#num1', '#num2', '#result');

const sumButton = document.getElementById('sumButton');
const subtractButton = document.getElementById('subtractButton');

sumButton.addEventListener('click', calculate.add());
subtractButton.addEventListener('click', calculate.subtract());
