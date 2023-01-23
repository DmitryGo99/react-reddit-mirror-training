/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n    var list = []; // return the list of modules as css string\n    list.toString = function toString() {\n        return this.map(function (item) {\n            var content = cssWithMappingToString(item, useSourceMap);\n            if (item[2]) {\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n            }\n            return content;\n        }).join('');\n    }; // import a list of modules into the list\n    // eslint-disable-next-line func-names\n    list.i = function (modules, mediaQuery, dedupe) {\n        if (typeof modules === 'string') {\n            // eslint-disable-next-line no-param-reassign\n            modules = [[null, modules, '']];\n        }\n        var alreadyImportedModules = {};\n        if (dedupe) {\n            for (var i = 0; i < this.length; i++) {\n                // eslint-disable-next-line prefer-destructuring\n                var id = this[i][0];\n                if (id != null) {\n                    alreadyImportedModules[id] = true;\n                }\n            }\n        }\n        for (var _i = 0; _i < modules.length; _i++) {\n            var item = [].concat(modules[_i]);\n            if (dedupe && alreadyImportedModules[item[0]]) {\n                // eslint-disable-next-line no-continue\n                continue;\n            }\n            if (mediaQuery) {\n                if (!item[2]) {\n                    item[2] = mediaQuery;\n                }\n                else {\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n                }\n            }\n            list.push(item);\n        }\n    };\n    return list;\n};\nfunction cssWithMappingToString(item, useSourceMap) {\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n    var cssMapping = item[3];\n    if (!cssMapping) {\n        return content;\n    }\n    if (useSourceMap && typeof btoa === 'function') {\n        var sourceMapping = toComment(cssMapping);\n        var sourceURLs = cssMapping.sources.map(function (source) {\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n        });\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n    }\n    return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n    // eslint-disable-next-line no-undef\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    return \"/*# \".concat(data, \" */\");\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.indexTemplate = void 0;\nvar indexTemplate = function (content, token) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <script defer src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n  <script defer>\\n   window.__token__ = '\".concat(token, \"'\\n  </script>\\n  <title>Reddit</title>\\n</head>\\n\\n<body>\\n  <div id=\\\"react_root\\\">\").concat(content, \"</div>\\n  <div  id=\\\"modal_root\\\"></div>\\n  <div  id=\\\"dropdown_root\\\"></div>\\n</body>\\n\\n</html>\\n\"); };\nexports.indexTemplate = indexTemplate;\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar APP_tsx_1 = __webpack_require__(/*! ../shared/APP.tsx */ \"./src/shared/APP.tsx\");\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar PORT = process.env.PORT || 3000;\nvar app = (0, express_1.default)();\napp.use('/static', express_1.default.static('./dist/client'));\napp.get('/auth', function (req, res) {\n    axios_1.default.post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\".concat(req.query.code, \"&redirect_uri=http://localhost:3000/auth\"), {\n        auth: { username: 'gsPrKrOtfMuSQTh4N26WjQ', password: 'StLIloRG0QPN12ld1CbNJ5VD1ystTQ' },\n        headers: { 'Content-type': 'application/x-www-form-urlencoded' }\n    })\n        .then(function (_a) {\n        var data = _a.data;\n        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, APP_tsx_1.App)()), data['access_token']));\n    })\n        .catch(console.log);\n});\napp.get('*', function (req, res) {\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, APP_tsx_1.App)())));\n});\napp.listen(PORT, function () {\n    console.log(\"server started on port http://localhost:\".concat(PORT));\n});\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/APP.tsx":
/*!****************************!*\
  !*** ./src/shared/APP.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar Layout_1 = __webpack_require__(/*! ./Layout */ \"./src/shared/Layout/index.ts\");\nvar Header_1 = __webpack_require__(/*! ./Header */ \"./src/shared/Header/index.ts\");\n__webpack_require__(/*! ./main.global.css */ \"./src/shared/main.global.css\");\nvar Content_1 = __webpack_require__(/*! ./Content */ \"./src/shared/Content/index.ts\");\nvar CardsList_1 = __webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/index.ts\");\nvar userContext_1 = __webpack_require__(/*! ./context/userContext */ \"./src/shared/context/userContext.tsx\");\nvar getRandomString_1 = __webpack_require__(/*! ./utils/getRandomString */ \"./src/shared/utils/getRandomString.ts\");\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\nvar store_1 = __webpack_require__(/*! ./store/store */ \"./src/shared/store/store.ts\");\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\nvar action_1 = __webpack_require__(/*! ./store/my/action */ \"./src/shared/store/my/action.ts\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar NotFoundPage_1 = __webpack_require__(/*! ./UI/NotFoundPage */ \"./src/shared/UI/NotFoundPage/index.ts\");\nvar store = (0, redux_1.legacy_createStore)(store_1.rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));\nfunction AppComponent() {\n    var _a = (0, react_1.useState)(false), mounted = _a[0], setMounted = _a[1];\n    (0, react_1.useEffect)(function () {\n        setMounted(true);\n    }, []);\n    (0, react_1.useEffect)(function () {\n        store.dispatch((0, action_1.saveToken)());\n    }, []);\n    //\n    return (React.createElement(react_redux_1.Provider, { store: store },\n        React.createElement(userContext_1.UserContextProvider, null, mounted &&\n            React.createElement(react_router_dom_1.BrowserRouter, null,\n                React.createElement(react_router_dom_1.Route, { exact: true, strict: true, path: '/' },\n                    React.createElement(react_router_dom_1.Redirect, { to: '/posts' })),\n                React.createElement(react_router_dom_1.Route, { path: '/auth' },\n                    React.createElement(react_router_dom_1.Redirect, { to: '/posts' })),\n                React.createElement(react_router_dom_1.Switch, null,\n                    React.createElement(react_router_dom_1.Route, { path: \"/posts\" },\n                        React.createElement(Layout_1.Layout, null,\n                            React.createElement(Header_1.Header, null),\n                            React.createElement(Content_1.Content, null,\n                                React.createElement(CardsList_1.CardsList, { key: (0, getRandomString_1.generateRandomString)() })))),\n                    React.createElement(react_router_dom_1.Route, { path: \"*\" },\n                        React.createElement(NotFoundPage_1.NotFoundPage, null)))))));\n}\nexports.App = (0, root_1.hot)(function () { return React.createElement(AppComponent, null); });\n\n\n//# sourceURL=webpack:///./src/shared/APP.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/BlockDropdown/BlockDropdown.tsx":
