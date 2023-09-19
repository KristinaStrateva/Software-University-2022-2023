import { html } from "../../node_modules/lit-html/lit-html.js";
import { get } from "../api/api.js";
import { endpoints } from "../utils.js";


const catalogTemplate = (books) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <ul class="other-books-list">
        ${books.length != 0 ? books.map(book => html`
        <li class="otherBooks">
            <h3>${book.title}</h3>
            <p>Type: ${book.type}</p>
            <p class="img"><img src=${book.imageUrl}></p>
            <a class="button" href="/catalog/${book._id}">Details</a>
        </li>
        `) : html`<p class="no-books">No books in database!</p>`}
    </ul>
</section>
`;

export async function catalogPage(ctx) {
    const books = await get(endpoints.getAllBooks);

    ctx.render(catalogTemplate(books));
}