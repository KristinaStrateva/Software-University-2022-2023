import { render } from "./node_modules/lit-html/lit-html.js";
import page from "./node_modules/page/page.mjs";
import { get } from "./src/api.js";
import { catalogPage, catalogTemplate } from "./src/catalog.js";
import { createPage } from "./src/create.js";
import { decorateContext } from "./src/middlewares/render.js";
import { addSession } from "./src/middlewares/session.js";
import { registerAndLoginPage } from "./src/registerAndLogin.js";
import { logout } from "./src/user.js";


document.getElementById('logoutBtn').addEventListener('click', logout);


export const mainDivElement = document.getElementById('exercise');

render(catalogTemplate(await get('/data/furniture')), mainDivElement);

page(addSession);
page(decorateContext);

page('/catalog', catalogPage);
page('/registerAndLogin', registerAndLoginPage);
page('/create', createPage);

page.start();

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
