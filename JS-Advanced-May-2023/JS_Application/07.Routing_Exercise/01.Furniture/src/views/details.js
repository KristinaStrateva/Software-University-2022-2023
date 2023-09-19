import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { containerDivElement } from "../../app.js";
import { delById, get } from "../api.js";
import page from "../../node_modules/page/page.mjs";

const detailsTemplate = (data) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
</div>
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=../01.Furniture${data.img.slice(1)} />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${data.make}</span></p>
        <p>Model: <span>${data.model}</span></p>
        <p>Year: <span>${data.year}</span></p>
        <p>Description: <span>${data.description}</span></p>
        <p>Price: <span>${data.price}</span></p>
        <p>Material: <span>${data.material}</span></p>
        ${data._ownerId === localStorage.ownerId 
            ? html`
                <div>
                    <a href="/details/${data._id}/edit/${data._id}" class="btn btn-info">Edit</a>
                    <a href="#" id="${data._id}" class="btn btn-red" @click=${onDelete}>Delete</a>
                </div>
                `
            : null}
    </div>
</div>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.detailsId;

    render(detailsTemplate(await get(`http://localhost:3030/data/catalog/${id}`)), containerDivElement);
}

async function onDelete(event) {
    const id = event.target.id;

    alert('Are you sure you want to delete this item?');

    await delById(`http://localhost:3030/data/catalog/${id}`);

    page.redirect('/catalog');
}