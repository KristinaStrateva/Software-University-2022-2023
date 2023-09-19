import { getAllIdeas } from "../api/data.js";

const section = document.getElementById('dashboard-holder');
section.remove();

let ctx = null;

export function showCatalog(context) {
    ctx = context;

    context.showSection(section);

    loadIdeas();

    section.addEventListener('click', onDetails);
}

async function onDetails(event) {
    event.preventDefault();

    if (event.target.tagName !== 'A') {
        return;
    }

    const currIdeaId = event.target.dataset.id;
        
    ctx.goTo('details', currIdeaId);
}

async function loadIdeas() {
    const ideas = await getAllIdeas();

    if (ideas.length === 0) {
        const h1Element = document.createElement('h1');
        h1Element.textContent = 'No ideas yet! Be the first one :)';

        section.replaceChildren(h1Element);

    } else {
        const fragment = document.createDocumentFragment();

        const ideasToLoad = ideas.map(createIdeaCard);

        for (let i = ideas.length; i >= ideas.length - 3; i--) {
            const currIdea = ideasToLoad[i];
            fragment.appendChild(currIdea);
        }

        section.replaceChildren(fragment);
    }
}

function createIdeaCard(idea) {
    const element = document.createElement('div');
    element.classList = 'card overflow-hidden';
    element.classList = 'current-card details';
    element.style.width = '20rem';
    element.style.height = '18rem';

    element.innerHTML = `
    <div class="card-body">
    <p class="card-text">${idea.title}</p>
    </div>
    <img class="card-image" src="${idea.img}" alt="Card image cap">
    <a data-id="${idea._id}" class="btn" href="">Details</a>`;

    return element;
}