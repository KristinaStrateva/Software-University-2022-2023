function requestValidation(httpRequestObj) {
    const methodsArr = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versionsArr = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriRegex = /^[A-Za-z0-9.]+$/gm;
    const messageRegex = /[<>\\&'"]/gm;

    if (!httpRequestObj.hasOwnProperty('method') || !methodsArr.includes(httpRequestObj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!httpRequestObj.hasOwnProperty('uri') || !uriRegex.test(httpRequestObj.uri) || httpRequestObj.uri === '') {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!httpRequestObj.hasOwnProperty('version') || !versionsArr.includes(httpRequestObj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!httpRequestObj.hasOwnProperty('message') || messageRegex.test(httpRequestObj.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return httpRequestObj;
}

requestValidation({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});

requestValidation({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
});

requestValidation({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
});