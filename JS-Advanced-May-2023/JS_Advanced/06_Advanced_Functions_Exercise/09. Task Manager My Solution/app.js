function solve() {
    const addButtonElement = document.getElementById('add');
    const [addSection, openSection, inProgressSection, completeSection] = document.getElementsByTagName('section');

    addButtonElement.addEventListener('click', replaceToOpen);

    function replaceToOpen(event) {
        event.preventDefault();

        const taskContent = document.getElementById('task').value;
        const descriptionContent = document.getElementById('description').value;
        const dateContent = document.getElementById('date').value;

        if (!taskContent || !descriptionContent || !dateContent) {
            return;
        }

        const openDivElement = openSection.lastElementChild;

        let article = document.createElement('article');

        let header = document.createElement('h3');
        header.textContent = taskContent;
        article.appendChild(header);

        let descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = `Description: ${descriptionContent}`;
        article.appendChild(descriptionParagraph);

        let dateParagraph = document.createElement('p');
        dateParagraph.textContent = `Due Date: ${dateContent}`;
        article.appendChild(dateParagraph);

        let divElementWithButtons = document.createElement('div');
        divElementWithButtons.classList.add('flex');

        let startButtonElement = document.createElement('button');
        startButtonElement.classList.add('green');
        startButtonElement.innerHTML = 'Start';
        divElementWithButtons.appendChild(startButtonElement);

        let deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('red');
        deleteButtonElement.innerHTML = 'Delete';
        divElementWithButtons.appendChild(deleteButtonElement);

        article.appendChild(divElementWithButtons);

        document.getElementById('task').value = '';
        document.getElementById('description').value = '';
        document.getElementById('date').value = '';

        openDivElement.appendChild(article);

        startButtonElement.addEventListener('click', replaceToInProgress);
        deleteButtonElement.addEventListener('click', deleteArticle);

        function replaceToInProgress() {
            const inProgressDivElement = inProgressSection.lastElementChild;

            startButtonElement.remove();

            const finishButtonElement = document.createElement('button');
            finishButtonElement.classList.add('orange');
            finishButtonElement.innerHTML = 'Finish';
            divElementWithButtons.appendChild(finishButtonElement);

            inProgressDivElement.appendChild(article);

            finishButtonElement.addEventListener('click', finishArticle);

        }
        
        function finishArticle() {
            const completeDivElement = completeSection.lastElementChild;

            divElementWithButtons.remove();

            completeDivElement.appendChild(article);
        }
        
        function deleteArticle() {
            article.remove();
        }
    }
}