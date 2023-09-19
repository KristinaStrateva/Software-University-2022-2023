function attachEventsListeners() {
    const mainElement = document.getElementsByTagName('main')[0];

    mainElement.addEventListener('click', converter);

    function converter(event) {
        const daysInputElement = document.getElementById('days');
        const hoursInputElement = document.getElementById('hours');
        const minutesInputElement = document.getElementById('minutes');
        const secondsInputElement = document.getElementById('seconds');

        const timeUnitButton = event.target.id;
        const clickedDiv = event.target.parentElement;
        let inputValueToConvert = clickedDiv.querySelector('input').value;
        
        if (timeUnitButton === 'daysBtn') {
            hoursInputElement.value = inputValueToConvert * 24;
            minutesInputElement.value = inputValueToConvert * 1440;
            secondsInputElement.value = inputValueToConvert * 86400;

        } else if (timeUnitButton === 'hoursBtn') {
            daysInputElement.value = inputValueToConvert / 24;
            minutesInputElement.value = inputValueToConvert * 60;
            secondsInputElement.value = inputValueToConvert * 3600;

        } else if (timeUnitButton === 'minutesBtn') {
            daysInputElement.value = inputValueToConvert / 1440;
            hoursInputElement.value = inputValueToConvert / 60;
            secondsInputElement.value = inputValueToConvert * 60;

        } else if (timeUnitButton === 'secondsBtn') {
            daysInputElement.value = inputValueToConvert / 86400;
            hoursInputElement.value = inputValueToConvert / 3600;
            minutesInputElement.value = inputValueToConvert / 60;
        }
    }
}