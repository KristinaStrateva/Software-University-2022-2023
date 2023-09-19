function focused() {
    const sectionsInputElements = Array.from(document.querySelectorAll('div div input'));

    sectionsInputElements.forEach(sectionInput => {
        sectionInput.addEventListener('focus', onFocus);

        function onFocus() {
            sectionInput.parentElement.classList.add("focused");
        }

        sectionInput.addEventListener('blur', onBlur);

        function onBlur() {
            sectionInput.parentElement.classList.remove("focused");
        }
    });
}