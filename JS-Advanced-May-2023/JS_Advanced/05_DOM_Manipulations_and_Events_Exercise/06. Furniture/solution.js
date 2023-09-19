function solve() {
  const [inputDataElement, outputDataElement] = document.querySelectorAll('#exercise textarea');
  const [generateButton, buyButton] = document.querySelectorAll('#exercise button');
  const table = document.querySelector('.table tbody');
  
  generateButton.addEventListener('click', generateFurnitures);
  buyButton.addEventListener('click', boughtFurnitures);

  function generateFurnitures() {
    const parsedInputData = JSON.parse(inputDataElement.value);

    parsedInputData.forEach(furnitureData => {
      const newRow = document.createElement('tr');

      const imgTd = document.createElement('td');
      const imgTag = document.createElement('img');
      imgTag.setAttribute('src', furnitureData.img);
      imgTd.appendChild(imgTag);
      newRow.appendChild(imgTd);

      const nameTd = document.createElement('td');
      nameTd.id = 'name';
      const namePTag = document.createElement('p');
      namePTag.textContent = furnitureData.name;
      nameTd.appendChild(namePTag);
      newRow.appendChild(nameTd);

      const priceTd = document.createElement('td');
      priceTd.id = 'price';
      const pricePTag = document.createElement('p');
      pricePTag.textContent = furnitureData.price;
      priceTd.appendChild(pricePTag)
      newRow.appendChild(priceTd);

      const decFactorTd = document.createElement('td');
      decFactorTd.id = 'decFactor';
      const decFactorPTag = document.createElement('p');
      decFactorPTag.textContent =furnitureData.decFactor;
      decFactorTd.appendChild(decFactorPTag);
      newRow.appendChild(decFactorTd);

      const inputTd = document.createElement('td');
      const inputTag = document.createElement('input');
      inputTag.setAttribute('type', 'checkbox');
      inputTd.appendChild(inputTag);
      newRow.appendChild(inputTd);

      table.appendChild(newRow);
    });
  }

  function boughtFurnitures() {
    let boughtFurnitures = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    const selectedFurnituresData = Array.from(table.querySelectorAll('tr input')).filter(x => x.checked);
    
    selectedFurnituresData.forEach(furnitureInput => {
      const currRowData = furnitureInput.parentElement.parentElement;

      const currFurniture = currRowData.querySelector('#name p').textContent;
      const currPrice = currRowData.querySelector('#price p').textContent;
      const currDecFactor = currRowData.querySelector('#decFactor p').textContent;

      boughtFurnitures.push(currFurniture);
      totalPrice += Number(currPrice);
      totalDecFactor += Number(currDecFactor);
    });

    let averageDecFactor = totalDecFactor / boughtFurnitures.length;

    outputDataElement.value = `Bought furniture: ${boughtFurnitures.join(', ')}\n`;
    outputDataElement.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    outputDataElement.value += `Average decoration factor: ${averageDecFactor}`;
  }
}