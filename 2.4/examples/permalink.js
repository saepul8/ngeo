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
/******/ 		"permalink": 0
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
/******/ 	deferredModules.push([32,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/permalink.css":
/*!********************************!*\
  !*** ./examples/permalink.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./examples/permalink.js":
/*!*******************************!*\
  !*** ./examples/permalink.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _permalink_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permalink.css */ "./examples/permalink.css");
/* harmony import */ var _permalink_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_permalink_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngeo_format_FeatureHash_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/format/FeatureHash.js */ "./src/format/FeatureHash.js");
/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/map/module.js */ "./src/map/module.js");
/* harmony import */ var ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/misc/debounce.js */ "./src/misc/debounce.js");
/* harmony import */ var ngeo_misc_decorate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngeo/misc/decorate.js */ "./src/misc/decorate.js");
/* harmony import */ var ngeo_statemanager_module_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngeo/statemanager/module.js */ "./src/statemanager/module.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_interaction_Draw_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/interaction/Draw.js */ "./node_modules/ol/interaction/Draw.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/layer/Vector.js */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/source/Vector.js */ "./node_modules/ol/source/Vector.js");
/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/style/Stroke.js */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/style/Style.js */ "./node_modules/ol/style/Style.js");
DrawComponentController.$inject = ["$scope", "ngeoLocation"];
MapComponentController.$inject = ["ngeoLocation", "ngeoDebounce"];















var module = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('app', ['gettext', ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_3__["default"].name, ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_4__["default"].name, ngeo_statemanager_module_js__WEBPACK_IMPORTED_MODULE_6__["default"].name]);
var mapComponent = {
  controller: 'AppMapController as ctrl',
  bindings: {
    'map': '=appMap'
  },
  template: '<div ngeo-map=ctrl.map></div>'
};
module.component('appMap', mapComponent);

function MapComponentController(ngeoLocation, ngeoDebounce) {
  this.map;
  this.ngeoLocation_ = ngeoLocation;
  this.ngeoDebounce_ = ngeoDebounce;
}

module.controller('AppMapController', MapComponentController);

MapComponentController.prototype.$onInit = function () {
  var _this = this;

  var view = this.map.getView();
  var zoom_ = this.ngeoLocation_.getParam('z');
  var zoom = zoom_ !== undefined ? +zoom_ : 4;
  var x = this.ngeoLocation_.getParam('x');
  var y = this.ngeoLocation_.getParam('y');
  var center = x !== undefined && y !== undefined ? [+x, +y] : [0, 0];
  view.setCenter(center);
  view.setZoom(zoom);
  this.ngeoLocation_.updateParams({
    'z': "" + zoom,
    'x': "" + Math.round(center[0]),
    'y': "" + Math.round(center[1])
  });
  view.on('propertychange', this.ngeoDebounce_(function (e) {
    var center = view.getCenter();
    var params = {
      'z': "" + view.getZoom(),
      'x': "" + Math.round(center[0]),
      'y': "" + Math.round(center[1])
    };

    _this.ngeoLocation_.updateParams(params);
  }, 300, true));
};

var drawComponent = {
  controller: 'AppDrawController as ctrl',
  bindings: {
    'map': '=appDrawMap',
    'layer': '=appDrawLayer'
  },
  template: '<label>Enable drawing:' + '<input type="checkbox" ng-model="ctrl.interaction.active" />' + '</label><br>' + '<button ng-click="ctrl.clearLayer()">Clear layer</button>'
};
module.component('appDraw', drawComponent);

function DrawComponentController($scope, ngeoLocation) {
  this.map;
  this.layer;
  this.ngeoLocation_ = ngeoLocation;
  this.scope_ = $scope;
  this.featureSeq_ = 0;
  this.interaction;
}

DrawComponentController.prototype.$onInit = function () {
  var _this2 = this;

  var vectorSource = this.layer.getSource();
  this.interaction = new ol_interaction_Draw_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
    type: 'LineString',
    source: vectorSource
  });
  this.interaction.setActive(false);
  this.map.addInteraction(this.interaction);
  Object(ngeo_misc_decorate_js__WEBPACK_IMPORTED_MODULE_5__["interactionDecoration"])(this.interaction);
  this.interaction.on('drawend', function (e) {
    e.feature.set('id', ++_this2.featureSeq_);
  });
  var fhFormat = new ngeo_format_FeatureHash_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
  vectorSource.on('addfeature', function (e) {
    var feature = e.feature;
    feature.setStyle(new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
      stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
        color: [255, 0, 0, 1],
        width: 2
      })
    }));
    var features = vectorSource.getFeatures();
    var encodedFeatures = fhFormat.writeFeatures(features);

    _this2.scope_.$applyAsync(function () {
      _this2.ngeoLocation_.updateParams({
        'features': encodedFeatures
      });
    });
  });
  var encodedFeatures = this.ngeoLocation_.getParam('features');

  if (encodedFeatures !== undefined) {
    var features = fhFormat.readFeatures(encodedFeatures);
    this.featureSeq_ = features.length;
    vectorSource.addFeatures(features);
  }
};

DrawComponentController.prototype.clearLayer = function () {
  this.layer.getSource().clear(true);
  this.featureSeq_ = 0;
  this.ngeoLocation_.deleteParam('features');
};

module.controller('AppDrawController', DrawComponentController);

function MainController() {
  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_11__["default"]()
    })]
  });
  var vectorSource = new ol_source_Vector_js__WEBPACK_IMPORTED_MODULE_12__["default"]();
  this.vectorLayer = new ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
    source: vectorSource
  });
  this.vectorLayer.setMap(this.map);
}

module.controller('MainController', MainController);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ "./src/format/FeatureHash.js":
/*!***********************************!*\
  !*** ./src/format/FeatureHash.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/format/FeatureProperties.js */ "./src/format/FeatureProperties.js");
/* harmony import */ var ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/format/FeatureHashStyleType.js */ "./src/format/FeatureHashStyleType.js");
/* harmony import */ var ngeo_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/utils.js */ "./src/utils.js");
/* harmony import */ var ol_Feature_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/Feature.js */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_format_Feature_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/format/Feature.js */ "./node_modules/ol/format/Feature.js");
/* harmony import */ var ol_format_TextFeature_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/format/TextFeature.js */ "./node_modules/ol/format/TextFeature.js");
/* harmony import */ var ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/geom/GeometryLayout.js */ "./node_modules/ol/geom/GeometryLayout.js");
/* harmony import */ var ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/geom/LineString.js */ "./node_modules/ol/geom/LineString.js");
/* harmony import */ var ol_geom_MultiLineString_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/geom/MultiLineString.js */ "./node_modules/ol/geom/MultiLineString.js");
/* harmony import */ var ol_geom_MultiPoint_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/geom/MultiPoint.js */ "./node_modules/ol/geom/MultiPoint.js");
/* harmony import */ var ol_geom_MultiPolygon_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/geom/MultiPolygon.js */ "./node_modules/ol/geom/MultiPolygon.js");
/* harmony import */ var ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/geom/Point.js */ "./node_modules/ol/geom/Point.js");
/* harmony import */ var ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/geom/Polygon.js */ "./node_modules/ol/geom/Polygon.js");
/* harmony import */ var ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/style/Circle.js */ "./node_modules/ol/style/Circle.js");
/* harmony import */ var ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/style/Fill.js */ "./node_modules/ol/style/Fill.js");
/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/style/Stroke.js */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/style/Style.js */ "./node_modules/ol/style/Style.js");
/* harmony import */ var ol_style_Text_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ol/style/Text.js */ "./node_modules/ol/style/Text.js");
function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



















var LegacyProperties_ = {};
var DEFAULT_ACCURACY = 0.1;
var StyleTypes_ = {
  'LineString': ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__["default"].LINE_STRING,
  'Point': ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__["default"].POINT,
  'Polygon': ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__["default"].POLYGON,
  'MultiLineString': ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__["default"].LINE_STRING,
  'MultiPoint': ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__["default"].POINT,
  'MultiPolygon': ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__["default"].POLYGON
};
var CHAR64_ = '.-_!*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghjkmnpqrstuvwxyz';
var GEOMETRY_READERS_ = {
  'P': readMultiPointGeometry_,
  'L': readMultiLineStringGeometry_,
  'A': readMultiPolygonGeometry_,
  'l': readLineStringGeometry_,
  'p': readPointGeometry_,
  'a': readPolygonGeometry_
};
var GEOMETRY_WRITERS_ = {
  'MultiLineString': writeMultiLineStringGeometry_,
  'MultiPoint': writeMultiPointGeometry_,
  'MultiPolygon': writeMultiPolygonGeometry_,
  'LineString': writeLineStringGeometry_,
  'Point': writePointGeometry_,
  'Polygon': writePolygonGeometry_
};

var _default = function (_olFormatTextFeature) {
  _inheritsLoose(_default, _olFormatTextFeature);

  var _super = _createSuper(_default);

  function _default(opt_options) {
    var _this;

    _this = _olFormatTextFeature.call(this) || this;
    var options = opt_options !== undefined ? opt_options : {};
    _this.accuracy_ = options.accuracy !== undefined ? options.accuracy : DEFAULT_ACCURACY;
    _this.encodeStyles_ = options.encodeStyles !== undefined ? options.encodeStyles : true;
    _this.propertiesFunction_ = options.properties !== undefined ? options.properties : defaultPropertiesFunction_;
    _this.setStyle_ = options.setStyle !== undefined ? options.setStyle : true;
    _this.prevX_ = 0;
    _this.prevY_ = 0;
    LegacyProperties_ = options.propertiesType !== undefined && options.propertiesType;
    _this.defaultValues_ = options.defaultValues !== undefined ? options.defaultValues : {};
    return _this;
  }

  var _proto = _default.prototype;

  _proto.decodeCoordinates_ = function decodeCoordinates_(text, opt_flatCoordinates) {
    var len = text.length;
    var index = 0;
    var flatCoordinates = opt_flatCoordinates !== undefined ? opt_flatCoordinates : [];
    var i = flatCoordinates.length;

    while (index < len) {
      var b = void 0;
      var shift = 0;
      var result = 0;

      do {
        b = CHAR64_.indexOf(text.charAt(index++));
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 32);

      var dx = result & 1 ? ~(result >> 1) : result >> 1;
      this.prevX_ += dx;
      shift = 0;
      result = 0;

      do {
        b = CHAR64_.indexOf(text.charAt(index++));
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 32);

      var dy = result & 1 ? ~(result >> 1) : result >> 1;
      this.prevY_ += dy;
      flatCoordinates[i++] = this.prevX_ * this.accuracy_;
      flatCoordinates[i++] = this.prevY_ * this.accuracy_;
    }

    return flatCoordinates;
  };

  _proto.encodeCoordinates_ = function encodeCoordinates_(flatCoordinates, stride, offset, end) {
    var encodedCoordinates = '';

    for (var i = offset; i < end; i += stride) {
      var x = flatCoordinates[i];
      var y = flatCoordinates[i + 1];
      x = Math.floor(x / this.accuracy_);
      y = Math.floor(y / this.accuracy_);
      var dx = x - this.prevX_;
      var dy = y - this.prevY_;
      this.prevX_ = x;
      this.prevY_ = y;
      encodedCoordinates += encodeSignedNumber_(dx) + encodeSignedNumber_(dy);
    }

    return encodedCoordinates;
  };

  _proto.readFeatureFromText = function readFeatureFromText(text, opt_options) {
    console.assert(text.length > 2);
    console.assert(text[1] === '(');
    console.assert(text[text.length - 1] === ')');
    var splitIndex = text.indexOf('~');
    var geometryText = splitIndex >= 0 ? text.substring(0, splitIndex) + ")" : text;
    var geometry = this.readGeometryFromText(geometryText, opt_options);
    var feature = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_3__["default"](geometry);

    if (splitIndex >= 0) {
      var attributesAndStylesText = text.substring(splitIndex + 1, text.length - 1);
      splitIndex = attributesAndStylesText.indexOf('~');
      var attributesText = splitIndex >= 0 ? attributesAndStylesText.substring(0, splitIndex) : attributesAndStylesText;

      if (attributesText != '') {
        var parts = attributesText.split('\'');

        for (var i = 0; i < parts.length; ++i) {
          var part = decodeURIComponent(parts[i]);
          var keyVal = part.split('*');
          console.assert(keyVal.length === 2);
          var key = keyVal[0];
          var value = keyVal[1];

          if (!this.setStyle_ && LegacyProperties_[key]) {
            key = LegacyProperties_[key];
          }

          feature.set(key, castValue_(key, value));
        }
      }

      if (splitIndex >= 0) {
        var stylesText = attributesAndStylesText.substring(splitIndex + 1);

        if (this.setStyle_) {
          setStyleInFeature_(stylesText, feature);
        } else {
          setStyleProperties_(stylesText, feature);
        }
      }
    }

    return feature;
  };

  _proto.readFeaturesFromText = function readFeaturesFromText(text, opt_options) {
    var _this2 = this;

    console.assert(text[0] === 'F');
    this.prevX_ = 0;
    this.prevY_ = 0;
    var features = [];
    text = text.substring(1);

    while (text.length > 0) {
      var index = text.indexOf(')');
      console.assert(index >= 0);
      var feature = this.readFeatureFromText(text.substring(0, index + 1), opt_options);
      features.push(feature);
      text = text.substring(index + 1);
    }

    features.forEach(function (feature) {
      for (var key in _this2.defaultValues_) {
        var property = LegacyProperties_[key];

        if (feature.get(property) === undefined) {
          feature.set(property, _this2.defaultValues_[key].call(null, feature));
        }
      }
    });
    return features;
  };

  _proto.readGeometryFromText = function readGeometryFromText(text, opt_options) {
    var geometryReader = GEOMETRY_READERS_[text[0]];
    console.assert(geometryReader !== undefined);
    return geometryReader.call(this, text);
  };

  _proto.writeFeatureText = function writeFeatureText(feature, opt_options) {
    var encodedParts = [];
    var encodedGeometry = '';
    var geometry = feature.getGeometry();

    if (geometry) {
      encodedGeometry = this.writeGeometryText(geometry, opt_options);
    }

    if (encodedGeometry.length > 0) {
      console.assert(encodedGeometry[encodedGeometry.length - 1] === ')');
      encodedGeometry = encodedGeometry.substring(0, encodedGeometry.length - 1);
      encodedParts.push(encodedGeometry);
    }

    var encodedProperties = [];
    var propFunction = this.propertiesFunction_(feature);

    for (var key in propFunction) {
      var value = propFunction[key];

      if (value !== undefined && value !== null && key !== feature.getGeometryName()) {
        if (encodedProperties.length !== 0) {
          encodedProperties.push('\'');
        }

        var encoded = encodeURIComponent(key.replace(/[()'*]/g, '_') + "*" + value.toString().replace(/[()'*]/g, '_'));
        encodedProperties.push(encoded);
      }
    }

    if (encodedProperties.length > 0) {
      encodedParts.push('~');
      Array.prototype.push.apply(encodedParts, encodedProperties);
    }

    if (this.encodeStyles_) {
      var styleFunction = feature.getStyleFunction();

      if (styleFunction !== undefined) {
        var styles = styleFunction(feature, 0);

        if (styles !== null) {
          var encodedStyles = [];
          styles = Array.isArray(styles) ? styles : [styles];
          encodeStyles_(styles, geometry.getType(), encodedStyles);

          if (encodedStyles.length > 0) {
            encodedParts.push('~');
            Array.prototype.push.apply(encodedParts, encodedStyles);
          }
        }
      }
    }

    encodedParts.push(')');
    return encodedParts.join('');
  };

  _proto.writeFeaturesText = function writeFeaturesText(features, opt_options) {
    this.prevX_ = 0;
    this.prevY_ = 0;
    var textArray = [];

    if (features.length > 0) {
      textArray.push('F');

      for (var i = 0, ii = features.length; i < ii; ++i) {
        textArray.push(this.writeFeatureText(features[i], opt_options));
      }
    }

    return textArray.join('');
  };

  _proto.writeGeometryText = function writeGeometryText(geometry, opt_options) {
    var geometryWriter = GEOMETRY_WRITERS_[geometry.getType()];
    console.assert(geometryWriter !== undefined);
    var transformedGeometry = ol_format_Feature_js__WEBPACK_IMPORTED_MODULE_4__["transformWithOptions"](geometry, true, opt_options);
    return geometryWriter.call(this, transformedGeometry);
  };

  return _default;
}(ol_format_TextFeature_js__WEBPACK_IMPORTED_MODULE_5__["default"]);



