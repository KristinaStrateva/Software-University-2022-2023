import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllFacts } from "../api/endpoints.js";


const catalogTemplate = (data) => html`
<h2>Fun Facts</h2>
<section id="dashboard">
    ${data.length != 0 ? html`
        ${data.map(fact => html`
        <div class="fact">
            <img src=${fact.imageUrl} alt="example1" />
            <h3 class="category">${fact.category}</h3>
            <p class="description">${fact.description}</p>
            <a class="details-btn" href="/catalog/${fact._id}">More Info</a>
        </div>
        `)}
    </div>
    ` : html`
    <h2>No Fun Facts yet.</h2>
    `}
</section>
`;

export async function catalogPage(ctx) {
    const data = await getAllFacts();

    ctx.render(catalogTemplate(data));
}