(()=>{"use strict";var t={208:(t,e,n)=>{n.d(e,{A:()=>E});var o=n(601),i=n.n(o),r=n(314),a=n.n(r),s=n(417),d=n.n(s),c=new URL(n(687),n.b),l=new URL(n(254),n.b),p=new URL(n(36),n.b),u=new URL(n(339),n.b),m=new URL(n(433),n.b),f=new URL(n(91),n.b),b=new URL(n(827),n.b),g=a()(i()),h=d()(c),x=d()(l),y=d()(p),v=d()(u),w=d()(m),j=d()(f),L=d()(b);g.push([t.id,`/* @font-face {\n  font-family: "myFontBold";\n  src: url("./didot_bold-webfont.woff2") format("woff2"),\n    url("./didot_bold-webfont.woff") format("woff2");\n} */\n\n@font-face {\n  font-family: "myFontRegular";\n  src: url(${h}) format("woff");\n}\n\n@font-face {\n  font-family: "myFontTitle";\n  src: url(${x}) format("woff2");\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: #f1f1f1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  font-family: "myFontRegular";\n}\n\n.container {\n  display: grid;\n  height: 100vh;\n  width: 100vw;\n  grid-template-columns: minmax(400px, 1fr) 6fr;\n}\n\n.sidebar {\n  display: flex;\n  background-color: #2b2b2b;\n  color: white;\n  flex-direction: column;\n  gap: 7.5vh;\n  width: 100%;\n  height: 100vh;\n  font-family: "myFontTitle";\n}\n\n.dashboard {\n  padding-left: 0rem;\n  padding-top: 1rem;\n  display: flex;\n  align-items: center;\n  grid-column: 1 / 2;\n  align-self: center;\n}\n\n.dashboard > div {\n  font-size: 3.25rem;\n  position: relative;\n  left: -10px;\n  top: 2.5px;\n}\n\n.dashboard:hover {\n  cursor: pointer;\n}\n\n.dashboard-icon {\n  fill: white;\n  width: 6rem;\n  height: 6rem;\n}\n\n.nav-btns-one {\n  display: flex;\n  flex-direction: column;\n  font-size: 2rem;\n}\n\n.nav-btn {\n  padding-left: 1rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  padding-right: 1rem;\n}\n\n.nav-btn > p {\n  position: relative;\n  top: 2px;\n}\n\n.nav-btn:hover {\n  background-color: #656565;\n  cursor: pointer;\n}\n\n.nav-icons {\n  fill: white;\n  width: 40px;\n  height: 40px;\n}\n\n.nav-btns-two {\n  display: flex;\n  flex-direction: column;\n  font-size: 2rem;\n  height: 50vh;\n}\n\n.project {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  font-size: 2.25rem;\n  padding-left: 1rem;\n  padding-bottom: 0.5rem;\n}\n\n.project:hover {\n  #add-project-btn {\n    visibility: visible;\n  }\n}\n\n.project-icon {\n  position: relative;\n  left: -1rem;\n  width: 4rem;\n  height: 4rem;\n}\n\n.project > p {\n  cursor: default;\n  position: relative;\n  left: -1rem;\n  top: 2px;\n}\n\n.new-projects-container {\n  padding-bottom: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: center;\n  font-size: 2rem;\n}\n\n.project-item {\n  padding-top: 0.5rem;\n  padding-bottom: 0.25rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  text-transform: capitalize;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.project-item:hover {\n  background-color: #656565;\n  cursor: pointer;\n  .delete-project-btn {\n    display: flex;\n  }\n}\n\n.footer {\n  font-size: 2rem;\n}\n\n.delete-project-btn {\n  background-color: #656565;\n  border: none;\n  width: 30px;\n  height: 30px;\n  background-image: url(${y});\n  background-size: 25px;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n  display: none;\n  position: relative;\n  top: -0.75px;\n}\n\n.delete-project-btn:hover {\n  background-color: rgb(80, 0, 0);\n}\n\n.add-project {\n  width: 20px;\n  height: 20px;\n}\n\n#add-project-btn {\n  visibility: hidden;\n  justify-self: end;\n  border: none;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  position: relative;\n  top: -0.75px;\n}\n\n.main-content {\n  padding: 1rem 5rem;\n  display: flex;\n  justify-content: start;\n  flex-direction: column;\n}\n\n.task-form-container {\n  position: fixed;\n  padding: 0;\n  margin: 0;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0);\n  z-index: 1;\n  visibility: hidden;\n}\n\n.add-task-form {\n  width: 670px;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  visibility: hidden;\n  position: absolute;\n  background-color: #ebebeb;\n  top: 35vh;\n  left: 40vw;\n  box-shadow: 3px 4px 15px 1px rgba(98, 93, 93, 1);\n  font-size: 2rem;\n  gap: 1rem;\n}\n#task,\n#description {\n  width: 598px;\n  outline: none;\n  padding-left: 0.1rem;\n  padding-top: 0.25rem;\n  border: none;\n}\n\n#task {\n  font-family: "myFontTitle";\n  font-size: 2.25rem;\n}\n\n#description {\n  font-size: 1.5rem;\n}\n\n#due-date {\n  height: 31.5px;\n  text-align: center;\n}\n\n#due-date,\n#priority {\n  font-size: 1.25rem;\n  outline: none;\n  position: relative;\n  top: -5px;\n  border: none;\n}\n\n#priority {\n  width: 175px;\n  height: 35px;\n  top: -4.75px;\n  text-align: center;\n  background-color: white;\n}\n\n.date-priority {\n  display: flex;\n  justify-content: space-between;\n  width: 600px;\n  align-items: flex-start;\n}\n\ntextarea {\n  resize: none;\n}\n\n#last-form-div {\n  display: flex;\n  justify-content: space-between;\n  width: 600px;\n}\n\n#last-form-div > button {\n  padding-top: 0.25rem;\n  font-size: 2rem;\n  cursor: pointer;\n  width: 200px;\n  font-family: "myFontTitle";\n  outline: none;\n  border: none;\n  background-color: #616161;\n  color: white;\n}\n\n#last-form-div > button:hover {\n  background-color: #1f1f1f;\n  outline: none;\n}\n\nselect[name="projects"] {\n  font-size: 1.25rem;\n  display: flex;\n  justify-content: center;\n  width: 175px;\n  height: 35px;\n  text-align: center;\n  border: none;\n  background-color: white;\n}\n\n#task:focus,\n#description:focus,\n#due-date:focus,\n#priority:focus,\nselect[name="projects"]:focus {\n  outline: 1px solid black;\n}\n\n.project-form-container {\n  position: fixed;\n  padding: 0;\n  margin: 0;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0);\n  z-index: 1;\n  visibility: hidden;\n}\n\n.project-div {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  font-family: "myFontTitle";\n}\n\n.todo-div {\n  padding: 1rem;\n  padding-left: 2rem;\n  border: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  font-family: "myFontRegular";\n}\n\n.todo-first-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.todo-first-row > p:first-of-type {\n  font-family: "myFontTitle";\n  font-size: 2.25rem;\n}\n\n.todo-first-row > p:last-of-type {\n  font-size: 1.25rem;\n}\n\n.todo-extension-div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 2rem;\n  font-size: 1.5rem;\n}\n\n.buttons-div {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n\n.description-para {\n  justify-self: center;\n  text-align: justify;\n}\n\n.add-project-form {\n  width: 625px;\n  height: 125px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  visibility: hidden;\n  position: absolute;\n  background-color: #ebebeb;\n  top: 40vh;\n  left: 40vw;\n  box-shadow: 3px 4px 15px 1px rgba(98, 93, 93, 1);\n  font-size: 2rem;\n  gap: 1rem;\n  padding: 1rem;\n  justify-content: center;\n}\n\n#project {\n  font-size: 2.25rem;\n  width: 600px;\n  font-family: "myFontTitle";\n  padding-left: 0.1rem;\n  padding-top: 0.25rem;\n  outline: none;\n  border: none;\n}\n\n#project:focus {\n  outline: 1px solid black;\n}\n\n.add-project-form > div {\n  display: flex;\n  justify-content: space-between;\n  width: 600px;\n}\n\n.add-project-form > div > button {\n  padding-top: 0.25rem;\n  font-size: 2rem;\n  cursor: pointer;\n  width: 250px;\n  font-family: "myFontTitle";\n  outline: none;\n  border: none;\n  background-color: #616161;\n  color: white;\n}\n\n.add-project-form > div > button:hover {\n  background-color: #1f1f1f;\n  outline: none;\n}\n\n.expand-btn {\n  align-self: flex-end;\n  border: none;\n  width: 20px;\n  height: 20px;\n  background-image: url(${v});\n  background-size: 20px;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n  position: relative;\n  top: 15px;\n  left: 15px;\n}\n\n.delete-todo-btn {\n  background-color: rgb(200, 0, 0);\n  border: none;\n  width: 30px;\n  height: 30px;\n  background-image: url(${y});\n  background-size: 25px;\n  background-repeat: no-repeat;\n  background-position: 3px 2.5px;\n  cursor: pointer;\n}\n\n.edit-todo-btn {\n  background-color: rgb(0, 150, 200);\n  border: none;\n  width: 30px;\n  height: 30px;\n  background-image: url(${w});\n  background-size: 25px;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 55px;\n  height: 30px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #e0e0e0;\n}\n\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 24px;\n  width: 24px;\n  left: 3.5px;\n  bottom: 3px;\n  background-color: white;\n  background-image: url(${j});\n  background-size: 25px;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.completed-todo-btn:checked + .slider {\n  background-color: #e0e0e0;\n}\n\n.completed-todo-btn:focus + .slider {\n  box-shadow: 0 0 1px #e0e0e0;\n}\n\n.completed-todo-btn:checked + .slider:before {\n  transform: translateX(24.25px);\n  background-image: url(${L});\n  background-size: 25px;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.helper-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.helper-list > li {\n  font-family: "myFontTitle";\n  display: grid;\n  justify-content: space-between;\n  align-items: center;\n  grid-template-columns: 1.5fr 0.35fr 4fr;\n  width: 1200px;\n  gap: 4.181rem;\n}\n\n.helper-list > li > p {\n  font-family: "myFontRegular";\n  /* justify-self: flex-end; */\n  position: relative;\n  top: -2.5px;\n}\n\n.home-page {\n  font-family: "myFontTitle";\n  color: white;\n  background-color:#2b2b2b;\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  align-items: center;\n  font-size: 2rem;\n  position: absolute;\n  gap: 2rem;\n  top: 30vh;\n  left: 30vw;\n  width: 1200px;\n  padding: 3rem;\n}\n`,""]);const E=g},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);o&&a[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},417:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var r={},a=[],s=0;s<t.length;s++){var d=t[s],c=o.base?d[0]+o.base:d[0],l=r[c]||0,p="".concat(c," ").concat(l);r[c]=l+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=i(m,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var r=o(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var s=n(r[a]);e[s].references--}for(var d=o(t,i),c=0;c<r.length;c++){var l=n(r[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=d}}},659:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},91:(t,e,n)=>{t.exports=n.p+"ee6304bdcf69c7e18c12.svg"},827:(t,e,n)=>{t.exports=n.p+"307ccf053218bc30c0a6.svg"},36:(t,e,n)=>{t.exports=n.p+"e536a1b0a38a396536fb.svg"},339:(t,e,n)=>{t.exports=n.p+"bef85f18228d3d9db6d1.svg"},433:(t,e,n)=>{t.exports=n.p+"9da23743d85b44f8b003.svg"},254:(t,e,n)=>{t.exports=n.p+"2a995e8150d23575f18f.woff2"},687:(t,e,n)=>{t.exports=n.p+"d2dc3f85caaf1dca1943.woff"}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return t[o](r,r.exports,n),r.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&(!t||!/^http(s?):/.test(t));)t=o[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0;class o{constructor(t,e,n,o,i){this.title=t,this.description=o,this.dueDate=e,this.priority=n,this.completedStatus=!1,this.project=i}}class i{todoList;constructor(t){this.projectName=t,this.todoList=[]}addTodo(t,e){e?this.todoList.splice(e,1,t):this.todoList.push(t)}deleteTodo(t){this.todoList.splice(t,1)}}function r(t,e,n){const o=document.querySelector(".main-content"),i=document.createElement("div");i.classList.add("project-div");const r=document.createElement("h1");t.forEach((t=>{t.projectName===e&&(o.innerHTML="",r.textContent=`${t.projectName}`,r.style.cssText="text-align: center; text-transform: capitalize; font-size: 3rem;",i.appendChild(r),t.todoList.forEach((e=>{const o=document.createElement("div");o.classList.add("todo-div"),o.setAttribute("data-index",t.todoList.indexOf(e));const r=document.createElement("p"),a=document.createElement("p"),s=document.createElement("p");r.textContent=`${e.title}`,a.textContent=`${e.description}`,a.classList.add("description-para"),s.textContent=`${e.dueDate}`;const d=document.createElement("div");d.classList.add("todo-first-row"),d.append(r,s);const c=document.createElement("button");c.setAttribute("data-btn",t.todoList.indexOf(e)),c.setAttribute("type","button"),c.classList.add("expand-btn"),c.style.cssText="visibility: hidden;";const l=document.createElement("button");l.classList.add("edit-todo-btn"),l.setAttribute("type","button"),l.setAttribute("data-edit-btn",t.todoList.indexOf(e)),l.setAttribute("data-project-name",t.projectName);const p=document.createElement("button");p.classList.add("delete-todo-btn"),p.setAttribute("type","button"),p.setAttribute("data-delete-btn",t.todoList.indexOf(e)),p.setAttribute("data-project-name",t.projectName);const u=document.createElement("label");u.classList.add("switch");const m=document.createElement("span");m.classList.add("slider");const f=document.createElement("input");f.classList.add("completed-todo-btn"),f.setAttribute("type","checkbox"),f.setAttribute("data-completed-btn",t.todoList.indexOf(e)),f.setAttribute("data-project-name",t.projectName),!0===e.completedStatus?(f.checked=!0,o.style.cssText="text-decoration: line-through;"):!1===e.completedStatus&&(f.checked=!1),u.append(f,m),"p1"===e.priority?o.style.cssText+="box-shadow: inset 1rem 0rem rgb(200, 0, 0);":"p2"===e.priority?o.style.cssText+="box-shadow: inset 1rem 0 rgb(255, 187, 0);":"p3"===e.priority?o.style.cssText+="box-shadow: inset 1rem 0 rgb(0, 150, 0);":o.style.cssText+="box-shadow: inset 1rem 0 gray;";const b=document.createElement("div");b.classList.add("buttons-div"),b.append(u,l,p);const g=document.createElement("div");if(g.classList.add("todo-extension-div"),g.setAttribute("data-extension-index",t.todoList.indexOf(e)),g.style.cssText=n?"display: flex;":"display: none;",g.append(a,b),"today"===t.projectName||"upcoming"===t.projectName){const t=document.createElement("p");t.textContent=`# ${e.project}`,b.remove(),t.style.cssText="position: relative; top: -10px; left: -10px;",o.append(t,d,g,c)}else o.append(d,g,c);i.appendChild(o)})),o.appendChild(i))}))}var a=n(72),s=n.n(a),d=n(825),c=n.n(d),l=n(659),p=n.n(l),u=n(56),m=n.n(u),f=n(540),b=n.n(f),g=n(113),h=n.n(g),x=n(208),y={};function v(t){localStorage.setItem("projectsArray",JSON.stringify(t))}function w(){return JSON.parse(localStorage.getItem("projectsArray"))}function j(t){localStorage.setItem("dateProjectsArray",JSON.stringify(t))}function L(){return JSON.parse(localStorage.getItem("dateProjectsArray"))}y.styleTagTransform=h(),y.setAttributes=m(),y.insert=p().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=b(),s()(x.A,y),x.A&&x.A.locals&&x.A.locals;const E=document.querySelector(".main-content");let k=[];const T=new i("inbox");k.push(T);let C=[];const S=new i("today"),A=new i("upcoming");let N;C.push(S,A),document.addEventListener("DOMContentLoaded",(t=>{w().forEach((t=>{k.forEach((e=>{if(e.projectName===t.projectName)e.todoList=[...t.todoList];else{const e=new i(t.projectName);e.todoList=[...t.todoList],k.push(e);const n=document.createElement("div");n.classList.add("project-item"),n.setAttribute("data-project-name",t.projectName),n.textContent=`${t.projectName}`;const o=document.createElement("button");o.classList.add("delete-project-btn"),o.setAttribute("data-project-name",t.projectName),n.appendChild(o),q.appendChild(n);const r=document.createElement("option");r.setAttribute("value",t.projectName),r.textContent=`${t.projectName}`,I.appendChild(r)}}))}))})),document.querySelector(".dashboard").addEventListener("click",(t=>{if("DIV"===t.target.tagName){E.innerHTML="";const t=document.createElement("div");t.classList.add("home-page");const e=document.createElement("p");e.textContent="Instructions";const n=document.createElement("ul");n.classList.add("helper-list");const o=document.createElement("li");o.classList.add("list-items-one"),o.textContent="Add Task";const i=document.createElement("span");i.textContent="-";const r=document.createElement("p");r.textContent="Add your tasks",o.append(i,r);const a=document.createElement("li");a.classList.add("list-items-two"),a.textContent="Inbox";const s=document.createElement("span");s.textContent="-";const d=document.createElement("p");d.textContent="Default storage for tasks",a.append(s,d);const c=document.createElement("li");c.classList.add("list-items-three"),c.textContent="Today";const l=document.createElement("span");l.textContent="-";const p=document.createElement("p");p.textContent="Shows tasks that are due today",c.append(l,p);const u=document.createElement("li");u.classList.add("list-items-four"),u.textContent="Upcoming";const m=document.createElement("span");m.textContent="-";const f=document.createElement("p");f.textContent="Shows tasks that are due in the future",u.append(m,f);const b=document.createElement("li");b.classList.add("list-items-five"),b.textContent="My Projects";const g=document.createElement("span");g.textContent="-";const h=document.createElement("p");h.textContent="Add your own custom projects",b.append(g,h);const x=document.createElement("li");x.classList.add("list-items-six"),x.textContent="Clear All Tasks";const y=document.createElement("span");y.textContent="-";const v=document.createElement("p");v.textContent="Deletes all tasks from the app",x.append(y,v);const w=document.createElement("li");w.classList.add("list-items-six"),w.textContent="Task Buttons";const j=document.createElement("span");j.textContent="-";const L=document.createElement("p");L.textContent="Change status, edit or delete task",w.append(j,L),n.append(o,a,c,u,b,x,w),t.append(e,n),E.appendChild(t)}}));const z=document.querySelector(".add-task-form"),D=document.querySelector("#cancel"),F=document.querySelector(".task-form-container");document.querySelector(".add-task-btn").addEventListener("click",(()=>{z.style.cssText="visibility: visible;",F.style.cssText="visibility: visible;",M.style.cssText="visibility: hidden;"})),D.addEventListener("click",(()=>{z.reset(),z.style.cssText="visibility: hidden",F.style.cssText="visibility: hidden"})),z.addEventListener("submit",(t=>{t.preventDefault(),new FormData(z),z.reset(),z.style.cssText="visibility: hidden",F.style.cssText="visibility: hidden"}));const I=document.createElement("select");I.setAttribute("name","projects"),I.setAttribute("id","projects");const $=document.createElement("option");$.setAttribute("selected","selected"),$.setAttribute("value","inbox"),$.textContent="inbox",I.appendChild($),document.querySelector(".date-priority").appendChild(I),z.addEventListener("formdata",(t=>{const e=t.formData,n=[];let i,a,s,d,c;for(const t of e.values())n.push(t);i=n[0],d=n[1],a=n[2],s=n[3],c=n[4];const l=new o(i,a,s,d,c);k.forEach((t=>{t.projectName===c&&(N?(t.addTodo(l,N),N=null):0===N?t.addTodo(l,0):t.addTodo(l),v(k),r(w(),c))}))}));const M=document.querySelector(".add-project-form"),O=document.querySelector(".project-form-container");document.querySelector("#add-project-btn").addEventListener("click",(()=>{M.style.cssText="visibility: visible;",O.style.cssText="visibility: visible;",z.style.cssText="visibility: hidden"})),document.querySelector("#cancel-project").addEventListener("click",(()=>{M.reset(),M.style.cssText="visibility: hidden",O.style.cssText="visibility: hidden;"})),M.addEventListener("submit",(t=>{t.preventDefault(),new FormData(M),M.reset(),M.style.cssText="visibility: hidden;",O.style.cssText="visibility: hidden;"}));const q=document.querySelector(".new-projects-container");M.addEventListener("formdata",(t=>{const e=t.formData,n=[];let o;for(const t of e.values())n.push(t);o=n[0];const r=new i(o);k.push(r);const a=document.createElement("option");a.setAttribute("value",o),a.textContent=`${o}`,I.appendChild(a);const s=document.createElement("div");s.classList.add("project-item"),s.setAttribute("data-project-name",o),s.textContent=`${o}`;const d=document.createElement("button");d.classList.add("delete-project-btn"),d.setAttribute("data-project-name",o),s.appendChild(d),q.appendChild(s)})),q.addEventListener("click",(t=>{if("DIV"===t.target.tagName){const e=t.target.getAttribute("data-project-name");v(k),r(w(),e),R=!1}if("BUTTON"===t.target.tagName){const e=t.target.getAttribute("data-project-name");k.forEach((n=>{if(n.projectName===e){k.splice(k.indexOf(n),1),v(k),t.target.parentElement.getAttribute("data-project-name")===e&&(t.target.parentElement.innerHTML="",E.innerHTML="");for(const t of I)t.getAttribute("value")===e&&I.removeChild(t)}}))}})),E.addEventListener("mouseover",(t=>{if(t.target.classList.contains("todo-div"))for(const e of t.target.children)e.classList.contains("expand-btn")&&(e.style.cssText="visibility: visible;");t.target.classList.contains("expand-btn")&&(t.target.style.cssText="visibility: visible;")})),E.addEventListener("mouseout",(t=>{if(t.target.classList.contains("todo-div"))for(const e of t.target.children)e.classList.contains("expand-btn")&&(e.style.cssText="visibility: hidden");t.target.classList.contains("expand-btn")&&(t.target.style.cssText="visibility: hidden;")}));let R=!1;E.addEventListener("click",(t=>{if(t.target.classList.contains("expand-btn"))for(const e of t.target.parentElement.children)e.classList.contains("todo-extension-div")&&(R="display: none;"!==e.style.cssText,!1===R?(e.style.cssText="display: flex;",R=!0):(e.style.cssText="display: none;",R=!1));if(t.target.classList.contains("edit-todo-btn")){const e=t.target.getAttribute("data-edit-btn"),n=t.target.getAttribute("data-project-name");N=e,k.forEach((t=>{t.projectName===n&&t.todoList.forEach((n=>{t.todoList.indexOf(n)==e&&(document.getElementById("task").value=n.title,document.getElementById("due-date").value=n.dueDate,document.getElementById("priority").value=n.priority,document.getElementById("description").value=n.description,document.getElementById("projects").value=n.project,t.todoList.splice(e,1))}))})),z.style.cssText="visibility: visible;",F.style.cssText="visibility: visible;",M.style.cssText="visibility: hidden;"}if(t.target.classList.contains("delete-todo-btn")){const e=t.target.getAttribute("data-delete-btn"),n=t.target.getAttribute("data-project-name");k.forEach((t=>{t.projectName===n&&t.deleteTodo(e),v(k),r(w(),n)}))}if(t.target.classList.contains("completed-todo-btn")){const e=t.target.getAttribute("data-completed-btn"),n=t.target.getAttribute("data-project-name");k.forEach((o=>{o.projectName===n&&(t.target.checked&&!1===o.todoList[e].completedStatus?o.todoList[e].completedStatus=!0:!0===o.todoList[e].completedStatus&&(o.todoList[e].completedStatus=!1)),r(k,n)})),v(k),r(w(),n,R)}})),document.getElementById("due-date").addEventListener("focus",(()=>{var t=new Date,e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),o=t.getFullYear();t=o+"-"+n+"-"+e,document.getElementById("due-date").setAttribute("min",t)})),document.querySelector(".nav-btns-one").addEventListener("click",(t=>{if(t.target.classList.contains("inbox")){const e=t.target.getAttribute("data-project-name");v(k),r(w(),e),R=!1}if(t.target.classList.contains("today")){S.todoList=[];let t=new Date;var e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),o=t.getFullYear();t=o+"-"+n+"-"+e,k.forEach((e=>{e.todoList.forEach((e=>{e.dueDate==t&&S.addTodo(e)}))})),j(C),r(L(),"today"),R=!1}if(t.target.classList.contains("upcoming")){A.todoList=[];let t=new Date;e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),o=t.getFullYear(),t=o+"-"+n+"-"+e,k.forEach((e=>{e.todoList.forEach((e=>{e.dueDate>t&&A.addTodo(e)}))})),j(C),r(L(),"upcoming"),R=!1}})),document.querySelector(".footer").addEventListener("click",(()=>{localStorage.clear(),S.todoList=[],A.todoList=[],k.forEach((t=>{t.todoList=[]})),E.innerHTML=""}))})();