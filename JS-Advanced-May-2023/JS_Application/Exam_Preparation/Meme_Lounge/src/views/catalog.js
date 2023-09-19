import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllMemes } from "../api/meme.js";



const catalogTemplate = (data) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
        ${data.length != 0 ? html`
        ${data.map(meme => html`
        <div class="meme">
            <div class="card">
                <div class="info">
                    <p class="meme-title">${meme.title}</p>
                    <img class="meme-image" alt="meme-img" src=${meme.imageUrl}>
                </div>
                <div id="data-buttons">
                    <a class="button" href="/catalog/${data._id}">Details</a>
                </div>
            </div>
        </div>
        `)}
        ` : html`
        <p class="no-memes">No memes in database.</p>
        `}
    </div>
</section>
`;

export async function catalogPage(ctx) {
    const data = await getAllMemes();

    ctx.render(catalogTemplate(data));
}