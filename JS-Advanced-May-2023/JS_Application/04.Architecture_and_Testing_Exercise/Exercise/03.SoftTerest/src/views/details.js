import { deleteById, getById } from "../api/data.js";

const section = document.getElementById('detailsPage');
section.remove();

let ctx = null;
let ideaId = '';

export function showDetails(context, id) {
    ctx = context;
    ideaId = id;

    context.showSection(section);

    loadDetails();
}

async function loadDetails() {
    const deleteButtonElement = section.querySelector('a[class="btn detb"]');

    const data = await getById(ideaId);

    const title = data.title;
    const description = data.description;
    const img = data.img;
    const currOwnerId = data._ownerId;

    createDetails(title, description, img);

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (!userData || userData.id != currOwnerId) {
        deleteButtonElement.remove();

    } else {
        deleteButtonElement.addEventListener('click', onDelete);
    }
}

function createDetails(title, description, image) {
    section.querySelector('img').src = image;
    section.querySelector('h2').textContent = title;
    section.querySelector('p.idea-description').textContent = description;
}

async function onDelete(event) {
    event.preventDefault();

    await deleteById(ideaId);

    ctx.goTo('catalog');
}