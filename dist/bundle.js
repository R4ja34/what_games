/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _js_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/route */ \"./src/js/route.js\");\n\n\nvar callRoute = function callRoute() {\n  var hash = window.location.hash;\n  var pathParts = hash.substring(1).split('/');\n  var pageName = pathParts[0];\n  var pageArgument = pathParts[1] || '';\n  var pageFunction = _js_route__WEBPACK_IMPORTED_MODULE_1__[\"default\"][pageName];\n  if (pageFunction !== undefined) {\n    pageFunction(pageArgument);\n  }\n};\nwindow.addEventListener('hashchange', function () {\n  return callRoute();\n});\nwindow.addEventListener('DOMContentLoaded', function () {\n  return callRoute();\n});\n\n//# sourceURL=webpack://whatgames/./src/index.js?");

/***/ }),

/***/ "./src/js/Home.js":
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Home: () => (/* binding */ Home)\n/* harmony export */ });\nvar Home = function Home() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  console.log('Home', argument);\n};\n\n//# sourceURL=webpack://whatgames/./src/js/Home.js?");

/***/ }),

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PageDetail: () => (/* binding */ PageDetail)\n/* harmony export */ });\n/* harmony import */ var _apikeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apikeys */ \"./src/js/apikeys.js\");\n\nvar API_KEY = _apikeys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rawg;\nvar PageDetail = function PageDetail(argument) {\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, \"-\");\n    var displayGame = function displayGame(gameData) {\n      var name = gameData.name,\n        released = gameData.released,\n        description = gameData.description,\n        developers = gameData.developers,\n        tags = gameData.tags,\n        genres = gameData.genres,\n        publishers = gameData.publishers,\n        parent_platforms = gameData.parent_platforms,\n        website = gameData.website,\n        rating = gameData.rating,\n        ratings_count = gameData.ratings_count,\n        background_image = gameData.background_image,\n        background_image_additional = gameData.background_image_additional,\n        clip = gameData.clip,\n        stores = gameData.stores;\n      var articleDOM = document.querySelector(\".page-detail .article\");\n      articleDOM.querySelector(\"h1.title\").innerHTML = name;\n      articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n      var developersHTML = developers.map(function (dev) {\n        return \"<a href=\\\"#pagelist/developers/\".concat(dev.slug, \"\\\">\").concat(dev.name, \"</a>\");\n      }).join(', ');\n      articleDOM.querySelector(\"p.description\").innerHTML = description;\n      articleDOM.querySelector(\"p.developers\").innerHTML = \"Studio(s) de d\\xE9veloppement(s) :  \".concat(developersHTML);\n      var tagsHTML = tags.map(function (tag) {\n        return \"<a href=\\\"#pagelist/tags/\".concat(tag.slug, \"\\\">\").concat(tag.name, \"</a>\");\n      }).join(', ');\n      articleDOM.querySelector(\"p.tags\").innerHTML = \"Cat\\xE9gories :  \".concat(tagsHTML);\n      var genresHTML = genres.map(function (genre) {\n        return \"<a href=\\\"#pagelist/genres/\".concat(genre.slug, \"\\\">\").concat(genre.name, \"</a>\");\n      }).join(', ');\n      articleDOM.querySelector(\"p.genres\").innerHTML = \"Genre(s) :  \".concat(genresHTML);\n      var publishersHTML = publishers.map(function (publisher) {\n        return \"<a href=\\\"#pagelist/publishers/\".concat(publisher.slug, \"\\\">\").concat(publisher.name, \"</a>\");\n      }).join(', ');\n      articleDOM.querySelector(\"p.publishers\").innerHTML = \"Editeur(s) : \".concat(publishersHTML);\n      var platformsHTML = parent_platforms.map(function (platform) {\n        return \"<a href=\\\"#pagelist/platforms/\".concat(platform.platform.id, \"\\\">\").concat(platform.platform.name, \"</a>\");\n      }).join(', ');\n      articleDOM.querySelector(\"p.platforms\").innerHTML = \"Disponible sur : \".concat(platformsHTML);\n      articleDOM.querySelector(\"a.website\").href = website;\n      if (clip !== null) {\n        articleDOM.querySelector(\"div.video\").innerHTML = \"<video controls width=\\\"600\\\" height=\\\"300\\\"><source src=\\\"\".concat(clip.clip, \"\\\" type=\\\"video/mp4\\\">Your browser does not support the video tag.</video>\");\n      } else {\n        articleDOM.querySelector(\"div.video\").innerHTML = \"<p>Aucune video disponible</p>\";\n      }\n      articleDOM.querySelector(\"p.rating\").innerHTML = \"Note : \".concat(rating, \" / 5. <br> Nombre de notes: \").concat(ratings_count);\n      articleDOM.querySelector(\"img.img-fluid\").src = background_image_additional ? background_image_additional : background_image;\n      articleDOM.querySelector(\"img.img-fluid\").alt = \"image de \".concat(name);\n      var storesHTML = stores.map(function (store) {\n        return \"<a href=\\\"\".concat(store.url, \"\\\" target=\\\"_blank\\\">\").concat(store.store.name, \"</a>\");\n      }).join(', ');\n      articleDOM.querySelector(\"p.buy-links\").innerHTML = \"Acheter le jeu : \".concat(storesHTML);\n    };\n    var fetchGame = function fetchGame(url, argument) {\n      fetch(\"\".concat(url, \"/\").concat(argument, \"?key=\").concat(API_KEY)).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        displayGame(responseData);\n      });\n    };\n    fetchGame('https://api.rawg.io/api/games', cleanedArgument);\n  };\n  var render = function render() {\n    pageContent.innerHTML = \"\\n    <section class=\\\"page-detail\\\">\\n      <div class=\\\"article\\\">\\n        <h1 class=\\\"title\\\"></h1>\\n        <img class=\\\"img-fluid\\\" src=\\\"\\\" alt=\\\"\\\">\\n        <div class=\\\"article-content\\\">\\n          <p class=\\\"release-date\\\">Date de sortie : <span></span></p>\\n          <p class=\\\"description\\\"></p>\\n          <p class=\\\"developers\\\"></p>\\n          <p class=\\\"tags\\\"></p>\\n          <p class=\\\"genres\\\"></p>\\n          <p class=\\\"publishers\\\"></p>\\n          <p class=\\\"platforms\\\"></p>\\n          <a class=\\\"website\\\" href=\\\"#\\\" target=\\\"_blank\\\">Site Web</a>\\n          <div class=\\\"video\\\"></div>\\n          <p class=\\\"rating\\\"></p>\\n          <div class=\\\"screenshots\\\"></div>\\n          <p class=\\\"buy-links\\\"></p>\\n        </div>\\n      </div>\\n    </section>\\n  \";\n    preparePage();\n  };\n  render();\n};\n\n\n//# sourceURL=webpack://whatgames/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apikeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apikeys */ \"./src/js/apikeys.js\");\n\nvar API_KEY = _apikeys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rawg;\nvar IMAGES_PATH = '/src/assets/images/';\nvar searchGames = document.getElementById('search-form');\nvar searchInput = document.getElementById('search-input');\nvar PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, '-');\n    var displayResults = function displayResults(articles) {\n      var platformImages = {\n        'linux': 'linux.svg',\n        'mac': 'mac.svg',\n        'android': 'mobile.svg',\n        'playstation': 'ps4.svg',\n        'xbox': 'xbox.svg',\n        'nintendo': 'switch.svg',\n        'pc': 'windows.svg',\n        'web': 'web.svg'\n      };\n      var platformSlugs = function platformSlugs(platforms) {\n        return platformImages[platforms] ? \"<img src=\\\"\".concat(IMAGES_PATH).concat(platformImages[platforms], \"\\\" alt=\\\"\").concat(platforms, \"\\\" />\") : platforms;\n      };\n      var resultsContent = articles.map(function (article) {\n        return \"<article class=\\\"cardGame\\\"\\\">\\n            <a href=\\\"#pagedetail/\".concat(article.id, \"\\\">\\n              <img src=\\\"\").concat(article.background_image, \"\\\">\\n              <h3>\").concat(article.name, \"</h3>\\n              <h4>\").concat(article.released, \"</h4>\\n              <div class=\\\"platforms\\\">Plateformes : \").concat(article.parent_platforms.map(function (platform) {\n          return platformSlugs(platform.platform.slug);\n        }).join(\", \"), \"</div>\\n            </a>\\n          </article>\");\n      });\n      var resultsContainer = document.querySelector('.page-list .articles');\n      resultsContainer.innerHTML = resultsContent.join(\"\\n\");\n    };\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = argument ? \"\".concat(url, \"&search=\").concat(argument, \"&ordering=-released\") : \"\".concat(url, \"&dates=2024-01-01,2035-12-31\");\n      fetch(finalURL).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        displayResults(responseData.results);\n      });\n    };\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(API_KEY), cleanedArgument);\n  };\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-list\\\">\\n        <div class=\\\"articles\\\">Loading...</div>\\n      </section>\\n    \";\n    preparePage();\n  };\n  render();\n};\nsearchGames.addEventListener('submit', function (event) {\n  event.preventDefault();\n  var searchTerm = searchInput.value;\n  console.log(searchTerm);\n  if (searchTerm !== '') {\n    PageList(searchTerm);\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageList);\n\n//# sourceURL=webpack://whatgames/./src/js/PageList.js?");

/***/ }),

/***/ "./src/js/apikeys.js":
/*!***************************!*\
  !*** ./src/js/apikeys.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar apiKeys = {\n  rawg: \"b32f467593b944b6879c8dbbab7694e6\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiKeys);\n\n//# sourceURL=webpack://whatgames/./src/js/apikeys.js?");

/***/ }),

/***/ "./src/js/route.js":
/*!*************************!*\
  !*** ./src/js/route.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.js */ \"./src/js/Home.js\");\n/* harmony import */ var _PageList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageList.js */ \"./src/js/PageList.js\");\n/* harmony import */ var _PageDetail_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageDetail.js */ \"./src/js/PageDetail.js\");\n\n\n\nvar routes = {\n  '': _Home_js__WEBPACK_IMPORTED_MODULE_0__.Home,\n  'pagelist': _PageList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  'pagedetail': _PageDetail_js__WEBPACK_IMPORTED_MODULE_2__.PageDetail\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://whatgames/./src/js/route.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://whatgames/./src/styles/index.scss?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;