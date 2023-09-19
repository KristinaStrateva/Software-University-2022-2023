function validate() {
    //take checkbox element and add eventListener
    const checkboxElement = document.getElementById('company');
    const companyInfoElement = document.getElementById('companyInfo');

    checkboxElement.addEventListener('change', () => {
        if (checkboxElement.checked) {
            companyInfoElement.style.display = 'block';
        } else {
            companyInfoElement.style.display = 'none';
        }
    });

    //take submit button element and add eventListener
    const submitButtonElement = document.getElementById('submit');
    submitButtonElement.addEventListener('click', submit);

    function submit(event) {
        event.preventDefault();

        let usernameIsValid = false;
        let emailIsValid = false;
        let passwordIsValid = false;
        let confirmPasswordIsValid = false;
        let companyNumberIsValid = false;

        //take field with id valid
        const validDivElement = document.getElementById('valid');

        //take username input element and check if its value is valid
        const usernameInputElement = document.getElementById('username');
        const usernameRegex = /^[A-Za-z0-9]{3,20}$/;

        if (usernameRegex.test(usernameInputElement.value)) {
            usernameIsValid = true;
        }

        //take email input element and check if its value is valid
        const emailInputElement = document.getElementById('email');
        const emailRegex = /^.*@.*\..*$/;

        if (emailRegex.test(emailInputElement.value)) {
            emailIsValid = true;
        }

        //take password and confirm-password elements and check if their values are valid
        const passwordInputElement = document.getElementById('password');
        const confirmPasswordInputElement = document.getElementById('confirm-password');
        const passwordRegex = /^[\w]{5,15}$/;

        if (passwordRegex.test(passwordInputElement.value) && passwordInputElement.value === confirmPasswordInputElement.value) {
            passwordIsValid = true;
            confirmPasswordIsValid = true;
        }

        //take company number input and check if company number's value is valid
        const companyNumberInputElement = document.getElementById('companyNumber');
        const companyNumberRegex = /^[0-9]{4}$/;

        if (checkboxElement.checked) {
            if (companyNumberRegex.test(companyNumberInputElement.value)) {
                companyNumberIsValid = true;
            }
        } else {
            companyNumberIsValid = true;
        }

        if (usernameIsValid && emailIsValid && passwordIsValid && confirmPasswordIsValid && companyNumberIsValid) {
            validDivElement.style.display = 'block';
        } else {
            validDivElement.style.display = 'none';
        }

        if (!usernameIsValid) {
            usernameInputElement.style.borderColor = 'red';
        } else {
            usernameInputElement.style.border = 'none';
        }

        if (!emailIsValid) {
            emailInputElement.style.borderColor = 'red';
        } else {
            emailInputElement.style.border = 'none';
        }

        if (!passwordIsValid) {
            passwordInputElement.style.borderColor = 'red';
        } else {
            passwordInputElement.style.border = 'none';
        }

        if (!confirmPasswordIsValid) {
            confirmPasswordInputElement.style.borderColor = 'red';
        } else {
            confirmPasswordInputElement.style.border = 'none';
        }

        if (!companyNumberIsValid) {
            companyNumberInputElement.style.borderColor = 'red';
        } else {
            companyNumberInputElement.style.border = 'none';
        }
    }
}