import page from "../../node_modules/page/page.mjs";
import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteOffer, getById } from "../api/offers.js";
import { getUserData } from "../api/session.js";
import { apply, getApplicationAmount, getUserApplyment } from "../api/applications.js";


const detailsTemplate = (data, applicationsAmount, userData, eventHandlers, canApply) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${data.imageUrl} alt="example1" />
        <p id="details-title">${data.title}</p>
        <p id="details-category">Category: <span id="categories">${data.category}</span></p>
        <p id="details-salary">Salary: <span id="salary-number">${data.salary}</span></p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${data.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${data.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">${applicationsAmount}</strong></p>
            ${userData ? html`
        <div id="action-buttons">
            ${data._ownerId === userData._id ? html`
            <a href="/details/${data._id}/edit/${data._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${eventHandlers.onDelete}>Delete</a>
            ` : nothing}
            ${canApply && data._ownerId !== userData._id ? html`
            <a href="javascript:void(0)" id="apply-btn" @click=${eventHandlers.onApply}>Apply</a>
            ` : nothing}
        </div>
        ` : nothing}
    </div>
</section>
`;

export async function detailsPage(ctx) {
    const userData = getUserData();
    const offerId = ctx.params.id;
    const data = await getById(offerId);

    const applicationsAmount = await getApplicationAmount(offerId);

    const eventHandlers = {
        onDelete,
        onApply
    }

    let canApply = false;

    if (userData) {
        canApply = await getUserApplyment(offerId, userData._id) == 0;
    }

    ctx.render(detailsTemplate(data, applicationsAmount, userData, eventHandlers, canApply));

    async function onDelete() {
        const toDelete = confirm('Are you sure you want to delete this offer?');
    
        if (toDelete) {
            await deleteOffer(offerId);
        
            ctx.page.redirect('/catalog');
        }
    }

    async function onApply() {
        await apply(offerId);

        ctx.page.redirect(`/catalog/${offerId}`);
    }
}