function defaultPropertiesFunction_(feature) {
  return feature.getProperties();
}

function encodeSignedNumber_(num) {
  var signedNum = num << 1;

  if (num < 0) {
    signedNum = ~signedNum;
  }

  return encodeNumber_(signedNum);
}

function encodeNumber_(num) {
  var encodedNumber = '';

  while (num >= 0x20) {
    encodedNumber += CHAR64_.charAt(0x20 | num & 0x1f);
    num >>= 5;
  }

  encodedNumber += CHAR64_.charAt(num);
  return encodedNumber;
}

function encodeStyles_(styles, geometryType, encodedStyles) {
  var styleType = StyleTypes_[geometryType];
  console.assert(styleType !== undefined);

  for (var i = 0; i < styles.length; ++i) {
    var style = styles[i];
    var fillStyle = style.getFill();
    var imageStyle = style.getImage();
    var strokeStyle = style.getStroke();
    var textStyle = style.getText();

    if (styleType == ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__["default"].POLYGON) {
      if (fillStyle !== null) {
        encodeStylePolygon_(fillStyle, strokeStyle, encodedStyles);
      }
    } else if (styleType == ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__["default"].LINE_STRING) {
      if (strokeStyle !== null) {
        encodeStyleLine_(strokeStyle, encodedStyles);
      }
    } else if (styleType == ngeo_format_FeatureHashStyleType_js__WEBPACK_IMPORTED_MODULE_1__["default"].POINT) {
      if (imageStyle !== null) {
        encodeStylePoint_(imageStyle, encodedStyles);
      }
    }

    if (textStyle !== null) {
      encodeStyleText_(textStyle, encodedStyles);
    }
  }
}

function encodeStyleLine_(strokeStyle, encodedStyles) {
  encodeStyleStroke_(strokeStyle, encodedStyles);
}

function encodeStylePoint_(imageStyle, encodedStyles) {
  if (imageStyle instanceof ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_13__["default"]) {
    var radius = imageStyle.getRadius();

    if (encodedStyles.length > 0) {
      encodedStyles.push('\'');
    }

    encodedStyles.push(encodeURIComponent("pointRadius*" + radius));
    var fillStyle = imageStyle.getFill();

    if (fillStyle !== null) {
      encodeStyleFill_(fillStyle, encodedStyles);
    }

    var strokeStyle = imageStyle.getStroke();

    if (strokeStyle !== null) {
      encodeStyleStroke_(strokeStyle, encodedStyles);
    }
  }
}

function encodeStylePolygon_(fillStyle, strokeStyle, encodedStyles) {
  encodeStyleFill_(fillStyle, encodedStyles);

  if (strokeStyle !== null) {
    encodeStyleStroke_(strokeStyle, encodedStyles);
  }
}

function encodeStyleFill_(fillStyle, encodedStyles, opt_propertyName) {
  var propertyName = opt_propertyName !== undefined ? opt_propertyName : 'fillColor';
  var fillColor = fillStyle.getColor();

  if (fillColor !== null) {
    if (Array.isArray(fillColor)) {
      var fillColorHex = Object(ngeo_utils_js__WEBPACK_IMPORTED_MODULE_2__["rgbArrayToHex"])(fillColor);

      if (encodedStyles.length > 0) {
        encodedStyles.push('\'');
      }

      encodedStyles.push(encodeURIComponent(propertyName + "*" + fillColorHex));
    } else {
      console.assert(false, 'only supporting fill colors');
    }
  }
}

function encodeStyleStroke_(strokeStyle, encodedStyles) {
  var strokeColor = strokeStyle.getColor();

  if (strokeColor !== null) {
    if (Array.isArray(strokeColor)) {
      var strokeColorHex = Object(ngeo_utils_js__WEBPACK_IMPORTED_MODULE_2__["rgbArrayToHex"])(strokeColor);

      if (encodedStyles.length > 0) {
        encodedStyles.push('\'');
      }

      encodedStyles.push(encodeURIComponent("strokeColor*" + strokeColorHex));
    }
  }

  var strokeWidth = strokeStyle.getWidth();

  if (strokeWidth !== undefined) {
    if (encodedStyles.length > 0) {
      encodedStyles.push('\'');
    }

    encodedStyles.push(encodeURIComponent("strokeWidth*" + strokeWidth));
  }
}

function encodeStyleText_(textStyle, encodedStyles) {
  var fontStyle = textStyle.getFont();

  if (fontStyle !== undefined) {
    var font = fontStyle.split(' ');

    if (font.length >= 3) {
      if (encodedStyles.length > 0) {
        encodedStyles.push('\'');
      }

      encodedStyles.push(encodeURIComponent("fontSize*" + font[1]));
    }
  }

  var fillStyle = textStyle.getFill();

  if (fillStyle !== null) {
    encodeStyleFill_(fillStyle, encodedStyles, 'fontColor');
  }
}

function readLineStringGeometry_(text) {
  console.assert(text.substring(0, 2) === 'l(');
  console.assert(text[text.length - 1] == ')');
  text = text.substring(2, text.length - 1);
  var flatCoordinates = this.decodeCoordinates_(text);
  return new ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_7__["default"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_6__["default"].XY);
}

function readMultiLineStringGeometry_(text) {
  console.assert(text.substring(0, 2) === 'L(');
  console.assert(text[text.length - 1] == ')');
  text = text.substring(2, text.length - 1);
  var flatCoordinates = [];
  var ends = [];
  var lineStrings = text.split('\'');

  for (var i = 0, ii = lineStrings.length; i < ii; ++i) {
    flatCoordinates = this.decodeCoordinates_(lineStrings[i], flatCoordinates);
    ends[i] = flatCoordinates.length;
  }

  return new ol_geom_MultiLineString_js__WEBPACK_IMPORTED_MODULE_8__["default"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_6__["default"].XY, ends);
}

function readPointGeometry_(text) {
  console.assert(text.substring(0, 2) === 'p(');
  console.assert(text[text.length - 1] == ')');
  text = text.substring(2, text.length - 1);
  var flatCoordinates = this.decodeCoordinates_(text);
  console.assert(flatCoordinates.length === 2);
  return new ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_6__["default"].XY);
}

function readMultiPointGeometry_(text) {
  console.assert(text.substring(0, 2) === 'P(');
  console.assert(text[text.length - 1] == ')');
  text = text.substring(2, text.length - 1);
  var flatCoordinates = this.decodeCoordinates_(text);
  return new ol_geom_MultiPoint_js__WEBPACK_IMPORTED_MODULE_9__["default"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_6__["default"].XY);
}

function readPolygonGeometry_(text) {
  console.assert(text.substring(0, 2) === 'a(');
  console.assert(text[text.length - 1] == ')');
  text = text.substring(2, text.length - 1);
  var flatCoordinates = [];
  var ends = [];
  var rings = text.split('\'');

  for (var i = 0, ii = rings.length; i < ii; ++i) {
    flatCoordinates = this.decodeCoordinates_(rings[i], flatCoordinates);
    var end = flatCoordinates.length;

    if (i === 0) {
      flatCoordinates[end++] = flatCoordinates[0];
      flatCoordinates[end++] = flatCoordinates[1];
    } else {
      flatCoordinates[end++] = flatCoordinates[ends[i - 1]];
      flatCoordinates[end++] = flatCoordinates[ends[i - 1] + 1];
    }

    ends[i] = end;
  }

  return new ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_12__["default"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_6__["default"].XY, ends);
}

function readMultiPolygonGeometry_(text) {
  console.assert(text.substring(0, 2) === 'A(');
  console.assert(text[text.length - 1] == ')');
  text = text.substring(2, text.length - 1);
  var flatCoordinates = [];
  var endss = [];
  var polygons = text.split(')(');

  for (var i = 0, ii = polygons.length; i < ii; ++i) {
    var rings = polygons[i].split('\'');
    var ends = endss[i] = [];

    for (var j = 0, jj = rings.length; j < jj; ++j) {
      flatCoordinates = this.decodeCoordinates_(rings[j], flatCoordinates);
      var end = flatCoordinates.length;

      if (j === 0) {
        flatCoordinates[end++] = flatCoordinates[0];
        flatCoordinates[end++] = flatCoordinates[1];
      } else {
        flatCoordinates[end++] = flatCoordinates[ends[j - 1]];
        flatCoordinates[end++] = flatCoordinates[ends[j - 1] + 1];
      }

      ends[j] = end;
    }
  }

  return new ol_geom_MultiPolygon_js__WEBPACK_IMPORTED_MODULE_10__["default"](flatCoordinates, ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_6__["default"].XY, endss);
}

function setStyleInFeature_(text, feature) {
  if (text == '') {
    return;
  }

  var properties = getStyleProperties_(text, feature);
  var fillColor = properties['fillColor'];
  var fontSize = properties['fontSize'];
  var fontColor = properties['fontColor'];
  var pointRadius = properties['pointRadius'];
  var strokeColor = properties['strokeColor'];
  var strokeWidth = properties['strokeWidth'];
  var fillStyle = null;

  if (fillColor !== undefined) {
    fillStyle = new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
      color: fillColor
    });
  }

  var strokeStyle = null;

  if (strokeColor !== undefined && strokeWidth !== undefined) {
    strokeStyle = new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
      color: strokeColor,
      width: strokeWidth
    });
  }

  var imageStyle = null;

  if (pointRadius !== undefined) {
    imageStyle = new ol_style_Circle_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
      radius: pointRadius,
      fill: fillStyle,
      stroke: strokeStyle
    });
    fillStyle = strokeStyle = null;
  }

  var textStyle = null;

  if (fontSize !== undefined && fontColor !== undefined) {
    textStyle = new ol_style_Text_js__WEBPACK_IMPORTED_MODULE_17__["default"]({
      font: fontSize + " sans-serif",
      fill: new ol_style_Fill_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
        color: fontColor
      })
    });
  }

  var style = new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
    fill: fillStyle,
    image: imageStyle,
    stroke: strokeStyle,
    text: textStyle
  });
  feature.setStyle(style);
}

function setStyleProperties_(text, feature) {
  var properties = getStyleProperties_(text, feature);
  var geometry = feature.getGeometry();

  if (geometry instanceof ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"]) {
    if (properties['isLabel'] || properties[ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__["default"].IS_TEXT]) {
      delete properties['strokeColor'];
      delete properties['fillColor'];
    } else {
      delete properties['fontColor'];
      delete properties['fontSize'];
    }
  } else {
    delete properties['fontColor'];

    if (geometry instanceof ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_7__["default"]) {
      delete properties['fillColor'];
      delete properties['fillOpacity'];
    }
  }

  if (properties['fontSize']) {
    var fontSizeStr = properties['fontSize'];
    var fontSize = parseFloat(fontSizeStr);

    if (fontSizeStr.indexOf('px') !== -1) {
      fontSize = Math.round(fontSize / 1.333333);
    }

    properties['fontSize'] = fontSize;
  }

  var clone = {};

  for (var key in properties) {
    var value = properties[key];

    if (LegacyProperties_[key]) {
      clone[LegacyProperties_[key]] = value;
    } else {
      clone[key] = value;
    }
  }

  feature.setProperties(clone);
}

