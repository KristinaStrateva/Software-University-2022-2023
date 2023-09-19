import { creatingTopicElement } from "./createContents.js";

export async function showHome(event) {
    event.preventDefault();

    window.location = './index.html';
}

export async function loadHomePage() {
    const topicContainerDivElement = document.querySelector('.topic-container');

        Array.from(topicContainerDivElement.children).forEach(element => element.remove());

    try {
        const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');

        if (!res.ok) {
            const errorMessage = (await res.json()).message;

            throw new Error(errorMessage);
        }

        const data = await res.json();

        Object.values(data).forEach(topic => {
            topicContainerDivElement.appendChild(creatingTopicElement(topic.title, topic.date, topic.username, topic._id));
        });

    } catch (error) {
        alert(error.message);
    }
}