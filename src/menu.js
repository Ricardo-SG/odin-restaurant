import Croquetas from './images/croquetas_resized.jpg'; // This image was taken from internet...but I did not save who did it. It's a free image tho :(
import Tortilla  from './images/tortilla_resized.jpg'; // This image was taken from internet...but I did not save who did it. It's a free image tho :(
import Cachopo   from './images/cachopo_resized.jpg'; // This image was taken by me in Llanes, Asturias.
import Chuleton  from './images/chuleton_resized.jpg'; // This image was taken by me in León, Castilla y León.
import Gambas    from './images/gambas_resized.jpg'; // This image was taken by me in Llanes, Asturias.
import Paella    from './images/paella_resized.jpg'; // This image was taken by me in my own kitchen, yup, I cooked this little baby. I'm also VERY single. So ladies and millionaire gentleman, hit me up if you wanna taste it.

/* To generate each card containing our menu we're gonna define first an array with all our dishes */
const Dish = (title, image, description) => {
    return {title, image, description};
};
const dishes = [
    /* Croquetas */
    Dish('Croquetas', Croquetas, 'What niece doesn\'t love her granny croquettes?'),
    /* Tortilla  */
    Dish('Tortilla',  Tortilla,  'Her second best dish, the Tortilla. With onion. As all things should be.'),
    /* Gambas    */
    Dish('Gambas',    Gambas,    'Our yummy little shrimps, tastyness is magic.'),
    /* Paella    */
    Dish('Paella',    Paella,    'You\'re favorite food. You\'re granny speciality. The only and one Paella'),    
    /* Chuleton  */
    Dish('Chuleton',  Chuleton,  'Best meat you have ever tasted'),
    /* Cachopo   */
    Dish('Cachopo',   Cachopo,   'The asturian speciality, you can fatten 10 kilos just by looking at this.')
];

/* This code under here will probably be exported into a module */
/* We're gonna build the home canvas now */
function loadMenu (fatherContainer) {

    /* 1) we define every html element we're gonna put into the canvas */
    const menuCanvas   = document.createElement('div');
    const pTitle1      = document.createElement('p');
    //const separation   = document.createElement('hr');
    const cardCanvas   = document.createElement('div');
    /* Since we want to dynamically generate the cards, we'll do that stuff later */
    
    /* 2) we put their classes */
    menuCanvas.className    = 'inner-canvas menu';
    pTitle1.className       = 'big-text';
    cardCanvas.className    = 'card-canvas';

    /* 3) we put their inner text */
    pTitle1.innerText = 'Choose your delish:'; 
    
    /* 4) But it's the pelvic thrust */
    //menuCanvas.append(pTitle1,separation,cardCanvas);
    menuCanvas.append(pTitle1,cardCanvas);

    /* 5) that really drives you insane */
    generateCardMenu(cardCanvas); /* it appends every card food to cardCanvas */
    
    /* 6) let's do the time warp again!! */
    fatherContainer.appendChild(menuCanvas);
    
}

function generateCardMenu(canvas) {

    dishes.forEach ((dish) => {

        /* 1) We create the html elements */
        const card         = document.createElement('div');
        const cardTitle    = document.createElement('p');
        const cardImage    = document.createElement('img');
        const cardTxt      = document.createElement('text');

        /* 2) we put classes for our cool css */
        card.className      = 'card';
        cardTitle.className = 'smol-text';
        cardTxt.className   = 'normie-text';
        cardImage.className = 'card-image';

        /* 3) we put it's text */
        cardTitle.innerText = dish.title;
        cardImage.src       = dish.image;
        cardTxt.innerText   = dish.description;
        
        card.append(cardTitle,cardImage,cardTxt);
        canvas.appendChild(card);

    });


}


export default {loadMenu};