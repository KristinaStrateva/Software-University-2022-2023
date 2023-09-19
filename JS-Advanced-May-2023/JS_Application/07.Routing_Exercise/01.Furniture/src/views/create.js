import page from "../../node_modules/page/page.mjs";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { post } from "../api.js";
import { containerDivElement } from "../../app.js";


const createTemplate = () => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Create New Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control valid" id="new-make" type="text" name="make">
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control is-valid" id="new-model" type="text" name="model">
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control is-invalid" id="new-year" type="number" name="year">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control" id="new-description" type="text" name="description">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control" id="new-price" type="number" name="price">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control" id="new-image" type="text" name="img">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material">
            </div>
            <input type="submit" class="btn btn-primary" value="Create" />
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

    await post('http://localhost:3030/data/catalog', { 
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

export function createPage(ctx) {
    render(createTemplate(), containerDivElement);
}