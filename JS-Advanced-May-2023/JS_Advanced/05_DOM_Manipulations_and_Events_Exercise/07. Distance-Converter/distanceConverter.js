function attachEventsListeners() {
    const convertButtonElement = document.getElementById('convert');

    convertButtonElement.addEventListener('click', convert);

    function convert() {
        const inputValue = Number(document.getElementById('inputDistance').value);
        const inputSelectedOptionId = document.getElementById('inputUnits').value;
        const outputSelectedOptionId = document.getElementById('outputUnits').value;

        document.getElementById('outputDistance').value = units(inputSelectedOptionId, outputSelectedOptionId, inputValue);
    }

    function units(unit1, unit2, value) {
        let resultInMeters = 0;

        if (unit1 === 'km') {
            resultInMeters = value * 1000;
        } else if (unit1 === 'm') {
            resultInMeters = value * 1;
        } else if (unit1 === 'cm') {
            resultInMeters = value * 0.01;
        } else if (unit1 === 'mm') {
            resultInMeters = value * 0.001;
        } else if (unit1 === 'mi') {
            resultInMeters = value * 1609.34;
        } else if (unit1 === 'yrd') {
            resultInMeters = value * 0.9144;
        } else if (unit1 === 'ft') {
            resultInMeters = value * 0.3048;
        } else if (unit1 === 'in') {
            resultInMeters = value * 0.0254;
        }

        let finalResult = 0;

        if (unit2 === 'km') {
            finalResult = resultInMeters / 1000;
        } else if (unit2 === 'm') {
            finalResult = resultInMeters / 1;
        } else if (unit2 === 'cm') {
            finalResult = resultInMeters / 0.01;
        } else if (unit2 === 'mm') {
            finalResult = resultInMeters / 0.001;
        } else if (unit2 === 'mi') {
            finalResult = resultInMeters / 1609.34;
        } else if (unit2 === 'yrd') {
            finalResult = resultInMeters / 0.9144;
        } else if (unit2 === 'ft') {
            finalResult = resultInMeters / 0.3048;
        } else if (unit2 === 'in') {
            finalResult = resultInMeters / 0.0254;
        }

        return finalResult;
    }
}