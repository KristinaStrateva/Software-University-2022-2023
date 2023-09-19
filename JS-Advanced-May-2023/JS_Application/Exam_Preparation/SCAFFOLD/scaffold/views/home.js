import { html } from "./node_modules/lit-html/lit-html.js";


//ToDo: Replace with actual view
const homeTemplate = () => html`
<h1>Home Page</h1>
<p>Welcome to our page</p>
`;

export async function homePage(ctx) {
    ctx.render(homeTemplate());
}