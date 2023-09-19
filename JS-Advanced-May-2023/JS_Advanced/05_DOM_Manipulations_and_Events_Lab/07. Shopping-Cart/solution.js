function solve() {
   let totalPrice = 0;
   let products = [];

   const productsElement = Array.from(document.querySelectorAll('.product'));
   const checkoutButtonElement = document.querySelector('.checkout');
   const textareaElement = document.getElementsByTagName('textarea')[0];

   textareaElement.removeAttribute('disabled');

   checkoutButtonElement.addEventListener('click', checkOut);

   function checkOut(event) {
      const addButtons = Array.from(document.querySelectorAll('.add-product'));

      addButtons.forEach(button => {
         button.setAttribute('disabled', true);
      });

      checkoutButtonElement.setAttribute('disabled', true);

      textareaElement.textContent += `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`;
   }
   
   productsElement.forEach(item => {
      const currProductName = item.children[1].children[0].textContent;
      const currPrice = Number(item.children[3].textContent);

      const currButtonElement = item.children[2].children[0];

      currButtonElement.addEventListener('click', added);

      function added() {
         totalPrice += currPrice;

         if (!products.includes(currProductName)) {
            products.push(currProductName);
         }

         textareaElement.textContent += `Added ${currProductName} for ${currPrice.toFixed(2)} to the cart.\n`;
      }
   });
}