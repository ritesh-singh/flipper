"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4200,4321],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){return function(t){var r=p(t.components);return n.createElement(e,o({},t,{components:r}))}},p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54299:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>s,toc:()=>u,default:()=>d});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=(r(44996),["components"]),l={},c=void 0,s={type:"mdx",permalink:"/docs/plugins/leak-canary/overview",source:"@site/src/embedded-pages/docs/plugins/leak-canary/overview.mdx"},u=[],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The LeakCanary plugin provides Developers with Flipper support for ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/square/leakcanary"},"LeakCanary"),", an open source memory leak detection library."),(0,o.mdx)("p",null,"Leaks detected by LeakCanary appear automatically in Flipper. Each leak displays a hierarchy of objects, beginning with the garbage collector root and ending at the leaked class.\nSelecting any object in this list displays contents of the object's various fields."))}d.isMDXComponent=!0},13919:(e,t,r)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>a})},44996:(e,t,r)=>{r.r(t),r.d(t,{useBaseUrlUtils:()=>o,default:()=>i});var n=r(52263),a=r(13919);function o(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,l=void 0!==i&&i,c=o.absolute,s=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(l)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+u:u}(o,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},62342:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>u,toc:()=>p,default:()=>f});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=r(54299),l=["components"],c={id:"leak-canary",title:"LeakCanary Plugin",sidebar_label:"LeakCanary",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/leak_canary/docs/overview.mdx"},s=void 0,u={unversionedId:"features/plugins/leak-canary",id:"features/plugins/leak-canary",isDocsHomePage:!1,title:"LeakCanary Plugin",description:"\u2192 See setup instructions for the LeakCanary plugin",source:"@site/../docs/features/plugins/leak-canary.mdx",sourceDirName:"features/plugins",slug:"/features/plugins/leak-canary",permalink:"/docs/features/plugins/leak-canary",editUrl:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/leak_canary/docs/overview.mdx",tags:[],version:"current",frontMatter:{id:"leak-canary",title:"LeakCanary Plugin",sidebar_label:"LeakCanary",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/leak_canary/docs/overview.mdx"},sidebar:"features",previous:{title:"Layout",permalink:"/docs/features/plugins/inspector"},next:{title:"Navigation",permalink:"/docs/features/plugins/navigation"}},p=[],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.mdx)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"\u2192 ",(0,o.mdx)("a",{parentName:"p",href:"/docs/setup/plugins/leak-canary"},"See setup instructions for the LeakCanary plugin")),(0,o.mdx)(i.default,{mdxType:"Article"}))}f.isMDXComponent=!0}}]);