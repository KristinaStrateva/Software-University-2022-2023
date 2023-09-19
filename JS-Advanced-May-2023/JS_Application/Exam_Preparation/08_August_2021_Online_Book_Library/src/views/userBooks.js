import { html } from "../../node_modules/lit-html/lit-html.js";
import { get } from "../api/api.js";
import { getUserData } from "../api/sessions.js";
import { endpoints } from "../utils.js";


const userBookTemplate = (books) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    ${books.length != 0 ? html`
    <ul class="my-books-list">
        ${books.map(book => html`
        <li class="otherBooks">
            <h3>${book.title}</h3>
            <p>Type: ${book.type}</p>
            <p class="img"><img src=${book.imageUrl}></p>
            <a class="button" href="/catalog/${book._id}">Details</a>
        </li>
        `)}
    </ul>
    ` : html`
    <p class="no-books">No books in database!</p>
    `}
</section>
`;

export async function userBooksPage(ctx) {
    const userId = getUserData()._id;

    const books = await get(endpoints.userBooks(userId));

    ctx.render(userBookTemplate(books));
}