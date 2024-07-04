(self.webpackChunkleafygreen_ui=self.webpackChunkleafygreen_ui||[]).push([[2303],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./packages/polymorphic/src/Polymorphic/Polymorphic.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,HigherOrder:()=>HigherOrder,HigherOrderWithRef:()=>HigherOrderWithRef,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Polymorphic_stories});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),index_js_=__webpack_require__("webpack/sharing/consume/default/react/react"),index_js_default=__webpack_require__.n(index_js_),esm=__webpack_require__("./tools/storybook-utils/dist/esm/index.js");function usePolymorphic(as){var Component=function usePolymorphicComponent(as){return as||"div"}(as);return{Component,ref:function usePolymorphicRef(_){return index_js_default().useRef(null)}()}}var _excluded=["as","children"],BasePolymorph=function BasePolymorph(_ref,ref){var as=_ref.as,children=_ref.children,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),Component=usePolymorphic(as).Component;return index_js_default().createElement(Component,(0,esm_extends.Z)({},rest,{ref}),children)},Polymorph=index_js_default().forwardRef(BasePolymorph);Polymorph.displayName="Polymorph";var Polymorphic=function Polymorphic(render,displayName){var _ref,PolyComponent=1===render.length?render:(0,index_js_.forwardRef)(render);return PolyComponent.displayName=null!==(_ref=null!=displayName?displayName:render.displayName)&&void 0!==_ref?_ref:"PolymorphicComponent",PolyComponent},Polymorphic_stories_excluded=["as","title"],_excluded2=["as","title"];const Polymorphic_stories={title:"Components/Internal/Polymorph",component:Polymorph,args:{children:"Polymorph",as:"button",href:"mongodb.design"},argTypes:{as:esm.bN.as,children:esm.bN.children,href:{control:"text",if:{arg:"as",eq:"a"}}},parameters:{default:"Basic"}};var Basic=function Basic(props){return index_js_default().createElement(Polymorph,props)},HigherOrder=Polymorphic((function(_ref){var as=_ref.as,_ref$title=_ref.title,title=void 0===_ref$title?"Title":_ref$title,rest=(0,objectWithoutProperties.Z)(_ref,Polymorphic_stories_excluded),Component=usePolymorphic(as).Component;return index_js_default().createElement(Component,(0,esm_extends.Z)({as},rest),title)})),HigherOrderWithRef=Polymorphic((function(_ref2,ref){var as=_ref2.as,_ref2$title=_ref2.title,title=void 0===_ref2$title?"Title":_ref2$title,rest=(0,objectWithoutProperties.Z)(_ref2,_excluded2),Component=usePolymorphic(as).Component;return index_js_default().createElement(Component,(0,esm_extends.Z)({as,ref},rest),title)}));Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"(props: PolymorphicPropsWithRef<any>) => <Polymorph {...props} />",...Basic.parameters?.docs?.source}}},HigherOrder.parameters={...HigherOrder.parameters,docs:{...HigherOrder.parameters?.docs,source:{originalSource:"Polymorphic<{\n  /** An arbitrary title */\n  title?: string;\n}>(({\n  as,\n  title = 'Title',\n  ...rest\n}) => {\n  const {\n    Component\n  } = usePolymorphic(as);\n  return <Component as={as} {...rest}>\n      {title}\n    </Component>;\n})",...HigherOrder.parameters?.docs?.source}}},HigherOrderWithRef.parameters={...HigherOrderWithRef.parameters,docs:{...HigherOrderWithRef.parameters?.docs,source:{originalSource:"Polymorphic<{\n  /** An arbitrary title */\n  title?: string;\n}>(({\n  as,\n  title = 'Title',\n  ...rest\n}, ref) => {\n  const {\n    Component\n  } = usePolymorphic(as);\n  return <Component as={as} ref={ref} {...rest}>\n      {title}\n    </Component>;\n})",...HigherOrderWithRef.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","HigherOrder","HigherOrderWithRef"]},"./tools/storybook-utils/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bN:()=>n,xZ:()=>r});__webpack_require__("./node_modules/lodash/mergeWith.js");var n={baseFontSize:{description:"The base font size passed to the LeafyGreenProvider that wraps the component",control:{type:"radio"},options:[14,16]},updatedBaseFontSize:{description:"The base font size passed to the LeafyGreenProvider that wraps the component. Uses the updated font size values for Euclid Circular A.",control:{type:"radio"},options:[13,16]},darkMode:{description:"Render the component in dark mode.",control:"boolean"},children:{description:"Element rendered inside the component",control:"text"},as:{description:"The component will be rendered in HTML as the element selected here",options:["small","button","a","abbr","address","article","aside","b","big","blockquote","caption","cite","code","dd","del","details","dfn","dialog","div","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","i","ins","kbd","keygen","label","legend","li","main","map","mark","menu","menuitem","meter","nav","noscript","ol","p","picture","pre","progress","q","rp","rt","ruby","s","samp","slot","script","section","select","span","strong","style","sub","summary","sup","template","tbody","td","tfoot","th","thead","time","title","tr","u","ul"],type:{name:"string"},control:{type:"select"},defaultValue:"button"}},r=["aria-controls","aria-describedby","aria-label","aria-labelledby","aria-describedby","className","data-lgid","id","onBlur","onCancel","onChange","onClear","onClick","onConfirm","onDismiss","onFilter","popoverZIndex","portalClassName","portalContainer","ref","setOpen","scrollContainer","usePortal"]},"./node_modules/lodash/_apply.js":module=>{module.exports=function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2])}return func.apply(thisArg,args)}},"./node_modules/lodash/_assignMergeValue.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseAssignValue=__webpack_require__("./node_modules/lodash/_baseAssignValue.js"),eq=__webpack_require__("./node_modules/lodash/eq.js");module.exports=function assignMergeValue(object,key,value){(void 0!==value&&!eq(object[key],value)||void 0===value&&!(key in object))&&baseAssignValue(object,key,value)}},"./node_modules/lodash/_assignValue.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseAssignValue=__webpack_require__("./node_modules/lodash/_baseAssignValue.js"),eq=__webpack_require__("./node_modules/lodash/eq.js"),hasOwnProperty=Object.prototype.hasOwnProperty;module.exports=function assignValue(object,key,value){var objValue=object[key];hasOwnProperty.call(object,key)&&eq(objValue,value)&&(void 0!==value||key in object)||baseAssignValue(object,key,value)}},"./node_modules/lodash/_baseCreate.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isObject=__webpack_require__("./node_modules/lodash/isObject.js"),objectCreate=Object.create,baseCreate=function(){function object(){}return function(proto){if(!isObject(proto))return{};if(objectCreate)return objectCreate(proto);object.prototype=proto;var result=new object;return object.prototype=void 0,result}}();module.exports=baseCreate},"./node_modules/lodash/_baseKeysIn.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isObject=__webpack_require__("./node_modules/lodash/isObject.js"),isPrototype=__webpack_require__("./node_modules/lodash/_isPrototype.js"),nativeKeysIn=__webpack_require__("./node_modules/lodash/_nativeKeysIn.js"),hasOwnProperty=Object.prototype.hasOwnProperty;module.exports=function baseKeysIn(object){if(!isObject(object))return nativeKeysIn(object);var isProto=isPrototype(object),result=[];for(var key in object)("constructor"!=key||!isProto&&hasOwnProperty.call(object,key))&&result.push(key);return result}},"./node_modules/lodash/_baseMerge.js":(module,__unused_webpack_exports,__webpack_require__)=>{var Stack=__webpack_require__("./node_modules/lodash/_Stack.js"),assignMergeValue=__webpack_require__("./node_modules/lodash/_assignMergeValue.js"),baseFor=__webpack_require__("./node_modules/lodash/_baseFor.js"),baseMergeDeep=__webpack_require__("./node_modules/lodash/_baseMergeDeep.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),keysIn=__webpack_require__("./node_modules/lodash/keysIn.js"),safeGet=__webpack_require__("./node_modules/lodash/_safeGet.js");module.exports=function baseMerge(object,source,srcIndex,customizer,stack){object!==source&&baseFor(source,(function(srcValue,key){if(stack||(stack=new Stack),isObject(srcValue))baseMergeDeep(object,source,key,srcIndex,baseMerge,customizer,stack);else{var newValue=customizer?customizer(safeGet(object,key),srcValue,key+"",object,source,stack):void 0;void 0===newValue&&(newValue=srcValue),assignMergeValue(object,key,newValue)}}),keysIn)}},"./node_modules/lodash/_baseMergeDeep.js":(module,__unused_webpack_exports,__webpack_require__)=>{var assignMergeValue=__webpack_require__("./node_modules/lodash/_assignMergeValue.js"),cloneBuffer=__webpack_require__("./node_modules/lodash/_cloneBuffer.js"),cloneTypedArray=__webpack_require__("./node_modules/lodash/_cloneTypedArray.js"),copyArray=__webpack_require__("./node_modules/lodash/_copyArray.js"),initCloneObject=__webpack_require__("./node_modules/lodash/_initCloneObject.js"),isArguments=__webpack_require__("./node_modules/lodash/isArguments.js"),isArray=__webpack_require__("./node_modules/lodash/isArray.js"),isArrayLikeObject=__webpack_require__("./node_modules/lodash/isArrayLikeObject.js"),isBuffer=__webpack_require__("./node_modules/lodash/isBuffer.js"),isFunction=__webpack_require__("./node_modules/lodash/isFunction.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),isPlainObject=__webpack_require__("./node_modules/lodash/isPlainObject.js"),isTypedArray=__webpack_require__("./node_modules/lodash/isTypedArray.js"),safeGet=__webpack_require__("./node_modules/lodash/_safeGet.js"),toPlainObject=__webpack_require__("./node_modules/lodash/toPlainObject.js");module.exports=function baseMergeDeep(object,source,key,srcIndex,mergeFunc,customizer,stack){var objValue=safeGet(object,key),srcValue=safeGet(source,key),stacked=stack.get(srcValue);if(stacked)assignMergeValue(object,key,stacked);else{var newValue=customizer?customizer(objValue,srcValue,key+"",object,source,stack):void 0,isCommon=void 0===newValue;if(isCommon){var isArr=isArray(srcValue),isBuff=!isArr&&isBuffer(srcValue),isTyped=!isArr&&!isBuff&&isTypedArray(srcValue);newValue=srcValue,isArr||isBuff||isTyped?isArray(objValue)?newValue=objValue:isArrayLikeObject(objValue)?newValue=copyArray(objValue):isBuff?(isCommon=!1,newValue=cloneBuffer(srcValue,!0)):isTyped?(isCommon=!1,newValue=cloneTypedArray(srcValue,!0)):newValue=[]:isPlainObject(srcValue)||isArguments(srcValue)?(newValue=objValue,isArguments(objValue)?newValue=toPlainObject(objValue):isObject(objValue)&&!isFunction(objValue)||(newValue=initCloneObject(srcValue))):isCommon=!1}isCommon&&(stack.set(srcValue,newValue),mergeFunc(newValue,srcValue,srcIndex,customizer,stack),stack.delete(srcValue)),assignMergeValue(object,key,newValue)}}},"./node_modules/lodash/_baseRest.js":(module,__unused_webpack_exports,__webpack_require__)=>{var identity=__webpack_require__("./node_modules/lodash/identity.js"),overRest=__webpack_require__("./node_modules/lodash/_overRest.js"),setToString=__webpack_require__("./node_modules/lodash/_setToString.js");module.exports=function baseRest(func,start){return setToString(overRest(func,start,identity),func+"")}},"./node_modules/lodash/_baseSetToString.js":(module,__unused_webpack_exports,__webpack_require__)=>{var constant=__webpack_require__("./node_modules/lodash/constant.js"),defineProperty=__webpack_require__("./node_modules/lodash/_defineProperty.js"),identity=__webpack_require__("./node_modules/lodash/identity.js"),baseSetToString=defineProperty?function(func,string){return defineProperty(func,"toString",{configurable:!0,enumerable:!1,value:constant(string),writable:!0})}:identity;module.exports=baseSetToString},"./node_modules/lodash/_cloneArrayBuffer.js":(module,__unused_webpack_exports,__webpack_require__)=>{var Uint8Array=__webpack_require__("./node_modules/lodash/_Uint8Array.js");module.exports=function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);return new Uint8Array(result).set(new Uint8Array(arrayBuffer)),result}},"./node_modules/lodash/_cloneBuffer.js":(module,exports,__webpack_require__)=>{module=__webpack_require__.nmd(module);var root=__webpack_require__("./node_modules/lodash/_root.js"),freeExports=exports&&!exports.nodeType&&exports,freeModule=freeExports&&module&&!module.nodeType&&module,Buffer=freeModule&&freeModule.exports===freeExports?root.Buffer:void 0,allocUnsafe=Buffer?Buffer.allocUnsafe:void 0;module.exports=function cloneBuffer(buffer,isDeep){if(isDeep)return buffer.slice();var length=buffer.length,result=allocUnsafe?allocUnsafe(length):new buffer.constructor(length);return buffer.copy(result),result}},"./node_modules/lodash/_cloneTypedArray.js":(module,__unused_webpack_exports,__webpack_require__)=>{var cloneArrayBuffer=__webpack_require__("./node_modules/lodash/_cloneArrayBuffer.js");module.exports=function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length)}},"./node_modules/lodash/_copyArray.js":module=>{module.exports=function copyArray(source,array){var index=-1,length=source.length;for(array||(array=Array(length));++index<length;)array[index]=source[index];return array}},"./node_modules/lodash/_copyObject.js":(module,__unused_webpack_exports,__webpack_require__)=>{var assignValue=__webpack_require__("./node_modules/lodash/_assignValue.js"),baseAssignValue=__webpack_require__("./node_modules/lodash/_baseAssignValue.js");module.exports=function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});for(var index=-1,length=props.length;++index<length;){var key=props[index],newValue=customizer?customizer(object[key],source[key],key,object,source):void 0;void 0===newValue&&(newValue=source[key]),isNew?baseAssignValue(object,key,newValue):assignValue(object,key,newValue)}return object}},"./node_modules/lodash/_createAssigner.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseRest=__webpack_require__("./node_modules/lodash/_baseRest.js"),isIterateeCall=__webpack_require__("./node_modules/lodash/_isIterateeCall.js");module.exports=function createAssigner(assigner){return baseRest((function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:void 0,guard=length>2?sources[2]:void 0;for(customizer=assigner.length>3&&"function"==typeof customizer?(length--,customizer):void 0,guard&&isIterateeCall(sources[0],sources[1],guard)&&(customizer=length<3?void 0:customizer,length=1),object=Object(object);++index<length;){var source=sources[index];source&&assigner(object,source,index,customizer)}return object}))}},"./node_modules/lodash/_getPrototype.js":(module,__unused_webpack_exports,__webpack_require__)=>{var getPrototype=__webpack_require__("./node_modules/lodash/_overArg.js")(Object.getPrototypeOf,Object);module.exports=getPrototype},"./node_modules/lodash/_initCloneObject.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseCreate=__webpack_require__("./node_modules/lodash/_baseCreate.js"),getPrototype=__webpack_require__("./node_modules/lodash/_getPrototype.js"),isPrototype=__webpack_require__("./node_modules/lodash/_isPrototype.js");module.exports=function initCloneObject(object){return"function"!=typeof object.constructor||isPrototype(object)?{}:baseCreate(getPrototype(object))}},"./node_modules/lodash/_isIterateeCall.js":(module,__unused_webpack_exports,__webpack_require__)=>{var eq=__webpack_require__("./node_modules/lodash/eq.js"),isArrayLike=__webpack_require__("./node_modules/lodash/isArrayLike.js"),isIndex=__webpack_require__("./node_modules/lodash/_isIndex.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js");module.exports=function isIterateeCall(value,index,object){if(!isObject(object))return!1;var type=typeof index;return!!("number"==type?isArrayLike(object)&&isIndex(index,object.length):"string"==type&&index in object)&&eq(object[index],value)}},"./node_modules/lodash/_nativeKeysIn.js":module=>{module.exports=function nativeKeysIn(object){var result=[];if(null!=object)for(var key in Object(object))result.push(key);return result}},"./node_modules/lodash/_overRest.js":(module,__unused_webpack_exports,__webpack_require__)=>{var apply=__webpack_require__("./node_modules/lodash/_apply.js"),nativeMax=Math.max;module.exports=function overRest(func,start,transform){return start=nativeMax(void 0===start?func.length-1:start,0),function(){for(var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);++index<length;)array[index]=args[start+index];index=-1;for(var otherArgs=Array(start+1);++index<start;)otherArgs[index]=args[index];return otherArgs[start]=transform(array),apply(func,this,otherArgs)}}},"./node_modules/lodash/_safeGet.js":module=>{module.exports=function safeGet(object,key){if(("constructor"!==key||"function"!=typeof object[key])&&"__proto__"!=key)return object[key]}},"./node_modules/lodash/_setToString.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseSetToString=__webpack_require__("./node_modules/lodash/_baseSetToString.js"),setToString=__webpack_require__("./node_modules/lodash/_shortOut.js")(baseSetToString);module.exports=setToString},"./node_modules/lodash/_shortOut.js":module=>{var nativeNow=Date.now;module.exports=function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=16-(stamp-lastCalled);if(lastCalled=stamp,remaining>0){if(++count>=800)return arguments[0]}else count=0;return func.apply(void 0,arguments)}}},"./node_modules/lodash/constant.js":module=>{module.exports=function constant(value){return function(){return value}}},"./node_modules/lodash/isArrayLikeObject.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isArrayLike=__webpack_require__("./node_modules/lodash/isArrayLike.js"),isObjectLike=__webpack_require__("./node_modules/lodash/isObjectLike.js");module.exports=function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value)}},"./node_modules/lodash/isPlainObject.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseGetTag=__webpack_require__("./node_modules/lodash/_baseGetTag.js"),getPrototype=__webpack_require__("./node_modules/lodash/_getPrototype.js"),isObjectLike=__webpack_require__("./node_modules/lodash/isObjectLike.js"),funcProto=Function.prototype,objectProto=Object.prototype,funcToString=funcProto.toString,hasOwnProperty=objectProto.hasOwnProperty,objectCtorString=funcToString.call(Object);module.exports=function isPlainObject(value){if(!isObjectLike(value)||"[object Object]"!=baseGetTag(value))return!1;var proto=getPrototype(value);if(null===proto)return!0;var Ctor=hasOwnProperty.call(proto,"constructor")&&proto.constructor;return"function"==typeof Ctor&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString}},"./node_modules/lodash/keysIn.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayLikeKeys=__webpack_require__("./node_modules/lodash/_arrayLikeKeys.js"),baseKeysIn=__webpack_require__("./node_modules/lodash/_baseKeysIn.js"),isArrayLike=__webpack_require__("./node_modules/lodash/isArrayLike.js");module.exports=function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,!0):baseKeysIn(object)}},"./node_modules/lodash/mergeWith.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseMerge=__webpack_require__("./node_modules/lodash/_baseMerge.js"),mergeWith=__webpack_require__("./node_modules/lodash/_createAssigner.js")((function(object,source,srcIndex,customizer){baseMerge(object,source,srcIndex,customizer)}));module.exports=mergeWith},"./node_modules/lodash/toPlainObject.js":(module,__unused_webpack_exports,__webpack_require__)=>{var copyObject=__webpack_require__("./node_modules/lodash/_copyObject.js"),keysIn=__webpack_require__("./node_modules/lodash/keysIn.js");module.exports=function toPlainObject(value){return copyObject(value,keysIn(value))}}}]);