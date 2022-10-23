function loadAbout (fatherContainer) {

    /* 1) we define every html element we're gonna put into the canvas */
    const aboutCanvas    = document.createElement('div');
    const pTitle1        = document.createElement('p');
    const separation     = document.createElement('hr');
    const aboutBoard     = document.createElement('div');
    let   map            = document.createElement('div');
    const rightPart      = document.createElement('div');
    const pTitle2        = document.createElement('p');
    const pText          = document.createElement('p');
    const pMail          = document.createElement('email');
    
    /* 2) We put the ID in the map, for being able to use it */
    map.id = 'map';
    
    /* 2) we put their classes */
    aboutCanvas.className    = 'inner-canvas about';
    pTitle1.className        = 'smol-text';
    aboutBoard.className     = 'about-board';
    rightPart.className      = 'about-content';
    pTitle2.className        = 'normie-text';
    pText.className          = 'normie-text';
    pMail.className          = 'normie-text email';
    map.className            = 'gmap';
    

    /* 3) we put their inner text */
    pTitle1.innerText = 'About us!'; 
    pTitle2.innerText = 'You don\'t know us? The cook is actually your own grandmother.\n'+
                        'That\'s right, we hired her. How did you expect we replicate her food?';
    pText.innerText   = 'You can contact us with this total real e-mail: ';
    pMail.innerText   = 'yourgrannyrocks@grannyskitchen.com';
    


    /* 3) But it's the pelvic thrust */
    aboutCanvas.append(pTitle1, separation, aboutBoard);
    aboutBoard.append(map, rightPart);

    /* 4) that really drives you insane */
    rightPart.append(pTitle2,pText,pMail);
    
    /* 5) let's do the time warp again!! */
    fatherContainer.appendChild(aboutCanvas);

     /* 6) We init the map */
     window.initMap = initMap;
};
/*
loader.load().then(() => {
    map = new google.maps.Map(map, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  });*/
//   const loader         = new Loader({
//     apiKey: "AIzaSyDVnPEOYAgP82R-iAjMeXkj874g-ftemNc",
//     version: "weekly"
//   });

//   loader.load().then(() => {
//     map = new google.maps.Map(map, {
//       center: { lat: -34.397, lng: 150.644 },
//       zoom: 8,
//     });
//   });

//  //loader.load();

// Initialize and add the map
function initMap() {
    console.log('<initMap>');
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  
  



export default {loadAbout};