baseUrl = 'http://localhost:3030/jsonstore/collections/books';
const loadButtonElement = document.getElementById('loadBooks');
const tbodyElement = document.querySelector('tbody');
const formElement = document.querySelector('form');
const [titleInputElement, authorInputElement] = formElement.querySelectorAll('input');
const h3Element = document.querySelector('h3');
const submitButtonElement = document.querySelector('form > button');

loadButtonElement.addEventListener('click', onLoad);
formElement.addEventListener('submit', onSubmit);

function onLoad() {
    tbodyElement.innerHTML = '';

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            Object.entries(data).forEach(([id, book]) => createRow(id, book.title, book.author));
        });
}

function onSubmit(event) {
    event.preventDefault();

    const title = titleInputElement.value;
    const author = authorInputElement.value;

    titleInputElement.value = '';
    authorInputElement.value = '';

    if (
        title === '' ||
        author === ''
    ) {
        return;
    }

    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, author })
    };

    fetch(baseUrl, options);
}

function createRow(id, title, author) {
    const trElement = document.createElement('tr');

    const td1Element = document.createElement('td');
    td1Element.textContent = title;

    const td2Element = document.createElement('td');
    td2Element.textContent = author;

    const td3Element = document.createElement('td');

    const editButtonElement = document.createElement('button');
    editButtonElement.dataset.id = id;
    editButtonElement.textContent = 'Edit';
    editButtonElement.addEventListener('click', onEdit);

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.dataset.id = id;
    deleteButtonElement.textContent = 'Delete';
    deleteButtonElement.addEventListener('click', onDelete);

    td3Element.appendChild(editButtonElement);
    td3Element.appendChild(deleteButtonElement);

    trElement.appendChild(td1Element);
    trElement.appendChild(td2Element);
    trElement.appendChild(td3Element);

    tbodyElement.appendChild(trElement);
}

function onEdit(event) {
    h3Element.textContent = 'Edit FORM';
    const currId = event.target.dataset.id;

    submitButtonElement.remove();

    const saveButtonElement = document.createElement('button');
    saveButtonElement.textContent = 'Save';
    saveButtonElement.addEventListener('click', onSave);

    formElement.appendChild(saveButtonElement);

    function onSave(event) {
        const newTitle = titleInputElement.value;
        const newAuthor = authorInputElement.value;
    
        const options = {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: newTitle, author: newAuthor })
        };
    
        fetch(`${baseUrl}/${currId}`, options);
    
        h3Element.textContent = 'FORM';
        saveButtonElement.remove();

        formElement.appendChild(submitButtonElement);

        titleInputElement.value = '';
        authorInputElement.value = '';
    }
}


function onDelete(event) {
    event.preventDefault();
    
    const currId = event.target.dataset.id;

    fetch(`${baseUrl}/${currId}`, { method: 'delete' });
}