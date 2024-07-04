"use strict";(self.webpackChunkleafygreen_ui=self.webpackChunkleafygreen_ui||[]).push([[5976],{"./packages/side-nav/src/SideNavItem/SideNavItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Generated:()=>Generated,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("webpack/sharing/consume/default/react/react"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/lib/dist/esm/index.js"),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/tokens/dist/esm/index.js"),_SideNav_SideNavContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/side-nav/src/SideNav/SideNavContext.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/SideNav/SideNavItem",component:__webpack_require__("./packages/side-nav/src/SideNavItem/SideNavItem.tsx").Z,parameters:{default:null,generate:{combineArgs:{darkMode:[!1,!0],active:[!1,!0],disabled:[!1,!0]},args:{children:"SideNav Item"},decorator:function decorator(Instance,ctx){return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideNav_SideNavContext__WEBPACK_IMPORTED_MODULE_3__.Z.Provider,{value:{width:200,baseFontSize:_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_2__.Y2.Body1,darkMode:null==ctx?void 0:ctx.args.darkMode,theme:null!=ctx&&ctx.args.darkMode?_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_1__.Q2.Dark:_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_1__.Q2.Light,collapsed:!1}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Instance,null))}}}};var Generated=function Generated(){return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,null)};Generated.parameters={...Generated.parameters,docs:{...Generated.parameters?.docs,source:{originalSource:"() => <></>",...Generated.parameters?.docs?.source}}};const __namedExportsOrder=["Generated"]},"./packages/box/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>l});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("webpack/sharing/consume/default/react/react"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},n.apply(null,arguments)}var t=["as"];function a(r,a){if(null!=r.as){var l=r.as,f=function(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(r.indexOf(t)>=0)continue;n[t]=e[t]}return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(r,t);return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(l,n({},f,{ref:a}))}return null!=r.href?react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",n({},r,{ref:a})):react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",n({},r,{ref:a}))}a.displayName="InlineBox";var l=react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(a);l.displayName="Box",l.propTypes={as:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().elementType,prop_types__WEBPACK_IMPORTED_MODULE_1___default().element,prop_types__WEBPACK_IMPORTED_MODULE_1___default().func]),href:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string}},"./packages/side-nav/src/SideNav/SideNav.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>typographyStyle,$P:()=>collapsedStateStyles,Cq:()=>outerContainerCollapsedStyle,L:()=>sideNavWidth,N:()=>outerContainerStyle,UI:()=>collapseDuration,UM:()=>navBaseStyles,cK:()=>getIndentLevelStyle,dE:()=>listStyles,fl:()=>sideNavClassName,gR:()=>hoverNavStyles,j9:()=>expandedStateStyles,l_:()=>listWrapperStyle,uF:()=>collapsedNavStyles,w5:()=>navThemeStyles,xB:()=>ulStyleOverrides,xM:()=>sideNavItemSidePadding,zl:()=>innerNavWrapperStyle});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_navThemeStyles,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15,_templateObject16,_templateObject17,_templateObject18,_typographyStyle,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),polished__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),_leafygreen_ui_a11y__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/a11y/dist/esm/index.js"),_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/emotion/dist/esm/index.js"),_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/lib/dist/esm/index.js"),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/palette/dist/esm/index.js"),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/tokens/dist/esm/index.js"),sideNavClassName=(0,_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_2__.hy)("side-nav"),sideNavItemSidePadding=16,sideNavWidth=184,collapseDuration=200,ulStyleOverrides=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n  margin-block-start: 0px;\n  margin-block-end: 0px;\n  padding-inline-start: 0px;\n  padding: 0;\n  list-style-type: none;\n"]))),getIndentLevelStyle=function getIndentLevelStyle(indentLevel,darkMode){return(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject2||(_templateObject2=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n    border-left: 3px solid\n      ",";\n    padding-left: ","px;\n  "])),darkMode?_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_3__.D.gray.dark2:_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_3__.D.gray.light1,8+8*indentLevel)},outerContainerStyle=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject3||(_templateObject3=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n  position: relative;\n  transition: width ","ms ease-in-out;\n\n  ","\n"])),collapseDuration,(0,_leafygreen_ui_a11y__WEBPACK_IMPORTED_MODULE_0__.nk)("\n    transition: none;\n  ")),outerContainerCollapsedStyle=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject4||(_templateObject4=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n  width: 48px;\n"]))),innerNavWrapperStyle=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject5||(_templateObject5=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n  /**\n   * Setting position: absolute; here so the nav wrapper can appear\n   * above the content in on the collapsed state. \n   */\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n"]))),navBaseStyles=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject6||(_templateObject6=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n  position: relative;\n  font-family: ",";\n\n  z-index: 0;\n  transition: ","ms ease-in-out;\n  transition-property: box-shadow, border-color, width;\n\n  ","\n"])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_4__.Vl.default,collapseDuration,(0,_leafygreen_ui_a11y__WEBPACK_IMPORTED_MODULE_0__.nk)("\n    transition-property: box-shadow, border-color;\n  ")),navThemeStyles=(_navThemeStyles={},(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__.Z)(_navThemeStyles,_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_2__.Q2.Light,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject7||(_templateObject7=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n    background-color: ",";\n  "])),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_3__.D.gray.light3)),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__.Z)(_navThemeStyles,_leafygreen_ui_lib__WEBPACK_IMPORTED_MODULE_2__.Q2.Dark,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject8||(_templateObject8=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n    background-color: ",";\n  "])),_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_3__.D.gray.dark4)),_navThemeStyles),hoverNavStyles=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject9||(_templateObject9=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n  box-shadow: 2px 0 4px ",";\n"])),(0,polished__WEBPACK_IMPORTED_MODULE_7__.DZ)(.9,_leafygreen_ui_palette__WEBPACK_IMPORTED_MODULE_3__.D.black)),collapsedNavStyles=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject10||(_templateObject10=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n  width: 48px;\n"]))),listWrapperStyle=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject11||(_templateObject11=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n  /**\n  * Setting position: absolute so the expanded and collapsed menus\n  * can be rendered in the same spot.\n  * We transition the opacity & transform to display one or the other.\n  */\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  overflow: hidden;\n  transition: ","ms ease-in-out;\n  transition-property: opacity, transform;\n\n  ","\n"])),collapseDuration,(0,_leafygreen_ui_a11y__WEBPACK_IMPORTED_MODULE_0__.nk)("\n    transition: opacity ".concat(collapseDuration,"ms ease-in-out;\n  "))),listStyles=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject12||(_templateObject12=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  padding-top: ","px;\n  padding-bottom: ","px;\n  overflow-x: hidden;\n  overflow-y: auto;\n"])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_4__.W0[3],_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_4__.W0[3]),expandedMenu_EnteredStyle=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject13||(_templateObject13=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n  transform: translate3d(0, ","px, 0);\n  opacity: 0;\n  pointer-events: none;\n"])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_4__.W0[2]),expandedMenu_ExitedStyle=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject14||(_templateObject14=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n  transform: translate3d(0, 0, 0);\n  opacity: 1;\n"]))),collapsedMenu_EnteredStyle=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject15||(_templateObject15=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n  transform: translate3d(0, 0, 0);\n  opacity: 1;\n"]))),collapsedMenu_ExitedStyle=(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject16||(_templateObject16=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n  transform: translate3d(0, -","px, 0);\n  opacity: 0;\n  pointer-events: none;\n"])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_4__.W0[2]),expandedStateStyles={entering:expandedMenu_EnteredStyle,entered:expandedMenu_EnteredStyle,exiting:expandedMenu_ExitedStyle,exited:expandedMenu_ExitedStyle},collapsedStateStyles={entering:collapsedMenu_EnteredStyle,entered:collapsedMenu_EnteredStyle,exiting:collapsedMenu_ExitedStyle,exited:collapsedMenu_ExitedStyle},typographyStyle=(_typographyStyle={},(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__.Z)(_typographyStyle,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_4__.Y2.Body1,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject17||(_templateObject17=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_4__.yL.body1.fontSize,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_4__.yL.body1.lineHeight)),(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__.Z)(_typographyStyle,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_4__.Y2.Body2,(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject18||(_templateObject18=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_4__.yL.body2.fontSize,_leafygreen_ui_tokens__WEBPACK_IMPORTED_MODULE_4__.yL.body2.lineHeight)),_typographyStyle)},"./packages/side-nav/src/SideNav/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kw:()=>SideNav_SideNav,cK:()=>SideNav_styles.cK,xM:()=>SideNav_styles.xM,$4:()=>SideNav_styles.$4,xB:()=>SideNav_styles.xB,ll:()=>SideNavContext.l});var _templateObject,_templateObject2,_templateObject3,esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),index_js_=__webpack_require__("webpack/sharing/consume/default/react/react"),index_js_default=__webpack_require__.n(index_js_),Transition=__webpack_require__("./node_modules/react-transition-group/esm/Transition.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),esm=__webpack_require__("./packages/a11y/dist/esm/index.js"),dist_esm=__webpack_require__("./packages/emotion/dist/esm/index.js"),hooks_dist_esm=__webpack_require__("./packages/hooks/dist/esm/index.js"),leafygreen_provider_dist_esm=__webpack_require__("./packages/leafygreen-provider/dist/esm/index.js"),lib_dist_esm=__webpack_require__("./packages/lib/dist/esm/index.js"),typography_dist_esm=__webpack_require__("./packages/typography/dist/esm/index.js"),CollapseToggle=__webpack_require__("./packages/side-nav/src/CollapseToggle/index.ts"),SideNav_styles=__webpack_require__("./packages/side-nav/src/SideNav/SideNav.styles.ts"),SideNavContext=__webpack_require__("./packages/side-nav/src/SideNav/SideNavContext.tsx"),_excluded=["className","children","id","baseFontSize","widthOverride","collapsed","setCollapsed","darkMode"],SideNav=(".".concat(SideNav_styles.fl),(0,index_js_.forwardRef)((function(_ref,forwardedRef){var className=_ref.className,children=_ref.children,idProp=_ref.id,baseFontSizeProp=_ref.baseFontSize,widthOverride=_ref.widthOverride,controlledCollapsed=_ref.collapsed,_ref$setCollapsed=_ref.setCollapsed,setControlledCollapsed=void 0===_ref$setCollapsed?function(){}:_ref$setCollapsed,darkModeProp=_ref.darkMode,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),SideNavProvider=SideNavContext.Z.Provider,_useState=(0,index_js_.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),uncontrolledCollapsed=_useState2[0],uncontrolledSetCollapsed=_useState2[1],baseFontSize=(0,typography_dist_esm.hN)(baseFontSizeProp),usingKeyboard=(0,leafygreen_provider_dist_esm.LB)().usingKeyboard,_useDarkMode=(0,leafygreen_provider_dist_esm.vs)(darkModeProp),darkMode=_useDarkMode.darkMode,theme=_useDarkMode.theme,transitionRef=(0,index_js_.useRef)(null),_useState3=(0,index_js_.useState)(!1),_useState4=(0,slicedToArray.Z)(_useState3,2),hover=_useState4[0],setHover=_useState4[1],_useState5=(0,index_js_.useState)(!1),_useState6=(0,slicedToArray.Z)(_useState5,2),focus=_useState6[0],setFocus=_useState6[1],navId=(0,hooks_dist_esm.ue)({prefix:"side-nav",id:idProp}),_useState7=(0,index_js_.useState)(null),_useState8=(0,slicedToArray.Z)(_useState7,2),portalContainer=_useState8[0],setPortalContainer=_useState8[1],width="number"==typeof widthOverride?widthOverride:SideNav_styles.L,collapsed="boolean"==typeof controlledCollapsed?controlledCollapsed:uncontrolledCollapsed,setCollapsed="boolean"==typeof controlledCollapsed?setControlledCollapsed:uncontrolledSetCollapsed,focusExpand=usingKeyboard&&focus;return(0,esm.Lk)(rest,"SideNav"),(0,hooks_dist_esm.OR)("keypress",(function(e){var _e$target,shouldToggle=["INPUT","TEXTAREA"].includes(null===(_e$target=e.target)||void 0===_e$target?void 0:_e$target.tagName);e.key!==lib_dist_esm.Pc.BracketLeft||shouldToggle||setCollapsed((function(curr){return!curr}))}),{options:{passive:!0}}),index_js_default().createElement(Transition.ZP,{in:collapsed&&!hover&&!focusExpand,timeout:SideNav_styles.UI,nodeRef:transitionRef},(function(state){var _cx2;return index_js_default().createElement(SideNavProvider,{value:{navId,collapsed,portalContainer,width,transitionState:state,baseFontSize,darkMode,theme}},index_js_default().createElement(leafygreen_provider_dist_esm.ZP,{darkMode},index_js_default().createElement("div",{"data-testid":"side-nav-container",className:(0,dist_esm.cx)(SideNav_styles.fl,SideNav_styles.N,(0,dist_esm.css)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n                    width: ","px;\n                  "])),width),(0,defineProperty.Z)({},SideNav_styles.Cq,collapsed),className),ref:forwardedRef},index_js_default().createElement("div",{className:SideNav_styles.zl,onMouseLeave:function onMouseLeave(){return setHover(!1)}},index_js_default().createElement("nav",(0,esm_extends.Z)({id:navId,className:(0,dist_esm.cx)(SideNav_styles.UM,SideNav_styles.w5[theme],(0,dist_esm.css)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n                        width: ","px;\n                      "])),width),(_cx2={},(0,defineProperty.Z)(_cx2,SideNav_styles.uF,["entering","entered"].includes(state)),(0,defineProperty.Z)(_cx2,SideNav_styles.gR,(hover||focusExpand)&&collapsed),_cx2)),onFocus:function onFocus(){return setFocus(!0)},onBlur:function onBlur(){return setFocus(!1)},onMouseEnter:function onMouseEnter(){return setHover(!0)}},rest),index_js_default().createElement("div",{className:(0,dist_esm.cx)(SideNav_styles.l_,SideNav_styles.j9[state])},index_js_default().createElement("ul",{className:(0,dist_esm.cx)(SideNav_styles.xB,SideNav_styles.dE,(0,dist_esm.css)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n                            width: ","px;\n                          "])),width))},children)),index_js_default().createElement("div",{className:(0,dist_esm.cx)(SideNav_styles.l_,SideNav_styles.$P[state])},index_js_default().createElement("ul",{"aria-hidden":!0,className:(0,dist_esm.cx)(SideNav_styles.xB,SideNav_styles.dE),ref:setPortalContainer}))),index_js_default().createElement(CollapseToggle.U,{collapsed:collapsed||!hover&&!focusExpand&&collapsed,onClick:function onClick(){setCollapsed((function(curr){return!curr})),setHover(!1)},hideTooltip:["entering","exiting"].includes(state)||void 0})))))}))})));SideNav.displayName="SideNav",SideNav.propTypes={className:prop_types_default().string,children:prop_types_default().node,id:prop_types_default().string,darkMode:prop_types_default().bool};const SideNav_SideNav=SideNav}}]);