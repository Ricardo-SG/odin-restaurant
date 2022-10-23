/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpg */ "./src/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff&family=Montserrat:wght@300;400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* variables */\n/* global css */\nhtml {\n  text-align: center;\n  font-family: 'Montserrat', sans-serif; }\n  html body {\n    color: white;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: auto;\n    margin: 0; }\n    html body .header, html body .footer {\n      height: 8vh;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      font-size: 30px;\n      background-color: rgba(0, 0, 0, 0.719);\n      text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black, -0.07em -0.07em black, -0.07em 0.07em black, 0.07em -0.07em black, 0.07em 0.07em black; }\n    html body .header .home-button:hover, html body .header .menu-button:hover, html body .header .about-button:hover {\n      color: #ffa61f;\n      transform: scale(1.5, 1.5); }\n    html body .header .home-button, html body .header .menu-button, html body .header .about-button {\n      margin-right: 5vw;\n      margin-left: 5vw; }\n\n/* CSS for Home */\n.canvas-web.home {\n  min-height: 55rem; }\n\n.inner-canvas.home {\n  height: 45rem;\n  width: 600px;\n  margin: auto;\n  background-color: rgba(0, 0, 0, 0.719); }\n  .inner-canvas.home .big-text {\n    font-family: \"Herr Von Muellerhoff\", cursive;\n    font-size: 150px;\n    text-align: center;\n    text-transform: capitalize;\n    margin-bottom: 0;\n    margin-top: 2rem;\n    color: #ffa61f;\n    text-shadow: 0.07em 0 black; }\n  .inner-canvas.home .smol-text {\n    font-size: 40px;\n    font-weight: bold;\n    margin-top: -50px;\n    margin-bottom: 0px;\n    text-align: center;\n    text-transform: uppercase;\n    color: #ffa61f;\n    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black; }\n  .inner-canvas.home .normie-text {\n    display: block;\n    color: #ffe6ce;\n    font-size: 20px; }\n  .inner-canvas.home hr {\n    width: 280px;\n    border: 2px solid #c59d5f;\n    margin: 24px auto; }\n  .inner-canvas.home .button-for-menu {\n    display: block;\n    margin: auto;\n    border: 2px solid #222;\n    border-radius: 26px;\n    background-color: #ffa61f;\n    border: 2px solid #ffe6ce;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 70px;\n    margin-top: 20px;\n    color: whitesmoke;\n    text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2); }\n  .inner-canvas.home .button-for-menu:hover, .inner-canvas.home .button-for-menu:active {\n    background-color: #ffe6ce;\n    border: 2px solid #ffe6ce; }\n\n/* CSS for Menu */\n.canvas-web.menu {\n  min-height: 50rem; }\n\n.inner-canvas.menu {\n  margin: auto;\n  /* Grid for all the articles projects */\n  /* copied from home, candidates to be globalized: */ }\n  .inner-canvas.menu .card-canvas {\n    margin: auto;\n    display: grid;\n    width: 75%;\n    grid-template-columns: repeat(2, minmax(450px, 1fr));\n    gap: 15px; }\n    .inner-canvas.menu .card-canvas .card {\n      margin: auto;\n      max-height: 35rem;\n      max-width: 41rem;\n      margin: 10px;\n      background-color: rgba(0, 0, 0, 0.719);\n      border: 1px solid black; }\n      .inner-canvas.menu .card-canvas .card .card-image {\n        max-width: 400px;\n        max-height: 400px;\n        display: block;\n        margin: auto;\n        margin-bottom: 10px; }\n  @media only screen and (max-width: 1000px) {\n    .inner-canvas.menu .card-canvas {\n      width: auto; } }\n  .inner-canvas.menu .big-text {\n    font-family: \"Herr Von Muellerhoff\", cursive;\n    font-size: 10rem;\n    text-align: center;\n    text-transform: capitalize;\n    margin-bottom: 3rem;\n    margin-top: 3rem;\n    color: #ffa61f;\n    background-color: rgba(0, 0, 0, 0.719);\n    text-shadow: 0.07em 0 black; }\n  .inner-canvas.menu .smol-text {\n    font-size: 2rem;\n    font-weight: bold;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    text-align: center;\n    text-transform: uppercase;\n    color: #ffa61f;\n    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black; }\n  .inner-canvas.menu .normie-text {\n    margin-bottom: 1rem;\n    display: block;\n    color: #fa992b;\n    font-size: 1.5rem;\n    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black; }\n\n/* CSS for about */\n.canvas-web.about {\n  min-height: 51rem;\n  max-width: 1500px;\n  margin: auto; }\n\n.inner-canvas.about {\n  margin-top: 10%;\n  margin-right: auto;\n  margin-left: auto;\n  margin-bottom: 10%;\n  background-color: rgba(0, 0, 0, 0.719); }\n  .inner-canvas.about .smol-text {\n    font-size: 3rem;\n    font-weight: bold;\n    margin-bottom: 0px;\n    text-align: center;\n    text-transform: uppercase;\n    color: #ffa61f;\n    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black; }\n  .inner-canvas.about hr {\n    width: 280px;\n    border: 2px solid #c59d5f;\n    margin: 24px auto; }\n  .inner-canvas.about .about-board {\n    display: flex;\n    justify-content: center;\n    align-content: center; }\n    .inner-canvas.about .about-board .granny-img {\n      border-radius: 8px;\n      max-width: 80%;\n      height: auto; }\n    .inner-canvas.about .about-board .about-content {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      width: 50%;\n      flex-shrink: 0; }\n      .inner-canvas.about .about-board .about-content .normie-text {\n        display: block;\n        color: #ffe6ce;\n        font-size: 1.5rem;\n        display: inline; }\n      .inner-canvas.about .about-board .about-content .email {\n        font-style: italic;\n        font-weight: bold;\n        display: inline; }\n  @media only screen and (max-width: 1000px) {\n    .inner-canvas.about .smol-text {\n      font-size: 36px; }\n    .inner-canvas.about .normie-text {\n      font-size: 16px; } }\n", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAAA,cAAA;AAuBA,eAAA;AAEA;EAEI,kBAAiB;EACjB,qCAAqC,EAAA;EAHzC;IAOQ,YA9B4B;IA+B5B,mDAA0C;IAC1C,qBAAoB;IACpB,SAAQ,EAAA;IAVhB;MAcY,WAAW;MACX,aAAY;MACZ,mBAAkB;MAClB,uBAAuB;MACvB,mBAAmB;MACnB,eAxBG;MAyBH,sCA5CkB;MA6ClB,qKAlCuB,EAAA;IAanC;MA4BgB,cAlDoB;MAoDpB,0BAAwB,EAAA;IA9BxC;MAkCgB,iBAAgB;MAChB,gBAAe,EAAA;;AAS/B,iBAAA;AACA;EACI,iBAAgB,EAAA;;AAEpB;EACI,aAAY;EACZ,YAAY;EACZ,YAAW;EACX,sCA5E0B,EAAA;EAwE9B;IAQQ,4CAA4C;IAC5C,gBAAgB;IAChB,kBAAkB;IAClB,0BAA0B;IAC1B,gBAAe;IACf,gBAAe;IACf,cApF4B;IAqF5B,2BAvEuB,EAAA;EAwD/B;IAoBQ,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,kBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IAEzB,cAjG4B;IAkG5B,6EArFuB,EAAA;EAyD/B;IAkCQ,cAAa;IACb,cAxGmC;IAyGnC,eAAe,EAAA;EApCvB;IAwCQ,YAAY;IACZ,yBAAyB;IACzB,iBAAiB,EAAA;EA1CzB;IA8CQ,cAAa;IACb,YAAW;IACX,sBAAsB;IACtB,mBAAmB;IACnB,yBAxH4B;IAyH5B,yBAxHmC;IAyHnC,qCAAoC;IACpC,eAAc;IACd,gBAAe;IACf,iBAAgB;IAChB,2CAAwC,EAAA;EAxDhD;IA6DQ,yBAlImC;IAmInC,yBAnImC,EAAA;;AAuI3C,iBAAA;AACA;EACI,iBAAgB,EAAA;;AAGpB;EAEI,YAAW;EAGX,uCAAA;EAkCJ,mDAAA,EAAoD;EAvCpD;IAOQ,YAAW;IACX,aAAY;IACZ,UAAS;IACT,oDAAoD;IACpD,SAAQ,EAAA;IAXhB;MAcY,YAAW;MACX,iBAAgB;MAChB,gBAAe;MACf,YAAY;MACZ,sCAjKkB;MAkKlB,uBAAuB,EAAA;MAnBnC;QAsBgB,gBAAe;QACf,iBAAgB;QAChB,cAAa;QACb,YAAW;QACX,mBAAkB,EAAA;EAM9B;IAhCJ;MAkCU,WAAU,EAAA,EAEX;EApCT;IAyCQ,4CAA4C;IAC5C,gBAAgB;IAChB,kBAAkB;IAClB,0BAA0B;IAC1B,mBAAkB;IAClB,gBAAe;IACf,cA5L4B;IA6L5B,sCA/LsB;IAgMtB,2BAhLuB,EAAA;EA+H/B;IAsDQ,eAAe;IACf,iBAAiB;IAEjB,gBAAe;IACf,mBAAkB;IAClB,kBAAkB;IAClB,yBAAyB;IAEzB,cA3M4B;IA4M5B,6EA/LuB,EAAA;EAgI/B;IAqEQ,mBAAkB;IAClB,cAAa;IACb,cAAuB;IACvB,iBAAiB;IACjB,6EAzMuB,EAAA;;AA8M/B,kBAAA;AACA;EACI,iBAAgB;EAChB,iBAAgB;EAChB,YAAW,EAAA;;AAEf;EACI,eAAe;EACf,kBAAiB;EACjB,iBAAgB;EAChB,kBAAkB;EAClB,sCAxO0B,EAAA;EAmO9B;IAQQ,eAAe;IACf,iBAAiB;IACjB,kBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IAEzB,cA/O4B;IAgP5B,6EAnOuB,EAAA;EAoN/B;IAqBQ,YAAY;IACZ,yBAAyB;IACzB,iBAAiB,EAAA;EAvBzB;IA2BQ,aAAY;IACZ,uBAAuB;IACvB,qBAAqB,EAAA;IA7B7B;MAkCY,kBAAkB;MAClB,cAAa;MACb,YAAW,EAAA;IApCvB;MAyCY,aAAY;MACZ,sBAAsB;MACtB,uBAAuB;MACnB,UAAS;MACb,cAAc,EAAA;MA7C1B;QAmDgB,cAAa;QACb,cApR2B;QAqR3B,iBAAiB;QACjB,eAAc,EAAA;MAtD9B;QA0DgB,kBAAiB;QACjB,iBAAgB;QAChB,eAAc,EAAA;EAK1B;IAjEJ;MAoEU,eAAc,EAAA;IApExB;MAyEY,eAAc,EAAA,EACjB","sourcesContent":["/* variables */\n$bgcolor: rgba(0, 0, 0, 0.719);\n$textcolor-white: rgb(255, 255, 255);\n$textcolor-orange: rgb(255, 166, 31);\n$textcolor-orange-light: rgb(255, 230, 206);\n$text-shadow8:   0.07em 0 black,\n                0 0.07em black,\n                -0.07em 0 black,\n                0 -0.07em black,\n                -0.07em -0.07em black,\n                -0.07em 0.07em black,\n                0.07em -0.07em black,\n                0.07em 0.07em black;\n$text-shadow4:   0.07em 0 black,\n                0 0.07em black,\n                -0.07em 0 black,\n                0 -0.07em black;\n$text-shadow1:   0.07em 0 black;\n              \n               \n$fontsize: 30px;\n@import url(\"https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff&family=Montserrat:wght@300;400;700&display=swap\");\n\n/* global css */\n\nhtml {\n\n    text-align:center;\n    font-family: 'Montserrat', sans-serif;\n\n\n    body {\n        color: $textcolor-white;\n        background: url('./images/background.jpg');\n        background-size:auto;\n        margin:0;\n          \n\n        .header, .footer {\n            height: 8vh;\n            display:flex;\n            flex-direction:row;\n            justify-content: center;\n            align-items: center;\n            font-size: $fontsize;\n            background-color: $bgcolor;\n            text-shadow: $text-shadow8;\n            \n        }\n\n        .header {\n            \n            .home-button:hover, .menu-button:hover, .about-button:hover {\n                color: $textcolor-orange;\n                //color: rgb(178, 210, 224);\n                transform:scale(1.5,1.5);\n\n            }\n            .home-button, .menu-button, .about-button {\n                margin-right:5vw;\n                margin-left:5vw;\n            }\n    \n\n        }\n\n    }\n}\n\n/* CSS for Home */\n.canvas-web.home {\n    min-height:55rem;\n}\n.inner-canvas.home {\n    height:45rem;\n    width: 600px;\n    margin:auto;\n    background-color: $bgcolor;\n\n\n    .big-text {\n        font-family: \"Herr Von Muellerhoff\", cursive;\n        font-size: 150px;\n        text-align: center;\n        text-transform: capitalize;\n        margin-bottom:0;\n        margin-top:2rem;\n        color:$textcolor-orange;\n        text-shadow:$text-shadow1;\n\n    }\n\n    .smol-text {\n        font-size: 40px;\n        font-weight: bold;\n        margin-top: -50px;\n        margin-bottom:0px;\n        text-align: center;\n        text-transform: uppercase;\n\n        color:$textcolor-orange;\n        text-shadow: $text-shadow4;\n\n        \n    }\n\n    .normie-text {\n        display:block;\n        color:$textcolor-orange-light;\n        font-size: 20px;\n    }\n\n    hr {\n        width: 280px;\n        border: 2px solid #c59d5f;\n        margin: 24px auto;\n    }\n\n    .button-for-menu {\n        display:block;\n        margin:auto;\n        border: 2px solid #222;\n        border-radius: 26px;\n        background-color: $textcolor-orange;\n        border: 2px solid $textcolor-orange-light;\n        font-family:'Montserrat', sans-serif;\n        font-size:70px;\n        margin-top:20px;\n        color:whitesmoke;\n        text-shadow: 6px 6px 0px rgba(0,0,0,0.2)\n \n    }\n\n    .button-for-menu:hover, .button-for-menu:active {\n        background-color: $textcolor-orange-light;\n        border: 2px solid $textcolor-orange-light;\n    }\n}\n\n/* CSS for Menu */\n.canvas-web.menu {\n    min-height:50rem;\n\n}\n.inner-canvas.menu {\n\n    margin:auto;\n\n\n    /* Grid for all the articles projects */\n    .card-canvas {\n        margin:auto;\n        display:grid;\n        width:75%; \n        grid-template-columns: repeat(2, minmax(450px, 1fr));\n        gap:15px;\n        \n        .card {\n            margin:auto;\n            max-height:35rem;\n            max-width:41rem;\n            margin: 10px;\n            background-color: $bgcolor; \n            border: 1px solid black;  \n\n            .card-image {\n                max-width:400px;\n                max-height:400px;\n                display:block;\n                margin:auto;\n                margin-bottom:10px;\n            }\n        }\n        \n    }\n\n    @media only screen and (max-width:1000px){\n        .card-canvas {\n          width:auto;\n\n        }\n    }\n    \n/* copied from home, candidates to be globalized: */\n    .big-text {\n        font-family: \"Herr Von Muellerhoff\", cursive;\n        font-size: 10rem; // cambiado\n        text-align: center;\n        text-transform: capitalize;\n        margin-bottom:3rem;\n        margin-top:3rem; // cambiado\n        color:$textcolor-orange;\n        background-color: $bgcolor;\n        text-shadow:$text-shadow1;\n\n    }\n\n    .smol-text {\n        font-size: 2rem; // cambiado \n        font-weight: bold;\n        //margin-top: -50px; cambiado\n        margin-top:1rem;\n        margin-bottom:1rem; // cambiado\n        text-align: center;\n        text-transform: uppercase;\n\n        color:$textcolor-orange;\n        text-shadow: $text-shadow4;\n\n        \n    }\n\n    .normie-text {\n        margin-bottom:1rem;\n        display:block;\n        color:rgb(250, 153, 43);\n        font-size: 1.5rem;\n        text-shadow:$text-shadow4;\n    }\n                  \n\n}\n/* CSS for about */\n.canvas-web.about {\n    min-height:51rem;\n    max-width:1500px;\n    margin:auto;\n}\n.inner-canvas.about {\n    margin-top: 10%;\n    margin-right:auto;\n    margin-left:auto;\n    margin-bottom: 10%;\n    background-color: $bgcolor;\n\n    .smol-text {\n        font-size: 3rem;\n        font-weight: bold;\n        margin-bottom:0px;\n        text-align: center;\n        text-transform: uppercase;\n\n        color:$textcolor-orange;\n        text-shadow: $text-shadow4;\n\n        \n    }\n\n    hr {\n        width: 280px;\n        border: 2px solid #c59d5f;\n        margin: 24px auto;\n    }\n\n    .about-board {\n        display:flex;\n        justify-content: center;\n        align-content: center;     \n\n\n\n        .granny-img {\n            border-radius: 8px;\n            max-width:80%;\n            height:auto;\n        }\n    \n    \n        .about-content {\n            display:flex;\n            flex-direction: column;\n            justify-content: center;\n                width:50%;\n            flex-shrink: 0;\n       \n\n\n\n            .normie-text {\n                display:block;\n                color:$textcolor-orange-light;\n                font-size: 1.5rem;\n                display:inline;\n            }\n\n            .email {\n                font-style:italic;\n                font-weight:bold;\n                display:inline;\n            }\n     }   \n    }   \n\n    @media only screen and (max-width:1000px) {\n\n        .smol-text {\n          font-size:36px;\n\n        }\n\n        .normie-text {\n            font-size:16px;\n        }\n\n\n    }\n}\n\n\n\n// /* Media rules for cellphone */\n// @media only screen and (max-width:600px) {\n//     html {\n//         width:auto;\n//         height:600px;\n\n//         .canvas-web {\n//             min-height: auto;\n//         }\n//         .card-canvas {\n//             width:auto;\n//         }\n\n//     }\n// }\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_granny_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/granny.jpg */ "./src/images/granny.jpg");
// Originally I was gonna have a map and the text, but the map using google apis required associating a facturating account and since this is an exercise I removed it.
// in it's place, I put a picture.
 // This image was taken from internet...but I did not save who did it. It's a free image tho :(

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
    grannyImg.src     = _images_granny_jpg__WEBPACK_IMPORTED_MODULE_0__;
    


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({loadAbout});

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_croquetas_resized_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/croquetas_resized.jpg */ "./src/images/croquetas_resized.jpg");
 // The croquette (most important element of this web)
