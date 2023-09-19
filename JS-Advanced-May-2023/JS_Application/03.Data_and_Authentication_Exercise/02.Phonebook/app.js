const baseUrl = 'http://localhost:3030/jsonstore/phonebook';
const ulPhonebookElement = document.getElementById('phonebook');
const loadButtonElement = document.getElementById('btnLoad');
const createButtonElement = document.getElementById('btnCreate');

function attachEvents() {
    loadButtonElement.addEventListener('click', onLoad);
    ulPhonebookElement.addEventListener('click', onDelete);
    createButtonElement.addEventListener('click', onCreate);
}

attachEvents();

// Load all phonebook entries -> Load button -> GET Request

function onLoad() {
    Array.from(ulPhonebookElement.children).forEach(li => li.remove());

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            Object.entries(data).forEach(([key, entry]) => {
                const newLiElement = document.createElement('li');
                newLiElement.innerHTML = `${entry.person}: ${entry.phone}<button data-id=${key}>Delete</button>`;

                ulPhonebookElement.appendChild(newLiElement);
            });
        });
}

// Delete the selected entry -> Delete button -> DELETE Request

function onDelete(event) {

    if (event.target.tagName !== 'BUTTON') {
        return;
    }

    const currLiElement = event.target.parentElement;
    currLiElement.remove();

    const currKey = event.target.dataset.id;

    fetch(`${baseUrl}/${currKey}`, {
        method: 'delete'
    });
}

// Create new entry -> Create button -> POST Request + load functionality to be evaluated

function onCreate() {
    const personInputElement = document.getElementById('person');
    const phoneInputElement = document.getElementById('phone');

    const result = {
        person: personInputElement.value,
        phone: phoneInputElement.value
    };

    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(result)
    };

    personInputElement.value = '';
    phoneInputElement.value = '';

    fetch(baseUrl, options);
    
    onLoad();
}