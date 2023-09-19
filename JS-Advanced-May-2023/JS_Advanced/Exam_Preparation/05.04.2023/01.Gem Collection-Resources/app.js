window.addEventListener("load", solve);

function solve() {
    const gemstoneNameElement = document.getElementById('gem-name');
    const colorElement = document.getElementById('color');
    const caratsElement = document.getElementById('carats');
    const priceElement = document.getElementById('price');
    const typeElement = document.getElementById('type');
    const addButtonElement = document.getElementById('add-btn');

    addButtonElement.addEventListener('click', add);

    function add(event) {
        event.preventDefault();

        const previewListElement = document.getElementById('preview-list');

        const gemstoneName = gemstoneNameElement.value;
        const color = colorElement.value;
        const carats = caratsElement.value;
        const price = priceElement.value;
        const type = typeElement.value;

        if (
            gemstoneNameElement.value === '' ||
            colorElement.value === '' ||
            caratsElement.value === '' ||
            priceElement.value === '' ||
            typeElement.value === ''
        ) {
            return;
        }

        addButtonElement.disabled = true;

        gemstoneNameElement.value = '';
        colorElement.value = '';
        caratsElement.value = '';
        priceElement.value = '';
        typeElement.value = '';


        const newLiElement = document.createElement('li');
        newLiElement.classList = 'gem-info';

        const newArticleElement = document.createElement('article');

        const h4NameElement = createAndAppendElement('h4', '', gemstoneName, '', newArticleElement);
        const colorPElement = createAndAppendElement('p', 'Color: ', color, '', newArticleElement);
        const caratsPElement = createAndAppendElement('p', 'Carats: ', carats, '', newArticleElement);
        const pricePElement = createAndAppendElement('p', 'Price: ', price, ' $', newArticleElement);
        const typePElement = createAndAppendElement('p', 'Type: ', type, '', newArticleElement);

        // const h4NameElement = document.createElement('h4');
        // h4NameElement.textContent = `${gemstoneName}`;
        // newArticleElement.appendChild(h4NameElement);

        // const colorPElement = document.createElement('p');
        // colorPElement.textContent = `Color: ${color}`;
        // newArticleElement.appendChild(colorPElement);

        // const caratsPElement = document.createElement('p');
        // caratsPElement.textContent = `Carat: ${carats}`;
        // newArticleElement.appendChild(caratsPElement);

        // const pricePElement = document.createElement('p');
        // pricePElement.textContent = `Price: ${price} $`;
        // newArticleElement.appendChild(pricePElement);

        // const typePElement = document.createElement('p');
        // typePElement.textContent = `Type: ${type}`;
        // newArticleElement.appendChild(typePElement);

        const saveButtonElement = document.createElement('button');
        saveButtonElement.textContent = 'Save to Collection';
        saveButtonElement.classList = 'save-btn';

        const editInfoButtonElement = document.createElement('button');
        editInfoButtonElement.textContent = 'Edit Information';
        editInfoButtonElement.classList = 'edit-btn';

        const cancelButtonElement = document.createElement('button');
        cancelButtonElement.textContent = 'Cancel';
        cancelButtonElement.classList = 'cancel-btn';

        newLiElement.appendChild(newArticleElement);
        newLiElement.appendChild(saveButtonElement);
        newLiElement.appendChild(editInfoButtonElement);
        newLiElement.appendChild(cancelButtonElement);

        previewListElement.appendChild(newLiElement);

        saveButtonElement.addEventListener('click', saveInfo);
        editInfoButtonElement.addEventListener('click', editInfo);
        cancelButtonElement.addEventListener('click', cancel);

        function saveInfo(event) {
            const ulCollectionElement = document.getElementById('collection');

            const currLiElement = event.currentTarget.parentElement;
            currLiElement.remove();

            const newLiCollectionElement = document.createElement('li');

            const pElement = document.createElement('p');
            pElement.classList = 'collection-item';
            pElement.textContent = `${gemstoneName} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}`;
            newLiCollectionElement.appendChild(pElement);

            ulCollectionElement.appendChild(newLiCollectionElement);

            addButtonElement.disabled = false;
        }

        function editInfo(event) {
            const currLiElement = event.currentTarget.parentElement;

            currLiElement.remove();

            gemstoneNameElement.value = gemstoneName;
            colorElement.value = color;
            caratsElement.value = carats;
            priceElement.value = price;
            typeElement.value = type;

            addButtonElement.disabled = false;
        }

        function cancel(event) {
            const currLiElement = event.currentTarget.parentElement;

            currLiElement.remove();

            addButtonElement.disabled = false;
        }
    }

    function createAndAppendElement(element, text, content, text2, parent) {
        const newElement = document.createElement(element);
        newElement.textContent = text + content + text2;
        parent.appendChild(newElement);
    }
}