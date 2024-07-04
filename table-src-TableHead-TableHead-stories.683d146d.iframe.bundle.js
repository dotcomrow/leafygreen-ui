/*! For license information please see table-src-TableHead-TableHead-stories.683d146d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkleafygreen_ui=self.webpackChunkleafygreen_ui||[]).push([[6266],{"./packages/table/src/TableHead/TableHead.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{StickyHeader:()=>StickyHeader,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("webpack/sharing/consume/default/react/react"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/emotion/dist/esm/index.js"),_Cell__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/table/src/Cell/index.ts"),_Row__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/table/src/Row/index.ts"),_Table_Table__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/table/src/Table/Table.tsx"),_TableBody_TableBody__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/table/src/TableBody/TableBody.tsx"),_utils_makeData_testutils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/table/src/utils/makeData.testutils.tsx"),_TableHead__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/table/src/TableHead/TableHead.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Table/TableHead",component:_TableHead__WEBPACK_IMPORTED_MODULE_7__.Z,argTypes:{children:{control:"none"},ref:{control:"none"},className:{control:"none"},isSticky:{control:"boolean"}},parameters:{chromatic:{disableSnapshot:!0},docs:{source:{type:"code"}}}};var StickyHeader=function Template(args){var data=(0,_utils_makeData_testutils__WEBPACK_IMPORTED_MODULE_6__._)(!1,100),columns=Object.keys(data[0]);return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Table_Table__WEBPACK_IMPORTED_MODULE_4__.Z,{className:(0,_leafygreen_ui_emotion__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__.Z)(["\n        height: 500px;\n      "])))},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TableHead__WEBPACK_IMPORTED_MODULE_7__.Z,args,react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Row__WEBPACK_IMPORTED_MODULE_3__.V,null,columns.map((function(columnName){return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Cell__WEBPACK_IMPORTED_MODULE_2__.q,{key:columnName},columnName)})))),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TableBody_TableBody__WEBPACK_IMPORTED_MODULE_5__.Z,null,data.map((function(row){return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Row__WEBPACK_IMPORTED_MODULE_3__.X,{key:row.id},Object.keys(row).map((function(cellKey,index){return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Cell__WEBPACK_IMPORTED_MODULE_2__.b,{key:"".concat(cellKey,"-").concat(index)},row[cellKey])})))}))))}.bind({});StickyHeader.args={isSticky:!0},StickyHeader.parameters={...StickyHeader.parameters,docs:{...StickyHeader.parameters?.docs,source:{originalSource:"args => {\n  const data = makeData(false, 100);\n  const columns = Object.keys(data[0]);\n  return <Table className={css`\n        height: 500px;\n      `}>\n      <TableHead {...args}>\n        <HeaderRow>\n          {columns.map((columnName: string) => <HeaderCell key={columnName}>{columnName}</HeaderCell>)}\n        </HeaderRow>\n      </TableHead>\n      <TableBody>\n        {data.map((row: AnyDict) => <Row key={row.id}>\n            {Object.keys(row).map((cellKey: string, index: number) => {\n          return <Cell key={`${cellKey}-${index}`}>{row[cellKey]}</Cell>;\n        })}\n          </Row>)}\n      </TableBody>\n    </Table>;\n}",...StickyHeader.parameters?.docs?.source}}};const __namedExportsOrder=["StickyHeader"]},"./packages/table/src/TableBody/TableBody.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("webpack/sharing/consume/default/react/react"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_leafygreen_ui_polymorphic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/polymorphic/dist/esm/index.js"),_TableContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/table/src/TableContext/index.ts"),_excluded=["children"],TableBody=function TableBody(_ref){var children=_ref.children,rest=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded),paddingTop=0,paddingBottom=0,table=(0,_TableContext__WEBPACK_IMPORTED_MODULE_2__.S)().table,areSomeRowsExpandable=null==table?void 0:table.getCanSomeRowsExpand(),bodyAs=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return areSomeRowsExpandable?react__WEBPACK_IMPORTED_MODULE_0__.Fragment:"tbody"}),[areSomeRowsExpandable]);if(table&&table.virtualRows){var _virtualRows$,_virtualRows,virtualRows=table.virtualRows,totalSize=table.totalSize;paddingTop=virtualRows.length>0&&(null==virtualRows||null===(_virtualRows$=virtualRows[0])||void 0===_virtualRows$?void 0:_virtualRows$.start)||0,paddingBottom=virtualRows.length>0?totalSize-((null==virtualRows||null===(_virtualRows=virtualRows[virtualRows.length-1])||void 0===_virtualRows?void 0:_virtualRows.end)||0):0}return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_leafygreen_ui_polymorphic__WEBPACK_IMPORTED_MODULE_1__.Ge,(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({as:bodyAs},rest),paddingTop>0&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr",{"aria-hidden":!0},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td",{style:{height:"".concat(paddingTop,"px")}})),children,paddingBottom>0&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr",{"aria-hidden":!0},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td",{style:{height:"".concat(paddingBottom,"px")}})))};TableBody.displayName="TableBody";const __WEBPACK_DEFAULT_EXPORT__=TableBody},"./node_modules/lodash/_baseHas.js":module=>{var hasOwnProperty=Object.prototype.hasOwnProperty;module.exports=function baseHas(object,key){return null!=object&&hasOwnProperty.call(object,key)}},"./node_modules/lodash/_baseRange.js":module=>{var nativeCeil=Math.ceil,nativeMax=Math.max;module.exports=function baseRange(start,end,step,fromRight){for(var index=-1,length=nativeMax(nativeCeil((end-start)/(step||1)),0),result=Array(length);length--;)result[fromRight?length:++index]=start,start+=step;return result}},"./node_modules/lodash/_createRange.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseRange=__webpack_require__("./node_modules/lodash/_baseRange.js"),isIterateeCall=__webpack_require__("./node_modules/lodash/_isIterateeCall.js"),toFinite=__webpack_require__("./node_modules/lodash/toFinite.js");module.exports=function createRange(fromRight){return function(start,end,step){return step&&"number"!=typeof step&&isIterateeCall(start,end,step)&&(end=step=void 0),start=toFinite(start),void 0===end?(end=start,start=0):end=toFinite(end),step=void 0===step?start<end?1:-1:toFinite(step),baseRange(start,end,step,fromRight)}}},"./node_modules/lodash/has.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseHas=__webpack_require__("./node_modules/lodash/_baseHas.js"),hasPath=__webpack_require__("./node_modules/lodash/_hasPath.js");module.exports=function has(object,path){return null!=object&&hasPath(object,path,baseHas)}},"./node_modules/lodash/kebabCase.js":(module,__unused_webpack_exports,__webpack_require__)=>{var kebabCase=__webpack_require__("./node_modules/lodash/_createCompounder.js")((function(result,word,index){return result+(index?"-":"")+word.toLowerCase()}));module.exports=kebabCase},"./node_modules/lodash/range.js":(module,__unused_webpack_exports,__webpack_require__)=>{var range=__webpack_require__("./node_modules/lodash/_createRange.js")();module.exports=range},"./node_modules/react-keyed-flatten-children/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var react_1=__webpack_require__("webpack/sharing/consume/default/react/react"),react_is_1=__webpack_require__("./node_modules/react-keyed-flatten-children/node_modules/react-is/index.js");exports.Z=function flattenChildren(children,depth,keys){return void 0===depth&&(depth=0),void 0===keys&&(keys=[]),react_1.Children.toArray(children).reduce((function(acc,node,nodeIndex){return react_is_1.isFragment(node)?acc.push.apply(acc,flattenChildren(node.props.children,depth+1,keys.concat(node.key||nodeIndex))):react_1.isValidElement(node)?acc.push(react_1.cloneElement(node,{key:keys.concat(String(node.key)).join(".")})):"string"!=typeof node&&"number"!=typeof node||acc.push(node),acc}),[])}},"./node_modules/react-keyed-flatten-children/node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{"use strict";var b="function"==typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;function z(a){if("object"==typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l,exports.ConcurrentMode=m,exports.ContextConsumer=k,exports.ContextProvider=h,exports.Element=c,exports.ForwardRef=n,exports.Fragment=e,exports.Lazy=t,exports.Memo=r,exports.Portal=d,exports.Profiler=g,exports.StrictMode=f,exports.Suspense=p,exports.isAsyncMode=function(a){return A(a)||z(a)===l},exports.isConcurrentMode=A,exports.isContextConsumer=function(a){return z(a)===k},exports.isContextProvider=function(a){return z(a)===h},exports.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===c},exports.isForwardRef=function(a){return z(a)===n},exports.isFragment=function(a){return z(a)===e},exports.isLazy=function(a){return z(a)===t},exports.isMemo=function(a){return z(a)===r},exports.isPortal=function(a){return z(a)===d},exports.isProfiler=function(a){return z(a)===g},exports.isStrictMode=function(a){return z(a)===f},exports.isSuspense=function(a){return z(a)===p},exports.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"==typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)},exports.typeOf=z},"./node_modules/react-keyed-flatten-children/node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react-keyed-flatten-children/node_modules/react-is/cjs/react-is.production.min.js")}}]);