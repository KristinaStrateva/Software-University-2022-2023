import { put } from "./api.js";


// export async function updateBook(id) {
//     const form = document.getElementById('edit-form');
//     const url = `/${id}`;
//     const formData = new FormData(form);

//     const author = formData.get('author');
//     const title = formData.get('title');

//     if (author === '' || title === '') {
//         throw new Error('All fields are required!');
//     }

//     await put(url, {author, title});
// }