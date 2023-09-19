import { cats } from './catSeeder.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

const mainSectionElement = document.getElementById('allCats');

const cardTemplate = (cat) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn" @click=${onClick}>Show status code</button>
        <div class="status" style="display: none" id=${cat.id}>
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>
`;

const result = cats.map(cardTemplate);

render(result, mainSectionElement);

function onClick(event) {
    const currCat = event.target.parentElement;

    let isStatusShown = currCat.querySelector('.status').style.display
    
    if (isStatusShown === 'none') {
        currCat.querySelector('.status').style.display = 'block';
        event.target.textContent = 'Hide status code';
    } else {
        currCat.querySelector('.status').style.display = 'none';
        event.target.textContent = 'Show status code';
    }
}