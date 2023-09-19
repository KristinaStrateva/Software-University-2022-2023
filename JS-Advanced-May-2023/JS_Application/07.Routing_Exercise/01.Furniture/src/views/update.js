import page from "../../node_modules/page/page.mjs";
import { containerDivElement } from "../../app.js";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { get, put } from "../api.js";


const updateTemplate = (data) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form id=${data._id} @submit=${onSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control" id="new-make" type="text" name="make" value=${data.make}>
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control is-valid" id="new-model" type="text" name="model" value=${data.model}>
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control is-invalid" id="new-year" type="number" name="year" value=${data.year}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control" id="new-description" type="text" name="description" value=${data.description}>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control" id="new-price" type="number" name="price" value=${data.price}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control" id="new-image" type="text" name="img" value=${data.img}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material" value=${data.material}>
            </div>
            <input type="submit" class="btn btn-info" value="Edit" />
        </div>
    </div>
</form>
`;

async function onSubmit(event) {
    event.preventDefault();

    const makeElement = document.getElementById('new-make');
    const modelElement = document.getElementById('new-model');
    const yearElement = document.getElementById('new-year');
    const descriptionElement = document.getElementById('new-description');
    const priceElement = document.getElementById('new-price');
    const imgElement = document.getElementById('new-image');
    const materialElement = document.getElementById('new-material');

    let isValid = true;

    makeElement.value.length < 4 ? validation(makeElement, false) : validation(makeElement, true); 
    modelElement.value.length < 4 ? validation(modelElement, false) : validation(modelElement, true); 
    Number(yearElement.value) < 1950 || Number(yearElement.value) > 2050 ? validation(yearElement, false) : validation(yearElement, true); 
    descriptionElement.value.length < 10 ? validation(descriptionElement, false) : validation(descriptionElement, true); 
    Number(priceElement.value) < 0 ? validation(priceElement, false) : validation(priceElement, true); 
    imgElement.value === '' ? validation(imgElement, false) : validation(imgElement, true); 

    function validation(element, bool) {
        if (!bool) {
            isValid = false;
            element.classList.remove('is-valid');
            element.classList = 'is-invalid';
        } else {
            element.classList.remove('is-invalid');
            element.classList = 'is-valid';
        }
    }

    if (!isValid) {
        throw new Error('Invalid input field!');
    }

    await put(`http://localhost:3030/data/catalog/${event.target.id}`, { 
        make: makeElement.value, 
        model: modelElement.value, 
        year: yearElement.value, 
        description: descriptionElement.value, 
        price: priceElement.value, 
        img: imgElement.value, 
        material: materialElement.value 
    });

    event.target.reset();

    page.redirect('/catalog');
}

export async function editPage(ctx) {
    const id = ctx.params.itemId;

    render(updateTemplate(await get(`http://localhost:3030/data/catalog/${id}`)), containerDivElement);
}