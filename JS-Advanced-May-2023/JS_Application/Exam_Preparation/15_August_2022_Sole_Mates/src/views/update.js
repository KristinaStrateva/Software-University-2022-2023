import { html } from "../../node_modules/lit-html/lit-html.js";
import { get, putById } from "../api/api.js";
import { createSubmitHandler, endpoints } from "../utils.js";



const updateTemplate = (data, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form class="edit-form" @submit=${onSubmit}>
            <input type="text" name="brand" id="shoe-brand" .value=${data.brand} placeholder="Brand"/>
            <input type="text" name="model" id="shoe-model" .value=${data.model} placeholder="Model"/>
            <input type="text" name="imageUrl" id="shoe-img" .value=${data.imageUrl} placeholder="Image url"/>
            <input type="text" name="release" id="shoe-release" .value=${data.release} placeholder="Release date"/>
            <input type="text" name="designer" id="shoe-designer" .value=${data.designer} placeholder="Designer"/>
            <input type="text" name="value" id="shoe-value" .value=${data.value} placeholder="Value"/>
            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export async function editPage(ctx) {
    const shoeId = ctx.params.id;

    const data = await get(endpoints.byId(shoeId));

    ctx.render(updateTemplate(data, createSubmitHandler(onSubmit)));

    async function onSubmit(newData, form, event) {
        if (Object.values(newData).some(value => value == '')) {
            return alert('All fields are required!');
        }

        await putById(endpoints.byId(shoeId), newData);

        form.reset();

        ctx.page.redirect(`/catalog/${shoeId}`);
    }
}