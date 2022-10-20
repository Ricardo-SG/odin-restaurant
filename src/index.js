
/* Import section --------------------------------------------------- */
import './styles.scss'; // SCSS styles for our web
import Croquetas from './images/croquetas.jpg'; // The croquette (most important element of this web)
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
menuDiv.addEventListener('click', () => { console.log('menu-button has been pushed')});

const contactDiv = document.createElement('div');
contactDiv.className ='contact-button';
contactDiv.innerText = 'CONTACT';
contactDiv.addEventListener('click', () => { console.log('contact-button has been pushed')});

/* We append the three div-buttons to header, since we want em inside */
header.appendChild(homeDiv);
header.appendChild(menuDiv);
header.appendChild(contactDiv);

/* now, we need a canvas to display our web, it will be behind the header */
const canvas = document.createElement('div');
canvas.className = 'canvas-web';
container.appendChild(canvas);

/* under the canvas we will have a footer, which probably will hold nothing but will have some width/height akin to the header and will have some background color */
const footer = document.createElement('div');
footer.className ='footer';
footer.innerText = 'Designed by Ric for The Odin Project';
container.appendChild(footer);

loadHome();
/* This code under here will probably be exported into a module */
/* We're gonna build the home canvas now */
function loadHome () {

    /* 1) we clean the canvas */
    cleanCanvas();

    /* 2) we define every html element we're gonna put into the canvas */
    const homeCanvas   = document.createElement('div');
    const homeTitleDiv = document.createElement('div');
    const pTitle1      = document.createElement('p');
    const pTitle2      = document.createElement('p');
    const separation   = document.createElement('hr');
    const pText        = document.createElement('p');
    const myCroqueta   = document.createElement('img');
    const btnMenu      = document.createElement('button'); 
    

    /* 3) we put their classes */
    homeCanvas.className = 'inner-canvas';
    pTitle1.className    = 'big-text';
    pTitle2.className    = 'smol-text';
    pText.className      = 'normie-text';
    myCroqueta.className = 'croqueta';
    btnMenu.className    = 'button-for-menu';
    
    

    /* 4) we put their inner text */
    pTitle1.innerText = 'Welcome to'; 
    pTitle2.innerText = 'your granny\'s kitchen';
    pText.innerText   = 'Enjoy the cooking only your granny can cook';
    myCroqueta.src    = Croquetas; // not a text but a source 
    btnMenu.innerText = 'MENU';
    

    /* 5) we put their functions */
    btnMenu.onclick = loadMenu;

    /* 6) But it's the pelvic thrust */
    homeTitleDiv.append(pTitle1,pTitle2,separation,pText,myCroqueta,btnMenu);

    /* 7) that really drives you insane */
    homeCanvas.appendChild(homeTitleDiv);
    
    /* 8) let's do the time warp again!! */
    canvas.appendChild(homeCanvas);
};


function loadMenu () {
    console.log('yippi ka yei hijos de puta');
};
/*
function loadContact () {

};
*/

function cleanCanvas () {

    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}