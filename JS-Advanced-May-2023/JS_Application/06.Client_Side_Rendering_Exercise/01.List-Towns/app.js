import { html, render } from "./node_modules/lit-html/lit-html.js";

document.getElementById('btnLoadTowns').addEventListener('click', (event) => {
    event.preventDefault();

    const mainDIvElement = document.getElementById('root');
    const input = document.getElementById('towns').value;

    const townsArr = input.split(', ');

    const cardTemplate = html`
        <ul>
            ${townsArr.map(town => html`<li>${town}</li>`)}
        </ul>
    `;

    render(cardTemplate, mainDIvElement);
})