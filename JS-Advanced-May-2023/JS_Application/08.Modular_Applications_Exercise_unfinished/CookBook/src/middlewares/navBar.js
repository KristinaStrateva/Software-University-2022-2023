const userDivElement = document.getElementById('user');
const guestDivElement = document.getElementById('guest');

const links = {
    '/catalog': document.getElementById('catalogLink'),
    '/create': document.getElementById('createLink'),
    '/login': document.getElementById('loginLink'),
    '/register': document.getElementById('registerLink')
};

export function updateNav(ctx, next) {
    Object.values(links).forEach(link => link.classList.remove('active'));

    const currLink = links[ctx.pathname];

    if (currLink) {
        currLink.classList = 'active';
    }

    if (ctx.user) {
        userDivElement.style.display = 'inline-block';
        guestDivElement.style.display = 'none';
    } else {
        userDivElement.style.display = 'none';
        guestDivElement.style.display = 'inline-block';
    }

    next();
}