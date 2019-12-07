var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\r\n  <app-sidebar></app-sidebar>\r\n  <div id=\"data_container\" *ngIf=\"dataAvailable()\">\r\n    <app-score-header></app-score-header>\r\n    <app-best-worst-words></app-best-worst-words>\r\n    <app-word-frequency></app-word-frequency>\r\n    <app-comments></app-comments>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/best-worst-words/best-worst-words.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/best-worst-words/best-worst-words.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"best_worst\">\n  <p>Best Word: {{getBestWord()}} (Rating: {{getRating(getBestWordScore())}})</p>\n  <p>Worst Word: {{getWorstWord()}} (Rating: {{getRating(getWorstWordScore())}})</p>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/comments/comments.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/comments/comments.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"comments_header\">\r\n  <h1> Comments (Best to Worst) </h1>\r\n</div>\r\n<div class=\"comment\" *ngFor=\"let comment of getComments()\">\r\n  <p>\"{{comment.text}}\" (Rating: {{getRating(comment.score)}})</p>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/score-header/score-header.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/score-header/score-header.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"score_header\">\n  <p>Subreddit: r/{{getSubreddit()}}</p>\n  <p>Score: {{getAverageScoreAsString()}}</p>\n  <p>Rating: {{getRating(getAverageScore())}}</p>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"sidebar\" [class.show_menu]=\"showDropDown\">\r\n  <img src=\"assets/img/logo.svg\" alt=\"Toxicity\">\r\n  <label>\r\n    <input type=\"text\" [(ngModel)]=\"searchText\" [placeholder]=\"placeholder\" (keyup.enter)=\"analyze()\">\r\n  </label>\r\n  <div id=\"description\" [class.show_description]=\"showDropDown\">\r\n    <p>\r\n      {{description}} <br><br>\r\n      Non-Toxic (Score &#8805; 2)<br>\r\n      Very Positive (1 &#8804; Score < 2)<br>\r\n      Positive (0.25 &#8804; Score < 1)<br>\r\n      Neutral (-0.25 < Score < 0.25)<br>\r\n      Negative (-1 < Score &#8804; -0.25)<br>\r\n      Very Negative (-2 < Score &#8804; -1)<br>\r\n      Toxic (Score &#8804; -2)<br><br>\r\n      {{createdBy}}<br>\r\n      {{lastUpdated}}\r\n    </p>\r\n  </div>\r\n  <div class=\"menu_icon\" (click)=\"toggleMenu()\">\r\n    <div class=\"menu_icon_bar\" [class.rotate]=\"showDropDown\"></div>\r\n    <div class=\"menu_icon_bar\" [class.rotate]=\"showDropDown\"></div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/word-frequency/word-frequency.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/word-frequency/word-frequency.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"word_frequency\">\r\n  <h1>Word Frequency:</h1>\r\n  <p *ngFor=\"let word of getWordFrequency()\">\r\n    {{word[0]}} ({{word[1]}}), &nbsp;\r\n  </p>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/sentiment/languages sync recursive ^\\.\\/.*\\/index$": 
        /*!***************************************************************!*\
          !*** ./node_modules/sentiment/languages sync ^\.\/.*\/index$ ***!
          \***************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var map = {
                "./en/index": "./node_modules/sentiment/languages/en/index.js"
            };
            function webpackContext(req) {
                var id = webpackContextResolve(req);
                return __webpack_require__(id);
            }
            function webpackContextResolve(req) {
                if (!__webpack_require__.o(map, req)) {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                }
                return map[req];
            }
            webpackContext.keys = function webpackContextKeys() {
                return Object.keys(map);
            };
            webpackContext.resolve = webpackContextResolve;
            module.exports = webpackContext;
            webpackContext.id = "./node_modules/sentiment/languages sync recursive ^\\.\\/.*\\/index$";
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#container {\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  background: url('background.png') center black;\n  background-size: cover;\n}\n\n#data_container {\n  width: 100%;\n  text-align: center;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  overflow-y: scroll;\n}\n\n@media screen and (min-width: 700px) {\n  #data_container {\n    position: relative;\n    float: right;\n    margin-left: 22em;\n    height: 100vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFw4cHNjb1xcRG9jdW1lbnRzXFxHaXRIdWJcXFRveGljaXR5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhDQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENFO0VBTkY7SUFPSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGFBQUE7RUNFRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC5wbmcnKSBjZW50ZXIgYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuI2RhdGFfY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMmVtO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbn1cclxuIiwiI2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLnBuZ1wiKSBjZW50ZXIgYmxhY2s7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbiNkYXRhX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgI2RhdGFfY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1sZWZ0OiAyMmVtO1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_reddit_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/reddit-api.service */ "./src/app/services/reddit-api.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(redditApiService) {
                    this.redditApiService = redditApiService;
                }
                // checks if subreddit data has been loaded
                AppComponent.prototype.dataAvailable = function () {
                    return this.redditApiService.comments !== undefined;
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _services_reddit_api_service__WEBPACK_IMPORTED_MODULE_2__["RedditApiService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_best_worst_words_best_worst_words_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/best-worst-words/best-worst-words.component */ "./src/app/components/best-worst-words/best-worst-words.component.ts");
            /* harmony import */ var _components_comments_comments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/comments/comments.component */ "./src/app/components/comments/comments.component.ts");
            /* harmony import */ var _components_score_header_score_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/score-header/score-header.component */ "./src/app/components/score-header/score-header.component.ts");
            /* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
            /* harmony import */ var _components_word_frequency_word_frequency_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/word-frequency/word-frequency.component */ "./src/app/components/word-frequency/word-frequency.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _components_best_worst_words_best_worst_words_component__WEBPACK_IMPORTED_MODULE_5__["BestWorstWordsComponent"],
                        _components_comments_comments_component__WEBPACK_IMPORTED_MODULE_6__["CommentsComponent"],
                        _components_score_header_score_header_component__WEBPACK_IMPORTED_MODULE_7__["ScoreHeaderComponent"],
                        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                        _components_word_frequency_word_frequency_component__WEBPACK_IMPORTED_MODULE_9__["WordFrequencyComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/best-worst-words/best-worst-words.component.scss": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/best-worst-words/best-worst-words.component.scss ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("p {\n  display: inline-block;\n  font-size: 28px;\n  margin: 0 1em;\n  line-height: 2;\n  color: white;\n}\n@media screen and (max-width: 700px) {\n  p {\n    display: block;\n    font-size: 20px;\n  }\n}\n#best_worst {\n  height: auto;\n  padding: 1.5em;\n  word-break: break-word;\n  background: #000000aa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iZXN0LXdvcnN0LXdvcmRzL0M6XFxVc2Vyc1xcOHBzY29cXERvY3VtZW50c1xcR2l0SHViXFxUb3hpY2l0eS9zcmNcXGFwcFxcY29tcG9uZW50c1xcYmVzdC13b3JzdC13b3Jkc1xcYmVzdC13b3JzdC13b3Jkcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9iZXN0LXdvcnN0LXdvcmRzL2Jlc3Qtd29yc3Qtd29yZHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYmVzdC13b3JzdC13b3Jkcy9DOlxcVXNlcnNcXDhwc2NvXFxEb2N1bWVudHNcXEdpdEh1YlxcVG94aWNpdHkvc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0RGO0FER0U7RUFQRjtJQVFJLGNBQUE7SUFDQSxlQUFBO0VDQUY7QUFDRjtBREdBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHFCRWxCYztBRGtCaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jlc3Qtd29yc3Qtd29yZHMvYmVzdC13b3JzdC13b3Jkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlcyc7XHJcblxyXG5wIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIG1hcmdpbjogMCAxZW07XHJcbiAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4jYmVzdF93b3JzdCB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEuNWVtO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgYmFja2dyb3VuZDogJGRpdl9jb2xvcl9vbmU7XHJcbn1cclxuIiwicCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW46IDAgMWVtO1xuICBsaW5lLWhlaWdodDogMjtcbiAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgcCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5cbiNiZXN0X3dvcnN0IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxLjVlbTtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMGFhO1xufSIsIi8vIGNvbG9yc1xyXG4kZGl2X2NvbG9yX29uZTogIzAwMDAwMGFhO1xyXG4kZGl2X2NvbG9yX3R3bzogIzExMTExMWFhO1xyXG5cclxuLy8gc2NyZWVuIGN1dG9mZlxyXG4kbW9iaWxlX2N1dG9mZjogNzAwcHg7XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/best-worst-words/best-worst-words.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/best-worst-words/best-worst-words.component.ts ***!
          \***************************************************************************/
        /*! exports provided: BestWorstWordsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestWorstWordsComponent", function () { return BestWorstWordsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_reddit_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/reddit-api.service */ "./src/app/services/reddit-api.service.ts");
            /* harmony import */ var _services_sentiment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sentiment.service */ "./src/app/services/sentiment.service.ts");
            var BestWorstWordsComponent = /** @class */ (function () {
                function BestWorstWordsComponent(redditApiService, sentimentService) {
                    this.redditApiService = redditApiService;
                    this.sentimentService = sentimentService;
                }
                // returns toxicity scale rating for word
                BestWorstWordsComponent.prototype.getRating = function (score) {
                    return this.sentimentService.getRating(score);
                };
                // returns least toxic word
                BestWorstWordsComponent.prototype.getBestWord = function () {
                    return this.redditApiService.bestWord;
                };
                // returns score of least toxic word
                BestWorstWordsComponent.prototype.getBestWordScore = function () {
                    return this.redditApiService.maxWordScore;
                };
                // returns most toxic word
                BestWorstWordsComponent.prototype.getWorstWord = function () {
                    return this.redditApiService.worstWord;
                };
                // returns score of most toxic words
                BestWorstWordsComponent.prototype.getWorstWordScore = function () {
                    return this.redditApiService.minWordScore;
                };
                return BestWorstWordsComponent;
            }());
            BestWorstWordsComponent.ctorParameters = function () { return [
                { type: _services_reddit_api_service__WEBPACK_IMPORTED_MODULE_2__["RedditApiService"] },
                { type: _services_sentiment_service__WEBPACK_IMPORTED_MODULE_3__["SentimentService"] }
            ]; };
            BestWorstWordsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-best-worst-words',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./best-worst-words.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/best-worst-words/best-worst-words.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./best-worst-words.component.scss */ "./src/app/components/best-worst-words/best-worst-words.component.scss")).default]
                })
            ], BestWorstWordsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/comments/comments.component.scss": 
        /*!*************************************************************!*\
          !*** ./src/app/components/comments/comments.component.scss ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#comments_header {\n  text-align: center;\n  color: white;\n  padding: 2em 2em 0 2em;\n  background: #000000aa;\n}\n#comments_header h1 {\n  font-size: 28px;\n  font-weight: normal;\n}\n@media screen and (max-width: 700px) {\n  #comments_header h1 {\n    font-size: 20px;\n  }\n}\n.comment {\n  padding: 2em;\n  word-break: break-word;\n  line-height: 2;\n}\n.comment p {\n  color: white;\n  font-size: 20px;\n}\n.comment:nth-child(even) {\n  background: #000000aa;\n}\n.comment:nth-child(odd) {\n  background: #111111aa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50cy9DOlxcVXNlcnNcXDhwc2NvXFxEb2N1bWVudHNcXEdpdEh1YlxcVG94aWNpdHkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbW1lbnRzXFxjb21tZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50cy9DOlxcVXNlcnNcXDhwc2NvXFxEb2N1bWVudHNcXEdpdEh1YlxcVG94aWNpdHkvc3JjXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJDTGM7QUNJaEI7QUZHRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBRURKO0FGR0k7RUFKRjtJQUtJLGVBQUE7RUVBSjtBQUNGO0FGSUE7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FFREY7QUZHRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FFREo7QUZJRTtFQUNFLHFCQzVCWTtBQzBCaEI7QUZLRTtFQUNFLHFCQy9CWTtBQzRCaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcclxuXHJcbiNjb21tZW50c19oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMmVtIDJlbSAwIDJlbTtcclxuICBiYWNrZ3JvdW5kOiAkZGl2X2NvbG9yX29uZTtcclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29tbWVudCB7XHJcbiAgcGFkZGluZzogMmVtO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgbGluZS1oZWlnaHQ6IDI7XHJcblxyXG4gIHAge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgJjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZDogJGRpdl9jb2xvcl9vbmU7XHJcbiAgfVxyXG5cclxuICAmOm50aC1jaGlsZChvZGQpIHtcclxuICAgIGJhY2tncm91bmQ6ICRkaXZfY29sb3JfdHdvO1xyXG4gIH1cclxufVxyXG4iLCIvLyBjb2xvcnNcclxuJGRpdl9jb2xvcl9vbmU6ICMwMDAwMDBhYTtcclxuJGRpdl9jb2xvcl90d286ICMxMTExMTFhYTtcclxuXHJcbi8vIHNjcmVlbiBjdXRvZmZcclxuJG1vYmlsZV9jdXRvZmY6IDcwMHB4O1xyXG4iLCIjY29tbWVudHNfaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJlbSAyZW0gMCAyZW07XG4gIGJhY2tncm91bmQ6ICMwMDAwMDBhYTtcbn1cbiNjb21tZW50c19oZWFkZXIgaDEge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAjY29tbWVudHNfaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cblxuLmNvbW1lbnQge1xuICBwYWRkaW5nOiAyZW07XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuLmNvbW1lbnQgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNvbW1lbnQ6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMGFhO1xufVxuLmNvbW1lbnQ6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kOiAjMTExMTExYWE7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/comments/comments.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/components/comments/comments.component.ts ***!
          \***********************************************************/
        /*! exports provided: CommentsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function () { return CommentsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_reddit_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/reddit-api.service */ "./src/app/services/reddit-api.service.ts");
            /* harmony import */ var _services_sentiment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sentiment.service */ "./src/app/services/sentiment.service.ts");
            var CommentsComponent = /** @class */ (function () {
                function CommentsComponent(redditApiService, sentimentService) {
                    this.redditApiService = redditApiService;
                    this.sentimentService = sentimentService;
                }
                // returns subreddit comments
                CommentsComponent.prototype.getComments = function () {
                    return this.redditApiService.comments;
                };
                // returns rating for comment
                CommentsComponent.prototype.getRating = function (score) {
                    return this.sentimentService.getRating(score);
                };
                return CommentsComponent;
            }());
            CommentsComponent.ctorParameters = function () { return [
                { type: _services_reddit_api_service__WEBPACK_IMPORTED_MODULE_2__["RedditApiService"] },
                { type: _services_sentiment_service__WEBPACK_IMPORTED_MODULE_3__["SentimentService"] }
            ]; };
            CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-comments',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/comments/comments.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./comments.component.scss */ "./src/app/components/comments/comments.component.scss")).default]
                })
            ], CommentsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/score-header/score-header.component.scss": 
        /*!*********************************************************************!*\
          !*** ./src/app/components/score-header/score-header.component.scss ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("p {\n  display: inline-block;\n  font-size: 28px;\n  line-height: 2;\n  margin: 0 1em;\n  color: white;\n}\n@media screen and (max-width: 700px) {\n  p {\n    display: block;\n    font-size: 20px;\n  }\n}\n#score_header {\n  height: auto;\n  text-align: center;\n  padding: 1.5em;\n  word-break: break-word;\n  background: #111111aa;\n}\n@media screen and (max-width: 700px) {\n  #score_header {\n    padding-top: 12em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY29yZS1oZWFkZXIvQzpcXFVzZXJzXFw4cHNjb1xcRG9jdW1lbnRzXFxHaXRIdWJcXFRveGljaXR5L3NyY1xcYXBwXFxjb21wb25lbnRzXFxzY29yZS1oZWFkZXJcXHNjb3JlLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zY29yZS1oZWFkZXIvc2NvcmUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Njb3JlLWhlYWRlci9DOlxcVXNlcnNcXDhwc2NvXFxEb2N1bWVudHNcXEdpdEh1YlxcVG94aWNpdHkvc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0RGO0FER0U7RUFQRjtJQVFJLGNBQUE7SUFDQSxlQUFBO0VDQUY7QUFDRjtBREdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJFbEJjO0FEa0JoQjtBREVFO0VBUEY7SUFRSSxpQkFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Njb3JlLWhlYWRlci9zY29yZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMnO1xyXG5cclxucCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBsaW5lLWhlaWdodDogMjtcclxuICBtYXJnaW46IDAgMWVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuI3Njb3JlX2hlYWRlciB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxLjVlbTtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGJhY2tncm91bmQ6ICRkaXZfY29sb3JfdHdvO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgcGFkZGluZy10b3A6IDEyZW07XHJcbiAgfVxyXG59XHJcbiIsInAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIG1hcmdpbjogMCAxZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIHAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuXG4jc2NvcmVfaGVhZGVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBiYWNrZ3JvdW5kOiAjMTExMTExYWE7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAjc2NvcmVfaGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMTJlbTtcbiAgfVxufSIsIi8vIGNvbG9yc1xyXG4kZGl2X2NvbG9yX29uZTogIzAwMDAwMGFhO1xyXG4kZGl2X2NvbG9yX3R3bzogIzExMTExMWFhO1xyXG5cclxuLy8gc2NyZWVuIGN1dG9mZlxyXG4kbW9iaWxlX2N1dG9mZjogNzAwcHg7XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/score-header/score-header.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/components/score-header/score-header.component.ts ***!
          \*******************************************************************/
        /*! exports provided: ScoreHeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreHeaderComponent", function () { return ScoreHeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_sentiment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sentiment.service */ "./src/app/services/sentiment.service.ts");
            /* harmony import */ var _services_reddit_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/reddit-api.service */ "./src/app/services/reddit-api.service.ts");
            var ScoreHeaderComponent = /** @class */ (function () {
                function ScoreHeaderComponent(redditApiService, sentimentService) {
                    this.redditApiService = redditApiService;
                    this.sentimentService = sentimentService;
                }
                // returns rating under toxicity scale
                ScoreHeaderComponent.prototype.getRating = function (score) {
                    return this.sentimentService.getRating(score);
                };
                // returns subreddit name
                ScoreHeaderComponent.prototype.getSubreddit = function () {
                    return this.redditApiService.subreddit;
                };
                // returns average sentiment score for subreddit as a string
                ScoreHeaderComponent.prototype.getAverageScoreAsString = function () {
                    return this.getAverageScore().toFixed(3);
                };
                // returns average sentiment score for subreddit
                ScoreHeaderComponent.prototype.getAverageScore = function () {
                    return this.redditApiService.averageScore;
                };
                return ScoreHeaderComponent;
            }());
            ScoreHeaderComponent.ctorParameters = function () { return [
                { type: _services_reddit_api_service__WEBPACK_IMPORTED_MODULE_3__["RedditApiService"] },
                { type: _services_sentiment_service__WEBPACK_IMPORTED_MODULE_2__["SentimentService"] }
            ]; };
            ScoreHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-score-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./score-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/score-header/score-header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./score-header.component.scss */ "./src/app/components/score-header/score-header.component.scss")).default]
                })
            ], ScoreHeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/components/sidebar/sidebar.component.scss": 
        /*!***********************************************************!*\
          !*** ./src/app/components/sidebar/sidebar.component.scss ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#description {\n  margin: 5em auto 0 auto;\n  text-align: left;\n  line-height: 1.5em;\n  width: 80%;\n}\n@media screen and (max-width: 700px) {\n  #description {\n    height: 0;\n    overflow: hidden;\n    text-align: center;\n    margin: 0 auto 0 auto;\n    transition: 0.3s;\n  }\n}\n#sidebar {\n  z-index: 1;\n  position: fixed;\n  background: black;\n  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.5);\n  text-align: center;\n  color: #cccccc;\n}\n@media screen and (min-width: 700px) {\n  #sidebar {\n    float: left;\n    width: 22em;\n    height: 100vh;\n  }\n}\n@media screen and (max-width: 700px) {\n  #sidebar {\n    top: 0;\n    border-radius: 1em;\n    margin: 1em;\n    height: 10em;\n    transition: 0.3s;\n  }\n}\n#sidebar img {\n  width: 80%;\n  margin-top: 5em;\n}\n@media screen and (max-width: 700px) {\n  #sidebar img {\n    margin-top: 1em;\n    height: 3em;\n  }\n}\n#sidebar input {\n  width: 80%;\n  margin-top: 5em;\n  padding: 0.5em;\n  border-radius: 5em;\n  background: #333;\n  text-align: center;\n  color: white;\n}\n#sidebar input::-webkit-input-placeholder {\n  color: #bababa;\n}\n#sidebar input::-moz-placeholder {\n  color: #bababa;\n}\n#sidebar input::-ms-input-placeholder {\n  color: #bababa;\n}\n#sidebar input::placeholder {\n  color: #bababa;\n}\n#sidebar input:focus {\n  outline: none;\n  box-shadow: 0 0 4px gray;\n}\n@media screen and (max-width: 700px) {\n  #sidebar input {\n    margin: 0 0 1em 0;\n  }\n}\n@media screen and (min-width: 700px) {\n  .menu_icon {\n    display: none;\n  }\n}\n@media screen and (max-width: 700px) {\n  .menu_icon {\n    height: 2em;\n    width: 2em;\n    margin: 0 auto;\n  }\n}\n.menu_icon_bar {\n  width: 100%;\n  height: 0.2em;\n  background: white;\n  transition: 0.3s;\n}\n.menu_icon_bar:nth-child(1) {\n  margin-top: 0.6em;\n}\n.menu_icon_bar:nth-child(2) {\n  margin-top: 0.4em;\n}\n.show_description {\n  height: 24em !important;\n}\n.show_menu {\n  height: 34em !important;\n}\n.rotate:nth-child(1) {\n  transform: translate(0, 0.3em);\n}\n.rotate:nth-child(2) {\n  transform: translate(0, -0.3em);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL0M6XFxVc2Vyc1xcOHBzY29cXERvY3VtZW50c1xcR2l0SHViXFxUb3hpY2l0eS9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2lkZWJhclxcc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDREY7QURHRTtFQU5GO0lBT0ksU0FBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQkFBQTtJQUNBLGdCQUFBO0VDQUY7QUFDRjtBREdBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQUY7QURFRTtFQVJGO0lBU0ksV0FBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0VDQ0Y7QUFDRjtBRENFO0VBZEY7SUFlSSxNQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VDRUY7QUFDRjtBREFFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNFSjtBREFJO0VBSkY7SUFLSSxlQUFBO0lBQ0EsV0FBQTtFQ0dKO0FBQ0Y7QURBRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNFSjtBREFJO0VBQ0UsY0FBQTtBQ0VOO0FESEk7RUFDRSxjQUFBO0FDRU47QURISTtFQUNFLGNBQUE7QUNFTjtBREhJO0VBQ0UsY0FBQTtBQ0VOO0FEQ0k7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7QUNDTjtBREVJO0VBbEJGO0lBbUJJLGlCQUFBO0VDQ0o7QUFDRjtBRElFO0VBREY7SUFFSSxhQUFBO0VDQUY7QUFDRjtBREVFO0VBTEY7SUFNSSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUNDRjtBQUNGO0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBRENFO0VBQ0UsaUJBQUE7QUNDSjtBREVFO0VBQ0UsaUJBQUE7QUNBSjtBRElBO0VBQ0UsdUJBQUE7QUNERjtBRElBO0VBQ0UsdUJBQUE7QUNERjtBREtFO0VBQ0UsOEJBQUE7QUNGSjtBREtFO0VBQ0UsK0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcclxuXHJcbiNkZXNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luOiA1ZW0gYXV0byAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgd2lkdGg6IDgwJTtcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZV9jdXRvZmYpIHtcclxuICAgIGhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIH1cclxufVxyXG5cclxuI3NpZGViYXIge1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIGJveC1zaGFkb3c6IDVweCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUwKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtb2JpbGVfY3V0b2ZmKSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyMmVtO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGVfY3V0b2ZmKSB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIGhlaWdodDogMTBlbTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi10b3A6IDVlbTtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlX2N1dG9mZikge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgIGhlaWdodDogM2VtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi10b3A6IDVlbTtcclxuICAgIHBhZGRpbmc6IC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6ICNiYWJhYmE7XHJcbiAgICB9XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA0cHggZ3JheTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlX2N1dG9mZikge1xyXG4gICAgICBtYXJnaW46IDAgMCAxZW0gMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tZW51X2ljb24ge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtb2JpbGVfY3V0b2ZmKSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZV9jdXRvZmYpIHtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLm1lbnVfaWNvbl9iYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMC4yZW07XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuXHJcbiAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgbWFyZ2luLXRvcDogLjZlbTtcclxuICB9XHJcblxyXG4gICY6bnRoLWNoaWxkKDIpIHtcclxuICAgIG1hcmdpbi10b3A6IC40ZW07XHJcbiAgfVxyXG59XHJcblxyXG4uc2hvd19kZXNjcmlwdGlvbiB7XHJcbiAgaGVpZ2h0OiAyNGVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaG93X21lbnUge1xyXG4gIGhlaWdodDogMzRlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm90YXRlIHtcclxuICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwLjNlbSk7XHJcbiAgfVxyXG5cclxuICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMC4zZW0pO1xyXG4gIH1cclxufVxyXG4iLCIjZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDVlbSBhdXRvIDAgYXV0bztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB3aWR0aDogODAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgI2Rlc2NyaXB0aW9uIHtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gIH1cbn1cblxuI3NpZGViYXIge1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBib3gtc2hhZG93OiA1cHggMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2NjY2NjYztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICNzaWRlYmFyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMjJlbTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAjc2lkZWJhciB7XG4gICAgdG9wOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBoZWlnaHQ6IDEwZW07XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgfVxufVxuI3NpZGViYXIgaW1nIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogNWVtO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgI3NpZGViYXIgaW1nIHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgaGVpZ2h0OiAzZW07XG4gIH1cbn1cbiNzaWRlYmFyIGlucHV0IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogNWVtO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNWVtO1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNzaWRlYmFyIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYmFiYWJhO1xufVxuI3NpZGViYXIgaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAgNHB4IGdyYXk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAjc2lkZWJhciBpbnB1dCB7XG4gICAgbWFyZ2luOiAwIDAgMWVtIDA7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgLm1lbnVfaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLm1lbnVfaWNvbiB7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2lkdGg6IDJlbTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuXG4ubWVudV9pY29uX2JhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDAuMmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5tZW51X2ljb25fYmFyOm50aC1jaGlsZCgxKSB7XG4gIG1hcmdpbi10b3A6IDAuNmVtO1xufVxuLm1lbnVfaWNvbl9iYXI6bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLXRvcDogMC40ZW07XG59XG5cbi5zaG93X2Rlc2NyaXB0aW9uIHtcbiAgaGVpZ2h0OiAyNGVtICFpbXBvcnRhbnQ7XG59XG5cbi5zaG93X21lbnUge1xuICBoZWlnaHQ6IDM0ZW0gIWltcG9ydGFudDtcbn1cblxuLnJvdGF0ZTpudGgtY2hpbGQoMSkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwLjNlbSk7XG59XG4ucm90YXRlOm50aC1jaGlsZCgyKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0wLjNlbSk7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/sidebar/sidebar.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/components/sidebar/sidebar.component.ts ***!
          \*********************************************************/
        /*! exports provided: SidebarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () { return SidebarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_reddit_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/reddit-api.service */ "./src/app/services/reddit-api.service.ts");
            var SidebarComponent = /** @class */ (function () {
                function SidebarComponent(redditApiService) {
                    this.redditApiService = redditApiService;
                    this.showDropDown = false;
                    this.placeholder = 'Enter a subreddit';
                    this.createdBy = 'Created by Paul Scott using Angular';
                    this.lastUpdated = 'Last Updated 7 December 2019';
                    this.description = 'Toxicity performs sentiment analysis on a large sample of comments from a given subreddit. ' +
                        'The subreddit\'s "toxicity" is then rated using the following scale:';
                }
                // performs sentiment analysis on a given subreddit
                SidebarComponent.prototype.analyze = function () {
                    this.searchText = this.searchText.trim();
                    if (this.searchText.substr(0, 2) === 'r/') {
                        this.searchText = this.searchText.substr(2);
                    }
                    this.redditApiService.analyzeSubreddit(this.searchText);
                };
                // toggle drop down (only for mobile)
                SidebarComponent.prototype.toggleMenu = function () {
                    this.showDropDown = !this.showDropDown;
                };
                return SidebarComponent;
            }());
            SidebarComponent.ctorParameters = function () { return [
                { type: _services_reddit_api_service__WEBPACK_IMPORTED_MODULE_2__["RedditApiService"] }
            ]; };
            SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sidebar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/sidebar/sidebar.component.scss")).default]
                })
            ], SidebarComponent);
            /***/ 
        }),
        /***/ "./src/app/components/word-frequency/word-frequency.component.scss": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/word-frequency/word-frequency.component.scss ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  text-align: center;\n  font-size: 28px;\n  color: white;\n  font-weight: normal;\n  margin-bottom: 32px;\n}\n@media screen and (max-width: 700px) {\n  h1 {\n    font-size: 20px;\n  }\n}\np {\n  display: inline;\n  color: white;\n  line-height: 2;\n  font-size: 20px;\n}\n#word_frequency {\n  background: #111111aa;\n  height: auto;\n  padding: 2em;\n  overflow-y: auto;\n  text-align: left;\n  word-break: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93b3JkLWZyZXF1ZW5jeS9DOlxcVXNlcnNcXDhwc2NvXFxEb2N1bWVudHNcXEdpdEh1YlxcVG94aWNpdHkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHdvcmQtZnJlcXVlbmN5XFx3b3JkLWZyZXF1ZW5jeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy93b3JkLWZyZXF1ZW5jeS93b3JkLWZyZXF1ZW5jeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy93b3JkLWZyZXF1ZW5jeS9DOlxcVXNlcnNcXDhwc2NvXFxEb2N1bWVudHNcXEdpdEh1YlxcVG94aWNpdHkvc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDREY7QURHRTtFQVBGO0lBUUksZUFBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNBRjtBREdBO0VBQ0UscUJFcEJjO0VGcUJkLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dvcmQtZnJlcXVlbmN5L3dvcmQtZnJlcXVlbmN5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGVfY3V0b2ZmKSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5wIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGxpbmUtaGVpZ2h0OiAyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuI3dvcmRfZnJlcXVlbmN5IHtcclxuICBiYWNrZ3JvdW5kOiAkZGl2X2NvbG9yX3R3bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMmVtO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcbiIsImgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cblxucCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jd29yZF9mcmVxdWVuY3kge1xuICBiYWNrZ3JvdW5kOiAjMTExMTExYWE7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMmVtO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufSIsIi8vIGNvbG9yc1xyXG4kZGl2X2NvbG9yX29uZTogIzAwMDAwMGFhO1xyXG4kZGl2X2NvbG9yX3R3bzogIzExMTExMWFhO1xyXG5cclxuLy8gc2NyZWVuIGN1dG9mZlxyXG4kbW9iaWxlX2N1dG9mZjogNzAwcHg7XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/word-frequency/word-frequency.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/word-frequency/word-frequency.component.ts ***!
          \***********************************************************************/
        /*! exports provided: WordFrequencyComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordFrequencyComponent", function () { return WordFrequencyComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_reddit_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/reddit-api.service */ "./src/app/services/reddit-api.service.ts");
            var WordFrequencyComponent = /** @class */ (function () {
                function WordFrequencyComponent(redditApiService) {
                    this.redditApiService = redditApiService;
                }
                // returns word frequency list
                WordFrequencyComponent.prototype.getWordFrequency = function () {
                    return this.redditApiService.wordFreqList;
                };
                return WordFrequencyComponent;
            }());
            WordFrequencyComponent.ctorParameters = function () { return [
                { type: _services_reddit_api_service__WEBPACK_IMPORTED_MODULE_2__["RedditApiService"] }
            ]; };
            WordFrequencyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-word-frequency',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./word-frequency.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/word-frequency/word-frequency.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./word-frequency.component.scss */ "./src/app/components/word-frequency/word-frequency.component.scss")).default]
                })
            ], WordFrequencyComponent);
            /***/ 
        }),
        /***/ "./src/app/objects/Comment.ts": 
        /*!************************************!*\
          !*** ./src/app/objects/Comment.ts ***!
          \************************************/
        /*! exports provided: Comment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function () { return Comment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Comment = /** @class */ (function () {
                function Comment(text, score) {
                    this.text = text;
                    this.score = score;
                }
                return Comment;
            }());
            /***/ 
        }),
        /***/ "./src/app/services/reddit-api.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/services/reddit-api.service.ts ***!
          \************************************************/
        /*! exports provided: RedditApiService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedditApiService", function () { return RedditApiService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _objects_Comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../objects/Comment */ "./src/app/objects/Comment.ts");
            /* harmony import */ var _sentiment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sentiment.service */ "./src/app/services/sentiment.service.ts");
            /* harmony import */ var stopword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stopword */ "./node_modules/stopword/lib/stopword.js");
            /* harmony import */ var stopword__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(stopword__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var snoowrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! snoowrap */ "./node_modules/snoowrap/dist/snoowrap.js");
            /* harmony import */ var snoowrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(snoowrap__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
            /* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_6__);
            var RedditApiService = /** @class */ (function () {
                function RedditApiService(sentimentService) {
                    this.sentimentService = sentimentService;
                    this.initApi();
                }
                RedditApiService.prototype.initApi = function () {
                    var _this = this;
                    // @ts-ignore
                    snoowrap__WEBPACK_IMPORTED_MODULE_5__["fromApplicationOnlyAuth"]({
                        clientId: 'eYt3lQ43V4Dgcg',
                        deviceId: uuid_v1__WEBPACK_IMPORTED_MODULE_6__()
                    }).then(function (r) {
                        _this.snoowrap = r;
                    });
                };
                RedditApiService.prototype.analyzeSubreddit = function (subreddit) {
                    var _this = this;
                    this.comments = [];
                    this.subreddit = subreddit;
                    this.getHotPostsFromSubreddit(subreddit)
                        .then(function (posts) {
                        var e_1, _a;
                        try {
                            for (var posts_1 = __values(posts), posts_1_1 = posts_1.next(); !posts_1_1.done; posts_1_1 = posts_1.next()) {
                                var post = posts_1_1.value;
                                _this.getPostComments(post.id)
                                    .then(function (expandedPost) {
                                    var e_2, _a;
                                    try {
                                        for (var _b = (e_2 = void 0, __values(expandedPost.comments)), _c = _b.next(); !_c.done; _c = _b.next()) {
                                            var comment = _c.value;
                                            _this.comments.push(new _objects_Comment__WEBPACK_IMPORTED_MODULE_2__["Comment"](comment.body, _this.sentimentService.calculateScore(comment.body)));
                                        }
                                    }
                                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                    finally {
                                        try {
                                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                        }
                                        finally { if (e_2) throw e_2.error; }
                                    }
                                    _this.calculateAverageScore();
                                    _this.sortCommentsBestToWorst();
                                    _this.calculateWordFrequency();
                                });
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (posts_1_1 && !posts_1_1.done && (_a = posts_1.return)) _a.call(posts_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                    });
                };
                RedditApiService.prototype.getHotPostsFromSubreddit = function (subreddit) {
                    return this.snoowrap.getSubreddit(subreddit).getHot({ limit: 10 });
                };
                RedditApiService.prototype.getPostComments = function (postId) {
                    return this.snoowrap.getSubmission(postId).expandReplies({ limit: 20, depth: 1 });
                };
                RedditApiService.prototype.calculateAverageScore = function () {
                    var e_3, _a;
                    this.averageScore = 0;
                    try {
                        for (var _b = __values(this.comments), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var comment = _c.value;
                            this.averageScore += comment.score;
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    this.averageScore = this.averageScore / this.comments.length;
                };
                RedditApiService.prototype.calculateWordFrequency = function () {
                    var e_4, _a, e_5, _b;
                    this.maxWordScore = null;
                    this.minWordScore = null;
                    var wordMap = new Map();
                    try {
                        for (var _c = __values(this.comments), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var comment = _d.value;
                            var formattedComment = comment.text.replace(/[“”\/\[\].,#!$%^&*;:{}=\-_`~()]/g, '').toLowerCase();
                            var split = stopword__WEBPACK_IMPORTED_MODULE_4__["removeStopwords"](formattedComment.split(' '));
                            try {
                                for (var split_1 = (e_5 = void 0, __values(split)), split_1_1 = split_1.next(); !split_1_1.done; split_1_1 = split_1.next()) {
                                    var word = split_1_1.value;
                                    word = word.trim();
                                    if (word.length <= 25 && word.length > 0) {
                                        // calculate best and worst words
                                        var score = this.sentimentService.calculateScore(word);
                                        if (!(this.maxWordScore) || score > this.maxWordScore) {
                                            this.bestWord = word;
                                            this.maxWordScore = score;
                                        }
                                        if (!(this.minWordScore) || score < this.minWordScore) {
                                            this.worstWord = word;
                                            this.minWordScore = score;
                                        }
                                        // count words
                                        if (wordMap.has(word)) {
                                            var count = wordMap.get(word);
                                            wordMap.set(word, count + 1);
                                        }
                                        else {
                                            wordMap.set(word, 1);
                                        }
                                    }
                                }
                            }
                            catch (e_5_1) { e_5 = { error: e_5_1 }; }
                            finally {
                                try {
                                    if (split_1_1 && !split_1_1.done && (_b = split_1.return)) _b.call(split_1);
                                }
                                finally { if (e_5) throw e_5.error; }
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                    // remove words with count of one
                    this.wordFreqList = Array.from(wordMap);
                    for (var i = 0; i < this.wordFreqList.length; i++) {
                        if (this.wordFreqList[i][1] === 1) {
                            this.wordFreqList.splice(i, 1);
                            i--;
                        }
                    }
                    // sort and return word list
                    this.wordFreqList.sort(function (a, b) {
                        return b[1] - a[1];
                    });
                };
                RedditApiService.prototype.sortCommentsBestToWorst = function () {
                    this.comments.sort(function (a, b) {
                        return b.score - a.score;
                    });
                };
                return RedditApiService;
            }());
            RedditApiService.ctorParameters = function () { return [
                { type: _sentiment_service__WEBPACK_IMPORTED_MODULE_3__["SentimentService"] }
            ]; };
            RedditApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], RedditApiService);
            /***/ 
        }),
        /***/ "./src/app/services/sentiment.service.ts": 
        /*!***********************************************!*\
          !*** ./src/app/services/sentiment.service.ts ***!
          \***********************************************/
        /*! exports provided: SentimentService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentimentService", function () { return SentimentService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var sentiment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sentiment */ "./node_modules/sentiment/lib/index.js");
            /* harmony import */ var sentiment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(sentiment__WEBPACK_IMPORTED_MODULE_2__);
            var SentimentService = /** @class */ (function () {
                function SentimentService() {
                }
                SentimentService.prototype.getRating = function (score) {
                    if (score >= 2) {
                        return 'Non-Toxic';
                    }
                    else if (score >= 1) {
                        return 'Very Positive';
                    }
                    else if (score >= 0.25) {
                        return 'Positive';
                    }
                    else if (score > -0.25) {
                        return 'Neutral';
                    }
                    else if (score > -1) {
                        return 'Negative';
                    }
                    else if (score > -2) {
                        return 'Very Negative';
                    }
                    else {
                        return 'Toxic';
                    }
                };
                SentimentService.prototype.calculateScore = function (str) {
                    var sentiment = new sentiment__WEBPACK_IMPORTED_MODULE_2__();
                    return sentiment.analyze(str).score;
                };
                return SentimentService;
            }());
            SentimentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], SentimentService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\8psco\Documents\GitHub\Toxicity\src\main.ts */ "./src/main.ts");
            /***/ 
        }),
        /***/ 1: 
        /*!*********************************!*\
          !*** harmony-reflect (ignored) ***!
          \*********************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        }),
        /***/ 2: 
        /*!**********************!*\
          !*** util (ignored) ***!
          \**********************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        }),
        /***/ 3: 
        /*!*********************************!*\
          !*** request-promise (ignored) ***!
          \*********************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        }),
        /***/ 4: 
        /*!**********************!*\
          !*** util (ignored) ***!
          \**********************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        }),
        /***/ 5: 
        /*!********************!*\
          !*** ws (ignored) ***!
          \********************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        }),
        /***/ 6: 
        /*!********************!*\
          !*** fs (ignored) ***!
          \********************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map