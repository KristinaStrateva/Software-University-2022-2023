// let titleName = '';


export async function postContent(event) {
    event.preventDefault();

    if (event.target.tagName !== 'H2') {
        return;
    }

    window.location = './theme-content.html';

    const titleNameElement = document.querySelector('.theme-name h2');
}