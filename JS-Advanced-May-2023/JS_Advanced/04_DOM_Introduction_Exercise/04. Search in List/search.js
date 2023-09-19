function search() {
   const towns = Array.from(document.querySelectorAll('#towns li'));
   const searchElement = document.getElementById('searchText');
   const resultElement = document.getElementById('result');

   let matches = 0;

   towns.forEach(town => {
      if (town.textContent.includes(searchElement.value)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;

      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   });

   resultElement.textContent = `${matches} matches found`;
}