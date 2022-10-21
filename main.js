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
___CSS_LOADER_EXPORT___.push([module.id, "/* variables */\n/* global css */\nhtml {\n  width: 100vw;\n  height: 100vh;\n  text-align: center;\n  font-family: 'Montserrat', sans-serif; }\n  html body {\n    color: white;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    margin: 0; }\n    html body .header, html body .footer {\n      height: 8vh;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      font-size: 30px;\n      background-color: rgba(0, 0, 0, 0.719);\n      text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black, -0.07em -0.07em black, -0.07em 0.07em black, 0.07em -0.07em black, 0.07em 0.07em black; }\n    html body .header .home-button:hover, html body .header .menu-button:hover, html body .header .contact-button:hover {\n      color: #ffa61f;\n      transform: scale(1.5, 1.5); }\n    html body .header .home-button, html body .header .menu-button, html body .header .contact-button {\n      margin-right: 5vw;\n      margin-left: 5vw; }\n    html body .canvas-web {\n      min-height: 80vh; }\n\n/* CSS for Home */\n.inner-canvas.home {\n  height: 45rem;\n  width: 600px;\n  margin: auto;\n  background-color: rgba(0, 0, 0, 0.719); }\n  .inner-canvas.home .big-text {\n    font-family: \"Herr Von Muellerhoff\", cursive;\n    font-size: 150px;\n    text-align: center;\n    text-transform: capitalize;\n    margin-bottom: 0;\n    margin-top: 2rem;\n    color: #ffa61f; }\n  .inner-canvas.home .smol-text {\n    font-size: 40px;\n    font-weight: bold;\n    margin-top: -50px;\n    margin-bottom: 0px;\n    text-align: center;\n    text-transform: uppercase;\n    color: #ffa61f;\n    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black; }\n  .inner-canvas.home .normie-text {\n    display: block;\n    color: #ffe6ce;\n    font-size: 20px; }\n  .inner-canvas.home hr {\n    width: 280px;\n    border: 2px solid #c59d5f;\n    margin: 24px auto; }\n  .inner-canvas.home .button-for-menu {\n    display: block;\n    margin: auto;\n    border: 2px solid #222;\n    border-radius: 26px;\n    background-color: #ffa61f;\n    border: 2px solid #ffe6ce;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 70px;\n    margin-top: 20px;\n    color: whitesmoke;\n    text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2); }\n  .inner-canvas.home .button-for-menu:hover, .inner-canvas.home .button-for-menu:active {\n    background-color: #ffe6ce;\n    border: 2px solid #ffe6ce; }\n\n/* CSS for Menu */\n.inner-canvas.menu {\n  margin: auto;\n  /* Grid for all the articles projects */\n  /* copied from home, candidates to be globalized: */ }\n  .inner-canvas.menu .card-canvas {\n    margin: auto;\n    display: grid;\n    width: 75%;\n    grid-template-columns: repeat(2, minmax(450px, 1fr));\n    gap: 15px; }\n    .inner-canvas.menu .card-canvas .card {\n      margin: auto;\n      max-height: 35rem;\n      max-width: 41rem;\n      margin: 10px;\n      background-color: rgba(0, 0, 0, 0.719);\n      border: 1px solid black; }\n      .inner-canvas.menu .card-canvas .card .card-image {\n        max-width: 400px;\n        max-height: 400px;\n        display: block;\n        margin: auto;\n        margin-bottom: 10px; }\n  @media only screen and (max-width: 1000px) {\n    .inner-canvas.menu .card-canvas {\n      width: auto; } }\n  .inner-canvas.menu .big-text {\n    font-family: \"Herr Von Muellerhoff\", cursive;\n    font-size: 10rem;\n    text-align: center;\n    text-transform: capitalize;\n    margin-bottom: 3rem;\n    margin-top: 3rem;\n    color: #ffa61f;\n    background-color: rgba(0, 0, 0, 0.719);\n    text-shadow: 0.07em 0 black; }\n  .inner-canvas.menu .smol-text {\n    font-size: 2rem;\n    font-weight: bold;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    text-align: center;\n    text-transform: uppercase;\n    color: #ffa61f;\n    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black; }\n  .inner-canvas.menu .normie-text {\n    margin-bottom: 1rem;\n    display: block;\n    color: #fa992b;\n    font-size: 1.5rem;\n    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black; }\n\n/* CSS for contact */\n/* Media rules for cellphone */\n@media only screen and (max-width: 1000px) {\n  html {\n    width: 100vw;\n    height: auto; }\n    html .card-canvas {\n      width: auto; } }\n", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAAA,cAAA;AAuBA,eAAA;AAEA;EACI,YAAW;EACX,aAAY;EACZ,kBAAiB;EACjB,qCAAqC,EAAA;EAJzC;IAQQ,YA/B4B;IAgC5B,mDAA0C;IAC1C,sBAAqB;IACrB,SAAQ,EAAA;IAXhB;MAeY,WAAW;MACX,aAAY;MACZ,mBAAkB;MAClB,uBAAuB;MACvB,mBAAmB;MACnB,eAzBG;MA0BH,sCA7CkB;MA8ClB,qKAnCuB,EAAA;IAanC;MA6BgB,cAnDoB;MAqDpB,0BAAwB,EAAA;IA/BxC;MAmCgB,iBAAgB;MAChB,gBAAe,EAAA;IApC/B;MA4CY,gBAAe,EAAA;;AAU3B,iBAAA;AACA;EACI,aAAY;EACZ,YAAY;EACZ,YAAW;EACX,sCAnF0B,EAAA;EA+E9B;IAQQ,4CAA4C;IAC5C,gBAAgB;IAChB,kBAAkB;IAClB,0BAA0B;IAC1B,gBAAe;IACf,gBAAe;IACf,cA3F4B,EAAA;EA6EpC;IAmBQ,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,kBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IAEzB,cAvG4B;IAwG5B,6EA3FuB,EAAA;EAgE/B;IAiCQ,cAAa;IACb,cA9GmC;IA+GnC,eAAe,EAAA;EAnCvB;IAuCQ,YAAY;IACZ,yBAAyB;IACzB,iBAAiB,EAAA;EAzCzB;IA6CQ,cAAa;IACb,YAAW;IACX,sBAAsB;IACtB,mBAAmB;IACnB,yBA9H4B;IA+H5B,yBA9HmC;IA+HnC,qCAAoC;IACpC,eAAc;IACd,gBAAe;IACf,iBAAgB;IAChB,2CAAwC,EAAA;EAvDhD;IA4DQ,yBAxImC;IAyInC,yBAzImC,EAAA;;AA6I3C,iBAAA;AACA;EAEI,YAAW;EAGX,uCAAA;EAkCJ,mDAAA,EAAoD;EAvCpD;IAOQ,YAAW;IACX,aAAY;IACZ,UAAS;IACT,oDAAoD;IACpD,SAAQ,EAAA;IAXhB;MAcY,YAAW;MACX,iBAAgB;MAChB,gBAAe;MACf,YAAY;MACZ,sCAnKkB;MAoKlB,uBAAuB,EAAA;MAnBnC;QAsBgB,gBAAe;QACf,iBAAgB;QAChB,cAAa;QACb,YAAW;QACX,mBAAkB,EAAA;EAM9B;IAhCJ;MAkCU,WAAU,EAAA,EAEX;EApCT;IAyCQ,4CAA4C;IAC5C,gBAAgB;IAChB,kBAAkB;IAClB,0BAA0B;IAC1B,mBAAkB;IAClB,gBAAe;IACf,cA9L4B;IA+L5B,sCAjMsB;IAkMtB,2BAlLuB,EAAA;EAiI/B;IAsDQ,eAAe;IACf,iBAAiB;IAEjB,gBAAe;IACf,mBAAkB;IAClB,kBAAkB;IAClB,yBAAyB;IAEzB,cA7M4B;IA8M5B,6EAjMuB,EAAA;EAkI/B;IAqEQ,mBAAkB;IAClB,cAAa;IACb,cAAuB;IACvB,iBAAiB;IACjB,6EA3MuB,EAAA;;AAgN/B,oBAAA;AAmDA,8BAAA;AACA;EACI;IACI,YAAW;IACX,YAAW,EAAA;IAFf;MAKQ,WAAU,EAAA,EACb","sourcesContent":["/* variables */\n$bgcolor: rgba(0, 0, 0, 0.719);\n$textcolor-white: rgb(255, 255, 255);\n$textcolor-orange: rgb(255, 166, 31);\n$textcolor-orange-light: rgb(255, 230, 206);\n$text-shadow8:   0.07em 0 black,\n                0 0.07em black,\n                -0.07em 0 black,\n                0 -0.07em black,\n                -0.07em -0.07em black,\n                -0.07em 0.07em black,\n                0.07em -0.07em black,\n                0.07em 0.07em black;\n$text-shadow4:   0.07em 0 black,\n                0 0.07em black,\n                -0.07em 0 black,\n                0 -0.07em black;\n$text-shadow1:   0.07em 0 black;\n              \n               \n$fontsize: 30px;\n@import url(\"https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff&family=Montserrat:wght@300;400;700&display=swap\");\n\n/* global css */\n\nhtml {\n    width:100vw;\n    height:100vh;\n    text-align:center;\n    font-family: 'Montserrat', sans-serif;\n\n\n    body {\n        color: $textcolor-white;\n        background: url('./images/background.jpg');\n        background-size:cover;\n        margin:0;\n          \n\n        .header, .footer {\n            height: 8vh;\n            display:flex;\n            flex-direction:row;\n            justify-content: center;\n            align-items: center;\n            font-size: $fontsize;\n            background-color: $bgcolor;\n            text-shadow: $text-shadow8;\n            \n        }\n\n        .header {\n            \n            .home-button:hover, .menu-button:hover, .contact-button:hover {\n                color: $textcolor-orange;\n                //color: rgb(178, 210, 224);\n                transform:scale(1.5,1.5);\n\n            }\n            .home-button, .menu-button, .contact-button {\n                margin-right:5vw;\n                margin-left:5vw;\n            }\n    \n\n        }\n\n\n        .canvas-web {\n            min-height:80vh;\n        }\n        // .footer {\n        //     bottom: 0;\n        //     position: fixed;\n        //     width: 100%;\n        //  }\n    }\n}\n\n/* CSS for Home */\n.inner-canvas.home {\n    height:45rem;\n    width: 600px;\n    margin:auto;\n    background-color: $bgcolor;\n\n\n    .big-text {\n        font-family: \"Herr Von Muellerhoff\", cursive;\n        font-size: 150px;\n        text-align: center;\n        text-transform: capitalize;\n        margin-bottom:0;\n        margin-top:2rem;\n        color:$textcolor-orange;\n\n    }\n\n    .smol-text {\n        font-size: 40px;\n        font-weight: bold;\n        margin-top: -50px;\n        margin-bottom:0px;\n        text-align: center;\n        text-transform: uppercase;\n\n        color:$textcolor-orange;\n        text-shadow: $text-shadow4;\n\n        \n    }\n\n    .normie-text {\n        display:block;\n        color:$textcolor-orange-light;\n        font-size: 20px;\n    }\n\n    hr {\n        width: 280px;\n        border: 2px solid #c59d5f;\n        margin: 24px auto;\n    }\n\n    .button-for-menu {\n        display:block;\n        margin:auto;\n        border: 2px solid #222;\n        border-radius: 26px;\n        background-color: $textcolor-orange;\n        border: 2px solid $textcolor-orange-light;\n        font-family:'Montserrat', sans-serif;\n        font-size:70px;\n        margin-top:20px;\n        color:whitesmoke;\n        text-shadow: 6px 6px 0px rgba(0,0,0,0.2)\n \n    }\n\n    .button-for-menu:hover, .button-for-menu:active {\n        background-color: $textcolor-orange-light;\n        border: 2px solid $textcolor-orange-light;\n    }\n}\n\n/* CSS for Menu */\n.inner-canvas.menu {\n\n    margin:auto;\n\n\n    /* Grid for all the articles projects */\n    .card-canvas {\n        margin:auto;\n        display:grid;\n        width:75%; \n        grid-template-columns: repeat(2, minmax(450px, 1fr));\n        gap:15px;\n        \n        .card {\n            margin:auto;\n            max-height:35rem;\n            max-width:41rem;\n            margin: 10px;\n            background-color: $bgcolor; \n            border: 1px solid black;  \n\n            .card-image {\n                max-width:400px;\n                max-height:400px;\n                display:block;\n                margin:auto;\n                margin-bottom:10px;\n            }\n        }\n        \n    }\n\n    @media only screen and (max-width:1000px){\n        .card-canvas {\n          width:auto;\n\n        }\n    }\n    \n/* copied from home, candidates to be globalized: */\n    .big-text {\n        font-family: \"Herr Von Muellerhoff\", cursive;\n        font-size: 10rem; // cambiado\n        text-align: center;\n        text-transform: capitalize;\n        margin-bottom:3rem;\n        margin-top:3rem; // cambiado\n        color:$textcolor-orange;\n        background-color: $bgcolor;\n        text-shadow:$text-shadow1;\n\n    }\n\n    .smol-text {\n        font-size: 2rem; // cambiado \n        font-weight: bold;\n        //margin-top: -50px; cambiado\n        margin-top:1rem;\n        margin-bottom:1rem; // cambiado\n        text-align: center;\n        text-transform: uppercase;\n\n        color:$textcolor-orange;\n        text-shadow: $text-shadow4;\n\n        \n    }\n\n    .normie-text {\n        margin-bottom:1rem;\n        display:block;\n        color:rgb(250, 153, 43);\n        font-size: 1.5rem;\n        text-shadow:$text-shadow4;\n    }\n                  \n\n}\n/* CSS for contact */\n//.inner-canvas.contact {\n//}\n\n\n\n        \n\n\n               \n\n                \n\n\n//                 /* Grid for all the articles projects */\n//                 .card-canvas {\n//                     max-width: 80vw;\n//                     display:grid;\n//                     grid-template-columns: repeat(2, minmax(400px, 1fr));\n//                     gap:15px;\n\n//                 }\n//                 .card-canvas .card {\n//                     max-width: 600px;\n//                     max-height: 600px;\n//                     margin: 10px;\n                    \n//                     background-color: $bgcolor; \n//                     border: 1px solid black;  \n//                 }\n\n\n//                 .card p {\n//                 padding:5px;\n//                 }\n\n//                 .card-image {\n//                     max-width:400px;\n//                     max-height:400px;\n//                 }\n\n\n//             }\n//             .menu {\n//                 /* if we're displaying menu, we're overriding inner-canvas properties */\n//                 background-color: rgba(255, 255, 255, 0);\n//             }\n//     }\n// }\n\n\n/* Media rules for cellphone */\n@media only screen and (max-width:1000px) {\n    html {\n        width:100vw;\n        height:auto;\n\n        .card-canvas {\n            width:auto;\n        }\n    }\n}\n\n"],"sourceRoot":""}]);
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

