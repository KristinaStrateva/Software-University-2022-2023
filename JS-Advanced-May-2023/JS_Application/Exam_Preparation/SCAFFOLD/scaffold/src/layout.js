import { html } from "../node_modules/lit-html/lit-html.js";



//ToDo: Replace with actual layout

export const layoutTemplate = (userData, content) => html`
<nav>
    <a href="/">Home<a/>
    ${userData ? html`
        <a href="/create">Create</a>
        <a href="javascript:void(0)">Logout</a>
        ` : html`
        <a href="/login">Login</a>
        <a href="/register">Register</a>`}
</nav>
<main>
    ${content}
</main>
`;