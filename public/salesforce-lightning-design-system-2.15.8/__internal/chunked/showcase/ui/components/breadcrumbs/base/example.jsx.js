var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/breadcrumbs/base/example.jsx.js"]=function(e){function t(t){for(var r,o,u=t[0],c=t[1],s=t[2],d=0,m=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(i&&i(t);m.length;)m.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={10:0,6:0,22:0,73:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,128:0,132:0,136:0,141:0,143:0},l=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var u=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var i=c;return l.push([238,0]),n()}({0:function(e,t){e.exports=React},238:function(e,t,n){"use strict";n.r(t),n.d(t,"Context",(function(){return d})),n.d(t,"BreadcrumbsBase",(function(){return m})),n.d(t,"BreadcrumbsWithOverflow",(function(){return f})),n.d(t,"states",(function(){return p})),n.d(t,"examples",(function(){return b}));var r=n(0),a=n.n(r),l=n(68),o=n(4),u=n(14),c=l.a.Crumb,s=a.a.createElement(o.b,{className:"slds-button_icon-border-filled slds-button_icon-x-small",symbol:"threedots",assistiveText:"Show More","aria-haspopup":"true",title:"Show More"}),i=function(e){return a.a.createElement(u.Trigger,{isOpen:!0,triggerIcon:s},a.a.createElement(u.Menu,{className:"slds-dropdown_left slds-dropdown_actions"},a.a.createElement(u.MenuList,null,a.a.createElement(u.MenuItem,{tabIndex:"0"},"Menu Item One"),a.a.createElement(u.MenuItem,null,"Menu Item Two"),a.a.createElement(u.MenuItem,null,"Menu Item Three"))))},d=function(e){return a.a.createElement("div",{className:"demo-only",style:{height:"150px"}},e.children)},m=function(e){var t=e.kineticsEnabled;return a.a.createElement(l.a,{kxScopeBreadcrumbsItem:t,kxTypeUnderline:t},a.a.createElement(c,null,"Parent Entity"),a.a.createElement(c,null,"Parent Record Name"))},f=function(e){var t=e.kineticsEnabled;return a.a.createElement(l.a,{kxScopeBreadcrumbsItem:t,kxTypeUnderline:t,listClassNames:"slds-grid_vertical-align-center"},a.a.createElement(c,{hasMenu:!0},a.a.createElement(i,null)),a.a.createElement(c,null,"Parent Entity"),a.a.createElement(c,null,"Parent Record Name"))};t.default=a.a.createElement(m,null);var p=[{id:"breadcrumbs-overflow",label:"With Overflow Menu",demoStyles:"height: 200px;",element:a.a.createElement(f,null)}],b=[{id:"kinetics-breadcrumbs-base",label:"Base (Kinetics)",element:a.a.createElement(m,{kineticsEnabled:!0})},{id:"kinetics-breadcrumbs-overflow",label:"With Overflow Menu (Kinetics)",demoStyles:"height: 200px;",element:a.a.createElement(f,{kineticsEnabled:!0})}]}});