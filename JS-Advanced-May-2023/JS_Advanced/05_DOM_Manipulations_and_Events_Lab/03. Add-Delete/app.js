function addItem() {
    const itemToAdd = document.getElementById('newItemText').value;

    const newLi = document.createElement('li');
    newLi.textContent = itemToAdd;

    const deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    deleteButton.href = '#';

    newLi.appendChild(deleteButton);

    const listElement = document.getElementById('items');
    listElement.appendChild(newLi);

    deleteButton.addEventListener('click', deleteItem);

    function deleteItem() {
        newLi.remove();
    }

    // clear the input element after adding the item in the list

    document.getElementById('newItemText').value = '';
}