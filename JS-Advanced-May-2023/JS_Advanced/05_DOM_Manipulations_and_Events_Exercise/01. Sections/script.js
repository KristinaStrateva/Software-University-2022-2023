function create(words) {
   const mainDivElement = document.getElementById('content');

   words.forEach(word => {
      const newDivElement = document.createElement('div');
      const newPElement = document.createElement('p');

      newPElement.textContent = word;
      newPElement.style = 'display: none';

      newDivElement.appendChild(newPElement);

      mainDivElement.appendChild(newDivElement);
      
      newDivElement.addEventListener('click', clicked);

      function clicked() {
         newPElement.style = 'display: inline-block';
      }
   });
}