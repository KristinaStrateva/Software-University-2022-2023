function solve() {
    const taskElement = document.querySelector('#task');
    const descriptionElement = document.querySelector('#description');
    const dateElement = document.querySelector('#date');
    const addButtonElement = document.querySelector('#add');
    const [addSection, openSection, inProgressSection, completeSection] = document.querySelectorAll('section');

    addButtonElement.addEventListener('click', replaceToOpen);

    function replaceToOpen(event) {
        event.preventDefault();

        if (taskElement.value.trim() === '' || descriptionElement.value.trim() === '' || dateElement.value.trim() === '') {
            return;
        }

        const article = document.createElement('article');

        const header = document.createElement('h3');
        header.textContent = taskElement.value;

        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = `Description: ${descriptionElement.value}`;

        const dateParagraph = document.createElement('p');
        dateParagraph.textContent = `Due Date: ${dateElement.value}`;

        const divElementWithButtons = document.createElement('div');
        divElementWithButtons.classList.add('flex');

        const startButtonElement = document.createElement('button');
        startButtonElement.classList.add('green');
        startButtonElement.textContent = 'Start';
        startButtonElement.addEventListener('click', replaceToInProgress);
        
        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('red');
        deleteButtonElement.textContent = 'Delete';
        deleteButtonElement.addEventListener('click', deleteArticle);
        
        divElementWithButtons.appendChild(startButtonElement);
        divElementWithButtons.appendChild(deleteButtonElement);
        article.appendChild(header);
        article.appendChild(descriptionParagraph);
        article.appendChild(dateParagraph);
        article.appendChild(divElementWithButtons);
        openSection.lastElementChild.appendChild(article);

        document.getElementById('task').value = '';
        document.getElementById('description').value = '';
        document.getElementById('date').value = '';

        function deleteArticle() {
            article.remove();
        }

        function replaceToInProgress() {
            startButtonElement.remove();

            const finishButtonElement = document.createElement('button');
            finishButtonElement.classList.add('orange');
            finishButtonElement.textContent = 'Finish';
            finishButtonElement.addEventListener('click', finishArticle);

            divElementWithButtons.appendChild(finishButtonElement);

            inProgressSection.lastElementChild.appendChild(article);
        }

        function finishArticle() {
            divElementWithButtons.remove();

            completeSection.lastElementChild.appendChild(article);
        }
    }
}