/* This code under here will probably be exported into a module */
/* We're gonna build the home canvas now */
function loadHome (fatherContainer, loadMenu) {

    /* 1) we define every html element we're gonna put into the canvas */
    const homeCanvas   = document.createElement('div');
    const homeTitleDiv = document.createElement('div');
    const pTitle1      = document.createElement('p');
    const pTitle2      = document.createElement('p');
    const separation   = document.createElement('hr');
    const pText        = document.createElement('p');
    const myCroqueta   = document.createElement('img');
    const btnMenu      = document.createElement('button'); 
    

    /* 2) we put their classes */
    homeCanvas.className = 'inner-canvas home';
    pTitle1.className    = 'big-text';
    pTitle2.className    = 'smol-text';
    pText.className      = 'normie-text';
    myCroqueta.className = 'croqueta';
    btnMenu.className    = 'button-for-menu';
    
    

    /* 3) we put their inner text */
    pTitle1.innerText = 'Welcome to'; 
    pTitle2.innerText = 'your granny\'s kitchen';
    pText.innerText   = 'Enjoy the cooking only your granny can cook';
    myCroqueta.src    = _images_croquetas_resized_jpg__WEBPACK_IMPORTED_MODULE_0__; // not a text but a source 
    btnMenu.innerText = 'MENU';
    

    /* 4) we put their functions */
    btnMenu.onclick = loadMenu;

    /* 5) But it's the pelvic thrust */
    homeTitleDiv.append(pTitle1,pTitle2,separation,pText,myCroqueta,btnMenu);

    /* 6) that really drives you insane */
    homeCanvas.appendChild(homeTitleDiv);
    
    /* 7) let's do the time warp again!! */
    fatherContainer.appendChild(homeCanvas);
};




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({loadHome});

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_croquetas_resized_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/croquetas_resized.jpg */ "./src/images/croquetas_resized.jpg");
/* harmony import */ var _images_tortilla_resized_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/tortilla_resized.jpg */ "./src/images/tortilla_resized.jpg");
/* harmony import */ var _images_cachopo_resized_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/cachopo_resized.jpg */ "./src/images/cachopo_resized.jpg");
/* harmony import */ var _images_chuleton_resized_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/chuleton_resized.jpg */ "./src/images/chuleton_resized.jpg");
/* harmony import */ var _images_gambas_resized_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/gambas_resized.jpg */ "./src/images/gambas_resized.jpg");
/* harmony import */ var _images_paella_resized_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/paella_resized.jpg */ "./src/images/paella_resized.jpg");
 // This image was taken from internet...but I did not save who did it. It's a free image tho :(
 // This image was taken from internet...but I did not save who did it. It's a free image tho :(
 // This image was taken by me in Llanes, Asturias.
 // This image was taken by me in León, Castilla y León.
 // This image was taken by me in Llanes, Asturias.
 // This image was taken by me in my own kitchen, yup, I cooked this little baby. I'm also VERY single. So ladies and millionaire gentleman, hit me up if you wanna taste it.

