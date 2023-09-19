const baseUrl = 'http://localhost:3030/jsonstore/collections/books';
const loadButtonElement = document.getElementById('loadBooks');
const tbodyElement = document.querySelector('tbody');
const formElement = document.querySelector('form');
const [titleInputElement, authorInputElement] = formElement.querySelectorAll('input');
const h3Element = document.querySelector('h3');
const submitButtonElement = document.querySelector('form > button');

tbodyElement.querySelectorAll('tr').forEach(tr => tr.remove());

loadButtonElement.addEventListener('click', onLoad);
formElement.addEventListener('submit', onSubmit);

async function onLoad() {

    const response = await fetch(baseUrl);
    const booksData = await response.json();

    tbodyElement.querySelectorAll('tr').forEach(tr => tr.remove());

    Object.keys(booksData).forEach(key => {
        const currBookHTML = createHTMLElement(booksData[key], key);

        tbodyElement.appendChild(currBookHTML);
    });
}

async function onSubmit(event) {
    event.preventDefault();

    if (h3Element.textContent !== 'FORM') {
        h3Element.textContent = 'FORM';
    }

    const form = event.target;
    const formData = new FormData(form);

    const title = formData.get('title');
    const author = formData.get('author');

    titleInputElement.value = '';
    authorInputElement.value = '';

    if (title === '' || author === '') {
        return;
    }

    const bookToSubmit = {
        title,
        author
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookToSubmit)
    }

    const response = await fetch(baseUrl, options);
    const data = await response.json();

    const newBookElement = createHTMLElement(data, data._id);
    tbodyElement.appendChild(newBookElement);
}

function onEdit(event) {
    h3Element.textContent = 'Edit FORM';

    const currRow = event.target.parentElement.parentElement;

    const currTitle = currRow.querySelectorAll('td')[0].textContent;
    const currAuthor = currRow.querySelectorAll('td')[1].textContent;

    titleInputElement.value = currTitle;
    authorInputElement.value = currAuthor;

    submitButtonElement.remove();

    const saveButtonElement = document.createElement('button');
    saveButtonElement.textContent = 'Save';
    saveButtonElement.addEventListener('click', onSave);

    formElement.appendChild(saveButtonElement);
}

async function onSave(event) {
    event.preventDefault();

    
}

async function onDelete(event) {
    event.preventDefault();

    const currId = event.target.dataset.id;

    const response = await fetch(`${baseUrl}/${currId}`, { method: 'delete' });

    event.target.parentElement.parentElement.remove();
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

function createHTMLElement(obj, id) {
    const titleTdElement = createElementFn('td', undefined, obj.title);
    const authorTdElement = createElementFn('td', undefined, obj.author);
    const editButtonElement = createElementFn('button', undefined, 'Edit');
    editButtonElement.addEventListener('click', onEdit);
    const deleteButtonElement = createElementFn('button', undefined, 'Delete');
    deleteButtonElement.addEventListener('click', onDelete);
    const buttonsTdElement = createElementFn('td', undefined, editButtonElement, deleteButtonElement);
    const trElement = createElementFn('tr', undefined, titleTdElement, authorTdElement, buttonsTdElement);
    trElement.dataset.id = id;

    return trElement;
}