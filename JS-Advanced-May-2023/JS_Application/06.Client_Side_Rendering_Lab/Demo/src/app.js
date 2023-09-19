import { html, render } from "../node_modules/lit-html/lit-html.js";

import { data, products } from "./data.js";

const userBlock = (user) => html`
<article class="user-block" data-id="12345">
    <span style="background-color: #74992e">Username: ${user.name}</span>
    <span>Phone Number: ${user.phone}</span>
</article>
`;

const productsTemplate = (product) => html`
<div class="product">
    <span style=${'color: ' + product.color}>Product: ${product.make}</span>
    <span>Price: $${product.price}</span>
    <input type="number" .value=${product.qty}>
    <button ?disabled=${product.qty === 0} @click=${() => buyProduct(product)}>Buy</button>
    ${product.qty === 0
        ? html`Out of stock!`
        : html`Free shipping available for premium users!`}
</div>
`;

const greatingTemplate = (name) => html`
<h2>Hello ${name}!</h2>
<p>Here is your demo:</p>
`;

const headerElement = document.querySelector('header');
const mainElement = document.querySelector('main');
const listElement = document.getElementById('products');

document.querySelector('button').addEventListener('click', () => {
    render(greatingTemplate('Kristina'), headerElement);
})

start();

function start() {
    render(greatingTemplate('Guest'), headerElement);

    render(data.map(userBlock), mainElement);

    render(products.map(productsTemplate), listElement);
}

function buyProduct(product) {
    alert(`You bought ${product.make} for $${product.price}`);
}