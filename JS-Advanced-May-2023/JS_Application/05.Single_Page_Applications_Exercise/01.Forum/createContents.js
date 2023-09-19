import { createElements } from "./utils.js";

export function creatingTopicElement(title, timeSet, username, id) {
    const divTopicNameWrapper = createElements('div', undefined, {class: 'topic-name-wrapper'});
    const divTopicName = createElements('div', undefined, {class: 'topic-name'});
    const aElement = createElements('a', undefined, {href: '#', class: 'normal'});
    const h2Element = createElements('h2', title, {'dataset.id': id});
    const firstColumnDivElement = createElements('div', undefined, {class: 'columns'});
    const secondColumnDivElement = createElements('div', undefined, undefined);
    const datePElement = createElements('p', undefined, undefined);
    datePElement.innerHTML = `Date: <time>${timeSet}</time>`;
    const nickNameDivElement = createElements('div', undefined, {class: 'nick-name'});
    const usernamePElement = createElements('p', undefined, undefined);
    usernamePElement.innerHTML = `Username: <span>${username}</span>`;

    aElement.appendChild(h2Element);
    nickNameDivElement.appendChild(usernamePElement);
    secondColumnDivElement.append(datePElement, nickNameDivElement);
    firstColumnDivElement.appendChild(secondColumnDivElement);
    divTopicName.append(aElement, firstColumnDivElement);
    divTopicNameWrapper.appendChild(divTopicName);

    return divTopicNameWrapper;
}

export function creatingPostElement(username, timeSet, postContent) {
    const headerDivElement = createElements('div', undefined, {class: 'header'});
    const imgElement = createElements('img', undefined, {src: './static/profile.png', alt: 'avatar'});
    const firstPElement = createElements('p', undefined, undefined);
    firstPElement.innerHTML = `<span>${username}</span> posted on <time>${timeSet}</time>`;
    const secondPElement = createElements('p', postContent, {class: 'post-content'});

    headerDivElement.append(imgElement, firstPElement, secondPElement);

    return headerDivElement;
}

export function creatingCommentElement(username, timeSet, commentContent) {
    const firstDivElement = createElements('div', undefined, {id: 'user-comment'});
    const secondDivElement = createElements('div', undefined, {class: 'topic-name-wrapper'});
    const thirdDivElement = createElements('div', undefined, {class: 'topic-name'});
    const firstPElement = createElements('p', undefined, undefined);
    firstPElement.innerHTML = `<strong>${username}</strong> commented on <time>${timeSet}</time>`;
    const fourthDivElement = createElements('div', undefined, {class: 'post-content'});
    const secondPElement = createElements('p', commentContent, undefined);

    fourthDivElement.appendChild(firstPElement);
    thirdDivElement.append(fourthDivElement, secondPElement);
    secondDivElement.appendChild(thirdDivElement);
    firstDivElement.appendChild(secondDivElement);

    return firstDivElement;
}