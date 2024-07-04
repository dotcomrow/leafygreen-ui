"use strict";(self.webpackChunkleafygreen_ui=self.webpackChunkleafygreen_ui||[]).push([[2508],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=(0,esm_typeof.Z)(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=(0,esm_typeof.Z)(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==(0,esm_typeof.Z)(i)?i:String(i)}function _defineProperty(obj,key,value){return(key=toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}__webpack_require__.d(__webpack_exports__,{Z:()=>_taggedTemplateLiteral})},"./packages/input-option/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InputOption:()=>InputOption,InputOptionContent:()=>InputOptionContent,descriptionClassName:()=>descriptionClassName,inputOptionClassName:()=>inputOptionClassName,inputOptionContentClassName:()=>inputOptionContentClassName,leftGlyphClassName:()=>leftGlyphClassName,titleClassName:()=>titleClassName});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,InputOption_style_templateObject,InputOption_style_templateObject2,InputOption_style_templateObject3,InputOption_style_templateObject4,InputOption_style_templateObject5,InputOption_style_templateObject6,esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),index_js_=__webpack_require__("webpack/sharing/consume/default/react/react"),index_js_default=__webpack_require__.n(index_js_),esm=__webpack_require__("./packages/emotion/dist/esm/index.js"),dist_esm=__webpack_require__("./packages/leafygreen-provider/dist/esm/index.js"),polymorphic_dist_esm=__webpack_require__("./packages/polymorphic/dist/esm/index.js"),InputOptionContext=(0,index_js_.createContext)({}),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),lib_dist_esm=__webpack_require__("./packages/lib/dist/esm/index.js"),palette_dist_esm=__webpack_require__("./packages/palette/dist/esm/index.js"),tokens_dist_esm=__webpack_require__("./packages/tokens/dist/esm/index.js"),typography_dist_esm=__webpack_require__("./packages/typography/dist/esm/index.js"),inputOptionContentClassName=(0,lib_dist_esm.hy)("input_option-content"),titleClassName=(0,lib_dist_esm.hy)("input_option-title"),descriptionClassName=(0,lib_dist_esm.hy)("input_option-description"),leftGlyphClassName=(0,lib_dist_esm.hy)("input_option-left-glyph"),getContentWrapperStyles=function getContentWrapperStyles(_ref){var col1Name=_ref.hasLeftGlyph?"left-glyph":"text",col3Name=_ref.hasRightGlyph?"right-glyph":"text";return(0,esm.css)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    display: grid;\n    grid-template-columns: ","px 1fr ","px;\n    grid-template-areas: '"," text ","';\n    gap: ","px;\n    align-items: center;\n    width: 100%;\n  "])),tokens_dist_esm.W0[400],tokens_dist_esm.W0[400],col1Name,col3Name,tokens_dist_esm.W0[200])},getLeftGlyphStyles=function getLeftGlyphStyles(_ref2){var theme=_ref2.theme,disabled=_ref2.disabled,highlighted=_ref2.highlighted,variant=disabled?tokens_dist_esm.$e.Disabled:tokens_dist_esm.$e.Primary,interactionState=highlighted?tokens_dist_esm.ZM.Focus:tokens_dist_esm.ZM.Default;return(0,esm.css)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    grid-area: left-glyph;\n    display: flex;\n    align-items: center;\n    // Hover styles set by parent InputOption\n    color: ",";\n    transition: color ","ms ease-in-out;\n  "])),tokens_dist_esm.$_[theme].icon[variant][interactionState],tokens_dist_esm.nV.default)},getRightGlyphStyles=function getRightGlyphStyles(_ref3){var theme=_ref3.theme,variant=_ref3.disabled?tokens_dist_esm.$e.Disabled:tokens_dist_esm.$e.Primary;return(0,esm.css)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n    grid-area: right-glyph;\n    display: flex;\n    align-items: center;\n    color: ",";\n    transition: color ","ms ease-in-out;\n  "])),tokens_dist_esm.$_[theme].icon[variant].default,tokens_dist_esm.nV.default)},textContainerStyles=(0,esm.css)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  grid-area: text;\n  line-height: ","px;\n"])),tokens_dist_esm.W0[400]),getTitleStyles=function getTitleStyles(_ref4){var theme=_ref4.theme,highlighted=_ref4.highlighted,disabled=_ref4.disabled;return(0,esm.css)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  overflow-wrap: anywhere;\n  font-size: inherit;\n  line-height: inherit;\n  font-weight: normal;\n  transition: color ","ms ease-in-out;\n\n  ","\n"])),tokens_dist_esm.nV.default,highlighted&&!disabled&&(0,esm.css)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n    font-weight: bold;\n    color: ",";\n  "])),tokens_dist_esm.$_[theme].text.primary.focus))},getDescriptionStyles=function getDescriptionStyles(){return(0,esm.css)(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n    max-height: ","px;\n    overflow: hidden;\n    font-size: inherit;\n    line-height: inherit;\n    text-overflow: ellipsis;\n    transition: color ","ms ease-in-out;\n  "])),tokens_dist_esm.W0[1200],tokens_dist_esm.nV.default)},_excluded=["children","description","leftGlyph","rightGlyph","preserveIconSpace","className"],InputOptionContent=function InputOptionContent(_ref){var children=_ref.children,description=_ref.description,leftGlyph=_ref.leftGlyph,rightGlyph=_ref.rightGlyph,_ref$preserveIconSpac=_ref.preserveIconSpace,preserveIconSpace=void 0===_ref$preserveIconSpac||_ref$preserveIconSpac,className=_ref.className,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),_useInputOptionContex=function useInputOptionContext(){return(0,index_js_.useContext)(InputOptionContext)}(),disabled=_useInputOptionContex.disabled,highlighted=_useInputOptionContex.highlighted,darkMode=_useInputOptionContex.darkMode,theme=(0,dist_esm.vs)(darkMode).theme;return index_js_default().createElement("div",(0,esm_extends.Z)({className:(0,esm.cx)(inputOptionContentClassName,getContentWrapperStyles({hasLeftGlyph:!!leftGlyph||preserveIconSpace,hasRightGlyph:!!rightGlyph}),className)},rest),leftGlyph&&index_js_default().createElement("div",{className:(0,esm.cx)(leftGlyphClassName,getLeftGlyphStyles({theme,disabled,highlighted}))},leftGlyph),index_js_default().createElement("div",{className:textContainerStyles},index_js_default().createElement("div",{className:(0,esm.cx)(titleClassName,getTitleStyles({theme,highlighted,disabled}))},children),description&&index_js_default().createElement(typography_dist_esm.dk,{darkMode,disabled,className:(0,esm.cx)(descriptionClassName,getDescriptionStyles())},description)),rightGlyph&&index_js_default().createElement("div",{className:getRightGlyphStyles({theme,disabled})},rightGlyph))};InputOptionContent.displayName="InputOptionContent";var inputOptionClassName=(0,lib_dist_esm.hy)("input_option"),getInputOptionStyles=function getInputOptionStyles(_ref){var theme=_ref.theme,disabled=_ref.disabled,highlighted=_ref.highlighted,isInteractive=_ref.isInteractive,ixnState=highlighted?tokens_dist_esm.FP.Focus:tokens_dist_esm.FP.Default;return(0,esm.css)(InputOption_style_templateObject||(InputOption_style_templateObject=(0,taggedTemplateLiteral.Z)(["\n    position: relative;\n    list-style: none;\n    outline: none;\n    border: unset;\n    margin: 0;\n    text-align: left;\n    text-decoration: none;\n    cursor: pointer;\n\n    font-size: ","px;\n    line-height: ","px;\n    font-family: ",";\n    padding: ","px ","px;\n\n    transition: ","ms ease-in-out;\n    transition-property: background-color, color;\n\n    color: ",";\n    background-color: ",";\n\n    ","\n\n    /* Interactive states */\n    ","\n  "])),tokens_dist_esm.yL.body1.fontSize,tokens_dist_esm.yL.body1.lineHeight,tokens_dist_esm.Vl.default,tokens_dist_esm.W0[200],tokens_dist_esm.W0[300],tokens_dist_esm.nV.default,tokens_dist_esm.$_[theme].text.primary[ixnState],tokens_dist_esm.$_[theme].background.primary[ixnState],disabled&&(0,esm.css)(InputOption_style_templateObject2||(InputOption_style_templateObject2=(0,taggedTemplateLiteral.Z)(["\n      cursor: not-allowed;\n      color: ",";\n    "])),tokens_dist_esm.$_[theme].text.disabled[ixnState]),isInteractive&&!disabled&&(0,esm.css)(InputOption_style_templateObject3||(InputOption_style_templateObject3=(0,taggedTemplateLiteral.Z)(["\n      /* Hover */\n      &:hover {\n        outline: none;\n        color: ",";\n        background-color: ",";\n\n        ."," {\n          color: ",";\n        }\n\n        ."," {\n          color: ",";\n        }\n      }\n\n      /* Focus (majority of styling handled by the 'highlighted' prop) */\n      &:focus {\n        outline: none;\n        border: unset;\n      }\n    "])),tokens_dist_esm.$_[theme].text.primary.hover,tokens_dist_esm.$_[theme].background.primary.hover,titleClassName,tokens_dist_esm.$_[theme].text.primary.hover,leftGlyphClassName,tokens_dist_esm.$_[theme].icon.primary.hover))},wedgeWidth=tokens_dist_esm.W0[100],wedgePaddingY=tokens_dist_esm.W0[200],getInputOptionWedge=function getInputOptionWedge(_ref2){var disabled=_ref2.disabled,highlighted=_ref2.highlighted;return(0,esm.css)(InputOption_style_templateObject4||(InputOption_style_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  // Left wedge\n  &:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: ","px;\n    height: calc(100% - ","px);\n    min-height: ","px;\n    background-color: rgba(255, 255, 255, 0);\n    border-radius: 0 6px 6px 0;\n    transform: scale3d(0, 0.3, 0) translateY(-50%);\n    transform-origin: 0%; // 0% since we use translateY\n    transition: ","ms ease-in-out;\n    transition-property: transform, background-color;\n\n    ","\n\n    ","\n  }\n"])),wedgeWidth,2*wedgePaddingY,tokens_dist_esm.W0[600],tokens_dist_esm.nV.default,highlighted&&(0,esm.css)(InputOption_style_templateObject5||(InputOption_style_templateObject5=(0,taggedTemplateLiteral.Z)(["\n      transform: scaleY(1) translateY(-50%);\n      background-color: ",";\n    "])),palette_dist_esm.D.blue.base),disabled&&(0,esm.css)(InputOption_style_templateObject6||(InputOption_style_templateObject6=(0,taggedTemplateLiteral.Z)(["\n      content: unset;\n    "]))))},InputOption_excluded=["as","children","disabled","highlighted","checked","darkMode","showWedge","isInteractive","className"],InputOption=(0,polymorphic_dist_esm.HX)((function(_ref,ref){var _ref$as=_ref.as,as=void 0===_ref$as?"li":_ref$as,children=_ref.children,disabled=_ref.disabled,highlighted=_ref.highlighted,checked=_ref.checked,darkModeProp=_ref.darkMode,_ref$showWedge=_ref.showWedge,showWedge=void 0===_ref$showWedge||_ref$showWedge,_ref$isInteractive=_ref.isInteractive,isInteractive=void 0===_ref$isInteractive||_ref$isInteractive,className=_ref.className,rest=(0,objectWithoutProperties.Z)(_ref,InputOption_excluded),Component=(0,polymorphic_dist_esm.lS)(as).Component,_useDarkMode=(0,dist_esm.vs)(darkModeProp),theme=_useDarkMode.theme,darkMode=_useDarkMode.darkMode;return index_js_default().createElement(InputOptionContext.Provider,{value:{checked,darkMode,disabled,highlighted}},index_js_default().createElement(Component,(0,esm_extends.Z)({ref,role:"option","aria-selected":highlighted,"aria-checked":checked,"aria-disabled":disabled,tabIndex:-1,className:(0,esm.cx)(inputOptionClassName,getInputOptionStyles({theme,disabled,highlighted,isInteractive}),(0,defineProperty.Z)({},getInputOptionWedge({theme,disabled,highlighted,isInteractive}),showWedge),className)},rest),children))}));InputOption.displayName="InputOption"}}]);