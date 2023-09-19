import { mainDivElement } from "../app.js";
import { html, render } from "../node_modules/lit-html/lit-html.js";
import { resultTemplate } from "./result.js";


const homeTemplate = (onGenerate) => html`
<h2>You want some fun? Then you should play</h2>
<h1>RANDOM SENTENCES GENERATOR</h1>
<h4>This is a funny game that generates sentences by random words and the result can be hilaroius.</h4>
<h4>Just press the [GENERATE] button and you will laugh when you see the result :)</h4>
<button @click=${onGenerate}>GENERATE</button>
`;

function onGenerate() {
    const names = ['Georgi', 'Dayana', 'Hristina', 'Kristina', 'Elizabeth', 'grandma Isi', 'aunt Vessy', 'grandpa Gosho'];
    const places = ['Pleven', 'Dobritch', 'Varna', 'Sofia'];
    const verbs = ['plays with', 'eats', 'smells', 'dreams of'];
    const nouns = ['socks', 'unicornes', 'pizza', 'ball'];
    const adverbs = ['slowly', 'happily', 'gently', 'rapidly'];
    const details = ['at home.', 'on the clouds.', 'at the center.', 'in the forest.'];

    function getRandomWord(arr) {
        const currWord = arr[Math.floor(Math.random() * arr.length)];

        return currWord;
    }

    const randomNames = getRandomWord(names);
    const randomPlaces = getRandomWord(places);
    const randomVerbs = getRandomWord(verbs);
    const randomNouns = getRandomWord(nouns);
    const randomAdverbs = getRandomWord(adverbs);
    const randomDetails = getRandomWord(details);

    const who = `${randomNames} from ${randomPlaces}`;
    const action = `${randomAdverbs} ${randomVerbs} ${randomNouns}`;
    const sentence = `${who} ${action} ${randomDetails}`;

    render(resultTemplate(sentence), mainDivElement);

    setTimeout(() => {
        document.getElementById('first').style.display = 'block';
    }, 1300);

    setTimeout(() => {
        document.getElementById('first').style.display = 'none';
    }, 3500);
    
    setTimeout(() => {
        document.getElementById('second').style.display = 'block';
    }, 3500);

    setTimeout(() => {
        document.querySelector('a').style.display = 'block';
    }, 3500);
}

export function homePage(ctx) {
    render(homeTemplate(onGenerate), mainDivElement);
}