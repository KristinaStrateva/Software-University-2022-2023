function extensibleObject() {
    const result = {
        extend: function (template) {
            for (const property of Object.keys(template)) {
                if (typeof template[property] === 'function') {
                    Object.getPrototypeOf(result)[property] = template[property];
                } else {
                    result[property] = template[property];
                }
            }
        }
    };

    return result;
}

const myObj = extensibleObject();

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}

myObj.extend(template);