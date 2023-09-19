export function dom(tagName, attributes = {}, ...content) {
    const element = document.createElement(tagName);

    for (const propName in attributes) {
        if (propName === 'dataset') {
            for (const dataItem in attributes.dataset) {
                element.dataset[dataItem] = attributes.dataset[dataItem];
            }

        } else if (propName === 'style') {
            for (const styleItem in attributes.style) {
                element.style[styleItem] = attributes.style[styleItem];
            }

        } else if (propName.startsWith('on')) {
            const eventType = propName.slice(2).toLocaleLowerCase();

            element.addEventListener(eventType, attributes[propName]);

        } else {
            element[propName] = attributes[propName];
        }
    }

    for (const item of content) {
        element.append(item);
    }

    return element;
}