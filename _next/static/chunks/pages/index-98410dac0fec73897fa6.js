_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var n,a=(n=r("q1tI"))&&n.__esModule?n:{default:n},o=r("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,i=void 0!==o&&o;return r||a&&i}},"3niX":function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=o.cssRules();return o.flush(),e},t.default=void 0;var n,a=r("q1tI");var o=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),i=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return o.computeId(t,r)})).join(" ")};var a=n.prototype;return a.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},a.componentWillUnmount=function(){o.remove(this.props)},a.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&o.remove(this.prevProps),o.add(this.props),this.prevProps=this.props),null},n}(a.Component);t.default=i},"7W2i":function(e,t,r){var n=r("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"8Kt/":function(e,t,r){"use strict";r("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var n,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),o=(n=r("Xuae"))&&n.__esModule?n:{default:n},i=r("lwAK"),s=r("FYa8"),c=r("/0+H");function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var r=a.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(u,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,c=p.length;s<c;s++){var d=p[s];if(a.props.hasOwnProperty(d))if("charSet"===d)r.has(d)?o=!1:r.add(d);else{var l=a.props[d],u=n[d]||new Set;u.has(l)?o=!1:(u.add(l),n[d]=u)}}}return o}}()).reverse().map((function(e,t){var r=e.key||t;return a.default.cloneElement(e,{key:r})}))}function f(e){var t=e.children,r=(0,a.useContext)(i.AmpStateContext),n=(0,a.useContext)(s.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,c.isInAmpMode)(r)},t)}f.rewind=function(){};var m=f;t.default=m},"8oxB":function(e,t){var r,n,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var c,d=[],l=!1,u=-1;function p(){l&&c&&(l=!1,c.length?d=c.concat(d):u=-1,d.length&&h())}function h(){if(!l){var e=s(p);l=!0;for(var t=d.length;t;){for(c=d,d=[];++u<t;)c&&c[u].run();u=-1,t=d.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];d.push(new f(e,t)),1!==d.length||l||s(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=m,a.addListener=m,a.once=m,a.off=m,a.removeListener=m,a.removeAllListeners=m,a.emit=m,a.prependListener=m,a.prependOnceListener=m,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},MX0m:function(e,t,r){e.exports=r("3niX")},Nsbk:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,r){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},RIqP:function(e,t,r){var n=r("Ijbi"),a=r("EbDI"),o=r("ZhPi"),i=r("Bnag");e.exports=function(e){return n(e)||a(e)||o(e)||i()}},RNiq:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return p}));var n=r("MX0m"),a=r.n(n),o=r("q1tI"),i=r.n(o),s=r("8Kt/"),c=r.n(s),d=i.a.createElement,l={bg:"#fafbfc",cardBG:"rgba(255, 255, 255, 1)",cardBoxShadow:"0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(166, 173, 201, 0.2)",cardBoxHoverBG:""},u={bg:"#363942",cardBg:"#363942",cardBoxShadow:"0 -2px 10px rgba(0, 0, 0, .5)",cardBoxHoverBG:""};function p(){var e=Object(o.useState)("light"),t=e[0],r=e[1],n=function(e){return"light"===t?l[e]||"":u[e]||""};return d("div",{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])+" homepage"},d(c.a,null,d("title",{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])},"Naveen DA Portfolio"),d("link",{rel:"icon",href:"/favicon-"+t+".png",type:"image/png",className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])}),d("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])}),d("link",{href:"https://fonts.googleapis.com/css2?family=Engagement&family=Nunito Sans&display=swap",rel:"stylesheet",className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])})),d("header",{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])},d("div",{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])+" logo"},d("img",{src:"/naveenda-logo.svg",className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])})),d("ul",{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])+" links"},d("li",{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])},d("a",{href:"/",className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])},"Portfolio")),d("li",{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])},d("a",{href:"https://twitter.com/NaveenDA_",className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])},"Contact Me")),d("li",{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])},d("a",{href:"#theme",onClick:function(){r("light"===t?"dark":"light")},className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])},d("span","light"===t?{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])+" fa fa-moon-o"}:{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])+" fa fa-sun-o"}))))),d("main",{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])},d("div",{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])+" container"},d("div",{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])+" row"},d("div",{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])+" col"},d("div",{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])+" image"},d("img",{src:"/naveen-da-profile.png",className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])})),d("h1",{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])},"Hi,"),d("h1",{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])},"I'm Naveen DA"),d("p",{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])+" info"},"I develop an application with high concern about design and UX, sometimes I do an over-engineering process for doing a simple job"),d("p",{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])+" icons"},d("a",{href:"https://stackoverflow.com/users/6335029/naveenda",className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])},d("i",{"aria-hidden":"true",className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])+" fa fa-stack-overflow"})),d("a",{href:"https://github.com/NaveenDA",className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])},d("i",{"aria-hidden":"true",className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])+" fa fa-github"})),d("a",{href:"https://twitter.com/NaveenDA_",className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])},d("i",{"aria-hidden":"true",className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])+" fa fa-twitter"})),d("a",{href:"https://dribbble.com/naveenda",className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])},d("i",{"aria-hidden":"true",className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])+" fa fa-dribbble"})),d("a",{href:"http://medium.com/@NaveenDA",className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])},d("i",{"aria-hidden":"true",className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])+" fa fa-medium"})),d("a",{href:"https://www.linkedin.com/in/naveenda/",className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])},d("i",{"aria-hidden":"true",className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])+" fa fa-linkedin-square"})))),d("div",{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])+" col"},d("div",{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])+" projects"},[{name:"Optime",description:"A CSS framework optimised for better readability \ud83d\udcd6.",repo:"https://github.com/NaveenDA/optime",tags:["CSS"]},{name:"tablenavigator",description:"A jQuery plugin that enables navigate a table via keyboard",repo:"",tags:["JavaScript","jQuery"]},{name:"express-routes-catalogue",description:"An express.js Plugin that listout all the registed routes",repo:"https://github.com/NaveenDA/express-routes-catalogue",tags:["Typescript"]},{name:"Drafti",description:"Note-taking application based on Markdown with Offline support.",repo:"https://github.com/NaveenDA/drafti",tags:["markdown","react","editor","Typescript"]},{name:"react-rerender-test",description:"A simple react component help to test the component re-render or not",repo:"https://github.com/NaveenDA/react-rerender-test",tags:["Typescript","react","testing"]},{name:"nice-pie",description:"A awesome pie chart based on the d3",repo:"https://github.com/dotcodes/nice-pie",tags:["d3","typescript","chart"]}].map((function(e){return d("a",{href:e.repo,key:e.name,className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])+" card"},d("div",{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])},d("div",{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])+" name"},e.name),d("div",{className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])+" info"},e.description),e.tags.map((function(e){return d("div",{key:e,className:a.a.dynamic([["1722059727",[n("cardBg"),n("cardBoxShadow")]],["3090834768",[n("bg")]]])+" tag"},e)}))))}))))))),d(a.a,{id:"1722059727",dynamic:[n("cardBg"),n("cardBoxShadow")]},["header.__jsx-style-dynamic-selector{height:45px;line-height:45px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",'header.__jsx-style-dynamic-selector .logo.__jsx-style-dynamic-selector{-webkit-flex:0 200px;-ms-flex:0 200px;flex:0 200px;font-family:"Engagement",cursive;padding-left:45px;font-size:22px;}',"header.__jsx-style-dynamic-selector .logo.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{height:38px;vertical-align:bottom;}","header.__jsx-style-dynamic-selector .links.__jsx-style-dynamic-selector{-webkit-flex:0 calc(90vw - 200px);-ms-flex:0 calc(90vw - 200px);flex:0 calc(90vw - 200px);padding-right:45px;text-align:right;}","header.__jsx-style-dynamic-selector .links.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector{list-style-type:none;background:red;display:block;height:45px;margin-top:0;}","header.__jsx-style-dynamic-selector .links.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{display:inline;padding-left:12px;}","header.__jsx-style-dynamic-selector .links.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{font-size:15px;color:#333;-webkit-text-decoration:none !important;text-decoration:none !important;background:linear-gradient(to right,#00d1b1 0%,#278fc6 98%);background-size:0px 2px;background-repeat:no-repeat;background-position:left 85%;text-shadow:0;-webkit-transition:all 0.3s linear;transition:all 0.3s linear;padding-bottom:5px;}","header.__jsx-style-dynamic-selector .links.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{background-size:100% 2px;}",".container.__jsx-style-dynamic-selector{width:80%;margin:12px auto;margin-bottom:0;}",".row.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".col.__jsx-style-dynamic-selector{-webkit-flex:0 50%;-ms-flex:0 50%;flex:0 50%;}",".icons.__jsx-style-dynamic-selector{margin:25px auto;}",".icons.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#333 !important;padding-left:12px;font-size:18px;}",".info.__jsx-style-dynamic-selector{padding:12px 5px;color:#2e302f;font-weight:300;}",".image.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{margin:0 auto;max-height:350px;}",".image.__jsx-style-dynamic-selector{margin-bottom:20px;}",".projects.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:wrap;-ms-flex-flow:wrap;flex-flow:wrap;overflow-y:auto;height:92vh;}",".card.__jsx-style-dynamic-selector{padding:1em;box-sizing:border-box;width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:245px;-webkit-text-decoration:none !important;text-decoration:none !important;}",".card.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding:1em;border:1px solid transparent;background-color:".concat(n("cardBg"),";border-radius:16px;box-shadow:").concat(n("cardBoxShadow"),";}"),".card.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:hover{background:#ffecd8;-webkit-transition:background-color 100ms linear;transition:background-color 100ms linear;}",".card.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:hover .name.__jsx-style-dynamic-selector{text-shadow:0 1px 10px rgba(0,0,0,0.4);}",".card.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:hover .tag.__jsx-style-dynamic-selector{background-color:#fa8738;color:#fff;-webkit-transition:all 100ms linear;transition:all 100ms linear;}",".card.__jsx-style-dynamic-selector .name.__jsx-style-dynamic-selector{font-size:18px;font-weight:bold;color:#000000;}",".card.__jsx-style-dynamic-selector .info.__jsx-style-dynamic-selector{color:rgb(46 48 47 / 77%);}",".tag.__jsx-style-dynamic-selector{display:inline-block;font-size:12px;font-weight:500;line-height:18px;border:1px solid transparent;border-radius:2em;padding:0 10px;line-height:22px;color:#0366d6;white-space:nowrap;margin:0 0.125em 0.333em 0;background-color:#f1f8ff;}","@media only screen and (max-width:600px){body.__jsx-style-dynamic-selector{overflow-y:auto !important;}.row.__jsx-style-dynamic-selector{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.col.__jsx-style-dynamic-selector{-webkit-flex:0 100%;-ms-flex:0 100%;flex:0 100%;}.projects.__jsx-style-dynamic-selector{height:auto !important;}.card.__jsx-style-dynamic-selector{width:100%;}header.__jsx-style-dynamic-selector .links.__jsx-style-dynamic-selector{-webkit-flex:0 calc(100vw - 200px);-ms-flex:0 calc(100vw - 200px);flex:0 calc(100vw - 200px);}header.__jsx-style-dynamic-selector .links.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{font-size:9px;}.card.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{box-shadow:  0 1px 1px rgba(0,0,0,0.15),  0 10px 0 -5px #eee,  0 10px 1px -4px rgba(0,0,0,0.15),  0 20px 0 -10px #eee,  0 20px 1px -9px rgba(0,0,0,0.15);}}"]),d(a.a,{id:"3090834768",dynamic:[n("bg")]},['html,body{padding:0;margin:0;font-family:"Nunito Sans";background:'.concat(n("bg"),";}"),"body{overflow-y:hidden;}","@media only screen and (max-width:600px){body{overflow-y:auto !important;}}","@-webkit-keyframes backgroundGradient{0%{background-position:50% 0%;}50%{background-position:50% 100%;}100%{background-position:50% 0%;}}","@keyframes backgroundGradient{0%{background-position:50% 0%;}50%{background-position:50% 100%;}100%{background-position:50% 0%;}}","*{box-sizing:border-box;padding:0;margin:0;}"]))}},SevZ:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=o(r("9kyW")),a=o(r("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,o=t.optimizeForSpeed,i=void 0!==o&&o,s=t.isBrowser,c=void 0===s?"undefined"!==typeof window:s;this._sheet=n||new a.default({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),n&&"boolean"===typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,a=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var o=a.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=o,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var a=String(r),o=t+a;return e[o]||(e[o]="jsx-"+(0,n.default)(t+"-"+a)),e[o]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var a=r+n;return t[a]||(t[a]=n.replace(e,r)),t[a]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,a=e.id;if(n){var o=this.computeId(a,n);return{styleId:o,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(o,e)})):[this.computeSelector(o,r)]}}return{styleId:this.computeId(a),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=i},SksO:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},W8MJ:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},Xuae:function(e,t,r){"use strict";var n=r("RIqP"),a=r("lwsE"),o=r("W8MJ"),i=(r("PJYZ"),r("7W2i")),s=r("a1gu"),c=r("Nsbk");function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var a=c(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return s(this,r)}}t.__esModule=!0,t.default=void 0;var l=r("q1tI"),u=function(e){i(r,e);var t=d(r);function r(e){var o;return a(this,r),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=u},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},a1gu:function(e,t,r){var n=r("cDf5"),a=r("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?a(e):t}},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,a=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(e){var t=void 0===e?{}:e,r=t.name,o=void 0===r?"stylesheet":r,s=t.optimizeForSpeed,c=void 0===s?n:s,d=t.isBrowser,l=void 0===d?"undefined"!==typeof window:d;i(a(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",i("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var u=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=u?u.getAttribute("content"):null}var t,o,s,c=e.prototype;return c.setOptimizeForSpeed=function(e){i("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),i(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(i(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(i(a(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(s){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(o){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var a=this._tags[e];i(a,"old rule at index `"+e+"` not found"),a.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];i(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,r){t&&i(a(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return r?o.insertBefore(n,r):o.appendChild(n),n},t=e,(o=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,o),s&&r(t,s),e}();function i(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=o}).call(this,r("8oxB"))},cDf5:function(e,t){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])}},[["vlRD",0,1]]]);