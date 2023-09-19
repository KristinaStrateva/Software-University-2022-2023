import { html } from "./util.js";

export const loadButtonTemplate = () => html`
<button id="loadBooks">LOAD ALL BOOKS</button>
`;

export const initialTableTemplate = () => html`
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
</table>
`;

export const tableTemplate = (data) => html`
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        ${data.map(([id, book]) => html`
            <tr>
                <td>${book.author}</td>
                <td>${book.title}</td>
                <td>
                    <button data-id=${id}>Edit</button>
                    <button data-id=${id}>Delete</button>
                </td>
            </tr>
        `)}
    </tbody>
</table>
`;

export const updateTemplate = () => html`
<form id="edit-form">
    <input type="hidden" name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Save">
</form>
`;

export const createTemplate = () => html`
<form id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>
`;