function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule';
    const infoElement = document.querySelector('#info .info');
    const departButtonElement = document.getElementById('depart');
    const arriveButtonElement = document.getElementById('arrive');

    let id = 'depot';
    let stopName = '';

    function depart() {
        departButtonElement.disabled = true;
        arriveButtonElement.disabled = false;

        fetch(`${baseUrl}/${id}`)
            .then(res => res.json())
            .then(data => {
                id = data.next;
                stopName = data.name;

                infoElement.textContent = `Next stop ${stopName}`;
            })
            .catch(err => {
                departButtonElement.disabled = true;
                arriveButtonElement.disabled = true;

                infoElement.textContent = 'Error';
            });
    }

    function arrive() {
        departButtonElement.disabled = false;
        arriveButtonElement.disabled = true;

        infoElement.textContent = `Arriving at ${stopName}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();