/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"lidarprofile": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([15,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contribs/gmf/examples/lidarprofile.css":
/*!************************************************!*\
  !*** ./contribs/gmf/examples/lidarprofile.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./contribs/gmf/examples/lidarprofile.css?");

/***/ }),

/***/ "./contribs/gmf/examples/lidarprofile.js":
/*!***********************************************!*\
  !*** ./contribs/gmf/examples/lidarprofile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lidarprofile_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lidarprofile.css */ \"./contribs/gmf/examples/lidarprofile.css\");\n/* harmony import */ var _lidarprofile_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lidarprofile_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gmf_map_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gmf/map/component.js */ \"./contribs/gmf/src/map/component.js\");\n/* harmony import */ var gmf_lidarprofile_module_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gmf/lidarprofile/module.js */ \"./contribs/gmf/src/lidarprofile/module.js\");\n/* harmony import */ var _geoblocks_proj_src_EPSG_2056_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @geoblocks/proj/src/EPSG_2056.js */ \"./node_modules/@geoblocks/proj/src/EPSG_2056.js\");\n/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngeo/map/module.js */ \"./src/map/module.js\");\n/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/Map.js */ \"./node_modules/ol/Map.js\");\n/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/View.js */ \"./node_modules/ol/View.js\");\n/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/layer/Tile.js */ \"./node_modules/ol/layer/Tile.js\");\n/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/source/OSM.js */ \"./node_modules/ol/source/OSM.js\");\nMainController.$inject = [\"$scope\"];\n\n\n\n\n\n\n\n\n\n\nvar module = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('gmfapp', ['gettext', gmf_map_component_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].name, gmf_lidarprofile_module_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].name, ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].name]);\nmodule.value('pytreeLidarprofileJsonUrl', 'https://sitn.ne.ch/pytree');\n\nfunction MainController($scope) {\n  this.profileLine = null;\n  this.panelActivated = false;\n  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]()\n    })],\n    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n      projection: _geoblocks_proj_src_EPSG_2056_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n      resolutions: [200, 100, 50, 20, 10, 5, 2.5, 2, 1, 0.5],\n      center: [2551894, 1202362],\n      zoom: 3\n    })\n  });\n}\n\nmodule.controller('MainController', MainController);\n/* harmony default export */ __webpack_exports__[\"default\"] = (module);\n\n//# sourceURL=webpack:///./contribs/gmf/examples/lidarprofile.js?");

/***/ }),

/***/ 15:
/*!**********************************************************************************************************************!*\
  !*** multi ./contribs/gmf/examples/common_dependencies.js gmf/mainmodule.js ./contribs/gmf/examples/lidarprofile.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./contribs/gmf/examples/common_dependencies.js */\"./contribs/gmf/examples/common_dependencies.js\");\n__webpack_require__(/*! gmf/mainmodule.js */\"./contribs/gmf/src/mainmodule.js\");\nmodule.exports = __webpack_require__(/*! ./contribs/gmf/examples/lidarprofile.js */\"./contribs/gmf/examples/lidarprofile.js\");\n\n\n//# sourceURL=webpack:///multi_./contribs/gmf/examples/common_dependencies.js_gmf/mainmodule.js_./contribs/gmf/examples/lidarprofile.js?");

/***/ }),

/***/ "dll-reference vendor_e4544f9f18f52e898dc0":
/*!**********************************************!*\
  !*** external "vendor_e4544f9f18f52e898dc0" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = vendor_e4544f9f18f52e898dc0;\n\n//# sourceURL=webpack:///external_%22vendor_e4544f9f18f52e898dc0%22?");

/***/ })

/******/ });