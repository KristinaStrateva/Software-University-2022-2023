import { mainElement } from "../app.js";
import { html, render } from "../node_modules/lit-html/lit-html.js";
import { resultTemplate } from "./result.js";

export const layoutTemplate = (onSubmit) => html`
<h1 class="center">You are playing Rock Paper Scissors</h1>
<p class="center paragraph">The image above illustrates the rules of the game</p>
<div class="center">
    <img src="../image/rock-paper-scissors-game-rules.png" class="img"/>
</div>
<p class="center paragraph">Here are short instructions:</p>
<ul class="center list">
    <li>For Rock write in the input "r" or "rock"</li>
    <li>For Paper write in the input "p" or "paper"</li>
    <li>For Scissors write in the input "s" or "scissors"</li>
    <li>The computer's choice will generate automaticaly</li>
</ul>
<form @submit=${onSubmit} class="center">
    <label>Enter your choice <input type="text" name="choice" placeholder="Write your choice here"/></label>
    <button>Play</button>
</form>
`;

export function onSubmit(event) {
    event.preventDefault();

    const formElement = event.currentTarget;

    let myChoice = document.querySelector('input').value;
    const compRandomNumber = Math.floor(Math.random() * 3) + 1;
    let compChoice = '';

    if (myChoice === 'r' || myChoice === 'rock') {
        myChoice = 'Rock';
    } else if (myChoice === 'p' || myChoice === 'paper') {
        myChoice = 'Paper';
    } else if (myChoice === 's' || myChoice === 'scissors') {
        myChoice = 'Scissors';
    } else {
        formElement.reset();
        return alert('Invalid input. Try Again...');
    }

    if (compRandomNumber === 1) {
        compChoice = 'Rock';
    } else if (compRandomNumber === 2) {
        compChoice = 'Paper';
    } else if (compRandomNumber === 3) {
        compChoice = 'Scissors';
    }

    const data = {
        myChoice,
        compChoice
    }

    if ((myChoice === 'Rock' &&compChoice === 'Scissors') || (myChoice === 'Paper' &&compChoice === 'Rock') || (myChoice === 'Scissors' &&compChoice === 'Paper')) {
        data.result = 'You win!';
    } else if ((myChoice === 'Rock' &&compChoice === 'Paper') || (myChoice === 'Paper' &&compChoice === 'Scissors') || (myChoice === 'Scissors' &&compChoice === 'Rock')) {
        data.result = 'You lose!';
    } else {
        data.result = 'This game was a draw!';
    }

    render(resultTemplate(data), mainElement);
}

export function homePage(ctx) {
    render(layoutTemplate(onSubmit), mainElement);
}