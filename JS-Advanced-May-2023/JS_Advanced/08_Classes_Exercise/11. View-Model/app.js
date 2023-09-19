class Textbox {
    constructor(selector, regex) {
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regex;
        Array.from(this.elements).forEach(element => element.addEventListener('change', () => this.value = element.value));
    }

    get elements() {
        return this._elements;
    }

    get value() {
        return this.elements[0].value;
    }

    set value(val) {
        Array.from(this._elements).forEach(element => element.value = val);
    }

    isValid() {
        return !this._invalidSymbols.test(this.value);
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('textbox');

Array.from(inputs).forEach(element => element.addEventListener('click', function () { console.log(textbox.value); }));
