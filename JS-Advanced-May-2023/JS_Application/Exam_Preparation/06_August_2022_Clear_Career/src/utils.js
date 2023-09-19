export function createSubmitHandler(callback) {
    return function(event) {
        event.preventDefault();

        const formElement = event.currentTarget;

        const formData = new FormData(formElement);

        const data = Object.fromEntries(formData.entries());

        callback(data, formElement, event);
    }
}