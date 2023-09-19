import { html } from "../../node_modules/lit-html/lit-html.js";
import { createMeme } from "../api/meme.js";
import { createEventHandler } from "../utils.js";



const createTemplate = (onSubmit) => html`
<section id="create-meme">
    <form id="create-form" @submit=${onSubmit}>
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>
`;

export async function createPage(ctx) {
    ctx.render(createTemplate(createEventHandler(onSubmit)));

    async function onSubmit({title, description, imageUrl}, form, event) {
        if ([title, description, imageUrl].some(v => v == '')) {
            return alert('All fields are required!');
        }

        await createMeme({title, description, imageUrl});

        form.reset();
        ctx.page.redirect('/catalog');
    }
}