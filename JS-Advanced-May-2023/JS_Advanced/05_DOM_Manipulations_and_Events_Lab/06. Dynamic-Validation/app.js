function validate() {
    const validationInputElement = document.getElementById('email');

    validationInputElement.addEventListener('change', validationEmail);

    function validationEmail() {
        const inputEmail = validationInputElement.value;

        const isValid = inputEmail.match(/^[a-z]+@[a-z]+\.[a-z]+$/);

        if (isValid) {
            validationInputElement.classList.remove('error');

        } else {
            validationInputElement.classList.add('error');
        }

    }
}