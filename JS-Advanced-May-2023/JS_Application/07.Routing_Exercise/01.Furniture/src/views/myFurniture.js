import { containerDivElement } from "../../app.js";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { get } from "../api.js";


const myFurnitureTemplate = (data) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>My Furniture</h1>
        <p>This is a list of your publications.</p>
    </div>
</div>
<div class="row space-top">
    ${data.map(furniture => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=01.Furniture/${furniture.img.slice(1)} />
                <p>${furniture.description}</p>
                <footer>
                    <p>Price: <span>${furniture.price} $</span></p>
                </footer>
                <div>
                    <a href="/details/${furniture._id}" class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>
    `)}
</div>
`;

export async function myFurniturePage(ctx) {
    const userId = localStorage.ownerId;

    render(myFurnitureTemplate(await get(`http://localhost:3030/data/catalog?where=_ownerId%3D%22${userId}%22`)), containerDivElement);
}