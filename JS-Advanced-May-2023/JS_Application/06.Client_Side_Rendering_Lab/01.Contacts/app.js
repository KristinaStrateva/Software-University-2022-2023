import { html, render } from './node_modules/lit-html/lit-html.js';
import { contacts } from './contacts.js';
import { repeat } from './node_modules/lit-html/directives/repeat.js'

const mainDivElement = document.getElementById('contacts');

const contactsTemplate = (contact) => html`
<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${contact.name}</h2>
        <button class="detailsBtn" @click=${toggle.bind(contact)}>Details</button>
        ${contact.showDetails
        ? html`
                    <div class="details" id=${contact.id}>
                        <p>Phone number: ${contact.phoneNumber}</p>
                        <p>Email: ${contact.email}</p>
                    </div>
                    `
        : null
    }
    </div>
</div>
`;

update();

function update() {
    render(repeat(contacts, contact => contact.id, contactsTemplate), mainDivElement);

    // Alternative way of rendering
    // render(contacts.map(contactsTemplate), mainDivElement);
}

function toggle() {
    this.showDetails = !this.showDetails;
    update();
}

/*
mainDivElement.addEventListener('click', (event) => {
    if (!event.target.classList.contains('detailsBtn')) {
        return;
    }

    const parentElement = event.target.parentElement;
    const detailsDivElement = parentElement.getElementsByClassName('details')[0];

    detailsDivElement.style.display == 'block'
        ? detailsDivElement.style.display = 'none'
        : detailsDivElement.style.display = 'block'
})
*/