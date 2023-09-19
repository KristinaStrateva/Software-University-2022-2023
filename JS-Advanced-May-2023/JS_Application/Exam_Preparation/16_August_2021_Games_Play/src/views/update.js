import { html } from "../../node_modules/lit-html/lit-html.js";
import { get, put } from "../api/api.js";
import { createEventHandler, endpoints } from "../utils.js";


const updateTemplate = (data, onSubmit) => html`
<section id="edit-page" class="auth">
    <form id="edit" @submit=${onSubmit}>
        <div class="container">
            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" value=${data.title}>
            <label for="category">Category:</label>
            <input type="text" id="category" name="category" value=${data.category}>
            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" value=${data.maxLevel}>
            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" value=${data.imageUrl}>
            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary" .value=${data.summary}></textarea>
            <input class="btn submit" type="submit" value="Edit Game">
        </div>
    </form>
</section>
`;

export async function editPage(ctx) {
    const gameId = ctx.params.id;

    const data = await get(endpoints.byId(gameId));

    ctx.render(updateTemplate(data, createEventHandler(onSubmit)));

    async function onSubmit({title, category, maxLevel, imageUrl, summary}, form, event) {
        if (
            title == '' ||
            category == '' ||
            maxLevel == '' ||
            imageUrl == '' ||
            summary == ''
        ) {
            return alert('All fields are required!');
        }

        await put(endpoints.byId(gameId), {title, category, maxLevel, imageUrl, summary});

        form.reset();

        ctx.page.redirect(`/catalog/${gameId}`);
    }
}