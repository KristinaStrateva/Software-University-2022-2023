// attributes will be an object

export function createElements(type, content, attributes) {
    const element = document.createElement(type);
    
    if (content) {
        if (type === 'input' || type === 'textarea') {
            element.value = content;
        } else {
            element.textContent = content;
        }
    }

    if (attributes) {
        for (const attribute of Object.keys(attributes)) {
            element.setAttribute(attribute, attributes[attribute]);
        }
    }

    return element;
}