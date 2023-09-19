import { html } from "../../node_modules/lit-html/lit-html.js";
import { get } from "../api/api.js";
import { endpoints } from "../utils.js";



const catalogTemplate = (data) => html`
<section id="dashboard">
    <h2>Collectibles</h2>
    ${data.length != 0 ? html`
    <ul class="card-wrapper">
        ${data.map(shoe => html`
        <li class="card">
            <img src=${shoe.imageUrl} alt="travis"/>
            <p><strong>Brand: </strong><span class="brand">${shoe.brand}</span></p>
            <p><strong>Model: </strong><span class="model">${shoe.model}</span></p>
            <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
            <a class="details-btn" href="/catalog/${shoe._id}">Details</a>
        </li>
        `)}
    </ul>
    ` : html`
    <h2>There are no items added yet.</h2>
    `}
</section>
`;

export async function catalogPage(ctx) {
    const data = await get(endpoints.getAllAds);

    ctx.render(catalogTemplate(data));
}