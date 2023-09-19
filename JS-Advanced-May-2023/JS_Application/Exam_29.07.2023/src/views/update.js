import { html } from "../../node_modules/lit-html/lit-html.js";
import { getFactDetails, updateFact } from "../api/endpoints.js";
import { createEventHandler } from "../utils.js";


const updateTemplate = (data, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Fact</h2>
        <form class="edit-form" @submit=${onSubmit}>
            <input type="text" name="category" id="category" .value=${data.category} placeholder="Category"/>
            <input type="text" name="image-url" id="image-url" .value=${data.imageUrl} placeholder="Image URL"/>
            <textarea id="description" name="description" .value=${data.description} placeholder="Description" rows="10" cols="50"></textarea>
            <textarea id="additional-info" name="additional-info" .value=${data.moreInfo} placeholder="Additional Info" rows="10" cols="50"></textarea>
            <button type="submit">Post</button>
        </form>
    </div>
</section>
`;

export async function editPage(ctx) {
    const factId = ctx.params.id;

    const data = await getFactDetails(factId);

    ctx.render(updateTemplate(data, createEventHandler(onSubmit)));

    async function onSubmit(newData, form) {
        if (
            newData.category == '' ||
            newData['image-url'] == '' ||
            newData.description == '' ||
            newData['additional-info'] == ''
        ) {
            return alert('All fields are required!');
        }

        const category = newData.category;
        const imageUrl = newData['image-url'];
        const description = newData.description;
        const moreInfo = newData['additional-info'];

        await updateFact(factId, { category, imageUrl, description, moreInfo });

        form.reset();

        ctx.page.redirect(`/catalog/${factId}`);
    }
}