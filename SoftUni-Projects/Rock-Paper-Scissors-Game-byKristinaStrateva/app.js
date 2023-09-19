import page from "./node_modules/page/page.mjs";
import { homePage } from "./src/layout.js";

export const mainElement = document.getElementById('main');


page('/index.html', '/home');
page('/home', homePage);

page.start();

homePage();