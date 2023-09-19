import { html } from "../../node_modules/lit-html/lit-html.js";
import { post } from "../api/api.js";
import { createSubmitHandler, endpoints } from "../utils.js";



const createTemplate = (onSubmit) => html`
<section id="create">
    <div class="form">
        <h2>Add item</h2>
        <form class="create-form" @submit=${onSubmit}>
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand"/>
            <input type="text" name="model" id="shoe-model" placeholder="Model"/>
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url"/>
            <input type="text" name="release" id="shoe-release" placeholder="Release date"/>
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer"/>
            <input type="text" name="value" id="shoe-value" placeholder="Value"/>
            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export async function createPage(ctx) {
    ctx.render(createTemplate(createSubmitHandler(onSubmit)));

    async function onSubmit(data, form, event) {
        if (Object.values(data).some(value => value == '')) {
            return alert('All fields are required!');
        }

        await post(endpoints.create, data);

        form.reset();

        ctx.page.redirect('/catalog');
    }
}