/* To generate each card containing our menu we're gonna define first an array with all our dishes */
const Dish = (title, image, description) => {
    return {title, image, description};
};
const dishes = [
    /* Croquetas */
    Dish('Croquetas', _images_croquetas_resized_jpg__WEBPACK_IMPORTED_MODULE_0__, 'What niece doesn\'t love her granny croquettes?'),
    /* Tortilla  */
    Dish('Tortilla',  _images_tortilla_resized_jpg__WEBPACK_IMPORTED_MODULE_1__,  'Her second best dish, the Tortilla. With onion. As all things should be.'),
    /* Gambas    */
    Dish('Gambas',    _images_gambas_resized_jpg__WEBPACK_IMPORTED_MODULE_4__,    'Our yummy little shrimps, tastyness is magic.'),
    /* Paella    */
    Dish('Paella',    _images_paella_resized_jpg__WEBPACK_IMPORTED_MODULE_5__,    'You\'re favorite food. You\'re granny speciality. The only and one Paella'),    
    /* Chuleton  */
    Dish('Chuleton',  _images_chuleton_resized_jpg__WEBPACK_IMPORTED_MODULE_3__,  'Best meat you have ever tasted'),
    /* Cachopo   */
    Dish('Cachopo',   _images_cachopo_resized_jpg__WEBPACK_IMPORTED_MODULE_2__,   'The asturian speciality, you can fatten 10 kilos just by looking at this.')
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({loadMenu});

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0345e111cd5fb05cfb58.jpg";

/***/ }),

/***/ "./src/images/cachopo_resized.jpg":
/*!****************************************!*\
  !*** ./src/images/cachopo_resized.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96c951ae1e37005cceda.jpg";

/***/ }),

/***/ "./src/images/chuleton_resized.jpg":
/*!*****************************************!*\
  !*** ./src/images/chuleton_resized.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4322378535fc85dd9f4.jpg";

/***/ }),

/***/ "./src/images/croquetas_resized.jpg":
/*!******************************************!*\
  !*** ./src/images/croquetas_resized.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d14c879bc81353e2a3c.jpg";

/***/ }),

/***/ "./src/images/gambas_resized.jpg":
/*!***************************************!*\
  !*** ./src/images/gambas_resized.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d48bbc5e71596a05b629.jpg";

/***/ }),

/***/ "./src/images/granny.jpg":
/*!*******************************!*\
  !*** ./src/images/granny.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6386f9ae7c0ccb14d322.jpg";

/***/ }),

/***/ "./src/images/paella_resized.jpg":
/*!***************************************!*\
  !*** ./src/images/paella_resized.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a878c2a1f573591c6a92.jpg";

/***/ }),

/***/ "./src/images/tortilla_resized.jpg":
/*!*****************************************!*\
  !*** ./src/images/tortilla_resized.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ba0e781010cd9c10810.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ "./src/about.js");

/* Import section --------------------------------------------------- */
 // SCSS styles for our web



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

loadHome(canvas);

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
    _home_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadHome(canvas, loadMenu);
}

function loadMenu () {
    console.log('<index.js loadMenu>');
    console.log(canvas);
    cleanCanvas();
    canvas.className = 'canvas-web menu';
    _menu_js__WEBPACK_IMPORTED_MODULE_2__["default"].loadMenu(canvas);
};