/*!*******************************************************************!*\
  !*** ./src/shared/CardsList/Card/BlockDropdown/BlockDropdown.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.BlockDropdown = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar blockdropdown_css_1 = __importDefault(__webpack_require__(/*! ./blockdropdown.css */ \"./src/shared/CardsList/Card/BlockDropdown/blockdropdown.css\"));\nvar Icon_1 = __webpack_require__(/*! ../../../Icon/Icon */ \"./src/shared/Icon/Icon.tsx\");\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\nfunction BlockDropdown(props) {\n    var node = document.querySelector('#dropdown_root');\n    if (!node)\n        return null;\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: blockdropdown_css_1.default.block, style: { top: props.positionTop, left: props.positionRight } },\n        react_1.default.createElement(\"ul\", { className: blockdropdown_css_1.default.list },\n            react_1.default.createElement(\"li\", { className: blockdropdown_css_1.default.item + ' ' + blockdropdown_css_1.default.comment },\n                react_1.default.createElement(\"a\", { href: '#', className: blockdropdown_css_1.default.link + ' ' + blockdropdown_css_1.default.comment },\n                    react_1.default.createElement(\"div\", { className: blockdropdown_css_1.default.icoItem },\n                        react_1.default.createElement(Icon_1.Icon, { size: 15, name: 'CommentIcon' })),\n                    \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439\")),\n            react_1.default.createElement(\"li\", { className: blockdropdown_css_1.default.item + ' ' + blockdropdown_css_1.default.share },\n                react_1.default.createElement(\"a\", { href: '#', className: blockdropdown_css_1.default.link + ' ' + blockdropdown_css_1.default.share },\n                    react_1.default.createElement(\"div\", { className: blockdropdown_css_1.default.icoItem },\n                        react_1.default.createElement(Icon_1.Icon, { size: 15, name: 'ShareIcon' })),\n                    \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")),\n            react_1.default.createElement(\"li\", { className: blockdropdown_css_1.default.item + ' ' + blockdropdown_css_1.default.hide },\n                react_1.default.createElement(\"a\", { href: '#', className: blockdropdown_css_1.default.link + ' ' + blockdropdown_css_1.default.hide },\n                    react_1.default.createElement(\"div\", { className: blockdropdown_css_1.default.icoItem },\n                        react_1.default.createElement(Icon_1.Icon, { size: 15, name: 'HideIcon' })),\n                    \"\\u0421\\u043A\\u0440\\u044B\\u0442\\u044C\")),\n            react_1.default.createElement(\"li\", { className: blockdropdown_css_1.default.item + ' ' + blockdropdown_css_1.default.save },\n                react_1.default.createElement(\"a\", { href: '#', className: blockdropdown_css_1.default.link + ' ' + blockdropdown_css_1.default.save },\n                    react_1.default.createElement(\"div\", { className: blockdropdown_css_1.default.icoItem },\n                        react_1.default.createElement(Icon_1.Icon, { size: 15, name: 'SaveIcon' })),\n                    \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C\")),\n            react_1.default.createElement(\"li\", { className: blockdropdown_css_1.default.item + ' ' + blockdropdown_css_1.default.report },\n                react_1.default.createElement(\"a\", { href: '#', className: blockdropdown_css_1.default.link + ' ' + blockdropdown_css_1.default.report },\n                    react_1.default.createElement(\"div\", { className: blockdropdown_css_1.default.icoItem },\n                        react_1.default.createElement(Icon_1.Icon, { size: 15, name: 'ReportIcon' })),\n                    \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))),\n        react_1.default.createElement(\"button\", { className: blockdropdown_css_1.default.btn }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\"))), node);\n}\nexports.BlockDropdown = BlockDropdown;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/BlockDropdown/BlockDropdown.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/BlockDropdown/blockdropdown.css":
/*!*******************************************************************!*\
  !*** ./src/shared/CardsList/Card/BlockDropdown/blockdropdown.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"block\": \"blockdropdown__block--2uory\",\n\t\"link\": \"blockdropdown__link--2QDnW\",\n\t\"list\": \"blockdropdown__list--FXQ9-\",\n\t\"item\": \"blockdropdown__item--pgpNT\",\n\t\"btn\": \"blockdropdown__btn--2Hima\",\n\t\"comment\": \"blockdropdown__comment--lzsna\",\n\t\"share\": \"blockdropdown__share--3ix1v\",\n\t\"save\": \"blockdropdown__save--37zS2\",\n\t\"icoItem\": \"blockdropdown__icoItem--23roH\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/BlockDropdown/blockdropdown.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/BlockDropdown/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/CardsList/Card/BlockDropdown/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./BlockDropdown */ \"./src/shared/CardsList/Card/BlockDropdown/BlockDropdown.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/BlockDropdown/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/BottomBlock/BottomBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/BottomBlock/BottomBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.BottomBlock = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar bottomblock_css_1 = __importDefault(__webpack_require__(/*! ./bottomblock.css */ \"./src/shared/CardsList/Card/BottomBlock/bottomblock.css\"));\nvar cardContext_1 = __webpack_require__(/*! ../../../context/cardContext */ \"./src/shared/context/cardContext.ts\");\nvar CountUps_1 = __webpack_require__(/*! ../../../UI/CountUps */ \"./src/shared/UI/CountUps/index.ts\");\nfunction BottomBlock() {\n    var objArrFromContext = (0, react_1.useContext)(cardContext_1.cardContext);\n    var countUPS = objArrFromContext.ups;\n    var _a = react_1.default.useState(countUPS), count = _a[0], setCount = _a[1];\n    return (react_1.default.createElement(\"div\", { className: bottomblock_css_1.default.bottomBlock },\n        react_1.default.createElement(\"div\", { className: bottomblock_css_1.default.leftPart },\n            react_1.default.createElement(CountUps_1.CountUps, { countUps: countUPS })),\n        react_1.default.createElement(\"div\", { className: bottomblock_css_1.default.midPart },\n            react_1.default.createElement(\"button\", { className: bottomblock_css_1.default.btnMidPart },\n                react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                    react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" }))),\n            react_1.default.createElement(\"span\", { className: bottomblock_css_1.default.spanMidBot }, \"27\")),\n        react_1.default.createElement(\"div\", { className: bottomblock_css_1.default.rightPart },\n            react_1.default.createElement(\"button\", { className: bottomblock_css_1.default.btnRightPart },\n                react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                    react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\n                    react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" }))),\n            react_1.default.createElement(\"button\", { className: bottomblock_css_1.default.btnRightPart },\n                react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                    react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\n                    react_1.default.createElement(\"path\", { d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\", fill: \"white\" }))))));\n}\nexports.BottomBlock = BottomBlock;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/BottomBlock/BottomBlock.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/BottomBlock/bottomblock.css":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/BottomBlock/bottomblock.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"bottomBlock\": \"bottomblock__bottomBlock--10E47\",\n\t\"spanBot\": \"bottomblock__spanBot--wnrH8\",\n\t\"btnLeftPart\": \"bottomblock__btnLeftPart--3KBzb\",\n\t\"btnRightPart\": \"bottomblock__btnRightPart--3EpuX\",\n\t\"btnMidPart\": \"bottomblock__btnMidPart--1G3R8\",\n\t\"spanMidBot\": \"bottomblock__spanMidBot--5_s9b\",\n\t\"midPart\": \"bottomblock__midPart--2iPoL\",\n\t\"rightPart\": \"bottomblock__rightPart--3Qs0H\",\n\t\"leftPart\": \"bottomblock__leftPart--mkJgu\",\n\t\"icoDown\": \"bottomblock__icoDown--1FQoO\",\n\t\"icoUp\": \"bottomblock__icoUp--2ppj_\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/BottomBlock/bottomblock.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/BottomBlock/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/CardsList/Card/BottomBlock/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./BottomBlock */ \"./src/shared/CardsList/Card/BottomBlock/BottomBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/BottomBlock/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Card = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\nvar TopBlock_1 = __webpack_require__(/*! ./TopBlock */ \"./src/shared/CardsList/Card/TopBlock/index.ts\");\nvar MidBlock_1 = __webpack_require__(/*! ./MidBlock */ \"./src/shared/CardsList/Card/MidBlock/index.ts\");\nvar BottomBlock_1 = __webpack_require__(/*! ./BottomBlock */ \"./src/shared/CardsList/Card/BottomBlock/index.ts\");\nvar Dropdown_1 = __webpack_require__(/*! ../../UI/Dropdown */ \"./src/shared/UI/Dropdown/index.ts\");\nvar cardContext_1 = __webpack_require__(/*! ../../context/cardContext */ \"./src/shared/context/cardContext.ts\");\nfunction Card(props) {\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card },\n        react_1.default.createElement(cardContext_1.cardContext.Provider, { value: props.dataCard },\n            react_1.default.createElement(TopBlock_1.TopBlock, null),\n            react_1.default.createElement(MidBlock_1.MidBlock, null),\n            react_1.default.createElement(BottomBlock_1.BottomBlock, null),\n            react_1.default.createElement(Dropdown_1.Dropdown, null))));\n}\nexports.Card = Card;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/MidBlock/MidBlock.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/MidBlock/MidBlock.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MidBlock = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar midblock_css_1 = __importDefault(__webpack_require__(/*! ./midblock.css */ \"./src/shared/CardsList/Card/MidBlock/midblock.css\"));\nvar cardContext_1 = __webpack_require__(/*! ../../../context/cardContext */ \"./src/shared/context/cardContext.ts\");\nfunction MidBlock(_a) {\n    var _b;\n    var previewImg = _a.previewImg, title = _a.title;\n    var objArrFromContext = (0, react_1.useContext)(cardContext_1.cardContext);\n    var preview = objArrFromContext.url_overridden_by_dest;\n    var titleCard = objArrFromContext.title;\n    return (react_1.default.createElement(\"div\", { className: midblock_css_1.default.parentImg },\n        react_1.default.createElement(\"img\", { style: { width: '100%', height: '100%', margin: '0' }, src: ((_b = preview === null || preview === void 0 ? void 0 : preview.toString()) === null || _b === void 0 ? void 0 : _b.endsWith('.jpg')) ? preview : 'https://cdn.dribbble.com/userupload/4147917/file/original-7cbd55f48d35b851a71a2d6abeb44e1a.jpg?compress=1&resize=752x', alt: titleCard })));\n}\nexports.MidBlock = MidBlock;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/MidBlock/MidBlock.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/MidBlock/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/CardsList/Card/MidBlock/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./MidBlock */ \"./src/shared/CardsList/Card/MidBlock/MidBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/MidBlock/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/MidBlock/midblock.css":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/MidBlock/midblock.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"parentImg\": \"midblock__parentImg--3ncIn\",\n\t\"imgBlock\": \"midblock__imgBlock--3kB_V\",\n\t\"imgBlock2\": \"midblock__imgBlock2--2Breb\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/MidBlock/midblock.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TopBlock/InfoBlock/AvatarAutor/AvatarAutor.tsx":
/*!**********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TopBlock/InfoBlock/AvatarAutor/AvatarAutor.tsx ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AvatarAutor = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar avatarautor_css_1 = __importDefault(__webpack_require__(/*! ./avatarautor.css */ \"./src/shared/CardsList/Card/TopBlock/InfoBlock/AvatarAutor/avatarautor.css\"));\nvar cardContext_1 = __webpack_require__(/*! ../../../../../context/cardContext */ \"./src/shared/context/cardContext.ts\");\nfunction AvatarAutor() {\n    var objArrFromContext = (0, react_1.useContext)(cardContext_1.cardContext);\n    var imgUrl = objArrFromContext.sr_detail.icon_img;\n    if (imgUrl === '') {\n        return (react_1.default.createElement(\"div\", { className: avatarautor_css_1.default.imgBack }));\n    }\n    return (react_1.default.createElement(\"div\", { className: avatarautor_css_1.default.imgBackNoImg },\n        react_1.default.createElement(\"img\", { style: { width: 20, height: 20 }, alt: 'img', src: imgUrl })));\n}\nexports.AvatarAutor = AvatarAutor;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TopBlock/InfoBlock/AvatarAutor/AvatarAutor.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TopBlock/InfoBlock/AvatarAutor/avatarautor.css":
/*!**********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TopBlock/InfoBlock/AvatarAutor/avatarautor.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"imgBack\": \"avatarautor__imgBack--QAC9e\",\n\t\"imgBackNoImg\": \"avatarautor__imgBackNoImg--3xgEe\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TopBlock/InfoBlock/AvatarAutor/avatarautor.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TopBlock/InfoBlock/AvatarAutor/index.ts":
/*!***************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TopBlock/InfoBlock/AvatarAutor/index.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./AvatarAutor */ \"./src/shared/CardsList/Card/TopBlock/InfoBlock/AvatarAutor/AvatarAutor.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TopBlock/InfoBlock/AvatarAutor/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TopBlock/InfoBlock/DatePublic/DatePublic.tsx":
/*!********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TopBlock/InfoBlock/DatePublic/DatePublic.tsx ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.DatePublic = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar datepublic_css_1 = __importDefault(__webpack_require__(/*! ./datepublic.css */ \"./src/shared/CardsList/Card/TopBlock/InfoBlock/DatePublic/datepublic.css\"));\nvar cardContext_1 = __webpack_require__(/*! ../../../../../context/cardContext */ \"./src/shared/context/cardContext.ts\");\nvar useGetDateCreate_1 = __webpack_require__(/*! ../../../../../hooks/useGetDateCreate */ \"./src/shared/hooks/useGetDateCreate.ts\");\nfunction DatePublic() {\n    var objArrFromContext = (0, react_1.useContext)(cardContext_1.cardContext);\n    var dateCreate = (0, useGetDateCreate_1.useGetDateCreate)(objArrFromContext.created);\n    return (react_1.default.createElement(\"div\", { className: datepublic_css_1.default.parentDate },\n        react_1.default.createElement(\"span\", { className: datepublic_css_1.default.datePublicNoneMobile }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E\\u00A0\"),\n        react_1.default.createElement(\"span\", { className: datepublic_css_1.default.datePublic },\n            dateCreate,\n            \" \\u043D\\u0430\\u0437\\u0430\\u0434\")));\n}\nexports.DatePublic = DatePublic;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TopBlock/InfoBlock/DatePublic/DatePublic.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TopBlock/InfoBlock/DatePublic/datepublic.css":
/*!********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TopBlock/InfoBlock/DatePublic/datepublic.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"datePublic\": \"datepublic__datePublic--bCp_E\",\n\t\"datePublicNoneMobile\": \"datepublic__datePublicNoneMobile--3WvNM\",\n\t\"parentDate\": \"datepublic__parentDate--2TiXA\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TopBlock/InfoBlock/DatePublic/datepublic.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TopBlock/InfoBlock/DatePublic/index.ts":
/*!**************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TopBlock/InfoBlock/DatePublic/index.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./DatePublic */ \"./src/shared/CardsList/Card/TopBlock/InfoBlock/DatePublic/DatePublic.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TopBlock/InfoBlock/DatePublic/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TopBlock/InfoBlock/DropdownBtn/DropdownBtn.tsx":
/*!**********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TopBlock/InfoBlock/DropdownBtn/DropdownBtn.tsx ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.DropdownBtn = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar dropdownbtn_css_1 = __importDefault(__webpack_require__(/*! ./dropdownbtn.css */ \"./src/shared/CardsList/Card/TopBlock/InfoBlock/DropdownBtn/dropdownbtn.css\"));\nvar icons_1 = __webpack_require__(/*! ../../../../../icons */ \"./src/shared/icons/index.ts\");\nfunction DropdownBtn(props) {\n    return (react_1.default.createElement(\"button\", { style: {\n            backgroundColor: props.iaAt ? 'rgba(51, 51, 51, 0.1)' : '',\n        }, className: dropdownbtn_css_1.default.btn },\n        react_1.default.createElement(\"div\", { className: dropdownbtn_css_1.default.svg },\n            react_1.default.createElement(icons_1.MenuIcons, null))));\n}\nexports.DropdownBtn = DropdownBtn;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TopBlock/InfoBlock/DropdownBtn/DropdownBtn.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TopBlock/InfoBlock/DropdownBtn/dropdownbtn.css":
/*!**********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TopBlock/InfoBlock/DropdownBtn/dropdownbtn.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"btn\": \"dropdownbtn__btn--1s77J\",\n\t\"back\": \"dropdownbtn__back--3jGcI\",\n\t\"svg\": \"dropdownbtn__svg--1ZK_T\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TopBlock/InfoBlock/DropdownBtn/dropdownbtn.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TopBlock/InfoBlock/DropdownBtn/index.ts":
/*!***************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TopBlock/InfoBlock/DropdownBtn/index.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./DropdownBtn */ \"./src/shared/CardsList/Card/TopBlock/InfoBlock/DropdownBtn/DropdownBtn.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TopBlock/InfoBlock/DropdownBtn/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TopBlock/InfoBlock/InfoBlock.tsx":
/*!********************************************************************!*\
  !*** ./src/shared/CardsList/Card/TopBlock/InfoBlock/InfoBlock.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.InfoBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar infoblock_css_1 = __importDefault(__webpack_require__(/*! ./infoblock.css */ \"./src/shared/CardsList/Card/TopBlock/InfoBlock/infoblock.css\"));\nvar AvatarAutor_1 = __webpack_require__(/*! ./AvatarAutor */ \"./src/shared/CardsList/Card/TopBlock/InfoBlock/AvatarAutor/index.ts\");\nvar NameAuthor_1 = __webpack_require__(/*! ./NameAuthor */ \"./src/shared/CardsList/Card/TopBlock/InfoBlock/NameAuthor/index.ts\");\nvar DatePublic_1 = __webpack_require__(/*! ./DatePublic */ \"./src/shared/CardsList/Card/TopBlock/InfoBlock/DatePublic/index.ts\");\nfunction InfoBlock() {\n    return (react_1.default.createElement(\"div\", { className: infoblock_css_1.default.infoBlock },\n        react_1.default.createElement(AvatarAutor_1.AvatarAutor, null),\n        react_1.default.createElement(NameAuthor_1.NameAuthor, null),\n        react_1.default.createElement(DatePublic_1.DatePublic, null)));\n}\nexports.InfoBlock = InfoBlock;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TopBlock/InfoBlock/InfoBlock.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TopBlock/InfoBlock/NameAuthor/NameAuthor.tsx":
/*!********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TopBlock/InfoBlock/NameAuthor/NameAuthor.tsx ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.NameAuthor = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar nameauthor_css_1 = __importDefault(__webpack_require__(/*! ./nameauthor.css */ \"./src/shared/CardsList/Card/TopBlock/InfoBlock/NameAuthor/nameauthor.css\"));\nvar cardContext_1 = __webpack_require__(/*! ../../../../../context/cardContext */ \"./src/shared/context/cardContext.ts\");\nfunction NameAuthor() {\n    var objArrFromContext = (0, react_1.useContext)(cardContext_1.cardContext);\n    var nameAuthor = objArrFromContext.author;\n    var linkAuthor = objArrFromContext.subreddit_name_prefixed;\n    return (react_1.default.createElement(\"a\", { className: nameauthor_css_1.default.nameAuthor, href: \"https://www.reddit.com/\".concat(linkAuthor), target: '_blank' }, nameAuthor));\n}\nexports.NameAuthor = NameAuthor;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TopBlock/InfoBlock/NameAuthor/NameAuthor.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TopBlock/InfoBlock/NameAuthor/index.ts":
/*!**************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TopBlock/InfoBlock/NameAuthor/index.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./NameAuthor */ \"./src/shared/CardsList/Card/TopBlock/InfoBlock/NameAuthor/NameAuthor.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TopBlock/InfoBlock/NameAuthor/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TopBlock/InfoBlock/NameAuthor/nameauthor.css":
/*!********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TopBlock/InfoBlock/NameAuthor/nameauthor.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"nameAuthor\": \"nameauthor__nameAuthor--gY_og\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TopBlock/InfoBlock/NameAuthor/nameauthor.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TopBlock/InfoBlock/index.ts":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TopBlock/InfoBlock/index.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./InfoBlock */ \"./src/shared/CardsList/Card/TopBlock/InfoBlock/InfoBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TopBlock/InfoBlock/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TopBlock/InfoBlock/infoblock.css":
/*!********************************************************************!*\
  !*** ./src/shared/CardsList/Card/TopBlock/InfoBlock/infoblock.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"infoBlock\": \"infoblock__infoBlock--2vyfd\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TopBlock/InfoBlock/infoblock.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TopBlock/TitleBlock/TitleBlock.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/CardsList/Card/TopBlock/TitleBlock/TitleBlock.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TitleBlock = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar titleblock_css_1 = __importDefault(__webpack_require__(/*! ./titleblock.css */ \"./src/shared/CardsList/Card/TopBlock/TitleBlock/titleblock.css\"));\nvar cardContext_1 = __webpack_require__(/*! ../../../../context/cardContext */ \"./src/shared/context/cardContext.ts\");\nvar Post_1 = __webpack_require__(/*! ../../../../Post */ \"./src/shared/Post/index.ts\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nfunction TitleBlock() {\n    var _a, _b;\n    var objArrFromContext = (0, react_1.useContext)(cardContext_1.cardContext);\n    var titleCard = objArrFromContext.title;\n    var _c = (0, react_1.useState)(false), isModalOpened = _c[0], setIsModalOpened = _c[1];\n    var ref = (0, react_1.useRef)(null);\n    var positionTitleTop = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().top;\n    var positionTitleLeft = (_b = ref.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect().left;\n    var path = \"/posts/id:\".concat(objArrFromContext.id);\n    var position = {\n        top: positionTitleTop + window.scrollY,\n        left: positionTitleLeft + window.scrollX,\n    };\n    (0, react_1.useEffect)(function () {\n        if (window.location.pathname === path) {\n            setIsModalOpened(true);\n        }\n    }, [window.location.pathname]);\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(react_router_dom_1.Link, { onClick: function () {\n                // setIsModalOpened(true)\n            }, to: {\n                pathname: path\n            } },\n            react_1.default.createElement(\"h2\", { ref: ref, className: titleblock_css_1.default.title }, titleCard)),\n        react_1.default.createElement(react_router_dom_1.Route, { strict: true, exact: true, path: path }, \n        // isModalOpened && (\n        react_1.default.createElement(Post_1.Post, { path: path, position: position, key: objArrFromContext.id, title: titleCard, onClose: setIsModalOpened })\n        // )\n        )));\n}\nexports.TitleBlock = TitleBlock;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TopBlock/TitleBlock/TitleBlock.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TopBlock/TitleBlock/index.ts":
/*!****************************************************************!*\
  !*** ./src/shared/CardsList/Card/TopBlock/TitleBlock/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./TitleBlock */ \"./src/shared/CardsList/Card/TopBlock/TitleBlock/TitleBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TopBlock/TitleBlock/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TopBlock/TitleBlock/titleblock.css":
/*!**********************************************************************!*\
  !*** ./src/shared/CardsList/Card/TopBlock/TitleBlock/titleblock.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"titleblock__title--38YeI\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TopBlock/TitleBlock/titleblock.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TopBlock/TopBlock.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/TopBlock/TopBlock.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TopBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar topblock_css_1 = __importDefault(__webpack_require__(/*! ./topblock.css */ \"./src/shared/CardsList/Card/TopBlock/topblock.css\"));\nvar InfoBlock_1 = __webpack_require__(/*! ./InfoBlock */ \"./src/shared/CardsList/Card/TopBlock/InfoBlock/index.ts\");\nvar TitleBlock_1 = __webpack_require__(/*! ./TitleBlock */ \"./src/shared/CardsList/Card/TopBlock/TitleBlock/index.ts\");\nfunction TopBlock() {\n    return (react_1.default.createElement(\"div\", { className: topblock_css_1.default.topBlock },\n        react_1.default.createElement(\"div\", { className: topblock_css_1.default.infoBlock },\n            react_1.default.createElement(InfoBlock_1.InfoBlock, null)),\n        react_1.default.createElement(\"div\", { className: topblock_css_1.default.titleBlock },\n            react_1.default.createElement(TitleBlock_1.TitleBlock, null))));\n}\nexports.TopBlock = TopBlock;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TopBlock/TopBlock.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TopBlock/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/CardsList/Card/TopBlock/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./TopBlock */ \"./src/shared/CardsList/Card/TopBlock/TopBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TopBlock/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TopBlock/topblock.css":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/TopBlock/topblock.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"infoBlock\": \"topblock__infoBlock--1gST7\",\n\t\"topBlock\": \"topblock__topBlock--36z9K\",\n\t\"titleBlock\": \"topblock__titleBlock--2ppOW\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TopBlock/topblock.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/card.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--7bN6-\",\n\t\"textContent\": \"card__textContent--3Ki_7\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/index.ts":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/Card.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CardsList = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar action_1 = __webpack_require__(/*! ../store/my/action */ \"./src/shared/store/my/action.ts\");\nvar BtnScrollUp_1 = __webpack_require__(/*! ../UI/BtnScrollUp */ \"./src/shared/UI/BtnScrollUp/index.ts\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar PrescriptionToAuth_1 = __webpack_require__(/*! ../UI/PrescriptionToAuth */ \"./src/shared/UI/PrescriptionToAuth/index.ts\");\nfunction CardsList() {\n    var _a, _b;\n    var dispatch = (0, react_redux_1.useDispatch)();\n    var _c = (0, react_1.useState)([]), postRedux = _c[0], setPostRedux = _c[1];\n    var _d = (0, react_1.useState)(''), afterRedux = _d[0], setAfterRedux = _d[1];\n    var arrPostsRedux = (_a = (0, react_redux_1.useSelector)(function (state) { return state.post; }).postData) === null || _a === void 0 ? void 0 : _a.arrPosts;\n    var afterNextRedux = (_b = (0, react_redux_1.useSelector)(function (state) { return state.post; }).postData) === null || _b === void 0 ? void 0 : _b.after;\n    var _e = (0, react_1.useState)(0), countLoad = _e[0], setCountLoad = _e[1];\n    var _f = (0, react_1.useState)(false), loadButton = _f[0], setLoadButton = _f[1];\n    var _g = (0, react_1.useState)(false), loader = _g[0], setLoader = _g[1];\n    var _h = (0, react_1.useState)(false), prescription = _h[0], setPrescription = _h[1];\n    var _j = (0, react_1.useState)(false), loaderNewList = _j[0], setLoaderNewList = _j[1];\n    var _k = (0, react_1.useState)(false), scrollUpBtn = _k[0], setScrollUpBtn = _k[1];\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\n    var bottomOfList = (0, react_1.useRef)(null);\n    var scrollUp = function () {\n        window.scrollTo({\n            top: 0,\n            left: 0,\n            behavior: 'smooth'\n        });\n    };\n    (0, react_1.useEffect)(function () {\n        window.addEventListener(\"scroll\", function () {\n            var scrollY = window.scrollY;\n            scrollY > 600 ? setScrollUpBtn(true) : setScrollUpBtn(false);\n        });\n    }, []);\n    (0, react_1.useEffect)(function () {\n        if (arrPostsRedux)\n            setPostRedux(function (prevPostsRedux) { return prevPostsRedux.concat.apply(prevPostsRedux, arrPostsRedux); });\n        setLoaderNewList(false);\n    }, [arrPostsRedux]);\n    (0, react_1.useEffect)(function () {\n        if (afterNextRedux)\n            setAfterRedux(afterNextRedux);\n    }, [afterNextRedux]);\n    (0, react_1.useEffect)(function () {\n        if (postRedux.length > 0 || token === '' || token === 'undefined' || token === undefined) {\n            setLoader(false);\n        }\n        else {\n            setLoader(true);\n        }\n    }, [postRedux, token]);\n    (0, react_1.useEffect)(function () {\n        if (token === '' || token === 'undefined' || token === undefined) {\n            setPrescription(false);\n        }\n        else {\n            setPrescription(true);\n        }\n    }, [token,]);\n    (0, react_1.useEffect)(function () {\n        var observer = new IntersectionObserver(function (entries) {\n            if (token === '' || token === 'undefined')\n                return;\n            if (countLoad === 3) {\n                setLoadButton(true);\n                setCountLoad(0);\n                return;\n            }\n            if (entries[0].isIntersecting) {\n                dispatch((0, action_1.postDataAsync)(afterRedux));\n                setCountLoad(countLoad + 1);\n                setLoadButton(false);\n                if (countLoad !== 0)\n                    setLoaderNewList(true);\n            }\n        }, {\n            rootMargin: '10px'\n        });\n        if (bottomOfList.current) {\n            observer.observe(bottomOfList.current);\n        }\n        return function () {\n            if (bottomOfList.current) {\n                observer.unobserve(bottomOfList.current);\n            }\n        };\n    }, [bottomOfList.current, afterRedux, loadButton]);\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList },\n            postRedux.map(function (value) {\n                return react_1.default.createElement(Card_1.Card, { key: value.data.id, dataCard: value.data });\n            }),\n            react_1.default.createElement(\"div\", { ref: bottomOfList }),\n            loadButton &&\n                react_1.default.createElement(\"button\", { className: cardslist_css_1.default.btnLoad, onClick: function () {\n                        setLoadButton(false);\n                        setLoaderNewList(true);\n                    } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u0435\\u0449\\u0435\"),\n            react_1.default.createElement(\"div\", { ref: bottomOfList }),\n            loader && react_1.default.createElement(\"div\", { className: cardslist_css_1.default.loading }, \"Loading\\u2026\"),\n            loaderNewList &&\n                react_1.default.createElement(\"div\", { className: cardslist_css_1.default.loader, style: { position: 'relative', left: '50%', padding: '10px' } }),\n            scrollUpBtn &&\n                react_1.default.createElement(\"div\", { onClick: scrollUp, style: { position: \"fixed\", right: '50px', bottom: '100px' } },\n                    react_1.default.createElement(BtnScrollUp_1.BtnScrollUp, null))),\n        react_1.default.createElement(react_router_dom_1.Route, { path: \"/\" }, prescription ? react_1.default.createElement(react_router_dom_1.Redirect, { to: \"/posts\" }) : react_1.default.createElement(PrescriptionToAuth_1.PrescriptionToAuth, null))));\n}\nexports.CardsList = CardsList;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/cardslist.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardslist__cardsList--1DoiZ\",\n\t\"loading\": \"cardslist__loading--2da3n\",\n\t\"authorization\": \"cardslist__authorization--3gvU2\",\n\t\"animate_grow\": \"cardslist__animate_grow--30igI\",\n\t\"error\": \"cardslist__error--1dxel\",\n\t\"btnLoad\": \"cardslist__btnLoad--1h-S8\",\n\t\"spinner\": \"cardslist__spinner--1BwYx\",\n\t\"loader\": \"cardslist__loader--1VDR4\",\n\t\"rotate\": \"cardslist__rotate--20XPn\",\n\t\"ball1\": \"cardslist__ball1--1aWYc\",\n\t\"ball2\": \"cardslist__ball2--3YF5j\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Content = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\nfunction Content(_a) {\n    var children = _a.children;\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(\"main\", { className: content_css_1.default.content }, children)));\n}\nexports.Content = Content;\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--2O9-S\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Header = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\nfunction Header() {\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\n}\nexports.Header = Header;\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SearchBlock = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\nvar userContext_1 = __webpack_require__(/*! ../../context/userContext */ \"./src/shared/context/userContext.tsx\");\nfunction SearchBlock() {\n    var _a = (0, react_1.useContext)(userContext_1.userContext), iconImg = _a.iconImg, name = _a.name, loader = _a.loader;\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: iconImg, username: name, loader: loader })));\n}\nexports.SearchBlock = SearchBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\"));\nvar Icon_1 = __webpack_require__(/*! ../../../Icon/Icon */ \"./src/shared/Icon/Icon.tsx\");\nfunction UserBlock(_a) {\n    var avatarSrc = _a.avatarSrc, username = _a.username, loader = _a.loader;\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=gsPrKrOtfMuSQTh4N26WjQ&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\", className: userblock_css_1.default.userBox },\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: 'user avatar', className: userblock_css_1.default.avatarImage }) :\n            react_1.default.createElement(Icon_1.Icon, { name: \"AnonIcon\" })),\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.userBox }, loader ? 'загрузка...'\n            : username ? react_1.default.createElement(\"span\", { className: userblock_css_1.default.nameUser + ' ' + userblock_css_1.default.nameActive }, username)\n                : react_1.default.createElement(\"span\", { className: userblock_css_1.default.nameUser + ' ' + userblock_css_1.default.nameAnon }, \"\\u0410\\u043D\\u043E\\u043D\\u0438\\u043C\"))));\n}\nexports.UserBlock = UserBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.css":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userblock__userBox--24rEF\",\n\t\"avatarBox\": \"userblock__avatarBox--2OTfi\",\n\t\"nameActive\": \"userblock__nameActive--3i59x\",\n\t\"nameAnon\": \"userblock__nameAnon--3kC3B\",\n\t\"avatarImage\": \"userblock__avatarImage--2ryXC\",\n\t\"username\": \"userblock__username--3bLc0\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchblock__searchBlock--3aDPv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SortBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\"));\nfunction SortBlock() {\n    return (react_1.default.createElement(\"div\", { className: sortblock_css_1.default.sortBlock }, \" sorting dropdown \"));\n}\nexports.SortBlock = SortBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"sortblock__sortBlock--141aZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ThreadTitle = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/Header/ThreadTitle/threadtitle.css\"));\nfunction ThreadTitle() {\n    return (react_1.default.createElement(\"h1\", { className: threadtitle_css_1.default.threadTitle }, \"Header\"));\n}\nexports.ThreadTitle = ThreadTitle;\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"threadtitle__threadTitle--oxugx\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--bAgyG\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Icon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar icons_1 = __webpack_require__(/*! ../icons */ \"./src/shared/icons/index.ts\");\nvar icons_2 = __webpack_require__(/*! ../icons */ \"./src/shared/icons/index.ts\");\nvar icons_3 = __webpack_require__(/*! ../icons */ \"./src/shared/icons/index.ts\");\nvar icons_4 = __webpack_require__(/*! ../icons */ \"./src/shared/icons/index.ts\");\nvar icons_5 = __webpack_require__(/*! ../icons */ \"./src/shared/icons/index.ts\");\nvar icons_6 = __webpack_require__(/*! ../icons */ \"./src/shared/icons/index.ts\");\nfunction Icon(_a) {\n    var name = _a.name, size = _a.size;\n    if (name === 'CommentIcon') {\n        return (react_1.default.createElement(icons_1.CommentIcon, { props: size }));\n    }\n    else if (name === 'HideIcon') {\n        return (react_1.default.createElement(icons_2.HideIcon, { props: size }));\n    }\n    else if (name === 'MenuIcons') {\n        return (react_1.default.createElement(icons_3.MenuIcons, { props: size }));\n    }\n    else if (name === 'ReportIcon') {\n        return (react_1.default.createElement(icons_4.ReportIcon, { props: size }));\n    }\n    else if (name === 'SaveIcon') {\n        return (react_1.default.createElement(icons_5.SaveIcon, { props: size }));\n    }\n    else if (name === 'ShareIcon') {\n        return (react_1.default.createElement(icons_6.ShareIcon, { props: size }));\n    }\n    else if (name === 'AnonIcon') {\n        return (react_1.default.createElement(icons_1.AnonIcon, { props: size }));\n    }\n    return (react_1.default.createElement(\"div\", null));\n}\nexports.Icon = Icon;\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Layout = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\nfunction Layout(_a) {\n    var children = _a.children;\n    return (react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children));\n}\nexports.Layout = Layout;\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/Post/CommentPost/CommentPost.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/Post/CommentPost/CommentPost.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentPost = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar commentpost_css_1 = __importDefault(__webpack_require__(/*! ./commentpost.css */ \"./src/shared/Post/CommentPost/commentpost.css\"));\nvar formik_1 = __webpack_require__(/*! formik */ \"formik\");\nfunction CommentPost(props) {\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(formik_1.Formik, { initialValues: { email: props.value }, onSubmit: function (values, _a) {\n                var setSubmitting = _a.setSubmitting;\n                setTimeout(function () {\n                    alert(JSON.stringify(values, null, 2));\n                    setSubmitting(false);\n                }, 400);\n            } }, function (_a) {\n            var \n            //@ts-ignore\n            values = _a.values, \n            //@ts-ignore\n            errors = _a.errors, \n            //@ts-ignore\n            touched = _a.touched, \n            //@ts-ignore\n            handleChange = _a.handleChange, \n            //@ts-ignore\n            handleBlur = _a.handleBlur, \n            //@ts-ignore\n            handleSubmit = _a.handleSubmit, \n            //@ts-ignore\n            isSubmitting = _a.isSubmitting;\n            return (react_1.default.createElement(\"form\", { className: commentpost_css_1.default.form, onSubmit: props.handleSubmit },\n                react_1.default.createElement(\"textarea\", { className: commentpost_css_1.default.input, name: \"inputText\", onChange: props.changeValue, value: props.value }),\n                react_1.default.createElement(\"button\", { className: commentpost_css_1.default.button, type: \"submit\" }, \"Submit\")));\n        })));\n}\nexports.CommentPost = CommentPost;\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentPost/CommentPost.tsx?");

/***/ }),

