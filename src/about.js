// Originally I was gonna have a map and the text, but the map using google apis required associating a facturating account and since this is an exercise I removed it.
// in it's place, I put a picture.
import granny from './images/granny.jpg'; // This image was taken from internet...but I did not save who did it. It's a free image tho :(

function loadAbout (fatherContainer) {

    /* 1) we define every html element we're gonna put into the canvas */
    const aboutCanvas    = document.createElement('div');
    const pTitle1        = document.createElement('p');
    const separation     = document.createElement('hr');
    const aboutBoard     = document.createElement('div');
    const grannyContainer= document.createElement('div');
    const grannyImg      = document.createElement('img');
    const rightPart      = document.createElement('div');
    const pTitle2        = document.createElement('p');
    const pText          = document.createElement('p');
    const pMail          = document.createElement('email');

    /* 2) we put their classes */
    aboutCanvas.className    = 'inner-canvas about';
    pTitle1.className        = 'smol-text';
    aboutBoard.className     = 'about-board';
    rightPart.className      = 'about-content';
    pTitle2.className        = 'normie-text';
    pText.className          = 'normie-text';
    pMail.className          = 'normie-text email';
    grannyContainer.className= 'granny-container';
    grannyImg.className      = 'granny-img';
    
    /* 3) we put their inner text */
    pTitle1.innerText = 'About us!'; 
    pTitle2.innerText = 'You don\'t know us?\nThe cook is actually your own grandmother.\n'+
                        'That\'s right, we hired her.\nHow did you expect we replicate her food?';
    pText.innerText   = 'You can contact us with this total real e-mail: ';
    pMail.innerText   = 'yourgrannyrocks@grannyskitchen.com';
    grannyImg.src     = granny;
    


    /* 3) But it's the pelvic thrust */
    aboutCanvas.append(pTitle1, separation, aboutBoard);
    grannyContainer.append(grannyImg);
    aboutBoard.append(grannyContainer, rightPart);

    /* 4) that really drives you insane */
    rightPart.append(pTitle2,pText,pMail);
    
    /* 5) let's do the time warp again!! */
    fatherContainer.appendChild(aboutCanvas);

    //  /* 6) We init the map */
    //  window.initMap = initMap;
};

export default {loadAbout};