import { updateNav } from "../../app.js";
import page from "../../node_modules/page/page.mjs";
import { logout } from "../api.js";

export async function logoutPage(ctx) {
    await logout('http://localhost:3030/users/logout');

    localStorage.clear();

    updateNav();

    page.redirect('/catalog');
}