function addItem() {
    const itemToAdd = document.getElementById('newItemText').value;

    const newLi = document.createElement('li');
    newLi.textContent = itemToAdd;

    const listElement = document.getElementById('items');
    listElement.appendChild(newLi);

    // clear the input element after adding the item in the list

    document.getElementById('newItemText').value = '';
}