/***/ "./src/shared/Post/CommentPost/commentpost.css":
/*!*****************************************************!*\
  !*** ./src/shared/Post/CommentPost/commentpost.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"commentpost__form--2z_mK\",\n\t\"input\": \"commentpost__input--2Hm3i\",\n\t\"button\": \"commentpost__button--1thun\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentPost/commentpost.css?");

/***/ }),

/***/ "./src/shared/Post/CommentPost/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Post/CommentPost/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CommentPost */ \"./src/shared/Post/CommentPost/CommentPost.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentPost/index.ts?");

/***/ }),

/***/ "./src/shared/Post/CommentPostContainer/CommentPostContainer.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/Post/CommentPostContainer/CommentPostContainer.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentPostContainer = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar store_1 = __webpack_require__(/*! ../../store/store */ \"./src/shared/store/store.ts\");\nvar CommentPost_1 = __webpack_require__(/*! ../CommentPost */ \"./src/shared/Post/CommentPost/index.ts\");\nfunction CommentPostContainer() {\n    var value = (0, react_redux_1.useSelector)(function (state) { return state.commentText; });\n    var dispatch = (0, react_redux_1.useDispatch)();\n    function changeValue(event) {\n        dispatch((0, store_1.updateComment)(event.target.value));\n    }\n    function handleSubmit(event) {\n        event.preventDefault();\n        console.log(value);\n        alert(value);\n    }\n    return (react_1.default.createElement(CommentPost_1.CommentPost, { changeValue: changeValue, value: value, handleSubmit: handleSubmit }));\n}\nexports.CommentPostContainer = CommentPostContainer;\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentPostContainer/CommentPostContainer.tsx?");

