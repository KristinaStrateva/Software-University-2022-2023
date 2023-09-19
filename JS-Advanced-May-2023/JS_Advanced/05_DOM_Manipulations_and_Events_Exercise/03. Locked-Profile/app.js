function lockedProfile() {
    const mainElement = document.getElementById('main');

    mainElement.addEventListener('click', showMore);

    function showMore(event) {
        const clickedElement = event.target;
        const clickedDivElement = clickedElement.parentElement;
        const lockedElement = clickedDivElement.querySelectorAll('[type = "radio"]')[0];

        if (clickedElement.nodeName === 'BUTTON' && clickedElement.innerHTML === 'Show more') {
            if (lockedElement.checked) {
                return;

            } else {
                clickedDivElement.querySelector('div').style = 'display: inline-block';
                clickedElement.innerHTML = 'Hide it';
            }

        } else if (clickedElement.nodeName === 'BUTTON') {
            if (lockedElement.checked) {
                return;

            } else {
                clickedDivElement.querySelector('div').style = 'display: none';
                clickedElement.innerHTML = 'Show more';
            }
        }
    }
}