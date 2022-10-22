
/* Import section --------------------------------------------------- */
import './styles.scss'; // SCSS styles for our web
import HomePage  from './home.js';
import MenuPage  from './menu.js';
import AboutPage from './about.js';
/* ------------------------------------------------------------------ */
/* We retrieve the container, that will hold all our web */
const container = document.getElementById('container');


/* For the header, we're gonna make a div that will contain three divs, each of em will be used to move the user between the web  */
const header = document.createElement('div');
header.className = 'header';
container.appendChild(header);

/* The three divs inside the header */
const homeDiv = document.createElement('div');
homeDiv.className = 'home-button';
homeDiv.innerText = 'HOME';
homeDiv.addEventListener('click', loadHome);

const menuDiv = document.createElement('div');
menuDiv.className = 'menu-button';
menuDiv.innerText = 'MENU';
menuDiv.addEventListener('click', loadMenu);

const aboutDiv = document.createElement('div');
aboutDiv.className ='about-button';
aboutDiv.innerText = 'ABOUT US';
aboutDiv.addEventListener('click', loadAbout);

/* We append the three div-buttons to header, since we want em inside */
header.appendChild(homeDiv);
header.appendChild(menuDiv);
header.appendChild(aboutDiv);

/* now, we need a canvas to display our web, it will be behind the header */
const canvas = document.createElement('div');
container.appendChild(canvas);

/* under the canvas we will have a footer, which probably will hold nothing but will have some width/height akin to the header and will have some background color */
const footer = document.createElement('div');
footer.className ='footer';
footer.innerText = 'Designed by Ric for The Odin Project';
container.appendChild(footer);

loadAbout(canvas);

// Index.js functions
function cleanCanvas () {

    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

function loadHome() {
    console.log('<index.js loadHome>');
    console.log(canvas);
    cleanCanvas();
    canvas.className = 'canvas-web home';
    HomePage.loadHome(canvas, loadMenu);
}

function loadMenu () {
    console.log('<index.js loadMenu>');
    console.log(canvas);
    cleanCanvas();
    canvas.className = 'canvas-web menu';
    MenuPage.loadMenu(canvas);
};

function loadAbout () {
    console.log('<index.js loadAbout>');
    console.log(canvas);
    cleanCanvas();
    canvas.className = 'canvas-web about';
    AboutPage.loadAbout(canvas);
};