/***/ }),

/***/ "./src/shared/Post/CommentPostContainer/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/Post/CommentPostContainer/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CommentPostContainer */ \"./src/shared/Post/CommentPostContainer/CommentPostContainer.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentPostContainer/index.ts?");

/***/ }),

/***/ "./src/shared/Post/CommentsGet/CommentsGet.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/Post/CommentsGet/CommentsGet.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentsGet = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar CommentsList_1 = __webpack_require__(/*! ./CommentsList */ \"./src/shared/Post/CommentsGet/CommentsList/index.ts\");\nfunction CommentsGet(props) {\n    if (Array.isArray(props.comment)) {\n        return (react_1.default.createElement(\"ul\", null, props.comment.map(function (value) {\n            return react_1.default.createElement(CommentsList_1.CommentsList, { key: value.data.id, data: value.data });\n        })));\n    }\n    else {\n        return (react_1.default.createElement(\"p\", null, \"\\u0437\\u0430\\u0433\\u0440\\u0443\\u0436\\u0430\\u0435\\u043C\"));\n    }\n}\nexports.CommentsGet = CommentsGet;\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentsGet/CommentsGet.tsx?");

/***/ }),

/***/ "./src/shared/Post/CommentsGet/CommentsList/CommentsList.tsx":
/*!*******************************************************************!*\
  !*** ./src/shared/Post/CommentsGet/CommentsList/CommentsList.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentsList = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar commentslist_css_1 = __importDefault(__webpack_require__(/*! ./commentslist.css */ \"./src/shared/Post/CommentsGet/CommentsList/commentslist.css\"));\nvar getRandomString_1 = __webpack_require__(/*! ../../../utils/getRandomString */ \"./src/shared/utils/getRandomString.ts\");\nvar useGetDateCreate_1 = __webpack_require__(/*! ../../../hooks/useGetDateCreate */ \"./src/shared/hooks/useGetDateCreate.ts\");\nvar CountUps_1 = __webpack_require__(/*! ../../../UI/CountUps */ \"./src/shared/UI/CountUps/index.ts\");\nvar Icon_1 = __webpack_require__(/*! ../../../Icon/Icon */ \"./src/shared/Icon/Icon.tsx\");\nvar ResponseForm_1 = __webpack_require__(/*! ../../ResponseForm */ \"./src/shared/Post/ResponseForm/index.ts\");\nfunction CommentsList(props) {\n    var dateCreateComment = (0, useGetDateCreate_1.useGetDateCreate)(props.data.created);\n    var countUps = props.data.ups;\n    var _a = (0, react_1.useState)(false), isResponseFormOpened = _a[0], setIsResponseFormOpened = _a[1];\n    if (props.data.body) {\n        if (props.data.replies) {\n            if (Array.isArray(props.data.replies.data.children)) {\n                var newCommentArr = props.data.replies.data.children;\n                return (react_1.default.createElement(\"li\", { className: commentslist_css_1.default.itemComment },\n                    react_1.default.createElement(\"div\", { className: commentslist_css_1.default.count },\n                        react_1.default.createElement(CountUps_1.CountUps, { countUps: countUps })),\n                    react_1.default.createElement(\"div\", { className: commentslist_css_1.default.infoBlock },\n                        react_1.default.createElement(\"img\", { className: commentslist_css_1.default.img, alt: 'img icon ', src: 'https://nakleikashop.ru/images/detailed/32/Angry-010.png' }),\n                        react_1.default.createElement(\"span\", { className: commentslist_css_1.default.nameAuthor }, props.data.author),\n                        react_1.default.createElement(\"span\", { className: commentslist_css_1.default.dateCreate },\n                            dateCreateComment,\n                            \" \\u043D\\u0430\\u0437\\u0430\\u0434\")),\n                    react_1.default.createElement(\"p\", { className: commentslist_css_1.default.textBody }, props.data.body),\n                    react_1.default.createElement(\"div\", { className: commentslist_css_1.default.btnBlock },\n                        react_1.default.createElement(\"button\", { onClick: function () {\n                                setIsResponseFormOpened(true);\n                            }, className: commentslist_css_1.default.buttonComment },\n                            react_1.default.createElement(\"div\", { className: commentslist_css_1.default.iconBtn },\n                                react_1.default.createElement(Icon_1.Icon, { name: \"CommentIcon\", size: 15 })),\n                            \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\"),\n                        react_1.default.createElement(\"button\", { className: commentslist_css_1.default.buttonComment },\n                            react_1.default.createElement(\"div\", { className: commentslist_css_1.default.iconBtn },\n                                react_1.default.createElement(Icon_1.Icon, { name: \"ShareIcon\", size: 15 })),\n                            \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\"),\n                        react_1.default.createElement(\"button\", { className: commentslist_css_1.default.buttonComment },\n                            react_1.default.createElement(\"div\", { className: commentslist_css_1.default.iconBtn },\n                                react_1.default.createElement(Icon_1.Icon, { name: 'ReportIcon', size: 15 })),\n                            \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\")),\n                    isResponseFormOpened && (react_1.default.createElement(ResponseForm_1.ResponseForm, { authorComment: props.data.author, onClose: setIsResponseFormOpened })),\n                    react_1.default.createElement(\"ul\", null, newCommentArr.map(function (value) {\n                        return react_1.default.createElement(CommentsList, { data: value.data, key: (0, getRandomString_1.generateRandomString)() });\n                    }))));\n            }\n        }\n        else {\n            return (react_1.default.createElement(\"li\", { className: commentslist_css_1.default.itemComment },\n                react_1.default.createElement(\"div\", { className: commentslist_css_1.default.count },\n                    react_1.default.createElement(CountUps_1.CountUps, { countUps: countUps })),\n                react_1.default.createElement(\"div\", { className: commentslist_css_1.default.infoBlock },\n                    react_1.default.createElement(\"img\", { className: commentslist_css_1.default.img, alt: 'img icon ', src: 'https://nakleikashop.ru/images/detailed/32/Angry-010.png' }),\n                    react_1.default.createElement(\"span\", { className: commentslist_css_1.default.nameAuthor }, props.data.author),\n                    react_1.default.createElement(\"span\", { className: commentslist_css_1.default.dateCreate },\n                        dateCreateComment,\n                        \" \\u043D\\u0430\\u0437\\u0430\\u0434\")),\n                react_1.default.createElement(\"p\", { className: commentslist_css_1.default.textBody }, props.data.body),\n                react_1.default.createElement(\"div\", { className: commentslist_css_1.default.btnBlock },\n                    react_1.default.createElement(\"button\", { onClick: function () {\n                            setIsResponseFormOpened(true);\n                        }, className: commentslist_css_1.default.buttonComment },\n                        react_1.default.createElement(\"div\", { className: commentslist_css_1.default.iconBtn },\n                            react_1.default.createElement(Icon_1.Icon, { name: \"CommentIcon\", size: 15 })),\n                        \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\"),\n                    react_1.default.createElement(\"button\", { className: commentslist_css_1.default.buttonComment },\n                        react_1.default.createElement(\"div\", { className: commentslist_css_1.default.iconBtn },\n                            react_1.default.createElement(Icon_1.Icon, { name: \"ShareIcon\", size: 15 })),\n                        \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\"),\n                    react_1.default.createElement(\"button\", { className: commentslist_css_1.default.buttonComment },\n                        react_1.default.createElement(\"div\", { className: commentslist_css_1.default.iconBtn },\n                            react_1.default.createElement(Icon_1.Icon, { name: 'ReportIcon', size: 15 })),\n                        \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\")),\n                isResponseFormOpened && (react_1.default.createElement(ResponseForm_1.ResponseForm, { authorComment: props.data.author, onClose: setIsResponseFormOpened }))));\n        }\n    }\n    return (react_1.default.createElement(\"div\", { style: { display: 'none' } }));\n}\nexports.CommentsList = CommentsList;\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentsGet/CommentsList/CommentsList.tsx?");

