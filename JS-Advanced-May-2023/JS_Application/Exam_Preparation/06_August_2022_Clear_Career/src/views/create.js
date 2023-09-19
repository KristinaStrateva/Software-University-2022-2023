import page from "../../node_modules/page/page.mjs";
import { html } from "../../node_modules/lit-html/lit-html.js";
import { createOffer } from "../api/offers.js";
import { createSubmitHandler } from "../utils.js";



const createTemplate = (onSubmit) => html`
<section id="create">
    <div class="form">
        <h2>Create Offer</h2>
        <form class="create-form" @submit=${onSubmit}>
            <input type="text" name="title" id="job-title" placeholder="Title"/>
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url"/>
            <input type="text" name="category" id="job-category" placeholder="Category"/>
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4" cols="50"></textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary"/>
            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

async function onSubmit(data, form) {
    if (
        data.title === '' ||
        data.imageUrl === '' ||
        data.category === '' ||
        data.description === '' ||
        data.requirements === '' ||
        data.salary === ''
    ) {
        return alert('All fields are required!');
    }

    await createOffer(data);
    form.reset();
    page.redirect('/catalog');
}

export async function createPage(ctx) {
    ctx.render(createTemplate(createSubmitHandler(onSubmit)));
}