import { html } from "../../node_modules/lit-html/lit-html.js";
import { get } from "../api/api.js";
import { endpoints } from "../utils.js";



const catalogTemplate = (data) => html`
<section id="catalog-page">
    <h1>All Games</h1>
    ${data.length != 0 ? html`
        ${data.map(game => html`
        <div class="allGames">
            <div class="allGames-info">
                <img src=${game.imageUrl}>
                <h6>${game.category}</h6>
                <h2>${game.title}</h2>
                <a href="/catalog/${game._id}" class="details-button">Details</a>
            </div>
        </div>
        `)}
    ` : html`
    <h3 class="no-articles">No articles yet</h3>
    `}
</section>
`;

export async function catalogPage(ctx) {
    const data = await get(endpoints.allGames);

    ctx.render(catalogTemplate(data));
}