/***/ }),

/***/ "./src/shared/Post/CommentsGet/CommentsList/commentslist.css":
/*!*******************************************************************!*\
  !*** ./src/shared/Post/CommentsGet/CommentsList/commentslist.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"itemComment\": \"commentslist__itemComment--10pfH\",\n\t\"img\": \"commentslist__img--GweRJ\",\n\t\"nameAuthor\": \"commentslist__nameAuthor--2y0SH\",\n\t\"dateCreate\": \"commentslist__dateCreate--35JOJ\",\n\t\"textBody\": \"commentslist__textBody--3-y19\",\n\t\"infoBlock\": \"commentslist__infoBlock--2DA2r\",\n\t\"count\": \"commentslist__count--2_--c\",\n\t\"btnBlock\": \"commentslist__btnBlock--3VPgN\",\n\t\"buttonComment\": \"commentslist__buttonComment--39Tzx\",\n\t\"iconBtn\": \"commentslist__iconBtn--LT3JY\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentsGet/CommentsList/commentslist.css?");

/***/ }),

/***/ "./src/shared/Post/CommentsGet/CommentsList/index.ts":
/*!***********************************************************!*\
  !*** ./src/shared/Post/CommentsGet/CommentsList/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CommentsList */ \"./src/shared/Post/CommentsGet/CommentsList/CommentsList.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentsGet/CommentsList/index.ts?");

/***/ }),

/***/ "./src/shared/Post/CommentsGet/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Post/CommentsGet/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CommentsGet */ \"./src/shared/Post/CommentsGet/CommentsGet.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentsGet/index.ts?");

/***/ }),

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Post = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/Post/post.css\"));\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\nvar cardContext_1 = __webpack_require__(/*! ../context/cardContext */ \"./src/shared/context/cardContext.ts\");\nvar useComment_1 = __webpack_require__(/*! ../hooks/useComment */ \"./src/shared/hooks/useComment.ts\");\nvar CommentsGet_1 = __webpack_require__(/*! ./CommentsGet */ \"./src/shared/Post/CommentsGet/index.ts\");\nvar getRandomString_1 = __webpack_require__(/*! ../utils/getRandomString */ \"./src/shared/utils/getRandomString.ts\");\nvar useGetDateCreate_1 = __webpack_require__(/*! ../hooks/useGetDateCreate */ \"./src/shared/hooks/useGetDateCreate.ts\");\nvar CountUps_1 = __webpack_require__(/*! ../UI/CountUps */ \"./src/shared/UI/CountUps/index.ts\");\nvar VideoBlock_1 = __webpack_require__(/*! ../UI/VideoBlock */ \"./src/shared/UI/VideoBlock/index.ts\");\nvar ImgBlock_1 = __webpack_require__(/*! ../UI/ImgBlock */ \"./src/shared/UI/ImgBlock/index.ts\");\nvar CommentPostContainer_1 = __webpack_require__(/*! ./CommentPostContainer */ \"./src/shared/Post/CommentPostContainer/index.ts\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nfunction Post(props) {\n    var _a, _b, _c;\n    var comments = (0, useComment_1.useComment)();\n    var objArrFromContext = (0, react_1.useContext)(cardContext_1.cardContext);\n    var ref = (0, react_1.useRef)(null);\n    var history = (0, react_router_dom_1.useHistory)();\n    var _d = (0, react_1.useState)(false), loadState = _d[0], setLoadState = _d[1];\n    function handleClick(event) {\n        var _a, _b;\n        if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\n            history.push('/posts');\n            (_b = props.onClose) === null || _b === void 0 ? void 0 : _b.call(props, false);\n        }\n    }\n    (0, react_1.useEffect)(function () {\n        document.addEventListener('click', handleClick);\n        if (window.location.pathname === props.path) {\n            setLoadState(true);\n        }\n        return function () {\n            document.removeEventListener('click', handleClick);\n        };\n    }, []);\n    var node = document.querySelector('#modal_root');\n    if (!node)\n        return null;\n    var dateCreate = (0, useGetDateCreate_1.useGetDateCreate)(objArrFromContext.created);\n    var linkToVideo = ((_a = objArrFromContext === null || objArrFromContext === void 0 ? void 0 : objArrFromContext.secure_media) === null || _a === void 0 ? void 0 : _a.reddit_video) ? (_b = objArrFromContext === null || objArrFromContext === void 0 ? void 0 : objArrFromContext.secure_media) === null || _b === void 0 ? void 0 : _b.reddit_video.dash_url : '';\n    var imgGet = ((_c = objArrFromContext === null || objArrFromContext === void 0 ? void 0 : objArrFromContext.preview) === null || _c === void 0 ? void 0 : _c.enabled) ? objArrFromContext === null || objArrFromContext === void 0 ? void 0 : objArrFromContext.url : '';\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", null, loadState && react_1.default.createElement(\"div\", { className: post_css_1.default.modal, style: { top: props.position.top }, ref: ref },\n        react_1.default.createElement(\"div\", { className: post_css_1.default.topBlock },\n            react_1.default.createElement(\"div\", { className: post_css_1.default.countPosition },\n                react_1.default.createElement(CountUps_1.CountUps, { countUps: objArrFromContext.ups })),\n            react_1.default.createElement(\"div\", null,\n                react_1.default.createElement(\"h2\", { className: post_css_1.default.titlePost }, objArrFromContext.title),\n                react_1.default.createElement(\"span\", { className: post_css_1.default.datePublic },\n                    \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \",\n                    dateCreate,\n                    \" \\u043D\\u0430\\u0437\\u0430\\u0434\"),\n                react_1.default.createElement(\"img\", { className: post_css_1.default.authorIcon, alt: 'icon author', src: objArrFromContext.sr_detail.icon_img }),\n                react_1.default.createElement(\"span\", { className: post_css_1.default.nameAuthor }, objArrFromContext.author))),\n        react_1.default.createElement(\"p\", { className: post_css_1.default.contentBlock }, objArrFromContext.selftext),\n        react_1.default.createElement(ImgBlock_1.ImgBlock, { props: imgGet }),\n        react_1.default.createElement(VideoBlock_1.VideoBlock, { props: linkToVideo }),\n        react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/\".concat(objArrFromContext.permalink), target: '_blank' }, \"\\u041F\\u0415\\u0420\\u0415\\u0425\\u041E\\u0414\"),\n        react_1.default.createElement(CommentPostContainer_1.CommentPostContainer, { key: objArrFromContext.id }),\n        react_1.default.createElement(CommentsGet_1.CommentsGet, { key: (0, getRandomString_1.generateRandomString)(), comment: comments })))), node);\n}\nexports.Post = Post;\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/Post/ResponseForm/ResponseForm.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Post/ResponseForm/ResponseForm.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ResponseForm = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar responseform_css_1 = __importDefault(__webpack_require__(/*! ./responseform.css */ \"./src/shared/Post/ResponseForm/responseform.css\"));\nfunction ResponseForm(props) {\n    var divRef = (0, react_1.useRef)(null);\n    var textareaRef = (0, react_1.useRef)(null);\n    var _a = (0, react_1.useState)(''), value = _a[0], setValue = _a[1];\n    function handleSubmit(event) {\n        var _a;\n        event.preventDefault();\n        console.log('submit', (_a = textareaRef.current) === null || _a === void 0 ? void 0 : _a.value);\n    }\n    function handleChange(event) {\n        setValue(event.target.value);\n        console.log('comment value', value);\n    }\n    function handleClick(event) {\n        var _a, _b;\n        if (event.target instanceof Node && !((_a = divRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\n            console.log('click');\n            (_b = props.onClose) === null || _b === void 0 ? void 0 : _b.call(props, false);\n        }\n    }\n    (0, react_1.useEffect)(function () {\n        var _a;\n        (_a = textareaRef.current) === null || _a === void 0 ? void 0 : _a.focus();\n        document.addEventListener('click', handleClick);\n        return function () {\n            document.removeEventListener('click', handleClick);\n        };\n    }, []);\n    return (react_1.default.createElement(\"div\", { className: responseform_css_1.default.block, ref: divRef },\n        react_1.default.createElement(\"form\", { className: responseform_css_1.default.form },\n            react_1.default.createElement(\"textarea\", { className: responseform_css_1.default.inputText, ref: textareaRef, placeholder: \"reply to \".concat(props.authorComment), value: value, onChange: handleChange }),\n            react_1.default.createElement(\"button\", { className: responseform_css_1.default.btn, onClick: handleSubmit }, \"\\u043E\\u0442\\u043F\\u0440\\u0430\\u0432\\u0438\\u0442\\u044C\"))));\n}\nexports.ResponseForm = ResponseForm;\n\n\n//# sourceURL=webpack:///./src/shared/Post/ResponseForm/ResponseForm.tsx?");

