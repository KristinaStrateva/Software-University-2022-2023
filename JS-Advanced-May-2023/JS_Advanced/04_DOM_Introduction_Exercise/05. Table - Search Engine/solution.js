function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const inputElement = document.getElementById('searchField');

   function onClick() {
      const tableInfo = Array.from(document.querySelectorAll('tbody tr'));

      tableInfo.forEach(row => {
         const currTextContent = row.textContent.toLowerCase();
         const searchText = document.getElementById('searchField').value.toLowerCase().trim();

         if (currTextContent.includes(searchText)) {
            row.classList.add('select');

         } else {
            row.classList.remove('select');
         }
      });

      inputElement.value = '';
   }
}