function getInfo() {
    const inputElement = document.getElementById('stopId');
    const stopNameElement = document.getElementById('stopName');
    const ulBusesElement = document.getElementById('buses');
    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';

    const input = inputElement.value;

    fetch(`${baseUrl}/${input}`)
        .then(res => res.json())
        .then(data => {
            stopNameElement.textContent = data.name;

            for (const busId in data.buses) {
                const newLiElement = document.createElement('li');
                newLiElement.textContent = `Bus ${busId} arrives in ${data.buses[busId]} minutes`;

                ulBusesElement.appendChild(newLiElement);
            }
        })
        .catch(err => stopNameElement.textContent = 'Error');

    stopNameElement.innerHTML = '';
    ulBusesElement.innerHTML = '';
}