/***/ }),

/***/ "./src/shared/Post/ResponseForm/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/Post/ResponseForm/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ResponseForm */ \"./src/shared/Post/ResponseForm/ResponseForm.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Post/ResponseForm/index.ts?");

/***/ }),

/***/ "./src/shared/Post/ResponseForm/responseform.css":
/*!*******************************************************!*\
  !*** ./src/shared/Post/ResponseForm/responseform.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"responseform__form--a-N04\",\n\t\"inputText\": \"responseform__inputText--zDsjb\",\n\t\"input\": \"responseform__input--3CAzg\",\n\t\"btn\": \"responseform__btn--1Mls-\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/ResponseForm/responseform.css?");

/***/ }),

/***/ "./src/shared/Post/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Post/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Post */ \"./src/shared/Post/Post.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Post/index.ts?");

/***/ }),

/***/ "./src/shared/Post/post.css":
/*!**********************************!*\
  !*** ./src/shared/Post/post.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modal\": \"post__modal--yRo-c\",\n\t\"content\": \"post__content--2gFMc\",\n\t\"close\": \"post__close--1HSqz\",\n\t\"topBlock\": \"post__topBlock--22lTl\",\n\t\"countPosition\": \"post__countPosition--1H4fm\",\n\t\"titlePost\": \"post__titlePost--3R3_P\",\n\t\"datePublic\": \"post__datePublic--3dXI7\",\n\t\"nameAuthor\": \"post__nameAuthor--2yFSq\",\n\t\"contentBlock\": \"post__contentBlock--w4n7N\",\n\t\"authorIcon\": \"post__authorIcon--3JONP\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/post.css?");

/***/ }),

/***/ "./src/shared/UI/BtnScrollUp/BtnScrollUp.tsx":
/*!***************************************************!*\
  !*** ./src/shared/UI/BtnScrollUp/BtnScrollUp.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.BtnScrollUp = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar btnscrollup_css_1 = __importDefault(__webpack_require__(/*! ./btnscrollup.css */ \"./src/shared/UI/BtnScrollUp/btnscrollup.css\"));\nfunction BtnScrollUp() {\n    return (react_1.default.createElement(\"button\", { className: btnscrollup_css_1.default.btn },\n        react_1.default.createElement(\"svg\", { width: \"50px\", height: \"50px\", viewBox: \"0 0 24 24\", version: \"1.1\", xmlns: \"http://www.w3.org/2000/svg\", xmlnsXlink: \"http://www.w3.org/1999/xlink\" },\n            react_1.default.createElement(\"title\", null, \"Iconly/Broken/Arrow - Up Circle\"),\n            react_1.default.createElement(\"g\", { id: \"Iconly/Broken/Arrow---Up-Circle\", stroke: \"none\", strokeWidth: \"1\", fill: \"none\", fillRule: \"evenodd\" },\n                react_1.default.createElement(\"g\", { id: \"Arrow---Up-Circle\", transform: \"translate(12.000500, 12.000000) rotate(-90.000000) translate(-12.000500, -12.000000) translate(2.000500, 2.000000)\", fill: \"#000000\", fillRule: \"nonzero\" },\n                    react_1.default.createElement(\"path\", { d: \"M10,0 C15.514,0 20,4.486 20,10 C20,15.514 15.514,20 10,20 C4.486,20 2.5243549e-29,15.514 2.5243549e-29,10 C2.5243549e-29,6.872 1.423,3.983 3.902,2.073 C4.22,1.828 4.678,1.888 4.922,2.205 C5.168,2.523 5.107,2.979 4.79,3.226 C2.669,4.857 1.454,7.327 1.454,10 C1.454,14.712 5.287,18.546 10,18.546 C14.712,18.546 18.545,14.712 18.545,10 C18.545,5.288 14.712,1.454 10,1.454 C9.563,1.454 9.126,1.487 8.701,1.552 C8.305,1.612 7.934,1.34 7.873,0.943 C7.807,0.544 8.084,0.175 8.481,0.114 C8.979,0.038 9.49,0 10,0 Z M5.9992,8.0262 C6.2932,7.7342 6.7672,7.7342 7.0592,8.0282 L7.0592,8.0282 L9.9992,10.9812 L12.9392,8.0282 C13.2312,7.7342 13.7062,7.7342 14.0002,8.0262 C14.2932,8.3182 14.2942,8.7932 14.0022,9.0872 L14.0022,9.0872 L10.5302,12.5732 C10.3902,12.7152 10.1992,12.7942 9.9992,12.7942 C9.8002,12.7942 9.6092,12.7152 9.4682,12.5732 L9.4682,12.5732 L5.9972,9.0872 C5.7042,8.7932 5.7052,8.3182 5.9992,8.0262 Z\", transform: \"translate(10.000000, 10.000000) rotate(-90.000000) translate(-10.000000, -10.000000) \" }))))));\n}\nexports.BtnScrollUp = BtnScrollUp;\n\n\n//# sourceURL=webpack:///./src/shared/UI/BtnScrollUp/BtnScrollUp.tsx?");

/***/ }),

/***/ "./src/shared/UI/BtnScrollUp/btnscrollup.css":
/*!***************************************************!*\
  !*** ./src/shared/UI/BtnScrollUp/btnscrollup.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"btn\": \"btnscrollup__btn--I5s_n\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/UI/BtnScrollUp/btnscrollup.css?");

/***/ }),

/***/ "./src/shared/UI/BtnScrollUp/index.ts":
/*!********************************************!*\
  !*** ./src/shared/UI/BtnScrollUp/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./BtnScrollUp */ \"./src/shared/UI/BtnScrollUp/BtnScrollUp.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/UI/BtnScrollUp/index.ts?");

/***/ }),

/***/ "./src/shared/UI/CountUps/CountUps.tsx":
/*!*********************************************!*\
  !*** ./src/shared/UI/CountUps/CountUps.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CountUps = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar countups_css_1 = __importDefault(__webpack_require__(/*! ./countups.css */ \"./src/shared/UI/CountUps/countups.css\"));\nvar cardContext_1 = __webpack_require__(/*! ../../context/cardContext */ \"./src/shared/context/cardContext.ts\");\nfunction CountUps(props) {\n    var objArrFromContext = (0, react_1.useContext)(cardContext_1.cardContext);\n    var countUPS = props.countUps;\n    var _a = (0, react_1.useState)(countUPS), count = _a[0], setCount = _a[1];\n    return (react_1.default.createElement(\"div\", { className: countups_css_1.default.leftPart },\n        react_1.default.createElement(\"button\", { onClick: function () { return setCount(count + 1); }, className: countups_css_1.default.btnLeftPart + ' ' + countups_css_1.default.up },\n            react_1.default.createElement(\"svg\", { className: countups_css_1.default.icoUp, width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" }))),\n        react_1.default.createElement(\"span\", { className: countups_css_1.default.spanBot }, count),\n        react_1.default.createElement(\"button\", { onClick: function () { return setCount(count - 1); }, className: countups_css_1.default.btnLeftPart + ' ' + countups_css_1.default.down },\n            react_1.default.createElement(\"svg\", { className: countups_css_1.default.icoDown, width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                react_1.default.createElement(\"path\", { d: \"M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z\", fill: \"#C4C4C4\" })))));\n}\nexports.CountUps = CountUps;\n\n\n//# sourceURL=webpack:///./src/shared/UI/CountUps/CountUps.tsx?");

/***/ }),

/***/ "./src/shared/UI/CountUps/countups.css":
/*!*********************************************!*\
  !*** ./src/shared/UI/CountUps/countups.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"spanBot\": \"countups__spanBot---yK88\",\n\t\"btnLeftPart\": \"countups__btnLeftPart--1Ro03\",\n\t\"btnRightPart\": \"countups__btnRightPart--9JGJq\",\n\t\"btnMidPart\": \"countups__btnMidPart--1t7MP\",\n\t\"midPart\": \"countups__midPart--2k9lj\",\n\t\"rightPart\": \"countups__rightPart--1U8ol\",\n\t\"leftPart\": \"countups__leftPart--20cQU\",\n\t\"icoDown\": \"countups__icoDown--19LOJ\",\n\t\"icoUp\": \"countups__icoUp--xUOcZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/UI/CountUps/countups.css?");

/***/ }),

/***/ "./src/shared/UI/CountUps/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/UI/CountUps/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CountUps */ \"./src/shared/UI/CountUps/CountUps.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/UI/CountUps/index.ts?");

/***/ }),

