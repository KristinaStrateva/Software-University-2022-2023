import { html } from "../../node_modules/lit-html/lit-html.js";
import { createFact } from "../api/endpoints.js";
import { createEventHandler } from "../utils.js";


const createTemplate = (onSubmit) => html`
<section id="create">
    <div class="form">
    <h2>Add Fact</h2>
    <form class="create-form" @submit=${onSubmit}>
        <input type="text" name="category" id="category" placeholder="Category"/>
        <input type="text" name="image-url" id="image-url" placeholder="Image URL"/>
        <textarea id="description" name="description" placeholder="Description" rows="10" cols="50"></textarea>
        <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10" cols="50"></textarea>
        <button type="submit">Add Fact</button>
    </form>
    </div>
</section>
`;

export async function createPage(ctx) {
    ctx.render(createTemplate(createEventHandler(onSubmit)));

    async function onSubmit(data, form) {
        if (
            data.category == '' ||
            data['image-url'] == '' ||
            data.description == '' ||
            data['additional-info'] == ''
        ) {
            return alert('All fields are required!');
        }

        await createFact({
            category: data.category,
            imageUrl: data['image-url'],
            description: data.description,
            moreInfo: data['additional-info']
        });

        form.reset();
        ctx.page.redirect('/catalog');
    }
}