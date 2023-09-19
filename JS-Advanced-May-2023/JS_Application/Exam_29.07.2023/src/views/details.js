import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteFact, getAllLikes, getFactDetails, getUserLikes, like } from "../api/endpoints.js";
import { getUserData } from "../api/session.js";


const detailsTemplate = (data) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${data.factsData.imageUrl} alt="example1" />
        <p id="details-category">${data.factsData.category}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p id="description">${data.factsData.description}</p>
                <p id ="more-info">${data.factsData.moreInfo}</p>
            </div>
            <h3>Likes:<span id="likes">${data.likesAmount}</span></h3>
            <div id="action-buttons">
                ${data.canEdit ? html`
                <a href="/catalog/${data.factId}/edit" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${data.onDelete}>Delete</a>
                ` : nothing}
            
                ${data.canLike ? html`
                <a href="javascript:void(0)" id="like-btn" @click=${data.onLike}>Like</a>
                ` : nothing}
            </div>
        </div>
    </div>
</section>
`;


export async function detailsPage(ctx) {
    const factId = ctx.params.id;
    const factsData = await getFactDetails(factId);
    let canLike = false;
    let canEdit = false;

    const userData = await getUserData();

    if (userData && userData._id !== factsData._ownerId) {
        canLike = await getUserLikes(factId, userData._id) == 0;
    }

    if (userData) {
        canEdit = userData._id == factsData._ownerId;
    }

    const likesAmount = await getAllLikes(factId);

    const data = {
        factId,
        factsData,
        canLike,
        canEdit,
        likesAmount,
        onDelete,
        onLike
    }

    ctx.render(detailsTemplate(data));

    async function onDelete() {
        const conformation = confirm('Are you sure you want to delete this offer?');

        if (conformation) {
            await deleteFact(factId);

            ctx.page.redirect('/catalog');
        }
    }

    async function onLike() {
        await like({factId});

        ctx.page.redirect(`/catalog/${factId}`);
    }
}