/***/ "./src/shared/UI/Dropdown/Dropdown.tsx":
/*!*********************************************!*\
  !*** ./src/shared/UI/Dropdown/Dropdown.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Dropdown = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/UI/Dropdown/dropdown.css\"));\nvar DropdownBtn_1 = __webpack_require__(/*! ../../CardsList/Card/TopBlock/InfoBlock/DropdownBtn */ \"./src/shared/CardsList/Card/TopBlock/InfoBlock/DropdownBtn/index.ts\");\nvar BlockDropdown_1 = __webpack_require__(/*! ../../CardsList/Card/BlockDropdown */ \"./src/shared/CardsList/Card/BlockDropdown/index.ts\");\nfunction Dropdown(_a) {\n    var _b, _c;\n    var button = _a.button, children = _a.children;\n    var _d = react_1.default.useState(false), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];\n    var node = document.querySelector('#dropdown_root');\n    if (!node)\n        return null;\n    var ref = (0, react_1.useRef)(null);\n    var positionDropdownTop = (_b = ref.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect().top;\n    var positionDropdownLeft = (_c = ref.current) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect().left;\n    var windowWidth = window.innerWidth;\n    var blockDropdownPositionTop;\n    var blockDropdownPositionLeft;\n    if (windowWidth >= 1200) {\n        blockDropdownPositionTop = positionDropdownTop + window.scrollY + 100;\n        blockDropdownPositionLeft = positionDropdownLeft + window.scrollX;\n    }\n    if (windowWidth >= 1024 && windowWidth < 1200) {\n        blockDropdownPositionTop = positionDropdownTop + window.scrollY + 100;\n        blockDropdownPositionLeft = positionDropdownLeft + window.scrollX - 50;\n    }\n    if (windowWidth < 1024) {\n        blockDropdownPositionTop = positionDropdownTop + window.scrollY + 45;\n        blockDropdownPositionLeft = positionDropdownLeft + window.scrollX - 62;\n    }\n    return (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.container },\n        react_1.default.createElement(\"div\", { ref: ref, onClick: function () { return setIsDropdownOpen(!isDropdownOpen); } },\n            react_1.default.createElement(DropdownBtn_1.DropdownBtn, { iaAt: isDropdownOpen })),\n        isDropdownOpen && (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer },\n            react_1.default.createElement(\"div\", { className: dropdown_css_1.default.list, onClick: function () { return setIsDropdownOpen(false); } },\n                react_1.default.createElement(BlockDropdown_1.BlockDropdown, { positionTop: blockDropdownPositionTop, positionRight: blockDropdownPositionLeft }))))));\n}\nexports.Dropdown = Dropdown;\n\n\n//# sourceURL=webpack:///./src/shared/UI/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/UI/Dropdown/dropdown.css":
/*!*********************************************!*\
  !*** ./src/shared/UI/Dropdown/dropdown.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--2c5qD\",\n\t\"listContainer\": \"dropdown__listContainer--1sO4i\",\n\t\"list\": \"dropdown__list--3TDEz\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/UI/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/UI/Dropdown/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/UI/Dropdown/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/UI/Dropdown/Dropdown.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/UI/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/UI/ImgBlock/ImgBlock.tsx":
/*!*********************************************!*\
  !*** ./src/shared/UI/ImgBlock/ImgBlock.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ImgBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar imgblock_css_1 = __importDefault(__webpack_require__(/*! ./imgblock.css */ \"./src/shared/UI/ImgBlock/imgblock.css\"));\nfunction ImgBlock(props) {\n    if (props.props && props.props !== '') {\n        var urlImg = props.props;\n        console.log('img block url', urlImg);\n        return (react_1.default.createElement(\"div\", { className: imgblock_css_1.default.block },\n            react_1.default.createElement(\"img\", { className: imgblock_css_1.default.img, alt: 'img', src: urlImg })));\n    }\n    else {\n        return (react_1.default.createElement(\"div\", { style: { display: \"none\" } }));\n    }\n}\nexports.ImgBlock = ImgBlock;\n\n\n//# sourceURL=webpack:///./src/shared/UI/ImgBlock/ImgBlock.tsx?");

/***/ }),

/***/ "./src/shared/UI/ImgBlock/imgblock.css":
/*!*********************************************!*\
  !*** ./src/shared/UI/ImgBlock/imgblock.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"block\": \"imgblock__block--62HV7\",\n\t\"img\": \"imgblock__img--qhImH\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/UI/ImgBlock/imgblock.css?");

/***/ }),

/***/ "./src/shared/UI/ImgBlock/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/UI/ImgBlock/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ImgBlock */ \"./src/shared/UI/ImgBlock/ImgBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/UI/ImgBlock/index.ts?");

/***/ }),

/***/ "./src/shared/UI/NotFoundPage/NotFoundPage.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/UI/NotFoundPage/NotFoundPage.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.NotFoundPage = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar notfoundpage_css_1 = __importDefault(__webpack_require__(/*! ./notfoundpage.css */ \"./src/shared/UI/NotFoundPage/notfoundpage.css\"));\nfunction NotFoundPage() {\n    console.log('render 404');\n    return (react_1.default.createElement(\"p\", { className: notfoundpage_css_1.default.text },\n        \"404 NOT FOUND: \\u0421\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B \",\n        window.location.href,\n        \" \\u043D\\u0435 \\u0441\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443\\u0435\\u0442\"));\n}\nexports.NotFoundPage = NotFoundPage;\n\n\n//# sourceURL=webpack:///./src/shared/UI/NotFoundPage/NotFoundPage.tsx?");

/***/ }),

/***/ "./src/shared/UI/NotFoundPage/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/UI/NotFoundPage/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./NotFoundPage */ \"./src/shared/UI/NotFoundPage/NotFoundPage.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/UI/NotFoundPage/index.ts?");

/***/ }),

/***/ "./src/shared/UI/NotFoundPage/notfoundpage.css":
/*!*****************************************************!*\
  !*** ./src/shared/UI/NotFoundPage/notfoundpage.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"text\": \"notfoundpage__text--1n527\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/UI/NotFoundPage/notfoundpage.css?");

/***/ }),

/***/ "./src/shared/UI/PrescriptionToAuth/PrescriptionToAuth.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/UI/PrescriptionToAuth/PrescriptionToAuth.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PrescriptionToAuth = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar prescriptiontoauth_css_1 = __importDefault(__webpack_require__(/*! ./prescriptiontoauth.css */ \"./src/shared/UI/PrescriptionToAuth/prescriptiontoauth.css\"));\nfunction PrescriptionToAuth() {\n    return (react_1.default.createElement(\"div\", { className: prescriptiontoauth_css_1.default.authorization }, \"\\u0414\\u043B\\u044F \\u043F\\u0440\\u043E\\u0441\\u043C\\u043E\\u0442\\u0440\\u0430 \\u0441\\u043F\\u0438\\u0441\\u043A\\u0430 \\u043F\\u043E\\u0441\\u0442\\u043E\\u0432 \\u0432\\u044B\\u043F\\u043E\\u043B\\u043D\\u0438\\u0442\\u0435 \\u0432\\u0445\\u043E\\u0434 \\u0432 \\u0443\\u0447\\u0435\\u0442\\u043D\\u0443\\u044E \\u0437\\u0430\\u043F\\u0438\\u0441\\u044C\"));\n}\nexports.PrescriptionToAuth = PrescriptionToAuth;\n\n\n//# sourceURL=webpack:///./src/shared/UI/PrescriptionToAuth/PrescriptionToAuth.tsx?");

/***/ }),

/***/ "./src/shared/UI/PrescriptionToAuth/index.ts":
/*!***************************************************!*\
  !*** ./src/shared/UI/PrescriptionToAuth/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./PrescriptionToAuth */ \"./src/shared/UI/PrescriptionToAuth/PrescriptionToAuth.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/UI/PrescriptionToAuth/index.ts?");

/***/ }),

/***/ "./src/shared/UI/PrescriptionToAuth/prescriptiontoauth.css":
/*!*****************************************************************!*\
  !*** ./src/shared/UI/PrescriptionToAuth/prescriptiontoauth.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"authorization\": \"prescriptiontoauth__authorization--3Ry9w\",\n\t\"animate_grow\": \"prescriptiontoauth__animate_grow--18Tdt\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/UI/PrescriptionToAuth/prescriptiontoauth.css?");

/***/ }),

/***/ "./src/shared/UI/VideoBlock/VideoBlock.tsx":
/*!*************************************************!*\
  !*** ./src/shared/UI/VideoBlock/VideoBlock.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.VideoBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar videoblock_css_1 = __importDefault(__webpack_require__(/*! ./videoblock.css */ \"./src/shared/UI/VideoBlock/videoblock.css\"));\nvar react_player_1 = __importDefault(__webpack_require__(/*! react-player */ \"react-player\"));\nfunction VideoBlock(props) {\n    if (props.props !== '' && props.props) {\n        return (react_1.default.createElement(\"div\", { className: videoblock_css_1.default.block },\n            react_1.default.createElement(react_player_1.default, { controls: true, url: props.props })));\n    }\n    else {\n        return (react_1.default.createElement(\"div\", { style: { display: 'none' } }));\n    }\n}\nexports.VideoBlock = VideoBlock;\n\n\n//# sourceURL=webpack:///./src/shared/UI/VideoBlock/VideoBlock.tsx?");

/***/ }),

/***/ "./src/shared/UI/VideoBlock/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/UI/VideoBlock/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./VideoBlock */ \"./src/shared/UI/VideoBlock/VideoBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/UI/VideoBlock/index.ts?");

/***/ }),

/***/ "./src/shared/UI/VideoBlock/videoblock.css":
/*!*************************************************!*\
  !*** ./src/shared/UI/VideoBlock/videoblock.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"block\": \"videoblock__block--37aDk\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/UI/VideoBlock/videoblock.css?");

/***/ }),

/***/ "./src/shared/context/cardContext.ts":
/*!*******************************************!*\
  !*** ./src/shared/context/cardContext.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.cardContext = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nexports.cardContext = react_1.default.createContext({});\n\n\n//# sourceURL=webpack:///./src/shared/context/cardContext.ts?");

/***/ }),

/***/ "./src/shared/context/userContext.tsx":
/*!********************************************!*\
  !*** ./src/shared/context/userContext.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserContextProvider = exports.userContext = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar useUserData_1 = __webpack_require__(/*! ../hooks/useUserData */ \"./src/shared/hooks/useUserData.ts\");\nexports.userContext = react_1.default.createContext({});\nfunction UserContextProvider(_a) {\n    var children = _a.children;\n    var data = (0, useUserData_1.useUserData)()[0];\n    return (react_1.default.createElement(exports.userContext.Provider, { value: data }, children));\n}\nexports.UserContextProvider = UserContextProvider;\n\n\n//# sourceURL=webpack:///./src/shared/context/userContext.tsx?");

/***/ }),

/***/ "./src/shared/hooks/useComment.ts":
/*!****************************************!*\
  !*** ./src/shared/hooks/useComment.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useComment = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar cardContext_1 = __webpack_require__(/*! ../context/cardContext */ \"./src/shared/context/cardContext.ts\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nfunction useComment() {\n    var _a = (0, react_1.useState)({}), data = _a[0], setData = _a[1];\n    var objArrFromContext = (0, react_1.useContext)(cardContext_1.cardContext);\n    var postId = objArrFromContext.id;\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\n    (0, react_1.useEffect)(function () {\n        axios_1.default.get(\"https://oauth.reddit.com/comments/\".concat(postId), {\n            headers: { Authorization: \"bearer \".concat(token) }\n        })\n            .then(function (resp) {\n            var postData = resp.data;\n            setData(postData[1].data.children);\n        })\n            .catch(console.log);\n    }, [token]);\n    return data;\n}\nexports.useComment = useComment;\n\n\n//# sourceURL=webpack:///./src/shared/hooks/useComment.ts?");

/***/ }),

/***/ "./src/shared/hooks/useGetDateCreate.ts":
/*!**********************************************!*\
  !*** ./src/shared/hooks/useGetDateCreate.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useGetDateCreate = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nfunction useGetDateCreate(getDate) {\n    var _a = (0, react_1.useState)(''), date = _a[0], setDate = _a[1];\n    (0, react_1.useEffect)(function () {\n        var stringDate = String(getDate);\n        stringDate = stringDate + '000';\n        var numberDate = Number(stringDate);\n        var dateNow = Date.now();\n        var fullHour = dateNow - numberDate;\n        fullHour = fullHour / 3600000;\n        var integerDate = String(Math.round(fullHour));\n        var hoursSlice1 = integerDate.slice(-1);\n        var hoursSlice2 = integerDate.slice(-2);\n        var wordHour;\n        if (hoursSlice1 === '2' || hoursSlice1 === '3' || hoursSlice1 === '4') {\n            wordHour = 'часа';\n        }\n        else {\n            wordHour = 'часов';\n        }\n        if (hoursSlice2 === '14' || hoursSlice2 === '11' || hoursSlice2 === '12' || hoursSlice2 === '13') {\n            wordHour = 'часов';\n        }\n        var endOutDate = \"\".concat(integerDate, \" \").concat(wordHour);\n        setDate(endOutDate);\n    }, []);\n    return [date];\n}\nexports.useGetDateCreate = useGetDateCreate;\n\n\n//# sourceURL=webpack:///./src/shared/hooks/useGetDateCreate.ts?");

/***/ }),

