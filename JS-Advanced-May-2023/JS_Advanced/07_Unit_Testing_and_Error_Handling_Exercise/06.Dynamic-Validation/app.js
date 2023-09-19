function validate() {
    const inputElement = document.getElementById('email');
    const regex = /^[a-z]+@[a-z]+.[a-z]+$/gm;

    inputElement.addEventListener('change', onChange);

    function onChange() {
        const addOrRemove = regex.test(inputElement.value) ? 'remove' : 'add';

        inputElement.classList[addOrRemove]('error');
    }
}