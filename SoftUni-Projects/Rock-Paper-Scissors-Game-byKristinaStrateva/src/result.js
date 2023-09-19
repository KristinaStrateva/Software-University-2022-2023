import { html } from "../node_modules/lit-html/lit-html.js";


export const resultTemplate = (data) => html`
<p class="res-size">You choose: <span class="purple">${data.myChoice}</span></p>
<p class="res-size">The computer chooses: <span class="purple">${data.compChoice}</span></p>
<p class="result res-size">Result: <span class="purple">${data.result}</span></p>
<a href="/home">Play Again</a>
`;