function castValue_(key, value) {
  var numProperties = [ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__["default"].ANGLE, ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__["default"].OPACITY, ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__["default"].SIZE, ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__["default"].STROKE, 'pointRadius', 'strokeWidth'];
  var boolProperties = [ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__["default"].IS_CIRCLE, ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__["default"].IS_RECTANGLE, ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__["default"].IS_TEXT, ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__["default"].SHOW_MEASURE, ngeo_format_FeatureProperties_js__WEBPACK_IMPORTED_MODULE_0__["default"].SHOW_LABEL, 'isCircle', 'isRectangle', 'isLabel', 'showMeasure', 'showLabel'];

  if (numProperties.includes(key)) {
    return +value;
  } else if (boolProperties.includes(key)) {
    return value === 'true' ? true : false;
  } else {
    return value;
  }
}

function getStyleProperties_(text, feature) {
  var parts = text.split('\'');
  var properties = {};

  for (var i = 0; i < parts.length; ++i) {
    var part = decodeURIComponent(parts[i]);
    var keyVal = part.split('*');
    console.assert(keyVal.length === 2);
    var key = keyVal[0];
    var val = keyVal[1];
    properties[key] = castValue_(key, val);
  }

  return properties;
}

function writeLineStringGeometry_(geometry) {
  if (geometry instanceof ol_geom_LineString_js__WEBPACK_IMPORTED_MODULE_7__["default"]) {
    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();
    var end = flatCoordinates.length;
    return "l(" + this.encodeCoordinates_(flatCoordinates, stride, 0, end) + ")";
  }
}

function writeMultiLineStringGeometry_(geometry) {
  if (geometry instanceof ol_geom_MultiLineString_js__WEBPACK_IMPORTED_MODULE_8__["default"]) {
    var ends = geometry.getEnds();
    var lineStringCount = ends.length;
    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();
    var offset = 0;
    var textArray = ['L('];

    for (var i = 0; i < lineStringCount; ++i) {
      var end = ends[i];
      var text = this.encodeCoordinates_(flatCoordinates, stride, offset, end);

      if (i !== 0) {
        textArray.push('\'');
      }

      textArray.push(text);
      offset = end;
    }

    textArray.push(')');
    return textArray.join('');
  }
}

function writePointGeometry_(geometry) {
  if (geometry instanceof ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"]) {
    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();
    var end = flatCoordinates.length;
    return "p(" + this.encodeCoordinates_(flatCoordinates, stride, 0, end) + ")";
  }
}

function writeMultiPointGeometry_(geometry) {
  if (geometry instanceof ol_geom_MultiPoint_js__WEBPACK_IMPORTED_MODULE_9__["default"]) {
    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();
    var end = flatCoordinates.length;
    return "P(" + this.encodeCoordinates_(flatCoordinates, stride, 0, end) + ")";
  }
}

function encodeRings_(flatCoordinates, stride, offset, ends, textArray) {
  var linearRingCount = ends.length;

  for (var i = 0; i < linearRingCount; ++i) {
    var end = ends[i] - stride;
    var text = this.encodeCoordinates_(flatCoordinates, stride, offset, end);

    if (i !== 0) {
      textArray.push('\'');
    }

    textArray.push(text);
    offset = ends[i];
  }

  return offset;
}

function writePolygonGeometry_(geometry) {
  if (geometry instanceof ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_12__["default"]) {
    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();
    var ends = geometry.getEnds();
    var offset = 0;
    var textArray = ['a('];
    encodeRings_.call(this, flatCoordinates, stride, offset, ends, textArray);
    textArray.push(')');
    return textArray.join('');
  }
}

function writeMultiPolygonGeometry_(geometry) {
  if (geometry instanceof ol_geom_MultiPolygon_js__WEBPACK_IMPORTED_MODULE_10__["default"]) {
    var flatCoordinates = geometry.getFlatCoordinates();
    var stride = geometry.getStride();
    var endss = geometry.getEndss();
    var polygonCount = endss.length;
    var offset = 0;
    var textArray = ['A'];

    for (var i = 0; i < polygonCount; ++i) {
      var ends = endss[i];
      textArray.push('(');
      offset = encodeRings_.call(this, flatCoordinates, stride, offset, ends, textArray);
      textArray.push(')');
    }

    return textArray.join('');
  } else {
    console.assert('Wrong geometry type');
  }
}

/***/ }),

/***/ "./src/format/FeatureHashStyleType.js":
/*!********************************************!*\
  !*** ./src/format/FeatureHashStyleType.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  LINE_STRING: 'LineString',
  POINT: 'Point',
  POLYGON: 'Polygon'
});

/***/ }),

