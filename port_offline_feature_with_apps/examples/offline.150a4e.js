(function(e){function t(t){var n=t[0];var a=t[1];var s=t[2];var l,c,f=0,p=[];for(;f<n.length;f++){c=n[f];if(r[c]){p.push(r[c][0])}r[c]=0}for(l in a){if(Object.prototype.hasOwnProperty.call(a,l)){e[l]=a[l]}}if(u)u(t);while(p.length){p.shift()()}i.push.apply(i,s||[]);return o()}function o(){var e;for(var t=0;t<i.length;t++){var o=i[t];var n=true;for(var s=1;s<o.length;s++){var l=o[s];if(r[l]!==0)n=false}if(n){i.splice(t--,1);e=a(a.s=o[0])}}return e}var n={};var r={12:0};var i=[];function a(t){if(n[t]){return n[t].exports}var o=n[t]={i:t,l:false,exports:{}};e[t].call(o.exports,o,o.exports,a);o.l=true;return o.exports}a.m=e;a.c=n;a.d=function(e,t,o){if(!a.o(e,t)){Object.defineProperty(e,t,{configurable:false,enumerable:true,get:o})}};a.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};a.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};a.d(t,"a",t);return t};a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[];var l=s.push.bind(s);s.push=t;s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([366,0]);return o()})({321:function(e,t,o){"use strict";(function(e){var n=o(132);function r(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var i=function e(t,o,n){var r=o(function(){return n.check(undefined)},2e3,false);return{request:function e(t){return t},requestError:function e(o){return t.reject(o)},response:function e(t){return t},responseError:function e(o){r();return t.reject(o)}}};i.$inject=["$q","ngeoDebounce","ngeoNetworkStatus"];i.$inject=["$q","ngeoDebounce","ngeoNetworkStatus"];var a=function(){t.$inject=["$document","$window","$timeout","$rootScope","ngeoOfflineTestUrl"];function t(e,o,n,i,a){r(this,t);this.$document_=e;this.$window_=o;this.$timeout_=n;this.$rootScope_=i;this.ngeoOfflineTestUrl_=a;this.count_=0;this.offline_;this.promise_;this.initialize_()}t.prototype.initialize_=function e(){var t=this;this.offline_=!this.$window_.navigator.onLine;this.$window_.addEventListener("offline",function(){t.triggerChangeStatusEvent_(true)});this.$window_.addEventListener("online",function(){t.check(undefined)});this.$document_.ajaxError(function(e,o,n,r){if(!/^(canceled|abort)$/.test(r)){t.check(2e3)}})};t.prototype.check=function t(o){var n=this;if(this.promise_){this.$timeout_.cancel(this.promise_);this.promise_=undefined}if(o!==undefined){this.count_++;this.promise_=this.$timeout_(function(){return n.check()},o);return}e.ajax({method:"GET",url:this.ngeoOfflineTestUrl_,timeout:1e3,success:function e(){n.count_=0;if(n.offline_){n.triggerChangeStatusEvent_(false)}},error:function e(){n.count_++;if(n.count_>2&&!n.offline_){n.triggerChangeStatusEvent_(true)}}})};t.prototype.triggerChangeStatusEvent_=function e(t){this.offline_=t;this.$rootScope_.$digest()};t.prototype.isDisconnected=function e(){return!!this.offline_};return t}();var s="ngeoNetworkStatus";a.module=angular.module(s,[n["a"].name]);a.module.factory("httpInterceptor",i);a.module.service(s,a);a.module.configFunction_=function(e){e.interceptors.push("httpInterceptor")};a.module.configFunction_.$inject=["$httpProvider"];a.module.config(a.module.configFunction_);a.module.value("ngeoOfflineTestUrl","");var l=a;t["a"]=l}).call(this,o(51))},339:function(e,t,o){"use strict";o.r(t);var n=o(484);var r=o(53);var i=o(19);var a=o(25);var s=o(17);var l=o(35);var c=o(22);var u=o(162);var f=o(258);var p=o(88);var d=o(33);var g=o(74);var h=o(14);var v=o(29);var m=o(21);var y=o(57);function _(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var b=angular.module("ngeoOffline",[u["a"].module.name,f["a"].name]);b.value("ngeoOfflineTemplateUrl",function(e,t){var o=t["ngeoOfflineTemplateurl"];return o!==undefined?o:"ngeo/offline/component.html"});b.run(["$templateCache",function(e){e.put("ngeo/offline/component.html",o(365))}]);w.$inject=["$element","$attrs","ngeoOfflineTemplateUrl"];function w(e,t,o){return o(e,t)}b.component_={bindings:{map:"<ngeoOfflineMap",extentSize:"<?ngeoOfflineExtentsize",maskMargin:"<?ngeoOfflineMaskMargin",minZoom:"<?ngeoOfflineMinZoom",maxZoom:"<?ngeoOfflineMaxZoom"},controller:"ngeoOfflineController",templateUrl:w};b.component("ngeoOffline",b.component_);b.Controller=function(){e.$inject=["$timeout","ngeoFeatureOverlayMgr","ngeoOfflineServiceManager","ngeoOfflineConfiguration","ngeoOfflineMode","ngeoNetworkStatus"];function e(t,o,n,r,i,a){var s=this;_(this,e);this.$timeout_=t;this.ngeoOfflineServiceManager_=n;this.ngeoOfflineConfiguration_=r;this.offlineMode=i;this.networkStatus=a;this.map;this.extentSize;this.featuresOverlay_=o.getFeatureOverlay();this.overlayCollection_=new d["b"];this.featuresOverlay_.setFeatures(this.overlayCollection_);this.postcomposeListener_;this.postComposeListenerKey_=null;this.dataPolygon_=null;this.selectingExtent=false;this.downloading=false;this.progressPercents=0;this.menuDisplayed=false;this.displayAlertAbortDownload=false;this.displayAlertLoadData=false;this.displayAlertNoLayer=false;this.maskMargin;this.minZoom;this.maxZoom;this.originalMinZoom;this.originalMaxZoom;this.estimatedLoadDataSize;this.progressCallback_=function(e){var t=e.detail["progress"];s.progressPercents=Math.floor(t*100);if(t===1){s.finishDownload_()}s.$timeout_(function(){},0)}}e.prototype.$onInit=function e(){this.offlineMode.registerComponent(this);this.postcomposeListener_=this.createMaskPostcompose_();this.ngeoOfflineConfiguration_.on("progress",this.progressCallback_);this.maskMargin=this.maskMargin||100;this.minZoom=this.minZoom||10;this.maxZoom=this.maxZoom||15};e.prototype.$onDestroy=function e(){this.ngeoOfflineConfiguration_.un("progress",this.progressCallback_)};e.prototype.hasData=function e(){return this.ngeoOfflineConfiguration_.hasOfflineData()};e.prototype.computeSizeAndDisplayAlertLoadData=function e(){this.estimatedLoadDataSize=this.ngeoOfflineConfiguration_.estimateLoadDataSize(this.map);if(this.estimatedLoadDataSize>0){this.displayAlertLoadData=true}else{this.displayAlertNoLayer=true}};e.prototype.toggleViewExtentSelection=function e(t){this.menuDisplayed=false;this.selectingExtent=!this.selectingExtent;if(this.postComposeListenerKey_){Object(g["b"])(this.postComposeListenerKey_);this.postComposeListenerKey_=null;this.removeZoomConstraints_()}if(this.selectingExtent&&!this.postComposeListenerKey_){this.addZoomConstraints_();this.postComposeListenerKey_=this.map.on("postcompose",this.postcomposeListener_)}this.map.render()};e.prototype.validateExtent=function e(){this.progressPercents=0;var t=this.getDowloadExtent_();this.ngeoOfflineServiceManager_.save(t,this.map);this.downloading=true};e.prototype.finishDownload_=function e(){this.downloading=false;this.toggleViewExtentSelection(true)};e.prototype.askAbortDownload=function e(){this.displayAlertAbortDownload=true};e.prototype.abortDownload=function e(){this.downloading=false;this.ngeoOfflineServiceManager_.cancel();this.deleteData()};e.prototype.showMenu=function e(){this.menuDisplayed=true};e.prototype.activateOfflineMode=function e(){var t=this;this.ngeoOfflineServiceManager_.restore(this.map).then(function(e){t.dataPolygon_=t.createPolygonFromExtent_(e);var o=t.map.getSize();t.map.getView().fit(e,{size:o});t.menuDisplayed=false;t.displayExtent_();t.offlineMode.enable()})};e.prototype.deactivateOfflineMode=function e(){window.location.reload()};e.prototype.toggleExtentVisibility=function e(){if(this.isExtentVisible()){this.overlayCollection_.clear()}else{this.displayExtent_()}};e.prototype.isExtentVisible=function e(){return this.overlayCollection_.getLength()>0};e.prototype.deleteData=function e(){var t=this;this.overlayCollection_.clear();this.dataPolygon_=null;if(this.networkStatus.isDisconnected()){this.menuDisplayed=false}var o=function e(){if(t.offlineMode.isEnabled()){t.deactivateOfflineMode()}};this.ngeoOfflineConfiguration_.clear().then(o)};e.prototype.displayExtent_=function e(){if(!this.isExtentVisible()){var t=new h["a"](this.dataPolygon_);this.overlayCollection_.push(t)}};e.prototype.addZoomConstraints_=function e(){var t=this.map.getView();var o=t.getZoom();this.originalMinZoom=t.getMinZoom();this.originalMaxZoom=t.getMaxZoom();if(o<this.minZoom){t.setZoom(this.minZoom)}else if(o>this.maxZoom){t.setZoom(this.maxZoom)}t.setMaxZoom(this.maxZoom);t.setMinZoom(this.minZoom)};e.prototype.removeZoomConstraints_=function e(){var t=this.map.getView();t.setMaxZoom(this.originalMaxZoom);t.setMinZoom(this.originalMinZoom)};e.prototype.createMaskPostcompose_=function e(){var t=this;return function(e){var o=e.context;var n=e.frameState;var r=n.viewState.resolution;var i=n.size[0]*n.pixelRatio;var a=n.size[1]*n.pixelRatio;var s=[i/2,a/2];var l=t.extentSize?t.extentSize/r*y["b"]:Math.min(i,a)-t.maskMargin*2;var c=Math.ceil(l/2);o.beginPath();o.moveTo(0,0);o.lineTo(i,0);o.lineTo(i,a);o.lineTo(0,a);o.lineTo(0,0);o.closePath();var u=t.createExtent_(s,c);o.moveTo(u[0],u[1]);o.lineTo(u[0],u[3]);o.lineTo(u[2],u[3]);o.lineTo(u[2],u[1]);o.lineTo(u[0],u[1]);o.closePath();o.fillStyle="rgba(0, 5, 25, 0.5)";o.fill()}};e.prototype.createPolygonFromExtent_=function e(t){var o=this.map.getView().getProjection().getExtent();return new v["b"]([Object(p["b"])(o),Object(p["b"])(t)],m["a"].XY)};e.prototype.createExtent_=function e(t,o){var n=t[0]-o;var r=t[1]-o;var i=t[0]+o;var a=t[1]+o;return[n,r,i,a]};e.prototype.getDowloadExtent_=function e(){var t=this.map.getView().getCenter();var o=Math.ceil(this.extentSize||this.getExtentSize_())/2;return this.createExtent_(t,o)};e.prototype.getExtentSize_=function e(){var t=this.map.getSize();var o=y["b"]*Math.min(t[0],t[1])-this.maskMargin*2;var n=o*this.map.getView().getResolution()/y["b"];return n};return e}();b.controller("ngeoOfflineController",b.Controller);var S=b;var O=o(321);function M(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var x=function(){e.$inject=["$injector"];function e(t){M(this,e);this.$injector_=t;this.saveService_=null;this.restoreService_=null}e.prototype.getOfflineService_=function e(t,o){if(typeof t==="string"){if(!this.$injector_.has(t)){console.error("The offline "+o+" service could not be found");return}var n=this.$injector_.get(t);if(!n[o]){console.error("The offline service "+t+" does not have a "+o+" method");return}return n}if(!t[o]){console.error("The provided offline service does not have a "+o+" method");return}return t};e.prototype.setSaveService=function e(t){this.saveService_=this.getOfflineService_(t,"save")};e.prototype.setRestoreService=function e(t){this.restoreService_=this.getOfflineService_(t,"restore")};e.prototype.cancel=function e(){if(!this.saveService_){console.warn("You must register a saveService first");return}this.saveService_.cancel()};e.prototype.save=function e(t,o){if(!this.saveService_){console.warn("You must register a saveService first");return}this.saveService_.save(t,o)};e.prototype.restore=function e(t){if(!this.restoreService_){console.warn("You must register a restoreService first");return Promise.reject()}return this.restoreService_.restore(t)};return e}();x.module=angular.module("ngeoOfflineServiceManager",[]);x.module.service("ngeoOfflineServiceManager",x);var T=x;var k=o(2);var D=o(96);var E=o(116);function C(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function $(e){return new Promise(function(t,o){var n=new FileReader;n.onload=function(){t(n.result)};n.onerror=o;n.readAsDataURL(e)})}var A=function(){function e(t,o,n){C(this,e);this.maxNumberOfWorkers_=n;this.wasStarted_=false;this.tiles_=t;this.callbacks_=o;this.allCount_=0;this.okCount_=0;this.koCount_=0;this.requestedCount_=0;this.resolvePromise_;this.promise_=null;this.tileIndex_=0;this.cancel_=false}e.prototype.cancel=function e(){this.cancel_=true};e.prototype.downloadTile_=function e(){var t=this;if(this.cancel_||this.tileIndex_>=this.tiles_.length){return}var o=this.tiles_[this.tileIndex_++];var n=o.url;var r=new XMLHttpRequest;r.tileUrl=o.url;r.open("GET",n,true);r.responseType="blob";var i=function e(){if(t.allCount_===t.tiles_.length){t.resolvePromise_()}t.downloadTile_()};var a=function e(o){if(t.cancel_){return}++t.allCount_;++t.koCount_;var n=t.allCount_/t.tiles_.length;t.callbacks_.onTileDownloadError(n).then(i,i)};var s=function e(n){var r=n.target.response;if(r&&r.size!==0){$(r).then(function(e){if(t.cancel_){return}++t.allCount_;++t.okCount_;o.response=e;var n=t.allCount_/t.tiles_.length;t.callbacks_.onTileDownloadSuccess(n,o).then(i,i)},function(){if(t.cancel_){return}a(n)})}else{if(t.cancel_){return}++t.allCount_;++t.okCount_;t.callbacks_.onTileDownloadSuccess(t.allCount_/t.tiles_.length,o).then(i,i)}};r.onload=s;r.onerror=a;r.onabort=a;r.ontimeout=a;r.send();++this.requestedCount_};e.prototype.download=function e(){var t=this;if(this.promise_){return this.promise_}this.promise_=new Promise(function(e,o){t.resolvePromise_=e});k["a"].assert(this.tiles_);if(this.tiles_.length===0){this.callbacks_.onTileDownloadError(1);this.resolvePromise_()}else{for(var o=0;o<this.maxNumberOfWorkers_;++o){this.downloadTile_()}}return this.promise_};return e}();var L=A;function z(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function j(e,t){var o=0;for(var n=0;n<e.length;++n){o+=Math.pow(e[1]-t[1],2)}return o}var P=function(){e.$inject=["ngeoOfflineConfiguration"];function e(t){z(this,e);this.configuration_=t;this.tileDownloader_=null}e.prototype.cancel=function e(){this.tileDownloader_.cancel()};e.prototype.queueLayerTiles_=function e(t,o){var n=t.map,r=t.source,i=t.extentByZoom;if(!r){return}k["a"].assert(r instanceof D["a"]||r instanceof E["a"]);var a=n.getView().getProjection();var s=r.getTileGrid();var l=r.getTileUrlFunction();k["a"].assert(i);var c=function e(t){var n=t.zoom;var r=t.extent;var i=[];var c=void 0,u=void 0,f=void 0,p=void 0;s.forEachTileCoord(r,n,function(e){f=e[1];p=e[2];if(c===undefined){c=e[1];u=e[2]}var t=l(e,y["b"],a);k["a"].assert(t);var o={coord:e,url:t};i.push(o)});var d=[n,(c+f)/2,(u+p)/2];i.sort(function(e,t){return j(e.coord,d)-j(t.coord,d)});o.push.apply(o,i)};for(var u=i,f=Array.isArray(u),p=0,u=f?u:u[Symbol.iterator]();;){var d;if(f){if(p>=u.length)break;d=u[p++]}else{p=u.next();if(p.done)break;d=p.value}var g=d;c(g)}};e.prototype.save=function e(t,o){var n=this;var r=this.configuration_.createLayerMetadatas(o,t);var i=[];var a=[];var s=[];for(var l=r,c=Array.isArray(l),u=0,l=c?l:l[Symbol.iterator]();;){var f;if(c){if(u>=l.length)break;f=l[u++]}else{u=l.next();if(u.done)break;f=u.value}var p=f;if(p.layerType==="tile"){var d=[];this.queueLayerTiles_(p,d);a.push.apply(a,d)}i.push({backgroundLayer:p.backgroundLayer,layerType:p.layerType,layerSerialization:p.layerSerialization,key:this.configuration_.getLayerKey(p)});p.extentByZoom.forEach(function(e){var t=e.zoom;if(s.indexOf(t)<0){s.push(t)}})}var g={extent:t,layers:i,zooms:s.sort(function(e,t){return e<t?-1:1})};var h=this.configuration_.setItem("offline_content",g);this.tileDownloader_=new L(a,this.configuration_,this.configuration_.getMaxNumberOfParallelDownloads());var v=this.tileDownloader_.download();var m=Promise.all([h,v]);var y=function e(){return n.configuration_.setHasOfflineData(true)};m.then(y,y);return m};return e}();var I="offlineDownloader";P.module=angular.module(I,[]).service(I,P);var Z=P;var N=Z;var R=o(269);function W(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var U=function(){e.$inject=["ngeoOfflineConfiguration","ngeoBackgroundLayerMgr"];function e(t,o){W(this,e);this.configuration_=t;this.ngeoBackgroundLayerMgr_=o}e.prototype.restore=function e(t){var o=this;return this.configuration_.getItem("offline_content").then(function(e){return o.doRestore(t,e)})};e.prototype.doRestore=function e(t,o){t.getLayerGroup().getLayers().clear();for(var n=o.layers,r=Array.isArray(n),i=0,n=r?n:n[Symbol.iterator]();;){var a;if(r){if(i>=n.length)break;a=n[i++]}else{i=n.next();if(i.done)break;a=i.value}var s=a;var l=this.configuration_.recreateOfflineLayer(s);if(l){t.addLayer(l);if(s.backgroundLayer){this.ngeoBackgroundLayerMgr_.set(t,l)}}}return o.extent};return e}();var V="ngeoOfflineRestorer";U.module=angular.module(V,[R["a"].module.name]).service(V,U);var B=U;var G=B;function F(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var J=function(){e.$inject=["ngeoOfflineConfiguration"];function e(t){F(this,e);this.enabled_=false;this.component_;this.ngeoOfflineConfiguration_=t}e.prototype.isEnabled=function e(){return this.enabled_};e.prototype.enable=function e(){this.enabled_=true};e.prototype.registerComponent=function e(t){this.component_=t};e.prototype.activateOfflineMode=function e(){this.component_.activateOfflineMode()};e.prototype.hasData=function e(){return this.ngeoOfflineConfiguration_.hasOfflineData()};return e}();J.module=angular.module("ngeoOfflineMode",[]);J.module.service("ngeoOfflineMode",J);var q=J;var H=angular.module("ngeoOfflineModule",[S.name,O["a"].module.name,T.module.name,N.module.name,G.module.name,q.module.name]);H.value("ngeoOfflineGutter",96);var K=H;var Y=o(77);var Q=o(38);var X=o(76);var ee=o(7);var te=o(165);var oe=o(71);var ne=o(166);var re=o(194);var ie=o(186);var ae=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function se(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var le=function(){function e(t){var o=t.gutter;se(this,e);this.gutter_=o}e.prototype.createBaseObject_=function e(t){var o=t.getProperties();var n={};for(var r in o){var i=o[r];var a=typeof i==="undefined"?"undefined":ae(i);if(a==="string"||a==="number"){n[r]=i}}return n};e.prototype.serializeTilegrid=function e(t){var o={};o["extent"]=t.getExtent();o["minZoom"]=t.getMinZoom();o["origin"]=t.getOrigin(0);o["resolutions"]=t.getResolutions();o["tileSize"]=t.getTileSize(t.getMinZoom());return JSON.stringify(o)};e.prototype.deserializeTilegrid=function e(t){var o=JSON.parse(t);return new re["a"](o)};e.prototype.serializeTilegridWMTS=function e(t){if(!t){return undefined}var o={};var n=t.getResolutions();o["extent"]=t.getExtent();o["minZoom"]=t.getMinZoom();o["matrixIds"]=t.getMatrixIds();o["resolutions"]=n;o["origins"]=[];for(var r=0;r<n.length;++r){o["origins"].push(t.getOrigin(r))}return JSON.stringify(o)};e.prototype.deserializeTilegridWMTS=function e(t){var o=JSON.parse(t);return new ie["b"](o)};e.prototype.serializeSourceTileWMS=function e(t){var o=this.createBaseObject_(t);o["params"]=t.getParams();o["urls"]=t.getUrls();o["tileGrid"]=this.serializeTilegrid(t.getTileGrid());var n=t.getProjection();if(n){o["projection"]=ee["h"](t.getProjection()).getCode()}return JSON.stringify(o)};e.prototype.deserializeSourceTileWMS=function e(t,o){var n=JSON.parse(t);n["tileLoadFunction"]=o;if(n["tileGrid"]){n["tileGrid"]=this.deserializeTilegrid(n["tileGrid"])}n["gutter"]=this.gutter_;return new D["a"](n)};e.prototype.serializeSourceWMTS=function e(t){var o=this.createBaseObject_(t);o["dimensions"]=t.getDimensions();o["format"]=t.getFormat();o["urls"]=t.getUrls();o["version"]=t.getVersion();o["layer"]=t.getLayer();o["style"]=t.getStyle();o["matrixSet"]=t.getMatrixSet();var n=t.getTileGrid();o["tileGrid"]=this.serializeTilegridWMTS(n);o["requestEncoding"]=t.getRequestEncoding();var r=t.getProjection();if(r){o["projection"]=ee["h"](t.getProjection()).getCode()}return JSON.stringify(o)};e.prototype.deserializeSourceWMTS=function e(t,o){var n=JSON.parse(t);n["tileLoadFunction"]=o;if(n["tileGrid"]){n["tileGrid"]=this.deserializeTilegridWMTS(n["tileGrid"])}return new E["a"](n)};e.prototype.makeInfinitySerializable_=function e(t){if(t===Infinity){return 1e3}return t};e.prototype.serializeTileLayer=function e(t,o){var n=this.createBaseObject_(t);n["opacity"]=t.getOpacity();n["visible"]=t.getVisible();n["minResolution"]=t.getMinResolution();n["maxResolution"]=this.makeInfinitySerializable_(t.getMaxResolution());n["zIndex"]=t.getZIndex();o=o||t.getSource();if(o instanceof D["a"]){n["source"]=this.serializeSourceTileWMS(o);n["sourceType"]="tileWMS"}else if(o instanceof E["a"]){n["source"]=this.serializeSourceWMTS(o);n["sourceType"]="WMTS"}return JSON.stringify(n)};e.prototype.deserializeTileLayer=function e(t,o){var n=JSON.parse(t);var r=n["sourceType"];if(r==="tileWMS"){n["source"]=this.deserializeSourceTileWMS(n["source"],o)}else if(r==="WMTS"){n["source"]=this.deserializeSourceWMTS(n["source"],o)}return new s["a"](n)};return e}();var ce=le;var ue=ce;function fe(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var pe=void 0;var de=function(){function e(){fe(this,e);this.waitingPromises_=new window.Map;this.currentId_=0}e.prototype.setItem=function e(){for(var t=arguments.length,o=Array(t),n=0;n<t;n++){o[n]=arguments[n]}return this.createAction.apply(this,["setItem"].concat(o))};e.prototype.getItem=function e(){for(var t=arguments.length,o=Array(t),n=0;n<t;n++){o[n]=arguments[n]}return this.createAction.apply(this,["getItem"].concat(o))};e.prototype.clear=function e(){return this.createAction("clear")};e.prototype.config=function e(){for(var t=arguments.length,o=Array(t),n=0;n<t;n++){o[n]=arguments[n]}return this.createAction.apply(this,["config"].concat(o))};e.prototype.createAction=function e(t){for(var o=arguments.length,n=Array(o>1?o-1:0),r=1;r<o;r++){n[r-1]=arguments[r]}var i=++this.currentId_;var a={plugin:"localforage",command:t,args:n,id:i};console.log("sending action",JSON.stringify(a,null,"\t"));var s={};var l=new Promise(function(e,t){s["resolve"]=e;s["reject"]=t});this.waitingPromises_.set(i,s);this.postToBackend(a);return l};e.prototype.receiveMessage=function e(t){var o=t["data"];var n=o["id"];var r=o["command"];var i=o["args"]||[];var a=o["context"];var s=o["msg"];console.log("received action",JSON.stringify(o,null,"\t"));var l=this.waitingPromises_.get(n);if(r==="error"){console.error(s,i,a);if(l){l.reject(i,a);this.waitingPromises_.delete(n)}}else if(r==="response"){console.log("Received response message from backend");l.resolve.apply(l,i);this.waitingPromises_.delete(n)}else{console.error("Unhandled command",JSON.stringify(o,null,"\t"))}};e.prototype.postToBackend=function e(t){};return e}();var ge=de;function he(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function ve(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function me(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var ye=function(e){me(t,e);function t(){he(this,t);var o=ve(this,e.call(this));window.addEventListener("message",o.receiveMessage.bind(o),false);return o}t.prototype.postToBackend=function e(t){window["parent"].postMessage(t,"*")};return t}(ge);var _e=ye;function be(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function we(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function Se(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var Oe=function(e){Se(t,e);function t(){be(this,t);var o=we(this,e.call(this));window["androidWrapper"]=o;return o}t.prototype.postToBackend=function e(t){var o=JSON.stringify(t);window["ngeoHost"]["postMessageToAndroid"](o)};t.prototype.receiveFromAndroid=function e(t){var o=JSON.parse(t);this.receiveMessage({data:o})};return t}(ge);var Me=Oe;function xe(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Te(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function ke(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var De=function(e){ke(t,e);function t(){xe(this,t);var o=Te(this,e.call(this));window["iosWrapper"]=o;return o}t.prototype.postToBackend=function e(t){if(t["command"]==="setItem"){t["args"][1]=JSON.stringify(t["args"][1])}var o=JSON.stringify(t);window["webkit"]["messageHandlers"]["ios"]["postMessage"](o)};t.prototype.receiveFromIos=function e(t){var o=JSON.parse(t);o["args"]=(o["args"]||[]).map(function(e){return JSON.parse(e)});this.receiveMessage({data:o})};return t}(ge);var Ee=De;var Ce=o(85);var $e=o(83);var Ae={};Ae.traverseLayer=function(e,t,o){var n=o(e,t);if(n&&e instanceof $e["a"]){e.getLayers().forEach(function(n){Ae.traverseLayer(n,[].concat(t,[e]),o)})}};var Le=new RegExp("[^/]*//[^/]+/(.*)");Ae.normalizeURL=function(e){var t=e.match(Le);return t[1]};var ze=Ae;var je=o(320);function Pe(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function Ie(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function Ze(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var Ne=te["a"].defaultImageLoadFunction;var Re=function(e){t.$inject=["$rootScope","ngeoBackgroundLayerMgr","ngeoOfflineGutter"];Ze(t,e);function t(o,n,r){Pe(this,t);var i=Ie(this,e.call(this));i.localforage_=i.createLocalforage();i.configureLocalforage();i.rootScope_=o;i.hasData=false;i.initializeHasOfflineData();i.ngeoBackgroundLayerMgr_=n;i.serDes_=new ue({gutter:r});i.gutter_=r;return i}t.prototype.dispatchProgress_=function e(t){this.dispatchEvent(new Ce["a"]("progress",{progress:t}))};t.prototype.initializeHasOfflineData=function e(){var t=this;this.getItem("offline_content").then(function(e){return t.setHasOfflineData(!!e)})};t.prototype.hasOfflineData=function e(){return this.hasData};t.prototype.setHasOfflineData=function e(t){var o=t^this.hasData;this.hasData=t;if(o){this.rootScope_.$applyAsync()}};t.prototype.traceGetSetItem=function e(t,o,n){return n};t.prototype.createLocalforage=function e(){if(location.search.includes("localforage=cordova")){console.log("Using cordova localforage");return new _e}else if(location.search.includes("localforage=android")){console.log("Using android localforage");return new Me}else if(location.search.includes("localforage=ios")){console.log("Using ios localforage");return new Ee}return je};t.prototype.configureLocalforage=function e(){this.localforage_.config({name:"ngeoOfflineStorage",version:1,storeName:"offlineStorage"})};t.prototype.getItem=function e(t){return this.traceGetSetItem("getItem",t,this.localforage_.getItem(t))};t.prototype.removeItem=function e(t){return this.traceGetSetItem("removeItem",t,this.localforage_.removeItem(t))};t.prototype.setItem=function e(t,o){return this.traceGetSetItem("setItem",t,this.localforage_.setItem(t,o))};t.prototype.clear=function e(){this.setHasOfflineData(false);return this.traceGetSetItem("clear","",this.localforage_.clear())};t.prototype.estimateLoadDataSize=function e(t){return 50};t.prototype.getLayerKey=function e(t){return t.layer.get("label")};t.prototype.onTileDownloadSuccess=function e(t,o){this.dispatchProgress_(t);if(o.response){return this.setItem(ze.normalizeURL(o.url),o.response)}return Promise.resolve()};t.prototype.onTileDownloadError=function e(t){this.dispatchProgress_(t);return Promise.resolve()};t.prototype.getExtentByZoom=function e(t,o,n,r){var i=t.getView().getZoom();var a=[];[0,1,2,3,4].forEach(function(e){a.push({zoom:i+e,extent:r})});return a};t.prototype.sourceImageWMSToTileWMS=function e(t,o){if(t instanceof oe["a"]&&t.getUrl()&&t.getImageLoadFunction()===Ne){var n=Object(ne["a"])(t.getProjection()||o,42,256);t=new D["a"]({gutter:this.gutter_,url:t.getUrl(),tileGrid:n,attributions:t.getAttributions(),projection:t.getProjection(),params:t.getParams()})}return t};t.prototype.createLayerMetadatas=function e(t,o){var n=this;var r=[];var i=function e(i,a){if(i instanceof Y["a"]){var l=n.getExtentByZoom(t,i,a,o);var c=ee["h"](t.getView().getProjection());var u=n.sourceImageWMSToTileWMS(i.getSource(),c);var f=void 0;var p=void 0;if(i instanceof s["a"]||i instanceof X["a"]){f="tile";p=n.serDes_.serializeTileLayer(i,u)}else if(i instanceof Q["a"]){f="vector"}var d=n.ngeoBackgroundLayerMgr_.get(t)===i;r.push({backgroundLayer:d,map:t,extentByZoom:l,layerType:f,layerSerialization:p,layer:i,source:u,ancestors:a})}return true};t.getLayers().forEach(function(e){ze.traverseLayer(e,[],i)});return r};t.prototype.createTileLoadFunction_=function e(t){var o=this;var n=function e(t,n){o.getItem(ze.normalizeURL(n)).then(function(e){if(!e){e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="}t.getImage().src=e})};return n};t.prototype.recreateOfflineLayer=function e(t){if(t.layerType==="tile"){var o=t.layerSerialization;var n=this.createTileLoadFunction_(t);var r=this.serDes_.deserializeTileLayer(o,n);return r}return null};t.prototype.getMaxNumberOfParallelDownloads=function e(){return 11};return t}(g["a"]);var We=Re;var Ue=o(307);var Ve=o(309);var Be=o(299);function Ge(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var Fe={};Fe.module=angular.module("app",["gettext",c["a"].name,K.name,T.module.name]);Fe.module.value("ngeoOfflineTestUrl","../../src/offline/component.html");K.service("ngeoOfflineConfiguration",We);var Je=function e(t,o,n){Ge(this,e);this.offlineExtentSize=1e4;this.ngeoNetworkStatus=o;this.map=new i["a"]({layers:[new s["a"]({source:new l["b"]})],view:new a["a"]({center:[352379,5172733],zoom:4})});t.init(this.map);n.setSaveService("offlineDownloader");n.setRestoreService("ngeoOfflineRestorer")};Je.$inject=["ngeoFeatureOverlayMgr","ngeoNetworkStatus","ngeoOfflineServiceManager"];Je.$inject=["ngeoFeatureOverlayMgr","ngeoNetworkStatus","ngeoOfflineServiceManager"];Fe.module.controller("MainController",Je);var qe=t["default"]=Fe},365:function(e,t){e.exports='<div class=main-button> <span ng-if=!$ctrl.hasData()> <div class=no-data ng-click=$ctrl.toggleViewExtentSelection()></div> </span> <span ng-if=$ctrl.hasData()> <div class=with-data ng-click=$ctrl.showMenu()></div> </span> </div> <div ng-if="$ctrl.selectingExtent && !$ctrl.networkStatus.isDisconnected()" class="validate-extent btn btn-primary"> <div ng-if=!$ctrl.downloading ng-click=$ctrl.computeSizeAndDisplayAlertLoadData() translate>Save map</div> <div ng-if=$ctrl.downloading ng-click=$ctrl.askAbortDownload() translate>Abort</div> </div> <div ng-if=$ctrl.downloading class=in-progress> <div>{{$ctrl.progressPercents}}%</div> </div> <ngeo-modal ng-model=$ctrl.menuDisplayed> <div class=modal-header> <button type=button class=close data-dismiss=modal aria-label="{{\'Close\' | translate}}"> <span aria-hidden=true>&times;</span> </button> <h4 class=modal-title translate>Offline map</h4> </div> <div class=modal-body> <div ng-if=$ctrl.hasData()> <button type=button class="extent-zoom btn btn-default" ng-if=!$ctrl.offlineMode.isEnabled() ng-click=$ctrl.activateOfflineMode() translate>Activate offline mode </button> <button type=button class="extent-zoom btn btn-default" ng-if="$ctrl.offlineMode.isEnabled() && !$ctrl.networkStatus.isDisconnected()" ng-click=$ctrl.deactivateOfflineMode() translate>Deactivate offline mode </button> <button type=button class="extent-show btn btn-default" ng-if=$ctrl.offlineMode.isEnabled() ng-click=$ctrl.toggleExtentVisibility()> <span ng-if=$ctrl.isExtentVisible() translate>Hide extent</span> <span ng-if=!$ctrl.isExtentVisible() translate>Show extent</span> </button> <button type=button class="delete btn btn-default" ng-if=!$ctrl.networkStatus.isDisconnected() ng-click="$ctrl.displayAlertDestroyData = true" translate>Delete data </button> </div> <div ng-if="!$ctrl.hasData() && !$ctrl.networkStatus.isDisconnected()"> <button type=button class="new-data btn btn-default" ng-click=$ctrl.toggleViewExtentSelection() translate>Save new map </button> </div> </div> </ngeo-modal> <ngeo-modal ng-model=$ctrl.displayAlertLoadData> <div class=modal-header> <h4 class=modal-title translate>Warning</h4> </div> <div class=modal-body> <p translate>~{{$ctrl.estimatedLoadDataSize}}MB of maps will be downloaded (until scale 1:25\'000) - Don\'t lock your device or navigate away from this site during the download process. Deactivate "private" mode of your browser.</p> <button type=button class="validate btn btn-primary" data-dismiss=modal ng-click=$ctrl.validateExtent() translate>Ok </button> <button type=button class="delete btn btn-default" data-dismiss=modal translate>Cancel </button> </div> </ngeo-modal> <ngeo-modal ng-model=$ctrl.displayAlertNoLayer> <div class=modal-header> <h4 class=modal-title translate>Warning</h4> </div> <div class=modal-body> <p translate>No maps selected for saving.</p> <button type=button class="delete btn btn-default" data-dismiss=modal translate>Ok </button> </div> </ngeo-modal> <ngeo-modal ng-model=$ctrl.displayAlertDestroyData> <div class=modal-header> <h4 class=modal-title translate>Warning</h4> </div> <div class=modal-body> <p translate>Do you really want to remove your data ?</p> <button type=button class="validate btn btn-primary" data-dismiss=modal ng-click=$ctrl.deleteData() translate>Ok </button> <button type=button class="delete btn btn-default" data-dismiss=modal translate>Cancel </button> </div> </ngeo-modal> <ngeo-modal ng-model=$ctrl.displayAlertAbortDownload> <div class=modal-header> <h4 class=modal-title translate>Warning</h4> </div> <div class=modal-body> <p translate>Do you really want to remove your data ?</p> <button type=button class="validate btn btn-primary" data-dismiss=modal ng-click=$ctrl.abortDownload() translate>Ok </button> <button type=button class="delete btn btn-default" data-dismiss=modal ng-click=$ctrl.followDownloadProgression_() translate>Cancel </button> </div> </ngeo-modal> '},366:function(e,t,o){o(53);o(55);e.exports=o(339)},484:function(e,t){}});
//# sourceMappingURL=offline.150a4e.js.map