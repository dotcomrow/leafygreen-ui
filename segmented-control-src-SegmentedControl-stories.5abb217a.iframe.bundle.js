"use strict";(self.webpackChunkleafygreen_ui=self.webpackChunkleafygreen_ui||[]).push([[1027],{"./packages/segmented-control/src/SegmentedControl.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Generated:()=>Generated,LiveExample:()=>LiveExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SegmentedControl_stories});var toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),index_js_=__webpack_require__("webpack/sharing/consume/default/react/react"),index_js_default=__webpack_require__.n(index_js_),esm=__webpack_require__("./tools/storybook-utils/dist/esm/index.js"),esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),isNull=__webpack_require__("./node_modules/lodash/isNull.js"),isNull_default=__webpack_require__.n(isNull),once=__webpack_require__("./node_modules/lodash/once.js"),once_default=__webpack_require__.n(once),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),dist_esm=__webpack_require__("./packages/emotion/dist/esm/index.js"),hooks_dist_esm=__webpack_require__("./packages/hooks/dist/esm/index.js"),leafygreen_provider_dist_esm=__webpack_require__("./packages/leafygreen-provider/dist/esm/index.js"),lib_dist_esm=__webpack_require__("./packages/lib/dist/esm/index.js"),typography_dist_esm=__webpack_require__("./packages/typography/dist/esm/index.js"),polished_esm=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),palette_dist_esm=__webpack_require__("./packages/palette/dist/esm/index.js"),tokens_dist_esm=__webpack_require__("./packages/tokens/dist/esm/index.js"),box_dist_esm=__webpack_require__("./packages/box/dist/esm/index.js"),icon_dist_esm=__webpack_require__("./packages/icon/dist/esm/index.js");function _(n,e){e>n.length&&(e=n.length);for(var r=0,o=Array(e);r<e;r++)o[r]=n[r];return o}function j(n,e,r){return(e=function(n){var e=function(n,e){if("object"!=(0,esm_typeof.Z)(n)||!n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var o=r.call(n,"string");if("object"!=(0,esm_typeof.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==(0,esm_typeof.Z)(e)?e:e+""}(e))in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function D(){return D=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)({}).hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},D.apply(null,arguments)}function A(n,e){if(null==n)return{};var r,o,t=function(n,e){if(null==n)return{};var r={};for(var o in n)if({}.hasOwnProperty.call(n,o)){if(e.indexOf(o)>=0)continue;r[o]=n[o]}return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||{}.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function I(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var o,t,a,i,l=[],c=!0,d=!1;try{if(a=(r=r.call(n)).next,0===e);else for(;!(c=(o=a.call(r)).done)&&(l.push(o.value),l.length!==e);c=!0);}catch(n){d=!0,t=n}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(d)throw t}}return l}}(n,e)||function(n,e){if(n){if("string"==typeof n)return _(n,e);var r={}.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var P,F,M,H,T,X,q,K,V,G,R,U,Q,W,B={XSmall:"xsmall",Default:"default",Large:"large"},J=index_js_default().createContext({size:B.Default,theme:lib_dist_esm.Q2.Light,name:"",followFocus:!0}),Y=(0,dist_esm.css)(P||(P=L(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  z-index: 0;\n  font-family: ",";\n"])),tokens_dist_esm.Vl.default),Z=(0,dist_esm.css)(F||(F=L(["\n  white-space: nowrap;\n"]))),nn=j(j({},lib_dist_esm.Q2.Light,(0,dist_esm.css)(M||(M=L(["\n    color: ",";\n  "])),palette_dist_esm.D.gray.dark1)),lib_dist_esm.Q2.Dark,(0,dist_esm.css)(H||(H=L(["\n    color: ",";\n  "])),palette_dist_esm.D.gray.light1)),en=j(j(j({},B.XSmall,(0,dist_esm.css)(T||(T=L(["\n    --segment-gap: 1px; // space between segments\n    --wrapper-padding: 0px;\n    --indicator-height: 100%;\n    --outer-radius: 6px;\n    --indicator-radius: 6px;\n  "])))),B.Default,(0,dist_esm.css)(X||(X=L(["\n    --segment-gap: 5px; // space between segments\n    --indicator-height: calc(100% - 2 * var(--wrapper-padding));\n    --wrapper-padding: 3px;\n    --outer-radius: 8px;\n    --indicator-radius: 6px;\n  "])))),B.Large,(0,dist_esm.css)(q||(q=L(["\n    --segment-gap: 5px; // space between segments\n    --indicator-height: calc(100% - 2 * var(--wrapper-padding));\n    --outer-radius: 8px;\n    --wrapper-padding: 3px;\n    --indicator-radius: 6px;\n  "])))),rn=j(j({},lib_dist_esm.Q2.Light,(0,dist_esm.css)(K||(K=L(["\n    --background-color: ",";\n    --inner-shadow: 0px 1px 2px "," inset;\n    --outer-shadow: 0px 1px 1px ",";\n    --hover-background-color: ",";\n    --indicator-background-color: ",";\n    --indicator-border-color: ",";\n  "])),palette_dist_esm.D.gray.light3,(0,polished_esm.DZ)(.7,palette_dist_esm.D.black),palette_dist_esm.D.gray.light2,palette_dist_esm.D.white,palette_dist_esm.D.black,palette_dist_esm.D.black)),lib_dist_esm.Q2.Dark,(0,dist_esm.css)(V||(V=L(["\n    --background-color: ",";\n    --border-color: rgba(255, 255, 255, 0);\n    --inner-shadow: 0px 0px 0px 1px "," inset;\n    --outer-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0);\n    --hover-background-color: ",";\n    --indicator-background-color: ",";\n    --indicator-border-color: ",";\n  "])),palette_dist_esm.D.gray.dark4,palette_dist_esm.D.gray.dark1,palette_dist_esm.D.gray.dark3,palette_dist_esm.D.gray.light2,palette_dist_esm.D.gray.light2)),on=function on(n){var e=n.theme,r=n.size;return(0,dist_esm.cx)(en[void 0===r?"default":r],rn[e],(0,dist_esm.css)(G||(G=L(["\n      position: relative;\n      display: grid;\n      grid-auto-flow: column;\n      grid-auto-columns: minmax(\n        0,\n        1fr\n      ); // allows the grid tracks to be as small as 0 but as large as 1fr, creating columns that will stay equal\n      gap: var(--segment-gap);\n      align-items: center;\n      padding: var(--wrapper-padding);\n      border-radius: var(--outer-radius);\n      background-color: var(--background-color);\n\n      &:focus {\n        outline: none;\n      }\n\n      // Frame shadow\n      &:after {\n        content: '';\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: inherit;\n        box-shadow: var(--inner-shadow), var(--outer-shadow);\n        z-index: 1;\n        pointer-events: none;\n      }\n    "]))))},tn=(0,dist_esm.css)(R||(R=L(["\n  position: absolute;\n  width: 100%;\n  height: var(--indicator-height);\n  z-index: 2;\n  border-radius: var(--indicator-radius);\n  background-color: var(--indicator-background-color);\n  transition: transform ","ms ease-in-out;\n"])),tokens_dist_esm.nV.default),an=(0,dist_esm.css)(U||(U=L(["\n  position: absolute;\n  height: var(--indicator-height);\n  width: 100%;\n  border-radius: var(--indicator-radius);\n  background-color: var(--hover-background-color);\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 100ms ease-in-out;\n"]))),ln=["children","name","size","darkMode","defaultValue","value","onChange","className","label","followFocus","aria-controls"],cn=(0,index_js_.forwardRef)((function(o,l){var d,s,m=o.children,b=o.name,w=o.size,k=void 0===w?B.Default:w,C=o.darkMode,z=o.defaultValue,S=o.value,O=o.onChange,E=o.className,N=o.label,_=o.followFocus,j=void 0===_||_,P=o["aria-controls"],F=A(o,ln),M=(0,leafygreen_provider_dist_esm.LB)().usingKeyboard,H=(0,index_js_.useRef)(null),T=I((0,index_js_.useState)(!1),2),X=T[0],q=T[1],K=(0,leafygreen_provider_dist_esm.vs)(C).theme,V=(0,hooks_dist_esm.DK)({prefix:"option"}),G=(0,hooks_dist_esm.ue)({prefix:"segmented-control",id:b}),R=(0,index_js_.useMemo)((function(){return null!=S}),[S]),U=I((0,index_js_.useState)(null!=z?z:S),2),en=U[0],rn=U[1],cn=I((0,index_js_.useState)(null!=z?z:S),2),dn=cn[0],sn=cn[1];d=function d(){var e=index_js_default().Children.toArray(m)[0];!en&&(0,lib_dist_esm.Kf)(e,"SegmentedControlOption")&&(rn(e.props.value),sn(e.props.value))},s=(0,index_js_.useRef)(!1),(0,index_js_.useEffect)((function(){s.current||(s.current=!0,d())}),[d]);var un=(0,index_js_.useCallback)((function(){var n;null!==(n=H.current)&&void 0!==n&&n.contains(document.activeElement)?q(!0):q(!1)}),[]);(0,index_js_.useEffect)((function(){return document.addEventListener("focusin",un),function(){document.removeEventListener("focusin",un)}}),[un]),(0,index_js_.useEffect)((function(){R&&rn(S)}),[S,R]);var pn=(0,index_js_.useCallback)((function(n){en!==n&&(rn(n),null==O||O(n))}),[en,O]),fn=(0,index_js_.useMemo)((function(){return index_js_default().Children.map(m,(function(e,r){var o,t;if(null==e)return e;if(!(0,lib_dist_esm.Kf)(e,"SegmentedControlOption"))return Cn("Error in Segmented Control: ".concat(e," is not a SegmentedControlOption")),e;P||e.props["aria-controls"]||zn("The property `aria-controls` is required on each Segmented Control option, or on the Segmented Control parent.");var a=null!==(o=e.props.id)&&void 0!==o?o:"".concat(G,"-").concat(r),i=R?e.props.value===S||!!e.props.checked:e.props.value===en,l=e.props.value===dn;return index_js_default().cloneElement(e,{_id:a,_checked:i,_focused:l,_index:r,"aria-controls":null!==(t=e.props["aria-controls"])&&void 0!==t?t:P,_onClick:pn,_onHover:function _onHover(n){mn(n?r:null)},ref:V("".concat(r)),isfocusInComponent:X})}))}),[m,R,S,en,dn,G,P,pn,V,X]),gn=(0,index_js_.useMemo)((function(){if(fn){var e,r=null===(e=index_js_default().Children.map(fn,(function(n){var e;return null==n||null===(e=n.props)||void 0===e?void 0:e._id})))||void 0===e?void 0:e.join(" ");return null!=r?r:""}return""}),[fn]),hn=I((0,index_js_.useState)(null),2),vn=hn[0],mn=hn[1],bn=(0,index_js_.useMemo)((function(){return index_js_default().Children.toArray(fn).findIndex((function(n){return R?n.props.value===S:n.props.value===en}))}),[S,R,fn,en]),xn=(0,index_js_.useMemo)((function(){return index_js_default().Children.toArray(fn).findIndex((function(n){return n.props.value===dn}))}),[fn,dn]),yn=function yn(e){var r=index_js_default().Children.toArray(fn).filter((function(n){return!n.props.disabled})),o=r.length,t=r[e=e>=o?e%o:e<0?o+e:e].props.value;sn(t)};(0,index_js_.useEffect)((function(){M||sn(en)}),[en,M]);var wn=(0,index_js_.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(isNull_default()(e))return(0,dist_esm.css)(Q||(Q=L(["\n          width: 0;\n        "])));var r=1/index_js_default().Children.count(fn)*100,o=100*e;return(0,dist_esm.css)(W||(W=L(["\n        opacity: 1;\n        width: calc(","% - 2 * var(--wrapper-padding));\n        transform: translateX(\n          calc(","% + "," * var(--wrapper-padding))\n        );\n      "])),r,o,2*e+1)}),[fn]),kn="small"===k?B.XSmall:k;return index_js_default().createElement(J.Provider,{value:{size:kn,theme:K,name:G,followFocus:j}},index_js_default().createElement("div",D({ref:H,className:(0,dist_esm.cx)(Y,E)},F),N&&index_js_default().createElement(typography_dist_esm.Lh,{className:(0,dist_esm.cx)(Z,nn[K])},N),index_js_default().createElement("div",{role:"tablist","aria-label":G,"aria-owns":gn,className:(0,dist_esm.cx)(on({theme:K,size:kn})),ref:l,onKeyDownCapture:function onKeyDownCapture(n){switch(n.stopPropagation(),n.key){case"ArrowRight":yn(xn+1);break;case"ArrowLeft":yn(xn-1)}}},fn,index_js_default().createElement("div",{className:(0,dist_esm.cx)(tn,wn(bn))}),index_js_default().createElement("div",{className:(0,dist_esm.cx)(an,wn(vn))}))))}));cn.displayName="SegmentedControl";var dn,sn,un,pn,fn,gn,hn,vn,mn,bn,xn,yn,wn,kn,Cn=once_default()(console.error),zn=once_default()(console.warn);cn.propTypes={darkMode:prop_types_default().bool,size:prop_types_default().oneOf(Object.values(B)),onChange:prop_types_default().func,defaultValue:prop_types_default().string,value:prop_types_default().string,label:prop_types_default().node,name:prop_types_default().string,followFocus:prop_types_default().bool,className:prop_types_default().string};var Sn=j(j({},lib_dist_esm.Q2.Light,(0,dist_esm.css)(dn||(dn=L(["\n    --base-text-color: ",";\n    --base-background-color: rgba(255, 255, 255, 0);\n    --base-shadow-color: rgba(255, 255, 255, 0);\n    // Hover\n    --hover-text-color: ",";\n    // Selected\n    --active-text-color: ",";\n    // Disabled\n    --disabled-text-color: ",";\n    // Divider\n    --divider-background-color: ",";\n  "])),palette_dist_esm.D.gray.dark1,palette_dist_esm.D.gray.dark3,palette_dist_esm.D.white,palette_dist_esm.D.gray.light1,palette_dist_esm.D.gray.light1)),lib_dist_esm.Q2.Dark,(0,dist_esm.css)(sn||(sn=L(["\n    --base-text-color: ",";\n    --base-background-color: rgba(255, 255, 255, 0);\n    --base-shadow-color: rgba(255, 255, 255, 0);\n    // Hover\n    --hover-text-color: ",";\n    // Selected\n    --active-text-color: ",";\n    // Disabled\n    --disabled-text-color: ",";\n    // Divider\n    --divider-background-color: ",";\n  "])),palette_dist_esm.D.gray.light1,palette_dist_esm.D.gray.light2,palette_dist_esm.D.black,palette_dist_esm.D.gray.dark2,palette_dist_esm.D.gray.dark2)),On=j(j(j({},B.XSmall,(0,dist_esm.css)(un||(un=L(["\n    --font-size: 12px;\n    --line-height: 16px;\n    --padding-inline: 12px;\n    --text-transform: uppercase;\n    --font-weight: ",";\n    --divider-height: 12px;\n    --padding-block: 3px;\n  "])),tokens_dist_esm.vC.bold)),B.Default,(0,dist_esm.css)(pn||(pn=L(["\n    --font-size: 13px;\n    --line-height: 24px;\n    --padding-inline: 12px; // left/right\n    --text-transform: none;\n    --font-weight: ",";\n    --divider-height: 18px;\n    --padding-block: 3px;\n  "])),tokens_dist_esm.vC.medium)),B.Large,(0,dist_esm.css)(fn||(fn=L(["\n    --font-size: 16px;\n    --line-height: 28px;\n    --padding-inline: 12px;\n    --text-transform: none;\n    --font-weight: ",";\n    --divider-height: 20px;\n    --padding-block: 4px;\n  "])),tokens_dist_esm.vC.medium)),En=function En(n){var e=n.theme,r=n.size,o=void 0===r?"default":r,t=n.baseFontSize,a=void 0===t?14:t;return(0,dist_esm.cx)(Sn[e],On[o],(0,dist_esm.css)(gn||(gn=L(["\n      position: relative;\n      display: flex;\n      width: 100%;\n      align-items: center;\n      justify-content: center;\n      z-index: 3;\n\n      &:first-child,\n      &[data-lg-checked='true'],\n      &[data-lg-checked='true'] + [data-lg-checked='false'],\n      &:focus-within + :not(:focus-within) {\n        --divider-background-color: transparent;\n      }\n\n      /* \n      * Adds the divider line to unselected segments \n      */\n      &:before {\n        --divider-width: 1px;\n        content: '';\n        position: absolute;\n        height: var(--divider-height);\n        width: var(--divider-width);\n        left: calc(0px - (var(--segment-gap) + var(--divider-width)) / 2);\n        top: calc(\n          (\n              var(--line-height) + var(--padding-block) * 2 -\n                var(--divider-height)\n            ) / 2\n        );\n        transition: background-color ","ms ease-in-out;\n        background-color: var(--divider-background-color);\n      }\n    "])),tokens_dist_esm.nV.default),j({},(0,dist_esm.css)(hn||(hn=L(["\n        --font-size: 16px;\n      "]))),"default"===o&&16===a))},Nn=(0,dist_esm.css)(vn||(vn=L(["\n  width: 100%;\n  height: 100%;\n  text-decoration: none;\n"]))),_n=(0,dist_esm.css)(mn||(mn=L(["\n  font-family: ",";\n  display: flex;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  padding: var(--padding-block) var(--padding-inline);\n  background-color: var(--base-background-color);\n  border-radius: var(--indicator-radius);\n  text-align: center;\n  font-size: var(--font-size);\n  line-height: var(--line-height);\n  text-transform: var(--text-transform, none);\n  font-weight: var(--font-weight);\n  color: var(--base-text-color);\n  box-shadow: 0px 1px 2px var(--base-shadow-color);\n  cursor: pointer;\n  transition: ","ms ease-in-out;\n  transition-property: color, box-shadow;\n  text-decoration: none;\n  outline: none;\n  border: none;\n\n  svg {\n    transition: color ","ms ease-in-out;\n  }\n\n  &:hover {\n    color: var(--hover-text-color);\n  }\n\n  &[aria-selected='true'] {\n    color: var(--active-text-color);\n  }\n\n  &:disabled {\n    color: var(--disabled-text-color);\n    cursor: not-allowed;\n  }\n\n  &[aria-selected='false']:not(:disabled):not(:hover) {\n    svg {\n      color: ",";\n    }\n  }\n"])),tokens_dist_esm.Vl.default,tokens_dist_esm.nV.default,tokens_dist_esm.nV.default,palette_dist_esm.D.gray.base),jn=(0,dist_esm.css)(bn||(bn=L(["\n  &[aria-selected='false']:not(:disabled):not(:hover) {\n    svg {\n      color: var(--base-text-color);\n    }\n  }\n"]))),Dn=j(j({},lib_dist_esm.Q2.Light,(0,dist_esm.css)(xn||(xn=L(["\n    &:focus {\n      box-shadow: ",";\n    }\n  "])),tokens_dist_esm.kN.light.default)),lib_dist_esm.Q2.Dark,(0,dist_esm.css)(yn||(yn=L(["\n    &:focus {\n      box-shadow: ",";\n    }\n  "])),tokens_dist_esm.kN.dark.default)),An=(0,dist_esm.css)(wn||(wn=L(["\n  min-height: var(--line-height);\n  gap: calc(var(--font-size) / 2);\n  display: flex;\n  align-items: center;\n  min-width: 0;\n\n  svg {\n    flex-shrink: 0;\n  }\n"]))),In=(0,dist_esm.css)(kn||(kn=L(["\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]))),Ln=["value","children","disabled","as","className","aria-controls","_id","_checked","_focused","_index","_onClick","_onHover","isfocusInComponent","glyph"],Pn=(0,index_js_.forwardRef)((function(o,t){var a,i=o.value,c=o.children,d=o.disabled,s=void 0!==d&&d,u=o.as,f=o.className,g=o["aria-controls"],v=o._id,b=o._checked,x=o._focused;o._index;var y=o._onClick,w=o._onHover,k=o.isfocusInComponent,C=o.glyph,z=A(o,Ln),S=(0,index_js_.useContext)(J),O=S.size,_=S.theme,I=S.followFocus,L=(0,leafygreen_provider_dist_esm.LB)().usingKeyboard,P=(0,leafygreen_provider_dist_esm.Zn)(),F=(0,index_js_.useRef)(!1),M=(0,index_js_.useRef)(null);(0,index_js_.useEffect)((function(){var n,e;F.current&&L&&x&&k&&(null==M||null===(n=M.current)||void 0===n||n.focus(),I&&(null==M||null===(e=M.current)||void 0===e||e.click())),F.current=!0}),[x,I,L,k]),(0,index_js_.useEffect)((function(){C&&!(0,icon_dist_esm.fx)(C)&&console.warn("Please provide a LeafyGreen UI Icon or Glyph component.")}),[C]);var H=null!==(a=C&&!c)&&void 0!==a&&a;return index_js_default().createElement("div",{className:(0,dist_esm.cx)(En({theme:_,size:O,baseFontSize:P}),f),ref:t,"data-lg-checked":b},index_js_default().createElement(box_dist_esm.Z,D({as:u,tabIndex:-1,className:Nn},z),index_js_default().createElement("button",{role:"tab",id:v,tabIndex:x?0:-1,"aria-selected":b,"aria-controls":g,disabled:s,className:(0,dist_esm.cx)(_n,j(j({},Dn[_],L),jn,H)),ref:M,onClick:function onClick(){null==y||y(i)},onMouseEnter:function onMouseEnter(){null==w||w(!0)},onMouseLeave:function onMouseLeave(){null==w||w(!1)},type:"button"},index_js_default().createElement("div",{className:An},C&&(0,icon_dist_esm.fx)(C)&&C,!H&&index_js_default().createElement("span",{className:In},c)))))}));Pn.displayName="SegmentedControlOption",Pn.propTypes={value:prop_types_default().string.isRequired,className:prop_types_default().string,disabled:prop_types_default().bool,glyph:prop_types_default().element};var SegmentedControl_types=__webpack_require__("./packages/segmented-control/src/SegmentedControl/SegmentedControl.types.ts"),TestChildren={Basic:[index_js_default().createElement(Pn,{key:"dragonfruit",value:"dragonfruit"},"Dragonfruit fruit"),index_js_default().createElement(Pn,{key:"eggplant",value:"eggplant"},"Eggplant banana"),index_js_default().createElement(Pn,{key:"fig",value:"fig"},"Fig"),index_js_default().createElement(Pn,{key:"grape",value:"grape",disabled:!0},"Grape")],WithIcons:[index_js_default().createElement(Pn,{key:"json",value:"json",glyph:index_js_default().createElement(icon_dist_esm.ZP,{glyph:"CurlyBraces"})},"JSON and more"),index_js_default().createElement(Pn,{key:"xml",value:"xml",glyph:index_js_default().createElement(icon_dist_esm.ZP,{glyph:"Code"})},"XML"),index_js_default().createElement(Pn,{disabled:!0,key:"shell",value:"shell",glyph:index_js_default().createElement(icon_dist_esm.ZP,{glyph:"Shell"})},"Shell")],IconsOnly:[index_js_default().createElement(Pn,{key:"cloud",value:"cloud",glyph:index_js_default().createElement(icon_dist_esm.ZP,{glyph:"Cloud"})}),index_js_default().createElement(Pn,{key:"globe",value:"globe",glyph:index_js_default().createElement(icon_dist_esm.ZP,{glyph:"GlobeAmericas"})}),index_js_default().createElement(Pn,{disabled:!0,key:"government",value:"government",glyph:index_js_default().createElement(icon_dist_esm.ZP,{glyph:"GovernmentBuilding"})})]};const SegmentedControl_stories={title:"Components/SegmentedControl",component:cn,parameters:{default:"LiveExample",controls:{exclude:[].concat((0,toConsumableArray.Z)(esm.xZ),["children","value","defaultValue"])},chromatic:{delay:tokens_dist_esm.nV.default},generate:{combineArgs:{darkMode:[!1,!0],children:[TestChildren.Basic,TestChildren.WithIcons,TestChildren.IconsOnly],size:Object.values(SegmentedControl_types.$),label:[void 0,"Select"]}}},args:{label:"Fruit",name:"fruit",childrenOptions:"Basic"},argTypes:{childrenOptions:{control:"select",options:Object.keys(TestChildren),description:"LiveExample toggle for children"},label:{control:"text"},name:{control:"text"},defaultValue:{control:"text"},value:{control:"text"},followFocus:{control:"boolean"},"aria-controls":{control:"text"},size:{control:"select",options:Object.values(SegmentedControl_types.$)},darkMode:esm.bN.darkMode,baseFontSize:esm.bN.updatedBaseFontSize}};var LiveExample=function LiveExample(args){return index_js_default().createElement(cn,args,TestChildren[args.childrenOptions])};LiveExample.parameters={chromatic:{disableSnapshot:!0}};var Generated=function Generated(){return index_js_default().createElement(index_js_default().Fragment,null)};LiveExample.parameters={...LiveExample.parameters,docs:{...LiveExample.parameters?.docs,source:{originalSource:"(args: SegmentedControlProps & LiveExampleProps) => <SegmentedControl {...args}>\n    {TestChildren[args.childrenOptions]}\n  </SegmentedControl>",...LiveExample.parameters?.docs?.source}}},Generated.parameters={...Generated.parameters,docs:{...Generated.parameters?.docs,source:{originalSource:"() => <></>",...Generated.parameters?.docs?.source}}};const __namedExportsOrder=["LiveExample","Generated"]},"./packages/box/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>l});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("webpack/sharing/consume/default/react/react"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},n.apply(null,arguments)}var t=["as"];function a(r,a){if(null!=r.as){var l=r.as,f=function(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(r.indexOf(t)>=0)continue;n[t]=e[t]}return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(r,t);return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(l,n({},f,{ref:a}))}return null!=r.href?react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",n({},r,{ref:a})):react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",n({},r,{ref:a}))}a.displayName="InlineBox";var l=react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(a);l.displayName="Box",l.propTypes={as:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().elementType,prop_types__WEBPACK_IMPORTED_MODULE_1___default().element,prop_types__WEBPACK_IMPORTED_MODULE_1___default().func]),href:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string}},"./packages/segmented-control/src/SegmentedControl/SegmentedControl.types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Size});var Size={XSmall:"xsmall",Default:"default",Large:"large"}},"./tools/storybook-utils/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bN:()=>n,xZ:()=>r});__webpack_require__("./node_modules/lodash/mergeWith.js");var n={baseFontSize:{description:"The base font size passed to the LeafyGreenProvider that wraps the component",control:{type:"radio"},options:[14,16]},updatedBaseFontSize:{description:"The base font size passed to the LeafyGreenProvider that wraps the component. Uses the updated font size values for Euclid Circular A.",control:{type:"radio"},options:[13,16]},darkMode:{description:"Render the component in dark mode.",control:"boolean"},children:{description:"Element rendered inside the component",control:"text"},as:{description:"The component will be rendered in HTML as the element selected here",options:["small","button","a","abbr","address","article","aside","b","big","blockquote","caption","cite","code","dd","del","details","dfn","dialog","div","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","i","ins","kbd","keygen","label","legend","li","main","map","mark","menu","menuitem","meter","nav","noscript","ol","p","picture","pre","progress","q","rp","rt","ruby","s","samp","slot","script","section","select","span","strong","style","sub","summary","sup","template","tbody","td","tfoot","th","thead","time","title","tr","u","ul"],type:{name:"string"},control:{type:"select"},defaultValue:"button"}},r=["aria-controls","aria-describedby","aria-label","aria-labelledby","aria-describedby","className","data-lgid","id","onBlur","onCancel","onChange","onClear","onClick","onConfirm","onDismiss","onFilter","popoverZIndex","portalClassName","portalContainer","ref","setOpen","scrollContainer","usePortal"]}}]);