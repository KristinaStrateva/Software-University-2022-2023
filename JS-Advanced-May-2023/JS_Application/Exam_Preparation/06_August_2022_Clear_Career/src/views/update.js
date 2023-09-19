import { html } from "../../node_modules/lit-html/lit-html.js";
import { getById, updateOffer } from "../api/offers.js";
import { createSubmitHandler } from "../utils.js";



const updateTemplate = (data, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form class="edit-form" @submit=${onSubmit}>
            <input type="text" name="title" id="job-title" placeholder="Title" .value=${data.title} />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" .value=${data.imageUrl} />
            <input type="text" name="category" id="job-category" placeholder="Category" .value=${data.category} />
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50" .value=${data.description}></textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4" cols="50" .value=${data.requirements}></textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" .value=${data.salary} />
            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export async function editPage(ctx) {
    const offerId = ctx.params.id;

    const data = await getById(offerId);

    ctx.render(updateTemplate(data, createSubmitHandler(onSubmit)));

    async function onSubmit(data, form, event) {
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

        await updateOffer(offerId, data);

        form.reset();

        ctx.page.redirect(`/catalog/${offerId}`);
    }
}