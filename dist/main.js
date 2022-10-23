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
___CSS_LOADER_EXPORT___.push([module.id, "/* variables */\n/* global css */\nhtml {\n  text-align: center;\n  font-family: 'Montserrat', sans-serif; }\n  html body {\n    color: white;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    margin: 0; }\n    html body .header, html body .footer {\n      height: 8vh;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      font-size: 30px;\n      background-color: rgba(0, 0, 0, 0.719);\n      text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black, -0.07em -0.07em black, -0.07em 0.07em black, 0.07em -0.07em black, 0.07em 0.07em black; }\n    html body .header .home-button:hover, html body .header .menu-button:hover, html body .header .about-button:hover {\n      color: #ffa61f;\n      transform: scale(1.5, 1.5); }\n    html body .header .home-button, html body .header .menu-button, html body .header .about-button {\n      margin-right: 5vw;\n      margin-left: 5vw; }\n\n/* CSS for Home */\n.canvas-web.home {\n  min-height: 55rem; }\n\n.inner-canvas.home {\n  height: 45rem;\n  width: 600px;\n  margin: auto;\n  background-color: rgba(0, 0, 0, 0.719); }\n  .inner-canvas.home .big-text {\n    font-family: \"Herr Von Muellerhoff\", cursive;\n    font-size: 150px;\n    text-align: center;\n    text-transform: capitalize;\n    margin-bottom: 0;\n    margin-top: 2rem;\n    color: #ffa61f;\n    text-shadow: 0.07em 0 black; }\n  .inner-canvas.home .smol-text {\n    font-size: 40px;\n    font-weight: bold;\n    margin-top: -50px;\n    margin-bottom: 0px;\n    text-align: center;\n    text-transform: uppercase;\n    color: #ffa61f;\n    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black; }\n  .inner-canvas.home .normie-text {\n    display: block;\n    color: #ffe6ce;\n    font-size: 20px; }\n  .inner-canvas.home hr {\n    width: 280px;\n    border: 2px solid #c59d5f;\n    margin: 24px auto; }\n  .inner-canvas.home .button-for-menu {\n    display: block;\n    margin: auto;\n    border: 2px solid #222;\n    border-radius: 26px;\n    background-color: #ffa61f;\n    border: 2px solid #ffe6ce;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 70px;\n    margin-top: 20px;\n    color: whitesmoke;\n    text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2); }\n  .inner-canvas.home .button-for-menu:hover, .inner-canvas.home .button-for-menu:active {\n    background-color: #ffe6ce;\n    border: 2px solid #ffe6ce; }\n\n/* CSS for Menu */\n.canvas-web.menu {\n  min-height: 50rem; }\n\n.inner-canvas.menu {\n  margin: auto;\n  /* Grid for all the articles projects */\n  /* copied from home, candidates to be globalized: */ }\n  .inner-canvas.menu .card-canvas {\n    margin: auto;\n    display: grid;\n    width: 75%;\n    grid-template-columns: repeat(2, minmax(450px, 1fr));\n    gap: 15px; }\n    .inner-canvas.menu .card-canvas .card {\n      margin: auto;\n      max-height: 35rem;\n      max-width: 41rem;\n      margin: 10px;\n      background-color: rgba(0, 0, 0, 0.719);\n      border: 1px solid black; }\n      .inner-canvas.menu .card-canvas .card .card-image {\n        max-width: 400px;\n        max-height: 400px;\n        display: block;\n        margin: auto;\n        margin-bottom: 10px; }\n  @media only screen and (max-width: 1000px) {\n    .inner-canvas.menu .card-canvas {\n      width: auto; } }\n  .inner-canvas.menu .big-text {\n    font-family: \"Herr Von Muellerhoff\", cursive;\n    font-size: 10rem;\n    text-align: center;\n    text-transform: capitalize;\n    margin-bottom: 3rem;\n    margin-top: 3rem;\n    color: #ffa61f;\n    background-color: rgba(0, 0, 0, 0.719);\n    text-shadow: 0.07em 0 black; }\n  .inner-canvas.menu .smol-text {\n    font-size: 2rem;\n    font-weight: bold;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    text-align: center;\n    text-transform: uppercase;\n    color: #ffa61f;\n    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black; }\n  .inner-canvas.menu .normie-text {\n    margin-bottom: 1rem;\n    display: block;\n    color: #fa992b;\n    font-size: 1.5rem;\n    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black; }\n\n/* CSS for about */\n.canvas-web.about {\n  min-height: 51rem;\n  max-width: 1500px;\n  margin: auto; }\n\n.inner-canvas.about {\n  margin-top: 10%;\n  margin-right: auto;\n  margin-left: auto;\n  margin-bottom: 10%;\n  background-color: rgba(0, 0, 0, 0.719); }\n  .inner-canvas.about .about-board {\n    display: flex;\n    justify-content: center;\n    align-content: center; }\n    .inner-canvas.about .about-board #map {\n      width: 90%;\n      height: 15rem;\n      margin: 5%; }\n  .inner-canvas.about .about-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 50%;\n    flex-shrink: 0; }\n  .inner-canvas.about .smol-text {\n    font-size: 3rem;\n    font-weight: bold;\n    margin-bottom: 0px;\n    text-align: center;\n    text-transform: uppercase;\n    color: #ffa61f;\n    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black; }\n  .inner-canvas.about hr {\n    width: 280px;\n    border: 2px solid #c59d5f;\n    margin: 24px auto; }\n  .inner-canvas.about .normie-text {\n    display: block;\n    color: #ffe6ce;\n    font-size: 1.5rem;\n    display: inline; }\n  .inner-canvas.about .email {\n    font-style: italic;\n    font-weight: bold;\n    display: inline; }\n  @media only screen and (max-width: 1000px) {\n    .inner-canvas.about .smol-text {\n      font-size: 18px; }\n    .inner-canvas.about .normie-text {\n      font-size: 18px; } }\n\n/* Media rules for cellphone */\n@media only screen and (max-width: 600px) {\n  html {\n    width: auto;\n    height: 600px; }\n    html .canvas-web {\n      min-height: auto; }\n    html .card-canvas {\n      width: auto; } }\n", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["/* variables */\n$bgcolor: rgba(0, 0, 0, 0.719);\n$textcolor-white: rgb(255, 255, 255);\n$textcolor-orange: rgb(255, 166, 31);\n$textcolor-orange-light: rgb(255, 230, 206);\n$text-shadow8:   0.07em 0 black,\n                0 0.07em black,\n                -0.07em 0 black,\n                0 -0.07em black,\n                -0.07em -0.07em black,\n                -0.07em 0.07em black,\n                0.07em -0.07em black,\n                0.07em 0.07em black;\n$text-shadow4:   0.07em 0 black,\n                0 0.07em black,\n                -0.07em 0 black,\n                0 -0.07em black;\n$text-shadow1:   0.07em 0 black;\n              \n               \n$fontsize: 30px;\n@import url(\"https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff&family=Montserrat:wght@300;400;700&display=swap\");\n\n/* global css */\n\nhtml {\n\n    text-align:center;\n    font-family: 'Montserrat', sans-serif;\n\n\n    body {\n        color: $textcolor-white;\n        background: url('./images/background.jpg');\n        background-size:cover;\n        margin:0;\n          \n\n        .header, .footer {\n            height: 8vh;\n            display:flex;\n            flex-direction:row;\n            justify-content: center;\n            align-items: center;\n            font-size: $fontsize;\n            background-color: $bgcolor;\n            text-shadow: $text-shadow8;\n            \n        }\n\n        .header {\n            \n            .home-button:hover, .menu-button:hover, .about-button:hover {\n                color: $textcolor-orange;\n                //color: rgb(178, 210, 224);\n                transform:scale(1.5,1.5);\n\n            }\n            .home-button, .menu-button, .about-button {\n                margin-right:5vw;\n                margin-left:5vw;\n            }\n    \n\n        }\n\n    }\n}\n\n/* CSS for Home */\n.canvas-web.home {\n    min-height:55rem;\n}\n.inner-canvas.home {\n    height:45rem;\n    width: 600px;\n    margin:auto;\n    background-color: $bgcolor;\n\n\n    .big-text {\n        font-family: \"Herr Von Muellerhoff\", cursive;\n        font-size: 150px;\n        text-align: center;\n        text-transform: capitalize;\n        margin-bottom:0;\n        margin-top:2rem;\n        color:$textcolor-orange;\n        text-shadow:$text-shadow1;\n\n    }\n\n    .smol-text {\n        font-size: 40px;\n        font-weight: bold;\n        margin-top: -50px;\n        margin-bottom:0px;\n        text-align: center;\n        text-transform: uppercase;\n\n        color:$textcolor-orange;\n        text-shadow: $text-shadow4;\n\n        \n    }\n\n    .normie-text {\n        display:block;\n        color:$textcolor-orange-light;\n        font-size: 20px;\n    }\n\n    hr {\n        width: 280px;\n        border: 2px solid #c59d5f;\n        margin: 24px auto;\n    }\n\n    .button-for-menu {\n        display:block;\n        margin:auto;\n        border: 2px solid #222;\n        border-radius: 26px;\n        background-color: $textcolor-orange;\n        border: 2px solid $textcolor-orange-light;\n        font-family:'Montserrat', sans-serif;\n        font-size:70px;\n        margin-top:20px;\n        color:whitesmoke;\n        text-shadow: 6px 6px 0px rgba(0,0,0,0.2)\n \n    }\n\n    .button-for-menu:hover, .button-for-menu:active {\n        background-color: $textcolor-orange-light;\n        border: 2px solid $textcolor-orange-light;\n    }\n}\n\n/* CSS for Menu */\n.canvas-web.menu {\n    min-height:50rem;\n\n}\n.inner-canvas.menu {\n\n    margin:auto;\n\n\n    /* Grid for all the articles projects */\n    .card-canvas {\n        margin:auto;\n        display:grid;\n        width:75%; \n        grid-template-columns: repeat(2, minmax(450px, 1fr));\n        gap:15px;\n        \n        .card {\n            margin:auto;\n            max-height:35rem;\n            max-width:41rem;\n            margin: 10px;\n            background-color: $bgcolor; \n            border: 1px solid black;  \n\n            .card-image {\n                max-width:400px;\n                max-height:400px;\n                display:block;\n                margin:auto;\n                margin-bottom:10px;\n            }\n        }\n        \n    }\n\n    @media only screen and (max-width:1000px){\n        .card-canvas {\n          width:auto;\n\n        }\n    }\n    \n/* copied from home, candidates to be globalized: */\n    .big-text {\n        font-family: \"Herr Von Muellerhoff\", cursive;\n        font-size: 10rem; // cambiado\n        text-align: center;\n        text-transform: capitalize;\n        margin-bottom:3rem;\n        margin-top:3rem; // cambiado\n        color:$textcolor-orange;\n        background-color: $bgcolor;\n        text-shadow:$text-shadow1;\n\n    }\n\n    .smol-text {\n        font-size: 2rem; // cambiado \n        font-weight: bold;\n        //margin-top: -50px; cambiado\n        margin-top:1rem;\n        margin-bottom:1rem; // cambiado\n        text-align: center;\n        text-transform: uppercase;\n\n        color:$textcolor-orange;\n        text-shadow: $text-shadow4;\n\n        \n    }\n\n    .normie-text {\n        margin-bottom:1rem;\n        display:block;\n        color:rgb(250, 153, 43);\n        font-size: 1.5rem;\n        text-shadow:$text-shadow4;\n    }\n                  \n\n}\n/* CSS for about */\n.canvas-web.about {\n    min-height:51rem;\n    max-width:1500px;\n    margin:auto;\n}\n.inner-canvas.about {\n    margin-top: 10%;\n    margin-right:auto;\n    margin-left:auto;\n    margin-bottom: 10%;\n    background-color: $bgcolor;\n\n    .about-board {\n        display:flex;\n        justify-content: center;\n        align-content: center;\n\n        #map {\n            width: 90%;\n            height:15rem;\n            margin:5%;\n            \n    \n        }\n    }\n    .about-content {\n        display:flex;\n        flex-direction: column;\n        justify-content: center;\n        width:50%;\n        flex-shrink: 0;\n    }\n\n    .smol-text {\n        font-size: 3rem;\n        font-weight: bold;\n        margin-bottom:0px;\n        text-align: center;\n        text-transform: uppercase;\n\n        color:$textcolor-orange;\n        text-shadow: $text-shadow4;\n\n        \n    }\n    hr {\n        width: 280px;\n        border: 2px solid #c59d5f;\n        margin: 24px auto;\n    }\n\n    .normie-text {\n        display:block;\n        color:$textcolor-orange-light;\n        font-size: 1.5rem;\n        display:inline;\n    }\n\n    .email {\n        font-style:italic;\n        font-weight:bold;\n        display:inline;\n    }\n\n    @media only screen and (max-width:1000px) {\n\n        .smol-text {\n          font-size:18px;\n\n        }\n\n        .normie-text {\n            font-size:18px;\n        }\n\n\n    }\n}\n\n        \n\n\n               \n\n                \n\n\n//                 /* Grid for all the articles projects */\n//                 .card-canvas {\n//                     max-width: 80vw;\n//                     display:grid;\n//                     grid-template-columns: repeat(2, minmax(400px, 1fr));\n//                     gap:15px;\n\n//                 }\n//                 .card-canvas .card {\n//                     max-width: 600px;\n//                     max-height: 600px;\n//                     margin: 10px;\n                    \n//                     background-color: $bgcolor; \n//                     border: 1px solid black;  \n//                 }\n\n\n//                 .card p {\n//                 padding:5px;\n//                 }\n\n//                 .card-image {\n//                     max-width:400px;\n//                     max-height:400px;\n//                 }\n\n\n//             }\n//             .menu {\n//                 /* if we're displaying menu, we're overriding inner-canvas properties */\n//                 background-color: rgba(255, 255, 255, 0);\n//             }\n//     }\n// }\n\n\n/* Media rules for cellphone */\n@media only screen and (max-width:600px) {\n    html {\n        width:auto;\n        height:600px;\n\n        .canvas-web {\n            min-height: auto;\n        }\n        .card-canvas {\n            width:auto;\n        }\n\n    }\n}\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQW1CO0FBQ3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUhlcnIrVm9uK011ZWxsZXJob2ZmJmZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIGdsb2JhbCBjc3MgKi9cXG5odG1sIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7IH1cXG4gIGh0bWwgYm9keSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgbWFyZ2luOiAwOyB9XFxuICAgIGh0bWwgYm9keSAuaGVhZGVyLCBodG1sIGJvZHkgLmZvb3RlciB7XFxuICAgICAgaGVpZ2h0OiA4dmg7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MTkpO1xcbiAgICAgIHRleHQtc2hhZG93OiAwLjA3ZW0gMCBibGFjaywgMCAwLjA3ZW0gYmxhY2ssIC0wLjA3ZW0gMCBibGFjaywgMCAtMC4wN2VtIGJsYWNrLCAtMC4wN2VtIC0wLjA3ZW0gYmxhY2ssIC0wLjA3ZW0gMC4wN2VtIGJsYWNrLCAwLjA3ZW0gLTAuMDdlbSBibGFjaywgMC4wN2VtIDAuMDdlbSBibGFjazsgfVxcbiAgICBodG1sIGJvZHkgLmhlYWRlciAuaG9tZS1idXR0b246aG92ZXIsIGh0bWwgYm9keSAuaGVhZGVyIC5tZW51LWJ1dHRvbjpob3ZlciwgaHRtbCBib2R5IC5oZWFkZXIgLmFib3V0LWJ1dHRvbjpob3ZlciB7XFxuICAgICAgY29sb3I6ICNmZmE2MWY7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUsIDEuNSk7IH1cXG4gICAgaHRtbCBib2R5IC5oZWFkZXIgLmhvbWUtYnV0dG9uLCBodG1sIGJvZHkgLmhlYWRlciAubWVudS1idXR0b24sIGh0bWwgYm9keSAuaGVhZGVyIC5hYm91dC1idXR0b24ge1xcbiAgICAgIG1hcmdpbi1yaWdodDogNXZ3O1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA1dnc7IH1cXG5cXG4vKiBDU1MgZm9yIEhvbWUgKi9cXG4uY2FudmFzLXdlYi5ob21lIHtcXG4gIG1pbi1oZWlnaHQ6IDU1cmVtOyB9XFxuXFxuLmlubmVyLWNhbnZhcy5ob21lIHtcXG4gIGhlaWdodDogNDVyZW07XFxuICB3aWR0aDogNjAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzE5KTsgfVxcbiAgLmlubmVyLWNhbnZhcy5ob21lIC5iaWctdGV4dCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVyciBWb24gTXVlbGxlcmhvZmZcXFwiLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDE1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBjb2xvcjogI2ZmYTYxZjtcXG4gICAgdGV4dC1zaGFkb3c6IDAuMDdlbSAwIGJsYWNrOyB9XFxuICAuaW5uZXItY2FudmFzLmhvbWUgLnNtb2wtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY29sb3I6ICNmZmE2MWY7XFxuICAgIHRleHQtc2hhZG93OiAwLjA3ZW0gMCBibGFjaywgMCAwLjA3ZW0gYmxhY2ssIC0wLjA3ZW0gMCBibGFjaywgMCAtMC4wN2VtIGJsYWNrOyB9XFxuICAuaW5uZXItY2FudmFzLmhvbWUgLm5vcm1pZS10ZXh0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbG9yOiAjZmZlNmNlO1xcbiAgICBmb250LXNpemU6IDIwcHg7IH1cXG4gIC5pbm5lci1jYW52YXMuaG9tZSBociB7XFxuICAgIHdpZHRoOiAyODBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2M1OWQ1ZjtcXG4gICAgbWFyZ2luOiAyNHB4IGF1dG87IH1cXG4gIC5pbm5lci1jYW52YXMuaG9tZSAuYnV0dG9uLWZvci1tZW51IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzIyMjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTYxZjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZTZjZTtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA3MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgdGV4dC1zaGFkb3c6IDZweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgfVxcbiAgLmlubmVyLWNhbnZhcy5ob21lIC5idXR0b24tZm9yLW1lbnU6aG92ZXIsIC5pbm5lci1jYW52YXMuaG9tZSAuYnV0dG9uLWZvci1tZW51OmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmU2Y2U7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmU2Y2U7IH1cXG5cXG4vKiBDU1MgZm9yIE1lbnUgKi9cXG4uY2FudmFzLXdlYi5tZW51IHtcXG4gIG1pbi1oZWlnaHQ6IDUwcmVtOyB9XFxuXFxuLmlubmVyLWNhbnZhcy5tZW51IHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIC8qIEdyaWQgZm9yIGFsbCB0aGUgYXJ0aWNsZXMgcHJvamVjdHMgKi9cXG4gIC8qIGNvcGllZCBmcm9tIGhvbWUsIGNhbmRpZGF0ZXMgdG8gYmUgZ2xvYmFsaXplZDogKi8gfVxcbiAgLmlubmVyLWNhbnZhcy5tZW51IC5jYXJkLWNhbnZhcyB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDQ1MHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAxNXB4OyB9XFxuICAgIC5pbm5lci1jYW52YXMubWVudSAuY2FyZC1jYW52YXMgLmNhcmQge1xcbiAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICBtYXgtaGVpZ2h0OiAzNXJlbTtcXG4gICAgICBtYXgtd2lkdGg6IDQxcmVtO1xcbiAgICAgIG1hcmdpbjogMTBweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzE5KTtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgfVxcbiAgICAgIC5pbm5lci1jYW52YXMubWVudSAuY2FyZC1jYW52YXMgLmNhcmQgLmNhcmQtaW1hZ2Uge1xcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgICAuaW5uZXItY2FudmFzLm1lbnUgLmNhcmQtY2FudmFzIHtcXG4gICAgICB3aWR0aDogYXV0bzsgfSB9XFxuICAuaW5uZXItY2FudmFzLm1lbnUgLmJpZy10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZXJyIFZvbiBNdWVsbGVyaG9mZlxcXCIsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMTByZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIGNvbG9yOiAjZmZhNjFmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzE5KTtcXG4gICAgdGV4dC1zaGFkb3c6IDAuMDdlbSAwIGJsYWNrOyB9XFxuICAuaW5uZXItY2FudmFzLm1lbnUgLnNtb2wtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY29sb3I6ICNmZmE2MWY7XFxuICAgIHRleHQtc2hhZG93OiAwLjA3ZW0gMCBibGFjaywgMCAwLjA3ZW0gYmxhY2ssIC0wLjA3ZW0gMCBibGFjaywgMCAtMC4wN2VtIGJsYWNrOyB9XFxuICAuaW5uZXItY2FudmFzLm1lbnUgLm5vcm1pZS10ZXh0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbG9yOiAjZmE5OTJiO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdGV4dC1zaGFkb3c6IDAuMDdlbSAwIGJsYWNrLCAwIDAuMDdlbSBibGFjaywgLTAuMDdlbSAwIGJsYWNrLCAwIC0wLjA3ZW0gYmxhY2s7IH1cXG5cXG4vKiBDU1MgZm9yIGFib3V0ICovXFxuLmNhbnZhcy13ZWIuYWJvdXQge1xcbiAgbWluLWhlaWdodDogNTFyZW07XFxuICBtYXgtd2lkdGg6IDE1MDBweDtcXG4gIG1hcmdpbjogYXV0bzsgfVxcblxcbi5pbm5lci1jYW52YXMuYWJvdXQge1xcbiAgbWFyZ2luLXRvcDogMTAlO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAxMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzE5KTsgfVxcbiAgLmlubmVyLWNhbnZhcy5hYm91dCAuYWJvdXQtYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyB9XFxuICAgIC5pbm5lci1jYW52YXMuYWJvdXQgLmFib3V0LWJvYXJkICNtYXAge1xcbiAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAgICBtYXJnaW46IDUlOyB9XFxuICAuaW5uZXItY2FudmFzLmFib3V0IC5hYm91dC1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGZsZXgtc2hyaW5rOiAwOyB9XFxuICAuaW5uZXItY2FudmFzLmFib3V0IC5zbW9sLXRleHQge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY29sb3I6ICNmZmE2MWY7XFxuICAgIHRleHQtc2hhZG93OiAwLjA3ZW0gMCBibGFjaywgMCAwLjA3ZW0gYmxhY2ssIC0wLjA3ZW0gMCBibGFjaywgMCAtMC4wN2VtIGJsYWNrOyB9XFxuICAuaW5uZXItY2FudmFzLmFib3V0IGhyIHtcXG4gICAgd2lkdGg6IDI4MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYzU5ZDVmO1xcbiAgICBtYXJnaW46IDI0cHggYXV0bzsgfVxcbiAgLmlubmVyLWNhbnZhcy5hYm91dCAubm9ybWllLXRleHQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6ICNmZmU2Y2U7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7IH1cXG4gIC5pbm5lci1jYW52YXMuYWJvdXQgLmVtYWlsIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZGlzcGxheTogaW5saW5lOyB9XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgICAuaW5uZXItY2FudmFzLmFib3V0IC5zbW9sLXRleHQge1xcbiAgICAgIGZvbnQtc2l6ZTogMThweDsgfVxcbiAgICAuaW5uZXItY2FudmFzLmFib3V0IC5ub3JtaWUtdGV4dCB7XFxuICAgICAgZm9udC1zaXplOiAxOHB4OyB9IH1cXG5cXG4vKiBNZWRpYSBydWxlcyBmb3IgY2VsbHBob25lICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgaHRtbCB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDYwMHB4OyB9XFxuICAgIGh0bWwgLmNhbnZhcy13ZWIge1xcbiAgICAgIG1pbi1oZWlnaHQ6IGF1dG87IH1cXG4gICAgaHRtbCAuY2FyZC1jYW52YXMge1xcbiAgICAgIHdpZHRoOiBhdXRvOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBQTtBQXVCQSxlQUFBO0FBRUE7RUFFSSxrQkFBaUI7RUFDakIscUNBQXFDLEVBQUE7RUFIekM7SUFPUSxZQTlCNEI7SUErQjVCLG1EQUEwQztJQUMxQyxzQkFBcUI7SUFDckIsU0FBUSxFQUFBO0lBVmhCO01BY1ksV0FBVztNQUNYLGFBQVk7TUFDWixtQkFBa0I7TUFDbEIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixlQXhCRztNQXlCSCxzQ0E1Q2tCO01BNkNsQixxS0FsQ3VCLEVBQUE7SUFhbkM7TUE0QmdCLGNBbERvQjtNQW9EcEIsMEJBQXdCLEVBQUE7SUE5QnhDO01Ba0NnQixpQkFBZ0I7TUFDaEIsZ0JB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YyxFQUFBO0VBR2xCO0lBM0RKO01BOERVLGVBQWMsRUFBQTtJQTlEeEI7TUFtRVksZUFBYyxFQUFBLEVBQ2pCOztBQW1EVCw4QkFBQTtBQUNBO0VBQ0k7SUFDSSxXQUFVO0lBQ1YsYUFBWSxFQUFBO0lBRmhCO01BS1EsZ0JBQWdCLEVBQUE7SUFMeEI7TUFRUSxXQUFVLEVBQUEsRUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiB2YXJpYWJsZXMgKi9cXG4kYmdjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcxOSk7XFxuJHRleHRjb2xvci13aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiR0ZXh0Y29sb3Itb3JhbmdlOiByZ2IoMjU1LCAxNjYsIDMxKTtcXG4kdGV4dGNvbG9yLW9yYW5nZS1saWdodDogcmdiKDI1NSwgMjMwLCAyMDYpO1xcbiR0ZXh0LXNoYWRvdzg6ICAgMC4wN2VtIDAgYmxhY2ssXFxuICAgICAgICAgICAgICAgIDAgMC4wN2VtIGJsYWNrLFxcbiAgICAgICAgICAgICAgICAtMC4wN2VtIDAgYmxhY2ssXFxuICAgICAgICAgICAgICAgIDAgLTAuMDdlbSBibGFjayxcXG4gICAgICAgICAgICAgICAgLTAuMDdlbSAtMC4wN2VtIGJsYWNrLFxcbiAgICAgICAgICAgICAgICAtMC4wN2VtIDAuMDdlbSBibGFjayxcXG4gICAgICAgICAgICAgICAgMC4wN2VtIC0wLjA3ZW0gYmxhY2ssXFxuICAgICAgICAgICAgICAgIDAuMDdlbSAwLjA3ZW0gYmxhY2s7XFxuJHRleHQtc2hhZG93NDogICAwLjA3ZW0gMCBibGFjayxcXG4gICAgICAgICAgICAgICAgMCAwLjA3ZW0gYmxhY2ssXFxuICAgICAgICAgICAgICAgIC0wLjA3ZW0gMCBibGFjayxcXG4gICAgICAgICAgICAgICAgMCAtMC4wN2VtIGJsYWNrO1xcbiR0ZXh0LXNoYWRvdzE6ICAgMC4wN2VtIDAgYmxhY2s7XFxuICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICBcXG4kZm9udHNpemU6IDMwcHg7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGVycitWb24rTXVlbGxlcmhvZmYmZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4vKiBnbG9iYWwgY3NzICovXFxuXFxuaHRtbCB7XFxuXFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcblxcblxcbiAgICBib2R5IHtcXG4gICAgICAgIGNvbG9yOiAkdGV4dGNvbG9yLXdoaXRlO1xcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZycpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xcbiAgICAgICAgbWFyZ2luOjA7XFxuICAgICAgICAgIFxcblxcbiAgICAgICAgLmhlYWRlciwgLmZvb3RlciB7XFxuICAgICAgICAgICAgaGVpZ2h0OiA4dmg7XFxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnRzaXplO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ2NvbG9yO1xcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAkdGV4dC1zaGFkb3c4O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmhlYWRlciB7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgLmhvbWUtYnV0dG9uOmhvdmVyLCAubWVudS1idXR0b246aG92ZXIsIC5hYm91dC1idXR0b246aG92ZXIge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogJHRleHRjb2xvci1vcmFuZ2U7XFxuICAgICAgICAgICAgICAgIC8vY29sb3I6IHJnYigxNzgsIDIxMCwgMjI0KTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEuNSwxLjUpO1xcblxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuaG9tZS1idXR0b24sIC5tZW51LWJ1dHRvbiwgLmFib3V0LWJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDo1dnc7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjV2dztcXG4gICAgICAgICAgICB9XFxuICAgIFxcblxcbiAgICAgICAgfVxcblxcbiAgICB9XFxufVxcblxcbi8qIENTUyBmb3IgSG9tZSAqL1xcbi5jYW52YXMtd2ViLmhvbWUge1xcbiAgICBtaW4taGVpZ2h0OjU1cmVtO1xcbn1cXG4uaW5uZXItY2FudmFzLmhvbWUge1xcbiAgICBoZWlnaHQ6NDVyZW07XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgbWFyZ2luOmF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ2NvbG9yO1xcblxcblxcbiAgICAuYmlnLXRleHQge1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJIZXJyIFZvbiBNdWVsbGVyaG9mZlxcXCIsIGN1cnNpdmU7XFxuICAgICAgICBmb250LXNpemU6IDE1MHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOjA7XFxuICAgICAgICBtYXJnaW4tdG9wOjJyZW07XFxuICAgICAgICBjb2xvcjokdGV4dGNvbG9yLW9yYW5nZTtcXG4gICAgICAgIHRleHQtc2hhZG93OiR0ZXh0LXNoYWRvdzE7XFxuXFxuICAgIH1cXG5cXG4gICAgLnNtb2wtdGV4dCB7XFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTowcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcbiAgICAgICAgY29sb3I6JHRleHRjb2xvci1vcmFuZ2U7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogJHRleHQtc2hhZG93NDtcXG5cXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5ub3JtaWUtdGV4dCB7XFxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICAgICAgY29sb3I6JHRleHRjb2xvci1vcmFuZ2UtbGlnaHQ7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgaHIge1xcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2M1OWQ1ZjtcXG4gICAgICAgIG1hcmdpbjogMjRweCBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5idXR0b24tZm9yLW1lbnUge1xcbiAgICAgICAgZGlzcGxheTpibG9jaztcXG4gICAgICAgIG1hcmdpbjphdXRvO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzIyMjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI2cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dGNvbG9yLW9yYW5nZTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR0ZXh0Y29sb3Itb3JhbmdlLWxpZ2h0O1xcbiAgICAgICAgZm9udC1mYW1pbHk6J01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgZm9udC1zaXplOjcwcHg7XFxuICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XFxuICAgICAgICBjb2xvcjp3aGl0ZXNtb2tlO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IDZweCA2cHggMHB4IHJnYmEoMCwwLDAsMC4yKVxcbiBcXG4gICAgfVxcblxcbiAgICAuYnV0dG9uLWZvci1tZW51OmhvdmVyLCAuYnV0dG9uLWZvci1tZW51OmFjdGl2ZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dGNvbG9yLW9yYW5nZS1saWdodDtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR0ZXh0Y29sb3Itb3JhbmdlLWxpZ2h0O1xcbiAgICB9XFxufVxcblxcbi8qIENTUyBmb3IgTWVudSAqL1xcbi5jYW52YXMtd2ViLm1lbnUge1xcbiAgICBtaW4taGVpZ2h0OjUwcmVtO1xcblxcbn1cXG4uaW5uZXItY2FudmFzLm1lbnUge1xcblxcbiAgICBtYXJnaW46YXV0bztcXG5cXG5cXG4gICAgLyogR3JpZCBmb3IgYWxsIHRoZSBhcnRpY2xlcyBwcm9qZWN0cyAqL1xcbiAgICAuY2FyZC1jYW52YXMge1xcbiAgICAgICAgbWFyZ2luOmF1dG87XFxuICAgICAgICBkaXNwbGF5OmdyaWQ7XFxuICAgICAgICB3aWR0aDo3NSU7IFxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDQ1MHB4LCAxZnIpKTtcXG4gICAgICAgIGdhcDoxNXB4O1xcbiAgICAgICAgXFxuICAgICAgICAuY2FyZCB7XFxuICAgICAgICAgICAgbWFyZ2luOmF1dG87XFxuICAgICAgICAgICAgbWF4LWhlaWdodDozNXJlbTtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6NDFyZW07XFxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ2NvbG9yOyBcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgIFxcblxcbiAgICAgICAgICAgIC5jYXJkLWltYWdlIHtcXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOjQwMHB4O1xcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OjQwMHB4O1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICAgICAgICAgICAgICBtYXJnaW46YXV0bztcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDAwcHgpe1xcbiAgICAgICAgLmNhcmQtY2FudmFzIHtcXG4gICAgICAgICAgd2lkdGg6YXV0bztcXG5cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBcXG4vKiBjb3BpZWQgZnJvbSBob21lLCBjYW5kaWRhdGVzIHRvIGJlIGdsb2JhbGl6ZWQ6ICovXFxuICAgIC5iaWctdGV4dCB7XFxuICAgICAgICBmb250LWZhbWlseTogXFxcIkhlcnIgVm9uIE11ZWxsZXJob2ZmXFxcIiwgY3Vyc2l2ZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTByZW07IC8vIGNhbWJpYWRvXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206M3JlbTtcXG4gICAgICAgIG1hcmdpbi10b3A6M3JlbTsgLy8gY2FtYmlhZG9cXG4gICAgICAgIGNvbG9yOiR0ZXh0Y29sb3Itb3JhbmdlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnY29sb3I7XFxuICAgICAgICB0ZXh0LXNoYWRvdzokdGV4dC1zaGFkb3cxO1xcblxcbiAgICB9XFxuXFxuICAgIC5zbW9sLXRleHQge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtOyAvLyBjYW1iaWFkbyBcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgLy9tYXJnaW4tdG9wOiAtNTBweDsgY2FtYmlhZG9cXG4gICAgICAgIG1hcmdpbi10b3A6MXJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206MXJlbTsgLy8gY2FtYmlhZG9cXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFxuICAgICAgICBjb2xvcjokdGV4dGNvbG9yLW9yYW5nZTtcXG4gICAgICAgIHRleHQtc2hhZG93OiAkdGV4dC1zaGFkb3c0O1xcblxcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLm5vcm1pZS10ZXh0IHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206MXJlbTtcXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgICAgICBjb2xvcjpyZ2IoMjUwLCAxNTMsIDQzKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6JHRleHQtc2hhZG93NDtcXG4gICAgfVxcbiAgICAgICAgICAgICAgICAgIFxcblxcbn1cXG4vKiBDU1MgZm9yIGFib3V0ICovXFxuLmNhbnZhcy13ZWIuYWJvdXQge1xcbiAgICBtaW4taGVpZ2h0OjUxcmVtO1xcbiAgICBtYXgtd2lkdGg6MTUwMHB4O1xcbiAgICBtYXJnaW46YXV0bztcXG59XFxuLmlubmVyLWNhbnZhcy5hYm91dCB7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnY29sb3I7XFxuXFxuICAgIC5hYm91dC1ib2FyZCB7XFxuICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgICAgICNtYXAge1xcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICAgICAgaGVpZ2h0OjE1cmVtO1xcbiAgICAgICAgICAgIG1hcmdpbjo1JTtcXG4gICAgICAgICAgICBcXG4gICAgXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLmFib3V0LWNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTpmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6NTAlO1xcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgIH1cXG5cXG4gICAgLnNtb2wtdGV4dCB7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206MHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXG4gICAgICAgIGNvbG9yOiR0ZXh0Y29sb3Itb3JhbmdlO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6ICR0ZXh0LXNoYWRvdzQ7XFxuXFxuICAgICAgICBcXG4gICAgfVxcbiAgICBociB7XFxuICAgICAgICB3aWR0aDogMjgwcHg7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYzU5ZDVmO1xcbiAgICAgICAgbWFyZ2luOiAyNHB4IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLm5vcm1pZS10ZXh0IHtcXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgICAgICBjb2xvcjokdGV4dGNvbG9yLW9yYW5nZS1saWdodDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgZGlzcGxheTppbmxpbmU7XFxuICAgIH1cXG5cXG4gICAgLmVtYWlsIHtcXG4gICAgICAgIGZvbnQtc3R5bGU6aXRhbGljO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gICAgICAgIGRpc3BsYXk6aW5saW5lO1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDAwcHgpIHtcXG5cXG4gICAgICAgIC5zbW9sLXRleHQge1xcbiAgICAgICAgICBmb250LXNpemU6MThweDtcXG5cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5ub3JtaWUtdGV4dCB7XFxuICAgICAgICAgICAgZm9udC1zaXplOjE4cHg7XFxuICAgICAgICB9XFxuXFxuXFxuICAgIH1cXG59XFxuXFxuICAgICAgICBcXG5cXG5cXG4gICAgICAgICAgICAgICBcXG5cXG4gICAgICAgICAgICAgICAgXFxuXFxuXFxuLy8gICAgICAgICAgICAgICAgIC8qIEdyaWQgZm9yIGFsbCB0aGUgYXJ0aWNsZXMgcHJvamVjdHMgKi9cXG4vLyAgICAgICAgICAgICAgICAgLmNhcmQtY2FudmFzIHtcXG4vLyAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogODB2dztcXG4vLyAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcXG4vLyAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCg0MDBweCwgMWZyKSk7XFxuLy8gICAgICAgICAgICAgICAgICAgICBnYXA6MTVweDtcXG5cXG4vLyAgICAgICAgICAgICAgICAgfVxcbi8vICAgICAgICAgICAgICAgICAuY2FyZC1jYW52YXMgLmNhcmQge1xcbi8vICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcXG4vLyAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xcbi8vICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgXFxuLy8gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdjb2xvcjsgXFxuLy8gICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgIFxcbi8vICAgICAgICAgICAgICAgICB9XFxuXFxuXFxuLy8gICAgICAgICAgICAgICAgIC5jYXJkIHAge1xcbi8vICAgICAgICAgICAgICAgICBwYWRkaW5nOjVweDtcXG4vLyAgICAgICAgICAgICAgICAgfVxcblxcbi8vICAgICAgICAgICAgICAgICAuY2FyZC1pbWFnZSB7XFxuLy8gICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6NDAwcHg7XFxuLy8gICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OjQwMHB4O1xcbi8vICAgICAgICAgICAgICAgICB9XFxuXFxuXFxuLy8gICAgICAgICAgICAgfVxcbi8vICAgICAgICAgICAgIC5tZW51IHtcXG4vLyAgICAgICAgICAgICAgICAgLyogaWYgd2UncmUgZGlzcGxheWluZyBtZW51LCB3ZSdyZSBvdmVycmlkaW5nIGlubmVyLWNhbnZhcyBwcm9wZXJ0aWVzICovXFxuLy8gICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuLy8gICAgICAgICAgICAgfVxcbi8vICAgICB9XFxuLy8gfVxcblxcblxcbi8qIE1lZGlhIHJ1bGVzIGZvciBjZWxscGhvbmUgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcXG4gICAgaHRtbCB7XFxuICAgICAgICB3aWR0aDphdXRvO1xcbiAgICAgICAgaGVpZ2h0OjYwMHB4O1xcblxcbiAgICAgICAgLmNhbnZhcy13ZWIge1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XFxuICAgICAgICB9XFxuICAgICAgICAuY2FyZC1jYW52YXMge1xcbiAgICAgICAgICAgIHdpZHRoOmF1dG87XFxuICAgICAgICB9XFxuXFxuICAgIH1cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGxvYWRBYm91dCAoZmF0aGVyQ29udGFpbmVyKSB7XG5cbiAgICAvKiAxKSB3ZSBkZWZpbmUgZXZlcnkgaHRtbCBlbGVtZW50IHdlJ3JlIGdvbm5hIHB1dCBpbnRvIHRoZSBjYW52YXMgKi9cbiAgICBjb25zdCBhYm91dENhbnZhcyAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHBUaXRsZTEgICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHNlcGFyYXRpb24gICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBjb25zdCBhYm91dEJvYXJkICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCAgIG1hcCAgICAgICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcmlnaHRQYXJ0ICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwVGl0bGUyICAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwVGV4dCAgICAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwTWFpbCAgICAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2VtYWlsJyk7XG4gICAgXG4gICAgLyogMikgV2UgcHV0IHRoZSBJRCBpbiB0aGUgbWFwLCBmb3IgYmVpbmcgYWJsZSB0byB1c2UgaXQgKi9cbiAgICBtYXAuaWQgPSAnbWFwJztcbiAgICBcbiAgICAvKiAyKSB3ZSBwdXQgdGhlaXIgY2xhc3NlcyAqL1xuICAgIGFib3V0Q2FudmFzLmNsYXNzTmFtZSAgICA9ICdpbm5lci1jYW52YXMgYWJvdXQnO1xuICAgIHBUaXRsZTEuY2xhc3NOYW1lICAgICAgICA9ICdzbW9sLXRleHQnO1xuICAgIGFib3V0Qm9hcmQuY2xhc3NOYW1lICAgICA9ICdhYm91dC1ib2FyZCc7XG4gICAgcmlnaHRQYXJ0LmNsYXNzTmFtZSAgICAgID0gJ2Fib3V0LWNvbnRlbnQnO1xuICAgIHBUaXRsZTIuY2xhc3NOYW1lICAgICAgICA9ICdub3JtaWUtdGV4dCc7XG4gICAgcFRleHQuY2xhc3NOYW1lICAgICAgICAgID0gJ25vcm1pZS10ZXh0JztcbiAgICBwTWFpbC5jbGFzc05hbWUgICAgICAgICAgPSAnbm9ybWllLXRleHQgZW1haWwnO1xuICAgIG1hcC5jbGFzc05hbWUgICAgICAgICAgICA9ICdnbWFwJztcbiAgICBcblxuICAgIC8qIDMpIHdlIHB1dCB0aGVpciBpbm5lciB0ZXh0ICovXG4gICAgcFRpdGxlMS5pbm5lclRleHQgPSAnQWJvdXQgdXMhJzsgXG4gICAgcFRpdGxlMi5pbm5lclRleHQgPSAnWW91IGRvblxcJ3Qga25vdyB1cz8gVGhlIGNvb2sgaXMgYWN0dWFsbHkgeW91ciBvd24gZ3JhbmRtb3RoZXIuXFxuJytcbiAgICAgICAgICAgICAgICAgICAgICAgICdUaGF0XFwncyByaWdodCwgd2UgaGlyZWQgaGVyLiBIb3cgZGlkIHlvdSBleHBlY3Qgd2UgcmVwbGljYXRlIGhlciBmb29kPyc7XG4gICAgcFRleHQuaW5uZXJUZXh0ICAgPSAnWW91IGNhbiBjb250YWN0IHVzIHdpdGggdGhpcyB0b3RhbCByZWFsIGUtbWFpbDogJztcbiAgICBwTWFpbC5pbm5lclRleHQgICA9ICd5b3VyZ3Jhbm55cm9ja3NAZ3Jhbm55c2tpdGNoZW4uY29tJztcbiAgICBcblxuXG4gICAgLyogMykgQnV0IGl0J3MgdGhlIHBlbHZpYyB0aHJ1c3QgKi9cbiAgICBhYm91dENhbnZhcy5hcHBlbmQocFRpdGxlMSwgc2VwYXJhdGlvbiwgYWJvdXRCb2FyZCk7XG4gICAgYWJvdXRCb2FyZC5hcHBlbmQobWFwLCByaWdodFBhcnQpO1xuXG4gICAgLyogNCkgdGhhdCByZWFsbHkgZHJpdmVzIHlvdSBpbnNhbmUgKi9cbiAgICByaWdodFBhcnQuYXBwZW5kKHBUaXRsZTIscFRleHQscE1haWwpO1xuICAgIFxuICAgIC8qIDUpIGxldCdzIGRvIHRoZSB0aW1lIHdhcnAgYWdhaW4hISAqL1xuICAgIGZhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dENhbnZhcyk7XG5cbiAgICAgLyogNikgV2UgaW5pdCB0aGUgbWFwICovXG4gICAgIHdpbmRvdy5pbml0TWFwID0gaW5pdE1hcDtcbn07XG4vKlxubG9hZGVyLmxvYWQoKS50aGVuKCgpID0+IHtcbiAgICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKG1hcCwge1xuICAgICAgY2VudGVyOiB7IGxhdDogLTM0LjM5NywgbG5nOiAxNTAuNjQ0IH0sXG4gICAgICB6b29tOiA4LFxuICAgIH0pO1xuICB9KTsqL1xuLy8gICBjb25zdCBsb2FkZXIgICAgICAgICA9IG5ldyBMb2FkZXIoe1xuLy8gICAgIGFwaUtleTogXCJBSXphU3lEVm5QRU9ZQWdQODJSLWlBak1lWGtqODc0Zy1mdGVtTmNcIixcbi8vICAgICB2ZXJzaW9uOiBcIndlZWtseVwiXG4vLyAgIH0pO1xuXG4vLyAgIGxvYWRlci5sb2FkKCkudGhlbigoKSA9PiB7XG4vLyAgICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChtYXAsIHtcbi8vICAgICAgIGNlbnRlcjogeyBsYXQ6IC0zNC4zOTcsIGxuZzogMTUwLjY0NCB9LFxuLy8gICAgICAgem9vbTogOCxcbi8vICAgICB9KTtcbi8vICAgfSk7XG5cbi8vICAvL2xvYWRlci5sb2FkKCk7XG5cbi8vIEluaXRpYWxpemUgYW5kIGFkZCB0aGUgbWFwXG5mdW5jdGlvbiBpbml0TWFwKCkge1xuICAgIGNvbnNvbGUubG9nKCc8aW5pdE1hcD4nKTtcbiAgICAvLyBUaGUgbG9jYXRpb24gb2YgVWx1cnVcbiAgICBjb25zdCB1bHVydSA9IHsgbGF0OiAtMjUuMzQ0LCBsbmc6IDEzMS4wMzEgfTtcbiAgICAvLyBUaGUgbWFwLCBjZW50ZXJlZCBhdCBVbHVydVxuICAgIGNvbnN0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIHtcbiAgICAgIHpvb206IDQsXG4gICAgICBjZW50ZXI6IHVsdXJ1LFxuICAgIH0pO1xuICAgIC8vIFRoZSBtYXJrZXIsIHBvc2l0aW9uZWQgYXQgVWx1cnVcbiAgICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgIHBvc2l0aW9uOiB1bHVydSxcbiAgICAgIG1hcDogbWFwLFxuICAgIH0pO1xuICB9XG4gIFxuICBcbiAgXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7bG9hZEFib3V0fTsiLCJpbXBvcnQgQ3JvcXVldGFzIGZyb20gJy4vaW1hZ2VzL2Nyb3F1ZXRhc19yZXNpemVkLmpwZyc7IC8vIFRoZSBjcm9xdWV0dGUgKG1vc3QgaW1wb3J0YW50IGVsZW1lbnQgb2YgdGhpcyB3ZWIpXG4vKiBUaGlzIGNvZGUgdW5kZXIgaGVyZSB3aWxsIHByb2JhYmx5IGJlIGV4cG9ydGVkIGludG8gYSBtb2R1bGUgKi9cbi8qIFdlJ3JlIGdvbm5hIGJ1aWxkIHRoZSBob21lIGNhbnZhcyBub3cgKi9cbmZ1bmN0aW9uIGxvYWRIb21lIChmYXRoZXJDb250YWluZXIsIGxvYWRNZW51KSB7XG5cbiAgICAvKiAxKSB3ZSBkZWZpbmUgZXZlcnkgaHRtbCBlbGVtZW50IHdlJ3JlIGdvbm5hIHB1dCBpbnRvIHRoZSBjYW52YXMgKi9cbiAgICBjb25zdCBob21lQ2FudmFzICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBob21lVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwVGl0bGUxICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcFRpdGxlMiAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHNlcGFyYXRpb24gICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgY29uc3QgcFRleHQgICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IG15Q3JvcXVldGEgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGJ0bk1lbnUgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcbiAgICBcblxuICAgIC8qIDIpIHdlIHB1dCB0aGVpciBjbGFzc2VzICovXG4gICAgaG9tZUNhbnZhcy5jbGFzc05hbWUgPSAnaW5uZXItY2FudmFzIGhvbWUnO1xuICAgIHBUaXRsZTEuY2xhc3NOYW1lICAgID0gJ2JpZy10ZXh0JztcbiAgICBwVGl0bGUyLmNsYXNzTmFtZSAgICA9ICdzbW9sLXRleHQnO1xuICAgIHBUZXh0LmNsYXNzTmFtZSAgICAgID0gJ25vcm1pZS10ZXh0JztcbiAgICBteUNyb3F1ZXRhLmNsYXNzTmFtZSA9ICdjcm9xdWV0YSc7XG4gICAgYnRuTWVudS5jbGFzc05hbWUgICAgPSAnYnV0dG9uLWZvci1tZW51JztcbiAgICBcbiAgICBcblxuICAgIC8qIDMpIHdlIHB1dCB0aGVpciBpbm5lciB0ZXh0ICovXG4gICAgcFRpdGxlMS5pbm5lclRleHQgPSAnV2VsY29tZSB0byc7IFxuICAgIHBUaXRsZTIuaW5uZXJUZXh0ID0gJ3lvdXIgZ3Jhbm55XFwncyBraXRjaGVuJztcbiAgICBwVGV4dC5pbm5lclRleHQgICA9ICdFbmpveSB0aGUgY29va2luZyBvbmx5IHlvdXIgZ3Jhbm55IGNhbiBjb29rJztcbiAgICBteUNyb3F1ZXRhLnNyYyAgICA9IENyb3F1ZXRhczsgLy8gbm90IGEgdGV4dCBidXQgYSBzb3VyY2UgXG4gICAgYnRuTWVudS5pbm5lclRleHQgPSAnTUVOVSc7XG4gICAgXG5cbiAgICAvKiA0KSB3ZSBwdXQgdGhlaXIgZnVuY3Rpb25zICovXG4gICAgYnRuTWVudS5vbmNsaWNrID0gbG9hZE1lbnU7XG5cbiAgICAvKiA1KSBCdXQgaXQncyB0aGUgcGVsdmljIHRocnVzdCAqL1xuICAgIGhvbWVUaXRsZURpdi5hcHBlbmQocFRpdGxlMSxwVGl0bGUyLHNlcGFyYXRpb24scFRleHQsbXlDcm9xdWV0YSxidG5NZW51KTtcblxuICAgIC8qIDYpIHRoYXQgcmVhbGx5IGRyaXZlcyB5b3UgaW5zYW5lICovXG4gICAgaG9tZUNhbnZhcy5hcHBlbmRDaGlsZChob21lVGl0bGVEaXYpO1xuICAgIFxuICAgIC8qIDcpIGxldCdzIGRvIHRoZSB0aW1lIHdhcnAgYWdhaW4hISAqL1xuICAgIGZhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lQ2FudmFzKTtcbn07XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtsb2FkSG9tZX07IiwiaW1wb3J0IENyb3F1ZXRhcyBmcm9tICcuL2ltYWdlcy9jcm9xdWV0YXNfcmVzaXplZC5qcGcnOyAvLyBUaGlzIGltYWdlIHdhcyB0YWtlbiBmcm9tIGludGVybmV0Li4uYnV0IEkgZGlkIG5vdCBzYXZlIHdobyBkaWQgaXQuIEl0J3MgYSBmcmVlIGltYWdlIHRobyA6KFxuaW1wb3J0IFRvcnRpbGxhICBmcm9tICcuL2ltYWdlcy90b3J0aWxsYV9yZXNpemVkLmpwZyc7IC8vIFRoaXMgaW1hZ2Ugd2FzIHRha2VuIGZyb20gaW50ZXJuZXQuLi5idXQgSSBkaWQgbm90IHNhdmUgd2hvIGRpZCBpdC4gSXQncyBhIGZyZWUgaW1hZ2UgdGhvIDooXG5pbXBvcnQgQ2FjaG9wbyAgIGZyb20gJy4vaW1hZ2VzL2NhY2hvcG9fcmVzaXplZC5qcGcnOyAvLyBUaGlzIGltYWdlIHdhcyB0YWtlbiBieSBtZSBpbiBMbGFuZXMsIEFzdHVyaWFzLlxuaW1wb3J0IENodWxldG9uICBmcm9tICcuL2ltYWdlcy9jaHVsZXRvbl9yZXNpemVkLmpwZyc7IC8vIFRoaXMgaW1hZ2Ugd2FzIHRha2VuIGJ5IG1lIGluIExlw7NuLCBDYXN0aWxsYSB5IExlw7NuLlxuaW1wb3J0IEdhbWJhcyAgICBmcm9tICcuL2ltYWdlcy9nYW1iYXNfcmVzaXplZC5qcGcnOyAvLyBUaGlzIGltYWdlIHdhcyB0YWtlbiBieSBtZSBpbiBMbGFuZXMsIEFzdHVyaWFzLlxuaW1wb3J0IFBhZWxsYSAgICBmcm9tICcuL2ltYWdlcy9wYWVsbGFfcmVzaXplZC5qcGcnOyAvLyBUaGlzIGltYWdlIHdhcyB0YWtlbiBieSBtZSBpbiBteSBvd24ga2l0Y2hlbiwgeXVwLCBJIGNvb2tlZCB0aGlzIGxpdHRsZSBiYWJ5LiBJJ20gYWxzbyBWRVJZIHNpbmdsZS4gU28gbGFkaWVzIGFuZCBtaWxsaW9uYWlyZSBnZW50bGVtYW4sIGhpdCBtZSB1cCBpZiB5b3Ugd2FubmEgdGFzdGUgaXQuXG5cbi8qIFRvIGdlbmVyYXRlIGVhY2ggY2FyZCBjb250YWluaW5nIG91ciBtZW51IHdlJ3JlIGdvbm5hIGRlZmluZSBmaXJzdCBhbiBhcnJheSB3aXRoIGFsbCBvdXIgZGlzaGVzICovXG5jb25zdCBEaXNoID0gKHRpdGxlLCBpbWFnZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBpbWFnZSwgZGVzY3JpcHRpb259O1xufTtcbmNvbnN0IGRpc2hlcyA9IFtcbiAgICAvKiBDcm9xdWV0YXMgKi9cbiAgICBEaXNoKCdDcm9xdWV0YXMnLCBDcm9xdWV0YXMsICdXaGF0IG5pZWNlIGRvZXNuXFwndCBsb3ZlIGhlciBncmFubnkgY3JvcXVldHRlcz8nKSxcbiAgICAvKiBUb3J0aWxsYSAgKi9cbiAgICBEaXNoKCdUb3J0aWxsYScsICBUb3J0aWxsYSwgICdIZXIgc2Vjb25kIGJlc3QgZGlzaCwgdGhlIFRvcnRpbGxhLiBXaXRoIG9uaW9uLiBBcyBhbGwgdGhpbmdzIHNob3VsZCBiZS4nKSxcbiAgICAvKiBHYW1iYXMgICAgKi9cbiAgICBEaXNoKCdHYW1iYXMnLCAgICBHYW1iYXMsICAgICdPdXIgeXVtbXkgbGl0dGxlIHNocmltcHMsIHRhc3R5bmVzcyBpcyBtYWdpYy4nKSxcbiAgICAvKiBQYWVsbGEgICAgKi9cbiAgICBEaXNoKCdQYWVsbGEnLCAgICBQYWVsbGEsICAgICdZb3VcXCdyZSBmYXZvcml0ZSBmb29kLiBZb3VcXCdyZSBncmFubnkgc3BlY2lhbGl0eS4gVGhlIG9ubHkgYW5kIG9uZSBQYWVsbGEnKSwgICAgXG4gICAgLyogQ2h1bGV0b24gICovXG4gICAgRGlzaCgnQ2h1bGV0b24nLCAgQ2h1bGV0b24sICAnQmVzdCBtZWF0IHlvdSBoYXZlIGV2ZXIgdGFzdGVkJyksXG4gICAgLyogQ2FjaG9wbyAgICovXG4gICAgRGlzaCgnQ2FjaG9wbycsICAgQ2FjaG9wbywgICAnVGhlIGFzdHVyaWFuIHNwZWNpYWxpdHksIHlvdSBjYW4gZmF0dGVuIDEwIGtpbG9zIGp1c3QgYnkgbG9va2luZyBhdCB0aGlzLicpXG5dO1xuXG4vKiBUaGlzIGNvZGUgdW5kZXIgaGVyZSB3aWxsIHByb2JhYmx5IGJlIGV4cG9ydGVkIGludG8gYSBtb2R1bGUgKi9cbi8qIFdlJ3JlIGdvbm5hIGJ1aWxkIHRoZSBob21lIGNhbnZhcyBub3cgKi9cbmZ1bmN0aW9uIGxvYWRNZW51IChmYXRoZXJDb250YWluZXIpIHtcblxuICAgIC8qIDEpIHdlIGRlZmluZSBldmVyeSBodG1sIGVsZW1lbnQgd2UncmUgZ29ubmEgcHV0IGludG8gdGhlIGNhbnZhcyAqL1xuICAgIGNvbnN0IG1lbnVDYW52YXMgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHBUaXRsZTEgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAvL2NvbnN0IHNlcGFyYXRpb24gICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgY29uc3QgY2FyZENhbnZhcyAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLyogU2luY2Ugd2Ugd2FudCB0byBkeW5hbWljYWxseSBnZW5lcmF0ZSB0aGUgY2FyZHMsIHdlJ2xsIGRvIHRoYXQgc3R1ZmYgbGF0ZXIgKi9cbiAgICBcbiAgICAvKiAyKSB3ZSBwdXQgdGhlaXIgY2xhc3NlcyAqL1xuICAgIG1lbnVDYW52YXMuY2xhc3NOYW1lICAgID0gJ2lubmVyLWNhbnZhcyBtZW51JztcbiAgICBwVGl0bGUxLmNsYXNzTmFtZSAgICAgICA9ICdiaWctdGV4dCc7XG4gICAgY2FyZENhbnZhcy5jbGFzc05hbWUgICAgPSAnY2FyZC1jYW52YXMnO1xuXG4gICAgLyogMykgd2UgcHV0IHRoZWlyIGlubmVyIHRleHQgKi9cbiAgICBwVGl0bGUxLmlubmVyVGV4dCA9ICdDaG9vc2UgeW91ciBkZWxpc2g6JzsgXG4gICAgXG4gICAgLyogNCkgQnV0IGl0J3MgdGhlIHBlbHZpYyB0aHJ1c3QgKi9cbiAgICAvL21lbnVDYW52YXMuYXBwZW5kKHBUaXRsZTEsc2VwYXJhdGlvbixjYXJkQ2FudmFzKTtcbiAgICBtZW51Q2FudmFzLmFwcGVuZChwVGl0bGUxLGNhcmRDYW52YXMpO1xuXG4gICAgLyogNSkgdGhhdCByZWFsbHkgZHJpdmVzIHlvdSBpbnNhbmUgKi9cbiAgICBnZW5lcmF0ZUNhcmRNZW51KGNhcmRDYW52YXMpOyAvKiBpdCBhcHBlbmRzIGV2ZXJ5IGNhcmQgZm9vZCB0byBjYXJkQ2FudmFzICovXG4gICAgXG4gICAgLyogNikgbGV0J3MgZG8gdGhlIHRpbWUgd2FycCBhZ2FpbiEhICovXG4gICAgZmF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDYW52YXMpO1xuICAgIFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNhcmRNZW51KGNhbnZhcykge1xuXG4gICAgZGlzaGVzLmZvckVhY2ggKChkaXNoKSA9PiB7XG5cbiAgICAgICAgLyogMSkgV2UgY3JlYXRlIHRoZSBodG1sIGVsZW1lbnRzICovXG4gICAgICAgIGNvbnN0IGNhcmQgICAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjYXJkVGl0bGUgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGNhcmRJbWFnZSAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCBjYXJkVHh0ICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0Jyk7XG5cbiAgICAgICAgLyogMikgd2UgcHV0IGNsYXNzZXMgZm9yIG91ciBjb29sIGNzcyAqL1xuICAgICAgICBjYXJkLmNsYXNzTmFtZSAgICAgID0gJ2NhcmQnO1xuICAgICAgICBjYXJkVGl0bGUuY2xhc3NOYW1lID0gJ3Ntb2wtdGV4dCc7XG4gICAgICAgIGNhcmRUeHQuY2xhc3NOYW1lICAgPSAnbm9ybWllLXRleHQnO1xuICAgICAgICBjYXJkSW1hZ2UuY2xhc3NOYW1lID0gJ2NhcmQtaW1hZ2UnO1xuXG4gICAgICAgIC8qIDMpIHdlIHB1dCBpdCdzIHRleHQgKi9cbiAgICAgICAgY2FyZFRpdGxlLmlubmVyVGV4dCA9IGRpc2gudGl0bGU7XG4gICAgICAgIGNhcmRJbWFnZS5zcmMgICAgICAgPSBkaXNoLmltYWdlO1xuICAgICAgICBjYXJkVHh0LmlubmVyVGV4dCAgID0gZGlzaC5kZXNjcmlwdGlvbjtcbiAgICAgICAgXG4gICAgICAgIGNhcmQuYXBwZW5kKGNhcmRUaXRsZSxjYXJkSW1hZ2UsY2FyZFR4dCk7XG4gICAgICAgIGNhbnZhcy5hcHBlbmRDaGlsZChjYXJkKTtcblxuICAgIH0pO1xuXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7bG9hZE1lbnV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbi8qIEltcG9ydCBzZWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJzsgLy8gU0NTUyBzdHlsZXMgZm9yIG91ciB3ZWJcbmltcG9ydCBIb21lUGFnZSAgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBNZW51UGFnZSAgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBBYm91dFBhZ2UgZnJvbSAnLi9hYm91dC5qcyc7XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIFdlIHJldHJpZXZlIHRoZSBjb250YWluZXIsIHRoYXQgd2lsbCBob2xkIGFsbCBvdXIgd2ViICovXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG5cblxuLyogRm9yIHRoZSBoZWFkZXIsIHdlJ3JlIGdvbm5hIG1ha2UgYSBkaXYgdGhhdCB3aWxsIGNvbnRhaW4gdGhyZWUgZGl2cywgZWFjaCBvZiBlbSB3aWxsIGJlIHVzZWQgdG8gbW92ZSB0aGUgdXNlciBiZXR3ZWVuIHRoZSB3ZWIgICovXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhlYWRlci5jbGFzc05hbWUgPSAnaGVhZGVyJztcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4vKiBUaGUgdGhyZWUgZGl2cyBpbnNpZGUgdGhlIGhlYWRlciAqL1xuY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaG9tZURpdi5jbGFzc05hbWUgPSAnaG9tZS1idXR0b24nO1xuaG9tZURpdi5pbm5lclRleHQgPSAnSE9NRSc7XG5ob21lRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZEhvbWUpO1xuXG5jb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tZW51RGl2LmNsYXNzTmFtZSA9ICdtZW51LWJ1dHRvbic7XG5tZW51RGl2LmlubmVyVGV4dCA9ICdNRU5VJztcbm1lbnVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkTWVudSk7XG5cbmNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5hYm91dERpdi5jbGFzc05hbWUgPSdhYm91dC1idXR0b24nO1xuYWJvdXREaXYuaW5uZXJUZXh0ID0gJ0FCT1VUIFVTJztcbmFib3V0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZEFib3V0KTtcblxuLyogV2UgYXBwZW5kIHRoZSB0aHJlZSBkaXYtYnV0dG9ucyB0byBoZWFkZXIsIHNpbmNlIHdlIHdhbnQgZW0gaW5zaWRlICovXG5oZWFkZXIuYXBwZW5kQ2hpbGQoaG9tZURpdik7XG5oZWFkZXIuYXBwZW5kQ2hpbGQobWVudURpdik7XG5oZWFkZXIuYXBwZW5kQ2hpbGQoYWJvdXREaXYpO1xuXG4vKiBub3csIHdlIG5lZWQgYSBjYW52YXMgdG8gZGlzcGxheSBvdXIgd2ViLCBpdCB3aWxsIGJlIGJlaGluZCB0aGUgaGVhZGVyICovXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG4vKiB1bmRlciB0aGUgY2FudmFzIHdlIHdpbGwgaGF2ZSBhIGZvb3Rlciwgd2hpY2ggcHJvYmFibHkgd2lsbCBob2xkIG5vdGhpbmcgYnV0IHdpbGwgaGF2ZSBzb21lIHdpZHRoL2hlaWdodCBha2luIHRvIHRoZSBoZWFkZXIgYW5kIHdpbGwgaGF2ZSBzb21lIGJhY2tncm91bmQgY29sb3IgKi9cbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZm9vdGVyLmNsYXNzTmFtZSA9J2Zvb3Rlcic7XG5mb290ZXIuaW5uZXJUZXh0ID0gJ0Rlc2lnbmVkIGJ5IFJpYyBmb3IgVGhlIE9kaW4gUHJvamVjdCc7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxubG9hZEFib3V0KGNhbnZhcyk7XG5cbi8vIEluZGV4LmpzIGZ1bmN0aW9uc1xuZnVuY3Rpb24gY2xlYW5DYW52YXMgKCkge1xuXG4gICAgd2hpbGUgKGNhbnZhcy5maXJzdENoaWxkKSB7XG4gICAgICAgIGNhbnZhcy5yZW1vdmVDaGlsZChjYW52YXMuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zb2xlLmxvZygnPGluZGV4LmpzIGxvYWRIb21lPicpO1xuICAgIGNvbnNvbGUubG9nKGNhbnZhcyk7XG4gICAgY2xlYW5DYW52YXMoKTtcbiAgICBjYW52YXMuY2xhc3NOYW1lID0gJ2NhbnZhcy13ZWIgaG9tZSc7XG4gICAgSG9tZVBhZ2UubG9hZEhvbWUoY2FudmFzLCBsb2FkTWVudSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51ICgpIHtcbiAgICBjb25zb2xlLmxvZygnPGluZGV4LmpzIGxvYWRNZW51PicpO1xuICAgIGNvbnNvbGUubG9nKGNhbnZhcyk7XG4gICAgY2xlYW5DYW52YXMoKTtcbiAgICBjYW52YXMuY2xhc3NOYW1lID0gJ2NhbnZhcy13ZWIgbWVudSc7XG4gICAgTWVudVBhZ2UubG9hZE1lbnUoY2FudmFzKTtcbn07XG5cbmZ1bmN0aW9uIGxvYWRBYm91dCAoKSB7XG4gICAgY29uc29sZS5sb2coJzxpbmRleC5qcyBsb2FkQWJvdXQ+Jyk7XG4gICAgY29uc29sZS5sb2coY2FudmFzKTtcbiAgICBjbGVhbkNhbnZhcygpO1xuICAgIGNhbnZhcy5jbGFzc05hbWUgPSAnY2FudmFzLXdlYiBhYm91dCc7XG4gICAgQWJvdXRQYWdlLmxvYWRBYm91dChjYW52YXMpO1xufTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9