/***/ "./src/shared/hooks/useUserData.ts":
/*!*****************************************!*\
  !*** ./src/shared/hooks/useUserData.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useUserData = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar action_1 = __webpack_require__(/*! ../store/my/action */ \"./src/shared/store/my/action.ts\");\nfunction useUserData() {\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\n    var data = (0, react_redux_1.useSelector)(function (state) { return state.me.data; });\n    var loader = (0, react_redux_1.useSelector)(function (state) { return state.me.loading; });\n    var dispatch = (0, react_redux_1.useDispatch)();\n    (0, react_1.useEffect)(function () {\n        if (token && token !== '' && token !== 'undefined') {\n            dispatch((0, action_1.meRequestAsync)());\n        }\n    }, [token]);\n    var dataPlus = __assign(__assign({}, data), { loader: loader });\n    return [dataPlus];\n}\nexports.useUserData = useUserData;\n\n\n//# sourceURL=webpack:///./src/shared/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/shared/icons/AnonIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/AnonIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AnonIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction AnonIcon(props) {\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(\"svg\", { width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n            react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" }))));\n}\nexports.AnonIcon = AnonIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/AnonIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/CommentIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/icons/CommentIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction CommentIcon(props) {\n    return (react_1.default.createElement(\"svg\", { style: { width: \"\".concat(props.props), height: \"\".concat(props.props) }, width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" })));\n}\nexports.CommentIcon = CommentIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/CommentIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/HideIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/HideIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.HideIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction HideIcon(props) {\n    return (react_1.default.createElement(\"svg\", { style: { width: \"\".concat(props.props), height: \"\".concat(props.props) }, width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z\", fill: \"#999999\" })));\n}\nexports.HideIcon = HideIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/HideIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/MenuIcons.tsx":
/*!****************************************!*\
  !*** ./src/shared/icons/MenuIcons.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MenuIcons = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction MenuIcons(props) {\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(\"svg\", { style: { width: \"\".concat(props.props), height: \"\".concat(props.props) }, width: \"20\", height: \"5\", viewBox: \"0 0 20 5\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n            react_1.default.createElement(\"circle\", { cx: \"17.5\", cy: \"2.5\", r: \"2.5\", transform: \"rotate(90 17.5 2.5)\", fill: \"#D9D9D9\" }),\n            react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"2.5\", r: \"2.5\", transform: \"rotate(90 10 2.5)\", fill: \"#D9D9D9\" }),\n            react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", transform: \"rotate(90 2.5 2.5)\", fill: \"#D9D9D9\" }))));\n}\nexports.MenuIcons = MenuIcons;\n\n\n//# sourceURL=webpack:///./src/shared/icons/MenuIcons.tsx?");

/***/ }),

/***/ "./src/shared/icons/ReportIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/icons/ReportIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ReportIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction ReportIcon(props) {\n    return (react_1.default.createElement(\"svg\", { style: { width: \"\".concat(props.props), height: \"\".concat(props.props) }, width: \"16\", height: \"14\", viewBox: \"0 0 16 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z\", fill: \"#999999\" })));\n}\nexports.ReportIcon = ReportIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/ReportIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/SaveIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/SaveIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SaveIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction SaveIcon(props) {\n    return (react_1.default.createElement(\"svg\", { style: { width: \"\".concat(props.props), height: \"\".concat(props.props) }, width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })));\n}\nexports.SaveIcon = SaveIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/SaveIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/ShareIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/icons/ShareIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ShareIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction ShareIcon(props) {\n    return (react_1.default.createElement(\"svg\", { style: { width: \"\".concat(props.props), height: \"\".concat(props.props) }, width: \"12\", height: \"14\", viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" })));\n}\nexports.ShareIcon = ShareIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/ShareIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/icons/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./MenuIcons */ \"./src/shared/icons/MenuIcons.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./CommentIcon */ \"./src/shared/icons/CommentIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./ShareIcon */ \"./src/shared/icons/ShareIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./HideIcon */ \"./src/shared/icons/HideIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./SaveIcon */ \"./src/shared/icons/SaveIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./ReportIcon */ \"./src/shared/icons/ReportIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./AnonIcon */ \"./src/shared/icons/AnonIcon.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/icons/index.ts?");

/***/ }),

/***/ "./src/shared/main.global.css":
/*!************************************!*\
  !*** ./src/shared/main.global.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\n  --black:          #333333;\\n  --orange:         #CC6633;\\n  --green:          #A4CC33;\\n  --whiteLightness: 100%;\\n  --white:          hsl(0, 0%, var(--whiteLightness));\\n  --grayF4:         hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\n  --greyF3:         hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\n  --greyEC:         hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\n  --greyD9:         hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\n  --greyC4:         hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\n  --grey99:         hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\n  --grey66:         hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\n}\\n\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: var(--grayF4);\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: 'Roboto', serif;\\n}\\n\\n* {\\n  color: var(--black);\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  padding: 0;\\n  border: 0;\\n  background: transparent;\\n  cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/main.global.css?");

/***/ }),

/***/ "./src/shared/store/my/action.ts":
/*!***************************************!*\
  !*** ./src/shared/store/my/action.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.postDataAsync = exports.saveToken = exports.meRequestAsync = exports.postDataRequestSuccess = exports.meRequestError = exports.meRequestSuccess = exports.meRequest = void 0;\nvar store_1 = __webpack_require__(/*! ../store */ \"./src/shared/store/store.ts\");\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar MY_REQUEST = 'MY_REQUEST';\nvar meRequest = function () { return ({\n    type: MY_REQUEST\n}); };\nexports.meRequest = meRequest;\nvar MY_REQUEST_SUCCESS = 'MY_REQUEST_SUCCESS';\nvar meRequestSuccess = function (data) { return ({\n    type: MY_REQUEST_SUCCESS,\n    data: data\n}); };\nexports.meRequestSuccess = meRequestSuccess;\nvar MY_REQUEST_ERROR = 'MY_REQUEST_ERROR';\nvar meRequestError = function (error) { return ({\n    type: MY_REQUEST_ERROR,\n    error: error\n}); };\nexports.meRequestError = meRequestError;\nvar POST_DATA_REQUEST_SUCCESS = 'POST_DATA_REQUEST_SUCCESS';\nvar postDataRequestSuccess = function (data) { return ({\n    type: POST_DATA_REQUEST_SUCCESS,\n    data: data\n}); };\nexports.postDataRequestSuccess = postDataRequestSuccess;\nvar meRequestAsync = function () { return function (dispatch, getState) {\n    dispatch((0, exports.meRequest)());\n    axios_1.default.get('https://oauth.reddit.com/api/v1/me.json', {\n        headers: { Authorization: \"bearer \".concat(getState().token) }\n    })\n        .then(function (resp) {\n        var userData = resp.data;\n        dispatch((0, exports.meRequestSuccess)({ name: userData.name, iconImg: userData.snoovatar_img }));\n    })\n        .catch(function (error) {\n        dispatch((0, exports.meRequestError)(String(error)));\n    });\n}; };\nexports.meRequestAsync = meRequestAsync;\nvar saveToken = function () { return function (dispatch) {\n    if (window.__token__) {\n        var token = window.__token__;\n        dispatch((0, store_1.setToken)(token));\n    }\n}; };\nexports.saveToken = saveToken;\nvar postDataAsync = function (nextAfter) { return function (dispatch, getState) {\n    axios_1.default.get('https://oauth.reddit.com/best.json?sr_detail=true', {\n        headers: { Authorization: \"bearer\" },\n        params: {\n            after: nextAfter,\n        }\n    })\n        .then(function (resp) {\n        var postData = resp.data;\n        dispatch((0, exports.postDataRequestSuccess)({ arrPosts: postData.data.children, after: postData.data.after }));\n    })\n        .catch(function (error) {\n        console.log(error);\n    });\n}; };\nexports.postDataAsync = postDataAsync;\n\n\n//# sourceURL=webpack:///./src/shared/store/my/action.ts?");

/***/ }),

/***/ "./src/shared/store/my/meReducer.ts":
/*!******************************************!*\
  !*** ./src/shared/store/my/meReducer.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.meReducerPost = exports.meReducer = void 0;\nvar meReducer = function (state, action) {\n    switch (action.type) {\n        case \"MY_REQUEST\":\n            return __assign(__assign({}, state), { loading: true });\n        case \"MY_REQUEST_ERROR\":\n            return __assign(__assign({}, state), { error: action.error, loading: false });\n        case \"MY_REQUEST_SUCCESS\":\n            return __assign(__assign({}, state), { data: action.data, loading: false });\n        default:\n            return state;\n    }\n};\nexports.meReducer = meReducer;\nvar meReducerPost = function (state, action) {\n    switch (action.type) {\n        case \"POST_DATA_REQUEST_SUCCESS\":\n            return __assign(__assign({}, state), { postData: action.data });\n        default:\n            return state;\n    }\n};\nexports.meReducerPost = meReducerPost;\n\n\n//# sourceURL=webpack:///./src/shared/store/my/meReducer.ts?");

/***/ }),

/***/ "./src/shared/store/store.ts":
/*!***********************************!*\
  !*** ./src/shared/store/store.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.setToken = exports.updateComment = exports.rootReducer = void 0;\nvar meReducer_1 = __webpack_require__(/*! ./my/meReducer */ \"./src/shared/store/my/meReducer.ts\");\nvar initialState = {\n    token: '',\n    commentText: '',\n    me: {\n        loading: false,\n        error: '',\n        data: {}\n    },\n    post: ''\n};\nvar UPDATE_COMMENT = 'UPDATE_COMMENT';\nvar SET_TOKEN = 'SET_TOKEN';\nvar rootReducer = function (state, action) {\n    if (state === void 0) { state = initialState; }\n    switch (action.type) {\n        case 'UPDATE_COMMENT':\n            return __assign(__assign({}, state), { commentText: action.text });\n        case \"SET_TOKEN\":\n            return __assign(__assign({}, state), { token: action.token });\n        case 'MY_REQUEST':\n        case 'MY_REQUEST_SUCCESS':\n        case 'MY_REQUEST_ERROR':\n            return __assign(__assign({}, state), { me: (0, meReducer_1.meReducer)(state.me, action) });\n        case 'POST_DATA_REQUEST_SUCCESS':\n            return __assign(__assign({}, state), { post: (0, meReducer_1.meReducerPost)(state.post, action) });\n        default:\n            return state;\n    }\n};\nexports.rootReducer = rootReducer;\nvar updateComment = function (text) { return ({\n    type: 'UPDATE_COMMENT',\n    text: text,\n}); };\nexports.updateComment = updateComment;\nvar setToken = function (token) { return ({\n    type: 'SET_TOKEN',\n    token: token,\n}); };\nexports.setToken = setToken;\n\n\n//# sourceURL=webpack:///./src/shared/store/store.ts?");

/***/ }),

/***/ "./src/shared/utils/getRandomString.ts":
/*!*********************************************!*\
  !*** ./src/shared/utils/getRandomString.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.generateRandomString = void 0;\nvar generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };\nexports.generateRandomString = generateRandomString;\n\n\n//# sourceURL=webpack:///./src/shared/utils/getRandomString.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formik\");\n\n//# sourceURL=webpack:///external_%22formik%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-player":
/*!*******************************!*\
  !*** external "react-player" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-player\");\n\n//# sourceURL=webpack:///external_%22react-player%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });