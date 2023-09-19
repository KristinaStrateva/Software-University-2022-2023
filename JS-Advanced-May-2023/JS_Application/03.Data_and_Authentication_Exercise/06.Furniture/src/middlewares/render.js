import { render } from "../../node_modules/lit-html/lit-html.js";

const mainElement = document.querySelector('main');

function ctxRender(content) {
    render(content, mainElement);
}

export async function decorateContext(ctx, next) {
    ctx.render = ctxRender;

    next();
}