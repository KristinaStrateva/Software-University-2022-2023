import { render } from "../../node_modules/lit-html/lit-html.js";
import { html } from "../../node_modules/lit-html/lit-html.js";
import { get } from "../api.js";
import { containerDivElement } from "../../app.js";

export const catalogTemplate = (data) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>
    </div>
</div>
<div class="row space-top">
    ${Object.values(data).map(element => html`
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src=01.Furniture/${element.img.slice(1)} />
                    <p>${element.description}</p>
                    <footer>
                        <p>Price: <span>${element.price} $</span></p>
                    </footer>
                    <div>
                        <a href="/details/${element._id}" class="btn btn-info">Details</a>
                    </div>
                </div>
            </div>
        </div>
    `)}
</div>
`;

export async function catalogPage(ctx) {
    const catalog = await get('http://localhost:3030/data/catalog');

    render(catalogTemplate(catalog), containerDivElement);
}