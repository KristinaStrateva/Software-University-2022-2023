import { html, render } from "./node_modules/lit-html/lit-html.js";

const menuSelectElement = document.getElementById('menu');
const formElement = document.querySelector('form');
const textInputElement = document.getElementById('itemText');

getAllItems();

async function getAllItems() {
    const res = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    const items = await res.json();

    return items;
}

const optionsTemplate = (data) => html`
    ${data.map(item => {
    return html`<option value=${item._id}>${item.text}</option>`
})}
    `;

render(optionsTemplate(Object.values(await getAllItems())), menuSelectElement);

formElement.addEventListener('submit', addItem);

async function addItem(event) {
    event.preventDefault();

    const text = textInputElement.value;

    const bodyData = {
        text
    };

    const options = {
        method: 'post',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
    };

    const res = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', options);

    if (res.ok) {
        render(optionsTemplate(Object.values(await getAllItems())), menuSelectElement);
    }

    formElement.reset();
}