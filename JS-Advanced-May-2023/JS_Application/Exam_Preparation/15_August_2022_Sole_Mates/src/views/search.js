import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { get } from "../api/api.js";
import { getUserData } from "../api/sessions.js";
import { createSubmitHandler, endpoints } from "../utils.js";



const searchTemplate = (data, userData, onSubmit) => html`
<section id="search">
    <h2>Search by Brand</h2>
    <form class="search-wrapper cf" @submit=${onSubmit}>
    <input id="#search-input" type="text" name="search" placeholder="Search here..." required/>
    <button type="submit">Search</button>
    </form>
    <h3>Results:</h3>
    ${data.length != 0 ? html`
    <div id="search-container">
        <ul class="card-wrapper">
            ${data.map(shoe => html`
            <li class="card">
                <img src=${shoe.imageUrl} alt="travis" />
                <p><strong>Brand: </strong><span class="brand">${shoe.brand}</span></p>
                <p><strong>Model: </strong><span class="model">${shoe.model}</span></p>
                <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
                ${userData && data._ownerId == userData.id 
                    ? html`<a class="details-btn" href="/catalog/${shoe._id}">Details</a>` 
                    : nothing}
            </li>
            `)}
        </ul>
    </div>
        ` : html`
    <h2>There are no results found.</h2>
    `}
</section>
`;


export async function searchPage(ctx) {
    const userData = getUserData();
    
    let data = [];

    ctx.render(searchTemplate(data, userData, createSubmitHandler(onSubmit)));
    
    async function onSubmit(newData, form, event) {
        const searchedValue = newData.search;

        if (searchedValue == '') {
            return alert('You must enter valid input!');
        }

        data = await get(endpoints.shoesByBrand(searchedValue));

        form.reset();

        ctx.render(searchTemplate(data, userData, createSubmitHandler(onSubmit)));    }
}