function loadAbout () {
    console.log('<index.js loadAbout>');
    console.log(canvas);
    cleanCanvas();
    canvas.className = 'canvas-web about';
    _about_js__WEBPACK_IMPORTED_MODULE_3__["default"].loadAbout(canvas);
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUN1QixDQUFDO0FBQ1U7QUFDQTtBQUNDO0FBQ25DO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFpQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBaUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQW1CO0FBQ3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUhlcnIrVm9uK011ZWxsZXJob2ZmJmZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIGdsb2JhbCBjc3MgKi9cXG5odG1sIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7IH1cXG4gIGh0bWwgYm9keSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xcbiAgICBtYXJnaW46IDA7IH1cXG4gICAgaHRtbCBib2R5IC5oZWFkZXIsIGh0bWwgYm9keSAuZm9vdGVyIHtcXG4gICAgICBoZWlnaHQ6IDh2aDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcxOSk7XFxuICAgICAgdGV4dC1zaGFkb3c6IDAuMDdlbSAwIGJsYWNrLCAwIDAuMDdlbSBibGFjaywgLTAuMDdlbSAwIGJsYWNrLCAwIC0wLjA3ZW0gYmxhY2ssIC0wLjA3ZW0gLTAuMDdlbSBibGFjaywgLTAuMDdlbSAwLjA3ZW0gYmxhY2ssIDAuMDdlbSAtMC4wN2VtIGJsYWNrLCAwLjA3ZW0gMC4wN2VtIGJsYWNrOyB9XFxuICAgIGh0bWwgYm9keSAuaGVhZGVyIC5ob21lLWJ1dHRvbjpob3ZlciwgaHRtbCBib2R5IC5oZWFkZXIgLm1lbnUtYnV0dG9uOmhvdmVyLCBodG1sIGJvZHkgLmhlYWRlciAuYWJvdXQtYnV0dG9uOmhvdmVyIHtcXG4gICAgICBjb2xvcjogI2ZmYTYxZjtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSwgMS41KTsgfVxcbiAgICBodG1sIGJvZHkgLmhlYWRlciAuaG9tZS1idXR0b24sIGh0bWwgYm9keSAuaGVhZGVyIC5tZW51LWJ1dHRvbiwgaHRtbCBib2R5IC5oZWFkZXIgLmFib3V0LWJ1dHRvbiB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiA1dnc7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDV2dzsgfVxcblxcbi8qIENTUyBmb3IgSG9tZSAqL1xcbi5jYW52YXMtd2ViLmhvbWUge1xcbiAgbWluLWhlaWdodDogNTVyZW07IH1cXG5cXG4uaW5uZXItY2FudmFzLmhvbWUge1xcbiAgaGVpZ2h0OiA0NXJlbTtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MTkpOyB9XFxuICAuaW5uZXItY2FudmFzLmhvbWUgLmJpZy10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZXJyIFZvbiBNdWVsbGVyaG9mZlxcXCIsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMTUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIGNvbG9yOiAjZmZhNjFmO1xcbiAgICB0ZXh0LXNoYWRvdzogMC4wN2VtIDAgYmxhY2s7IH1cXG4gIC5pbm5lci1jYW52YXMuaG9tZSAuc21vbC10ZXh0IHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogI2ZmYTYxZjtcXG4gICAgdGV4dC1zaGFkb3c6IDAuMDdlbSAwIGJsYWNrLCAwIDAuMDdlbSBibGFjaywgLTAuMDdlbSAwIGJsYWNrLCAwIC0wLjA3ZW0gYmxhY2s7IH1cXG4gIC5pbm5lci1jYW52YXMuaG9tZSAubm9ybWllLXRleHQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6ICNmZmU2Y2U7XFxuICAgIGZvbnQtc2l6ZTogMjBweDsgfVxcbiAgLmlubmVyLWNhbnZhcy5ob21lIGhyIHtcXG4gICAgd2lkdGg6IDI4MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYzU5ZDVmO1xcbiAgICBtYXJnaW46IDI0cHggYXV0bzsgfVxcbiAgLmlubmVyLWNhbnZhcy5ob21lIC5idXR0b24tZm9yLW1lbnUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjIyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNjFmO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZlNmNlO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDcwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICB0ZXh0LXNoYWRvdzogNnB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpOyB9XFxuICAuaW5uZXItY2FudmFzLmhvbWUgLmJ1dHRvbi1mb3ItbWVudTpob3ZlciwgLmlubmVyLWNhbnZhcy5ob21lIC5idXR0b24tZm9yLW1lbnU6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTZjZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZTZjZTsgfVxcblxcbi8qIENTUyBmb3IgTWVudSAqL1xcbi5jYW52YXMtd2ViLm1lbnUge1xcbiAgbWluLWhlaWdodDogNTByZW07IH1cXG5cXG4uaW5uZXItY2FudmFzLm1lbnUge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgLyogR3JpZCBmb3IgYWxsIHRoZSBhcnRpY2xlcyBwcm9qZWN0cyAqL1xcbiAgLyogY29waWVkIGZyb20gaG9tZSwgY2FuZGlkYXRlcyB0byBiZSBnbG9iYWxpemVkOiAqLyB9XFxuICAuaW5uZXItY2FudmFzLm1lbnUgLmNhcmQtY2FudmFzIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoNDUwcHgsIDFmcikpO1xcbiAgICBnYXA6IDE1cHg7IH1cXG4gICAgLmlubmVyLWNhbnZhcy5tZW51IC5jYXJkLWNhbnZhcyAuY2FyZCB7XFxuICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgIG1heC1oZWlnaHQ6IDM1cmVtO1xcbiAgICAgIG1heC13aWR0aDogNDFyZW07XFxuICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MTkpO1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyB9XFxuICAgICAgLmlubmVyLWNhbnZhcy5tZW51IC5jYXJkLWNhbnZhcyAuY2FyZCAuY2FyZC1pbWFnZSB7XFxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5pbm5lci1jYW52YXMubWVudSAuY2FyZC1jYW52YXMge1xcbiAgICAgIHdpZHRoOiBhdXRvOyB9IH1cXG4gIC5pbm5lci1jYW52YXMubWVudSAuYmlnLXRleHQge1xcbiAgICBmb250LWZhbWlseTogXFxcIkhlcnIgVm9uIE11ZWxsZXJob2ZmXFxcIiwgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAxMHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgY29sb3I6ICNmZmE2MWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MTkpO1xcbiAgICB0ZXh0LXNoYWRvdzogMC4wN2VtIDAgYmxhY2s7IH1cXG4gIC5pbm5lci1jYW52YXMubWVudSAuc21vbC10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogI2ZmYTYxZjtcXG4gICAgdGV4dC1zaGFkb3c6IDAuMDdlbSAwIGJsYWNrLCAwIDAuMDdlbSBibGFjaywgLTAuMDdlbSAwIGJsYWNrLCAwIC0wLjA3ZW0gYmxhY2s7IH1cXG4gIC5pbm5lci1jYW52YXMubWVudSAubm9ybWllLXRleHQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6ICNmYTk5MmI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0ZXh0LXNoYWRvdzogMC4wN2VtIDAgYmxhY2ssIDAgMC4wN2VtIGJsYWNrLCAtMC4wN2VtIDAgYmxhY2ssIDAgLTAuMDdlbSBibGFjazsgfVxcblxcbi8qIENTUyBmb3IgYWJvdXQgKi9cXG4uY2FudmFzLXdlYi5hYm91dCB7XFxuICBtaW4taGVpZ2h0OiA1MXJlbTtcXG4gIG1heC13aWR0aDogMTUwMHB4O1xcbiAgbWFyZ2luOiBhdXRvOyB9XFxuXFxuLmlubmVyLWNhbnZhcy5hYm91dCB7XFxuICBtYXJnaW4tdG9wOiAxMCU7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MTkpOyB9XFxuICAuaW5uZXItY2FudmFzLmFib3V0IC5zbW9sLXRleHQge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY29sb3I6ICNmZmE2MWY7XFxuICAgIHRleHQtc2hhZG93OiAwLjA3ZW0gMCBibGFjaywgMCAwLjA3ZW0gYmxhY2ssIC0wLjA3ZW0gMCBibGFjaywgMCAtMC4wN2VtIGJsYWNrOyB9XFxuICAuaW5uZXItY2FudmFzLmFib3V0IGhyIHtcXG4gICAgd2lkdGg6IDI4MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYzU5ZDVmO1xcbiAgICBtYXJnaW46IDI0cHggYXV0bzsgfVxcbiAgLmlubmVyLWNhbnZhcy5hYm91dCAuYWJvdXQtYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyB9XFxuICAgIC5pbm5lci1jYW52YXMuYWJvdXQgLmFib3V0LWJvYXJkIC5ncmFubnktaW1nIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgICAgaGVpZ2h0OiBhdXRvOyB9XFxuICAgIC5pbm5lci1jYW52YXMuYWJvdXQgLmFib3V0LWJvYXJkIC5hYm91dC1jb250ZW50IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICBmbGV4LXNocmluazogMDsgfVxcbiAgICAgIC5pbm5lci1jYW52YXMuYWJvdXQgLmFib3V0LWJvYXJkIC5hYm91dC1jb250ZW50IC5ub3JtaWUtdGV4dCB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGNvbG9yOiAjZmZlNmNlO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7IH1cXG4gICAgICAuaW5uZXItY2FudmFzLmFib3V0IC5hYm91dC1ib2FyZCAuYWJvdXQtY29udGVudCAuZW1haWwge1xcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5pbm5lci1jYW52YXMuYWJvdXQgLnNtb2wtdGV4dCB7XFxuICAgICAgZm9udC1zaXplOiAzNnB4OyB9XFxuICAgIC5pbm5lci1jYW52YXMuYWJvdXQgLm5vcm1pZS10ZXh0IHtcXG4gICAgICBmb250LXNpemU6IDE2cHg7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxj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O0lBQ1oseUJBQXlCO0lBQ3pCLGlCQUFpQixFQUFBO0VBdkJ6QjtJQTJCUSxhQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHFCQUFxQixFQUFBO0lBN0I3QjtNQWtDWSxrQkFBa0I7TUFDbEIsY0FBYTtNQUNiLFlBQVcsRUFBQTtJQXBDdkI7TUF5Q1ksYUFBWTtNQUNaLHNCQUFzQjtNQUN0Qix1QkFBdUI7TUFDbkIsVUFBUztNQUNiLGNBQWMsRUFBQTtNQTdDMUI7UUFtRGdCLGNBQWE7UUFDYixjQXBSMkI7UUFxUjNCLGlCQUFpQjtRQUNqQixlQUFjLEVBQUE7TUF0RDlCO1FBMERnQixrQkFBaUI7UUFDakIsaUJBQWdCO1FBQ2hCLGVBQWMsRUFBQTtFQUsxQjtJQWpFSjtNQW9FVSxlQUFjLEVBQUE7SUFwRXhCO01BeUVZLGVBQWMsRUFBQSxFQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiB2YXJpYWJsZXMgKi9cXG4kYmdjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcxOSk7XFxuJHRleHRjb2xvci13aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiR0ZXh0Y29sb3Itb3JhbmdlOiByZ2IoMjU1LCAxNjYsIDMxKTtcXG4kdGV4dGNvbG9yLW9yYW5nZS1saWdodDogcmdiKDI1NSwgMjMwLCAyMDYpO1xcbiR0ZXh0LXNoYWRvdzg6ICAgMC4wN2VtIDAgYmxhY2ssXFxuICAgICAgICAgICAgICAgIDAgMC4wN2VtIGJsYWNrLFxcbiAgICAgICAgICAgICAgICAtMC4wN2VtIDAgYmxhY2ssXFxuICAgICAgICAgICAgICAgIDAgLTAuMDdlbSBibGFjayxcXG4gICAgICAgICAgICAgICAgLTAuMDdlbSAtMC4wN2VtIGJsYWNrLFxcbiAgICAgICAgICAgICAgICAtMC4wN2VtIDAuMDdlbSBibGFjayxcXG4gICAgICAgICAgICAgICAgMC4wN2VtIC0wLjA3ZW0gYmxhY2ssXFxuICAgICAgICAgICAgICAgIDAuMDdlbSAwLjA3ZW0gYmxhY2s7XFxuJHRleHQtc2hhZG93NDogICAwLjA3ZW0gMCBibGFjayxcXG4gICAgICAgICAgICAgICAgMCAwLjA3ZW0gYmxhY2ssXFxuICAgICAgICAgICAgICAgIC0wLjA3ZW0gMCBibGFjayxcXG4gICAgICAgICAgICAgICAgMCAtMC4wN2VtIGJsYWNrO1xcbiR0ZXh0LXNoYWRvdzE6ICAgMC4wN2VtIDAgYmxhY2s7XFxuICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICBcXG4kZm9udHNpemU6IDMwcHg7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGVycitWb24rTXVlbGxlcmhvZmYmZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4vKiBnbG9iYWwgY3NzICovXFxuXFxuaHRtbCB7XFxuXFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcblxcblxcbiAgICBib2R5IHtcXG4gICAgICAgIGNvbG9yOiAkdGV4dGNvbG9yLXdoaXRlO1xcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZycpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOmF1dG87XFxuICAgICAgICBtYXJnaW46MDtcXG4gICAgICAgICAgXFxuXFxuICAgICAgICAuaGVhZGVyLCAuZm9vdGVyIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDh2aDtcXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udHNpemU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnY29sb3I7XFxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6ICR0ZXh0LXNoYWRvdzg7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuXFxuICAgICAgICAuaGVhZGVyIHtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAuaG9tZS1idXR0b246aG92ZXIsIC5tZW51LWJ1dHRvbjpob3ZlciwgLmFib3V0LWJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkdGV4dGNvbG9yLW9yYW5nZTtcXG4gICAgICAgICAgICAgICAgLy9jb2xvcjogcmdiKDE3OCwgMjEwLCAyMjQpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMS41LDEuNSk7XFxuXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5ob21lLWJ1dHRvbiwgLm1lbnUtYnV0dG9uLCAuYWJvdXQtYnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjV2dztcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NXZ3O1xcbiAgICAgICAgICAgIH1cXG4gICAgXFxuXFxuICAgICAgICB9XFxuXFxuICAgIH1cXG59XFxuXFxuLyogQ1NTIGZvciBIb21lICovXFxuLmNhbnZhcy13ZWIuaG9tZSB7XFxuICAgIG1pbi1oZWlnaHQ6NTVyZW07XFxufVxcbi5pbm5lci1jYW52YXMuaG9tZSB7XFxuICAgIGhlaWdodDo0NXJlbTtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBtYXJnaW46YXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnY29sb3I7XFxuXFxuXFxuICAgIC5iaWctdGV4dCB7XFxuICAgICAgICBmb250LWZhbWlseTogXFxcIkhlcnIgVm9uIE11ZWxsZXJob2ZmXFxcIiwgY3Vyc2l2ZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTUwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206MDtcXG4gICAgICAgIG1hcmdpbi10b3A6MnJlbTtcXG4gICAgICAgIGNvbG9yOiR0ZXh0Y29sb3Itb3JhbmdlO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6JHRleHQtc2hhZG93MTtcXG5cXG4gICAgfVxcblxcbiAgICAuc21vbC10ZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOjBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFxuICAgICAgICBjb2xvcjokdGV4dGNvbG9yLW9yYW5nZTtcXG4gICAgICAgIHRleHQtc2hhZG93OiAkdGV4dC1zaGFkb3c0O1xcblxcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLm5vcm1pZS10ZXh0IHtcXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgICAgICBjb2xvcjokdGV4dGNvbG9yLW9yYW5nZS1saWdodDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcblxcbiAgICBociB7XFxuICAgICAgICB3aWR0aDogMjgwcHg7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYzU5ZDVmO1xcbiAgICAgICAgbWFyZ2luOiAyNHB4IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLmJ1dHRvbi1mb3ItbWVudSB7XFxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICAgICAgbWFyZ2luOmF1dG87XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMjIyO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjZweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0Y29sb3Itb3JhbmdlO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHRleHRjb2xvci1vcmFuZ2UtbGlnaHQ7XFxuICAgICAgICBmb250LWZhbWlseTonTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgICAgICBmb250LXNpemU6NzBweDtcXG4gICAgICAgIG1hcmdpbi10b3A6MjBweDtcXG4gICAgICAgIGNvbG9yOndoaXRlc21va2U7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogNnB4IDZweCAwcHggcmdiYSgwLDAsMCwwLjIpXFxuIFxcbiAgICB9XFxuXFxuICAgIC5idXR0b24tZm9yLW1lbnU6aG92ZXIsIC5idXR0b24tZm9yLW1lbnU6YWN0aXZlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0Y29sb3Itb3JhbmdlLWxpZ2h0O1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHRleHRjb2xvci1vcmFuZ2UtbGlnaHQ7XFxuICAgIH1cXG59XFxuXFxuLyogQ1NTIGZvciBNZW51ICovXFxuLmNhbnZhcy13ZWIubWVudSB7XFxuICAgIG1pbi1oZWlnaHQ6NTByZW07XFxuXFxufVxcbi5pbm5lci1jYW52YXMubWVudSB7XFxuXFxuICAgIG1hcmdpbjphdXRvO1xcblxcblxcbiAgICAvKiBHcmlkIGZvciBhbGwgdGhlIGFydGljbGVzIHByb2plY3RzICovXFxuICAgIC5jYXJkLWNhbnZhcyB7XFxuICAgICAgICBtYXJnaW46YXV0bztcXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgICAgIHdpZHRoOjc1JTsgXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoNDUwcHgsIDFmcikpO1xcbiAgICAgICAgZ2FwOjE1cHg7XFxuICAgICAgICBcXG4gICAgICAgIC5jYXJkIHtcXG4gICAgICAgICAgICBtYXJnaW46YXV0bztcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OjM1cmVtO1xcbiAgICAgICAgICAgIG1heC13aWR0aDo0MXJlbTtcXG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnY29sb3I7IFxcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAgXFxuXFxuICAgICAgICAgICAgLmNhcmQtaW1hZ2Uge1xcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6NDAwcHg7XFxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6NDAwcHg7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgICAgICAgICAgICAgIG1hcmdpbjphdXRvO1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMDBweCl7XFxuICAgICAgICAuY2FyZC1jYW52YXMge1xcbiAgICAgICAgICB3aWR0aDphdXRvO1xcblxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIFxcbi8qIGNvcGllZCBmcm9tIGhvbWUsIGNhbmRpZGF0ZXMgdG8gYmUgZ2xvYmFsaXplZDogKi9cXG4gICAgLmJpZy10ZXh0IHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVyciBWb24gTXVlbGxlcmhvZmZcXFwiLCBjdXJzaXZlO1xcbiAgICAgICAgZm9udC1zaXplOiAxMHJlbTsgLy8gY2FtYmlhZG9cXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTozcmVtO1xcbiAgICAgICAgbWFyZ2luLXRvcDozcmVtOyAvLyBjYW1iaWFkb1xcbiAgICAgICAgY29sb3I6JHRleHRjb2xvci1vcmFuZ2U7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdjb2xvcjtcXG4gICAgICAgIHRleHQtc2hhZG93OiR0ZXh0LXNoYWRvdzE7XFxuXFxuICAgIH1cXG5cXG4gICAgLnNtb2wtdGV4dCB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07IC8vIGNhbWJpYWRvIFxcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAvL21hcmdpbi10b3A6IC01MHB4OyBjYW1iaWFkb1xcbiAgICAgICAgbWFyZ2luLXRvcDoxcmVtO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxcmVtOyAvLyBjYW1iaWFkb1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXG4gICAgICAgIGNvbG9yOiR0ZXh0Y29sb3Itb3JhbmdlO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6ICR0ZXh0LXNoYWRvdzQ7XFxuXFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAubm9ybWllLXRleHQge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxcmVtO1xcbiAgICAgICAgZGlzcGxheTpibG9jaztcXG4gICAgICAgIGNvbG9yOnJnYigyNTAsIDE1MywgNDMpO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICB0ZXh0LXNoYWRvdzokdGV4dC1zaGFkb3c0O1xcbiAgICB9XFxuICAgICAgICAgICAgICAgICAgXFxuXFxufVxcbi8qIENTUyBmb3IgYWJvdXQgKi9cXG4uY2FudmFzLXdlYi5hYm91dCB7XFxuICAgIG1pbi1oZWlnaHQ6NTFyZW07XFxuICAgIG1heC13aWR0aDoxNTAwcHg7XFxuICAgIG1hcmdpbjphdXRvO1xcbn1cXG4uaW5uZXItY2FudmFzLmFib3V0IHtcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdjb2xvcjtcXG5cXG4gICAgLnNtb2wtdGV4dCB7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206MHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXG4gICAgICAgIGNvbG9yOiR0ZXh0Y29sb3Itb3JhbmdlO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6ICR0ZXh0LXNoYWRvdzQ7XFxuXFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICBociB7XFxuICAgICAgICB3aWR0aDogMjgwcHg7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYzU5ZDVmO1xcbiAgICAgICAgbWFyZ2luOiAyNHB4IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLmFib3V0LWJvYXJkIHtcXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyOyAgICAgXFxuXFxuXFxuXFxuICAgICAgICAuZ3Jhbm55LWltZyB7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgICAgICAgIG1heC13aWR0aDo4MCU7XFxuICAgICAgICAgICAgaGVpZ2h0OmF1dG87XFxuICAgICAgICB9XFxuICAgIFxcbiAgICBcXG4gICAgICAgIC5hYm91dC1jb250ZW50IHtcXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgd2lkdGg6NTAlO1xcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICAgICBcXG5cXG5cXG5cXG4gICAgICAgICAgICAubm9ybWllLXRleHQge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICAgICAgICAgICAgICBjb2xvcjokdGV4dGNvbG9yLW9yYW5nZS1saWdodDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZW1haWwge1xcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOml0YWxpYztcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgfSAgIFxcbiAgICB9ICAgXFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDAwcHgpIHtcXG5cXG4gICAgICAgIC5zbW9sLXRleHQge1xcbiAgICAgICAgICBmb250LXNpemU6MzZweDtcXG5cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5ub3JtaWUtdGV4dCB7XFxuICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7XFxuICAgICAgICB9XFxuXFxuXFxuICAgIH1cXG59XFxuXFxuXFxuXFxuLy8gLyogTWVkaWEgcnVsZXMgZm9yIGNlbGxwaG9uZSAqL1xcbi8vIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xcbi8vICAgICBodG1sIHtcXG4vLyAgICAgICAgIHdpZHRoOmF1dG87XFxuLy8gICAgICAgICBoZWlnaHQ6NjAwcHg7XFxuXFxuLy8gICAgICAgICAuY2FudmFzLXdlYiB7XFxuLy8gICAgICAgICAgICAgbWluLWhlaWdodDogYXV0bztcXG4vLyAgICAgICAgIH1cXG4vLyAgICAgICAgIC5jYXJkLWNhbnZhcyB7XFxuLy8gICAgICAgICAgICAgd2lkdGg6YXV0bztcXG4vLyAgICAgICAgIH1cXG5cXG4vLyAgICAgfVxcbi8vIH1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gT3JpZ2luYWxseSBJIHdhcyBnb25uYSBoYXZlIGEgbWFwIGFuZCB0aGUgdGV4dCwgYnV0IHRoZSBtYXAgdXNpbmcgZ29vZ2xlIGFwaXMgcmVxdWlyZWQgYXNzb2NpYXRpbmcgYSBmYWN0dXJhdGluZyBhY2NvdW50IGFuZCBzaW5jZSB0aGlzIGlzIGFuIGV4ZXJjaXNlIEkgcmVtb3ZlZCBpdC5cbi8vIGluIGl0J3MgcGxhY2UsIEkgcHV0IGEgcGljdHVyZS5cbmltcG9ydCBncmFubnkgZnJvbSAnLi9pbWFnZXMvZ3Jhbm55LmpwZyc7IC8vIFRoaXMgaW1hZ2Ugd2FzIHRha2VuIGZyb20gaW50ZXJuZXQuLi5idXQgSSBkaWQgbm90IHNhdmUgd2hvIGRpZCBpdC4gSXQncyBhIGZyZWUgaW1hZ2UgdGhvIDooXG5cbmZ1bmN0aW9uIGxvYWRBYm91dCAoZmF0aGVyQ29udGFpbmVyKSB7XG5cbiAgICAvKiAxKSB3ZSBkZWZpbmUgZXZlcnkgaHRtbCBlbGVtZW50IHdlJ3JlIGdvbm5hIHB1dCBpbnRvIHRoZSBjYW52YXMgKi9cbiAgICBjb25zdCBhYm91dENhbnZhcyAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHBUaXRsZTEgICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHNlcGFyYXRpb24gICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBjb25zdCBhYm91dEJvYXJkICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGdyYW5ueUNvbnRhaW5lcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZ3Jhbm55SW1nICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCByaWdodFBhcnQgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHBUaXRsZTIgICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHBUZXh0ICAgICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHBNYWlsICAgICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZW1haWwnKTtcblxuICAgIC8qIDIpIHdlIHB1dCB0aGVpciBjbGFzc2VzICovXG4gICAgYWJvdXRDYW52YXMuY2xhc3NOYW1lICAgID0gJ2lubmVyLWNhbnZhcyBhYm91dCc7XG4gICAgcFRpdGxlMS5jbGFzc05hbWUgICAgICAgID0gJ3Ntb2wtdGV4dCc7XG4gICAgYWJvdXRCb2FyZC5jbGFzc05hbWUgICAgID0gJ2Fib3V0LWJvYXJkJztcbiAgICByaWdodFBhcnQuY2xhc3NOYW1lICAgICAgPSAnYWJvdXQtY29udGVudCc7XG4gICAgcFRpdGxlMi5jbGFzc05hbWUgICAgICAgID0gJ25vcm1pZS10ZXh0JztcbiAgICBwVGV4dC5jbGFzc05hbWUgICAgICAgICAgPSAnbm9ybWllLXRleHQnO1xuICAgIHBNYWlsLmNsYXNzTmFtZSAgICAgICAgICA9ICdub3JtaWUtdGV4dCBlbWFpbCc7XG4gICAgZ3Jhbm55Q29udGFpbmVyLmNsYXNzTmFtZT0gJ2dyYW5ueS1jb250YWluZXInO1xuICAgIGdyYW5ueUltZy5jbGFzc05hbWUgICAgICA9ICdncmFubnktaW1nJztcbiAgICBcbiAgICAvKiAzKSB3ZSBwdXQgdGhlaXIgaW5uZXIgdGV4dCAqL1xuICAgIHBUaXRsZTEuaW5uZXJUZXh0ID0gJ0Fib3V0IHVzISc7IFxuICAgIHBUaXRsZTIuaW5uZXJUZXh0ID0gJ1lvdSBkb25cXCd0IGtub3cgdXM/XFxuVGhlIGNvb2sgaXMgYWN0dWFsbHkgeW91ciBvd24gZ3JhbmRtb3RoZXIuXFxuJytcbiAgICAgICAgICAgICAgICAgICAgICAgICdUaGF0XFwncyByaWdodCwgd2UgaGlyZWQgaGVyLlxcbkhvdyBkaWQgeW91IGV4cGVjdCB3ZSByZXBsaWNhdGUgaGVyIGZvb2Q/JztcbiAgICBwVGV4dC5pbm5lclRleHQgICA9ICdZb3UgY2FuIGNvbnRhY3QgdXMgd2l0aCB0aGlzIHRvdGFsIHJlYWwgZS1tYWlsOiAnO1xuICAgIHBNYWlsLmlubmVyVGV4dCAgID0gJ3lvdXJncmFubnlyb2Nrc0BncmFubnlza2l0Y2hlbi5jb20nO1xuICAgIGdyYW5ueUltZy5zcmMgICAgID0gZ3Jhbm55O1xuICAgIFxuXG5cbiAgICAvKiAzKSBCdXQgaXQncyB0aGUgcGVsdmljIHRocnVzdCAqL1xuICAgIGFib3V0Q2FudmFzLmFwcGVuZChwVGl0bGUxLCBzZXBhcmF0aW9uLCBhYm91dEJvYXJkKTtcbiAgICBncmFubnlDb250YWluZXIuYXBwZW5kKGdyYW5ueUltZyk7XG4gICAgYWJvdXRCb2FyZC5hcHBlbmQoZ3Jhbm55Q29udGFpbmVyLCByaWdodFBhcnQpO1xuXG4gICAgLyogNCkgdGhhdCByZWFsbHkgZHJpdmVzIHlvdSBpbnNhbmUgKi9cbiAgICByaWdodFBhcnQuYXBwZW5kKHBUaXRsZTIscFRleHQscE1haWwpO1xuICAgIFxuICAgIC8qIDUpIGxldCdzIGRvIHRoZSB0aW1lIHdhcnAgYWdhaW4hISAqL1xuICAgIGZhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dENhbnZhcyk7XG5cbiAgICAvLyAgLyogNikgV2UgaW5pdCB0aGUgbWFwICovXG4gICAgLy8gIHdpbmRvdy5pbml0TWFwID0gaW5pdE1hcDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtsb2FkQWJvdXR9OyIsImltcG9ydCBDcm9xdWV0YXMgZnJvbSAnLi9pbWFnZXMvY3JvcXVldGFzX3Jlc2l6ZWQuanBnJzsgLy8gVGhlIGNyb3F1ZXR0ZSAobW9zdCBpbXBvcnRhbnQgZWxlbWVudCBvZiB0aGlzIHdlYilcbi8qIFRoaXMgY29kZSB1bmRlciBoZXJlIHdpbGwgcHJvYmFibHkgYmUgZXhwb3J0ZWQgaW50byBhIG1vZHVsZSAqL1xuLyogV2UncmUgZ29ubmEgYnVpbGQgdGhlIGhvbWUgY2FudmFzIG5vdyAqL1xuZnVuY3Rpb24gbG9hZEhvbWUgKGZhdGhlckNvbnRhaW5lciwgbG9hZE1lbnUpIHtcblxuICAgIC8qIDEpIHdlIGRlZmluZSBldmVyeSBodG1sIGVsZW1lbnQgd2UncmUgZ29ubmEgcHV0IGludG8gdGhlIGNhbnZhcyAqL1xuICAgIGNvbnN0IGhvbWVDYW52YXMgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhvbWVUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHBUaXRsZTEgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwVGl0bGUyICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3Qgc2VwYXJhdGlvbiAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBjb25zdCBwVGV4dCAgICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbXlDcm9xdWV0YSAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgYnRuTWVudSAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxuICAgIFxuXG4gICAgLyogMikgd2UgcHV0IHRoZWlyIGNsYXNzZXMgKi9cbiAgICBob21lQ2FudmFzLmNsYXNzTmFtZSA9ICdpbm5lci1jYW52YXMgaG9tZSc7XG4gICAgcFRpdGxlMS5jbGFzc05hbWUgICAgPSAnYmlnLXRleHQnO1xuICAgIHBUaXRsZTIuY2xhc3NOYW1lICAgID0gJ3Ntb2wtdGV4dCc7XG4gICAgcFRleHQuY2xhc3NOYW1lICAgICAgPSAnbm9ybWllLXRleHQnO1xuICAgIG15Q3JvcXVldGEuY2xhc3NOYW1lID0gJ2Nyb3F1ZXRhJztcbiAgICBidG5NZW51LmNsYXNzTmFtZSAgICA9ICdidXR0b24tZm9yLW1lbnUnO1xuICAgIFxuICAgIFxuXG4gICAgLyogMykgd2UgcHV0IHRoZWlyIGlubmVyIHRleHQgKi9cbiAgICBwVGl0bGUxLmlubmVyVGV4dCA9ICdXZWxjb21lIHRvJzsgXG4gICAgcFRpdGxlMi5pbm5lclRleHQgPSAneW91ciBncmFubnlcXCdzIGtpdGNoZW4nO1xuICAgIHBUZXh0LmlubmVyVGV4dCAgID0gJ0Vuam95IHRoZSBjb29raW5nIG9ubHkgeW91ciBncmFubnkgY2FuIGNvb2snO1xuICAgIG15Q3JvcXVldGEuc3JjICAgID0gQ3JvcXVldGFzOyAvLyBub3QgYSB0ZXh0IGJ1dCBhIHNvdXJjZSBcbiAgICBidG5NZW51LmlubmVyVGV4dCA9ICdNRU5VJztcbiAgICBcblxuICAgIC8qIDQpIHdlIHB1dCB0aGVpciBmdW5jdGlvbnMgKi9cbiAgICBidG5NZW51Lm9uY2xpY2sgPSBsb2FkTWVudTtcblxuICAgIC8qIDUpIEJ1dCBpdCdzIHRoZSBwZWx2aWMgdGhydXN0ICovXG4gICAgaG9tZVRpdGxlRGl2LmFwcGVuZChwVGl0bGUxLHBUaXRsZTIsc2VwYXJhdGlvbixwVGV4dCxteUNyb3F1ZXRhLGJ0bk1lbnUpO1xuXG4gICAgLyogNikgdGhhdCByZWFsbHkgZHJpdmVzIHlvdSBpbnNhbmUgKi9cbiAgICBob21lQ2FudmFzLmFwcGVuZENoaWxkKGhvbWVUaXRsZURpdik7XG4gICAgXG4gICAgLyogNykgbGV0J3MgZG8gdGhlIHRpbWUgd2FycCBhZ2FpbiEhICovXG4gICAgZmF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVDYW52YXMpO1xufTtcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge2xvYWRIb21lfTsiLCJpbXBvcnQgQ3JvcXVldGFzIGZyb20gJy4vaW1hZ2VzL2Nyb3F1ZXRhc19yZXNpemVkLmpwZyc7IC8vIFRoaXMgaW1hZ2Ugd2FzIHRha2VuIGZyb20gaW50ZXJuZXQuLi5idXQgSSBkaWQgbm90IHNhdmUgd2hvIGRpZCBpdC4gSXQncyBhIGZyZWUgaW1hZ2UgdGhvIDooXG5pbXBvcnQgVG9ydGlsbGEgIGZyb20gJy4vaW1hZ2VzL3RvcnRpbGxhX3Jlc2l6ZWQuanBnJzsgLy8gVGhpcyBpbWFnZSB3YXMgdGFrZW4gZnJvbSBpbnRlcm5ldC4uLmJ1dCBJIGRpZCBub3Qgc2F2ZSB3aG8gZGlkIGl0LiBJdCdzIGEgZnJlZSBpbWFnZSB0aG8gOihcbmltcG9ydCBDYWNob3BvICAgZnJvbSAnLi9pbWFnZXMvY2FjaG9wb19yZXNpemVkLmpwZyc7IC8vIFRoaXMgaW1hZ2Ugd2FzIHRha2VuIGJ5IG1lIGluIExsYW5lcywgQXN0dXJpYXMuXG5pbXBvcnQgQ2h1bGV0b24gIGZyb20gJy4vaW1hZ2VzL2NodWxldG9uX3Jlc2l6ZWQuanBnJzsgLy8gVGhpcyBpbWFnZSB3YXMgdGFrZW4gYnkgbWUgaW4gTGXDs24sIENhc3RpbGxhIHkgTGXDs24uXG5pbXBvcnQgR2FtYmFzICAgIGZyb20gJy4vaW1hZ2VzL2dhbWJhc19yZXNpemVkLmpwZyc7IC8vIFRoaXMgaW1hZ2Ugd2FzIHRha2VuIGJ5IG1lIGluIExsYW5lcywgQXN0dXJpYXMuXG5pbXBvcnQgUGFlbGxhICAgIGZyb20gJy4vaW1hZ2VzL3BhZWxsYV9yZXNpemVkLmpwZyc7IC8vIFRoaXMgaW1hZ2Ugd2FzIHRha2VuIGJ5IG1lIGluIG15IG93biBraXRjaGVuLCB5dXAsIEkgY29va2VkIHRoaXMgbGl0dGxlIGJhYnkuIEknbSBhbHNvIFZFUlkgc2luZ2xlLiBTbyBsYWRpZXMgYW5kIG1pbGxpb25haXJlIGdlbnRsZW1hbiwgaGl0IG1lIHVwIGlmIHlvdSB3YW5uYSB0YXN0ZSBpdC5cblxuLyogVG8gZ2VuZXJhdGUgZWFjaCBjYXJkIGNvbnRhaW5pbmcgb3VyIG1lbnUgd2UncmUgZ29ubmEgZGVmaW5lIGZpcnN0IGFuIGFycmF5IHdpdGggYWxsIG91ciBkaXNoZXMgKi9cbmNvbnN0IERpc2ggPSAodGl0bGUsIGltYWdlLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIHJldHVybiB7dGl0bGUsIGltYWdlLCBkZXNjcmlwdGlvbn07XG59O1xuY29uc3QgZGlzaGVzID0gW1xuICAgIC8qIENyb3F1ZXRhcyAqL1xuICAgIERpc2goJ0Nyb3F1ZXRhcycsIENyb3F1ZXRhcywgJ1doYXQgbmllY2UgZG9lc25cXCd0IGxvdmUgaGVyIGdyYW5ueSBjcm9xdWV0dGVzPycpLFxuICAgIC8qIFRvcnRpbGxhICAqL1xuICAgIERpc2goJ1RvcnRpbGxhJywgIFRvcnRpbGxhLCAgJ0hlciBzZWNvbmQgYmVzdCBkaXNoLCB0aGUgVG9ydGlsbGEuIFdpdGggb25pb24uIEFzIGFsbCB0aGluZ3Mgc2hvdWxkIGJlLicpLFxuICAgIC8qIEdhbWJhcyAgICAqL1xuICAgIERpc2goJ0dhbWJhcycsICAgIEdhbWJhcywgICAgJ091ciB5dW1teSBsaXR0bGUgc2hyaW1wcywgdGFzdHluZXNzIGlzIG1hZ2ljLicpLFxuICAgIC8qIFBhZWxsYSAgICAqL1xuICAgIERpc2goJ1BhZWxsYScsICAgIFBhZWxsYSwgICAgJ1lvdVxcJ3JlIGZhdm9yaXRlIGZvb2QuIFlvdVxcJ3JlIGdyYW5ueSBzcGVjaWFsaXR5LiBUaGUgb25seSBhbmQgb25lIFBhZWxsYScpLCAgICBcbiAgICAvKiBDaHVsZXRvbiAgKi9cbiAgICBEaXNoKCdDaHVsZXRvbicsICBDaHVsZXRvbiwgICdCZXN0IG1lYXQgeW91IGhhdmUgZXZlciB0YXN0ZWQnKSxcbiAgICAvKiBDYWNob3BvICAgKi9cbiAgICBEaXNoKCdDYWNob3BvJywgICBDYWNob3BvLCAgICdUaGUgYXN0dXJpYW4gc3BlY2lhbGl0eSwgeW91IGNhbiBmYXR0ZW4gMTAga2lsb3MganVzdCBieSBsb29raW5nIGF0IHRoaXMuJylcbl07XG5cbi8qIFRoaXMgY29kZSB1bmRlciBoZXJlIHdpbGwgcHJvYmFibHkgYmUgZXhwb3J0ZWQgaW50byBhIG1vZHVsZSAqL1xuLyogV2UncmUgZ29ubmEgYnVpbGQgdGhlIGhvbWUgY2FudmFzIG5vdyAqL1xuZnVuY3Rpb24gbG9hZE1lbnUgKGZhdGhlckNvbnRhaW5lcikge1xuXG4gICAgLyogMSkgd2UgZGVmaW5lIGV2ZXJ5IGh0bWwgZWxlbWVudCB3ZSdyZSBnb25uYSBwdXQgaW50byB0aGUgY2FudmFzICovXG4gICAgY29uc3QgbWVudUNhbnZhcyAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcFRpdGxlMSAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIC8vY29uc3Qgc2VwYXJhdGlvbiAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBjb25zdCBjYXJkQ2FudmFzICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvKiBTaW5jZSB3ZSB3YW50IHRvIGR5bmFtaWNhbGx5IGdlbmVyYXRlIHRoZSBjYXJkcywgd2UnbGwgZG8gdGhhdCBzdHVmZiBsYXRlciAqL1xuICAgIFxuICAgIC8qIDIpIHdlIHB1dCB0aGVpciBjbGFzc2VzICovXG4gICAgbWVudUNhbnZhcy5jbGFzc05hbWUgICAgPSAnaW5uZXItY2FudmFzIG1lbnUnO1xuICAgIHBUaXRsZTEuY2xhc3NOYW1lICAgICAgID0gJ2JpZy10ZXh0JztcbiAgICBjYXJkQ2FudmFzLmNsYXNzTmFtZSAgICA9ICdjYXJkLWNhbnZhcyc7XG5cbiAgICAvKiAzKSB3ZSBwdXQgdGhlaXIgaW5uZXIgdGV4dCAqL1xuICAgIHBUaXRsZTEuaW5uZXJUZXh0ID0gJ0Nob29zZSB5b3VyIGRlbGlzaDonOyBcbiAgICBcbiAgICAvKiA0KSBCdXQgaXQncyB0aGUgcGVsdmljIHRocnVzdCAqL1xuICAgIC8vbWVudUNhbnZhcy5hcHBlbmQocFRpdGxlMSxzZXBhcmF0aW9uLGNhcmRDYW52YXMpO1xuICAgIG1lbnVDYW52YXMuYXBwZW5kKHBUaXRsZTEsY2FyZENhbnZhcyk7XG5cbiAgICAvKiA1KSB0aGF0IHJlYWxseSBkcml2ZXMgeW91IGluc2FuZSAqL1xuICAgIGdlbmVyYXRlQ2FyZE1lbnUoY2FyZENhbnZhcyk7IC8qIGl0IGFwcGVuZHMgZXZlcnkgY2FyZCBmb29kIHRvIGNhcmRDYW52YXMgKi9cbiAgICBcbiAgICAvKiA2KSBsZXQncyBkbyB0aGUgdGltZSB3YXJwIGFnYWluISEgKi9cbiAgICBmYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNhbnZhcyk7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ2FyZE1lbnUoY2FudmFzKSB7XG5cbiAgICBkaXNoZXMuZm9yRWFjaCAoKGRpc2gpID0+IHtcblxuICAgICAgICAvKiAxKSBXZSBjcmVhdGUgdGhlIGh0bWwgZWxlbWVudHMgKi9cbiAgICAgICAgY29uc3QgY2FyZCAgICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGNhcmRUaXRsZSAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgY2FyZEltYWdlICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnN0IGNhcmRUeHQgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHQnKTtcblxuICAgICAgICAvKiAyKSB3ZSBwdXQgY2xhc3NlcyBmb3Igb3VyIGNvb2wgY3NzICovXG4gICAgICAgIGNhcmQuY2xhc3NOYW1lICAgICAgPSAnY2FyZCc7XG4gICAgICAgIGNhcmRUaXRsZS5jbGFzc05hbWUgPSAnc21vbC10ZXh0JztcbiAgICAgICAgY2FyZFR4dC5jbGFzc05hbWUgICA9ICdub3JtaWUtdGV4dCc7XG4gICAgICAgIGNhcmRJbWFnZS5jbGFzc05hbWUgPSAnY2FyZC1pbWFnZSc7XG5cbiAgICAgICAgLyogMykgd2UgcHV0IGl0J3MgdGV4dCAqL1xuICAgICAgICBjYXJkVGl0bGUuaW5uZXJUZXh0ID0gZGlzaC50aXRsZTtcbiAgICAgICAgY2FyZEltYWdlLnNyYyAgICAgICA9IGRpc2guaW1hZ2U7XG4gICAgICAgIGNhcmRUeHQuaW5uZXJUZXh0ICAgPSBkaXNoLmRlc2NyaXB0aW9uO1xuICAgICAgICBcbiAgICAgICAgY2FyZC5hcHBlbmQoY2FyZFRpdGxlLGNhcmRJbWFnZSxjYXJkVHh0KTtcbiAgICAgICAgY2FudmFzLmFwcGVuZENoaWxkKGNhcmQpO1xuXG4gICAgfSk7XG5cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHtsb2FkTWVudX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuLyogSW1wb3J0IHNlY3Rpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnOyAvLyBTQ1NTIHN0eWxlcyBmb3Igb3VyIHdlYlxuaW1wb3J0IEhvbWVQYWdlICBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IE1lbnVQYWdlICBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IEFib3V0UGFnZSBmcm9tICcuL2Fib3V0LmpzJztcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogV2UgcmV0cmlldmUgdGhlIGNvbnRhaW5lciwgdGhhdCB3aWxsIGhvbGQgYWxsIG91ciB3ZWIgKi9cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcblxuXG4vKiBGb3IgdGhlIGhlYWRlciwgd2UncmUgZ29ubmEgbWFrZSBhIGRpdiB0aGF0IHdpbGwgY29udGFpbiB0aHJlZSBkaXZzLCBlYWNoIG9mIGVtIHdpbGwgYmUgdXNlZCB0byBtb3ZlIHRoZSB1c2VyIGJldHdlZW4gdGhlIHdlYiAgKi9cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaGVhZGVyLmNsYXNzTmFtZSA9ICdoZWFkZXInO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbi8qIFRoZSB0aHJlZSBkaXZzIGluc2lkZSB0aGUgaGVhZGVyICovXG5jb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5ob21lRGl2LmNsYXNzTmFtZSA9ICdob21lLWJ1dHRvbic7XG5ob21lRGl2LmlubmVyVGV4dCA9ICdIT01FJztcbmhvbWVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkSG9tZSk7XG5cbmNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lbnVEaXYuY2xhc3NOYW1lID0gJ21lbnUtYnV0dG9uJztcbm1lbnVEaXYuaW5uZXJUZXh0ID0gJ01FTlUnO1xubWVudURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRNZW51KTtcblxuY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmFib3V0RGl2LmNsYXNzTmFtZSA9J2Fib3V0LWJ1dHRvbic7XG5hYm91dERpdi5pbm5lclRleHQgPSAnQUJPVVQgVVMnO1xuYWJvdXREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkQWJvdXQpO1xuXG4vKiBXZSBhcHBlbmQgdGhlIHRocmVlIGRpdi1idXR0b25zIHRvIGhlYWRlciwgc2luY2Ugd2Ugd2FudCBlbSBpbnNpZGUgKi9cbmhlYWRlci5hcHBlbmRDaGlsZChob21lRGl2KTtcbmhlYWRlci5hcHBlbmRDaGlsZChtZW51RGl2KTtcbmhlYWRlci5hcHBlbmRDaGlsZChhYm91dERpdik7XG5cbi8qIG5vdywgd2UgbmVlZCBhIGNhbnZhcyB0byBkaXNwbGF5IG91ciB3ZWIsIGl0IHdpbGwgYmUgYmVoaW5kIHRoZSBoZWFkZXIgKi9cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGNhbnZhcyk7XG5cbi8qIHVuZGVyIHRoZSBjYW52YXMgd2Ugd2lsbCBoYXZlIGEgZm9vdGVyLCB3aGljaCBwcm9iYWJseSB3aWxsIGhvbGQgbm90aGluZyBidXQgd2lsbCBoYXZlIHNvbWUgd2lkdGgvaGVpZ2h0IGFraW4gdG8gdGhlIGhlYWRlciBhbmQgd2lsbCBoYXZlIHNvbWUgYmFja2dyb3VuZCBjb2xvciAqL1xuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5mb290ZXIuY2xhc3NOYW1lID0nZm9vdGVyJztcbmZvb3Rlci5pbm5lclRleHQgPSAnRGVzaWduZWQgYnkgUmljIGZvciBUaGUgT2RpbiBQcm9qZWN0JztcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG5sb2FkSG9tZShjYW52YXMpO1xuXG4vLyBJbmRleC5qcyBmdW5jdGlvbnNcbmZ1bmN0aW9uIGNsZWFuQ2FudmFzICgpIHtcblxuICAgIHdoaWxlIChjYW52YXMuZmlyc3RDaGlsZCkge1xuICAgICAgICBjYW52YXMucmVtb3ZlQ2hpbGQoY2FudmFzLmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29uc29sZS5sb2coJzxpbmRleC5qcyBsb2FkSG9tZT4nKTtcbiAgICBjb25zb2xlLmxvZyhjYW52YXMpO1xuICAgIGNsZWFuQ2FudmFzKCk7XG4gICAgY2FudmFzLmNsYXNzTmFtZSA9ICdjYW52YXMtd2ViIGhvbWUnO1xuICAgIEhvbWVQYWdlLmxvYWRIb21lKGNhbnZhcywgbG9hZE1lbnUpO1xufVxuXG5mdW5jdGlvbiBsb2FkTWVudSAoKSB7XG4gICAgY29uc29sZS5sb2coJzxpbmRleC5qcyBsb2FkTWVudT4nKTtcbiAgICBjb25zb2xlLmxvZyhjYW52YXMpO1xuICAgIGNsZWFuQ2FudmFzKCk7XG4gICAgY2FudmFzLmNsYXNzTmFtZSA9ICdjYW52YXMtd2ViIG1lbnUnO1xuICAgIE1lbnVQYWdlLmxvYWRNZW51KGNhbnZhcyk7XG59O1xuXG5mdW5jdGlvbiBsb2FkQWJvdXQgKCkge1xuICAgIGNvbnNvbGUubG9nKCc8aW5kZXguanMgbG9hZEFib3V0PicpO1xuICAgIGNvbnNvbGUubG9nKGNhbnZhcyk7XG4gICAgY2xlYW5DYW52YXMoKTtcbiAgICBjYW52YXMuY2xhc3NOYW1lID0gJ2NhbnZhcy13ZWIgYWJvdXQnO1xuICAgIEFib3V0UGFnZS5sb2FkQWJvdXQoY2FudmFzKTtcbn07XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==