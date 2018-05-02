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
/******/ 		"backgroundlayerdropdown": 0
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
/******/ 	deferredModules.push([4,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/backgroundlayerdropdown.css":
/*!**********************************************!*\
  !*** ./examples/backgroundlayerdropdown.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./examples/backgroundlayerdropdown.css?");

/***/ }),

/***/ "./examples/backgroundlayerdropdown.js":
/*!*********************************************!*\
  !*** ./examples/backgroundlayerdropdown.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _backgroundlayerdropdown_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backgroundlayerdropdown.css */ \"./examples/backgroundlayerdropdown.css\");\n/* harmony import */ var _backgroundlayerdropdown_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backgroundlayerdropdown_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ngeo_source_AsitVD_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/source/AsitVD.js */ \"./src/source/AsitVD.js\");\n/* harmony import */ var _geoblocks_proj_src_EPSG_21781_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @geoblocks/proj/src/EPSG_21781.js */ \"./node_modules/@geoblocks/proj/src/EPSG_21781.js\");\n/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/Map.js */ \"./node_modules/ol/Map.js\");\n/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/View.js */ \"./node_modules/ol/View.js\");\n/* harmony import */ var ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/layer/Image.js */ \"./node_modules/ol/layer/Image.js\");\n/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/layer/Tile.js */ \"./node_modules/ol/layer/Tile.js\");\n/* harmony import */ var ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/layer/Vector.js */ \"./node_modules/ol/layer/Vector.js\");\n/* harmony import */ var ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/source/Vector.js */ \"./node_modules/ol/source/Vector.js\");\n/* harmony import */ var ol_source_ImageWMS_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/source/ImageWMS.js */ \"./node_modules/ol/source/ImageWMS.js\");\n/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngeo/map/module.js */ \"./src/map/module.js\");\nMainController.$inject = [\"$scope\"];\nBackgroundlayerController.$inject = [\"$http\", \"ngeoBackgroundLayerMgr\"];\n\n\n\n\n\n\n\n\n\n\n\n\nvar module = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('app', ['gettext', ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"].name]);\nmodule.run([\"$templateCache\", function ($templateCache) {\n  $templateCache.put('partials/backgroundlayerdropdown', __webpack_require__(/*! ./partials/backgroundlayerdropdown.html */ \"./examples/partials/backgroundlayerdropdown.html\"));\n}]);\nvar backgroundlayerComponent = {\n  bindings: {\n    'map': '=appBackgroundlayerMap'\n  },\n  templateUrl: 'partials/backgroundlayerdropdown',\n  controller: 'AppBackgroundlayerController'\n};\nmodule.component('appBackgroundlayer', backgroundlayerComponent);\n\nfunction BackgroundlayerController($http, ngeoBackgroundLayerMgr) {\n  var _this = this;\n\n  $http.get('data/backgroundlayers.json').then(function (resp) {\n    var bgLayers = resp.data;\n    _this.bgLayers = bgLayers;\n\n    _this.setLayer(bgLayers[0]);\n  });\n  this.map = null;\n  this.backgroundLayerMgr_ = ngeoBackgroundLayerMgr;\n}\n\nBackgroundlayerController.prototype.setLayer = function (layerSpec) {\n  if (!this.map) {\n    throw new Error('Missing map');\n  }\n\n  this.currentBgLayer = layerSpec;\n  var layer = this.createLayer_(layerSpec.name);\n  this.backgroundLayerMgr_.set(this.map, layer);\n};\n\nBackgroundlayerController.prototype.createLayer_ = function (layerName) {\n  if (layerName === 'blank') {\n    var layer = new ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n      source: new ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]()\n    });\n    layer.set('label', 'blank');\n    return layer;\n  }\n\n  var source = new ngeo_source_AsitVD_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    layer: layerName\n  });\n  return new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n    source: source\n  });\n};\n\nmodule.controller('AppBackgroundlayerController', BackgroundlayerController);\n\nfunction MainController($scope) {\n  var map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n      projection: _geoblocks_proj_src_EPSG_21781_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      resolutions: [1000, 500, 200, 100, 50, 20, 10, 5, 2.5, 2, 1, 0.5],\n      center: [600000, 200000],\n      zoom: 1\n    })\n  });\n  this.map = map;\n  var source = new ol_source_ImageWMS_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]({\n    projection: undefined,\n    url: 'https://wms.geo.admin.ch',\n    params: {\n      'LAYERS': 'ch.swisstopo.dreiecksvermaschung'\n    },\n    serverType: 'mapserver'\n  });\n  var overlay = new ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n    source: source\n  });\n  map.addLayer(overlay);\n}\n\nmodule.controller('MainController', MainController);\n/* harmony default export */ __webpack_exports__[\"default\"] = (module);\n\n//# sourceURL=webpack:///./examples/backgroundlayerdropdown.js?");

/***/ }),

/***/ "./examples/partials/backgroundlayerdropdown.html":
/*!********************************************************!*\
  !*** ./examples/partials/backgroundlayerdropdown.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(obj) {\nobj || (obj = {});\nvar __t, __p = '';\nwith (obj) {\n__p += '<div class=\"dropdown\">\\n  <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\\n    {{$ctrl.currentBgLayer.name}}\\n  </button>\\n  <ul class=\"dropdown-menu\" role=\"menu\">\\n    <li class=\"dropdown-item\" ng-repeat=\"layer in ::$ctrl.bgLayers\">\\n      <a href ng-click=\"$ctrl.setLayer(layer)\">{{::layer.name}}</a>\\n    </li>\\n  </ul>\\n</div>\\n';\n\n}\nreturn __p\n}\n\n//# sourceURL=webpack:///./examples/partials/backgroundlayerdropdown.html?");

/***/ }),

/***/ 4:
/*!********************************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/backgroundlayerdropdown.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./examples/common_dependencies.js */\"./examples/common_dependencies.js\");\n__webpack_require__(/*! ngeo/mainmodule.js */\"./src/mainmodule.js\");\nmodule.exports = __webpack_require__(/*! ./examples/backgroundlayerdropdown.js */\"./examples/backgroundlayerdropdown.js\");\n\n\n//# sourceURL=webpack:///multi_./examples/common_dependencies.js_ngeo/mainmodule.js_./examples/backgroundlayerdropdown.js?");

/***/ }),

/***/ "dll-reference vendor":
/*!*************************!*\
  !*** external "vendor" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = vendor;\n\n//# sourceURL=webpack:///external_%22vendor%22?");

/***/ })

/******/ });