let userData = null;

window.addEventListener('DOMContentLoaded', () => {
    const guestDivElement = document.getElementById('guest');
    const userDivElement = document.getElementById('user');
    const addFormElement = document.getElementById('addForm');
    const addButtonElement = addFormElement.querySelector('button');
    const loadButtonElement = document.querySelector('.load');
    const logoutButtonElement = document.getElementById('logout');
    const logoutDivElement = document.getElementById('user');
    logoutDivElement.style.display = 'inline';
    const emailSpanElement = document.querySelector('nav .email span');
    userData = JSON.parse(sessionStorage.getItem('currUserData'));
    const catchesElement = document.querySelector('#catches')

    if (userData !== null) {
        guestDivElement.style.display = 'none';
        addButtonElement.disabled = false;
        emailSpanElement.textContent = userData.email;

    } else {
        userDivElement.style.display = 'none';
        emailSpanElement.textContent = 'guest';
        document.querySelectorAll('#addForm input').forEach((x) => (x.disabled = true));
    }

    Array.from(catchesElement.querySelectorAll('.catch')).forEach(child => child.remove());
    addFormElement.addEventListener('submit', onAddSubmit);
    loadButtonElement.addEventListener('click', onLoad);
    logoutButtonElement.addEventListener('click', onLogout);
});


async function onLoad() {
    const catchesDivElement = document.getElementById('catches');
    const res = await fetch('http://localhost:3030/data/catches');
    const data = await res.json();

    Array.from(catchesDivElement.children).forEach(child => child.remove());

    catchesDivElement.append(...data.map(angler => createAngler(angler))); // equal to catchesDivElement.append(...data.map(createAngler));
}

async function onAddSubmit(event) {
    event.preventDefault();

    // if (!userData) {
    //     window.location = 'login.html';

    //     return;
    // }

    const formData = new FormData(event.currentTarget);

    // Create an object data that keeps the inputs as keys and input values as key values
    const bodyData = [...formData.entries()].reduce((acc, [key, value]) => Object.assign(acc, { [key]: value }), {});

    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.token
        },
        body: JSON.stringify(bodyData)
    };

    try {
        if (Object.values(bodyData).some(input => input === '')) {
            throw new Error('All fields must be non-empty!');
        }

        const res = await fetch('http://localhost:3030/data/catches', options);

        if (res.ok !== true) {
            const errMessage = (await res.json()).message;

            throw new Error(errMessage);
        }

        event.target.reset();
        onLoad();

    } catch (err) {
        alert(err.message)
        throw err;
    }
}

async function onUpdate(event) {
    const currCatchId = event.target.dataset.id;
    const currDivElement = event.target.parentElement;

    try {
        const [anglerInput, weightInput, speciesInput, locationInput, baitInput, capturetimeInput] = currDivElement.querySelectorAll('input');

        const angler = anglerInput.value;
        const weight = weightInput.value;
        const species = speciesInput.value;
        const location = locationInput.value;
        const bait = baitInput.value;
        const captureTime = capturetimeInput.value;

        if (
            angler === '' ||
            weight === '' ||
            species === '' ||
            location === '' ||
            bait === '' ||
            captureTime === ''
        ) {

            onLoad();
            throw new Error('All fields must be non-empty!');
        }

        const bodyData = {
            angler,
            weight,
            species,
            location,
            bait,
            captureTime
        };

        const options = {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify(bodyData)
        };

        await fetch(`http://localhost:3030/data/catches/${currCatchId}`, options);

        onLoad();

    } catch (err) {
        alert(err.message);
        throw err;
    }
}

async function onDelete(event) {
    const currCatchId = event.target.dataset.id;

    try {
        await fetch(`http://localhost:3030/data/catches/${currCatchId}`, {
            method: 'delete',
            headers: {
                'X-Authorization': userData.token
            }
        });

        onLoad();

    } catch (err) {
        alert(err.message);
        throw err;
    }
}

async function onLogout(event) {
    event.preventDefault();

    try {
        const response = await fetch('http://localhost:3030/users/logout', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            }
        });

        if (response.ok !== true) {
            const error = (await response.json()).message;

            throw new Error(error);
        }

        sessionStorage.removeItem('currUserData');
        window.location = 'index.html';

    } catch (err) {
        alert(err.message);
        throw err;
    }
}

function createAngler(data) {
    const label1Element = createElementFn('label', undefined, 'Angler');
    const anglerInputElement = createElementFn('input', { type: 'text', class: 'angler' }, data.angler);
    const label2Element = createElementFn('label', undefined, 'Weight');
    const weightInputElement = createElementFn('input', { type: 'text', class: 'weight' }, data.weight);
    const label3Element = createElementFn('label', undefined, 'Species');
    const speciesInputElement = createElementFn('input', { type: 'text', class: 'species' }, data.species);
    const label4Element = createElementFn('label', undefined, 'Location');
    const locationInputElement = createElementFn('input', { type: 'text', class: 'location' }, data.location);
    const label5Element = createElementFn('label', undefined, 'Bait');
    const baitInputElement = createElementFn('input', { type: 'text', class: 'bait' }, data.bait);
    const label6Element = createElementFn('label', undefined, 'Capture Time');
    const captureTimeInputElement = createElementFn('input', { type: 'number', class: 'captureTime' }, data.captureTime);
    const updateButtonElement = createElementFn('button', { class: 'update', 'data-id': data._id }, 'Update');
    updateButtonElement.addEventListener('click', onUpdate);
    const deleteButtonElement = createElementFn('button', { class: 'delete', 'data-id': data._id }, 'Delete');
    deleteButtonElement.addEventListener('click', onDelete);

    if (!userData || data._ownerId !== userData.id) {
        const elementsToDisable = [anglerInputElement, weightInputElement, speciesInputElement, locationInputElement, baitInputElement, captureTimeInputElement, updateButtonElement, deleteButtonElement];

        elementsToDisable.forEach(element => element.disabled = true);
    }

    const mainDivElement = createElementFn('div', { class: 'catch' }, label1Element, anglerInputElement, label2Element, weightInputElement, label3Element, speciesInputElement, label4Element, locationInputElement, label5Element, baitInputElement, label6Element, captureTimeInputElement, updateButtonElement, deleteButtonElement);


    return mainDivElement;
}

function createElementFn(tag, attributes, ...data) {
    const element = document.createElement(tag);
    const firstDataElement = data[0];

    if (data.length === 1 && typeof firstDataElement !== 'object') {
        if (tag === 'input' || tag === 'textarea') {
            element.value = firstDataElement;
        } else {
            element.textContent = firstDataElement;
        }

    } else {
        element.append(...data);
    }

    if (attributes !== undefined) {
        Object.keys(attributes).forEach(key => {
            element.setAttribute(key, attributes[key]);
        });
    }

    return element;
}