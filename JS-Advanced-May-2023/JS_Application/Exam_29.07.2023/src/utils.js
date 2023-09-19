export function createEventHandler(onSubmit) {
    return function (event) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const data = Object.fromEntries(formData.entries());

        onSubmit(data, form);
    }
}