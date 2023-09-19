import page from './node_modules/page/page.mjs';
import { homePage } from './src/home.js';

export const mainDivElement = document.getElementById('main');

page('/index.html', '/home');
page('/home', homePage);

page.start();

//testing test