function solve() {
    const addMovieContainerElement = document.getElementById('container');
    const [nameInputElement, hallInputElement, priceInputElement] = addMovieContainerElement.querySelectorAll('input');
    const onScreenButtonElement = addMovieContainerElement.querySelector('button');
    onScreenButtonElement.addEventListener('click', addMovie);
    
    const clearButtonElement = document.querySelector('#archive > button');
    clearButtonElement.addEventListener('click', clearAllMovies);
    
    
    function clearAllMovies() {
        document.querySelector('#archive ul').innerHTML = '';
    }
    
    function addMovie(event) {
        event.preventDefault();

        const movieName = nameInputElement.value;
        const hallName = hallInputElement.value;
        const price = priceInputElement.value;

        if (!movieName || !hallName || !price || isNaN(Number(price))) {
            return;
        }

        const ulMoviesElement = document.querySelector('#movies ul');

        const newLiElement = document.createElement('li');

        const spanElement = document.createElement('span');
        spanElement.textContent = movieName;
        newLiElement.appendChild(spanElement);

        const strongElementWithHallName = document.createElement('strong');
        strongElementWithHallName.textContent = `Hall: ${hallName}`;
        newLiElement.appendChild(strongElementWithHallName);

        const divElement = document.createElement('div');

        const strongElementWithPrice = document.createElement('strong');
        strongElementWithPrice.textContent = Number(price).toFixed(2);
        divElement.appendChild(strongElementWithPrice);

        const inputElement = document.createElement('input');
        inputElement.setAttribute('placeholder', 'Tickets Sold');
        divElement.appendChild(inputElement);

        const archiveButtonElement = document.createElement('button');
        archiveButtonElement.textContent = 'Archive';
        archiveButtonElement.addEventListener('click', moveToArchive);
        divElement.appendChild(archiveButtonElement);

        newLiElement.appendChild(divElement);

        ulMoviesElement.appendChild(newLiElement);

        nameInputElement.value = '';
        hallInputElement.value = '';
        priceInputElement.value = '';
    }

    function moveToArchive(event) {
        const currArchivedLiElement = event.target.parentElement.parentElement;
        const ulArchiveElement = document.querySelector('#archive ul');
        const movieName = currArchivedLiElement.querySelector('span').textContent;
        const price = currArchivedLiElement.querySelectorAll('strong')[1].textContent;
        const inputValue = currArchivedLiElement.querySelector('div input').value;

        if (isNaN(inputValue) || inputValue === '') {
            return;
        }

        const totalPrice = Number(price) * Number(inputValue);

        const newLiElement = document.createElement('li');

        const spanElement = document.createElement('span');
        spanElement.textContent = movieName;
        newLiElement.appendChild(spanElement);

        const strongElementWithTotalPrice = document.createElement('strong');
        strongElementWithTotalPrice.textContent = `Total amount: ${Number(totalPrice).toFixed(2)}`;
        newLiElement.appendChild(strongElementWithTotalPrice);

        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.textContent = 'Delete';
        deleteButtonElement.addEventListener('click', deleteMovie);
        newLiElement.appendChild(deleteButtonElement);

        ulArchiveElement.appendChild(newLiElement);

        currArchivedLiElement.remove();
    }

    function deleteMovie(event) {
        const currDeleteLiElement = event.target.parentElement;

        currDeleteLiElement.remove();
    }
}