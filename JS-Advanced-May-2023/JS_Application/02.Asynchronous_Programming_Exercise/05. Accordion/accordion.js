function solution() {
    const sectionElement = document.getElementById('main');
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/articles';

    fetch(`${baseUrl}/list`)
        .then(res => res.json())
        .then(data => {
            const articlesArr = JSON.parse(JSON.stringify(data));

            for (const article of articlesArr) {
                const currId = article._id;
                const currTitle = article.title;

                const mainDivElement = document.createElement('div');
                mainDivElement.classList = 'accordion';

                const headDivElement = document.createElement('div');
                headDivElement.classList = 'head';

                const titleSpanElement = document.createElement('span');
                titleSpanElement.textContent = currTitle;

                const buttonElement = document.createElement('button');
                buttonElement.classList = 'button';
                buttonElement.id = currId;
                buttonElement.textContent = 'More';
                buttonElement.addEventListener('click', onClick);

                headDivElement.appendChild(titleSpanElement);
                headDivElement.appendChild(buttonElement);

                mainDivElement.appendChild(headDivElement);

                fetch(`${baseUrl}/details/${currId}`)
                    .then(res => res.json())
                    .then(data => {
                        const currContent = data.content;

                        const contentDivElement = document.createElement('div');
                        contentDivElement.classList = 'extra';
                        contentDivElement.style.display = 'none';

                        const pElement = document.createElement('p');
                        pElement.textContent = currContent;

                        contentDivElement.appendChild(pElement);

                        mainDivElement.appendChild(contentDivElement);
                    });

                sectionElement.appendChild(mainDivElement);
            }
        });

    function onClick(event) {
        const currButtonElement = event.currentTarget;
        const currMainDivElement = currButtonElement.parentElement.parentElement;
        const extraDivElement = currMainDivElement.querySelector('.extra');

        if (currButtonElement.textContent === 'More') {
            currButtonElement.textContent = 'Less';
            extraDivElement.style.display = 'block';

        } else {
            currButtonElement.textContent = 'More';
            extraDivElement.style.display = 'none';
        }
    }
}

solution();