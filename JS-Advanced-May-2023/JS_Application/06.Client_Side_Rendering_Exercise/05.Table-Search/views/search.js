export function onSearch() {
   const tbodyRows = Array.from(document.querySelector('tbody').children);
   const inputElement = document.getElementById('searchField');
   const searchedPart = inputElement.value;

   tbodyRows.forEach(tr => {
      tr.classList.remove('select');

      if (tr.textContent.includes(searchedPart)) {
         tr.classList = 'select';
      }

      if (tr.textContent.toLowerCase().includes(searchedPart)) {
         tr.classList = 'select';
      }

      if (tr.textContent.toUpperCase().includes(searchedPart)) {
         tr.classList = 'select';
      }

      /*
         Alternative way of solution instead of the three ifs above

         Array.from(tr.children).forEach(td => {
            if (td.textContent.includes(searchedPart)) {
               tr.classList = 'select';
            }

            if (td.textContent.toUpperCase().includes(searchedPart)) {
               tr.classList = 'select';
            }

            if (td.textContent.toLowerCase().includes(searchedPart)) {
               tr.classList = 'select';
            }
         });

      */
   });

   inputElement.value = '';
}