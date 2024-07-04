(self.webpackChunkleafygreen_ui=self.webpackChunkleafygreen_ui||[]).push([[3466],{"./packages/confirmation-modal/src/ConfirmationModal/ConfirmationModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>ConfirmationModal});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_contentVariantStyles,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_warningIconThemeStyl,esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),index_js_=__webpack_require__("webpack/sharing/consume/default/react/react"),index_js_default=__webpack_require__.n(index_js_),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),esm=__webpack_require__("./packages/button/dist/esm/index.js"),dist_esm=__webpack_require__("./packages/emotion/dist/esm/index.js"),Warning=__webpack_require__("./packages/icon/dist/Warning.js"),leafygreen_provider_dist_esm=__webpack_require__("./packages/leafygreen-provider/dist/esm/index.js"),modal_dist_esm=__webpack_require__("./packages/modal/dist/esm/index.js"),palette_dist_esm=__webpack_require__("./packages/palette/dist/esm/index.js"),text_input_dist_esm=__webpack_require__("./packages/text-input/dist/esm/index.js"),typography_dist_esm=__webpack_require__("./packages/typography/dist/esm/index.js"),LGID_ROOT="lg-confirmation_modal",LGIDS_CONFIRMATION_MODAL={root:LGID_ROOT,input:"".concat(LGID_ROOT,"-confirmation_input"),title:"".concat(LGID_ROOT,"-title"),confirm:"".concat(LGID_ROOT,"-footer-confirm_button"),cancel:"".concat(LGID_ROOT,"-footer-cancel_button")},ConfirmationModal_types=__webpack_require__("./packages/confirmation-modal/src/ConfirmationModal/ConfirmationModal.types.ts"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),lib_dist_esm=__webpack_require__("./packages/lib/dist/esm/index.js"),tokens_dist_esm=__webpack_require__("./packages/tokens/dist/esm/index.js"),titleStyle=(0,dist_esm.css)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  line-height: 32px;\n  margin-bottom: 10px;\n"]))),baseModalStyle=(0,dist_esm.css)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  width: 600px;\n  padding: initial;\n  letter-spacing: 0;\n"]))),contentStyle=(0,dist_esm.css)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  font-size: ","px;\n  line-height: ","px;\n"])),tokens_dist_esm.yL.body1.fontSize,tokens_dist_esm.yL.body1.lineHeight),contentDarkModeStyles=(0,dist_esm.css)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  color: ",";\n"])),palette_dist_esm.D.gray.light1),contentVariantStyles=(_contentVariantStyles={},(0,defineProperty.Z)(_contentVariantStyles,ConfirmationModal_types.$.Default,(0,dist_esm.css)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n    padding: 40px 36px 0px;\n  "])))),(0,defineProperty.Z)(_contentVariantStyles,ConfirmationModal_types.$.Danger,(0,dist_esm.css)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n    padding: 40px 36px 0px 78px;\n  "])))),_contentVariantStyles),textEntryInputStyle=(0,dist_esm.css)(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n  width: 300px;\n  margin-top: 14px;\n\n  label {\n    margin-bottom: 3px;\n  }\n"]))),buttonStyle=(0,dist_esm.css)(_templateObject8||(_templateObject8=(0,taggedTemplateLiteral.Z)(["\n  margin: 0 2px;\n\n  &:first-of-type {\n    margin: 0 0 0 5px;\n  }\n\n  &:last-of-type {\n    margin: 0 5px 0 0;\n  }\n"]))),warningIconStyle=(0,dist_esm.css)(_templateObject9||(_templateObject9=(0,taggedTemplateLiteral.Z)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  left: 36px;\n  top: 40px;\n\n  svg {\n    margin-top: -3px;\n  }\n"]))),warningIconThemeStyle=(_warningIconThemeStyl={},(0,defineProperty.Z)(_warningIconThemeStyl,lib_dist_esm.Q2.Light,(0,dist_esm.css)(_templateObject10||(_templateObject10=(0,taggedTemplateLiteral.Z)(["\n    background: ",";\n  "])),palette_dist_esm.D.red.light3)),(0,defineProperty.Z)(_warningIconThemeStyl,lib_dist_esm.Q2.Dark,(0,dist_esm.css)(_templateObject11||(_templateObject11=(0,taggedTemplateLiteral.Z)(["\n    background: ",";\n  "])),palette_dist_esm.D.red.dark2)),_warningIconThemeStyl),_excluded=["children","title","requiredInputText","buttonText","submitDisabled","variant","onConfirm","onCancel","darkMode","confirmButtonProps","cancelButtonProps"],ConfirmationModal=index_js_default().forwardRef((function(_ref,forwardRef){var _ref2,children=_ref.children,title=_ref.title,requiredInputText=_ref.requiredInputText,buttonText=_ref.buttonText,submitDisabled=_ref.submitDisabled,_ref$variant=_ref.variant,variant=void 0===_ref$variant?ConfirmationModal_types.$.Default:_ref$variant,onConfirm=_ref.onConfirm,onCancel=_ref.onCancel,darkModeProp=_ref.darkMode,_ref$confirmButtonPro=_ref.confirmButtonProps,confirmButtonProps=void 0===_ref$confirmButtonPro?{}:_ref$confirmButtonPro,_ref$cancelButtonProp=_ref.cancelButtonProps,cancelButtonProps=void 0===_ref$cancelButtonProp?{}:_ref$cancelButtonProp,modalProps=(0,objectWithoutProperties.Z)(_ref,_excluded),_useState=(0,index_js_.useState)(!requiredInputText),_useState2=(0,slicedToArray.Z)(_useState,2),confirmEnabled=_useState2[0],setConfirmEnabled=_useState2[1],_useDarkMode=(0,leafygreen_provider_dist_esm.vs)(darkModeProp),theme=_useDarkMode.theme,darkMode=_useDarkMode.darkMode,textEntryConfirmation=(0,index_js_.useMemo)((function(){setConfirmEnabled(!requiredInputText);var textEntryConfirmation=null;if(requiredInputText){textEntryConfirmation=index_js_default().createElement(text_input_dist_esm.ZP,{label:'Type "'.concat(requiredInputText,'" to confirm your action'),className:textEntryInputStyle,onChange:function onInputChange(event){setConfirmEnabled(event.target.value===requiredInputText)},autoFocus:!0,darkMode,"data-testid":LGIDS_CONFIRMATION_MODAL.input})}return textEntryConfirmation}),[requiredInputText,darkMode]),_onConfirm=onConfirm||(null==confirmButtonProps?void 0:confirmButtonProps.onClick),_onCancel=onCancel||(null==cancelButtonProps?void 0:cancelButtonProps.onClick),resetConfirmButton=function resetConfirmButton(){requiredInputText&&setConfirmEnabled(!1)},handleCancel=function handleCancel(){null==_onCancel||_onCancel(),resetConfirmButton()},isConfirmDisabled=null!==(_ref2=null!=submitDisabled?submitDisabled:null==confirmButtonProps?void 0:confirmButtonProps.disabled)&&void 0!==_ref2&&_ref2;return index_js_default().createElement(modal_dist_esm.ZP,(0,esm_extends.Z)({},modalProps,{contentClassName:baseModalStyle,setOpen:handleCancel,darkMode,ref:forwardRef}),index_js_default().createElement("div",{className:(0,dist_esm.cx)(contentStyle,contentVariantStyles[variant],(0,defineProperty.Z)({},contentDarkModeStyles,darkMode))},variant===ConfirmationModal_types.$.Danger&&index_js_default().createElement("div",{className:(0,dist_esm.cx)(warningIconStyle,warningIconThemeStyle[theme])},index_js_default().createElement(Warning.Z,{fill:darkMode?palette_dist_esm.D.red.light3:palette_dist_esm.D.red.base,role:"presentation"})),index_js_default().createElement(typography_dist_esm.H3,{as:"h1",className:(0,dist_esm.cx)(titleStyle),"data-testid":LGIDS_CONFIRMATION_MODAL.title},title),children,textEntryConfirmation),index_js_default().createElement(modal_dist_esm.$_,null,index_js_default().createElement(esm.ZP,(0,esm_extends.Z)({},confirmButtonProps,{"data-testid":LGIDS_CONFIRMATION_MODAL.confirm,disabled:!confirmEnabled||isConfirmDisabled,className:(0,dist_esm.cx)(buttonStyle,null==confirmButtonProps?void 0:confirmButtonProps.className),variant,onClick:function handleConfirm(){null==_onConfirm||_onConfirm(),resetConfirmButton()}}),buttonText||(null==confirmButtonProps?void 0:confirmButtonProps.children)||"Confirm"),index_js_default().createElement(esm.ZP,(0,esm_extends.Z)({},cancelButtonProps,{onClick:handleCancel,className:(0,dist_esm.cx)(buttonStyle,null==cancelButtonProps?void 0:cancelButtonProps.className),"data-testid":LGIDS_CONFIRMATION_MODAL.cancel}),"Cancel")))}));ConfirmationModal.displayName="ConfirmationModal",ConfirmationModal.propTypes={title:prop_types_default().string.isRequired,open:prop_types_default().bool,onConfirm:prop_types_default().func,onCancel:prop_types_default().func,children:prop_types_default().node,className:prop_types_default().string,buttonText:prop_types_default().string,variant:prop_types_default().oneOf(Object.values(ConfirmationModal_types.$)),requiredInputText:prop_types_default().string,darkMode:prop_types_default().bool,confirmButtonProps:prop_types_default().objectOf(prop_types_default().any),cancelButtonProps:prop_types_default().objectOf(prop_types_default().any)}},"./packages/confirmation-modal/src/ConfirmationModal/ConfirmationModal.types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Variant});var Variant={Default:"primary",Danger:"danger"}},"./packages/icon/dist/Warning.js":(module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var e,r,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");module=__webpack_require__.hmd(module),e=void 0,r=function(e,r,t){var a=function i(e){if(e&&"object"==(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.Z)(e)&&"default"in e)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function get(){return e[t]}})}})),r.default=e,Object.freeze(r)}(e),l=function n(e){return e&&"object"==(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.Z)(e)&&"default"in e?e:{default:e}}(r);function o(e,r,t){return(r=function(e){var r=function(e,r){if("object"!=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.Z)(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.Z)(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.Z)(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},u.apply(null,arguments)}function f(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var c,s,b={small:14,default:16,large:20,xlarge:24},p=["className","size","title","aria-label","aria-labelledby","fill","role"],d=function d(e){var r=e.className,n=e.size,i=void 0===n?16:n,l=e.title,d=e["aria-label"],y=e["aria-labelledby"],g=e.fill,m=e.role,v=void 0===m?"img":m,O=function(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)>=0)continue;t[n]=e[n]}return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||{}.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}(e,p),j=t.css(c||(c=f(["\n        color: ",";\n      "])),g),h=t.css(s||(s=f(["\n        flex-shrink: 0;\n      "]))),w=function(e,r,t){var n,i=t["aria-label"],a=t["aria-labelledby"],l=t.title;switch(e){case"img":return i||a||l?o(o(o({},"aria-labelledby",a),"aria-label",i),"title",l):{"aria-label":(n="Warning","".concat(n.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(v,0,o(o({title:l},"aria-label",d),"aria-labelledby",y));return a.createElement("svg",u({className:t.cx(o({},j,null!=g),h,r),height:"number"==typeof i?i:b[i],width:"number"==typeof i?i:b[i],role:v},w,O,{viewBox:"0 0 16 16"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.8639 1.51357C8.49039 0.828811 7.50961 0.828811 7.1361 1.51357L1.12218 12.5388C0.763263 13.1968 1.23814 14 1.98608 14H14.0139C14.7619 14 15.2367 13.1968 14.8778 12.5388L8.8639 1.51357ZM7 5C7 4.44772 7.44772 4 8 4C8.55228 4 9 4.44772 9 5V9C9 9.55228 8.55228 10 8 10C7.44772 10 7 9.55228 7 9V5ZM9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z",fill:"currentColor"}))};return d.displayName="Warning",d.isGlyph=!0,d.propTypes={fill:l.default.string,size:l.default.oneOfType([l.default.number,l.default.string]),className:l.default.string},d},"object"==("undefined"==typeof exports?"undefined":(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.Z)(exports))?module.exports=r(__webpack_require__("webpack/sharing/consume/default/react/react"),__webpack_require__("./node_modules/prop-types/index.js"),__webpack_require__("./packages/emotion/dist/esm/index.js")):"function"==typeof define&&__webpack_require__.amdO?define(["react","prop-types","@leafygreen-ui/emotion"],r):((e="undefined"!=typeof globalThis?globalThis:e||self).Warning=e.Warning||{},e.Warning.js=r(e.React,e.PropTypes,e["@leafygreen-ui/emotion"]))},"./packages/portal/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>l});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("webpack/sharing/consume/default/react/react"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("webpack/sharing/consume/default/react-dom/react-dom"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/hooks/dist/esm/index.js");function o(r,t){t>r.length&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}function a(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(e=e.call(r)).next,0===t);else for(;!(u=(n=a.call(e)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(r){c=!0,o=r}finally{try{if(!u&&null!=e.return&&(i=e.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(r,t)||function(r,t){if(r){if("string"==typeof r)return o(r,t);var e={}.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(r,t):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){var o=a(react__WEBPACK_IMPORTED_MODULE_0___default().useState(),2),i=o[0],l=o[1];return(0,_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.LI)((function(){if(t)return e&&(e.current=t),void l(t);var r=document.createElement("div");return document.body.appendChild(r),e&&(e.current=r),l(r),function(){r.remove()}}),[t,e]),i}function l(r){var e=r.children,o=r.className,a=r.container,l=r.portalRef,u=i(null!=a?a:void 0,l);return(0,_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.LI)((function(){u&&!a&&(u.className=null!=o?o:"")}),[a,u,o]),u?(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(e,u):null}l.displayName="Portal",l.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,container:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,prop_types__WEBPACK_IMPORTED_MODULE_3___default().object])}},"./packages/text-input/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{ZP:()=>C});var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("webpack/sharing/consume/default/react/react"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__),_leafygreen_ui_form_field__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/form-field/dist/esm/index.js"),_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/hooks/dist/esm/index.js"),_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/leafygreen-provider/dist/esm/index.js"),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/lib/dist/esm/index.js"),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/tokens/dist/esm/index.js"),_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/typography/dist/esm/index.js"),_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/emotion/dist/esm/index.js");__webpack_require__("./tools/test-harnesses/dist/esm/index.js");function y(e,r){r>e.length&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function v(e,r,t){return(r=function(e){var r=function(e,r){if("object"!=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.Z)(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.Z)(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.Z)(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach((function(r){v(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function w(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o,i,l=[],s=!0,u=!1;try{if(o=(t=t.call(e)).next,0===r);else for(;!(s=(n=o.call(t)).done)&&(l.push(n.value),l.length!==r);s=!0);}catch(e){u=!0,a=e}finally{try{if(!s&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,r)||function(e,r){if(e){if("string"==typeof e)return y(e,r);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j,S,P,M="lg-text_input",x=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_7__.css)(j||(S=["\n  width: 100%;\n"],P||(P=S.slice(0)),j=Object.freeze(Object.defineProperties(S,{raw:{value:Object.freeze(P)}})))),E=_leafygreen_ui_form_field__WEBPACK_IMPORTED_MODULE_1__.nY,I_Text="text",z={XSmall:"xsmall",Small:"small",Default:"default",Large:"large"},k=(O(O({},_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_5__.Y2),{},{Large:18}),["label","description","onChange","onBlur","placeholder","errorMessage","successMessage","optional","disabled","state","type","id","readOnly","value","className","darkMode","sizeVariant","handleValidation","baseFontSize","data-lgid","aria-label","aria-labelledby","aria-invalid"]),C=react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef((function(t,n){var i=t.label,d=t.description,p=t.onChange,b=t.onBlur,g=t.placeholder,m=t.errorMessage,y=void 0===m?"This input needs your attention":m,v=t.successMessage,h=void 0===v?"Success":v,j=t.optional,S=void 0!==j&&j,P=t.disabled,T=void 0!==P&&P,C=t.state,N=void 0===C?E.None:C,D=t.type,V=void 0===D?I_Text:D,A=t.id,F=t.readOnly,L=t.value,B=t.className,W=t.darkMode,U=t.sizeVariant,q=void 0===U?z.Default:U,R=t.handleValidation,X=t.baseFontSize,$=t["data-lgid"],_=void 0===$?M:$,G=t["aria-label"],H=t["aria-labelledby"],J=t["aria-invalid"],K=function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.indexOf(n)>=0)continue;t[n]=e[n]}return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||{}.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(t,k),Q=(0,_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_3__.vs)(W).darkMode,Y=(0,_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.ts)(n,null),Z="string"==typeof L,ee=w((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),2),re=ee[0],te=ee[1],ne=Z?L:re,ae=(0,_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_6__.hN)(X),oe=(0,_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_2__.V$)(R);"search"===V||i||H||console.error("For screen-reader accessibility, label or aria-labelledby must be provided to TextInput."),"search"===V&&(_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_4__.X3.warn('We recommend using the Leafygreen SearchInput for `type="search"` inputs.'),G||console.error("For screen-reader accessibility, aria-label must be provided to TextInput.")),"password"===V&&_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_4__.X3.warn('We recommend using the Leafygreen PasswordInput for `type="password"` inputs.'),"number"===V&&_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_4__.X3.warn('We recommend using the Leafygreen NumberInput for `type="number"` inputs.');var ie=O({baseFontSize:ae,className:B,darkMode:Q,"data-lgid":_,description:d,disabled:T,errorMessage:y,successMessage:h,id:A,label:i,optional:S,size:q,state:N,readOnly:F},{"aria-invalid":J,"aria-label":G,"aria-labelledby":H}),le=O({autoComplete:T?"off":(null==K?void 0:K.autoComplete)||"on",className:x,onBlur:function onBlur(e){b&&b(e),oe.onBlur(e)},onChange:function onChange(e){p&&p(e),Z||te(e.target.value),oe.onChange(e)},placeholder:g,ref:Y,required:!S,type:V,value:ne},K);return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_leafygreen_ui_form_field__WEBPACK_IMPORTED_MODULE_1__.Wi,ie,react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_leafygreen_ui_form_field__WEBPACK_IMPORTED_MODULE_1__.IR,{onClick:function onClick(){var e;T||null==Y||null===(e=Y.current)||void 0===e||e.focus()}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",le)))}));C.displayName="TextInput",C.propTypes={id:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,label:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,"aria-labelledby":prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,description:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,optional:prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool,disabled:prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool,onChange:prop_types__WEBPACK_IMPORTED_MODULE_10___default().func,placeholder:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,errorMessage:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,successMessage:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,state:prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf(Object.values(E)),value:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,sizeVariant:prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf(Object.values(z)),baseFontSize:prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf(Object.values(_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_5__.Y2)),darkMode:prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool}},"?4f7e":()=>{}}]);