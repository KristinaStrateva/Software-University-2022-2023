import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllOffers } from "../api/offers.js";


const catalogTemplate = (data) => html`
<section id="dashboard">
    <h2>Job Offers</h2>
        ${data.length !== 0 ? data.map(offer => html`
                <div class="offer">
                    <img src=${offer.imageUrl.slice(2)} alt="example1" />
                    <p><strong>Title: </strong><span class="title">${offer.title}</span></p>
                    <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
                    <a class="details-btn" href="/catalog/${offer._id}">Details</a>
                </div>
            `) : html`<h2>No offers yet.</h2>`}
</section>
`;

export async function catalogPage(ctx) {
    const data = await getAllOffers();

    ctx.render(catalogTemplate(data));
}