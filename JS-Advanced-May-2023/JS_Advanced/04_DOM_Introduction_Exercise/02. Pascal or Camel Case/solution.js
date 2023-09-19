function solve() {
  const textToConvert = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;

  const resultElement = document.getElementById('result');

  if (convention === 'Camel Case') {
    resultElement.textContent = camelCase(textToConvert);

  } else if (convention === 'Pascal Case') {
    resultElement.textContent = pascalCase(textToConvert);

  } else {
    resultElement.textContent = 'Error!';
  }

  function pascalCase(text) {
    return text.split(' ').map(x => x[0].toUpperCase() + x.slice(1).toLowerCase()).join('');
  }

  function camelCase(text) {
    return pascalCase(text)[0].toLowerCase() + pascalCase(text).slice(1);
  }
}