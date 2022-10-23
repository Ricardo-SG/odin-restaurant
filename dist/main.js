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
___CSS_LOADER_EXPORT___.push([module.id, "/* variables */\n/* global css */\nhtml {\n  text-align: center;\n  font-family: 'Montserrat', sans-serif; }\n  html body {\n    color: white;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: auto;\n    margin: 0; }\n    html body .header, html body .footer {\n      height: 8vh;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      font-size: 30px;\n      background-color: rgba(0, 0, 0, 0.719);\n      text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black, -0.07em -0.07em black, -0.07em 0.07em black, 0.07em -0.07em black, 0.07em 0.07em black; }\n    html body .header .home-button:hover, html body .header .menu-button:hover, html body .header .about-button:hover {\n      color: #ffa61f;\n      transform: scale(1.5, 1.5); }\n    html body .header .home-button, html body .header .menu-button, html body .header .about-button {\n      margin-right: 5vw;\n      margin-left: 5vw; }\n\n/* CSS for Home */\n.canvas-web.home {\n  min-height: 55rem; }\n\n.inner-canvas.home {\n  height: 45rem;\n  width: 600px;\n  margin: auto;\n  background-color: rgba(0, 0, 0, 0.719); }\n  .inner-canvas.home .big-text {\n    font-family: \"Herr Von Muellerhoff\", cursive;\n    font-size: 150px;\n    text-align: center;\n    text-transform: capitalize;\n    margin-bottom: 0;\n    margin-top: 2rem;\n    color: #ffa61f;\n    text-shadow: 0.07em 0 black; }\n  .inner-canvas.home .smol-text {\n    font-size: 40px;\n    font-weight: bold;\n    margin-top: -50px;\n    margin-bottom: 0px;\n    text-align: center;\n    text-transform: uppercase;\n    color: #ffa61f;\n    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black; }\n  .inner-canvas.home .normie-text {\n    display: block;\n    color: #ffe6ce;\n    font-size: 20px; }\n  .inner-canvas.home hr {\n    width: 280px;\n    border: 2px solid #c59d5f;\n    margin: 24px auto; }\n  .inner-canvas.home .button-for-menu {\n    display: block;\n    margin: auto;\n    border: 2px solid #222;\n    border-radius: 26px;\n    background-color: #ffa61f;\n    border: 2px solid #ffe6ce;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 70px;\n    margin-top: 20px;\n    color: whitesmoke;\n    text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2); }\n  .inner-canvas.home .button-for-menu:hover, .inner-canvas.home .button-for-menu:active {\n    background-color: #ffe6ce;\n    border: 2px solid #ffe6ce; }\n\n/* CSS for Menu */\n.canvas-web.menu {\n  min-height: 50rem; }\n\n.inner-canvas.menu {\n  margin: auto;\n  /* Grid for all the articles projects */\n  /* copied from home, candidates to be globalized: */ }\n  .inner-canvas.menu .card-canvas {\n    margin: auto;\n    display: grid;\n    width: 75%;\n    grid-template-columns: repeat(2, minmax(450px, 1fr));\n    gap: 15px; }\n    .inner-canvas.menu .card-canvas .card {\n      margin: auto;\n      max-height: 35rem;\n      max-width: 41rem;\n      margin: 10px;\n      background-color: rgba(0, 0, 0, 0.719);\n      border: 1px solid black; }\n      .inner-canvas.menu .card-canvas .card .card-image {\n        max-width: 400px;\n        max-height: 400px;\n        display: block;\n        margin: auto;\n        margin-bottom: 10px; }\n  @media only screen and (max-width: 1000px) {\n    .inner-canvas.menu .card-canvas {\n      width: auto; } }\n  .inner-canvas.menu .big-text {\n    font-family: \"Herr Von Muellerhoff\", cursive;\n    font-size: 10rem;\n    text-align: center;\n    text-transform: capitalize;\n    margin-bottom: 3rem;\n    margin-top: 3rem;\n    color: #ffa61f;\n    background-color: rgba(0, 0, 0, 0.719);\n    text-shadow: 0.07em 0 black; }\n  .inner-canvas.menu .smol-text {\n    font-size: 2rem;\n    font-weight: bold;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    text-align: center;\n    text-transform: uppercase;\n    color: #ffa61f;\n    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black; }\n  .inner-canvas.menu .normie-text {\n    margin-bottom: 1rem;\n    display: block;\n    color: #fa992b;\n    font-size: 1.5rem;\n    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black; }\n\n/* CSS for about */\n.canvas-web.about {\n  min-height: 51rem;\n  max-width: 1500px;\n  margin: auto; }\n\n.inner-canvas.about {\n  margin-top: 10%;\n  margin-right: auto;\n  margin-left: auto;\n  margin-bottom: 10%;\n  background-color: rgba(0, 0, 0, 0.719); }\n  .inner-canvas.about .about-board {\n    display: flex;\n    justify-content: center;\n    align-content: center; }\n    .inner-canvas.about .about-board #map {\n      width: 90%;\n      height: 15rem;\n      margin: 5%; }\n  .inner-canvas.about .about-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 50%;\n    flex-shrink: 0; }\n  .inner-canvas.about .smol-text {\n    font-size: 3rem;\n    font-weight: bold;\n    margin-bottom: 0px;\n    text-align: center;\n    text-transform: uppercase;\n    color: #ffa61f;\n    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black; }\n  .inner-canvas.about hr {\n    width: 280px;\n    border: 2px solid #c59d5f;\n    margin: 24px auto; }\n  .inner-canvas.about .normie-text {\n    display: block;\n    color: #ffe6ce;\n    font-size: 1.5rem;\n    display: inline; }\n  .inner-canvas.about .email {\n    font-style: italic;\n    font-weight: bold;\n    display: inline; }\n  @media only screen and (max-width: 1000px) {\n    .inner-canvas.about .smol-text {\n      font-size: 18px; }\n    .inner-canvas.about .normie-text {\n      font-size: 18px; } }\n\n/* Media rules for cellphone */\n@media only screen and (max-width: 600px) {\n  html {\n    width: auto;\n    height: 600px; }\n    html .canvas-web {\n      min-height: auto; }\n    html .card-canvas {\n      width: auto; } }\n", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["/* variables */\n$bgcolor: rgba(0, 0, 0, 0.719);\n$textcolor-white: rgb(255, 255, 255);\n$textcolor-orange: rgb(255, 166, 31);\n$textcolor-orange-light: rgb(255, 230, 206);\n$text-shadow8:   0.07em 0 black,\n                0 0.07em black,\n                -0.07em 0 black,\n                0 -0.07em black,\n                -0.07em -0.07em black,\n                -0.07em 0.07em black,\n                0.07em -0.07em black,\n                0.07em 0.07em black;\n$text-shadow4:   0.07em 0 black,\n                0 0.07em black,\n                -0.07em 0 black,\n                0 -0.07em black;\n$text-shadow1:   0.07em 0 black;\n              \n               \n$fontsize: 30px;\n@import url(\"https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff&family=Montserrat:wght@300;400;700&display=swap\");\n\n/* global css */\n\nhtml {\n\n    text-align:center;\n    font-family: 'Montserrat', sans-serif;\n\n\n    body {\n        color: $textcolor-white;\n        background: url('./images/background.jpg');\n        background-size:auto;\n        margin:0;\n          \n\n        .header, .footer {\n            height: 8vh;\n            display:flex;\n            flex-direction:row;\n            justify-content: center;\n            align-items: center;\n            font-size: $fontsize;\n            background-color: $bgcolor;\n            text-shadow: $text-shadow8;\n            \n        }\n\n        .header {\n            \n            .home-button:hover, .menu-button:hover, .about-button:hover {\n                color: $textcolor-orange;\n                //color: rgb(178, 210, 224);\n                transform:scale(1.5,1.5);\n\n            }\n            .home-button, .menu-button, .about-button {\n                margin-right:5vw;\n                margin-left:5vw;\n            }\n    \n\n        }\n\n    }\n}\n\n/* CSS for Home */\n.canvas-web.home {\n    min-height:55rem;\n}\n.inner-canvas.home {\n    height:45rem;\n    width: 600px;\n    margin:auto;\n    background-color: $bgcolor;\n\n\n    .big-text {\n        font-family: \"Herr Von Muellerhoff\", cursive;\n        font-size: 150px;\n        text-align: center;\n        text-transform: capitalize;\n        margin-bottom:0;\n        margin-top:2rem;\n        color:$textcolor-orange;\n        text-shadow:$text-shadow1;\n\n    }\n\n    .smol-text {\n        font-size: 40px;\n        font-weight: bold;\n        margin-top: -50px;\n        margin-bottom:0px;\n        text-align: center;\n        text-transform: uppercase;\n\n        color:$textcolor-orange;\n        text-shadow: $text-shadow4;\n\n        \n    }\n\n    .normie-text {\n        display:block;\n        color:$textcolor-orange-light;\n        font-size: 20px;\n    }\n\n    hr {\n        width: 280px;\n        border: 2px solid #c59d5f;\n        margin: 24px auto;\n    }\n\n    .button-for-menu {\n        display:block;\n        margin:auto;\n        border: 2px solid #222;\n        border-radius: 26px;\n        background-color: $textcolor-orange;\n        border: 2px solid $textcolor-orange-light;\n        font-family:'Montserrat', sans-serif;\n        font-size:70px;\n        margin-top:20px;\n        color:whitesmoke;\n        text-shadow: 6px 6px 0px rgba(0,0,0,0.2)\n \n    }\n\n    .button-for-menu:hover, .button-for-menu:active {\n        background-color: $textcolor-orange-light;\n        border: 2px solid $textcolor-orange-light;\n    }\n}\n\n/* CSS for Menu */\n.canvas-web.menu {\n    min-height:50rem;\n\n}\n.inner-canvas.menu {\n\n    margin:auto;\n\n\n    /* Grid for all the articles projects */\n    .card-canvas {\n        margin:auto;\n        display:grid;\n        width:75%; \n        grid-template-columns: repeat(2, minmax(450px, 1fr));\n        gap:15px;\n        \n        .card {\n            margin:auto;\n            max-height:35rem;\n            max-width:41rem;\n            margin: 10px;\n            background-color: $bgcolor; \n            border: 1px solid black;  \n\n            .card-image {\n                max-width:400px;\n                max-height:400px;\n                display:block;\n                margin:auto;\n                margin-bottom:10px;\n            }\n        }\n        \n    }\n\n    @media only screen and (max-width:1000px){\n        .card-canvas {\n          width:auto;\n\n        }\n    }\n    \n/* copied from home, candidates to be globalized: */\n    .big-text {\n        font-family: \"Herr Von Muellerhoff\", cursive;\n        font-size: 10rem; // cambiado\n        text-align: center;\n        text-transform: capitalize;\n        margin-bottom:3rem;\n        margin-top:3rem; // cambiado\n        color:$textcolor-orange;\n        background-color: $bgcolor;\n        text-shadow:$text-shadow1;\n\n    }\n\n    .smol-text {\n        font-size: 2rem; // cambiado \n        font-weight: bold;\n        //margin-top: -50px; cambiado\n        margin-top:1rem;\n        margin-bottom:1rem; // cambiado\n        text-align: center;\n        text-transform: uppercase;\n\n        color:$textcolor-orange;\n        text-shadow: $text-shadow4;\n\n        \n    }\n\n    .normie-text {\n        margin-bottom:1rem;\n        display:block;\n        color:rgb(250, 153, 43);\n        font-size: 1.5rem;\n        text-shadow:$text-shadow4;\n    }\n                  \n\n}\n/* CSS for about */\n.canvas-web.about {\n    min-height:51rem;\n    max-width:1500px;\n    margin:auto;\n}\n.inner-canvas.about {\n    margin-top: 10%;\n    margin-right:auto;\n    margin-left:auto;\n    margin-bottom: 10%;\n    background-color: $bgcolor;\n\n    .about-board {\n        display:flex;\n        justify-content: center;\n        align-content: center;\n\n        #map {\n            width: 90%;\n            height:15rem;\n            margin:5%;\n            \n    \n        }\n    }\n    .about-content {\n        display:flex;\n        flex-direction: column;\n        justify-content: center;\n        width:50%;\n        flex-shrink: 0;\n    }\n\n    .smol-text {\n        font-size: 3rem;\n        font-weight: bold;\n        margin-bottom:0px;\n        text-align: center;\n        text-transform: uppercase;\n\n        color:$textcolor-orange;\n        text-shadow: $text-shadow4;\n\n        \n    }\n    hr {\n        width: 280px;\n        border: 2px solid #c59d5f;\n        margin: 24px auto;\n    }\n\n    .normie-text {\n        display:block;\n        color:$textcolor-orange-light;\n        font-size: 1.5rem;\n        display:inline;\n    }\n\n    .email {\n        font-style:italic;\n        font-weight:bold;\n        display:inline;\n    }\n\n    @media only screen and (max-width:1000px) {\n\n        .smol-text {\n          font-size:18px;\n\n        }\n\n        .normie-text {\n            font-size:18px;\n        }\n\n\n    }\n}\n\n        \n\n\n               \n\n                \n\n\n//                 /* Grid for all the articles projects */\n//                 .card-canvas {\n//                     max-width: 80vw;\n//                     display:grid;\n//                     grid-template-columns: repeat(2, minmax(400px, 1fr));\n//                     gap:15px;\n\n//                 }\n//                 .card-canvas .card {\n//                     max-width: 600px;\n//                     max-height: 600px;\n//                     margin: 10px;\n                    \n//                     background-color: $bgcolor; \n//                     border: 1px solid black;  \n//                 }\n\n\n//                 .card p {\n//                 padding:5px;\n//                 }\n\n//                 .card-image {\n//                     max-width:400px;\n//                     max-height:400px;\n//                 }\n\n\n//             }\n//             .menu {\n//                 /* if we're displaying menu, we're overriding inner-canvas properties */\n//                 background-color: rgba(255, 255, 255, 0);\n//             }\n//     }\n// }\n\n\n/* Media rules for cellphone */\n@media only screen and (max-width:600px) {\n    html {\n        width:auto;\n        height:600px;\n\n        .canvas-web {\n            min-height: auto;\n        }\n        .card-canvas {\n            width:auto;\n        }\n\n    }\n}\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQW1CO0FBQ3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUhlcnIrVm9uK011ZWxsZXJob2ZmJmZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIGdsb2JhbCBjc3MgKi9cXG5odG1sIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7IH1cXG4gIGh0bWwgYm9keSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xcbiAgICBtYXJnaW46IDA7IH1cXG4gICAgaHRtbCBib2R5IC5oZWFkZXIsIGh0bWwgYm9keSAuZm9vdGVyIHtcXG4gICAgICBoZWlnaHQ6IDh2aDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcxOSk7XFxuICAgICAgdGV4dC1zaGFkb3c6IDAuMDdlbSAwIGJsYWNrLCAwIDAuMDdlbSBibGFjaywgLTAuMDdlbSAwIGJsYWNrLCAwIC0wLjA3ZW0gYmxhY2ssIC0wLjA3ZW0gLTAuMDdlbSBibGFjaywgLTAuMDdlbSAwLjA3ZW0gYmxhY2ssIDAuMDdlbSAtMC4wN2VtIGJsYWNrLCAwLjA3ZW0gMC4wN2VtIGJsYWNrOyB9XFxuICAgIGh0bWwgYm9keSAuaGVhZGVyIC5ob21lLWJ1dHRvbjpob3ZlciwgaHRtbCBib2R5IC5oZWFkZXIgLm1lbnUtYnV0dG9uOmhvdmVyLCBodG1sIGJvZHkgLmhlYWRlciAuYWJvdXQtYnV0dG9uOmhvdmVyIHtcXG4gICAgICBjb2xvcjogI2ZmYTYxZjtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSwgMS41KTsgfVxcbiAgICBodG1sIGJvZHkgLmhlYWRlciAuaG9tZS1idXR0b24sIGh0bWwgYm9keSAuaGVhZGVyIC5tZW51LWJ1dHRvbiwgaHRtbCBib2R5IC5oZWFkZXIgLmFib3V0LWJ1dHRvbiB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiA1dnc7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDV2dzsgfVxcblxcbi8qIENTUyBmb3IgSG9tZSAqL1xcbi5jYW52YXMtd2ViLmhvbWUge1xcbiAgbWluLWhlaWdodDogNTVyZW07IH1cXG5cXG4uaW5uZXItY2FudmFzLmhvbWUge1xcbiAgaGVpZ2h0OiA0NXJlbTtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MTkpOyB9XFxuICAuaW5uZXItY2FudmFzLmhvbWUgLmJpZy10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZXJyIFZvbiBNdWVsbGVyaG9mZlxcXCIsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMTUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIGNvbG9yOiAjZmZhNjFmO1xcbiAgICB0ZXh0LXNoYWRvdzogMC4wN2VtIDAgYmxhY2s7IH1cXG4gIC5pbm5lci1jYW52YXMuaG9tZSAuc21vbC10ZXh0IHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogI2ZmYTYxZjtcXG4gICAgdGV4dC1zaGFkb3c6IDAuMDdlbSAwIGJsYWNrLCAwIDAuMDdlbSBibGFjaywgLTAuMDdlbSAwIGJsYWNrLCAwIC0wLjA3ZW0gYmxhY2s7IH1cXG4gIC5pbm5lci1jYW52YXMuaG9tZSAubm9ybWllLXRleHQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6ICNmZmU2Y2U7XFxuICAgIGZvbnQtc2l6ZTogMjBweDsgfVxcbiAgLmlubmVyLWNhbnZhcy5ob21lIGhyIHtcXG4gICAgd2lkdGg6IDI4MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYzU5ZDVmO1xcbiAgICBtYXJnaW46IDI0cHggYXV0bzsgfVxcbiAgLmlubmVyLWNhbnZhcy5ob21lIC5idXR0b24tZm9yLW1lbnUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjIyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNjFmO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZlNmNlO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDcwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICB0ZXh0LXNoYWRvdzogNnB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpOyB9XFxuICAuaW5uZXItY2FudmFzLmhvbWUgLmJ1dHRvbi1mb3ItbWVudTpob3ZlciwgLmlubmVyLWNhbnZhcy5ob21lIC5idXR0b24tZm9yLW1lbnU6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTZjZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZTZjZTsgfVxcblxcbi8qIENTUyBmb3IgTWVudSAqL1xcbi5jYW52YXMtd2ViLm1lbnUge1xcbiAgbWluLWhlaWdodDogNTByZW07IH1cXG5cXG4uaW5uZXItY2FudmFzLm1lbnUge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgLyogR3JpZCBmb3IgYWxsIHRoZSBhcnRpY2xlcyBwcm9qZWN0cyAqL1xcbiAgLyogY29waWVkIGZyb20gaG9tZSwgY2FuZGlkYXRlcyB0byBiZSBnbG9iYWxpemVkOiAqLyB9XFxuICAuaW5uZXItY2FudmFzLm1lbnUgLmNhcmQtY2FudmFzIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoNDUwcHgsIDFmcikpO1xcbiAgICBnYXA6IDE1cHg7IH1cXG4gICAgLmlubmVyLWNhbnZhcy5tZW51IC5jYXJkLWNhbnZhcyAuY2FyZCB7XFxuICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgIG1heC1oZWlnaHQ6IDM1cmVtO1xcbiAgICAgIG1heC13aWR0aDogNDFyZW07XFxuICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MTkpO1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyB9XFxuICAgICAgLmlubmVyLWNhbnZhcy5tZW51IC5jYXJkLWNhbnZhcyAuY2FyZCAuY2FyZC1pbWFnZSB7XFxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5pbm5lci1jYW52YXMubWVudSAuY2FyZC1jYW52YXMge1xcbiAgICAgIHdpZHRoOiBhdXRvOyB9IH1cXG4gIC5pbm5lci1jYW52YXMubWVudSAuYmlnLXRleHQge1xcbiAgICBmb250LWZhbWlseTogXFxcIkhlcnIgVm9uIE11ZWxsZXJob2ZmXFxcIiwgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAxMHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgY29sb3I6ICNmZmE2MWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MTkpO1xcbiAgICB0ZXh0LXNoYWRvdzogMC4wN2VtIDAgYmxhY2s7IH1cXG4gIC5pbm5lci1jYW52YXMubWVudSAuc21vbC10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogI2ZmYTYxZjtcXG4gICAgdGV4dC1zaGFkb3c6IDAuMDdlbSAwIGJsYWNrLCAwIDAuMDdlbSBibGFjaywgLTAuMDdlbSAwIGJsYWNrLCAwIC0wLjA3ZW0gYmxhY2s7IH1cXG4gIC5pbm5lci1jYW52YXMubWVudSAubm9ybWllLXRleHQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6ICNmYTk5MmI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0ZXh0LXNoYWRvdzogMC4wN2VtIDAgYmxhY2ssIDAgMC4wN2VtIGJsYWNrLCAtMC4wN2VtIDAgYmxhY2ssIDAgLTAuMDdlbSBibGFjazsgfVxcblxcbi8qIENTUyBmb3IgYWJvdXQgKi9cXG4uY2FudmFzLXdlYi5hYm91dCB7XFxuICBtaW4taGVpZ2h0OiA1MXJlbTtcXG4gIG1heC13aWR0aDogMTUwMHB4O1xcbiAgbWFyZ2luOiBhdXRvOyB9XFxuXFxuLmlubmVyLWNhbnZhcy5hYm91dCB7XFxuICBtYXJnaW4tdG9wOiAxMCU7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MTkpOyB9XFxuICAuaW5uZXItY2FudmFzLmFib3V0IC5hYm91dC1ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7IH1cXG4gICAgLmlubmVyLWNhbnZhcy5hYm91dCAuYWJvdXQtYm9hcmQgI21hcCB7XFxuICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICBoZWlnaHQ6IDE1cmVtO1xcbiAgICAgIG1hcmdpbjogNSU7IH1cXG4gIC5pbm5lci1jYW52YXMuYWJvdXQgLmFib3V0LWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZmxleC1zaHJpbms6IDA7IH1cXG4gIC5pbm5lci1jYW52YXMuYWJvdXQgLnNtb2wtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogI2ZmYTYxZjtcXG4gICAgdGV4dC1zaGFkb3c6IDAuMDdlbSAwIGJsYWNrLCAwIDAuMDdlbSBibGFjaywgLTAuMDdlbSAwIGJsYWNrLCAwIC0wLjA3ZW0gYmxhY2s7IH1cXG4gIC5pbm5lci1jYW52YXMuYWJvdXQgaHIge1xcbiAgICB3aWR0aDogMjgwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjNTlkNWY7XFxuICAgIG1hcmdpbjogMjRweCBhdXRvOyB9XFxuICAuaW5uZXItY2FudmFzLmFib3V0IC5ub3JtaWUtdGV4dCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjb2xvcjogI2ZmZTZjZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGlubGluZTsgfVxcbiAgLmlubmVyLWNhbnZhcy5hYm91dCAuZW1haWwge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5pbm5lci1jYW52YXMuYWJvdXQgLnNtb2wtdGV4dCB7XFxuICAgICAgZm9udC1zaXplOiAxOHB4OyB9XFxuICAgIC5pbm5lci1jYW52YXMuYWJvdXQgLm5vcm1pZS10ZXh0IHtcXG4gICAgICBmb250LXNpemU6IDE4cHg7IH0gfVxcblxcbi8qIE1lZGlhIHJ1bGVzIGZvciBjZWxscGhvbmUgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBodG1sIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogNjAwcHg7IH1cXG4gICAgaHRtbCAuY2FudmFzLXdlYiB7XFxuICAgICAgbWluLWhlaWdodDogYXV0bzsgfVxcbiAgICBodG1sIC5jYXJkLWNhbnZhcyB7XFxuICAgICAgd2lkdGg6IGF1dG87IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFBO0FBdUJBLGVBQUE7QUFFQTtFQUVJLGtCQUFpQjtFQUNqQixxQ0FBcUMsRUFBQTtFQUh6QztJQU9RLFlBOUI0QjtJQStCNUIsbURBQTBDO0lBQzFDLHFCQUFvQjtJQUNwQixTQUFRLEVBQUE7SUFWaEI7TUFjWSxXQUFXO01BQ1gsYUFBWTtNQUNaLG1CQUFrQjtNQUNsQix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLGVBeEJHO01BeUJILHNDQTVDa0I7TUE2Q2xCLHFLQWxDdUIsRUFBQTtJQWFuQztNQTRCZ0IsY0FsRG9CO01Bb0RwQiwwQkFBd0IsRUFBQTtJQTlCeEM7TUFrQ2dCLGlCQUFnQjtNQUNoQixnQkFB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LEVBQUE7RUFHbEI7SUEzREo7TUE4RFUsZUFBYyxFQUFBO0lBOUR4QjtNQW1FWSxlQUFjLEVBQUEsRUFDakI7O0FBbURULDhCQUFBO0FBQ0E7RUFDSTtJQUNJLFdBQVU7SUFDVixhQUFZLEVBQUE7SUFGaEI7TUFLUSxnQkFBZ0IsRUFBQTtJQUx4QjtNQVFRLFdBQVUsRUFBQSxFQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHZhcmlhYmxlcyAqL1xcbiRiZ2NvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzE5KTtcXG4kdGV4dGNvbG9yLXdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuJHRleHRjb2xvci1vcmFuZ2U6IHJnYigyNTUsIDE2NiwgMzEpO1xcbiR0ZXh0Y29sb3Itb3JhbmdlLWxpZ2h0OiByZ2IoMjU1LCAyMzAsIDIwNik7XFxuJHRleHQtc2hhZG93ODogICAwLjA3ZW0gMCBibGFjayxcXG4gICAgICAgICAgICAgICAgMCAwLjA3ZW0gYmxhY2ssXFxuICAgICAgICAgICAgICAgIC0wLjA3ZW0gMCBibGFjayxcXG4gICAgICAgICAgICAgICAgMCAtMC4wN2VtIGJsYWNrLFxcbiAgICAgICAgICAgICAgICAtMC4wN2VtIC0wLjA3ZW0gYmxhY2ssXFxuICAgICAgICAgICAgICAgIC0wLjA3ZW0gMC4wN2VtIGJsYWNrLFxcbiAgICAgICAgICAgICAgICAwLjA3ZW0gLTAuMDdlbSBibGFjayxcXG4gICAgICAgICAgICAgICAgMC4wN2VtIDAuMDdlbSBibGFjaztcXG4kdGV4dC1zaGFkb3c0OiAgIDAuMDdlbSAwIGJsYWNrLFxcbiAgICAgICAgICAgICAgICAwIDAuMDdlbSBibGFjayxcXG4gICAgICAgICAgICAgICAgLTAuMDdlbSAwIGJsYWNrLFxcbiAgICAgICAgICAgICAgICAwIC0wLjA3ZW0gYmxhY2s7XFxuJHRleHQtc2hhZG93MTogICAwLjA3ZW0gMCBibGFjaztcXG4gICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgIFxcbiRmb250c2l6ZTogMzBweDtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1IZXJyK1ZvbitNdWVsbGVyaG9mZiZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbi8qIGdsb2JhbCBjc3MgKi9cXG5cXG5odG1sIHtcXG5cXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuXFxuXFxuICAgIGJvZHkge1xcbiAgICAgICAgY29sb3I6ICR0ZXh0Y29sb3Itd2hpdGU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vaW1hZ2VzL2JhY2tncm91bmQuanBnJyk7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6YXV0bztcXG4gICAgICAgIG1hcmdpbjowO1xcbiAgICAgICAgICBcXG5cXG4gICAgICAgIC5oZWFkZXIsIC5mb290ZXIge1xcbiAgICAgICAgICAgIGhlaWdodDogOHZoO1xcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250c2l6ZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdjb2xvcjtcXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogJHRleHQtc2hhZG93ODtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5oZWFkZXIge1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC5ob21lLWJ1dHRvbjpob3ZlciwgLm1lbnUtYnV0dG9uOmhvdmVyLCAuYWJvdXQtYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICR0ZXh0Y29sb3Itb3JhbmdlO1xcbiAgICAgICAgICAgICAgICAvL2NvbG9yOiByZ2IoMTc4LCAyMTAsIDIyNCk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxLjUsMS41KTtcXG5cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLmhvbWUtYnV0dG9uLCAubWVudS1idXR0b24sIC5hYm91dC1idXR0b24ge1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6NXZ3O1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDo1dnc7XFxuICAgICAgICAgICAgfVxcbiAgICBcXG5cXG4gICAgICAgIH1cXG5cXG4gICAgfVxcbn1cXG5cXG4vKiBDU1MgZm9yIEhvbWUgKi9cXG4uY2FudmFzLXdlYi5ob21lIHtcXG4gICAgbWluLWhlaWdodDo1NXJlbTtcXG59XFxuLmlubmVyLWNhbnZhcy5ob21lIHtcXG4gICAgaGVpZ2h0OjQ1cmVtO1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIG1hcmdpbjphdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdjb2xvcjtcXG5cXG5cXG4gICAgLmJpZy10ZXh0IHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVyciBWb24gTXVlbGxlcmhvZmZcXFwiLCBjdXJzaXZlO1xcbiAgICAgICAgZm9udC1zaXplOiAxNTBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTowO1xcbiAgICAgICAgbWFyZ2luLXRvcDoycmVtO1xcbiAgICAgICAgY29sb3I6JHRleHRjb2xvci1vcmFuZ2U7XFxuICAgICAgICB0ZXh0LXNoYWRvdzokdGV4dC1zaGFkb3cxO1xcblxcbiAgICB9XFxuXFxuICAgIC5zbW9sLXRleHQge1xcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206MHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXG4gICAgICAgIGNvbG9yOiR0ZXh0Y29sb3Itb3JhbmdlO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6ICR0ZXh0LXNoYWRvdzQ7XFxuXFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAubm9ybWllLXRleHQge1xcbiAgICAgICAgZGlzcGxheTpibG9jaztcXG4gICAgICAgIGNvbG9yOiR0ZXh0Y29sb3Itb3JhbmdlLWxpZ2h0O1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIGhyIHtcXG4gICAgICAgIHdpZHRoOiAyODBweDtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjNTlkNWY7XFxuICAgICAgICBtYXJnaW46IDI0cHggYXV0bztcXG4gICAgfVxcblxcbiAgICAuYnV0dG9uLWZvci1tZW51IHtcXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgICAgICBtYXJnaW46YXV0bztcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMjI7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHRjb2xvci1vcmFuZ2U7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkdGV4dGNvbG9yLW9yYW5nZS1saWdodDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgICAgIGZvbnQtc2l6ZTo3MHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xcbiAgICAgICAgY29sb3I6d2hpdGVzbW9rZTtcXG4gICAgICAgIHRleHQtc2hhZG93OiA2cHggNnB4IDBweCByZ2JhKDAsMCwwLDAuMilcXG4gXFxuICAgIH1cXG5cXG4gICAgLmJ1dHRvbi1mb3ItbWVudTpob3ZlciwgLmJ1dHRvbi1mb3ItbWVudTphY3RpdmUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHRjb2xvci1vcmFuZ2UtbGlnaHQ7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkdGV4dGNvbG9yLW9yYW5nZS1saWdodDtcXG4gICAgfVxcbn1cXG5cXG4vKiBDU1MgZm9yIE1lbnUgKi9cXG4uY2FudmFzLXdlYi5tZW51IHtcXG4gICAgbWluLWhlaWdodDo1MHJlbTtcXG5cXG59XFxuLmlubmVyLWNhbnZhcy5tZW51IHtcXG5cXG4gICAgbWFyZ2luOmF1dG87XFxuXFxuXFxuICAgIC8qIEdyaWQgZm9yIGFsbCB0aGUgYXJ0aWNsZXMgcHJvamVjdHMgKi9cXG4gICAgLmNhcmQtY2FudmFzIHtcXG4gICAgICAgIG1hcmdpbjphdXRvO1xcbiAgICAgICAgZGlzcGxheTpncmlkO1xcbiAgICAgICAgd2lkdGg6NzUlOyBcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCg0NTBweCwgMWZyKSk7XFxuICAgICAgICBnYXA6MTVweDtcXG4gICAgICAgIFxcbiAgICAgICAgLmNhcmQge1xcbiAgICAgICAgICAgIG1hcmdpbjphdXRvO1xcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6MzVyZW07XFxuICAgICAgICAgICAgbWF4LXdpZHRoOjQxcmVtO1xcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdjb2xvcjsgXFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICBcXG5cXG4gICAgICAgICAgICAuY2FyZC1pbWFnZSB7XFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDo0MDBweDtcXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDo0MDBweDtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcXG4gICAgICAgICAgICAgICAgbWFyZ2luOmF1dG87XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAwMHB4KXtcXG4gICAgICAgIC5jYXJkLWNhbnZhcyB7XFxuICAgICAgICAgIHdpZHRoOmF1dG87XFxuXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgXFxuLyogY29waWVkIGZyb20gaG9tZSwgY2FuZGlkYXRlcyB0byBiZSBnbG9iYWxpemVkOiAqL1xcbiAgICAuYmlnLXRleHQge1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJIZXJyIFZvbiBNdWVsbGVyaG9mZlxcXCIsIGN1cnNpdmU7XFxuICAgICAgICBmb250LXNpemU6IDEwcmVtOyAvLyBjYW1iaWFkb1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOjNyZW07XFxuICAgICAgICBtYXJnaW4tdG9wOjNyZW07IC8vIGNhbWJpYWRvXFxuICAgICAgICBjb2xvcjokdGV4dGNvbG9yLW9yYW5nZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ2NvbG9yO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6JHRleHQtc2hhZG93MTtcXG5cXG4gICAgfVxcblxcbiAgICAuc21vbC10ZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTsgLy8gY2FtYmlhZG8gXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIC8vbWFyZ2luLXRvcDogLTUwcHg7IGNhbWJpYWRvXFxuICAgICAgICBtYXJnaW4tdG9wOjFyZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOjFyZW07IC8vIGNhbWJpYWRvXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcbiAgICAgICAgY29sb3I6JHRleHRjb2xvci1vcmFuZ2U7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogJHRleHQtc2hhZG93NDtcXG5cXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5ub3JtaWUtdGV4dCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOjFyZW07XFxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICAgICAgY29sb3I6cmdiKDI1MCwgMTUzLCA0Myk7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIHRleHQtc2hhZG93OiR0ZXh0LXNoYWRvdzQ7XFxuICAgIH1cXG4gICAgICAgICAgICAgICAgICBcXG5cXG59XFxuLyogQ1NTIGZvciBhYm91dCAqL1xcbi5jYW52YXMtd2ViLmFib3V0IHtcXG4gICAgbWluLWhlaWdodDo1MXJlbTtcXG4gICAgbWF4LXdpZHRoOjE1MDBweDtcXG4gICAgbWFyZ2luOmF1dG87XFxufVxcbi5pbm5lci1jYW52YXMuYWJvdXQge1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7XFxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ2NvbG9yO1xcblxcbiAgICAuYWJvdXQtYm9hcmQge1xcbiAgICAgICAgZGlzcGxheTpmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgICAjbWFwIHtcXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgICAgIGhlaWdodDoxNXJlbTtcXG4gICAgICAgICAgICBtYXJnaW46NSU7XFxuICAgICAgICAgICAgXFxuICAgIFxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5hYm91dC1jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOjUwJTtcXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICB9XFxuXFxuICAgIC5zbW9sLXRleHQge1xcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOjBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFxuICAgICAgICBjb2xvcjokdGV4dGNvbG9yLW9yYW5nZTtcXG4gICAgICAgIHRleHQtc2hhZG93OiAkdGV4dC1zaGFkb3c0O1xcblxcbiAgICAgICAgXFxuICAgIH1cXG4gICAgaHIge1xcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2M1OWQ1ZjtcXG4gICAgICAgIG1hcmdpbjogMjRweCBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5ub3JtaWUtdGV4dCB7XFxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICAgICAgY29sb3I6JHRleHRjb2xvci1vcmFuZ2UtbGlnaHQ7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIGRpc3BsYXk6aW5saW5lO1xcbiAgICB9XFxuXFxuICAgIC5lbWFpbCB7XFxuICAgICAgICBmb250LXN0eWxlOml0YWxpYztcXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICAgICAgICBkaXNwbGF5OmlubGluZTtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAwMHB4KSB7XFxuXFxuICAgICAgICAuc21vbC10ZXh0IHtcXG4gICAgICAgICAgZm9udC1zaXplOjE4cHg7XFxuXFxuICAgICAgICB9XFxuXFxuICAgICAgICAubm9ybWllLXRleHQge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxOHB4O1xcbiAgICAgICAgfVxcblxcblxcbiAgICB9XFxufVxcblxcbiAgICAgICAgXFxuXFxuXFxuICAgICAgICAgICAgICAgXFxuXFxuICAgICAgICAgICAgICAgIFxcblxcblxcbi8vICAgICAgICAgICAgICAgICAvKiBHcmlkIGZvciBhbGwgdGhlIGFydGljbGVzIHByb2plY3RzICovXFxuLy8gICAgICAgICAgICAgICAgIC5jYXJkLWNhbnZhcyB7XFxuLy8gICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwdnc7XFxuLy8gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XFxuLy8gICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xcbi8vICAgICAgICAgICAgICAgICAgICAgZ2FwOjE1cHg7XFxuXFxuLy8gICAgICAgICAgICAgICAgIH1cXG4vLyAgICAgICAgICAgICAgICAgLmNhcmQtY2FudmFzIC5jYXJkIHtcXG4vLyAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XFxuLy8gICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcXG4vLyAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcXG4gICAgICAgICAgICAgICAgICAgIFxcbi8vICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnY29sb3I7IFxcbi8vICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICBcXG4vLyAgICAgICAgICAgICAgICAgfVxcblxcblxcbi8vICAgICAgICAgICAgICAgICAuY2FyZCBwIHtcXG4vLyAgICAgICAgICAgICAgICAgcGFkZGluZzo1cHg7XFxuLy8gICAgICAgICAgICAgICAgIH1cXG5cXG4vLyAgICAgICAgICAgICAgICAgLmNhcmQtaW1hZ2Uge1xcbi8vICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOjQwMHB4O1xcbi8vICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDo0MDBweDtcXG4vLyAgICAgICAgICAgICAgICAgfVxcblxcblxcbi8vICAgICAgICAgICAgIH1cXG4vLyAgICAgICAgICAgICAubWVudSB7XFxuLy8gICAgICAgICAgICAgICAgIC8qIGlmIHdlJ3JlIGRpc3BsYXlpbmcgbWVudSwgd2UncmUgb3ZlcnJpZGluZyBpbm5lci1jYW52YXMgcHJvcGVydGllcyAqL1xcbi8vICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbi8vICAgICAgICAgICAgIH1cXG4vLyAgICAgfVxcbi8vIH1cXG5cXG5cXG4vKiBNZWRpYSBydWxlcyBmb3IgY2VsbHBob25lICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XFxuICAgIGh0bWwge1xcbiAgICAgICAgd2lkdGg6YXV0bztcXG4gICAgICAgIGhlaWdodDo2MDBweDtcXG5cXG4gICAgICAgIC5jYW52YXMtd2ViIHtcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmNhcmQtY2FudmFzIHtcXG4gICAgICAgICAgICB3aWR0aDphdXRvO1xcbiAgICAgICAgfVxcblxcbiAgICB9XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBsb2FkQWJvdXQgKGZhdGhlckNvbnRhaW5lcikge1xuXG4gICAgLyogMSkgd2UgZGVmaW5lIGV2ZXJ5IGh0bWwgZWxlbWVudCB3ZSdyZSBnb25uYSBwdXQgaW50byB0aGUgY2FudmFzICovXG4gICAgY29uc3QgYWJvdXRDYW52YXMgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwVGl0bGUxICAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBzZXBhcmF0aW9uICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgY29uc3QgYWJvdXRCb2FyZCAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgICBtYXAgICAgICAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHJpZ2h0UGFydCAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcFRpdGxlMiAgICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcFRleHQgICAgICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcE1haWwgICAgICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdlbWFpbCcpO1xuICAgIFxuICAgIC8qIDIpIFdlIHB1dCB0aGUgSUQgaW4gdGhlIG1hcCwgZm9yIGJlaW5nIGFibGUgdG8gdXNlIGl0ICovXG4gICAgbWFwLmlkID0gJ21hcCc7XG4gICAgXG4gICAgLyogMikgd2UgcHV0IHRoZWlyIGNsYXNzZXMgKi9cbiAgICBhYm91dENhbnZhcy5jbGFzc05hbWUgICAgPSAnaW5uZXItY2FudmFzIGFib3V0JztcbiAgICBwVGl0bGUxLmNsYXNzTmFtZSAgICAgICAgPSAnc21vbC10ZXh0JztcbiAgICBhYm91dEJvYXJkLmNsYXNzTmFtZSAgICAgPSAnYWJvdXQtYm9hcmQnO1xuICAgIHJpZ2h0UGFydC5jbGFzc05hbWUgICAgICA9ICdhYm91dC1jb250ZW50JztcbiAgICBwVGl0bGUyLmNsYXNzTmFtZSAgICAgICAgPSAnbm9ybWllLXRleHQnO1xuICAgIHBUZXh0LmNsYXNzTmFtZSAgICAgICAgICA9ICdub3JtaWUtdGV4dCc7XG4gICAgcE1haWwuY2xhc3NOYW1lICAgICAgICAgID0gJ25vcm1pZS10ZXh0IGVtYWlsJztcbiAgICBtYXAuY2xhc3NOYW1lICAgICAgICAgICAgPSAnZ21hcCc7XG4gICAgXG5cbiAgICAvKiAzKSB3ZSBwdXQgdGhlaXIgaW5uZXIgdGV4dCAqL1xuICAgIHBUaXRsZTEuaW5uZXJUZXh0ID0gJ0Fib3V0IHVzISc7IFxuICAgIHBUaXRsZTIuaW5uZXJUZXh0ID0gJ1lvdSBkb25cXCd0IGtub3cgdXM/IFRoZSBjb29rIGlzIGFjdHVhbGx5IHlvdXIgb3duIGdyYW5kbW90aGVyLlxcbicrXG4gICAgICAgICAgICAgICAgICAgICAgICAnVGhhdFxcJ3MgcmlnaHQsIHdlIGhpcmVkIGhlci4gSG93IGRpZCB5b3UgZXhwZWN0IHdlIHJlcGxpY2F0ZSBoZXIgZm9vZD8nO1xuICAgIHBUZXh0LmlubmVyVGV4dCAgID0gJ1lvdSBjYW4gY29udGFjdCB1cyB3aXRoIHRoaXMgdG90YWwgcmVhbCBlLW1haWw6ICc7XG4gICAgcE1haWwuaW5uZXJUZXh0ICAgPSAneW91cmdyYW5ueXJvY2tzQGdyYW5ueXNraXRjaGVuLmNvbSc7XG4gICAgXG5cblxuICAgIC8qIDMpIEJ1dCBpdCdzIHRoZSBwZWx2aWMgdGhydXN0ICovXG4gICAgYWJvdXRDYW52YXMuYXBwZW5kKHBUaXRsZTEsIHNlcGFyYXRpb24sIGFib3V0Qm9hcmQpO1xuICAgIGFib3V0Qm9hcmQuYXBwZW5kKG1hcCwgcmlnaHRQYXJ0KTtcblxuICAgIC8qIDQpIHRoYXQgcmVhbGx5IGRyaXZlcyB5b3UgaW5zYW5lICovXG4gICAgcmlnaHRQYXJ0LmFwcGVuZChwVGl0bGUyLHBUZXh0LHBNYWlsKTtcbiAgICBcbiAgICAvKiA1KSBsZXQncyBkbyB0aGUgdGltZSB3YXJwIGFnYWluISEgKi9cbiAgICBmYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRDYW52YXMpO1xuXG4gICAgIC8qIDYpIFdlIGluaXQgdGhlIG1hcCAqL1xuICAgICB3aW5kb3cuaW5pdE1hcCA9IGluaXRNYXA7XG59O1xuLypcbmxvYWRlci5sb2FkKCkudGhlbigoKSA9PiB7XG4gICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChtYXAsIHtcbiAgICAgIGNlbnRlcjogeyBsYXQ6IC0zNC4zOTcsIGxuZzogMTUwLjY0NCB9LFxuICAgICAgem9vbTogOCxcbiAgICB9KTtcbiAgfSk7Ki9cbi8vICAgY29uc3QgbG9hZGVyICAgICAgICAgPSBuZXcgTG9hZGVyKHtcbi8vICAgICBhcGlLZXk6IFwiQUl6YVN5RFZuUEVPWUFnUDgyUi1pQWpNZVhrajg3NGctZnRlbU5jXCIsXG4vLyAgICAgdmVyc2lvbjogXCJ3ZWVrbHlcIlxuLy8gICB9KTtcblxuLy8gICBsb2FkZXIubG9hZCgpLnRoZW4oKCkgPT4ge1xuLy8gICAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAobWFwLCB7XG4vLyAgICAgICBjZW50ZXI6IHsgbGF0OiAtMzQuMzk3LCBsbmc6IDE1MC42NDQgfSxcbi8vICAgICAgIHpvb206IDgsXG4vLyAgICAgfSk7XG4vLyAgIH0pO1xuXG4vLyAgLy9sb2FkZXIubG9hZCgpO1xuXG4vLyBJbml0aWFsaXplIGFuZCBhZGQgdGhlIG1hcFxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcbiAgICBjb25zb2xlLmxvZygnPGluaXRNYXA+Jyk7XG4gICAgLy8gVGhlIGxvY2F0aW9uIG9mIFVsdXJ1XG4gICAgY29uc3QgdWx1cnUgPSB7IGxhdDogLTI1LjM0NCwgbG5nOiAxMzEuMDMxIH07XG4gICAgLy8gVGhlIG1hcCwgY2VudGVyZWQgYXQgVWx1cnVcbiAgICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCB7XG4gICAgICB6b29tOiA0LFxuICAgICAgY2VudGVyOiB1bHVydSxcbiAgICB9KTtcbiAgICAvLyBUaGUgbWFya2VyLCBwb3NpdGlvbmVkIGF0IFVsdXJ1XG4gICAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICBwb3NpdGlvbjogdWx1cnUsXG4gICAgICBtYXA6IG1hcCxcbiAgICB9KTtcbiAgfVxuICBcbiAgXG4gIFxuXG5cblxuZXhwb3J0IGRlZmF1bHQge2xvYWRBYm91dH07IiwiaW1wb3J0IENyb3F1ZXRhcyBmcm9tICcuL2ltYWdlcy9jcm9xdWV0YXNfcmVzaXplZC5qcGcnOyAvLyBUaGUgY3JvcXVldHRlIChtb3N0IGltcG9ydGFudCBlbGVtZW50IG9mIHRoaXMgd2ViKVxuLyogVGhpcyBjb2RlIHVuZGVyIGhlcmUgd2lsbCBwcm9iYWJseSBiZSBleHBvcnRlZCBpbnRvIGEgbW9kdWxlICovXG4vKiBXZSdyZSBnb25uYSBidWlsZCB0aGUgaG9tZSBjYW52YXMgbm93ICovXG5mdW5jdGlvbiBsb2FkSG9tZSAoZmF0aGVyQ29udGFpbmVyLCBsb2FkTWVudSkge1xuXG4gICAgLyogMSkgd2UgZGVmaW5lIGV2ZXJ5IGh0bWwgZWxlbWVudCB3ZSdyZSBnb25uYSBwdXQgaW50byB0aGUgY2FudmFzICovXG4gICAgY29uc3QgaG9tZUNhbnZhcyAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaG9tZVRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcFRpdGxlMSAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHBUaXRsZTIgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBzZXBhcmF0aW9uICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICAgIGNvbnN0IHBUZXh0ICAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBteUNyb3F1ZXRhICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBidG5NZW51ICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG4gICAgXG5cbiAgICAvKiAyKSB3ZSBwdXQgdGhlaXIgY2xhc3NlcyAqL1xuICAgIGhvbWVDYW52YXMuY2xhc3NOYW1lID0gJ2lubmVyLWNhbnZhcyBob21lJztcbiAgICBwVGl0bGUxLmNsYXNzTmFtZSAgICA9ICdiaWctdGV4dCc7XG4gICAgcFRpdGxlMi5jbGFzc05hbWUgICAgPSAnc21vbC10ZXh0JztcbiAgICBwVGV4dC5jbGFzc05hbWUgICAgICA9ICdub3JtaWUtdGV4dCc7XG4gICAgbXlDcm9xdWV0YS5jbGFzc05hbWUgPSAnY3JvcXVldGEnO1xuICAgIGJ0bk1lbnUuY2xhc3NOYW1lICAgID0gJ2J1dHRvbi1mb3ItbWVudSc7XG4gICAgXG4gICAgXG5cbiAgICAvKiAzKSB3ZSBwdXQgdGhlaXIgaW5uZXIgdGV4dCAqL1xuICAgIHBUaXRsZTEuaW5uZXJUZXh0ID0gJ1dlbGNvbWUgdG8nOyBcbiAgICBwVGl0bGUyLmlubmVyVGV4dCA9ICd5b3VyIGdyYW5ueVxcJ3Mga2l0Y2hlbic7XG4gICAgcFRleHQuaW5uZXJUZXh0ICAgPSAnRW5qb3kgdGhlIGNvb2tpbmcgb25seSB5b3VyIGdyYW5ueSBjYW4gY29vayc7XG4gICAgbXlDcm9xdWV0YS5zcmMgICAgPSBDcm9xdWV0YXM7IC8vIG5vdCBhIHRleHQgYnV0IGEgc291cmNlIFxuICAgIGJ0bk1lbnUuaW5uZXJUZXh0ID0gJ01FTlUnO1xuICAgIFxuXG4gICAgLyogNCkgd2UgcHV0IHRoZWlyIGZ1bmN0aW9ucyAqL1xuICAgIGJ0bk1lbnUub25jbGljayA9IGxvYWRNZW51O1xuXG4gICAgLyogNSkgQnV0IGl0J3MgdGhlIHBlbHZpYyB0aHJ1c3QgKi9cbiAgICBob21lVGl0bGVEaXYuYXBwZW5kKHBUaXRsZTEscFRpdGxlMixzZXBhcmF0aW9uLHBUZXh0LG15Q3JvcXVldGEsYnRuTWVudSk7XG5cbiAgICAvKiA2KSB0aGF0IHJlYWxseSBkcml2ZXMgeW91IGluc2FuZSAqL1xuICAgIGhvbWVDYW52YXMuYXBwZW5kQ2hpbGQoaG9tZVRpdGxlRGl2KTtcbiAgICBcbiAgICAvKiA3KSBsZXQncyBkbyB0aGUgdGltZSB3YXJwIGFnYWluISEgKi9cbiAgICBmYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUNhbnZhcyk7XG59O1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7bG9hZEhvbWV9OyIsImltcG9ydCBDcm9xdWV0YXMgZnJvbSAnLi9pbWFnZXMvY3JvcXVldGFzX3Jlc2l6ZWQuanBnJzsgLy8gVGhpcyBpbWFnZSB3YXMgdGFrZW4gZnJvbSBpbnRlcm5ldC4uLmJ1dCBJIGRpZCBub3Qgc2F2ZSB3aG8gZGlkIGl0LiBJdCdzIGEgZnJlZSBpbWFnZSB0aG8gOihcbmltcG9ydCBUb3J0aWxsYSAgZnJvbSAnLi9pbWFnZXMvdG9ydGlsbGFfcmVzaXplZC5qcGcnOyAvLyBUaGlzIGltYWdlIHdhcyB0YWtlbiBmcm9tIGludGVybmV0Li4uYnV0IEkgZGlkIG5vdCBzYXZlIHdobyBkaWQgaXQuIEl0J3MgYSBmcmVlIGltYWdlIHRobyA6KFxuaW1wb3J0IENhY2hvcG8gICBmcm9tICcuL2ltYWdlcy9jYWNob3BvX3Jlc2l6ZWQuanBnJzsgLy8gVGhpcyBpbWFnZSB3YXMgdGFrZW4gYnkgbWUgaW4gTGxhbmVzLCBBc3R1cmlhcy5cbmltcG9ydCBDaHVsZXRvbiAgZnJvbSAnLi9pbWFnZXMvY2h1bGV0b25fcmVzaXplZC5qcGcnOyAvLyBUaGlzIGltYWdlIHdhcyB0YWtlbiBieSBtZSBpbiBMZcOzbiwgQ2FzdGlsbGEgeSBMZcOzbi5cbmltcG9ydCBHYW1iYXMgICAgZnJvbSAnLi9pbWFnZXMvZ2FtYmFzX3Jlc2l6ZWQuanBnJzsgLy8gVGhpcyBpbWFnZSB3YXMgdGFrZW4gYnkgbWUgaW4gTGxhbmVzLCBBc3R1cmlhcy5cbmltcG9ydCBQYWVsbGEgICAgZnJvbSAnLi9pbWFnZXMvcGFlbGxhX3Jlc2l6ZWQuanBnJzsgLy8gVGhpcyBpbWFnZSB3YXMgdGFrZW4gYnkgbWUgaW4gbXkgb3duIGtpdGNoZW4sIHl1cCwgSSBjb29rZWQgdGhpcyBsaXR0bGUgYmFieS4gSSdtIGFsc28gVkVSWSBzaW5nbGUuIFNvIGxhZGllcyBhbmQgbWlsbGlvbmFpcmUgZ2VudGxlbWFuLCBoaXQgbWUgdXAgaWYgeW91IHdhbm5hIHRhc3RlIGl0LlxuXG4vKiBUbyBnZW5lcmF0ZSBlYWNoIGNhcmQgY29udGFpbmluZyBvdXIgbWVudSB3ZSdyZSBnb25uYSBkZWZpbmUgZmlyc3QgYW4gYXJyYXkgd2l0aCBhbGwgb3VyIGRpc2hlcyAqL1xuY29uc3QgRGlzaCA9ICh0aXRsZSwgaW1hZ2UsIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgcmV0dXJuIHt0aXRsZSwgaW1hZ2UsIGRlc2NyaXB0aW9ufTtcbn07XG5jb25zdCBkaXNoZXMgPSBbXG4gICAgLyogQ3JvcXVldGFzICovXG4gICAgRGlzaCgnQ3JvcXVldGFzJywgQ3JvcXVldGFzLCAnV2hhdCBuaWVjZSBkb2VzblxcJ3QgbG92ZSBoZXIgZ3Jhbm55IGNyb3F1ZXR0ZXM/JyksXG4gICAgLyogVG9ydGlsbGEgICovXG4gICAgRGlzaCgnVG9ydGlsbGEnLCAgVG9ydGlsbGEsICAnSGVyIHNlY29uZCBiZXN0IGRpc2gsIHRoZSBUb3J0aWxsYS4gV2l0aCBvbmlvbi4gQXMgYWxsIHRoaW5ncyBzaG91bGQgYmUuJyksXG4gICAgLyogR2FtYmFzICAgICovXG4gICAgRGlzaCgnR2FtYmFzJywgICAgR2FtYmFzLCAgICAnT3VyIHl1bW15IGxpdHRsZSBzaHJpbXBzLCB0YXN0eW5lc3MgaXMgbWFnaWMuJyksXG4gICAgLyogUGFlbGxhICAgICovXG4gICAgRGlzaCgnUGFlbGxhJywgICAgUGFlbGxhLCAgICAnWW91XFwncmUgZmF2b3JpdGUgZm9vZC4gWW91XFwncmUgZ3Jhbm55IHNwZWNpYWxpdHkuIFRoZSBvbmx5IGFuZCBvbmUgUGFlbGxhJyksICAgIFxuICAgIC8qIENodWxldG9uICAqL1xuICAgIERpc2goJ0NodWxldG9uJywgIENodWxldG9uLCAgJ0Jlc3QgbWVhdCB5b3UgaGF2ZSBldmVyIHRhc3RlZCcpLFxuICAgIC8qIENhY2hvcG8gICAqL1xuICAgIERpc2goJ0NhY2hvcG8nLCAgIENhY2hvcG8sICAgJ1RoZSBhc3R1cmlhbiBzcGVjaWFsaXR5LCB5b3UgY2FuIGZhdHRlbiAxMCBraWxvcyBqdXN0IGJ5IGxvb2tpbmcgYXQgdGhpcy4nKVxuXTtcblxuLyogVGhpcyBjb2RlIHVuZGVyIGhlcmUgd2lsbCBwcm9iYWJseSBiZSBleHBvcnRlZCBpbnRvIGEgbW9kdWxlICovXG4vKiBXZSdyZSBnb25uYSBidWlsZCB0aGUgaG9tZSBjYW52YXMgbm93ICovXG5mdW5jdGlvbiBsb2FkTWVudSAoZmF0aGVyQ29udGFpbmVyKSB7XG5cbiAgICAvKiAxKSB3ZSBkZWZpbmUgZXZlcnkgaHRtbCBlbGVtZW50IHdlJ3JlIGdvbm5hIHB1dCBpbnRvIHRoZSBjYW52YXMgKi9cbiAgICBjb25zdCBtZW51Q2FudmFzICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwVGl0bGUxICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgLy9jb25zdCBzZXBhcmF0aW9uICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICAgIGNvbnN0IGNhcmRDYW52YXMgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8qIFNpbmNlIHdlIHdhbnQgdG8gZHluYW1pY2FsbHkgZ2VuZXJhdGUgdGhlIGNhcmRzLCB3ZSdsbCBkbyB0aGF0IHN0dWZmIGxhdGVyICovXG4gICAgXG4gICAgLyogMikgd2UgcHV0IHRoZWlyIGNsYXNzZXMgKi9cbiAgICBtZW51Q2FudmFzLmNsYXNzTmFtZSAgICA9ICdpbm5lci1jYW52YXMgbWVudSc7XG4gICAgcFRpdGxlMS5jbGFzc05hbWUgICAgICAgPSAnYmlnLXRleHQnO1xuICAgIGNhcmRDYW52YXMuY2xhc3NOYW1lICAgID0gJ2NhcmQtY2FudmFzJztcblxuICAgIC8qIDMpIHdlIHB1dCB0aGVpciBpbm5lciB0ZXh0ICovXG4gICAgcFRpdGxlMS5pbm5lclRleHQgPSAnQ2hvb3NlIHlvdXIgZGVsaXNoOic7IFxuICAgIFxuICAgIC8qIDQpIEJ1dCBpdCdzIHRoZSBwZWx2aWMgdGhydXN0ICovXG4gICAgLy9tZW51Q2FudmFzLmFwcGVuZChwVGl0bGUxLHNlcGFyYXRpb24sY2FyZENhbnZhcyk7XG4gICAgbWVudUNhbnZhcy5hcHBlbmQocFRpdGxlMSxjYXJkQ2FudmFzKTtcblxuICAgIC8qIDUpIHRoYXQgcmVhbGx5IGRyaXZlcyB5b3UgaW5zYW5lICovXG4gICAgZ2VuZXJhdGVDYXJkTWVudShjYXJkQ2FudmFzKTsgLyogaXQgYXBwZW5kcyBldmVyeSBjYXJkIGZvb2QgdG8gY2FyZENhbnZhcyAqL1xuICAgIFxuICAgIC8qIDYpIGxldCdzIGRvIHRoZSB0aW1lIHdhcnAgYWdhaW4hISAqL1xuICAgIGZhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q2FudmFzKTtcbiAgICBcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVDYXJkTWVudShjYW52YXMpIHtcblxuICAgIGRpc2hlcy5mb3JFYWNoICgoZGlzaCkgPT4ge1xuXG4gICAgICAgIC8qIDEpIFdlIGNyZWF0ZSB0aGUgaHRtbCBlbGVtZW50cyAqL1xuICAgICAgICBjb25zdCBjYXJkICAgICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgY2FyZFRpdGxlICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBjYXJkSW1hZ2UgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29uc3QgY2FyZFR4dCAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dCcpO1xuXG4gICAgICAgIC8qIDIpIHdlIHB1dCBjbGFzc2VzIGZvciBvdXIgY29vbCBjc3MgKi9cbiAgICAgICAgY2FyZC5jbGFzc05hbWUgICAgICA9ICdjYXJkJztcbiAgICAgICAgY2FyZFRpdGxlLmNsYXNzTmFtZSA9ICdzbW9sLXRleHQnO1xuICAgICAgICBjYXJkVHh0LmNsYXNzTmFtZSAgID0gJ25vcm1pZS10ZXh0JztcbiAgICAgICAgY2FyZEltYWdlLmNsYXNzTmFtZSA9ICdjYXJkLWltYWdlJztcblxuICAgICAgICAvKiAzKSB3ZSBwdXQgaXQncyB0ZXh0ICovXG4gICAgICAgIGNhcmRUaXRsZS5pbm5lclRleHQgPSBkaXNoLnRpdGxlO1xuICAgICAgICBjYXJkSW1hZ2Uuc3JjICAgICAgID0gZGlzaC5pbWFnZTtcbiAgICAgICAgY2FyZFR4dC5pbm5lclRleHQgICA9IGRpc2guZGVzY3JpcHRpb247XG4gICAgICAgIFxuICAgICAgICBjYXJkLmFwcGVuZChjYXJkVGl0bGUsY2FyZEltYWdlLGNhcmRUeHQpO1xuICAgICAgICBjYW52YXMuYXBwZW5kQ2hpbGQoY2FyZCk7XG5cbiAgICB9KTtcblxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQge2xvYWRNZW51fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXG4vKiBJbXBvcnQgc2VjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7IC8vIFNDU1Mgc3R5bGVzIGZvciBvdXIgd2ViXG5pbXBvcnQgSG9tZVBhZ2UgIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgTWVudVBhZ2UgIGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgQWJvdXRQYWdlIGZyb20gJy4vYWJvdXQuanMnO1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBXZSByZXRyaWV2ZSB0aGUgY29udGFpbmVyLCB0aGF0IHdpbGwgaG9sZCBhbGwgb3VyIHdlYiAqL1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuXG5cbi8qIEZvciB0aGUgaGVhZGVyLCB3ZSdyZSBnb25uYSBtYWtlIGEgZGl2IHRoYXQgd2lsbCBjb250YWluIHRocmVlIGRpdnMsIGVhY2ggb2YgZW0gd2lsbCBiZSB1c2VkIHRvIG1vdmUgdGhlIHVzZXIgYmV0d2VlbiB0aGUgd2ViICAqL1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5oZWFkZXIuY2xhc3NOYW1lID0gJ2hlYWRlcic7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuLyogVGhlIHRocmVlIGRpdnMgaW5zaWRlIHRoZSBoZWFkZXIgKi9cbmNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhvbWVEaXYuY2xhc3NOYW1lID0gJ2hvbWUtYnV0dG9uJztcbmhvbWVEaXYuaW5uZXJUZXh0ID0gJ0hPTUUnO1xuaG9tZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRIb21lKTtcblxuY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWVudURpdi5jbGFzc05hbWUgPSAnbWVudS1idXR0b24nO1xubWVudURpdi5pbm5lclRleHQgPSAnTUVOVSc7XG5tZW51RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZE1lbnUpO1xuXG5jb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYWJvdXREaXYuY2xhc3NOYW1lID0nYWJvdXQtYnV0dG9uJztcbmFib3V0RGl2LmlubmVyVGV4dCA9ICdBQk9VVCBVUyc7XG5hYm91dERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRBYm91dCk7XG5cbi8qIFdlIGFwcGVuZCB0aGUgdGhyZWUgZGl2LWJ1dHRvbnMgdG8gaGVhZGVyLCBzaW5jZSB3ZSB3YW50IGVtIGluc2lkZSAqL1xuaGVhZGVyLmFwcGVuZENoaWxkKGhvbWVEaXYpO1xuaGVhZGVyLmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuaGVhZGVyLmFwcGVuZENoaWxkKGFib3V0RGl2KTtcblxuLyogbm93LCB3ZSBuZWVkIGEgY2FudmFzIHRvIGRpc3BsYXkgb3VyIHdlYiwgaXQgd2lsbCBiZSBiZWhpbmQgdGhlIGhlYWRlciAqL1xuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblxuLyogdW5kZXIgdGhlIGNhbnZhcyB3ZSB3aWxsIGhhdmUgYSBmb290ZXIsIHdoaWNoIHByb2JhYmx5IHdpbGwgaG9sZCBub3RoaW5nIGJ1dCB3aWxsIGhhdmUgc29tZSB3aWR0aC9oZWlnaHQgYWtpbiB0byB0aGUgaGVhZGVyIGFuZCB3aWxsIGhhdmUgc29tZSBiYWNrZ3JvdW5kIGNvbG9yICovXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmZvb3Rlci5jbGFzc05hbWUgPSdmb290ZXInO1xuZm9vdGVyLmlubmVyVGV4dCA9ICdEZXNpZ25lZCBieSBSaWMgZm9yIFRoZSBPZGluIFByb2plY3QnO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbmxvYWRBYm91dChjYW52YXMpO1xuXG4vLyBJbmRleC5qcyBmdW5jdGlvbnNcbmZ1bmN0aW9uIGNsZWFuQ2FudmFzICgpIHtcblxuICAgIHdoaWxlIChjYW52YXMuZmlyc3RDaGlsZCkge1xuICAgICAgICBjYW52YXMucmVtb3ZlQ2hpbGQoY2FudmFzLmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29uc29sZS5sb2coJzxpbmRleC5qcyBsb2FkSG9tZT4nKTtcbiAgICBjb25zb2xlLmxvZyhjYW52YXMpO1xuICAgIGNsZWFuQ2FudmFzKCk7XG4gICAgY2FudmFzLmNsYXNzTmFtZSA9ICdjYW52YXMtd2ViIGhvbWUnO1xuICAgIEhvbWVQYWdlLmxvYWRIb21lKGNhbnZhcywgbG9hZE1lbnUpO1xufVxuXG5mdW5jdGlvbiBsb2FkTWVudSAoKSB7XG4gICAgY29uc29sZS5sb2coJzxpbmRleC5qcyBsb2FkTWVudT4nKTtcbiAgICBjb25zb2xlLmxvZyhjYW52YXMpO1xuICAgIGNsZWFuQ2FudmFzKCk7XG4gICAgY2FudmFzLmNsYXNzTmFtZSA9ICdjYW52YXMtd2ViIG1lbnUnO1xuICAgIE1lbnVQYWdlLmxvYWRNZW51KGNhbnZhcyk7XG59O1xuXG5mdW5jdGlvbiBsb2FkQWJvdXQgKCkge1xuICAgIGNvbnNvbGUubG9nKCc8aW5kZXguanMgbG9hZEFib3V0PicpO1xuICAgIGNvbnNvbGUubG9nKGNhbnZhcyk7XG4gICAgY2xlYW5DYW52YXMoKTtcbiAgICBjYW52YXMuY2xhc3NOYW1lID0gJ2NhbnZhcy13ZWIgYWJvdXQnO1xuICAgIEFib3V0UGFnZS5sb2FkQWJvdXQoY2FudmFzKTtcbn07XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==