(self.webpackChunkleafygreen_ui=self.webpackChunkleafygreen_ui||[]).push([[5518],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}__webpack_require__.d(__webpack_exports__,{Z:()=>_taggedTemplateLiteral})},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_toConsumableArray});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./packages/portal/src/Portal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Portal_stories});var toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),index_js_=__webpack_require__("webpack/sharing/consume/default/react/react"),index_js_default=__webpack_require__.n(index_js_),esm=__webpack_require__("./tools/storybook-utils/dist/esm/index.js"),dist_esm=__webpack_require__("./packages/emotion/dist/esm/index.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react_dom_index_js_=__webpack_require__("webpack/sharing/consume/default/react-dom/react-dom"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),hooks_dist_esm=__webpack_require__("./packages/hooks/dist/esm/index.js");function Portal(_ref){var children=_ref.children,className=_ref.className,container=_ref.container,portalRef=_ref.portalRef,portalContainer=function usePortalContainer(customContainer,portalRef){var _React$useState=index_js_default().useState(),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),container=_React$useState2[0],setContainer=_React$useState2[1];return(0,hooks_dist_esm.LI)((function(){if(customContainer)return portalRef&&(portalRef.current=customContainer),void setContainer(customContainer);var defaultContainer=document.createElement("div");return document.body.appendChild(defaultContainer),portalRef&&(portalRef.current=defaultContainer),setContainer(defaultContainer),function(){defaultContainer.remove()}}),[customContainer,portalRef]),container}(null!=container?container:void 0,portalRef);return(0,hooks_dist_esm.LI)((function(){portalContainer&&!container&&(portalContainer.className=null!=className?className:"")}),[container,portalContainer,className]),portalContainer?(0,react_dom_index_js_.createPortal)(children,portalContainer):null}Portal.displayName="Portal",Portal.propTypes={children:prop_types_default().node,className:prop_types_default().string,container:prop_types_default().oneOfType([prop_types_default().node,prop_types_default().object])};const Portal_Portal=Portal;var _templateObject,portalChildrenStyle=(0,dist_esm.css)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  text-align: center;\n"])));const Portal_stories={title:"Components/Portal",component:Portal_Portal,args:{container:function getRoot(){var root=document.getElementById("root")||document.getElementById("storybook-root")||document.getElementById("story-container");if(null==root)throw new Error("Could not find root element");return root}(),children:index_js_default().createElement("div",{className:portalChildrenStyle},"Portals transport their children to a ",index_js_default().createElement("code",null,"div")," that is appended to the end of the ",index_js_default().createElement("code",null,"document.body")," to or a ",index_js_default().createElement("code",null,"node")," ","that can be specified with a ",index_js_default().createElement("code",null,"container")," prop.")},argTypes:{className:{type:"string"}},parameters:{default:"Basic",controls:{exclude:[].concat((0,toConsumableArray.Z)(esm.xZ),["children","container"])},chromatic:{disableSnapshot:!0}}};var Basic=function Basic(args){return index_js_default().createElement(Portal_Portal,args)};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"(args: PortalProps) => <Portal {...args} />",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./packages/emotion/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{cache:()=>y,css:()=>m,cx:()=>o,default:()=>t,extractCritical:()=>g,flush:()=>a,getRegisteredStyles:()=>i,hydrate:()=>s,injectGlobal:()=>n,keyframes:()=>l,merge:()=>c,renderStylesToNodeStream:()=>S,renderStylesToString:()=>p,sheet:()=>d});var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/server/create-instance/dist/emotion-server-create-instance.browser.esm.js"),t=(0,__webpack_require__("./packages/emotion/node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.esm.js").Z)({key:"leafygreen-ui",prepend:!0}),a=t.flush,s=t.hydrate,o=t.cx,c=t.merge,i=t.getRegisteredStyles,n=t.injectGlobal,l=t.keyframes,m=t.css,d=t.sheet,y=t.cache,f=(0,_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_0__.Z)(y),g=f.extractCritical,p=f.renderStylesToString,S=f.renderStylesToNodeStream},"./packages/hooks/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D9:()=>U,DK:()=>C,Iy:()=>R,LI:()=>M,OR:()=>P,OZ:()=>E,Sj:()=>A,Uu:()=>S,Uv:()=>L,V$:()=>H,YM:()=>z,nP:()=>j,qX:()=>T,rr:()=>d,ts:()=>I,ue:()=>D});var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("webpack/sharing/consume/default/react/react"),lodash_debounce__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/debounce.js"),lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__),lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/isUndefined.js"),lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2__),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/lib/dist/esm/index.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lodash/isEqual.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__),d=function d(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(n&&n.current&&t&&t.current){var r=n.current.offsetTop,o=t.current,i=o.scrollTop;(r>o.offsetHeight||r<i)&&t.current.scrollTo({top:r-e,behavior:"smooth"})}}),[t,n,e])};function s(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=Array(r);t<r;t++)e[t]=n[t];return e}function p(n,r,t){return(r=function(n){var r=function(n,r){if("object"!=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__.Z)(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var e=t.call(n,"string");if("object"!=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__.Z)(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__.Z)(r)?r:r+""}(r))in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function y(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),t.push.apply(t,e)}return t}function m(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){p(n,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))}))}return n}function b(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var e,o,i,u,c=[],a=!0,l=!1;try{if(i=(t=t.call(n)).next,0===r);else for(;!(a=(e=i.call(t)).done)&&(c.push(e.value),c.length!==r);a=!0);}catch(n){l=!0,o=n}finally{try{if(!a&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(n,r)||w(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(n){return g="function"==typeof Symbol&&"symbol"==(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__.Z)(Symbol.iterator)?function(n){return(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__.Z)(n)}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__.Z)(n)},g(n)}function w(n,r){if(n){if("string"==typeof n)return s(n,r);var t={}.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(n,r):void 0}}function O(){return{width:window.innerWidth,height:window.innerHeight}}function j(){var n=b((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),e=n[0],o=n[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){o(O());var n=lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()((function(){return o(O())}),100);return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),e}var S=function S(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,t=j();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){if(t&&n&&n.current){var e=n.current.getBoundingClientRect(),o=e.top,i=e.bottom;return Math.max(t.height-i,o)-r}}),[t,n,r])};function P(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=e.options,u=e.enabled,c=void 0===u||u,a=e.dependencies,l=void 0===a?[c,n]:a,f=e.element,v=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((function(){}));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){v.current=t}),[t]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(!1!==c){if("once"===c||!0===c){var r=function r(n){v.current(n)},t=m(m({},i),{},{once:"once"===c});return(null!=f?f:document).addEventListener(n,r,t),function(){(null!=f?f:document).removeEventListener(n,r,t)}}console.error("Received value of type ".concat(g(c)," for property `enabled`. Expected a boolean."))}}),l)}function A(n,r){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];function e(n){var t,e=n.target;return Array.isArray(r)?r.some((function(n){var r;return null===(r=n.current)||void 0===r?void 0:r.contains(e)})):(null===(t=r.current)||void 0===t?void 0:t.contains(e))||!1}P("mousedown",(function(n){e(n)||(n.preventDefault(),n.stopPropagation())}),{enabled:t}),P("click",(function(r){e(r)||(r.stopPropagation(),n())}),{options:{capture:!0},enabled:t})}var E=function E(n,o,i){var u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return!lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default()(n)}),[]),c=b((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(i),2),v=c[0],d=c[1],s=function s(n){null==o||o(n),u||d(n.target.value)};return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default()(n)&&lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default()(i)&&_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_3__.X3.error("Warning: `useControlledValue` hook is being used without a value or initialValue. This will cause a React warning when the input changes. Please decide between using a controlled or uncontrolled input element, and provide either a controlledValue or initialValue to `useControlledValue`")}),[n,i]),{isControlled:u,value:u?n:v,handleChange:s,setUncontrolledValue:d,updateValue:function updateValue(n,r){if(r.current){r.current.value=n;var t=(0,_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_3__.yA)(new Event("change",{cancelable:!0,bubbles:!0}),r.current);s(t)}}}};function C(r){var t=null==r?void 0:r.prefix;return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){var r=function(r){return function(t){if(t){if(r.get(t))return r.get(t);var e=react__WEBPACK_IMPORTED_MODULE_0__.createRef();return r.set(t,e),e}_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_3__.X3.error("`useDynamicRefs`: Cannot get ref without key")}}(new Map);return r}),[t])}var T=function T(n,r){return P("keydown",(function(r){return function(n,r){27===n.keyCode&&(n.stopImmediatePropagation(),r())}(r,n)}),r)};function x(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.initialValue,i=r.deps,u=void 0===i?[]:i,c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{get current(){return c.current},set current(r){c.current=r,n(r)}}}),[n,c].concat(function h(n){return function(n){if(Array.isArray(n))return s(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||w(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(u)))}function I(n,r){var t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(n,r){Array.isArray(n)?n.forEach(t):"function"==typeof n?n(r):n&&(n.current=r)}),[]);return x((0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(r){return t(n,r)}),[n,t]),{initialValue:r})}var k=0;function D(n){var e=n.prefix;return function(n){var e=n.id,o=n.prefix,i=b((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(e),2),u=i[0],c=i[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){null==u&&c(k+=1)}),[u,o]),e||"".concat(null!=o?o:"lg","-").concat(u)}({id:n.id,prefix:e})}var M=function M(){return("undefined"==typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useEffect:react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect).apply(void 0,arguments)};function R(n,e,o){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],u=b((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),2),c=u[0],a=u[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(i){var r=new MutationObserver((function(){a(o.apply(void 0,arguments))}));return n&&r.observe(n,e),function(){return r.disconnect()}}}),[n,e,o,i]),c}function L(n){var r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return void 0!==r.current&&lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(r.current,n)||(r.current=n),r.current}function U(n){var t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){t.current=n})),t.current}function z(n){var r=b((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(n),2),e=r[0],u=r[1],c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return[e,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(n){u(n),c.current=n}),[u]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return c.current}),[])]}function H(n){var r=b((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),e=r[0],o=r[1];return lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default()(n)||"function"!=typeof n?{onBlur:function onBlur(){},onChange:function onChange(){}}:{onBlur:function onBlur(r){o(!0),null==n||n(r.target.value)},onChange:function onChange(r){e&&(null==n||n(r.target.value))}}}},"./packages/lib/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$$:()=>v,$K:()=>S,B9:()=>E,BI:()=>A,E6:()=>N,Kf:()=>k,Me:()=>D,Nk:()=>R,Pc:()=>_,Q2:()=>g,Up:()=>w,X3:()=>O,gh:()=>h,hy:()=>b,t$:()=>P,xh:()=>L,yA:()=>C,yn:()=>B});var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),lodash_once__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/once.js"),lodash_once__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_once__WEBPACK_IMPORTED_MODULE_0__),lodash_isNull__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/isNull.js"),lodash_isNull__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_isNull__WEBPACK_IMPORTED_MODULE_1__),lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/isUndefined.js"),lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2__),lodash_omit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lodash/omit.js"),lodash_omit__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_3__),lodash_pick__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lodash/pick.js"),lodash_pick__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_4__),lodash_isObject__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lodash/isObject.js"),lodash_isObject__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("webpack/sharing/consume/default/react/react"),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);function u(t,r){r=t.length;for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function c(t,r,e){return(r=function(t){var r=function(t,r){if("object"!=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__.Z)(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__.Z)(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__.Z)(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function l(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?l(Object(e),!0).forEach((function(r){c(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function p(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return u(t,r);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t){return s="function"==typeof Symbol&&"symbol"==(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__.Z)(Symbol.iterator)?function(t){return(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__.Z)(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__.Z)(t)},s(t)}function y(t){return null!=t&&t.nodeType===Node.ELEMENT_NODE}Object.freeze({__proto__:null,array:function array(t){return null!=t&&t instanceof Array},button:function button(t){return y(t)&&"button"===t.tagName.toLowerCase()},element:y,input:function input(t){return y(t)&&"input"===t.tagName.toLowerCase()}});var d=new Map,b=function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=function(t){var r,e,n=(null!==(r=null===(e=d.get(t))||void 0===e?void 0:e.length)&&void 0!==r?r:0).toString().padStart(4,"0");return"lg-ui".concat(t?"-".concat(t):"","-").concat(n)}(t);if(d.has(t)){var e=d.get(t);d.set(t,[r].concat(p(e)))}else d.set(t,[r]);return r};function v(t){return"string"==typeof(r=t)||"number"==typeof r?t.toString().trim():Array.isArray(t)?t.map(v).join(" ").trim():function(t){return t&&"object"===s(t)&&t.props}(t)?v(t.props.children):"";var r}var g={Light:"light",Dark:"dark"},h=function h(t){return t?g.Dark:g.Light};function w(t){return 1==new Set(t).size}var O={error:lodash_once__WEBPACK_IMPORTED_MODULE_0___default()(console.error),warn:lodash_once__WEBPACK_IMPORTED_MODULE_0___default()(console.warn),log:lodash_once__WEBPACK_IMPORTED_MODULE_0___default()(console.log)},S=function S(t){return!lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default()(t)&&!lodash_isNull__WEBPACK_IMPORTED_MODULE_1___default()(t)},P=function P(t){return!S(t)||["","0","00",0].includes(t)},A=function A(t){return!P(t)},D=function D(t,r){return[lodash_pick__WEBPACK_IMPORTED_MODULE_4___default()(t,r),lodash_omit__WEBPACK_IMPORTED_MODULE_3___default()(t,r)]},E=function E(t,r,e){var n=e-r;return t>e?r+(t-e-1)%n:t<r?e-(r-t-1)%n:t},T={length:30},L=function L(t){var r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:T).length;return t.length<=r?t:t.substring(t.length-r)};function k(t,r){var e;return null!=t&&"object"===s(t)&&"type"in t&&(t.type.displayName===r||lodash_isObject__WEBPACK_IMPORTED_MODULE_5___default()(t.type)&&"render"in t.type&&(null===(e=t.type.render)||void 0===e?void 0:e.displayName)===r)}var N=function N(t,r){var n,o=null===(n=react__WEBPACK_IMPORTED_MODULE_6___default().Children.map(t,(function(t){if(r.some((function(r){return k(t,r)})))return t})))||void 0===n?void 0:n.filter((function(t){return!lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default()(t)}));return lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default()(t)||(null==o?void 0:o.length)===react__WEBPACK_IMPORTED_MODULE_6___default().Children.count(t)||O.error("Children must be one of: ".concat(r.join(", ")),"Received children: ",t),o},C=function C(t,r){Object.defineProperty(t,"target",{writable:!1,value:r});var e=!1,n=!1;return f(f({nativeEvent:t},t),{},{currentTarget:t.currentTarget,target:t.target,bubbles:t.bubbles,cancelable:t.cancelable,defaultPrevented:t.defaultPrevented,eventPhase:t.eventPhase,isTrusted:t.isTrusted,timeStamp:t.timeStamp,type:t.type,preventDefault:function preventDefault(){e=!0,t.preventDefault()},isDefaultPrevented:function isDefaultPrevented(){return e},stopPropagation:function stopPropagation(){n=!0,t.stopPropagation()},isPropagationStopped:function isPropagationStopped(){return n},persist:function persist(){}})};var _={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight",Backspace:"Backspace",BracketLeft:"[",Delete:"Delete",Enter:"Enter",Escape:"Escape",Space:" ",Tab:"Tab"},R={Page:"page",Step:"step",Location:"location",Date:"date",Time:"time",True:"true",Unset:"false"};function B(t){throw Error("Received unhandled value: ".concat(t))}},"./tools/storybook-utils/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bN:()=>n,xZ:()=>r});__webpack_require__("./node_modules/lodash/mergeWith.js");var n={baseFontSize:{description:"The base font size passed to the LeafyGreenProvider that wraps the component",control:{type:"radio"},options:[14,16]},updatedBaseFontSize:{description:"The base font size passed to the LeafyGreenProvider that wraps the component. Uses the updated font size values for Euclid Circular A.",control:{type:"radio"},options:[13,16]},darkMode:{description:"Render the component in dark mode.",control:"boolean"},children:{description:"Element rendered inside the component",control:"text"},as:{description:"The component will be rendered in HTML as the element selected here",options:["small","button","a","abbr","address","article","aside","b","big","blockquote","caption","cite","code","dd","del","details","dfn","dialog","div","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","i","ins","kbd","keygen","label","legend","li","main","map","mark","menu","menuitem","meter","nav","noscript","ol","p","picture","pre","progress","q","rp","rt","ruby","s","samp","slot","script","section","select","span","strong","style","sub","summary","sup","template","tbody","td","tfoot","th","thead","time","title","tr","u","ul"],type:{name:"string"},control:{type:"select"},defaultValue:"button"}},r=["aria-controls","aria-describedby","aria-label","aria-labelledby","aria-describedby","className","data-lgid","id","onBlur","onCancel","onChange","onClear","onClick","onConfirm","onDismiss","onFilter","popoverZIndex","portalClassName","portalContainer","ref","setOpen","scrollContainer","usePortal"]},"./node_modules/lodash/_assignMergeValue.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseAssignValue=__webpack_require__("./node_modules/lodash/_baseAssignValue.js"),eq=__webpack_require__("./node_modules/lodash/eq.js");module.exports=function assignMergeValue(object,key,value){(void 0!==value&&!eq(object[key],value)||void 0===value&&!(key in object))&&baseAssignValue(object,key,value)}},"./node_modules/lodash/_baseMerge.js":(module,__unused_webpack_exports,__webpack_require__)=>{var Stack=__webpack_require__("./node_modules/lodash/_Stack.js"),assignMergeValue=__webpack_require__("./node_modules/lodash/_assignMergeValue.js"),baseFor=__webpack_require__("./node_modules/lodash/_baseFor.js"),baseMergeDeep=__webpack_require__("./node_modules/lodash/_baseMergeDeep.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),keysIn=__webpack_require__("./node_modules/lodash/keysIn.js"),safeGet=__webpack_require__("./node_modules/lodash/_safeGet.js");module.exports=function baseMerge(object,source,srcIndex,customizer,stack){object!==source&&baseFor(source,(function(srcValue,key){if(stack||(stack=new Stack),isObject(srcValue))baseMergeDeep(object,source,key,srcIndex,baseMerge,customizer,stack);else{var newValue=customizer?customizer(safeGet(object,key),srcValue,key+"",object,source,stack):void 0;void 0===newValue&&(newValue=srcValue),assignMergeValue(object,key,newValue)}}),keysIn)}},"./node_modules/lodash/_baseMergeDeep.js":(module,__unused_webpack_exports,__webpack_require__)=>{var assignMergeValue=__webpack_require__("./node_modules/lodash/_assignMergeValue.js"),cloneBuffer=__webpack_require__("./node_modules/lodash/_cloneBuffer.js"),cloneTypedArray=__webpack_require__("./node_modules/lodash/_cloneTypedArray.js"),copyArray=__webpack_require__("./node_modules/lodash/_copyArray.js"),initCloneObject=__webpack_require__("./node_modules/lodash/_initCloneObject.js"),isArguments=__webpack_require__("./node_modules/lodash/isArguments.js"),isArray=__webpack_require__("./node_modules/lodash/isArray.js"),isArrayLikeObject=__webpack_require__("./node_modules/lodash/isArrayLikeObject.js"),isBuffer=__webpack_require__("./node_modules/lodash/isBuffer.js"),isFunction=__webpack_require__("./node_modules/lodash/isFunction.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),isPlainObject=__webpack_require__("./node_modules/lodash/isPlainObject.js"),isTypedArray=__webpack_require__("./node_modules/lodash/isTypedArray.js"),safeGet=__webpack_require__("./node_modules/lodash/_safeGet.js"),toPlainObject=__webpack_require__("./node_modules/lodash/toPlainObject.js");module.exports=function baseMergeDeep(object,source,key,srcIndex,mergeFunc,customizer,stack){var objValue=safeGet(object,key),srcValue=safeGet(source,key),stacked=stack.get(srcValue);if(stacked)assignMergeValue(object,key,stacked);else{var newValue=customizer?customizer(objValue,srcValue,key+"",object,source,stack):void 0,isCommon=void 0===newValue;if(isCommon){var isArr=isArray(srcValue),isBuff=!isArr&&isBuffer(srcValue),isTyped=!isArr&&!isBuff&&isTypedArray(srcValue);newValue=srcValue,isArr||isBuff||isTyped?isArray(objValue)?newValue=objValue:isArrayLikeObject(objValue)?newValue=copyArray(objValue):isBuff?(isCommon=!1,newValue=cloneBuffer(srcValue,!0)):isTyped?(isCommon=!1,newValue=cloneTypedArray(srcValue,!0)):newValue=[]:isPlainObject(srcValue)||isArguments(srcValue)?(newValue=objValue,isArguments(objValue)?newValue=toPlainObject(objValue):isObject(objValue)&&!isFunction(objValue)||(newValue=initCloneObject(srcValue))):isCommon=!1}isCommon&&(stack.set(srcValue,newValue),mergeFunc(newValue,srcValue,srcIndex,customizer,stack),stack.delete(srcValue)),assignMergeValue(object,key,newValue)}}},"./node_modules/lodash/_baseRest.js":(module,__unused_webpack_exports,__webpack_require__)=>{var identity=__webpack_require__("./node_modules/lodash/identity.js"),overRest=__webpack_require__("./node_modules/lodash/_overRest.js"),setToString=__webpack_require__("./node_modules/lodash/_setToString.js");module.exports=function baseRest(func,start){return setToString(overRest(func,start,identity),func+"")}},"./node_modules/lodash/_createAssigner.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseRest=__webpack_require__("./node_modules/lodash/_baseRest.js"),isIterateeCall=__webpack_require__("./node_modules/lodash/_isIterateeCall.js");module.exports=function createAssigner(assigner){return baseRest((function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:void 0,guard=length>2?sources[2]:void 0;for(customizer=assigner.length>3&&"function"==typeof customizer?(length--,customizer):void 0,guard&&isIterateeCall(sources[0],sources[1],guard)&&(customizer=length<3?void 0:customizer,length=1),object=Object(object);++index<length;){var source=sources[index];source&&assigner(object,source,index,customizer)}return object}))}},"./node_modules/lodash/_isIterateeCall.js":(module,__unused_webpack_exports,__webpack_require__)=>{var eq=__webpack_require__("./node_modules/lodash/eq.js"),isArrayLike=__webpack_require__("./node_modules/lodash/isArrayLike.js"),isIndex=__webpack_require__("./node_modules/lodash/_isIndex.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js");module.exports=function isIterateeCall(value,index,object){if(!isObject(object))return!1;var type=typeof index;return!!("number"==type?isArrayLike(object)&&isIndex(index,object.length):"string"==type&&index in object)&&eq(object[index],value)}},"./node_modules/lodash/_safeGet.js":module=>{module.exports=function safeGet(object,key){if(("constructor"!==key||"function"!=typeof object[key])&&"__proto__"!=key)return object[key]}},"./node_modules/lodash/isArrayLikeObject.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isArrayLike=__webpack_require__("./node_modules/lodash/isArrayLike.js"),isObjectLike=__webpack_require__("./node_modules/lodash/isObjectLike.js");module.exports=function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value)}},"./node_modules/lodash/isEqual.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseIsEqual=__webpack_require__("./node_modules/lodash/_baseIsEqual.js");module.exports=function isEqual(value,other){return baseIsEqual(value,other)}},"./node_modules/lodash/mergeWith.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseMerge=__webpack_require__("./node_modules/lodash/_baseMerge.js"),mergeWith=__webpack_require__("./node_modules/lodash/_createAssigner.js")((function(object,source,srcIndex,customizer){baseMerge(object,source,srcIndex,customizer)}));module.exports=mergeWith},"./node_modules/lodash/omit.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayMap=__webpack_require__("./node_modules/lodash/_arrayMap.js"),baseClone=__webpack_require__("./node_modules/lodash/_baseClone.js"),baseUnset=__webpack_require__("./node_modules/lodash/_baseUnset.js"),castPath=__webpack_require__("./node_modules/lodash/_castPath.js"),copyObject=__webpack_require__("./node_modules/lodash/_copyObject.js"),customOmitClone=__webpack_require__("./node_modules/lodash/_customOmitClone.js"),flatRest=__webpack_require__("./node_modules/lodash/_flatRest.js"),getAllKeysIn=__webpack_require__("./node_modules/lodash/_getAllKeysIn.js"),omit=flatRest((function(object,paths){var result={};if(null==object)return result;var isDeep=!1;paths=arrayMap(paths,(function(path){return path=castPath(path,object),isDeep||(isDeep=path.length>1),path})),copyObject(object,getAllKeysIn(object),result),isDeep&&(result=baseClone(result,7,customOmitClone));for(var length=paths.length;length--;)baseUnset(result,paths[length]);return result}));module.exports=omit},"./node_modules/lodash/pick.js":(module,__unused_webpack_exports,__webpack_require__)=>{var basePick=__webpack_require__("./node_modules/lodash/_basePick.js"),pick=__webpack_require__("./node_modules/lodash/_flatRest.js")((function(object,paths){return null==object?{}:basePick(object,paths)}));module.exports=pick},"./node_modules/lodash/toPlainObject.js":(module,__unused_webpack_exports,__webpack_require__)=>{var copyObject=__webpack_require__("./node_modules/lodash/_copyObject.js"),keysIn=__webpack_require__("./node_modules/lodash/keysIn.js");module.exports=function toPlainObject(value){return copyObject(value,keysIn(value))}},"?ed1b":()=>{},"?d17e":()=>{},"?3e83":()=>{},"?19e6":()=>{}}]);