import { html, render } from './node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

const townsDivElement = document.getElementById('towns');

const townsTemplate = html`
<ul>
   ${towns.map(town => html`<li id="${town}">${town}</li>`)}
</ul>
`;

render(townsTemplate, townsDivElement);

document.querySelector('button').addEventListener('click', search);

function search() {
   const value = document.getElementById('searchText').value;

   const result = towns.filter(town => {
      if (town.includes(value)) {
         document.getElementById(town).classList = 'active';
         return town;
      } else {
         document.getElementById(town).classList.remove('active');
      }
   });

   document.getElementById('result').textContent = `${result.length} matches found`;
}