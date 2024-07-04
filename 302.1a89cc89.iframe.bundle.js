"use strict";(self.webpackChunkleafygreen_ui=self.webpackChunkleafygreen_ui||[]).push([[302],{"./packages/lib/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$$:()=>v,$K:()=>S,E6:()=>N,Kf:()=>k,Nk:()=>R,Pc:()=>_,Q2:()=>g,Up:()=>w,X3:()=>O,gh:()=>h,hy:()=>b,yA:()=>C,yn:()=>B});var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),lodash_once__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/once.js"),lodash_once__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_once__WEBPACK_IMPORTED_MODULE_0__),lodash_isNull__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/isNull.js"),lodash_isNull__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_isNull__WEBPACK_IMPORTED_MODULE_1__),lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/isUndefined.js"),lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2__),lodash_isObject__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/lodash/omit.js"),__webpack_require__("./node_modules/lodash/pick.js"),__webpack_require__("./node_modules/lodash/isObject.js")),lodash_isObject__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("webpack/sharing/consume/default/react/react"),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);function u(t,r){r=t.length;for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function c(t,r,e){return(r=function(t){var r=function(t,r){if("object"!=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__.Z)(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__.Z)(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__.Z)(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function l(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?l(Object(e),!0).forEach((function(r){c(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function p(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return u(t,r);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t){return s="function"==typeof Symbol&&"symbol"==(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__.Z)(Symbol.iterator)?function(t){return(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__.Z)(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__.Z)(t)},s(t)}function y(t){return null!=t&&t.nodeType===Node.ELEMENT_NODE}Object.freeze({__proto__:null,array:function array(t){return null!=t&&t instanceof Array},button:function button(t){return y(t)&&"button"===t.tagName.toLowerCase()},element:y,input:function input(t){return y(t)&&"input"===t.tagName.toLowerCase()}});var d=new Map,b=function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=function(t){var r,e,n=(null!==(r=null===(e=d.get(t))||void 0===e?void 0:e.length)&&void 0!==r?r:0).toString().padStart(4,"0");return"lg-ui".concat(t?"-".concat(t):"","-").concat(n)}(t);if(d.has(t)){var e=d.get(t);d.set(t,[r].concat(p(e)))}else d.set(t,[r]);return r};function v(t){return"string"==typeof(r=t)||"number"==typeof r?t.toString().trim():Array.isArray(t)?t.map(v).join(" ").trim():function(t){return t&&"object"===s(t)&&t.props}(t)?v(t.props.children):"";var r}var g={Light:"light",Dark:"dark"},h=function h(t){return t?g.Dark:g.Light};function w(t){return 1==new Set(t).size}var O={error:lodash_once__WEBPACK_IMPORTED_MODULE_0___default()(console.error),warn:lodash_once__WEBPACK_IMPORTED_MODULE_0___default()(console.warn),log:lodash_once__WEBPACK_IMPORTED_MODULE_0___default()(console.log)},S=function S(t){return!lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default()(t)&&!lodash_isNull__WEBPACK_IMPORTED_MODULE_1___default()(t)};function k(t,r){var e;return null!=t&&"object"===s(t)&&"type"in t&&(t.type.displayName===r||lodash_isObject__WEBPACK_IMPORTED_MODULE_5___default()(t.type)&&"render"in t.type&&(null===(e=t.type.render)||void 0===e?void 0:e.displayName)===r)}var N=function N(t,r){var n,o=null===(n=react__WEBPACK_IMPORTED_MODULE_6___default().Children.map(t,(function(t){if(r.some((function(r){return k(t,r)})))return t})))||void 0===n?void 0:n.filter((function(t){return!lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default()(t)}));return lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default()(t)||(null==o?void 0:o.length)===react__WEBPACK_IMPORTED_MODULE_6___default().Children.count(t)||O.error("Children must be one of: ".concat(r.join(", ")),"Received children: ",t),o},C=function C(t,r){Object.defineProperty(t,"target",{writable:!1,value:r});var e=!1,n=!1;return f(f({nativeEvent:t},t),{},{currentTarget:t.currentTarget,target:t.target,bubbles:t.bubbles,cancelable:t.cancelable,defaultPrevented:t.defaultPrevented,eventPhase:t.eventPhase,isTrusted:t.isTrusted,timeStamp:t.timeStamp,type:t.type,preventDefault:function preventDefault(){e=!0,t.preventDefault()},isDefaultPrevented:function isDefaultPrevented(){return e},stopPropagation:function stopPropagation(){n=!0,t.stopPropagation()},isPropagationStopped:function isPropagationStopped(){return n},persist:function persist(){}})};var _={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight",Backspace:"Backspace",BracketLeft:"[",Delete:"Delete",Enter:"Enter",Escape:"Escape",Space:" ",Tab:"Tab"},R={Page:"page",Step:"step",Location:"location",Date:"date",Time:"time",True:"true",Unset:"false"};function B(t){throw Error("Received unhandled value: ".concat(t))}},"./packages/popover/src/Popover/Popover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Popover,V:()=>contentClassName});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("webpack/sharing/consume/default/react/react"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_transition_group__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/react-transition-group/esm/Transition.js"),prop_types__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__),_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/emotion/dist/esm/index.js"),_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/hooks/dist/esm/index.js"),_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/leafygreen-provider/dist/esm/index.js"),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/lib/dist/esm/index.js"),_leafygreen_ui_portal__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/portal/dist/esm/index.js"),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/tokens/dist/esm/index.js"),_Popover_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/popover/src/Popover.types.ts"),_utils_positionUtils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/popover/src/utils/positionUtils.ts"),_excluded=["active","spacing","align","justify","adjustOnMutation","children","className","popoverZIndex","refEl","usePortal","portalClassName","portalContainer","portalRef","scrollContainer","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],_excluded2=["transform"],rootPopoverStyle=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__.Z)(["\n  position: absolute;\n  transition: transform ","ms ease-in-out,\n    opacity ","ms ease-in-out;\n  opacity: 0;\n"])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_6__.nV.default,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_6__.nV.default),mutationOptions={attributes:!0,characterData:!0,childList:!0,subtree:!0},contentClassName=(0,_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_4__.hy)("popover-content"),Popover=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref,fwdRef){var _portalContainer,_ref$active=_ref.active,active=void 0!==_ref$active&&_ref$active,_ref$spacing=_ref.spacing,spacing=void 0===_ref$spacing?10:_ref$spacing,_ref$align=_ref.align,align=void 0===_ref$align?_Popover_types__WEBPACK_IMPORTED_MODULE_7__.x.Bottom:_ref$align,_ref$justify=_ref.justify,justify=void 0===_ref$justify?_Popover_types__WEBPACK_IMPORTED_MODULE_7__.W.Start:_ref$justify,_ref$adjustOnMutation=_ref.adjustOnMutation,adjustOnMutation=void 0!==_ref$adjustOnMutation&&_ref$adjustOnMutation,children=_ref.children,className=_ref.className,popoverZIndex=_ref.popoverZIndex,refEl=_ref.refEl,_ref$usePortal=_ref.usePortal,usePortal=void 0===_ref$usePortal||_ref$usePortal,portalClassName=_ref.portalClassName,portalContainerProp=_ref.portalContainer,portalRef=_ref.portalRef,scrollContainerProp=_ref.scrollContainer,onEnter=_ref.onEnter,onEntering=_ref.onEntering,_onEntered=_ref.onEntered,onExit=_ref.onExit,onExiting=_ref.onExiting,_onExited=_ref.onExited,rest=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_10__.Z)(_ref,_excluded),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),_useState2=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11__.Z)(_useState,2),placeholderNode=_useState2[0],setPlaceholderNode=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),_useState4=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11__.Z)(_useState3,2),contentNode=_useState4[0],setContentNode=_useState4[1],_useState5=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),_useState6=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11__.Z)(_useState5,2),forceUpdateCounter=_useState6[0],setForceUpdateCounter=_useState6[1],setIsPopoverOpen=(0,_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_3__.lp)().setIsPopoverOpen,_usePopoverPortalCont=(0,_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_3__.Wt)(),portalContainer=_usePopoverPortalCont.portalContainer,scrollContainer=_usePopoverPortalCont.scrollContainer;portalContainer=portalContainerProp||portalContainer,scrollContainer=scrollContainerProp||scrollContainer,usePortal&&scrollContainer&&(scrollContainer.contains(portalContainer)||_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_4__.X3.warn("To ensure correct positioning make sure that the portalContainer element is inside of the scrollContainer"));var contentNodeRef=react__WEBPACK_IMPORTED_MODULE_0___default().useRef(contentNode);contentNodeRef.current=contentNode;var referenceElement=null;if(refEl&&refEl.current)referenceElement=refEl.current;else if(placeholderNode){var parent=placeholderNode.parentNode;parent&&parent instanceof HTMLElement&&(referenceElement=parent)}var viewportSize=(0,_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.nP)(),observeMutations=adjustOnMutation&&active,lastTimeRefElMutated=(0,_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.Iy)(referenceElement,mutationOptions,Date.now,observeMutations),lastTimeContentElMutated=(0,_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.Iy)(null==contentNode?void 0:contentNode.parentNode,mutationOptions,Date.now,observeMutations),referenceElViewportPos=(0,_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.Uv)((0,_utils_positionUtils__WEBPACK_IMPORTED_MODULE_8__.CB)(referenceElement,scrollContainer,!0)),contentElViewportPos=(0,_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.Uv)((0,_utils_positionUtils__WEBPACK_IMPORTED_MODULE_8__.CB)(null==contentNode?void 0:contentNode.parentNode,scrollContainer)),referenceElDocumentPos=(0,_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.Uv)((0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(0,_utils_positionUtils__WEBPACK_IMPORTED_MODULE_8__.n4)(referenceElement,scrollContainer,!0)}),[referenceElement,scrollContainer,viewportSize,lastTimeRefElMutated,active,align,justify,forceUpdateCounter])),contentElDocumentPos=(0,_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.Uv)((0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(0,_utils_positionUtils__WEBPACK_IMPORTED_MODULE_8__.n4)(contentNode)}),[null==contentNode?void 0:contentNode.parentNode,viewportSize,lastTimeContentElMutated,active,align,justify,forceUpdateCounter])),prevJustify=(0,_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.D9)(justify),prevAlign=(0,_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.D9)(align),layoutMightHaveChanged=prevJustify!==justify&&(justify===_Popover_types__WEBPACK_IMPORTED_MODULE_7__.W.Fit||prevJustify===_Popover_types__WEBPACK_IMPORTED_MODULE_7__.W.Fit)||prevAlign!==align&&justify===_Popover_types__WEBPACK_IMPORTED_MODULE_7__.W.Fit;(0,_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.LI)((function(){layoutMightHaveChanged&&setForceUpdateCounter((function(n){return n+1}))}),[layoutMightHaveChanged]);var _useState7=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),_useState8=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11__.Z)(_useState7,2),shouldRender=_useState8[0],setShouldRender=_useState8[1];if((0,_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.LI)((function(){return setShouldRender(!0)}),[]),!shouldRender)return null;var renderedChildren,_calculatePosition=(0,_utils_positionUtils__WEBPACK_IMPORTED_MODULE_8__.kl)({useRelativePositioning:!usePortal,spacing,align,justify,referenceElViewportPos,referenceElDocumentPos,contentElViewportPos,contentElDocumentPos,scrollContainer}),windowSafeAlign=_calculatePosition.align,windowSafeJustify=_calculatePosition.justify,_calculatePosition$po=_calculatePosition.positionCSS,transform=_calculatePosition$po.transform,positionCSS=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_10__.Z)(_calculatePosition$po,_excluded2),activeStyle=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject2||(_templateObject2=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__.Z)(["\n      opacity: 1;\n      position: ",";\n      pointer-events: initial;\n    "])),usePortal?"":"absolute"),Root=usePortal?_leafygreen_ui_portal__WEBPACK_IMPORTED_MODULE_5__.Z:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,portalProps={className:portalContainer?void 0:portalClassName,container:null!==(_portalContainer=portalContainer)&&void 0!==_portalContainer?_portalContainer:void 0,portalRef},rootProps=usePortal?portalProps:{};return renderedChildren=null==children?null:"function"==typeof children?children({align:windowSafeAlign,justify:windowSafeJustify,referenceElPos:referenceElDocumentPos}):children,react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_12__.ZP,{nodeRef:contentNodeRef,in:active,timeout:_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_6__.nV.default,mountOnEnter:!0,unmountOnExit:!0,appear:!0,onEntering,onEnter,onEntered:function onEntered(){setIsPopoverOpen(!0);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];null==_onEntered||_onEntered.apply(void 0,args)},onExiting,onExit,onExited:function onExited(){setIsPopoverOpen(!1);for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];null==_onExited||_onExited.apply(void 0,args)}},(function(state){var _cx;return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{ref:setPlaceholderNode,className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject3||(_templateObject3=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__.Z)(["\n                display: none;\n              "])))}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Root,rootProps,react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_13__.Z)({},rest,{ref:fwdRef,className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.cx)(rootPopoverStyle,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(positionCSS),(_cx={},(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14__.Z)(_cx,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)({transform}),"entering"===state||"exiting"===state),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14__.Z)(_cx,activeStyle,"entered"===state),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14__.Z)(_cx,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject4||(_templateObject4=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__.Z)(["\n                      z-index: ",";\n                    "])),popoverZIndex),"number"==typeof popoverZIndex),_cx),className,(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14__.Z)({},(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject5||(_templateObject5=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__.Z)(["\n                      transition-delay: 0ms;\n                    "]))),"exiting"===state))}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{ref:setContentNode,className:contentClassName},renderedChildren))))}))}));Popover.displayName="Popover",Popover.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_15___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_15___default().node,prop_types__WEBPACK_IMPORTED_MODULE_15___default().func]),active:prop_types__WEBPACK_IMPORTED_MODULE_15___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_15___default().string,align:prop_types__WEBPACK_IMPORTED_MODULE_15___default().oneOf(Object.values(_Popover_types__WEBPACK_IMPORTED_MODULE_7__.x)),justify:prop_types__WEBPACK_IMPORTED_MODULE_15___default().oneOf(Object.values(_Popover_types__WEBPACK_IMPORTED_MODULE_7__.W)),refEl:prop_types__WEBPACK_IMPORTED_MODULE_15___default().shape({current:"undefined"!=typeof window?prop_types__WEBPACK_IMPORTED_MODULE_15___default().instanceOf(Element):prop_types__WEBPACK_IMPORTED_MODULE_15___default().any}),usePortal:prop_types__WEBPACK_IMPORTED_MODULE_15___default().bool,portalClassName:prop_types__WEBPACK_IMPORTED_MODULE_15___default().string,spacing:prop_types__WEBPACK_IMPORTED_MODULE_15___default().number,adjustOnMutation:prop_types__WEBPACK_IMPORTED_MODULE_15___default().bool}},"./packages/popover/src/Popover/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>_Popover__WEBPACK_IMPORTED_MODULE_0__.J,V:()=>_Popover__WEBPACK_IMPORTED_MODULE_0__.V});var _Popover__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/popover/src/Popover/Popover.tsx")},"./packages/popover/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Align:()=>_Popover_types__WEBPACK_IMPORTED_MODULE_1__.x,Justify:()=>_Popover_types__WEBPACK_IMPORTED_MODULE_1__.W,Popover:()=>_Popover__WEBPACK_IMPORTED_MODULE_0__.J,TestUtils:()=>TestUtils,contentClassName:()=>_Popover__WEBPACK_IMPORTED_MODULE_0__.V,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Popover__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/popover/src/Popover/index.ts"),_Popover_testutils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/popover/src/Popover.testutils.tsx"),_Popover_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/popover/src/Popover.types.ts"),TestUtils={getAlign:_Popover_testutils__WEBPACK_IMPORTED_MODULE_2__.v,getJustify:_Popover_testutils__WEBPACK_IMPORTED_MODULE_2__.E};const __WEBPACK_DEFAULT_EXPORT__=_Popover__WEBPACK_IMPORTED_MODULE_0__.J},"./packages/tokens/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$_:()=>p,$e:()=>i,$u:()=>L,AV:()=>o,FP:()=>u,Vl:()=>I,W0:()=>B,Y2:()=>T,Z9:()=>l,ZM:()=>u,kN:()=>x,m$:()=>E,nV:()=>z,vC:()=>w,yL:()=>W});var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/lib/dist/esm/index.js"),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/palette/dist/esm/index.js"),o={Mobile:320,Tablet:768,Desktop:1024,XLDesktop:1440};function t(e,r,a){return(r=function(e){var r=function(e,r){if("object"!=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__.Z)(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var o=a.call(e,"string");if("object"!=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__.Z)(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}var l={Background:"background",Border:"border",Icon:"icon",Text:"text"},i={Disabled:"disabled",Placeholder:"placeholder",Primary:"primary",Secondary:"secondary",InversePrimary:"inversePrimary",InverseSecondary:"inverseSecondary",Info:"info",Warning:"warning",Error:"error",Success:"success",Link:"link"},u={Default:"default",Hover:"hover",Focus:"focus"},s=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.black,c=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.blue,d=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.gray,g=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.green,n=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.red,f=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.white,h=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.yellow,v={background:t(t(t(t(t(t(t(t({},i.Primary,t(t(t({},u.Default,s),u.Hover,d.dark2),u.Focus,c.dark3)),i.Secondary,t(t(t({},u.Default,d.dark4),u.Hover,d.dark2),u.Focus,c.dark3)),i.InversePrimary,t(t(t({},u.Default,d.light2),u.Hover,d.light3),u.Focus,c.light2)),i.Info,t(t(t({},u.Default,c.dark3),u.Hover,c.dark3),u.Focus,c.dark3)),i.Warning,t(t(t({},u.Default,h.dark3),u.Hover,h.dark3),u.Focus,h.dark3)),i.Success,t(t(t({},u.Default,g.dark3),u.Hover,g.dark3),u.Focus,g.dark3)),i.Error,t(t(t({},u.Default,n.dark3),u.Hover,n.dark3),u.Focus,n.dark3)),i.Disabled,t(t(t({},u.Default,d.dark3),u.Hover,d.dark3),u.Focus,d.dark3)),border:t(t(t(t(t({},i.Primary,t(t(t({},u.Default,d.base),u.Hover,d.base),u.Focus,c.light1)),i.Secondary,t(t(t({},u.Default,d.dark2),u.Hover,d.dark2),u.Focus,c.light1)),i.Success,t(t(t({},u.Default,g.dark1),u.Hover,g.dark1),u.Focus,c.light1)),i.Error,t(t(t({},u.Default,n.light1),u.Hover,n.light1),u.Focus,c.light1)),i.Disabled,t(t(t({},u.Default,d.dark2),u.Hover,d.dark2),u.Focus,d.dark2)),icon:t(t(t(t(t(t(t(t({},i.Primary,t(t(t({},u.Default,d.light1),u.Hover,d.light3),u.Focus,c.light3)),i.Secondary,t(t(t({},u.Default,d.base),u.Hover,d.light3),u.Focus,c.light3)),i.InversePrimary,t(t(t({},u.Default,f),u.Hover,s),u.Focus,c.dark2)),i.Info,t(t(t({},u.Default,c.light1),u.Hover,c.light1),u.Focus,c.light1)),i.Warning,t(t(t({},u.Default,h.base),u.Hover,h.base),u.Focus,h.base)),i.Success,t(t(t({},u.Default,g.base),u.Hover,g.base),u.Focus,g.base)),i.Error,t(t(t({},u.Default,n.light1),u.Hover,n.light1),u.Focus,n.light1)),i.Disabled,t(t(t({},u.Default,d.dark1),u.Hover,d.dark1),u.Focus,d.dark1)),text:t(t(t(t(t(t(t(t({},i.Primary,t(t(t({},u.Default,d.light2),u.Hover,d.light2),u.Focus,c.light3)),i.Placeholder,t(t(t({},u.Default,d.dark1),u.Hover,d.dark1),u.Focus,d.dark1)),i.Secondary,t(t(t({},u.Default,d.light1),u.Hover,d.light2),u.Focus,c.light3)),i.InversePrimary,t(t(t({},u.Default,s),u.Hover,s),u.Focus,c.dark2)),i.InverseSecondary,t(t(t({},u.Default,d.dark2),u.Hover,s),u.Focus,c.dark2)),i.Error,t(t(t({},u.Default,n.light1),u.Hover,n.light1),u.Focus,n.light1)),i.Disabled,t(t(t({},u.Default,d.dark1),u.Hover,d.dark1),u.Focus,d.dark1)),i.Link,t(t(t({},u.Default,c.light1),u.Hover,c.light1),u.Focus,c.light1))},k=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.black,D=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.blue,b=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.gray,H=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.green,F=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.red,y=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.white,m=_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.yellow,S={background:t(t(t(t(t(t(t(t({},i.Primary,t(t(t({},u.Default,y),u.Hover,b.light2),u.Focus,D.light3)),i.Secondary,t(t(t({},u.Default,b.light3),u.Hover,b.light2),u.Focus,D.light3)),i.InversePrimary,t(t(t({},u.Default,k),u.Hover,b.dark3),u.Focus,D.dark2)),i.Info,t(t(t({},u.Default,D.light3),u.Hover,D.light3),u.Focus,D.light3)),i.Warning,t(t(t({},u.Default,m.light3),u.Hover,m.light3),u.Focus,m.light3)),i.Success,t(t(t({},u.Default,H.light3),u.Hover,H.light3),u.Focus,H.light3)),i.Error,t(t(t({},u.Default,F.light3),u.Hover,F.light3),u.Focus,F.light3)),i.Disabled,t(t(t({},u.Default,b.light2),u.Hover,b.light2),u.Focus,b.light2)),border:t(t(t(t(t({},i.Primary,t(t(t({},u.Default,b.base),u.Hover,b.base),u.Focus,D.light1)),i.Secondary,t(t(t({},u.Default,b.light2),u.Hover,b.light2),u.Focus,D.light1)),i.Success,t(t(t({},u.Default,H.dark1),u.Hover,H.dark1),u.Focus,D.light1)),i.Error,t(t(t({},u.Default,F.base),u.Hover,F.base),u.Focus,D.light1)),i.Disabled,t(t(t({},u.Default,b.light1),u.Hover,b.light1),u.Focus,b.light1)),icon:t(t(t(t(t(t(t(t({},i.Primary,t(t(t({},u.Default,b.dark1),u.Hover,k),u.Focus,D.dark1)),i.Secondary,t(t(t({},u.Default,b.base),u.Hover,k),u.Focus,D.dark1)),i.InversePrimary,t(t(t({},u.Default,y),u.Hover,y),u.Focus,D.light2)),i.Info,t(t(t({},u.Default,D.base),u.Hover,D.base),u.Focus,D.base)),i.Warning,t(t(t({},u.Default,m.dark2),u.Hover,m.dark2),u.Focus,m.dark2)),i.Success,t(t(t({},u.Default,H.dark1),u.Hover,H.dark1),u.Focus,H.dark1)),i.Error,t(t(t({},u.Default,F.base),u.Hover,F.base),u.Focus,F.base)),i.Disabled,t(t(t({},u.Default,b.base),u.Hover,b.base),u.Focus,b.base)),text:t(t(t(t(t(t(t(t({},i.Primary,t(t(t({},u.Default,k),u.Hover,k),u.Focus,D.dark1)),i.Secondary,t(t(t({},u.Default,b.dark1),u.Hover,k),u.Focus,D.dark1)),i.InversePrimary,t(t(t({},u.Default,y),u.Hover,y),u.Focus,D.light2)),i.InverseSecondary,t(t(t({},u.Default,b.light1),u.Hover,y),u.Focus,D.light2)),i.Error,t(t(t({},u.Default,F.base),u.Hover,F.base),u.Focus,F.base)),i.Disabled,t(t(t({},u.Default,b.base),u.Hover,b.base),u.Focus,b.base)),i.Placeholder,t(t(t({},u.Default,b.base),u.Hover,b.base),u.Focus,b.base)),i.Link,t(t(t({},u.Default,D.base),u.Hover,D.base),u.Focus,D.base))},p=t(t({},_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_0__.Q2.Dark,v),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_0__.Q2.Light,S),P_Dark="dark",P_Light="light",x=t(t({},P_Light,{default:"0 0 0 2px ".concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.white,", 0 0 0 4px ").concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.blue.light1),input:"0 0 0 3px ".concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.blue.light1)}),P_Dark,{default:"0 0 0 2px ".concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.black,", 0 0 0 4px ").concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.blue.light1),input:"0 0 0 3px ".concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.blue.light1)}),I={default:"'Euclid Circular A', 'Helvetica Neue', Helvetica, Arial, sans-serif",serif:"'MongoDB Value Serif', 'Times New Roman', serif",code:"'Source Code Pro', Menlo, monospace"},w={regular:400,medium:500,bold:700},E=t(t({},P_Light,{gray:"0 0 0 3px ".concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.gray.light2),green:"0 0 0 3px ".concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.green.light2),red:"0 0 0 3px ".concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.red.light2)}),P_Dark,{gray:"0 0 0 3px ".concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.gray.dark2),green:"0 0 0 3px ".concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.green.dark3),red:"0 0 0 3px ".concat(_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_1__.D.yellow.dark3)}),L={XSmall:"xsmall",Small:"small",Default:"default",Large:"large"},B={0:0,25:1,50:2,100:4,150:6,200:8,300:12,400:16,500:20,600:24,800:32,900:36,1e3:40,1200:48,1400:56,1600:64,1800:72,1:4,2:8,3:16,4:24,5:32,6:64,7:88},z={faster:100,default:150,slower:300,slowest:500},T={Body1:13,Body2:16},W={body1:{fontSize:T.Body1,lineHeight:20},body2:{fontSize:T.Body2,lineHeight:28},code1:{fontSize:13,lineHeight:20},code2:{fontSize:15,lineHeight:24},disclaimer:{fontSize:12,lineHeight:20},large:{fontSize:18,lineHeight:24}}}}]);