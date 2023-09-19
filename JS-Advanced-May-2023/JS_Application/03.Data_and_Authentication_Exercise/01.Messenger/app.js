let textareaElement = document.getElementById('messages');
const [nameInputElement, messageInputElement, sendButtonElement, refreshButtonElement] = document.querySelectorAll('#controls input');
const baseUrl = 'http://localhost:3030/jsonstore/messenger';

function attachEvents() {
    sendButtonElement.addEventListener('click', onSend);
    refreshButtonElement.addEventListener('click', loadMessages);

    loadMessages();
}

attachEvents();

function loadMessages() {
    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            const messagesArr = Object.values(data);

            textareaElement.value = messagesArr.map(msg => `${msg.author}: ${msg.content}`).join('\n');
        });
}

function onSend() {
    const authorName = nameInputElement.value;
    const messageText = messageInputElement.value;

    const options = createOptions('post', { author: authorName, content: messageText });

    fetch(baseUrl, options)
        .then(res => res.json())
        .then(data => {
            nameInputElement.value = '';
            messageInputElement.value = '';

            textareaElement.value += `\n${authorName}: ${messageText}`;
        })
        .catch(err => {
            console.log(err);
        })
}

function createOptions(method, inputsData) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputsData)
    }

    return options;
}