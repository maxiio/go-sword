(function(e){function t(t){for(var n,a,i=t[0],c=t[1],l=t[2],p=0,s=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&s.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(s.length)s.shift()();return u.push.apply(u,l||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(u.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},u=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/sword/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=c;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("a026"),o=r("f825"),u=r.n(o),a=(r("f8ce"),r("8c4f")),i=r("1390"),c=r.n(i),l=r("a7fe"),f=r.n(l),p=r("bc3a"),s=r.n(p),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("LayoutRoot",{ref:"ch"})],1)},h=[],y=(r("b0c0"),r("5530")),b={components:{LayoutRoot:"url:"+window.location.origin+window.location.pathname+"render?path=/layout/default"},updated:function(){this.route(this.$refs.ch.routes)},methods:{route:function(e){var t=new Array;for(var r in e)t.push({name:e[r].name?e[r].name:null,path:e[r].path,component:e[r].url?c()(e[r].url):null,redirect:e[r].redirect?e[r].redirect:null,props:function(e){return Object(y["a"])({},e.query)}});this.$router.addRoutes(t)}}},v=b,w=r("2877"),m=Object(w["a"])(v,d,h,!1,null,null,null),g=m.exports;n["default"].use(u.a),n["default"].use(a["a"]),n["default"].use(c.a),n["default"].use(f.a,s.a),n["default"].config.productionTip=!1;var O=new a["a"]({routes:[]});new n["default"]({router:O,render:function(e){return e(g)}}).$mount("#app"),s.a.interceptors.request.use((function(e){return n["default"].prototype.$Spin.show(),e})),s.a.interceptors.response.use((function(e){return n["default"].prototype.$Spin.hide(),e}))}});