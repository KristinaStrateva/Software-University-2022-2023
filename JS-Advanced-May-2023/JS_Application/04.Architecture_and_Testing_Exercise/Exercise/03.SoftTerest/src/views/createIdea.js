import { createIdea } from "../api/data.js";

const section = document.getElementById('createPage');
section.remove();

let ctx = null;

export function showCreate(context) {
    ctx = context;
    context.showSection(section);
}

const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const img = formData.get('imageURL').trim();

    if (
        title === '' ||
        description === '' ||
        img === ''
    ) {
        return alert('All fields are required!');
    }

    if (title.length < 6) {
        return alert('Title must be at least 6 characters long!');
    }

    if (description.length < 10) {
        return alert('Description must be at least 10 characters long!');
    }

    if (img.length < 5) {
        return alert('ImageURL must be at least 5 characters long!')
    }

    // const ownerId = (JSON.parse(sessionStorage.getItem('userData'))).id;

    // console.log(ownerId);

    const idea = {
        title,
        description,
        img,
        // ownerId
    }

    await createIdea(idea);

    form.reset();

    ctx.goTo('catalog') //, ownerId);
}