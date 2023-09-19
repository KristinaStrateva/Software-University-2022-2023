import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../api/recipe.js";


const catalogTemplate = (recipes, page, pages) => html`
<section id="catalog">
    <div class="section-title">
        <form id="searchForm">
            <input type="text" name="search">
            <input type="submit" value="Search">
        </form>
    </div>
    ${pagerTemplate(page, pages)}
    ${recipes.map(cardTemplate)}
    ${pagerTemplate(page, pages)}
</section>
`;

const pagerTemplate = (page, pages) => html`
<header class="section-title">
    Page ${page} of ${pages}
    ${page != 1 ? html`<a class="pager" href="/catalog?page=${page - 1}">&lt;Prev</a>`: nothing}
    ${page < pages ? html`<a class="pager" href="/catalog?page=${page + 1}">Next&gt;</a>`: nothing}
</header>
`;

const cardTemplate = (recipe) => html`
<a class="card" href="/catalog/${recipe._id}">
    <article class="preview">
        <div class="title">
            <h2>${recipe.name}</h2>
        </div>
        <div class="small"><img src=${recipe.img}></div>
    </article>
</a>
`;

export async function catalogPage(ctx) {
    const query = parseQuerystring(ctx.querystring);
    const page = Number(query.page) || 1;
    const {recipes, pages} = await getAll(page);

    ctx.render(catalogTemplate(recipes, page, pages));
}

// export async function search() {
//     return getAll()
// }

function parseQuerystring(query = '') {
    return Object.fromEntries(query.split('&').map(kvp => kvp.split('=')));
}