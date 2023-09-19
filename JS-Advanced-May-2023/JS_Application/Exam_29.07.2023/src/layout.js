import { html } from "../node_modules/lit-html/lit-html.js";


export const layoutTemplate = (userData, content) => html`
<header>
    <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt=""/></a>
        <nav>
            <div>
                <a href="/catalog">Fun Facts</a>
            </div>
            ${userData ? html`
            <div class="user">
                <a href="/create">Add Fact</a>
                <a id="logout" href="javascript:void(0)">Logout</a>
            </div>
            ` : html`
            <div class="guest">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
            `}
        </nav>
</header>

<main>
    ${content}
</main>
`;