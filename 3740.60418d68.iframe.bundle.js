"use strict";(self.webpackChunkleafygreen_ui=self.webpackChunkleafygreen_ui||[]).push([[3740],{"./packages/combobox/src/types/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{RU:()=>ComboboxElement,C:()=>ComboboxSize,nP:()=>Overflow,po:()=>SearchState,ZM:()=>State,Cc:()=>dist_esm.Cc,ki:()=>getNullSelection});var esm=__webpack_require__("./packages/form-field/dist/esm/index.js"),ComboboxElement={Input:"Input",ClearButton:"ClearButton",FirstChip:"FirstChip",LastChip:"LastChip",MiddleChip:"MiddleChip",Combobox:"Combobox",Menu:"Menu"},ComboboxSize={XSmall:"xsmall",Small:"small",Default:"default",Large:"large"},Overflow={expandY:"expand-y",scrollX:"scroll-x",expandX:"expand-x"},State=esm.nY,SearchState={Unset:"unset",Error:"error",Loading:"loading"};function getNullSelection(multiselect){return multiselect?[]:null}var dist_esm=__webpack_require__("./packages/chip/dist/esm/index.js")},"./packages/inline-definition/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>v});var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("webpack/sharing/consume/default/react/react"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/emotion/dist/esm/index.js"),_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/leafygreen-provider/dist/esm/index.js"),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/lib/dist/esm/index.js"),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/palette/dist/esm/index.js"),_leafygreen_ui_tooltip__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/tooltip/dist/esm/index.js");function f(e,n,r){return(n=function(e){var n=function(e,n){if("object"!=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6__.Z)(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,"string");if("object"!=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6__.Z)(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6__.Z)(n)?n:n+""}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},c.apply(null,arguments)}function u(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var s,d,p,m=["definition","children","className","tooltipClassName","darkMode"],y=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(s||(s=u(["\n  border-radius: 2px;\n  text-decoration: underline dotted 2px;\n  text-underline-offset: 0.125em;\n\n  &:hover {\n    a > * {\n      // Remove the Link underline styles\n      &::after {\n        height: 0;\n      }\n    }\n  }\n\n  &:focus,\n  &:focus-visible {\n    outline-color: ",";\n    outline-offset: 3px;\n    outline-style: solid;\n    outline-width: 2px;\n  }\n"])),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_4__.D.blue.light1),b=f(f({},_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_3__.Q2.Light,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(d||(d=u(["\n    text-decoration-color: ",";\n\n    &:hover,\n    &:focus,\n    &:focus-visible {\n      text-decoration-color: ",";\n    }\n  "])),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_4__.D.black,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_4__.D.black)),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_3__.Q2.Dark,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(p||(p=u(["\n    text-decoration-color: ",";\n\n    &:hover,\n    &:focus,\n    &:focus-visible {\n      text-decoration-color: ",";\n    }\n  "])),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_4__.D.gray.light2,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_4__.D.gray.light2));function v(n){var r=n.definition,o=n.children,l=n.className,f=n.tooltipClassName,u=n.darkMode,s=function(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(n.indexOf(t)>=0)continue;r[t]=e[t]}return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(n,m),d=(0,_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_2__.vs)(u),p=d.theme,v=d.darkMode;return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_leafygreen_ui_tooltip__WEBPACK_IMPORTED_MODULE_5__.ZP,c({justify:"middle",spacing:9,className:f,darkMode:v},s,{trigger:react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{tabIndex:0,className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.cx)(y,b[p],l)},o)}),r)}v.displayName="InlineDefinition",v.propTypes={}},"./packages/tooltip/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{WD:()=>_leafygreen_ui_popover__WEBPACK_IMPORTED_MODULE_6__.WD,ZP:()=>pe,jx:()=>ae,xM:()=>le});var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("webpack/sharing/consume/default/react/react"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),lodash_debounce__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/debounce.js"),lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__),_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/emotion/dist/esm/index.js"),_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/hooks/dist/esm/index.js"),_leafygreen_ui_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/icon/dist/esm/index.js"),_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/leafygreen-provider/dist/esm/index.js"),_leafygreen_ui_popover__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/popover/dist/esm/index.js"),_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/typography/dist/esm/index.js"),polished__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/lib/dist/esm/index.js"),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/palette/dist/esm/index.js"),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./packages/tokens/dist/esm/index.js"),lodash_clamp__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/lodash/clamp.js"),lodash_clamp__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(lodash_clamp__WEBPACK_IMPORTED_MODULE_11__);function M(e,t){t>e.length&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function S(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_12__.Z)(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_12__.Z)(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_12__.Z)(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F.apply(null,arguments)}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],c=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t);else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function z(t){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",F({width:26,height:8,fill:"#001E2B",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 8"},t),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M27 0H-1v1h.699a10 10 0 017.26 3.123l1.685 1.78a6 6 0 008.712 0l1.686-1.78A10 10 0 0126.302 1H27V0z"}))}var L,B,D,H,U,X,Y,Z,G,V,q,J,K,$=8,_=26,Q=16,W=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_2__.css)(L||(L=A(["\n  margin: unset;\n  font-family: ",";\n  color: ",";\n  font-weight: ",";\n  width: 100%;\n  overflow-wrap: anywhere;\n"])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_10__.Vl.default,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_9__.D.gray.light1,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_10__.vC.regular),ee=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_2__.css)(B||(B=A(["\n  display: flex;\n  align-items: center;\n  border-radius: ","px;\n  padding: 12px ","px;\n  box-shadow: 0px 2px 4px -1px ",";\n  cursor: default;\n  width: fit-content;\n  max-width: 256px;\n"])),Q,Q,(0,polished__WEBPACK_IMPORTED_MODULE_13__.DZ)(.85,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_9__.D.black)),te=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_2__.css)(D||(D=A(["\n  position: relative;\n"]))),ne=S(S({},_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_8__.Q2.Light,{tooltip:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_2__.css)(H||(H=A(["\n      background-color: ",";\n      color: ",";\n    "])),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_9__.D.black,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_9__.D.gray.light1),children:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_2__.css)(U||(U=A(["\n      color: inherit;\n    "]))),notchFill:_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_9__.D.black}),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_8__.Q2.Dark,{tooltip:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_2__.css)(X||(X=A(["\n      background-color: ",";\n      color: ",";\n    "])),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_9__.D.gray.light2,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_9__.D.black),children:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_2__.css)(Y||(Y=A(["\n      color: inherit;\n    "]))),notchFill:_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_9__.D.gray.light2}),re=_+2*Q,oe=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_2__.css)(Z||(Z=A(["\n  min-height: ","px;\n"])),re),ie=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_2__.css)(G||(G=A(["\n  transition-delay: ","ms;\n"])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_10__.nV.slowest),ae={Hover:"hover",Click:"click"},le={Top:_leafygreen_ui_popover__WEBPACK_IMPORTED_MODULE_6__.xM.Top,Bottom:_leafygreen_ui_popover__WEBPACK_IMPORTED_MODULE_6__.xM.Bottom,Left:_leafygreen_ui_popover__WEBPACK_IMPORTED_MODULE_6__.xM.Left,Right:_leafygreen_ui_popover__WEBPACK_IMPORTED_MODULE_6__.xM.Right},ce=["initialOpen","open","setOpen","darkMode","baseFontSize","triggerEvent","enabled","align","justify","spacing","usePortal","onClose","id","shouldClose","portalClassName","portalContainer","portalRef","scrollContainer","popoverZIndex","refEl","className","children","trigger"],se=function se(e){e.stopPropagation()};function pe(e){var c,b=e.initialOpen,O=void 0!==b&&b,j=e.open,E=e.setOpen,k=e.darkMode,C=e.baseFontSize,P=e.triggerEvent,M=void 0===P?ae.Hover:P,T=e.enabled,L=void 0===T||T,B=e.align,D=void 0===B?"top":B,H=e.justify,U=void 0===H?"start":H,X=e.spacing,Y=void 0===X?12:X,Z=e.usePortal,G=void 0===Z||Z,re=e.onClose,pe=void 0===re?function(){}:re,fe=e.id,ue=e.shouldClose,de=e.portalClassName,he=e.portalContainer,ge=e.portalRef,me=e.scrollContainer,ye=e.popoverZIndex,be=e.refEl,ve=e.className,xe=e.children,we=e.trigger,Oe=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,ce),je="boolean"==typeof j,Ee=R((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(O),2),ke=Ee[0],Ce=Ee[1],Pe=(0,_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_7__.hN)(C),Ne=je?j:ke,Me=je&&E?E:Ce,Se=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),Fe=null!=fe?fe:null===(c=Se.current)||void 0===c?void 0:c.id,Te=(0,_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.ue)({prefix:"tooltip",id:Fe}),Ie=(0,_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_5__.vs)(k),Re=Ie.darkMode,Ae=Ie.theme;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){we&&(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(we)&&(0,_leafygreen_ui_icon__WEBPACK_IMPORTED_MODULE_4__.fx)(we)&&console.warn("Using a LeafyGreenUI Icon or Glyph component as a trigger will not render a Tooltip, as these components do not render their children. To use, please wrap your trigger element in another HTML tag.")}),[we]);var ze=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){("function"!=typeof ue||ue())&&(pe(),Me(!1))}),[Me,ue,pe]),Le=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(e,t){return e===ae.Hover?{onMouseEnter:lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()((function(e){n("onMouseEnter",e)}),35),onMouseLeave:lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()((function(e){n("onMouseLeave",e),ze()}),35),onFocus:function onFocus(e){n("onFocus",e),Me(!0)},onBlur:function onBlur(e){n("onBlur",e),ze()}}:{onClick:function onClick(e){e.target!==Se.current&&(n("onClick",e),Me((function(e){return!e})))}};function n(e,n){t&&t[e]&&"function"==typeof t[e]&&t[e](n)}}),[ze,Me,Se]);(0,_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.qX)(ze,{enabled:Ne}),(0,_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_3__.Sj)(ze,[Se],Ne&&"click"===M);var Be=I({refEl:be,popoverZIndex:ye},G?{spacing:Y,usePortal:G,portalClassName:de,portalContainer:he,portalRef:ge,scrollContainer:me}:{spacing:Y,usePortal:G}),De=L&&Ne,He=["left","right"].includes(D),Ue=react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_leafygreen_ui_popover__WEBPACK_IMPORTED_MODULE_6__.ZP,F({key:"tooltip",active:De,align:D,justify:U,adjustOnMutation:!0,onClick:se,className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_2__.cx)(ie,S({},(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_2__.css)(K||(K=A(["\n          // Try to fit all the content on one line (until it hits max-width)\n          // Overrides default behavior, which is to set width to size of the trigger.\n          // Except when justify is set to fit because the width should be the size of the trigger.\n          // Another exception is when justify is set to fit and the alignment is either left or right. In this case only the height should be the size of the trigger so we still want the width to fit the max content.\n          width: max-content;\n        "]))),U!==_leafygreen_ui_popover__WEBPACK_IMPORTED_MODULE_6__.WD.Fit||U===_leafygreen_ui_popover__WEBPACK_IMPORTED_MODULE_6__.WD.Fit&&(D===le.Left||D===le.Right)))},Be),(function(e){var n=function(e){var t=e.align,n=e.justify,r=e.triggerRect;if(!t||!n||!r)return{notchContainer:"",notch:"",tooltip:""};var o,i,a=_,l=-(a-$)/2,c={},p={},f=Q,u=2*f,d=0,h="";switch(t){case"top":case"bottom":switch(u=3*f,o=r.width/2-a/2,d=lodash_clamp__WEBPACK_IMPORTED_MODULE_11___default()(o,f,u),i=o<=f,c.left="0px",c.right="0px","top"===t?(p.top="calc(100% - 1px)",c.top="".concat(l,"px")):(p.bottom="calc(100% - 1px)",c.bottom="".concat(l,"px"),c.transform="rotate(180deg)"),n){case _leafygreen_ui_popover__WEBPACK_IMPORTED_MODULE_6__.WD.Start:p.left="".concat(d,"px"),i&&(h="translateX(-".concat(f-o,"px)"));break;case _leafygreen_ui_popover__WEBPACK_IMPORTED_MODULE_6__.WD.Middle:p.left="0px",p.right="0px";break;case _leafygreen_ui_popover__WEBPACK_IMPORTED_MODULE_6__.WD.Fit:p.left="".concat(d,"px"),i&&(h="translateX(-".concat(f-o,"px)"));break;case _leafygreen_ui_popover__WEBPACK_IMPORTED_MODULE_6__.WD.End:p.right="".concat(d,"px"),i&&(h="translateX(".concat(f-o,"px)"))}break;case"left":case"right":switch(u=2*f,o=r.height/2-a/2,d=lodash_clamp__WEBPACK_IMPORTED_MODULE_11___default()(o,f,u),i=o<=f,c.top="0px",c.bottom="0px","left"===t?(p.left="calc(100% - 1px)",c.left="".concat(l,"px"),c.transform="rotate(-90deg)"):(p.right="calc(100% - 1px)",c.right="".concat(l,"px"),c.transform="rotate(90deg)"),n){case _leafygreen_ui_popover__WEBPACK_IMPORTED_MODULE_6__.WD.Start:p.top="".concat(d,"px"),i&&(h="translateY(-".concat(f-o,"px)"));break;case _leafygreen_ui_popover__WEBPACK_IMPORTED_MODULE_6__.WD.Middle:p.top="0px",p.bottom="0px";break;case _leafygreen_ui_popover__WEBPACK_IMPORTED_MODULE_6__.WD.Fit:p.top="".concat(d,"px"),i&&(h="translateY(-".concat(f-o,"px)"));break;case _leafygreen_ui_popover__WEBPACK_IMPORTED_MODULE_6__.WD.End:p.bottom="".concat(d,"px"),i&&(h="translateY(".concat(f-o,"px)"))}}return{notchContainer:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_2__.css)(V||(V=A(["\n      position: absolute;\n      width: ","px;\n      height: ","px;\n      overflow: hidden;\n      margin: auto;\n      pointer-events: none;\n      ",";\n    "])),a,a,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_2__.css)(p)),notch:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_2__.css)(q||(q=A(["\n      ",";\n      position: absolute;\n      width: ","px;\n      height: ","px; // Keep it square. Rotating is simpler\n      margin: 0;\n    "])),(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_2__.css)(c),_,_),tooltip:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_2__.css)(J||(J=A(["\n      min-width: ","px;\n      transform: ",";\n    "])),2*d+a,h)}}({align:e.align,justify:e.justify,triggerRect:e.referenceElPos}),r=n.notchContainer,o=n.notch,i=n.tooltip;return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_5__.ZP,{darkMode:!Re},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",F({role:"tooltip"},Oe,{id:Te,className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_2__.cx)(ee,i,ne[Ae].tooltip,S({},oe,He),ve),ref:Se}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_2__.cx)(W,_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_7__.dF[Pe],ne[Ae].children)},xe),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:r},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z,{className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_2__.cx)(o),fill:ne[Ae].notchFill}))))}));return we?"function"==typeof we?we(I(I({},Le(M)),{},{className:te,"aria-describedby":De?Te:void 0,children:Ue})):react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(we,I(I({},Le(M,we.props)),{},{"aria-describedby":De?Te:void 0,children:react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,null,we.props.children,Ue),className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_2__.cx)(te,we.props.className)})):Ue}pe.displayName="Tooltip",pe.propTypes={}}}]);