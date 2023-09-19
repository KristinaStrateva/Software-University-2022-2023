import { loadHomePage, showHome } from "./home.js";
import { postContent } from "./postContent.js";
import { cancelPost, postTopic } from "./postTopic.js";
import { postEventData } from "./test.js";

// const homeAnchorElement = document.querySelector('a');
const [cancelButtonElement, postButtonElement] = document.querySelectorAll('button');
const postsDivElement = document.querySelector('.topic-container');

loadHomePage();
// homeAnchorElement.addEventListener('click', showHome);
postButtonElement.addEventListener('click', postTopic);
cancelButtonElement.addEventListener('click', cancelPost);
postsDivElement.addEventListener('click', postEventData);
postsDivElement.addEventListener('click', postContent);