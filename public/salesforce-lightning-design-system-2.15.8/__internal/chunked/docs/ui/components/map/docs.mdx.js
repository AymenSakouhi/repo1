var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/components/map/docs.mdx.js"]=function(e){function t(t){for(var a,l,i=t[0],s=t[1],c=t[2],u=0,m=[];u<i.length;u++)l=i[u],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&m.push(o[l][0]),o[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(d&&d(t);m.length;)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={47:0},r=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=s;return r.push([253,0]),n()}({0:function(e,t){e.exports=React},19:function(e,t){e.exports=ReactDOM},20:function(e,t){e.exports=JSBeautify},253:function(e,t,n){"use strict";n.r(t),n.d(t,"getElement",(function(){return P})),n.d(t,"getContents",(function(){return F}));var a=n(0),o=n.n(a),r=n(4),l=n(1),i=n(2),s=n(37),c=n(32),d=n(22),u=n(5),m=n.n(u),p=[{title:"Worldwide Corporate Headquarters",address:"The Landmark @ One Market, San Francisco, CA"},{title:"salesforce.com inc Atlanta",address:"950 East Paces Ferry Road NE, Atlanta, GA"},{title:"salesforce.com inc Bellevue",address:"929 108th Ave NE, Bellevue, WA"},{title:"salesforce.com inc Boston",address:"500 Boylston Street 19th Floor, Boston, MA"},{title:"salesforce.com inc Chicago",address:"111 West Illinois Street, Chicago, IL"},{title:"salesforce.com inc Herndon",address:"2550 Wasser Terrace, Herndon, VA"},{title:"salesforce.com inc Hillsboro",address:"2035 NE Cornelius Pass Road, Hillsboro, OR"},{title:"salesforce.com inc Indy",address:"111 Monument Circle, Indianapolis, IN"},{title:"salesforce.com inc Irvine",address:"300 Spectrum Center Drive, Irvine, CA"}];function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=g(e);if(t){var o=g(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return E(this,n)}}function E(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e){return o.a.createElement("div",{className:"slds-coordinates"},o.a.createElement("div",{className:"slds-coordinates__header"},o.a.createElement("h2",{className:"slds-coordinates__title"},e.heading)),o.a.createElement("ul",{className:"slds-coordinates__list"},p.map((function(t,n){return o.a.createElement("li",{className:"slds-coordinates__item",key:n},o.a.createElement("span",{className:"slds-assistive-text","aria-live":"polite"},parseInt(e.selection,0)===n?t.title+" is currently selected":null),o.a.createElement(_,{title:t.title,address:t.address,selected:parseInt(e.selection,0)===n}))}))))},_=function(e){return o.a.createElement("button",{className:"slds-coordinates__item-action slds-button_reset slds-media","aria-pressed":e.selected},o.a.createElement("span",{className:"slds-media__figure"},o.a.createElement(c.a,{symbol:"account"})),o.a.createElement("span",{className:"slds-media__body"},o.a.createElement("span",{className:"slds-text-link"},e.title),o.a.createElement("span",null,e.address)))},O=function(){return o.a.createElement(d.d,null,o.a.createElement("button",{className:"slds-button slds-button_brand"},"Open in Google Maps"))},j=function(e){return o.a.createElement("div",{className:"slds-map"},!e.hideMap&&o.a.createElement("iframe",{id:"GoogleMapID",title:"Google Maps iframe",src:"https://www.google.com/maps/embed/v1/place?q=1%20market%2C%20san%20francisco&key=AIzaSyDliLquGXGts9S8YtkWVolSQEJdBL1ZuWc"}))},C=function(e){return o.a.createElement("div",{className:m()("slds-grid",e.multipleCoordinates&&"slds-has-coordinates")},o.a.createElement("div",{className:"slds-map_container"},o.a.createElement(j,{hideMap:e.hideMap})),e.multipleCoordinates&&o.a.createElement(v,{heading:e.heading,selection:e.selection}))},M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(l,e);var t,n,a,r=S(l);function l(){return b(this,l),r.apply(this,arguments)}return t=l,(n=[{key:"render",value:function(){var e=this.props,t=e.heading,n=e.multipleCoordinates,a=e.selection,r=e.hideMap,l=e.footer;return o.a.createElement(d.b,{className:"slds-modal_medium","aria-labelledby":"modal-heading-id-01","aria-describedby":"modal-content-id-01"},o.a.createElement(d.e,null,o.a.createElement("h2",{id:"modal-heading-id-01",className:"slds-text-heading_medium slds-hyphenate"},t)),o.a.createElement(d.c,{id:"modal-content-id-01"},o.a.createElement(C,{multipleCoordinates:n,heading:t,selection:a,hideMap:r})),l&&o.a.createElement(O,null))}}])&&h(t.prototype,n),a&&h(t,a),l}(a.Component),N=o.a.createElement(C,{heading:"Salesforce locations in United States (9)",multipleCoordinates:!0}),w=[{id:"multiple-coordinates-item-one-selection",label:"First Coordinate Selected",element:o.a.createElement(C,{heading:"Salesforce locations in United States (9)",multipleCoordinates:!0,selection:"0"})},{id:"multiple-coordinates-item-two-selection",label:"Second Coordinate Selected",element:o.a.createElement(C,{heading:"Salesforce locations in United States (9)",multipleCoordinates:!0,selection:"1"})}],x=[{id:"single-coordinate",label:"In Modal - Single Coordinate - With Footer",element:o.a.createElement(o.a.Fragment,null,o.a.createElement(M,{heading:"Geo Code: 37°48'08.3\"N 122°15'55.2W",footer:!0}),o.a.createElement("div",{className:"slds-backdrop slds-backdrop_open"}))},{id:"multiple-coordinates",label:"In Modal - Multiple Coordinates",element:o.a.createElement(o.a.Fragment,null,o.a.createElement(M,{heading:"Salesforce locations in United States (9)",multipleCoordinates:!0,footer:!0}),o.a.createElement("div",{className:"slds-backdrop slds-backdrop_open"}))}],k=r.c.h2,I=r.c.h3,P=function(){return Object(a.createElement)(r.b,{},Object(a.createElement)("div",{className:"lead doc"},"A map component is used to find a location"),k({id:"Base"},"Base"),Object(a.createElement)(l.a,null,N),I({id:"Mobile"},"Mobile"),Object(a.createElement)(s.a,{patternSpecificText:"maps will have increased header text size along with other small adjustments"}),Object(a.createElement)(l.a,{frameOnly:!0},N),k({id:"States"},"States"),I({id:"First-Coordinate-Selected"},"First Coordinate Selected"),Object(a.createElement)(l.a,null,Object(i.f)(w,"multiple-coordinates-item-one-selection")),I({id:"Second-Coordinate-Selected"},"Second Coordinate Selected"),Object(a.createElement)(l.a,null,Object(i.f)(w,"multiple-coordinates-item-two-selection")),k({id:"Examples"},"Examples"),I({id:"In-Modal-Single-Coordinate-With-Footer"},"In Modal - Single Coordinate With Footer"),Object(a.createElement)(l.a,{isViewport:!0,demoStyles:"height: 660px;"},Object(i.f)(x,"single-coordinate")),I({id:"In-Modal-Multiple-Coordinates-With-Footer"},"In Modal - Multiple Coordinates With Footer"),Object(a.createElement)(l.a,{isViewport:!0,demoStyles:"height: 660px;"},Object(i.f)(x,"multiple-coordinates")))},F=function(){return Object(r.a)(P())}}});