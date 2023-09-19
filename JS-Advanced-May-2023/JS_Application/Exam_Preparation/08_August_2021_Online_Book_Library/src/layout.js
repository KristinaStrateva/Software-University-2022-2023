import { html } from "../node_modules/lit-html/lit-html.js";


export const layoutTemplate = (content, userData) => html`
<header id="site-header">
    <nav class="navbar">
        <section class="navbar-dashboard">
            <a href="/catalog">Dashboard</a>
            ${!userData ? html`
            <div id="guest">
                <a class="button" href="/login">Login</a>
                <a class="button" href="/register">Register</a>
            </div>
            ` : html`
            <div id="user">
                <span>Welcome, ${userData.email}</span>
                <a class="button" href="/my-books">My Books</a>
                <a class="button" href="/create">Add Book</a>
                <a class="button" href="/logout">Logout</a>
            </div>
            `}
        </section>
    </nav>
</header>

    <main id="site-content">${content}</main>
`;

export function homePage() {
    
}