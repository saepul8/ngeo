(function(e){function r(r){var n=r[0];var l=r[1];var i=r[2];var p,u,c=0,y=[];for(;c<n.length;c++){u=n[c];if(a[u]){y.push(a[u][0])}a[u]=0}for(p in l){if(Object.prototype.hasOwnProperty.call(l,p)){e[p]=l[p]}}if(s)s(r);while(y.length){y.shift()()}o.push.apply(o,i||[]);return t()}function t(){var e;for(var r=0;r<o.length;r++){var t=o[r];var n=true;for(var i=1;i<t.length;i++){var p=t[i];if(a[p]!==0)n=false}if(n){o.splice(r--,1);e=l(l.s=t[0])}}return e}var n={};var a={22:0};var o=[];function l(r){if(n[r]){return n[r].exports}var t=n[r]={i:r,l:false,exports:{}};e[r].call(t.exports,t,t.exports,l);t.l=true;return t.exports}l.m=e;l.c=n;l.d=function(e,r,t){if(!l.o(e,r)){Object.defineProperty(e,r,{configurable:false,enumerable:true,get:t})}};l.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};l.n=function(e){var r=e&&e.__esModule?function r(){return e["default"]}:function r(){return e};l.d(r,"a",r);return r};l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)};l.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[];var p=i.push.bind(i);i.push=r;i=i.slice();for(var u=0;u<i.length;u++)r(i[u]);var s=p;o.push([387,0]);return t()})({385:function(e,r){e.exports='<span ng-if=::!layertreeCtrl.isRoot>{{::layertreeCtrl.node.name}}</span> <input type=checkbox ng-if="::layertreeCtrl.node && !layertreeCtrl.node.children" ng-model=layertreeCtrl.getSetActive ng-model-options="{getterSetter: true}"/> <button ng-if="::layertreeCtrl.node && !layertreeCtrl.node.children" ng-click="ctrl.onButtonClick(layertreeCtrl.node, layertreeCtrl.layer)">i</button> <ul ng-if=::layertreeCtrl.node.children> <li ng-repeat="node in ::layertreeCtrl.node.children" ngeo-layertree=::node ngeo-layertree-templateurl=partials/layertree.html ngeo-layertree-notroot ngeo-layertree-map=layertreeCtrl.map ngeo-layertree-nodelayerexpr=layertreeCtrl.nodelayerExpr> </li> </ul> '},386:function(e,r,t){"use strict";t.r(r);var n=t(494);var a=t.n(n);var o=t(19);var l=t(25);var i=t(17);var p=t(35);var u=t(303);var s=t(255);var c=t(22);var y=t(201);var f={};f.module=angular.module("app",["gettext",s["a"].name,c["a"].name,y["a"].module.name]);f.layertreeComponent={bindings:{map:"=appLayertreeMap"},controller:"AppLayertreeController",template:'<div ngeo-layertree="::$ctrl.tree" '+'ngeo-layertree-templateurl="examples/layertree" '+'ngeo-layertree-map="$ctrl.map" '+'ngeo-layertree-nodelayer="$ctrl.getLayer(node)">'+"</div>"};f.module.run(["$templateCache",function(e){e.put("examples/layertree",t(385))}]);f.module.component("appLayertree",f.layertreeComponent);f.LayertreeController=function(e,r,t,n){var a=this;this.tree=undefined;e.get("data/tree.json").then(function(e){a.tree=e.data});this.http_=e;this.sce_=r;this.getLayer_=t;this.infoPopup_=n();this.promises_={}};f.LayertreeController.$inject=["$http","$sce","appGetLayer","ngeoCreatePopup"];f.LayertreeController.prototype.getLayer=function(e){return this.getLayer_(e)};f.LayertreeController.prototype.onButtonClick=function(e,r){var t=this;var n=e["layerType"];if(!(n in this.promises_)){this.promises_[n]=this.http_.get("data/metadata.html").then(function(e){var r=t.sce_.trustAsHtml(e.data);return r})}var a=this.infoPopup_;this.promises_[n].then(function(r){a.setTitle(e["name"]);a.setContent(r);a.setOpen(true)})};f.module.controller("AppLayertreeController",f.LayertreeController);f.getLayer=function(){var e={};return function(r){if(!("layerType"in r)){return null}var t=r["layerType"];if(t in e){return e[t]}var n=void 0;if(t=="stamenWatercolor"){n=new u["a"]({layer:"watercolor"})}else if(t=="stamenTerrain-labels"){n=new u["a"]({layer:"terrain-labels"})}else if(t=="osmHumanitarian"){n=new p["b"]({url:"https://tile-{a-c}.openstreetmap.fr/hot/{z}/{x}/{y}.png"})}else if(t=="osmCycle"){n=new p["b"]({url:"https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png"})}else if(t=="osmTransport"){n=new p["b"]({url:"https://{a-c}.tile.thunderforest.com/transport/{z}/{x}/{y}.png"})}else{n=new p["b"]}var a=new i["a"]({source:n});a.set("type",t);e[t]=a;return a}}();f.module.value("appGetLayer",f.getLayer);f.MainController=function(){this.map=new o["a"]({layers:[new i["a"]({source:new p["b"]})],view:new l["a"]({center:[-10983710.59086991,4686507.078220731],zoom:4})})};f.module.controller("MainController",f.MainController);r["default"]=f},387:function(e,r,t){t(53);t(55);e.exports=t(386)},494:function(e,r){}});
//# sourceMappingURL=layertree.f45387.js.map