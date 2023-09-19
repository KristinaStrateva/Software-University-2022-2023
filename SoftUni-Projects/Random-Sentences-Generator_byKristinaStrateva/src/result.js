import { html } from "../node_modules/lit-html/lit-html.js";


export const resultTemplate = (sentence) => html`
<h3>Are you ready?</h3>
<h3 id="first" style="display: none">Here we go...</h3>
<h2 id="second" style="display: none">${sentence}</h2>
<a href="/home" style="display: none">Play Again</a>
`;