const section = document.getElementById('homePage');
section.remove();

let ctx = null;

export function showHome(context) {
    ctx = context;

    context.showSection(section);

    section.querySelector('#getStartedLink').addEventListener('click', async (event) => {
        event.preventDefault();

        ctx.goTo('catalog');
    });
}