/***/ 32:
/*!******************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/permalink.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/permalink.js */"./examples/permalink.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWFsaW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3Blcm1hbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybWF0L0ZlYXR1cmVIYXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9mb3JtYXQvRmVhdHVyZUhhc2hTdHlsZVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwZXJtYWxpbmtcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMzIsXCJjb21tb25zXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiRHJhd0NvbXBvbmVudENvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzY29wZVwiLCBcIm5nZW9Mb2NhdGlvblwiXTtcbk1hcENvbXBvbmVudENvbnRyb2xsZXIuJGluamVjdCA9IFtcIm5nZW9Mb2NhdGlvblwiLCBcIm5nZW9EZWJvdW5jZVwiXTtcbmltcG9ydCAnLi9wZXJtYWxpbmsuY3NzJztcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IG5nZW9Gb3JtYXRGZWF0dXJlSGFzaCBmcm9tICduZ2VvL2Zvcm1hdC9GZWF0dXJlSGFzaC5qcyc7XG5pbXBvcnQgbmdlb01hcE1vZHVsZSBmcm9tICduZ2VvL21hcC9tb2R1bGUuanMnO1xuaW1wb3J0IG5nZW9NaXNjRGVib3VuY2UgZnJvbSAnbmdlby9taXNjL2RlYm91bmNlLmpzJztcbmltcG9ydCB7IGludGVyYWN0aW9uRGVjb3JhdGlvbiB9IGZyb20gJ25nZW8vbWlzYy9kZWNvcmF0ZS5qcyc7XG5pbXBvcnQgbmdlb1N0YXRlbWFuYWdlck1vZHVsZSBmcm9tICduZ2VvL3N0YXRlbWFuYWdlci9tb2R1bGUuanMnO1xuaW1wb3J0IG9sTWFwIGZyb20gJ29sL01hcC5qcyc7XG5pbXBvcnQgb2xJbnRlcmFjdGlvbkRyYXcgZnJvbSAnb2wvaW50ZXJhY3Rpb24vRHJhdy5qcyc7XG5pbXBvcnQgb2xMYXllclRpbGUgZnJvbSAnb2wvbGF5ZXIvVGlsZS5qcyc7XG5pbXBvcnQgb2xMYXllclZlY3RvciBmcm9tICdvbC9sYXllci9WZWN0b3IuanMnO1xuaW1wb3J0IG9sU291cmNlT1NNIGZyb20gJ29sL3NvdXJjZS9PU00uanMnO1xuaW1wb3J0IG9sU291cmNlVmVjdG9yIGZyb20gJ29sL3NvdXJjZS9WZWN0b3IuanMnO1xuaW1wb3J0IG9sU3R5bGVTdHJva2UgZnJvbSAnb2wvc3R5bGUvU3Ryb2tlLmpzJztcbmltcG9ydCBvbFN0eWxlU3R5bGUgZnJvbSAnb2wvc3R5bGUvU3R5bGUuanMnO1xudmFyIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ2dldHRleHQnLCBuZ2VvTWFwTW9kdWxlLm5hbWUsIG5nZW9NaXNjRGVib3VuY2UubmFtZSwgbmdlb1N0YXRlbWFuYWdlck1vZHVsZS5uYW1lXSk7XG52YXIgbWFwQ29tcG9uZW50ID0ge1xuICBjb250cm9sbGVyOiAnQXBwTWFwQ29udHJvbGxlciBhcyBjdHJsJyxcbiAgYmluZGluZ3M6IHtcbiAgICAnbWFwJzogJz1hcHBNYXAnXG4gIH0sXG4gIHRlbXBsYXRlOiAnPGRpdiBuZ2VvLW1hcD1jdHJsLm1hcD48L2Rpdj4nXG59O1xubW9kdWxlLmNvbXBvbmVudCgnYXBwTWFwJywgbWFwQ29tcG9uZW50KTtcblxuZnVuY3Rpb24gTWFwQ29tcG9uZW50Q29udHJvbGxlcihuZ2VvTG9jYXRpb24sIG5nZW9EZWJvdW5jZSkge1xuICB0aGlzLm1hcDtcbiAgdGhpcy5uZ2VvTG9jYXRpb25fID0gbmdlb0xvY2F0aW9uO1xuICB0aGlzLm5nZW9EZWJvdW5jZV8gPSBuZ2VvRGVib3VuY2U7XG59XG5cbm1vZHVsZS5jb250cm9sbGVyKCdBcHBNYXBDb250cm9sbGVyJywgTWFwQ29tcG9uZW50Q29udHJvbGxlcik7XG5cbk1hcENvbXBvbmVudENvbnRyb2xsZXIucHJvdG90eXBlLiRvbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIHZpZXcgPSB0aGlzLm1hcC5nZXRWaWV3KCk7XG4gIHZhciB6b29tXyA9IHRoaXMubmdlb0xvY2F0aW9uXy5nZXRQYXJhbSgneicpO1xuICB2YXIgem9vbSA9IHpvb21fICE9PSB1bmRlZmluZWQgPyArem9vbV8gOiA0O1xuICB2YXIgeCA9IHRoaXMubmdlb0xvY2F0aW9uXy5nZXRQYXJhbSgneCcpO1xuICB2YXIgeSA9IHRoaXMubmdlb0xvY2F0aW9uXy5nZXRQYXJhbSgneScpO1xuICB2YXIgY2VudGVyID0geCAhPT0gdW5kZWZpbmVkICYmIHkgIT09IHVuZGVmaW5lZCA/IFsreCwgK3ldIDogWzAsIDBdO1xuICB2aWV3LnNldENlbnRlcihjZW50ZXIpO1xuICB2aWV3LnNldFpvb20oem9vbSk7XG4gIHRoaXMubmdlb0xvY2F0aW9uXy51cGRhdGVQYXJhbXMoe1xuICAgICd6JzogXCJcIiArIHpvb20sXG4gICAgJ3gnOiBcIlwiICsgTWF0aC5yb3VuZChjZW50ZXJbMF0pLFxuICAgICd5JzogXCJcIiArIE1hdGgucm91bmQoY2VudGVyWzFdKVxuICB9KTtcbiAgdmlldy5vbigncHJvcGVydHljaGFuZ2UnLCB0aGlzLm5nZW9EZWJvdW5jZV8oZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgY2VudGVyID0gdmlldy5nZXRDZW50ZXIoKTtcbiAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgJ3onOiBcIlwiICsgdmlldy5nZXRab29tKCksXG4gICAgICAneCc6IFwiXCIgKyBNYXRoLnJvdW5kKGNlbnRlclswXSksXG4gICAgICAneSc6IFwiXCIgKyBNYXRoLnJvdW5kKGNlbnRlclsxXSlcbiAgICB9O1xuXG4gICAgX3RoaXMubmdlb0xvY2F0aW9uXy51cGRhdGVQYXJhbXMocGFyYW1zKTtcbiAgfSwgMzAwLCB0cnVlKSk7XG59O1xuXG52YXIgZHJhd0NvbXBvbmVudCA9IHtcbiAgY29udHJvbGxlcjogJ0FwcERyYXdDb250cm9sbGVyIGFzIGN0cmwnLFxuICBiaW5kaW5nczoge1xuICAgICdtYXAnOiAnPWFwcERyYXdNYXAnLFxuICAgICdsYXllcic6ICc9YXBwRHJhd0xheWVyJ1xuICB9LFxuICB0ZW1wbGF0ZTogJzxsYWJlbD5FbmFibGUgZHJhd2luZzonICsgJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuZy1tb2RlbD1cImN0cmwuaW50ZXJhY3Rpb24uYWN0aXZlXCIgLz4nICsgJzwvbGFiZWw+PGJyPicgKyAnPGJ1dHRvbiBuZy1jbGljaz1cImN0cmwuY2xlYXJMYXllcigpXCI+Q2xlYXIgbGF5ZXI8L2J1dHRvbj4nXG59O1xubW9kdWxlLmNvbXBvbmVudCgnYXBwRHJhdycsIGRyYXdDb21wb25lbnQpO1xuXG5mdW5jdGlvbiBEcmF3Q29tcG9uZW50Q29udHJvbGxlcigkc2NvcGUsIG5nZW9Mb2NhdGlvbikge1xuICB0aGlzLm1hcDtcbiAgdGhpcy5sYXllcjtcbiAgdGhpcy5uZ2VvTG9jYXRpb25fID0gbmdlb0xvY2F0aW9uO1xuICB0aGlzLnNjb3BlXyA9ICRzY29wZTtcbiAgdGhpcy5mZWF0dXJlU2VxXyA9IDA7XG4gIHRoaXMuaW50ZXJhY3Rpb247XG59XG5cbkRyYXdDb21wb25lbnRDb250cm9sbGVyLnByb3RvdHlwZS4kb25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3RoaXMyID0gdGhpcztcblxuICB2YXIgdmVjdG9yU291cmNlID0gdGhpcy5sYXllci5nZXRTb3VyY2UoKTtcbiAgdGhpcy5pbnRlcmFjdGlvbiA9IG5ldyBvbEludGVyYWN0aW9uRHJhdyh7XG4gICAgdHlwZTogJ0xpbmVTdHJpbmcnLFxuICAgIHNvdXJjZTogdmVjdG9yU291cmNlXG4gIH0pO1xuICB0aGlzLmludGVyYWN0aW9uLnNldEFjdGl2ZShmYWxzZSk7XG4gIHRoaXMubWFwLmFkZEludGVyYWN0aW9uKHRoaXMuaW50ZXJhY3Rpb24pO1xuICBpbnRlcmFjdGlvbkRlY29yYXRpb24odGhpcy5pbnRlcmFjdGlvbik7XG4gIHRoaXMuaW50ZXJhY3Rpb24ub24oJ2RyYXdlbmQnLCBmdW5jdGlvbiAoZSkge1xuICAgIGUuZmVhdHVyZS5zZXQoJ2lkJywgKytfdGhpczIuZmVhdHVyZVNlcV8pO1xuICB9KTtcbiAgdmFyIGZoRm9ybWF0ID0gbmV3IG5nZW9Gb3JtYXRGZWF0dXJlSGFzaCgpO1xuICB2ZWN0b3JTb3VyY2Uub24oJ2FkZGZlYXR1cmUnLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBmZWF0dXJlID0gZS5mZWF0dXJlO1xuICAgIGZlYXR1cmUuc2V0U3R5bGUobmV3IG9sU3R5bGVTdHlsZSh7XG4gICAgICBzdHJva2U6IG5ldyBvbFN0eWxlU3Ryb2tlKHtcbiAgICAgICAgY29sb3I6IFsyNTUsIDAsIDAsIDFdLFxuICAgICAgICB3aWR0aDogMlxuICAgICAgfSlcbiAgICB9KSk7XG4gICAgdmFyIGZlYXR1cmVzID0gdmVjdG9yU291cmNlLmdldEZlYXR1cmVzKCk7XG4gICAgdmFyIGVuY29kZWRGZWF0dXJlcyA9IGZoRm9ybWF0LndyaXRlRmVhdHVyZXMoZmVhdHVyZXMpO1xuXG4gICAgX3RoaXMyLnNjb3BlXy4kYXBwbHlBc3luYyhmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIubmdlb0xvY2F0aW9uXy51cGRhdGVQYXJhbXMoe1xuICAgICAgICAnZmVhdHVyZXMnOiBlbmNvZGVkRmVhdHVyZXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgdmFyIGVuY29kZWRGZWF0dXJlcyA9IHRoaXMubmdlb0xvY2F0aW9uXy5nZXRQYXJhbSgnZmVhdHVyZXMnKTtcblxuICBpZiAoZW5jb2RlZEZlYXR1cmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmVhdHVyZXMgPSBmaEZvcm1hdC5yZWFkRmVhdHVyZXMoZW5jb2RlZEZlYXR1cmVzKTtcbiAgICB0aGlzLmZlYXR1cmVTZXFfID0gZmVhdHVyZXMubGVuZ3RoO1xuICAgIHZlY3RvclNvdXJjZS5hZGRGZWF0dXJlcyhmZWF0dXJlcyk7XG4gIH1cbn07XG5cbkRyYXdDb21wb25lbnRDb250cm9sbGVyLnByb3RvdHlwZS5jbGVhckxheWVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmxheWVyLmdldFNvdXJjZSgpLmNsZWFyKHRydWUpO1xuICB0aGlzLmZlYXR1cmVTZXFfID0gMDtcbiAgdGhpcy5uZ2VvTG9jYXRpb25fLmRlbGV0ZVBhcmFtKCdmZWF0dXJlcycpO1xufTtcblxubW9kdWxlLmNvbnRyb2xsZXIoJ0FwcERyYXdDb250cm9sbGVyJywgRHJhd0NvbXBvbmVudENvbnRyb2xsZXIpO1xuXG5mdW5jdGlvbiBNYWluQ29udHJvbGxlcigpIHtcbiAgdGhpcy5tYXAgPSBuZXcgb2xNYXAoe1xuICAgIGxheWVyczogW25ldyBvbExheWVyVGlsZSh7XG4gICAgICBzb3VyY2U6IG5ldyBvbFNvdXJjZU9TTSgpXG4gICAgfSldXG4gIH0pO1xuICB2YXIgdmVjdG9yU291cmNlID0gbmV3IG9sU291cmNlVmVjdG9yKCk7XG4gIHRoaXMudmVjdG9yTGF5ZXIgPSBuZXcgb2xMYXllclZlY3Rvcih7XG4gICAgc291cmNlOiB2ZWN0b3JTb3VyY2VcbiAgfSk7XG4gIHRoaXMudmVjdG9yTGF5ZXIuc2V0TWFwKHRoaXMubWFwKTtcbn1cblxubW9kdWxlLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpO1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlOyIsImZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IG5nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcyBmcm9tICduZ2VvL2Zvcm1hdC9GZWF0dXJlUHJvcGVydGllcy5qcyc7XG5pbXBvcnQgbmdlb0Zvcm1hdEZlYXR1cmVIYXNoU3R5bGVUeXBlIGZyb20gJ25nZW8vZm9ybWF0L0ZlYXR1cmVIYXNoU3R5bGVUeXBlLmpzJztcbmltcG9ydCB7IHJnYkFycmF5VG9IZXggfSBmcm9tICduZ2VvL3V0aWxzLmpzJztcbmltcG9ydCBvbEZlYXR1cmUgZnJvbSAnb2wvRmVhdHVyZS5qcyc7XG5pbXBvcnQgKiBhcyBvbEZvcm1hdEZlYXR1cmUgZnJvbSAnb2wvZm9ybWF0L0ZlYXR1cmUuanMnO1xuaW1wb3J0IG9sRm9ybWF0VGV4dEZlYXR1cmUgZnJvbSAnb2wvZm9ybWF0L1RleHRGZWF0dXJlLmpzJztcbmltcG9ydCBvbEdlb21HZW9tZXRyeUxheW91dCBmcm9tICdvbC9nZW9tL0dlb21ldHJ5TGF5b3V0LmpzJztcbmltcG9ydCBvbEdlb21MaW5lU3RyaW5nIGZyb20gJ29sL2dlb20vTGluZVN0cmluZy5qcyc7XG5pbXBvcnQgb2xHZW9tTXVsdGlMaW5lU3RyaW5nIGZyb20gJ29sL2dlb20vTXVsdGlMaW5lU3RyaW5nLmpzJztcbmltcG9ydCBvbEdlb21NdWx0aVBvaW50IGZyb20gJ29sL2dlb20vTXVsdGlQb2ludC5qcyc7XG5pbXBvcnQgb2xHZW9tTXVsdGlQb2x5Z29uIGZyb20gJ29sL2dlb20vTXVsdGlQb2x5Z29uLmpzJztcbmltcG9ydCBvbEdlb21Qb2ludCBmcm9tICdvbC9nZW9tL1BvaW50LmpzJztcbmltcG9ydCBvbEdlb21Qb2x5Z29uIGZyb20gJ29sL2dlb20vUG9seWdvbi5qcyc7XG5pbXBvcnQgb2xTdHlsZUNpcmNsZSBmcm9tICdvbC9zdHlsZS9DaXJjbGUuanMnO1xuaW1wb3J0IG9sU3R5bGVGaWxsIGZyb20gJ29sL3N0eWxlL0ZpbGwuanMnO1xuaW1wb3J0IG9sU3R5bGVTdHJva2UgZnJvbSAnb2wvc3R5bGUvU3Ryb2tlLmpzJztcbmltcG9ydCBvbFN0eWxlU3R5bGUgZnJvbSAnb2wvc3R5bGUvU3R5bGUuanMnO1xuaW1wb3J0IG9sU3R5bGVUZXh0IGZyb20gJ29sL3N0eWxlL1RleHQuanMnO1xudmFyIExlZ2FjeVByb3BlcnRpZXNfID0ge307XG52YXIgREVGQVVMVF9BQ0NVUkFDWSA9IDAuMTtcbnZhciBTdHlsZVR5cGVzXyA9IHtcbiAgJ0xpbmVTdHJpbmcnOiBuZ2VvRm9ybWF0RmVhdHVyZUhhc2hTdHlsZVR5cGUuTElORV9TVFJJTkcsXG4gICdQb2ludCc6IG5nZW9Gb3JtYXRGZWF0dXJlSGFzaFN0eWxlVHlwZS5QT0lOVCxcbiAgJ1BvbHlnb24nOiBuZ2VvRm9ybWF0RmVhdHVyZUhhc2hTdHlsZVR5cGUuUE9MWUdPTixcbiAgJ011bHRpTGluZVN0cmluZyc6IG5nZW9Gb3JtYXRGZWF0dXJlSGFzaFN0eWxlVHlwZS5MSU5FX1NUUklORyxcbiAgJ011bHRpUG9pbnQnOiBuZ2VvRm9ybWF0RmVhdHVyZUhhc2hTdHlsZVR5cGUuUE9JTlQsXG4gICdNdWx0aVBvbHlnb24nOiBuZ2VvRm9ybWF0RmVhdHVyZUhhc2hTdHlsZVR5cGUuUE9MWUdPTlxufTtcbnZhciBDSEFSNjRfID0gJy4tXyEqQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVowMTIzNDU2Nzg5YWJjZGVmZ2hqa21ucHFyc3R1dnd4eXonO1xudmFyIEdFT01FVFJZX1JFQURFUlNfID0ge1xuICAnUCc6IHJlYWRNdWx0aVBvaW50R2VvbWV0cnlfLFxuICAnTCc6IHJlYWRNdWx0aUxpbmVTdHJpbmdHZW9tZXRyeV8sXG4gICdBJzogcmVhZE11bHRpUG9seWdvbkdlb21ldHJ5XyxcbiAgJ2wnOiByZWFkTGluZVN0cmluZ0dlb21ldHJ5XyxcbiAgJ3AnOiByZWFkUG9pbnRHZW9tZXRyeV8sXG4gICdhJzogcmVhZFBvbHlnb25HZW9tZXRyeV9cbn07XG52YXIgR0VPTUVUUllfV1JJVEVSU18gPSB7XG4gICdNdWx0aUxpbmVTdHJpbmcnOiB3cml0ZU11bHRpTGluZVN0cmluZ0dlb21ldHJ5XyxcbiAgJ011bHRpUG9pbnQnOiB3cml0ZU11bHRpUG9pbnRHZW9tZXRyeV8sXG4gICdNdWx0aVBvbHlnb24nOiB3cml0ZU11bHRpUG9seWdvbkdlb21ldHJ5XyxcbiAgJ0xpbmVTdHJpbmcnOiB3cml0ZUxpbmVTdHJpbmdHZW9tZXRyeV8sXG4gICdQb2ludCc6IHdyaXRlUG9pbnRHZW9tZXRyeV8sXG4gICdQb2x5Z29uJzogd3JpdGVQb2x5Z29uR2VvbWV0cnlfXG59O1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiAoX29sRm9ybWF0VGV4dEZlYXR1cmUpIHtcbiAgX2luaGVyaXRzTG9vc2UoX2RlZmF1bHQsIF9vbEZvcm1hdFRleHRGZWF0dXJlKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKF9kZWZhdWx0KTtcblxuICBmdW5jdGlvbiBfZGVmYXVsdChvcHRfb3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX29sRm9ybWF0VGV4dEZlYXR1cmUuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIHZhciBvcHRpb25zID0gb3B0X29wdGlvbnMgIT09IHVuZGVmaW5lZCA/IG9wdF9vcHRpb25zIDoge307XG4gICAgX3RoaXMuYWNjdXJhY3lfID0gb3B0aW9ucy5hY2N1cmFjeSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5hY2N1cmFjeSA6IERFRkFVTFRfQUNDVVJBQ1k7XG4gICAgX3RoaXMuZW5jb2RlU3R5bGVzXyA9IG9wdGlvbnMuZW5jb2RlU3R5bGVzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmVuY29kZVN0eWxlcyA6IHRydWU7XG4gICAgX3RoaXMucHJvcGVydGllc0Z1bmN0aW9uXyA9IG9wdGlvbnMucHJvcGVydGllcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5wcm9wZXJ0aWVzIDogZGVmYXVsdFByb3BlcnRpZXNGdW5jdGlvbl87XG4gICAgX3RoaXMuc2V0U3R5bGVfID0gb3B0aW9ucy5zZXRTdHlsZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5zZXRTdHlsZSA6IHRydWU7XG4gICAgX3RoaXMucHJldlhfID0gMDtcbiAgICBfdGhpcy5wcmV2WV8gPSAwO1xuICAgIExlZ2FjeVByb3BlcnRpZXNfID0gb3B0aW9ucy5wcm9wZXJ0aWVzVHlwZSAhPT0gdW5kZWZpbmVkICYmIG9wdGlvbnMucHJvcGVydGllc1R5cGU7XG4gICAgX3RoaXMuZGVmYXVsdFZhbHVlc18gPSBvcHRpb25zLmRlZmF1bHRWYWx1ZXMgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuZGVmYXVsdFZhbHVlcyA6IHt9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBfZGVmYXVsdC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmRlY29kZUNvb3JkaW5hdGVzXyA9IGZ1bmN0aW9uIGRlY29kZUNvb3JkaW5hdGVzXyh0ZXh0LCBvcHRfZmxhdENvb3JkaW5hdGVzKSB7XG4gICAgdmFyIGxlbiA9IHRleHQubGVuZ3RoO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGZsYXRDb29yZGluYXRlcyA9IG9wdF9mbGF0Q29vcmRpbmF0ZXMgIT09IHVuZGVmaW5lZCA/IG9wdF9mbGF0Q29vcmRpbmF0ZXMgOiBbXTtcbiAgICB2YXIgaSA9IGZsYXRDb29yZGluYXRlcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW4pIHtcbiAgICAgIHZhciBiID0gdm9pZCAwO1xuICAgICAgdmFyIHNoaWZ0ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSAwO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGIgPSBDSEFSNjRfLmluZGV4T2YodGV4dC5jaGFyQXQoaW5kZXgrKykpO1xuICAgICAgICByZXN1bHQgfD0gKGIgJiAweDFmKSA8PCBzaGlmdDtcbiAgICAgICAgc2hpZnQgKz0gNTtcbiAgICAgIH0gd2hpbGUgKGIgPj0gMzIpO1xuXG4gICAgICB2YXIgZHggPSByZXN1bHQgJiAxID8gfihyZXN1bHQgPj4gMSkgOiByZXN1bHQgPj4gMTtcbiAgICAgIHRoaXMucHJldlhfICs9IGR4O1xuICAgICAgc2hpZnQgPSAwO1xuICAgICAgcmVzdWx0ID0gMDtcblxuICAgICAgZG8ge1xuICAgICAgICBiID0gQ0hBUjY0Xy5pbmRleE9mKHRleHQuY2hhckF0KGluZGV4KyspKTtcbiAgICAgICAgcmVzdWx0IHw9IChiICYgMHgxZikgPDwgc2hpZnQ7XG4gICAgICAgIHNoaWZ0ICs9IDU7XG4gICAgICB9IHdoaWxlIChiID49IDMyKTtcblxuICAgICAgdmFyIGR5ID0gcmVzdWx0ICYgMSA/IH4ocmVzdWx0ID4+IDEpIDogcmVzdWx0ID4+IDE7XG4gICAgICB0aGlzLnByZXZZXyArPSBkeTtcbiAgICAgIGZsYXRDb29yZGluYXRlc1tpKytdID0gdGhpcy5wcmV2WF8gKiB0aGlzLmFjY3VyYWN5XztcbiAgICAgIGZsYXRDb29yZGluYXRlc1tpKytdID0gdGhpcy5wcmV2WV8gKiB0aGlzLmFjY3VyYWN5XztcbiAgICB9XG5cbiAgICByZXR1cm4gZmxhdENvb3JkaW5hdGVzO1xuICB9O1xuXG4gIF9wcm90by5lbmNvZGVDb29yZGluYXRlc18gPSBmdW5jdGlvbiBlbmNvZGVDb29yZGluYXRlc18oZmxhdENvb3JkaW5hdGVzLCBzdHJpZGUsIG9mZnNldCwgZW5kKSB7XG4gICAgdmFyIGVuY29kZWRDb29yZGluYXRlcyA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IG9mZnNldDsgaSA8IGVuZDsgaSArPSBzdHJpZGUpIHtcbiAgICAgIHZhciB4ID0gZmxhdENvb3JkaW5hdGVzW2ldO1xuICAgICAgdmFyIHkgPSBmbGF0Q29vcmRpbmF0ZXNbaSArIDFdO1xuICAgICAgeCA9IE1hdGguZmxvb3IoeCAvIHRoaXMuYWNjdXJhY3lfKTtcbiAgICAgIHkgPSBNYXRoLmZsb29yKHkgLyB0aGlzLmFjY3VyYWN5Xyk7XG4gICAgICB2YXIgZHggPSB4IC0gdGhpcy5wcmV2WF87XG4gICAgICB2YXIgZHkgPSB5IC0gdGhpcy5wcmV2WV87XG4gICAgICB0aGlzLnByZXZYXyA9IHg7XG4gICAgICB0aGlzLnByZXZZXyA9IHk7XG4gICAgICBlbmNvZGVkQ29vcmRpbmF0ZXMgKz0gZW5jb2RlU2lnbmVkTnVtYmVyXyhkeCkgKyBlbmNvZGVTaWduZWROdW1iZXJfKGR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5jb2RlZENvb3JkaW5hdGVzO1xuICB9O1xuXG4gIF9wcm90by5yZWFkRmVhdHVyZUZyb21UZXh0ID0gZnVuY3Rpb24gcmVhZEZlYXR1cmVGcm9tVGV4dCh0ZXh0LCBvcHRfb3B0aW9ucykge1xuICAgIGNvbnNvbGUuYXNzZXJ0KHRleHQubGVuZ3RoID4gMik7XG4gICAgY29uc29sZS5hc3NlcnQodGV4dFsxXSA9PT0gJygnKTtcbiAgICBjb25zb2xlLmFzc2VydCh0ZXh0W3RleHQubGVuZ3RoIC0gMV0gPT09ICcpJyk7XG4gICAgdmFyIHNwbGl0SW5kZXggPSB0ZXh0LmluZGV4T2YoJ34nKTtcbiAgICB2YXIgZ2VvbWV0cnlUZXh0ID0gc3BsaXRJbmRleCA+PSAwID8gdGV4dC5zdWJzdHJpbmcoMCwgc3BsaXRJbmRleCkgKyBcIilcIiA6IHRleHQ7XG4gICAgdmFyIGdlb21ldHJ5ID0gdGhpcy5yZWFkR2VvbWV0cnlGcm9tVGV4dChnZW9tZXRyeVRleHQsIG9wdF9vcHRpb25zKTtcbiAgICB2YXIgZmVhdHVyZSA9IG5ldyBvbEZlYXR1cmUoZ2VvbWV0cnkpO1xuXG4gICAgaWYgKHNwbGl0SW5kZXggPj0gMCkge1xuICAgICAgdmFyIGF0dHJpYnV0ZXNBbmRTdHlsZXNUZXh0ID0gdGV4dC5zdWJzdHJpbmcoc3BsaXRJbmRleCArIDEsIHRleHQubGVuZ3RoIC0gMSk7XG4gICAgICBzcGxpdEluZGV4ID0gYXR0cmlidXRlc0FuZFN0eWxlc1RleHQuaW5kZXhPZignficpO1xuICAgICAgdmFyIGF0dHJpYnV0ZXNUZXh0ID0gc3BsaXRJbmRleCA+PSAwID8gYXR0cmlidXRlc0FuZFN0eWxlc1RleHQuc3Vic3RyaW5nKDAsIHNwbGl0SW5kZXgpIDogYXR0cmlidXRlc0FuZFN0eWxlc1RleHQ7XG5cbiAgICAgIGlmIChhdHRyaWJ1dGVzVGV4dCAhPSAnJykge1xuICAgICAgICB2YXIgcGFydHMgPSBhdHRyaWJ1dGVzVGV4dC5zcGxpdCgnXFwnJyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIHZhciBwYXJ0ID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRzW2ldKTtcbiAgICAgICAgICB2YXIga2V5VmFsID0gcGFydC5zcGxpdCgnKicpO1xuICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGtleVZhbC5sZW5ndGggPT09IDIpO1xuICAgICAgICAgIHZhciBrZXkgPSBrZXlWYWxbMF07XG4gICAgICAgICAgdmFyIHZhbHVlID0ga2V5VmFsWzFdO1xuXG4gICAgICAgICAgaWYgKCF0aGlzLnNldFN0eWxlXyAmJiBMZWdhY3lQcm9wZXJ0aWVzX1trZXldKSB7XG4gICAgICAgICAgICBrZXkgPSBMZWdhY3lQcm9wZXJ0aWVzX1trZXldO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZlYXR1cmUuc2V0KGtleSwgY2FzdFZhbHVlXyhrZXksIHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNwbGl0SW5kZXggPj0gMCkge1xuICAgICAgICB2YXIgc3R5bGVzVGV4dCA9IGF0dHJpYnV0ZXNBbmRTdHlsZXNUZXh0LnN1YnN0cmluZyhzcGxpdEluZGV4ICsgMSk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0U3R5bGVfKSB7XG4gICAgICAgICAgc2V0U3R5bGVJbkZlYXR1cmVfKHN0eWxlc1RleHQsIGZlYXR1cmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFN0eWxlUHJvcGVydGllc18oc3R5bGVzVGV4dCwgZmVhdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmVhdHVyZTtcbiAgfTtcblxuICBfcHJvdG8ucmVhZEZlYXR1cmVzRnJvbVRleHQgPSBmdW5jdGlvbiByZWFkRmVhdHVyZXNGcm9tVGV4dCh0ZXh0LCBvcHRfb3B0aW9ucykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgY29uc29sZS5hc3NlcnQodGV4dFswXSA9PT0gJ0YnKTtcbiAgICB0aGlzLnByZXZYXyA9IDA7XG4gICAgdGhpcy5wcmV2WV8gPSAwO1xuICAgIHZhciBmZWF0dXJlcyA9IFtdO1xuICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZygxKTtcblxuICAgIHdoaWxlICh0ZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBpbmRleCA9IHRleHQuaW5kZXhPZignKScpO1xuICAgICAgY29uc29sZS5hc3NlcnQoaW5kZXggPj0gMCk7XG4gICAgICB2YXIgZmVhdHVyZSA9IHRoaXMucmVhZEZlYXR1cmVGcm9tVGV4dCh0ZXh0LnN1YnN0cmluZygwLCBpbmRleCArIDEpLCBvcHRfb3B0aW9ucyk7XG4gICAgICBmZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKGluZGV4ICsgMSk7XG4gICAgfVxuXG4gICAgZmVhdHVyZXMuZm9yRWFjaChmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgZm9yICh2YXIga2V5IGluIF90aGlzMi5kZWZhdWx0VmFsdWVzXykge1xuICAgICAgICB2YXIgcHJvcGVydHkgPSBMZWdhY3lQcm9wZXJ0aWVzX1trZXldO1xuXG4gICAgICAgIGlmIChmZWF0dXJlLmdldChwcm9wZXJ0eSkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGZlYXR1cmUuc2V0KHByb3BlcnR5LCBfdGhpczIuZGVmYXVsdFZhbHVlc19ba2V5XS5jYWxsKG51bGwsIGZlYXR1cmUpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmZWF0dXJlcztcbiAgfTtcblxuICBfcHJvdG8ucmVhZEdlb21ldHJ5RnJvbVRleHQgPSBmdW5jdGlvbiByZWFkR2VvbWV0cnlGcm9tVGV4dCh0ZXh0LCBvcHRfb3B0aW9ucykge1xuICAgIHZhciBnZW9tZXRyeVJlYWRlciA9IEdFT01FVFJZX1JFQURFUlNfW3RleHRbMF1dO1xuICAgIGNvbnNvbGUuYXNzZXJ0KGdlb21ldHJ5UmVhZGVyICE9PSB1bmRlZmluZWQpO1xuICAgIHJldHVybiBnZW9tZXRyeVJlYWRlci5jYWxsKHRoaXMsIHRleHQpO1xuICB9O1xuXG4gIF9wcm90by53cml0ZUZlYXR1cmVUZXh0ID0gZnVuY3Rpb24gd3JpdGVGZWF0dXJlVGV4dChmZWF0dXJlLCBvcHRfb3B0aW9ucykge1xuICAgIHZhciBlbmNvZGVkUGFydHMgPSBbXTtcbiAgICB2YXIgZW5jb2RlZEdlb21ldHJ5ID0gJyc7XG4gICAgdmFyIGdlb21ldHJ5ID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpO1xuXG4gICAgaWYgKGdlb21ldHJ5KSB7XG4gICAgICBlbmNvZGVkR2VvbWV0cnkgPSB0aGlzLndyaXRlR2VvbWV0cnlUZXh0KGdlb21ldHJ5LCBvcHRfb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGVuY29kZWRHZW9tZXRyeS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zb2xlLmFzc2VydChlbmNvZGVkR2VvbWV0cnlbZW5jb2RlZEdlb21ldHJ5Lmxlbmd0aCAtIDFdID09PSAnKScpO1xuICAgICAgZW5jb2RlZEdlb21ldHJ5ID0gZW5jb2RlZEdlb21ldHJ5LnN1YnN0cmluZygwLCBlbmNvZGVkR2VvbWV0cnkubGVuZ3RoIC0gMSk7XG4gICAgICBlbmNvZGVkUGFydHMucHVzaChlbmNvZGVkR2VvbWV0cnkpO1xuICAgIH1cblxuICAgIHZhciBlbmNvZGVkUHJvcGVydGllcyA9IFtdO1xuICAgIHZhciBwcm9wRnVuY3Rpb24gPSB0aGlzLnByb3BlcnRpZXNGdW5jdGlvbl8oZmVhdHVyZSk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcEZ1bmN0aW9uKSB7XG4gICAgICB2YXIgdmFsdWUgPSBwcm9wRnVuY3Rpb25ba2V5XTtcblxuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgJiYga2V5ICE9PSBmZWF0dXJlLmdldEdlb21ldHJ5TmFtZSgpKSB7XG4gICAgICAgIGlmIChlbmNvZGVkUHJvcGVydGllcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBlbmNvZGVkUHJvcGVydGllcy5wdXNoKCdcXCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBlbmNvZGVkID0gZW5jb2RlVVJJQ29tcG9uZW50KGtleS5yZXBsYWNlKC9bKCknKl0vZywgJ18nKSArIFwiKlwiICsgdmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9bKCknKl0vZywgJ18nKSk7XG4gICAgICAgIGVuY29kZWRQcm9wZXJ0aWVzLnB1c2goZW5jb2RlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVuY29kZWRQcm9wZXJ0aWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGVuY29kZWRQYXJ0cy5wdXNoKCd+Jyk7XG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShlbmNvZGVkUGFydHMsIGVuY29kZWRQcm9wZXJ0aWVzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbmNvZGVTdHlsZXNfKSB7XG4gICAgICB2YXIgc3R5bGVGdW5jdGlvbiA9IGZlYXR1cmUuZ2V0U3R5bGVGdW5jdGlvbigpO1xuXG4gICAgICBpZiAoc3R5bGVGdW5jdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBzdHlsZXMgPSBzdHlsZUZ1bmN0aW9uKGZlYXR1cmUsIDApO1xuXG4gICAgICAgIGlmIChzdHlsZXMgIT09IG51bGwpIHtcbiAgICAgICAgICB2YXIgZW5jb2RlZFN0eWxlcyA9IFtdO1xuICAgICAgICAgIHN0eWxlcyA9IEFycmF5LmlzQXJyYXkoc3R5bGVzKSA/IHN0eWxlcyA6IFtzdHlsZXNdO1xuICAgICAgICAgIGVuY29kZVN0eWxlc18oc3R5bGVzLCBnZW9tZXRyeS5nZXRUeXBlKCksIGVuY29kZWRTdHlsZXMpO1xuXG4gICAgICAgICAgaWYgKGVuY29kZWRTdHlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZW5jb2RlZFBhcnRzLnB1c2goJ34nKTtcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGVuY29kZWRQYXJ0cywgZW5jb2RlZFN0eWxlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZW5jb2RlZFBhcnRzLnB1c2goJyknKTtcbiAgICByZXR1cm4gZW5jb2RlZFBhcnRzLmpvaW4oJycpO1xuICB9O1xuXG4gIF9wcm90by53cml0ZUZlYXR1cmVzVGV4dCA9IGZ1bmN0aW9uIHdyaXRlRmVhdHVyZXNUZXh0KGZlYXR1cmVzLCBvcHRfb3B0aW9ucykge1xuICAgIHRoaXMucHJldlhfID0gMDtcbiAgICB0aGlzLnByZXZZXyA9IDA7XG4gICAgdmFyIHRleHRBcnJheSA9IFtdO1xuXG4gICAgaWYgKGZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRleHRBcnJheS5wdXNoKCdGJyk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IGZlYXR1cmVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgdGV4dEFycmF5LnB1c2godGhpcy53cml0ZUZlYXR1cmVUZXh0KGZlYXR1cmVzW2ldLCBvcHRfb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXh0QXJyYXkuam9pbignJyk7XG4gIH07XG5cbiAgX3Byb3RvLndyaXRlR2VvbWV0cnlUZXh0ID0gZnVuY3Rpb24gd3JpdGVHZW9tZXRyeVRleHQoZ2VvbWV0cnksIG9wdF9vcHRpb25zKSB7XG4gICAgdmFyIGdlb21ldHJ5V3JpdGVyID0gR0VPTUVUUllfV1JJVEVSU19bZ2VvbWV0cnkuZ2V0VHlwZSgpXTtcbiAgICBjb25zb2xlLmFzc2VydChnZW9tZXRyeVdyaXRlciAhPT0gdW5kZWZpbmVkKTtcbiAgICB2YXIgdHJhbnNmb3JtZWRHZW9tZXRyeSA9IG9sRm9ybWF0RmVhdHVyZS50cmFuc2Zvcm1XaXRoT3B0aW9ucyhnZW9tZXRyeSwgdHJ1ZSwgb3B0X29wdGlvbnMpO1xuICAgIHJldHVybiBnZW9tZXRyeVdyaXRlci5jYWxsKHRoaXMsIHRyYW5zZm9ybWVkR2VvbWV0cnkpO1xuICB9O1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0ob2xGb3JtYXRUZXh0RmVhdHVyZSk7XG5cbmV4cG9ydCB7IF9kZWZhdWx0IGFzIGRlZmF1bHQgfTtcblxuZnVuY3Rpb24gZGVmYXVsdFByb3BlcnRpZXNGdW5jdGlvbl8oZmVhdHVyZSkge1xuICByZXR1cm4gZmVhdHVyZS5nZXRQcm9wZXJ0aWVzKCk7XG59XG5cbmZ1bmN0aW9uIGVuY29kZVNpZ25lZE51bWJlcl8obnVtKSB7XG4gIHZhciBzaWduZWROdW0gPSBudW0gPDwgMTtcblxuICBpZiAobnVtIDwgMCkge1xuICAgIHNpZ25lZE51bSA9IH5zaWduZWROdW07XG4gIH1cblxuICByZXR1cm4gZW5jb2RlTnVtYmVyXyhzaWduZWROdW0pO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVOdW1iZXJfKG51bSkge1xuICB2YXIgZW5jb2RlZE51bWJlciA9ICcnO1xuXG4gIHdoaWxlIChudW0gPj0gMHgyMCkge1xuICAgIGVuY29kZWROdW1iZXIgKz0gQ0hBUjY0Xy5jaGFyQXQoMHgyMCB8IG51bSAmIDB4MWYpO1xuICAgIG51bSA+Pj0gNTtcbiAgfVxuXG4gIGVuY29kZWROdW1iZXIgKz0gQ0hBUjY0Xy5jaGFyQXQobnVtKTtcbiAgcmV0dXJuIGVuY29kZWROdW1iZXI7XG59XG5cbmZ1bmN0aW9uIGVuY29kZVN0eWxlc18oc3R5bGVzLCBnZW9tZXRyeVR5cGUsIGVuY29kZWRTdHlsZXMpIHtcbiAgdmFyIHN0eWxlVHlwZSA9IFN0eWxlVHlwZXNfW2dlb21ldHJ5VHlwZV07XG4gIGNvbnNvbGUuYXNzZXJ0KHN0eWxlVHlwZSAhPT0gdW5kZWZpbmVkKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBzdHlsZSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZmlsbFN0eWxlID0gc3R5bGUuZ2V0RmlsbCgpO1xuICAgIHZhciBpbWFnZVN0eWxlID0gc3R5bGUuZ2V0SW1hZ2UoKTtcbiAgICB2YXIgc3Ryb2tlU3R5bGUgPSBzdHlsZS5nZXRTdHJva2UoKTtcbiAgICB2YXIgdGV4dFN0eWxlID0gc3R5bGUuZ2V0VGV4dCgpO1xuXG4gICAgaWYgKHN0eWxlVHlwZSA9PSBuZ2VvRm9ybWF0RmVhdHVyZUhhc2hTdHlsZVR5cGUuUE9MWUdPTikge1xuICAgICAgaWYgKGZpbGxTdHlsZSAhPT0gbnVsbCkge1xuICAgICAgICBlbmNvZGVTdHlsZVBvbHlnb25fKGZpbGxTdHlsZSwgc3Ryb2tlU3R5bGUsIGVuY29kZWRTdHlsZXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3R5bGVUeXBlID09IG5nZW9Gb3JtYXRGZWF0dXJlSGFzaFN0eWxlVHlwZS5MSU5FX1NUUklORykge1xuICAgICAgaWYgKHN0cm9rZVN0eWxlICE9PSBudWxsKSB7XG4gICAgICAgIGVuY29kZVN0eWxlTGluZV8oc3Ryb2tlU3R5bGUsIGVuY29kZWRTdHlsZXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3R5bGVUeXBlID09IG5nZW9Gb3JtYXRGZWF0dXJlSGFzaFN0eWxlVHlwZS5QT0lOVCkge1xuICAgICAgaWYgKGltYWdlU3R5bGUgIT09IG51bGwpIHtcbiAgICAgICAgZW5jb2RlU3R5bGVQb2ludF8oaW1hZ2VTdHlsZSwgZW5jb2RlZFN0eWxlcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRleHRTdHlsZSAhPT0gbnVsbCkge1xuICAgICAgZW5jb2RlU3R5bGVUZXh0Xyh0ZXh0U3R5bGUsIGVuY29kZWRTdHlsZXMpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBlbmNvZGVTdHlsZUxpbmVfKHN0cm9rZVN0eWxlLCBlbmNvZGVkU3R5bGVzKSB7XG4gIGVuY29kZVN0eWxlU3Ryb2tlXyhzdHJva2VTdHlsZSwgZW5jb2RlZFN0eWxlcyk7XG59XG5cbmZ1bmN0aW9uIGVuY29kZVN0eWxlUG9pbnRfKGltYWdlU3R5bGUsIGVuY29kZWRTdHlsZXMpIHtcbiAgaWYgKGltYWdlU3R5bGUgaW5zdGFuY2VvZiBvbFN0eWxlQ2lyY2xlKSB7XG4gICAgdmFyIHJhZGl1cyA9IGltYWdlU3R5bGUuZ2V0UmFkaXVzKCk7XG5cbiAgICBpZiAoZW5jb2RlZFN0eWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBlbmNvZGVkU3R5bGVzLnB1c2goJ1xcJycpO1xuICAgIH1cblxuICAgIGVuY29kZWRTdHlsZXMucHVzaChlbmNvZGVVUklDb21wb25lbnQoXCJwb2ludFJhZGl1cypcIiArIHJhZGl1cykpO1xuICAgIHZhciBmaWxsU3R5bGUgPSBpbWFnZVN0eWxlLmdldEZpbGwoKTtcblxuICAgIGlmIChmaWxsU3R5bGUgIT09IG51bGwpIHtcbiAgICAgIGVuY29kZVN0eWxlRmlsbF8oZmlsbFN0eWxlLCBlbmNvZGVkU3R5bGVzKTtcbiAgICB9XG5cbiAgICB2YXIgc3Ryb2tlU3R5bGUgPSBpbWFnZVN0eWxlLmdldFN0cm9rZSgpO1xuXG4gICAgaWYgKHN0cm9rZVN0eWxlICE9PSBudWxsKSB7XG4gICAgICBlbmNvZGVTdHlsZVN0cm9rZV8oc3Ryb2tlU3R5bGUsIGVuY29kZWRTdHlsZXMpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBlbmNvZGVTdHlsZVBvbHlnb25fKGZpbGxTdHlsZSwgc3Ryb2tlU3R5bGUsIGVuY29kZWRTdHlsZXMpIHtcbiAgZW5jb2RlU3R5bGVGaWxsXyhmaWxsU3R5bGUsIGVuY29kZWRTdHlsZXMpO1xuXG4gIGlmIChzdHJva2VTdHlsZSAhPT0gbnVsbCkge1xuICAgIGVuY29kZVN0eWxlU3Ryb2tlXyhzdHJva2VTdHlsZSwgZW5jb2RlZFN0eWxlcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5jb2RlU3R5bGVGaWxsXyhmaWxsU3R5bGUsIGVuY29kZWRTdHlsZXMsIG9wdF9wcm9wZXJ0eU5hbWUpIHtcbiAgdmFyIHByb3BlcnR5TmFtZSA9IG9wdF9wcm9wZXJ0eU5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdF9wcm9wZXJ0eU5hbWUgOiAnZmlsbENvbG9yJztcbiAgdmFyIGZpbGxDb2xvciA9IGZpbGxTdHlsZS5nZXRDb2xvcigpO1xuXG4gIGlmIChmaWxsQ29sb3IgIT09IG51bGwpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmaWxsQ29sb3IpKSB7XG4gICAgICB2YXIgZmlsbENvbG9ySGV4ID0gcmdiQXJyYXlUb0hleChmaWxsQ29sb3IpO1xuXG4gICAgICBpZiAoZW5jb2RlZFN0eWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGVuY29kZWRTdHlsZXMucHVzaCgnXFwnJyk7XG4gICAgICB9XG5cbiAgICAgIGVuY29kZWRTdHlsZXMucHVzaChlbmNvZGVVUklDb21wb25lbnQocHJvcGVydHlOYW1lICsgXCIqXCIgKyBmaWxsQ29sb3JIZXgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5hc3NlcnQoZmFsc2UsICdvbmx5IHN1cHBvcnRpbmcgZmlsbCBjb2xvcnMnKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5jb2RlU3R5bGVTdHJva2VfKHN0cm9rZVN0eWxlLCBlbmNvZGVkU3R5bGVzKSB7XG4gIHZhciBzdHJva2VDb2xvciA9IHN0cm9rZVN0eWxlLmdldENvbG9yKCk7XG5cbiAgaWYgKHN0cm9rZUNvbG9yICE9PSBudWxsKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3Ryb2tlQ29sb3IpKSB7XG4gICAgICB2YXIgc3Ryb2tlQ29sb3JIZXggPSByZ2JBcnJheVRvSGV4KHN0cm9rZUNvbG9yKTtcblxuICAgICAgaWYgKGVuY29kZWRTdHlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBlbmNvZGVkU3R5bGVzLnB1c2goJ1xcJycpO1xuICAgICAgfVxuXG4gICAgICBlbmNvZGVkU3R5bGVzLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KFwic3Ryb2tlQ29sb3IqXCIgKyBzdHJva2VDb2xvckhleCkpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzdHJva2VXaWR0aCA9IHN0cm9rZVN0eWxlLmdldFdpZHRoKCk7XG5cbiAgaWYgKHN0cm9rZVdpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoZW5jb2RlZFN0eWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBlbmNvZGVkU3R5bGVzLnB1c2goJ1xcJycpO1xuICAgIH1cblxuICAgIGVuY29kZWRTdHlsZXMucHVzaChlbmNvZGVVUklDb21wb25lbnQoXCJzdHJva2VXaWR0aCpcIiArIHN0cm9rZVdpZHRoKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5jb2RlU3R5bGVUZXh0Xyh0ZXh0U3R5bGUsIGVuY29kZWRTdHlsZXMpIHtcbiAgdmFyIGZvbnRTdHlsZSA9IHRleHRTdHlsZS5nZXRGb250KCk7XG5cbiAgaWYgKGZvbnRTdHlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZvbnQgPSBmb250U3R5bGUuc3BsaXQoJyAnKTtcblxuICAgIGlmIChmb250Lmxlbmd0aCA+PSAzKSB7XG4gICAgICBpZiAoZW5jb2RlZFN0eWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGVuY29kZWRTdHlsZXMucHVzaCgnXFwnJyk7XG4gICAgICB9XG5cbiAgICAgIGVuY29kZWRTdHlsZXMucHVzaChlbmNvZGVVUklDb21wb25lbnQoXCJmb250U2l6ZSpcIiArIGZvbnRbMV0pKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZmlsbFN0eWxlID0gdGV4dFN0eWxlLmdldEZpbGwoKTtcblxuICBpZiAoZmlsbFN0eWxlICE9PSBudWxsKSB7XG4gICAgZW5jb2RlU3R5bGVGaWxsXyhmaWxsU3R5bGUsIGVuY29kZWRTdHlsZXMsICdmb250Q29sb3InKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWFkTGluZVN0cmluZ0dlb21ldHJ5Xyh0ZXh0KSB7XG4gIGNvbnNvbGUuYXNzZXJ0KHRleHQuc3Vic3RyaW5nKDAsIDIpID09PSAnbCgnKTtcbiAgY29uc29sZS5hc3NlcnQodGV4dFt0ZXh0Lmxlbmd0aCAtIDFdID09ICcpJyk7XG4gIHRleHQgPSB0ZXh0LnN1YnN0cmluZygyLCB0ZXh0Lmxlbmd0aCAtIDEpO1xuICB2YXIgZmxhdENvb3JkaW5hdGVzID0gdGhpcy5kZWNvZGVDb29yZGluYXRlc18odGV4dCk7XG4gIHJldHVybiBuZXcgb2xHZW9tTGluZVN0cmluZyhmbGF0Q29vcmRpbmF0ZXMsIG9sR2VvbUdlb21ldHJ5TGF5b3V0LlhZKTtcbn1cblxuZnVuY3Rpb24gcmVhZE11bHRpTGluZVN0cmluZ0dlb21ldHJ5Xyh0ZXh0KSB7XG4gIGNvbnNvbGUuYXNzZXJ0KHRleHQuc3Vic3RyaW5nKDAsIDIpID09PSAnTCgnKTtcbiAgY29uc29sZS5hc3NlcnQodGV4dFt0ZXh0Lmxlbmd0aCAtIDFdID09ICcpJyk7XG4gIHRleHQgPSB0ZXh0LnN1YnN0cmluZygyLCB0ZXh0Lmxlbmd0aCAtIDEpO1xuICB2YXIgZmxhdENvb3JkaW5hdGVzID0gW107XG4gIHZhciBlbmRzID0gW107XG4gIHZhciBsaW5lU3RyaW5ncyA9IHRleHQuc3BsaXQoJ1xcJycpO1xuXG4gIGZvciAodmFyIGkgPSAwLCBpaSA9IGxpbmVTdHJpbmdzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICBmbGF0Q29vcmRpbmF0ZXMgPSB0aGlzLmRlY29kZUNvb3JkaW5hdGVzXyhsaW5lU3RyaW5nc1tpXSwgZmxhdENvb3JkaW5hdGVzKTtcbiAgICBlbmRzW2ldID0gZmxhdENvb3JkaW5hdGVzLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiBuZXcgb2xHZW9tTXVsdGlMaW5lU3RyaW5nKGZsYXRDb29yZGluYXRlcywgb2xHZW9tR2VvbWV0cnlMYXlvdXQuWFksIGVuZHMpO1xufVxuXG5mdW5jdGlvbiByZWFkUG9pbnRHZW9tZXRyeV8odGV4dCkge1xuICBjb25zb2xlLmFzc2VydCh0ZXh0LnN1YnN0cmluZygwLCAyKSA9PT0gJ3AoJyk7XG4gIGNvbnNvbGUuYXNzZXJ0KHRleHRbdGV4dC5sZW5ndGggLSAxXSA9PSAnKScpO1xuICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMiwgdGV4dC5sZW5ndGggLSAxKTtcbiAgdmFyIGZsYXRDb29yZGluYXRlcyA9IHRoaXMuZGVjb2RlQ29vcmRpbmF0ZXNfKHRleHQpO1xuICBjb25zb2xlLmFzc2VydChmbGF0Q29vcmRpbmF0ZXMubGVuZ3RoID09PSAyKTtcbiAgcmV0dXJuIG5ldyBvbEdlb21Qb2ludChmbGF0Q29vcmRpbmF0ZXMsIG9sR2VvbUdlb21ldHJ5TGF5b3V0LlhZKTtcbn1cblxuZnVuY3Rpb24gcmVhZE11bHRpUG9pbnRHZW9tZXRyeV8odGV4dCkge1xuICBjb25zb2xlLmFzc2VydCh0ZXh0LnN1YnN0cmluZygwLCAyKSA9PT0gJ1AoJyk7XG4gIGNvbnNvbGUuYXNzZXJ0KHRleHRbdGV4dC5sZW5ndGggLSAxXSA9PSAnKScpO1xuICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMiwgdGV4dC5sZW5ndGggLSAxKTtcbiAgdmFyIGZsYXRDb29yZGluYXRlcyA9IHRoaXMuZGVjb2RlQ29vcmRpbmF0ZXNfKHRleHQpO1xuICByZXR1cm4gbmV3IG9sR2VvbU11bHRpUG9pbnQoZmxhdENvb3JkaW5hdGVzLCBvbEdlb21HZW9tZXRyeUxheW91dC5YWSk7XG59XG5cbmZ1bmN0aW9uIHJlYWRQb2x5Z29uR2VvbWV0cnlfKHRleHQpIHtcbiAgY29uc29sZS5hc3NlcnQodGV4dC5zdWJzdHJpbmcoMCwgMikgPT09ICdhKCcpO1xuICBjb25zb2xlLmFzc2VydCh0ZXh0W3RleHQubGVuZ3RoIC0gMV0gPT0gJyknKTtcbiAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDIsIHRleHQubGVuZ3RoIC0gMSk7XG4gIHZhciBmbGF0Q29vcmRpbmF0ZXMgPSBbXTtcbiAgdmFyIGVuZHMgPSBbXTtcbiAgdmFyIHJpbmdzID0gdGV4dC5zcGxpdCgnXFwnJyk7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGlpID0gcmluZ3MubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgIGZsYXRDb29yZGluYXRlcyA9IHRoaXMuZGVjb2RlQ29vcmRpbmF0ZXNfKHJpbmdzW2ldLCBmbGF0Q29vcmRpbmF0ZXMpO1xuICAgIHZhciBlbmQgPSBmbGF0Q29vcmRpbmF0ZXMubGVuZ3RoO1xuXG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIGZsYXRDb29yZGluYXRlc1tlbmQrK10gPSBmbGF0Q29vcmRpbmF0ZXNbMF07XG4gICAgICBmbGF0Q29vcmRpbmF0ZXNbZW5kKytdID0gZmxhdENvb3JkaW5hdGVzWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbGF0Q29vcmRpbmF0ZXNbZW5kKytdID0gZmxhdENvb3JkaW5hdGVzW2VuZHNbaSAtIDFdXTtcbiAgICAgIGZsYXRDb29yZGluYXRlc1tlbmQrK10gPSBmbGF0Q29vcmRpbmF0ZXNbZW5kc1tpIC0gMV0gKyAxXTtcbiAgICB9XG5cbiAgICBlbmRzW2ldID0gZW5kO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBvbEdlb21Qb2x5Z29uKGZsYXRDb29yZGluYXRlcywgb2xHZW9tR2VvbWV0cnlMYXlvdXQuWFksIGVuZHMpO1xufVxuXG5mdW5jdGlvbiByZWFkTXVsdGlQb2x5Z29uR2VvbWV0cnlfKHRleHQpIHtcbiAgY29uc29sZS5hc3NlcnQodGV4dC5zdWJzdHJpbmcoMCwgMikgPT09ICdBKCcpO1xuICBjb25zb2xlLmFzc2VydCh0ZXh0W3RleHQubGVuZ3RoIC0gMV0gPT0gJyknKTtcbiAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDIsIHRleHQubGVuZ3RoIC0gMSk7XG4gIHZhciBmbGF0Q29vcmRpbmF0ZXMgPSBbXTtcbiAgdmFyIGVuZHNzID0gW107XG4gIHZhciBwb2x5Z29ucyA9IHRleHQuc3BsaXQoJykoJyk7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGlpID0gcG9seWdvbnMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgIHZhciByaW5ncyA9IHBvbHlnb25zW2ldLnNwbGl0KCdcXCcnKTtcbiAgICB2YXIgZW5kcyA9IGVuZHNzW2ldID0gW107XG5cbiAgICBmb3IgKHZhciBqID0gMCwgamogPSByaW5ncy5sZW5ndGg7IGogPCBqajsgKytqKSB7XG4gICAgICBmbGF0Q29vcmRpbmF0ZXMgPSB0aGlzLmRlY29kZUNvb3JkaW5hdGVzXyhyaW5nc1tqXSwgZmxhdENvb3JkaW5hdGVzKTtcbiAgICAgIHZhciBlbmQgPSBmbGF0Q29vcmRpbmF0ZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoaiA9PT0gMCkge1xuICAgICAgICBmbGF0Q29vcmRpbmF0ZXNbZW5kKytdID0gZmxhdENvb3JkaW5hdGVzWzBdO1xuICAgICAgICBmbGF0Q29vcmRpbmF0ZXNbZW5kKytdID0gZmxhdENvb3JkaW5hdGVzWzFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmxhdENvb3JkaW5hdGVzW2VuZCsrXSA9IGZsYXRDb29yZGluYXRlc1tlbmRzW2ogLSAxXV07XG4gICAgICAgIGZsYXRDb29yZGluYXRlc1tlbmQrK10gPSBmbGF0Q29vcmRpbmF0ZXNbZW5kc1tqIC0gMV0gKyAxXTtcbiAgICAgIH1cblxuICAgICAgZW5kc1tqXSA9IGVuZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IG9sR2VvbU11bHRpUG9seWdvbihmbGF0Q29vcmRpbmF0ZXMsIG9sR2VvbUdlb21ldHJ5TGF5b3V0LlhZLCBlbmRzcyk7XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlSW5GZWF0dXJlXyh0ZXh0LCBmZWF0dXJlKSB7XG4gIGlmICh0ZXh0ID09ICcnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHByb3BlcnRpZXMgPSBnZXRTdHlsZVByb3BlcnRpZXNfKHRleHQsIGZlYXR1cmUpO1xuICB2YXIgZmlsbENvbG9yID0gcHJvcGVydGllc1snZmlsbENvbG9yJ107XG4gIHZhciBmb250U2l6ZSA9IHByb3BlcnRpZXNbJ2ZvbnRTaXplJ107XG4gIHZhciBmb250Q29sb3IgPSBwcm9wZXJ0aWVzWydmb250Q29sb3InXTtcbiAgdmFyIHBvaW50UmFkaXVzID0gcHJvcGVydGllc1sncG9pbnRSYWRpdXMnXTtcbiAgdmFyIHN0cm9rZUNvbG9yID0gcHJvcGVydGllc1snc3Ryb2tlQ29sb3InXTtcbiAgdmFyIHN0cm9rZVdpZHRoID0gcHJvcGVydGllc1snc3Ryb2tlV2lkdGgnXTtcbiAgdmFyIGZpbGxTdHlsZSA9IG51bGw7XG5cbiAgaWYgKGZpbGxDb2xvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZmlsbFN0eWxlID0gbmV3IG9sU3R5bGVGaWxsKHtcbiAgICAgIGNvbG9yOiBmaWxsQ29sb3JcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBzdHJva2VTdHlsZSA9IG51bGw7XG5cbiAgaWYgKHN0cm9rZUNvbG9yICE9PSB1bmRlZmluZWQgJiYgc3Ryb2tlV2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgIHN0cm9rZVN0eWxlID0gbmV3IG9sU3R5bGVTdHJva2Uoe1xuICAgICAgY29sb3I6IHN0cm9rZUNvbG9yLFxuICAgICAgd2lkdGg6IHN0cm9rZVdpZHRoXG4gICAgfSk7XG4gIH1cblxuICB2YXIgaW1hZ2VTdHlsZSA9IG51bGw7XG5cbiAgaWYgKHBvaW50UmFkaXVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBpbWFnZVN0eWxlID0gbmV3IG9sU3R5bGVDaXJjbGUoe1xuICAgICAgcmFkaXVzOiBwb2ludFJhZGl1cyxcbiAgICAgIGZpbGw6IGZpbGxTdHlsZSxcbiAgICAgIHN0cm9rZTogc3Ryb2tlU3R5bGVcbiAgICB9KTtcbiAgICBmaWxsU3R5bGUgPSBzdHJva2VTdHlsZSA9IG51bGw7XG4gIH1cblxuICB2YXIgdGV4dFN0eWxlID0gbnVsbDtcblxuICBpZiAoZm9udFNpemUgIT09IHVuZGVmaW5lZCAmJiBmb250Q29sb3IgIT09IHVuZGVmaW5lZCkge1xuICAgIHRleHRTdHlsZSA9IG5ldyBvbFN0eWxlVGV4dCh7XG4gICAgICBmb250OiBmb250U2l6ZSArIFwiIHNhbnMtc2VyaWZcIixcbiAgICAgIGZpbGw6IG5ldyBvbFN0eWxlRmlsbCh7XG4gICAgICAgIGNvbG9yOiBmb250Q29sb3JcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICB2YXIgc3R5bGUgPSBuZXcgb2xTdHlsZVN0eWxlKHtcbiAgICBmaWxsOiBmaWxsU3R5bGUsXG4gICAgaW1hZ2U6IGltYWdlU3R5bGUsXG4gICAgc3Ryb2tlOiBzdHJva2VTdHlsZSxcbiAgICB0ZXh0OiB0ZXh0U3R5bGVcbiAgfSk7XG4gIGZlYXR1cmUuc2V0U3R5bGUoc3R5bGUpO1xufVxuXG5mdW5jdGlvbiBzZXRTdHlsZVByb3BlcnRpZXNfKHRleHQsIGZlYXR1cmUpIHtcbiAgdmFyIHByb3BlcnRpZXMgPSBnZXRTdHlsZVByb3BlcnRpZXNfKHRleHQsIGZlYXR1cmUpO1xuICB2YXIgZ2VvbWV0cnkgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCk7XG5cbiAgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2xHZW9tUG9pbnQpIHtcbiAgICBpZiAocHJvcGVydGllc1snaXNMYWJlbCddIHx8IHByb3BlcnRpZXNbbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLklTX1RFWFRdKSB7XG4gICAgICBkZWxldGUgcHJvcGVydGllc1snc3Ryb2tlQ29sb3InXTtcbiAgICAgIGRlbGV0ZSBwcm9wZXJ0aWVzWydmaWxsQ29sb3InXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHByb3BlcnRpZXNbJ2ZvbnRDb2xvciddO1xuICAgICAgZGVsZXRlIHByb3BlcnRpZXNbJ2ZvbnRTaXplJ107XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRlbGV0ZSBwcm9wZXJ0aWVzWydmb250Q29sb3InXTtcblxuICAgIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sR2VvbUxpbmVTdHJpbmcpIHtcbiAgICAgIGRlbGV0ZSBwcm9wZXJ0aWVzWydmaWxsQ29sb3InXTtcbiAgICAgIGRlbGV0ZSBwcm9wZXJ0aWVzWydmaWxsT3BhY2l0eSddO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9wZXJ0aWVzWydmb250U2l6ZSddKSB7XG4gICAgdmFyIGZvbnRTaXplU3RyID0gcHJvcGVydGllc1snZm9udFNpemUnXTtcbiAgICB2YXIgZm9udFNpemUgPSBwYXJzZUZsb2F0KGZvbnRTaXplU3RyKTtcblxuICAgIGlmIChmb250U2l6ZVN0ci5pbmRleE9mKCdweCcpICE9PSAtMSkge1xuICAgICAgZm9udFNpemUgPSBNYXRoLnJvdW5kKGZvbnRTaXplIC8gMS4zMzMzMzMpO1xuICAgIH1cblxuICAgIHByb3BlcnRpZXNbJ2ZvbnRTaXplJ10gPSBmb250U2l6ZTtcbiAgfVxuXG4gIHZhciBjbG9uZSA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvcGVydGllc1trZXldO1xuXG4gICAgaWYgKExlZ2FjeVByb3BlcnRpZXNfW2tleV0pIHtcbiAgICAgIGNsb25lW0xlZ2FjeVByb3BlcnRpZXNfW2tleV1dID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsb25lW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBmZWF0dXJlLnNldFByb3BlcnRpZXMoY2xvbmUpO1xufVxuXG5mdW5jdGlvbiBjYXN0VmFsdWVfKGtleSwgdmFsdWUpIHtcbiAgdmFyIG51bVByb3BlcnRpZXMgPSBbbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLkFOR0xFLCBuZ2VvRm9ybWF0RmVhdHVyZVByb3BlcnRpZXMuT1BBQ0lUWSwgbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLlNJWkUsIG5nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5TVFJPS0UsICdwb2ludFJhZGl1cycsICdzdHJva2VXaWR0aCddO1xuICB2YXIgYm9vbFByb3BlcnRpZXMgPSBbbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLklTX0NJUkNMRSwgbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLklTX1JFQ1RBTkdMRSwgbmdlb0Zvcm1hdEZlYXR1cmVQcm9wZXJ0aWVzLklTX1RFWFQsIG5nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5TSE9XX01FQVNVUkUsIG5nZW9Gb3JtYXRGZWF0dXJlUHJvcGVydGllcy5TSE9XX0xBQkVMLCAnaXNDaXJjbGUnLCAnaXNSZWN0YW5nbGUnLCAnaXNMYWJlbCcsICdzaG93TWVhc3VyZScsICdzaG93TGFiZWwnXTtcblxuICBpZiAobnVtUHJvcGVydGllcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgcmV0dXJuICt2YWx1ZTtcbiAgfSBlbHNlIGlmIChib29sUHJvcGVydGllcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydGllc18odGV4dCwgZmVhdHVyZSkge1xuICB2YXIgcGFydHMgPSB0ZXh0LnNwbGl0KCdcXCcnKTtcbiAgdmFyIHByb3BlcnRpZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIHBhcnQgPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbaV0pO1xuICAgIHZhciBrZXlWYWwgPSBwYXJ0LnNwbGl0KCcqJyk7XG4gICAgY29uc29sZS5hc3NlcnQoa2V5VmFsLmxlbmd0aCA9PT0gMik7XG4gICAgdmFyIGtleSA9IGtleVZhbFswXTtcbiAgICB2YXIgdmFsID0ga2V5VmFsWzFdO1xuICAgIHByb3BlcnRpZXNba2V5XSA9IGNhc3RWYWx1ZV8oa2V5LCB2YWwpO1xuICB9XG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIHdyaXRlTGluZVN0cmluZ0dlb21ldHJ5XyhnZW9tZXRyeSkge1xuICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbEdlb21MaW5lU3RyaW5nKSB7XG4gICAgdmFyIGZsYXRDb29yZGluYXRlcyA9IGdlb21ldHJ5LmdldEZsYXRDb29yZGluYXRlcygpO1xuICAgIHZhciBzdHJpZGUgPSBnZW9tZXRyeS5nZXRTdHJpZGUoKTtcbiAgICB2YXIgZW5kID0gZmxhdENvb3JkaW5hdGVzLmxlbmd0aDtcbiAgICByZXR1cm4gXCJsKFwiICsgdGhpcy5lbmNvZGVDb29yZGluYXRlc18oZmxhdENvb3JkaW5hdGVzLCBzdHJpZGUsIDAsIGVuZCkgKyBcIilcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiB3cml0ZU11bHRpTGluZVN0cmluZ0dlb21ldHJ5XyhnZW9tZXRyeSkge1xuICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbEdlb21NdWx0aUxpbmVTdHJpbmcpIHtcbiAgICB2YXIgZW5kcyA9IGdlb21ldHJ5LmdldEVuZHMoKTtcbiAgICB2YXIgbGluZVN0cmluZ0NvdW50ID0gZW5kcy5sZW5ndGg7XG4gICAgdmFyIGZsYXRDb29yZGluYXRlcyA9IGdlb21ldHJ5LmdldEZsYXRDb29yZGluYXRlcygpO1xuICAgIHZhciBzdHJpZGUgPSBnZW9tZXRyeS5nZXRTdHJpZGUoKTtcbiAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICB2YXIgdGV4dEFycmF5ID0gWydMKCddO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lU3RyaW5nQ291bnQ7ICsraSkge1xuICAgICAgdmFyIGVuZCA9IGVuZHNbaV07XG4gICAgICB2YXIgdGV4dCA9IHRoaXMuZW5jb2RlQ29vcmRpbmF0ZXNfKGZsYXRDb29yZGluYXRlcywgc3RyaWRlLCBvZmZzZXQsIGVuZCk7XG5cbiAgICAgIGlmIChpICE9PSAwKSB7XG4gICAgICAgIHRleHRBcnJheS5wdXNoKCdcXCcnKTtcbiAgICAgIH1cblxuICAgICAgdGV4dEFycmF5LnB1c2godGV4dCk7XG4gICAgICBvZmZzZXQgPSBlbmQ7XG4gICAgfVxuXG4gICAgdGV4dEFycmF5LnB1c2goJyknKTtcbiAgICByZXR1cm4gdGV4dEFycmF5LmpvaW4oJycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHdyaXRlUG9pbnRHZW9tZXRyeV8oZ2VvbWV0cnkpIHtcbiAgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2xHZW9tUG9pbnQpIHtcbiAgICB2YXIgZmxhdENvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0RmxhdENvb3JkaW5hdGVzKCk7XG4gICAgdmFyIHN0cmlkZSA9IGdlb21ldHJ5LmdldFN0cmlkZSgpO1xuICAgIHZhciBlbmQgPSBmbGF0Q29vcmRpbmF0ZXMubGVuZ3RoO1xuICAgIHJldHVybiBcInAoXCIgKyB0aGlzLmVuY29kZUNvb3JkaW5hdGVzXyhmbGF0Q29vcmRpbmF0ZXMsIHN0cmlkZSwgMCwgZW5kKSArIFwiKVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIHdyaXRlTXVsdGlQb2ludEdlb21ldHJ5XyhnZW9tZXRyeSkge1xuICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbEdlb21NdWx0aVBvaW50KSB7XG4gICAgdmFyIGZsYXRDb29yZGluYXRlcyA9IGdlb21ldHJ5LmdldEZsYXRDb29yZGluYXRlcygpO1xuICAgIHZhciBzdHJpZGUgPSBnZW9tZXRyeS5nZXRTdHJpZGUoKTtcbiAgICB2YXIgZW5kID0gZmxhdENvb3JkaW5hdGVzLmxlbmd0aDtcbiAgICByZXR1cm4gXCJQKFwiICsgdGhpcy5lbmNvZGVDb29yZGluYXRlc18oZmxhdENvb3JkaW5hdGVzLCBzdHJpZGUsIDAsIGVuZCkgKyBcIilcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbmNvZGVSaW5nc18oZmxhdENvb3JkaW5hdGVzLCBzdHJpZGUsIG9mZnNldCwgZW5kcywgdGV4dEFycmF5KSB7XG4gIHZhciBsaW5lYXJSaW5nQ291bnQgPSBlbmRzLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVhclJpbmdDb3VudDsgKytpKSB7XG4gICAgdmFyIGVuZCA9IGVuZHNbaV0gLSBzdHJpZGU7XG4gICAgdmFyIHRleHQgPSB0aGlzLmVuY29kZUNvb3JkaW5hdGVzXyhmbGF0Q29vcmRpbmF0ZXMsIHN0cmlkZSwgb2Zmc2V0LCBlbmQpO1xuXG4gICAgaWYgKGkgIT09IDApIHtcbiAgICAgIHRleHRBcnJheS5wdXNoKCdcXCcnKTtcbiAgICB9XG5cbiAgICB0ZXh0QXJyYXkucHVzaCh0ZXh0KTtcbiAgICBvZmZzZXQgPSBlbmRzW2ldO1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldDtcbn1cblxuZnVuY3Rpb24gd3JpdGVQb2x5Z29uR2VvbWV0cnlfKGdlb21ldHJ5KSB7XG4gIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sR2VvbVBvbHlnb24pIHtcbiAgICB2YXIgZmxhdENvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0RmxhdENvb3JkaW5hdGVzKCk7XG4gICAgdmFyIHN0cmlkZSA9IGdlb21ldHJ5LmdldFN0cmlkZSgpO1xuICAgIHZhciBlbmRzID0gZ2VvbWV0cnkuZ2V0RW5kcygpO1xuICAgIHZhciBvZmZzZXQgPSAwO1xuICAgIHZhciB0ZXh0QXJyYXkgPSBbJ2EoJ107XG4gICAgZW5jb2RlUmluZ3NfLmNhbGwodGhpcywgZmxhdENvb3JkaW5hdGVzLCBzdHJpZGUsIG9mZnNldCwgZW5kcywgdGV4dEFycmF5KTtcbiAgICB0ZXh0QXJyYXkucHVzaCgnKScpO1xuICAgIHJldHVybiB0ZXh0QXJyYXkuam9pbignJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gd3JpdGVNdWx0aVBvbHlnb25HZW9tZXRyeV8oZ2VvbWV0cnkpIHtcbiAgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2xHZW9tTXVsdGlQb2x5Z29uKSB7XG4gICAgdmFyIGZsYXRDb29yZGluYXRlcyA9IGdlb21ldHJ5LmdldEZsYXRDb29yZGluYXRlcygpO1xuICAgIHZhciBzdHJpZGUgPSBnZW9tZXRyeS5nZXRTdHJpZGUoKTtcbiAgICB2YXIgZW5kc3MgPSBnZW9tZXRyeS5nZXRFbmRzcygpO1xuICAgIHZhciBwb2x5Z29uQ291bnQgPSBlbmRzcy5sZW5ndGg7XG4gICAgdmFyIG9mZnNldCA9IDA7XG4gICAgdmFyIHRleHRBcnJheSA9IFsnQSddO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2x5Z29uQ291bnQ7ICsraSkge1xuICAgICAgdmFyIGVuZHMgPSBlbmRzc1tpXTtcbiAgICAgIHRleHRBcnJheS5wdXNoKCcoJyk7XG4gICAgICBvZmZzZXQgPSBlbmNvZGVSaW5nc18uY2FsbCh0aGlzLCBmbGF0Q29vcmRpbmF0ZXMsIHN0cmlkZSwgb2Zmc2V0LCBlbmRzLCB0ZXh0QXJyYXkpO1xuICAgICAgdGV4dEFycmF5LnB1c2goJyknKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dEFycmF5LmpvaW4oJycpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuYXNzZXJ0KCdXcm9uZyBnZW9tZXRyeSB0eXBlJyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gIExJTkVfU1RSSU5HOiAnTGluZVN0cmluZycsXG4gIFBPSU5UOiAnUG9pbnQnLFxuICBQT0xZR09OOiAnUG9seWdvbidcbn07Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqeUJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=