//HomePage.loadHome(canvas);
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
    _home_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadHome(canvas, loadMenu);
}

function loadMenu () {
    console.log('<index.js loadMenu>');
    console.log(canvas);
    cleanCanvas();
    _menu_js__WEBPACK_IMPORTED_MODULE_2__["default"].loadMenu(canvas);
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLDZDQUE2Qyw4Q0FBOEM7O0FBRTNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBaUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFpQjtBQUNyQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy5zY3NzP2E2MDkiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUhlcnIrVm9uK011ZWxsZXJob2ZmJmZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbi8qIGdsb2JhbCBjc3MgKi9cXG5odG1sIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyB9XFxuICBodG1sIGJvZHkge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIG1hcmdpbjogMDsgfVxcbiAgICBodG1sIGJvZHkgLmhlYWRlciwgaHRtbCBib2R5IC5mb290ZXIge1xcbiAgICAgIGhlaWdodDogOHZoO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzE5KTtcXG4gICAgICB0ZXh0LXNoYWRvdzogMC4wN2VtIDAgYmxhY2ssIDAgMC4wN2VtIGJsYWNrLCAtMC4wN2VtIDAgYmxhY2ssIDAgLTAuMDdlbSBibGFjaywgLTAuMDdlbSAtMC4wN2VtIGJsYWNrLCAtMC4wN2VtIDAuMDdlbSBibGFjaywgMC4wN2VtIC0wLjA3ZW0gYmxhY2ssIDAuMDdlbSAwLjA3ZW0gYmxhY2s7IH1cXG4gICAgaHRtbCBib2R5IC5oZWFkZXIgLmhvbWUtYnV0dG9uOmhvdmVyLCBodG1sIGJvZHkgLmhlYWRlciAubWVudS1idXR0b246aG92ZXIsIGh0bWwgYm9keSAuaGVhZGVyIC5jb250YWN0LWJ1dHRvbjpob3ZlciB7XFxuICAgICAgY29sb3I6ICNmZmE2MWY7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUsIDEuNSk7IH1cXG4gICAgaHRtbCBib2R5IC5oZWFkZXIgLmhvbWUtYnV0dG9uLCBodG1sIGJvZHkgLmhlYWRlciAubWVudS1idXR0b24sIGh0bWwgYm9keSAuaGVhZGVyIC5jb250YWN0LWJ1dHRvbiB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiA1dnc7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDV2dzsgfVxcbiAgICBodG1sIGJvZHkgLmNhbnZhcy13ZWIge1xcbiAgICAgIG1pbi1oZWlnaHQ6IDgwdmg7IH1cXG5cXG4vKiBDU1MgZm9yIEhvbWUgKi9cXG4uaW5uZXItY2FudmFzLmhvbWUge1xcbiAgaGVpZ2h0OiA0NXJlbTtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MTkpOyB9XFxuICAuaW5uZXItY2FudmFzLmhvbWUgLmJpZy10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZXJyIFZvbiBNdWVsbGVyaG9mZlxcXCIsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMTUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIGNvbG9yOiAjZmZhNjFmOyB9XFxuICAuaW5uZXItY2FudmFzLmhvbWUgLnNtb2wtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY29sb3I6ICNmZmE2MWY7XFxuICAgIHRleHQtc2hhZG93OiAwLjA3ZW0gMCBibGFjaywgMCAwLjA3ZW0gYmxhY2ssIC0wLjA3ZW0gMCBibGFjaywgMCAtMC4wN2VtIGJsYWNrOyB9XFxuICAuaW5uZXItY2FudmFzLmhvbWUgLm5vcm1pZS10ZXh0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbG9yOiAjZmZlNmNlO1xcbiAgICBmb250LXNpemU6IDIwcHg7IH1cXG4gIC5pbm5lci1jYW52YXMuaG9tZSBociB7XFxuICAgIHdpZHRoOiAyODBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2M1OWQ1ZjtcXG4gICAgbWFyZ2luOiAyNHB4IGF1dG87IH1cXG4gIC5pbm5lci1jYW52YXMuaG9tZSAuYnV0dG9uLWZvci1tZW51IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzIyMjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTYxZjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZTZjZTtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA3MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgdGV4dC1zaGFkb3c6IDZweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgfVxcbiAgLmlubmVyLWNhbnZhcy5ob21lIC5idXR0b24tZm9yLW1lbnU6aG92ZXIsIC5pbm5lci1jYW52YXMuaG9tZSAuYnV0dG9uLWZvci1tZW51OmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmU2Y2U7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmU2Y2U7IH1cXG5cXG4vKiBDU1MgZm9yIE1lbnUgKi9cXG4uaW5uZXItY2FudmFzLm1lbnUge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgLyogR3JpZCBmb3IgYWxsIHRoZSBhcnRpY2xlcyBwcm9qZWN0cyAqL1xcbiAgLyogY29waWVkIGZyb20gaG9tZSwgY2FuZGlkYXRlcyB0byBiZSBnbG9iYWxpemVkOiAqLyB9XFxuICAuaW5uZXItY2FudmFzLm1lbnUgLmNhcmQtY2FudmFzIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoNDUwcHgsIDFmcikpO1xcbiAgICBnYXA6IDE1cHg7IH1cXG4gICAgLmlubmVyLWNhbnZhcy5tZW51IC5jYXJkLWNhbnZhcyAuY2FyZCB7XFxuICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgIG1heC1oZWlnaHQ6IDM1cmVtO1xcbiAgICAgIG1heC13aWR0aDogNDFyZW07XFxuICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MTkpO1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyB9XFxuICAgICAgLmlubmVyLWNhbnZhcy5tZW51IC5jYXJkLWNhbnZhcyAuY2FyZCAuY2FyZC1pbWFnZSB7XFxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5pbm5lci1jYW52YXMubWVudSAuY2FyZC1jYW52YXMge1xcbiAgICAgIHdpZHRoOiBhdXRvOyB9IH1cXG4gIC5pbm5lci1jYW52YXMubWVudSAuYmlnLXRleHQge1xcbiAgICBmb250LWZhbWlseTogXFxcIkhlcnIgVm9uIE11ZWxsZXJob2ZmXFxcIiwgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAxMHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgY29sb3I6ICNmZmE2MWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MTkpO1xcbiAgICB0ZXh0LXNoYWRvdzogMC4wN2VtIDAgYmxhY2s7IH1cXG4gIC5pbm5lci1jYW52YXMubWVudSAuc21vbC10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogI2ZmYTYxZjtcXG4gICAgdGV4dC1zaGFkb3c6IDAuMDdlbSAwIGJsYWNrLCAwIDAuMDdlbSBibGFjaywgLTAuMDdlbSAwIGJsYWNrLCAwIC0wLjA3ZW0gYmxhY2s7IH1cXG4gIC5pbm5lci1jYW52YXMubWVudSAubm9ybWllLXRleHQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6ICNmYTk5MmI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0ZXh0LXNoYWRvdzogMC4wN2VtIDAgYmxhY2ssIDAgMC4wN2VtIGJsYWNrLCAtMC4wN2VtIDAgYmxhY2ssIDAgLTAuMDdlbSBibGFjazsgfVxcblxcbi8qIENTUyBmb3IgY29udGFjdCAqL1xcbi8qIE1lZGlhIHJ1bGVzIGZvciBjZWxscGhvbmUgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgaHRtbCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiBhdXRvOyB9XFxuICAgIGh0bWwgLmNhcmQtY2FudmFzIHtcXG4gICAgICB3aWR0aDogYXV0bzsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQUE7QUF1QkEsZUFBQTtBQUVBO0VBQ0ksWUFBVztFQUNYLGFBQVk7RUFDWixrQkFBaUI7RUFDakIscUNBQXFDLEVBQUE7RUFKekM7SUFRUSxZQS9CNEI7SUFnQzVCLG1EQUEwQztJQUMxQyxzQkFBcUI7SUFDckIsU0FBUSxFQUFBO0lBWGhCO01BZVksV0FBVztNQUNYLGFBQVk7TUFDWixtQkFBa0I7TUFDbEIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixlQXpCRztNQTBCSCxzQ0E3Q2tCO01BOENsQixxS0FuQ3VCLEVBQUE7SUFhbkM7TUE2QmdCLGNBbkRvQjtNQXFEcEIsMEJBQXdCLEVBQUE7SUEvQnhDO01BbUNnQixpQkFBZ0I7TUFDaEIsZ0JBQWUsRUFBQTtJQXBDL0I7TUE0Q1ksZ0JBQWUsRUFBQTs7QUFVM0IsaUJBQUE7QUFDQTtFQUNJLGFBQVk7RUFDWixZQUFZO0VBQ1osWUFBVztFQUNYLHNDQW5GMEIsRUFBQTtFQStFOUI7SUFRUSw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsZ0JBQWU7SUFDZixnQkFBZTtJQUNmLGNBM0Y0QixFQUFBO0VBNkVwQztJQW1CUSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUV6QixjQXZHNEI7SUF3RzVCLDZFQTNGdUIsRUFBQTtFQWdFL0I7SUFpQ1EsY0FBYTtJQUNiLGNBOUdtQztJQStHbkMsZUFBZSxFQUFBO0VBbkN2QjtJQXVDUSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGlCQUFpQixFQUFBO0VBekN6QjtJQTZDUSxjQUFhO0lBQ2IsWUFBVztJQUNYLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIseUJBOUg0QjtJQStINUIseUJBOUhtQztJQStIbkMscUNBQW9DO0lBQ3BDLGVBQWM7SUFDZCxnQkFBZTtJQUNmLGlCQUFnQjtJQUNoQiwyQ0FBd0MsRUFBQTtFQXZEaEQ7SUE0RFEseUJBeEltQztJQXlJbkMseUJBekltQyxFQUFBOztBQTZJM0MsaUJBQUE7QUFDQTtFQUVJLFlBQVc7RUFHWCx1Q0FBQTtFQWtDSixtREFBQSxFQUFvRDtFQXZDcEQ7SUFPUSxZQUFXO0lBQ1gsYUFBWTtJQUNaLFVBQVM7SUFDVCxvREFBb0Q7SUFDcEQsU0FBUSxFQUFBO0lBWGhCO01BY1ksWUFBVztNQUNYLGlCQUFnQjtNQUNoQixnQkFBZTtNQUNmLFlBQVk7TUFDWixzQ0FuS2tCO01Bb0tsQix1QkFBdUIsRUFBQTtNQW5CbkM7UUFzQmdCLGdCQUFlO1FBQ2YsaUJBQWdCO1FBQ2hCLGNBQWE7UUFDYixZQUFXO1FBQ1gsbUJBQWtCLEVBQUE7RUFNOUI7SUFoQ0o7TUFrQ1UsV0FBVSxFQUFBLEVBRVg7RUFwQ1Q7SUF5Q1EsNENBQTRDO0lBQzVDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLG1CQUFrQjtJQUNsQixnQkFBZTtJQUNmLGNBOUw0QjtJQStMNUIsc0NBak1zQjtJQWtNdEIsMkJBbEx1QixFQUFBO0VBaUkvQjtJQXNEUSxlQUFlO0lBQ2YsaUJBQWlCO0lBRWpCLGdCQUFlO0lBQ2YsbUJBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFFekIsY0E3TTRCO0lBOE01Qiw2RUFqTXVCLEVBQUE7RUFrSS9CO0lBcUVRLG1CQUFrQjtJQUNsQixjQUFhO0lBQ2IsY0FBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLDZFQTNNdUIsRUFBQTs7QUFnTi9CLG9CQUFBO0FBbURBLDhCQUFBO0FBQ0E7RUFDSTtJQUNJLFlBQVc7SUFDWCxZQUFXLEVBQUE7SUFGZjtNQUtRLFdBQVUsRUFBQSxFQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHZhcmlhYmxlcyAqL1xcbiRiZ2NvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzE5KTtcXG4kdGV4dGNvbG9yLXdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuJHRleHRjb2xvci1vcmFuZ2U6IHJnYigyNTUsIDE2NiwgMzEpO1xcbiR0ZXh0Y29sb3Itb3JhbmdlLWxpZ2h0OiByZ2IoMjU1LCAyMzAsIDIwNik7XFxuJHRleHQtc2hhZG93ODogICAwLjA3ZW0gMCBibGFjayxcXG4gICAgICAgICAgICAgICAgMCAwLjA3ZW0gYmxhY2ssXFxuICAgICAgICAgICAgICAgIC0wLjA3ZW0gMCBibGFjayxcXG4gICAgICAgICAgICAgICAgMCAtMC4wN2VtIGJsYWNrLFxcbiAgICAgICAgICAgICAgICAtMC4wN2VtIC0wLjA3ZW0gYmxhY2ssXFxuICAgICAgICAgICAgICAgIC0wLjA3ZW0gMC4wN2VtIGJsYWNrLFxcbiAgICAgICAgICAgICAgICAwLjA3ZW0gLTAuMDdlbSBibGFjayxcXG4gICAgICAgICAgICAgICAgMC4wN2VtIDAuMDdlbSBibGFjaztcXG4kdGV4dC1zaGFkb3c0OiAgIDAuMDdlbSAwIGJsYWNrLFxcbiAgICAgICAgICAgICAgICAwIDAuMDdlbSBibGFjayxcXG4gICAgICAgICAgICAgICAgLTAuMDdlbSAwIGJsYWNrLFxcbiAgICAgICAgICAgICAgICAwIC0wLjA3ZW0gYmxhY2s7XFxuJHRleHQtc2hhZG93MTogICAwLjA3ZW0gMCBibGFjaztcXG4gICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgIFxcbiRmb250c2l6ZTogMzBweDtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1IZXJyK1ZvbitNdWVsbGVyaG9mZiZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbi8qIGdsb2JhbCBjc3MgKi9cXG5cXG5odG1sIHtcXG4gICAgd2lkdGg6MTAwdnc7XFxuICAgIGhlaWdodDoxMDB2aDtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuXFxuXFxuICAgIGJvZHkge1xcbiAgICAgICAgY29sb3I6ICR0ZXh0Y29sb3Itd2hpdGU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vaW1hZ2VzL2JhY2tncm91bmQuanBnJyk7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XFxuICAgICAgICBtYXJnaW46MDtcXG4gICAgICAgICAgXFxuXFxuICAgICAgICAuaGVhZGVyLCAuZm9vdGVyIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDh2aDtcXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udHNpemU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnY29sb3I7XFxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6ICR0ZXh0LXNoYWRvdzg7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuXFxuICAgICAgICAuaGVhZGVyIHtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAuaG9tZS1idXR0b246aG92ZXIsIC5tZW51LWJ1dHRvbjpob3ZlciwgLmNvbnRhY3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICR0ZXh0Y29sb3Itb3JhbmdlO1xcbiAgICAgICAgICAgICAgICAvL2NvbG9yOiByZ2IoMTc4LCAyMTAsIDIyNCk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxLjUsMS41KTtcXG5cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLmhvbWUtYnV0dG9uLCAubWVudS1idXR0b24sIC5jb250YWN0LWJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDo1dnc7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjV2dztcXG4gICAgICAgICAgICB9XFxuICAgIFxcblxcbiAgICAgICAgfVxcblxcblxcbiAgICAgICAgLmNhbnZhcy13ZWIge1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6ODB2aDtcXG4gICAgICAgIH1cXG4gICAgICAgIC8vIC5mb290ZXIge1xcbiAgICAgICAgLy8gICAgIGJvdHRvbTogMDtcXG4gICAgICAgIC8vICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICAvLyAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAvLyAgfVxcbiAgICB9XFxufVxcblxcbi8qIENTUyBmb3IgSG9tZSAqL1xcbi5pbm5lci1jYW52YXMuaG9tZSB7XFxuICAgIGhlaWdodDo0NXJlbTtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBtYXJnaW46YXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnY29sb3I7XFxuXFxuXFxuICAgIC5iaWctdGV4dCB7XFxuICAgICAgICBmb250LWZhbWlseTogXFxcIkhlcnIgVm9uIE11ZWxsZXJob2ZmXFxcIiwgY3Vyc2l2ZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTUwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206MDtcXG4gICAgICAgIG1hcmdpbi10b3A6MnJlbTtcXG4gICAgICAgIGNvbG9yOiR0ZXh0Y29sb3Itb3JhbmdlO1xcblxcbiAgICB9XFxuXFxuICAgIC5zbW9sLXRleHQge1xcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206MHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXG4gICAgICAgIGNvbG9yOiR0ZXh0Y29sb3Itb3JhbmdlO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6ICR0ZXh0LXNoYWRvdzQ7XFxuXFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAubm9ybWllLXRleHQge1xcbiAgICAgICAgZGlzcGxheTpibG9jaztcXG4gICAgICAgIGNvbG9yOiR0ZXh0Y29sb3Itb3JhbmdlLWxpZ2h0O1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIGhyIHtcXG4gICAgICAgIHdpZHRoOiAyODBweDtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjNTlkNWY7XFxuICAgICAgICBtYXJnaW46IDI0cHggYXV0bztcXG4gICAgfVxcblxcbiAgICAuYnV0dG9uLWZvci1tZW51IHtcXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgICAgICBtYXJnaW46YXV0bztcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMjI7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHRjb2xvci1vcmFuZ2U7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkdGV4dGNvbG9yLW9yYW5nZS1saWdodDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgICAgIGZvbnQtc2l6ZTo3MHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xcbiAgICAgICAgY29sb3I6d2hpdGVzbW9rZTtcXG4gICAgICAgIHRleHQtc2hhZG93OiA2cHggNnB4IDBweCByZ2JhKDAsMCwwLDAuMilcXG4gXFxuICAgIH1cXG5cXG4gICAgLmJ1dHRvbi1mb3ItbWVudTpob3ZlciwgLmJ1dHRvbi1mb3ItbWVudTphY3RpdmUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHRjb2xvci1vcmFuZ2UtbGlnaHQ7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkdGV4dGNvbG9yLW9yYW5nZS1saWdodDtcXG4gICAgfVxcbn1cXG5cXG4vKiBDU1MgZm9yIE1lbnUgKi9cXG4uaW5uZXItY2FudmFzLm1lbnUge1xcblxcbiAgICBtYXJnaW46YXV0bztcXG5cXG5cXG4gICAgLyogR3JpZCBmb3IgYWxsIHRoZSBhcnRpY2xlcyBwcm9qZWN0cyAqL1xcbiAgICAuY2FyZC1jYW52YXMge1xcbiAgICAgICAgbWFyZ2luOmF1dG87XFxuICAgICAgICBkaXNwbGF5OmdyaWQ7XFxuICAgICAgICB3aWR0aDo3NSU7IFxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDQ1MHB4LCAxZnIpKTtcXG4gICAgICAgIGdhcDoxNXB4O1xcbiAgICAgICAgXFxuICAgICAgICAuY2FyZCB7XFxuICAgICAgICAgICAgbWFyZ2luOmF1dG87XFxuICAgICAgICAgICAgbWF4LWhlaWdodDozNXJlbTtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6NDFyZW07XFxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ2NvbG9yOyBcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgIFxcblxcbiAgICAgICAgICAgIC5jYXJkLWltYWdlIHtcXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOjQwMHB4O1xcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OjQwMHB4O1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICAgICAgICAgICAgICBtYXJnaW46YXV0bztcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDAwcHgpe1xcbiAgICAgICAgLmNhcmQtY2FudmFzIHtcXG4gICAgICAgICAgd2lkdGg6YXV0bztcXG5cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBcXG4vKiBjb3BpZWQgZnJvbSBob21lLCBjYW5kaWRhdGVzIHRvIGJlIGdsb2JhbGl6ZWQ6ICovXFxuICAgIC5iaWctdGV4dCB7XFxuICAgICAgICBmb250LWZhbWlseTogXFxcIkhlcnIgVm9uIE11ZWxsZXJob2ZmXFxcIiwgY3Vyc2l2ZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTByZW07IC8vIGNhbWJpYWRvXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206M3JlbTtcXG4gICAgICAgIG1hcmdpbi10b3A6M3JlbTsgLy8gY2FtYmlhZG9cXG4gICAgICAgIGNvbG9yOiR0ZXh0Y29sb3Itb3JhbmdlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnY29sb3I7XFxuICAgICAgICB0ZXh0LXNoYWRvdzokdGV4dC1zaGFkb3cxO1xcblxcbiAgICB9XFxuXFxuICAgIC5zbW9sLXRleHQge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtOyAvLyBjYW1iaWFkbyBcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgLy9tYXJnaW4tdG9wOiAtNTBweDsgY2FtYmlhZG9cXG4gICAgICAgIG1hcmdpbi10b3A6MXJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206MXJlbTsgLy8gY2FtYmlhZG9cXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFxuICAgICAgICBjb2xvcjokdGV4dGNvbG9yLW9yYW5nZTtcXG4gICAgICAgIHRleHQtc2hhZG93OiAkdGV4dC1zaGFkb3c0O1xcblxcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLm5vcm1pZS10ZXh0IHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206MXJlbTtcXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgICAgICBjb2xvcjpyZ2IoMjUwLCAxNTMsIDQzKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6JHRleHQtc2hhZG93NDtcXG4gICAgfVxcbiAgICAgICAgICAgICAgICAgIFxcblxcbn1cXG4vKiBDU1MgZm9yIGNvbnRhY3QgKi9cXG4vLy5pbm5lci1jYW52YXMuY29udGFjdCB7XFxuLy99XFxuXFxuXFxuXFxuICAgICAgICBcXG5cXG5cXG4gICAgICAgICAgICAgICBcXG5cXG4gICAgICAgICAgICAgICAgXFxuXFxuXFxuLy8gICAgICAgICAgICAgICAgIC8qIEdyaWQgZm9yIGFsbCB0aGUgYXJ0aWNsZXMgcHJvamVjdHMgKi9cXG4vLyAgICAgICAgICAgICAgICAgLmNhcmQtY2FudmFzIHtcXG4vLyAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogODB2dztcXG4vLyAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcXG4vLyAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCg0MDBweCwgMWZyKSk7XFxuLy8gICAgICAgICAgICAgICAgICAgICBnYXA6MTVweDtcXG5cXG4vLyAgICAgICAgICAgICAgICAgfVxcbi8vICAgICAgICAgICAgICAgICAuY2FyZC1jYW52YXMgLmNhcmQge1xcbi8vICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcXG4vLyAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xcbi8vICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgXFxuLy8gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdjb2xvcjsgXFxuLy8gICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgIFxcbi8vICAgICAgICAgICAgICAgICB9XFxuXFxuXFxuLy8gICAgICAgICAgICAgICAgIC5jYXJkIHAge1xcbi8vICAgICAgICAgICAgICAgICBwYWRkaW5nOjVweDtcXG4vLyAgICAgICAgICAgICAgICAgfVxcblxcbi8vICAgICAgICAgICAgICAgICAuY2FyZC1pbWFnZSB7XFxuLy8gICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6NDAwcHg7XFxuLy8gICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OjQwMHB4O1xcbi8vICAgICAgICAgICAgICAgICB9XFxuXFxuXFxuLy8gICAgICAgICAgICAgfVxcbi8vICAgICAgICAgICAgIC5tZW51IHtcXG4vLyAgICAgICAgICAgICAgICAgLyogaWYgd2UncmUgZGlzcGxheWluZyBtZW51LCB3ZSdyZSBvdmVycmlkaW5nIGlubmVyLWNhbnZhcyBwcm9wZXJ0aWVzICovXFxuLy8gICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuLy8gICAgICAgICAgICAgfVxcbi8vICAgICB9XFxuLy8gfVxcblxcblxcbi8qIE1lZGlhIHJ1bGVzIGZvciBjZWxscGhvbmUgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAwMHB4KSB7XFxuICAgIGh0bWwge1xcbiAgICAgICAgd2lkdGg6MTAwdnc7XFxuICAgICAgICBoZWlnaHQ6YXV0bztcXG5cXG4gICAgICAgIC5jYXJkLWNhbnZhcyB7XFxuICAgICAgICAgICAgd2lkdGg6YXV0bztcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IENyb3F1ZXRhcyBmcm9tICcuL2ltYWdlcy9jcm9xdWV0YXNfcmVzaXplZC5qcGcnOyAvLyBUaGUgY3JvcXVldHRlIChtb3N0IGltcG9ydGFudCBlbGVtZW50IG9mIHRoaXMgd2ViKVxuLyogVGhpcyBjb2RlIHVuZGVyIGhlcmUgd2lsbCBwcm9iYWJseSBiZSBleHBvcnRlZCBpbnRvIGEgbW9kdWxlICovXG4vKiBXZSdyZSBnb25uYSBidWlsZCB0aGUgaG9tZSBjYW52YXMgbm93ICovXG5mdW5jdGlvbiBsb2FkSG9tZSAoZmF0aGVyQ29udGFpbmVyLCBsb2FkTWVudSkge1xuXG4gICAgLyogMSkgd2UgZGVmaW5lIGV2ZXJ5IGh0bWwgZWxlbWVudCB3ZSdyZSBnb25uYSBwdXQgaW50byB0aGUgY2FudmFzICovXG4gICAgY29uc3QgaG9tZUNhbnZhcyAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaG9tZVRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcFRpdGxlMSAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHBUaXRsZTIgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBzZXBhcmF0aW9uICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICAgIGNvbnN0IHBUZXh0ICAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBteUNyb3F1ZXRhICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBidG5NZW51ICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG4gICAgXG5cbiAgICAvKiAyKSB3ZSBwdXQgdGhlaXIgY2xhc3NlcyAqL1xuICAgIGhvbWVDYW52YXMuY2xhc3NOYW1lID0gJ2lubmVyLWNhbnZhcyBob21lJztcbiAgICBwVGl0bGUxLmNsYXNzTmFtZSAgICA9ICdiaWctdGV4dCc7XG4gICAgcFRpdGxlMi5jbGFzc05hbWUgICAgPSAnc21vbC10ZXh0JztcbiAgICBwVGV4dC5jbGFzc05hbWUgICAgICA9ICdub3JtaWUtdGV4dCc7XG4gICAgbXlDcm9xdWV0YS5jbGFzc05hbWUgPSAnY3JvcXVldGEnO1xuICAgIGJ0bk1lbnUuY2xhc3NOYW1lICAgID0gJ2J1dHRvbi1mb3ItbWVudSc7XG4gICAgXG4gICAgXG5cbiAgICAvKiAzKSB3ZSBwdXQgdGhlaXIgaW5uZXIgdGV4dCAqL1xuICAgIHBUaXRsZTEuaW5uZXJUZXh0ID0gJ1dlbGNvbWUgdG8nOyBcbiAgICBwVGl0bGUyLmlubmVyVGV4dCA9ICd5b3VyIGdyYW5ueVxcJ3Mga2l0Y2hlbic7XG4gICAgcFRleHQuaW5uZXJUZXh0ICAgPSAnRW5qb3kgdGhlIGNvb2tpbmcgb25seSB5b3VyIGdyYW5ueSBjYW4gY29vayc7XG4gICAgbXlDcm9xdWV0YS5zcmMgICAgPSBDcm9xdWV0YXM7IC8vIG5vdCBhIHRleHQgYnV0IGEgc291cmNlIFxuICAgIGJ0bk1lbnUuaW5uZXJUZXh0ID0gJ01FTlUnO1xuICAgIFxuXG4gICAgLyogNCkgd2UgcHV0IHRoZWlyIGZ1bmN0aW9ucyAqL1xuICAgIGJ0bk1lbnUub25jbGljayA9IGxvYWRNZW51O1xuXG4gICAgLyogNSkgQnV0IGl0J3MgdGhlIHBlbHZpYyB0aHJ1c3QgKi9cbiAgICBob21lVGl0bGVEaXYuYXBwZW5kKHBUaXRsZTEscFRpdGxlMixzZXBhcmF0aW9uLHBUZXh0LG15Q3JvcXVldGEsYnRuTWVudSk7XG5cbiAgICAvKiA2KSB0aGF0IHJlYWxseSBkcml2ZXMgeW91IGluc2FuZSAqL1xuICAgIGhvbWVDYW52YXMuYXBwZW5kQ2hpbGQoaG9tZVRpdGxlRGl2KTtcbiAgICBcbiAgICAvKiA3KSBsZXQncyBkbyB0aGUgdGltZSB3YXJwIGFnYWluISEgKi9cbiAgICBmYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUNhbnZhcyk7XG59O1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7bG9hZEhvbWV9OyIsImltcG9ydCBDcm9xdWV0YXMgZnJvbSAnLi9pbWFnZXMvY3JvcXVldGFzX3Jlc2l6ZWQuanBnJzsgLy8gVGhpcyBpbWFnZSB3YXMgdGFrZW4gZnJvbSBpbnRlcm5ldC4uLmJ1dCBJIGRpZCBub3Qgc2F2ZSB3aG8gZGlkIGl0LiBJdCdzIGEgZnJlZSBpbWFnZSB0aG8gOihcbmltcG9ydCBUb3J0aWxsYSAgZnJvbSAnLi9pbWFnZXMvdG9ydGlsbGFfcmVzaXplZC5qcGcnOyAvLyBUaGlzIGltYWdlIHdhcyB0YWtlbiBmcm9tIGludGVybmV0Li4uYnV0IEkgZGlkIG5vdCBzYXZlIHdobyBkaWQgaXQuIEl0J3MgYSBmcmVlIGltYWdlIHRobyA6KFxuaW1wb3J0IENhY2hvcG8gICBmcm9tICcuL2ltYWdlcy9jYWNob3BvX3Jlc2l6ZWQuanBnJzsgLy8gVGhpcyBpbWFnZSB3YXMgdGFrZW4gYnkgbWUgaW4gTGxhbmVzLCBBc3R1cmlhcy5cbmltcG9ydCBDaHVsZXRvbiAgZnJvbSAnLi9pbWFnZXMvY2h1bGV0b25fcmVzaXplZC5qcGcnOyAvLyBUaGlzIGltYWdlIHdhcyB0YWtlbiBieSBtZSBpbiBMZcOzbiwgQ2FzdGlsbGEgeSBMZcOzbi5cbmltcG9ydCBHYW1iYXMgICAgZnJvbSAnLi9pbWFnZXMvZ2FtYmFzX3Jlc2l6ZWQuanBnJzsgLy8gVGhpcyBpbWFnZSB3YXMgdGFrZW4gYnkgbWUgaW4gTGxhbmVzLCBBc3R1cmlhcy5cbmltcG9ydCBQYWVsbGEgICAgZnJvbSAnLi9pbWFnZXMvcGFlbGxhX3Jlc2l6ZWQuanBnJzsgLy8gVGhpcyBpbWFnZSB3YXMgdGFrZW4gYnkgbWUgaW4gbXkgb3duIGtpdGNoZW4sIHl1cCwgSSBjb29rZWQgdGhpcyBsaXR0bGUgYmFieS4gSSdtIGFsc28gVkVSWSBzaW5nbGUuIFNvIGxhZGllcyBhbmQgbWlsbGlvbmFpcmUgZ2VudGxlbWFuLCBoaXQgbWUgdXAgaWYgeW91IHdhbm5hIHRhc3RlIGl0LlxuXG4vKiBUbyBnZW5lcmF0ZSBlYWNoIGNhcmQgY29udGFpbmluZyBvdXIgbWVudSB3ZSdyZSBnb25uYSBkZWZpbmUgZmlyc3QgYW4gYXJyYXkgd2l0aCBhbGwgb3VyIGRpc2hlcyAqL1xuY29uc3QgRGlzaCA9ICh0aXRsZSwgaW1hZ2UsIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgcmV0dXJuIHt0aXRsZSwgaW1hZ2UsIGRlc2NyaXB0aW9ufTtcbn07XG5jb25zdCBkaXNoZXMgPSBbXG4gICAgLyogQ3JvcXVldGFzICovXG4gICAgRGlzaCgnQ3JvcXVldGFzJywgQ3JvcXVldGFzLCAnV2hhdCBuaWVjZSBkb2VzblxcJ3QgbG92ZSBoZXIgZ3Jhbm55IGNyb3F1ZXR0ZXM/JyksXG4gICAgLyogVG9ydGlsbGEgICovXG4gICAgRGlzaCgnVG9ydGlsbGEnLCAgVG9ydGlsbGEsICAnSGVyIHNlY29uZCBiZXN0IGRpc2gsIHRoZSBUb3J0aWxsYS4gV2l0aCBvbmlvbi4gQXMgYWxsIHRoaW5ncyBzaG91bGQgYmUuJyksXG4gICAgLyogR2FtYmFzICAgICovXG4gICAgRGlzaCgnR2FtYmFzJywgICAgR2FtYmFzLCAgICAnT3VyIHl1bW15IGxpdHRsZSBzaHJpbXBzLCB0YXN0eW5lc3MgaXMgbWFnaWMuJyksXG4gICAgLyogUGFlbGxhICAgICovXG4gICAgRGlzaCgnUGFlbGxhJywgICAgUGFlbGxhLCAgICAnWW91XFwncmUgZmF2b3JpdGUgZm9vZC4gWW91XFwncmUgZ3Jhbm55IHNwZWNpYWxpdHkuIFRoZSBvbmx5IGFuZCBvbmUgUGFlbGxhJyksICAgIFxuICAgIC8qIENodWxldG9uICAqL1xuICAgIERpc2goJ0NodWxldG9uJywgIENodWxldG9uLCAgJ0Jlc3QgbWVhdCB5b3UgaGF2ZSBldmVyIHRhc3RlZCcpLFxuICAgIC8qIENhY2hvcG8gICAqL1xuICAgIERpc2goJ0NhY2hvcG8nLCAgIENhY2hvcG8sICAgJ1RoZSBhc3R1cmlhbiBzcGVjaWFsaXR5LCB5b3UgY2FuIGZhdHRlbiAxMCBraWxvcyBqdXN0IGJ5IGxvb2tpbmcgYXQgdGhpcy4nKVxuXTtcblxuLyogVGhpcyBjb2RlIHVuZGVyIGhlcmUgd2lsbCBwcm9iYWJseSBiZSBleHBvcnRlZCBpbnRvIGEgbW9kdWxlICovXG4vKiBXZSdyZSBnb25uYSBidWlsZCB0aGUgaG9tZSBjYW52YXMgbm93ICovXG5mdW5jdGlvbiBsb2FkTWVudSAoZmF0aGVyQ29udGFpbmVyKSB7XG5cbiAgICAvKiAxKSB3ZSBkZWZpbmUgZXZlcnkgaHRtbCBlbGVtZW50IHdlJ3JlIGdvbm5hIHB1dCBpbnRvIHRoZSBjYW52YXMgKi9cbiAgICBjb25zdCBtZW51Q2FudmFzICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwVGl0bGUxICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgLy9jb25zdCBzZXBhcmF0aW9uICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICAgIGNvbnN0IGNhcmRDYW52YXMgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8qIFNpbmNlIHdlIHdhbnQgdG8gZHluYW1pY2FsbHkgZ2VuZXJhdGUgdGhlIGNhcmRzLCB3ZSdsbCBkbyB0aGF0IHN0dWZmIGxhdGVyICovXG4gICAgXG4gICAgLyogMikgd2UgcHV0IHRoZWlyIGNsYXNzZXMgKi9cbiAgICBtZW51Q2FudmFzLmNsYXNzTmFtZSAgICA9ICdpbm5lci1jYW52YXMgbWVudSc7XG4gICAgcFRpdGxlMS5jbGFzc05hbWUgICAgICAgPSAnYmlnLXRleHQnO1xuICAgIGNhcmRDYW52YXMuY2xhc3NOYW1lICAgID0gJ2NhcmQtY2FudmFzJztcblxuICAgIC8qIDMpIHdlIHB1dCB0aGVpciBpbm5lciB0ZXh0ICovXG4gICAgcFRpdGxlMS5pbm5lclRleHQgPSAnQ2hvb3NlIHlvdXIgZGVsaXNoOic7IFxuICAgIFxuICAgIC8qIDQpIEJ1dCBpdCdzIHRoZSBwZWx2aWMgdGhydXN0ICovXG4gICAgLy9tZW51Q2FudmFzLmFwcGVuZChwVGl0bGUxLHNlcGFyYXRpb24sY2FyZENhbnZhcyk7XG4gICAgbWVudUNhbnZhcy5hcHBlbmQocFRpdGxlMSxjYXJkQ2FudmFzKTtcblxuICAgIC8qIDUpIHRoYXQgcmVhbGx5IGRyaXZlcyB5b3UgaW5zYW5lICovXG4gICAgZ2VuZXJhdGVDYXJkTWVudShjYXJkQ2FudmFzKTsgLyogaXQgYXBwZW5kcyBldmVyeSBjYXJkIGZvb2QgdG8gY2FyZENhbnZhcyAqL1xuICAgIFxuICAgIC8qIDYpIGxldCdzIGRvIHRoZSB0aW1lIHdhcnAgYWdhaW4hISAqL1xuICAgIGZhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q2FudmFzKTtcbiAgICBcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVDYXJkTWVudShjYW52YXMpIHtcblxuICAgIGRpc2hlcy5mb3JFYWNoICgoZGlzaCkgPT4ge1xuXG4gICAgICAgIC8qIDEpIFdlIGNyZWF0ZSB0aGUgaHRtbCBlbGVtZW50cyAqL1xuICAgICAgICBjb25zdCBjYXJkICAgICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgY2FyZFRpdGxlICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBjYXJkSW1hZ2UgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29uc3QgY2FyZFR4dCAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dCcpO1xuXG4gICAgICAgIC8qIDIpIHdlIHB1dCBjbGFzc2VzIGZvciBvdXIgY29vbCBjc3MgKi9cbiAgICAgICAgY2FyZC5jbGFzc05hbWUgICAgICA9ICdjYXJkJztcbiAgICAgICAgY2FyZFRpdGxlLmNsYXNzTmFtZSA9ICdzbW9sLXRleHQnO1xuICAgICAgICBjYXJkVHh0LmNsYXNzTmFtZSAgID0gJ25vcm1pZS10ZXh0JztcbiAgICAgICAgY2FyZEltYWdlLmNsYXNzTmFtZSA9ICdjYXJkLWltYWdlJztcblxuICAgICAgICAvKiAzKSB3ZSBwdXQgaXQncyB0ZXh0ICovXG4gICAgICAgIGNhcmRUaXRsZS5pbm5lclRleHQgPSBkaXNoLnRpdGxlO1xuICAgICAgICBjYXJkSW1hZ2Uuc3JjICAgICAgID0gZGlzaC5pbWFnZTtcbiAgICAgICAgY2FyZFR4dC5pbm5lclRleHQgICA9IGRpc2guZGVzY3JpcHRpb247XG4gICAgICAgIFxuICAgICAgICBjYXJkLmFwcGVuZChjYXJkVGl0bGUsY2FyZEltYWdlLGNhcmRUeHQpO1xuICAgICAgICBjYW52YXMuYXBwZW5kQ2hpbGQoY2FyZCk7XG5cbiAgICB9KTtcblxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQge2xvYWRNZW51fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXG4vKiBJbXBvcnQgc2VjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7IC8vIFNDU1Mgc3R5bGVzIGZvciBvdXIgd2ViXG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBNZW51UGFnZSBmcm9tICcuL21lbnUuanMnO1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBXZSByZXRyaWV2ZSB0aGUgY29udGFpbmVyLCB0aGF0IHdpbGwgaG9sZCBhbGwgb3VyIHdlYiAqL1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuXG5cbi8qIEZvciB0aGUgaGVhZGVyLCB3ZSdyZSBnb25uYSBtYWtlIGEgZGl2IHRoYXQgd2lsbCBjb250YWluIHRocmVlIGRpdnMsIGVhY2ggb2YgZW0gd2lsbCBiZSB1c2VkIHRvIG1vdmUgdGhlIHVzZXIgYmV0d2VlbiB0aGUgd2ViICAqL1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5oZWFkZXIuY2xhc3NOYW1lID0gJ2hlYWRlcic7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuLyogVGhlIHRocmVlIGRpdnMgaW5zaWRlIHRoZSBoZWFkZXIgKi9cbmNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhvbWVEaXYuY2xhc3NOYW1lID0gJ2hvbWUtYnV0dG9uJztcbmhvbWVEaXYuaW5uZXJUZXh0ID0gJ0hPTUUnO1xuaG9tZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRIb21lKTtcblxuY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWVudURpdi5jbGFzc05hbWUgPSAnbWVudS1idXR0b24nO1xubWVudURpdi5pbm5lclRleHQgPSAnTUVOVSc7XG5tZW51RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZE1lbnUpO1xuXG5jb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWN0RGl2LmNsYXNzTmFtZSA9J2NvbnRhY3QtYnV0dG9uJztcbmNvbnRhY3REaXYuaW5uZXJUZXh0ID0gJ0NPTlRBQ1QnO1xuY29udGFjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgY29uc29sZS5sb2coJ2NvbnRhY3QtYnV0dG9uIGhhcyBiZWVuIHB1c2hlZCcpfSk7XG5cbi8qIFdlIGFwcGVuZCB0aGUgdGhyZWUgZGl2LWJ1dHRvbnMgdG8gaGVhZGVyLCBzaW5jZSB3ZSB3YW50IGVtIGluc2lkZSAqL1xuaGVhZGVyLmFwcGVuZENoaWxkKGhvbWVEaXYpO1xuaGVhZGVyLmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3REaXYpO1xuXG4vKiBub3csIHdlIG5lZWQgYSBjYW52YXMgdG8gZGlzcGxheSBvdXIgd2ViLCBpdCB3aWxsIGJlIGJlaGluZCB0aGUgaGVhZGVyICovXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNhbnZhcy5jbGFzc05hbWUgPSAnY2FudmFzLXdlYic7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblxuLyogdW5kZXIgdGhlIGNhbnZhcyB3ZSB3aWxsIGhhdmUgYSBmb290ZXIsIHdoaWNoIHByb2JhYmx5IHdpbGwgaG9sZCBub3RoaW5nIGJ1dCB3aWxsIGhhdmUgc29tZSB3aWR0aC9oZWlnaHQgYWtpbiB0byB0aGUgaGVhZGVyIGFuZCB3aWxsIGhhdmUgc29tZSBiYWNrZ3JvdW5kIGNvbG9yICovXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmZvb3Rlci5jbGFzc05hbWUgPSdmb290ZXInO1xuZm9vdGVyLmlubmVyVGV4dCA9ICdEZXNpZ25lZCBieSBSaWMgZm9yIFRoZSBPZGluIFByb2plY3QnO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbi8vSG9tZVBhZ2UubG9hZEhvbWUoY2FudmFzKTtcbmxvYWRIb21lKGNhbnZhcyk7XG5cbi8vIEluZGV4LmpzIGZ1bmN0aW9uc1xuZnVuY3Rpb24gY2xlYW5DYW52YXMgKCkge1xuXG4gICAgd2hpbGUgKGNhbnZhcy5maXJzdENoaWxkKSB7XG4gICAgICAgIGNhbnZhcy5yZW1vdmVDaGlsZChjYW52YXMuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zb2xlLmxvZygnPGluZGV4LmpzIGxvYWRIb21lPicpO1xuICAgIGNvbnNvbGUubG9nKGNhbnZhcyk7XG4gICAgY2xlYW5DYW52YXMoKTtcbiAgICBIb21lUGFnZS5sb2FkSG9tZShjYW52YXMsIGxvYWRNZW51KTtcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnUgKCkge1xuICAgIGNvbnNvbGUubG9nKCc8aW5kZXguanMgbG9hZE1lbnU+Jyk7XG4gICAgY29uc29sZS5sb2coY2FudmFzKTtcbiAgICBjbGVhbkNhbnZhcygpO1xuICAgIE1lbnVQYWdlLmxvYWRNZW51KGNhbnZhcyk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9