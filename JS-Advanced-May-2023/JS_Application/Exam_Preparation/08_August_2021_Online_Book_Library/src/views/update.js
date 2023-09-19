import { html } from "../../node_modules/lit-html/lit-html.js";
import { getById, post, putById } from "../api/api.js";
import { createSubmitHandler, endpoints } from "../utils.js";



const updateTemplate = (book, onSubmit) => html`
<section id="edit-page" class="edit">
    <form id="edit-form" action="#" method="" @submit=${onSubmit}>
        <fieldset>
            <legend>Edit my Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" value=${book.title}>
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description">${book.description}</textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" value=${book.imageUrl}>
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" value=${book.type}>
                        <option value="Fiction" selected>Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>
`;



export async function updatePage(ctx) {
    const bookId = ctx.params.id;
    const bookData = await getById(endpoints.byId, bookId);

    ctx.render(updateTemplate(bookData, createSubmitHandler(onSubmit)));

    async function onSubmit({title, description, imageUrl, type}, form, event) {
        if (
            title == '' ||
            description == '' ||
            imageUrl == '' ||
            type == ''
        ) {
            return alert('All fields are required!');
        }
    
        await putById(endpoints.byId, bookId, {title, description, imageUrl, type});

        form.reset();

        ctx.page.redirect(`/catalog/${bookId}`);
    }
}