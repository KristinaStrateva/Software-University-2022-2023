function editElement(ref, toReplace, replacer) {
    let text = ref.textContent;
    let result = text.split(toReplace).join(replacer);

    ref.textContent = result;
}