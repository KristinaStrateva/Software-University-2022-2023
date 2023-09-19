import { loadHomePage } from "./home.js";

const formELement = document.querySelector('form');

export function cancelPost(event) {
    event.preventDefault();

    document.getElementById('topicName').value = '';
    document.getElementById('username').value = '';
    document.getElementById('postText').value = '';
}

export async function postTopic(event) {
    event.preventDefault();

    try {
        const formData = new FormData(formELement);

        const title = formData.get('topicName');
        const username = formData.get('username');
        const post = formData.get('postText');

        if (
            title === '' ||
            username === '' ||
            post === ''
        ) {
            throw new Error('All fields must be non-empty!');
        }

        const bodyData = {
            title,
            username,
            post,
            date: (new Date()).toDateString()
        };

        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyData)
        };

        const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', options);

        if (!res.ok) {
            const errorMessage = (await res.json()).message;

            throw new Error(errorMessage);
        }

        document.getElementById('topicName').value = '';
        document.getElementById('username').value = '';
        document.getElementById('postText').value = '';

        loadHomePage();

    } catch (err) {
        alert(err.message);
    }
}