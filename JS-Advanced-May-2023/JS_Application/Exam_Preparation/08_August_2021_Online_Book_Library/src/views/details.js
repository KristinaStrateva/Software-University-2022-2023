import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { delById, get, getById, post } from "../api/api.js";
import { getUserData } from "../api/sessions.js";
import { endpoints } from "../utils.js";



const detailsTemplate = (data) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${data.bookData.title}</h3>
        <p class="type">Type: ${data.bookData.type}</p>
        <p class="img"><img src=${data.bookData.imageUrl}></p>
        <div class="actions">
            ${data.canEdit ? html`
            <a class="button" href="/catalog/${data.bookId}/edit/${data.bookId}">Edit</a>
            <a class="button" href="javascript:void(0)" @click=${data.onDelete}>Delete</a>
            ` : nothing}
            ${data.canLike ? html`
            <a class="button" href="javascript:void(0)" @click=${data.onLike}>Like</a>
            ` : nothing}
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${data.likesAmount}</span>
            </div>
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${data.bookData.description}</p>
    </div>
</section>
`;


export async function detailsPage(ctx) {
    const bookId = ctx.params.id;
    const bookData = await getById(endpoints.byId, bookId);
    let canLike = false;
    let canEdit = false;

    const userData = await getUserData();

    if (userData) {
        canEdit = userData._id == bookData._ownerId;
    }

    if (userData && userData._id !== bookData._ownerId) {
        canLike = await get(endpoints.userLike(bookId, userData._id)) == 0;
    }

    const likesAmount = await get(endpoints.likesAmount(bookId));

    const data = {
        bookId,
        bookData,
        canLike,
        canEdit,
        likesAmount,
        onDelete,
        onLike
    }

    ctx.render(detailsTemplate(data));

    async function onDelete() {
        const toDelete = confirm('Are you sure you want to delete this offer?');

        if (toDelete) {
            await delById(endpoints.byId, bookId);

            ctx.page.redirect('/catalog');
        }
    }

    async function onLike() {
        await post(endpoints.addLike, {bookId});

        ctx.page.redirect(`/catalog/${bookId}`);
    }
}
