<<<<<<< HEAD
!function(global,factory){"object"==typeof exports&&"undefined"!=typeof module?module.exports=factory():"function"==typeof define&&define.amd?define(factory):(global="undefined"!=typeof globalThis?globalThis:global||self).Livewire=factory()}(this,(function(){"use strict";function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}function ownKeys$1(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys$1(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys$1(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _toArray(arr){return _arrayWithHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableRest()}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread()}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}function _toPropertyKey(arg){var key=_toPrimitive(arg,"string");return"symbol"==typeof key?key:String(key)}function debounce(func,wait,immediate){var timeout;return function(){var context=this,args=arguments,later=function(){timeout=null,immediate||func.apply(context,args)},callNow=immediate&&!timeout;clearTimeout(timeout),timeout=setTimeout(later,wait),callNow&&func.apply(context,args)}}function wireDirectives(el){return new DirectiveManager$1(el)}var DirectiveManager$1=function(){function DirectiveManager(el){_classCallCheck(this,DirectiveManager),this.el=el,this.directives=this.extractTypeModifiersAndValue()}return _createClass(DirectiveManager,[{key:"all",value:function(){return this.directives}},{key:"has",value:function(type){return this.directives.map((function(directive){return directive.type})).includes(type)}},{key:"missing",value:function(type){return!this.has(type)}},{key:"get",value:function(type){return this.directives.find((function(directive){return directive.type===type}))}},{key:"extractTypeModifiersAndValue",value:function(){var _this=this;return Array.from(this.el.getAttributeNames().filter((function(name){return name.match(new RegExp("wire:"))})).map((function(name){var _name$replace$split2=_toArray(name.replace(new RegExp("wire:"),"").split(".")),type=_name$replace$split2[0],modifiers=_name$replace$split2.slice(1);return new Directive(type,modifiers,name,_this.el)})))}}]),DirectiveManager}(),Directive=function(){function Directive(type,modifiers,rawName,el){_classCallCheck(this,Directive),this.type=type,this.modifiers=modifiers,this.rawName=rawName,this.el=el,this.eventContext}return _createClass(Directive,[{key:"setEventContext",value:function(context){this.eventContext=context}},{key:"value",get:function(){return this.el.getAttribute(this.rawName)}},{key:"method",get:function(){return this.parseOutMethodAndParams(this.value).method}},{key:"params",get:function(){return this.parseOutMethodAndParams(this.value).params}},{key:"durationOr",value:function(defaultDuration){var durationInMilliSeconds,durationInMilliSecondsString=this.modifiers.find((function(mod){return mod.match(/([0-9]+)ms/)})),durationInSecondsString=this.modifiers.find((function(mod){return mod.match(/([0-9]+)s/)}));return durationInMilliSecondsString?durationInMilliSeconds=Number(durationInMilliSecondsString.replace("ms","")):durationInSecondsString&&(durationInMilliSeconds=1e3*Number(durationInSecondsString.replace("s",""))),durationInMilliSeconds||defaultDuration}},{key:"parseOutMethodAndParams",value:function(rawMethod){var method=rawMethod,params=[],methodAndParamString=method.match(/([\s\S]*?)\(([\s\S]*)\)/);methodAndParamString&&(method=methodAndParamString[1],params=new Function("$event","return (function () {\n                for (var l=arguments.length, p=new Array(l), k=0; k<l; k++) {\n                    p[k] = arguments[k];\n                }\n                return [].concat(p);\n            })(".concat(methodAndParamString[2],")"))(this.eventContext));return{method:method,params:params}}},{key:"cardinalDirectionOr",value:function(){var fallback=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"right";return this.modifiers.includes("up")?"up":this.modifiers.includes("down")?"down":this.modifiers.includes("left")?"left":this.modifiers.includes("right")?"right":fallback}}]),Directive}();function walk(root,callback){if(!1!==callback(root))for(var node=root.firstElementChild;node;)walk(node,callback),node=node.nextElementSibling}function dispatch(eventName){var event=document.createEvent("Events");return event.initEvent(eventName,!0,!0),document.dispatchEvent(event),event}function getCsrfToken(){var _window$livewire_toke,tokenTag=document.head.querySelector('meta[name="csrf-token"]');return tokenTag?tokenTag.content:null!==(_window$livewire_toke=window.livewire_token)&&void 0!==_window$livewire_toke?_window$livewire_toke:void 0}function kebabCase(subject){return subject.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}
/*!
   * isobject <https://github.com/jonschlinkert/isobject>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */var isobject=function(val){return null!=val&&"object"==typeof val&&!1===Array.isArray(val)},getValue=function(target,path,options){if(isobject(options)||(options={default:options}),!isValidObject(target))return void 0!==options.default?options.default:target;"number"==typeof path&&(path=String(path));const isArray=Array.isArray(path),isString="string"==typeof path,splitChar=options.separator||".",joinChar=options.joinChar||("string"==typeof splitChar?splitChar:".");if(!isString&&!isArray)return target;if(isString&&path in target)return isValid(path,target,options)?target[path]:options.default;let segs=isArray?path:split$1(path,splitChar,options),len=segs.length,idx=0;do{let prop=segs[idx];for("number"==typeof prop&&(prop=String(prop));prop&&"\\"===prop.slice(-1);)prop=join([prop.slice(0,-1),segs[++idx]||""],joinChar,options);if(prop in target){if(!isValid(prop,target,options))return options.default;target=target[prop]}else{let hasProp=!1,n=idx+1;for(;n<len;)if(prop=join([prop,segs[n++]],joinChar,options),hasProp=prop in target){if(!isValid(prop,target,options))return options.default;target=target[prop],idx=n-1;break}if(!hasProp)return options.default}}while(++idx<len&&isValidObject(target));return idx===len?target:options.default};
/*!
   * get-value <https://github.com/jonschlinkert/get-value>
   *
   * Copyright (c) 2014-2018, Jon Schlinkert.
   * Released under the MIT License.
   */function join(segs,joinChar,options){return"function"==typeof options.join?options.join(segs):segs[0]+joinChar+segs[1]}function split$1(path,splitChar,options){return"function"==typeof options.split?options.split(path):path.split(splitChar)}function isValid(key,target,options){return"function"!=typeof options.isValid||options.isValid(key,target)}function isValidObject(val){return isobject(val)||Array.isArray(val)||"function"==typeof val}var _default$6=function(){function _default(el){var skipWatcher=arguments.length>1&&void 0!==arguments[1]&&arguments[1];_classCallCheck(this,_default),this.el=el,this.skipWatcher=skipWatcher,this.resolveCallback=function(){},this.rejectCallback=function(){},this.signature=(Math.random()+1).toString(36).substring(8)}return _createClass(_default,[{key:"toId",value:function(){return btoa(encodeURIComponent(this.el.outerHTML))}},{key:"onResolve",value:function(callback){this.resolveCallback=callback}},{key:"onReject",value:function(callback){this.rejectCallback=callback}},{key:"resolve",value:function(thing){this.resolveCallback(thing)}},{key:"reject",value:function(thing){this.rejectCallback(thing)}}]),_default}(),_default$5=function(_Action){_inherits(_default,_Action);var _super=_createSuper(_default);function _default(event,params,el){var _this;return _classCallCheck(this,_default),(_this=_super.call(this,el)).type="fireEvent",_this.payload={id:_this.signature,event:event,params:params},_this}return _createClass(_default,[{key:"toId",value:function(){return btoa(encodeURIComponent(this.type,this.payload.event,JSON.stringify(this.payload.params)))}}]),_default}(_default$6),MessageBus=function(){function MessageBus(){_classCallCheck(this,MessageBus),this.listeners={}}return _createClass(MessageBus,[{key:"register",value:function(name,callback){this.listeners[name]||(this.listeners[name]=[]),this.listeners[name].push(callback)}},{key:"call",value:function(name){for(var _len=arguments.length,params=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)params[_key-1]=arguments[_key];(this.listeners[name]||[]).forEach((function(callback){callback.apply(void 0,params)}))}},{key:"has",value:function(name){return Object.keys(this.listeners).includes(name)}}]),MessageBus}(),HookManager={availableHooks:["component.initialized","element.initialized","element.updating","element.updated","element.removed","message.sent","message.failed","message.received","message.processed","interceptWireModelSetValue","interceptWireModelAttachListener","beforeReplaceState","beforePushState"],bus:new MessageBus,register:function(name,callback){if(!this.availableHooks.includes(name))throw"Livewire: Referencing unknown hook: [".concat(name,"]");this.bus.register(name,callback)},call:function(name){for(var _this$bus,_len=arguments.length,params=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)params[_key-1]=arguments[_key];(_this$bus=this.bus).call.apply(_this$bus,[name].concat(params))}},DirectiveManager={directives:new MessageBus,register:function(name,callback){if(this.has(name))throw"Livewire: Directive already registered: [".concat(name,"]");this.directives.register(name,callback)},call:function(name,el,directive,component){this.directives.call(name,el,directive,component)},has:function(name){return this.directives.has(name)}},store$2={componentsById:{},listeners:new MessageBus,initialRenderIsFinished:!1,livewireIsInBackground:!1,livewireIsOffline:!1,sessionHasExpired:!1,sessionHasExpiredCallback:void 0,directives:DirectiveManager,hooks:HookManager,onErrorCallback:function(){},components:function(){var _this=this;return Object.keys(this.componentsById).map((function(key){return _this.componentsById[key]}))},addComponent:function(component){return this.componentsById[component.id]=component},findComponent:function(id){return this.componentsById[id]},getComponentsByName:function(name){return this.components().filter((function(component){return component.name===name}))},hasComponent:function(id){return!!this.componentsById[id]},tearDownComponents:function(){var _this2=this;this.components().forEach((function(component){_this2.removeComponent(component)}))},on:function(event,callback){this.listeners.register(event,callback)},emit:function(event){for(var _this$listeners,_len=arguments.length,params=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)params[_key-1]=arguments[_key];(_this$listeners=this.listeners).call.apply(_this$listeners,[event].concat(params)),this.componentsListeningForEvent(event).forEach((function(component){return component.addAction(new _default$5(event,params))}))},emitUp:function(el,event){for(var _len2=arguments.length,params=new Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++)params[_key2-2]=arguments[_key2];this.componentsListeningForEventThatAreTreeAncestors(el,event).forEach((function(component){return component.addAction(new _default$5(event,params))}))},emitSelf:function(componentId,event){var component=this.findComponent(componentId);if(component.listeners.includes(event)){for(var _len3=arguments.length,params=new Array(_len3>2?_len3-2:0),_key3=2;_key3<_len3;_key3++)params[_key3-2]=arguments[_key3];component.addAction(new _default$5(event,params))}},emitTo:function(componentName,event){for(var _len4=arguments.length,params=new Array(_len4>2?_len4-2:0),_key4=2;_key4<_len4;_key4++)params[_key4-2]=arguments[_key4];var components=this.getComponentsByName(componentName);components.forEach((function(component){component.listeners.includes(event)&&component.addAction(new _default$5(event,params))}))},componentsListeningForEventThatAreTreeAncestors:function(el,event){for(var parentIds=[],parent=el.parentElement.closest("[wire\\:id]");parent;)parentIds.push(parent.getAttribute("wire:id")),parent=parent.parentElement.closest("[wire\\:id]");return this.components().filter((function(component){return component.listeners.includes(event)&&parentIds.includes(component.id)}))},componentsListeningForEvent:function(event){return this.components().filter((function(component){return component.listeners.includes(event)}))},registerDirective:function(name,callback){this.directives.register(name,callback)},registerHook:function(name,callback){this.hooks.register(name,callback)},callHook:function(name){for(var _this$hooks,_len5=arguments.length,params=new Array(_len5>1?_len5-1:0),_key5=1;_key5<_len5;_key5++)params[_key5-1]=arguments[_key5];(_this$hooks=this.hooks).call.apply(_this$hooks,[name].concat(params))},changeComponentId:function(component,newId){var oldId=component.id;component.id=newId,component.fingerprint.id=newId,this.componentsById[newId]=component,delete this.componentsById[oldId],this.components().forEach((function(component){var children=component.serverMemo.children||{};Object.entries(children).forEach((function(_ref){var _ref2=_slicedToArray(_ref,2),key=_ref2[0],_ref2$=_ref2[1],id=_ref2$.id;_ref2$.tagName,id===oldId&&(children[key].id=newId)}))}))},removeComponent:function(component){component.tearDown(),delete this.componentsById[component.id]},onError:function(callback){this.onErrorCallback=callback},getClosestParentId:function(childId,subsetOfParentIds){var _this3=this,distancesByParentId={};subsetOfParentIds.forEach((function(parentId){var distance=_this3.getDistanceToChild(parentId,childId);distance&&(distancesByParentId[parentId]=distance)}));var closestParentId,smallestDistance=Math.min.apply(Math,_toConsumableArray(Object.values(distancesByParentId)));return Object.entries(distancesByParentId).forEach((function(_ref3){var _ref4=_slicedToArray(_ref3,2),parentId=_ref4[0];_ref4[1]===smallestDistance&&(closestParentId=parentId)})),closestParentId},getDistanceToChild:function(parentId,childId){var distanceMemo=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,parentComponent=this.findComponent(parentId);if(parentComponent){var childIds=parentComponent.childIds;if(childIds.includes(childId))return distanceMemo;for(var i=0;i<childIds.length;i++){var distance=this.getDistanceToChild(childIds[i],childId,distanceMemo+1);if(distance)return distance}}}},DOM={rootComponentElements:function(){return Array.from(document.querySelectorAll("[wire\\:id]"))},rootComponentElementsWithNoParents:function(){var node=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null===node&&(node=document);var allEls=Array.from(node.querySelectorAll("[wire\\:initial-data]")),onlyChildEls=Array.from(node.querySelectorAll("[wire\\:initial-data] [wire\\:initial-data]"));return allEls.filter((function(el){return!onlyChildEls.includes(el)}))},allModelElementsInside:function(root){return Array.from(root.querySelectorAll("[wire\\:model]"))},getByAttributeAndValue:function(attribute,value){return document.querySelector("[wire\\:".concat(attribute,'="').concat(value,'"]'))},nextFrame:function(fn){var _this=this;requestAnimationFrame((function(){requestAnimationFrame(fn.bind(_this))}))},closestRoot:function(el){return this.closestByAttribute(el,"id")},closestByAttribute:function(el,attribute){var closestEl=el.closest("[wire\\:".concat(attribute,"]"));if(!closestEl)throw"\nLivewire Error:\n\nCannot find parent element in DOM tree containing attribute: [wire:".concat(attribute,"].\n\nUsually this is caused by Livewire's DOM-differ not being able to properly track changes.\n\nReference the following guide for common causes: https://laravel-livewire.com/docs/troubleshooting \n\nReferenced element:\n\n").concat(el.outerHTML,"\n");return closestEl},isComponentRootEl:function(el){return this.hasAttribute(el,"id")},hasAttribute:function(el,attribute){return el.hasAttribute("wire:".concat(attribute))},getAttribute:function(el,attribute){return el.getAttribute("wire:".concat(attribute))},removeAttribute:function(el,attribute){return el.removeAttribute("wire:".concat(attribute))},setAttribute:function(el,attribute,value){return el.setAttribute("wire:".concat(attribute),value)},hasFocus:function(el){return el===document.activeElement},isInput:function(el){return["INPUT","TEXTAREA","SELECT"].includes(el.tagName.toUpperCase())},isTextInput:function(el){return["INPUT","TEXTAREA"].includes(el.tagName.toUpperCase())&&!["checkbox","radio"].includes(el.type)},valueFromInput:function(el,component){if("checkbox"===el.type){var modelName=wireDirectives(el).get("model").value,modelValue=component.deferredActions[modelName]?component.deferredActions[modelName].payload.value:getValue(component.data,modelName);return Array.isArray(modelValue)?this.mergeCheckboxValueIntoArray(el,modelValue):!!el.checked&&(el.getAttribute("value")||!0)}return"SELECT"===el.tagName&&el.multiple?this.getSelectValues(el):el.value},mergeCheckboxValueIntoArray:function(el,arrayValue){return el.checked?arrayValue.includes(el.value)?arrayValue:arrayValue.concat(el.value):arrayValue.filter((function(item){return item!=el.value}))},setInputValueFromModel:function(el,component){var modelString=wireDirectives(el).get("model").value,modelValue=getValue(component.data,modelString);"input"===el.tagName.toLowerCase()&&"file"===el.type||this.setInputValue(el,modelValue)},setInputValue:function(el,value){if(store$2.callHook("interceptWireModelSetValue",value,el),"radio"===el.type)el.checked=el.value==value;else if("checkbox"===el.type)if(Array.isArray(value)){var valueFound=!1;value.forEach((function(val){val==el.value&&(valueFound=!0)})),el.checked=valueFound}else el.checked=!!value;else"SELECT"===el.tagName?this.updateSelect(el,value):(value=void 0===value?"":value,el.value=value)},getSelectValues:function(el){return Array.from(el.options).filter((function(option){return option.selected})).map((function(option){return option.value||option.text}))},updateSelect:function(el,value){var arrayWrappedValue=[].concat(value).map((function(value){return value+""}));Array.from(el.options).forEach((function(option){option.selected=arrayWrappedValue.includes(option.value)}))}},fails=function(exec){try{return!!exec()}catch(error){return!0}},functionBindNative=!fails((function(){var test=function(){}.bind();return"function"!=typeof test||test.hasOwnProperty("prototype")})),FunctionPrototype$2=Function.prototype,call$2=FunctionPrototype$2.call,uncurryThisWithBind=functionBindNative&&FunctionPrototype$2.bind.bind(call$2,call$2),functionUncurryThis=functionBindNative?uncurryThisWithBind:function(fn){return function(){return call$2.apply(fn,arguments)}},ceil=Math.ceil,floor=Math.floor,mathTrunc=Math.trunc||function(x){var n=+x;return(n>0?floor:ceil)(n)},toIntegerOrInfinity=function(argument){var number=+argument;return number!=number||0===number?0:mathTrunc(number)},commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(fn,basedir,module){return module={path:basedir,exports:{},require:function(path,base){return commonjsRequire(path,null==base?module.path:base)}},fn(module,module.exports),module.exports}function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var check=function(it){return it&&it.Math==Math&&it},global_1=check("object"==typeof globalThis&&globalThis)||check("object"==typeof window&&window)||check("object"==typeof self&&self)||check("object"==typeof commonjsGlobal&&commonjsGlobal)||function(){return this}()||Function("return this")(),defineProperty$4=Object.defineProperty,defineGlobalProperty=function(key,value){try{defineProperty$4(global_1,key,{value:value,configurable:!0,writable:!0})}catch(error){global_1[key]=value}return value},SHARED="__core-js_shared__",store$1=global_1[SHARED]||defineGlobalProperty(SHARED,{}),sharedStore=store$1,shared=createCommonjsModule((function(module){(module.exports=function(key,value){return sharedStore[key]||(sharedStore[key]=void 0!==value?value:{})})("versions",[]).push({version:"3.27.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.27.1/LICENSE",source:"https://github.com/zloirock/core-js"})})),isNullOrUndefined=function(it){return null==it},$TypeError$e=TypeError,requireObjectCoercible=function(it){if(isNullOrUndefined(it))throw $TypeError$e("Can't call method on "+it);return it},$Object$4=Object,toObject=function(argument){return $Object$4(requireObjectCoercible(argument))},hasOwnProperty=functionUncurryThis({}.hasOwnProperty),hasOwnProperty_1=Object.hasOwn||function(it,key){return hasOwnProperty(toObject(it),key)},id=0,postfix=Math.random(),toString$1=functionUncurryThis(1..toString),uid=function(key){return"Symbol("+(void 0===key?"":key)+")_"+toString$1(++id+postfix,36)},documentAll$2="object"==typeof document&&document.all,IS_HTMLDDA=void 0===documentAll$2&&void 0!==documentAll$2,documentAll_1={all:documentAll$2,IS_HTMLDDA:IS_HTMLDDA},documentAll$1=documentAll_1.all,isCallable=documentAll_1.IS_HTMLDDA?function(argument){return"function"==typeof argument||argument===documentAll$1}:function(argument){return"function"==typeof argument},aFunction=function(argument){return isCallable(argument)?argument:void 0},getBuiltIn=function(namespace,method){return arguments.length<2?aFunction(global_1[namespace]):global_1[namespace]&&global_1[namespace][method]},engineUserAgent=getBuiltIn("navigator","userAgent")||"",process$3=global_1.process,Deno$1=global_1.Deno,versions=process$3&&process$3.versions||Deno$1&&Deno$1.version,v8=versions&&versions.v8,match,version;v8&&(match=v8.split("."),version=match[0]>0&&match[0]<4?1:+(match[0]+match[1])),!version&&engineUserAgent&&(match=engineUserAgent.match(/Edge\/(\d+)/),(!match||match[1]>=74)&&(match=engineUserAgent.match(/Chrome\/(\d+)/),match&&(version=+match[1])));var engineV8Version=version,symbolConstructorDetection=!!Object.getOwnPropertySymbols&&!fails((function(){var symbol=Symbol();return!String(symbol)||!(Object(symbol)instanceof Symbol)||!Symbol.sham&&engineV8Version&&engineV8Version<41})),useSymbolAsUid=symbolConstructorDetection&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,WellKnownSymbolsStore=shared("wks"),Symbol$1=global_1.Symbol,symbolFor=Symbol$1&&Symbol$1.for,createWellKnownSymbol=useSymbolAsUid?Symbol$1:Symbol$1&&Symbol$1.withoutSetter||uid,wellKnownSymbol=function(name){if(!hasOwnProperty_1(WellKnownSymbolsStore,name)||!symbolConstructorDetection&&"string"!=typeof WellKnownSymbolsStore[name]){var description="Symbol."+name;symbolConstructorDetection&&hasOwnProperty_1(Symbol$1,name)?WellKnownSymbolsStore[name]=Symbol$1[name]:WellKnownSymbolsStore[name]=useSymbolAsUid&&symbolFor?symbolFor(description):createWellKnownSymbol(description)}return WellKnownSymbolsStore[name]},TO_STRING_TAG$4=wellKnownSymbol("toStringTag"),test={};test[TO_STRING_TAG$4]="z";var toStringTagSupport="[object z]"===String(test),toString=functionUncurryThis({}.toString),stringSlice$2=functionUncurryThis("".slice),classofRaw=function(it){return stringSlice$2(toString(it),8,-1)},TO_STRING_TAG$3=wellKnownSymbol("toStringTag"),$Object$3=Object,CORRECT_ARGUMENTS="Arguments"==classofRaw(function(){return arguments}()),tryGet=function(it,key){try{return it[key]}catch(error){}},classof=toStringTagSupport?classofRaw:function(it){var O,tag,result;return void 0===it?"Undefined":null===it?"Null":"string"==typeof(tag=tryGet(O=$Object$3(it),TO_STRING_TAG$3))?tag:CORRECT_ARGUMENTS?classofRaw(O):"Object"==(result=classofRaw(O))&&isCallable(O.callee)?"Arguments":result},$String$3=String,toString_1=function(argument){if("Symbol"===classof(argument))throw TypeError("Cannot convert a Symbol value to a string");return $String$3(argument)},charAt$1=functionUncurryThis("".charAt),charCodeAt=functionUncurryThis("".charCodeAt),stringSlice$1=functionUncurryThis("".slice),createMethod$3=function(CONVERT_TO_STRING){return function($this,pos){var first,second,S=toString_1(requireObjectCoercible($this)),position=toIntegerOrInfinity(pos),size=S.length;return position<0||position>=size?CONVERT_TO_STRING?"":void 0:(first=charCodeAt(S,position))<55296||first>56319||position+1===size||(second=charCodeAt(S,position+1))<56320||second>57343?CONVERT_TO_STRING?charAt$1(S,position):first:CONVERT_TO_STRING?stringSlice$1(S,position,position+2):second-56320+(first-55296<<10)+65536}},stringMultibyte={codeAt:createMethod$3(!1),charAt:createMethod$3(!0)},WeakMap$1=global_1.WeakMap,weakMapBasicDetection=isCallable(WeakMap$1)&&/native code/.test(String(WeakMap$1)),documentAll=documentAll_1.all,isObject=documentAll_1.IS_HTMLDDA?function(it){return"object"==typeof it?null!==it:isCallable(it)||it===documentAll}:function(it){return"object"==typeof it?null!==it:isCallable(it)},descriptors=!fails((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),document$3=global_1.document,EXISTS$1=isObject(document$3)&&isObject(document$3.createElement),documentCreateElement=function(it){return EXISTS$1?document$3.createElement(it):{}},ie8DomDefine=!descriptors&&!fails((function(){return 7!=Object.defineProperty(documentCreateElement("div"),"a",{get:function(){return 7}}).a})),v8PrototypeDefineBug=descriptors&&fails((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),$String$2=String,$TypeError$d=TypeError,anObject=function(argument){if(isObject(argument))return argument;throw $TypeError$d($String$2(argument)+" is not an object")},call$1=Function.prototype.call,functionCall=functionBindNative?call$1.bind(call$1):function(){return call$1.apply(call$1,arguments)},objectIsPrototypeOf=functionUncurryThis({}.isPrototypeOf),$Object$2=Object,isSymbol=useSymbolAsUid?function(it){return"symbol"==typeof it}:function(it){var $Symbol=getBuiltIn("Symbol");return isCallable($Symbol)&&objectIsPrototypeOf($Symbol.prototype,$Object$2(it))},$String$1=String,tryToString=function(argument){try{return $String$1(argument)}catch(error){return"Object"}},$TypeError$c=TypeError,aCallable=function(argument){if(isCallable(argument))return argument;throw $TypeError$c(tryToString(argument)+" is not a function")},getMethod=function(V,P){var func=V[P];return isNullOrUndefined(func)?void 0:aCallable(func)},$TypeError$b=TypeError,ordinaryToPrimitive=function(input,pref){var fn,val;if("string"===pref&&isCallable(fn=input.toString)&&!isObject(val=functionCall(fn,input)))return val;if(isCallable(fn=input.valueOf)&&!isObject(val=functionCall(fn,input)))return val;if("string"!==pref&&isCallable(fn=input.toString)&&!isObject(val=functionCall(fn,input)))return val;throw $TypeError$b("Can't convert object to primitive value")},$TypeError$a=TypeError,TO_PRIMITIVE=wellKnownSymbol("toPrimitive"),toPrimitive=function(input,pref){if(!isObject(input)||isSymbol(input))return input;var result,exoticToPrim=getMethod(input,TO_PRIMITIVE);if(exoticToPrim){if(void 0===pref&&(pref="default"),result=functionCall(exoticToPrim,input,pref),!isObject(result)||isSymbol(result))return result;throw $TypeError$a("Can't convert object to primitive value")}return void 0===pref&&(pref="number"),ordinaryToPrimitive(input,pref)},toPropertyKey=function(argument){var key=toPrimitive(argument,"string");return isSymbol(key)?key:key+""},$TypeError$9=TypeError,$defineProperty=Object.defineProperty,$getOwnPropertyDescriptor$1=Object.getOwnPropertyDescriptor,ENUMERABLE="enumerable",CONFIGURABLE$1="configurable",WRITABLE="writable",f$6=descriptors?v8PrototypeDefineBug?function(O,P,Attributes){if(anObject(O),P=toPropertyKey(P),anObject(Attributes),"function"==typeof O&&"prototype"===P&&"value"in Attributes&&WRITABLE in Attributes&&!Attributes[WRITABLE]){var current=$getOwnPropertyDescriptor$1(O,P);current&&current[WRITABLE]&&(O[P]=Attributes.value,Attributes={configurable:CONFIGURABLE$1 in Attributes?Attributes[CONFIGURABLE$1]:current[CONFIGURABLE$1],enumerable:ENUMERABLE in Attributes?Attributes[ENUMERABLE]:current[ENUMERABLE],writable:!1})}return $defineProperty(O,P,Attributes)}:$defineProperty:function(O,P,Attributes){if(anObject(O),P=toPropertyKey(P),anObject(Attributes),ie8DomDefine)try{return $defineProperty(O,P,Attributes)}catch(error){}if("get"in Attributes||"set"in Attributes)throw $TypeError$9("Accessors not supported");return"value"in Attributes&&(O[P]=Attributes.value),O},objectDefineProperty={f:f$6},createPropertyDescriptor=function(bitmap,value){return{enumerable:!(1&bitmap),configurable:!(2&bitmap),writable:!(4&bitmap),value:value}},createNonEnumerableProperty=descriptors?function(object,key,value){return objectDefineProperty.f(object,key,createPropertyDescriptor(1,value))}:function(object,key,value){return object[key]=value,object},keys=shared("keys"),sharedKey=function(key){return keys[key]||(keys[key]=uid(key))},hiddenKeys$1={},OBJECT_ALREADY_INITIALIZED="Object already initialized",TypeError$2=global_1.TypeError,WeakMap=global_1.WeakMap,set$1,get,has,enforce=function(it){return has(it)?get(it):set$1(it,{})},getterFor=function(TYPE){return function(it){var state;if(!isObject(it)||(state=get(it)).type!==TYPE)throw TypeError$2("Incompatible receiver, "+TYPE+" required");return state}};if(weakMapBasicDetection||sharedStore.state){var store=sharedStore.state||(sharedStore.state=new WeakMap);store.get=store.get,store.has=store.has,store.set=store.set,set$1=function(it,metadata){if(store.has(it))throw TypeError$2(OBJECT_ALREADY_INITIALIZED);return metadata.facade=it,store.set(it,metadata),metadata},get=function(it){return store.get(it)||{}},has=function(it){return store.has(it)}}else{var STATE=sharedKey("state");hiddenKeys$1[STATE]=!0,set$1=function(it,metadata){if(hasOwnProperty_1(it,STATE))throw TypeError$2(OBJECT_ALREADY_INITIALIZED);return metadata.facade=it,createNonEnumerableProperty(it,STATE,metadata),metadata},get=function(it){return hasOwnProperty_1(it,STATE)?it[STATE]:{}},has=function(it){return hasOwnProperty_1(it,STATE)}}var internalState={set:set$1,get:get,has:has,enforce:enforce,getterFor:getterFor},$propertyIsEnumerable$1={}.propertyIsEnumerable,getOwnPropertyDescriptor$3=Object.getOwnPropertyDescriptor,NASHORN_BUG=getOwnPropertyDescriptor$3&&!$propertyIsEnumerable$1.call({1:2},1),f$5=NASHORN_BUG?function(V){var descriptor=getOwnPropertyDescriptor$3(this,V);return!!descriptor&&descriptor.enumerable}:$propertyIsEnumerable$1,objectPropertyIsEnumerable={f:f$5},$Object$1=Object,split=functionUncurryThis("".split),indexedObject=fails((function(){return!$Object$1("z").propertyIsEnumerable(0)}))?function(it){return"String"==classofRaw(it)?split(it,""):$Object$1(it)}:$Object$1,toIndexedObject=function(it){return indexedObject(requireObjectCoercible(it))},$getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,f$4=descriptors?$getOwnPropertyDescriptor:function(O,P){if(O=toIndexedObject(O),P=toPropertyKey(P),ie8DomDefine)try{return $getOwnPropertyDescriptor(O,P)}catch(error){}if(hasOwnProperty_1(O,P))return createPropertyDescriptor(!functionCall(objectPropertyIsEnumerable.f,O,P),O[P])},objectGetOwnPropertyDescriptor={f:f$4},FunctionPrototype$1=Function.prototype,getDescriptor=descriptors&&Object.getOwnPropertyDescriptor,EXISTS=hasOwnProperty_1(FunctionPrototype$1,"name"),PROPER=EXISTS&&"something"===function(){}.name,CONFIGURABLE=EXISTS&&(!descriptors||descriptors&&getDescriptor(FunctionPrototype$1,"name").configurable),functionName={EXISTS:EXISTS,PROPER:PROPER,CONFIGURABLE:CONFIGURABLE},functionToString=functionUncurryThis(Function.toString);isCallable(sharedStore.inspectSource)||(sharedStore.inspectSource=function(it){return functionToString(it)});var inspectSource=sharedStore.inspectSource,makeBuiltIn_1=createCommonjsModule((function(module){var CONFIGURABLE_FUNCTION_NAME=functionName.CONFIGURABLE,enforceInternalState=internalState.enforce,getInternalState=internalState.get,defineProperty=Object.defineProperty,CONFIGURABLE_LENGTH=descriptors&&!fails((function(){return 8!==defineProperty((function(){}),"length",{value:8}).length})),TEMPLATE=String(String).split("String"),makeBuiltIn=module.exports=function(value,name,options){"Symbol("===String(name).slice(0,7)&&(name="["+String(name).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),options&&options.getter&&(name="get "+name),options&&options.setter&&(name="set "+name),(!hasOwnProperty_1(value,"name")||CONFIGURABLE_FUNCTION_NAME&&value.name!==name)&&(descriptors?defineProperty(value,"name",{value:name,configurable:!0}):value.name=name),CONFIGURABLE_LENGTH&&options&&hasOwnProperty_1(options,"arity")&&value.length!==options.arity&&defineProperty(value,"length",{value:options.arity});try{options&&hasOwnProperty_1(options,"constructor")&&options.constructor?descriptors&&defineProperty(value,"prototype",{writable:!1}):value.prototype&&(value.prototype=void 0)}catch(error){}var state=enforceInternalState(value);return hasOwnProperty_1(state,"source")||(state.source=TEMPLATE.join("string"==typeof name?name:"")),value};Function.prototype.toString=makeBuiltIn((function(){return isCallable(this)&&getInternalState(this).source||inspectSource(this)}),"toString")})),defineBuiltIn=function(O,key,value,options){options||(options={});var simple=options.enumerable,name=void 0!==options.name?options.name:key;if(isCallable(value)&&makeBuiltIn_1(value,name,options),options.global)simple?O[key]=value:defineGlobalProperty(key,value);else{try{options.unsafe?O[key]&&(simple=!0):delete O[key]}catch(error){}simple?O[key]=value:objectDefineProperty.f(O,key,{value:value,enumerable:!1,configurable:!options.nonConfigurable,writable:!options.nonWritable})}return O},max=Math.max,min$2=Math.min,toAbsoluteIndex=function(index,length){var integer=toIntegerOrInfinity(index);return integer<0?max(integer+length,0):min$2(integer,length)},min$1=Math.min,toLength=function(argument){return argument>0?min$1(toIntegerOrInfinity(argument),9007199254740991):0},lengthOfArrayLike=function(obj){return toLength(obj.length)},createMethod$2=function(IS_INCLUDES){return function($this,el,fromIndex){var value,O=toIndexedObject($this),length=lengthOfArrayLike(O),index=toAbsoluteIndex(fromIndex,length);if(IS_INCLUDES&&el!=el){for(;length>index;)if((value=O[index++])!=value)return!0}else for(;length>index;index++)if((IS_INCLUDES||index in O)&&O[index]===el)return IS_INCLUDES||index||0;return!IS_INCLUDES&&-1}},arrayIncludes={includes:createMethod$2(!0),indexOf:createMethod$2(!1)},indexOf=arrayIncludes.indexOf,push$3=functionUncurryThis([].push),objectKeysInternal=function(object,names){var key,O=toIndexedObject(object),i=0,result=[];for(key in O)!hasOwnProperty_1(hiddenKeys$1,key)&&hasOwnProperty_1(O,key)&&push$3(result,key);for(;names.length>i;)hasOwnProperty_1(O,key=names[i++])&&(~indexOf(result,key)||push$3(result,key));return result},enumBugKeys=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],hiddenKeys=enumBugKeys.concat("length","prototype"),f$3=Object.getOwnPropertyNames||function(O){return objectKeysInternal(O,hiddenKeys)},objectGetOwnPropertyNames={f:f$3},f$2=Object.getOwnPropertySymbols,objectGetOwnPropertySymbols={f:f$2},concat$1=functionUncurryThis([].concat),ownKeys=getBuiltIn("Reflect","ownKeys")||function(it){var keys=objectGetOwnPropertyNames.f(anObject(it)),getOwnPropertySymbols=objectGetOwnPropertySymbols.f;return getOwnPropertySymbols?concat$1(keys,getOwnPropertySymbols(it)):keys},copyConstructorProperties=function(target,source,exceptions){for(var keys=ownKeys(source),defineProperty=objectDefineProperty.f,getOwnPropertyDescriptor=objectGetOwnPropertyDescriptor.f,i=0;i<keys.length;i++){var key=keys[i];hasOwnProperty_1(target,key)||exceptions&&hasOwnProperty_1(exceptions,key)||defineProperty(target,key,getOwnPropertyDescriptor(source,key))}},replacement=/#|\.prototype\./,isForced=function(feature,detection){var value=data[normalize(feature)];return value==POLYFILL||value!=NATIVE&&(isCallable(detection)?fails(detection):!!detection)},normalize=isForced.normalize=function(string){return String(string).replace(replacement,".").toLowerCase()},data=isForced.data={},NATIVE=isForced.NATIVE="N",POLYFILL=isForced.POLYFILL="P",isForced_1=isForced,getOwnPropertyDescriptor$2=objectGetOwnPropertyDescriptor.f,_export=function(options,source){var target,key,targetProperty,sourceProperty,descriptor,TARGET=options.target,GLOBAL=options.global,STATIC=options.stat;if(target=GLOBAL?global_1:STATIC?global_1[TARGET]||defineGlobalProperty(TARGET,{}):(global_1[TARGET]||{}).prototype)for(key in source){if(sourceProperty=source[key],targetProperty=options.dontCallGetSet?(descriptor=getOwnPropertyDescriptor$2(target,key))&&descriptor.value:target[key],!isForced_1(GLOBAL?key:TARGET+(STATIC?".":"#")+key,options.forced)&&void 0!==targetProperty){if(typeof sourceProperty==typeof targetProperty)continue;copyConstructorProperties(sourceProperty,targetProperty)}(options.sham||targetProperty&&targetProperty.sham)&&createNonEnumerableProperty(sourceProperty,"sham",!0),defineBuiltIn(target,key,sourceProperty,options)}},objectKeys=Object.keys||function(O){return objectKeysInternal(O,enumBugKeys)},f$1=descriptors&&!v8PrototypeDefineBug?Object.defineProperties:function(O,Properties){anObject(O);for(var key,props=toIndexedObject(Properties),keys=objectKeys(Properties),length=keys.length,index=0;length>index;)objectDefineProperty.f(O,key=keys[index++],props[key]);return O},objectDefineProperties={f:f$1},html=getBuiltIn("document","documentElement"),GT=">",LT="<",PROTOTYPE="prototype",SCRIPT="script",IE_PROTO$1=sharedKey("IE_PROTO"),EmptyConstructor=function(){},scriptTag=function(content){return LT+SCRIPT+GT+content+LT+"/"+SCRIPT+GT},NullProtoObjectViaActiveX=function(activeXDocument){activeXDocument.write(scriptTag("")),activeXDocument.close();var temp=activeXDocument.parentWindow.Object;return activeXDocument=null,temp},NullProtoObjectViaIFrame=function(){var iframeDocument,iframe=documentCreateElement("iframe"),JS="java"+SCRIPT+":";return iframe.style.display="none",html.appendChild(iframe),iframe.src=String(JS),(iframeDocument=iframe.contentWindow.document).open(),iframeDocument.write(scriptTag("document.F=Object")),iframeDocument.close(),iframeDocument.F},activeXDocument,NullProtoObject=function(){try{activeXDocument=new ActiveXObject("htmlfile")}catch(error){}NullProtoObject="undefined"!=typeof document?document.domain&&activeXDocument?NullProtoObjectViaActiveX(activeXDocument):NullProtoObjectViaIFrame():NullProtoObjectViaActiveX(activeXDocument);for(var length=enumBugKeys.length;length--;)delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];return NullProtoObject()};hiddenKeys$1[IE_PROTO$1]=!0;var objectCreate=Object.create||function(O,Properties){var result;return null!==O?(EmptyConstructor[PROTOTYPE]=anObject(O),result=new EmptyConstructor,EmptyConstructor[PROTOTYPE]=null,result[IE_PROTO$1]=O):result=NullProtoObject(),void 0===Properties?result:objectDefineProperties.f(result,Properties)},correctPrototypeGetter=!fails((function(){function F(){}return F.prototype.constructor=null,Object.getPrototypeOf(new F)!==F.prototype})),IE_PROTO=sharedKey("IE_PROTO"),$Object=Object,ObjectPrototype=$Object.prototype,objectGetPrototypeOf=correctPrototypeGetter?$Object.getPrototypeOf:function(O){var object=toObject(O);if(hasOwnProperty_1(object,IE_PROTO))return object[IE_PROTO];var constructor=object.constructor;return isCallable(constructor)&&object instanceof constructor?constructor.prototype:object instanceof $Object?ObjectPrototype:null},ITERATOR$5=wellKnownSymbol("iterator"),BUGGY_SAFARI_ITERATORS$1=!1,IteratorPrototype$2,PrototypeOfArrayIteratorPrototype,arrayIterator;[].keys&&(arrayIterator=[].keys(),"next"in arrayIterator?(PrototypeOfArrayIteratorPrototype=objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator)),PrototypeOfArrayIteratorPrototype!==Object.prototype&&(IteratorPrototype$2=PrototypeOfArrayIteratorPrototype)):BUGGY_SAFARI_ITERATORS$1=!0);var NEW_ITERATOR_PROTOTYPE=!isObject(IteratorPrototype$2)||fails((function(){var test={};return IteratorPrototype$2[ITERATOR$5].call(test)!==test}));NEW_ITERATOR_PROTOTYPE&&(IteratorPrototype$2={}),isCallable(IteratorPrototype$2[ITERATOR$5])||defineBuiltIn(IteratorPrototype$2,ITERATOR$5,(function(){return this}));var iteratorsCore={IteratorPrototype:IteratorPrototype$2,BUGGY_SAFARI_ITERATORS:BUGGY_SAFARI_ITERATORS$1},defineProperty$3=objectDefineProperty.f,TO_STRING_TAG$2=wellKnownSymbol("toStringTag"),setToStringTag=function(target,TAG,STATIC){target&&!STATIC&&(target=target.prototype),target&&!hasOwnProperty_1(target,TO_STRING_TAG$2)&&defineProperty$3(target,TO_STRING_TAG$2,{configurable:!0,value:TAG})},iterators={},IteratorPrototype$1=iteratorsCore.IteratorPrototype,returnThis$1=function(){return this},iteratorCreateConstructor=function(IteratorConstructor,NAME,next,ENUMERABLE_NEXT){var TO_STRING_TAG=NAME+" Iterator";return IteratorConstructor.prototype=objectCreate(IteratorPrototype$1,{next:createPropertyDescriptor(+!ENUMERABLE_NEXT,next)}),setToStringTag(IteratorConstructor,TO_STRING_TAG,!1),iterators[TO_STRING_TAG]=returnThis$1,IteratorConstructor},$String=String,$TypeError$8=TypeError,aPossiblePrototype=function(argument){if("object"==typeof argument||isCallable(argument))return argument;throw $TypeError$8("Can't set "+$String(argument)+" as a prototype")},objectSetPrototypeOf=Object.setPrototypeOf||("__proto__"in{}?function(){var setter,CORRECT_SETTER=!1,test={};try{(setter=functionUncurryThis(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(test,[]),CORRECT_SETTER=test instanceof Array}catch(error){}return function(O,proto){return anObject(O),aPossiblePrototype(proto),CORRECT_SETTER?setter(O,proto):O.__proto__=proto,O}}():void 0),PROPER_FUNCTION_NAME=functionName.PROPER,CONFIGURABLE_FUNCTION_NAME=functionName.CONFIGURABLE,IteratorPrototype=iteratorsCore.IteratorPrototype,BUGGY_SAFARI_ITERATORS=iteratorsCore.BUGGY_SAFARI_ITERATORS,ITERATOR$4=wellKnownSymbol("iterator"),KEYS="keys",VALUES="values",ENTRIES="entries",returnThis=function(){return this},iteratorDefine=function(Iterable,NAME,IteratorConstructor,next,DEFAULT,IS_SET,FORCED){iteratorCreateConstructor(IteratorConstructor,NAME,next);var CurrentIteratorPrototype,methods,KEY,getIterationMethod=function(KIND){if(KIND===DEFAULT&&defaultIterator)return defaultIterator;if(!BUGGY_SAFARI_ITERATORS&&KIND in IterablePrototype)return IterablePrototype[KIND];switch(KIND){case KEYS:case VALUES:case ENTRIES:return function(){return new IteratorConstructor(this,KIND)}}return function(){return new IteratorConstructor(this)}},TO_STRING_TAG=NAME+" Iterator",INCORRECT_VALUES_NAME=!1,IterablePrototype=Iterable.prototype,nativeIterator=IterablePrototype[ITERATOR$4]||IterablePrototype["@@iterator"]||DEFAULT&&IterablePrototype[DEFAULT],defaultIterator=!BUGGY_SAFARI_ITERATORS&&nativeIterator||getIterationMethod(DEFAULT),anyNativeIterator="Array"==NAME&&IterablePrototype.entries||nativeIterator;if(anyNativeIterator&&(CurrentIteratorPrototype=objectGetPrototypeOf(anyNativeIterator.call(new Iterable)))!==Object.prototype&&CurrentIteratorPrototype.next&&(objectGetPrototypeOf(CurrentIteratorPrototype)!==IteratorPrototype&&(objectSetPrototypeOf?objectSetPrototypeOf(CurrentIteratorPrototype,IteratorPrototype):isCallable(CurrentIteratorPrototype[ITERATOR$4])||defineBuiltIn(CurrentIteratorPrototype,ITERATOR$4,returnThis)),setToStringTag(CurrentIteratorPrototype,TO_STRING_TAG,!0)),PROPER_FUNCTION_NAME&&DEFAULT==VALUES&&nativeIterator&&nativeIterator.name!==VALUES&&(CONFIGURABLE_FUNCTION_NAME?createNonEnumerableProperty(IterablePrototype,"name",VALUES):(INCORRECT_VALUES_NAME=!0,defaultIterator=function(){return functionCall(nativeIterator,this)})),DEFAULT)if(methods={values:getIterationMethod(VALUES),keys:IS_SET?defaultIterator:getIterationMethod(KEYS),entries:getIterationMethod(ENTRIES)},FORCED)for(KEY in methods)(BUGGY_SAFARI_ITERATORS||INCORRECT_VALUES_NAME||!(KEY in IterablePrototype))&&defineBuiltIn(IterablePrototype,KEY,methods[KEY]);else _export({target:NAME,proto:!0,forced:BUGGY_SAFARI_ITERATORS||INCORRECT_VALUES_NAME},methods);return IterablePrototype[ITERATOR$4]!==defaultIterator&&defineBuiltIn(IterablePrototype,ITERATOR$4,defaultIterator,{name:DEFAULT}),iterators[NAME]=defaultIterator,methods},createIterResultObject=function(value,done){return{value:value,done:done}},charAt=stringMultibyte.charAt,STRING_ITERATOR="String Iterator",setInternalState$2=internalState.set,getInternalState$1=internalState.getterFor(STRING_ITERATOR);iteratorDefine(String,"String",(function(iterated){setInternalState$2(this,{type:STRING_ITERATOR,string:toString_1(iterated),index:0})}),(function(){var point,state=getInternalState$1(this),string=state.string,index=state.index;return index>=string.length?createIterResultObject(void 0,!0):(point=charAt(string,index),state.index+=point.length,createIterResultObject(point,!1))}));var functionUncurryThisClause=function(fn){if("Function"===classofRaw(fn))return functionUncurryThis(fn)},bind$1=functionUncurryThisClause(functionUncurryThisClause.bind),functionBindContext=function(fn,that){return aCallable(fn),void 0===that?fn:functionBindNative?bind$1(fn,that):function(){return fn.apply(that,arguments)}},iteratorClose=function(iterator,kind,value){var innerResult,innerError;anObject(iterator);try{if(!(innerResult=getMethod(iterator,"return"))){if("throw"===kind)throw value;return value}innerResult=functionCall(innerResult,iterator)}catch(error){innerError=!0,innerResult=error}if("throw"===kind)throw value;if(innerError)throw innerResult;return anObject(innerResult),value},callWithSafeIterationClosing=function(iterator,fn,value,ENTRIES){try{return ENTRIES?fn(anObject(value)[0],value[1]):fn(value)}catch(error){iteratorClose(iterator,"throw",error)}},ITERATOR$3=wellKnownSymbol("iterator"),ArrayPrototype$1=Array.prototype,isArrayIteratorMethod=function(it){return void 0!==it&&(iterators.Array===it||ArrayPrototype$1[ITERATOR$3]===it)},noop$1=function(){},empty=[],construct=getBuiltIn("Reflect","construct"),constructorRegExp=/^\s*(?:class|function)\b/,exec=functionUncurryThis(constructorRegExp.exec),INCORRECT_TO_STRING=!constructorRegExp.exec(noop$1),isConstructorModern=function(argument){if(!isCallable(argument))return!1;try{return construct(noop$1,empty,argument),!0}catch(error){return!1}},isConstructorLegacy=function(argument){if(!isCallable(argument))return!1;switch(classof(argument)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return INCORRECT_TO_STRING||!!exec(constructorRegExp,inspectSource(argument))}catch(error){return!0}};isConstructorLegacy.sham=!0;var isConstructor=!construct||fails((function(){var called;return isConstructorModern(isConstructorModern.call)||!isConstructorModern(Object)||!isConstructorModern((function(){called=!0}))||called}))?isConstructorLegacy:isConstructorModern,createProperty=function(object,key,value){var propertyKey=toPropertyKey(key);propertyKey in object?objectDefineProperty.f(object,propertyKey,createPropertyDescriptor(0,value)):object[propertyKey]=value},ITERATOR$2=wellKnownSymbol("iterator"),getIteratorMethod=function(it){if(!isNullOrUndefined(it))return getMethod(it,ITERATOR$2)||getMethod(it,"@@iterator")||iterators[classof(it)]},$TypeError$7=TypeError,getIterator=function(argument,usingIterator){var iteratorMethod=arguments.length<2?getIteratorMethod(argument):usingIterator;if(aCallable(iteratorMethod))return anObject(functionCall(iteratorMethod,argument));throw $TypeError$7(tryToString(argument)+" is not iterable")},$Array$1=Array,arrayFrom=function(arrayLike){var O=toObject(arrayLike),IS_CONSTRUCTOR=isConstructor(this),argumentsLength=arguments.length,mapfn=argumentsLength>1?arguments[1]:void 0,mapping=void 0!==mapfn;mapping&&(mapfn=functionBindContext(mapfn,argumentsLength>2?arguments[2]:void 0));var length,result,step,iterator,next,value,iteratorMethod=getIteratorMethod(O),index=0;if(!iteratorMethod||this===$Array$1&&isArrayIteratorMethod(iteratorMethod))for(length=lengthOfArrayLike(O),result=IS_CONSTRUCTOR?new this(length):$Array$1(length);length>index;index++)value=mapping?mapfn(O[index],index):O[index],createProperty(result,index,value);else for(next=(iterator=getIterator(O,iteratorMethod)).next,result=IS_CONSTRUCTOR?new this:[];!(step=functionCall(next,iterator)).done;index++)value=mapping?callWithSafeIterationClosing(iterator,mapfn,[step.value,index],!0):step.value,createProperty(result,index,value);return result.length=index,result},ITERATOR$1=wellKnownSymbol("iterator"),SAFE_CLOSING=!1;try{var called=0,iteratorWithReturn={next:function(){return{done:!!called++}},return:function(){SAFE_CLOSING=!0}};iteratorWithReturn[ITERATOR$1]=function(){return this},Array.from(iteratorWithReturn,(function(){throw 2}))}catch(error){}var checkCorrectnessOfIteration=function(exec,SKIP_CLOSING){if(!SKIP_CLOSING&&!SAFE_CLOSING)return!1;var ITERATION_SUPPORT=!1;try{var object={};object[ITERATOR$1]=function(){return{next:function(){return{done:ITERATION_SUPPORT=!0}}}},exec(object)}catch(error){}return ITERATION_SUPPORT},INCORRECT_ITERATION=!checkCorrectnessOfIteration((function(iterable){Array.from(iterable)}));_export({target:"Array",stat:!0,forced:INCORRECT_ITERATION},{from:arrayFrom});var path=global_1;path.Array.from;var defineProperty$2=objectDefineProperty.f,UNSCOPABLES=wellKnownSymbol("unscopables"),ArrayPrototype=Array.prototype;null==ArrayPrototype[UNSCOPABLES]&&defineProperty$2(ArrayPrototype,UNSCOPABLES,{configurable:!0,value:objectCreate(null)});var addToUnscopables=function(key){ArrayPrototype[UNSCOPABLES][key]=!0},$includes=arrayIncludes.includes,BROKEN_ON_SPARSE=fails((function(){return!Array(1).includes()}));_export({target:"Array",proto:!0,forced:BROKEN_ON_SPARSE},{includes:function(el){return $includes(this,el,arguments.length>1?arguments[1]:void 0)}}),addToUnscopables("includes");var entryUnbind=function(CONSTRUCTOR,METHOD){return functionUncurryThis(global_1[CONSTRUCTOR].prototype[METHOD])};entryUnbind("Array","includes");var isArray=Array.isArray||function(argument){return"Array"==classofRaw(argument)},$TypeError$6=TypeError,MAX_SAFE_INTEGER=9007199254740991,doesNotExceedSafeInteger=function(it){if(it>MAX_SAFE_INTEGER)throw $TypeError$6("Maximum allowed index exceeded");return it},flattenIntoArray=function(target,original,source,sourceLen,start,depth,mapper,thisArg){for(var element,elementLen,targetIndex=start,sourceIndex=0,mapFn=!!mapper&&functionBindContext(mapper,thisArg);sourceIndex<sourceLen;)sourceIndex in source&&(element=mapFn?mapFn(source[sourceIndex],sourceIndex,original):source[sourceIndex],depth>0&&isArray(element)?(elementLen=lengthOfArrayLike(element),targetIndex=flattenIntoArray(target,original,element,elementLen,targetIndex,depth-1)-1):(doesNotExceedSafeInteger(targetIndex+1),target[targetIndex]=element),targetIndex++),sourceIndex++;return targetIndex},flattenIntoArray_1=flattenIntoArray,SPECIES$3=wellKnownSymbol("species"),$Array=Array,arraySpeciesConstructor=function(originalArray){var C;return isArray(originalArray)&&(C=originalArray.constructor,(isConstructor(C)&&(C===$Array||isArray(C.prototype))||isObject(C)&&null===(C=C[SPECIES$3]))&&(C=void 0)),void 0===C?$Array:C},arraySpeciesCreate=function(originalArray,length){return new(arraySpeciesConstructor(originalArray))(0===length?0:length)};_export({target:"Array",proto:!0},{flat:function(){var depthArg=arguments.length?arguments[0]:void 0,O=toObject(this),sourceLen=lengthOfArrayLike(O),A=arraySpeciesCreate(O,0);return A.length=flattenIntoArray_1(A,O,O,sourceLen,0,void 0===depthArg?1:toIntegerOrInfinity(depthArg)),A}}),addToUnscopables("flat"),entryUnbind("Array","flat");var push$2=functionUncurryThis([].push),createMethod$1=function(TYPE){var IS_MAP=1==TYPE,IS_FILTER=2==TYPE,IS_SOME=3==TYPE,IS_EVERY=4==TYPE,IS_FIND_INDEX=6==TYPE,IS_FILTER_REJECT=7==TYPE,NO_HOLES=5==TYPE||IS_FIND_INDEX;return function($this,callbackfn,that,specificCreate){for(var value,result,O=toObject($this),self=indexedObject(O),boundFunction=functionBindContext(callbackfn,that),length=lengthOfArrayLike(self),index=0,create=specificCreate||arraySpeciesCreate,target=IS_MAP?create($this,length):IS_FILTER||IS_FILTER_REJECT?create($this,0):void 0;length>index;index++)if((NO_HOLES||index in self)&&(result=boundFunction(value=self[index],index,O),TYPE))if(IS_MAP)target[index]=result;else if(result)switch(TYPE){case 3:return!0;case 5:return value;case 6:return index;case 2:push$2(target,value)}else switch(TYPE){case 4:return!1;case 7:push$2(target,value)}return IS_FIND_INDEX?-1:IS_SOME||IS_EVERY?IS_EVERY:target}},arrayIteration={forEach:createMethod$1(0),map:createMethod$1(1),filter:createMethod$1(2),some:createMethod$1(3),every:createMethod$1(4),find:createMethod$1(5),findIndex:createMethod$1(6),filterReject:createMethod$1(7)},$find=arrayIteration.find,FIND="find",SKIPS_HOLES=!0;FIND in[]&&Array(1)[FIND]((function(){SKIPS_HOLES=!1})),_export({target:"Array",proto:!0,forced:SKIPS_HOLES},{find:function(callbackfn){return $find(this,callbackfn,arguments.length>1?arguments[1]:void 0)}}),addToUnscopables(FIND),entryUnbind("Array","find");var $assign=Object.assign,defineProperty$1=Object.defineProperty,concat=functionUncurryThis([].concat),objectAssign=!$assign||fails((function(){if(descriptors&&1!==$assign({b:1},$assign(defineProperty$1({},"a",{enumerable:!0,get:function(){defineProperty$1(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var A={},B={},symbol=Symbol();return A[symbol]=7,"abcdefghijklmnopqrst".split("").forEach((function(chr){B[chr]=chr})),7!=$assign({},A)[symbol]||"abcdefghijklmnopqrst"!=objectKeys($assign({},B)).join("")}))?function(target,source){for(var T=toObject(target),argumentsLength=arguments.length,index=1,getOwnPropertySymbols=objectGetOwnPropertySymbols.f,propertyIsEnumerable=objectPropertyIsEnumerable.f;argumentsLength>index;)for(var key,S=indexedObject(arguments[index++]),keys=getOwnPropertySymbols?concat(objectKeys(S),getOwnPropertySymbols(S)):objectKeys(S),length=keys.length,j=0;length>j;)key=keys[j++],descriptors&&!functionCall(propertyIsEnumerable,S,key)||(T[key]=S[key]);return T}:$assign;_export({target:"Object",stat:!0,arity:2,forced:Object.assign!==objectAssign},{assign:objectAssign}),path.Object.assign;var $propertyIsEnumerable=objectPropertyIsEnumerable.f,propertyIsEnumerable=functionUncurryThis($propertyIsEnumerable),push$1=functionUncurryThis([].push),createMethod=function(TO_ENTRIES){return function(it){for(var key,O=toIndexedObject(it),keys=objectKeys(O),length=keys.length,i=0,result=[];length>i;)key=keys[i++],descriptors&&!propertyIsEnumerable(O,key)||push$1(result,TO_ENTRIES?[key,O[key]]:O[key]);return result}},objectToArray={entries:createMethod(!0),values:createMethod(!1)},$entries=objectToArray.entries;_export({target:"Object",stat:!0},{entries:function(O){return $entries(O)}}),path.Object.entries;var $values=objectToArray.values;_export({target:"Object",stat:!0},{values:function(O){return $values(O)}}),path.Object.values;var $Error$1=Error,replace=functionUncurryThis("".replace),TEST=String($Error$1("zxcasd").stack),V8_OR_CHAKRA_STACK_ENTRY=/\n\s*at [^:]*:[^\n]*/,IS_V8_OR_CHAKRA_STACK=V8_OR_CHAKRA_STACK_ENTRY.test(TEST),errorStackClear=function(stack,dropEntries){if(IS_V8_OR_CHAKRA_STACK&&"string"==typeof stack&&!$Error$1.prepareStackTrace)for(;dropEntries--;)stack=replace(stack,V8_OR_CHAKRA_STACK_ENTRY,"");return stack},installErrorCause=function(O,options){isObject(options)&&"cause"in options&&createNonEnumerableProperty(O,"cause",options.cause)},$TypeError$5=TypeError,Result=function(stopped,result){this.stopped=stopped,this.result=result},ResultPrototype=Result.prototype,iterate=function(iterable,unboundFunction,options){var iterator,iterFn,index,length,result,next,step,that=options&&options.that,AS_ENTRIES=!(!options||!options.AS_ENTRIES),IS_RECORD=!(!options||!options.IS_RECORD),IS_ITERATOR=!(!options||!options.IS_ITERATOR),INTERRUPTED=!(!options||!options.INTERRUPTED),fn=functionBindContext(unboundFunction,that),stop=function(condition){return iterator&&iteratorClose(iterator,"normal",condition),new Result(!0,condition)},callFn=function(value){return AS_ENTRIES?(anObject(value),INTERRUPTED?fn(value[0],value[1],stop):fn(value[0],value[1])):INTERRUPTED?fn(value,stop):fn(value)};if(IS_RECORD)iterator=iterable.iterator;else if(IS_ITERATOR)iterator=iterable;else{if(!(iterFn=getIteratorMethod(iterable)))throw $TypeError$5(tryToString(iterable)+" is not iterable");if(isArrayIteratorMethod(iterFn)){for(index=0,length=lengthOfArrayLike(iterable);length>index;index++)if((result=callFn(iterable[index]))&&objectIsPrototypeOf(ResultPrototype,result))return result;return new Result(!1)}iterator=getIterator(iterable,iterFn)}for(next=IS_RECORD?iterable.next:iterator.next;!(step=functionCall(next,iterator)).done;){try{result=callFn(step.value)}catch(error){iteratorClose(iterator,"throw",error)}if("object"==typeof result&&result&&objectIsPrototypeOf(ResultPrototype,result))return result}return new Result(!1)},normalizeStringArgument=function(argument,$default){return void 0===argument?arguments.length<2?"":$default:toString_1(argument)},errorStackInstallable=!fails((function(){var error=Error("a");return!("stack"in error)||(Object.defineProperty(error,"stack",createPropertyDescriptor(1,7)),7!==error.stack)})),TO_STRING_TAG$1=wellKnownSymbol("toStringTag"),$Error=Error,push=[].push,$AggregateError=function(errors,message){var that,options=arguments.length>2?arguments[2]:void 0,isInstance=objectIsPrototypeOf(AggregateErrorPrototype,this);objectSetPrototypeOf?that=objectSetPrototypeOf($Error(),isInstance?objectGetPrototypeOf(this):AggregateErrorPrototype):(that=isInstance?this:objectCreate(AggregateErrorPrototype),createNonEnumerableProperty(that,TO_STRING_TAG$1,"Error")),void 0!==message&&createNonEnumerableProperty(that,"message",normalizeStringArgument(message)),errorStackInstallable&&createNonEnumerableProperty(that,"stack",errorStackClear(that.stack,1)),installErrorCause(that,options);var errorsArray=[];return iterate(errors,push,{that:errorsArray}),createNonEnumerableProperty(that,"errors",errorsArray),that};objectSetPrototypeOf?objectSetPrototypeOf($AggregateError,$Error):copyConstructorProperties($AggregateError,$Error,{name:!0});var AggregateErrorPrototype=$AggregateError.prototype=objectCreate($Error.prototype,{constructor:createPropertyDescriptor(1,$AggregateError),message:createPropertyDescriptor(1,""),name:createPropertyDescriptor(1,"AggregateError")});_export({global:!0,constructor:!0,arity:2},{AggregateError:$AggregateError});var defineProperty=objectDefineProperty.f,ARRAY_ITERATOR="Array Iterator",setInternalState$1=internalState.set,getInternalState=internalState.getterFor(ARRAY_ITERATOR),es_array_iterator=iteratorDefine(Array,"Array",(function(iterated,kind){setInternalState$1(this,{type:ARRAY_ITERATOR,target:toIndexedObject(iterated),index:0,kind:kind})}),(function(){var state=getInternalState(this),target=state.target,kind=state.kind,index=state.index++;return!target||index>=target.length?(state.target=void 0,createIterResultObject(void 0,!0)):createIterResultObject("keys"==kind?index:"values"==kind?target[index]:[index,target[index]],!1)}),"values"),values=iterators.Arguments=iterators.Array;if(addToUnscopables("keys"),addToUnscopables("values"),addToUnscopables("entries"),descriptors&&"values"!==values.name)try{defineProperty(values,"name",{value:"values"})}catch(error){}var objectToString=toStringTagSupport?{}.toString:function(){return"[object "+classof(this)+"]"};toStringTagSupport||defineBuiltIn(Object.prototype,"toString",objectToString,{unsafe:!0});var engineIsNode="process"==classofRaw(global_1.process),SPECIES$2=wellKnownSymbol("species"),setSpecies=function(CONSTRUCTOR_NAME){var Constructor=getBuiltIn(CONSTRUCTOR_NAME),defineProperty=objectDefineProperty.f;descriptors&&Constructor&&!Constructor[SPECIES$2]&&defineProperty(Constructor,SPECIES$2,{configurable:!0,get:function(){return this}})},$TypeError$4=TypeError,anInstance=function(it,Prototype){if(objectIsPrototypeOf(Prototype,it))return it;throw $TypeError$4("Incorrect invocation")},$TypeError$3=TypeError,aConstructor=function(argument){if(isConstructor(argument))return argument;throw $TypeError$3(tryToString(argument)+" is not a constructor")},SPECIES$1=wellKnownSymbol("species"),speciesConstructor=function(O,defaultConstructor){var S,C=anObject(O).constructor;return void 0===C||isNullOrUndefined(S=anObject(C)[SPECIES$1])?defaultConstructor:aConstructor(S)},FunctionPrototype=Function.prototype,apply=FunctionPrototype.apply,call=FunctionPrototype.call,functionApply="object"==typeof Reflect&&Reflect.apply||(functionBindNative?call.bind(apply):function(){return call.apply(apply,arguments)}),arraySlice=functionUncurryThis([].slice),$TypeError$2=TypeError,validateArgumentsLength=function(passed,required){if(passed<required)throw $TypeError$2("Not enough arguments");return passed},engineIsIos=/(?:ipad|iphone|ipod).*applewebkit/i.test(engineUserAgent),set=global_1.setImmediate,clear=global_1.clearImmediate,process$2=global_1.process,Dispatch=global_1.Dispatch,Function$1=global_1.Function,MessageChannel=global_1.MessageChannel,String$1=global_1.String,counter=0,queue$1={},ONREADYSTATECHANGE="onreadystatechange",$location,defer,channel,port;try{$location=global_1.location}catch(error){}var run=function(id){if(hasOwnProperty_1(queue$1,id)){var fn=queue$1[id];delete queue$1[id],fn()}},runner=function(id){return function(){run(id)}},listener=function(event){run(event.data)},post=function(id){global_1.postMessage(String$1(id),$location.protocol+"//"+$location.host)};set&&clear||(set=function(handler){validateArgumentsLength(arguments.length,1);var fn=isCallable(handler)?handler:Function$1(handler),args=arraySlice(arguments,1);return queue$1[++counter]=function(){functionApply(fn,void 0,args)},defer(counter),counter},clear=function(id){delete queue$1[id]},engineIsNode?defer=function(id){process$2.nextTick(runner(id))}:Dispatch&&Dispatch.now?defer=function(id){Dispatch.now(runner(id))}:MessageChannel&&!engineIsIos?(channel=new MessageChannel,port=channel.port2,channel.port1.onmessage=listener,defer=functionBindContext(port.postMessage,port)):global_1.addEventListener&&isCallable(global_1.postMessage)&&!global_1.importScripts&&$location&&"file:"!==$location.protocol&&!fails(post)?(defer=post,global_1.addEventListener("message",listener,!1)):defer=ONREADYSTATECHANGE in documentCreateElement("script")?function(id){html.appendChild(documentCreateElement("script"))[ONREADYSTATECHANGE]=function(){html.removeChild(this),run(id)}}:function(id){setTimeout(runner(id),0)});var task$1={set:set,clear:clear},engineIsIosPebble=/ipad|iphone|ipod/i.test(engineUserAgent)&&void 0!==global_1.Pebble,engineIsWebosWebkit=/web0s(?!.*chrome)/i.test(engineUserAgent),getOwnPropertyDescriptor$1=objectGetOwnPropertyDescriptor.f,macrotask=task$1.set,MutationObserver=global_1.MutationObserver||global_1.WebKitMutationObserver,document$2=global_1.document,process$1=global_1.process,Promise$1=global_1.Promise,queueMicrotaskDescriptor=getOwnPropertyDescriptor$1(global_1,"queueMicrotask"),queueMicrotask=queueMicrotaskDescriptor&&queueMicrotaskDescriptor.value,flush,head,last,notify$1,toggle,node,promise,then;queueMicrotask||(flush=function(){var parent,fn;for(engineIsNode&&(parent=process$1.domain)&&parent.exit();head;){fn=head.fn,head=head.next;try{fn()}catch(error){throw head?notify$1():last=void 0,error}}last=void 0,parent&&parent.enter()},engineIsIos||engineIsNode||engineIsWebosWebkit||!MutationObserver||!document$2?!engineIsIosPebble&&Promise$1&&Promise$1.resolve?(promise=Promise$1.resolve(void 0),promise.constructor=Promise$1,then=functionBindContext(promise.then,promise),notify$1=function(){then(flush)}):engineIsNode?notify$1=function(){process$1.nextTick(flush)}:(macrotask=functionBindContext(macrotask,global_1),notify$1=function(){macrotask(flush)}):(toggle=!0,node=document$2.createTextNode(""),new MutationObserver(flush).observe(node,{characterData:!0}),notify$1=function(){node.data=toggle=!toggle}));var microtask=queueMicrotask||function(fn){var task={fn:fn,next:void 0};last&&(last.next=task),head||(head=task,notify$1()),last=task},hostReportErrors=function(a,b){var console=global_1.console;console&&console.error&&(1==arguments.length?console.error(a):console.error(a,b))},perform=function(exec){try{return{error:!1,value:exec()}}catch(error){return{error:!0,value:error}}},Queue=function(){this.head=null,this.tail=null};Queue.prototype={add:function(item){var entry={item:item,next:null};this.head?this.tail.next=entry:this.head=entry,this.tail=entry},get:function(){var entry=this.head;if(entry)return this.head=entry.next,this.tail===entry&&(this.tail=null),entry.item}};var queue=Queue,promiseNativeConstructor=global_1.Promise,engineIsDeno="object"==typeof Deno&&Deno&&"object"==typeof Deno.version,engineIsBrowser=!engineIsDeno&&!engineIsNode&&"object"==typeof window&&"object"==typeof document;promiseNativeConstructor&&promiseNativeConstructor.prototype;var SPECIES=wellKnownSymbol("species"),SUBCLASSING=!1,NATIVE_PROMISE_REJECTION_EVENT$1=isCallable(global_1.PromiseRejectionEvent),FORCED_PROMISE_CONSTRUCTOR$5=isForced_1("Promise",(function(){var PROMISE_CONSTRUCTOR_SOURCE=inspectSource(promiseNativeConstructor),GLOBAL_CORE_JS_PROMISE=PROMISE_CONSTRUCTOR_SOURCE!==String(promiseNativeConstructor);if(!GLOBAL_CORE_JS_PROMISE&&66===engineV8Version)return!0;if(!engineV8Version||engineV8Version<51||!/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)){var promise=new promiseNativeConstructor((function(resolve){resolve(1)})),FakePromise=function(exec){exec((function(){}),(function(){}))};if((promise.constructor={})[SPECIES]=FakePromise,!(SUBCLASSING=promise.then((function(){}))instanceof FakePromise))return!0}return!GLOBAL_CORE_JS_PROMISE&&(engineIsBrowser||engineIsDeno)&&!NATIVE_PROMISE_REJECTION_EVENT$1})),promiseConstructorDetection={CONSTRUCTOR:FORCED_PROMISE_CONSTRUCTOR$5,REJECTION_EVENT:NATIVE_PROMISE_REJECTION_EVENT$1,SUBCLASSING:SUBCLASSING},$TypeError$1=TypeError,PromiseCapability=function(C){var resolve,reject;this.promise=new C((function($$resolve,$$reject){if(void 0!==resolve||void 0!==reject)throw $TypeError$1("Bad Promise constructor");resolve=$$resolve,reject=$$reject})),this.resolve=aCallable(resolve),this.reject=aCallable(reject)},f=function(C){return new PromiseCapability(C)},newPromiseCapability$1={f:f},task=task$1.set,PROMISE="Promise",FORCED_PROMISE_CONSTRUCTOR$4=promiseConstructorDetection.CONSTRUCTOR,NATIVE_PROMISE_REJECTION_EVENT=promiseConstructorDetection.REJECTION_EVENT,NATIVE_PROMISE_SUBCLASSING=promiseConstructorDetection.SUBCLASSING,getInternalPromiseState=internalState.getterFor(PROMISE),setInternalState=internalState.set,NativePromisePrototype$2=promiseNativeConstructor&&promiseNativeConstructor.prototype,PromiseConstructor=promiseNativeConstructor,PromisePrototype=NativePromisePrototype$2,TypeError$1=global_1.TypeError,document$1=global_1.document,process=global_1.process,newPromiseCapability=newPromiseCapability$1.f,newGenericPromiseCapability=newPromiseCapability,DISPATCH_EVENT=!!(document$1&&document$1.createEvent&&global_1.dispatchEvent),UNHANDLED_REJECTION="unhandledrejection",REJECTION_HANDLED="rejectionhandled",PENDING=0,FULFILLED=1,REJECTED=2,HANDLED=1,UNHANDLED=2,Internal,OwnPromiseCapability,PromiseWrapper,nativeThen,isThenable=function(it){var then;return!(!isObject(it)||!isCallable(then=it.then))&&then},callReaction=function(reaction,state){var result,then,exited,value=state.value,ok=state.state==FULFILLED,handler=ok?reaction.ok:reaction.fail,resolve=reaction.resolve,reject=reaction.reject,domain=reaction.domain;try{handler?(ok||(state.rejection===UNHANDLED&&onHandleUnhandled(state),state.rejection=HANDLED),!0===handler?result=value:(domain&&domain.enter(),result=handler(value),domain&&(domain.exit(),exited=!0)),result===reaction.promise?reject(TypeError$1("Promise-chain cycle")):(then=isThenable(result))?functionCall(then,result,resolve,reject):resolve(result)):reject(value)}catch(error){domain&&!exited&&domain.exit(),reject(error)}},notify=function(state,isReject){state.notified||(state.notified=!0,microtask((function(){for(var reaction,reactions=state.reactions;reaction=reactions.get();)callReaction(reaction,state);state.notified=!1,isReject&&!state.rejection&&onUnhandled(state)})))},dispatchEvent=function(name,promise,reason){var event,handler;DISPATCH_EVENT?((event=document$1.createEvent("Event")).promise=promise,event.reason=reason,event.initEvent(name,!1,!0),global_1.dispatchEvent(event)):event={promise:promise,reason:reason},!NATIVE_PROMISE_REJECTION_EVENT&&(handler=global_1["on"+name])?handler(event):name===UNHANDLED_REJECTION&&hostReportErrors("Unhandled promise rejection",reason)},onUnhandled=function(state){functionCall(task,global_1,(function(){var result,promise=state.facade,value=state.value;if(isUnhandled(state)&&(result=perform((function(){engineIsNode?process.emit("unhandledRejection",value,promise):dispatchEvent(UNHANDLED_REJECTION,promise,value)})),state.rejection=engineIsNode||isUnhandled(state)?UNHANDLED:HANDLED,result.error))throw result.value}))},isUnhandled=function(state){return state.rejection!==HANDLED&&!state.parent},onHandleUnhandled=function(state){functionCall(task,global_1,(function(){var promise=state.facade;engineIsNode?process.emit("rejectionHandled",promise):dispatchEvent(REJECTION_HANDLED,promise,state.value)}))},bind=function(fn,state,unwrap){return function(value){fn(state,value,unwrap)}},internalReject=function(state,value,unwrap){state.done||(state.done=!0,unwrap&&(state=unwrap),state.value=value,state.state=REJECTED,notify(state,!0))},internalResolve=function(state,value,unwrap){if(!state.done){state.done=!0,unwrap&&(state=unwrap);try{if(state.facade===value)throw TypeError$1("Promise can't be resolved itself");var then=isThenable(value);then?microtask((function(){var wrapper={done:!1};try{functionCall(then,value,bind(internalResolve,wrapper,state),bind(internalReject,wrapper,state))}catch(error){internalReject(wrapper,error,state)}})):(state.value=value,state.state=FULFILLED,notify(state,!1))}catch(error){internalReject({done:!1},error,state)}}};if(FORCED_PROMISE_CONSTRUCTOR$4&&(PromiseConstructor=function(executor){anInstance(this,PromisePrototype),aCallable(executor),functionCall(Internal,this);var state=getInternalPromiseState(this);try{executor(bind(internalResolve,state),bind(internalReject,state))}catch(error){internalReject(state,error)}},PromisePrototype=PromiseConstructor.prototype,Internal=function(executor){setInternalState(this,{type:PROMISE,done:!1,notified:!1,parent:!1,reactions:new queue,rejection:!1,state:PENDING,value:void 0})},Internal.prototype=defineBuiltIn(PromisePrototype,"then",(function(onFulfilled,onRejected){var state=getInternalPromiseState(this),reaction=newPromiseCapability(speciesConstructor(this,PromiseConstructor));return state.parent=!0,reaction.ok=!isCallable(onFulfilled)||onFulfilled,reaction.fail=isCallable(onRejected)&&onRejected,reaction.domain=engineIsNode?process.domain:void 0,state.state==PENDING?state.reactions.add(reaction):microtask((function(){callReaction(reaction,state)})),reaction.promise})),OwnPromiseCapability=function(){var promise=new Internal,state=getInternalPromiseState(promise);this.promise=promise,this.resolve=bind(internalResolve,state),this.reject=bind(internalReject,state)},newPromiseCapability$1.f=newPromiseCapability=function(C){return C===PromiseConstructor||C===PromiseWrapper?new OwnPromiseCapability(C):newGenericPromiseCapability(C)},isCallable(promiseNativeConstructor)&&NativePromisePrototype$2!==Object.prototype)){nativeThen=NativePromisePrototype$2.then,NATIVE_PROMISE_SUBCLASSING||defineBuiltIn(NativePromisePrototype$2,"then",(function(onFulfilled,onRejected){var that=this;return new PromiseConstructor((function(resolve,reject){functionCall(nativeThen,that,resolve,reject)})).then(onFulfilled,onRejected)}),{unsafe:!0});try{delete NativePromisePrototype$2.constructor}catch(error){}objectSetPrototypeOf&&objectSetPrototypeOf(NativePromisePrototype$2,PromisePrototype)}_export({global:!0,constructor:!0,wrap:!0,forced:FORCED_PROMISE_CONSTRUCTOR$4},{Promise:PromiseConstructor}),setToStringTag(PromiseConstructor,PROMISE,!1),setSpecies(PROMISE);var FORCED_PROMISE_CONSTRUCTOR$3=promiseConstructorDetection.CONSTRUCTOR,promiseStaticsIncorrectIteration=FORCED_PROMISE_CONSTRUCTOR$3||!checkCorrectnessOfIteration((function(iterable){promiseNativeConstructor.all(iterable).then(void 0,(function(){}))}));_export({target:"Promise",stat:!0,forced:promiseStaticsIncorrectIteration},{all:function(iterable){var C=this,capability=newPromiseCapability$1.f(C),resolve=capability.resolve,reject=capability.reject,result=perform((function(){var $promiseResolve=aCallable(C.resolve),values=[],counter=0,remaining=1;iterate(iterable,(function(promise){var index=counter++,alreadyCalled=!1;remaining++,functionCall($promiseResolve,C,promise).then((function(value){alreadyCalled||(alreadyCalled=!0,values[index]=value,--remaining||resolve(values))}),reject)})),--remaining||resolve(values)}));return result.error&&reject(result.value),capability.promise}});var FORCED_PROMISE_CONSTRUCTOR$2=promiseConstructorDetection.CONSTRUCTOR,NativePromisePrototype$1=promiseNativeConstructor&&promiseNativeConstructor.prototype;if(_export({target:"Promise",proto:!0,forced:FORCED_PROMISE_CONSTRUCTOR$2,real:!0},{catch:function(onRejected){return this.then(void 0,onRejected)}}),isCallable(promiseNativeConstructor)){var method$1=getBuiltIn("Promise").prototype.catch;NativePromisePrototype$1.catch!==method$1&&defineBuiltIn(NativePromisePrototype$1,"catch",method$1,{unsafe:!0})}_export({target:"Promise",stat:!0,forced:promiseStaticsIncorrectIteration},{race:function(iterable){var C=this,capability=newPromiseCapability$1.f(C),reject=capability.reject,result=perform((function(){var $promiseResolve=aCallable(C.resolve);iterate(iterable,(function(promise){functionCall($promiseResolve,C,promise).then(capability.resolve,reject)}))}));return result.error&&reject(result.value),capability.promise}});var FORCED_PROMISE_CONSTRUCTOR$1=promiseConstructorDetection.CONSTRUCTOR;_export({target:"Promise",stat:!0,forced:FORCED_PROMISE_CONSTRUCTOR$1},{reject:function(r){var capability=newPromiseCapability$1.f(this);return functionCall(capability.reject,void 0,r),capability.promise}});var promiseResolve=function(C,x){if(anObject(C),isObject(x)&&x.constructor===C)return x;var promiseCapability=newPromiseCapability$1.f(C);return(0,promiseCapability.resolve)(x),promiseCapability.promise},FORCED_PROMISE_CONSTRUCTOR=promiseConstructorDetection.CONSTRUCTOR;getBuiltIn("Promise"),_export({target:"Promise",stat:!0,forced:FORCED_PROMISE_CONSTRUCTOR},{resolve:function(x){return promiseResolve(this,x)}}),_export({target:"Promise",stat:!0},{allSettled:function(iterable){var C=this,capability=newPromiseCapability$1.f(C),resolve=capability.resolve,reject=capability.reject,result=perform((function(){var promiseResolve=aCallable(C.resolve),values=[],counter=0,remaining=1;iterate(iterable,(function(promise){var index=counter++,alreadyCalled=!1;remaining++,functionCall(promiseResolve,C,promise).then((function(value){alreadyCalled||(alreadyCalled=!0,values[index]={status:"fulfilled",value:value},--remaining||resolve(values))}),(function(error){alreadyCalled||(alreadyCalled=!0,values[index]={status:"rejected",reason:error},--remaining||resolve(values))}))})),--remaining||resolve(values)}));return result.error&&reject(result.value),capability.promise}});var PROMISE_ANY_ERROR="No one promise resolved";_export({target:"Promise",stat:!0},{any:function(iterable){var C=this,AggregateError=getBuiltIn("AggregateError"),capability=newPromiseCapability$1.f(C),resolve=capability.resolve,reject=capability.reject,result=perform((function(){var promiseResolve=aCallable(C.resolve),errors=[],counter=0,remaining=1,alreadyResolved=!1;iterate(iterable,(function(promise){var index=counter++,alreadyRejected=!1;remaining++,functionCall(promiseResolve,C,promise).then((function(value){alreadyRejected||alreadyResolved||(alreadyResolved=!0,resolve(value))}),(function(error){alreadyRejected||alreadyResolved||(alreadyRejected=!0,errors[index]=error,--remaining||reject(new AggregateError(errors,PROMISE_ANY_ERROR)))}))})),--remaining||reject(new AggregateError(errors,PROMISE_ANY_ERROR))}));return result.error&&reject(result.value),capability.promise}});var NativePromisePrototype=promiseNativeConstructor&&promiseNativeConstructor.prototype,NON_GENERIC=!!promiseNativeConstructor&&fails((function(){NativePromisePrototype.finally.call({then:function(){}},(function(){}))}));if(_export({target:"Promise",proto:!0,real:!0,forced:NON_GENERIC},{finally:function(onFinally){var C=speciesConstructor(this,getBuiltIn("Promise")),isFunction=isCallable(onFinally);return this.then(isFunction?function(x){return promiseResolve(C,onFinally()).then((function(){return x}))}:onFinally,isFunction?function(e){return promiseResolve(C,onFinally()).then((function(){throw e}))}:onFinally)}}),isCallable(promiseNativeConstructor)){var method=getBuiltIn("Promise").prototype.finally;NativePromisePrototype.finally!==method&&defineBuiltIn(NativePromisePrototype,"finally",method,{unsafe:!0})}path.Promise;var domIterables={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},classList=documentCreateElement("span").classList,DOMTokenListPrototype=classList&&classList.constructor&&classList.constructor.prototype,domTokenListPrototype=DOMTokenListPrototype===Object.prototype?void 0:DOMTokenListPrototype,ITERATOR=wellKnownSymbol("iterator"),TO_STRING_TAG=wellKnownSymbol("toStringTag"),ArrayValues=es_array_iterator.values,handlePrototype=function(CollectionPrototype,COLLECTION_NAME){if(CollectionPrototype){if(CollectionPrototype[ITERATOR]!==ArrayValues)try{createNonEnumerableProperty(CollectionPrototype,ITERATOR,ArrayValues)}catch(error){CollectionPrototype[ITERATOR]=ArrayValues}if(CollectionPrototype[TO_STRING_TAG]||createNonEnumerableProperty(CollectionPrototype,TO_STRING_TAG,COLLECTION_NAME),domIterables[COLLECTION_NAME])for(var METHOD_NAME in es_array_iterator)if(CollectionPrototype[METHOD_NAME]!==es_array_iterator[METHOD_NAME])try{createNonEnumerableProperty(CollectionPrototype,METHOD_NAME,es_array_iterator[METHOD_NAME])}catch(error){CollectionPrototype[METHOD_NAME]=es_array_iterator[METHOD_NAME]}}};for(var COLLECTION_NAME in domIterables)handlePrototype(global_1[COLLECTION_NAME]&&global_1[COLLECTION_NAME].prototype,COLLECTION_NAME);handlePrototype(domTokenListPrototype,"DOMTokenList"),_export({target:"Promise",stat:!0,forced:!0},{try:function(callbackfn){var promiseCapability=newPromiseCapability$1.f(this),result=perform(callbackfn);return(result.error?promiseCapability.reject:promiseCapability.resolve)(result.value),promiseCapability.promise}});var MATCH$1=wellKnownSymbol("match"),isRegexp=function(it){var isRegExp;return isObject(it)&&(void 0!==(isRegExp=it[MATCH$1])?!!isRegExp:"RegExp"==classofRaw(it))},$TypeError=TypeError,notARegexp=function(it){if(isRegexp(it))throw $TypeError("The method doesn't accept regular expressions");return it},MATCH=wellKnownSymbol("match"),correctIsRegexpLogic=function(METHOD_NAME){var regexp=/./;try{"/./"[METHOD_NAME](regexp)}catch(error1){try{return regexp[MATCH]=!1,"/./"[METHOD_NAME](regexp)}catch(error2){}}return!1},getOwnPropertyDescriptor=objectGetOwnPropertyDescriptor.f,nativeStartsWith=functionUncurryThisClause("".startsWith),stringSlice=functionUncurryThisClause("".slice),min=Math.min,CORRECT_IS_REGEXP_LOGIC=correctIsRegexpLogic("startsWith"),MDN_POLYFILL_BUG=!(CORRECT_IS_REGEXP_LOGIC||(descriptor=getOwnPropertyDescriptor(String.prototype,"startsWith"),!descriptor||descriptor.writable)),descriptor;_export({target:"String",proto:!0,forced:!MDN_POLYFILL_BUG&&!CORRECT_IS_REGEXP_LOGIC},{startsWith:function(searchString){var that=toString_1(requireObjectCoercible(this));notARegexp(searchString);var index=toLength(min(arguments.length>1?arguments[1]:void 0,that.length)),search=toString_1(searchString);return nativeStartsWith?nativeStartsWith(that,search,index):stringSlice(that,index,index+search.length)===search}}),entryUnbind("String","startsWith");var global$1="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==global$1&&global$1,support={searchParams:"URLSearchParams"in global$1,iterable:"Symbol"in global$1&&"iterator"in Symbol,blob:"FileReader"in global$1&&"Blob"in global$1&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in global$1,arrayBuffer:"ArrayBuffer"in global$1};function isDataView(obj){return obj&&DataView.prototype.isPrototypeOf(obj)}if(support.arrayBuffer)var viewClasses=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],isArrayBufferView=ArrayBuffer.isView||function(obj){return obj&&viewClasses.indexOf(Object.prototype.toString.call(obj))>-1};function normalizeName(name){if("string"!=typeof name&&(name=String(name)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name)||""===name)throw new TypeError('Invalid character in header field name: "'+name+'"');return name.toLowerCase()}function normalizeValue(value){return"string"!=typeof value&&(value=String(value)),value}function iteratorFor(items){var iterator={next:function(){var value=items.shift();return{done:void 0===value,value:value}}};return support.iterable&&(iterator[Symbol.iterator]=function(){return iterator}),iterator}function Headers(headers){this.map={},headers instanceof Headers?headers.forEach((function(value,name){this.append(name,value)}),this):Array.isArray(headers)?headers.forEach((function(header){this.append(header[0],header[1])}),this):headers&&Object.getOwnPropertyNames(headers).forEach((function(name){this.append(name,headers[name])}),this)}function consumed(body){if(body.bodyUsed)return Promise.reject(new TypeError("Already read"));body.bodyUsed=!0}function fileReaderReady(reader){return new Promise((function(resolve,reject){reader.onload=function(){resolve(reader.result)},reader.onerror=function(){reject(reader.error)}}))}function readBlobAsArrayBuffer(blob){var reader=new FileReader,promise=fileReaderReady(reader);return reader.readAsArrayBuffer(blob),promise}function readBlobAsText(blob){var reader=new FileReader,promise=fileReaderReady(reader);return reader.readAsText(blob),promise}function readArrayBufferAsText(buf){for(var view=new Uint8Array(buf),chars=new Array(view.length),i=0;i<view.length;i++)chars[i]=String.fromCharCode(view[i]);return chars.join("")}function bufferClone(buf){if(buf.slice)return buf.slice(0);var view=new Uint8Array(buf.byteLength);return view.set(new Uint8Array(buf)),view.buffer}function Body(){return this.bodyUsed=!1,this._initBody=function(body){this.bodyUsed=this.bodyUsed,this._bodyInit=body,body?"string"==typeof body?this._bodyText=body:support.blob&&Blob.prototype.isPrototypeOf(body)?this._bodyBlob=body:support.formData&&FormData.prototype.isPrototypeOf(body)?this._bodyFormData=body:support.searchParams&&URLSearchParams.prototype.isPrototypeOf(body)?this._bodyText=body.toString():support.arrayBuffer&&support.blob&&isDataView(body)?(this._bodyArrayBuffer=bufferClone(body.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):support.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(body)||isArrayBufferView(body))?this._bodyArrayBuffer=bufferClone(body):this._bodyText=body=Object.prototype.toString.call(body):this._bodyText="",this.headers.get("content-type")||("string"==typeof body?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):support.searchParams&&URLSearchParams.prototype.isPrototypeOf(body)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},support.blob&&(this.blob=function(){var rejected=consumed(this);if(rejected)return rejected;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var isConsumed=consumed(this);return isConsumed||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(readBlobAsArrayBuffer)}),this.text=function(){var rejected=consumed(this);if(rejected)return rejected;if(this._bodyBlob)return readBlobAsText(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},support.formData&&(this.formData=function(){return this.text().then(decode)}),this.json=function(){return this.text().then(JSON.parse)},this}Headers.prototype.append=function(name,value){name=normalizeName(name),value=normalizeValue(value);var oldValue=this.map[name];this.map[name]=oldValue?oldValue+", "+value:value},Headers.prototype.delete=function(name){delete this.map[normalizeName(name)]},Headers.prototype.get=function(name){return name=normalizeName(name),this.has(name)?this.map[name]:null},Headers.prototype.has=function(name){return this.map.hasOwnProperty(normalizeName(name))},Headers.prototype.set=function(name,value){this.map[normalizeName(name)]=normalizeValue(value)},Headers.prototype.forEach=function(callback,thisArg){for(var name in this.map)this.map.hasOwnProperty(name)&&callback.call(thisArg,this.map[name],name,this)},Headers.prototype.keys=function(){var items=[];return this.forEach((function(value,name){items.push(name)})),iteratorFor(items)},Headers.prototype.values=function(){var items=[];return this.forEach((function(value){items.push(value)})),iteratorFor(items)},Headers.prototype.entries=function(){var items=[];return this.forEach((function(value,name){items.push([name,value])})),iteratorFor(items)},support.iterable&&(Headers.prototype[Symbol.iterator]=Headers.prototype.entries);var methods=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function normalizeMethod(method){var upcased=method.toUpperCase();return methods.indexOf(upcased)>-1?upcased:method}function Request(input,options){if(!(this instanceof Request))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var body=(options=options||{}).body;if(input instanceof Request){if(input.bodyUsed)throw new TypeError("Already read");this.url=input.url,this.credentials=input.credentials,options.headers||(this.headers=new Headers(input.headers)),this.method=input.method,this.mode=input.mode,this.signal=input.signal,body||null==input._bodyInit||(body=input._bodyInit,input.bodyUsed=!0)}else this.url=String(input);if(this.credentials=options.credentials||this.credentials||"same-origin",!options.headers&&this.headers||(this.headers=new Headers(options.headers)),this.method=normalizeMethod(options.method||this.method||"GET"),this.mode=options.mode||this.mode||null,this.signal=options.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&body)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(body),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==options.cache&&"no-cache"!==options.cache)){var reParamSearch=/([?&])_=[^&]*/;if(reParamSearch.test(this.url))this.url=this.url.replace(reParamSearch,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function decode(body){var form=new FormData;return body.trim().split("&").forEach((function(bytes){if(bytes){var split=bytes.split("="),name=split.shift().replace(/\+/g," "),value=split.join("=").replace(/\+/g," ");form.append(decodeURIComponent(name),decodeURIComponent(value))}})),form}function parseHeaders(rawHeaders){var headers=new Headers;return rawHeaders.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(header){return 0===header.indexOf("\n")?header.substr(1,header.length):header})).forEach((function(line){var parts=line.split(":"),key=parts.shift().trim();if(key){var value=parts.join(":").trim();headers.append(key,value)}})),headers}function Response(bodyInit,options){if(!(this instanceof Response))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');options||(options={}),this.type="default",this.status=void 0===options.status?200:options.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===options.statusText?"":""+options.statusText,this.headers=new Headers(options.headers),this.url=options.url||"",this._initBody(bodyInit)}Request.prototype.clone=function(){return new Request(this,{body:this._bodyInit})},Body.call(Request.prototype),Body.call(Response.prototype),Response.prototype.clone=function(){return new Response(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new Headers(this.headers),url:this.url})},Response.error=function(){var response=new Response(null,{status:0,statusText:""});return response.type="error",response};var redirectStatuses=[301,302,303,307,308];Response.redirect=function(url,status){if(-1===redirectStatuses.indexOf(status))throw new RangeError("Invalid status code");return new Response(null,{status:status,headers:{location:url}})};var DOMException=global$1.DOMException;try{new DOMException}catch(err){DOMException=function(message,name){this.message=message,this.name=name;var error=Error(message);this.stack=error.stack},DOMException.prototype=Object.create(Error.prototype),DOMException.prototype.constructor=DOMException}function fetch$1(input,init){return new Promise((function(resolve,reject){var request=new Request(input,init);if(request.signal&&request.signal.aborted)return reject(new DOMException("Aborted","AbortError"));var xhr=new XMLHttpRequest;function abortXhr(){xhr.abort()}xhr.onload=function(){var options={status:xhr.status,statusText:xhr.statusText,headers:parseHeaders(xhr.getAllResponseHeaders()||"")};options.url="responseURL"in xhr?xhr.responseURL:options.headers.get("X-Request-URL");var body="response"in xhr?xhr.response:xhr.responseText;setTimeout((function(){resolve(new Response(body,options))}),0)},xhr.onerror=function(){setTimeout((function(){reject(new TypeError("Network request failed"))}),0)},xhr.ontimeout=function(){setTimeout((function(){reject(new TypeError("Network request failed"))}),0)},xhr.onabort=function(){setTimeout((function(){reject(new DOMException("Aborted","AbortError"))}),0)},xhr.open(request.method,function(url){try{return""===url&&global$1.location.href?global$1.location.href:url}catch(e){return url}}(request.url),!0),"include"===request.credentials?xhr.withCredentials=!0:"omit"===request.credentials&&(xhr.withCredentials=!1),"responseType"in xhr&&(support.blob?xhr.responseType="blob":support.arrayBuffer&&request.headers.get("Content-Type")&&-1!==request.headers.get("Content-Type").indexOf("application/octet-stream")&&(xhr.responseType="arraybuffer")),!init||"object"!=typeof init.headers||init.headers instanceof Headers?request.headers.forEach((function(value,name){xhr.setRequestHeader(name,value)})):Object.getOwnPropertyNames(init.headers).forEach((function(name){xhr.setRequestHeader(name,normalizeValue(init.headers[name]))})),request.signal&&(request.signal.addEventListener("abort",abortXhr),xhr.onreadystatechange=function(){4===xhr.readyState&&request.signal.removeEventListener("abort",abortXhr)}),xhr.send(void 0===request._bodyInit?null:request._bodyInit)}))}fetch$1.polyfill=!0,global$1.fetch||(global$1.fetch=fetch$1,global$1.Headers=Headers,global$1.Request=Request,global$1.Response=Response),null==Element.prototype.getAttributeNames&&(Element.prototype.getAttributeNames=function(){for(var attributes=this.attributes,length=attributes.length,result=new Array(length),i=0;i<length;i++)result[i]=attributes[i].name;return result}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(s){for(var matches=(this.document||this.ownerDocument).querySelectorAll(s),i=matches.length;--i>=0&&matches.item(i)!==this;);return i>-1}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(s){var el=this;do{if(el.matches(s))return el;el=el.parentElement||el.parentNode}while(null!==el&&1===el.nodeType);return null});var Connection=function(){function Connection(){_classCallCheck(this,Connection),this.headers={}}return _createClass(Connection,[{key:"onMessage",value:function(message,payload){message.component.receiveMessage(message,payload)}},{key:"onError",value:function(message,status,response){return message.component.messageSendFailed(),store$2.onErrorCallback(status,response)}},{key:"showExpiredMessage",value:function(response,message){store$2.sessionHasExpiredCallback?store$2.sessionHasExpiredCallback(response,message):confirm("This page has expired.\nWould you like to refresh the page?")&&window.location.reload()}},{key:"sendMessage",value:function(message){var _this=this,payload=message.payload(),csrfToken=getCsrfToken(),socketId=this.getSocketId(),appUrl=window.livewire_app_url;if(this.shouldUseLocalePrefix(payload)&&(appUrl="".concat(appUrl,"/").concat(payload.fingerprint.locale)),window.__testing_request_interceptor)return window.__testing_request_interceptor(payload,this);fetch("".concat(appUrl,"/livewire/message/").concat(payload.fingerprint.name),{method:"POST",body:JSON.stringify(payload),credentials:"same-origin",headers:_objectSpread2(_objectSpread2(_objectSpread2({"Content-Type":"application/json",Accept:"text/html, application/xhtml+xml","X-Livewire":!0},this.headers),{},{Referer:window.location.href},csrfToken&&{"X-CSRF-TOKEN":csrfToken}),socketId&&{"X-Socket-ID":socketId})}).then((function(response){if(response.ok)response.text().then((function(response){_this.isOutputFromDump(response)?(_this.onError(message),_this.showHtmlModal(response)):_this.onMessage(message,JSON.parse(response))}));else{if(!1===_this.onError(message,response.status,response))return;if(419===response.status){if(store$2.sessionHasExpired)return;store$2.sessionHasExpired=!0,_this.showExpiredMessage(response,message)}else response.text().then((function(response){_this.showHtmlModal(response)}))}})).catch((function(){_this.onError(message)}))}},{key:"shouldUseLocalePrefix",value:function(payload){var path=payload.fingerprint.path,locale=payload.fingerprint.locale;return path.split("/")[0]==locale}},{key:"isOutputFromDump",value:function(output){return!!output.match(/<script>Sfdump\(".+"\)<\/script>/)}},{key:"getSocketId",value:function(){if("undefined"!=typeof Echo)return Echo.socketId()}},{key:"showHtmlModal",value:function(html){var _this2=this,page=document.createElement("html");page.innerHTML=html,page.querySelectorAll("a").forEach((function(a){return a.setAttribute("target","_top")}));var modal=document.getElementById("livewire-error");void 0!==modal&&null!=modal?modal.innerHTML="":((modal=document.createElement("div")).id="livewire-error",modal.style.position="fixed",modal.style.width="100vw",modal.style.height="100vh",modal.style.padding="50px",modal.style.backgroundColor="rgba(0, 0, 0, .6)",modal.style.zIndex=2e5);var iframe=document.createElement("iframe");iframe.style.backgroundColor="#17161A",iframe.style.borderRadius="5px",iframe.style.width="100%",iframe.style.height="100%",modal.appendChild(iframe),document.body.prepend(modal),document.body.style.overflow="hidden",iframe.contentWindow.document.open(),iframe.contentWindow.document.write(page.outerHTML),iframe.contentWindow.document.close(),modal.addEventListener("click",(function(){return _this2.hideHtmlModal(modal)})),modal.setAttribute("tabindex",0),modal.addEventListener("keydown",(function(e){"Escape"===e.key&&_this2.hideHtmlModal(modal)})),modal.focus()}},{key:"hideHtmlModal",value:function(modal){modal.outerHTML="",document.body.style.overflow="visible"}}]),Connection}(),_default$4=function(_Action){_inherits(_default,_Action);var _super=_createSuper(_default);function _default(method,params,el){var _this,skipWatcher=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return _classCallCheck(this,_default),(_this=_super.call(this,el,skipWatcher)).type="callMethod",_this.method=method,_this.payload={id:_this.signature,method:method,params:params},_this}return _createClass(_default)}(_default$6);function Polling(){store$2.registerHook("element.initialized",(function(el,component){if(!wireDirectives(el).missing("poll")){var intervalId=fireActionOnInterval(el,component);component.addListenerForTeardown((function(){clearInterval(intervalId)})),el.__livewire_polling_interval=intervalId}})),store$2.registerHook("element.updating",(function(from,to,component){void 0===from.__livewire_polling_interval&&wireDirectives(from).missing("poll")&&wireDirectives(to).has("poll")&&setTimeout((function(){var intervalId=fireActionOnInterval(from,component);component.addListenerForTeardown((function(){clearInterval(intervalId)})),from.__livewire_polling_interval=intervalId}),0)}))}function fireActionOnInterval(node,component){var interval=wireDirectives(node).get("poll").durationOr(2e3);return setInterval((function(){if(!1!==node.isConnected){var directives=wireDirectives(node);if(!directives.missing("poll")){var directive=directives.get("poll"),method=directive.method||"$refresh";store$2.livewireIsInBackground&&!directive.modifiers.includes("keep-alive")&&Math.random()<.95||directive.modifiers.includes("visible")&&!inViewport(directive.el)||store$2.livewireIsOffline||component.addAction(new _default$4(method,directive.params,node))}}}),interval)}function inViewport(el){var bounding=el.getBoundingClientRect();return bounding.top<(window.innerHeight||document.documentElement.clientHeight)&&bounding.left<(window.innerWidth||document.documentElement.clientWidth)&&bounding.bottom>0&&bounding.right>0}var _default$3=function(){function _default(component,updateQueue){_classCallCheck(this,_default),this.component=component,this.updateQueue=updateQueue}return _createClass(_default,[{key:"payload",value:function(){return{fingerprint:this.component.fingerprint,serverMemo:this.component.serverMemo,updates:this.updateQueue.map((function(update){return{type:update.type,payload:update.payload}}))}}},{key:"shouldSkipWatcherForDataKey",value:function(dataKey){if(this.response.effects.dirty.includes(dataKey))return!1;return this.updateQueue.filter((function(update){return subject=update.name,value=dataKey,"string"==typeof subject&&"string"==typeof value&&subject.split(".")[0]===value.split(".")[0];var subject,value})).some((function(update){return update.skipWatcher}))}},{key:"storeResponse",value:function(payload){return this.response=payload}},{key:"resolve",value:function(){var returns=this.response.effects.returns||[];this.updateQueue.forEach((function(update){"callMethod"===update.type&&update.resolve(void 0!==returns[update.signature]?returns[update.signature]:void 0!==returns[update.method]?returns[update.method]:null)}))}},{key:"reject",value:function(){this.updateQueue.forEach((function(update){update.reject()}))}}]),_default}(),_default$2=function(_Message){_inherits(_default,_Message);var _super=_createSuper(_default);function _default(component,action){return _classCallCheck(this,_default),_super.call(this,component,[action])}return _createClass(_default,[{key:"prefetchId",get:function(){return this.updateQueue[0].toId()}}]),_default}(_default$3);function morphAttrs(fromNode,toNode){if((void 0===fromNode._x_isShown||void 0===toNode._x_isShown)&&(!fromNode._x_isShown||toNode._x_isShown)&&(fromNode._x_isShown||!toNode._x_isShown)){var i,attr,attrName,attrNamespaceURI,attrValue,attrs=toNode.attributes;for(i=attrs.length-1;i>=0;--i)attrName=(attr=attrs[i]).name,attrNamespaceURI=attr.namespaceURI,attrValue=attr.value,attrNamespaceURI?(attrName=attr.localName||attrName,fromNode.getAttributeNS(attrNamespaceURI,attrName)!==attrValue&&("xmlns"===attr.prefix&&(attrName=attr.name),fromNode.setAttributeNS(attrNamespaceURI,attrName,attrValue))):fromNode.getAttribute(attrName)!==attrValue&&fromNode.setAttribute(attrName,attrValue);for(i=(attrs=fromNode.attributes).length-1;i>=0;--i)!1!==(attr=attrs[i]).specified&&(attrName=attr.name,(attrNamespaceURI=attr.namespaceURI)?(attrName=attr.localName||attrName,toNode.hasAttributeNS(attrNamespaceURI,attrName)||fromNode.removeAttributeNS(attrNamespaceURI,attrName)):toNode.hasAttribute(attrName)||fromNode.removeAttribute(attrName))}}function syncBooleanAttrProp(fromEl,toEl,name){fromEl[name]!==toEl[name]&&(fromEl[name]=toEl[name],fromEl[name]?fromEl.setAttribute(name,""):fromEl.removeAttribute(name))}var specialElHandlers={OPTION:function(fromEl,toEl){var parentNode=fromEl.parentNode;if(parentNode){var parentName=parentNode.nodeName.toUpperCase();"OPTGROUP"===parentName&&(parentName=(parentNode=parentNode.parentNode)&&parentNode.nodeName.toUpperCase()),"SELECT"!==parentName||parentNode.hasAttribute("multiple")||(fromEl.hasAttribute("selected")&&!toEl.selected&&(fromEl.setAttribute("selected","selected"),fromEl.removeAttribute("selected")),parentNode.selectedIndex=-1)}syncBooleanAttrProp(fromEl,toEl,"selected")},INPUT:function(fromEl,toEl){syncBooleanAttrProp(fromEl,toEl,"checked"),syncBooleanAttrProp(fromEl,toEl,"disabled"),fromEl.value!==toEl.value&&(fromEl.value=toEl.value),toEl.hasAttribute("value")||fromEl.removeAttribute("value")},TEXTAREA:function(fromEl,toEl){var newValue=toEl.value;fromEl.value!==newValue&&(fromEl.value=newValue);var firstChild=fromEl.firstChild;if(firstChild){var oldValue=firstChild.nodeValue;if(oldValue==newValue||!newValue&&oldValue==fromEl.placeholder)return;firstChild.nodeValue=newValue}},SELECT:function(fromEl,toEl){if(!toEl.hasAttribute("multiple")){for(var optgroup,nodeName,selectedIndex=-1,i=0,curChild=fromEl.firstChild;curChild;)if("OPTGROUP"===(nodeName=curChild.nodeName&&curChild.nodeName.toUpperCase()))curChild=(optgroup=curChild).firstChild;else{if("OPTION"===nodeName){if(curChild.hasAttribute("selected")){selectedIndex=i;break}i++}!(curChild=curChild.nextSibling)&&optgroup&&(curChild=optgroup.nextSibling,optgroup=null)}fromEl.selectedIndex=selectedIndex}}},range,NS_XHTML="http://www.w3.org/1999/xhtml",doc="undefined"==typeof document?void 0:document,HAS_TEMPLATE_SUPPORT=!!doc&&"content"in doc.createElement("template"),HAS_RANGE_SUPPORT=!!doc&&doc.createRange&&"createContextualFragment"in doc.createRange();function createFragmentFromTemplate(str){var template=doc.createElement("template");return template.innerHTML=str,template.content.childNodes[0]}function createFragmentFromRange(str){return range||(range=doc.createRange()).selectNode(doc.body),range.createContextualFragment(str).childNodes[0]}function createFragmentFromWrap(str){var fragment=doc.createElement("body");return fragment.innerHTML=str,fragment.childNodes[0]}function toElement(str){return str=str.trim(),HAS_TEMPLATE_SUPPORT?createFragmentFromTemplate(str):HAS_RANGE_SUPPORT?createFragmentFromRange(str):createFragmentFromWrap(str)}function compareNodeNames(fromEl,toEl){var fromNodeName=fromEl.nodeName,toNodeName=toEl.nodeName;return fromNodeName===toNodeName||!!(toEl.actualize&&fromNodeName.charCodeAt(0)<91&&toNodeName.charCodeAt(0)>90)&&fromNodeName===toNodeName.toUpperCase()}function createElementNS(name,namespaceURI){return namespaceURI&&namespaceURI!==NS_XHTML?doc.createElementNS(namespaceURI,name):doc.createElement(name)}function moveChildren(fromEl,toEl){for(var curChild=fromEl.firstChild;curChild;){var nextChild=curChild.nextSibling;toEl.appendChild(curChild),curChild=nextChild}return toEl}var ELEMENT_NODE=1,DOCUMENT_FRAGMENT_NODE=11,TEXT_NODE=3,COMMENT_NODE=8;function noop(){}function defaultGetNodeKey(node){return node.id}function callHook(hook){"getNodeKey"!==hook.name&&hook.name;for(var _len=arguments.length,params=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)params[_key-1]=arguments[_key];if("function"==typeof params[0].hasAttribute)return hook.apply(void 0,params)}function morphdomFactory(morphAttrs){return function(fromNode,toNode,options){if(options||(options={}),"string"==typeof toNode)if("#document"===fromNode.nodeName||"HTML"===fromNode.nodeName){var toNodeHtml=toNode;(toNode=doc.createElement("html")).innerHTML=toNodeHtml}else toNode=toElement(toNode);var getNodeKey=options.getNodeKey||defaultGetNodeKey,onBeforeNodeAdded=options.onBeforeNodeAdded||noop,onNodeAdded=options.onNodeAdded||noop,onBeforeElUpdated=options.onBeforeElUpdated||noop,onElUpdated=options.onElUpdated||noop,onBeforeNodeDiscarded=options.onBeforeNodeDiscarded||noop,onNodeDiscarded=options.onNodeDiscarded||noop,onBeforeElChildrenUpdated=options.onBeforeElChildrenUpdated||noop,childrenOnly=!0===options.childrenOnly,fromNodesLookup=Object.create(null),keyedRemovalList=[];function addKeyedRemoval(key){keyedRemovalList.push(key)}function walkDiscardedChildNodes(node,skipKeyedNodes){if(node.nodeType===ELEMENT_NODE)for(var curChild=node.firstChild;curChild;){var key=void 0;skipKeyedNodes&&(key=callHook(getNodeKey,curChild))?addKeyedRemoval(key):(callHook(onNodeDiscarded,curChild),curChild.firstChild&&walkDiscardedChildNodes(curChild,skipKeyedNodes)),curChild=curChild.nextSibling}}function removeNode(node,parentNode,skipKeyedNodes){!1!==callHook(onBeforeNodeDiscarded,node)&&(parentNode&&parentNode.removeChild(node),callHook(onNodeDiscarded,node),walkDiscardedChildNodes(node,skipKeyedNodes))}function handleNodeAdded(el){if(callHook(onNodeAdded,el),!el.skipAddingChildren)for(var curChild=el.firstChild;curChild;){var nextSibling=curChild.nextSibling,key=callHook(getNodeKey,curChild);if(key){var unmatchedFromEl=fromNodesLookup[key];unmatchedFromEl&&compareNodeNames(curChild,unmatchedFromEl)?(curChild.parentNode.replaceChild(unmatchedFromEl,curChild),morphEl(unmatchedFromEl,curChild)):handleNodeAdded(curChild)}else handleNodeAdded(curChild);curChild=nextSibling}}function morphEl(fromEl,toEl,childrenOnly){var toElKey=callHook(getNodeKey,toEl);if(toElKey&&delete fromNodesLookup[toElKey],!childrenOnly){if(!1===callHook(onBeforeElUpdated,fromEl,toEl))return;if(fromEl.skipElUpdatingButStillUpdateChildren||morphAttrs(fromEl,toEl),callHook(onElUpdated,fromEl),!1===callHook(onBeforeElChildrenUpdated,fromEl,toEl))return}"TEXTAREA"!==fromEl.nodeName?function(fromEl,toEl){var curToNodeKey,curFromNodeKey,fromNextSibling,toNextSibling,matchingFromEl,curToNodeChild=toEl.firstChild,curFromNodeChild=fromEl.firstChild;outer:for(;curToNodeChild;){for(toNextSibling=curToNodeChild.nextSibling,curToNodeKey=callHook(getNodeKey,curToNodeChild);curFromNodeChild;){if(fromNextSibling=curFromNodeChild.nextSibling,curToNodeChild.isSameNode&&curToNodeChild.isSameNode(curFromNodeChild)){curToNodeChild=toNextSibling,curFromNodeChild=fromNextSibling;continue outer}curFromNodeKey=callHook(getNodeKey,curFromNodeChild);var curFromNodeType=curFromNodeChild.nodeType,isCompatible=void 0;if(curFromNodeType===curToNodeChild.nodeType&&(curFromNodeType===ELEMENT_NODE?(curToNodeKey?curToNodeKey!==curFromNodeKey&&((matchingFromEl=fromNodesLookup[curToNodeKey])?fromNextSibling===matchingFromEl?isCompatible=!1:(fromEl.insertBefore(matchingFromEl,curFromNodeChild),curFromNodeKey?addKeyedRemoval(curFromNodeKey):removeNode(curFromNodeChild,fromEl,!0),curFromNodeChild=matchingFromEl):isCompatible=!1):curFromNodeKey&&(isCompatible=!1),(isCompatible=!1!==isCompatible&&compareNodeNames(curFromNodeChild,curToNodeChild))&&(!curToNodeChild.isEqualNode(curFromNodeChild)&&curToNodeChild.nextElementSibling&&curToNodeChild.nextElementSibling.isEqualNode(curFromNodeChild)?isCompatible=!1:morphEl(curFromNodeChild,curToNodeChild))):curFromNodeType!==TEXT_NODE&&curFromNodeType!=COMMENT_NODE||(isCompatible=!0,curFromNodeChild.nodeValue!==curToNodeChild.nodeValue&&(curFromNodeChild.nodeValue=curToNodeChild.nodeValue))),isCompatible){curToNodeChild=toNextSibling,curFromNodeChild=fromNextSibling;continue outer}if(curToNodeChild.nextElementSibling&&curToNodeChild.nextElementSibling.isEqualNode(curFromNodeChild)){var nodeToBeAdded=curToNodeChild.cloneNode(!0);fromEl.insertBefore(nodeToBeAdded,curFromNodeChild),handleNodeAdded(nodeToBeAdded),curToNodeChild=curToNodeChild.nextElementSibling.nextSibling,curFromNodeChild=fromNextSibling;continue outer}curFromNodeKey?addKeyedRemoval(curFromNodeKey):removeNode(curFromNodeChild,fromEl,!0),curFromNodeChild=fromNextSibling}if(curToNodeKey&&(matchingFromEl=fromNodesLookup[curToNodeKey])&&compareNodeNames(matchingFromEl,curToNodeChild))fromEl.appendChild(matchingFromEl),morphEl(matchingFromEl,curToNodeChild);else{var onBeforeNodeAddedResult=callHook(onBeforeNodeAdded,curToNodeChild);!1!==onBeforeNodeAddedResult&&(onBeforeNodeAddedResult&&(curToNodeChild=onBeforeNodeAddedResult),curToNodeChild.actualize&&(curToNodeChild=curToNodeChild.actualize(fromEl.ownerDocument||doc)),fromEl.appendChild(curToNodeChild),handleNodeAdded(curToNodeChild))}curToNodeChild=toNextSibling,curFromNodeChild=fromNextSibling}!function(fromEl,curFromNodeChild,curFromNodeKey){for(;curFromNodeChild;){var fromNextSibling=curFromNodeChild.nextSibling;(curFromNodeKey=callHook(getNodeKey,curFromNodeChild))?addKeyedRemoval(curFromNodeKey):removeNode(curFromNodeChild,fromEl,!0),curFromNodeChild=fromNextSibling}}(fromEl,curFromNodeChild,curFromNodeKey);var specialElHandler=specialElHandlers[fromEl.nodeName];specialElHandler&&!fromEl.isLivewireModel&&specialElHandler(fromEl,toEl)}(fromEl,toEl):fromEl.innerHTML!=toEl.innerHTML&&specialElHandlers.TEXTAREA(fromEl,toEl)}!function indexTree(node){if(node.nodeType===ELEMENT_NODE||node.nodeType===DOCUMENT_FRAGMENT_NODE)for(var curChild=node.firstChild;curChild;){var key=callHook(getNodeKey,curChild);key&&(fromNodesLookup[key]=curChild),indexTree(curChild),curChild=curChild.nextSibling}}(fromNode);var morphedNode=fromNode,morphedNodeType=morphedNode.nodeType,toNodeType=toNode.nodeType;if(!childrenOnly)if(morphedNodeType===ELEMENT_NODE)toNodeType===ELEMENT_NODE?compareNodeNames(fromNode,toNode)||(callHook(onNodeDiscarded,fromNode),morphedNode=moveChildren(fromNode,createElementNS(toNode.nodeName,toNode.namespaceURI))):morphedNode=toNode;else if(morphedNodeType===TEXT_NODE||morphedNodeType===COMMENT_NODE){if(toNodeType===morphedNodeType)return morphedNode.nodeValue!==toNode.nodeValue&&(morphedNode.nodeValue=toNode.nodeValue),morphedNode;morphedNode=toNode}if(morphedNode===toNode)callHook(onNodeDiscarded,fromNode);else{if(toNode.isSameNode&&toNode.isSameNode(morphedNode))return;if(morphEl(morphedNode,toNode,childrenOnly),keyedRemovalList)for(var i=0,len=keyedRemovalList.length;i<len;i++){var elToRemove=fromNodesLookup[keyedRemovalList[i]];elToRemove&&removeNode(elToRemove,elToRemove.parentNode,!1)}}return!childrenOnly&&morphedNode!==fromNode&&fromNode.parentNode&&(morphedNode.actualize&&(morphedNode=morphedNode.actualize(fromNode.ownerDocument||doc)),fromNode.parentNode.replaceChild(morphedNode,fromNode)),morphedNode}}var morphdom=morphdomFactory(morphAttrs),_default$1=function(_Action){_inherits(_default,_Action);var _super=_createSuper(_default);function _default(name,value,el){var _this;return _classCallCheck(this,_default),(_this=_super.call(this,el)).type="syncInput",_this.name=name,_this.payload={id:_this.signature,name:name,value:value},_this}return _createClass(_default)}(_default$6),_default=function(_Action){_inherits(_default,_Action);var _super=_createSuper(_default);function _default(name,value,el){var _this,skipWatcher=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return _classCallCheck(this,_default),(_this=_super.call(this,el,skipWatcher)).type="syncInput",_this.name=name,_this.payload={id:_this.signature,name:name,value:value},_this}return _createClass(_default)}(_default$6),nodeInitializer={initialize:function initialize(el,component){var _this=this;if(store$2.initialRenderIsFinished&&"script"===el.tagName.toLowerCase())return eval(el.innerHTML),!1;wireDirectives(el).all().forEach((function(directive){switch(directive.type){case"init":_this.fireActionRightAway(el,directive,component);break;case"model":if(!directive.value){console.warn("Livewire: [wire:model] is missing a value.",el);break}DOM.setInputValueFromModel(el,component),_this.attachModelListener(el,directive,component);break;default:store$2.directives.has(directive.type)&&store$2.directives.call(directive.type,el,directive,component),_this.attachDomListener(el,directive,component)}})),store$2.callHook("element.initialized",el,component)},fireActionRightAway:function(el,directive,component){var method=directive.value?directive.method:"$refresh";component.addAction(new _default$4(method,directive.params,el))},attachModelListener:function(el,directive,component){el.isLivewireModel=!0;var isLazy=directive.modifiers.includes("lazy"),hasDebounceModifier=directive.modifiers.includes("debounce");if(store$2.callHook("interceptWireModelAttachListener",directive,el,component),"input"!==el.tagName.toLowerCase()||"file"!==el.type){var condition,callback,time,event="select"===el.tagName.toLowerCase()||["checkbox","radio"].includes(el.type)||directive.modifiers.includes("lazy")?"change":"input",handler=(condition=hasDebounceModifier||DOM.isTextInput(el)&&!isLazy,callback=function(e){var _e$detail,model=directive.value,el=e.target,value=e instanceof CustomEvent&&void 0!==e.detail&&void 0===window.document.documentMode?null!==(_e$detail=e.detail)&&void 0!==_e$detail?_e$detail:e.target.value:DOM.valueFromInput(el,component);directive.modifiers.includes("defer")?component.addAction(new _default(model,value,el)):component.addAction(new _default$1(model,value,el))},time=directive.durationOr(150),condition?component.modelSyncDebounce(callback,time):callback);el.addEventListener(event,handler),component.addListenerForTeardown((function(){el.removeEventListener(event,handler)})),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&el.addEventListener("animationstart",(function(e){"livewireautofill"===e.animationName&&(e.target.dispatchEvent(new Event("change",{bubbles:!0})),e.target.dispatchEvent(new Event("input",{bubbles:!0})))}))}},attachDomListener:function(el,directive,component){switch(directive.type){case"keydown":case"keyup":this.attachListener(el,directive,component,(function(e){var selectedSystemKeyModifiers=["ctrl","shift","alt","meta","cmd","super"].filter((function(key){return directive.modifiers.includes(key)}));if(selectedSystemKeyModifiers.length>0&&selectedSystemKeyModifiers.filter((function(key){return"cmd"!==key&&"super"!==key||(key="meta"),!e["".concat(key,"Key")]})).length>0)return!1;if(32===e.keyCode||" "===e.key||"Spacebar"===e.key)return directive.modifiers.includes("space");var modifiers=directive.modifiers.filter((function(modifier){return!modifier.match(/^debounce$/)&&!modifier.match(/^[0-9]+m?s$/)}));return Boolean(0===modifiers.length||e.key&&modifiers.includes(kebabCase(e.key)))}));break;case"click":this.attachListener(el,directive,component,(function(e){if(directive.modifiers.includes("self"))return el.isSameNode(e.target)}));break;default:this.attachListener(el,directive,component)}},attachListener:function(el,directive,component,callback){var _this2=this;directive.modifiers.includes("prefetch")&&el.addEventListener("mouseenter",(function(){component.addPrefetchAction(new _default$4(directive.method,directive.params,el))}));var event=directive.type,debouncedHandler=function(condition,callback,time){return condition?debounce(callback,time):callback}(directive.modifiers.includes("debounce"),(function(e){callback&&!1===callback(e)||component.callAfterModelDebounce((function(){var el=e.target;directive.setEventContext(e),_this2.preventAndStop(e,directive.modifiers);var _component$scopedList,method=directive.method,params=directive.params;if(0===params.length&&e instanceof CustomEvent&&e.detail&&params.push(e.detail),"$emit"===method)return(_component$scopedList=component.scopedListeners).call.apply(_component$scopedList,_toConsumableArray(params)),void store$2.emit.apply(store$2,_toConsumableArray(params));"$emitUp"!==method?"$emitSelf"!==method?"$emitTo"!==method?directive.value&&component.addAction(new _default$4(method,params,el)):store$2.emitTo.apply(store$2,_toConsumableArray(params)):store$2.emitSelf.apply(store$2,[component.id].concat(_toConsumableArray(params))):store$2.emitUp.apply(store$2,[el].concat(_toConsumableArray(params)))}))}),directive.durationOr(150));el.addEventListener(event,debouncedHandler),component.addListenerForTeardown((function(){el.removeEventListener(event,debouncedHandler)}))},preventAndStop:function(event,modifiers){modifiers.includes("prevent")&&event.preventDefault(),modifiers.includes("stop")&&event.stopPropagation()}},PrefetchManager=function(){function PrefetchManager(component){_classCallCheck(this,PrefetchManager),this.component=component,this.prefetchMessagesByActionId={}}return _createClass(PrefetchManager,[{key:"addMessage",value:function(message){this.prefetchMessagesByActionId[message.prefetchId]=message}},{key:"actionHasPrefetch",value:function(action){return Object.keys(this.prefetchMessagesByActionId).includes(action.toId())}},{key:"actionPrefetchResponseHasBeenReceived",value:function(action){return!!this.getPrefetchMessageByAction(action).response}},{key:"getPrefetchMessageByAction",value:function(action){return this.prefetchMessagesByActionId[action.toId()]}},{key:"clearPrefetches",value:function(){this.prefetchMessagesByActionId={}}}]),PrefetchManager}();function LoadingStates(){store$2.registerHook("component.initialized",(function(component){component.targetedLoadingElsByAction={},component.genericLoadingEls=[],component.currentlyActiveLoadingEls=[],component.currentlyActiveUploadLoadingEls=[]})),store$2.registerHook("element.initialized",(function(el,component){var directives=wireDirectives(el);directives.missing("loading")||directives.directives.filter((function(i){return"loading"===i.type})).forEach((function(directive){processLoadingDirective(component,el,directive)}))})),store$2.registerHook("message.sent",(function(message,component){var actions=message.updateQueue.filter((function(action){return"callMethod"===action.type})).map((function(action){return action.payload.method})),actionsWithParams=message.updateQueue.filter((function(action){return"callMethod"===action.type})).map((function(action){return generateSignatureFromMethodAndParams(action.payload.method,action.payload.params)})),models=message.updateQueue.filter((function(action){return"syncInput"===action.type})).map((function(action){var name=action.payload.name;if(!name.includes("."))return name;var modelActions=[];return modelActions.push(name.split(".").reduce((function(fullAction,part){return modelActions.push(fullAction),fullAction+"."+part}))),modelActions})).flat();setLoading(component,actions.concat(actionsWithParams).concat(models))})),store$2.registerHook("message.failed",(function(message,component){unsetLoading(component)})),store$2.registerHook("message.received",(function(message,component){unsetLoading(component)})),store$2.registerHook("element.removed",(function(el,component){removeLoadingEl(component,el)}))}function processLoadingDirective(component,el,directive){el.__livewire_on_finish_loading=[];var actionNames=!1,directives=wireDirectives(el);if(directives.get("target")){var target=directives.get("target");actionNames=target.params.length>0?[generateSignatureFromMethodAndParams(target.method,target.params)]:target.value.split(",").map((function(s){return s.trim()}))}else{var nonActionOrModelLivewireDirectives=["init","dirty","offline","target","loading","poll","ignore","key","id"];(actionNames=directives.all().filter((function(i){return!nonActionOrModelLivewireDirectives.includes(i.type)})).map((function(i){return i.method}))).length<1&&(actionNames=!1)}addLoadingEl(component,el,directive,actionNames)}function addLoadingEl(component,el,directive,actionsNames){actionsNames?actionsNames.forEach((function(actionsName){component.targetedLoadingElsByAction[actionsName]?component.targetedLoadingElsByAction[actionsName].push({el:el,directive:directive}):component.targetedLoadingElsByAction[actionsName]=[{el:el,directive:directive}]})):component.genericLoadingEls.push({el:el,directive:directive})}function removeLoadingEl(component,el){component.genericLoadingEls.forEach((function(element,index){element.el.isSameNode(el)&&component.genericLoadingEls.splice(index,1)})),Object.keys(component.targetedLoadingElsByAction).forEach((function(key){component.targetedLoadingElsByAction[key]=component.targetedLoadingElsByAction[key].filter((function(element){return!element.el.isSameNode(el)}))}))}function setLoading(component,actions){var actionTargetedEls=actions.map((function(action){return component.targetedLoadingElsByAction[action]})).filter((function(el){return el})).flat(),allEls=removeDuplicates(component.genericLoadingEls.concat(actionTargetedEls));startLoading(allEls),component.currentlyActiveLoadingEls=allEls}function setUploadLoading(component,modelName){var actionTargetedEls=component.targetedLoadingElsByAction[modelName]||[],allEls=removeDuplicates(component.genericLoadingEls.concat(actionTargetedEls));startLoading(allEls),component.currentlyActiveUploadLoadingEls=allEls}function unsetUploadLoading(component){endLoading(component.currentlyActiveUploadLoadingEls),component.currentlyActiveUploadLoadingEls=[]}function unsetLoading(component){endLoading(component.currentlyActiveLoadingEls),component.currentlyActiveLoadingEls=[]}function startLoading(els){els.forEach((function(_ref){var el=_ref.el,directive=_ref.directive;if(directive.modifiers.includes("class")){var classes=directive.value.split(" ").filter(Boolean);doAndSetCallbackOnElToUndo(el,directive,(function(){var _el$classList;return(_el$classList=el.classList).add.apply(_el$classList,_toConsumableArray(classes))}),(function(){var _el$classList2;return(_el$classList2=el.classList).remove.apply(_el$classList2,_toConsumableArray(classes))}))}else if(directive.modifiers.includes("attr"))doAndSetCallbackOnElToUndo(el,directive,(function(){return el.setAttribute(directive.value,!0)}),(function(){return el.removeAttribute(directive.value)}));else{var cache=window.getComputedStyle(el,null).getPropertyValue("display");doAndSetCallbackOnElToUndo(el,directive,(function(){el.style.display=directive.modifiers.includes("remove")?cache:getDisplayProperty(directive)}),(function(){el.style.display="none"}))}}))}function getDisplayProperty(directive){return["inline","block","table","flex","grid","inline-flex"].filter((function(i){return directive.modifiers.includes(i)}))[0]||"inline-block"}function doAndSetCallbackOnElToUndo(el,directive,doCallback,undoCallback){if(directive.modifiers.includes("remove")){var _ref2=[undoCallback,doCallback];doCallback=_ref2[0],undoCallback=_ref2[1]}if(directive.modifiers.includes("delay")){var duration=200,delayModifiers={shortest:50,shorter:100,short:150,long:300,longer:500,longest:1e3};Object.keys(delayModifiers).some((function(key){if(directive.modifiers.includes(key))return duration=delayModifiers[key],!0}));var timeout=setTimeout((function(){doCallback(),el.__livewire_on_finish_loading.push((function(){return undoCallback()}))}),duration);el.__livewire_on_finish_loading.push((function(){return clearTimeout(timeout)}))}else doCallback(),el.__livewire_on_finish_loading.push((function(){return undoCallback()}))}function endLoading(els){els.forEach((function(_ref3){for(var el=_ref3.el;el.__livewire_on_finish_loading.length>0;)el.__livewire_on_finish_loading.shift()()}))}function generateSignatureFromMethodAndParams(method,params){return method+btoa(encodeURIComponent(params.toString()))}function removeDuplicates(arr){return Array.from(new Set(arr))}var MessageBag=function(){function MessageBag(){_classCallCheck(this,MessageBag),this.bag={}}return _createClass(MessageBag,[{key:"add",value:function(name,thing){this.bag[name]||(this.bag[name]=[]),this.bag[name].push(thing)}},{key:"push",value:function(name,thing){this.add(name,thing)}},{key:"first",value:function(name){return this.bag[name]?this.bag[name][0]:null}},{key:"last",value:function(name){return this.bag[name].slice(-1)[0]}},{key:"get",value:function(name){return this.bag[name]}},{key:"shift",value:function(name){return this.bag[name].shift()}},{key:"call",value:function(name){for(var _len=arguments.length,params=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)params[_key-1]=arguments[_key];(this.listeners[name]||[]).forEach((function(callback){callback.apply(void 0,params)}))}},{key:"has",value:function(name){return Object.keys(this.listeners).includes(name)}}]),MessageBag}(),UploadManager=function(){function UploadManager(component){_classCallCheck(this,UploadManager),this.component=component,this.uploadBag=new MessageBag,this.removeBag=new MessageBag}return _createClass(UploadManager,[{key:"registerListeners",value:function(){var _this=this;this.component.on("upload:generatedSignedUrl",(function(name,url){setUploadLoading(_this.component,name),_this.handleSignedUrl(name,url)})),this.component.on("upload:generatedSignedUrlForS3",(function(name,payload){setUploadLoading(_this.component,name),_this.handleS3PreSignedUrl(name,payload)})),this.component.on("upload:finished",(function(name,tmpFilenames){return _this.markUploadFinished(name,tmpFilenames)})),this.component.on("upload:errored",(function(name){return _this.markUploadErrored(name)})),this.component.on("upload:removed",(function(name,tmpFilename){return _this.removeBag.shift(name).finishCallback(tmpFilename)}))}},{key:"upload",value:function(name,file,finishCallback,errorCallback,progressCallback){this.setUpload(name,{files:[file],multiple:!1,finishCallback:finishCallback,errorCallback:errorCallback,progressCallback:progressCallback})}},{key:"uploadMultiple",value:function(name,files,finishCallback,errorCallback,progressCallback){this.setUpload(name,{files:Array.from(files),multiple:!0,finishCallback:finishCallback,errorCallback:errorCallback,progressCallback:progressCallback})}},{key:"removeUpload",value:function(name,tmpFilename,finishCallback){this.removeBag.push(name,{tmpFilename:tmpFilename,finishCallback:finishCallback}),this.component.call("removeUpload",name,tmpFilename)}},{key:"setUpload",value:function(name,uploadObject){this.uploadBag.add(name,uploadObject),1===this.uploadBag.get(name).length&&this.startUpload(name,uploadObject)}},{key:"handleSignedUrl",value:function(name,url){var formData=new FormData;Array.from(this.uploadBag.first(name).files).forEach((function(file){return formData.append("files[]",file,file.name)}));var headers={Accept:"application/json"},csrfToken=getCsrfToken();csrfToken&&(headers["X-CSRF-TOKEN"]=csrfToken),this.makeRequest(name,formData,"post",url,headers,(function(response){return response.paths}))}},{key:"handleS3PreSignedUrl",value:function(name,payload){var formData=this.uploadBag.first(name).files[0],headers=payload.headers;"Host"in headers&&delete headers.Host;var url=payload.url;this.makeRequest(name,formData,"put",url,headers,(function(response){return[payload.path]}))}},{key:"makeRequest",value:function(name,formData,method,url,headers,retrievePaths){var _this2=this,request=new XMLHttpRequest;request.open(method,url),Object.entries(headers).forEach((function(_ref){var _ref2=_slicedToArray(_ref,2),key=_ref2[0],value=_ref2[1];request.setRequestHeader(key,value)})),request.upload.addEventListener("progress",(function(e){e.detail={},e.detail.progress=Math.round(100*e.loaded/e.total),_this2.uploadBag.first(name).progressCallback(e)})),request.addEventListener("load",(function(){if("2"!==(request.status+"")[0]){var errors=null;422===request.status&&(errors=request.response),_this2.component.call("uploadErrored",name,errors,_this2.uploadBag.first(name).multiple)}else{var paths=retrievePaths(request.response&&JSON.parse(request.response));_this2.component.call("finishUpload",name,paths,_this2.uploadBag.first(name).multiple)}})),request.send(formData)}},{key:"startUpload",value:function(name,uploadObject){var fileInfos=uploadObject.files.map((function(file){return{name:file.name,size:file.size,type:file.type}}));this.component.call("startUpload",name,fileInfos,uploadObject.multiple),setUploadLoading(this.component,name)}},{key:"markUploadFinished",value:function(name,tmpFilenames){unsetUploadLoading(this.component);var uploadObject=this.uploadBag.shift(name);uploadObject.finishCallback(uploadObject.multiple?tmpFilenames:tmpFilenames[0]),this.uploadBag.get(name).length>0&&this.startUpload(name,this.uploadBag.last(name))}},{key:"markUploadErrored",value:function(name){unsetUploadLoading(this.component),this.uploadBag.shift(name).errorCallback(),this.uploadBag.get(name).length>0&&this.startUpload(name,this.uploadBag.last(name))}}]),UploadManager}();function SupportAlpine(){window.addEventListener("livewire:load",(function(){window.Alpine&&(refreshAlpineAfterEveryLivewireRequest(),addDollarSignWire(),supportEntangle())}))}function refreshAlpineAfterEveryLivewireRequest(){isV3()?store$2.registerHook("message.processed",(function(message,livewireComponent){walk(livewireComponent.el,(function(el){el._x_hidePromise||el._x_runEffects&&el._x_runEffects()}))})):window.Alpine.onComponentInitialized&&window.Alpine.onComponentInitialized((function(component){var livewireEl=component.$el.closest("[wire\\:id]");livewireEl&&livewireEl.__livewire&&store$2.registerHook("message.processed",(function(message,livewireComponent){livewireComponent===livewireEl.__livewire&&component.updateElements(component.$el)}))}))}function addDollarSignWire(){isV3()?window.Alpine.magic("wire",(function(el){var wireEl=el.closest("[wire\\:id]");return wireEl||console.warn('Alpine: Cannot reference "$wire" outside a Livewire component.'),wireEl.__livewire.$wire})):window.Alpine.addMagicProperty&&window.Alpine.addMagicProperty("wire",(function(componentEl){var wireEl=componentEl.closest("[wire\\:id]");return wireEl||console.warn('Alpine: Cannot reference "$wire" outside a Livewire component.'),wireEl.__livewire.$wire}))}function supportEntangle(){isV3()||window.Alpine.onBeforeComponentInitialized&&window.Alpine.onBeforeComponentInitialized((function(component){var livewireEl=component.$el.closest("[wire\\:id]");livewireEl&&livewireEl.__livewire&&Object.entries(component.unobservedData).forEach((function(_ref){var _ref2=_slicedToArray(_ref,2),key=_ref2[0],value=_ref2[1];if(value&&"object"===_typeof(value)&&value.livewireEntangle){var livewireProperty=value.livewireEntangle,isDeferred=value.isDeferred,livewireComponent=livewireEl.__livewire,livewirePropertyValue=livewireEl.__livewire.get(livewireProperty);if(void 0===livewirePropertyValue)return void console.error("Livewire Entangle Error: Livewire property '".concat(livewireProperty,"' cannot be found"));component.unobservedData[key]=JSON.parse(JSON.stringify(livewirePropertyValue));var blockAlpineWatcher=!1;component.unobservedData.$watch(key,(function(value){!0!==blockAlpineWatcher?JSON.stringify(value)!=JSON.stringify(livewireEl.__livewire.getPropertyValueIncludingDefers(livewireProperty))&&livewireComponent.set(livewireProperty,value,isDeferred,!isDeferred):blockAlpineWatcher=!1})),livewireComponent.watch(livewireProperty,(function(value){component.$data[key]=void 0!==value?JSON.parse(JSON.stringify(value)):value}))}}))}))}function getEntangleFunction(component){return isV3()?function(name){var defer=arguments.length>1&&void 0!==arguments[1]&&arguments[1],isDeferred=defer,livewireProperty=name,livewireComponent=component,livewirePropertyValue=component.get(livewireProperty),interceptor=Alpine.interceptor((function(initialValue,getter,setter,path,key){if(void 0!==livewirePropertyValue){var value=JSON.parse(JSON.stringify(livewirePropertyValue));return setter(value),window.Alpine.effect((function(){var value=getter();JSON.stringify(value)!=JSON.stringify(livewireComponent.getPropertyValueIncludingDefers(livewireProperty))&&livewireComponent.set(livewireProperty,value,isDeferred,!isDeferred)})),livewireComponent.watch(livewireProperty,(function(value){window.Alpine.disableEffectScheduling((function(){setter(void 0!==value?JSON.parse(JSON.stringify(value)):value)}))})),value}console.error("Livewire Entangle Error: Livewire property '".concat(livewireProperty,"' cannot be found"))}),(function(obj){Object.defineProperty(obj,"defer",{get:function(){return isDeferred=!0,obj}})}));return interceptor(livewirePropertyValue)}:function(name){var defer=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{isDeferred:defer,livewireEntangle:name,get defer(){return this.isDeferred=!0,this}}}}function alpinifyElementsForMorphdom(from,to){if(isV3())return alpinifyElementsForMorphdomV3(from,to);if(from.__x&&window.Alpine.clone(from.__x,to),Array.from(from.attributes).map((function(attr){return attr.name})).some((function(name){return/x-show/.test(name)})))if(from.__x_transition)from.skipElUpdatingButStillUpdateChildren=!0;else if(isHiding(from,to)){var style=to.getAttribute("style");style&&to.setAttribute("style",style.replace("display: none;",""))}else isShowing(from,to)&&(to.style.display=from.style.display)}function alpinifyElementsForMorphdomV3(from,to){1===from.nodeType&&from._x_dataStack&&window.Alpine.clone(from,to)}function isHiding(from,to){return beforeAlpineTwoPointSevenPointThree()?""===from.style.display&&"none"===to.style.display:from.__x_is_shown&&!to.__x_is_shown}function isShowing(from,to){return beforeAlpineTwoPointSevenPointThree()?"none"===from.style.display&&""===to.style.display:!from.__x_is_shown&&to.__x_is_shown}function beforeAlpineTwoPointSevenPointThree(){var _window$Alpine$versio2=_slicedToArray(window.Alpine.version.split(".").map((function(i){return Number(i)})),3),major=_window$Alpine$versio2[0],minor=_window$Alpine$versio2[1],patch=_window$Alpine$versio2[2];return major<=2&&minor<=7&&patch<=2}function isV3(){return window.Alpine&&window.Alpine.version&&/^3\..+\..+$/.test(window.Alpine.version)}var Component=function(){function Component(el,connection){_classCallCheck(this,Component),el.__livewire=this,this.el=el,this.lastFreshHtml=this.el.outerHTML,this.id=this.el.getAttribute("wire:id"),this.checkForMultipleRootElements(),this.connection=connection;var initialData=JSON.parse(this.el.getAttribute("wire:initial-data"));if(this.el.removeAttribute("wire:initial-data"),this.fingerprint=initialData.fingerprint,this.serverMemo=initialData.serverMemo,this.effects=initialData.effects,this.listeners=this.effects.listeners,this.updateQueue=[],this.deferredActions={},this.tearDownCallbacks=[],this.messageInTransit=void 0,this.scopedListeners=new MessageBus,this.prefetchManager=new PrefetchManager(this),this.uploadManager=new UploadManager(this),this.watchers={},store$2.callHook("component.initialized",this),this.initialize(),this.uploadManager.registerListeners(),this.effects.redirect)return this.redirect(this.effects.redirect)}return _createClass(Component,[{key:"name",get:function(){return this.fingerprint.name}},{key:"data",get:function(){return this.serverMemo.data}},{key:"childIds",get:function(){return Object.values(this.serverMemo.children).map((function(child){return child.id}))}},{key:"checkForMultipleRootElements",value:function(){var _this=this;(function countElementsBeforeMarker(el){var carryCount=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!el)return carryCount;if(el.nodeType===Node.COMMENT_NODE&&el.textContent.includes("wire-end:".concat(_this.id)))return carryCount;var newlyDiscoveredEls=el.nodeType===Node.ELEMENT_NODE?1:0;return countElementsBeforeMarker(el.nextSibling,carryCount+newlyDiscoveredEls)})(this.el.nextSibling)>0&&console.warn("Livewire: Multiple root elements detected. This is not supported. See docs for more information https://laravel-livewire.com/docs/2.x/troubleshooting#root-element-issues",this.el)}},{key:"initialize",value:function(){var _this2=this;this.walk((function(el){return nodeInitializer.initialize(el,_this2)}),(function(el){return store$2.addComponent(new Component(el,_this2.connection))}))}},{key:"get",value:function(name){return name.split(".").reduce((function(carry,segment){return void 0===carry?carry:carry[segment]}),this.data)}},{key:"getPropertyValueIncludingDefers",value:function(name){var action=this.deferredActions[name];return action?action.payload.value:this.get(name)}},{key:"updateServerMemoFromResponseAndMergeBackIntoResponse",value:function(message){var _this3=this;Object.entries(message.response.serverMemo).forEach((function(_ref){var _ref2=_slicedToArray(_ref,2),key=_ref2[0],value=_ref2[1];"data"===key?Object.entries(value||{}).forEach((function(_ref3){var _ref4=_slicedToArray(_ref3,2),dataKey=_ref4[0],dataValue=_ref4[1];_this3.serverMemo.data[dataKey]=dataValue,message.shouldSkipWatcherForDataKey(dataKey)||Object.entries(_this3.watchers).forEach((function(_ref5){var _ref6=_slicedToArray(_ref5,2),key=_ref6[0],watchers=_ref6[1],originalSplitKey=key.split("."),basePropertyName=originalSplitKey.shift(),restOfPropertyName=originalSplitKey.join(".");if(basePropertyName==dataKey){var potentiallyNestedValue=restOfPropertyName?getValue(dataValue,restOfPropertyName):dataValue;watchers.forEach((function(watcher){return watcher(potentiallyNestedValue)}))}}))})):_this3.serverMemo[key]=value})),message.response.serverMemo=Object.assign({},this.serverMemo)}},{key:"watch",value:function(name,callback){this.watchers[name]||(this.watchers[name]=[]),this.watchers[name].push(callback)}},{key:"set",value:function(name,value){var defer=arguments.length>2&&void 0!==arguments[2]&&arguments[2],skipWatcher=arguments.length>3&&void 0!==arguments[3]&&arguments[3];defer?this.addAction(new _default(name,value,this.el,skipWatcher)):this.addAction(new _default$4("$set",[name,value],this.el,skipWatcher))}},{key:"sync",value:function(name,value){var defer=arguments.length>2&&void 0!==arguments[2]&&arguments[2];defer?this.addAction(new _default(name,value,this.el)):this.addAction(new _default$1(name,value,this.el))}},{key:"call",value:function(method){for(var _this4=this,_len=arguments.length,params=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)params[_key-1]=arguments[_key];return new Promise((function(resolve,reject){var action=new _default$4(method,params,_this4.el);_this4.addAction(action),action.onResolve((function(thing){return resolve(thing)})),action.onReject((function(thing){return reject(thing)}))}))}},{key:"on",value:function(event,callback){this.scopedListeners.register(event,callback)}},{key:"addAction",value:function(action){if(action instanceof _default)this.deferredActions[action.name]=action;else{if(this.prefetchManager.actionHasPrefetch(action)&&this.prefetchManager.actionPrefetchResponseHasBeenReceived(action)){var message=this.prefetchManager.getPrefetchMessageByAction(action);return this.handleResponse(message),void this.prefetchManager.clearPrefetches()}this.updateQueue.push(action),debounce(this.fireMessage,5).apply(this),this.prefetchManager.clearPrefetches()}}},{key:"fireMessage",value:function(){var _this5=this;if(!this.messageInTransit){Object.entries(this.deferredActions).forEach((function(_ref7){var _ref8=_slicedToArray(_ref7,2);_ref8[0];var action=_ref8[1];_this5.updateQueue.unshift(action)})),this.deferredActions={},this.messageInTransit=new _default$3(this,this.updateQueue);var sendMessage=function(){_this5.connection.sendMessage(_this5.messageInTransit),store$2.callHook("message.sent",_this5.messageInTransit,_this5),_this5.updateQueue=[]};window.capturedRequestsForDusk?window.capturedRequestsForDusk.push(sendMessage):sendMessage()}}},{key:"messageSendFailed",value:function(){store$2.callHook("message.failed",this.messageInTransit,this),this.messageInTransit.reject(),this.messageInTransit=null}},{key:"receiveMessage",value:function(message,payload){message.storeResponse(payload),message instanceof _default$2||(this.handleResponse(message),this.updateQueue.length>0&&this.fireMessage(),dispatch("livewire:update"))}},{key:"handleResponse",value:function(message){var _this6=this,response=message.response;this.updateServerMemoFromResponseAndMergeBackIntoResponse(message),store$2.callHook("message.received",message,this),response.effects.html?(this.lastFreshHtml=response.effects.html,this.handleMorph(response.effects.html.trim())):this.handleMorph(this.lastFreshHtml),response.effects.dirty&&this.forceRefreshDataBoundElementsMarkedAsDirty(response.effects.dirty),message.replaying||(this.messageInTransit&&this.messageInTransit.resolve(),this.messageInTransit=null,response.effects.emits&&response.effects.emits.length>0&&response.effects.emits.forEach((function(event){var _this6$scopedListener;(_this6$scopedListener=_this6.scopedListeners).call.apply(_this6$scopedListener,[event.event].concat(_toConsumableArray(event.params))),event.selfOnly?store$2.emitSelf.apply(store$2,[_this6.id,event.event].concat(_toConsumableArray(event.params))):event.to?store$2.emitTo.apply(store$2,[event.to,event.event].concat(_toConsumableArray(event.params))):event.ancestorsOnly?store$2.emitUp.apply(store$2,[_this6.el,event.event].concat(_toConsumableArray(event.params))):store$2.emit.apply(store$2,[event.event].concat(_toConsumableArray(event.params)))})),response.effects.dispatches&&response.effects.dispatches.length>0&&response.effects.dispatches.forEach((function(event){var data=event.data?event.data:{},e=new CustomEvent(event.event,{bubbles:!0,detail:data});_this6.el.dispatchEvent(e)}))),store$2.callHook("message.processed",message,this),response.effects.redirect&&setTimeout((function(){return _this6.redirect(response.effects.redirect)}))}},{key:"redirect",value:function(url){window.Turbolinks&&window.Turbolinks.supported?window.Turbolinks.visit(url):window.location.href=url}},{key:"forceRefreshDataBoundElementsMarkedAsDirty",value:function(dirtyInputs){var _this7=this;this.walk((function(el){var directives=wireDirectives(el);if(!directives.missing("model")){var modelValue=directives.get("model").value;("SELECT"==el.nodeName&&!el.multiple||!DOM.hasFocus(el)||dirtyInputs.includes(modelValue))&&DOM.setInputValueFromModel(el,_this7)}}))}},{key:"addPrefetchAction",value:function(action){if(!this.prefetchManager.actionHasPrefetch(action)){var message=new _default$2(this,action);this.prefetchManager.addMessage(message),this.connection.sendMessage(message)}}},{key:"handleMorph",value:function(dom){var _this8=this;this.morphChanges={changed:[],added:[],removed:[]},morphdom(this.el,dom,{childrenOnly:!1,getNodeKey:function(node){return node.hasAttribute("wire:key")?node.getAttribute("wire:key"):node.hasAttribute("wire:id")?node.getAttribute("wire:id"):node.id},onBeforeNodeAdded:function(node){},onBeforeNodeDiscarded:function(node){if(node.__x_inserted_me&&Array.from(node.attributes).some((function(attr){return/x-transition/.test(attr.name)})))return!1},onNodeDiscarded:function(node){store$2.callHook("element.removed",node,_this8),node.__livewire&&store$2.removeComponent(node.__livewire),_this8.morphChanges.removed.push(node)},onBeforeElChildrenUpdated:function(node){},onBeforeElUpdated:function(from,to){if(from.isEqualNode(to))return!1;store$2.callHook("element.updating",from,to,_this8),from.hasAttribute("wire:model")&&"SELECT"===from.tagName.toUpperCase()&&(to.selectedIndex=-1);var fromDirectives=wireDirectives(from);if(fromDirectives.has("ignore")||!0===from.__livewire_ignore||!0===from.__livewire_ignore_self){if(!(fromDirectives.has("ignore")&&fromDirectives.get("ignore").modifiers.includes("self")||!0===from.__livewire_ignore_self))return!1;from.skipElUpdatingButStillUpdateChildren=!0}if(DOM.isComponentRootEl(from)&&from.getAttribute("wire:id")!==_this8.id)return!1;DOM.isComponentRootEl(from)&&(to.__livewire=_this8),alpinifyElementsForMorphdom(from,to)},onElUpdated:function(node){_this8.morphChanges.changed.push(node),store$2.callHook("element.updated",node,_this8)},onNodeAdded:function(node){if(DOM.closestRoot(node).getAttribute("wire:id")===_this8.id){if(!1===nodeInitializer.initialize(node,_this8))return!1}else DOM.isComponentRootEl(node)&&(store$2.addComponent(new Component(node,_this8.connection)),node.skipAddingChildren=!0);_this8.morphChanges.added.push(node)}}),window.skipShow=!1}},{key:"walk",value:function(callback){var _this9=this,callbackWhenNewComponentIsEncountered=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(el){};walk(this.el,(function(el){if(!el.isSameNode(_this9.el))return el.hasAttribute("wire:id")?(callbackWhenNewComponentIsEncountered(el),!1):!1!==callback(el)&&void 0;callback(el)}))}},{key:"modelSyncDebounce",value:function(callback,time){this.modelDebounceCallbacks||(this.modelDebounceCallbacks=[]);var timeout,callbackRegister={callback:function(){}};return this.modelDebounceCallbacks.push(callbackRegister),function(e){clearTimeout(timeout),timeout=setTimeout((function(){callback(e),timeout=void 0,callbackRegister.callback=function(){}}),time),callbackRegister.callback=function(){clearTimeout(timeout),callback(e)}}}},{key:"callAfterModelDebounce",value:function(callback){this.modelDebounceCallbacks&&this.modelDebounceCallbacks.forEach((function(callbackRegister){callbackRegister.callback(),callbackRegister.callback=function(){}})),callback()}},{key:"addListenerForTeardown",value:function(teardownCallback){this.tearDownCallbacks.push(teardownCallback)}},{key:"tearDown",value:function(){this.tearDownCallbacks.forEach((function(callback){return callback()}))}},{key:"upload",value:function(name,file){var finishCallback=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},errorCallback=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},progressCallback=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){};this.uploadManager.upload(name,file,finishCallback,errorCallback,progressCallback)}},{key:"uploadMultiple",value:function(name,files){var finishCallback=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},errorCallback=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},progressCallback=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){};this.uploadManager.uploadMultiple(name,files,finishCallback,errorCallback,progressCallback)}},{key:"removeUpload",value:function(name,tmpFilename){var finishCallback=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},errorCallback=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};this.uploadManager.removeUpload(name,tmpFilename,finishCallback,errorCallback)}},{key:"$wire",get:function(){if(this.dollarWireProxy)return this.dollarWireProxy;var component=this;return this.dollarWireProxy=new Proxy({},{get:function(object,property){if(!["_x_interceptor"].includes(property)){if("entangle"===property)return getEntangleFunction(component);if("__instance"===property)return component;if("string"==typeof property&&property.match(/^emit.*/))return function(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];return"emitSelf"===property?store$2.emitSelf.apply(store$2,[component.id].concat(args)):"emitUp"===property?store$2.emitUp.apply(store$2,[component.el].concat(args)):store$2[property].apply(store$2,args)};if(["get","set","sync","call","on","upload","uploadMultiple","removeUpload"].includes(property))return function(){for(var _len3=arguments.length,args=new Array(_len3),_key3=0;_key3<_len3;_key3++)args[_key3]=arguments[_key3];return component[property].apply(component,args)};var getResult=component.get(property);return void 0===getResult?function(){for(var _len4=arguments.length,args=new Array(_len4),_key4=0;_key4<_len4;_key4++)args[_key4]=arguments[_key4];return component.call.apply(component,[property].concat(args))}:getResult}},set:function(obj,prop,value){return component.set(prop,value),!0}})}}]),Component}();function FileUploads(){store$2.registerHook("interceptWireModelAttachListener",(function(directive,el,component){if("input"===el.tagName.toLowerCase()&&"file"===el.type){var finish=function(){return el.dispatchEvent(new CustomEvent("livewire-upload-finish",{bubbles:!0}))},error=function(){return el.dispatchEvent(new CustomEvent("livewire-upload-error",{bubbles:!0}))},progress=function(progressEvent){var percentCompleted=Math.round(100*progressEvent.loaded/progressEvent.total);el.dispatchEvent(new CustomEvent("livewire-upload-progress",{bubbles:!0,detail:{progress:percentCompleted}}))},eventHandler=function(e){0!==e.target.files.length&&(el.dispatchEvent(new CustomEvent("livewire-upload-start",{bubbles:!0})),e.target.multiple?component.uploadMultiple(directive.value,e.target.files,finish,error,progress):component.upload(directive.value,e.target.files[0],finish,error,progress))};el.addEventListener("change",eventHandler);var clearFileInputValue=function(){el.value=null};el.addEventListener("click",clearFileInputValue),component.addListenerForTeardown((function(){el.removeEventListener("change",eventHandler),el.removeEventListener("click",clearFileInputValue)}))}}))}function LaravelEcho(){store$2.registerHook("component.initialized",(function(component){Array.isArray(component.listeners)&&component.listeners.forEach((function(event){if(event.startsWith("echo")){if("undefined"==typeof Echo)return void console.warn("Laravel Echo cannot be found");var event_parts=event.split(/(echo:|echo-)|:|,/);"echo:"==event_parts[1]&&event_parts.splice(2,0,"channel",void 0),"notification"==event_parts[2]&&event_parts.push(void 0,void 0);var _event_parts=_slicedToArray(event_parts,7);_event_parts[0],_event_parts[1];var channel_type=_event_parts[2];_event_parts[3];var channel=_event_parts[4];_event_parts[5];var event_name=_event_parts[6];["channel","private","encryptedPrivate"].includes(channel_type)?Echo[channel_type](channel).listen(event_name,(function(e){store$2.emit(event,e)})):"presence"==channel_type?["here","joining","leaving"].includes(event_name)?Echo.join(channel)[event_name]((function(e){store$2.emit(event,e)})):Echo.join(channel).listen(event_name,(function(e){store$2.emit(event,e)})):"notification"==channel_type?Echo.private(channel).notification((function(notification){store$2.emit(event,notification)})):console.warn("Echo channel type not yet supported")}}))}))}function DirtyStates(){store$2.registerHook("component.initialized",(function(component){component.dirtyEls=[]})),store$2.registerHook("element.initialized",(function(el,component){wireDirectives(el).missing("dirty")||component.dirtyEls.push(el)})),store$2.registerHook("interceptWireModelAttachListener",(function(directive,el,component){var property=directive.value;el.addEventListener("input",(function(){component.dirtyEls.forEach((function(dirtyEl){var directives=wireDirectives(dirtyEl);(directives.has("model")&&directives.get("model").value===property||directives.has("target")&&directives.get("target").value.split(",").map((function(s){return s.trim()})).includes(property))&&setDirtyState(dirtyEl,DOM.valueFromInput(el,component)!=component.get(property))}))}))})),store$2.registerHook("message.received",(function(message,component){component.dirtyEls.forEach((function(element){element.__livewire_dirty_cleanup&&(element.__livewire_dirty_cleanup.forEach((function(cleanup){return cleanup()})),delete element.__livewire_dirty_cleanup)}))})),store$2.registerHook("element.removed",(function(el,component){component.dirtyEls.forEach((function(element,index){element.isSameNode(el)&&component.dirtyEls.splice(index,1)}))}))}function setDirtyState(el,isDirty){el.__livewire_dirty_cleanup=[],wireDirectives(el).all().filter((function(directive){return"dirty"===directive.type})).forEach((function(directive){if(directive.modifiers.includes("class")){var _el$classList,_el$classList3,classes=directive.value.split(" ");if(directive.modifiers.includes("remove")!==isDirty)(_el$classList=el.classList).add.apply(_el$classList,_toConsumableArray(classes)),el.__livewire_dirty_cleanup.push((function(){var _el$classList2;return(_el$classList2=el.classList).remove.apply(_el$classList2,_toConsumableArray(classes))}));else(_el$classList3=el.classList).remove.apply(_el$classList3,_toConsumableArray(classes)),el.__livewire_dirty_cleanup.push((function(){var _el$classList4;return(_el$classList4=el.classList).add.apply(_el$classList4,_toConsumableArray(classes))}))}else directive.modifiers.includes("attr")?directive.modifiers.includes("remove")!==isDirty?(el.setAttribute(directive.value,!0),el.__livewire_dirty_cleanup.push((function(){return el.removeAttribute(directive.value)}))):(el.removeAttribute(directive.value),el.__livewire_dirty_cleanup.push((function(){return el.setAttribute(directive.value,!0)}))):wireDirectives(el).get("model")||(el.style.display=isDirty?"inline-block":"none",el.__livewire_dirty_cleanup.push((function(){return el.style.display=isDirty?"none":"inline-block"})))}))}var cleanupStackByComponentId={};function DisableForms(){store$2.registerHook("element.initialized",(function(el,component){wireDirectives(el).missing("submit")||el.addEventListener("submit",(function(){cleanupStackByComponentId[component.id]=[],component.walk((function(node){if(el.contains(node))return!node.hasAttribute("wire:ignore")&&void("button"===node.tagName.toLowerCase()&&"submit"===node.type||"select"===node.tagName.toLowerCase()||"input"===node.tagName.toLowerCase()&&("checkbox"===node.type||"radio"===node.type)?(node.disabled||cleanupStackByComponentId[component.id].push((function(){return node.disabled=!1})),node.disabled=!0):"input"!==node.tagName.toLowerCase()&&"textarea"!==node.tagName.toLowerCase()||(node.readOnly||cleanupStackByComponentId[component.id].push((function(){return node.readOnly=!1})),node.readOnly=!0))}))}))})),store$2.registerHook("message.failed",(function(message,component){return cleanup(component)})),store$2.registerHook("message.received",(function(message,component){return cleanup(component)}))}function cleanup(component){if(cleanupStackByComponentId[component.id])for(;cleanupStackByComponentId[component.id].length>0;)cleanupStackByComponentId[component.id].shift()()}function FileDownloads(){store$2.registerHook("message.received",(function(message,component){var response=message.response;if(response.effects.download){var urlObject=window.webkitURL||window.URL,url=urlObject.createObjectURL(base64toBlob(response.effects.download.content,response.effects.download.contentType)),invisibleLink=document.createElement("a");invisibleLink.style.display="none",invisibleLink.href=url,invisibleLink.download=response.effects.download.name,document.body.appendChild(invisibleLink),invisibleLink.click(),setTimeout((function(){urlObject.revokeObjectURL(url)}),0)}}))}function base64toBlob(b64Data){var contentType=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",sliceSize=arguments.length>2&&void 0!==arguments[2]?arguments[2]:512,byteCharacters=atob(b64Data),byteArrays=[];null===contentType&&(contentType="");for(var offset=0;offset<byteCharacters.length;offset+=sliceSize){for(var slice=byteCharacters.slice(offset,offset+sliceSize),byteNumbers=new Array(slice.length),i=0;i<slice.length;i++)byteNumbers[i]=slice.charCodeAt(i);var byteArray=new Uint8Array(byteNumbers);byteArrays.push(byteArray)}return new Blob(byteArrays,{type:contentType})}var offlineEls=[];function OfflineStates(){store$2.registerHook("element.initialized",(function(el){wireDirectives(el).missing("offline")||offlineEls.push(el)})),window.addEventListener("offline",(function(){store$2.livewireIsOffline=!0,offlineEls.forEach((function(el){toggleOffline(el,!0)}))})),window.addEventListener("online",(function(){store$2.livewireIsOffline=!1,offlineEls.forEach((function(el){toggleOffline(el,!1)}))})),store$2.registerHook("element.removed",(function(el){offlineEls=offlineEls.filter((function(el){return!el.isSameNode(el)}))}))}function toggleOffline(el,isOffline){var directives=wireDirectives(el),directive=directives.get("offline");if(directive.modifiers.includes("class")){var _el$classList,_el$classList2,classes=directive.value.split(" ");if(directive.modifiers.includes("remove")!==isOffline)(_el$classList=el.classList).add.apply(_el$classList,_toConsumableArray(classes));else(_el$classList2=el.classList).remove.apply(_el$classList2,_toConsumableArray(classes))}else directive.modifiers.includes("attr")?directive.modifiers.includes("remove")!==isOffline?el.setAttribute(directive.value,!0):el.removeAttribute(directive.value):directives.get("model")||(el.style.display=isOffline?"inline-block":"none")}function SyncBrowserHistory(){var initializedPath=!1,componentIdsThatAreWritingToHistoryState=new Set;function normalizeResponse(response,component){response.effects.dirty=Object.keys(response.serverMemo.data),response.effects.html=component.lastFreshHtml}function onlyChangeThePathAndQueryString(url){if(url){var destination=new URL(url),afterOrigin=destination.href.replace(destination.origin,"").replace(/\?$/,"");return window.location.origin+afterOrigin+window.location.hash}}LivewireStateManager.clearState(),store$2.registerHook("component.initialized",(function(component){component.effects.path&&setTimeout((function(){var url=onlyChangeThePathAndQueryString(initializedPath?void 0:component.effects.path),response={serverMemo:component.serverMemo,effects:component.effects};normalizeResponse(response,component),LivewireStateManager.replaceState(url,response,component),componentIdsThatAreWritingToHistoryState.add(component.id),initializedPath=!0}))})),store$2.registerHook("message.processed",(function(message,component){if(!message.replaying){var response=message.response,effects=response.effects||{};if(normalizeResponse(response,component),"path"in effects&&effects.path!==window.location.href){var url=onlyChangeThePathAndQueryString(effects.path);LivewireStateManager.pushState(url,response,component),componentIdsThatAreWritingToHistoryState.add(component.id)}else componentIdsThatAreWritingToHistoryState.has(component.id)&&LivewireStateManager.replaceState(window.location.href,response,component)}})),window.addEventListener("popstate",(function(event){LivewireStateManager.missingState(event)||LivewireStateManager.replayResponses(event,(function(response,component){var message=new _default$3(component,[]);message.storeResponse(response),message.replaying=!0,component.handleResponse(message)}))})),store$2.registerHook("element.updating",(function(from,to,component){from.getAttribute("wire:id")===component.id&&(component.lastKnownDomId=component.id)})),store$2.registerHook("element.updated",(function(node,component){component.lastKnownDomId&&(node.getAttribute("wire:id")!==component.lastKnownDomId&&store$2.changeComponentId(component,node.getAttribute("wire:id")),delete component.lastKnownDomId)}))}var LivewireStateManager={replaceState:function(url,response,component){this.updateState("replaceState",url,response,component)},pushState:function(url,response,component){this.updateState("pushState",url,response,component)},updateState:function(method,url,response,component){var state=this.currentState();state.storeResponse(response,component);var subject,stateArray=state.toStateArray(),fullstateObject=Object.assign(history.state||{},{livewire:stateArray});store$2.callHook("before"+((subject=method).charAt(0).toUpperCase()+subject.slice(1)),fullstateObject,url,component);try{"undefined"!=decodeURI(url)&&(url=decodeURI(url).replaceAll(" ","+").replaceAll("\\","%5C")),history[method](fullstateObject,"",url)}catch(error){if("NS_ERROR_ILLEGAL_VALUE"===error.name){var key=this.storeInSession(stateArray);fullstateObject.livewire=key,history[method](fullstateObject,"",url)}}},replayResponses:function(event,callback){event.state.livewire&&("string"==typeof event.state.livewire?new LivewireState(this.getFromSession(event.state.livewire)):new LivewireState(event.state.livewire)).replayResponses(callback)},currentState:function(){return history.state&&history.state.livewire?"string"==typeof history.state.livewire?new LivewireState(this.getFromSession(history.state.livewire)):new LivewireState(history.state.livewire):new LivewireState},missingState:function(event){return!(event.state&&event.state.livewire)},clearState:function(){window.history.state&&(window.history.state.livewire=(new LivewireState).toStateArray())},storeInSession:function(value){var key="livewire:"+(new Date).getTime(),stringifiedValue=JSON.stringify(value);return this.tryToStoreInSession(key,stringifiedValue),key},tryToStoreInSession:function(key,value){try{sessionStorage.setItem(key,value)}catch(error){if(![22,1,2,3,4,5,6,7,8,9,10,11,12,13,14].includes(error.code))return;var oldestTimestamp=Object.keys(sessionStorage).map((function(key){return Number(key.replace("livewire:",""))})).sort().shift();if(!oldestTimestamp)return;sessionStorage.removeItem("livewire:"+oldestTimestamp),this.tryToStoreInSession(key,value)}},getFromSession:function(key){var item=sessionStorage.getItem(key);if(item)return JSON.parse(item)}},LivewireState=function(){function LivewireState(){var stateArray=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];_classCallCheck(this,LivewireState),this.items=stateArray}return _createClass(LivewireState,[{key:"toStateArray",value:function(){return this.items}},{key:"pushItemInProperOrder",value:function(signature,response,component){var _this=this,targetItem={signature:signature,response:response},existingIndex=this.items.findIndex((function(item){return item.signature===signature}));if(-1!==existingIndex)return this.items[existingIndex]=targetItem;var closestParentId=store$2.getClosestParentId(component.id,this.componentIdsWithStoredResponses());if(!closestParentId)return this.items.unshift(targetItem);var closestParentIndex=this.items.findIndex((function(item){if(_this.parseSignature(item.signature).originalComponentId===closestParentId)return!0}));this.items.splice(closestParentIndex,0,targetItem)}},{key:"storeResponse",value:function(response,component){var signature=this.getComponentNameBasedSignature(component);this.pushItemInProperOrder(signature,response,component)}},{key:"replayResponses",value:function(callback){var _this2=this;this.items.forEach((function(_ref){var signature=_ref.signature,response=_ref.response,component=_this2.findComponentBySignature(signature);component&&callback(response,component)}))}},{key:"getComponentNameBasedSignature",value:function(component){var componentName=component.fingerprint.name,componentIndex=store$2.getComponentsByName(componentName).indexOf(component);return"".concat(component.id,":").concat(componentName,":").concat(componentIndex)}},{key:"findComponentBySignature",value:function(signature){var _this$parseSignature2=this.parseSignature(signature),componentName=_this$parseSignature2.componentName,componentIndex=_this$parseSignature2.componentIndex,sameNamedComponents=store$2.getComponentsByName(componentName);return sameNamedComponents[componentIndex]||sameNamedComponents[0]||console.warn("Livewire: couldn't find component on page: ".concat(componentName))}},{key:"parseSignature",value:function(signature){var _signature$split2=_slicedToArray(signature.split(":"),3);return{originalComponentId:_signature$split2[0],componentName:_signature$split2[1],componentIndex:_signature$split2[2]}}},{key:"componentIdsWithStoredResponses",value:function(){var _this3=this;return this.items.map((function(_ref2){var signature=_ref2.signature;return _this3.parseSignature(signature).originalComponentId}))}}]),LivewireState}();function SupportStacks(){store$2.registerHook("message.received",(function(message,component){var response=message.response;if(response.effects.forStack){var updates=[];for(response.effects.forStack.forEach((function(_ref){var key=_ref.key,stack=_ref.stack,type=_ref.type,contents=_ref.contents,startEl=document.querySelector('[livewire-stack="'.concat(stack,'"]')),endEl=document.querySelector('[livewire-end-stack="'.concat(stack,'"]'));if(startEl&&endEl&&!keyHasAlreadyBeenAddedToTheStack(startEl,endEl,key)){var frag=createFragment(contents);updates.push((function(){return"push"===type?(el=frag,endEl.parentElement.insertBefore(el,endEl)):function(el){return startEl.parentElement.insertBefore(el,startEl.nextElementSibling)}(frag);var el}))}}));updates.length>0;)updates.shift()()}}))}function keyHasAlreadyBeenAddedToTheStack(startEl,endEl,key){return function findKeyMarker(el){if(!el.isSameNode(endEl))return el.matches('[livewire-stack-key="'.concat(key,'"]'))?el:findKeyMarker(el.nextElementSibling)}(startEl)}function createFragment(html){return document.createRange().createContextualFragment(html)}var Livewire=function(){function Livewire(){_classCallCheck(this,Livewire),this.connection=new Connection,this.components=store$2,this.devToolsEnabled=!1,this.onLoadCallback=function(){}}return _createClass(Livewire,[{key:"first",value:function(){return Object.values(this.components.componentsById)[0].$wire}},{key:"find",value:function(componentId){return this.components.componentsById[componentId].$wire}},{key:"all",value:function(){return Object.values(this.components.componentsById).map((function(component){return component.$wire}))}},{key:"directive",value:function(name,callback){this.components.registerDirective(name,callback)}},{key:"hook",value:function(name,callback){this.components.registerHook(name,callback)}},{key:"onLoad",value:function(callback){this.onLoadCallback=callback}},{key:"onError",value:function(callback){this.components.onErrorCallback=callback}},{key:"emit",value:function(event){for(var _this$components,_len=arguments.length,params=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)params[_key-1]=arguments[_key];(_this$components=this.components).emit.apply(_this$components,[event].concat(params))}},{key:"emitTo",value:function(name,event){for(var _this$components2,_len2=arguments.length,params=new Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++)params[_key2-2]=arguments[_key2];(_this$components2=this.components).emitTo.apply(_this$components2,[name,event].concat(params))}},{key:"on",value:function(event,callback){this.components.on(event,callback)}},{key:"addHeaders",value:function(headers){this.connection.headers=_objectSpread2(_objectSpread2({},this.connection.headers),headers)}},{key:"devTools",value:function(enableDevtools){this.devToolsEnabled=enableDevtools}},{key:"restart",value:function(){this.stop(),this.start()}},{key:"stop",value:function(){this.components.tearDownComponents()}},{key:"start",value:function(){var _this=this;DOM.rootComponentElementsWithNoParents().forEach((function(el){_this.components.addComponent(new Component(el,_this.connection))})),this.onLoadCallback(),dispatch("livewire:load"),document.addEventListener("visibilitychange",(function(){_this.components.livewireIsInBackground=document.hidden}),!1),this.components.initialRenderIsFinished=!0}},{key:"rescan",value:function(){var _this2=this,node=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;DOM.rootComponentElementsWithNoParents(node).forEach((function(el){var componentId=wireDirectives(el).get("id").value;_this2.components.hasComponent(componentId)||_this2.components.addComponent(new Component(el,_this2.connection))}))}},{key:"onPageExpired",value:function(callback){this.components.sessionHasExpiredCallback=callback}}]),Livewire}();function monkeyPatchDomSetAttributeToAllowAtSymbols(){var original=Element.prototype.setAttribute,hostDiv=document.createElement("div");Element.prototype.setAttribute=function(name,value){if(!name.includes("@"))return original.call(this,name,value);hostDiv.innerHTML="<span ".concat(name,'="').concat(value,'"></span>');var attr=hostDiv.firstElementChild.getAttributeNode(name);hostDiv.firstElementChild.removeAttributeNode(attr),this.setAttributeNode(attr)}}return window.Livewire||(window.Livewire=Livewire),monkeyPatchDomSetAttributeToAllowAtSymbols(),SyncBrowserHistory(),SupportAlpine(),SupportStacks(),FileDownloads(),OfflineStates(),LoadingStates(),DisableForms(),FileUploads(),LaravelEcho(),DirtyStates(),Polling(),dispatch("livewire:available"),Livewire}));
//# sourceMappingURL=livewire.js.map
=======
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // node_modules/nprogress/nprogress.js
  var require_nprogress = __commonJS({
    "node_modules/nprogress/nprogress.js"(exports, module) {
      (function(root, factory) {
        if (typeof define === "function" && define.amd) {
          define(factory);
        } else if (typeof exports === "object") {
          module.exports = factory();
        } else {
          root.NProgress = factory();
        }
      })(exports, function() {
        var NProgress2 = {};
        NProgress2.version = "0.2.0";
        var Settings = NProgress2.settings = {
          minimum: 0.08,
          easing: "ease",
          positionUsing: "",
          speed: 200,
          trickle: true,
          trickleRate: 0.02,
          trickleSpeed: 800,
          showSpinner: true,
          barSelector: '[role="bar"]',
          spinnerSelector: '[role="spinner"]',
          parent: "body",
          template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        };
        NProgress2.configure = function(options) {
          var key, value;
          for (key in options) {
            value = options[key];
            if (value !== void 0 && options.hasOwnProperty(key))
              Settings[key] = value;
          }
          return this;
        };
        NProgress2.status = null;
        NProgress2.set = function(n) {
          var started2 = NProgress2.isStarted();
          n = clamp2(n, Settings.minimum, 1);
          NProgress2.status = n === 1 ? null : n;
          var progress = NProgress2.render(!started2), bar = progress.querySelector(Settings.barSelector), speed = Settings.speed, ease = Settings.easing;
          progress.offsetWidth;
          queue2(function(next) {
            if (Settings.positionUsing === "")
              Settings.positionUsing = NProgress2.getPositioningCSS();
            css(bar, barPositionCSS(n, speed, ease));
            if (n === 1) {
              css(progress, {
                transition: "none",
                opacity: 1
              });
              progress.offsetWidth;
              setTimeout(function() {
                css(progress, {
                  transition: "all " + speed + "ms linear",
                  opacity: 0
                });
                setTimeout(function() {
                  NProgress2.remove();
                  next();
                }, speed);
              }, speed);
            } else {
              setTimeout(next, speed);
            }
          });
          return this;
        };
        NProgress2.isStarted = function() {
          return typeof NProgress2.status === "number";
        };
        NProgress2.start = function() {
          if (!NProgress2.status)
            NProgress2.set(0);
          var work = function() {
            setTimeout(function() {
              if (!NProgress2.status)
                return;
              NProgress2.trickle();
              work();
            }, Settings.trickleSpeed);
          };
          if (Settings.trickle)
            work();
          return this;
        };
        NProgress2.done = function(force) {
          if (!force && !NProgress2.status)
            return this;
          return NProgress2.inc(0.3 + 0.5 * Math.random()).set(1);
        };
        NProgress2.inc = function(amount) {
          var n = NProgress2.status;
          if (!n) {
            return NProgress2.start();
          } else {
            if (typeof amount !== "number") {
              amount = (1 - n) * clamp2(Math.random() * n, 0.1, 0.95);
            }
            n = clamp2(n + amount, 0, 0.994);
            return NProgress2.set(n);
          }
        };
        NProgress2.trickle = function() {
          return NProgress2.inc(Math.random() * Settings.trickleRate);
        };
        (function() {
          var initial = 0, current = 0;
          NProgress2.promise = function($promise) {
            if (!$promise || $promise.state() === "resolved") {
              return this;
            }
            if (current === 0) {
              NProgress2.start();
            }
            initial++;
            current++;
            $promise.always(function() {
              current--;
              if (current === 0) {
                initial = 0;
                NProgress2.done();
              } else {
                NProgress2.set((initial - current) / initial);
              }
            });
            return this;
          };
        })();
        NProgress2.render = function(fromStart) {
          if (NProgress2.isRendered())
            return document.getElementById("nprogress");
          addClass(document.documentElement, "nprogress-busy");
          var progress = document.createElement("div");
          progress.id = "nprogress";
          progress.innerHTML = Settings.template;
          var bar = progress.querySelector(Settings.barSelector), perc = fromStart ? "-100" : toBarPerc(NProgress2.status || 0), parent = document.querySelector(Settings.parent), spinner;
          css(bar, {
            transition: "all 0 linear",
            transform: "translate3d(" + perc + "%,0,0)"
          });
          if (!Settings.showSpinner) {
            spinner = progress.querySelector(Settings.spinnerSelector);
            spinner && removeElement(spinner);
          }
          if (parent != document.body) {
            addClass(parent, "nprogress-custom-parent");
          }
          parent.appendChild(progress);
          return progress;
        };
        NProgress2.remove = function() {
          removeClass(document.documentElement, "nprogress-busy");
          removeClass(document.querySelector(Settings.parent), "nprogress-custom-parent");
          var progress = document.getElementById("nprogress");
          progress && removeElement(progress);
        };
        NProgress2.isRendered = function() {
          return !!document.getElementById("nprogress");
        };
        NProgress2.getPositioningCSS = function() {
          var bodyStyle = document.body.style;
          var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
          if (vendorPrefix + "Perspective" in bodyStyle) {
            return "translate3d";
          } else if (vendorPrefix + "Transform" in bodyStyle) {
            return "translate";
          } else {
            return "margin";
          }
        };
        function clamp2(n, min2, max2) {
          if (n < min2)
            return min2;
          if (n > max2)
            return max2;
          return n;
        }
        function toBarPerc(n) {
          return (-1 + n) * 100;
        }
        function barPositionCSS(n, speed, ease) {
          var barCSS;
          if (Settings.positionUsing === "translate3d") {
            barCSS = { transform: "translate3d(" + toBarPerc(n) + "%,0,0)" };
          } else if (Settings.positionUsing === "translate") {
            barCSS = { transform: "translate(" + toBarPerc(n) + "%,0)" };
          } else {
            barCSS = { "margin-left": toBarPerc(n) + "%" };
          }
          barCSS.transition = "all " + speed + "ms " + ease;
          return barCSS;
        }
        var queue2 = function() {
          var pending = [];
          function next() {
            var fn = pending.shift();
            if (fn) {
              fn(next);
            }
          }
          return function(fn) {
            pending.push(fn);
            if (pending.length == 1)
              next();
          };
        }();
        var css = function() {
          var cssPrefixes = ["Webkit", "O", "Moz", "ms"], cssProps = {};
          function camelCase3(string) {
            return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
              return letter.toUpperCase();
            });
          }
          function getVendorProp(name) {
            var style = document.body.style;
            if (name in style)
              return name;
            var i = cssPrefixes.length, capName = name.charAt(0).toUpperCase() + name.slice(1), vendorName;
            while (i--) {
              vendorName = cssPrefixes[i] + capName;
              if (vendorName in style)
                return vendorName;
            }
            return name;
          }
          function getStyleProp(name) {
            name = camelCase3(name);
            return cssProps[name] || (cssProps[name] = getVendorProp(name));
          }
          function applyCss(element, prop, value) {
            prop = getStyleProp(prop);
            element.style[prop] = value;
          }
          return function(element, properties2) {
            var args = arguments, prop, value;
            if (args.length == 2) {
              for (prop in properties2) {
                value = properties2[prop];
                if (value !== void 0 && properties2.hasOwnProperty(prop))
                  applyCss(element, prop, value);
              }
            } else {
              applyCss(element, args[1], args[2]);
            }
          };
        }();
        function hasClass(element, name) {
          var list = typeof element == "string" ? element : classList(element);
          return list.indexOf(" " + name + " ") >= 0;
        }
        function addClass(element, name) {
          var oldList = classList(element), newList = oldList + name;
          if (hasClass(oldList, name))
            return;
          element.className = newList.substring(1);
        }
        function removeClass(element, name) {
          var oldList = classList(element), newList;
          if (!hasClass(element, name))
            return;
          newList = oldList.replace(" " + name + " ", " ");
          element.className = newList.substring(1, newList.length - 1);
        }
        function classList(element) {
          return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
        }
        function removeElement(element) {
          element && element.parentNode && element.parentNode.removeChild(element);
        }
        return NProgress2;
      });
    }
  });

  // js/utils.js
  var Bag = class {
    constructor() {
      this.arrays = {};
    }
    add(key, value) {
      if (!this.arrays[key])
        this.arrays[key] = [];
      this.arrays[key].push(value);
    }
    remove(key) {
      if (this.arrays[key])
        delete this.arrays[key];
    }
    get(key) {
      return this.arrays[key] || [];
    }
    each(key, callback) {
      return this.get(key).forEach(callback);
    }
  };
  var WeakBag = class {
    constructor() {
      this.arrays = /* @__PURE__ */ new WeakMap();
    }
    add(key, value) {
      if (!this.arrays.has(key))
        this.arrays.set(key, []);
      this.arrays.get(key).push(value);
    }
    remove(key) {
      if (this.arrays.has(key))
        this.arrays.delete(key, []);
    }
    get(key) {
      return this.arrays.has(key) ? this.arrays.get(key) : [];
    }
    each(key, callback) {
      return this.get(key).forEach(callback);
    }
  };
  function dispatch(target, name, detail = {}, bubbles = true) {
    target.dispatchEvent(new CustomEvent(name, {
      detail,
      bubbles,
      composed: true,
      cancelable: true
    }));
  }
  function listen(target, name, handler4) {
    target.addEventListener(name, handler4);
    return () => target.removeEventListener(name, handler4);
  }
  function isObjecty(subject) {
    return typeof subject === "object" && subject !== null;
  }
  function isObject(subject) {
    return isObjecty(subject) && !isArray(subject);
  }
  function isArray(subject) {
    return Array.isArray(subject);
  }
  function isFunction(subject) {
    return typeof subject === "function";
  }
  function isPrimitive(subject) {
    return typeof subject !== "object" || subject === null;
  }
  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  function dataGet(object, key) {
    if (key === "")
      return object;
    return key.split(".").reduce((carry, i) => {
      return carry?.[i];
    }, object);
  }
  function dataSet(object, key, value) {
    let segments = key.split(".");
    if (segments.length === 1) {
      return object[key] = value;
    }
    let firstSegment = segments.shift();
    let restOfSegments = segments.join(".");
    if (object[firstSegment] === void 0) {
      object[firstSegment] = {};
    }
    dataSet(object[firstSegment], restOfSegments, value);
  }
  function diff(left, right, diffs = {}, path = "") {
    if (left === right)
      return diffs;
    if (typeof left !== typeof right || isObject(left) && isArray(right) || isArray(left) && isObject(right)) {
      diffs[path] = right;
      return diffs;
    }
    if (isPrimitive(left) || isPrimitive(right)) {
      diffs[path] = right;
      return diffs;
    }
    let leftKeys = Object.keys(left);
    Object.entries(right).forEach(([key, value]) => {
      diffs = { ...diffs, ...diff(left[key], right[key], diffs, path === "" ? key : `${path}.${key}`) };
      leftKeys = leftKeys.filter((i) => i !== key);
    });
    leftKeys.forEach((key) => {
      diffs[`${path}.${key}`] = "__rm__";
    });
    return diffs;
  }
  function extractData(payload) {
    let value = isSynthetic(payload) ? payload[0] : payload;
    let meta = isSynthetic(payload) ? payload[1] : void 0;
    if (isObjecty(value)) {
      Object.entries(value).forEach(([key, iValue]) => {
        value[key] = extractData(iValue);
      });
    }
    return value;
  }
  function isSynthetic(subject) {
    return Array.isArray(subject) && subject.length === 2 && typeof subject[1] === "object" && Object.keys(subject[1]).includes("s");
  }
  function getCsrfToken() {
    if (document.querySelector('meta[name="csrf-token"]')) {
      return document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    }
    if (document.querySelector("[data-csrf]")) {
      return document.querySelector("[data-csrf]").getAttribute("data-csrf");
    }
    if (window.livewireScriptConfig["csrf"] ?? false) {
      return window.livewireScriptConfig["csrf"];
    }
    throw "Livewire: No CSRF token detected";
  }
  var nonce;
  function getNonce() {
    if (nonce)
      return nonce;
    if (window.livewireScriptConfig && (window.livewireScriptConfig["nonce"] ?? false)) {
      nonce = window.livewireScriptConfig["nonce"];
      return nonce;
    }
    const elWithNonce = document.querySelector("style[data-livewire-style][nonce]");
    if (elWithNonce) {
      nonce = elWithNonce.nonce;
      return nonce;
    }
    return null;
  }
  function getUpdateUri() {
    return document.querySelector("[data-update-uri]")?.getAttribute("data-update-uri") ?? window.livewireScriptConfig["uri"] ?? null;
  }
  function contentIsFromDump(content) {
    return !!content.match(/<script>Sfdump\(".+"\)<\/script>/);
  }
  function splitDumpFromContent(content) {
    let dump = content.match(/.*<script>Sfdump\(".+"\)<\/script>/s);
    return [dump, content.replace(dump, "")];
  }

  // js/features/supportFileUploads.js
  var uploadManagers = /* @__PURE__ */ new WeakMap();
  function getUploadManager(component) {
    if (!uploadManagers.has(component)) {
      let manager = new UploadManager(component);
      uploadManagers.set(component, manager);
      manager.registerListeners();
    }
    return uploadManagers.get(component);
  }
  function handleFileUpload(el, property, component, cleanup2) {
    let manager = getUploadManager(component);
    let start3 = () => el.dispatchEvent(new CustomEvent("livewire-upload-start", { bubbles: true, detail: { id: component.id, property } }));
    let finish = () => el.dispatchEvent(new CustomEvent("livewire-upload-finish", { bubbles: true, detail: { id: component.id, property } }));
    let error2 = () => el.dispatchEvent(new CustomEvent("livewire-upload-error", { bubbles: true, detail: { id: component.id, property } }));
    let cancel = () => el.dispatchEvent(new CustomEvent("livewire-upload-cancel", { bubbles: true, detail: { id: component.id, property } }));
    let progress = (progressEvent) => {
      var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
      el.dispatchEvent(new CustomEvent("livewire-upload-progress", {
        bubbles: true,
        detail: { progress: percentCompleted }
      }));
    };
    let eventHandler = (e) => {
      if (e.target.files.length === 0)
        return;
      start3();
      if (e.target.multiple) {
        manager.uploadMultiple(property, e.target.files, finish, error2, progress, cancel);
      } else {
        manager.upload(property, e.target.files[0], finish, error2, progress, cancel);
      }
    };
    el.addEventListener("change", eventHandler);
    component.$wire.$watch(property, (value) => {
      if (!el.isConnected)
        return;
      if (value === null || value === "") {
        el.value = "";
      }
      if (el.multiple && Array.isArray(value) && value.length === 0) {
        el.value = "";
      }
    });
    let clearFileInputValue = () => {
      el.value = null;
    };
    el.addEventListener("click", clearFileInputValue);
    el.addEventListener("livewire-upload-cancel", clearFileInputValue);
    cleanup2(() => {
      el.removeEventListener("change", eventHandler);
      el.removeEventListener("click", clearFileInputValue);
    });
  }
  var UploadManager = class {
    constructor(component) {
      this.component = component;
      this.uploadBag = new MessageBag();
      this.removeBag = new MessageBag();
    }
    registerListeners() {
      this.component.$wire.$on("upload:generatedSignedUrl", ({ name, url }) => {
        setUploadLoading(this.component, name);
        this.handleSignedUrl(name, url);
      });
      this.component.$wire.$on("upload:generatedSignedUrlForS3", ({ name, payload }) => {
        setUploadLoading(this.component, name);
        this.handleS3PreSignedUrl(name, payload);
      });
      this.component.$wire.$on("upload:finished", ({ name, tmpFilenames }) => this.markUploadFinished(name, tmpFilenames));
      this.component.$wire.$on("upload:errored", ({ name }) => this.markUploadErrored(name));
      this.component.$wire.$on("upload:removed", ({ name, tmpFilename }) => this.removeBag.shift(name).finishCallback(tmpFilename));
    }
    upload(name, file, finishCallback, errorCallback, progressCallback, cancelledCallback) {
      this.setUpload(name, {
        files: [file],
        multiple: false,
        finishCallback,
        errorCallback,
        progressCallback,
        cancelledCallback
      });
    }
    uploadMultiple(name, files, finishCallback, errorCallback, progressCallback, cancelledCallback) {
      this.setUpload(name, {
        files: Array.from(files),
        multiple: true,
        finishCallback,
        errorCallback,
        progressCallback,
        cancelledCallback
      });
    }
    removeUpload(name, tmpFilename, finishCallback) {
      this.removeBag.push(name, {
        tmpFilename,
        finishCallback
      });
      this.component.$wire.call("_removeUpload", name, tmpFilename);
    }
    setUpload(name, uploadObject) {
      this.uploadBag.add(name, uploadObject);
      if (this.uploadBag.get(name).length === 1) {
        this.startUpload(name, uploadObject);
      }
    }
    handleSignedUrl(name, url) {
      let formData = new FormData();
      Array.from(this.uploadBag.first(name).files).forEach((file) => formData.append("files[]", file, file.name));
      let headers = {
        "Accept": "application/json"
      };
      let csrfToken = getCsrfToken();
      if (csrfToken)
        headers["X-CSRF-TOKEN"] = csrfToken;
      this.makeRequest(name, formData, "post", url, headers, (response) => {
        return response.paths;
      });
    }
    handleS3PreSignedUrl(name, payload) {
      let formData = this.uploadBag.first(name).files[0];
      let headers = payload.headers;
      if ("Host" in headers)
        delete headers.Host;
      let url = payload.url;
      this.makeRequest(name, formData, "put", url, headers, (response) => {
        return [payload.path];
      });
    }
    makeRequest(name, formData, method, url, headers, retrievePaths) {
      let request = new XMLHttpRequest();
      request.open(method, url);
      Object.entries(headers).forEach(([key, value]) => {
        request.setRequestHeader(key, value);
      });
      request.upload.addEventListener("progress", (e) => {
        e.detail = {};
        e.detail.progress = Math.floor(e.loaded * 100 / e.total);
        this.uploadBag.first(name).progressCallback(e);
      });
      request.addEventListener("load", () => {
        if ((request.status + "")[0] === "2") {
          let paths = retrievePaths(request.response && JSON.parse(request.response));
          this.component.$wire.call("_finishUpload", name, paths, this.uploadBag.first(name).multiple);
          return;
        }
        let errors = null;
        if (request.status === 422) {
          errors = request.response;
        }
        this.component.$wire.call("_uploadErrored", name, errors, this.uploadBag.first(name).multiple);
      });
      this.uploadBag.first(name).request = request;
      request.send(formData);
    }
    startUpload(name, uploadObject) {
      let fileInfos = uploadObject.files.map((file) => {
        return { name: file.name, size: file.size, type: file.type };
      });
      this.component.$wire.call("_startUpload", name, fileInfos, uploadObject.multiple);
      setUploadLoading(this.component, name);
    }
    markUploadFinished(name, tmpFilenames) {
      unsetUploadLoading(this.component);
      let uploadObject = this.uploadBag.shift(name);
      uploadObject.finishCallback(uploadObject.multiple ? tmpFilenames : tmpFilenames[0]);
      if (this.uploadBag.get(name).length > 0)
        this.startUpload(name, this.uploadBag.last(name));
    }
    markUploadErrored(name) {
      unsetUploadLoading(this.component);
      this.uploadBag.shift(name).errorCallback();
      if (this.uploadBag.get(name).length > 0)
        this.startUpload(name, this.uploadBag.last(name));
    }
    cancelUpload(name, cancelledCallback = null) {
      unsetUploadLoading(this.component);
      let uploadItem = this.uploadBag.first(name);
      if (uploadItem) {
        if (uploadItem.request) {
          uploadItem.request.abort();
        }
        this.uploadBag.shift(name).cancelledCallback();
        if (cancelledCallback)
          cancelledCallback();
      }
    }
  };
  var MessageBag = class {
    constructor() {
      this.bag = {};
    }
    add(name, thing) {
      if (!this.bag[name]) {
        this.bag[name] = [];
      }
      this.bag[name].push(thing);
    }
    push(name, thing) {
      this.add(name, thing);
    }
    first(name) {
      if (!this.bag[name])
        return null;
      return this.bag[name][0];
    }
    last(name) {
      return this.bag[name].slice(-1)[0];
    }
    get(name) {
      return this.bag[name];
    }
    shift(name) {
      return this.bag[name].shift();
    }
    call(name, ...params) {
      (this.listeners[name] || []).forEach((callback) => {
        callback(...params);
      });
    }
    has(name) {
      return Object.keys(this.listeners).includes(name);
    }
  };
  function setUploadLoading() {
  }
  function unsetUploadLoading() {
  }
  function upload(component, name, file, finishCallback = () => {
  }, errorCallback = () => {
  }, progressCallback = () => {
  }, cancelledCallback = () => {
  }) {
    let uploadManager = getUploadManager(component);
    uploadManager.upload(name, file, finishCallback, errorCallback, progressCallback, cancelledCallback);
  }
  function uploadMultiple(component, name, files, finishCallback = () => {
  }, errorCallback = () => {
  }, progressCallback = () => {
  }, cancelledCallback = () => {
  }) {
    let uploadManager = getUploadManager(component);
    uploadManager.uploadMultiple(name, files, finishCallback, errorCallback, progressCallback, cancelledCallback);
  }
  function removeUpload(component, name, tmpFilename, finishCallback = () => {
  }, errorCallback = () => {
  }) {
    let uploadManager = getUploadManager(component);
    uploadManager.removeUpload(name, tmpFilename, finishCallback, errorCallback);
  }
  function cancelUpload(component, name, cancelledCallback = () => {
  }) {
    let uploadManager = getUploadManager(component);
    uploadManager.cancelUpload(name, cancelledCallback);
  }

  // ../alpine/packages/alpinejs/dist/module.esm.js
  var flushPending = false;
  var flushing = false;
  var queue = [];
  var lastFlushedIndex = -1;
  function scheduler(callback) {
    queueJob(callback);
  }
  function queueJob(job) {
    if (!queue.includes(job))
      queue.push(job);
    queueFlush();
  }
  function dequeueJob(job) {
    let index = queue.indexOf(job);
    if (index !== -1 && index > lastFlushedIndex)
      queue.splice(index, 1);
  }
  function queueFlush() {
    if (!flushing && !flushPending) {
      flushPending = true;
      queueMicrotask(flushJobs);
    }
  }
  function flushJobs() {
    flushPending = false;
    flushing = true;
    for (let i = 0; i < queue.length; i++) {
      queue[i]();
      lastFlushedIndex = i;
    }
    queue.length = 0;
    lastFlushedIndex = -1;
    flushing = false;
  }
  var reactive;
  var effect;
  var release;
  var raw;
  var shouldSchedule = true;
  function disableEffectScheduling(callback) {
    shouldSchedule = false;
    callback();
    shouldSchedule = true;
  }
  function setReactivityEngine(engine) {
    reactive = engine.reactive;
    release = engine.release;
    effect = (callback) => engine.effect(callback, { scheduler: (task) => {
      if (shouldSchedule) {
        scheduler(task);
      } else {
        task();
      }
    } });
    raw = engine.raw;
  }
  function overrideEffect(override) {
    effect = override;
  }
  function elementBoundEffect(el) {
    let cleanup2 = () => {
    };
    let wrappedEffect = (callback) => {
      let effectReference = effect(callback);
      if (!el._x_effects) {
        el._x_effects = /* @__PURE__ */ new Set();
        el._x_runEffects = () => {
          el._x_effects.forEach((i) => i());
        };
      }
      el._x_effects.add(effectReference);
      cleanup2 = () => {
        if (effectReference === void 0)
          return;
        el._x_effects.delete(effectReference);
        release(effectReference);
      };
      return effectReference;
    };
    return [wrappedEffect, () => {
      cleanup2();
    }];
  }
  function watch(getter, callback) {
    let firstTime = true;
    let oldValue;
    let effectReference = effect(() => {
      let value = getter();
      JSON.stringify(value);
      if (!firstTime) {
        queueMicrotask(() => {
          callback(value, oldValue);
          oldValue = value;
        });
      } else {
        oldValue = value;
      }
      firstTime = false;
    });
    return () => release(effectReference);
  }
  var onAttributeAddeds = [];
  var onElRemoveds = [];
  var onElAddeds = [];
  function onElAdded(callback) {
    onElAddeds.push(callback);
  }
  function onElRemoved(el, callback) {
    if (typeof callback === "function") {
      if (!el._x_cleanups)
        el._x_cleanups = [];
      el._x_cleanups.push(callback);
    } else {
      callback = el;
      onElRemoveds.push(callback);
    }
  }
  function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
  }
  function onAttributeRemoved(el, name, callback) {
    if (!el._x_attributeCleanups)
      el._x_attributeCleanups = {};
    if (!el._x_attributeCleanups[name])
      el._x_attributeCleanups[name] = [];
    el._x_attributeCleanups[name].push(callback);
  }
  function cleanupAttributes(el, names) {
    if (!el._x_attributeCleanups)
      return;
    Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
      if (names === void 0 || names.includes(name)) {
        value.forEach((i) => i());
        delete el._x_attributeCleanups[name];
      }
    });
  }
  function cleanupElement(el) {
    el._x_effects?.forEach(dequeueJob);
    while (el._x_cleanups?.length)
      el._x_cleanups.pop()();
  }
  var observer = new MutationObserver(onMutate);
  var currentlyObserving = false;
  function startObservingMutations() {
    observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
    currentlyObserving = true;
  }
  function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
  }
  var queuedMutations = [];
  function flushObserver() {
    let records = observer.takeRecords();
    queuedMutations.push(() => records.length > 0 && onMutate(records));
    let queueLengthWhenTriggered = queuedMutations.length;
    queueMicrotask(() => {
      if (queuedMutations.length === queueLengthWhenTriggered) {
        while (queuedMutations.length > 0)
          queuedMutations.shift()();
      }
    });
  }
  function mutateDom(callback) {
    if (!currentlyObserving)
      return callback();
    stopObservingMutations();
    let result = callback();
    startObservingMutations();
    return result;
  }
  var isCollecting = false;
  var deferredMutations = [];
  function deferMutations() {
    isCollecting = true;
  }
  function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
  }
  function onMutate(mutations) {
    if (isCollecting) {
      deferredMutations = deferredMutations.concat(mutations);
      return;
    }
    let addedNodes = [];
    let removedNodes = /* @__PURE__ */ new Set();
    let addedAttributes = /* @__PURE__ */ new Map();
    let removedAttributes = /* @__PURE__ */ new Map();
    for (let i = 0; i < mutations.length; i++) {
      if (mutations[i].target._x_ignoreMutationObserver)
        continue;
      if (mutations[i].type === "childList") {
        mutations[i].removedNodes.forEach((node) => {
          if (node.nodeType !== 1)
            return;
          if (!node._x_marker)
            return;
          removedNodes.add(node);
        });
        mutations[i].addedNodes.forEach((node) => {
          if (node.nodeType !== 1)
            return;
          if (removedNodes.has(node)) {
            removedNodes.delete(node);
            return;
          }
          if (node._x_marker)
            return;
          addedNodes.push(node);
        });
      }
      if (mutations[i].type === "attributes") {
        let el = mutations[i].target;
        let name = mutations[i].attributeName;
        let oldValue = mutations[i].oldValue;
        let add2 = () => {
          if (!addedAttributes.has(el))
            addedAttributes.set(el, []);
          addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
        };
        let remove = () => {
          if (!removedAttributes.has(el))
            removedAttributes.set(el, []);
          removedAttributes.get(el).push(name);
        };
        if (el.hasAttribute(name) && oldValue === null) {
          add2();
        } else if (el.hasAttribute(name)) {
          remove();
          add2();
        } else {
          remove();
        }
      }
    }
    removedAttributes.forEach((attrs, el) => {
      cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach((attrs, el) => {
      onAttributeAddeds.forEach((i) => i(el, attrs));
    });
    for (let node of removedNodes) {
      if (addedNodes.some((i) => i.contains(node)))
        continue;
      onElRemoveds.forEach((i) => i(node));
    }
    for (let node of addedNodes) {
      if (!node.isConnected)
        continue;
      onElAddeds.forEach((i) => i(node));
    }
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
  }
  function scope(node) {
    return mergeProxies(closestDataStack(node));
  }
  function addScopeToNode(node, data2, referenceNode) {
    node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
    return () => {
      node._x_dataStack = node._x_dataStack.filter((i) => i !== data2);
    };
  }
  function closestDataStack(node) {
    if (node._x_dataStack)
      return node._x_dataStack;
    if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
      return closestDataStack(node.host);
    }
    if (!node.parentNode) {
      return [];
    }
    return closestDataStack(node.parentNode);
  }
  function mergeProxies(objects) {
    return new Proxy({ objects }, mergeProxyTrap);
  }
  var mergeProxyTrap = {
    ownKeys({ objects }) {
      return Array.from(new Set(objects.flatMap((i) => Object.keys(i))));
    },
    has({ objects }, name) {
      if (name == Symbol.unscopables)
        return false;
      return objects.some((obj) => Object.prototype.hasOwnProperty.call(obj, name) || Reflect.has(obj, name));
    },
    get({ objects }, name, thisProxy) {
      if (name == "toJSON")
        return collapseProxies;
      return Reflect.get(objects.find((obj) => Reflect.has(obj, name)) || {}, name, thisProxy);
    },
    set({ objects }, name, value, thisProxy) {
      const target = objects.find((obj) => Object.prototype.hasOwnProperty.call(obj, name)) || objects[objects.length - 1];
      const descriptor = Object.getOwnPropertyDescriptor(target, name);
      if (descriptor?.set && descriptor?.get)
        return descriptor.set.call(thisProxy, value) || true;
      return Reflect.set(target, name, value);
    }
  };
  function collapseProxies() {
    let keys = Reflect.ownKeys(this);
    return keys.reduce((acc, key) => {
      acc[key] = Reflect.get(this, key);
      return acc;
    }, {});
  }
  function initInterceptors(data2) {
    let isObject22 = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
    let recurse = (obj, basePath = "") => {
      Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }]) => {
        if (enumerable === false || value === void 0)
          return;
        if (typeof value === "object" && value !== null && value.__v_skip)
          return;
        let path = basePath === "" ? key : `${basePath}.${key}`;
        if (typeof value === "object" && value !== null && value._x_interceptor) {
          obj[key] = value.initialize(data2, path, key);
        } else {
          if (isObject22(value) && value !== obj && !(value instanceof Element)) {
            recurse(value, path);
          }
        }
      });
    };
    return recurse(data2);
  }
  function interceptor(callback, mutateObj = () => {
  }) {
    let obj = {
      initialValue: void 0,
      _x_interceptor: true,
      initialize(data2, path, key) {
        return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
      }
    };
    mutateObj(obj);
    return (initialValue) => {
      if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
        let initialize = obj.initialize.bind(obj);
        obj.initialize = (data2, path, key) => {
          let innerValue = initialValue.initialize(data2, path, key);
          obj.initialValue = innerValue;
          return initialize(data2, path, key);
        };
      } else {
        obj.initialValue = initialValue;
      }
      return obj;
    };
  }
  function get(obj, path) {
    return path.split(".").reduce((carry, segment) => carry[segment], obj);
  }
  function set(obj, path, value) {
    if (typeof path === "string")
      path = path.split(".");
    if (path.length === 1)
      obj[path[0]] = value;
    else if (path.length === 0)
      throw error;
    else {
      if (obj[path[0]])
        return set(obj[path[0]], path.slice(1), value);
      else {
        obj[path[0]] = {};
        return set(obj[path[0]], path.slice(1), value);
      }
    }
  }
  var magics = {};
  function magic(name, callback) {
    magics[name] = callback;
  }
  function injectMagics(obj, el) {
    let memoizedUtilities = getUtilities(el);
    Object.entries(magics).forEach(([name, callback]) => {
      Object.defineProperty(obj, `$${name}`, {
        get() {
          return callback(el, memoizedUtilities);
        },
        enumerable: false
      });
    });
    return obj;
  }
  function getUtilities(el) {
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    let utils = { interceptor, ...utilities };
    onElRemoved(el, cleanup2);
    return utils;
  }
  function tryCatch(el, expression, callback, ...args) {
    try {
      return callback(...args);
    } catch (e) {
      handleError(e, el, expression);
    }
  }
  function handleError(error2, el, expression = void 0) {
    error2 = Object.assign(error2 ?? { message: "No error message given." }, { el, expression });
    console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
    setTimeout(() => {
      throw error2;
    }, 0);
  }
  var shouldAutoEvaluateFunctions = true;
  function dontAutoEvaluateFunctions(callback) {
    let cache = shouldAutoEvaluateFunctions;
    shouldAutoEvaluateFunctions = false;
    let result = callback();
    shouldAutoEvaluateFunctions = cache;
    return result;
  }
  function evaluate(el, expression, extras = {}) {
    let result;
    evaluateLater(el, expression)((value) => result = value, extras);
    return result;
  }
  function evaluateLater(...args) {
    return theEvaluatorFunction(...args);
  }
  var theEvaluatorFunction = normalEvaluator;
  function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
  }
  function normalEvaluator(el, expression) {
    let overriddenMagics = {};
    injectMagics(overriddenMagics, el);
    let dataStack = [overriddenMagics, ...closestDataStack(el)];
    let evaluator = typeof expression === "function" ? generateEvaluatorFromFunction(dataStack, expression) : generateEvaluatorFromString(dataStack, expression, el);
    return tryCatch.bind(null, el, expression, evaluator);
  }
  function generateEvaluatorFromFunction(dataStack, func) {
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
      runIfTypeOfFunction(receiver, result);
    };
  }
  var evaluatorMemo = {};
  function generateFunctionFromString(expression, el) {
    if (evaluatorMemo[expression]) {
      return evaluatorMemo[expression];
    }
    let AsyncFunction = Object.getPrototypeOf(async function() {
    }).constructor;
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(async()=>{ ${expression} })()` : expression;
    const safeAsyncFunction = () => {
      try {
        let func2 = new AsyncFunction(["__self", "scope"], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
        Object.defineProperty(func2, "name", {
          value: `[Alpine] ${expression}`
        });
        return func2;
      } catch (error2) {
        handleError(error2, el, expression);
        return Promise.resolve();
      }
    };
    let func = safeAsyncFunction();
    evaluatorMemo[expression] = func;
    return func;
  }
  function generateEvaluatorFromString(dataStack, expression, el) {
    let func = generateFunctionFromString(expression, el);
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      func.result = void 0;
      func.finished = false;
      let completeScope = mergeProxies([scope2, ...dataStack]);
      if (typeof func === "function") {
        let promise = func(func, completeScope).catch((error2) => handleError(error2, el, expression));
        if (func.finished) {
          runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
          func.result = void 0;
        } else {
          promise.then((result) => {
            runIfTypeOfFunction(receiver, result, completeScope, params, el);
          }).catch((error2) => handleError(error2, el, expression)).finally(() => func.result = void 0);
        }
      }
    };
  }
  function runIfTypeOfFunction(receiver, value, scope2, params, el) {
    if (shouldAutoEvaluateFunctions && typeof value === "function") {
      let result = value.apply(scope2, params);
      if (result instanceof Promise) {
        result.then((i) => runIfTypeOfFunction(receiver, i, scope2, params)).catch((error2) => handleError(error2, el, value));
      } else {
        receiver(result);
      }
    } else if (typeof value === "object" && value instanceof Promise) {
      value.then((i) => receiver(i));
    } else {
      receiver(value);
    }
  }
  var prefixAsString = "x-";
  function prefix(subject = "") {
    return prefixAsString + subject;
  }
  function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
  }
  var directiveHandlers = {};
  function directive(name, callback) {
    directiveHandlers[name] = callback;
    return {
      before(directive22) {
        if (!directiveHandlers[directive22]) {
          console.warn(String.raw`Cannot find directive \`${directive22}\`. \`${name}\` will use the default order of execution`);
          return;
        }
        const pos = directiveOrder.indexOf(directive22);
        directiveOrder.splice(pos >= 0 ? pos : directiveOrder.indexOf("DEFAULT"), 0, name);
      }
    };
  }
  function directiveExists(name) {
    return Object.keys(directiveHandlers).includes(name);
  }
  function directives(el, attributes, originalAttributeOverride) {
    attributes = Array.from(attributes);
    if (el._x_virtualDirectives) {
      let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value]) => ({ name, value }));
      let staticAttributes = attributesOnly(vAttributes);
      vAttributes = vAttributes.map((attribute) => {
        if (staticAttributes.find((attr) => attr.name === attribute.name)) {
          return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
          };
        }
        return attribute;
      });
      attributes = attributes.concat(vAttributes);
    }
    let transformedAttributeMap = {};
    let directives2 = attributes.map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives2.map((directive22) => {
      return getDirectiveHandler(el, directive22);
    });
  }
  function attributesOnly(attributes) {
    return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
  }
  var isDeferringHandlers = false;
  var directiveHandlerStacks = /* @__PURE__ */ new Map();
  var currentHandlerStackKey = Symbol();
  function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = () => {
      while (directiveHandlerStacks.get(key).length)
        directiveHandlerStacks.get(key).shift()();
      directiveHandlerStacks.delete(key);
    };
    let stopDeferring = () => {
      isDeferringHandlers = false;
      flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
  }
  function getElementBoundUtilities(el) {
    let cleanups2 = [];
    let cleanup2 = (callback) => cleanups2.push(callback);
    let [effect3, cleanupEffect] = elementBoundEffect(el);
    cleanups2.push(cleanupEffect);
    let utilities = {
      Alpine: alpine_default,
      effect: effect3,
      cleanup: cleanup2,
      evaluateLater: evaluateLater.bind(evaluateLater, el),
      evaluate: evaluate.bind(evaluate, el)
    };
    let doCleanup = () => cleanups2.forEach((i) => i());
    return [utilities, doCleanup];
  }
  function getDirectiveHandler(el, directive22) {
    let noop = () => {
    };
    let handler4 = directiveHandlers[directive22.type] || noop;
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    onAttributeRemoved(el, directive22.original, cleanup2);
    let fullHandler = () => {
      if (el._x_ignore || el._x_ignoreSelf)
        return;
      handler4.inline && handler4.inline(el, directive22, utilities);
      handler4 = handler4.bind(handler4, el, directive22, utilities);
      isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler4) : handler4();
    };
    fullHandler.runCleanups = cleanup2;
    return fullHandler;
  }
  var startingWith = (subject, replacement) => ({ name, value }) => {
    if (name.startsWith(subject))
      name = name.replace(subject, replacement);
    return { name, value };
  };
  var into = (i) => i;
  function toTransformedAttributes(callback = () => {
  }) {
    return ({ name, value }) => {
      let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
        return transform(carry);
      }, { name, value });
      if (newName !== name)
        callback(newName, name);
      return { name: newName, value: newValue };
    };
  }
  var attributeTransformers = [];
  function mapAttributes(callback) {
    attributeTransformers.push(callback);
  }
  function outNonAlpineAttributes({ name }) {
    return alpineAttributeRegex().test(name);
  }
  var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
  function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return ({ name, value }) => {
      let typeMatch = name.match(alpineAttributeRegex());
      let valueMatch = name.match(/:([a-zA-Z0-9\-_:]+)/);
      let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
      let original = originalAttributeOverride || transformedAttributeMap[name] || name;
      return {
        type: typeMatch ? typeMatch[1] : null,
        value: valueMatch ? valueMatch[1] : null,
        modifiers: modifiers.map((i) => i.replace(".", "")),
        expression: value,
        original
      };
    };
  }
  var DEFAULT = "DEFAULT";
  var directiveOrder = [
    "ignore",
    "ref",
    "data",
    "id",
    "anchor",
    "bind",
    "init",
    "for",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    DEFAULT,
    "teleport"
  ];
  function byPriority(a, b) {
    let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
    let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
  }
  function dispatch2(el, name, detail = {}) {
    el.dispatchEvent(new CustomEvent(name, {
      detail,
      bubbles: true,
      composed: true,
      cancelable: true
    }));
  }
  function walk(el, callback) {
    if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
      Array.from(el.children).forEach((el2) => walk(el2, callback));
      return;
    }
    let skip = false;
    callback(el, () => skip = true);
    if (skip)
      return;
    let node = el.firstElementChild;
    while (node) {
      walk(node, callback, false);
      node = node.nextElementSibling;
    }
  }
  function warn(message, ...args) {
    console.warn(`Alpine Warning: ${message}`, ...args);
  }
  var started = false;
  function start() {
    if (started)
      warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.");
    started = true;
    if (!document.body)
      warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    dispatch2(document, "alpine:init");
    dispatch2(document, "alpine:initializing");
    startObservingMutations();
    onElAdded((el) => initTree(el, walk));
    onElRemoved((el) => destroyTree(el));
    onAttributesAdded((el, attrs) => {
      directives(el, attrs).forEach((handle) => handle());
    });
    let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
    Array.from(document.querySelectorAll(allSelectors().join(","))).filter(outNestedComponents).forEach((el) => {
      initTree(el);
    });
    dispatch2(document, "alpine:initialized");
    setTimeout(() => {
      warnAboutMissingPlugins();
    });
  }
  var rootSelectorCallbacks = [];
  var initSelectorCallbacks = [];
  function rootSelectors() {
    return rootSelectorCallbacks.map((fn) => fn());
  }
  function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
  }
  function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
  }
  function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
  }
  function closestRoot(el, includeInitSelectors = false) {
    return findClosest(el, (element) => {
      const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
      if (selectors.some((selector) => element.matches(selector)))
        return true;
    });
  }
  function findClosest(el, callback) {
    if (!el)
      return;
    if (callback(el))
      return el;
    if (el._x_teleportBack)
      el = el._x_teleportBack;
    if (!el.parentElement)
      return;
    return findClosest(el.parentElement, callback);
  }
  function isRoot(el) {
    return rootSelectors().some((selector) => el.matches(selector));
  }
  var initInterceptors2 = [];
  function interceptInit(callback) {
    initInterceptors2.push(callback);
  }
  var markerDispenser = 1;
  function initTree(el, walker = walk, intercept = () => {
  }) {
    if (findClosest(el, (i) => i._x_ignore))
      return;
    deferHandlingDirectives(() => {
      walker(el, (el2, skip) => {
        if (el2._x_marker)
          return;
        intercept(el2, skip);
        initInterceptors2.forEach((i) => i(el2, skip));
        directives(el2, el2.attributes).forEach((handle) => handle());
        if (!el2._x_ignore)
          el2._x_marker = markerDispenser++;
        el2._x_ignore && skip();
      });
    });
  }
  function destroyTree(root, walker = walk) {
    walker(root, (el) => {
      cleanupElement(el);
      cleanupAttributes(el);
      delete el._x_marker;
    });
  }
  function warnAboutMissingPlugins() {
    let pluginDirectives = [
      ["ui", "dialog", ["[x-dialog], [x-popover]"]],
      ["anchor", "anchor", ["[x-anchor]"]],
      ["sort", "sort", ["[x-sort]"]]
    ];
    pluginDirectives.forEach(([plugin2, directive22, selectors]) => {
      if (directiveExists(directive22))
        return;
      selectors.some((selector) => {
        if (document.querySelector(selector)) {
          warn(`found "${selector}", but missing ${plugin2} plugin`);
          return true;
        }
      });
    });
  }
  var tickStack = [];
  var isHolding = false;
  function nextTick(callback = () => {
  }) {
    queueMicrotask(() => {
      isHolding || setTimeout(() => {
        releaseNextTicks();
      });
    });
    return new Promise((res) => {
      tickStack.push(() => {
        callback();
        res();
      });
    });
  }
  function releaseNextTicks() {
    isHolding = false;
    while (tickStack.length)
      tickStack.shift()();
  }
  function holdNextTicks() {
    isHolding = true;
  }
  function setClasses(el, value) {
    if (Array.isArray(value)) {
      return setClassesFromString(el, value.join(" "));
    } else if (typeof value === "object" && value !== null) {
      return setClassesFromObject(el, value);
    } else if (typeof value === "function") {
      return setClasses(el, value());
    }
    return setClassesFromString(el, value);
  }
  function setClassesFromString(el, classString) {
    let split = (classString2) => classString2.split(" ").filter(Boolean);
    let missingClasses = (classString2) => classString2.split(" ").filter((i) => !el.classList.contains(i)).filter(Boolean);
    let addClassesAndReturnUndo = (classes) => {
      el.classList.add(...classes);
      return () => {
        el.classList.remove(...classes);
      };
    };
    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
  }
  function setClassesFromObject(el, classObject) {
    let split = (classString) => classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i) => {
      if (el.classList.contains(i)) {
        el.classList.remove(i);
        removed.push(i);
      }
    });
    forAdd.forEach((i) => {
      if (!el.classList.contains(i)) {
        el.classList.add(i);
        added.push(i);
      }
    });
    return () => {
      removed.forEach((i) => el.classList.add(i));
      added.forEach((i) => el.classList.remove(i));
    };
  }
  function setStyles(el, value) {
    if (typeof value === "object" && value !== null) {
      return setStylesFromObject(el, value);
    }
    return setStylesFromString(el, value);
  }
  function setStylesFromObject(el, value) {
    let previousStyles = {};
    Object.entries(value).forEach(([key, value2]) => {
      previousStyles[key] = el.style[key];
      if (!key.startsWith("--")) {
        key = kebabCase(key);
      }
      el.style.setProperty(key, value2);
    });
    setTimeout(() => {
      if (el.style.length === 0) {
        el.removeAttribute("style");
      }
    });
    return () => {
      setStyles(el, previousStyles);
    };
  }
  function setStylesFromString(el, value) {
    let cache = el.getAttribute("style", value);
    el.setAttribute("style", value);
    return () => {
      el.setAttribute("style", cache || "");
    };
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function once(callback, fallback2 = () => {
  }) {
    let called = false;
    return function() {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      } else {
        fallback2.apply(this, arguments);
      }
    };
  }
  directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate22 }) => {
    if (typeof expression === "function")
      expression = evaluate22(expression);
    if (expression === false)
      return;
    if (!expression || typeof expression === "boolean") {
      registerTransitionsFromHelper(el, modifiers, value);
    } else {
      registerTransitionsFromClassString(el, expression, value);
    }
  });
  function registerTransitionsFromClassString(el, classString, stage) {
    registerTransitionObject(el, setClasses, "");
    let directiveStorageMap = {
      "enter": (classes) => {
        el._x_transition.enter.during = classes;
      },
      "enter-start": (classes) => {
        el._x_transition.enter.start = classes;
      },
      "enter-end": (classes) => {
        el._x_transition.enter.end = classes;
      },
      "leave": (classes) => {
        el._x_transition.leave.during = classes;
      },
      "leave-start": (classes) => {
        el._x_transition.leave.start = classes;
      },
      "leave-end": (classes) => {
        el._x_transition.leave.end = classes;
      }
    };
    directiveStorageMap[stage](classString);
  }
  function registerTransitionsFromHelper(el, modifiers, stage) {
    registerTransitionObject(el, setStyles);
    let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
    let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
    if (modifiers.includes("in") && !doesntSpecify) {
      modifiers = modifiers.filter((i, index) => index < modifiers.indexOf("out"));
    }
    if (modifiers.includes("out") && !doesntSpecify) {
      modifiers = modifiers.filter((i, index) => index > modifiers.indexOf("out"));
    }
    let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    let wantsOpacity = wantsAll || modifiers.includes("opacity");
    let wantsScale = wantsAll || modifiers.includes("scale");
    let opacityValue = wantsOpacity ? 0 : 1;
    let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    let delay3 = modifierValue(modifiers, "delay", 0) / 1e3;
    let origin = modifierValue(modifiers, "origin", "center");
    let property = "opacity, transform";
    let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
    let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
    let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
    if (transitioningIn) {
      el._x_transition.enter.during = {
        transformOrigin: origin,
        transitionDelay: `${delay3}s`,
        transitionProperty: property,
        transitionDuration: `${durationIn}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.enter.start = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
      el._x_transition.enter.end = {
        opacity: 1,
        transform: `scale(1)`
      };
    }
    if (transitioningOut) {
      el._x_transition.leave.during = {
        transformOrigin: origin,
        transitionDelay: `${delay3}s`,
        transitionProperty: property,
        transitionDuration: `${durationOut}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.leave.start = {
        opacity: 1,
        transform: `scale(1)`
      };
      el._x_transition.leave.end = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
    }
  }
  function registerTransitionObject(el, setFunction, defaultValue = {}) {
    if (!el._x_transition)
      el._x_transition = {
        enter: { during: defaultValue, start: defaultValue, end: defaultValue },
        leave: { during: defaultValue, start: defaultValue, end: defaultValue },
        in(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.enter.during,
            start: this.enter.start,
            end: this.enter.end
          }, before, after);
        },
        out(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.leave.during,
            start: this.leave.start,
            end: this.leave.end
          }, before, after);
        }
      };
  }
  window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
    const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let clickAwayCompatibleShow = () => nextTick2(show);
    if (value) {
      if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
        el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
      } else {
        el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
      }
      return;
    }
    el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
      el._x_transition.out(() => {
      }, () => resolve(hide));
      el._x_transitioning && el._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
    }) : Promise.resolve(hide);
    queueMicrotask(() => {
      let closest = closestHide(el);
      if (closest) {
        if (!closest._x_hideChildren)
          closest._x_hideChildren = [];
        closest._x_hideChildren.push(el);
      } else {
        nextTick2(() => {
          let hideAfterChildren = (el2) => {
            let carry = Promise.all([
              el2._x_hidePromise,
              ...(el2._x_hideChildren || []).map(hideAfterChildren)
            ]).then(([i]) => i?.());
            delete el2._x_hidePromise;
            delete el2._x_hideChildren;
            return carry;
          };
          hideAfterChildren(el).catch((e) => {
            if (!e.isFromCancelledTransition)
              throw e;
          });
        });
      }
    });
  };
  function closestHide(el) {
    let parent = el.parentNode;
    if (!parent)
      return;
    return parent._x_hidePromise ? parent : closestHide(parent);
  }
  function transition(el, setFunction, { during, start: start22, end } = {}, before = () => {
  }, after = () => {
  }) {
    if (el._x_transitioning)
      el._x_transitioning.cancel();
    if (Object.keys(during).length === 0 && Object.keys(start22).length === 0 && Object.keys(end).length === 0) {
      before();
      after();
      return;
    }
    let undoStart, undoDuring, undoEnd;
    performTransition(el, {
      start() {
        undoStart = setFunction(el, start22);
      },
      during() {
        undoDuring = setFunction(el, during);
      },
      before,
      end() {
        undoStart();
        undoEnd = setFunction(el, end);
      },
      after,
      cleanup() {
        undoDuring();
        undoEnd();
      }
    });
  }
  function performTransition(el, stages) {
    let interrupted, reachedBefore, reachedEnd;
    let finish = once(() => {
      mutateDom(() => {
        interrupted = true;
        if (!reachedBefore)
          stages.before();
        if (!reachedEnd) {
          stages.end();
          releaseNextTicks();
        }
        stages.after();
        if (el.isConnected)
          stages.cleanup();
        delete el._x_transitioning;
      });
    });
    el._x_transitioning = {
      beforeCancels: [],
      beforeCancel(callback) {
        this.beforeCancels.push(callback);
      },
      cancel: once(function() {
        while (this.beforeCancels.length) {
          this.beforeCancels.shift()();
        }
        ;
        finish();
      }),
      finish
    };
    mutateDom(() => {
      stages.start();
      stages.during();
    });
    holdNextTicks();
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
      let delay3 = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
      if (duration === 0)
        duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
      mutateDom(() => {
        stages.before();
      });
      reachedBefore = true;
      requestAnimationFrame(() => {
        if (interrupted)
          return;
        mutateDom(() => {
          stages.end();
        });
        releaseNextTicks();
        setTimeout(el._x_transitioning.finish, duration + delay3);
        reachedEnd = true;
      });
    });
  }
  function modifierValue(modifiers, key, fallback2) {
    if (modifiers.indexOf(key) === -1)
      return fallback2;
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue)
      return fallback2;
    if (key === "scale") {
      if (isNaN(rawValue))
        return fallback2;
    }
    if (key === "duration" || key === "delay") {
      let match = rawValue.match(/([0-9]+)ms/);
      if (match)
        return match[1];
    }
    if (key === "origin") {
      if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
      }
    }
    return rawValue;
  }
  var isCloning = false;
  function skipDuringClone(callback, fallback2 = () => {
  }) {
    return (...args) => isCloning ? fallback2(...args) : callback(...args);
  }
  function onlyDuringClone(callback) {
    return (...args) => isCloning && callback(...args);
  }
  var interceptors = [];
  function interceptClone(callback) {
    interceptors.push(callback);
  }
  function cloneNode(from, to) {
    interceptors.forEach((i) => i(from, to));
    isCloning = true;
    dontRegisterReactiveSideEffects(() => {
      initTree(to, (el, callback) => {
        callback(el, () => {
        });
      });
    });
    isCloning = false;
  }
  var isCloningLegacy = false;
  function clone(oldEl, newEl) {
    if (!newEl._x_dataStack)
      newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    isCloningLegacy = true;
    dontRegisterReactiveSideEffects(() => {
      cloneTree(newEl);
    });
    isCloning = false;
    isCloningLegacy = false;
  }
  function cloneTree(el) {
    let hasRunThroughFirstEl = false;
    let shallowWalker = (el2, callback) => {
      walk(el2, (el3, skip) => {
        if (hasRunThroughFirstEl && isRoot(el3))
          return skip();
        hasRunThroughFirstEl = true;
        callback(el3, skip);
      });
    };
    initTree(el, shallowWalker);
  }
  function dontRegisterReactiveSideEffects(callback) {
    let cache = effect;
    overrideEffect((callback2, el) => {
      let storedEffect = cache(callback2);
      release(storedEffect);
      return () => {
      };
    });
    callback();
    overrideEffect(cache);
  }
  function bind(el, name, value, modifiers = []) {
    if (!el._x_bindings)
      el._x_bindings = reactive({});
    el._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;
    switch (name) {
      case "value":
        bindInputValue(el, value);
        break;
      case "style":
        bindStyles(el, value);
        break;
      case "class":
        bindClasses(el, value);
        break;
      case "selected":
      case "checked":
        bindAttributeAndProperty(el, name, value);
        break;
      default:
        bindAttribute(el, name, value);
        break;
    }
  }
  function bindInputValue(el, value) {
    if (isRadio(el)) {
      if (el.attributes.value === void 0) {
        el.value = value;
      }
      if (window.fromModel) {
        if (typeof value === "boolean") {
          el.checked = safeParseBoolean(el.value) === value;
        } else {
          el.checked = checkedAttrLooseCompare(el.value, value);
        }
      }
    } else if (isCheckbox(el)) {
      if (Number.isInteger(value)) {
        el.value = value;
      } else if (!Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
        el.value = String(value);
      } else {
        if (Array.isArray(value)) {
          el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
        } else {
          el.checked = !!value;
        }
      }
    } else if (el.tagName === "SELECT") {
      updateSelect(el, value);
    } else {
      if (el.value === value)
        return;
      el.value = value === void 0 ? "" : value;
    }
  }
  function bindClasses(el, value) {
    if (el._x_undoAddedClasses)
      el._x_undoAddedClasses();
    el._x_undoAddedClasses = setClasses(el, value);
  }
  function bindStyles(el, value) {
    if (el._x_undoAddedStyles)
      el._x_undoAddedStyles();
    el._x_undoAddedStyles = setStyles(el, value);
  }
  function bindAttributeAndProperty(el, name, value) {
    bindAttribute(el, name, value);
    setPropertyIfChanged(el, name, value);
  }
  function bindAttribute(el, name, value) {
    if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
      el.removeAttribute(name);
    } else {
      if (isBooleanAttr(name))
        value = name;
      setIfChanged(el, name, value);
    }
  }
  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }
  function setPropertyIfChanged(el, propName, value) {
    if (el[propName] !== value) {
      el[propName] = value;
    }
  }
  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map((value2) => {
      return value2 + "";
    });
    Array.from(el.options).forEach((option) => {
      option.selected = arrayWrappedValue.includes(option.value);
    });
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }
  function safeParseBoolean(rawValue) {
    if ([1, "1", "true", "on", "yes", true].includes(rawValue)) {
      return true;
    }
    if ([0, "0", "false", "off", "no", false].includes(rawValue)) {
      return false;
    }
    return rawValue ? Boolean(rawValue) : null;
  }
  var booleanAttributes = /* @__PURE__ */ new Set([
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "inert",
    "ismap",
    "itemscope",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected",
    "shadowrootclonable",
    "shadowrootdelegatesfocus",
    "shadowrootserializable"
  ]);
  function isBooleanAttr(attrName) {
    return booleanAttributes.has(attrName);
  }
  function attributeShouldntBePreservedIfFalsy(name) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
  }
  function getBinding(el, name, fallback2) {
    if (el._x_bindings && el._x_bindings[name] !== void 0)
      return el._x_bindings[name];
    return getAttributeBinding(el, name, fallback2);
  }
  function extractProp(el, name, fallback2, extract = true) {
    if (el._x_bindings && el._x_bindings[name] !== void 0)
      return el._x_bindings[name];
    if (el._x_inlineBindings && el._x_inlineBindings[name] !== void 0) {
      let binding = el._x_inlineBindings[name];
      binding.extract = extract;
      return dontAutoEvaluateFunctions(() => {
        return evaluate(el, binding.expression);
      });
    }
    return getAttributeBinding(el, name, fallback2);
  }
  function getAttributeBinding(el, name, fallback2) {
    let attr = el.getAttribute(name);
    if (attr === null)
      return typeof fallback2 === "function" ? fallback2() : fallback2;
    if (attr === "")
      return true;
    if (isBooleanAttr(name)) {
      return !![name, "true"].includes(attr);
    }
    return attr;
  }
  function isCheckbox(el) {
    return el.type === "checkbox" || el.localName === "ui-checkbox" || el.localName === "ui-switch";
  }
  function isRadio(el) {
    return el.type === "radio" || el.localName === "ui-radio";
  }
  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      let context = this, args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  function entangle({ get: outerGet, set: outerSet }, { get: innerGet, set: innerSet }) {
    let firstRun = true;
    let outerHash;
    let innerHash;
    let reference = effect(() => {
      let outer = outerGet();
      let inner = innerGet();
      if (firstRun) {
        innerSet(cloneIfObject(outer));
        firstRun = false;
      } else {
        let outerHashLatest = JSON.stringify(outer);
        let innerHashLatest = JSON.stringify(inner);
        if (outerHashLatest !== outerHash) {
          innerSet(cloneIfObject(outer));
        } else if (outerHashLatest !== innerHashLatest) {
          outerSet(cloneIfObject(inner));
        } else {
        }
      }
      outerHash = JSON.stringify(outerGet());
      innerHash = JSON.stringify(innerGet());
    });
    return () => {
      release(reference);
    };
  }
  function cloneIfObject(value) {
    return typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
  }
  function plugin(callback) {
    let callbacks = Array.isArray(callback) ? callback : [callback];
    callbacks.forEach((i) => i(alpine_default));
  }
  var stores = {};
  var isReactive = false;
  function store(name, value) {
    if (!isReactive) {
      stores = reactive(stores);
      isReactive = true;
    }
    if (value === void 0) {
      return stores[name];
    }
    stores[name] = value;
    initInterceptors(stores[name]);
    if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
      stores[name].init();
    }
  }
  function getStores() {
    return stores;
  }
  var binds = {};
  function bind2(name, bindings) {
    let getBindings = typeof bindings !== "function" ? () => bindings : bindings;
    if (name instanceof Element) {
      return applyBindingsObject(name, getBindings());
    } else {
      binds[name] = getBindings;
    }
    return () => {
    };
  }
  function injectBindingProviders(obj) {
    Object.entries(binds).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback(...args);
          };
        }
      });
    });
    return obj;
  }
  function applyBindingsObject(el, obj, original) {
    let cleanupRunners = [];
    while (cleanupRunners.length)
      cleanupRunners.pop()();
    let attributes = Object.entries(obj).map(([name, value]) => ({ name, value }));
    let staticAttributes = attributesOnly(attributes);
    attributes = attributes.map((attribute) => {
      if (staticAttributes.find((attr) => attr.name === attribute.name)) {
        return {
          name: `x-bind:${attribute.name}`,
          value: `"${attribute.value}"`
        };
      }
      return attribute;
    });
    directives(el, attributes, original).map((handle) => {
      cleanupRunners.push(handle.runCleanups);
      handle();
    });
    return () => {
      while (cleanupRunners.length)
        cleanupRunners.pop()();
    };
  }
  var datas = {};
  function data(name, callback) {
    datas[name] = callback;
  }
  function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback.bind(context)(...args);
          };
        },
        enumerable: false
      });
    });
    return obj;
  }
  var Alpine2 = {
    get reactive() {
      return reactive;
    },
    get release() {
      return release;
    },
    get effect() {
      return effect;
    },
    get raw() {
      return raw;
    },
    version: "3.14.8",
    flushAndStopDeferringMutations,
    dontAutoEvaluateFunctions,
    disableEffectScheduling,
    startObservingMutations,
    stopObservingMutations,
    setReactivityEngine,
    onAttributeRemoved,
    onAttributesAdded,
    closestDataStack,
    skipDuringClone,
    onlyDuringClone,
    addRootSelector,
    addInitSelector,
    interceptClone,
    addScopeToNode,
    deferMutations,
    mapAttributes,
    evaluateLater,
    interceptInit,
    setEvaluator,
    mergeProxies,
    extractProp,
    findClosest,
    onElRemoved,
    closestRoot,
    destroyTree,
    interceptor,
    transition,
    setStyles,
    mutateDom,
    directive,
    entangle,
    throttle,
    debounce,
    evaluate,
    initTree,
    nextTick,
    prefixed: prefix,
    prefix: setPrefix,
    plugin,
    magic,
    store,
    start,
    clone,
    cloneNode,
    bound: getBinding,
    $data: scope,
    watch,
    walk,
    data,
    bind: bind2
  };
  var alpine_default = Alpine2;
  function makeMap(str, expectsLowerCase) {
    const map = /* @__PURE__ */ Object.create(null);
    const list = str.split(",");
    for (let i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
  }
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
  var EMPTY_OBJ = true ? Object.freeze({}) : {};
  var EMPTY_ARR = true ? Object.freeze([]) : [];
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray2 = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject2 = (val) => val !== null && typeof val === "object";
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var cacheStringFunction = (fn) => {
    const cache = /* @__PURE__ */ Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  });
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
  var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
  var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
  var targetMap = /* @__PURE__ */ new WeakMap();
  var effectStack = [];
  var activeEffect;
  var ITERATE_KEY = Symbol(true ? "iterate" : "");
  var MAP_KEY_ITERATE_KEY = Symbol(true ? "Map key iterate" : "");
  function isEffect(fn) {
    return fn && fn._isEffect === true;
  }
  function effect2(fn, options = EMPTY_OBJ) {
    if (isEffect(fn)) {
      fn = fn.raw;
    }
    const effect3 = createReactiveEffect(fn, options);
    if (!options.lazy) {
      effect3();
    }
    return effect3;
  }
  function stop(effect3) {
    if (effect3.active) {
      cleanup(effect3);
      if (effect3.options.onStop) {
        effect3.options.onStop();
      }
      effect3.active = false;
    }
  }
  var uid = 0;
  function createReactiveEffect(fn, options) {
    const effect3 = function reactiveEffect() {
      if (!effect3.active) {
        return fn();
      }
      if (!effectStack.includes(effect3)) {
        cleanup(effect3);
        try {
          enableTracking();
          effectStack.push(effect3);
          activeEffect = effect3;
          return fn();
        } finally {
          effectStack.pop();
          resetTracking();
          activeEffect = effectStack[effectStack.length - 1];
        }
      }
    };
    effect3.id = uid++;
    effect3.allowRecurse = !!options.allowRecurse;
    effect3._isEffect = true;
    effect3.active = true;
    effect3.raw = fn;
    effect3.deps = [];
    effect3.options = options;
    return effect3;
  }
  function cleanup(effect3) {
    const { deps } = effect3;
    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].delete(effect3);
      }
      deps.length = 0;
    }
  }
  var shouldTrack = true;
  var trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) {
      return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = /* @__PURE__ */ new Set());
    }
    if (!dep.has(activeEffect)) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
      if (activeEffect.options.onTrack) {
        activeEffect.options.onTrack({
          effect: activeEffect,
          target,
          type,
          key
        });
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    const effects = /* @__PURE__ */ new Set();
    const add2 = (effectsToAdd) => {
      if (effectsToAdd) {
        effectsToAdd.forEach((effect3) => {
          if (effect3 !== activeEffect || effect3.allowRecurse) {
            effects.add(effect3);
          }
        });
      }
    };
    if (type === "clear") {
      depsMap.forEach(add2);
    } else if (key === "length" && isArray2(target)) {
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newValue) {
          add2(dep);
        }
      });
    } else {
      if (key !== void 0) {
        add2(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!isArray2(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isIntegerKey(key)) {
            add2(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!isArray2(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            add2(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    const run = (effect3) => {
      if (effect3.options.onTrigger) {
        effect3.options.onTrigger({
          effect: effect3,
          target,
          key,
          type,
          newValue,
          oldValue,
          oldTarget
        });
      }
      if (effect3.options.scheduler) {
        effect3.options.scheduler(effect3);
      } else {
        effect3();
      }
    };
    effects.forEach(run);
  }
  var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
  var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
  var get2 = /* @__PURE__ */ createGetter();
  var readonlyGet = /* @__PURE__ */ createGetter(true);
  var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
  function createArrayInstrumentations() {
    const instrumentations = {};
    ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
      instrumentations[key] = function(...args) {
        const arr = toRaw(this);
        for (let i = 0, l = this.length; i < l; i++) {
          track(arr, "get", i + "");
        }
        const res = arr[key](...args);
        if (res === -1 || res === false) {
          return arr[key](...args.map(toRaw));
        } else {
          return res;
        }
      };
    });
    ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
      instrumentations[key] = function(...args) {
        pauseTracking();
        const res = toRaw(this)[key].apply(this, args);
        resetTracking();
        return res;
      };
    });
    return instrumentations;
  }
  function createGetter(isReadonly = false, shallow = false) {
    return function get3(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = isArray2(target);
      if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      const res = Reflect.get(target, key, receiver);
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly) {
        track(target, "get", key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
        return shouldUnwrap ? res.value : res;
      }
      if (isObject2(res)) {
        return isReadonly ? readonly(res) : reactive2(res);
      }
      return res;
    };
  }
  var set2 = /* @__PURE__ */ createSetter();
  function createSetter(shallow = false) {
    return function set3(target, key, value, receiver) {
      let oldValue = target[key];
      if (!shallow) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
        if (!isArray2(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = isArray2(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  function ownKeys(target) {
    track(target, "iterate", isArray2(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
  };
  var readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
      if (true) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    },
    deleteProperty(target, key) {
      if (true) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    }
  };
  var toReactive = (value) => isObject2(value) ? reactive2(value) : value;
  var toReadonly = (value) => isObject2(value) ? readonly(value) : value;
  var toShallow = (value) => value;
  var getProto = (v) => Reflect.getPrototypeOf(v);
  function get$1(target, key, isReadonly = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "get", key);
    }
    !isReadonly && track(rawTarget, "get", rawKey);
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has$1(key, isReadonly = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "has", key);
    }
    !isReadonly && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly = false) {
    target = target["__v_raw"];
    !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (hasChanged(value, oldValue)) {
      trigger(target, "set", key, value, oldValue);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = true ? isMap(target) ? new Map(target) : new Set(target) : void 0;
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0, oldTarget);
    }
    return result;
  }
  function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      if (true) {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
      }
      return type === "delete" ? false : this;
    };
  }
  function createInstrumentations() {
    const mutableInstrumentations2 = {
      get(key) {
        return get$1(this, key);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
      get(key) {
        return get$1(this, key, false, true);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear"),
      forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear"),
      forEach: createForEach(true, true)
    };
    const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
    iteratorMethods.forEach((method) => {
      mutableInstrumentations2[method] = createIterableMethod(method, false, false);
      readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
      shallowInstrumentations2[method] = createIterableMethod(method, false, true);
      shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [
      mutableInstrumentations2,
      readonlyInstrumentations2,
      shallowInstrumentations2,
      shallowReadonlyInstrumentations2
    ];
  }
  var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
  function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  var mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
  };
  var readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
  };
  function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
      const type = toRawType(target);
      console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
  }
  var reactiveMap = /* @__PURE__ */ new WeakMap();
  var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
  var readonlyMap = /* @__PURE__ */ new WeakMap();
  var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive2(target) {
    if (target && target["__v_isReadonly"]) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject2(target)) {
      if (true) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
      }
      return target;
    }
    if (target["__v_raw"] && !(isReadonly && target["__v_isReactive"])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function toRaw(observed) {
    return observed && toRaw(observed["__v_raw"]) || observed;
  }
  function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
  }
  magic("nextTick", () => nextTick);
  magic("dispatch", (el) => dispatch2.bind(dispatch2, el));
  magic("watch", (el, { evaluateLater: evaluateLater2, cleanup: cleanup2 }) => (key, callback) => {
    let evaluate22 = evaluateLater2(key);
    let getter = () => {
      let value;
      evaluate22((i) => value = i);
      return value;
    };
    let unwatch = watch(getter, callback);
    cleanup2(unwatch);
  });
  magic("store", getStores);
  magic("data", (el) => scope(el));
  magic("root", (el) => closestRoot(el));
  magic("refs", (el) => {
    if (el._x_refs_proxy)
      return el._x_refs_proxy;
    el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
    return el._x_refs_proxy;
  });
  function getArrayOfRefObject(el) {
    let refObjects = [];
    findClosest(el, (i) => {
      if (i._x_refs)
        refObjects.push(i._x_refs);
    });
    return refObjects;
  }
  var globalIdMemo = {};
  function findAndIncrementId(name) {
    if (!globalIdMemo[name])
      globalIdMemo[name] = 0;
    return ++globalIdMemo[name];
  }
  function closestIdRoot(el, name) {
    return findClosest(el, (element) => {
      if (element._x_ids && element._x_ids[name])
        return true;
    });
  }
  function setIdRoot(el, name) {
    if (!el._x_ids)
      el._x_ids = {};
    if (!el._x_ids[name])
      el._x_ids[name] = findAndIncrementId(name);
  }
  magic("id", (el, { cleanup: cleanup2 }) => (name, key = null) => {
    let cacheKey = `${name}${key ? `-${key}` : ""}`;
    return cacheIdByNameOnElement(el, cacheKey, cleanup2, () => {
      let root = closestIdRoot(el, name);
      let id = root ? root._x_ids[name] : findAndIncrementId(name);
      return key ? `${name}-${id}-${key}` : `${name}-${id}`;
    });
  });
  interceptClone((from, to) => {
    if (from._x_id) {
      to._x_id = from._x_id;
    }
  });
  function cacheIdByNameOnElement(el, cacheKey, cleanup2, callback) {
    if (!el._x_id)
      el._x_id = {};
    if (el._x_id[cacheKey])
      return el._x_id[cacheKey];
    let output = callback();
    el._x_id[cacheKey] = output;
    cleanup2(() => {
      delete el._x_id[cacheKey];
    });
    return output;
  }
  magic("el", (el) => el);
  warnMissingPluginMagic("Focus", "focus", "focus");
  warnMissingPluginMagic("Persist", "persist", "persist");
  function warnMissingPluginMagic(name, magicName, slug) {
    magic(magicName, (el) => warn(`You can't use [$${magicName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
  }
  directive("modelable", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
    let func = evaluateLater2(expression);
    let innerGet = () => {
      let result;
      func((i) => result = i);
      return result;
    };
    let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
    let innerSet = (val) => evaluateInnerSet(() => {
    }, { scope: { "__placeholder": val } });
    let initialValue = innerGet();
    innerSet(initialValue);
    queueMicrotask(() => {
      if (!el._x_model)
        return;
      el._x_removeModelListeners["default"]();
      let outerGet = el._x_model.get;
      let outerSet = el._x_model.set;
      let releaseEntanglement = entangle({
        get() {
          return outerGet();
        },
        set(value) {
          outerSet(value);
        }
      }, {
        get() {
          return innerGet();
        },
        set(value) {
          innerSet(value);
        }
      });
      cleanup2(releaseEntanglement);
    });
  });
  directive("teleport", (el, { modifiers, expression }, { cleanup: cleanup2 }) => {
    if (el.tagName.toLowerCase() !== "template")
      warn("x-teleport can only be used on a <template> tag", el);
    let target = getTarget(expression);
    let clone2 = el.content.cloneNode(true).firstElementChild;
    el._x_teleport = clone2;
    clone2._x_teleportBack = el;
    el.setAttribute("data-teleport-template", true);
    clone2.setAttribute("data-teleport-target", true);
    if (el._x_forwardEvents) {
      el._x_forwardEvents.forEach((eventName) => {
        clone2.addEventListener(eventName, (e) => {
          e.stopPropagation();
          el.dispatchEvent(new e.constructor(e.type, e));
        });
      });
    }
    addScopeToNode(clone2, {}, el);
    let placeInDom = (clone3, target2, modifiers2) => {
      if (modifiers2.includes("prepend")) {
        target2.parentNode.insertBefore(clone3, target2);
      } else if (modifiers2.includes("append")) {
        target2.parentNode.insertBefore(clone3, target2.nextSibling);
      } else {
        target2.appendChild(clone3);
      }
    };
    mutateDom(() => {
      placeInDom(clone2, target, modifiers);
      skipDuringClone(() => {
        initTree(clone2);
      })();
    });
    el._x_teleportPutBack = () => {
      let target2 = getTarget(expression);
      mutateDom(() => {
        placeInDom(el._x_teleport, target2, modifiers);
      });
    };
    cleanup2(() => mutateDom(() => {
      clone2.remove();
      destroyTree(clone2);
    }));
  });
  var teleportContainerDuringClone = document.createElement("div");
  function getTarget(expression) {
    let target = skipDuringClone(() => {
      return document.querySelector(expression);
    }, () => {
      return teleportContainerDuringClone;
    })();
    if (!target)
      warn(`Cannot find x-teleport element for selector: "${expression}"`);
    return target;
  }
  var handler = () => {
  };
  handler.inline = (el, { modifiers }, { cleanup: cleanup2 }) => {
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup2(() => {
      modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
  };
  directive("ignore", handler);
  directive("effect", skipDuringClone((el, { expression }, { effect: effect3 }) => {
    effect3(evaluateLater(el, expression));
  }));
  function on(el, event, modifiers, callback) {
    let listenerTarget = el;
    let handler4 = (e) => callback(e);
    let options = {};
    let wrapHandler = (callback2, wrapper) => (e) => wrapper(callback2, e);
    if (modifiers.includes("dot"))
      event = dotSyntax(event);
    if (modifiers.includes("camel"))
      event = camelCase2(event);
    if (modifiers.includes("passive"))
      options.passive = true;
    if (modifiers.includes("capture"))
      options.capture = true;
    if (modifiers.includes("window"))
      listenerTarget = window;
    if (modifiers.includes("document"))
      listenerTarget = document;
    if (modifiers.includes("debounce")) {
      let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler4 = debounce(handler4, wait);
    }
    if (modifiers.includes("throttle")) {
      let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler4 = throttle(handler4, wait);
    }
    if (modifiers.includes("prevent"))
      handler4 = wrapHandler(handler4, (next, e) => {
        e.preventDefault();
        next(e);
      });
    if (modifiers.includes("stop"))
      handler4 = wrapHandler(handler4, (next, e) => {
        e.stopPropagation();
        next(e);
      });
    if (modifiers.includes("once")) {
      handler4 = wrapHandler(handler4, (next, e) => {
        next(e);
        listenerTarget.removeEventListener(event, handler4, options);
      });
    }
    if (modifiers.includes("away") || modifiers.includes("outside")) {
      listenerTarget = document;
      handler4 = wrapHandler(handler4, (next, e) => {
        if (el.contains(e.target))
          return;
        if (e.target.isConnected === false)
          return;
        if (el.offsetWidth < 1 && el.offsetHeight < 1)
          return;
        if (el._x_isShown === false)
          return;
        next(e);
      });
    }
    if (modifiers.includes("self"))
      handler4 = wrapHandler(handler4, (next, e) => {
        e.target === el && next(e);
      });
    if (isKeyEvent(event) || isClickEvent(event)) {
      handler4 = wrapHandler(handler4, (next, e) => {
        if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
          return;
        }
        next(e);
      });
    }
    listenerTarget.addEventListener(event, handler4, options);
    return () => {
      listenerTarget.removeEventListener(event, handler4, options);
    };
  }
  function dotSyntax(subject) {
    return subject.replace(/-/g, ".");
  }
  function camelCase2(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function kebabCase2(subject) {
    if ([" ", "_"].includes(subject))
      return subject;
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
  }
  function isKeyEvent(event) {
    return ["keydown", "keyup"].includes(event);
  }
  function isClickEvent(event) {
    return ["contextmenu", "click", "mouse"].some((i) => event.includes(i));
  }
  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter((i) => {
      return !["window", "document", "prevent", "stop", "once", "capture", "self", "away", "outside", "passive"].includes(i);
    });
    if (keyModifiers.includes("debounce")) {
      let debounceIndex = keyModifiers.indexOf("debounce");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.includes("throttle")) {
      let debounceIndex = keyModifiers.indexOf("throttle");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.length === 0)
      return false;
    if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0]))
      return false;
    const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter((i) => !selectedSystemKeyModifiers.includes(i));
    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
        if (modifier === "cmd" || modifier === "super")
          modifier = "meta";
        return e[`${modifier}Key`];
      });
      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        if (isClickEvent(e.type))
          return false;
        if (keyToModifiers(e.key).includes(keyModifiers[0]))
          return false;
      }
    }
    return true;
  }
  function keyToModifiers(key) {
    if (!key)
      return [];
    key = kebabCase2(key);
    let modifierToKeyMap = {
      "ctrl": "control",
      "slash": "/",
      "space": " ",
      "spacebar": " ",
      "cmd": "meta",
      "esc": "escape",
      "up": "arrow-up",
      "down": "arrow-down",
      "left": "arrow-left",
      "right": "arrow-right",
      "period": ".",
      "comma": ",",
      "equal": "=",
      "minus": "-",
      "underscore": "_"
    };
    modifierToKeyMap[key] = key;
    return Object.keys(modifierToKeyMap).map((modifier) => {
      if (modifierToKeyMap[modifier] === key)
        return modifier;
    }).filter((modifier) => modifier);
  }
  directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let scopeTarget = el;
    if (modifiers.includes("parent")) {
      scopeTarget = el.parentNode;
    }
    let evaluateGet = evaluateLater(scopeTarget, expression);
    let evaluateSet;
    if (typeof expression === "string") {
      evaluateSet = evaluateLater(scopeTarget, `${expression} = __placeholder`);
    } else if (typeof expression === "function" && typeof expression() === "string") {
      evaluateSet = evaluateLater(scopeTarget, `${expression()} = __placeholder`);
    } else {
      evaluateSet = () => {
      };
    }
    let getValue = () => {
      let result;
      evaluateGet((value) => result = value);
      return isGetterSetter(result) ? result.get() : result;
    };
    let setValue = (value) => {
      let result;
      evaluateGet((value2) => result = value2);
      if (isGetterSetter(result)) {
        result.set(value);
      } else {
        evaluateSet(() => {
        }, {
          scope: { "__placeholder": value }
        });
      }
    };
    if (typeof expression === "string" && el.type === "radio") {
      mutateDom(() => {
        if (!el.hasAttribute("name"))
          el.setAttribute("name", expression);
      });
    }
    var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    let removeListener = isCloning ? () => {
    } : on(el, event, modifiers, (e) => {
      setValue(getInputValue(el, modifiers, e, getValue()));
    });
    if (modifiers.includes("fill")) {
      if ([void 0, null, ""].includes(getValue()) || isCheckbox(el) && Array.isArray(getValue()) || el.tagName.toLowerCase() === "select" && el.multiple) {
        setValue(getInputValue(el, modifiers, { target: el }, getValue()));
      }
    }
    if (!el._x_removeModelListeners)
      el._x_removeModelListeners = {};
    el._x_removeModelListeners["default"] = removeListener;
    cleanup2(() => el._x_removeModelListeners["default"]());
    if (el.form) {
      let removeResetListener = on(el.form, "reset", [], (e) => {
        nextTick(() => el._x_model && el._x_model.set(getInputValue(el, modifiers, { target: el }, getValue())));
      });
      cleanup2(() => removeResetListener());
    }
    el._x_model = {
      get() {
        return getValue();
      },
      set(value) {
        setValue(value);
      }
    };
    el._x_forceModelUpdate = (value) => {
      if (value === void 0 && typeof expression === "string" && expression.match(/\./))
        value = "";
      window.fromModel = true;
      mutateDom(() => bind(el, "value", value));
      delete window.fromModel;
    };
    effect3(() => {
      let value = getValue();
      if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
        return;
      el._x_forceModelUpdate(value);
    });
  });
  function getInputValue(el, modifiers, event, currentValue) {
    return mutateDom(() => {
      if (event instanceof CustomEvent && event.detail !== void 0)
        return event.detail !== null && event.detail !== void 0 ? event.detail : event.target.value;
      else if (isCheckbox(el)) {
        if (Array.isArray(currentValue)) {
          let newValue = null;
          if (modifiers.includes("number")) {
            newValue = safeParseNumber(event.target.value);
          } else if (modifiers.includes("boolean")) {
            newValue = safeParseBoolean(event.target.value);
          } else {
            newValue = event.target.value;
          }
          return event.target.checked ? currentValue.includes(newValue) ? currentValue : currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
        if (modifiers.includes("number")) {
          return Array.from(event.target.selectedOptions).map((option) => {
            let rawValue = option.value || option.text;
            return safeParseNumber(rawValue);
          });
        } else if (modifiers.includes("boolean")) {
          return Array.from(event.target.selectedOptions).map((option) => {
            let rawValue = option.value || option.text;
            return safeParseBoolean(rawValue);
          });
        }
        return Array.from(event.target.selectedOptions).map((option) => {
          return option.value || option.text;
        });
      } else {
        let newValue;
        if (isRadio(el)) {
          if (event.target.checked) {
            newValue = event.target.value;
          } else {
            newValue = currentValue;
          }
        } else {
          newValue = event.target.value;
        }
        if (modifiers.includes("number")) {
          return safeParseNumber(newValue);
        } else if (modifiers.includes("boolean")) {
          return safeParseBoolean(newValue);
        } else if (modifiers.includes("trim")) {
          return newValue.trim();
        } else {
          return newValue;
        }
      }
    });
  }
  function safeParseNumber(rawValue) {
    let number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric2(number) ? number : rawValue;
  }
  function checkedAttrLooseCompare2(valueA, valueB) {
    return valueA == valueB;
  }
  function isNumeric2(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function isGetterSetter(value) {
    return value !== null && typeof value === "object" && typeof value.get === "function" && typeof value.set === "function";
  }
  directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));
  addInitSelector(() => `[${prefix("init")}]`);
  directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate22 }) => {
    if (typeof expression === "string") {
      return !!expression.trim() && evaluate22(expression, {}, false);
    }
    return evaluate22(expression, {}, false);
  }));
  directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate22 = evaluateLater2(expression);
    effect3(() => {
      evaluate22((value) => {
        mutateDom(() => {
          el.textContent = value;
        });
      });
    });
  });
  directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate22 = evaluateLater2(expression);
    effect3(() => {
      evaluate22((value) => {
        mutateDom(() => {
          el.innerHTML = value;
          el._x_ignoreSelf = true;
          initTree(el);
          delete el._x_ignoreSelf;
        });
      });
    });
  });
  mapAttributes(startingWith(":", into(prefix("bind:"))));
  var handler2 = (el, { value, modifiers, expression, original }, { effect: effect3, cleanup: cleanup2 }) => {
    if (!value) {
      let bindingProviders = {};
      injectBindingProviders(bindingProviders);
      let getBindings = evaluateLater(el, expression);
      getBindings((bindings) => {
        applyBindingsObject(el, bindings, original);
      }, { scope: bindingProviders });
      return;
    }
    if (value === "key")
      return storeKeyForXFor(el, expression);
    if (el._x_inlineBindings && el._x_inlineBindings[value] && el._x_inlineBindings[value].extract) {
      return;
    }
    let evaluate22 = evaluateLater(el, expression);
    effect3(() => evaluate22((result) => {
      if (result === void 0 && typeof expression === "string" && expression.match(/\./)) {
        result = "";
      }
      mutateDom(() => bind(el, value, result, modifiers));
    }));
    cleanup2(() => {
      el._x_undoAddedClasses && el._x_undoAddedClasses();
      el._x_undoAddedStyles && el._x_undoAddedStyles();
    });
  };
  handler2.inline = (el, { value, modifiers, expression }) => {
    if (!value)
      return;
    if (!el._x_inlineBindings)
      el._x_inlineBindings = {};
    el._x_inlineBindings[value] = { expression, extract: false };
  };
  directive("bind", handler2);
  function storeKeyForXFor(el, expression) {
    el._x_keyExpression = expression;
  }
  addRootSelector(() => `[${prefix("data")}]`);
  directive("data", (el, { expression }, { cleanup: cleanup2 }) => {
    if (shouldSkipRegisteringDataDuringClone(el))
      return;
    expression = expression === "" ? "{}" : expression;
    let magicContext = {};
    injectMagics(magicContext, el);
    let dataProviderContext = {};
    injectDataProviders(dataProviderContext, magicContext);
    let data2 = evaluate(el, expression, { scope: dataProviderContext });
    if (data2 === void 0 || data2 === true)
      data2 = {};
    injectMagics(data2, el);
    let reactiveData = reactive(data2);
    initInterceptors(reactiveData);
    let undo = addScopeToNode(el, reactiveData);
    reactiveData["init"] && evaluate(el, reactiveData["init"]);
    cleanup2(() => {
      reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
      undo();
    });
  });
  interceptClone((from, to) => {
    if (from._x_dataStack) {
      to._x_dataStack = from._x_dataStack;
      to.setAttribute("data-has-alpine-state", true);
    }
  });
  function shouldSkipRegisteringDataDuringClone(el) {
    if (!isCloning)
      return false;
    if (isCloningLegacy)
      return true;
    return el.hasAttribute("data-has-alpine-state");
  }
  directive("show", (el, { modifiers, expression }, { effect: effect3 }) => {
    let evaluate22 = evaluateLater(el, expression);
    if (!el._x_doHide)
      el._x_doHide = () => {
        mutateDom(() => {
          el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
        });
      };
    if (!el._x_doShow)
      el._x_doShow = () => {
        mutateDom(() => {
          if (el.style.length === 1 && el.style.display === "none") {
            el.removeAttribute("style");
          } else {
            el.style.removeProperty("display");
          }
        });
      };
    let hide = () => {
      el._x_doHide();
      el._x_isShown = false;
    };
    let show = () => {
      el._x_doShow();
      el._x_isShown = true;
    };
    let clickAwayCompatibleShow = () => setTimeout(show);
    let toggle = once((value) => value ? show() : hide(), (value) => {
      if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
        el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
      } else {
        value ? clickAwayCompatibleShow() : hide();
      }
    });
    let oldValue;
    let firstTime = true;
    effect3(() => evaluate22((value) => {
      if (!firstTime && value === oldValue)
        return;
      if (modifiers.includes("immediate"))
        value ? clickAwayCompatibleShow() : hide();
      toggle(value);
      oldValue = value;
      firstTime = false;
    }));
  });
  directive("for", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let iteratorNames = parseForExpression(expression);
    let evaluateItems = evaluateLater(el, iteratorNames.items);
    let evaluateKey = evaluateLater(el, el._x_keyExpression || "index");
    el._x_prevKeys = [];
    el._x_lookup = {};
    effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
    cleanup2(() => {
      Object.values(el._x_lookup).forEach((el2) => mutateDom(() => {
        destroyTree(el2);
        el2.remove();
      }));
      delete el._x_prevKeys;
      delete el._x_lookup;
    });
  });
  function loop(el, iteratorNames, evaluateItems, evaluateKey) {
    let isObject22 = (i) => typeof i === "object" && !Array.isArray(i);
    let templateEl = el;
    evaluateItems((items) => {
      if (isNumeric3(items) && items >= 0) {
        items = Array.from(Array(items).keys(), (i) => i + 1);
      }
      if (items === void 0)
        items = [];
      let lookup = el._x_lookup;
      let prevKeys = el._x_prevKeys;
      let scopes = [];
      let keys = [];
      if (isObject22(items)) {
        items = Object.entries(items).map(([key, value]) => {
          let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
          evaluateKey((value2) => {
            if (keys.includes(value2))
              warn("Duplicate key on x-for", el);
            keys.push(value2);
          }, { scope: { index: key, ...scope2 } });
          scopes.push(scope2);
        });
      } else {
        for (let i = 0; i < items.length; i++) {
          let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
          evaluateKey((value) => {
            if (keys.includes(value))
              warn("Duplicate key on x-for", el);
            keys.push(value);
          }, { scope: { index: i, ...scope2 } });
          scopes.push(scope2);
        }
      }
      let adds = [];
      let moves = [];
      let removes = [];
      let sames = [];
      for (let i = 0; i < prevKeys.length; i++) {
        let key = prevKeys[i];
        if (keys.indexOf(key) === -1)
          removes.push(key);
      }
      prevKeys = prevKeys.filter((key) => !removes.includes(key));
      let lastKey = "template";
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let prevIndex = prevKeys.indexOf(key);
        if (prevIndex === -1) {
          prevKeys.splice(i, 0, key);
          adds.push([lastKey, i]);
        } else if (prevIndex !== i) {
          let keyInSpot = prevKeys.splice(i, 1)[0];
          let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
          prevKeys.splice(i, 0, keyForSpot);
          prevKeys.splice(prevIndex, 0, keyInSpot);
          moves.push([keyInSpot, keyForSpot]);
        } else {
          sames.push(key);
        }
        lastKey = key;
      }
      for (let i = 0; i < removes.length; i++) {
        let key = removes[i];
        if (!(key in lookup))
          continue;
        mutateDom(() => {
          destroyTree(lookup[key]);
          lookup[key].remove();
        });
        delete lookup[key];
      }
      for (let i = 0; i < moves.length; i++) {
        let [keyInSpot, keyForSpot] = moves[i];
        let elInSpot = lookup[keyInSpot];
        let elForSpot = lookup[keyForSpot];
        let marker = document.createElement("div");
        mutateDom(() => {
          if (!elForSpot)
            warn(`x-for ":key" is undefined or invalid`, templateEl, keyForSpot, lookup);
          elForSpot.after(marker);
          elInSpot.after(elForSpot);
          elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
          marker.before(elInSpot);
          elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
          marker.remove();
        });
        elForSpot._x_refreshXForScope(scopes[keys.indexOf(keyForSpot)]);
      }
      for (let i = 0; i < adds.length; i++) {
        let [lastKey2, index] = adds[i];
        let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
        if (lastEl._x_currentIfEl)
          lastEl = lastEl._x_currentIfEl;
        let scope2 = scopes[index];
        let key = keys[index];
        let clone2 = document.importNode(templateEl.content, true).firstElementChild;
        let reactiveScope = reactive(scope2);
        addScopeToNode(clone2, reactiveScope, templateEl);
        clone2._x_refreshXForScope = (newScope) => {
          Object.entries(newScope).forEach(([key2, value]) => {
            reactiveScope[key2] = value;
          });
        };
        mutateDom(() => {
          lastEl.after(clone2);
          skipDuringClone(() => initTree(clone2))();
        });
        if (typeof key === "object") {
          warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
        }
        lookup[key] = clone2;
      }
      for (let i = 0; i < sames.length; i++) {
        lookup[sames[i]]._x_refreshXForScope(scopes[keys.indexOf(sames[i])]);
      }
      templateEl._x_prevKeys = keys;
    });
  }
  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\s*\(|\)\s*$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch)
      return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].replace(stripParensRE, "").trim();
    let iteratorMatch = item.match(forIteratorRE);
    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, "").trim();
      res.index = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }
    return res;
  }
  function getIterationScopeVariables(iteratorNames, item, index, items) {
    let scopeVariables = {};
    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
      let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i) => i.trim());
      names.forEach((name, i) => {
        scopeVariables[name] = item[i];
      });
    } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
      let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i) => i.trim());
      names.forEach((name) => {
        scopeVariables[name] = item[name];
      });
    } else {
      scopeVariables[iteratorNames.item] = item;
    }
    if (iteratorNames.index)
      scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection)
      scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }
  function isNumeric3(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function handler3() {
  }
  handler3.inline = (el, { expression }, { cleanup: cleanup2 }) => {
    let root = closestRoot(el);
    if (!root._x_refs)
      root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup2(() => delete root._x_refs[expression]);
  };
  directive("ref", handler3);
  directive("if", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    if (el.tagName.toLowerCase() !== "template")
      warn("x-if can only be used on a <template> tag", el);
    let evaluate22 = evaluateLater(el, expression);
    let show = () => {
      if (el._x_currentIfEl)
        return el._x_currentIfEl;
      let clone2 = el.content.cloneNode(true).firstElementChild;
      addScopeToNode(clone2, {}, el);
      mutateDom(() => {
        el.after(clone2);
        skipDuringClone(() => initTree(clone2))();
      });
      el._x_currentIfEl = clone2;
      el._x_undoIf = () => {
        mutateDom(() => {
          destroyTree(clone2);
          clone2.remove();
        });
        delete el._x_currentIfEl;
      };
      return clone2;
    };
    let hide = () => {
      if (!el._x_undoIf)
        return;
      el._x_undoIf();
      delete el._x_undoIf;
    };
    effect3(() => evaluate22((value) => {
      value ? show() : hide();
    }));
    cleanup2(() => el._x_undoIf && el._x_undoIf());
  });
  directive("id", (el, { expression }, { evaluate: evaluate22 }) => {
    let names = evaluate22(expression);
    names.forEach((name) => setIdRoot(el, name));
  });
  interceptClone((from, to) => {
    if (from._x_ids) {
      to._x_ids = from._x_ids;
    }
  });
  mapAttributes(startingWith("@", into(prefix("on:"))));
  directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup: cleanup2 }) => {
    let evaluate22 = expression ? evaluateLater(el, expression) : () => {
    };
    if (el.tagName.toLowerCase() === "template") {
      if (!el._x_forwardEvents)
        el._x_forwardEvents = [];
      if (!el._x_forwardEvents.includes(value))
        el._x_forwardEvents.push(value);
    }
    let removeListener = on(el, value, modifiers, (e) => {
      evaluate22(() => {
      }, { scope: { "$event": e }, params: [e] });
    });
    cleanup2(() => removeListener());
  }));
  warnMissingPluginDirective("Collapse", "collapse", "collapse");
  warnMissingPluginDirective("Intersect", "intersect", "intersect");
  warnMissingPluginDirective("Focus", "trap", "focus");
  warnMissingPluginDirective("Mask", "mask", "mask");
  function warnMissingPluginDirective(name, directiveName, slug) {
    directive(directiveName, (el) => warn(`You can't use [x-${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
  }
  alpine_default.setEvaluator(normalEvaluator);
  alpine_default.setReactivityEngine({ reactive: reactive2, effect: effect2, release: stop, raw: toRaw });
  var src_default = alpine_default;
  var module_default = src_default;

  // js/features/supportEntangle.js
  function generateEntangleFunction(component, cleanup2) {
    if (!cleanup2)
      cleanup2 = () => {
      };
    return (name, live = false) => {
      let isLive = live;
      let livewireProperty = name;
      let livewireComponent = component.$wire;
      let livewirePropertyValue = livewireComponent.get(livewireProperty);
      let interceptor2 = module_default.interceptor((initialValue, getter, setter, path, key) => {
        if (typeof livewirePropertyValue === "undefined") {
          console.error(`Livewire Entangle Error: Livewire property ['${livewireProperty}'] cannot be found on component: ['${component.name}']`);
          return;
        }
        let release2 = module_default.entangle({
          get() {
            return livewireComponent.get(name);
          },
          set(value) {
            livewireComponent.set(name, value, isLive);
          }
        }, {
          get() {
            return getter();
          },
          set(value) {
            setter(value);
          }
        });
        cleanup2(() => release2());
        return cloneIfObject2(livewireComponent.get(name));
      }, (obj) => {
        Object.defineProperty(obj, "live", {
          get() {
            isLive = true;
            return obj;
          }
        });
      });
      return interceptor2(livewirePropertyValue);
    };
  }
  function cloneIfObject2(value) {
    return typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
  }

  // js/hooks.js
  var listeners = [];
  function on2(name, callback) {
    if (!listeners[name])
      listeners[name] = [];
    listeners[name].push(callback);
    return () => {
      listeners[name] = listeners[name].filter((i) => i !== callback);
    };
  }
  function trigger2(name, ...params) {
    let callbacks = listeners[name] || [];
    let finishers = [];
    for (let i = 0; i < callbacks.length; i++) {
      let finisher = callbacks[i](...params);
      if (isFunction(finisher))
        finishers.push(finisher);
    }
    return (result) => {
      return runFinishers(finishers, result);
    };
  }
  async function triggerAsync(name, ...params) {
    let callbacks = listeners[name] || [];
    let finishers = [];
    for (let i = 0; i < callbacks.length; i++) {
      let finisher = await callbacks[i](...params);
      if (isFunction(finisher))
        finishers.push(finisher);
    }
    return (result) => {
      return runFinishers(finishers, result);
    };
  }
  function runFinishers(finishers, result) {
    let latest = result;
    for (let i = 0; i < finishers.length; i++) {
      let iResult = finishers[i](latest);
      if (iResult !== void 0) {
        latest = iResult;
      }
    }
    return latest;
  }

  // js/request/modal.js
  function showHtmlModal(html) {
    let page = document.createElement("html");
    page.innerHTML = html;
    page.querySelectorAll("a").forEach((a) => a.setAttribute("target", "_top"));
    let modal = document.getElementById("livewire-error");
    if (typeof modal != "undefined" && modal != null) {
      modal.innerHTML = "";
    } else {
      modal = document.createElement("div");
      modal.id = "livewire-error";
      modal.style.position = "fixed";
      modal.style.width = "100vw";
      modal.style.height = "100vh";
      modal.style.padding = "50px";
      modal.style.backgroundColor = "rgba(0, 0, 0, .6)";
      modal.style.zIndex = 2e5;
    }
    let iframe = document.createElement("iframe");
    iframe.style.backgroundColor = "#17161A";
    iframe.style.borderRadius = "5px";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    modal.appendChild(iframe);
    document.body.prepend(modal);
    document.body.style.overflow = "hidden";
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(page.outerHTML);
    iframe.contentWindow.document.close();
    modal.addEventListener("click", () => hideHtmlModal(modal));
    modal.setAttribute("tabindex", 0);
    modal.addEventListener("keydown", (e) => {
      if (e.key === "Escape")
        hideHtmlModal(modal);
    });
    modal.focus();
  }
  function hideHtmlModal(modal) {
    modal.outerHTML = "";
    document.body.style.overflow = "visible";
  }

  // js/request/pool.js
  var RequestPool = class {
    constructor() {
      this.commits = /* @__PURE__ */ new Set();
    }
    add(commit) {
      this.commits.add(commit);
    }
    delete(commit) {
      this.commits.delete(commit);
    }
    hasCommitFor(component) {
      return !!this.findCommitByComponent(component);
    }
    findCommitByComponent(component) {
      for (let [idx, commit] of this.commits.entries()) {
        if (commit.component === component)
          return commit;
      }
    }
    shouldHoldCommit(commit) {
      return !commit.isolate;
    }
    empty() {
      return this.commits.size === 0;
    }
    async send() {
      this.prepare();
      await sendRequest(this);
    }
    prepare() {
      this.commits.forEach((i) => i.prepare());
    }
    payload() {
      let commitPayloads = [];
      let successReceivers = [];
      let failureReceivers = [];
      this.commits.forEach((commit) => {
        let [payload, succeed2, fail2] = commit.toRequestPayload();
        commitPayloads.push(payload);
        successReceivers.push(succeed2);
        failureReceivers.push(fail2);
      });
      let succeed = (components2) => successReceivers.forEach((receiver) => receiver(components2.shift()));
      let fail = () => failureReceivers.forEach((receiver) => receiver());
      return [commitPayloads, succeed, fail];
    }
  };

  // js/request/commit.js
  var Commit = class {
    constructor(component) {
      this.component = component;
      this.isolate = false;
      this.calls = [];
      this.receivers = [];
      this.resolvers = [];
    }
    addResolver(resolver) {
      this.resolvers.push(resolver);
    }
    addCall(method, params, receiver) {
      this.calls.push({
        path: "",
        method,
        params,
        handleReturn(value) {
          receiver(value);
        }
      });
    }
    prepare() {
      trigger2("commit.prepare", { component: this.component });
    }
    toRequestPayload() {
      let propertiesDiff = diff(this.component.canonical, this.component.ephemeral);
      let updates = this.component.mergeQueuedUpdates(propertiesDiff);
      let payload = {
        snapshot: this.component.snapshotEncoded,
        updates,
        calls: this.calls.map((i) => ({
          path: i.path,
          method: i.method,
          params: i.params
        }))
      };
      let succeedCallbacks = [];
      let failCallbacks = [];
      let respondCallbacks = [];
      let succeed = (fwd) => succeedCallbacks.forEach((i) => i(fwd));
      let fail = () => failCallbacks.forEach((i) => i());
      let respond = () => respondCallbacks.forEach((i) => i());
      let finishTarget = trigger2("commit", {
        component: this.component,
        commit: payload,
        succeed: (callback) => {
          succeedCallbacks.push(callback);
        },
        fail: (callback) => {
          failCallbacks.push(callback);
        },
        respond: (callback) => {
          respondCallbacks.push(callback);
        }
      });
      let handleResponse = (response) => {
        let { snapshot, effects } = response;
        respond();
        this.component.mergeNewSnapshot(snapshot, effects, updates);
        this.component.processEffects(this.component.effects);
        if (effects["returns"]) {
          let returns = effects["returns"];
          let returnHandlerStack = this.calls.map(({ handleReturn }) => handleReturn);
          returnHandlerStack.forEach((handleReturn, index) => {
            handleReturn(returns[index]);
          });
        }
        let parsedSnapshot = JSON.parse(snapshot);
        finishTarget({ snapshot: parsedSnapshot, effects });
        this.resolvers.forEach((i) => i());
        succeed(response);
      };
      let handleFailure = () => {
        respond();
        fail();
      };
      return [payload, handleResponse, handleFailure];
    }
  };

  // js/request/bus.js
  var CommitBus = class {
    constructor() {
      this.commits = /* @__PURE__ */ new Set();
      this.pools = /* @__PURE__ */ new Set();
    }
    add(component) {
      let commit = this.findCommitOr(component, () => {
        let newCommit = new Commit(component);
        this.commits.add(newCommit);
        return newCommit;
      });
      bufferPoolingForFiveMs(commit, () => {
        let pool = this.findPoolWithComponent(commit.component);
        if (!pool) {
          this.createAndSendNewPool();
        }
      });
      return commit;
    }
    findCommitOr(component, callback) {
      for (let [idx, commit] of this.commits.entries()) {
        if (commit.component === component) {
          return commit;
        }
      }
      return callback();
    }
    findPoolWithComponent(component) {
      for (let [idx, pool] of this.pools.entries()) {
        if (pool.hasCommitFor(component))
          return pool;
      }
    }
    createAndSendNewPool() {
      trigger2("commit.pooling", { commits: this.commits });
      let pools = this.corraleCommitsIntoPools();
      this.commits.clear();
      trigger2("commit.pooled", { pools });
      pools.forEach((pool) => {
        if (pool.empty())
          return;
        this.pools.add(pool);
        pool.send().then(() => {
          this.pools.delete(pool);
          this.sendAnyQueuedCommits();
        });
      });
    }
    corraleCommitsIntoPools() {
      let pools = /* @__PURE__ */ new Set();
      for (let [idx, commit] of this.commits.entries()) {
        let hasFoundPool = false;
        pools.forEach((pool) => {
          if (pool.shouldHoldCommit(commit)) {
            pool.add(commit);
            hasFoundPool = true;
          }
        });
        if (!hasFoundPool) {
          let newPool = new RequestPool();
          newPool.add(commit);
          pools.add(newPool);
        }
      }
      return pools;
    }
    sendAnyQueuedCommits() {
      if (this.commits.size > 0) {
        this.createAndSendNewPool();
      }
    }
  };
  var buffersByCommit = /* @__PURE__ */ new WeakMap();
  function bufferPoolingForFiveMs(commit, callback) {
    if (buffersByCommit.has(commit))
      return;
    buffersByCommit.set(commit, setTimeout(() => {
      callback();
      buffersByCommit.delete(commit);
    }, 5));
  }

  // js/request/index.js
  var commitBus = new CommitBus();
  async function requestCommit(component) {
    let commit = commitBus.add(component);
    let promise = new Promise((resolve) => {
      commit.addResolver(resolve);
    });
    promise.commit = commit;
    return promise;
  }
  async function requestCall(component, method, params) {
    let commit = commitBus.add(component);
    let promise = new Promise((resolve) => {
      commit.addCall(method, params, (value) => resolve(value));
    });
    promise.commit = commit;
    return promise;
  }
  async function sendRequest(pool) {
    let [payload, handleSuccess, handleFailure] = pool.payload();
    let options = {
      method: "POST",
      body: JSON.stringify({
        _token: getCsrfToken(),
        components: payload
      }),
      headers: {
        "Content-type": "application/json",
        "X-Livewire": ""
      }
    };
    let succeedCallbacks = [];
    let failCallbacks = [];
    let respondCallbacks = [];
    let succeed = (fwd) => succeedCallbacks.forEach((i) => i(fwd));
    let fail = (fwd) => failCallbacks.forEach((i) => i(fwd));
    let respond = (fwd) => respondCallbacks.forEach((i) => i(fwd));
    let finishProfile = trigger2("request.profile", options);
    let updateUri = getUpdateUri();
    trigger2("request", {
      url: updateUri,
      options,
      payload: options.body,
      respond: (i) => respondCallbacks.push(i),
      succeed: (i) => succeedCallbacks.push(i),
      fail: (i) => failCallbacks.push(i)
    });
    let response;
    try {
      response = await fetch(updateUri, options);
    } catch (e) {
      finishProfile({ content: "{}", failed: true });
      handleFailure();
      fail({
        status: 503,
        content: null,
        preventDefault: () => {
        }
      });
      return;
    }
    let mutableObject = {
      status: response.status,
      response
    };
    respond(mutableObject);
    response = mutableObject.response;
    let content = await response.text();
    if (!response.ok) {
      finishProfile({ content: "{}", failed: true });
      let preventDefault = false;
      handleFailure();
      fail({
        status: response.status,
        content,
        preventDefault: () => preventDefault = true
      });
      if (preventDefault)
        return;
      if (response.status === 419) {
        handlePageExpiry();
      }
      return showFailureModal(content);
    }
    if (response.redirected) {
      window.location.href = response.url;
    }
    if (contentIsFromDump(content)) {
      let dump;
      [dump, content] = splitDumpFromContent(content);
      showHtmlModal(dump);
      finishProfile({ content: "{}", failed: true });
    } else {
      finishProfile({ content, failed: false });
    }
    let { components: components2, assets } = JSON.parse(content);
    await triggerAsync("payload.intercept", { components: components2, assets });
    await handleSuccess(components2);
    succeed({ status: response.status, json: JSON.parse(content) });
  }
  function handlePageExpiry() {
    confirm("This page has expired.\nWould you like to refresh the page?") && window.location.reload();
  }
  function showFailureModal(content) {
    let html = content;
    showHtmlModal(html);
  }

  // js/$wire.js
  var properties = {};
  var fallback;
  function wireProperty(name, callback, component = null) {
    properties[name] = callback;
  }
  function wireFallback(callback) {
    fallback = callback;
  }
  var aliases = {
    "on": "$on",
    "el": "$el",
    "id": "$id",
    "get": "$get",
    "set": "$set",
    "call": "$call",
    "hook": "$hook",
    "commit": "$commit",
    "watch": "$watch",
    "entangle": "$entangle",
    "dispatch": "$dispatch",
    "dispatchTo": "$dispatchTo",
    "dispatchSelf": "$dispatchSelf",
    "upload": "$upload",
    "uploadMultiple": "$uploadMultiple",
    "removeUpload": "$removeUpload",
    "cancelUpload": "$cancelUpload"
  };
  function generateWireObject(component, state) {
    return new Proxy({}, {
      get(target, property) {
        if (property === "__instance")
          return component;
        if (property in aliases) {
          return getProperty(component, aliases[property]);
        } else if (property in properties) {
          return getProperty(component, property);
        } else if (property in state) {
          return state[property];
        } else if (!["then"].includes(property)) {
          return getFallback(component)(property);
        }
      },
      set(target, property, value) {
        if (property in state) {
          state[property] = value;
        }
        return true;
      }
    });
  }
  function getProperty(component, name) {
    return properties[name](component);
  }
  function getFallback(component) {
    return fallback(component);
  }
  module_default.magic("wire", (el, { cleanup: cleanup2 }) => {
    let component;
    return new Proxy({}, {
      get(target, property) {
        if (!component)
          component = closestComponent(el);
        if (["$entangle", "entangle"].includes(property)) {
          return generateEntangleFunction(component, cleanup2);
        }
        return component.$wire[property];
      },
      set(target, property, value) {
        if (!component)
          component = closestComponent(el);
        component.$wire[property] = value;
        return true;
      }
    });
  });
  wireProperty("__instance", (component) => component);
  wireProperty("$get", (component) => (property, reactive3 = true) => dataGet(reactive3 ? component.reactive : component.ephemeral, property));
  wireProperty("$el", (component) => {
    return component.el;
  });
  wireProperty("$id", (component) => {
    return component.id;
  });
  wireProperty("$set", (component) => async (property, value, live = true) => {
    dataSet(component.reactive, property, value);
    if (live) {
      component.queueUpdate(property, value);
      return await requestCommit(component);
    }
    return Promise.resolve();
  });
  wireProperty("$call", (component) => async (method, ...params) => {
    return await component.$wire[method](...params);
  });
  wireProperty("$entangle", (component) => (name, live = false) => {
    return generateEntangleFunction(component)(name, live);
  });
  wireProperty("$toggle", (component) => (name, live = true) => {
    return component.$wire.set(name, !component.$wire.get(name), live);
  });
  wireProperty("$watch", (component) => (path, callback) => {
    let getter = () => {
      return dataGet(component.reactive, path);
    };
    let unwatch = module_default.watch(getter, callback);
    component.addCleanup(unwatch);
  });
  wireProperty("$refresh", (component) => component.$wire.$commit);
  wireProperty("$commit", (component) => async () => await requestCommit(component));
  wireProperty("$on", (component) => (...params) => listen2(component, ...params));
  wireProperty("$hook", (component) => (name, callback) => {
    let unhook = on2(name, ({ component: hookComponent, ...params }) => {
      if (hookComponent === void 0)
        return callback(params);
      if (hookComponent.id === component.id)
        return callback({ component: hookComponent, ...params });
    });
    component.addCleanup(unhook);
    return unhook;
  });
  wireProperty("$dispatch", (component) => (...params) => dispatch3(component, ...params));
  wireProperty("$dispatchSelf", (component) => (...params) => dispatchSelf(component, ...params));
  wireProperty("$dispatchTo", () => (...params) => dispatchTo(...params));
  wireProperty("$upload", (component) => (...params) => upload(component, ...params));
  wireProperty("$uploadMultiple", (component) => (...params) => uploadMultiple(component, ...params));
  wireProperty("$removeUpload", (component) => (...params) => removeUpload(component, ...params));
  wireProperty("$cancelUpload", (component) => (...params) => cancelUpload(component, ...params));
  var parentMemo = /* @__PURE__ */ new WeakMap();
  wireProperty("$parent", (component) => {
    if (parentMemo.has(component))
      return parentMemo.get(component).$wire;
    let parent = component.parent;
    parentMemo.set(component, parent);
    return parent.$wire;
  });
  var overriddenMethods = /* @__PURE__ */ new WeakMap();
  function overrideMethod(component, method, callback) {
    if (!overriddenMethods.has(component)) {
      overriddenMethods.set(component, {});
    }
    let obj = overriddenMethods.get(component);
    obj[method] = callback;
    overriddenMethods.set(component, obj);
  }
  wireFallback((component) => (property) => async (...params) => {
    if (params.length === 1 && params[0] instanceof Event) {
      params = [];
    }
    if (overriddenMethods.has(component)) {
      let overrides = overriddenMethods.get(component);
      if (typeof overrides[property] === "function") {
        return overrides[property](params);
      }
    }
    return await requestCall(component, property, params);
  });

  // js/component.js
  var Component = class {
    constructor(el) {
      if (el.__livewire)
        throw "Component already initialized";
      el.__livewire = this;
      this.el = el;
      this.id = el.getAttribute("wire:id");
      this.__livewireId = this.id;
      this.snapshotEncoded = el.getAttribute("wire:snapshot");
      this.snapshot = JSON.parse(this.snapshotEncoded);
      if (!this.snapshot) {
        throw `Snapshot missing on Livewire component with id: ` + this.id;
      }
      this.name = this.snapshot.memo.name;
      this.effects = JSON.parse(el.getAttribute("wire:effects"));
      this.originalEffects = deepClone(this.effects);
      this.canonical = extractData(deepClone(this.snapshot.data));
      this.ephemeral = extractData(deepClone(this.snapshot.data));
      this.reactive = Alpine.reactive(this.ephemeral);
      this.queuedUpdates = {};
      this.$wire = generateWireObject(this, this.reactive);
      this.cleanups = [];
      this.processEffects(this.effects);
    }
    mergeNewSnapshot(snapshotEncoded, effects, updates = {}) {
      let snapshot = JSON.parse(snapshotEncoded);
      let oldCanonical = deepClone(this.canonical);
      let updatedOldCanonical = this.applyUpdates(oldCanonical, updates);
      let newCanonical = extractData(deepClone(snapshot.data));
      let dirty = diff(updatedOldCanonical, newCanonical);
      this.snapshotEncoded = snapshotEncoded;
      this.snapshot = snapshot;
      this.effects = effects;
      this.canonical = extractData(deepClone(snapshot.data));
      let newData = extractData(deepClone(snapshot.data));
      Object.entries(dirty).forEach(([key, value]) => {
        let rootKey = key.split(".")[0];
        this.reactive[rootKey] = newData[rootKey];
      });
      return dirty;
    }
    queueUpdate(propertyName, value) {
      this.queuedUpdates[propertyName] = value;
    }
    mergeQueuedUpdates(diff2) {
      Object.entries(this.queuedUpdates).forEach(([updateKey, updateValue]) => {
        Object.entries(diff2).forEach(([diffKey, diffValue]) => {
          if (diffKey.startsWith(updateValue)) {
            delete diff2[diffKey];
          }
        });
        diff2[updateKey] = updateValue;
      });
      this.queuedUpdates = [];
      return diff2;
    }
    applyUpdates(object, updates) {
      for (let key in updates) {
        dataSet(object, key, updates[key]);
      }
      return object;
    }
    replayUpdate(snapshot, html) {
      let effects = { ...this.effects, html };
      this.mergeNewSnapshot(JSON.stringify(snapshot), effects);
      this.processEffects({ html });
    }
    processEffects(effects) {
      trigger2("effects", this, effects);
      trigger2("effect", {
        component: this,
        effects,
        cleanup: (i) => this.addCleanup(i)
      });
    }
    get children() {
      let meta = this.snapshot.memo;
      let childIds = Object.values(meta.children).map((i) => i[1]);
      return childIds.map((id) => findComponent(id));
    }
    get parent() {
      return closestComponent(this.el.parentElement);
    }
    inscribeSnapshotAndEffectsOnElement() {
      let el = this.el;
      el.setAttribute("wire:snapshot", this.snapshotEncoded);
      let effects = this.originalEffects.listeners ? { listeners: this.originalEffects.listeners } : {};
      if (this.originalEffects.url) {
        effects.url = this.originalEffects.url;
      }
      if (this.originalEffects.scripts) {
        effects.scripts = this.originalEffects.scripts;
      }
      el.setAttribute("wire:effects", JSON.stringify(effects));
    }
    addCleanup(cleanup2) {
      this.cleanups.push(cleanup2);
    }
    cleanup() {
      delete this.el.__livewire;
      while (this.cleanups.length > 0) {
        this.cleanups.pop()();
      }
    }
  };

  // js/store.js
  var components = {};
  function initComponent(el) {
    let component = new Component(el);
    if (components[component.id])
      throw "Component already registered";
    let cleanup2 = (i) => component.addCleanup(i);
    trigger2("component.init", { component, cleanup: cleanup2 });
    components[component.id] = component;
    return component;
  }
  function destroyComponent(id) {
    let component = components[id];
    if (!component)
      return;
    component.cleanup();
    delete components[id];
  }
  function findComponent(id) {
    let component = components[id];
    if (!component)
      throw "Component not found: " + id;
    return component;
  }
  function closestComponent(el, strict = true) {
    let closestRoot2 = Alpine.findClosest(el, (i) => i.__livewire);
    if (!closestRoot2) {
      if (strict)
        throw "Could not find Livewire component in DOM tree";
      return;
    }
    return closestRoot2.__livewire;
  }
  function componentsByName(name) {
    return Object.values(components).filter((component) => {
      return name == component.name;
    });
  }
  function getByName(name) {
    return componentsByName(name).map((i) => i.$wire);
  }
  function find(id) {
    let component = components[id];
    return component && component.$wire;
  }
  function first() {
    return Object.values(components)[0].$wire;
  }
  function all() {
    return Object.values(components);
  }

  // js/events.js
  function dispatch3(component, name, params) {
    dispatchEvent(component.el, name, params);
  }
  function dispatchGlobal(name, params) {
    dispatchEvent(window, name, params);
  }
  function dispatchSelf(component, name, params) {
    dispatchEvent(component.el, name, params, false);
  }
  function dispatchTo(componentName, name, params) {
    let targets = componentsByName(componentName);
    targets.forEach((target) => {
      dispatchEvent(target.el, name, params, false);
    });
  }
  function listen2(component, name, callback) {
    component.el.addEventListener(name, (e) => {
      callback(e.detail);
    });
  }
  function on3(eventName, callback) {
    let handler4 = (e) => {
      if (!e.__livewire)
        return;
      callback(e.detail);
    };
    window.addEventListener(eventName, handler4);
    return () => {
      window.removeEventListener(eventName, handler4);
    };
  }
  function dispatchEvent(target, name, params, bubbles = true) {
    let e = new CustomEvent(name, { bubbles, detail: params });
    e.__livewire = { name, params, receivedBy: [] };
    target.dispatchEvent(e);
  }

  // js/directives.js
  var customDirectiveNames = /* @__PURE__ */ new Set();
  function matchesForLivewireDirective(attributeName) {
    return attributeName.match(new RegExp("wire:"));
  }
  function extractDirective(el, name) {
    let [value, ...modifiers] = name.replace(new RegExp("wire:"), "").split(".");
    return new Directive(value, modifiers, name, el);
  }
  function directive2(name, callback) {
    if (customDirectiveNames.has(name))
      return;
    customDirectiveNames.add(name);
    on2("directive.init", ({ el, component, directive: directive3, cleanup: cleanup2 }) => {
      if (directive3.value === name) {
        callback({
          el,
          directive: directive3,
          component,
          $wire: component.$wire,
          cleanup: cleanup2
        });
      }
    });
  }
  function globalDirective(name, callback) {
    if (customDirectiveNames.has(name))
      return;
    customDirectiveNames.add(name);
    on2("directive.global.init", ({ el, directive: directive3, cleanup: cleanup2 }) => {
      if (directive3.value === name) {
        callback({ el, directive: directive3, cleanup: cleanup2 });
      }
    });
  }
  function getDirectives(el) {
    return new DirectiveManager(el);
  }
  function customDirectiveHasBeenRegistered(name) {
    return customDirectiveNames.has(name);
  }
  var DirectiveManager = class {
    constructor(el) {
      this.el = el;
      this.directives = this.extractTypeModifiersAndValue();
    }
    all() {
      return this.directives;
    }
    has(value) {
      return this.directives.map((directive3) => directive3.value).includes(value);
    }
    missing(value) {
      return !this.has(value);
    }
    get(value) {
      return this.directives.find((directive3) => directive3.value === value);
    }
    extractTypeModifiersAndValue() {
      return Array.from(this.el.getAttributeNames().filter((name) => matchesForLivewireDirective(name)).map((name) => extractDirective(this.el, name)));
    }
  };
  var Directive = class {
    constructor(value, modifiers, rawName, el) {
      this.rawName = this.raw = rawName;
      this.el = el;
      this.eventContext;
      this.value = value;
      this.modifiers = modifiers;
      this.expression = this.el.getAttribute(this.rawName);
    }
    get method() {
      const { method } = this.parseOutMethodAndParams(this.expression);
      return method;
    }
    get params() {
      const { params } = this.parseOutMethodAndParams(this.expression);
      return params;
    }
    parseOutMethodAndParams(rawMethod) {
      let method = rawMethod;
      let params = [];
      const methodAndParamString = method.match(/(.*?)\((.*)\)/s);
      if (methodAndParamString) {
        method = methodAndParamString[1];
        let func = new Function("$event", `return (function () {
                for (var l=arguments.length, p=new Array(l), k=0; k<l; k++) {
                    p[k] = arguments[k];
                }
                return [].concat(p);
            })(${methodAndParamString[2]})`);
        params = func(this.eventContext);
      }
      return { method, params };
    }
  };

  // ../alpine/packages/collapse/dist/module.esm.js
  function src_default2(Alpine3) {
    Alpine3.directive("collapse", collapse);
    collapse.inline = (el, { modifiers }) => {
      if (!modifiers.includes("min"))
        return;
      el._x_doShow = () => {
      };
      el._x_doHide = () => {
      };
    };
    function collapse(el, { modifiers }) {
      let duration = modifierValue2(modifiers, "duration", 250) / 1e3;
      let floor2 = modifierValue2(modifiers, "min", 0);
      let fullyHide = !modifiers.includes("min");
      if (!el._x_isShown)
        el.style.height = `${floor2}px`;
      if (!el._x_isShown && fullyHide)
        el.hidden = true;
      if (!el._x_isShown)
        el.style.overflow = "hidden";
      let setFunction = (el2, styles) => {
        let revertFunction = Alpine3.setStyles(el2, styles);
        return styles.height ? () => {
        } : revertFunction;
      };
      let transitionStyles = {
        transitionProperty: "height",
        transitionDuration: `${duration}s`,
        transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)"
      };
      el._x_transition = {
        in(before = () => {
        }, after = () => {
        }) {
          if (fullyHide)
            el.hidden = false;
          if (fullyHide)
            el.style.display = null;
          let current = el.getBoundingClientRect().height;
          el.style.height = "auto";
          let full = el.getBoundingClientRect().height;
          if (current === full) {
            current = floor2;
          }
          Alpine3.transition(el, Alpine3.setStyles, {
            during: transitionStyles,
            start: { height: current + "px" },
            end: { height: full + "px" }
          }, () => el._x_isShown = true, () => {
            if (Math.abs(el.getBoundingClientRect().height - full) < 1) {
              el.style.overflow = null;
            }
          });
        },
        out(before = () => {
        }, after = () => {
        }) {
          let full = el.getBoundingClientRect().height;
          Alpine3.transition(el, setFunction, {
            during: transitionStyles,
            start: { height: full + "px" },
            end: { height: floor2 + "px" }
          }, () => el.style.overflow = "hidden", () => {
            el._x_isShown = false;
            if (el.style.height == `${floor2}px` && fullyHide) {
              el.style.display = "none";
              el.hidden = true;
            }
          });
        }
      };
    }
  }
  function modifierValue2(modifiers, key, fallback2) {
    if (modifiers.indexOf(key) === -1)
      return fallback2;
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue)
      return fallback2;
    if (key === "duration") {
      let match = rawValue.match(/([0-9]+)ms/);
      if (match)
        return match[1];
    }
    if (key === "min") {
      let match = rawValue.match(/([0-9]+)px/);
      if (match)
        return match[1];
    }
    return rawValue;
  }
  var module_default2 = src_default2;

  // ../alpine/packages/focus/dist/module.esm.js
  var candidateSelectors = ["input", "select", "textarea", "a[href]", "button", "[tabindex]:not(slot)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"];
  var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
  var NoElement = typeof Element === "undefined";
  var matches = NoElement ? function() {
  } : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
    return element.getRootNode();
  } : function(element) {
    return element.ownerDocument;
  };
  var getCandidates = function getCandidates2(el, includeContainer, filter) {
    var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
    if (includeContainer && matches.call(el, candidateSelector)) {
      candidates.unshift(el);
    }
    candidates = candidates.filter(filter);
    return candidates;
  };
  var getCandidatesIteratively = function getCandidatesIteratively2(elements, includeContainer, options) {
    var candidates = [];
    var elementsToCheck = Array.from(elements);
    while (elementsToCheck.length) {
      var element = elementsToCheck.shift();
      if (element.tagName === "SLOT") {
        var assigned = element.assignedElements();
        var content = assigned.length ? assigned : element.children;
        var nestedCandidates = getCandidatesIteratively2(content, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, nestedCandidates);
        } else {
          candidates.push({
            scope: element,
            candidates: nestedCandidates
          });
        }
      } else {
        var validCandidate = matches.call(element, candidateSelector);
        if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
          candidates.push(element);
        }
        var shadowRoot = element.shadowRoot || typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
        var validShadowRoot = !options.shadowRootFilter || options.shadowRootFilter(element);
        if (shadowRoot && validShadowRoot) {
          var _nestedCandidates = getCandidatesIteratively2(shadowRoot === true ? element.children : shadowRoot.children, true, options);
          if (options.flatten) {
            candidates.push.apply(candidates, _nestedCandidates);
          } else {
            candidates.push({
              scope: element,
              candidates: _nestedCandidates
            });
          }
        } else {
          elementsToCheck.unshift.apply(elementsToCheck, element.children);
        }
      }
    }
    return candidates;
  };
  var getTabindex = function getTabindex2(node, isScope) {
    if (node.tabIndex < 0) {
      if ((isScope || /^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || node.isContentEditable) && isNaN(parseInt(node.getAttribute("tabindex"), 10))) {
        return 0;
      }
    }
    return node.tabIndex;
  };
  var sortOrderedTabbables = function sortOrderedTabbables2(a, b) {
    return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
  };
  var isInput = function isInput2(node) {
    return node.tagName === "INPUT";
  };
  var isHiddenInput = function isHiddenInput2(node) {
    return isInput(node) && node.type === "hidden";
  };
  var isDetailsWithSummary = function isDetailsWithSummary2(node) {
    var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
      return child.tagName === "SUMMARY";
    });
    return r;
  };
  var getCheckedRadio = function getCheckedRadio2(nodes, form) {
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].checked && nodes[i].form === form) {
        return nodes[i];
      }
    }
  };
  var isTabbableRadio = function isTabbableRadio2(node) {
    if (!node.name) {
      return true;
    }
    var radioScope = node.form || getRootNode(node);
    var queryRadios = function queryRadios2(name) {
      return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
    };
    var radioSet;
    if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
      radioSet = queryRadios(window.CSS.escape(node.name));
    } else {
      try {
        radioSet = queryRadios(node.name);
      } catch (err) {
        console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
        return false;
      }
    }
    var checked = getCheckedRadio(radioSet, node.form);
    return !checked || checked === node;
  };
  var isRadio2 = function isRadio22(node) {
    return isInput(node) && node.type === "radio";
  };
  var isNonTabbableRadio = function isNonTabbableRadio2(node) {
    return isRadio2(node) && !isTabbableRadio(node);
  };
  var isZeroArea = function isZeroArea2(node) {
    var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
    return width === 0 && height === 0;
  };
  var isHidden = function isHidden2(node, _ref) {
    var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
    if (getComputedStyle(node).visibility === "hidden") {
      return true;
    }
    var isDirectSummary = matches.call(node, "details>summary:first-of-type");
    var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
    if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
      return true;
    }
    var nodeRootHost = getRootNode(node).host;
    var nodeIsAttached = (nodeRootHost === null || nodeRootHost === void 0 ? void 0 : nodeRootHost.ownerDocument.contains(nodeRootHost)) || node.ownerDocument.contains(node);
    if (!displayCheck || displayCheck === "full") {
      if (typeof getShadowRoot === "function") {
        var originalNode = node;
        while (node) {
          var parentElement = node.parentElement;
          var rootNode = getRootNode(node);
          if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
            return isZeroArea(node);
          } else if (node.assignedSlot) {
            node = node.assignedSlot;
          } else if (!parentElement && rootNode !== node.ownerDocument) {
            node = rootNode.host;
          } else {
            node = parentElement;
          }
        }
        node = originalNode;
      }
      if (nodeIsAttached) {
        return !node.getClientRects().length;
      }
    } else if (displayCheck === "non-zero-area") {
      return isZeroArea(node);
    }
    return false;
  };
  var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
      var parentNode = node.parentElement;
      while (parentNode) {
        if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
          for (var i = 0; i < parentNode.children.length; i++) {
            var child = parentNode.children.item(i);
            if (child.tagName === "LEGEND") {
              return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
            }
          }
          return true;
        }
        parentNode = parentNode.parentElement;
      }
    }
    return false;
  };
  var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
    if (node.disabled || isHiddenInput(node) || isHidden(node, options) || isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
      return false;
    }
    return true;
  };
  var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
    if (isNonTabbableRadio(node) || getTabindex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
      return false;
    }
    return true;
  };
  var isValidShadowRootTabbable = function isValidShadowRootTabbable2(shadowHostNode) {
    var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
    if (isNaN(tabIndex) || tabIndex >= 0) {
      return true;
    }
    return false;
  };
  var sortByOrder = function sortByOrder2(candidates) {
    var regularTabbables = [];
    var orderedTabbables = [];
    candidates.forEach(function(item, i) {
      var isScope = !!item.scope;
      var element = isScope ? item.scope : item;
      var candidateTabindex = getTabindex(element, isScope);
      var elements = isScope ? sortByOrder2(item.candidates) : element;
      if (candidateTabindex === 0) {
        isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
      } else {
        orderedTabbables.push({
          documentOrder: i,
          tabIndex: candidateTabindex,
          item,
          isScope,
          content: elements
        });
      }
    });
    return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
      sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
      return acc;
    }, []).concat(regularTabbables);
  };
  var tabbable = function tabbable2(el, options) {
    options = options || {};
    var candidates;
    if (options.getShadowRoot) {
      candidates = getCandidatesIteratively([el], options.includeContainer, {
        filter: isNodeMatchingSelectorTabbable.bind(null, options),
        flatten: false,
        getShadowRoot: options.getShadowRoot,
        shadowRootFilter: isValidShadowRootTabbable
      });
    } else {
      candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
    }
    return sortByOrder(candidates);
  };
  var focusable = function focusable2(el, options) {
    options = options || {};
    var candidates;
    if (options.getShadowRoot) {
      candidates = getCandidatesIteratively([el], options.includeContainer, {
        filter: isNodeMatchingSelectorFocusable.bind(null, options),
        flatten: true,
        getShadowRoot: options.getShadowRoot
      });
    } else {
      candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
    }
    return candidates;
  };
  var isTabbable = function isTabbable2(node, options) {
    options = options || {};
    if (!node) {
      throw new Error("No node provided");
    }
    if (matches.call(node, candidateSelector) === false) {
      return false;
    }
    return isNodeMatchingSelectorTabbable(options, node);
  };
  var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
  var isFocusable = function isFocusable2(node, options) {
    options = options || {};
    if (!node) {
      throw new Error("No node provided");
    }
    if (matches.call(node, focusableCandidateSelector) === false) {
      return false;
    }
    return isNodeMatchingSelectorFocusable(options, node);
  };
  function ownKeys2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var activeFocusTraps = function() {
    var trapQueue = [];
    return {
      activateTrap: function activateTrap(trap) {
        if (trapQueue.length > 0) {
          var activeTrap = trapQueue[trapQueue.length - 1];
          if (activeTrap !== trap) {
            activeTrap.pause();
          }
        }
        var trapIndex = trapQueue.indexOf(trap);
        if (trapIndex === -1) {
          trapQueue.push(trap);
        } else {
          trapQueue.splice(trapIndex, 1);
          trapQueue.push(trap);
        }
      },
      deactivateTrap: function deactivateTrap(trap) {
        var trapIndex = trapQueue.indexOf(trap);
        if (trapIndex !== -1) {
          trapQueue.splice(trapIndex, 1);
        }
        if (trapQueue.length > 0) {
          trapQueue[trapQueue.length - 1].unpause();
        }
      }
    };
  }();
  var isSelectableInput = function isSelectableInput2(node) {
    return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select === "function";
  };
  var isEscapeEvent = function isEscapeEvent2(e) {
    return e.key === "Escape" || e.key === "Esc" || e.keyCode === 27;
  };
  var isTabEvent = function isTabEvent2(e) {
    return e.key === "Tab" || e.keyCode === 9;
  };
  var delay = function delay2(fn) {
    return setTimeout(fn, 0);
  };
  var findIndex = function findIndex2(arr, fn) {
    var idx = -1;
    arr.every(function(value, i) {
      if (fn(value)) {
        idx = i;
        return false;
      }
      return true;
    });
    return idx;
  };
  var valueOrHandler = function valueOrHandler2(value) {
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }
    return typeof value === "function" ? value.apply(void 0, params) : value;
  };
  var getActualTarget = function getActualTarget2(event) {
    return event.target.shadowRoot && typeof event.composedPath === "function" ? event.composedPath()[0] : event.target;
  };
  var createFocusTrap = function createFocusTrap2(elements, userOptions) {
    var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
    var config = _objectSpread2({
      returnFocusOnDeactivate: true,
      escapeDeactivates: true,
      delayInitialFocus: true
    }, userOptions);
    var state = {
      containers: [],
      containerGroups: [],
      tabbableGroups: [],
      nodeFocusedBeforeActivation: null,
      mostRecentlyFocusedNode: null,
      active: false,
      paused: false,
      delayInitialFocusTimer: void 0
    };
    var trap;
    var getOption = function getOption2(configOverrideOptions, optionName, configOptionName) {
      return configOverrideOptions && configOverrideOptions[optionName] !== void 0 ? configOverrideOptions[optionName] : config[configOptionName || optionName];
    };
    var findContainerIndex = function findContainerIndex2(element) {
      return state.containerGroups.findIndex(function(_ref) {
        var container = _ref.container, tabbableNodes = _ref.tabbableNodes;
        return container.contains(element) || tabbableNodes.find(function(node) {
          return node === element;
        });
      });
    };
    var getNodeForOption = function getNodeForOption2(optionName) {
      var optionValue = config[optionName];
      if (typeof optionValue === "function") {
        for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          params[_key2 - 1] = arguments[_key2];
        }
        optionValue = optionValue.apply(void 0, params);
      }
      if (optionValue === true) {
        optionValue = void 0;
      }
      if (!optionValue) {
        if (optionValue === void 0 || optionValue === false) {
          return optionValue;
        }
        throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
      }
      var node = optionValue;
      if (typeof optionValue === "string") {
        node = doc.querySelector(optionValue);
        if (!node) {
          throw new Error("`".concat(optionName, "` as selector refers to no known node"));
        }
      }
      return node;
    };
    var getInitialFocusNode = function getInitialFocusNode2() {
      var node = getNodeForOption("initialFocus");
      if (node === false) {
        return false;
      }
      if (node === void 0) {
        if (findContainerIndex(doc.activeElement) >= 0) {
          node = doc.activeElement;
        } else {
          var firstTabbableGroup = state.tabbableGroups[0];
          var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
          node = firstTabbableNode || getNodeForOption("fallbackFocus");
        }
      }
      if (!node) {
        throw new Error("Your focus-trap needs to have at least one focusable element");
      }
      return node;
    };
    var updateTabbableNodes = function updateTabbableNodes2() {
      state.containerGroups = state.containers.map(function(container) {
        var tabbableNodes = tabbable(container, config.tabbableOptions);
        var focusableNodes = focusable(container, config.tabbableOptions);
        return {
          container,
          tabbableNodes,
          focusableNodes,
          firstTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[0] : null,
          lastTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : null,
          nextTabbableNode: function nextTabbableNode(node) {
            var forward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
            var nodeIdx = focusableNodes.findIndex(function(n) {
              return n === node;
            });
            if (nodeIdx < 0) {
              return void 0;
            }
            if (forward) {
              return focusableNodes.slice(nodeIdx + 1).find(function(n) {
                return isTabbable(n, config.tabbableOptions);
              });
            }
            return focusableNodes.slice(0, nodeIdx).reverse().find(function(n) {
              return isTabbable(n, config.tabbableOptions);
            });
          }
        };
      });
      state.tabbableGroups = state.containerGroups.filter(function(group) {
        return group.tabbableNodes.length > 0;
      });
      if (state.tabbableGroups.length <= 0 && !getNodeForOption("fallbackFocus")) {
        throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
      }
    };
    var tryFocus = function tryFocus2(node) {
      if (node === false) {
        return;
      }
      if (node === doc.activeElement) {
        return;
      }
      if (!node || !node.focus) {
        tryFocus2(getInitialFocusNode());
        return;
      }
      node.focus({
        preventScroll: !!config.preventScroll
      });
      state.mostRecentlyFocusedNode = node;
      if (isSelectableInput(node)) {
        node.select();
      }
    };
    var getReturnFocusNode = function getReturnFocusNode2(previousActiveElement) {
      var node = getNodeForOption("setReturnFocus", previousActiveElement);
      return node ? node : node === false ? false : previousActiveElement;
    };
    var checkPointerDown = function checkPointerDown2(e) {
      var target = getActualTarget(e);
      if (findContainerIndex(target) >= 0) {
        return;
      }
      if (valueOrHandler(config.clickOutsideDeactivates, e)) {
        trap.deactivate({
          returnFocus: config.returnFocusOnDeactivate && !isFocusable(target, config.tabbableOptions)
        });
        return;
      }
      if (valueOrHandler(config.allowOutsideClick, e)) {
        return;
      }
      e.preventDefault();
    };
    var checkFocusIn = function checkFocusIn2(e) {
      var target = getActualTarget(e);
      var targetContained = findContainerIndex(target) >= 0;
      if (targetContained || target instanceof Document) {
        if (targetContained) {
          state.mostRecentlyFocusedNode = target;
        }
      } else {
        e.stopImmediatePropagation();
        tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
      }
    };
    var checkTab = function checkTab2(e) {
      var target = getActualTarget(e);
      updateTabbableNodes();
      var destinationNode = null;
      if (state.tabbableGroups.length > 0) {
        var containerIndex = findContainerIndex(target);
        var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : void 0;
        if (containerIndex < 0) {
          if (e.shiftKey) {
            destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
          } else {
            destinationNode = state.tabbableGroups[0].firstTabbableNode;
          }
        } else if (e.shiftKey) {
          var startOfGroupIndex = findIndex(state.tabbableGroups, function(_ref2) {
            var firstTabbableNode = _ref2.firstTabbableNode;
            return target === firstTabbableNode;
          });
          if (startOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) {
            startOfGroupIndex = containerIndex;
          }
          if (startOfGroupIndex >= 0) {
            var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
            var destinationGroup = state.tabbableGroups[destinationGroupIndex];
            destinationNode = destinationGroup.lastTabbableNode;
          }
        } else {
          var lastOfGroupIndex = findIndex(state.tabbableGroups, function(_ref3) {
            var lastTabbableNode = _ref3.lastTabbableNode;
            return target === lastTabbableNode;
          });
          if (lastOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) {
            lastOfGroupIndex = containerIndex;
          }
          if (lastOfGroupIndex >= 0) {
            var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
            var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
            destinationNode = _destinationGroup.firstTabbableNode;
          }
        }
      } else {
        destinationNode = getNodeForOption("fallbackFocus");
      }
      if (destinationNode) {
        e.preventDefault();
        tryFocus(destinationNode);
      }
    };
    var checkKey = function checkKey2(e) {
      if (isEscapeEvent(e) && valueOrHandler(config.escapeDeactivates, e) !== false) {
        e.preventDefault();
        trap.deactivate();
        return;
      }
      if (isTabEvent(e)) {
        checkTab(e);
        return;
      }
    };
    var checkClick = function checkClick2(e) {
      var target = getActualTarget(e);
      if (findContainerIndex(target) >= 0) {
        return;
      }
      if (valueOrHandler(config.clickOutsideDeactivates, e)) {
        return;
      }
      if (valueOrHandler(config.allowOutsideClick, e)) {
        return;
      }
      e.preventDefault();
      e.stopImmediatePropagation();
    };
    var addListeners = function addListeners2() {
      if (!state.active) {
        return;
      }
      activeFocusTraps.activateTrap(trap);
      state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function() {
        tryFocus(getInitialFocusNode());
      }) : tryFocus(getInitialFocusNode());
      doc.addEventListener("focusin", checkFocusIn, true);
      doc.addEventListener("mousedown", checkPointerDown, {
        capture: true,
        passive: false
      });
      doc.addEventListener("touchstart", checkPointerDown, {
        capture: true,
        passive: false
      });
      doc.addEventListener("click", checkClick, {
        capture: true,
        passive: false
      });
      doc.addEventListener("keydown", checkKey, {
        capture: true,
        passive: false
      });
      return trap;
    };
    var removeListeners = function removeListeners2() {
      if (!state.active) {
        return;
      }
      doc.removeEventListener("focusin", checkFocusIn, true);
      doc.removeEventListener("mousedown", checkPointerDown, true);
      doc.removeEventListener("touchstart", checkPointerDown, true);
      doc.removeEventListener("click", checkClick, true);
      doc.removeEventListener("keydown", checkKey, true);
      return trap;
    };
    trap = {
      get active() {
        return state.active;
      },
      get paused() {
        return state.paused;
      },
      activate: function activate(activateOptions) {
        if (state.active) {
          return this;
        }
        var onActivate = getOption(activateOptions, "onActivate");
        var onPostActivate = getOption(activateOptions, "onPostActivate");
        var checkCanFocusTrap = getOption(activateOptions, "checkCanFocusTrap");
        if (!checkCanFocusTrap) {
          updateTabbableNodes();
        }
        state.active = true;
        state.paused = false;
        state.nodeFocusedBeforeActivation = doc.activeElement;
        if (onActivate) {
          onActivate();
        }
        var finishActivation = function finishActivation2() {
          if (checkCanFocusTrap) {
            updateTabbableNodes();
          }
          addListeners();
          if (onPostActivate) {
            onPostActivate();
          }
        };
        if (checkCanFocusTrap) {
          checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
          return this;
        }
        finishActivation();
        return this;
      },
      deactivate: function deactivate(deactivateOptions) {
        if (!state.active) {
          return this;
        }
        var options = _objectSpread2({
          onDeactivate: config.onDeactivate,
          onPostDeactivate: config.onPostDeactivate,
          checkCanReturnFocus: config.checkCanReturnFocus
        }, deactivateOptions);
        clearTimeout(state.delayInitialFocusTimer);
        state.delayInitialFocusTimer = void 0;
        removeListeners();
        state.active = false;
        state.paused = false;
        activeFocusTraps.deactivateTrap(trap);
        var onDeactivate = getOption(options, "onDeactivate");
        var onPostDeactivate = getOption(options, "onPostDeactivate");
        var checkCanReturnFocus = getOption(options, "checkCanReturnFocus");
        var returnFocus = getOption(options, "returnFocus", "returnFocusOnDeactivate");
        if (onDeactivate) {
          onDeactivate();
        }
        var finishDeactivation = function finishDeactivation2() {
          delay(function() {
            if (returnFocus) {
              tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
            }
            if (onPostDeactivate) {
              onPostDeactivate();
            }
          });
        };
        if (returnFocus && checkCanReturnFocus) {
          checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
          return this;
        }
        finishDeactivation();
        return this;
      },
      pause: function pause() {
        if (state.paused || !state.active) {
          return this;
        }
        state.paused = true;
        removeListeners();
        return this;
      },
      unpause: function unpause() {
        if (!state.paused || !state.active) {
          return this;
        }
        state.paused = false;
        updateTabbableNodes();
        addListeners();
        return this;
      },
      updateContainerElements: function updateContainerElements(containerElements) {
        var elementsAsArray = [].concat(containerElements).filter(Boolean);
        state.containers = elementsAsArray.map(function(element) {
          return typeof element === "string" ? doc.querySelector(element) : element;
        });
        if (state.active) {
          updateTabbableNodes();
        }
        return this;
      }
    };
    trap.updateContainerElements(elements);
    return trap;
  };
  function src_default3(Alpine3) {
    let lastFocused;
    let currentFocused;
    window.addEventListener("focusin", () => {
      lastFocused = currentFocused;
      currentFocused = document.activeElement;
    });
    Alpine3.magic("focus", (el) => {
      let within = el;
      return {
        __noscroll: false,
        __wrapAround: false,
        within(el2) {
          within = el2;
          return this;
        },
        withoutScrolling() {
          this.__noscroll = true;
          return this;
        },
        noscroll() {
          this.__noscroll = true;
          return this;
        },
        withWrapAround() {
          this.__wrapAround = true;
          return this;
        },
        wrap() {
          return this.withWrapAround();
        },
        focusable(el2) {
          return isFocusable(el2);
        },
        previouslyFocused() {
          return lastFocused;
        },
        lastFocused() {
          return lastFocused;
        },
        focused() {
          return currentFocused;
        },
        focusables() {
          if (Array.isArray(within))
            return within;
          return focusable(within, { displayCheck: "none" });
        },
        all() {
          return this.focusables();
        },
        isFirst(el2) {
          let els2 = this.all();
          return els2[0] && els2[0].isSameNode(el2);
        },
        isLast(el2) {
          let els2 = this.all();
          return els2.length && els2.slice(-1)[0].isSameNode(el2);
        },
        getFirst() {
          return this.all()[0];
        },
        getLast() {
          return this.all().slice(-1)[0];
        },
        getNext() {
          let list = this.all();
          let current = document.activeElement;
          if (list.indexOf(current) === -1)
            return;
          if (this.__wrapAround && list.indexOf(current) === list.length - 1) {
            return list[0];
          }
          return list[list.indexOf(current) + 1];
        },
        getPrevious() {
          let list = this.all();
          let current = document.activeElement;
          if (list.indexOf(current) === -1)
            return;
          if (this.__wrapAround && list.indexOf(current) === 0) {
            return list.slice(-1)[0];
          }
          return list[list.indexOf(current) - 1];
        },
        first() {
          this.focus(this.getFirst());
        },
        last() {
          this.focus(this.getLast());
        },
        next() {
          this.focus(this.getNext());
        },
        previous() {
          this.focus(this.getPrevious());
        },
        prev() {
          return this.previous();
        },
        focus(el2) {
          if (!el2)
            return;
          setTimeout(() => {
            if (!el2.hasAttribute("tabindex"))
              el2.setAttribute("tabindex", "0");
            el2.focus({ preventScroll: this.__noscroll });
          });
        }
      };
    });
    Alpine3.directive("trap", Alpine3.skipDuringClone((el, { expression, modifiers }, { effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
      let evaluator = evaluateLater2(expression);
      let oldValue = false;
      let options = {
        escapeDeactivates: false,
        allowOutsideClick: true,
        fallbackFocus: () => el
      };
      if (modifiers.includes("noautofocus")) {
        options.initialFocus = false;
      } else {
        let autofocusEl = el.querySelector("[autofocus]");
        if (autofocusEl)
          options.initialFocus = autofocusEl;
      }
      let trap = createFocusTrap(el, options);
      let undoInert = () => {
      };
      let undoDisableScrolling = () => {
      };
      const releaseFocus = () => {
        undoInert();
        undoInert = () => {
        };
        undoDisableScrolling();
        undoDisableScrolling = () => {
        };
        trap.deactivate({
          returnFocus: !modifiers.includes("noreturn")
        });
      };
      effect3(() => evaluator((value) => {
        if (oldValue === value)
          return;
        if (value && !oldValue) {
          if (modifiers.includes("noscroll"))
            undoDisableScrolling = disableScrolling();
          if (modifiers.includes("inert"))
            undoInert = setInert(el);
          setTimeout(() => {
            trap.activate();
          }, 15);
        }
        if (!value && oldValue) {
          releaseFocus();
        }
        oldValue = !!value;
      }));
      cleanup2(releaseFocus);
    }, (el, { expression, modifiers }, { evaluate: evaluate3 }) => {
      if (modifiers.includes("inert") && evaluate3(expression))
        setInert(el);
    }));
  }
  function setInert(el) {
    let undos = [];
    crawlSiblingsUp(el, (sibling) => {
      let cache = sibling.hasAttribute("aria-hidden");
      sibling.setAttribute("aria-hidden", "true");
      undos.push(() => cache || sibling.removeAttribute("aria-hidden"));
    });
    return () => {
      while (undos.length)
        undos.pop()();
    };
  }
  function crawlSiblingsUp(el, callback) {
    if (el.isSameNode(document.body) || !el.parentNode)
      return;
    Array.from(el.parentNode.children).forEach((sibling) => {
      if (sibling.isSameNode(el)) {
        crawlSiblingsUp(el.parentNode, callback);
      } else {
        callback(sibling);
      }
    });
  }
  function disableScrolling() {
    let overflow = document.documentElement.style.overflow;
    let paddingRight = document.documentElement.style.paddingRight;
    let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.documentElement.style.overflow = overflow;
      document.documentElement.style.paddingRight = paddingRight;
    };
  }
  var module_default3 = src_default3;

  // ../alpine/packages/persist/dist/module.esm.js
  function src_default4(Alpine3) {
    let persist = () => {
      let alias;
      let storage;
      try {
        storage = localStorage;
      } catch (e) {
        console.error(e);
        console.warn("Alpine: $persist is using temporary storage since localStorage is unavailable.");
        let dummy = /* @__PURE__ */ new Map();
        storage = {
          getItem: dummy.get.bind(dummy),
          setItem: dummy.set.bind(dummy)
        };
      }
      return Alpine3.interceptor((initialValue, getter, setter, path, key) => {
        let lookup = alias || `_x_${path}`;
        let initial = storageHas(lookup, storage) ? storageGet(lookup, storage) : initialValue;
        setter(initial);
        Alpine3.effect(() => {
          let value = getter();
          storageSet(lookup, value, storage);
          setter(value);
        });
        return initial;
      }, (func) => {
        func.as = (key) => {
          alias = key;
          return func;
        }, func.using = (target) => {
          storage = target;
          return func;
        };
      });
    };
    Object.defineProperty(Alpine3, "$persist", { get: () => persist() });
    Alpine3.magic("persist", persist);
    Alpine3.persist = (key, { get: get3, set: set3 }, storage = localStorage) => {
      let initial = storageHas(key, storage) ? storageGet(key, storage) : get3();
      set3(initial);
      Alpine3.effect(() => {
        let value = get3();
        storageSet(key, value, storage);
        set3(value);
      });
    };
  }
  function storageHas(key, storage) {
    return storage.getItem(key) !== null;
  }
  function storageGet(key, storage) {
    let value = storage.getItem(key, storage);
    if (value === void 0)
      return;
    return JSON.parse(value);
  }
  function storageSet(key, value, storage) {
    storage.setItem(key, JSON.stringify(value));
  }
  var module_default4 = src_default4;

  // ../alpine/packages/intersect/dist/module.esm.js
  function src_default5(Alpine3) {
    Alpine3.directive("intersect", Alpine3.skipDuringClone((el, { value, expression, modifiers }, { evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
      let evaluate3 = evaluateLater2(expression);
      let options = {
        rootMargin: getRootMargin(modifiers),
        threshold: getThreshold(modifiers)
      };
      let observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting === (value === "leave"))
            return;
          evaluate3();
          modifiers.includes("once") && observer2.disconnect();
        });
      }, options);
      observer2.observe(el);
      cleanup2(() => {
        observer2.disconnect();
      });
    }));
  }
  function getThreshold(modifiers) {
    if (modifiers.includes("full"))
      return 0.99;
    if (modifiers.includes("half"))
      return 0.5;
    if (!modifiers.includes("threshold"))
      return 0;
    let threshold = modifiers[modifiers.indexOf("threshold") + 1];
    if (threshold === "100")
      return 1;
    if (threshold === "0")
      return 0;
    return Number(`.${threshold}`);
  }
  function getLengthValue(rawValue) {
    let match = rawValue.match(/^(-?[0-9]+)(px|%)?$/);
    return match ? match[1] + (match[2] || "px") : void 0;
  }
  function getRootMargin(modifiers) {
    const key = "margin";
    const fallback2 = "0px 0px 0px 0px";
    const index = modifiers.indexOf(key);
    if (index === -1)
      return fallback2;
    let values = [];
    for (let i = 1; i < 5; i++) {
      values.push(getLengthValue(modifiers[index + i] || ""));
    }
    values = values.filter((v) => v !== void 0);
    return values.length ? values.join(" ").trim() : fallback2;
  }
  var module_default5 = src_default5;

  // node_modules/@alpinejs/resize/dist/module.esm.js
  function src_default6(Alpine3) {
    Alpine3.directive("resize", Alpine3.skipDuringClone((el, { value, expression, modifiers }, { evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
      let evaluator = evaluateLater2(expression);
      let evaluate3 = (width, height) => {
        evaluator(() => {
        }, { scope: { "$width": width, "$height": height } });
      };
      let off = modifiers.includes("document") ? onDocumentResize(evaluate3) : onElResize(el, evaluate3);
      cleanup2(() => off());
    }));
  }
  function onElResize(el, callback) {
    let observer2 = new ResizeObserver((entries) => {
      let [width, height] = dimensions(entries);
      callback(width, height);
    });
    observer2.observe(el);
    return () => observer2.disconnect();
  }
  var documentResizeObserver;
  var documentResizeObserverCallbacks = /* @__PURE__ */ new Set();
  function onDocumentResize(callback) {
    documentResizeObserverCallbacks.add(callback);
    if (!documentResizeObserver) {
      documentResizeObserver = new ResizeObserver((entries) => {
        let [width, height] = dimensions(entries);
        documentResizeObserverCallbacks.forEach((i) => i(width, height));
      });
      documentResizeObserver.observe(document.documentElement);
    }
    return () => {
      documentResizeObserverCallbacks.delete(callback);
    };
  }
  function dimensions(entries) {
    let width, height;
    for (let entry of entries) {
      width = entry.borderBoxSize[0].inlineSize;
      height = entry.borderBoxSize[0].blockSize;
    }
    return [width, height];
  }
  var module_default6 = src_default6;

  // ../alpine/packages/anchor/dist/module.esm.js
  var min = Math.min;
  var max = Math.max;
  var round = Math.round;
  var floor = Math.floor;
  var createCoords = (v) => ({
    x: v,
    y: v
  });
  var oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  var oppositeAlignmentMap = {
    start: "end",
    end: "start"
  };
  function clamp(start3, value, end) {
    return max(start3, min(value, end));
  }
  function evaluate2(value, param) {
    return typeof value === "function" ? value(param) : value;
  }
  function getSide(placement) {
    return placement.split("-")[0];
  }
  function getAlignment(placement) {
    return placement.split("-")[1];
  }
  function getOppositeAxis(axis) {
    return axis === "x" ? "y" : "x";
  }
  function getAxisLength(axis) {
    return axis === "y" ? "height" : "width";
  }
  function getSideAxis(placement) {
    return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
  }
  function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
  }
  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
  }
  function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }
  function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
  }
  function getSideList(side, isStart, rtl) {
    const lr = ["left", "right"];
    const rl = ["right", "left"];
    const tb = ["top", "bottom"];
    const bt = ["bottom", "top"];
    switch (side) {
      case "top":
      case "bottom":
        if (rtl)
          return isStart ? rl : lr;
        return isStart ? lr : rl;
      case "left":
      case "right":
        return isStart ? tb : bt;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === "start", rtl);
    if (alignment) {
      list = list.map((side) => side + "-" + alignment);
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
  }
  function expandPaddingObject(padding) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...padding
    };
  }
  function getPaddingObject(padding) {
    return typeof padding !== "number" ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }
  function rectToClientRect(rect) {
    return {
      ...rect,
      top: rect.y,
      left: rect.x,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    };
  }
  function computeCoordsFromPlacement(_ref, placement, rtl) {
    let {
      reference,
      floating
    } = _ref;
    const sideAxis = getSideAxis(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const alignLength = getAxisLength(alignmentAxis);
    const side = getSide(placement);
    const isVertical = sideAxis === "y";
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch (side) {
      case "top":
        coords = {
          x: commonX,
          y: reference.y - floating.height
        };
        break;
      case "bottom":
        coords = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case "right":
        coords = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case "left":
        coords = {
          x: reference.x - floating.width,
          y: commonY
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y
        };
    }
    switch (getAlignment(placement)) {
      case "start":
        coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case "end":
        coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }
  var computePosition = async (reference, floating, config) => {
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform: platform2
    } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
    let rects = await platform2.getElementRects({
      reference,
      floating,
      strategy
    });
    let {
      x,
      y
    } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for (let i = 0; i < validMiddleware.length; i++) {
      const {
        name,
        fn
      } = validMiddleware[i];
      const {
        x: nextX,
        y: nextY,
        data: data2,
        reset
      } = await fn({
        x,
        y,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform: platform2,
        elements: {
          reference,
          floating
        }
      });
      x = nextX != null ? nextX : x;
      y = nextY != null ? nextY : y;
      middlewareData = {
        ...middlewareData,
        [name]: {
          ...middlewareData[name],
          ...data2
        }
      };
      if (reset && resetCount <= 50) {
        resetCount++;
        if (typeof reset === "object") {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? await platform2.getElementRects({
              reference,
              floating,
              strategy
            }) : reset.rects;
          }
          ({
            x,
            y
          } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i = -1;
        continue;
      }
    }
    return {
      x,
      y,
      placement: statefulPlacement,
      strategy,
      middlewareData
    };
  };
  async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x,
      y,
      platform: platform2,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = "clippingAncestors",
      rootBoundary = "viewport",
      elementContext = "floating",
      altBoundary = false,
      padding = 0
    } = evaluate2(options, state);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
      element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === "floating" ? {
      ...rects.floating,
      x,
      y
    } : rects.reference;
    const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
    const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  }
  var flip = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "flip",
      options,
      async fn(state) {
        var _middlewareData$arrow, _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform: platform2,
          elements
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = "bestFit",
          fallbackAxisSideDirection = "none",
          flipAlignment = true,
          ...detectOverflowOptions
        } = evaluate2(options, state);
        if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        const side = getSide(placement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements2 = [initialPlacement, ...fallbackPlacements];
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides2 = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];
        if (!overflows.every((side2) => side2 <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements2[nextIndex];
          if (nextPlacement) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
          let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case "bestFit": {
                var _overflowsData$map$so;
                const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement2) {
                  resetPlacement = placement2;
                }
                break;
              }
              case "initialPlacement":
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      }
    };
  };
  async function convertValueToCoords(state, options) {
    const {
      placement,
      platform: platform2,
      elements
    } = state;
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === "y";
    const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate2(options, state);
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === "number" ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null,
      ...rawValue
    };
    if (alignment && typeof alignmentAxis === "number") {
      crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  }
  var offset = function(options) {
    if (options === void 0) {
      options = 0;
    }
    return {
      name: "offset",
      options,
      async fn(state) {
        const {
          x,
          y
        } = state;
        const diffCoords = await convertValueToCoords(state, options);
        return {
          x: x + diffCoords.x,
          y: y + diffCoords.y,
          data: diffCoords
        };
      }
    };
  };
  var shift = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "shift",
      options,
      async fn(state) {
        const {
          x,
          y,
          placement
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: (_ref) => {
              let {
                x: x2,
                y: y2
              } = _ref;
              return {
                x: x2,
                y: y2
              };
            }
          },
          ...detectOverflowOptions
        } = evaluate2(options, state);
        const coords = {
          x,
          y
        };
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const crossAxis = getSideAxis(getSide(placement));
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === "y" ? "top" : "left";
          const maxSide = mainAxis === "y" ? "bottom" : "right";
          const min2 = mainAxisCoord + overflow[minSide];
          const max2 = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = clamp(min2, mainAxisCoord, max2);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === "y" ? "top" : "left";
          const maxSide = crossAxis === "y" ? "bottom" : "right";
          const min2 = crossAxisCoord + overflow[minSide];
          const max2 = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = clamp(min2, crossAxisCoord, max2);
        }
        const limitedCoords = limiter.fn({
          ...state,
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        });
        return {
          ...limitedCoords,
          data: {
            x: limitedCoords.x - x,
            y: limitedCoords.y - y
          }
        };
      }
    };
  };
  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || "").toLowerCase();
    }
    return "#document";
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle2(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
  }
  function isTableElement(element) {
    return ["table", "td", "th"].includes(getNodeName(element));
  }
  function isContainingBlock(element) {
    const webkit = isWebKit();
    const css = getComputedStyle2(element);
    return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
  }
  function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      } else {
        currentNode = getParentNode(currentNode);
      }
    }
    return null;
  }
  function isWebKit() {
    if (typeof CSS === "undefined" || !CSS.supports)
      return false;
    return CSS.supports("-webkit-backdrop-filter", "none");
  }
  function isLastTraversableNode(node) {
    return ["html", "body", "#document"].includes(getNodeName(node));
  }
  function getComputedStyle2(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getNodeScroll(element) {
    if (isElement(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    return {
      scrollLeft: element.pageXOffset,
      scrollTop: element.pageYOffset
    };
  }
  function getParentNode(node) {
    if (getNodeName(node) === "html") {
      return node;
    }
    const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
  function getCssDimensions(element) {
    const css = getComputedStyle2(element);
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }
  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }
  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $
    } = getCssDimensions(domElement);
    let x = ($ ? round(rect.width) : rect.width) / width;
    let y = ($ ? round(rect.height) : rect.height) / height;
    if (!x || !Number.isFinite(x)) {
      x = 1;
    }
    if (!y || !Number.isFinite(y)) {
      y = 1;
    }
    return {
      x,
      y
    };
  }
  var noOffsets = /* @__PURE__ */ createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
      return false;
    }
    return isFixed;
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentIFrame = win.frameElement;
      while (currentIFrame && offsetParent && offsetWin !== win) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle2(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x *= iframeScale.x;
        y *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x += left;
        y += top;
        currentIFrame = getWindow(currentIFrame).frameElement;
      }
    }
    return rectToClientRect({
      width,
      height,
      x,
      y
    });
  }
  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let {
      rect,
      offsetParent,
      strategy
    } = _ref;
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    if (offsetParent === documentElement) {
      return rect;
    }
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    let scale = createCoords(1);
    const offsets = createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        const offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
    };
  }
  function getClientRects(element) {
    return Array.from(element.getClientRects());
  }
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
  }
  function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = element.ownerDocument.body;
    const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if (getComputedStyle2(body).direction === "rtl") {
      x += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }
  function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      const visualViewportBased = isWebKit();
      if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x,
      y
    };
  }
  function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
      width,
      height,
      x,
      y
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === "viewport") {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === "document") {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      const visualOffsets = getVisualOffsets(element);
      rect = {
        ...clippingAncestor,
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y
      };
    }
    return rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
  }
  function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle2(element).position === "fixed";
    let currentNode = elementIsFixed ? getParentNode(element) : element;
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
      const computedStyle = getComputedStyle2(currentNode);
      const currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === "fixed") {
        currentContainingBlockComputedStyle = null;
      }
      const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
      if (shouldDropCurrentNode) {
        result = result.filter((ancestor) => ancestor !== currentNode);
      } else {
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
  }
  function getClippingRect(_ref) {
    let {
      element,
      boundary,
      rootBoundary,
      strategy
    } = _ref;
    const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [...elementClippingAncestors, rootBoundary];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
      const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
      width: clippingRect.right - clippingRect.left,
      height: clippingRect.bottom - clippingRect.top,
      x: clippingRect.left,
      y: clippingRect.top
    };
  }
  function getDimensions(element) {
    return getCssDimensions(element);
  }
  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === "fixed";
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const offsets = createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }
  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    return element.offsetParent;
  }
  function getOffsetParent(element, polyfill) {
    const window2 = getWindow(element);
    if (!isHTMLElement(element)) {
      return window2;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }
  var getElementRects = async function(_ref) {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
      floating: {
        x: 0,
        y: 0,
        ...await getDimensionsFn(floating)
      }
    };
  };
  function isRTL(element) {
    return getComputedStyle2(element).direction === "rtl";
  }
  var platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement,
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement,
    isRTL
  };
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = getDocumentElement(element);
    function cleanup2() {
      clearTimeout(timeoutId);
      io && io.disconnect();
      io = null;
    }
    function refresh(skip, threshold) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold === void 0) {
        threshold = 1;
      }
      cleanup2();
      const {
        left,
        top,
        width,
        height
      } = element.getBoundingClientRect();
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root.clientWidth - (left + width));
      const insetBottom = floor(root.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      const options = {
        rootMargin,
        threshold: max(0, min(1, threshold)) || 1
      };
      let isFirstUpdate = true;
      function handleObserve(entries) {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (!ratio) {
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 100);
          } else {
            refresh(false, ratio);
          }
        }
        isFirstUpdate = false;
      }
      try {
        io = new IntersectionObserver(handleObserve, {
          ...options,
          root: root.ownerDocument
        });
      } catch (e) {
        io = new IntersectionObserver(handleObserve, options);
      }
      io.observe(element);
    }
    refresh(true);
    return cleanup2;
  }
  function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
      options = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = typeof ResizeObserver === "function",
      layoutShift = typeof IntersectionObserver === "function",
      animationFrame = false
    } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.addEventListener("scroll", update, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener("resize", update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver((_ref) => {
        let [firstEntry] = _ref;
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
          resizeObserver.unobserve(floating);
          cancelAnimationFrame(reobserveFrame);
          reobserveFrame = requestAnimationFrame(() => {
            resizeObserver && resizeObserver.observe(floating);
          });
        }
        update();
      });
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
        update();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return () => {
      ancestors.forEach((ancestor) => {
        ancestorScroll && ancestor.removeEventListener("scroll", update);
        ancestorResize && ancestor.removeEventListener("resize", update);
      });
      cleanupIo && cleanupIo();
      resizeObserver && resizeObserver.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }
  var computePosition2 = (reference, floating, options) => {
    const cache = /* @__PURE__ */ new Map();
    const mergedOptions = {
      platform,
      ...options
    };
    const platformWithCache = {
      ...mergedOptions.platform,
      _c: cache
    };
    return computePosition(reference, floating, {
      ...mergedOptions,
      platform: platformWithCache
    });
  };
  function src_default7(Alpine3) {
    Alpine3.magic("anchor", (el) => {
      if (!el._x_anchor)
        throw "Alpine: No x-anchor directive found on element using $anchor...";
      return el._x_anchor;
    });
    Alpine3.interceptClone((from, to) => {
      if (from && from._x_anchor && !to._x_anchor) {
        to._x_anchor = from._x_anchor;
      }
    });
    Alpine3.directive("anchor", Alpine3.skipDuringClone((el, { expression, modifiers, value }, { cleanup: cleanup2, evaluate: evaluate22 }) => {
      let { placement, offsetValue, unstyled } = getOptions(modifiers);
      el._x_anchor = Alpine3.reactive({ x: 0, y: 0 });
      let reference = evaluate22(expression);
      if (!reference)
        throw "Alpine: no element provided to x-anchor...";
      let compute = () => {
        let previousValue;
        computePosition2(reference, el, {
          placement,
          middleware: [flip(), shift({ padding: 5 }), offset(offsetValue)]
        }).then(({ x, y }) => {
          unstyled || setStyles2(el, x, y);
          if (JSON.stringify({ x, y }) !== previousValue) {
            el._x_anchor.x = x;
            el._x_anchor.y = y;
          }
          previousValue = JSON.stringify({ x, y });
        });
      };
      let release2 = autoUpdate(reference, el, () => compute());
      cleanup2(() => release2());
    }, (el, { expression, modifiers, value }, { cleanup: cleanup2, evaluate: evaluate22 }) => {
      let { placement, offsetValue, unstyled } = getOptions(modifiers);
      if (el._x_anchor) {
        unstyled || setStyles2(el, el._x_anchor.x, el._x_anchor.y);
      }
    }));
  }
  function setStyles2(el, x, y) {
    Object.assign(el.style, {
      left: x + "px",
      top: y + "px",
      position: "absolute"
    });
  }
  function getOptions(modifiers) {
    let positions = ["top", "top-start", "top-end", "right", "right-start", "right-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end"];
    let placement = positions.find((i) => modifiers.includes(i));
    let offsetValue = 0;
    if (modifiers.includes("offset")) {
      let idx = modifiers.findIndex((i) => i === "offset");
      offsetValue = modifiers[idx + 1] !== void 0 ? Number(modifiers[idx + 1]) : offsetValue;
    }
    let unstyled = modifiers.includes("no-style");
    return { placement, offsetValue, unstyled };
  }
  var module_default7 = src_default7;

  // js/plugins/navigate/history.js
  var Snapshot = class {
    constructor(url, html) {
      this.url = url;
      this.html = html;
    }
  };
  var snapshotCache = {
    currentKey: null,
    currentUrl: null,
    keys: [],
    lookup: {},
    limit: 10,
    has(location) {
      return this.lookup[location] !== void 0;
    },
    retrieve(location) {
      let snapshot = this.lookup[location];
      if (snapshot === void 0)
        throw "No back button cache found for current location: " + location;
      return snapshot;
    },
    replace(key, snapshot) {
      if (this.has(key)) {
        this.lookup[key] = snapshot;
      } else {
        this.push(key, snapshot);
      }
    },
    push(key, snapshot) {
      this.lookup[key] = snapshot;
      let index = this.keys.indexOf(key);
      if (index > -1)
        this.keys.splice(index, 1);
      this.keys.unshift(key);
      this.trim();
    },
    trim() {
      for (let key of this.keys.splice(this.limit)) {
        delete this.lookup[key];
      }
    }
  };
  function updateCurrentPageHtmlInHistoryStateForLaterBackButtonClicks() {
    let url = new URL(window.location.href, document.baseURI);
    replaceUrl(url, document.documentElement.outerHTML);
  }
  function updateCurrentPageHtmlInSnapshotCacheForLaterBackButtonClicks(key, url) {
    let html = document.documentElement.outerHTML;
    snapshotCache.replace(key, new Snapshot(url, html));
  }
  function whenTheBackOrForwardButtonIsClicked(registerFallback, handleHtml) {
    let fallback2;
    registerFallback((i) => fallback2 = i);
    window.addEventListener("popstate", (e) => {
      let state = e.state || {};
      let alpine = state.alpine || {};
      if (Object.keys(state).length === 0)
        return;
      if (!alpine.snapshotIdx)
        return;
      if (snapshotCache.has(alpine.snapshotIdx)) {
        let snapshot = snapshotCache.retrieve(alpine.snapshotIdx);
        handleHtml(snapshot.html, snapshot.url, snapshotCache.currentUrl, snapshotCache.currentKey);
      } else {
        fallback2(alpine.url);
      }
    });
  }
  function updateUrlAndStoreLatestHtmlForFutureBackButtons(html, destination) {
    pushUrl(destination, html);
  }
  function pushUrl(url, html) {
    updateUrl("pushState", url, html);
  }
  function replaceUrl(url, html) {
    updateUrl("replaceState", url, html);
  }
  function updateUrl(method, url, html) {
    let key = url.toString() + "-" + Math.random();
    method === "pushState" ? snapshotCache.push(key, new Snapshot(url, html)) : snapshotCache.replace(key = snapshotCache.currentKey ?? key, new Snapshot(url, html));
    let state = history.state || {};
    if (!state.alpine)
      state.alpine = {};
    state.alpine.snapshotIdx = key;
    state.alpine.url = url.toString();
    try {
      history[method](state, JSON.stringify(document.title), url);
      snapshotCache.currentKey = key;
      snapshotCache.currentUrl = url;
    } catch (error2) {
      if (error2 instanceof DOMException && error2.name === "SecurityError") {
        console.error("Livewire: You can't use wire:navigate with a link to a different root domain: " + url);
      }
      console.error(error2);
    }
  }

  // js/plugins/navigate/links.js
  function whenThisLinkIsPressed(el, callback) {
    let isProgrammaticClick = (e) => !e.isTrusted;
    let isNotPlainLeftClick = (e) => e.which > 1 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
    let isNotPlainEnterKey = (e) => e.which !== 13 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
    el.addEventListener("click", (e) => {
      if (isProgrammaticClick(e)) {
        e.preventDefault();
        callback((whenReleased) => whenReleased());
        return;
      }
      if (isNotPlainLeftClick(e))
        return;
      e.preventDefault();
    });
    el.addEventListener("mousedown", (e) => {
      if (isNotPlainLeftClick(e))
        return;
      e.preventDefault();
      callback((whenReleased) => {
        let handler4 = (e2) => {
          e2.preventDefault();
          whenReleased();
          el.removeEventListener("mouseup", handler4);
        };
        el.addEventListener("mouseup", handler4);
      });
    });
    el.addEventListener("keydown", (e) => {
      if (isNotPlainEnterKey(e))
        return;
      e.preventDefault();
      callback((whenReleased) => whenReleased());
    });
  }
  function whenThisLinkIsHoveredFor(el, ms = 60, callback) {
    el.addEventListener("mouseenter", (e) => {
      let timeout = setTimeout(() => {
        callback(e);
      }, ms);
      let handler4 = () => {
        clearTimeout(timeout);
        el.removeEventListener("mouseleave", handler4);
      };
      el.addEventListener("mouseleave", handler4);
    });
  }
  function extractDestinationFromLink(linkEl) {
    return createUrlObjectFromString(linkEl.getAttribute("href"));
  }
  function createUrlObjectFromString(urlString) {
    return urlString !== null && new URL(urlString, document.baseURI);
  }
  function getUriStringFromUrlObject(urlObject) {
    return urlObject.pathname + urlObject.search + urlObject.hash;
  }

  // js/plugins/navigate/fetch.js
  function fetchHtml(destination, callback) {
    let uri = getUriStringFromUrlObject(destination);
    performFetch(uri, (html, finalDestination) => {
      callback(html, finalDestination);
    });
  }
  function performFetch(uri, callback) {
    let options = {
      headers: {
        "X-Livewire-Navigate": ""
      }
    };
    trigger2("navigate.request", {
      url: uri,
      options
    });
    let finalDestination;
    fetch(uri, options).then((response) => {
      let destination = createUrlObjectFromString(uri);
      finalDestination = createUrlObjectFromString(response.url);
      if (destination.pathname + destination.search === finalDestination.pathname + finalDestination.search) {
        finalDestination.hash = destination.hash;
      }
      return response.text();
    }).then((html) => {
      callback(html, finalDestination);
    });
  }

  // js/plugins/navigate/prefetch.js
  var prefetches = {};
  function prefetchHtml(destination, callback) {
    let uri = getUriStringFromUrlObject(destination);
    if (prefetches[uri])
      return;
    prefetches[uri] = { finished: false, html: null, whenFinished: () => {
    } };
    performFetch(uri, (html, routedUri) => {
      callback(html, routedUri);
    });
  }
  function storeThePrefetchedHtmlForWhenALinkIsClicked(html, destination, finalDestination) {
    let state = prefetches[getUriStringFromUrlObject(destination)];
    state.html = html;
    state.finished = true;
    state.finalDestination = finalDestination;
    state.whenFinished();
  }
  function getPretchedHtmlOr(destination, receive, ifNoPrefetchExists) {
    let uri = getUriStringFromUrlObject(destination);
    if (!prefetches[uri])
      return ifNoPrefetchExists();
    if (prefetches[uri].finished) {
      let html = prefetches[uri].html;
      let finalDestination = prefetches[uri].finalDestination;
      delete prefetches[uri];
      return receive(html, finalDestination);
    } else {
      prefetches[uri].whenFinished = () => {
        let html = prefetches[uri].html;
        let finalDestination = prefetches[uri].finalDestination;
        delete prefetches[uri];
        receive(html, finalDestination);
      };
    }
  }

  // js/plugins/navigate/teleport.js
  function packUpPersistedTeleports(persistedEl) {
    module_default.mutateDom(() => {
      persistedEl.querySelectorAll("[data-teleport-template]").forEach((i) => i._x_teleport.remove());
    });
  }
  function removeAnyLeftOverStaleTeleportTargets(body) {
    module_default.mutateDom(() => {
      body.querySelectorAll("[data-teleport-target]").forEach((i) => i.remove());
    });
  }
  function unPackPersistedTeleports(persistedEl) {
    module_default.walk(persistedEl, (el, skip) => {
      if (!el._x_teleport)
        return;
      el._x_teleportPutBack();
      skip();
    });
  }
  function isTeleportTarget(el) {
    return el.hasAttribute("data-teleport-target");
  }

  // js/plugins/navigate/scroll.js
  function storeScrollInformationInHtmlBeforeNavigatingAway() {
    document.body.setAttribute("data-scroll-x", document.body.scrollLeft);
    document.body.setAttribute("data-scroll-y", document.body.scrollTop);
    document.querySelectorAll(["[x-navigate\\:scroll]", "[wire\\:scroll]"]).forEach((el) => {
      el.setAttribute("data-scroll-x", el.scrollLeft);
      el.setAttribute("data-scroll-y", el.scrollTop);
    });
  }
  function restoreScrollPositionOrScrollToTop() {
    let scroll = (el) => {
      if (!el.hasAttribute("data-scroll-x")) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      } else {
        el.scrollTo({
          top: Number(el.getAttribute("data-scroll-y")),
          left: Number(el.getAttribute("data-scroll-x")),
          behavior: "instant"
        });
        el.removeAttribute("data-scroll-x");
        el.removeAttribute("data-scroll-y");
      }
    };
    queueMicrotask(() => {
      queueMicrotask(() => {
        scroll(document.body);
        document.querySelectorAll(["[x-navigate\\:scroll]", "[wire\\:scroll]"]).forEach(scroll);
      });
    });
  }

  // js/plugins/navigate/persist.js
  var els = {};
  function storePersistantElementsForLater(callback) {
    els = {};
    document.querySelectorAll("[x-persist]").forEach((i) => {
      els[i.getAttribute("x-persist")] = i;
      callback(i);
      module_default.mutateDom(() => {
        i.remove();
      });
    });
  }
  function putPersistantElementsBack(callback) {
    let usedPersists = [];
    document.querySelectorAll("[x-persist]").forEach((i) => {
      let old = els[i.getAttribute("x-persist")];
      if (!old)
        return;
      usedPersists.push(i.getAttribute("x-persist"));
      old._x_wasPersisted = true;
      callback(old, i);
      module_default.mutateDom(() => {
        i.replaceWith(old);
      });
    });
    Object.entries(els).forEach(([key, el]) => {
      if (usedPersists.includes(key))
        return;
      module_default.destroyTree(el);
    });
    els = {};
  }
  function isPersistedElement(el) {
    return el.hasAttribute("x-persist");
  }

  // js/plugins/navigate/bar.js
  var import_nprogress = __toESM(require_nprogress());
  import_nprogress.default.configure({
    minimum: 0.1,
    trickleSpeed: 200,
    showSpinner: false,
    parent: "body"
  });
  injectStyles();
  var inProgress = false;
  function showAndStartProgressBar() {
    inProgress = true;
    setTimeout(() => {
      if (!inProgress)
        return;
      import_nprogress.default.start();
    }, 150);
  }
  function finishAndHideProgressBar() {
    inProgress = false;
    import_nprogress.default.done();
  }
  function removeAnyLeftOverStaleProgressBars() {
    import_nprogress.default.remove();
  }
  function injectStyles() {
    let style = document.createElement("style");
    style.innerHTML = `/* Make clicks pass-through */

    #nprogress {
      pointer-events: none;
    }

    #nprogress .bar {
      background: var(--livewire-progress-bar-color, #29d);

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    /* Fancy blur effect */
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px var(--livewire-progress-bar-color, #29d), 0 0 5px var(--livewire-progress-bar-color, #29d);
      opacity: 1.0;

      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }

    /* Remove these to get rid of the spinner */
    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: var(--livewire-progress-bar-color, #29d);
      border-left-color: var(--livewire-progress-bar-color, #29d);
      border-radius: 50%;

      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }

    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }

    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    `;
    let nonce2 = getNonce();
    if (nonce2)
      style.nonce = nonce2;
    document.head.appendChild(style);
  }

  // js/plugins/navigate/popover.js
  function packUpPersistedPopovers(persistedEl) {
    if (!isPopoverSupported())
      return;
    persistedEl.querySelectorAll(":popover-open").forEach((el) => {
      el.setAttribute("data-navigate-popover-open", "");
      let animations = el.getAnimations();
      el._pausedAnimations = animations.map((animation) => ({
        keyframes: animation.effect.getKeyframes(),
        options: {
          duration: animation.effect.getTiming().duration,
          easing: animation.effect.getTiming().easing,
          fill: animation.effect.getTiming().fill,
          iterations: animation.effect.getTiming().iterations
        },
        currentTime: animation.currentTime,
        playState: animation.playState
      }));
      animations.forEach((i) => i.pause());
    });
  }
  function unPackPersistedPopovers(persistedEl) {
    if (!isPopoverSupported())
      return;
    persistedEl.querySelectorAll("[data-navigate-popover-open]").forEach((el) => {
      el.removeAttribute("data-navigate-popover-open");
      queueMicrotask(() => {
        if (!el.isConnected)
          return;
        el.showPopover();
        el.getAnimations().forEach((i) => i.finish());
        if (el._pausedAnimations) {
          el._pausedAnimations.forEach(({ keyframes, options, currentTime, now, playState }) => {
            let animation = el.animate(keyframes, options);
            animation.currentTime = currentTime;
          });
          delete el._pausedAnimations;
        }
      });
    });
  }
  function isPopoverSupported() {
    return typeof document.createElement("div").showPopover === "function";
  }

  // js/plugins/navigate/page.js
  var oldBodyScriptTagHashes = [];
  var attributesExemptFromScriptTagHashing = [
    "data-csrf",
    "aria-hidden"
  ];
  function swapCurrentPageWithNewHtml(html, andThen) {
    let newDocument = new DOMParser().parseFromString(html, "text/html");
    let newBody = document.adoptNode(newDocument.body);
    let newHead = document.adoptNode(newDocument.head);
    oldBodyScriptTagHashes = oldBodyScriptTagHashes.concat(Array.from(document.body.querySelectorAll("script")).map((i) => {
      return simpleHash(ignoreAttributes(i.outerHTML, attributesExemptFromScriptTagHashing));
    }));
    let afterRemoteScriptsHaveLoaded = () => {
    };
    mergeNewHead(newHead).finally(() => {
      afterRemoteScriptsHaveLoaded();
    });
    prepNewBodyScriptTagsToRun(newBody, oldBodyScriptTagHashes);
    let oldBody = document.body;
    document.body.replaceWith(newBody);
    Alpine.destroyTree(oldBody);
    andThen((i) => afterRemoteScriptsHaveLoaded = i);
  }
  function prepNewBodyScriptTagsToRun(newBody, oldBodyScriptTagHashes2) {
    newBody.querySelectorAll("script").forEach((i) => {
      if (i.hasAttribute("data-navigate-once")) {
        let hash = simpleHash(ignoreAttributes(i.outerHTML, attributesExemptFromScriptTagHashing));
        if (oldBodyScriptTagHashes2.includes(hash))
          return;
      }
      i.replaceWith(cloneScriptTag(i));
    });
  }
  function mergeNewHead(newHead) {
    let children = Array.from(document.head.children);
    let headChildrenHtmlLookup = children.map((i) => i.outerHTML);
    let garbageCollector = document.createDocumentFragment();
    let touchedHeadElements = [];
    let remoteScriptsPromises = [];
    for (let child of Array.from(newHead.children)) {
      if (isAsset(child)) {
        if (!headChildrenHtmlLookup.includes(child.outerHTML)) {
          if (isTracked(child)) {
            if (ifTheQueryStringChangedSinceLastRequest(child, children)) {
              setTimeout(() => window.location.reload());
            }
          }
          if (isScript(child)) {
            try {
              remoteScriptsPromises.push(injectScriptTagAndWaitForItToFullyLoad(cloneScriptTag(child)));
            } catch (error2) {
            }
          } else {
            document.head.appendChild(child);
          }
        } else {
          garbageCollector.appendChild(child);
        }
        touchedHeadElements.push(child);
      }
    }
    for (let child of Array.from(document.head.children)) {
      if (!isAsset(child))
        child.remove();
    }
    for (let child of Array.from(newHead.children)) {
      if (child.tagName.toLowerCase() === "noscript")
        continue;
      document.head.appendChild(child);
    }
    return Promise.all(remoteScriptsPromises);
  }
  async function injectScriptTagAndWaitForItToFullyLoad(script) {
    return new Promise((resolve, reject) => {
      if (script.src) {
        script.onload = () => resolve();
        script.onerror = () => reject();
      } else {
        resolve();
      }
      document.head.appendChild(script);
    });
  }
  function cloneScriptTag(el) {
    let script = document.createElement("script");
    script.textContent = el.textContent;
    script.async = el.async;
    for (let attr of el.attributes) {
      script.setAttribute(attr.name, attr.value);
    }
    return script;
  }
  function isTracked(el) {
    return el.hasAttribute("data-navigate-track");
  }
  function ifTheQueryStringChangedSinceLastRequest(el, currentHeadChildren) {
    let [uri, queryString] = extractUriAndQueryString(el);
    return currentHeadChildren.some((child) => {
      if (!isTracked(child))
        return false;
      let [currentUri, currentQueryString] = extractUriAndQueryString(child);
      if (currentUri === uri && queryString !== currentQueryString)
        return true;
    });
  }
  function extractUriAndQueryString(el) {
    let url = isScript(el) ? el.src : el.href;
    return url.split("?");
  }
  function isAsset(el) {
    return el.tagName.toLowerCase() === "link" && el.getAttribute("rel").toLowerCase() === "stylesheet" || el.tagName.toLowerCase() === "style" || el.tagName.toLowerCase() === "script";
  }
  function isScript(el) {
    return el.tagName.toLowerCase() === "script";
  }
  function simpleHash(str) {
    return str.split("").reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
  }
  function ignoreAttributes(subject, attributesToRemove) {
    let result = subject;
    attributesToRemove.forEach((attr) => {
      const regex = new RegExp(`${attr}="[^"]*"|${attr}='[^']*'`, "g");
      result = result.replace(regex, "");
    });
    result = result.replaceAll(" ", "");
    return result.trim();
  }

  // js/plugins/navigate/index.js
  var enablePersist = true;
  var showProgressBar = true;
  var restoreScroll = true;
  var autofocus = false;
  function navigate_default(Alpine3) {
    Alpine3.navigate = (url) => {
      let destination = createUrlObjectFromString(url);
      let prevented = fireEventForOtherLibrariesToHookInto("alpine:navigate", {
        url: destination,
        history: false,
        cached: false
      });
      if (prevented)
        return;
      navigateTo(destination);
    };
    Alpine3.navigate.disableProgressBar = () => {
      showProgressBar = false;
    };
    Alpine3.addInitSelector(() => `[${Alpine3.prefixed("navigate")}]`);
    Alpine3.directive("navigate", (el, { modifiers }) => {
      let shouldPrefetchOnHover = modifiers.includes("hover");
      shouldPrefetchOnHover && whenThisLinkIsHoveredFor(el, 60, () => {
        let destination = extractDestinationFromLink(el);
        if (!destination)
          return;
        prefetchHtml(destination, (html, finalDestination) => {
          storeThePrefetchedHtmlForWhenALinkIsClicked(html, destination, finalDestination);
        });
      });
      whenThisLinkIsPressed(el, (whenItIsReleased) => {
        let destination = extractDestinationFromLink(el);
        if (!destination)
          return;
        prefetchHtml(destination, (html, finalDestination) => {
          storeThePrefetchedHtmlForWhenALinkIsClicked(html, destination, finalDestination);
        });
        whenItIsReleased(() => {
          let prevented = fireEventForOtherLibrariesToHookInto("alpine:navigate", {
            url: destination,
            history: false,
            cached: false
          });
          if (prevented)
            return;
          navigateTo(destination);
        });
      });
    });
    function navigateTo(destination, shouldPushToHistoryState = true) {
      showProgressBar && showAndStartProgressBar();
      fetchHtmlOrUsePrefetchedHtml(destination, (html, finalDestination) => {
        fireEventForOtherLibrariesToHookInto("alpine:navigating");
        restoreScroll && storeScrollInformationInHtmlBeforeNavigatingAway();
        showProgressBar && finishAndHideProgressBar();
        cleanupAlpineElementsOnThePageThatArentInsideAPersistedElement();
        updateCurrentPageHtmlInHistoryStateForLaterBackButtonClicks();
        preventAlpineFromPickingUpDomChanges(Alpine3, (andAfterAllThis) => {
          enablePersist && storePersistantElementsForLater((persistedEl) => {
            packUpPersistedTeleports(persistedEl);
            packUpPersistedPopovers(persistedEl);
          });
          if (shouldPushToHistoryState) {
            updateUrlAndStoreLatestHtmlForFutureBackButtons(html, finalDestination);
          } else {
            replaceUrl(finalDestination, html);
          }
          swapCurrentPageWithNewHtml(html, (afterNewScriptsAreDoneLoading) => {
            removeAnyLeftOverStaleTeleportTargets(document.body);
            enablePersist && putPersistantElementsBack((persistedEl, newStub) => {
              unPackPersistedTeleports(persistedEl);
              unPackPersistedPopovers(persistedEl);
            });
            restoreScrollPositionOrScrollToTop();
            afterNewScriptsAreDoneLoading(() => {
              andAfterAllThis(() => {
                setTimeout(() => {
                  autofocus && autofocusElementsWithTheAutofocusAttribute();
                });
                nowInitializeAlpineOnTheNewPage(Alpine3);
                fireEventForOtherLibrariesToHookInto("alpine:navigated");
              });
            });
          });
        });
      });
    }
    whenTheBackOrForwardButtonIsClicked((ifThePageBeingVisitedHasntBeenCached) => {
      ifThePageBeingVisitedHasntBeenCached((url) => {
        let destination = createUrlObjectFromString(url);
        let prevented = fireEventForOtherLibrariesToHookInto("alpine:navigate", {
          url: destination,
          history: true,
          cached: false
        });
        if (prevented)
          return;
        let shouldPushToHistoryState = false;
        navigateTo(destination, shouldPushToHistoryState);
      });
    }, (html, url, currentPageUrl, currentPageKey) => {
      let destination = createUrlObjectFromString(url);
      let prevented = fireEventForOtherLibrariesToHookInto("alpine:navigate", {
        url: destination,
        history: true,
        cached: true
      });
      if (prevented)
        return;
      storeScrollInformationInHtmlBeforeNavigatingAway();
      fireEventForOtherLibrariesToHookInto("alpine:navigating");
      updateCurrentPageHtmlInSnapshotCacheForLaterBackButtonClicks(currentPageUrl, currentPageKey);
      preventAlpineFromPickingUpDomChanges(Alpine3, (andAfterAllThis) => {
        enablePersist && storePersistantElementsForLater((persistedEl) => {
          packUpPersistedTeleports(persistedEl);
          packUpPersistedPopovers(persistedEl);
        });
        swapCurrentPageWithNewHtml(html, () => {
          removeAnyLeftOverStaleProgressBars();
          removeAnyLeftOverStaleTeleportTargets(document.body);
          enablePersist && putPersistantElementsBack((persistedEl, newStub) => {
            unPackPersistedTeleports(persistedEl);
            unPackPersistedPopovers(persistedEl);
          });
          restoreScrollPositionOrScrollToTop();
          andAfterAllThis(() => {
            autofocus && autofocusElementsWithTheAutofocusAttribute();
            nowInitializeAlpineOnTheNewPage(Alpine3);
            fireEventForOtherLibrariesToHookInto("alpine:navigated");
          });
        });
      });
    });
    setTimeout(() => {
      fireEventForOtherLibrariesToHookInto("alpine:navigated");
    });
  }
  function fetchHtmlOrUsePrefetchedHtml(fromDestination, callback) {
    getPretchedHtmlOr(fromDestination, callback, () => {
      fetchHtml(fromDestination, callback);
    });
  }
  function preventAlpineFromPickingUpDomChanges(Alpine3, callback) {
    Alpine3.stopObservingMutations();
    callback((afterAllThis) => {
      Alpine3.startObservingMutations();
      queueMicrotask(() => {
        afterAllThis();
      });
    });
  }
  function fireEventForOtherLibrariesToHookInto(name, detail) {
    let event = new CustomEvent(name, {
      cancelable: true,
      bubbles: true,
      detail
    });
    document.dispatchEvent(event);
    return event.defaultPrevented;
  }
  function nowInitializeAlpineOnTheNewPage(Alpine3) {
    Alpine3.initTree(document.body, void 0, (el, skip) => {
      if (el._x_wasPersisted)
        skip();
    });
  }
  function autofocusElementsWithTheAutofocusAttribute() {
    document.querySelector("[autofocus]") && document.querySelector("[autofocus]").focus();
  }
  function cleanupAlpineElementsOnThePageThatArentInsideAPersistedElement() {
    let walker = function(root, callback) {
      Alpine.walk(root, (el, skip) => {
        if (isPersistedElement(el))
          skip();
        if (isTeleportTarget(el))
          skip();
        else
          callback(el, skip);
      });
    };
    Alpine.destroyTree(document.body, walker);
  }

  // js/plugins/history/index.js
  function history2(Alpine3) {
    Alpine3.magic("queryString", (el, { interceptor: interceptor2 }) => {
      let alias;
      let alwaysShow = false;
      let usePush = false;
      return interceptor2((initialSeedValue, getter, setter, path, key) => {
        let queryKey = alias || path;
        let { initial, replace: replace2, push: push2, pop } = track2(queryKey, initialSeedValue, alwaysShow);
        setter(initial);
        if (!usePush) {
          Alpine3.effect(() => replace2(getter()));
        } else {
          Alpine3.effect(() => push2(getter()));
          pop(async (newValue) => {
            setter(newValue);
            let tillTheEndOfTheMicrotaskQueue = () => Promise.resolve();
            await tillTheEndOfTheMicrotaskQueue();
          });
        }
        return initial;
      }, (func) => {
        func.alwaysShow = () => {
          alwaysShow = true;
          return func;
        };
        func.usePush = () => {
          usePush = true;
          return func;
        };
        func.as = (key) => {
          alias = key;
          return func;
        };
      });
    });
    Alpine3.history = { track: track2 };
  }
  function track2(name, initialSeedValue, alwaysShow = false, except = null) {
    let { has: has2, get: get3, set: set3, remove } = queryStringUtils();
    let url = new URL(window.location.href);
    let isInitiallyPresentInUrl = has2(url, name);
    let initialValue = isInitiallyPresentInUrl ? get3(url, name) : initialSeedValue;
    let initialValueMemo = JSON.stringify(initialValue);
    let exceptValueMemo = [false, null, void 0].includes(except) ? initialSeedValue : JSON.stringify(except);
    let hasReturnedToInitialValue = (newValue) => JSON.stringify(newValue) === initialValueMemo;
    let hasReturnedToExceptValue = (newValue) => JSON.stringify(newValue) === exceptValueMemo;
    if (alwaysShow)
      url = set3(url, name, initialValue);
    replace(url, name, { value: initialValue });
    let lock = false;
    let update = (strategy, newValue) => {
      if (lock)
        return;
      let url2 = new URL(window.location.href);
      if (!alwaysShow && !isInitiallyPresentInUrl && hasReturnedToInitialValue(newValue)) {
        url2 = remove(url2, name);
      } else if (newValue === void 0) {
        url2 = remove(url2, name);
      } else if (!alwaysShow && hasReturnedToExceptValue(newValue)) {
        url2 = remove(url2, name);
      } else {
        url2 = set3(url2, name, newValue);
      }
      strategy(url2, name, { value: newValue });
    };
    return {
      initial: initialValue,
      replace(newValue) {
        update(replace, newValue);
      },
      push(newValue) {
        update(push, newValue);
      },
      pop(receiver) {
        let handler4 = (e) => {
          if (!e.state || !e.state.alpine)
            return;
          Object.entries(e.state.alpine).forEach(([iName, { value: newValue }]) => {
            if (iName !== name)
              return;
            lock = true;
            let result = receiver(newValue);
            if (result instanceof Promise) {
              result.finally(() => lock = false);
            } else {
              lock = false;
            }
          });
        };
        window.addEventListener("popstate", handler4);
        return () => window.removeEventListener("popstate", handler4);
      }
    };
  }
  function replace(url, key, object) {
    let state = window.history.state || {};
    if (!state.alpine)
      state.alpine = {};
    state.alpine[key] = unwrap(object);
    window.history.replaceState(state, "", url.toString());
  }
  function push(url, key, object) {
    let state = window.history.state || {};
    if (!state.alpine)
      state.alpine = {};
    state = { alpine: { ...state.alpine, ...{ [key]: unwrap(object) } } };
    window.history.pushState(state, "", url.toString());
  }
  function unwrap(object) {
    if (object === void 0)
      return void 0;
    return JSON.parse(JSON.stringify(object));
  }
  function queryStringUtils() {
    return {
      has(url, key) {
        let search = url.search;
        if (!search)
          return false;
        let data2 = fromQueryString(search, key);
        return Object.keys(data2).includes(key);
      },
      get(url, key) {
        let search = url.search;
        if (!search)
          return false;
        let data2 = fromQueryString(search, key);
        return data2[key];
      },
      set(url, key, value) {
        let data2 = fromQueryString(url.search, key);
        data2[key] = stripNulls(unwrap(value));
        url.search = toQueryString(data2);
        return url;
      },
      remove(url, key) {
        let data2 = fromQueryString(url.search, key);
        delete data2[key];
        url.search = toQueryString(data2);
        return url;
      }
    };
  }
  function stripNulls(value) {
    if (!isObjecty(value))
      return value;
    for (let key in value) {
      if (value[key] === null)
        delete value[key];
      else
        value[key] = stripNulls(value[key]);
    }
    return value;
  }
  function toQueryString(data2) {
    let isObjecty2 = (subject) => typeof subject === "object" && subject !== null;
    let buildQueryStringEntries = (data3, entries2 = {}, baseKey = "") => {
      Object.entries(data3).forEach(([iKey, iValue]) => {
        let key = baseKey === "" ? iKey : `${baseKey}[${iKey}]`;
        if (iValue === null) {
          entries2[key] = "";
        } else if (!isObjecty2(iValue)) {
          entries2[key] = encodeURIComponent(iValue).replaceAll("%20", "+").replaceAll("%2C", ",");
        } else {
          entries2 = { ...entries2, ...buildQueryStringEntries(iValue, entries2, key) };
        }
      });
      return entries2;
    };
    let entries = buildQueryStringEntries(data2);
    return Object.entries(entries).map(([key, value]) => `${key}=${value}`).join("&");
  }
  function fromQueryString(search, queryKey) {
    search = search.replace("?", "");
    if (search === "")
      return {};
    let insertDotNotatedValueIntoData = (key, value, data3) => {
      let [first2, second, ...rest] = key.split(".");
      if (!second)
        return data3[key] = value;
      if (data3[first2] === void 0) {
        data3[first2] = isNaN(second) ? {} : [];
      }
      insertDotNotatedValueIntoData([second, ...rest].join("."), value, data3[first2]);
    };
    let entries = search.split("&").map((i) => i.split("="));
    let data2 = /* @__PURE__ */ Object.create(null);
    entries.forEach(([key, value]) => {
      if (typeof value == "undefined")
        return;
      value = decodeURIComponent(value.replaceAll("+", "%20"));
      let decodedKey = decodeURIComponent(key);
      let shouldBeHandledAsArray = decodedKey.includes("[") && decodedKey.startsWith(queryKey);
      if (!shouldBeHandledAsArray) {
        data2[key] = value;
      } else {
        let dotNotatedKey = decodedKey.replaceAll("[", ".").replaceAll("]", "");
        insertDotNotatedValueIntoData(dotNotatedKey, value, data2);
      }
    });
    return data2;
  }

  // ../alpine/packages/morph/dist/module.esm.js
  function morph(from, toHtml, options) {
    monkeyPatchDomSetAttributeToAllowAtSymbols();
    let fromEl;
    let toEl;
    let key, lookahead, updating, updated, removing, removed, adding, added;
    function assignOptions(options2 = {}) {
      let defaultGetKey = (el) => el.getAttribute("key");
      let noop = () => {
      };
      updating = options2.updating || noop;
      updated = options2.updated || noop;
      removing = options2.removing || noop;
      removed = options2.removed || noop;
      adding = options2.adding || noop;
      added = options2.added || noop;
      key = options2.key || defaultGetKey;
      lookahead = options2.lookahead || false;
    }
    function patch(from2, to) {
      if (differentElementNamesTypesOrKeys(from2, to)) {
        return swapElements(from2, to);
      }
      let updateChildrenOnly = false;
      if (shouldSkip(updating, from2, to, () => updateChildrenOnly = true))
        return;
      if (from2.nodeType === 1 && window.Alpine) {
        window.Alpine.cloneNode(from2, to);
        if (from2._x_teleport && to._x_teleport) {
          patch(from2._x_teleport, to._x_teleport);
        }
      }
      if (textOrComment(to)) {
        patchNodeValue(from2, to);
        updated(from2, to);
        return;
      }
      if (!updateChildrenOnly) {
        patchAttributes(from2, to);
      }
      updated(from2, to);
      patchChildren(from2, to);
    }
    function differentElementNamesTypesOrKeys(from2, to) {
      return from2.nodeType != to.nodeType || from2.nodeName != to.nodeName || getKey(from2) != getKey(to);
    }
    function swapElements(from2, to) {
      if (shouldSkip(removing, from2))
        return;
      let toCloned = to.cloneNode(true);
      if (shouldSkip(adding, toCloned))
        return;
      from2.replaceWith(toCloned);
      removed(from2);
      added(toCloned);
    }
    function patchNodeValue(from2, to) {
      let value = to.nodeValue;
      if (from2.nodeValue !== value) {
        from2.nodeValue = value;
      }
    }
    function patchAttributes(from2, to) {
      if (from2._x_transitioning)
        return;
      if (from2._x_isShown && !to._x_isShown) {
        return;
      }
      if (!from2._x_isShown && to._x_isShown) {
        return;
      }
      let domAttributes = Array.from(from2.attributes);
      let toAttributes = Array.from(to.attributes);
      for (let i = domAttributes.length - 1; i >= 0; i--) {
        let name = domAttributes[i].name;
        if (!to.hasAttribute(name)) {
          from2.removeAttribute(name);
        }
      }
      for (let i = toAttributes.length - 1; i >= 0; i--) {
        let name = toAttributes[i].name;
        let value = toAttributes[i].value;
        if (from2.getAttribute(name) !== value) {
          from2.setAttribute(name, value);
        }
      }
    }
    function patchChildren(from2, to) {
      let fromKeys = keyToMap(from2.children);
      let fromKeyHoldovers = {};
      let currentTo = getFirstNode(to);
      let currentFrom = getFirstNode(from2);
      while (currentTo) {
        seedingMatchingId(currentTo, currentFrom);
        let toKey = getKey(currentTo);
        let fromKey = getKey(currentFrom);
        if (!currentFrom) {
          if (toKey && fromKeyHoldovers[toKey]) {
            let holdover = fromKeyHoldovers[toKey];
            from2.appendChild(holdover);
            currentFrom = holdover;
            fromKey = getKey(currentFrom);
          } else {
            if (!shouldSkip(adding, currentTo)) {
              let clone2 = currentTo.cloneNode(true);
              from2.appendChild(clone2);
              added(clone2);
            }
            currentTo = getNextSibling(to, currentTo);
            continue;
          }
        }
        let isIf = (node) => node && node.nodeType === 8 && node.textContent === "[if BLOCK]><![endif]";
        let isEnd = (node) => node && node.nodeType === 8 && node.textContent === "[if ENDBLOCK]><![endif]";
        if (isIf(currentTo) && isIf(currentFrom)) {
          let nestedIfCount = 0;
          let fromBlockStart = currentFrom;
          while (currentFrom) {
            let next = getNextSibling(from2, currentFrom);
            if (isIf(next)) {
              nestedIfCount++;
            } else if (isEnd(next) && nestedIfCount > 0) {
              nestedIfCount--;
            } else if (isEnd(next) && nestedIfCount === 0) {
              currentFrom = next;
              break;
            }
            currentFrom = next;
          }
          let fromBlockEnd = currentFrom;
          nestedIfCount = 0;
          let toBlockStart = currentTo;
          while (currentTo) {
            let next = getNextSibling(to, currentTo);
            if (isIf(next)) {
              nestedIfCount++;
            } else if (isEnd(next) && nestedIfCount > 0) {
              nestedIfCount--;
            } else if (isEnd(next) && nestedIfCount === 0) {
              currentTo = next;
              break;
            }
            currentTo = next;
          }
          let toBlockEnd = currentTo;
          let fromBlock = new Block(fromBlockStart, fromBlockEnd);
          let toBlock = new Block(toBlockStart, toBlockEnd);
          patchChildren(fromBlock, toBlock);
          continue;
        }
        if (currentFrom.nodeType === 1 && lookahead && !currentFrom.isEqualNode(currentTo)) {
          let nextToElementSibling = getNextSibling(to, currentTo);
          let found = false;
          while (!found && nextToElementSibling) {
            if (nextToElementSibling.nodeType === 1 && currentFrom.isEqualNode(nextToElementSibling)) {
              found = true;
              currentFrom = addNodeBefore(from2, currentTo, currentFrom);
              fromKey = getKey(currentFrom);
            }
            nextToElementSibling = getNextSibling(to, nextToElementSibling);
          }
        }
        if (toKey !== fromKey) {
          if (!toKey && fromKey) {
            fromKeyHoldovers[fromKey] = currentFrom;
            currentFrom = addNodeBefore(from2, currentTo, currentFrom);
            fromKeyHoldovers[fromKey].remove();
            currentFrom = getNextSibling(from2, currentFrom);
            currentTo = getNextSibling(to, currentTo);
            continue;
          }
          if (toKey && !fromKey) {
            if (fromKeys[toKey]) {
              currentFrom.replaceWith(fromKeys[toKey]);
              currentFrom = fromKeys[toKey];
              fromKey = getKey(currentFrom);
            }
          }
          if (toKey && fromKey) {
            let fromKeyNode = fromKeys[toKey];
            if (fromKeyNode) {
              fromKeyHoldovers[fromKey] = currentFrom;
              currentFrom.replaceWith(fromKeyNode);
              currentFrom = fromKeyNode;
              fromKey = getKey(currentFrom);
            } else {
              fromKeyHoldovers[fromKey] = currentFrom;
              currentFrom = addNodeBefore(from2, currentTo, currentFrom);
              fromKeyHoldovers[fromKey].remove();
              currentFrom = getNextSibling(from2, currentFrom);
              currentTo = getNextSibling(to, currentTo);
              continue;
            }
          }
        }
        let currentFromNext = currentFrom && getNextSibling(from2, currentFrom);
        patch(currentFrom, currentTo);
        currentTo = currentTo && getNextSibling(to, currentTo);
        currentFrom = currentFromNext;
      }
      let removals = [];
      while (currentFrom) {
        if (!shouldSkip(removing, currentFrom))
          removals.push(currentFrom);
        currentFrom = getNextSibling(from2, currentFrom);
      }
      while (removals.length) {
        let domForRemoval = removals.shift();
        domForRemoval.remove();
        removed(domForRemoval);
      }
    }
    function getKey(el) {
      return el && el.nodeType === 1 && key(el);
    }
    function keyToMap(els2) {
      let map = {};
      for (let el of els2) {
        let theKey = getKey(el);
        if (theKey) {
          map[theKey] = el;
        }
      }
      return map;
    }
    function addNodeBefore(parent, node, beforeMe) {
      if (!shouldSkip(adding, node)) {
        let clone2 = node.cloneNode(true);
        parent.insertBefore(clone2, beforeMe);
        added(clone2);
        return clone2;
      }
      return node;
    }
    assignOptions(options);
    fromEl = from;
    toEl = typeof toHtml === "string" ? createElement(toHtml) : toHtml;
    if (window.Alpine && window.Alpine.closestDataStack && !from._x_dataStack) {
      toEl._x_dataStack = window.Alpine.closestDataStack(from);
      toEl._x_dataStack && window.Alpine.cloneNode(from, toEl);
    }
    patch(from, toEl);
    fromEl = void 0;
    toEl = void 0;
    return from;
  }
  morph.step = () => {
  };
  morph.log = () => {
  };
  function shouldSkip(hook, ...args) {
    let skip = false;
    hook(...args, () => skip = true);
    return skip;
  }
  var patched = false;
  function createElement(html) {
    const template = document.createElement("template");
    template.innerHTML = html;
    return template.content.firstElementChild;
  }
  function textOrComment(el) {
    return el.nodeType === 3 || el.nodeType === 8;
  }
  var Block = class {
    constructor(start3, end) {
      this.startComment = start3;
      this.endComment = end;
    }
    get children() {
      let children = [];
      let currentNode = this.startComment.nextSibling;
      while (currentNode && currentNode !== this.endComment) {
        children.push(currentNode);
        currentNode = currentNode.nextSibling;
      }
      return children;
    }
    appendChild(child) {
      this.endComment.before(child);
    }
    get firstChild() {
      let first2 = this.startComment.nextSibling;
      if (first2 === this.endComment)
        return;
      return first2;
    }
    nextNode(reference) {
      let next = reference.nextSibling;
      if (next === this.endComment)
        return;
      return next;
    }
    insertBefore(newNode, reference) {
      reference.before(newNode);
      return newNode;
    }
  };
  function getFirstNode(parent) {
    return parent.firstChild;
  }
  function getNextSibling(parent, reference) {
    let next;
    if (parent instanceof Block) {
      next = parent.nextNode(reference);
    } else {
      next = reference.nextSibling;
    }
    return next;
  }
  function monkeyPatchDomSetAttributeToAllowAtSymbols() {
    if (patched)
      return;
    patched = true;
    let original = Element.prototype.setAttribute;
    let hostDiv = document.createElement("div");
    Element.prototype.setAttribute = function newSetAttribute(name, value) {
      if (!name.includes("@")) {
        return original.call(this, name, value);
      }
      hostDiv.innerHTML = `<span ${name}="${value}"></span>`;
      let attr = hostDiv.firstElementChild.getAttributeNode(name);
      hostDiv.firstElementChild.removeAttributeNode(attr);
      this.setAttributeNode(attr);
    };
  }
  function seedingMatchingId(to, from) {
    let fromId = from && from._x_bindings && from._x_bindings.id;
    if (!fromId)
      return;
    if (!to.setAttribute)
      return;
    to.setAttribute("id", fromId);
    to.id = fromId;
  }
  function src_default8(Alpine3) {
    Alpine3.morph = morph;
  }
  var module_default8 = src_default8;

  // ../alpine/packages/mask/dist/module.esm.js
  function src_default9(Alpine3) {
    Alpine3.directive("mask", (el, { value, expression }, { effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
      let templateFn = () => expression;
      let lastInputValue = "";
      queueMicrotask(() => {
        if (["function", "dynamic"].includes(value)) {
          let evaluator = evaluateLater2(expression);
          effect3(() => {
            templateFn = (input) => {
              let result;
              Alpine3.dontAutoEvaluateFunctions(() => {
                evaluator((value2) => {
                  result = typeof value2 === "function" ? value2(input) : value2;
                }, { scope: {
                  "$input": input,
                  "$money": formatMoney.bind({ el })
                } });
              });
              return result;
            };
            processInputValue(el, false);
          });
        } else {
          processInputValue(el, false);
        }
        if (el._x_model) {
          if (el._x_model.get() === el.value)
            return;
          if (el._x_model.get() === null && el.value === "")
            return;
          el._x_model.set(el.value);
        }
      });
      const controller = new AbortController();
      cleanup2(() => {
        controller.abort();
      });
      el.addEventListener("input", () => processInputValue(el), {
        signal: controller.signal,
        capture: true
      });
      el.addEventListener("blur", () => processInputValue(el, false), { signal: controller.signal });
      function processInputValue(el2, shouldRestoreCursor = true) {
        let input = el2.value;
        let template = templateFn(input);
        if (!template || template === "false")
          return false;
        if (lastInputValue.length - el2.value.length === 1) {
          return lastInputValue = el2.value;
        }
        let setInput = () => {
          lastInputValue = el2.value = formatInput(input, template);
        };
        if (shouldRestoreCursor) {
          restoreCursorPosition(el2, template, () => {
            setInput();
          });
        } else {
          setInput();
        }
      }
      function formatInput(input, template) {
        if (input === "")
          return "";
        let strippedDownInput = stripDown(template, input);
        let rebuiltInput = buildUp(template, strippedDownInput);
        return rebuiltInput;
      }
    }).before("model");
  }
  function restoreCursorPosition(el, template, callback) {
    let cursorPosition = el.selectionStart;
    let unformattedValue = el.value;
    callback();
    let beforeLeftOfCursorBeforeFormatting = unformattedValue.slice(0, cursorPosition);
    let newPosition = buildUp(template, stripDown(template, beforeLeftOfCursorBeforeFormatting)).length;
    el.setSelectionRange(newPosition, newPosition);
  }
  function stripDown(template, input) {
    let inputToBeStripped = input;
    let output = "";
    let regexes = {
      "9": /[0-9]/,
      "a": /[a-zA-Z]/,
      "*": /[a-zA-Z0-9]/
    };
    let wildcardTemplate = "";
    for (let i = 0; i < template.length; i++) {
      if (["9", "a", "*"].includes(template[i])) {
        wildcardTemplate += template[i];
        continue;
      }
      for (let j = 0; j < inputToBeStripped.length; j++) {
        if (inputToBeStripped[j] === template[i]) {
          inputToBeStripped = inputToBeStripped.slice(0, j) + inputToBeStripped.slice(j + 1);
          break;
        }
      }
    }
    for (let i = 0; i < wildcardTemplate.length; i++) {
      let found = false;
      for (let j = 0; j < inputToBeStripped.length; j++) {
        if (regexes[wildcardTemplate[i]].test(inputToBeStripped[j])) {
          output += inputToBeStripped[j];
          inputToBeStripped = inputToBeStripped.slice(0, j) + inputToBeStripped.slice(j + 1);
          found = true;
          break;
        }
      }
      if (!found)
        break;
    }
    return output;
  }
  function buildUp(template, input) {
    let clean = Array.from(input);
    let output = "";
    for (let i = 0; i < template.length; i++) {
      if (!["9", "a", "*"].includes(template[i])) {
        output += template[i];
        continue;
      }
      if (clean.length === 0)
        break;
      output += clean.shift();
    }
    return output;
  }
  function formatMoney(input, delimiter = ".", thousands, precision = 2) {
    if (input === "-")
      return "-";
    if (/^\D+$/.test(input))
      return "9";
    if (thousands === null || thousands === void 0) {
      thousands = delimiter === "," ? "." : ",";
    }
    let addThousands = (input2, thousands2) => {
      let output = "";
      let counter = 0;
      for (let i = input2.length - 1; i >= 0; i--) {
        if (input2[i] === thousands2)
          continue;
        if (counter === 3) {
          output = input2[i] + thousands2 + output;
          counter = 0;
        } else {
          output = input2[i] + output;
        }
        counter++;
      }
      return output;
    };
    let minus = input.startsWith("-") ? "-" : "";
    let strippedInput = input.replaceAll(new RegExp(`[^0-9\\${delimiter}]`, "g"), "");
    let template = Array.from({ length: strippedInput.split(delimiter)[0].length }).fill("9").join("");
    template = `${minus}${addThousands(template, thousands)}`;
    if (precision > 0 && input.includes(delimiter))
      template += `${delimiter}` + "9".repeat(precision);
    queueMicrotask(() => {
      if (this.el.value.endsWith(delimiter))
        return;
      if (this.el.value[this.el.selectionStart - 1] === delimiter) {
        this.el.setSelectionRange(this.el.selectionStart - 1, this.el.selectionStart - 1);
      }
    });
    return template;
  }
  var module_default9 = src_default9;

  // js/lifecycle.js
  function start2() {
    setTimeout(() => ensureLivewireScriptIsntMisplaced());
    dispatch(document, "livewire:init");
    dispatch(document, "livewire:initializing");
    module_default.plugin(module_default8);
    module_default.plugin(history2);
    module_default.plugin(module_default5);
    module_default.plugin(module_default6);
    module_default.plugin(module_default2);
    module_default.plugin(module_default7);
    module_default.plugin(module_default3);
    module_default.plugin(module_default4);
    module_default.plugin(navigate_default);
    module_default.plugin(module_default9);
    module_default.addRootSelector(() => "[wire\\:id]");
    module_default.onAttributesAdded((el, attributes) => {
      if (!Array.from(attributes).some((attribute) => matchesForLivewireDirective(attribute.name)))
        return;
      let component = closestComponent(el, false);
      if (!component)
        return;
      attributes.forEach((attribute) => {
        if (!matchesForLivewireDirective(attribute.name))
          return;
        let directive3 = extractDirective(el, attribute.name);
        trigger2("directive.init", { el, component, directive: directive3, cleanup: (callback) => {
          module_default.onAttributeRemoved(el, directive3.raw, callback);
        } });
      });
    });
    module_default.interceptInit(module_default.skipDuringClone((el) => {
      if (!Array.from(el.attributes).some((attribute) => matchesForLivewireDirective(attribute.name)))
        return;
      if (el.hasAttribute("wire:id")) {
        let component2 = initComponent(el);
        module_default.onAttributeRemoved(el, "wire:id", () => {
          destroyComponent(component2.id);
        });
      }
      let directives2 = Array.from(el.getAttributeNames()).filter((name) => matchesForLivewireDirective(name)).map((name) => extractDirective(el, name));
      directives2.forEach((directive3) => {
        trigger2("directive.global.init", { el, directive: directive3, cleanup: (callback) => {
          module_default.onAttributeRemoved(el, directive3.raw, callback);
        } });
      });
      let component = closestComponent(el, false);
      if (component) {
        trigger2("element.init", { el, component });
        directives2.forEach((directive3) => {
          trigger2("directive.init", { el, component, directive: directive3, cleanup: (callback) => {
            module_default.onAttributeRemoved(el, directive3.raw, callback);
          } });
        });
      }
    }));
    module_default.start();
    setTimeout(() => window.Livewire.initialRenderIsFinished = true);
    dispatch(document, "livewire:initialized");
  }
  function ensureLivewireScriptIsntMisplaced() {
    let el = document.querySelector("script[data-update-uri][data-csrf]");
    if (!el)
      return;
    let livewireEl = el.closest("[wire\\:id]");
    if (livewireEl) {
      console.warn("Livewire: missing closing tags found. Ensure your template elements contain matching closing tags.", livewireEl);
    }
  }

  // js/features/supportListeners.js
  on2("effect", ({ component, effects }) => {
    registerListeners(component, effects.listeners || []);
  });
  function registerListeners(component, listeners2) {
    listeners2.forEach((name) => {
      let handler4 = (e) => {
        if (e.__livewire)
          e.__livewire.receivedBy.push(component);
        component.$wire.call("__dispatch", name, e.detail || {});
      };
      window.addEventListener(name, handler4);
      component.addCleanup(() => window.removeEventListener(name, handler4));
      component.el.addEventListener(name, (e) => {
        if (!e.__livewire)
          return;
        if (e.bubbles)
          return;
        if (e.__livewire)
          e.__livewire.receivedBy.push(component.id);
        component.$wire.call("__dispatch", name, e.detail || {});
      });
    });
  }

  // js/features/supportScriptsAndAssets.js
  var executedScripts = /* @__PURE__ */ new WeakMap();
  var executedAssets = /* @__PURE__ */ new Set();
  on2("payload.intercept", async ({ assets }) => {
    if (!assets)
      return;
    for (let [key, asset] of Object.entries(assets)) {
      await onlyIfAssetsHaventBeenLoadedAlreadyOnThisPage(key, async () => {
        await addAssetsToHeadTagOfPage(asset);
      });
    }
  });
  on2("component.init", ({ component }) => {
    let assets = component.snapshot.memo.assets;
    if (assets) {
      assets.forEach((key) => {
        if (executedAssets.has(key))
          return;
        executedAssets.add(key);
      });
    }
  });
  on2("effect", ({ component, effects }) => {
    let scripts = effects.scripts;
    if (scripts) {
      Object.entries(scripts).forEach(([key, content]) => {
        onlyIfScriptHasntBeenRunAlreadyForThisComponent(component, key, () => {
          let scriptContent = extractScriptTagContent(content);
          module_default.dontAutoEvaluateFunctions(() => {
            module_default.evaluate(component.el, scriptContent, { "$wire": component.$wire });
          });
        });
      });
    }
  });
  function onlyIfScriptHasntBeenRunAlreadyForThisComponent(component, key, callback) {
    if (executedScripts.has(component)) {
      let alreadyRunKeys2 = executedScripts.get(component);
      if (alreadyRunKeys2.includes(key))
        return;
    }
    callback();
    if (!executedScripts.has(component))
      executedScripts.set(component, []);
    let alreadyRunKeys = executedScripts.get(component);
    alreadyRunKeys.push(key);
    executedScripts.set(component, alreadyRunKeys);
  }
  function extractScriptTagContent(rawHtml) {
    let scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
    let matches2 = scriptRegex.exec(rawHtml);
    let innards = matches2 && matches2[1] ? matches2[1].trim() : "";
    return innards;
  }
  async function onlyIfAssetsHaventBeenLoadedAlreadyOnThisPage(key, callback) {
    if (executedAssets.has(key))
      return;
    await callback();
    executedAssets.add(key);
  }
  async function addAssetsToHeadTagOfPage(rawHtml) {
    let newDocument = new DOMParser().parseFromString(rawHtml, "text/html");
    let newHead = document.adoptNode(newDocument.head);
    for (let child of newHead.children) {
      try {
        await runAssetSynchronously(child);
      } catch (error2) {
      }
    }
  }
  async function runAssetSynchronously(child) {
    return new Promise((resolve, reject) => {
      if (isScript2(child)) {
        let script = cloneScriptTag2(child);
        if (script.src) {
          script.onload = () => resolve();
          script.onerror = () => reject();
        } else {
          resolve();
        }
        document.head.appendChild(script);
      } else {
        document.head.appendChild(child);
        resolve();
      }
    });
  }
  function isScript2(el) {
    return el.tagName.toLowerCase() === "script";
  }
  function cloneScriptTag2(el) {
    let script = document.createElement("script");
    script.textContent = el.textContent;
    script.async = el.async;
    for (let attr of el.attributes) {
      script.setAttribute(attr.name, attr.value);
    }
    return script;
  }

  // js/features/supportJsEvaluation.js
  on2("effect", ({ component, effects }) => {
    let js = effects.js;
    let xjs = effects.xjs;
    if (js) {
      Object.entries(js).forEach(([method, body]) => {
        overrideMethod(component, method, () => {
          module_default.evaluate(component.el, body);
        });
      });
    }
    if (xjs) {
      xjs.forEach((expression) => {
        module_default.evaluate(component.el, expression);
      });
    }
  });

  // js/morph.js
  function morph2(component, el, html) {
    let wrapperTag = el.parentElement ? el.parentElement.tagName.toLowerCase() : "div";
    let wrapper = document.createElement(wrapperTag);
    wrapper.innerHTML = html;
    let parentComponent;
    try {
      parentComponent = closestComponent(el.parentElement);
    } catch (e) {
    }
    parentComponent && (wrapper.__livewire = parentComponent);
    let to = wrapper.firstElementChild;
    to.__livewire = component;
    trigger2("morph", { el, toEl: to, component });
    module_default.morph(el, to, {
      updating: (el2, toEl, childrenOnly, skip) => {
        if (isntElement(el2))
          return;
        trigger2("morph.updating", { el: el2, toEl, component, skip, childrenOnly });
        if (el2.__livewire_replace === true)
          el2.innerHTML = toEl.innerHTML;
        if (el2.__livewire_replace_self === true) {
          el2.outerHTML = toEl.outerHTML;
          return skip();
        }
        if (el2.__livewire_ignore === true)
          return skip();
        if (el2.__livewire_ignore_self === true)
          childrenOnly();
        if (isComponentRootEl(el2) && el2.getAttribute("wire:id") !== component.id)
          return skip();
        if (isComponentRootEl(el2))
          toEl.__livewire = component;
      },
      updated: (el2) => {
        if (isntElement(el2))
          return;
        trigger2("morph.updated", { el: el2, component });
      },
      removing: (el2, skip) => {
        if (isntElement(el2))
          return;
        trigger2("morph.removing", { el: el2, component, skip });
      },
      removed: (el2) => {
        if (isntElement(el2))
          return;
        trigger2("morph.removed", { el: el2, component });
      },
      adding: (el2) => {
        trigger2("morph.adding", { el: el2, component });
      },
      added: (el2) => {
        if (isntElement(el2))
          return;
        const closestComponentId = closestComponent(el2).id;
        trigger2("morph.added", { el: el2 });
      },
      key: (el2) => {
        if (isntElement(el2))
          return;
        return el2.hasAttribute(`wire:key`) ? el2.getAttribute(`wire:key`) : el2.hasAttribute(`wire:id`) ? el2.getAttribute(`wire:id`) : el2.id;
      },
      lookahead: false
    });
    trigger2("morphed", { el, component });
  }
  function isntElement(el) {
    return typeof el.hasAttribute !== "function";
  }
  function isComponentRootEl(el) {
    return el.hasAttribute("wire:id");
  }

  // js/features/supportMorphDom.js
  on2("effect", ({ component, effects }) => {
    let html = effects.html;
    if (!html)
      return;
    queueMicrotask(() => {
      queueMicrotask(() => {
        morph2(component, component.el, html);
      });
    });
  });

  // js/features/supportDispatches.js
  on2("effect", ({ component, effects }) => {
    dispatchEvents(component, effects.dispatches || []);
  });
  function dispatchEvents(component, dispatches) {
    dispatches.forEach(({ name, params = {}, self = false, to }) => {
      if (self)
        dispatchSelf(component, name, params);
      else if (to)
        dispatchTo(to, name, params);
      else
        dispatch3(component, name, params);
    });
  }

  // js/features/supportDisablingFormsDuringRequest.js
  var cleanups = new Bag();
  on2("directive.init", ({ el, directive: directive3, cleanup: cleanup2, component }) => setTimeout(() => {
    if (directive3.value !== "submit")
      return;
    el.addEventListener("submit", () => {
      let componentId = directive3.expression.startsWith("$parent") ? component.parent.id : component.id;
      let cleanup3 = disableForm(el);
      cleanups.add(componentId, cleanup3);
    });
  }));
  on2("commit", ({ component, respond }) => {
    respond(() => {
      cleanups.each(component.id, (i) => i());
      cleanups.remove(component.id);
    });
  });
  function disableForm(formEl) {
    let undos = [];
    module_default.walk(formEl, (el, skip) => {
      if (!formEl.contains(el))
        return;
      if (el.hasAttribute("wire:ignore"))
        return skip();
      if (shouldMarkDisabled(el)) {
        undos.push(markDisabled(el));
      } else if (shouldMarkReadOnly(el)) {
        undos.push(markReadOnly(el));
      }
    });
    return () => {
      while (undos.length > 0)
        undos.shift()();
    };
  }
  function shouldMarkDisabled(el) {
    let tag = el.tagName.toLowerCase();
    if (tag === "select")
      return true;
    if (tag === "button" && el.type === "submit")
      return true;
    if (tag === "input" && (el.type === "checkbox" || el.type === "radio"))
      return true;
    return false;
  }
  function shouldMarkReadOnly(el) {
    return ["input", "textarea"].includes(el.tagName.toLowerCase());
  }
  function markDisabled(el) {
    let undo = el.disabled ? () => {
    } : () => el.disabled = false;
    el.disabled = true;
    return undo;
  }
  function markReadOnly(el) {
    let undo = el.readOnly ? () => {
    } : () => el.readOnly = false;
    el.readOnly = true;
    return undo;
  }

  // js/features/supportPropsAndModelables.js
  on2("commit.pooling", ({ commits }) => {
    commits.forEach((commit) => {
      let component = commit.component;
      getDeepChildrenWithBindings(component, (child) => {
        child.$wire.$commit();
      });
    });
  });
  on2("commit.pooled", ({ pools }) => {
    let commits = getPooledCommits(pools);
    commits.forEach((commit) => {
      let component = commit.component;
      getDeepChildrenWithBindings(component, (child) => {
        colocateCommitsByComponent(pools, component, child);
      });
    });
  });
  function getPooledCommits(pools) {
    let commits = [];
    pools.forEach((pool) => {
      pool.commits.forEach((commit) => {
        commits.push(commit);
      });
    });
    return commits;
  }
  function colocateCommitsByComponent(pools, component, foreignComponent) {
    let pool = findPoolWithComponent(pools, component);
    let foreignPool = findPoolWithComponent(pools, foreignComponent);
    let foreignCommit = foreignPool.findCommitByComponent(foreignComponent);
    foreignPool.delete(foreignCommit);
    pool.add(foreignCommit);
    pools.forEach((pool2) => {
      if (pool2.empty())
        pools.delete(pool2);
    });
  }
  function findPoolWithComponent(pools, component) {
    for (let [idx, pool] of pools.entries()) {
      if (pool.hasCommitFor(component))
        return pool;
    }
  }
  function getDeepChildrenWithBindings(component, callback) {
    getDeepChildren(component, (child) => {
      if (hasReactiveProps(child) || hasWireModelableBindings(child)) {
        callback(child);
      }
    });
  }
  function hasReactiveProps(component) {
    let meta = component.snapshot.memo;
    let props = meta.props;
    return !!props;
  }
  function hasWireModelableBindings(component) {
    let meta = component.snapshot.memo;
    let bindings = meta.bindings;
    return !!bindings;
  }
  function getDeepChildren(component, callback) {
    component.children.forEach((child) => {
      callback(child);
      getDeepChildren(child, callback);
    });
  }

  // js/features/supportFileDownloads.js
  on2("commit", ({ succeed }) => {
    succeed(({ effects }) => {
      let download = effects.download;
      if (!download)
        return;
      let urlObject = window.webkitURL || window.URL;
      let url = urlObject.createObjectURL(base64toBlob(download.content, download.contentType));
      let invisibleLink = document.createElement("a");
      invisibleLink.style.display = "none";
      invisibleLink.href = url;
      invisibleLink.download = download.name;
      document.body.appendChild(invisibleLink);
      invisibleLink.click();
      setTimeout(function() {
        urlObject.revokeObjectURL(url);
      }, 0);
    });
  });
  function base64toBlob(b64Data, contentType = "", sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    if (contentType === null)
      contentType = "";
    for (let offset2 = 0; offset2 < byteCharacters.length; offset2 += sliceSize) {
      let slice = byteCharacters.slice(offset2, offset2 + sliceSize);
      let byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      let byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, { type: contentType });
  }

  // js/features/supportLazyLoading.js
  var componentsThatWantToBeBundled = /* @__PURE__ */ new WeakSet();
  var componentsThatAreLazy = /* @__PURE__ */ new WeakSet();
  on2("component.init", ({ component }) => {
    let memo = component.snapshot.memo;
    if (memo.lazyLoaded === void 0)
      return;
    componentsThatAreLazy.add(component);
    if (memo.lazyIsolated !== void 0 && memo.lazyIsolated === false) {
      componentsThatWantToBeBundled.add(component);
    }
  });
  on2("commit.pooling", ({ commits }) => {
    commits.forEach((commit) => {
      if (!componentsThatAreLazy.has(commit.component))
        return;
      if (componentsThatWantToBeBundled.has(commit.component)) {
        commit.isolate = false;
        componentsThatWantToBeBundled.delete(commit.component);
      } else {
        commit.isolate = true;
      }
      componentsThatAreLazy.delete(commit.component);
    });
  });

  // js/features/supportQueryString.js
  on2("effect", ({ component, effects, cleanup: cleanup2 }) => {
    let queryString = effects["url"];
    if (!queryString)
      return;
    Object.entries(queryString).forEach(([key, value]) => {
      let { name, as, use, alwaysShow, except } = normalizeQueryStringEntry(key, value);
      if (!as)
        as = name;
      let initialValue = [false, null, void 0].includes(except) ? dataGet(component.ephemeral, name) : except;
      let { replace: replace2, push: push2, pop } = track2(as, initialValue, alwaysShow, except);
      if (use === "replace") {
        let effectReference = module_default.effect(() => {
          replace2(dataGet(component.reactive, name));
        });
        cleanup2(() => module_default.release(effectReference));
      } else if (use === "push") {
        let forgetCommitHandler = on2("commit", ({ component: commitComponent, succeed }) => {
          if (component !== commitComponent)
            return;
          let beforeValue = dataGet(component.canonical, name);
          succeed(() => {
            let afterValue = dataGet(component.canonical, name);
            if (JSON.stringify(beforeValue) === JSON.stringify(afterValue))
              return;
            push2(afterValue);
          });
        });
        let forgetPopHandler = pop(async (newValue) => {
          await component.$wire.set(name, newValue);
          document.querySelectorAll("input").forEach((el) => {
            el._x_forceModelUpdate && el._x_forceModelUpdate(el._x_model.get());
          });
        });
        cleanup2(() => {
          forgetCommitHandler();
          forgetPopHandler();
        });
      }
    });
  });
  function normalizeQueryStringEntry(key, value) {
    let defaults = { use: "replace", alwaysShow: false };
    if (typeof value === "string") {
      return { ...defaults, name: value, as: value };
    } else {
      let fullerDefaults = { ...defaults, name: key, as: key };
      return { ...fullerDefaults, ...value };
    }
  }

  // js/features/supportLaravelEcho.js
  on2("request", ({ options }) => {
    if (window.Echo) {
      options.headers["X-Socket-ID"] = window.Echo.socketId();
    }
  });
  on2("effect", ({ component, effects }) => {
    let listeners2 = effects.listeners || [];
    listeners2.forEach((event) => {
      if (event.startsWith("echo")) {
        if (typeof window.Echo === "undefined") {
          console.warn("Laravel Echo cannot be found");
          return;
        }
        let event_parts = event.split(/(echo:|echo-)|:|,/);
        if (event_parts[1] == "echo:") {
          event_parts.splice(2, 0, "channel", void 0);
        }
        if (event_parts[2] == "notification") {
          event_parts.push(void 0, void 0);
        }
        let [
          s1,
          signature,
          channel_type,
          s2,
          channel,
          s3,
          event_name
        ] = event_parts;
        if (["channel", "private", "encryptedPrivate"].includes(channel_type)) {
          let handler4 = (e) => dispatchSelf(component, event, [e]);
          window.Echo[channel_type](channel).listen(event_name, handler4);
          component.addCleanup(() => {
            window.Echo[channel_type](channel).stopListening(event_name, handler4);
          });
        } else if (channel_type == "presence") {
          if (["here", "joining", "leaving"].includes(event_name)) {
            window.Echo.join(channel)[event_name]((e) => {
              dispatchSelf(component, event, [e]);
            });
          } else {
            let handler4 = (e) => dispatchSelf(component, event, [e]);
            window.Echo.join(channel).listen(event_name, handler4);
            component.addCleanup(() => {
              window.Echo.leaveChannel(channel);
            });
          }
        } else if (channel_type == "notification") {
          window.Echo.private(channel).notification((notification) => {
            dispatchSelf(component, event, [notification]);
          });
        } else {
          console.warn("Echo channel type not yet supported");
        }
      }
    });
  });

  // js/features/supportIsolating.js
  var componentsThatAreIsolated = /* @__PURE__ */ new WeakSet();
  on2("component.init", ({ component }) => {
    let memo = component.snapshot.memo;
    if (memo.isolate !== true)
      return;
    componentsThatAreIsolated.add(component);
  });
  on2("commit.pooling", ({ commits }) => {
    commits.forEach((commit) => {
      if (!componentsThatAreIsolated.has(commit.component))
        return;
      commit.isolate = true;
    });
  });

  // js/features/supportNavigate.js
  shouldHideProgressBar() && Alpine.navigate.disableProgressBar();
  document.addEventListener("alpine:navigate", (e) => forwardEvent("livewire:navigate", e));
  document.addEventListener("alpine:navigating", (e) => forwardEvent("livewire:navigating", e));
  document.addEventListener("alpine:navigated", (e) => forwardEvent("livewire:navigated", e));
  function forwardEvent(name, original) {
    let event = new CustomEvent(name, { cancelable: true, bubbles: true, detail: original.detail });
    document.dispatchEvent(event);
    if (event.defaultPrevented) {
      original.preventDefault();
    }
  }
  function shouldRedirectUsingNavigateOr(effects, url, or) {
    let forceNavigate = effects.redirectUsingNavigate;
    if (forceNavigate) {
      Alpine.navigate(url);
    } else {
      or();
    }
  }
  function shouldHideProgressBar() {
    if (!!document.querySelector("[data-no-progress-bar]"))
      return true;
    if (window.livewireScriptConfig && window.livewireScriptConfig.progressBar === false)
      return true;
    return false;
  }

  // js/features/supportRedirects.js
  on2("effect", ({ effects }) => {
    if (!effects["redirect"])
      return;
    let url = effects["redirect"];
    shouldRedirectUsingNavigateOr(effects, url, () => {
      window.location.href = url;
    });
  });

  // js/directives/wire-transition.js
  on2("morph.added", ({ el }) => {
    el.__addedByMorph = true;
  });
  directive2("transition", ({ el, directive: directive3, component, cleanup: cleanup2 }) => {
    let visibility = module_default.reactive({ state: el.__addedByMorph ? false : true });
    module_default.bind(el, {
      [directive3.rawName.replace("wire:", "x-")]: "",
      "x-show"() {
        return visibility.state;
      }
    });
    el.__addedByMorph && setTimeout(() => visibility.state = true);
    let cleanups2 = [];
    cleanups2.push(on2("morph.removing", ({ el: el2, skip }) => {
      skip();
      el2.addEventListener("transitionend", () => {
        el2.remove();
      });
      visibility.state = false;
      cleanups2.push(on2("morph", ({ component: morphComponent }) => {
        if (morphComponent !== component)
          return;
        el2.remove();
        cleanups2.forEach((i) => i());
      }));
    }));
    cleanup2(() => cleanups2.forEach((i) => i()));
  });

  // js/debounce.js
  var callbacksByComponent = new WeakBag();
  function callAndClearComponentDebounces(component, callback) {
    callbacksByComponent.each(component, (callbackRegister) => {
      callbackRegister.callback();
      callbackRegister.callback = () => {
      };
    });
    callback();
  }

  // js/directives/wire-wildcard.js
  on2("directive.init", ({ el, directive: directive3, cleanup: cleanup2, component }) => {
    if (["snapshot", "effects", "model", "init", "loading", "poll", "ignore", "id", "data", "key", "target", "dirty"].includes(directive3.value))
      return;
    if (customDirectiveHasBeenRegistered(directive3.value))
      return;
    let attribute = directive3.rawName.replace("wire:", "x-on:");
    if (directive3.value === "submit" && !directive3.modifiers.includes("prevent")) {
      attribute = attribute + ".prevent";
    }
    let cleanupBinding = module_default.bind(el, {
      [attribute](e) {
        let execute = () => {
          callAndClearComponentDebounces(component, () => {
            module_default.evaluate(el, "$wire." + directive3.expression, { scope: { $event: e } });
          });
        };
        if (el.__livewire_confirm) {
          el.__livewire_confirm(() => {
            execute();
          }, () => {
            e.stopImmediatePropagation();
          });
        } else {
          execute();
        }
      }
    });
    cleanup2(cleanupBinding);
  });

  // js/directives/wire-navigate.js
  module_default.addInitSelector(() => `[wire\\:navigate]`);
  module_default.addInitSelector(() => `[wire\\:navigate\\.hover]`);
  module_default.interceptInit(module_default.skipDuringClone((el) => {
    if (el.hasAttribute("wire:navigate")) {
      module_default.bind(el, { ["x-navigate"]: true });
    } else if (el.hasAttribute("wire:navigate.hover")) {
      module_default.bind(el, { ["x-navigate.hover"]: true });
    }
  }));
  document.addEventListener("alpine:navigating", () => {
    Livewire.all().forEach((component) => {
      component.inscribeSnapshotAndEffectsOnElement();
    });
  });

  // js/directives/wire-confirm.js
  directive2("confirm", ({ el, directive: directive3 }) => {
    let message = directive3.expression;
    let shouldPrompt = directive3.modifiers.includes("prompt");
    message = message.replaceAll("\\n", "\n");
    if (message === "")
      message = "Are you sure?";
    el.__livewire_confirm = (action, instead) => {
      if (shouldPrompt) {
        let [question, expected] = message.split("|");
        if (!expected) {
          console.warn("Livewire: Must provide expectation with wire:confirm.prompt");
        } else {
          let input = prompt(question);
          if (input === expected) {
            action();
          } else {
            instead();
          }
        }
      } else {
        if (confirm(message))
          action();
        else
          instead();
      }
    };
  });

  // js/directives/wire-current.js
  module_default.addInitSelector(() => `[wire\\:current]`);
  var onPageChanges = /* @__PURE__ */ new Map();
  document.addEventListener("livewire:navigated", () => {
    onPageChanges.forEach((i) => i(new URL(window.location.href)));
  });
  globalDirective("current", ({ el, directive: directive3, cleanup: cleanup2 }) => {
    let expression = directive3.expression;
    let options = {
      exact: directive3.modifiers.includes("exact"),
      strict: directive3.modifiers.includes("strict")
    };
    if (expression.startsWith("#"))
      return;
    if (!el.hasAttribute("href"))
      return;
    let href = el.getAttribute("href");
    let hrefUrl = new URL(href, window.location.href);
    let classes = expression.split(" ").filter(String);
    let refreshCurrent = (url) => {
      if (pathMatches(hrefUrl, url, options)) {
        el.classList.add(...classes);
      } else {
        el.classList.remove(...classes);
      }
    };
    refreshCurrent(new URL(window.location.href));
    onPageChanges.set(el, refreshCurrent);
    cleanup2(() => onPageChanges.delete(el));
  });
  function pathMatches(hrefUrl, actualUrl, options) {
    if (hrefUrl.hostname !== actualUrl.hostname)
      return false;
    let hrefPath = options.strict ? hrefUrl.pathname : hrefUrl.pathname.replace(/\/+$/, "");
    let actualPath = options.strict ? actualUrl.pathname : actualUrl.pathname.replace(/\/+$/, "");
    if (options.exact) {
      return hrefPath === actualPath;
    }
    let hrefPathSegments = hrefPath.split("/");
    let actualPathSegments = actualPath.split("/");
    for (let i = 0; i < hrefPathSegments.length; i++) {
      if (hrefPathSegments[i] !== actualPathSegments[i])
        return false;
    }
    return true;
  }

  // js/directives/shared.js
  function toggleBooleanStateDirective(el, directive3, isTruthy, cachedDisplay = null) {
    isTruthy = directive3.modifiers.includes("remove") ? !isTruthy : isTruthy;
    if (directive3.modifiers.includes("class")) {
      let classes = directive3.expression.split(" ").filter(String);
      if (isTruthy) {
        el.classList.add(...classes);
      } else {
        el.classList.remove(...classes);
      }
    } else if (directive3.modifiers.includes("attr")) {
      if (isTruthy) {
        el.setAttribute(directive3.expression, true);
      } else {
        el.removeAttribute(directive3.expression);
      }
    } else {
      let cache = cachedDisplay ?? window.getComputedStyle(el, null).getPropertyValue("display");
      let display = ["inline", "block", "table", "flex", "grid", "inline-flex"].filter((i) => directive3.modifiers.includes(i))[0] || "inline-block";
      display = directive3.modifiers.includes("remove") && !isTruthy ? cache : display;
      el.style.display = isTruthy ? display : "none";
    }
  }

  // js/directives/wire-offline.js
  var offlineHandlers = /* @__PURE__ */ new Set();
  var onlineHandlers = /* @__PURE__ */ new Set();
  window.addEventListener("offline", () => offlineHandlers.forEach((i) => i()));
  window.addEventListener("online", () => onlineHandlers.forEach((i) => i()));
  directive2("offline", ({ el, directive: directive3, cleanup: cleanup2 }) => {
    let setOffline = () => toggleBooleanStateDirective(el, directive3, true);
    let setOnline = () => toggleBooleanStateDirective(el, directive3, false);
    offlineHandlers.add(setOffline);
    onlineHandlers.add(setOnline);
    cleanup2(() => {
      offlineHandlers.delete(setOffline);
      onlineHandlers.delete(setOnline);
    });
  });

  // js/directives/wire-loading.js
  directive2("loading", ({ el, directive: directive3, component, cleanup: cleanup2 }) => {
    let { targets, inverted } = getTargets(el);
    let [delay3, abortDelay] = applyDelay(directive3);
    let cleanupA = whenTargetsArePartOfRequest(component, targets, inverted, [
      () => delay3(() => toggleBooleanStateDirective(el, directive3, true)),
      () => abortDelay(() => toggleBooleanStateDirective(el, directive3, false))
    ]);
    let cleanupB = whenTargetsArePartOfFileUpload(component, targets, [
      () => delay3(() => toggleBooleanStateDirective(el, directive3, true)),
      () => abortDelay(() => toggleBooleanStateDirective(el, directive3, false))
    ]);
    cleanup2(() => {
      cleanupA();
      cleanupB();
    });
  });
  function applyDelay(directive3) {
    if (!directive3.modifiers.includes("delay") || directive3.modifiers.includes("none"))
      return [(i) => i(), (i) => i()];
    let duration = 200;
    let delayModifiers = {
      "shortest": 50,
      "shorter": 100,
      "short": 150,
      "default": 200,
      "long": 300,
      "longer": 500,
      "longest": 1e3
    };
    Object.keys(delayModifiers).some((key) => {
      if (directive3.modifiers.includes(key)) {
        duration = delayModifiers[key];
        return true;
      }
    });
    let timeout;
    let started2 = false;
    return [
      (callback) => {
        timeout = setTimeout(() => {
          callback();
          started2 = true;
        }, duration);
      },
      async (callback) => {
        if (started2) {
          await callback();
          started2 = false;
        } else {
          clearTimeout(timeout);
        }
      }
    ];
  }
  function whenTargetsArePartOfRequest(component, targets, inverted, [startLoading, endLoading]) {
    return on2("commit", ({ component: iComponent, commit: payload, respond }) => {
      if (iComponent !== component)
        return;
      if (targets.length > 0 && containsTargets(payload, targets) === inverted)
        return;
      startLoading();
      respond(() => {
        endLoading();
      });
    });
  }
  function whenTargetsArePartOfFileUpload(component, targets, [startLoading, endLoading]) {
    let eventMismatch = (e) => {
      let { id, property } = e.detail;
      if (id !== component.id)
        return true;
      if (targets.length > 0 && !targets.map((i) => i.target).includes(property))
        return true;
      return false;
    };
    let cleanupA = listen(window, "livewire-upload-start", (e) => {
      if (eventMismatch(e))
        return;
      startLoading();
    });
    let cleanupB = listen(window, "livewire-upload-finish", (e) => {
      if (eventMismatch(e))
        return;
      endLoading();
    });
    let cleanupC = listen(window, "livewire-upload-error", (e) => {
      if (eventMismatch(e))
        return;
      endLoading();
    });
    return () => {
      cleanupA();
      cleanupB();
      cleanupC();
    };
  }
  function containsTargets(payload, targets) {
    let { updates, calls } = payload;
    return targets.some(({ target, params }) => {
      if (params) {
        return calls.some(({ method, params: methodParams }) => {
          return target === method && params === quickHash(JSON.stringify(methodParams));
        });
      }
      let hasMatchingUpdate = Object.keys(updates).some((property) => {
        if (property.includes(".")) {
          let propertyRoot = property.split(".")[0];
          if (propertyRoot === target)
            return true;
        }
        return property === target;
      });
      if (hasMatchingUpdate)
        return true;
      if (calls.map((i) => i.method).includes(target))
        return true;
    });
  }
  function getTargets(el) {
    let directives2 = getDirectives(el);
    let targets = [];
    let inverted = false;
    if (directives2.has("target")) {
      let directive3 = directives2.get("target");
      let raw2 = directive3.expression;
      if (directive3.modifiers.includes("except"))
        inverted = true;
      if (raw2.includes("(") && raw2.includes(")")) {
        targets.push({ target: directive3.method, params: quickHash(JSON.stringify(directive3.params)) });
      } else if (raw2.includes(",")) {
        raw2.split(",").map((i) => i.trim()).forEach((target) => {
          targets.push({ target });
        });
      } else {
        targets.push({ target: raw2 });
      }
    } else {
      let nonActionOrModelLivewireDirectives = ["init", "dirty", "offline", "target", "loading", "poll", "ignore", "key", "id"];
      directives2.all().filter((i) => !nonActionOrModelLivewireDirectives.includes(i.value)).map((i) => i.expression.split("(")[0]).forEach((target) => targets.push({ target }));
    }
    return { targets, inverted };
  }
  function quickHash(subject) {
    return btoa(encodeURIComponent(subject));
  }

  // js/directives/wire-stream.js
  directive2("stream", ({ el, directive: directive3, cleanup: cleanup2 }) => {
    let { expression, modifiers } = directive3;
    let off = on2("stream", ({ name, content, replace: replace2 }) => {
      if (name !== expression)
        return;
      if (modifiers.includes("replace") || replace2) {
        el.innerHTML = content;
      } else {
        el.innerHTML = el.innerHTML + content;
      }
    });
    cleanup2(off);
  });
  on2("request", ({ respond }) => {
    respond((mutableObject) => {
      let response = mutableObject.response;
      if (!response.headers.has("X-Livewire-Stream"))
        return;
      mutableObject.response = {
        ok: true,
        redirected: false,
        status: 200,
        async text() {
          let finalResponse = await interceptStreamAndReturnFinalResponse(response, (streamed) => {
            trigger2("stream", streamed);
          });
          if (contentIsFromDump(finalResponse)) {
            this.ok = false;
          }
          return finalResponse;
        }
      };
    });
  });
  async function interceptStreamAndReturnFinalResponse(response, callback) {
    let reader = response.body.getReader();
    let remainingResponse = "";
    while (true) {
      let { done, value: chunk } = await reader.read();
      let decoder = new TextDecoder();
      let output = decoder.decode(chunk);
      let [streams, remaining] = extractStreamObjects(remainingResponse + output);
      streams.forEach((stream) => {
        callback(stream);
      });
      remainingResponse = remaining;
      if (done)
        return remainingResponse;
    }
  }
  function extractStreamObjects(raw2) {
    let regex = /({"stream":true.*?"endStream":true})/g;
    let matches2 = raw2.match(regex);
    let parsed = [];
    if (matches2) {
      for (let i = 0; i < matches2.length; i++) {
        parsed.push(JSON.parse(matches2[i]).body);
      }
    }
    let remaining = raw2.replace(regex, "");
    return [parsed, remaining];
  }

  // js/directives/wire-replace.js
  directive2("replace", ({ el, directive: directive3 }) => {
    if (directive3.modifiers.includes("self")) {
      el.__livewire_replace_self = true;
    } else {
      el.__livewire_replace = true;
    }
  });

  // js/directives/wire-ignore.js
  directive2("ignore", ({ el, directive: directive3 }) => {
    if (directive3.modifiers.includes("self")) {
      el.__livewire_ignore_self = true;
    } else {
      el.__livewire_ignore = true;
    }
  });

  // js/directives/wire-dirty.js
  var refreshDirtyStatesByComponent = new WeakBag();
  on2("commit", ({ component, succeed }) => {
    succeed(() => {
      setTimeout(() => {
        refreshDirtyStatesByComponent.each(component, (i) => i(false));
      });
    });
  });
  directive2("dirty", ({ el, directive: directive3, component }) => {
    let targets = dirtyTargets(el);
    let dirty = Alpine.reactive({ state: false });
    let oldIsDirty = false;
    let initialDisplay = el.style.display;
    let refreshDirtyState = (isDirty) => {
      toggleBooleanStateDirective(el, directive3, isDirty, initialDisplay);
      oldIsDirty = isDirty;
    };
    refreshDirtyStatesByComponent.add(component, refreshDirtyState);
    Alpine.effect(() => {
      let isDirty = false;
      if (targets.length === 0) {
        isDirty = JSON.stringify(component.canonical) !== JSON.stringify(component.reactive);
      } else {
        for (let i = 0; i < targets.length; i++) {
          if (isDirty)
            break;
          let target = targets[i];
          isDirty = JSON.stringify(dataGet(component.canonical, target)) !== JSON.stringify(dataGet(component.reactive, target));
        }
      }
      if (oldIsDirty !== isDirty) {
        refreshDirtyState(isDirty);
      }
      oldIsDirty = isDirty;
    });
  });
  function dirtyTargets(el) {
    let directives2 = getDirectives(el);
    let targets = [];
    if (directives2.has("model")) {
      targets.push(directives2.get("model").expression);
    }
    if (directives2.has("target")) {
      targets = targets.concat(directives2.get("target").expression.split(",").map((s) => s.trim()));
    }
    return targets;
  }

  // js/directives/wire-model.js
  directive2("model", ({ el, directive: directive3, component, cleanup: cleanup2 }) => {
    let { expression, modifiers } = directive3;
    if (!expression) {
      return console.warn("Livewire: [wire:model] is missing a value.", el);
    }
    if (componentIsMissingProperty(component, expression)) {
      return console.warn('Livewire: [wire:model="' + expression + '"] property does not exist on component: [' + component.name + "]", el);
    }
    if (el.type && el.type.toLowerCase() === "file") {
      return handleFileUpload(el, expression, component, cleanup2);
    }
    let isLive = modifiers.includes("live");
    let isLazy = modifiers.includes("lazy") || modifiers.includes("change");
    let onBlur = modifiers.includes("blur");
    let isDebounced = modifiers.includes("debounce");
    let update = expression.startsWith("$parent") ? () => component.$wire.$parent.$commit() : () => component.$wire.$commit();
    let debouncedUpdate = isTextInput(el) && !isDebounced && isLive ? debounce2(update, 150) : update;
    module_default.bind(el, {
      ["@change"]() {
        isLazy && update();
      },
      ["@blur"]() {
        onBlur && update();
      },
      ["x-model" + getModifierTail(modifiers)]() {
        return {
          get() {
            return dataGet(component.$wire, expression);
          },
          set(value) {
            dataSet(component.$wire, expression, value);
            isLive && !isLazy && !onBlur && debouncedUpdate();
          }
        };
      }
    });
  });
  function getModifierTail(modifiers) {
    modifiers = modifiers.filter((i) => ![
      "lazy",
      "defer"
    ].includes(i));
    if (modifiers.length === 0)
      return "";
    return "." + modifiers.join(".");
  }
  function isTextInput(el) {
    return ["INPUT", "TEXTAREA"].includes(el.tagName.toUpperCase()) && !["checkbox", "radio"].includes(el.type);
  }
  function componentIsMissingProperty(component, property) {
    if (property.startsWith("$parent")) {
      let parent = closestComponent(component.el.parentElement, false);
      if (!parent)
        return true;
      return componentIsMissingProperty(parent, property.split("$parent.")[1]);
    }
    let baseProperty = property.split(".")[0];
    return !Object.keys(component.canonical).includes(baseProperty);
  }
  function debounce2(func, wait) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // js/directives/wire-init.js
  directive2("init", ({ el, directive: directive3 }) => {
    let fullMethod = directive3.expression ?? "$refresh";
    module_default.evaluate(el, `$wire.${fullMethod}`);
  });

  // js/directives/wire-poll.js
  directive2("poll", ({ el, directive: directive3 }) => {
    let interval = extractDurationFrom(directive3.modifiers, 2e3);
    let { start: start3, pauseWhile, throttleWhile, stopWhen } = poll(() => {
      triggerComponentRequest(el, directive3);
    }, interval);
    start3();
    throttleWhile(() => theTabIsInTheBackground() && theDirectiveIsMissingKeepAlive(directive3));
    pauseWhile(() => theDirectiveHasVisible(directive3) && theElementIsNotInTheViewport(el));
    pauseWhile(() => theDirectiveIsOffTheElement(el));
    pauseWhile(() => livewireIsOffline());
    stopWhen(() => theElementIsDisconnected(el));
  });
  function triggerComponentRequest(el, directive3) {
    module_default.evaluate(el, directive3.expression ? "$wire." + directive3.expression : "$wire.$commit()");
  }
  function poll(callback, interval = 2e3) {
    let pauseConditions = [];
    let throttleConditions = [];
    let stopConditions = [];
    return {
      start() {
        let clear2 = syncronizedInterval(interval, () => {
          if (stopConditions.some((i) => i()))
            return clear2();
          if (pauseConditions.some((i) => i()))
            return;
          if (throttleConditions.some((i) => i()) && Math.random() < 0.95)
            return;
          callback();
        });
      },
      pauseWhile(condition) {
        pauseConditions.push(condition);
      },
      throttleWhile(condition) {
        throttleConditions.push(condition);
      },
      stopWhen(condition) {
        stopConditions.push(condition);
      }
    };
  }
  var clocks = [];
  function syncronizedInterval(ms, callback) {
    if (!clocks[ms]) {
      let clock = {
        timer: setInterval(() => clock.callbacks.forEach((i) => i()), ms),
        callbacks: /* @__PURE__ */ new Set()
      };
      clocks[ms] = clock;
    }
    clocks[ms].callbacks.add(callback);
    return () => {
      clocks[ms].callbacks.delete(callback);
      if (clocks[ms].callbacks.size === 0) {
        clearInterval(clocks[ms].timer);
        delete clocks[ms];
      }
    };
  }
  var isOffline = false;
  window.addEventListener("offline", () => isOffline = true);
  window.addEventListener("online", () => isOffline = false);
  function livewireIsOffline() {
    return isOffline;
  }
  var inBackground = false;
  document.addEventListener("visibilitychange", () => {
    inBackground = document.hidden;
  }, false);
  function theTabIsInTheBackground() {
    return inBackground;
  }
  function theDirectiveIsOffTheElement(el) {
    return !getDirectives(el).has("poll");
  }
  function theDirectiveIsMissingKeepAlive(directive3) {
    return !directive3.modifiers.includes("keep-alive");
  }
  function theDirectiveHasVisible(directive3) {
    return directive3.modifiers.includes("visible");
  }
  function theElementIsNotInTheViewport(el) {
    let bounding = el.getBoundingClientRect();
    return !(bounding.top < (window.innerHeight || document.documentElement.clientHeight) && bounding.left < (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom > 0 && bounding.right > 0);
  }
  function theElementIsDisconnected(el) {
    return el.isConnected === false;
  }
  function extractDurationFrom(modifiers, defaultDuration) {
    let durationInMilliSeconds;
    let durationInMilliSecondsString = modifiers.find((mod) => mod.match(/([0-9]+)ms/));
    let durationInSecondsString = modifiers.find((mod) => mod.match(/([0-9]+)s/));
    if (durationInMilliSecondsString) {
      durationInMilliSeconds = Number(durationInMilliSecondsString.replace("ms", ""));
    } else if (durationInSecondsString) {
      durationInMilliSeconds = Number(durationInSecondsString.replace("s", "")) * 1e3;
    }
    return durationInMilliSeconds || defaultDuration;
  }

  // js/index.js
  var Livewire2 = {
    directive: directive2,
    dispatchTo,
    start: start2,
    first,
    find,
    getByName,
    all,
    hook: on2,
    trigger: trigger2,
    triggerAsync,
    dispatch: dispatchGlobal,
    on: on3,
    get navigate() {
      return module_default.navigate;
    }
  };
  var warnAboutMultipleInstancesOf = (entity) => console.warn(`Detected multiple instances of ${entity} running`);
  if (window.Livewire)
    warnAboutMultipleInstancesOf("Livewire");
  if (window.Alpine)
    warnAboutMultipleInstancesOf("Alpine");
  window.Livewire = Livewire2;
  window.Alpine = module_default;
  if (window.livewireScriptConfig === void 0) {
    window.Alpine.__fromLivewire = true;
    document.addEventListener("DOMContentLoaded", () => {
      if (window.Alpine.__fromLivewire === void 0) {
        warnAboutMultipleInstancesOf("Alpine");
      }
      Livewire2.start();
    });
  }
})();
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
/*! Bundled license information:

tabbable/dist/index.esm.js:
  (*!
  * tabbable 5.3.3
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)

focus-trap/dist/focus-trap.esm.js:
  (*!
  * focus-trap 6.9.4
  * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
  *)
*/
>>>>>>> origin/main
