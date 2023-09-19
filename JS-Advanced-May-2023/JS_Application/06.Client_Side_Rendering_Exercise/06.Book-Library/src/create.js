import { post } from "./api.js";


export async function createNewBook(form) {
    // const form = document.getElementById('add-form');
    const formData = new FormData(form);

    const author = formData.get('author');
    const title = formData.get('title');

    if (author === '' || title === '') {
        throw new Error('All fields are required!');
    }

    await post({author, title});
}