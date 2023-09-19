import './src/api.js';
import { render } from "./node_modules/lit-html/lit-html.js";
import { loadButtonTemplate, tableTemplate, createTemplate, updateTemplate, initialTableTemplate } from "./src/templates.js";
import { getAllBooks } from './src/catalog.js';
import { createNewBook } from './src/create.js';
import { del, get, put } from './src/api.js';
// import { updateBook } from './src/update.js';
// import { onAdd } from './src/create.js';

const bodyElement = document.querySelector('body');

const ctx = {
    render: (template) => render(template, bodyElement),
    loadButtonTemplate,
    createTemplate,
    tableTemplate,
    initialTableTemplate,
    updateTemplate
};

ctx.render([
    ctx.loadButtonTemplate(),
    ctx.initialTableTemplate(),
    ctx.createTemplate(),
]);


const loadButtonElement = document.getElementById('loadBooks');
loadButtonElement.addEventListener('click', async () => {
    const booksData = await getAllBooks();

    ctx.render([loadButtonTemplate(), tableTemplate(Object.entries(booksData)), createTemplate()]);

    document.getElementById('add-form').addEventListener('submit', onSubmit);
    document.querySelector('tbody').addEventListener('click', onTable);
});

document.getElementById('add-form').addEventListener('submit', onSubmit);

let currId = null;

async function onSubmit(event) {
    event.preventDefault();

    // const form = event.target;

    if (event.target.querySelectorAll('input')[2].value === 'Submit') {
        await createNewBook(event.target);
    } else {
        await updateBook(event.target, currId);
    }

    event.target.reset();

    const booksData = await getAllBooks();

    ctx.render([ctx.loadButtonTemplate(), ctx.tableTemplate(Object.entries(booksData)), ctx.createTemplate()]);

    // document.getElementById('add-form').addEventListener('submit', onSubmit);
    document.querySelector('tbody').addEventListener('click', onTable);
}

async function onTable(event) {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }

    currId = event.target.dataset.id;

    if (event.target.textContent === 'Delete') {
        onDelete(currId);
    } else {
        const url = `/${currId}`;
        const currRowData = await get(url);

        const author = currRowData.author;
        const title = currRowData.title;

        const booksData = await getAllBooks();

        ctx.render([ctx.loadButtonTemplate(), ctx.tableTemplate(Object.entries(booksData)), ctx.updateTemplate()]);

        document.querySelector('#edit-form input[name="title"]').value = title;
        document.querySelector('#edit-form input[name="author"]').value = author;

        document.querySelector('form').addEventListener('submit', onSubmit);
    }
}

async function onDelete(id) {
    const url = `/${id}`;

    await del(url);

    const booksData = await getAllBooks();

    ctx.render([ctx.loadButtonTemplate(), ctx.tableTemplate(Object.entries(booksData)), ctx.createTemplate()]);
}

async function updateBook(form, id) {
    // const form = document.getElementById('edit-form');
    const url = `/${id}`;
    const formData = new FormData(form);

    const author = formData.get('author');
    const title = formData.get('title');

    if (author === '' || title === '') {
        throw new Error('All fields are required!');
    }

    await put(url, { author, title });
}