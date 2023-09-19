import { getStudent } from "./data/api.js";
import { rowTemplate } from "./templates/rowTemp.js";
import {render} from "./node_modules/lit-html/lit-html.js";
import { onSearch } from "./views/search.js";

const tbodyElement = document.querySelector('.container tbody');
const studentsData = Object.values(await getStudent());
const template = rowTemplate(studentsData);

render(template, tbodyElement);

const searchButtonElement = document.getElementById('searchBtn');
searchButtonElement.addEventListener('click', onSearch);