!function(e){function n(n){for(var r,i,c=n[0],l=n[1],s=n[2],f=0,p=[];f<c.length;f++)i=c[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(n);p.length;)p.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var l=t[c];0!==o[l]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={13:0},a=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var u=l;a.push([360,0]),t()}({359:function(e,n,t){"use strict";t.r(n);t(484);var r=t(245),o=t(43),a=t(53),i=t(36),c=t(64),l=t(57),s=t(52),u=t(45),f=t(42),p=t(24),w=t(19),h=t(108),d=t(47),v=t(46),g=t(17),y={},b=angular.module("app",["gettext",g.a.name]);y.MainController=function(){this.map=new o.a({layers:[new i.a({source:new l.b})],view:new a.a({center:[-10997148,4569099],zoom:4})});var e=this.map,n=new u.b([[[-9e6,4e6],[-11e6,4e6],[-11e6,6e6],[-9e6,6e6]]]);this.features=new f.a,this.features.push(new p.a({geometry:n,isRectangle:!0}));var t,g=((t={}).Polygon=[new w.c({fill:new d.a({color:[255,255,255,.5]})}),new w.c({stroke:new v.a({color:[255,255,255,1],width:5})}),new w.c({stroke:new v.a({color:[0,153,255,1],width:3})})],t.Point=[new w.c({image:new h.a({radius:7,fill:new d.a({color:[0,153,255,1]}),stroke:new v.a({color:[255,255,255,.75],width:1.5})}),zIndex:1e5})],t.GeometryCollection=t.Polygon.concat(t.Point),function(e,n){return t[e.getGeometry().getType()]}),y=new s.a({features:this.features});new c.a({source:y}).setMap(e),this.interaction=new r.a({features:this.features,style:g});var b=this.interaction;e.addInteraction(b),b.setActive(!0)},b.controller("MainController",y.MainController),n.default=y},360:function(e,n,t){t(40),t(39),e.exports=t(359)},484:function(e,n){}});
//# sourceMappingURL=modifyrectangle.8d4651.js.map