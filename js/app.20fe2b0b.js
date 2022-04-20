(function(){"use strict";var e={3956:function(e,n,t){var o=t(9242),a=(t(3455),t(6265)),r=t.n(a),i=t(6423),u=t(3396);function c(e,n){const t=(0,u.up)("router-view");return(0,u.wg)(),(0,u.j4)(t)}var s=t(89);const l={},d=(0,s.Z)(l,[["render",c]]);var f=d,p=t(678),h=t(7139),v=t(1693);const g={class:"home-banner position-relative"},m=(0,u._)("img",{src:v,class:"tw-logo",alt:"taiwan travel logo"},null,-1),b={action:"",class:"home-form"},y=(0,u.uE)('<option value="North">北部地區</option><option value="Central">中部地區</option><option value="South">南部地區</option><option value="East">東部地區</option><option value="Islands">離島地區</option>',5),w=[y],C=["value"],S=(0,u._)("div",{class:"shade-layer"},null,-1);function x(e,n,a,r,i,c){const s=(0,u.up)("Header");return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u.Wm)(s,{class:"transparent-white"}),(0,u._)("section",g,[(0,u._)("div",{class:"vh-100 bg-cover banner-img px-5 pb-3 pb-md-7",style:(0,h.j5)({backgroundImage:"url("+t(4185)+")"})},[m,(0,u._)("form",b,[(0,u.wy)((0,u._)("select",{class:"form-select me-md-3","aria-label":"Default select example","onUpdate:modelValue":n[0]||(n[0]=e=>r.areaSelected=e)},w,512),[[o.bM,r.areaSelected]]),(0,u.wy)((0,u._)("select",{class:"form-select me-md-4","aria-label":"Default select example","onUpdate:modelValue":n[1]||(n[1]=e=>r.countySelected=e)},[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(r.countiesList,(e=>((0,u.wg)(),(0,u.iD)("option",{key:e.en,value:e.en},(0,h.zw)(e.ch),9,C)))),128))],512),[[o.bM,r.countySelected]]),(0,u._)("button",{type:"button",class:"btn btn-gold font-en fs-s px-3",onClick:n[2]||(n[2]=(...e)=>r.goSearch&&r.goSearch(...e))},"SEARCH")])],4),S])],64)}var _=t(4046),k=t(6057),E={components:{Header:_.Z},setup(){const e=(0,p.tv)(),{areaSelected:n,countiesList:t,countySelected:o}=((0,p.yj)(),(0,k.Z)());(0,u.YP)(t,(e=>{let[n]=e;o.value=n.en}));const a=()=>{console.log(123),e.push(`/spots?county=${o.value}&page=1`)};return{areaSelected:n,countiesList:t,countySelected:o,goSearch:a}}};const T=(0,s.Z)(E,[["render",x]]);var O=T;const j=[{path:"/",name:"home",component:O},{path:"/spots",name:"spots",component:()=>t.e(443).then(t.bind(t,7928))},{path:"/spot/:spotId",component:()=>t.e(691).then(t.bind(t,1691))},{path:"/restaurants",component:()=>t.e(142).then(t.bind(t,6142))},{path:"/hotels",component:()=>t.e(364).then(t.bind(t,6364))}],N=(0,p.p7)({history:(0,p.r5)(),routes:j,scrollBehavior(e,n,t){return{top:0}}});var P=N;const A=(0,o.ri)(f);A.use(i.Z,r()),A.provide("axios",A.config.globalProperties.axios),A.use(P),A.mount("#app")},6057:function(e,n,t){t.d(n,{Z:function(){return i}});var o=JSON.parse('{"North":[{"ch":"臺北市","en":"Taipei"},{"ch":"新北市","en":"NewTaipei"},{"ch":"桃園市","en":"Taoyuan"},{"ch":"新竹縣","en":"HsinchuCounty"},{"ch":"新竹市","en":"Hsinchu"},{"ch":"基隆市","en":"Keelung"},{"ch":"宜蘭縣","en":"YilanCounty"}],"Central":[{"ch":"臺中市","en":"Taichung"},{"ch":"彰化縣","en":"ChanghuaCounty"},{"ch":"南投縣","en":"NantouCounty"},{"ch":"苗栗縣","en":"MiaoliCounty"}],"South":[{"ch":"臺南市","en":"Tainan"},{"ch":"高雄市","en":"Kaohsiung"},{"ch":"雲林縣","en":"YunlinCounty"},{"ch":"嘉義縣","en":"ChiayiCounty"},{"ch":"嘉義市","en":"Chiayi"},{"ch":"屏東縣","en":"PingtungCounty"}],"East":[{"ch":"花蓮縣","en":"HualienCounty"},{"ch":"臺東縣","en":"TaitungCounty"}],"Islands":[{"ch":"澎湖縣","en":"PenghuCounty"},{"ch":"金門縣","en":"KinmenCounty"},{"ch":"連江縣","en":"LienchiangCounty"}]}'),a=t(4870),r=t(3396),i=()=>{const e=(0,a.iH)("North"),n=(0,r.Fl)((()=>o[e.value])),t=(0,a.iH)("Taipei");return{areaSelected:e,countiesList:n,countySelected:t}}},4046:function(e,n,t){t.d(n,{Z:function(){return h}});var o=t(3396),a=t(7139);const r={class:"container-fluid px-4 px-sm-5 px-md-8"},i={key:0,class:"fa-solid fa-bars"},u={key:1,class:"fa-solid fa-xmark"},c=(0,o.uE)('<a class="navbar-brand" href="#">TAIWAN TRAVEL</a><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav ms-auto"><li class="nav-item"><a class="nav-link active" aria-current="page" href="#/spots?county=Taipei&amp;page=1">景點查詢</a></li><li class="nav-item"><a class="nav-link" href="#/restaurants?county=Tainan">美食推薦</a></li><li class="nav-item"><a class="nav-link" href="#/hotels?county=Taichung">旅宿資訊</a></li></ul></div>',2);function s(e,n,t,s,l,d){return(0,o.wg)(),(0,o.iD)("nav",{class:(0,a.C_)(["navbar navbar-expand-md position-fixed",{"open-bg":s.isShow&&!s.isPC}])},[(0,o._)("div",r,[(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",onClick:n[0]||(n[0]=e=>s.isShow=!s.isShow)},[s.isShow?((0,o.wg)(),(0,o.iD)("i",u)):((0,o.wg)(),(0,o.iD)("i",i))]),c])],2)}var l=t(4870),d={setup(){const e=(0,l.iH)(!1),n=(0,l.iH)(!0),t=()=>{screen.width>=768?n.value=!0:n.value=!1};return window.addEventListener("resize",t),{isShow:e,isPC:n}}},f=t(89);const p=(0,f.Z)(d,[["render",s]]);var h=p},1693:function(e,n,t){e.exports=t.p+"img/taiwan_logo_white.abf79cda.svg"},4185:function(e,n,t){e.exports=t.p+"img/banner01.ac8530d6.jpg"}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,o,a,r){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],a=e[l][1],r=e[l][2];for(var u=!0,c=0;c<o.length;c++)(!1&r||i>=r)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(u=!1,r<i&&(i=r));if(u){e.splice(l--,1);var s=a();void 0!==s&&(n=s)}}return n}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[o,a,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+(443===e?"about":e)+"."+{142:"218f50bf",364:"349fa6d4",443:"07c7e4ce",691:"22ad8304"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/about.bc2cc188.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="taiwan_travel:";t.l=function(o,a,r,i){if(e[o])e[o].push(a);else{var u,c;if(void 0!==r)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+r){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+r),u.src=o),e[o]=[a];var f=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var a=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/F2E_taiwan_travel_vue/"}(),function(){var e=function(e,n,t,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var r=function(r){if(a.onerror=a.onload=null,"load"===r.type)t();else{var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=r,a.href=n,document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var a=t[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===n))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],r=a.getAttribute("data-href");if(r===e||r===n)return a}},o=function(o){return new Promise((function(a,r){var i=t.miniCssF(o),u=t.p+i;if(n(i,u))return a();e(o,u,a,r)}))},a={143:0};t.f.miniCss=function(e,n){var t={443:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=o(e).then((function(){a[e]=0}),(function(n){throw delete a[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,o){var a=t.o(e,n)?e[n]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(t,o){a=e[n]=[t,o]}));o.push(a[2]=r);var i=t.p+t.u(n),u=new Error,c=function(o){if(t.o(e,n)&&(a=e[n],0!==a&&(e[n]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,a[1](u)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var a,r,i=o[0],u=o[1],c=o[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(a in u)t.o(u,a)&&(t.m[a]=u[a]);if(c)var l=c(t)}for(n&&n(o);s<i.length;s++)r=i[s],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(l)},o=self["webpackChunktaiwan_travel"]=self["webpackChunktaiwan_travel"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(3956)}));o=t.O(o)})();
//# sourceMappingURL=app.20fe2b0b.js.map