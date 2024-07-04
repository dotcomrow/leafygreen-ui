"use strict";(self.webpackChunkleafygreen_ui=self.webpackChunkleafygreen_ui||[]).push([[69],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}__webpack_require__.d(__webpack_exports__,{Z:()=>_taggedTemplateLiteral})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./packages/copyable/src/Copyable/Copyable.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$z:()=>noButtonContainerStyle,C2:()=>buttonContainerStyle,DO:()=>buttonWrapperStyle,NI:()=>labelFontStyle,OL:()=>codeStyle,RN:()=>buttonWrapperStyleShadowTheme,Xh:()=>labelNoButtonStyle,Xt:()=>codeFontStyle,Y2:()=>codeStyleColor,bh:()=>noButtonContainerStyleMode,jn:()=>buttonStyle,oQ:()=>iconStyle,ur:()=>codeStyleNoButton,vw:()=>containerStyle,xg:()=>buttonWrapperStyleShadow});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_codeStyleColor,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_codeFontStyle,_labelFontStyle,_templateObject10,_templateObject11,_templateObject12,_noButtonContainerSty,_templateObject13,_templateObject14,_templateObject15,_templateObject16,_buttonWrapperStyleSh,_templateObject17,_templateObject18,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),polished__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/emotion/dist/esm/index.js"),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/lib/dist/esm/index.js"),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/palette/dist/esm/index.js"),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/tokens/dist/esm/index.js"),_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/typography/dist/esm/index.js"),_Copyable_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/copyable/src/Copyable/Copyable.types.ts"),containerStyle=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  position: relative;\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: 1fr auto;\n  grid-template-areas: 'code button';\n  height: 48px;\n  width: 400px;\n  margin: 2px 0;\n"]))),buttonContainerStyle=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject2||(_templateObject2=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  height: 36px;\n"]))),codeStyle=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject3||(_templateObject3=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  grid-area: code;\n  display: inline-flex;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  font-family: ",";\n  border: 1px solid;\n  border-right: unset;\n  border-radius: 6px 0 0 6px;\n  padding-left: 12px;\n  white-space: nowrap;\n  overflow: auto;\n"])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.Vl.code),codeStyleColor=(_codeStyleColor={},(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__.Z)(_codeStyleColor,_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_1__.Q2.Light,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject4||(_templateObject4=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n    color: ",";\n    background-color: ",";\n    border-color: ",";\n  "])),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.black,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.gray.light3,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.gray.light2)),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__.Z)(_codeStyleColor,_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_1__.Q2.Dark,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject5||(_templateObject5=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n    color: ",";\n    background-color: ",";\n    border-color: ",";\n  "])),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.gray.light2,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.black,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.gray.dark1)),_codeStyleColor),codeStyleNoButton=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject6||(_templateObject6=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  border: 0;\n"]))),labelNoButtonStyle=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject7||(_templateObject7=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  font-size: 18px;\n  line-height: 24px;\n"]))),codeFontStyle=(_codeFontStyle={},(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__.Z)(_codeFontStyle,_Copyable_types__WEBPACK_IMPORTED_MODULE_5__.$.Default,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject8||(_templateObject8=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.yL.code1.fontSize,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.yL.code1.lineHeight)),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__.Z)(_codeFontStyle,_Copyable_types__WEBPACK_IMPORTED_MODULE_5__.$.Large,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject9||(_templateObject9=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.yL.code2.fontSize,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.yL.code2.lineHeight)),_codeFontStyle),labelFontStyle=(_labelFontStyle={},(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__.Z)(_labelFontStyle,_Copyable_types__WEBPACK_IMPORTED_MODULE_5__.$.Default,_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_4__.EA[_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.Y2.Body1]),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__.Z)(_labelFontStyle,_Copyable_types__WEBPACK_IMPORTED_MODULE_5__.$.Large,_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_4__.EA[_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.Y2.Body2]),_labelFontStyle),noButtonContainerStyle=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject10||(_templateObject10=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  overflow: hidden;\n  border-radius: 12px;\n"]))),noButtonContainerStyleMode=(_noButtonContainerSty={},(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__.Z)(_noButtonContainerSty,_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_1__.Q2.Light,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject11||(_templateObject11=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n    border-radius: 6px;\n    border: 1px solid ",";\n  "])),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.gray.light2)),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__.Z)(_noButtonContainerSty,_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_1__.Q2.Dark,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject12||(_templateObject12=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n    border-radius: 6px;\n    border: 1px solid ",";\n  "])),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.gray.dark1)),_noButtonContainerSty),buttonWrapperStyle=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject13||(_templateObject13=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  grid-area: button;\n  position: relative;\n  display: inline-block;\n  height: 100%;\n"]))),buttonWrapperStyleShadow=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject14||(_templateObject14=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  &:before {\n    content: '';\n    display: block;\n    position: absolute;\n    height: calc(100% - 6px);\n    width: 16px;\n    left: 0px;\n    top: 3px;\n    border-radius: 100%;\n    transition: box-shadow ","ms ease-in-out;\n  }\n"])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_3__.nV.faster),buttonWrapperStyleShadowTheme=(_buttonWrapperStyleSh={},(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__.Z)(_buttonWrapperStyleSh,_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_1__.Q2.Light,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject15||(_templateObject15=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n    &:before {\n      box-shadow: 0 0 10px 0 ",";\n    }\n\n    &:hover:before {\n      box-shadow: 0 0 12px 0 ",";\n    }\n  "])),(0,polished__WEBPACK_IMPORTED_MODULE_8__.DZ)(.65,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.gray.dark1),(0,polished__WEBPACK_IMPORTED_MODULE_8__.DZ)(.6,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.gray.dark1))),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__.Z)(_buttonWrapperStyleSh,_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_1__.Q2.Dark,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject16||(_templateObject16=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n    &:before {\n      box-shadow: -10px 0 10px 0 ",";\n    }\n\n    &:hover:before {\n      box-shadow: -12px 0 10px 0 ",";\n    }\n  "])),(0,polished__WEBPACK_IMPORTED_MODULE_8__.DZ)(.4,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.black),(0,polished__WEBPACK_IMPORTED_MODULE_8__.DZ)(.4,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_2__.D.black))),_buttonWrapperStyleSh),buttonStyle=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject17||(_templateObject17=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  height: 100%;\n  border-radius: 0 6px 6px 0;\n\n  // The ripple element\n  & > :first-child {\n    border-radius: 0 6px 6px 0;\n  }\n"]))),iconStyle=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject18||(_templateObject18=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  padding-right: 6px;\n"])))},"./packages/copyable/src/Copyable/Copyable.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Copyable});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("webpack/sharing/consume/default/react/react"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),clipboard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clipboard/dist/clipboard.js"),clipboard__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__),_leafygreen_ui_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/button/dist/esm/index.js"),_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/emotion/dist/esm/index.js"),_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/hooks/dist/esm/index.js"),_leafygreen_ui_icon_dist_Copy__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/icon/dist/Copy.js"),_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/leafygreen-provider/dist/esm/index.js"),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/tokens/dist/esm/index.js"),_leafygreen_ui_tooltip__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/tooltip/dist/esm/index.js"),_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/typography/dist/esm/index.js"),_Copyable_styles__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./packages/copyable/src/Copyable/Copyable.styles.ts"),_Copyable_types__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./packages/copyable/src/Copyable/Copyable.types.ts");function Copyable(_ref){var _codeRef$current,_codeRef$current2,_cx3,_cx5,children=_ref.children,className=_ref.className,_ref$copyable=_ref.copyable,copyable=void 0===_ref$copyable||_ref$copyable,darkModeProp=_ref.darkMode,description=_ref.description,label=_ref.label,onCopy=_ref.onCopy,_ref$shouldTooltipUse=_ref.shouldTooltipUsePortal,shouldTooltipUsePortal=void 0===_ref$shouldTooltipUse||_ref$shouldTooltipUse,SizeProp=_ref.size,_useDarkMode=(0,_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_6__.vs)(darkModeProp),theme=_useDarkMode.theme,darkMode=_useDarkMode.darkMode,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),_useState2=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_12__.Z)(_useState,2),copied=_useState2[0],setCopied=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),_useState4=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_12__.Z)(_useState3,2),showCopyButton=_useState4[0],setShowCopyButton=_useState4[1],_useState5=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),_useState6=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_12__.Z)(_useState5,2),buttonRef=_useState6[0],setButtonRef=_useState6[1],codeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),portalContainer=(0,_leafygreen_ui_leafygreen_provider__WEBPACK_IMPORTED_MODULE_6__.Wt)().portalContainer,baseFontSize=(0,_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_9__.hN)(),size=SizeProp||(baseFontSize===_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_7__.Y2.Body1?_Copyable_types__WEBPACK_IMPORTED_MODULE_11__.$.Default:_Copyable_types__WEBPACK_IMPORTED_MODULE_11__.$.Large);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setShowCopyButton(copyable&&clipboard__WEBPACK_IMPORTED_MODULE_1___default().isSupported())}),[copyable]);var codeId=(0,_leafygreen_ui_hooks__WEBPACK_IMPORTED_MODULE_4__.ue)({prefix:"code"}),isOverflowed=!!codeRef.current&&(null===(_codeRef$current=codeRef.current)||void 0===_codeRef$current?void 0:_codeRef$current.scrollWidth)>(null===(_codeRef$current2=codeRef.current)||void 0===_codeRef$current2?void 0:_codeRef$current2.clientWidth);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(buttonRef){var clipboard=new(clipboard__WEBPACK_IMPORTED_MODULE_1___default())(buttonRef,{text:function text(){return children},container:portalContainer});if(clipboard.on("success",(function(event){null==onCopy||onCopy(event)})),clipboard.on("error",(function(event){null==onCopy||onCopy(event)})),copied){var timeoutId=setTimeout((function(){setCopied(!1)}),1500);return function(){return clearTimeout(timeoutId)}}return function(){return clipboard.destroy()}}}),[buttonRef,children,copied,portalContainer]),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,null,label&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_9__.__,{darkMode,htmlFor:codeId,className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_3__.cx)(_Copyable_styles__WEBPACK_IMPORTED_MODULE_10__.NI[size],(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__.Z)({},_Copyable_styles__WEBPACK_IMPORTED_MODULE_10__.Xh,!showCopyButton))},label),description&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_leafygreen_ui_typography__WEBPACK_IMPORTED_MODULE_9__.dk,{darkMode,className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_3__.cx)(_Copyable_styles__WEBPACK_IMPORTED_MODULE_10__.NI[size],(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__.Z)({},_Copyable_styles__WEBPACK_IMPORTED_MODULE_10__.Xh,!showCopyButton))},description),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_3__.cx)(_Copyable_styles__WEBPACK_IMPORTED_MODULE_10__.vw,(_cx3={},(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__.Z)(_cx3,_Copyable_styles__WEBPACK_IMPORTED_MODULE_10__.C2,showCopyButton),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__.Z)(_cx3,_Copyable_styles__WEBPACK_IMPORTED_MODULE_10__.bh[theme],!showCopyButton),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__.Z)(_cx3,_Copyable_styles__WEBPACK_IMPORTED_MODULE_10__.$z,!showCopyButton),_cx3),className)},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code",{id:codeId,ref:codeRef,className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_3__.cx)(_Copyable_styles__WEBPACK_IMPORTED_MODULE_10__.OL,_Copyable_styles__WEBPACK_IMPORTED_MODULE_10__.Y2[theme],[_Copyable_styles__WEBPACK_IMPORTED_MODULE_10__.Xt[size]],(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__.Z)({},_Copyable_styles__WEBPACK_IMPORTED_MODULE_10__.ur,!showCopyButton))},children),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_3__.cx)(_Copyable_styles__WEBPACK_IMPORTED_MODULE_10__.DO,(_cx5={},(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__.Z)(_cx5,_Copyable_styles__WEBPACK_IMPORTED_MODULE_10__.xg,isOverflowed),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__.Z)(_cx5,_Copyable_styles__WEBPACK_IMPORTED_MODULE_10__.RN[theme],isOverflowed),_cx5))},showCopyButton&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_leafygreen_ui_tooltip__WEBPACK_IMPORTED_MODULE_8__.ZP,{open:copied,darkMode,align:_leafygreen_ui_tooltip__WEBPACK_IMPORTED_MODULE_8__.xM.Top,justify:_leafygreen_ui_tooltip__WEBPACK_IMPORTED_MODULE_8__.WD.Middle,trigger:react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_leafygreen_ui_button__WEBPACK_IMPORTED_MODULE_2__.ZP,{ref:setButtonRef,variant:"default",darkMode,className:_Copyable_styles__WEBPACK_IMPORTED_MODULE_10__.jn,onClick:function onClick(){setCopied(!0)},leftGlyph:react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_leafygreen_ui_icon_dist_Copy__WEBPACK_IMPORTED_MODULE_5__.Z,{size:"large",className:_Copyable_styles__WEBPACK_IMPORTED_MODULE_10__.oQ})},"Copy"),triggerEvent:_leafygreen_ui_tooltip__WEBPACK_IMPORTED_MODULE_8__.jx.Click,usePortal:shouldTooltipUsePortal},"Copied!"))))}Copyable.displayName="Copyable",Copyable.propTypes={darkMode:prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool,size:prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOf(Object.values(_Copyable_types__WEBPACK_IMPORTED_MODULE_11__.$)),children:prop_types__WEBPACK_IMPORTED_MODULE_14___default().string.isRequired,label:prop_types__WEBPACK_IMPORTED_MODULE_14___default().string,description:prop_types__WEBPACK_IMPORTED_MODULE_14___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_14___default().string,copyable:prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool,shouldTooltipUsePortal:prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool}},"./packages/copyable/src/Copyable/Copyable.types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Size});var Size={Default:"default",Large:"large"}},"./packages/copyable/src/Copyable/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>_Copyable_types__WEBPACK_IMPORTED_MODULE_1__.$,Z:()=>_Copyable__WEBPACK_IMPORTED_MODULE_0__.Z});var _Copyable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/copyable/src/Copyable/Copyable.tsx"),_Copyable_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/copyable/src/Copyable/Copyable.types.ts")},"./packages/copyable/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Size:()=>_Copyable__WEBPACK_IMPORTED_MODULE_0__.$,default:()=>_Copyable__WEBPACK_IMPORTED_MODULE_0__.Z});var _Copyable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/copyable/src/Copyable/index.ts")}}]);