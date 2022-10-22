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
___CSS_LOADER_EXPORT___.push([module.id, "/* variables */\n/* global css */\nhtml {\n  width: 100vw;\n  height: 100vh;\n  text-align: center;\n  font-family: 'Montserrat', sans-serif; }\n  html body {\n    color: white;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    margin: 0; }\n    html body .header, html body .footer {\n      height: 8vh;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      font-size: 30px;\n      background-color: rgba(0, 0, 0, 0.719);\n      text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black, -0.07em -0.07em black, -0.07em 0.07em black, 0.07em -0.07em black, 0.07em 0.07em black; }\n    html body .header .home-button:hover, html body .header .menu-button:hover, html body .header .about-button:hover {\n      color: #ffa61f;\n      transform: scale(1.5, 1.5); }\n    html body .header .home-button, html body .header .menu-button, html body .header .about-button {\n      margin-right: 5vw;\n      margin-left: 5vw; }\n\n/* CSS for Home */\n.canvas-web.home {\n  min-height: 60rem; }\n\n.inner-canvas.home {\n  height: 45rem;\n  width: 600px;\n  margin: auto;\n  background-color: rgba(0, 0, 0, 0.719); }\n  .inner-canvas.home .big-text {\n    font-family: \"Herr Von Muellerhoff\", cursive;\n    font-size: 150px;\n    text-align: center;\n    text-transform: capitalize;\n    margin-bottom: 0;\n    margin-top: 2rem;\n    color: #ffa61f; }\n  .inner-canvas.home .smol-text {\n    font-size: 40px;\n    font-weight: bold;\n    margin-top: -50px;\n    margin-bottom: 0px;\n    text-align: center;\n    text-transform: uppercase;\n    color: #ffa61f;\n    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black; }\n  .inner-canvas.home .normie-text {\n    display: block;\n    color: #ffe6ce;\n    font-size: 20px; }\n  .inner-canvas.home hr {\n    width: 280px;\n    border: 2px solid #c59d5f;\n    margin: 24px auto; }\n  .inner-canvas.home .button-for-menu {\n    display: block;\n    margin: auto;\n    border: 2px solid #222;\n    border-radius: 26px;\n    background-color: #ffa61f;\n    border: 2px solid #ffe6ce;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 70px;\n    margin-top: 20px;\n    color: whitesmoke;\n    text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2); }\n  .inner-canvas.home .button-for-menu:hover, .inner-canvas.home .button-for-menu:active {\n    background-color: #ffe6ce;\n    border: 2px solid #ffe6ce; }\n\n/* CSS for Menu */\n.canvas-web.menu {\n  min-height: 50rem; }\n\n.inner-canvas.menu {\n  margin: auto;\n  /* Grid for all the articles projects */\n  /* copied from home, candidates to be globalized: */ }\n  .inner-canvas.menu .card-canvas {\n    margin: auto;\n    display: grid;\n    width: 75%;\n    grid-template-columns: repeat(2, minmax(450px, 1fr));\n    gap: 15px; }\n    .inner-canvas.menu .card-canvas .card {\n      margin: auto;\n      max-height: 35rem;\n      max-width: 41rem;\n      margin: 10px;\n      background-color: rgba(0, 0, 0, 0.719);\n      border: 1px solid black; }\n      .inner-canvas.menu .card-canvas .card .card-image {\n        max-width: 400px;\n        max-height: 400px;\n        display: block;\n        margin: auto;\n        margin-bottom: 10px; }\n  @media only screen and (max-width: 1000px) {\n    .inner-canvas.menu .card-canvas {\n      width: auto; } }\n  .inner-canvas.menu .big-text {\n    font-family: \"Herr Von Muellerhoff\", cursive;\n    font-size: 10rem;\n    text-align: center;\n    text-transform: capitalize;\n    margin-bottom: 3rem;\n    margin-top: 3rem;\n    color: #ffa61f;\n    background-color: rgba(0, 0, 0, 0.719);\n    text-shadow: 0.07em 0 black; }\n  .inner-canvas.menu .smol-text {\n    font-size: 2rem;\n    font-weight: bold;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    text-align: center;\n    text-transform: uppercase;\n    color: #ffa61f;\n    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black; }\n  .inner-canvas.menu .normie-text {\n    margin-bottom: 1rem;\n    display: block;\n    color: #fa992b;\n    font-size: 1.5rem;\n    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black; }\n\n/* CSS for about */\n.canvas-web.about {\n  min-height: 51rem; }\n\n.inner-canvas.about {\n  margin-top: 10%;\n  margin-right: auto;\n  margin-left: auto;\n  margin-bottom: 10%;\n  background-color: rgba(0, 0, 0, 0.719); }\n  .inner-canvas.about .about-board {\n    display: flex;\n    justify-content: center;\n    align-content: center; }\n    .inner-canvas.about .about-board #map {\n      width: 90%;\n      height: 28rem;\n      margin: 5%; }\n  .inner-canvas.about .about-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 50%;\n    flex-shrink: 0; }\n  .inner-canvas.about .smol-text {\n    font-size: 3rem;\n    font-weight: bold;\n    margin-bottom: 0px;\n    text-align: center;\n    text-transform: uppercase;\n    color: #ffa61f;\n    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black; }\n  .inner-canvas.about hr {\n    width: 280px;\n    border: 2px solid #c59d5f;\n    margin: 24px auto; }\n  .inner-canvas.about .normie-text {\n    display: block;\n    color: #ffe6ce;\n    font-size: 2rem;\n    display: inline; }\n  .inner-canvas.about .email {\n    font-style: italic;\n    font-weight: bold;\n    display: inline; }\n  @media only screen and (max-width: 1000px) {\n    .inner-canvas.about .smol-text {\n      font-size: 18px; }\n    .inner-canvas.about .normie-text {\n      font-size: 18px; } }\n\n/* Media rules for cellphone */\n@media only screen and (max-width: 600px) {\n  html {\n    width: auto;\n    height: 600px; }\n    html .canvas-web {\n      min-height: auto; }\n    html .card-canvas {\n      width: auto; } }\n", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["/* variables */\n$bgcolor: rgba(0, 0, 0, 0.719);\n$textcolor-white: rgb(255, 255, 255);\n$textcolor-orange: rgb(255, 166, 31);\n$textcolor-orange-light: rgb(255, 230, 206);\n$text-shadow8:   0.07em 0 black,\n                0 0.07em black,\n                -0.07em 0 black,\n                0 -0.07em black,\n                -0.07em -0.07em black,\n                -0.07em 0.07em black,\n                0.07em -0.07em black,\n                0.07em 0.07em black;\n$text-shadow4:   0.07em 0 black,\n                0 0.07em black,\n                -0.07em 0 black,\n                0 -0.07em black;\n$text-shadow1:   0.07em 0 black;\n              \n               \n$fontsize: 30px;\n@import url(\"https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff&family=Montserrat:wght@300;400;700&display=swap\");\n\n/* global css */\n\nhtml {\n    width:100vw;\n    height:100vh;\n    text-align:center;\n    font-family: 'Montserrat', sans-serif;\n\n\n    body {\n        color: $textcolor-white;\n        background: url('./images/background.jpg');\n        background-size:cover;\n        margin:0;\n          \n\n        .header, .footer {\n            height: 8vh;\n            display:flex;\n            flex-direction:row;\n            justify-content: center;\n            align-items: center;\n            font-size: $fontsize;\n            background-color: $bgcolor;\n            text-shadow: $text-shadow8;\n            \n        }\n\n        .header {\n            \n            .home-button:hover, .menu-button:hover, .about-button:hover {\n                color: $textcolor-orange;\n                //color: rgb(178, 210, 224);\n                transform:scale(1.5,1.5);\n\n            }\n            .home-button, .menu-button, .about-button {\n                margin-right:5vw;\n                margin-left:5vw;\n            }\n    \n\n        }\n\n    }\n}\n\n/* CSS for Home */\n.canvas-web.home {\n    min-height:60rem;\n}\n.inner-canvas.home {\n    height:45rem;\n    width: 600px;\n    margin:auto;\n    background-color: $bgcolor;\n\n\n    .big-text {\n        font-family: \"Herr Von Muellerhoff\", cursive;\n        font-size: 150px;\n        text-align: center;\n        text-transform: capitalize;\n        margin-bottom:0;\n        margin-top:2rem;\n        color:$textcolor-orange;\n\n    }\n\n    .smol-text {\n        font-size: 40px;\n        font-weight: bold;\n        margin-top: -50px;\n        margin-bottom:0px;\n        text-align: center;\n        text-transform: uppercase;\n\n        color:$textcolor-orange;\n        text-shadow: $text-shadow4;\n\n        \n    }\n\n    .normie-text {\n        display:block;\n        color:$textcolor-orange-light;\n        font-size: 20px;\n    }\n\n    hr {\n        width: 280px;\n        border: 2px solid #c59d5f;\n        margin: 24px auto;\n    }\n\n    .button-for-menu {\n        display:block;\n        margin:auto;\n        border: 2px solid #222;\n        border-radius: 26px;\n        background-color: $textcolor-orange;\n        border: 2px solid $textcolor-orange-light;\n        font-family:'Montserrat', sans-serif;\n        font-size:70px;\n        margin-top:20px;\n        color:whitesmoke;\n        text-shadow: 6px 6px 0px rgba(0,0,0,0.2)\n \n    }\n\n    .button-for-menu:hover, .button-for-menu:active {\n        background-color: $textcolor-orange-light;\n        border: 2px solid $textcolor-orange-light;\n    }\n}\n\n/* CSS for Menu */\n.canvas-web.menu {\n    min-height:50rem;\n}\n.inner-canvas.menu {\n\n    margin:auto;\n\n\n    /* Grid for all the articles projects */\n    .card-canvas {\n        margin:auto;\n        display:grid;\n        width:75%; \n        grid-template-columns: repeat(2, minmax(450px, 1fr));\n        gap:15px;\n        \n        .card {\n            margin:auto;\n            max-height:35rem;\n            max-width:41rem;\n            margin: 10px;\n            background-color: $bgcolor; \n            border: 1px solid black;  \n\n            .card-image {\n                max-width:400px;\n                max-height:400px;\n                display:block;\n                margin:auto;\n                margin-bottom:10px;\n            }\n        }\n        \n    }\n\n    @media only screen and (max-width:1000px){\n        .card-canvas {\n          width:auto;\n\n        }\n    }\n    \n/* copied from home, candidates to be globalized: */\n    .big-text {\n        font-family: \"Herr Von Muellerhoff\", cursive;\n        font-size: 10rem; // cambiado\n        text-align: center;\n        text-transform: capitalize;\n        margin-bottom:3rem;\n        margin-top:3rem; // cambiado\n        color:$textcolor-orange;\n        background-color: $bgcolor;\n        text-shadow:$text-shadow1;\n\n    }\n\n    .smol-text {\n        font-size: 2rem; // cambiado \n        font-weight: bold;\n        //margin-top: -50px; cambiado\n        margin-top:1rem;\n        margin-bottom:1rem; // cambiado\n        text-align: center;\n        text-transform: uppercase;\n\n        color:$textcolor-orange;\n        text-shadow: $text-shadow4;\n\n        \n    }\n\n    .normie-text {\n        margin-bottom:1rem;\n        display:block;\n        color:rgb(250, 153, 43);\n        font-size: 1.5rem;\n        text-shadow:$text-shadow4;\n    }\n                  \n\n}\n/* CSS for about */\n.canvas-web.about {\n    min-height:51rem;\n}\n.inner-canvas.about {\n    margin-top: 10%;\n    margin-right:auto;\n    margin-left:auto;\n    margin-bottom: 10%;\n    background-color: $bgcolor;\n\n    .about-board {\n        display:flex;\n        justify-content: center;\n        align-content: center;\n\n        #map {\n            width: 90%;\n            height:28rem;\n            margin:5%;\n            \n    \n        }\n    }\n    .about-content {\n        display:flex;\n        flex-direction: column;\n        justify-content: center;\n        width:50%;\n        flex-shrink: 0;\n    }\n\n    .smol-text {\n        font-size: 3rem;\n        font-weight: bold;\n        margin-bottom:0px;\n        text-align: center;\n        text-transform: uppercase;\n\n        color:$textcolor-orange;\n        text-shadow: $text-shadow4;\n\n        \n    }\n    hr {\n        width: 280px;\n        border: 2px solid #c59d5f;\n        margin: 24px auto;\n    }\n\n    .normie-text {\n        display:block;\n        color:$textcolor-orange-light;\n        font-size: 2rem;\n        display:inline;\n    }\n\n    .email {\n        font-style:italic;\n        font-weight:bold;\n        display:inline;\n    }\n\n    @media only screen and (max-width:1000px) {\n\n        .smol-text {\n          font-size:18px;\n\n        }\n\n        .normie-text {\n            font-size:18px;\n        }\n\n\n    }\n}\n\n        \n\n\n               \n\n                \n\n\n//                 /* Grid for all the articles projects */\n//                 .card-canvas {\n//                     max-width: 80vw;\n//                     display:grid;\n//                     grid-template-columns: repeat(2, minmax(400px, 1fr));\n//                     gap:15px;\n\n//                 }\n//                 .card-canvas .card {\n//                     max-width: 600px;\n//                     max-height: 600px;\n//                     margin: 10px;\n                    \n//                     background-color: $bgcolor; \n//                     border: 1px solid black;  \n//                 }\n\n\n//                 .card p {\n//                 padding:5px;\n//                 }\n\n//                 .card-image {\n//                     max-width:400px;\n//                     max-height:400px;\n//                 }\n\n\n//             }\n//             .menu {\n//                 /* if we're displaying menu, we're overriding inner-canvas properties */\n//                 background-color: rgba(255, 255, 255, 0);\n//             }\n//     }\n// }\n\n\n/* Media rules for cellphone */\n@media only screen and (max-width:600px) {\n    html {\n        width:auto;\n        height:600px;\n\n        .canvas-web {\n            min-height: auto;\n        }\n        .card-canvas {\n            width:auto;\n        }\n\n    }\n}\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxJQUFJLDJEQUFtQjtBQUN2QiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy5zY3NzP2E2MDkiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1IZXJyK1ZvbitNdWVsbGVyaG9mZiZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiB2YXJpYWJsZXMgKi9cXG4vKiBnbG9iYWwgY3NzICovXFxuaHRtbCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsgfVxcbiAgaHRtbCBib2R5IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBtYXJnaW46IDA7IH1cXG4gICAgaHRtbCBib2R5IC5oZWFkZXIsIGh0bWwgYm9keSAuZm9vdGVyIHtcXG4gICAgICBoZWlnaHQ6IDh2aDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcxOSk7XFxuICAgICAgdGV4dC1zaGFkb3c6IDAuMDdlbSAwIGJsYWNrLCAwIDAuMDdlbSBibGFjaywgLTAuMDdlbSAwIGJsYWNrLCAwIC0wLjA3ZW0gYmxhY2ssIC0wLjA3ZW0gLTAuMDdlbSBibGFjaywgLTAuMDdlbSAwLjA3ZW0gYmxhY2ssIDAuMDdlbSAtMC4wN2VtIGJsYWNrLCAwLjA3ZW0gMC4wN2VtIGJsYWNrOyB9XFxuICAgIGh0bWwgYm9keSAuaGVhZGVyIC5ob21lLWJ1dHRvbjpob3ZlciwgaHRtbCBib2R5IC5oZWFkZXIgLm1lbnUtYnV0dG9uOmhvdmVyLCBodG1sIGJvZHkgLmhlYWRlciAuYWJvdXQtYnV0dG9uOmhvdmVyIHtcXG4gICAgICBjb2xvcjogI2ZmYTYxZjtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSwgMS41KTsgfVxcbiAgICBodG1sIGJvZHkgLmhlYWRlciAuaG9tZS1idXR0b24sIGh0bWwgYm9keSAuaGVhZGVyIC5tZW51LWJ1dHRvbiwgaHRtbCBib2R5IC5oZWFkZXIgLmFib3V0LWJ1dHRvbiB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiA1dnc7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDV2dzsgfVxcblxcbi8qIENTUyBmb3IgSG9tZSAqL1xcbi5jYW52YXMtd2ViLmhvbWUge1xcbiAgbWluLWhlaWdodDogNjByZW07IH1cXG5cXG4uaW5uZXItY2FudmFzLmhvbWUge1xcbiAgaGVpZ2h0OiA0NXJlbTtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MTkpOyB9XFxuICAuaW5uZXItY2FudmFzLmhvbWUgLmJpZy10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZXJyIFZvbiBNdWVsbGVyaG9mZlxcXCIsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMTUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIGNvbG9yOiAjZmZhNjFmOyB9XFxuICAuaW5uZXItY2FudmFzLmhvbWUgLnNtb2wtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY29sb3I6ICNmZmE2MWY7XFxuICAgIHRleHQtc2hhZG93OiAwLjA3ZW0gMCBibGFjaywgMCAwLjA3ZW0gYmxhY2ssIC0wLjA3ZW0gMCBibGFjaywgMCAtMC4wN2VtIGJsYWNrOyB9XFxuICAuaW5uZXItY2FudmFzLmhvbWUgLm5vcm1pZS10ZXh0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbG9yOiAjZmZlNmNlO1xcbiAgICBmb250LXNpemU6IDIwcHg7IH1cXG4gIC5pbm5lci1jYW52YXMuaG9tZSBociB7XFxuICAgIHdpZHRoOiAyODBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2M1OWQ1ZjtcXG4gICAgbWFyZ2luOiAyNHB4IGF1dG87IH1cXG4gIC5pbm5lci1jYW52YXMuaG9tZSAuYnV0dG9uLWZvci1tZW51IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzIyMjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTYxZjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZTZjZTtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA3MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgdGV4dC1zaGFkb3c6IDZweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgfVxcbiAgLmlubmVyLWNhbnZhcy5ob21lIC5idXR0b24tZm9yLW1lbnU6aG92ZXIsIC5pbm5lci1jYW52YXMuaG9tZSAuYnV0dG9uLWZvci1tZW51OmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmU2Y2U7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmU2Y2U7IH1cXG5cXG4vKiBDU1MgZm9yIE1lbnUgKi9cXG4uY2FudmFzLXdlYi5tZW51IHtcXG4gIG1pbi1oZWlnaHQ6IDUwcmVtOyB9XFxuXFxuLmlubmVyLWNhbnZhcy5tZW51IHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIC8qIEdyaWQgZm9yIGFsbCB0aGUgYXJ0aWNsZXMgcHJvamVjdHMgKi9cXG4gIC8qIGNvcGllZCBmcm9tIGhvbWUsIGNhbmRpZGF0ZXMgdG8gYmUgZ2xvYmFsaXplZDogKi8gfVxcbiAgLmlubmVyLWNhbnZhcy5tZW51IC5jYXJkLWNhbnZhcyB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDQ1MHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAxNXB4OyB9XFxuICAgIC5pbm5lci1jYW52YXMubWVudSAuY2FyZC1jYW52YXMgLmNhcmQge1xcbiAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICBtYXgtaGVpZ2h0OiAzNXJlbTtcXG4gICAgICBtYXgtd2lkdGg6IDQxcmVtO1xcbiAgICAgIG1hcmdpbjogMTBweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzE5KTtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgfVxcbiAgICAgIC5pbm5lci1jYW52YXMubWVudSAuY2FyZC1jYW52YXMgLmNhcmQgLmNhcmQtaW1hZ2Uge1xcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgICAuaW5uZXItY2FudmFzLm1lbnUgLmNhcmQtY2FudmFzIHtcXG4gICAgICB3aWR0aDogYXV0bzsgfSB9XFxuICAuaW5uZXItY2FudmFzLm1lbnUgLmJpZy10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZXJyIFZvbiBNdWVsbGVyaG9mZlxcXCIsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMTByZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIGNvbG9yOiAjZmZhNjFmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzE5KTtcXG4gICAgdGV4dC1zaGFkb3c6IDAuMDdlbSAwIGJsYWNrOyB9XFxuICAuaW5uZXItY2FudmFzLm1lbnUgLnNtb2wtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY29sb3I6ICNmZmE2MWY7XFxuICAgIHRleHQtc2hhZG93OiAwLjA3ZW0gMCBibGFjaywgMCAwLjA3ZW0gYmxhY2ssIC0wLjA3ZW0gMCBibGFjaywgMCAtMC4wN2VtIGJsYWNrOyB9XFxuICAuaW5uZXItY2FudmFzLm1lbnUgLm5vcm1pZS10ZXh0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbG9yOiAjZmE5OTJiO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdGV4dC1zaGFkb3c6IDAuMDdlbSAwIGJsYWNrLCAwIDAuMDdlbSBibGFjaywgLTAuMDdlbSAwIGJsYWNrLCAwIC0wLjA3ZW0gYmxhY2s7IH1cXG5cXG4vKiBDU1MgZm9yIGFib3V0ICovXFxuLmNhbnZhcy13ZWIuYWJvdXQge1xcbiAgbWluLWhlaWdodDogNTFyZW07IH1cXG5cXG4uaW5uZXItY2FudmFzLmFib3V0IHtcXG4gIG1hcmdpbi10b3A6IDEwJTtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcxOSk7IH1cXG4gIC5pbm5lci1jYW52YXMuYWJvdXQgLmFib3V0LWJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgICAuaW5uZXItY2FudmFzLmFib3V0IC5hYm91dC1ib2FyZCAjbWFwIHtcXG4gICAgICB3aWR0aDogOTAlO1xcbiAgICAgIGhlaWdodDogMjhyZW07XFxuICAgICAgbWFyZ2luOiA1JTsgfVxcbiAgLmlubmVyLWNhbnZhcy5hYm91dCAuYWJvdXQtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBmbGV4LXNocmluazogMDsgfVxcbiAgLmlubmVyLWNhbnZhcy5hYm91dCAuc21vbC10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGNvbG9yOiAjZmZhNjFmO1xcbiAgICB0ZXh0LXNoYWRvdzogMC4wN2VtIDAgYmxhY2ssIDAgMC4wN2VtIGJsYWNrLCAtMC4wN2VtIDAgYmxhY2ssIDAgLTAuMDdlbSBibGFjazsgfVxcbiAgLmlubmVyLWNhbnZhcy5hYm91dCBociB7XFxuICAgIHdpZHRoOiAyODBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2M1OWQ1ZjtcXG4gICAgbWFyZ2luOiAyNHB4IGF1dG87IH1cXG4gIC5pbm5lci1jYW52YXMuYWJvdXQgLm5vcm1pZS10ZXh0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbG9yOiAjZmZlNmNlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGRpc3BsYXk6IGlubGluZTsgfVxcbiAgLmlubmVyLWNhbnZhcy5hYm91dCAuZW1haWwge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5pbm5lci1jYW52YXMuYWJvdXQgLnNtb2wtdGV4dCB7XFxuICAgICAgZm9udC1zaXplOiAxOHB4OyB9XFxuICAgIC5pbm5lci1jYW52YXMuYWJvdXQgLm5vcm1pZS10ZXh0IHtcXG4gICAgICBmb250LXNpemU6IDE4cHg7IH0gfVxcblxcbi8qIE1lZGlhIHJ1bGVzIGZvciBjZWxscGhvbmUgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBodG1sIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogNjAwcHg7IH1cXG4gICAgaHRtbCAuY2FudmFzLXdlYiB7XFxuICAgICAgbWluLWhlaWdodDogYXV0bzsgfVxcbiAgICBodG1sIC5jYXJkLWNhbnZhcyB7XFxuICAgICAgd2lkdGg6IGF1dG87IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFBO0FBdUJBLGVBQUE7QUFFQTtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLHFDQUFxQyxFQUFBO0VBSnpDO0lBUVEsWUEvQjRCO0lBZ0M1QixtREFBMEM7SUFDMUMsc0JBQXFCO0lBQ3JCLFNBQVEsRUFBQTtJQVhoQjtNQWVZLFdBQVc7TUFDWCxhQUFZO01BQ1osbUJBQWtCO01BQ2xCLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsZUF6Qkc7TUEwQkgsc0NBN0NrQjtNQThDbEIscUtBbkN1QixFQUFBO0lBYW5DO01BNkJnQixjQW5Eb0I7TUFxRHBCLDBCQUF3QixFQUFBO0lBL0J4QztNQW1DZ0IsaUJBQWdCO01BQ2hCLGdCQUFlLEVBQUE7O0FBUy9CLGlCQUFBO0FBQ0E7RUFDSSxpQkFBZ0IsRUFB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RUFDSTtJQUNJLFdBQVU7SUFDVixhQUFZLEVBQUE7SUFGaEI7TUFLUSxnQkFBZ0IsRUFBQTtJQUx4QjtNQVFRLFdBQVUsRUFBQSxFQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHZhcmlhYmxlcyAqL1xcbiRiZ2NvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzE5KTtcXG4kdGV4dGNvbG9yLXdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuJHRleHRjb2xvci1vcmFuZ2U6IHJnYigyNTUsIDE2NiwgMzEpO1xcbiR0ZXh0Y29sb3Itb3JhbmdlLWxpZ2h0OiByZ2IoMjU1LCAyMzAsIDIwNik7XFxuJHRleHQtc2hhZG93ODogICAwLjA3ZW0gMCBibGFjayxcXG4gICAgICAgICAgICAgICAgMCAwLjA3ZW0gYmxhY2ssXFxuICAgICAgICAgICAgICAgIC0wLjA3ZW0gMCBibGFjayxcXG4gICAgICAgICAgICAgICAgMCAtMC4wN2VtIGJsYWNrLFxcbiAgICAgICAgICAgICAgICAtMC4wN2VtIC0wLjA3ZW0gYmxhY2ssXFxuICAgICAgICAgICAgICAgIC0wLjA3ZW0gMC4wN2VtIGJsYWNrLFxcbiAgICAgICAgICAgICAgICAwLjA3ZW0gLTAuMDdlbSBibGFjayxcXG4gICAgICAgICAgICAgICAgMC4wN2VtIDAuMDdlbSBibGFjaztcXG4kdGV4dC1zaGFkb3c0OiAgIDAuMDdlbSAwIGJsYWNrLFxcbiAgICAgICAgICAgICAgICAwIDAuMDdlbSBibGFjayxcXG4gICAgICAgICAgICAgICAgLTAuMDdlbSAwIGJsYWNrLFxcbiAgICAgICAgICAgICAgICAwIC0wLjA3ZW0gYmxhY2s7XFxuJHRleHQtc2hhZG93MTogICAwLjA3ZW0gMCBibGFjaztcXG4gICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgIFxcbiRmb250c2l6ZTogMzBweDtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1IZXJyK1ZvbitNdWVsbGVyaG9mZiZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbi8qIGdsb2JhbCBjc3MgKi9cXG5cXG5odG1sIHtcXG4gICAgd2lkdGg6MTAwdnc7XFxuICAgIGhlaWdodDoxMDB2aDtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuXFxuXFxuICAgIGJvZHkge1xcbiAgICAgICAgY29sb3I6ICR0ZXh0Y29sb3Itd2hpdGU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vaW1hZ2VzL2JhY2tncm91bmQuanBnJyk7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XFxuICAgICAgICBtYXJnaW46MDtcXG4gICAgICAgICAgXFxuXFxuICAgICAgICAuaGVhZGVyLCAuZm9vdGVyIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDh2aDtcXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udHNpemU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnY29sb3I7XFxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6ICR0ZXh0LXNoYWRvdzg7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuXFxuICAgICAgICAuaGVhZGVyIHtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAuaG9tZS1idXR0b246aG92ZXIsIC5tZW51LWJ1dHRvbjpob3ZlciwgLmFib3V0LWJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkdGV4dGNvbG9yLW9yYW5nZTtcXG4gICAgICAgICAgICAgICAgLy9jb2xvcjogcmdiKDE3OCwgMjEwLCAyMjQpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMS41LDEuNSk7XFxuXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5ob21lLWJ1dHRvbiwgLm1lbnUtYnV0dG9uLCAuYWJvdXQtYnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjV2dztcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NXZ3O1xcbiAgICAgICAgICAgIH1cXG4gICAgXFxuXFxuICAgICAgICB9XFxuXFxuICAgIH1cXG59XFxuXFxuLyogQ1NTIGZvciBIb21lICovXFxuLmNhbnZhcy13ZWIuaG9tZSB7XFxuICAgIG1pbi1oZWlnaHQ6NjByZW07XFxufVxcbi5pbm5lci1jYW52YXMuaG9tZSB7XFxuICAgIGhlaWdodDo0NXJlbTtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBtYXJnaW46YXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnY29sb3I7XFxuXFxuXFxuICAgIC5iaWctdGV4dCB7XFxuICAgICAgICBmb250LWZhbWlseTogXFxcIkhlcnIgVm9uIE11ZWxsZXJob2ZmXFxcIiwgY3Vyc2l2ZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTUwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206MDtcXG4gICAgICAgIG1hcmdpbi10b3A6MnJlbTtcXG4gICAgICAgIGNvbG9yOiR0ZXh0Y29sb3Itb3JhbmdlO1xcblxcbiAgICB9XFxuXFxuICAgIC5zbW9sLXRleHQge1xcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206MHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXG4gICAgICAgIGNvbG9yOiR0ZXh0Y29sb3Itb3JhbmdlO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6ICR0ZXh0LXNoYWRvdzQ7XFxuXFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAubm9ybWllLXRleHQge1xcbiAgICAgICAgZGlzcGxheTpibG9jaztcXG4gICAgICAgIGNvbG9yOiR0ZXh0Y29sb3Itb3JhbmdlLWxpZ2h0O1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIGhyIHtcXG4gICAgICAgIHdpZHRoOiAyODBweDtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjNTlkNWY7XFxuICAgICAgICBtYXJnaW46IDI0cHggYXV0bztcXG4gICAgfVxcblxcbiAgICAuYnV0dG9uLWZvci1tZW51IHtcXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgICAgICBtYXJnaW46YXV0bztcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMjI7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHRjb2xvci1vcmFuZ2U7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkdGV4dGNvbG9yLW9yYW5nZS1saWdodDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgICAgIGZvbnQtc2l6ZTo3MHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xcbiAgICAgICAgY29sb3I6d2hpdGVzbW9rZTtcXG4gICAgICAgIHRleHQtc2hhZG93OiA2cHggNnB4IDBweCByZ2JhKDAsMCwwLDAuMilcXG4gXFxuICAgIH1cXG5cXG4gICAgLmJ1dHRvbi1mb3ItbWVudTpob3ZlciwgLmJ1dHRvbi1mb3ItbWVudTphY3RpdmUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHRjb2xvci1vcmFuZ2UtbGlnaHQ7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkdGV4dGNvbG9yLW9yYW5nZS1saWdodDtcXG4gICAgfVxcbn1cXG5cXG4vKiBDU1MgZm9yIE1lbnUgKi9cXG4uY2FudmFzLXdlYi5tZW51IHtcXG4gICAgbWluLWhlaWdodDo1MHJlbTtcXG59XFxuLmlubmVyLWNhbnZhcy5tZW51IHtcXG5cXG4gICAgbWFyZ2luOmF1dG87XFxuXFxuXFxuICAgIC8qIEdyaWQgZm9yIGFsbCB0aGUgYXJ0aWNsZXMgcHJvamVjdHMgKi9cXG4gICAgLmNhcmQtY2FudmFzIHtcXG4gICAgICAgIG1hcmdpbjphdXRvO1xcbiAgICAgICAgZGlzcGxheTpncmlkO1xcbiAgICAgICAgd2lkdGg6NzUlOyBcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCg0NTBweCwgMWZyKSk7XFxuICAgICAgICBnYXA6MTVweDtcXG4gICAgICAgIFxcbiAgICAgICAgLmNhcmQge1xcbiAgICAgICAgICAgIG1hcmdpbjphdXRvO1xcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6MzVyZW07XFxuICAgICAgICAgICAgbWF4LXdpZHRoOjQxcmVtO1xcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdjb2xvcjsgXFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICBcXG5cXG4gICAgICAgICAgICAuY2FyZC1pbWFnZSB7XFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDo0MDBweDtcXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDo0MDBweDtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcXG4gICAgICAgICAgICAgICAgbWFyZ2luOmF1dG87XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAwMHB4KXtcXG4gICAgICAgIC5jYXJkLWNhbnZhcyB7XFxuICAgICAgICAgIHdpZHRoOmF1dG87XFxuXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgXFxuLyogY29waWVkIGZyb20gaG9tZSwgY2FuZGlkYXRlcyB0byBiZSBnbG9iYWxpemVkOiAqL1xcbiAgICAuYmlnLXRleHQge1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJIZXJyIFZvbiBNdWVsbGVyaG9mZlxcXCIsIGN1cnNpdmU7XFxuICAgICAgICBmb250LXNpemU6IDEwcmVtOyAvLyBjYW1iaWFkb1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOjNyZW07XFxuICAgICAgICBtYXJnaW4tdG9wOjNyZW07IC8vIGNhbWJpYWRvXFxuICAgICAgICBjb2xvcjokdGV4dGNvbG9yLW9yYW5nZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ2NvbG9yO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6JHRleHQtc2hhZG93MTtcXG5cXG4gICAgfVxcblxcbiAgICAuc21vbC10ZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTsgLy8gY2FtYmlhZG8gXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIC8vbWFyZ2luLXRvcDogLTUwcHg7IGNhbWJpYWRvXFxuICAgICAgICBtYXJnaW4tdG9wOjFyZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOjFyZW07IC8vIGNhbWJpYWRvXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcbiAgICAgICAgY29sb3I6JHRleHRjb2xvci1vcmFuZ2U7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogJHRleHQtc2hhZG93NDtcXG5cXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5ub3JtaWUtdGV4dCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOjFyZW07XFxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICAgICAgY29sb3I6cmdiKDI1MCwgMTUzLCA0Myk7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIHRleHQtc2hhZG93OiR0ZXh0LXNoYWRvdzQ7XFxuICAgIH1cXG4gICAgICAgICAgICAgICAgICBcXG5cXG59XFxuLyogQ1NTIGZvciBhYm91dCAqL1xcbi5jYW52YXMtd2ViLmFib3V0IHtcXG4gICAgbWluLWhlaWdodDo1MXJlbTtcXG59XFxuLmlubmVyLWNhbnZhcy5hYm91dCB7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnY29sb3I7XFxuXFxuICAgIC5hYm91dC1ib2FyZCB7XFxuICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgICAgICNtYXAge1xcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICAgICAgaGVpZ2h0OjI4cmVtO1xcbiAgICAgICAgICAgIG1hcmdpbjo1JTtcXG4gICAgICAgICAgICBcXG4gICAgXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLmFib3V0LWNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTpmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6NTAlO1xcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgIH1cXG5cXG4gICAgLnNtb2wtdGV4dCB7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206MHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXG4gICAgICAgIGNvbG9yOiR0ZXh0Y29sb3Itb3JhbmdlO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6ICR0ZXh0LXNoYWRvdzQ7XFxuXFxuICAgICAgICBcXG4gICAgfVxcbiAgICBociB7XFxuICAgICAgICB3aWR0aDogMjgwcHg7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYzU5ZDVmO1xcbiAgICAgICAgbWFyZ2luOiAyNHB4IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLm5vcm1pZS10ZXh0IHtcXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgICAgICBjb2xvcjokdGV4dGNvbG9yLW9yYW5nZS1saWdodDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIGRpc3BsYXk6aW5saW5lO1xcbiAgICB9XFxuXFxuICAgIC5lbWFpbCB7XFxuICAgICAgICBmb250LXN0eWxlOml0YWxpYztcXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICAgICAgICBkaXNwbGF5OmlubGluZTtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAwMHB4KSB7XFxuXFxuICAgICAgICAuc21vbC10ZXh0IHtcXG4gICAgICAgICAgZm9udC1zaXplOjE4cHg7XFxuXFxuICAgICAgICB9XFxuXFxuICAgICAgICAubm9ybWllLXRleHQge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxOHB4O1xcbiAgICAgICAgfVxcblxcblxcbiAgICB9XFxufVxcblxcbiAgICAgICAgXFxuXFxuXFxuICAgICAgICAgICAgICAgXFxuXFxuICAgICAgICAgICAgICAgIFxcblxcblxcbi8vICAgICAgICAgICAgICAgICAvKiBHcmlkIGZvciBhbGwgdGhlIGFydGljbGVzIHByb2plY3RzICovXFxuLy8gICAgICAgICAgICAgICAgIC5jYXJkLWNhbnZhcyB7XFxuLy8gICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwdnc7XFxuLy8gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XFxuLy8gICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xcbi8vICAgICAgICAgICAgICAgICAgICAgZ2FwOjE1cHg7XFxuXFxuLy8gICAgICAgICAgICAgICAgIH1cXG4vLyAgICAgICAgICAgICAgICAgLmNhcmQtY2FudmFzIC5jYXJkIHtcXG4vLyAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XFxuLy8gICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcXG4vLyAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcXG4gICAgICAgICAgICAgICAgICAgIFxcbi8vICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnY29sb3I7IFxcbi8vICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICBcXG4vLyAgICAgICAgICAgICAgICAgfVxcblxcblxcbi8vICAgICAgICAgICAgICAgICAuY2FyZCBwIHtcXG4vLyAgICAgICAgICAgICAgICAgcGFkZGluZzo1cHg7XFxuLy8gICAgICAgICAgICAgICAgIH1cXG5cXG4vLyAgICAgICAgICAgICAgICAgLmNhcmQtaW1hZ2Uge1xcbi8vICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOjQwMHB4O1xcbi8vICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDo0MDBweDtcXG4vLyAgICAgICAgICAgICAgICAgfVxcblxcblxcbi8vICAgICAgICAgICAgIH1cXG4vLyAgICAgICAgICAgICAubWVudSB7XFxuLy8gICAgICAgICAgICAgICAgIC8qIGlmIHdlJ3JlIGRpc3BsYXlpbmcgbWVudSwgd2UncmUgb3ZlcnJpZGluZyBpbm5lci1jYW52YXMgcHJvcGVydGllcyAqL1xcbi8vICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbi8vICAgICAgICAgICAgIH1cXG4vLyAgICAgfVxcbi8vIH1cXG5cXG5cXG4vKiBNZWRpYSBydWxlcyBmb3IgY2VsbHBob25lICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XFxuICAgIGh0bWwge1xcbiAgICAgICAgd2lkdGg6YXV0bztcXG4gICAgICAgIGhlaWdodDo2MDBweDtcXG5cXG4gICAgICAgIC5jYW52YXMtd2ViIHtcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmNhcmQtY2FudmFzIHtcXG4gICAgICAgICAgICB3aWR0aDphdXRvO1xcbiAgICAgICAgfVxcblxcbiAgICB9XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBsb2FkQWJvdXQgKGZhdGhlckNvbnRhaW5lcikge1xuXG4gICAgLyogMSkgd2UgZGVmaW5lIGV2ZXJ5IGh0bWwgZWxlbWVudCB3ZSdyZSBnb25uYSBwdXQgaW50byB0aGUgY2FudmFzICovXG4gICAgY29uc3QgYWJvdXRDYW52YXMgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwVGl0bGUxICAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBzZXBhcmF0aW9uICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgY29uc3QgYWJvdXRCb2FyZCAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgICBtYXAgICAgICAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHJpZ2h0UGFydCAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcFRpdGxlMiAgICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcFRleHQgICAgICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcE1haWwgICAgICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdlbWFpbCcpO1xuICAgIFxuICAgIC8qIDIpIFdlIHB1dCB0aGUgSUQgaW4gdGhlIG1hcCwgZm9yIGJlaW5nIGFibGUgdG8gdXNlIGl0ICovXG4gICAgbWFwLmlkID0gJ21hcCc7XG4gICAgXG5cbiAgICAvKiAyKSB3ZSBwdXQgdGhlaXIgY2xhc3NlcyAqL1xuICAgIGFib3V0Q2FudmFzLmNsYXNzTmFtZSAgICA9ICdpbm5lci1jYW52YXMgYWJvdXQnO1xuICAgIHBUaXRsZTEuY2xhc3NOYW1lICAgICAgICA9ICdzbW9sLXRleHQnO1xuICAgIGFib3V0Qm9hcmQuY2xhc3NOYW1lICAgICA9ICdhYm91dC1ib2FyZCc7XG4gICAgcmlnaHRQYXJ0LmNsYXNzTmFtZSAgICAgID0gJ2Fib3V0LWNvbnRlbnQnO1xuICAgIHBUaXRsZTIuY2xhc3NOYW1lICAgICAgICA9ICdub3JtaWUtdGV4dCc7XG4gICAgcFRleHQuY2xhc3NOYW1lICAgICAgICAgID0gJ25vcm1pZS10ZXh0JztcbiAgICBwTWFpbC5jbGFzc05hbWUgICAgICAgICAgPSAnbm9ybWllLXRleHQgZW1haWwnO1xuICAgIG1hcC5jbGFzc05hbWUgICAgICAgICAgICA9ICdnbWFwJztcbiAgICBcblxuICAgIC8qIDMpIHdlIHB1dCB0aGVpciBpbm5lciB0ZXh0ICovXG4gICAgcFRpdGxlMS5pbm5lclRleHQgPSAnQWJvdXQgdXMhJzsgXG4gICAgcFRpdGxlMi5pbm5lclRleHQgPSAnWW91IGRvblxcJ3Qga25vdyB1cz8gVGhlIGNvb2sgaXMgYWN0dWFsbHkgeW91ciBvd24gZ3JhbmRtb3RoZXIuXFxuJytcbiAgICAgICAgICAgICAgICAgICAgICAgICdUaGF0XFwncyByaWdodCwgd2UgaGlyZWQgaGVyLiBIb3cgZGlkIHlvdSBleHBlY3Qgd2UgcmVwbGljYXRlIGhlciBmb29kPyc7XG4gICAgcFRleHQuaW5uZXJUZXh0ICAgPSAnWW91IGNhbiBjb250YWN0IHVzIHdpdGggdGhpcyB0b3RhbCByZWFsIGUtbWFpbDogJztcbiAgICBwTWFpbC5pbm5lclRleHQgICA9ICd5b3VyZ3Jhbm55cm9ja3NAZ3Jhbm55c2tpdGNoZW4uY29tJztcbiAgICBcblxuXG4gICAgLyogMykgQnV0IGl0J3MgdGhlIHBlbHZpYyB0aHJ1c3QgKi9cbiAgICBhYm91dENhbnZhcy5hcHBlbmQocFRpdGxlMSwgc2VwYXJhdGlvbiwgYWJvdXRCb2FyZCk7XG4gICAgYWJvdXRCb2FyZC5hcHBlbmQobWFwLCByaWdodFBhcnQpO1xuXG4gICAgLyogNCkgdGhhdCByZWFsbHkgZHJpdmVzIHlvdSBpbnNhbmUgKi9cbiAgICByaWdodFBhcnQuYXBwZW5kKHBUaXRsZTIscFRleHQscE1haWwpO1xuICAgIFxuICAgIC8qIDUpIGxldCdzIGRvIHRoZSB0aW1lIHdhcnAgYWdhaW4hISAqL1xuICAgIGZhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dENhbnZhcyk7XG5cbiAgICAgLyogNikgV2UgaW5pdCB0aGUgbWFwICovXG4gICAgIHdpbmRvdy5pbml0TWFwID0gaW5pdE1hcDtcbn07XG4vKlxubG9hZGVyLmxvYWQoKS50aGVuKCgpID0+IHtcbiAgICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKG1hcCwge1xuICAgICAgY2VudGVyOiB7IGxhdDogLTM0LjM5NywgbG5nOiAxNTAuNjQ0IH0sXG4gICAgICB6b29tOiA4LFxuICAgIH0pO1xuICB9KTsqL1xuLy8gICBjb25zdCBsb2FkZXIgICAgICAgICA9IG5ldyBMb2FkZXIoe1xuLy8gICAgIGFwaUtleTogXCJBSXphU3lEVm5QRU9ZQWdQODJSLWlBak1lWGtqODc0Zy1mdGVtTmNcIixcbi8vICAgICB2ZXJzaW9uOiBcIndlZWtseVwiXG4vLyAgIH0pO1xuXG4vLyAgIGxvYWRlci5sb2FkKCkudGhlbigoKSA9PiB7XG4vLyAgICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChtYXAsIHtcbi8vICAgICAgIGNlbnRlcjogeyBsYXQ6IC0zNC4zOTcsIGxuZzogMTUwLjY0NCB9LFxuLy8gICAgICAgem9vbTogOCxcbi8vICAgICB9KTtcbi8vICAgfSk7XG5cbi8vICAvL2xvYWRlci5sb2FkKCk7XG5cbi8vIEluaXRpYWxpemUgYW5kIGFkZCB0aGUgbWFwXG5mdW5jdGlvbiBpbml0TWFwKCkge1xuICAgIGNvbnNvbGUubG9nKCc8aW5pdE1hcD4nKTtcbiAgICAvLyBUaGUgbG9jYXRpb24gb2YgVWx1cnVcbiAgICBjb25zdCB1bHVydSA9IHsgbGF0OiAtMjUuMzQ0LCBsbmc6IDEzMS4wMzEgfTtcbiAgICAvLyBUaGUgbWFwLCBjZW50ZXJlZCBhdCBVbHVydVxuICAgIGNvbnN0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIHtcbiAgICAgIHpvb206IDQsXG4gICAgICBjZW50ZXI6IHVsdXJ1LFxuICAgIH0pO1xuICAgIC8vIFRoZSBtYXJrZXIsIHBvc2l0aW9uZWQgYXQgVWx1cnVcbiAgICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgIHBvc2l0aW9uOiB1bHVydSxcbiAgICAgIG1hcDogbWFwLFxuICAgIH0pO1xuICB9XG4gIFxuICBcbiAgXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7bG9hZEFib3V0fTsiLCJpbXBvcnQgQ3JvcXVldGFzIGZyb20gJy4vaW1hZ2VzL2Nyb3F1ZXRhc19yZXNpemVkLmpwZyc7IC8vIFRoZSBjcm9xdWV0dGUgKG1vc3QgaW1wb3J0YW50IGVsZW1lbnQgb2YgdGhpcyB3ZWIpXG4vKiBUaGlzIGNvZGUgdW5kZXIgaGVyZSB3aWxsIHByb2JhYmx5IGJlIGV4cG9ydGVkIGludG8gYSBtb2R1bGUgKi9cbi8qIFdlJ3JlIGdvbm5hIGJ1aWxkIHRoZSBob21lIGNhbnZhcyBub3cgKi9cbmZ1bmN0aW9uIGxvYWRIb21lIChmYXRoZXJDb250YWluZXIsIGxvYWRNZW51KSB7XG5cbiAgICAvKiAxKSB3ZSBkZWZpbmUgZXZlcnkgaHRtbCBlbGVtZW50IHdlJ3JlIGdvbm5hIHB1dCBpbnRvIHRoZSBjYW52YXMgKi9cbiAgICBjb25zdCBob21lQ2FudmFzICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBob21lVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwVGl0bGUxICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcFRpdGxlMiAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHNlcGFyYXRpb24gICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgY29uc3QgcFRleHQgICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IG15Q3JvcXVldGEgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGJ0bk1lbnUgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcbiAgICBcblxuICAgIC8qIDIpIHdlIHB1dCB0aGVpciBjbGFzc2VzICovXG4gICAgaG9tZUNhbnZhcy5jbGFzc05hbWUgPSAnaW5uZXItY2FudmFzIGhvbWUnO1xuICAgIHBUaXRsZTEuY2xhc3NOYW1lICAgID0gJ2JpZy10ZXh0JztcbiAgICBwVGl0bGUyLmNsYXNzTmFtZSAgICA9ICdzbW9sLXRleHQnO1xuICAgIHBUZXh0LmNsYXNzTmFtZSAgICAgID0gJ25vcm1pZS10ZXh0JztcbiAgICBteUNyb3F1ZXRhLmNsYXNzTmFtZSA9ICdjcm9xdWV0YSc7XG4gICAgYnRuTWVudS5jbGFzc05hbWUgICAgPSAnYnV0dG9uLWZvci1tZW51JztcbiAgICBcbiAgICBcblxuICAgIC8qIDMpIHdlIHB1dCB0aGVpciBpbm5lciB0ZXh0ICovXG4gICAgcFRpdGxlMS5pbm5lclRleHQgPSAnV2VsY29tZSB0byc7IFxuICAgIHBUaXRsZTIuaW5uZXJUZXh0ID0gJ3lvdXIgZ3Jhbm55XFwncyBraXRjaGVuJztcbiAgICBwVGV4dC5pbm5lclRleHQgICA9ICdFbmpveSB0aGUgY29va2luZyBvbmx5IHlvdXIgZ3Jhbm55IGNhbiBjb29rJztcbiAgICBteUNyb3F1ZXRhLnNyYyAgICA9IENyb3F1ZXRhczsgLy8gbm90IGEgdGV4dCBidXQgYSBzb3VyY2UgXG4gICAgYnRuTWVudS5pbm5lclRleHQgPSAnTUVOVSc7XG4gICAgXG5cbiAgICAvKiA0KSB3ZSBwdXQgdGhlaXIgZnVuY3Rpb25zICovXG4gICAgYnRuTWVudS5vbmNsaWNrID0gbG9hZE1lbnU7XG5cbiAgICAvKiA1KSBCdXQgaXQncyB0aGUgcGVsdmljIHRocnVzdCAqL1xuICAgIGhvbWVUaXRsZURpdi5hcHBlbmQocFRpdGxlMSxwVGl0bGUyLHNlcGFyYXRpb24scFRleHQsbXlDcm9xdWV0YSxidG5NZW51KTtcblxuICAgIC8qIDYpIHRoYXQgcmVhbGx5IGRyaXZlcyB5b3UgaW5zYW5lICovXG4gICAgaG9tZUNhbnZhcy5hcHBlbmRDaGlsZChob21lVGl0bGVEaXYpO1xuICAgIFxuICAgIC8qIDcpIGxldCdzIGRvIHRoZSB0aW1lIHdhcnAgYWdhaW4hISAqL1xuICAgIGZhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lQ2FudmFzKTtcbn07XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtsb2FkSG9tZX07IiwiaW1wb3J0IENyb3F1ZXRhcyBmcm9tICcuL2ltYWdlcy9jcm9xdWV0YXNfcmVzaXplZC5qcGcnOyAvLyBUaGlzIGltYWdlIHdhcyB0YWtlbiBmcm9tIGludGVybmV0Li4uYnV0IEkgZGlkIG5vdCBzYXZlIHdobyBkaWQgaXQuIEl0J3MgYSBmcmVlIGltYWdlIHRobyA6KFxuaW1wb3J0IFRvcnRpbGxhICBmcm9tICcuL2ltYWdlcy90b3J0aWxsYV9yZXNpemVkLmpwZyc7IC8vIFRoaXMgaW1hZ2Ugd2FzIHRha2VuIGZyb20gaW50ZXJuZXQuLi5idXQgSSBkaWQgbm90IHNhdmUgd2hvIGRpZCBpdC4gSXQncyBhIGZyZWUgaW1hZ2UgdGhvIDooXG5pbXBvcnQgQ2FjaG9wbyAgIGZyb20gJy4vaW1hZ2VzL2NhY2hvcG9fcmVzaXplZC5qcGcnOyAvLyBUaGlzIGltYWdlIHdhcyB0YWtlbiBieSBtZSBpbiBMbGFuZXMsIEFzdHVyaWFzLlxuaW1wb3J0IENodWxldG9uICBmcm9tICcuL2ltYWdlcy9jaHVsZXRvbl9yZXNpemVkLmpwZyc7IC8vIFRoaXMgaW1hZ2Ugd2FzIHRha2VuIGJ5IG1lIGluIExlw7NuLCBDYXN0aWxsYSB5IExlw7NuLlxuaW1wb3J0IEdhbWJhcyAgICBmcm9tICcuL2ltYWdlcy9nYW1iYXNfcmVzaXplZC5qcGcnOyAvLyBUaGlzIGltYWdlIHdhcyB0YWtlbiBieSBtZSBpbiBMbGFuZXMsIEFzdHVyaWFzLlxuaW1wb3J0IFBhZWxsYSAgICBmcm9tICcuL2ltYWdlcy9wYWVsbGFfcmVzaXplZC5qcGcnOyAvLyBUaGlzIGltYWdlIHdhcyB0YWtlbiBieSBtZSBpbiBteSBvd24ga2l0Y2hlbiwgeXVwLCBJIGNvb2tlZCB0aGlzIGxpdHRsZSBiYWJ5LiBJJ20gYWxzbyBWRVJZIHNpbmdsZS4gU28gbGFkaWVzIGFuZCBtaWxsaW9uYWlyZSBnZW50bGVtYW4sIGhpdCBtZSB1cCBpZiB5b3Ugd2FubmEgdGFzdGUgaXQuXG5cbi8qIFRvIGdlbmVyYXRlIGVhY2ggY2FyZCBjb250YWluaW5nIG91ciBtZW51IHdlJ3JlIGdvbm5hIGRlZmluZSBmaXJzdCBhbiBhcnJheSB3aXRoIGFsbCBvdXIgZGlzaGVzICovXG5jb25zdCBEaXNoID0gKHRpdGxlLCBpbWFnZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBpbWFnZSwgZGVzY3JpcHRpb259O1xufTtcbmNvbnN0IGRpc2hlcyA9IFtcbiAgICAvKiBDcm9xdWV0YXMgKi9cbiAgICBEaXNoKCdDcm9xdWV0YXMnLCBDcm9xdWV0YXMsICdXaGF0IG5pZWNlIGRvZXNuXFwndCBsb3ZlIGhlciBncmFubnkgY3JvcXVldHRlcz8nKSxcbiAgICAvKiBUb3J0aWxsYSAgKi9cbiAgICBEaXNoKCdUb3J0aWxsYScsICBUb3J0aWxsYSwgICdIZXIgc2Vjb25kIGJlc3QgZGlzaCwgdGhlIFRvcnRpbGxhLiBXaXRoIG9uaW9uLiBBcyBhbGwgdGhpbmdzIHNob3VsZCBiZS4nKSxcbiAgICAvKiBHYW1iYXMgICAgKi9cbiAgICBEaXNoKCdHYW1iYXMnLCAgICBHYW1iYXMsICAgICdPdXIgeXVtbXkgbGl0dGxlIHNocmltcHMsIHRhc3R5bmVzcyBpcyBtYWdpYy4nKSxcbiAgICAvKiBQYWVsbGEgICAgKi9cbiAgICBEaXNoKCdQYWVsbGEnLCAgICBQYWVsbGEsICAgICdZb3VcXCdyZSBmYXZvcml0ZSBmb29kLiBZb3VcXCdyZSBncmFubnkgc3BlY2lhbGl0eS4gVGhlIG9ubHkgYW5kIG9uZSBQYWVsbGEnKSwgICAgXG4gICAgLyogQ2h1bGV0b24gICovXG4gICAgRGlzaCgnQ2h1bGV0b24nLCAgQ2h1bGV0b24sICAnQmVzdCBtZWF0IHlvdSBoYXZlIGV2ZXIgdGFzdGVkJyksXG4gICAgLyogQ2FjaG9wbyAgICovXG4gICAgRGlzaCgnQ2FjaG9wbycsICAgQ2FjaG9wbywgICAnVGhlIGFzdHVyaWFuIHNwZWNpYWxpdHksIHlvdSBjYW4gZmF0dGVuIDEwIGtpbG9zIGp1c3QgYnkgbG9va2luZyBhdCB0aGlzLicpXG5dO1xuXG4vKiBUaGlzIGNvZGUgdW5kZXIgaGVyZSB3aWxsIHByb2JhYmx5IGJlIGV4cG9ydGVkIGludG8gYSBtb2R1bGUgKi9cbi8qIFdlJ3JlIGdvbm5hIGJ1aWxkIHRoZSBob21lIGNhbnZhcyBub3cgKi9cbmZ1bmN0aW9uIGxvYWRNZW51IChmYXRoZXJDb250YWluZXIpIHtcblxuICAgIC8qIDEpIHdlIGRlZmluZSBldmVyeSBodG1sIGVsZW1lbnQgd2UncmUgZ29ubmEgcHV0IGludG8gdGhlIGNhbnZhcyAqL1xuICAgIGNvbnN0IG1lbnVDYW52YXMgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHBUaXRsZTEgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAvL2NvbnN0IHNlcGFyYXRpb24gICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgY29uc3QgY2FyZENhbnZhcyAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLyogU2luY2Ugd2Ugd2FudCB0byBkeW5hbWljYWxseSBnZW5lcmF0ZSB0aGUgY2FyZHMsIHdlJ2xsIGRvIHRoYXQgc3R1ZmYgbGF0ZXIgKi9cbiAgICBcbiAgICAvKiAyKSB3ZSBwdXQgdGhlaXIgY2xhc3NlcyAqL1xuICAgIG1lbnVDYW52YXMuY2xhc3NOYW1lICAgID0gJ2lubmVyLWNhbnZhcyBtZW51JztcbiAgICBwVGl0bGUxLmNsYXNzTmFtZSAgICAgICA9ICdiaWctdGV4dCc7XG4gICAgY2FyZENhbnZhcy5jbGFzc05hbWUgICAgPSAnY2FyZC1jYW52YXMnO1xuXG4gICAgLyogMykgd2UgcHV0IHRoZWlyIGlubmVyIHRleHQgKi9cbiAgICBwVGl0bGUxLmlubmVyVGV4dCA9ICdDaG9vc2UgeW91ciBkZWxpc2g6JzsgXG4gICAgXG4gICAgLyogNCkgQnV0IGl0J3MgdGhlIHBlbHZpYyB0aHJ1c3QgKi9cbiAgICAvL21lbnVDYW52YXMuYXBwZW5kKHBUaXRsZTEsc2VwYXJhdGlvbixjYXJkQ2FudmFzKTtcbiAgICBtZW51Q2FudmFzLmFwcGVuZChwVGl0bGUxLGNhcmRDYW52YXMpO1xuXG4gICAgLyogNSkgdGhhdCByZWFsbHkgZHJpdmVzIHlvdSBpbnNhbmUgKi9cbiAgICBnZW5lcmF0ZUNhcmRNZW51KGNhcmRDYW52YXMpOyAvKiBpdCBhcHBlbmRzIGV2ZXJ5IGNhcmQgZm9vZCB0byBjYXJkQ2FudmFzICovXG4gICAgXG4gICAgLyogNikgbGV0J3MgZG8gdGhlIHRpbWUgd2FycCBhZ2FpbiEhICovXG4gICAgZmF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDYW52YXMpO1xuICAgIFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNhcmRNZW51KGNhbnZhcykge1xuXG4gICAgZGlzaGVzLmZvckVhY2ggKChkaXNoKSA9PiB7XG5cbiAgICAgICAgLyogMSkgV2UgY3JlYXRlIHRoZSBodG1sIGVsZW1lbnRzICovXG4gICAgICAgIGNvbnN0IGNhcmQgICAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjYXJkVGl0bGUgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGNhcmRJbWFnZSAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCBjYXJkVHh0ICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0Jyk7XG5cbiAgICAgICAgLyogMikgd2UgcHV0IGNsYXNzZXMgZm9yIG91ciBjb29sIGNzcyAqL1xuICAgICAgICBjYXJkLmNsYXNzTmFtZSAgICAgID0gJ2NhcmQnO1xuICAgICAgICBjYXJkVGl0bGUuY2xhc3NOYW1lID0gJ3Ntb2wtdGV4dCc7XG4gICAgICAgIGNhcmRUeHQuY2xhc3NOYW1lICAgPSAnbm9ybWllLXRleHQnO1xuICAgICAgICBjYXJkSW1hZ2UuY2xhc3NOYW1lID0gJ2NhcmQtaW1hZ2UnO1xuXG4gICAgICAgIC8qIDMpIHdlIHB1dCBpdCdzIHRleHQgKi9cbiAgICAgICAgY2FyZFRpdGxlLmlubmVyVGV4dCA9IGRpc2gudGl0bGU7XG4gICAgICAgIGNhcmRJbWFnZS5zcmMgICAgICAgPSBkaXNoLmltYWdlO1xuICAgICAgICBjYXJkVHh0LmlubmVyVGV4dCAgID0gZGlzaC5kZXNjcmlwdGlvbjtcbiAgICAgICAgXG4gICAgICAgIGNhcmQuYXBwZW5kKGNhcmRUaXRsZSxjYXJkSW1hZ2UsY2FyZFR4dCk7XG4gICAgICAgIGNhbnZhcy5hcHBlbmRDaGlsZChjYXJkKTtcblxuICAgIH0pO1xuXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7bG9hZE1lbnV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbi8qIEltcG9ydCBzZWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJzsgLy8gU0NTUyBzdHlsZXMgZm9yIG91ciB3ZWJcbmltcG9ydCBIb21lUGFnZSAgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBNZW51UGFnZSAgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBBYm91dFBhZ2UgZnJvbSAnLi9hYm91dC5qcyc7XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIFdlIHJldHJpZXZlIHRoZSBjb250YWluZXIsIHRoYXQgd2lsbCBob2xkIGFsbCBvdXIgd2ViICovXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG5cblxuLyogRm9yIHRoZSBoZWFkZXIsIHdlJ3JlIGdvbm5hIG1ha2UgYSBkaXYgdGhhdCB3aWxsIGNvbnRhaW4gdGhyZWUgZGl2cywgZWFjaCBvZiBlbSB3aWxsIGJlIHVzZWQgdG8gbW92ZSB0aGUgdXNlciBiZXR3ZWVuIHRoZSB3ZWIgICovXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhlYWRlci5jbGFzc05hbWUgPSAnaGVhZGVyJztcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4vKiBUaGUgdGhyZWUgZGl2cyBpbnNpZGUgdGhlIGhlYWRlciAqL1xuY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaG9tZURpdi5jbGFzc05hbWUgPSAnaG9tZS1idXR0b24nO1xuaG9tZURpdi5pbm5lclRleHQgPSAnSE9NRSc7XG5ob21lRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZEhvbWUpO1xuXG5jb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tZW51RGl2LmNsYXNzTmFtZSA9ICdtZW51LWJ1dHRvbic7XG5tZW51RGl2LmlubmVyVGV4dCA9ICdNRU5VJztcbm1lbnVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkTWVudSk7XG5cbmNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5hYm91dERpdi5jbGFzc05hbWUgPSdhYm91dC1idXR0b24nO1xuYWJvdXREaXYuaW5uZXJUZXh0ID0gJ0FCT1VUIFVTJztcbmFib3V0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZEFib3V0KTtcblxuLyogV2UgYXBwZW5kIHRoZSB0aHJlZSBkaXYtYnV0dG9ucyB0byBoZWFkZXIsIHNpbmNlIHdlIHdhbnQgZW0gaW5zaWRlICovXG5oZWFkZXIuYXBwZW5kQ2hpbGQoaG9tZURpdik7XG5oZWFkZXIuYXBwZW5kQ2hpbGQobWVudURpdik7XG5oZWFkZXIuYXBwZW5kQ2hpbGQoYWJvdXREaXYpO1xuXG4vKiBub3csIHdlIG5lZWQgYSBjYW52YXMgdG8gZGlzcGxheSBvdXIgd2ViLCBpdCB3aWxsIGJlIGJlaGluZCB0aGUgaGVhZGVyICovXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG4vKiB1bmRlciB0aGUgY2FudmFzIHdlIHdpbGwgaGF2ZSBhIGZvb3Rlciwgd2hpY2ggcHJvYmFibHkgd2lsbCBob2xkIG5vdGhpbmcgYnV0IHdpbGwgaGF2ZSBzb21lIHdpZHRoL2hlaWdodCBha2luIHRvIHRoZSBoZWFkZXIgYW5kIHdpbGwgaGF2ZSBzb21lIGJhY2tncm91bmQgY29sb3IgKi9cbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZm9vdGVyLmNsYXNzTmFtZSA9J2Zvb3Rlcic7XG5mb290ZXIuaW5uZXJUZXh0ID0gJ0Rlc2lnbmVkIGJ5IFJpYyBmb3IgVGhlIE9kaW4gUHJvamVjdCc7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxubG9hZEFib3V0KGNhbnZhcyk7XG5cbi8vIEluZGV4LmpzIGZ1bmN0aW9uc1xuZnVuY3Rpb24gY2xlYW5DYW52YXMgKCkge1xuXG4gICAgd2hpbGUgKGNhbnZhcy5maXJzdENoaWxkKSB7XG4gICAgICAgIGNhbnZhcy5yZW1vdmVDaGlsZChjYW52YXMuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zb2xlLmxvZygnPGluZGV4LmpzIGxvYWRIb21lPicpO1xuICAgIGNvbnNvbGUubG9nKGNhbnZhcyk7XG4gICAgY2xlYW5DYW52YXMoKTtcbiAgICBjYW52YXMuY2xhc3NOYW1lID0gJ2NhbnZhcy13ZWIgaG9tZSc7XG4gICAgSG9tZVBhZ2UubG9hZEhvbWUoY2FudmFzLCBsb2FkTWVudSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51ICgpIHtcbiAgICBjb25zb2xlLmxvZygnPGluZGV4LmpzIGxvYWRNZW51PicpO1xuICAgIGNvbnNvbGUubG9nKGNhbnZhcyk7XG4gICAgY2xlYW5DYW52YXMoKTtcbiAgICBjYW52YXMuY2xhc3NOYW1lID0gJ2NhbnZhcy13ZWIgbWVudSc7XG4gICAgTWVudVBhZ2UubG9hZE1lbnUoY2FudmFzKTtcbn07XG5cbmZ1bmN0aW9uIGxvYWRBYm91dCAoKSB7XG4gICAgY29uc29sZS5sb2coJzxpbmRleC5qcyBsb2FkQWJvdXQ+Jyk7XG4gICAgY29uc29sZS5sb2coY2FudmFzKTtcbiAgICBjbGVhbkNhbnZhcygpO1xuICAgIGNhbnZhcy5jbGFzc05hbWUgPSAnY2FudmFzLXdlYiBhYm91dCc7XG4gICAgQWJvdXRQYWdlLmxvYWRBYm91dChjYW52YXMpO1xufTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9