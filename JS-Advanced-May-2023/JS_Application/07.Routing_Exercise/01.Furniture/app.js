import { render } from "./node_modules/lit-html/lit-html.js";
import page from "./node_modules/page/page.mjs";
import { get } from "./src/api.js";
import { catalogPage, catalogTemplate } from "./src/views/catalog.js";
import { createPage } from "./src/views/create.js";
import { detailsPage } from "./src/views/details.js";
import { loginPage } from "./src/views/login.js";
import { logoutPage } from "./src/views/logout.js";
import { myFurniturePage } from "./src/views/myFurniture.js";
import { registerPage } from "./src/views/register.js";
import { editPage } from "./src/views/update.js";

export const containerDivElement = document.querySelector('.container');

page('/login', loginPage);
page('/catalog', catalogPage);
page('/register', registerPage);
page('/create', createPage);
page('/my-publications', myFurniturePage);
page('/details/:detailsId', detailsPage);
page('/details/:detailsId/edit/:itemId', editPage)
page.start();

document.getElementById('logoutBtn').addEventListener('click', logoutPage);

export function updateNav() {
    const userDivElement = document.getElementById('user');
    const guestDivElement = document.getElementById('guest');

    if (localStorage.length === 0) {
        userDivElement.style.display = 'none';
        guestDivElement.style.display = 'inline';

    } else {
        userDivElement.style.display = 'inline';
        guestDivElement.style.display = 'none';
    }
}

updateNav();

render(catalogTemplate(await get('http://localhost:3030/data/catalog')), containerDivElement);