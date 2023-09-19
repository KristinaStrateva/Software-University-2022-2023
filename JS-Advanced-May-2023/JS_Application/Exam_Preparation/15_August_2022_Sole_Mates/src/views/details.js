import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteById, get } from "../api/api.js";
import { getUserData } from "../api/sessions.js";
import { endpoints } from "../utils.js";


const detailsTemplate = (data, canEdit, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src=${data.imageUrl} alt="example1"/>
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${data.brand}</span></p>
            <p>Model: <span id="details-model">${data.model}</span></p>
            <p>Release date: <span id="details-release">${data.release}</span></p>
            <p>Designer: <span id="details-designer">${data.designer}</span></p>
            <p>Value: <span id="details-value">${data.value}</span></p>
        </div>
            ${canEdit ? html`
            <div id="action-buttons">
                <a href="/catalog/${data._id}/edit" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
            </div>
            ` : nothing}
    </div>
</section>
`;

export async function detailsPage(ctx) {
    const shoeId = ctx.params.id;

    const data = await get(endpoints.byId(shoeId));
    const userData = getUserData();

    let canEdit = false;

    if (userData) {
        data._ownerId == userData._id ? canEdit = true : canEdit = false;
    }

    ctx.render(detailsTemplate(data, canEdit, onDelete));

    async function onDelete(event) {
        const toDelete = confirm('Are you sure you want to delete this item?');

        if (toDelete) {
            deleteById(endpoints.byId(shoeId));

            ctx.page.redirect('/catalog');
        }
    }
}