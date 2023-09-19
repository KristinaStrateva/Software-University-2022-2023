function encodeAndDecodeMessages() {
    const [encodeButton, decodeButton] = document.querySelectorAll('button');
    const [messageToEncodeElement, messageToDecodeElement] = document.querySelectorAll('#main > div textarea');

    encodeButton.addEventListener('click', encodingMessage);
    decodeButton.addEventListener('click', decodingMessage);

    function encodingMessage() {
        const messageToEncodeArr = messageToEncodeElement.value.split('');

        const encodedMessage = messageToEncodeArr.map(x => String.fromCharCode(x.charCodeAt() + 1)).join('');

        messageToEncodeElement.value = '';

        messageToDecodeElement.value = encodedMessage;
    }

    function decodingMessage() {
        const messageToDecodeArr = messageToDecodeElement.value.split('');

        const decodedMessage = messageToDecodeArr.map(x => String.fromCharCode(x.charCodeAt() - 1)).join('');

        messageToDecodeElement.value = decodedMessage;
    }
}