webpackJsonp([22],{

/***/ "./node_modules/eslint2/index.js":
/***/ function(module, exports, __webpack_require__) {

	module.exports={eslint:__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/eslint.js"),sourceCode:__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/util/source-code.js"),rules:__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/rules.js")};

/***/ },

/***/ "./node_modules/babel-traverse/lib/visitors.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r["default"]=e,r}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function explode(e){if(e._exploded)return e;e._exploded=!0;for(var r in e)if(!shouldIgnoreKey(r)){var i=r.split("|");if(1!==i.length){var a=e[r];delete e[r];for(var n=i,o=Array.isArray(n),f=0,n=o?n:(0,_getIterator3["default"])(n);;){var u;if(o){if(f>=n.length)break;u=n[f++]}else{if(f=n.next(),f.done)break;u=f.value}var l=u;e[l]=a}}}verify(e),delete e.__esModule,ensureEntranceObjects(e),ensureCallbackArrays(e);for(var s=(0,_keys2["default"])(e),d=Array.isArray(s),v=0,s=d?s:(0,_getIterator3["default"])(s);;){var y;if(d){if(v>=s.length)break;y=s[v++]}else{if(v=s.next(),v.done)break;y=v.value}var p=y;if(!shouldIgnoreKey(p)){var c=virtualTypes[p];if(c){var _=e[p];for(var g in _)_[g]=wrapCheck(c,_[g]);if(delete e[p],c.types)for(var b=c.types,h=Array.isArray(b),k=0,b=h?b:(0,_getIterator3["default"])(b);;){var x;if(h){if(k>=b.length)break;x=b[k++]}else{if(k=b.next(),k.done)break;x=k.value}var A=x;e[A]?mergePair(e[A],_):e[A]=_}else mergePair(e,_)}}}for(var m in e)if(!shouldIgnoreKey(m)){var I=e[m],q=t.FLIPPED_ALIAS_KEYS[m],w=t.DEPRECATED_KEYS[m];if(w&&(console.trace("Visitor defined for "+m+" but it has been renamed to "+w),q=[w]),q){delete e[m];for(var E=q,P=Array.isArray(E),R=0,E=P?E:(0,_getIterator3["default"])(E);;){var K;if(P){if(R>=E.length)break;K=E[R++]}else{if(R=E.next(),R.done)break;K=R.value}var S=K,T=e[S];T?mergePair(T,I):e[S]=(0,_clone2["default"])(I)}}}for(var M in e)shouldIgnoreKey(M)||ensureCallbackArrays(e[M]);return e}function verify(e){if(!e._verified){if("function"==typeof e)throw new Error(messages.get("traverseVerifyRootFunction"));for(var r in e)if("enter"!==r&&"exit"!==r||validateVisitorMethods(r,e[r]),!shouldIgnoreKey(r)){if(t.TYPES.indexOf(r)<0)throw new Error(messages.get("traverseVerifyNodeType",r));var i=e[r];if("object"===("undefined"==typeof i?"undefined":(0,_typeof3["default"])(i)))for(var a in i){if("enter"!==a&&"exit"!==a)throw new Error(messages.get("traverseVerifyVisitorProperty",r,a));validateVisitorMethods(r+"."+a,i[a])}}e._verified=!0}}function validateVisitorMethods(e,r){for(var t=[].concat(r),i=t,a=Array.isArray(i),n=0,i=a?i:(0,_getIterator3["default"])(i);;){var o;if(a){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var f=o;if("function"!=typeof f)throw new TypeError("Non-function found defined in "+e+" with type "+("undefined"==typeof f?"undefined":(0,_typeof3["default"])(f)))}}function merge(e){for(var r=arguments.length<=1||void 0===arguments[1]?[]:arguments[1],t=arguments[2],i={},a=0;a<e.length;a++){var n=e[a],o=r[a];explode(n);for(var f in n){var u=n[f];(o||t)&&(u=wrapWithStateOrWrapper(u,o,t));var l=i[f]=i[f]||{};mergePair(l,u)}}return i}function wrapWithStateOrWrapper(e,r,t){var i={},a=function(a){var n=e[a];return Array.isArray(n)?(n=n.map(function(e){var i=e;return r&&(i=function(t){return e.call(r,t,r)}),t&&(i=t(r.key,a,i)),i}),void(i[a]=n)):"continue"};for(var n in e){a(n)}return i}function ensureEntranceObjects(e){for(var r in e)if(!shouldIgnoreKey(r)){var t=e[r];"function"==typeof t&&(e[r]={enter:t})}}function ensureCallbackArrays(e){e.enter&&!Array.isArray(e.enter)&&(e.enter=[e.enter]),e.exit&&!Array.isArray(e.exit)&&(e.exit=[e.exit])}function wrapCheck(e,r){var t=function(t){if(e.checkPath(t))return r.apply(this,arguments)};return t.toString=function(){return r.toString()},t}function shouldIgnoreKey(e){return"_"===e[0]||("enter"===e||"exit"===e||"shouldSkip"===e||("blacklist"===e||"noScope"===e||"skipKeys"===e))}function mergePair(e,r){for(var t in r)e[t]=[].concat(e[t]||[],r[t])}exports.__esModule=!0;var _typeof2=__webpack_require__("./node_modules/babel-runtime/helpers/typeof.js"),_typeof3=_interopRequireDefault(_typeof2),_keys=__webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js"),_keys2=_interopRequireDefault(_keys),_getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports.explode=explode,exports.verify=verify,exports.merge=merge;var _virtualTypes=__webpack_require__("./node_modules/babel-traverse/lib/path/lib/virtual-types.js"),virtualTypes=_interopRequireWildcard(_virtualTypes),_babelMessages=__webpack_require__("./node_modules/babel-messages/lib/index.js"),messages=_interopRequireWildcard(_babelMessages),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes),_clone=__webpack_require__("./node_modules/lodash/clone.js"),_clone2=_interopRequireDefault(_clone);

/***/ },

/***/ "./node_modules/assert/assert.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";function compare(e,t){if(e===t)return 0;for(var r=e.length,n=t.length,i=0,a=Math.min(r,n);i<a;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0}function isBuffer(e){return global.Buffer&&"function"==typeof global.Buffer.isBuffer?global.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}function pToString(e){return Object.prototype.toString.call(e)}function isView(e){return!isBuffer(e)&&("function"==typeof global.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}function getName(e){if(util.isFunction(e)){if(functionsHaveNames)return e.name;var t=e.toString(),r=t.match(regex);return r&&r[1]}}function truncate(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function inspect(e){if(functionsHaveNames||!util.isFunction(e))return util.inspect(e);var t=getName(e),r=t?": "+t:"";return"[Function"+r+"]"}function getMessage(e){return truncate(inspect(e.actual),128)+" "+e.operator+" "+truncate(inspect(e.expected),128)}function fail(e,t,r,n,i){throw new assert.AssertionError({message:r,actual:e,expected:t,operator:n,stackStartFunction:i})}function ok(e,t){e||fail(e,!0,t,"==",assert.ok)}function _deepEqual(e,t,r,n){if(e===t)return!0;if(isBuffer(e)&&isBuffer(t))return 0===compare(e,t);if(util.isDate(e)&&util.isDate(t))return e.getTime()===t.getTime();if(util.isRegExp(e)&&util.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"==typeof e||null!==t&&"object"==typeof t){if(isView(e)&&isView(t)&&pToString(e)===pToString(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===compare(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(isBuffer(e)!==isBuffer(t))return!1;n=n||{actual:[],expected:[]};var i=n.actual.indexOf(e);return i!==-1&&i===n.expected.indexOf(t)||(n.actual.push(e),n.expected.push(t),objEquiv(e,t,r,n))}return r?e===t:e==t}function isArguments(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function objEquiv(e,t,r,n){if(null===e||void 0===e||null===t||void 0===t)return!1;if(util.isPrimitive(e)||util.isPrimitive(t))return e===t;if(r&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var i=isArguments(e),a=isArguments(t);if(i&&!a||!i&&a)return!1;if(i)return e=pSlice.call(e),t=pSlice.call(t),_deepEqual(e,t,r);var s,u,o=objectKeys(e),f=objectKeys(t);if(o.length!==f.length)return!1;for(o.sort(),f.sort(),u=o.length-1;u>=0;u--)if(o[u]!==f[u])return!1;for(u=o.length-1;u>=0;u--)if(s=o[u],!_deepEqual(e[s],t[s],r,n))return!1;return!0}function notDeepStrictEqual(e,t,r){_deepEqual(e,t,!0)&&fail(e,t,r,"notDeepStrictEqual",notDeepStrictEqual)}function expectedException(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(r){}return!Error.isPrototypeOf(t)&&t.call({},e)===!0}function _tryBlock(e){var t;try{e()}catch(r){t=r}return t}function _throws(e,t,r,n){var i;if("function"!=typeof t)throw new TypeError('"block" argument must be a function');"string"==typeof r&&(n=r,r=null),i=_tryBlock(t),n=(r&&r.name?" ("+r.name+").":".")+(n?" "+n:"."),e&&!i&&fail(i,r,"Missing expected exception"+n);var a="string"==typeof n,s=!e&&util.isError(i),u=!e&&i&&!r;if((s&&a&&expectedException(i,r)||u)&&fail(i,r,"Got unwanted exception"+n),e&&i&&r&&!expectedException(i,r)||!e&&i)throw i}var util=__webpack_require__("./node_modules/util/util.js"),hasOwn=Object.prototype.hasOwnProperty,pSlice=Array.prototype.slice,functionsHaveNames=function(){return"foo"===function(){}.name}(),assert=module.exports=ok,regex=/\s*function\s+([^\(\s]*)\s*/;assert.AssertionError=function(e){this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=getMessage(this),this.generatedMessage=!0);var t=e.stackStartFunction||fail;if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var r=new Error;if(r.stack){var n=r.stack,i=getName(t),a=n.indexOf("\n"+i);if(a>=0){var s=n.indexOf("\n",a+1);n=n.substring(s+1)}this.stack=n}}},util.inherits(assert.AssertionError,Error),assert.fail=fail,assert.ok=ok,assert.equal=function(e,t,r){e!=t&&fail(e,t,r,"==",assert.equal)},assert.notEqual=function(e,t,r){e==t&&fail(e,t,r,"!=",assert.notEqual)},assert.deepEqual=function(e,t,r){_deepEqual(e,t,!1)||fail(e,t,r,"deepEqual",assert.deepEqual)},assert.deepStrictEqual=function(e,t,r){_deepEqual(e,t,!0)||fail(e,t,r,"deepStrictEqual",assert.deepStrictEqual)},assert.notDeepEqual=function(e,t,r){_deepEqual(e,t,!1)&&fail(e,t,r,"notDeepEqual",assert.notDeepEqual)},assert.notDeepStrictEqual=notDeepStrictEqual,assert.strictEqual=function(e,t,r){e!==t&&fail(e,t,r,"===",assert.strictEqual)},assert.notStrictEqual=function(e,t,r){e===t&&fail(e,t,r,"!==",assert.notStrictEqual)},assert["throws"]=function(e,t,r){_throws(!0,e,t,r)},assert.doesNotThrow=function(e,t,r){_throws(!1,e,t,r)},assert.ifError=function(e){if(e)throw e};var objectKeys=Object.keys||function(e){var t=[];for(var r in e)hasOwn.call(e,r)&&t.push(r);return t};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ "./node_modules/util/util.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {function inspect(e,r){var t={seen:[],stylize:stylizeNoColor};return arguments.length>=3&&(t.depth=arguments[2]),arguments.length>=4&&(t.colors=arguments[3]),isBoolean(r)?t.showHidden=r:r&&exports._extend(t,r),isUndefined(t.showHidden)&&(t.showHidden=!1),isUndefined(t.depth)&&(t.depth=2),isUndefined(t.colors)&&(t.colors=!1),isUndefined(t.customInspect)&&(t.customInspect=!0),t.colors&&(t.stylize=stylizeWithColor),formatValue(t,e,t.depth)}function stylizeWithColor(e,r){var t=inspect.styles[r];return t?"["+inspect.colors[t][0]+"m"+e+"["+inspect.colors[t][1]+"m":e}function stylizeNoColor(e,r){return e}function arrayToHash(e){var r={};return e.forEach(function(e,t){r[e]=!0}),r}function formatValue(e,r,t){if(e.customInspect&&r&&isFunction(r.inspect)&&r.inspect!==exports.inspect&&(!r.constructor||r.constructor.prototype!==r)){var n=r.inspect(t,e);return isString(n)||(n=formatValue(e,n,t)),n}var i=formatPrimitive(e,r);if(i)return i;var o=Object.keys(r),s=arrayToHash(o);if(e.showHidden&&(o=Object.getOwnPropertyNames(r)),isError(r)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return formatError(r);if(0===o.length){if(isFunction(r)){var u=r.name?": "+r.name:"";return e.stylize("[Function"+u+"]","special")}if(isRegExp(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(isDate(r))return e.stylize(Date.prototype.toString.call(r),"date");if(isError(r))return formatError(r)}var c="",a=!1,l=["{","}"];if(isArray(r)&&(a=!0,l=["[","]"]),isFunction(r)){var p=r.name?": "+r.name:"";c=" [Function"+p+"]"}if(isRegExp(r)&&(c=" "+RegExp.prototype.toString.call(r)),isDate(r)&&(c=" "+Date.prototype.toUTCString.call(r)),isError(r)&&(c=" "+formatError(r)),0===o.length&&(!a||0==r.length))return l[0]+c+l[1];if(t<0)return isRegExp(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special");e.seen.push(r);var f;return f=a?formatArray(e,r,t,s,o):o.map(function(n){return formatProperty(e,r,t,s,n,a)}),e.seen.pop(),reduceToSingleString(f,c,l)}function formatPrimitive(e,r){if(isUndefined(r))return e.stylize("undefined","undefined");if(isString(r)){var t="'"+JSON.stringify(r).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(t,"string")}return isNumber(r)?e.stylize(""+r,"number"):isBoolean(r)?e.stylize(""+r,"boolean"):isNull(r)?e.stylize("null","null"):void 0}function formatError(e){return"["+Error.prototype.toString.call(e)+"]"}function formatArray(e,r,t,n,i){for(var o=[],s=0,u=r.length;s<u;++s)hasOwnProperty(r,String(s))?o.push(formatProperty(e,r,t,n,String(s),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(formatProperty(e,r,t,n,i,!0))}),o}function formatProperty(e,r,t,n,i,o){var s,u,c;if(c=Object.getOwnPropertyDescriptor(r,i)||{value:r[i]},c.get?u=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(u=e.stylize("[Setter]","special")),hasOwnProperty(n,i)||(s="["+i+"]"),u||(e.seen.indexOf(c.value)<0?(u=isNull(t)?formatValue(e,c.value,null):formatValue(e,c.value,t-1),u.indexOf("\n")>-1&&(u=o?u.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+u.split("\n").map(function(e){return"   "+e}).join("\n"))):u=e.stylize("[Circular]","special")),isUndefined(s)){if(o&&i.match(/^\d+$/))return u;s=JSON.stringify(""+i),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+u}function reduceToSingleString(e,r,t){var n=0,i=e.reduce(function(e,r){return n++,r.indexOf("\n")>=0&&n++,e+r.replace(/\u001b\[\d\d?m/g,"").length+1},0);return i>60?t[0]+(""===r?"":r+"\n ")+" "+e.join(",\n  ")+" "+t[1]:t[0]+r+" "+e.join(", ")+" "+t[1]}function isArray(e){return Array.isArray(e)}function isBoolean(e){return"boolean"==typeof e}function isNull(e){return null===e}function isNullOrUndefined(e){return null==e}function isNumber(e){return"number"==typeof e}function isString(e){return"string"==typeof e}function isSymbol(e){return"symbol"==typeof e}function isUndefined(e){return void 0===e}function isRegExp(e){return isObject(e)&&"[object RegExp]"===objectToString(e)}function isObject(e){return"object"==typeof e&&null!==e}function isDate(e){return isObject(e)&&"[object Date]"===objectToString(e)}function isError(e){return isObject(e)&&("[object Error]"===objectToString(e)||e instanceof Error)}function isFunction(e){return"function"==typeof e}function isPrimitive(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||"undefined"==typeof e}function objectToString(e){return Object.prototype.toString.call(e)}function pad(e){return e<10?"0"+e.toString(10):e.toString(10)}function timestamp(){var e=new Date,r=[pad(e.getHours()),pad(e.getMinutes()),pad(e.getSeconds())].join(":");return[e.getDate(),months[e.getMonth()],r].join(" ")}function hasOwnProperty(e,r){return Object.prototype.hasOwnProperty.call(e,r)}var formatRegExp=/%[sdj%]/g;exports.format=function(e){if(!isString(e)){for(var r=[],t=0;t<arguments.length;t++)r.push(inspect(arguments[t]));return r.join(" ")}for(var t=1,n=arguments,i=n.length,o=String(e).replace(formatRegExp,function(e){if("%%"===e)return"%";if(t>=i)return e;switch(e){case"%s":return String(n[t++]);case"%d":return Number(n[t++]);case"%j":try{return JSON.stringify(n[t++])}catch(r){return"[Circular]"}default:return e}}),s=n[t];t<i;s=n[++t])o+=isNull(s)||!isObject(s)?" "+s:" "+inspect(s);return o},exports.deprecate=function(e,r){function t(){if(!n){if(process.throwDeprecation)throw new Error(r);process.traceDeprecation?console.trace(r):console.error(r),n=!0}return e.apply(this,arguments)}if(isUndefined(global.process))return function(){return exports.deprecate(e,r).apply(this,arguments)};if(process.noDeprecation===!0)return e;var n=!1;return t};var debugs={},debugEnviron;exports.debuglog=function(e){if(isUndefined(debugEnviron)&&(debugEnviron=process.env.NODE_DEBUG||""),e=e.toUpperCase(),!debugs[e])if(new RegExp("\\b"+e+"\\b","i").test(debugEnviron)){var r=process.pid;debugs[e]=function(){var t=exports.format.apply(exports,arguments);console.error("%s %d: %s",e,r,t)}}else debugs[e]=function(){};return debugs[e]},exports.inspect=inspect,inspect.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},inspect.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},exports.isArray=isArray,exports.isBoolean=isBoolean,exports.isNull=isNull,exports.isNullOrUndefined=isNullOrUndefined,exports.isNumber=isNumber,exports.isString=isString,exports.isSymbol=isSymbol,exports.isUndefined=isUndefined,exports.isRegExp=isRegExp,exports.isObject=isObject,exports.isDate=isDate,exports.isError=isError,exports.isFunction=isFunction,exports.isPrimitive=isPrimitive,exports.isBuffer=__webpack_require__("./node_modules/util/support/isBufferBrowser.js");var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];exports.log=function(){console.log("%s - %s",timestamp(),exports.format.apply(exports,arguments))},exports.inherits=__webpack_require__("./node_modules/util/node_modules/inherits/inherits_browser.js"),exports._extend=function(e,r){if(!r||!isObject(r))return e;for(var t=Object.keys(r),n=t.length;n--;)e[t[n]]=r[t[n]];return e};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js"), (function() { return this; }())))

/***/ },

/***/ "./node_modules/util/support/isBufferBrowser.js":
/***/ function(module, exports) {

	module.exports=function(o){return o&&"object"==typeof o&&"function"==typeof o.copy&&"function"==typeof o.fill&&"function"==typeof o.readUInt8};

/***/ },

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/***/ function(module, exports) {

	"function"==typeof Object.create?module.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:module.exports=function(t,e){t.super_=e;var o=function(){};o.prototype=e.prototype,t.prototype=new o,t.prototype.constructor=t};

/***/ },

/***/ "./node_modules/escope/lib/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function defaultOptions(){return{optimistic:!1,directive:!1,nodejsScope:!1,impliedStrict:!1,sourceType:"script",ecmaVersion:5,childVisitorKeys:null,fallback:"iteration"}}function updateDeeply(e,r){function t(e){return"object"===("undefined"==typeof e?"undefined":_typeof(e))&&e instanceof Object&&!(e instanceof Array)&&!(e instanceof RegExp)}var o,n;for(o in r)r.hasOwnProperty(o)&&(n=r[o],t(n)?t(e[o])?updateDeeply(e[o],n):e[o]=updateDeeply({},n):e[o]=n);return e}function analyze(e,r){var t,o,n;return n=updateDeeply(defaultOptions(),r),t=new _scopeManager2["default"](n),o=new _referencer2["default"](n,t),o.visit(e),(0,_assert2["default"])(null===t.__currentScope,"currentScope should be null."),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ScopeManager=exports.Scope=exports.Variable=exports.Reference=exports.version=void 0;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};exports.analyze=analyze;var _assert=__webpack_require__("./node_modules/assert/assert.js"),_assert2=_interopRequireDefault(_assert),_scopeManager=__webpack_require__("./node_modules/escope/lib/scope-manager.js"),_scopeManager2=_interopRequireDefault(_scopeManager),_referencer=__webpack_require__("./node_modules/escope/lib/referencer.js"),_referencer2=_interopRequireDefault(_referencer),_reference=__webpack_require__("./node_modules/escope/lib/reference.js"),_reference2=_interopRequireDefault(_reference),_variable=__webpack_require__("./node_modules/escope/lib/variable.js"),_variable2=_interopRequireDefault(_variable),_scope=__webpack_require__("./node_modules/escope/lib/scope.js"),_scope2=_interopRequireDefault(_scope),_package=__webpack_require__("./node_modules/escope/package.json");exports.version=_package.version,exports.Reference=_reference2["default"],exports.Variable=_variable2["default"],exports.Scope=_scope2["default"],exports.ScopeManager=_scopeManager2["default"];

/***/ },

/***/ "./node_modules/escope/lib/scope-manager.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),_es6WeakMap=__webpack_require__("./node_modules/es6-weak-map/index.js"),_es6WeakMap2=_interopRequireDefault(_es6WeakMap),_scope=__webpack_require__("./node_modules/escope/lib/scope.js"),_scope2=_interopRequireDefault(_scope),_assert=__webpack_require__("./node_modules/assert/assert.js"),_assert2=_interopRequireDefault(_assert),ScopeManager=function(){function e(t){_classCallCheck(this,e),this.scopes=[],this.globalScope=null,this.__nodeToScope=new _es6WeakMap2["default"],this.__currentScope=null,this.__options=t,this.__declaredVariables=new _es6WeakMap2["default"]}return _createClass(e,[{key:"__useDirective",value:function(){return this.__options.directive}},{key:"__isOptimistic",value:function(){return this.__options.optimistic}},{key:"__ignoreEval",value:function(){return this.__options.ignoreEval}},{key:"__isNodejsScope",value:function(){return this.__options.nodejsScope}},{key:"isModule",value:function(){return"module"===this.__options.sourceType}},{key:"isImpliedStrict",value:function(){return this.__options.impliedStrict}},{key:"isStrictModeSupported",value:function(){return this.__options.ecmaVersion>=5}},{key:"__get",value:function(e){return this.__nodeToScope.get(e)}},{key:"getDeclaredVariables",value:function(e){return this.__declaredVariables.get(e)||[]}},{key:"acquire",value:function(e,t){function n(e){return("function"!==e.type||!e.functionExpressionScope)&&"TDZ"!==e.type}var o,i,s,c;if(o=this.__get(e),!o||0===o.length)return null;if(1===o.length)return o[0];if(t){for(s=o.length-1;s>=0;--s)if(i=o[s],n(i))return i}else for(s=0,c=o.length;s<c;++s)if(i=o[s],n(i))return i;return null}},{key:"acquireAll",value:function(e){return this.__get(e)}},{key:"release",value:function(e,t){var n,o;return n=this.__get(e),n&&n.length?(o=n[0].upper,o?this.acquire(o.block,t):null):null}},{key:"attach",value:function(){}},{key:"detach",value:function(){}},{key:"__nestScope",value:function(e){return e instanceof _scope.GlobalScope&&((0,_assert2["default"])(null===this.__currentScope),this.globalScope=e),this.__currentScope=e,e}},{key:"__nestGlobalScope",value:function(e){return this.__nestScope(new _scope.GlobalScope(this,e))}},{key:"__nestBlockScope",value:function(e,t){return this.__nestScope(new _scope.BlockScope(this,this.__currentScope,e))}},{key:"__nestFunctionScope",value:function(e,t){return this.__nestScope(new _scope.FunctionScope(this,this.__currentScope,e,t))}},{key:"__nestForScope",value:function(e){return this.__nestScope(new _scope.ForScope(this,this.__currentScope,e))}},{key:"__nestCatchScope",value:function(e){return this.__nestScope(new _scope.CatchScope(this,this.__currentScope,e))}},{key:"__nestWithScope",value:function(e){return this.__nestScope(new _scope.WithScope(this,this.__currentScope,e))}},{key:"__nestClassScope",value:function(e){return this.__nestScope(new _scope.ClassScope(this,this.__currentScope,e))}},{key:"__nestSwitchScope",value:function(e){return this.__nestScope(new _scope.SwitchScope(this,this.__currentScope,e))}},{key:"__nestModuleScope",value:function(e){return this.__nestScope(new _scope.ModuleScope(this,this.__currentScope,e))}},{key:"__nestTDZScope",value:function(e){return this.__nestScope(new _scope.TDZScope(this,this.__currentScope,e))}},{key:"__nestFunctionExpressionNameScope",value:function(e){return this.__nestScope(new _scope.FunctionExpressionNameScope(this,this.__currentScope,e))}},{key:"__isES6",value:function(){return this.__options.ecmaVersion>=6}}]),e}();exports["default"]=ScopeManager;

/***/ },

/***/ "./node_modules/es6-weak-map/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports=__webpack_require__("./node_modules/es6-weak-map/is-implemented.js")()?WeakMap:__webpack_require__("./node_modules/es6-weak-map/polyfill.js");

/***/ },

/***/ "./node_modules/es6-weak-map/is-implemented.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(){var e,t;if("function"!=typeof WeakMap)return!1;try{e=new WeakMap([[t={},"one"],[{},"two"],[{},"three"]])}catch(n){return!1}return"[object WeakMap]"===String(e)&&("function"==typeof e.set&&(e.set({},1)===e&&("function"==typeof e["delete"]&&("function"==typeof e.has&&"one"===e.get(t)))))};

/***/ },

/***/ "./node_modules/es6-weak-map/polyfill.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var setPrototypeOf=__webpack_require__("./node_modules/es5-ext/object/set-prototype-of/index.js"),object=__webpack_require__("./node_modules/es5-ext/object/valid-object.js"),value=__webpack_require__("./node_modules/es5-ext/object/valid-value.js"),randomUniq=__webpack_require__("./node_modules/es5-ext/string/random-uniq.js"),d=__webpack_require__("./node_modules/d/index.js"),getIterator=__webpack_require__("./node_modules/es6-iterator/get.js"),forOf=__webpack_require__("./node_modules/es6-iterator/for-of.js"),toStringTagSymbol=__webpack_require__("./node_modules/es6-symbol/index.js").toStringTag,isNative=__webpack_require__("./node_modules/es6-weak-map/is-native-implemented.js"),isArray=Array.isArray,defineProperty=Object.defineProperty,hasOwnProperty=Object.prototype.hasOwnProperty,getPrototypeOf=Object.getPrototypeOf,WeakMapPoly;module.exports=WeakMapPoly=function(){var e,t=arguments[0];if(!(this instanceof WeakMapPoly))throw new TypeError("Constructor requires 'new'");return e=isNative&&setPrototypeOf&&WeakMap!==WeakMapPoly?setPrototypeOf(new WeakMap,getPrototypeOf(this)):this,null!=t&&(isArray(t)||(t=getIterator(t))),defineProperty(e,"__weakMapData__",d("c","$weakMap$"+randomUniq())),t?(forOf(t,function(t){value(t),e.set(t[0],t[1])}),e):e},isNative&&(setPrototypeOf&&setPrototypeOf(WeakMapPoly,WeakMap),WeakMapPoly.prototype=Object.create(WeakMap.prototype,{constructor:d(WeakMapPoly)})),Object.defineProperties(WeakMapPoly.prototype,{"delete":d(function(e){return!!hasOwnProperty.call(object(e),this.__weakMapData__)&&(delete e[this.__weakMapData__],!0)}),get:d(function(e){if(hasOwnProperty.call(object(e),this.__weakMapData__))return e[this.__weakMapData__]}),has:d(function(e){return hasOwnProperty.call(object(e),this.__weakMapData__)}),set:d(function(e,t){return defineProperty(object(e),this.__weakMapData__,d("c",t)),this}),toString:d(function(){return"[object WeakMap]"})}),defineProperty(WeakMapPoly.prototype,toStringTagSymbol,d("c","WeakMap"));

/***/ },

/***/ "./node_modules/es5-ext/object/set-prototype-of/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports=__webpack_require__("./node_modules/es5-ext/object/set-prototype-of/is-implemented.js")()?Object.setPrototypeOf:__webpack_require__("./node_modules/es5-ext/object/set-prototype-of/shim.js");

/***/ },

/***/ "./node_modules/es5-ext/object/set-prototype-of/is-implemented.js":
/***/ function(module, exports) {

	"use strict";var create=Object.create,getPrototypeOf=Object.getPrototypeOf,x={};module.exports=function(){var t=Object.setPrototypeOf,e=arguments[0]||create;return"function"==typeof t&&getPrototypeOf(t(e(null),x))===x};

/***/ },

/***/ "./node_modules/es5-ext/object/set-prototype-of/shim.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var isObject=__webpack_require__("./node_modules/es5-ext/object/is-object.js"),value=__webpack_require__("./node_modules/es5-ext/object/valid-value.js"),isPrototypeOf=Object.prototype.isPrototypeOf,defineProperty=Object.defineProperty,nullDesc={configurable:!0,enumerable:!1,writable:!0,value:void 0},validate;validate=function(e,t){if(value(e),null===t||isObject(t))return e;throw new TypeError("Prototype must be null or an object")},module.exports=function(e){var t,l;return e?(2===e.level?e.set?(l=e.set,t=function(e,t){return l.call(validate(e,t),t),e}):t=function(e,t){return validate(e,t).__proto__=t,e}:t=function r(e,t){var l;return validate(e,t),l=isPrototypeOf.call(r.nullPolyfill,e),l&&delete r.nullPolyfill.__proto__,null===t&&(t=r.nullPolyfill),e.__proto__=t,l&&defineProperty(r.nullPolyfill,"__proto__",nullDesc),e},Object.defineProperty(t,"level",{configurable:!1,enumerable:!1,writable:!1,value:e.level})):null}(function(){var e,t=Object.create(null),l={},r=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__");if(r){try{e=r.set,e.call(t,l)}catch(o){}if(Object.getPrototypeOf(t)===l)return{set:e,level:2}}return t.__proto__=l,Object.getPrototypeOf(t)===l?{level:2}:(t={},t.__proto__=l,Object.getPrototypeOf(t)===l&&{level:1})}()),__webpack_require__("./node_modules/es5-ext/object/create.js");

/***/ },

/***/ "./node_modules/es5-ext/object/is-object.js":
/***/ function(module, exports) {

	"use strict";var map={"function":!0,object:!0};module.exports=function(t){return null!=t&&map[typeof t]||!1};

/***/ },

/***/ "./node_modules/es5-ext/object/valid-value.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(n){if(null==n)throw new TypeError("Cannot use null or undefined");return n};

/***/ },

/***/ "./node_modules/es5-ext/object/create.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var create=Object.create,shim;__webpack_require__("./node_modules/es5-ext/object/set-prototype-of/is-implemented.js")()||(shim=__webpack_require__("./node_modules/es5-ext/object/set-prototype-of/shim.js")),module.exports=function(){var e,r,t;return shim?1!==shim.level?create:(e={},r={},t={configurable:!1,enumerable:!1,writable:!0,value:void 0},Object.getOwnPropertyNames(Object.prototype).forEach(function(e){return"__proto__"===e?void(r[e]={configurable:!0,enumerable:!1,writable:!0,value:void 0}):void(r[e]=t)}),Object.defineProperties(e,r),Object.defineProperty(shim,"nullPolyfill",{configurable:!1,enumerable:!1,writable:!1,value:e}),function(r,t){return create(null===r?e:r,t)}):create}();

/***/ },

/***/ "./node_modules/es5-ext/object/valid-object.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var isObject=__webpack_require__("./node_modules/es5-ext/object/is-object.js");module.exports=function(e){if(!isObject(e))throw new TypeError(e+" is not an Object");return e};

/***/ },

/***/ "./node_modules/es5-ext/string/random-uniq.js":
/***/ function(module, exports) {

	"use strict";var generated=Object.create(null),random=Math.random;module.exports=function(){var e;do e=random().toString(36).slice(2);while(generated[e]);return e};

/***/ },

/***/ "./node_modules/d/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var assign=__webpack_require__("./node_modules/es5-ext/object/assign/index.js"),normalizeOpts=__webpack_require__("./node_modules/es5-ext/object/normalize-options.js"),isCallable=__webpack_require__("./node_modules/es5-ext/object/is-callable.js"),contains=__webpack_require__("./node_modules/es5-ext/string/#/contains/index.js"),d;d=module.exports=function(e,l){var n,a,i,s,t;return arguments.length<2||"string"!=typeof e?(s=l,l=e,e=null):s=arguments[2],null==e?(n=i=!0,a=!1):(n=contains.call(e,"c"),a=contains.call(e,"e"),i=contains.call(e,"w")),t={value:l,configurable:n,enumerable:a,writable:i},s?assign(normalizeOpts(s),t):t},d.gs=function(e,l,n){var a,i,s,t;return"string"!=typeof e?(s=n,n=l,l=e,e=null):s=arguments[3],null==l?l=void 0:isCallable(l)?null==n?n=void 0:isCallable(n)||(s=n,n=void 0):(s=l,l=n=void 0),null==e?(a=!0,i=!1):(a=contains.call(e,"c"),i=contains.call(e,"e")),t={get:l,set:n,configurable:a,enumerable:i},s?assign(normalizeOpts(s),t):t};

/***/ },

/***/ "./node_modules/es5-ext/object/assign/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports=__webpack_require__("./node_modules/es5-ext/object/assign/is-implemented.js")()?Object.assign:__webpack_require__("./node_modules/es5-ext/object/assign/shim.js");

/***/ },

/***/ "./node_modules/es5-ext/object/assign/is-implemented.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(){var r,t=Object.assign;return"function"==typeof t&&(r={foo:"raz"},t(r,{bar:"dwa"},{trzy:"trzy"}),r.foo+r.bar+r.trzy==="razdwatrzy")};

/***/ },

/***/ "./node_modules/es5-ext/object/assign/shim.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var keys=__webpack_require__("./node_modules/es5-ext/object/keys/index.js"),value=__webpack_require__("./node_modules/es5-ext/object/valid-value.js"),max=Math.max;module.exports=function(e,r){var a,t,u,i=max(arguments.length,2);for(e=Object(value(e)),u=function(t){try{e[t]=r[t]}catch(u){a||(a=u)}},t=1;t<i;++t)r=arguments[t],keys(r).forEach(u);if(void 0!==a)throw a;return e};

/***/ },

/***/ "./node_modules/es5-ext/object/keys/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports=__webpack_require__("./node_modules/es5-ext/object/keys/is-implemented.js")()?Object.keys:__webpack_require__("./node_modules/es5-ext/object/keys/shim.js");

/***/ },

/***/ "./node_modules/es5-ext/object/keys/is-implemented.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(){try{return Object.keys("primitive"),!0}catch(t){return!1}};

/***/ },

/***/ "./node_modules/es5-ext/object/keys/shim.js":
/***/ function(module, exports) {

	"use strict";var keys=Object.keys;module.exports=function(e){return keys(null==e?e:Object(e))};

/***/ },

/***/ "./node_modules/es5-ext/object/normalize-options.js":
/***/ function(module, exports) {

	"use strict";var forEach=Array.prototype.forEach,create=Object.create,process=function(r,c){var e;for(e in r)c[e]=r[e]};module.exports=function(r){var c=create(null);return forEach.call(arguments,function(r){null!=r&&process(Object(r),c)}),c};

/***/ },

/***/ "./node_modules/es5-ext/object/is-callable.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(t){return"function"==typeof t};

/***/ },

/***/ "./node_modules/es5-ext/string/#/contains/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports=__webpack_require__("./node_modules/es5-ext/string/#/contains/is-implemented.js")()?String.prototype.contains:__webpack_require__("./node_modules/es5-ext/string/#/contains/shim.js");

/***/ },

/***/ "./node_modules/es5-ext/string/#/contains/is-implemented.js":
/***/ function(module, exports) {

	"use strict";var str="razdwatrzy";module.exports=function(){return"function"==typeof str.contains&&(str.contains("dwa")===!0&&str.contains("foo")===!1)};

/***/ },

/***/ "./node_modules/es5-ext/string/#/contains/shim.js":
/***/ function(module, exports) {

	"use strict";var indexOf=String.prototype.indexOf;module.exports=function(t){return indexOf.call(this,t,arguments[1])>-1};

/***/ },

/***/ "./node_modules/es6-iterator/get.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var isArguments=__webpack_require__("./node_modules/es5-ext/function/is-arguments.js"),isString=__webpack_require__("./node_modules/es5-ext/string/is-string.js"),ArrayIterator=__webpack_require__("./node_modules/es6-iterator/array.js"),StringIterator=__webpack_require__("./node_modules/es6-iterator/string.js"),iterable=__webpack_require__("./node_modules/es6-iterator/valid-iterable.js"),iteratorSymbol=__webpack_require__("./node_modules/es6-symbol/index.js").iterator;module.exports=function(r){return"function"==typeof iterable(r)[iteratorSymbol]?r[iteratorSymbol]():isArguments(r)?new ArrayIterator(r):isString(r)?new StringIterator(r):new ArrayIterator(r)};

/***/ },

/***/ "./node_modules/es5-ext/function/is-arguments.js":
/***/ function(module, exports) {

	"use strict";var toString=Object.prototype.toString,id=toString.call(function(){return arguments}());module.exports=function(t){return toString.call(t)===id};

/***/ },

/***/ "./node_modules/es5-ext/string/is-string.js":
/***/ function(module, exports) {

	"use strict";var toString=Object.prototype.toString,id=toString.call("");module.exports=function(t){return"string"==typeof t||t&&"object"==typeof t&&(t instanceof String||toString.call(t)===id)||!1};

/***/ },

/***/ "./node_modules/es6-iterator/array.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var setPrototypeOf=__webpack_require__("./node_modules/es5-ext/object/set-prototype-of/index.js"),contains=__webpack_require__("./node_modules/es5-ext/string/#/contains/index.js"),d=__webpack_require__("./node_modules/d/index.js"),Iterator=__webpack_require__("./node_modules/es6-iterator/index.js"),defineProperty=Object.defineProperty,ArrayIterator;ArrayIterator=module.exports=function(t,r){return this instanceof ArrayIterator?(Iterator.call(this,t),r=r?contains.call(r,"key+value")?"key+value":contains.call(r,"key")?"key":"value":"value",void defineProperty(this,"__kind__",d("",r))):new ArrayIterator(t,r)},setPrototypeOf&&setPrototypeOf(ArrayIterator,Iterator),ArrayIterator.prototype=Object.create(Iterator.prototype,{constructor:d(ArrayIterator),_resolve:d(function(t){return"value"===this.__kind__?this.__list__[t]:"key+value"===this.__kind__?[t,this.__list__[t]]:t}),toString:d(function(){return"[object Array Iterator]"})});

/***/ },

/***/ "./node_modules/es6-iterator/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var clear=__webpack_require__("./node_modules/es5-ext/array/#/clear.js"),assign=__webpack_require__("./node_modules/es5-ext/object/assign/index.js"),callable=__webpack_require__("./node_modules/es5-ext/object/valid-callable.js"),value=__webpack_require__("./node_modules/es5-ext/object/valid-value.js"),d=__webpack_require__("./node_modules/d/index.js"),autoBind=__webpack_require__("./node_modules/d/auto-bind.js"),Symbol=__webpack_require__("./node_modules/es6-symbol/index.js"),defineProperty=Object.defineProperty,defineProperties=Object.defineProperties,Iterator;module.exports=Iterator=function(e,t){return this instanceof Iterator?(defineProperties(this,{__list__:d("w",value(e)),__context__:d("w",t),__nextIndex__:d("w",0)}),void(t&&(callable(t.on),t.on("_add",this._onAdd),t.on("_delete",this._onDelete),t.on("_clear",this._onClear)))):new Iterator(e,t)},defineProperties(Iterator.prototype,assign({constructor:d(Iterator),_next:d(function(){var e;if(this.__list__)return this.__redo__&&(e=this.__redo__.shift(),void 0!==e)?e:this.__nextIndex__<this.__list__.length?this.__nextIndex__++:void this._unBind()}),next:d(function(){return this._createResult(this._next())}),_createResult:d(function(e){return void 0===e?{done:!0,value:void 0}:{done:!1,value:this._resolve(e)}}),_resolve:d(function(e){return this.__list__[e]}),_unBind:d(function(){this.__list__=null,delete this.__redo__,this.__context__&&(this.__context__.off("_add",this._onAdd),this.__context__.off("_delete",this._onDelete),this.__context__.off("_clear",this._onClear),this.__context__=null)}),toString:d(function(){return"[object Iterator]"})},autoBind({_onAdd:d(function(e){if(!(e>=this.__nextIndex__)){if(++this.__nextIndex__,!this.__redo__)return void defineProperty(this,"__redo__",d("c",[e]));this.__redo__.forEach(function(t,_){t>=e&&(this.__redo__[_]=++t)},this),this.__redo__.push(e)}}),_onDelete:d(function(e){var t;e>=this.__nextIndex__||(--this.__nextIndex__,this.__redo__&&(t=this.__redo__.indexOf(e),t!==-1&&this.__redo__.splice(t,1),this.__redo__.forEach(function(t,_){t>e&&(this.__redo__[_]=--t)},this)))}),_onClear:d(function(){this.__redo__&&clear.call(this.__redo__),this.__nextIndex__=0})}))),defineProperty(Iterator.prototype,Symbol.iterator,d(function(){return this})),defineProperty(Iterator.prototype,Symbol.toStringTag,d("","Iterator"));

/***/ },

/***/ "./node_modules/es5-ext/array/#/clear.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var value=__webpack_require__("./node_modules/es5-ext/object/valid-value.js");module.exports=function(){return value(this).length=0,this};

/***/ },

/***/ "./node_modules/es5-ext/object/valid-callable.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(t){if("function"!=typeof t)throw new TypeError(t+" is not a function");return t};

/***/ },

/***/ "./node_modules/d/auto-bind.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var copy=__webpack_require__("./node_modules/es5-ext/object/copy.js"),map=__webpack_require__("./node_modules/es5-ext/object/map.js"),callable=__webpack_require__("./node_modules/es5-ext/object/valid-callable.js"),validValue=__webpack_require__("./node_modules/es5-ext/object/valid-value.js"),bind=Function.prototype.bind,defineProperty=Object.defineProperty,hasOwnProperty=Object.prototype.hasOwnProperty,define;define=function(e,t,r){var i,l=validValue(t)&&callable(t.value);return i=copy(t),delete i.writable,delete i.value,i.get=function(){return hasOwnProperty.call(this,e)?l:(t.value=bind.call(l,null==r?this:this[r]),defineProperty(this,e,t),this[e])},i},module.exports=function(e){var t=arguments[1];return map(e,function(e,r){return define(r,e,t)})};

/***/ },

/***/ "./node_modules/es5-ext/object/copy.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var assign=__webpack_require__("./node_modules/es5-ext/object/assign/index.js"),value=__webpack_require__("./node_modules/es5-ext/object/valid-value.js");module.exports=function(e){var r=Object(value(e));return r!==e?r:assign({},e)};

/***/ },

/***/ "./node_modules/es5-ext/object/map.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var callable=__webpack_require__("./node_modules/es5-ext/object/valid-callable.js"),forEach=__webpack_require__("./node_modules/es5-ext/object/for-each.js"),call=Function.prototype.call;module.exports=function(l,a){var c={},r=arguments[2];return callable(a),forEach(l,function(l,e,o,t){c[e]=call.call(a,r,l,e,o,t)}),c};

/***/ },

/***/ "./node_modules/es5-ext/object/for-each.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports=__webpack_require__("./node_modules/es5-ext/object/_iterate.js")("forEach");

/***/ },

/***/ "./node_modules/es5-ext/object/_iterate.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var callable=__webpack_require__("./node_modules/es5-ext/object/valid-callable.js"),value=__webpack_require__("./node_modules/es5-ext/object/valid-value.js"),bind=Function.prototype.bind,call=Function.prototype.call,keys=Object.keys,propertyIsEnumerable=Object.prototype.propertyIsEnumerable;module.exports=function(e,l){return function(t,r){var a,n=arguments[2],c=arguments[3];return t=Object(value(t)),callable(r),a=keys(t),c&&a.sort("function"==typeof c?bind.call(c,t):void 0),"function"!=typeof e&&(e=a[e]),call.call(e,a,function(e,a){return propertyIsEnumerable.call(t,e)?call.call(r,n,t[e],e,t,a):l})}};

/***/ },

/***/ "./node_modules/es6-symbol/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports=__webpack_require__("./node_modules/es6-symbol/is-implemented.js")()?Symbol:__webpack_require__("./node_modules/es6-symbol/polyfill.js");

/***/ },

/***/ "./node_modules/es6-symbol/is-implemented.js":
/***/ function(module, exports) {

	"use strict";var validTypes={object:!0,symbol:!0};module.exports=function(){var t;if("function"!=typeof Symbol)return!1;t=Symbol("test symbol");try{String(t)}catch(o){return!1}return!!validTypes[typeof Symbol.iterator]&&(!!validTypes[typeof Symbol.toPrimitive]&&!!validTypes[typeof Symbol.toStringTag])};

/***/ },

/***/ "./node_modules/es6-symbol/polyfill.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var d=__webpack_require__("./node_modules/d/index.js"),validateSymbol=__webpack_require__("./node_modules/es6-symbol/validate-symbol.js"),create=Object.create,defineProperties=Object.defineProperties,defineProperty=Object.defineProperty,objPrototype=Object.prototype,NativeSymbol,SymbolPolyfill,HiddenSymbol,globalSymbols=create(null),isNativeSafe;if("function"==typeof Symbol){NativeSymbol=Symbol;try{String(NativeSymbol()),isNativeSafe=!0}catch(ignore){}}var generateName=function(){var o=create(null);return function(l){for(var e,t,i=0;o[l+(i||"")];)++i;return l+=i||"",o[l]=!0,e="@@"+l,defineProperty(objPrototype,e,d.gs(null,function(o){t||(t=!0,defineProperty(this,e,d(o)),t=!1)})),e}}();HiddenSymbol=function(o){if(this instanceof HiddenSymbol)throw new TypeError("TypeError: Symbol is not a constructor");return SymbolPolyfill(o)},module.exports=SymbolPolyfill=function o(l){var e;if(this instanceof o)throw new TypeError("TypeError: Symbol is not a constructor");return isNativeSafe?NativeSymbol(l):(e=create(HiddenSymbol.prototype),l=void 0===l?"":String(l),defineProperties(e,{__description__:d("",l),__name__:d("",generateName(l))}))},defineProperties(SymbolPolyfill,{"for":d(function(o){return globalSymbols[o]?globalSymbols[o]:globalSymbols[o]=SymbolPolyfill(String(o))}),keyFor:d(function(o){var l;validateSymbol(o);for(l in globalSymbols)if(globalSymbols[l]===o)return l}),hasInstance:d("",NativeSymbol&&NativeSymbol.hasInstance||SymbolPolyfill("hasInstance")),isConcatSpreadable:d("",NativeSymbol&&NativeSymbol.isConcatSpreadable||SymbolPolyfill("isConcatSpreadable")),iterator:d("",NativeSymbol&&NativeSymbol.iterator||SymbolPolyfill("iterator")),match:d("",NativeSymbol&&NativeSymbol.match||SymbolPolyfill("match")),replace:d("",NativeSymbol&&NativeSymbol.replace||SymbolPolyfill("replace")),search:d("",NativeSymbol&&NativeSymbol.search||SymbolPolyfill("search")),species:d("",NativeSymbol&&NativeSymbol.species||SymbolPolyfill("species")),split:d("",NativeSymbol&&NativeSymbol.split||SymbolPolyfill("split")),toPrimitive:d("",NativeSymbol&&NativeSymbol.toPrimitive||SymbolPolyfill("toPrimitive")),toStringTag:d("",NativeSymbol&&NativeSymbol.toStringTag||SymbolPolyfill("toStringTag")),unscopables:d("",NativeSymbol&&NativeSymbol.unscopables||SymbolPolyfill("unscopables"))}),defineProperties(HiddenSymbol.prototype,{constructor:d(SymbolPolyfill),toString:d("",function(){return this.__name__})}),defineProperties(SymbolPolyfill.prototype,{toString:d(function(){return"Symbol ("+validateSymbol(this).__description__+")"}),valueOf:d(function(){return validateSymbol(this)})}),defineProperty(SymbolPolyfill.prototype,SymbolPolyfill.toPrimitive,d("",function(){var o=validateSymbol(this);return"symbol"==typeof o?o:o.toString()})),defineProperty(SymbolPolyfill.prototype,SymbolPolyfill.toStringTag,d("c","Symbol")),defineProperty(HiddenSymbol.prototype,SymbolPolyfill.toStringTag,d("c",SymbolPolyfill.prototype[SymbolPolyfill.toStringTag])),defineProperty(HiddenSymbol.prototype,SymbolPolyfill.toPrimitive,d("c",SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive]));

/***/ },

/***/ "./node_modules/es6-symbol/validate-symbol.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var isSymbol=__webpack_require__("./node_modules/es6-symbol/is-symbol.js");module.exports=function(r){if(!isSymbol(r))throw new TypeError(r+" is not a symbol");return r};

/***/ },

/***/ "./node_modules/es6-symbol/is-symbol.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(o){return!!o&&("symbol"==typeof o||!!o.constructor&&("Symbol"===o.constructor.name&&"Symbol"===o[o.constructor.toStringTag]))};

/***/ },

/***/ "./node_modules/es6-iterator/string.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var setPrototypeOf=__webpack_require__("./node_modules/es5-ext/object/set-prototype-of/index.js"),d=__webpack_require__("./node_modules/d/index.js"),Iterator=__webpack_require__("./node_modules/es6-iterator/index.js"),defineProperty=Object.defineProperty,StringIterator;StringIterator=module.exports=function(t){return this instanceof StringIterator?(t=String(t),Iterator.call(this,t),void defineProperty(this,"__length__",d("",t.length))):new StringIterator(t)},setPrototypeOf&&setPrototypeOf(StringIterator,Iterator),StringIterator.prototype=Object.create(Iterator.prototype,{constructor:d(StringIterator),_next:d(function(){if(this.__list__)return this.__nextIndex__<this.__length__?this.__nextIndex__++:void this._unBind()}),_resolve:d(function(t){var e,r=this.__list__[t];return this.__nextIndex__===this.__length__?r:(e=r.charCodeAt(0),e>=55296&&e<=56319?r+this.__list__[this.__nextIndex__++]:r)}),toString:d(function(){return"[object String Iterator]"})});

/***/ },

/***/ "./node_modules/es6-iterator/valid-iterable.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var isIterable=__webpack_require__("./node_modules/es6-iterator/is-iterable.js");module.exports=function(e){if(!isIterable(e))throw new TypeError(e+" is not iterable");return e};

/***/ },

/***/ "./node_modules/es6-iterator/is-iterable.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var isArguments=__webpack_require__("./node_modules/es5-ext/function/is-arguments.js"),isString=__webpack_require__("./node_modules/es5-ext/string/is-string.js"),iteratorSymbol=__webpack_require__("./node_modules/es6-symbol/index.js").iterator,isArray=Array.isArray;module.exports=function(r){return null!=r&&(!!isArray(r)||(!!isString(r)||(!!isArguments(r)||"function"==typeof r[iteratorSymbol])))};

/***/ },

/***/ "./node_modules/es6-iterator/for-of.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var isArguments=__webpack_require__("./node_modules/es5-ext/function/is-arguments.js"),callable=__webpack_require__("./node_modules/es5-ext/object/valid-callable.js"),isString=__webpack_require__("./node_modules/es5-ext/string/is-string.js"),get=__webpack_require__("./node_modules/es6-iterator/get.js"),isArray=Array.isArray,call=Function.prototype.call,some=Array.prototype.some;module.exports=function(r,e){var t,l,i,a,n,s,c,o,u=arguments[2];if(isArray(r)||isArguments(r)?t="array":isString(r)?t="string":r=get(r),callable(e),i=function(){a=!0},"array"===t)return void some.call(r,function(r){if(call.call(e,u,r,i),a)return!0});if("string"!==t)for(l=r.next();!l.done;){if(call.call(e,u,l.value,i),a)return;l=r.next()}else for(s=r.length,n=0;n<s&&(c=r[n],n+1<s&&(o=c.charCodeAt(0),o>=55296&&o<=56319&&(c+=r[++n])),call.call(e,u,c,i),!a);++n);};

/***/ },

/***/ "./node_modules/es6-weak-map/is-native-implemented.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(){return"function"==typeof WeakMap&&"[object WeakMap]"===Object.prototype.toString.call(new WeakMap)}();

/***/ },

/***/ "./node_modules/escope/lib/scope.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function isStrictScope(e,t,i,r){var s,n,o,l,a;if(e.upper&&e.upper.isStrict)return!0;if(t.type===_estraverse.Syntax.ArrowFunctionExpression)return!0;if(i)return!0;if("class"===e.type||"module"===e.type)return!0;if("block"===e.type||"switch"===e.type)return!1;if("function"===e.type)s=t.type===_estraverse.Syntax.Program?t:t.body;else{if("global"!==e.type)return!1;s=t}if(r){for(n=0,o=s.body.length;n<o&&(l=s.body[n],l.type===_estraverse.Syntax.DirectiveStatement);++n)if('"use strict"'===l.raw||"'use strict'"===l.raw)return!0}else for(n=0,o=s.body.length;n<o&&(l=s.body[n],l.type===_estraverse.Syntax.ExpressionStatement)&&(a=l.expression,a.type===_estraverse.Syntax.Literal&&"string"==typeof a.value);++n)if(null!=a.raw){if('"use strict"'===a.raw||"'use strict'"===a.raw)return!0}else if("use strict"===a.value)return!0;return!1}function registerScope(e,t){var i;e.scopes.push(t),i=e.__nodeToScope.get(t.block),i?i.push(t):e.__nodeToScope.set(t.block,[t])}function shouldBeStatically(e){return e.type===_variable2["default"].ClassName||e.type===_variable2["default"].Variable&&"var"!==e.parent.kind}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ClassScope=exports.ForScope=exports.FunctionScope=exports.SwitchScope=exports.BlockScope=exports.TDZScope=exports.WithScope=exports.CatchScope=exports.FunctionExpressionNameScope=exports.ModuleScope=exports.GlobalScope=void 0;var _get=function e(t,i,r){null===t&&(t=Function.prototype);var s=Object.getOwnPropertyDescriptor(t,i);if(void 0===s){var n=Object.getPrototypeOf(t);return null===n?void 0:e(n,i,r)}if("value"in s)return s.value;var o=s.get;if(void 0!==o)return o.call(r)},_createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),_estraverse=__webpack_require__("./node_modules/escope/node_modules/estraverse/estraverse.js"),_es6Map=__webpack_require__("./node_modules/es6-map/index.js"),_es6Map2=_interopRequireDefault(_es6Map),_reference=__webpack_require__("./node_modules/escope/lib/reference.js"),_reference2=_interopRequireDefault(_reference),_variable=__webpack_require__("./node_modules/escope/lib/variable.js"),_variable2=_interopRequireDefault(_variable),_definition=__webpack_require__("./node_modules/escope/lib/definition.js"),_definition2=_interopRequireDefault(_definition),_assert=__webpack_require__("./node_modules/assert/assert.js"),_assert2=_interopRequireDefault(_assert),Scope=function(){function e(t,i,r,s,n){_classCallCheck(this,e),this.type=i,this.set=new _es6Map2["default"],this.taints=new _es6Map2["default"],this.dynamic="global"===this.type||"with"===this.type,this.block=s,this.through=[],this.variables=[],this.references=[],this.variableScope="global"===this.type||"function"===this.type||"module"===this.type?this:r.variableScope,this.functionExpressionScope=!1,this.directCallToEvalScope=!1,this.thisFound=!1,this.__left=[],this.upper=r,this.isStrict=isStrictScope(this,s,n,t.__useDirective()),this.childScopes=[],this.upper&&this.upper.childScopes.push(this),this.__declaredVariables=t.__declaredVariables,registerScope(t,this)}return _createClass(e,[{key:"__shouldStaticallyClose",value:function(e){return!this.dynamic||e.__isOptimistic()}},{key:"__shouldStaticallyCloseForGlobal",value:function(e){var t=e.identifier.name;if(!this.set.has(t))return!1;var i=this.set.get(t),r=i.defs;return r.length>0&&r.every(shouldBeStatically)}},{key:"__staticCloseRef",value:function(e){this.__resolve(e)||this.__delegateToUpperScope(e)}},{key:"__dynamicCloseRef",value:function(e){var t=this;do t.through.push(e),t=t.upper;while(t)}},{key:"__globalCloseRef",value:function(e){this.__shouldStaticallyCloseForGlobal(e)?this.__staticCloseRef(e):this.__dynamicCloseRef(e)}},{key:"__close",value:function(e){var t;t=this.__shouldStaticallyClose(e)?this.__staticCloseRef:"global"!==this.type?this.__dynamicCloseRef:this.__globalCloseRef;for(var i=0,r=this.__left.length;i<r;++i){var s=this.__left[i];t.call(this,s)}return this.__left=null,this.upper}},{key:"__resolve",value:function(e){var t,i;return i=e.identifier.name,!!this.set.has(i)&&(t=this.set.get(i),t.references.push(e),t.stack=t.stack&&e.from.variableScope===this.variableScope,e.tainted&&(t.tainted=!0,this.taints.set(t.name,!0)),e.resolved=t,!0)}},{key:"__delegateToUpperScope",value:function(e){this.upper&&this.upper.__left.push(e),this.through.push(e)}},{key:"__addDeclaredVariablesOfNode",value:function(e,t){if(null!=t){var i=this.__declaredVariables.get(t);null==i&&(i=[],this.__declaredVariables.set(t,i)),i.indexOf(e)===-1&&i.push(e)}}},{key:"__defineGeneric",value:function(e,t,i,r,s){var n;n=t.get(e),n||(n=new _variable2["default"](e,this),t.set(e,n),i.push(n)),s&&(n.defs.push(s),s.type!==_variable2["default"].TDZ&&(this.__addDeclaredVariablesOfNode(n,s.node),this.__addDeclaredVariablesOfNode(n,s.parent))),r&&n.identifiers.push(r)}},{key:"__define",value:function(e,t){e&&e.type===_estraverse.Syntax.Identifier&&this.__defineGeneric(e.name,this.set,this.variables,e,t)}},{key:"__referencing",value:function(e,t,i,r,s,n){if(e&&e.type===_estraverse.Syntax.Identifier&&"super"!==e.name){var o=new _reference2["default"](e,this,t||_reference2["default"].READ,i,r,(!!s),(!!n));this.references.push(o),this.__left.push(o)}}},{key:"__detectEval",value:function(){var e;e=this,this.directCallToEvalScope=!0;do e.dynamic=!0,e=e.upper;while(e)}},{key:"__detectThis",value:function(){this.thisFound=!0}},{key:"__isClosed",value:function(){return null===this.__left}},{key:"resolve",value:function(e){var t,i,r;for((0,_assert2["default"])(this.__isClosed(),"Scope should be closed."),(0,_assert2["default"])(e.type===_estraverse.Syntax.Identifier,"Target should be identifier."),i=0,r=this.references.length;i<r;++i)if(t=this.references[i],t.identifier===e)return t;return null}},{key:"isStatic",value:function(){return!this.dynamic}},{key:"isArgumentsMaterialized",value:function(){return!0}},{key:"isThisMaterialized",value:function(){return!0}},{key:"isUsedName",value:function(e){if(this.set.has(e))return!0;for(var t=0,i=this.through.length;t<i;++t)if(this.through[t].identifier.name===e)return!0;return!1}}]),e}();exports["default"]=Scope;var GlobalScope=exports.GlobalScope=function(e){function t(e,i){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e,"global",null,i,!1));return r.implicit={set:new _es6Map2["default"],variables:[],left:[]},r}return _inherits(t,e),_createClass(t,[{key:"__close",value:function(e){for(var i=[],r=0,s=this.__left.length;r<s;++r){var n=this.__left[r];n.__maybeImplicitGlobal&&!this.set.has(n.identifier.name)&&i.push(n.__maybeImplicitGlobal)}for(var o=0,l=i.length;o<l;++o){var a=i[o];this.__defineImplicit(a.pattern,new _definition2["default"](_variable2["default"].ImplicitGlobalVariable,a.pattern,a.node,null,null,null))}return this.implicit.left=this.__left,_get(Object.getPrototypeOf(t.prototype),"__close",this).call(this,e)}},{key:"__defineImplicit",value:function(e,t){e&&e.type===_estraverse.Syntax.Identifier&&this.__defineGeneric(e.name,this.implicit.set,this.implicit.variables,e,t)}}]),t}(Scope),ModuleScope=exports.ModuleScope=function(e){function t(e,i,r){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e,"module",i,r,!1))}return _inherits(t,e),t}(Scope),FunctionExpressionNameScope=exports.FunctionExpressionNameScope=function(e){function t(e,i,r){_classCallCheck(this,t);var s=_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e,"function-expression-name",i,r,!1));return s.__define(r.id,new _definition2["default"](_variable2["default"].FunctionName,r.id,r,null,null,null)),s.functionExpressionScope=!0,s}return _inherits(t,e),t}(Scope),CatchScope=exports.CatchScope=function(e){function t(e,i,r){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e,"catch",i,r,!1))}return _inherits(t,e),t}(Scope),WithScope=exports.WithScope=function(e){function t(e,i,r){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e,"with",i,r,!1))}return _inherits(t,e),_createClass(t,[{key:"__close",value:function(e){if(this.__shouldStaticallyClose(e))return _get(Object.getPrototypeOf(t.prototype),"__close",this).call(this,e);for(var i=0,r=this.__left.length;i<r;++i){var s=this.__left[i];s.tainted=!0,this.__delegateToUpperScope(s)}return this.__left=null,this.upper}}]),t}(Scope),TDZScope=exports.TDZScope=function(e){function t(e,i,r){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e,"TDZ",i,r,!1))}return _inherits(t,e),t}(Scope),BlockScope=exports.BlockScope=function(e){function t(e,i,r){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e,"block",i,r,!1))}return _inherits(t,e),t}(Scope),SwitchScope=exports.SwitchScope=function(e){function t(e,i,r){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e,"switch",i,r,!1))}return _inherits(t,e),t}(Scope),FunctionScope=exports.FunctionScope=function(e){function t(e,i,r,s){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e,"function",i,r,s));return n.block.type!==_estraverse.Syntax.ArrowFunctionExpression&&n.__defineArguments(),n}return _inherits(t,e),_createClass(t,[{key:"isArgumentsMaterialized",value:function(){if(this.block.type===_estraverse.Syntax.ArrowFunctionExpression)return!1;if(!this.isStatic())return!0;var e=this.set.get("arguments");return(0,_assert2["default"])(e,"Always have arguments variable."),e.tainted||0!==e.references.length}},{key:"isThisMaterialized",value:function(){return!this.isStatic()||this.thisFound}},{key:"__defineArguments",value:function(){this.__defineGeneric("arguments",this.set,this.variables,null,null),this.taints.set("arguments",!0)}}]),t}(Scope),ForScope=exports.ForScope=function(e){function t(e,i,r){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e,"for",i,r,!1))}return _inherits(t,e),t}(Scope),ClassScope=exports.ClassScope=function(e){function t(e,i,r){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,e,"class",i,r,!1))}return _inherits(t,e),t}(Scope);

/***/ },

/***/ "./node_modules/escope/node_modules/estraverse/estraverse.js":
/***/ function(module, exports, __webpack_require__) {

	!function e(t){"use strict";function n(){}function r(e){var t,n,i={};for(t in e)e.hasOwnProperty(t)&&(n=e[t],"object"==typeof n&&null!==n?i[t]=r(n):i[t]=n);return i}function i(e){var t,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}function o(e,t){var n,r,i,o;for(r=e.length,i=0;r;)n=r>>>1,o=i+n,t(e[o])?r=n:(i=o+1,r-=n+1);return i}function a(e,t){var n,r,i,o;for(r=e.length,i=0;r;)n=r>>>1,o=i+n,t(e[o])?(i=o+1,r-=n+1):r=n;return i}function s(e,t){var n,r,i,o=b(t);for(r=0,i=o.length;r<i;r+=1)n=o[r],e[n]=t[n];return e}function l(e,t){this.parent=e,this.key=t}function p(e,t,n,r){this.node=e,this.path=t,this.wrap=n,this.ref=r}function c(){}function u(e){return null!=e&&("object"==typeof e&&"string"==typeof e.type)}function f(e,t){return(e===_.ObjectExpression||e===_.ObjectPattern)&&"properties"===t}function h(e,t){var n=new c;return n.traverse(e,t)}function m(e,t){var n=new c;return n.replace(e,t)}function d(e,t){var n;return n=o(t,function(t){return t.range[0]>e.range[0]}),e.extendedRange=[e.range[0],e.range[1]],n!==t.length&&(e.extendedRange[1]=t[n].range[0]),n-=1,n>=0&&(e.extendedRange[0]=t[n].range[1]),e}function y(e,t,n){var i,o,a,s,l=[];if(!e.range)throw new Error("attachComments needs range information");if(!n.length){if(t.length){for(a=0,o=t.length;a<o;a+=1)i=r(t[a]),i.extendedRange=[0,e.range[0]],l.push(i);e.leadingComments=l}return e}for(a=0,o=t.length;a<o;a+=1)l.push(d(r(t[a]),n));return s=0,h(e,{enter:function(e){for(var t;s<l.length&&(t=l[s],!(t.extendedRange[1]>e.range[0]));)t.extendedRange[1]===e.range[0]?(e.leadingComments||(e.leadingComments=[]),e.leadingComments.push(t),l.splice(s,1)):s+=1;return s===l.length?x.Break:l[s].extendedRange[0]>e.range[1]?x.Skip:void 0}}),s=0,h(e,{leave:function(e){for(var t;s<l.length&&(t=l[s],!(e.range[1]<t.extendedRange[0]));)e.range[1]===t.extendedRange[0]?(e.trailingComments||(e.trailingComments=[]),e.trailingComments.push(t),l.splice(s,1)):s+=1;return s===l.length?x.Break:l[s].extendedRange[0]>e.range[1]?x.Skip:void 0}}),e}var _,g,x,E,S,b,k,v,w;return g=Array.isArray,g||(g=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),n(i),n(a),S=Object.create||function(){function e(){}return function(t){return e.prototype=t,new e}}(),b=Object.keys||function(e){var t,n=[];for(t in e)n.push(t);return n},_={AssignmentExpression:"AssignmentExpression",AssignmentPattern:"AssignmentPattern",ArrayExpression:"ArrayExpression",ArrayPattern:"ArrayPattern",ArrowFunctionExpression:"ArrowFunctionExpression",AwaitExpression:"AwaitExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ClassBody:"ClassBody",ClassDeclaration:"ClassDeclaration",ClassExpression:"ClassExpression",ComprehensionBlock:"ComprehensionBlock",ComprehensionExpression:"ComprehensionExpression",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DebuggerStatement:"DebuggerStatement",DirectiveStatement:"DirectiveStatement",DoWhileStatement:"DoWhileStatement",EmptyStatement:"EmptyStatement",ExportAllDeclaration:"ExportAllDeclaration",ExportDefaultDeclaration:"ExportDefaultDeclaration",ExportNamedDeclaration:"ExportNamedDeclaration",ExportSpecifier:"ExportSpecifier",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForInStatement:"ForInStatement",ForOfStatement:"ForOfStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",GeneratorExpression:"GeneratorExpression",Identifier:"Identifier",IfStatement:"IfStatement",ImportDeclaration:"ImportDeclaration",ImportDefaultSpecifier:"ImportDefaultSpecifier",ImportNamespaceSpecifier:"ImportNamespaceSpecifier",ImportSpecifier:"ImportSpecifier",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",MetaProperty:"MetaProperty",MethodDefinition:"MethodDefinition",ModuleSpecifier:"ModuleSpecifier",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",ObjectPattern:"ObjectPattern",Program:"Program",Property:"Property",RestElement:"RestElement",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SpreadElement:"SpreadElement",Super:"Super",SwitchStatement:"SwitchStatement",SwitchCase:"SwitchCase",TaggedTemplateExpression:"TaggedTemplateExpression",TemplateElement:"TemplateElement",TemplateLiteral:"TemplateLiteral",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement",YieldExpression:"YieldExpression"},E={AssignmentExpression:["left","right"],AssignmentPattern:["left","right"],ArrayExpression:["elements"],ArrayPattern:["elements"],ArrowFunctionExpression:["params","body"],AwaitExpression:["argument"],BlockStatement:["body"],BinaryExpression:["left","right"],BreakStatement:["label"],CallExpression:["callee","arguments"],CatchClause:["param","body"],ClassBody:["body"],ClassDeclaration:["id","superClass","body"],ClassExpression:["id","superClass","body"],ComprehensionBlock:["left","right"],ComprehensionExpression:["blocks","filter","body"],ConditionalExpression:["test","consequent","alternate"],ContinueStatement:["label"],DebuggerStatement:[],DirectiveStatement:[],DoWhileStatement:["body","test"],EmptyStatement:[],ExportAllDeclaration:["source"],ExportDefaultDeclaration:["declaration"],ExportNamedDeclaration:["declaration","specifiers","source"],ExportSpecifier:["exported","local"],ExpressionStatement:["expression"],ForStatement:["init","test","update","body"],ForInStatement:["left","right","body"],ForOfStatement:["left","right","body"],FunctionDeclaration:["id","params","body"],FunctionExpression:["id","params","body"],GeneratorExpression:["blocks","filter","body"],Identifier:[],IfStatement:["test","consequent","alternate"],ImportDeclaration:["specifiers","source"],ImportDefaultSpecifier:["local"],ImportNamespaceSpecifier:["local"],ImportSpecifier:["imported","local"],Literal:[],LabeledStatement:["label","body"],LogicalExpression:["left","right"],MemberExpression:["object","property"],MetaProperty:["meta","property"],MethodDefinition:["key","value"],ModuleSpecifier:[],NewExpression:["callee","arguments"],ObjectExpression:["properties"],ObjectPattern:["properties"],Program:["body"],Property:["key","value"],RestElement:["argument"],ReturnStatement:["argument"],SequenceExpression:["expressions"],SpreadElement:["argument"],Super:[],SwitchStatement:["discriminant","cases"],SwitchCase:["test","consequent"],TaggedTemplateExpression:["tag","quasi"],TemplateElement:[],TemplateLiteral:["quasis","expressions"],ThisExpression:[],ThrowStatement:["argument"],TryStatement:["block","handler","finalizer"],UnaryExpression:["argument"],UpdateExpression:["argument"],VariableDeclaration:["declarations"],VariableDeclarator:["id","init"],WhileStatement:["test","body"],WithStatement:["object","body"],YieldExpression:["argument"]},k={},v={},w={},x={Break:k,Skip:v,Remove:w},l.prototype.replace=function(e){this.parent[this.key]=e},l.prototype.remove=function(){return g(this.parent)?(this.parent.splice(this.key,1),!0):(this.replace(null),!1)},c.prototype.path=function(){function e(e,t){if(g(t))for(r=0,i=t.length;r<i;++r)e.push(t[r]);else e.push(t)}var t,n,r,i,o,a;if(!this.__current.path)return null;for(o=[],t=2,n=this.__leavelist.length;t<n;++t)a=this.__leavelist[t],e(o,a.path);return e(o,this.__current.path),o},c.prototype.type=function(){var e=this.current();return e.type||this.__current.wrap},c.prototype.parents=function(){var e,t,n;for(n=[],e=1,t=this.__leavelist.length;e<t;++e)n.push(this.__leavelist[e].node);return n},c.prototype.current=function(){return this.__current.node},c.prototype.__execute=function(e,t){var n,r;return r=void 0,n=this.__current,this.__current=t,this.__state=null,e&&(r=e.call(this,t.node,this.__leavelist[this.__leavelist.length-1].node)),this.__current=n,r},c.prototype.notify=function(e){this.__state=e},c.prototype.skip=function(){this.notify(v)},c.prototype["break"]=function(){this.notify(k)},c.prototype.remove=function(){this.notify(w)},c.prototype.__initialize=function(e,t){this.visitor=t,this.root=e,this.__worklist=[],this.__leavelist=[],this.__current=null,this.__state=null,this.__fallback=null,"iteration"===t.fallback?this.__fallback=b:"function"==typeof t.fallback&&(this.__fallback=t.fallback),this.__keys=E,t.keys&&(this.__keys=s(S(this.__keys),t.keys))},c.prototype.traverse=function(e,t){var n,r,i,o,a,s,l,c,h,m,d,y;for(this.__initialize(e,t),y={},n=this.__worklist,r=this.__leavelist,n.push(new p(e,null,null,null)),r.push(new p(null,null,null,null));n.length;)if(i=n.pop(),i!==y){if(i.node){if(s=this.__execute(t.enter,i),this.__state===k||s===k)return;if(n.push(y),r.push(i),this.__state===v||s===v)continue;if(o=i.node,a=o.type||i.wrap,m=this.__keys[a],!m){if(!this.__fallback)throw new Error("Unknown node type "+a+".");m=this.__fallback(o)}for(c=m.length;(c-=1)>=0;)if(l=m[c],d=o[l])if(g(d)){for(h=d.length;(h-=1)>=0;)if(d[h]){if(f(a,m[c]))i=new p(d[h],[l,h],"Property",null);else{if(!u(d[h]))continue;i=new p(d[h],[l,h],null,null)}n.push(i)}}else u(d)&&n.push(new p(d,l,null,null))}}else if(i=r.pop(),s=this.__execute(t.leave,i),this.__state===k||s===k)return},c.prototype.replace=function(e,t){function n(e){var t,n,i,o;if(e.ref.remove())for(n=e.ref.key,o=e.ref.parent,t=r.length;t--;)if(i=r[t],i.ref&&i.ref.parent===o){if(i.ref.key<n)break;--i.ref.key}}var r,i,o,a,s,c,h,m,d,y,_,x,E;for(this.__initialize(e,t),_={},r=this.__worklist,i=this.__leavelist,x={root:e},c=new p(e,null,null,new l(x,"root")),r.push(c),i.push(c);r.length;)if(c=r.pop(),c!==_){if(s=this.__execute(t.enter,c),void 0!==s&&s!==k&&s!==v&&s!==w&&(c.ref.replace(s),c.node=s),this.__state!==w&&s!==w||(n(c),c.node=null),this.__state===k||s===k)return x.root;if(o=c.node,o&&(r.push(_),i.push(c),this.__state!==v&&s!==v)){if(a=o.type||c.wrap,d=this.__keys[a],!d){if(!this.__fallback)throw new Error("Unknown node type "+a+".");d=this.__fallback(o)}for(h=d.length;(h-=1)>=0;)if(E=d[h],y=o[E])if(g(y)){for(m=y.length;(m-=1)>=0;)if(y[m]){if(f(a,d[h]))c=new p(y[m],[E,m],"Property",new l(y,m));else{if(!u(y[m]))continue;c=new p(y[m],[E,m],null,new l(y,m))}r.push(c)}}else u(y)&&r.push(new p(y,E,null,new l(o,E)))}}else if(c=i.pop(),s=this.__execute(t.leave,c),void 0!==s&&s!==k&&s!==v&&s!==w&&c.ref.replace(s),this.__state!==w&&s!==w||n(c),this.__state===k||s===k)return x.root;return x.root},t.version=__webpack_require__("./node_modules/escope/node_modules/estraverse/package.json").version,t.Syntax=_,t.traverse=h,t.replace=m,t.attachComments=y,t.VisitorKeys=E,t.VisitorOption=x,t.Controller=c,t.cloneEnvironment=function(){return e({})},t}(exports);

/***/ },

/***/ "./node_modules/escope/node_modules/estraverse/package.json":
/***/ function(module, exports) {

	module.exports = {
		"_args": [
			[
				"estraverse@^4.1.1",
				"/Users/fkling/git/astexplorer/node_modules/escope"
			]
		],
		"_from": "estraverse@>=4.1.1 <5.0.0",
		"_id": "estraverse@4.2.0",
		"_inCache": true,
		"_installable": true,
		"_location": "/escope/estraverse",
		"_nodeVersion": "0.12.9",
		"_npmOperationalInternal": {
			"host": "packages-12-west.internal.npmjs.com",
			"tmp": "tmp/estraverse-4.2.0.tgz_1457646738925_0.7118953282479197"
		},
		"_npmUser": {
			"email": "nicholas@nczconsulting.com",
			"name": "nzakas"
		},
		"_npmVersion": "2.14.9",
		"_phantomChildren": {},
		"_requested": {
			"name": "estraverse",
			"raw": "estraverse@^4.1.1",
			"rawSpec": "^4.1.1",
			"scope": null,
			"spec": ">=4.1.1 <5.0.0",
			"type": "range"
		},
		"_requiredBy": [
			"/escope"
		],
		"_resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.2.0.tgz",
		"_shasum": "0dee3fed31fcd469618ce7342099fc1afa0bdb13",
		"_shrinkwrap": null,
		"_spec": "estraverse@^4.1.1",
		"_where": "/Users/fkling/git/astexplorer/node_modules/escope",
		"bugs": {
			"url": "https://github.com/estools/estraverse/issues"
		},
		"dependencies": {},
		"description": "ECMAScript JS AST traversal functions",
		"devDependencies": {
			"babel-preset-es2015": "^6.3.13",
			"babel-register": "^6.3.13",
			"chai": "^2.1.1",
			"espree": "^1.11.0",
			"gulp": "^3.8.10",
			"gulp-bump": "^0.2.2",
			"gulp-filter": "^2.0.0",
			"gulp-git": "^1.0.1",
			"gulp-tag-version": "^1.2.1",
			"jshint": "^2.5.6",
			"mocha": "^2.1.0"
		},
		"directories": {},
		"dist": {
			"shasum": "0dee3fed31fcd469618ce7342099fc1afa0bdb13",
			"tarball": "https://registry.npmjs.org/estraverse/-/estraverse-4.2.0.tgz"
		},
		"engines": {
			"node": ">=0.10.0"
		},
		"gitHead": "6f6a4e99653908e859c7c10d04d9518bf4844ede",
		"homepage": "https://github.com/estools/estraverse",
		"license": "BSD-2-Clause",
		"main": "estraverse.js",
		"maintainers": [
			{
				"email": "utatane.tea@gmail.com",
				"name": "constellation"
			},
			{
				"email": "npm@michael.ficarra.me",
				"name": "michaelficarra"
			},
			{
				"email": "nicholas@nczconsulting.com",
				"name": "nzakas"
			}
		],
		"name": "estraverse",
		"optionalDependencies": {},
		"readme": "ERROR: No README data found!",
		"repository": {
			"type": "git",
			"url": "git+ssh://git@github.com/estools/estraverse.git"
		},
		"scripts": {
			"lint": "jshint estraverse.js",
			"test": "npm run-script lint && npm run-script unit-test",
			"unit-test": "mocha --compilers js:babel-register"
		},
		"version": "4.2.0"
	};

/***/ },

/***/ "./node_modules/es6-map/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports=__webpack_require__("./node_modules/es6-map/is-implemented.js")()?Map:__webpack_require__("./node_modules/es6-map/polyfill.js");

/***/ },

/***/ "./node_modules/es6-map/is-implemented.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(){var e,t,n;if("function"!=typeof Map)return!1;try{e=new Map([["raz","one"],["dwa","two"],["trzy","three"]])}catch(o){return!1}return"[object Map]"===String(e)&&(3===e.size&&("function"==typeof e.clear&&("function"==typeof e["delete"]&&("function"==typeof e.entries&&("function"==typeof e.forEach&&("function"==typeof e.get&&("function"==typeof e.has&&("function"==typeof e.keys&&("function"==typeof e.set&&("function"==typeof e.values&&(t=e.entries(),n=t.next(),n.done===!1&&(!!n.value&&("raz"===n.value[0]&&"one"===n.value[1])))))))))))))};

/***/ },

/***/ "./node_modules/es6-map/polyfill.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var clear=__webpack_require__("./node_modules/es5-ext/array/#/clear.js"),eIndexOf=__webpack_require__("./node_modules/es5-ext/array/#/e-index-of.js"),setPrototypeOf=__webpack_require__("./node_modules/es5-ext/object/set-prototype-of/index.js"),callable=__webpack_require__("./node_modules/es5-ext/object/valid-callable.js"),validValue=__webpack_require__("./node_modules/es5-ext/object/valid-value.js"),d=__webpack_require__("./node_modules/d/index.js"),ee=__webpack_require__("./node_modules/event-emitter/index.js"),Symbol=__webpack_require__("./node_modules/es6-symbol/index.js"),iterator=__webpack_require__("./node_modules/es6-iterator/valid-iterable.js"),forOf=__webpack_require__("./node_modules/es6-iterator/for-of.js"),Iterator=__webpack_require__("./node_modules/es6-map/lib/iterator.js"),isNative=__webpack_require__("./node_modules/es6-map/is-native-implemented.js"),call=Function.prototype.call,defineProperties=Object.defineProperties,getPrototypeOf=Object.getPrototypeOf,MapPoly;module.exports=MapPoly=function(){var e,t,a,r=arguments[0];if(!(this instanceof MapPoly))throw new TypeError("Constructor requires 'new'");return a=isNative&&setPrototypeOf&&Map!==MapPoly?setPrototypeOf(new Map,getPrototypeOf(this)):this,null!=r&&iterator(r),defineProperties(a,{__mapKeysData__:d("c",e=[]),__mapValuesData__:d("c",t=[])}),r?(forOf(r,function(a){var r=validValue(a)[0];a=a[1],eIndexOf.call(e,r)===-1&&(e.push(r),t.push(a))},a),a):a},isNative&&(setPrototypeOf&&setPrototypeOf(MapPoly,Map),MapPoly.prototype=Object.create(Map.prototype,{constructor:d(MapPoly)})),ee(defineProperties(MapPoly.prototype,{clear:d(function(){this.__mapKeysData__.length&&(clear.call(this.__mapKeysData__),clear.call(this.__mapValuesData__),this.emit("_clear"))}),"delete":d(function(e){var t=eIndexOf.call(this.__mapKeysData__,e);return t!==-1&&(this.__mapKeysData__.splice(t,1),this.__mapValuesData__.splice(t,1),this.emit("_delete",t,e),!0)}),entries:d(function(){return new Iterator(this,"key+value")}),forEach:d(function(e){var t,a,r=arguments[1];for(callable(e),t=this.entries(),a=t._next();void 0!==a;)call.call(e,r,this.__mapValuesData__[a],this.__mapKeysData__[a],this),a=t._next()}),get:d(function(e){var t=eIndexOf.call(this.__mapKeysData__,e);if(t!==-1)return this.__mapValuesData__[t]}),has:d(function(e){return eIndexOf.call(this.__mapKeysData__,e)!==-1}),keys:d(function(){return new Iterator(this,"key")}),set:d(function(e,t){var a,r=eIndexOf.call(this.__mapKeysData__,e);return r===-1&&(r=this.__mapKeysData__.push(e)-1,a=!0),this.__mapValuesData__[r]=t,a&&this.emit("_add",r,e),this}),size:d.gs(function(){return this.__mapKeysData__.length}),values:d(function(){return new Iterator(this,"value")}),toString:d(function(){return"[object Map]"})})),Object.defineProperty(MapPoly.prototype,Symbol.iterator,d(function(){return this.entries()})),Object.defineProperty(MapPoly.prototype,Symbol.toStringTag,d("c","Map"));

/***/ },

/***/ "./node_modules/es5-ext/array/#/e-index-of.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var toPosInt=__webpack_require__("./node_modules/es5-ext/number/to-pos-integer.js"),value=__webpack_require__("./node_modules/es5-ext/object/valid-value.js"),indexOf=Array.prototype.indexOf,hasOwnProperty=Object.prototype.hasOwnProperty,abs=Math.abs,floor=Math.floor;module.exports=function(t){var r,e,o,s;if(t===t)return indexOf.apply(this,arguments);for(e=toPosInt(value(this).length),o=arguments[1],o=isNaN(o)?0:o>=0?floor(o):toPosInt(this.length)-floor(abs(o)),r=o;r<e;++r)if(hasOwnProperty.call(this,r)&&(s=this[r],s!==s))return r;return-1};

/***/ },

/***/ "./node_modules/es5-ext/number/to-pos-integer.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var toInteger=__webpack_require__("./node_modules/es5-ext/number/to-integer.js"),max=Math.max;module.exports=function(e){return max(0,toInteger(e))};

/***/ },

/***/ "./node_modules/es5-ext/number/to-integer.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var sign=__webpack_require__("./node_modules/es5-ext/math/sign/index.js"),abs=Math.abs,floor=Math.floor;module.exports=function(r){return isNaN(r)?0:(r=Number(r),0!==r&&isFinite(r)?sign(r)*floor(abs(r)):r)};

/***/ },

/***/ "./node_modules/es5-ext/math/sign/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports=__webpack_require__("./node_modules/es5-ext/math/sign/is-implemented.js")()?Math.sign:__webpack_require__("./node_modules/es5-ext/math/sign/shim.js");

/***/ },

/***/ "./node_modules/es5-ext/math/sign/is-implemented.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(){var t=Math.sign;return"function"==typeof t&&(1===t(10)&&t(-20)===-1)};

/***/ },

/***/ "./node_modules/es5-ext/math/sign/shim.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(e){return e=Number(e),isNaN(e)||0===e?e:e>0?1:-1};

/***/ },

/***/ "./node_modules/event-emitter/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var d=__webpack_require__("./node_modules/d/index.js"),callable=__webpack_require__("./node_modules/es5-ext/object/valid-callable.js"),apply=Function.prototype.apply,call=Function.prototype.call,create=Object.create,defineProperty=Object.defineProperty,defineProperties=Object.defineProperties,hasOwnProperty=Object.prototype.hasOwnProperty,descriptor={configurable:!0,enumerable:!1,writable:!0},on,once,off,emit,methods,descriptors,base;on=function(e,t){var r;return callable(t),hasOwnProperty.call(this,"__ee__")?r=this.__ee__:(r=descriptor.value=create(null),defineProperty(this,"__ee__",descriptor),descriptor.value=null),r[e]?"object"==typeof r[e]?r[e].push(t):r[e]=[r[e],t]:r[e]=t,this},once=function(e,t){var r,l;return callable(t),l=this,on.call(this,e,r=function(){off.call(l,e,r),apply.call(t,this,arguments)}),r.__eeOnceListener__=t,this},off=function(e,t){var r,l,o,i;if(callable(t),!hasOwnProperty.call(this,"__ee__"))return this;if(r=this.__ee__,!r[e])return this;if(l=r[e],"object"==typeof l)for(i=0;o=l[i];++i)o!==t&&o.__eeOnceListener__!==t||(2===l.length?r[e]=l[i?0:1]:l.splice(i,1));else l!==t&&l.__eeOnceListener__!==t||delete r[e];return this},emit=function(e){var t,r,l,o,i;if(hasOwnProperty.call(this,"__ee__")&&(o=this.__ee__[e]))if("object"==typeof o){for(r=arguments.length,i=new Array(r-1),t=1;t<r;++t)i[t-1]=arguments[t];for(o=o.slice(),t=0;l=o[t];++t)apply.call(l,this,i)}else switch(arguments.length){case 1:call.call(o,this);break;case 2:call.call(o,this,arguments[1]);break;case 3:call.call(o,this,arguments[1],arguments[2]);break;default:for(r=arguments.length,i=new Array(r-1),t=1;t<r;++t)i[t-1]=arguments[t];apply.call(o,this,i)}},methods={on:on,once:once,off:off,emit:emit},descriptors={on:d(on),once:d(once),off:d(off),emit:d(emit)},base=defineProperties({},descriptors),module.exports=exports=function(e){return null==e?create(base):defineProperties(Object(e),descriptors)},exports.methods=methods;

/***/ },

/***/ "./node_modules/es6-map/lib/iterator.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var setPrototypeOf=__webpack_require__("./node_modules/es5-ext/object/set-prototype-of/index.js"),d=__webpack_require__("./node_modules/d/index.js"),Iterator=__webpack_require__("./node_modules/es6-iterator/index.js"),toStringTagSymbol=__webpack_require__("./node_modules/es6-symbol/index.js").toStringTag,kinds=__webpack_require__("./node_modules/es6-map/lib/iterator-kinds.js"),defineProperties=Object.defineProperties,unBind=Iterator.prototype._unBind,MapIterator;MapIterator=module.exports=function(t,e){return this instanceof MapIterator?(Iterator.call(this,t.__mapKeysData__,t),e&&kinds[e]||(e="key+value"),void defineProperties(this,{__kind__:d("",e),__values__:d("w",t.__mapValuesData__)})):new MapIterator(t,e)},setPrototypeOf&&setPrototypeOf(MapIterator,Iterator),MapIterator.prototype=Object.create(Iterator.prototype,{constructor:d(MapIterator),_resolve:d(function(t){return"value"===this.__kind__?this.__values__[t]:"key"===this.__kind__?this.__list__[t]:[this.__list__[t],this.__values__[t]]}),_unBind:d(function(){this.__values__=null,unBind.call(this)}),toString:d(function(){return"[object Map Iterator]"})}),Object.defineProperty(MapIterator.prototype,toStringTagSymbol,d("c","Map Iterator"));

/***/ },

/***/ "./node_modules/es6-map/lib/iterator-kinds.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";module.exports=__webpack_require__("./node_modules/es5-ext/object/primitive-set.js")("key","value","key+value");

/***/ },

/***/ "./node_modules/es5-ext/object/primitive-set.js":
/***/ function(module, exports) {

	"use strict";var forEach=Array.prototype.forEach,create=Object.create;module.exports=function(r){var e=create(null);return forEach.call(arguments,function(r){e[r]=!0}),e};

/***/ },

/***/ "./node_modules/es6-map/is-native-implemented.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(){return"undefined"!=typeof Map&&"[object Map]"===Object.prototype.toString.call(new Map)}();

/***/ },

/***/ "./node_modules/escope/lib/reference.js":
/***/ function(module, exports) {

	"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),READ=1,WRITE=2,RW=READ|WRITE,Reference=function(){function e(t,i,n,r,a,s,l){_classCallCheck(this,e),this.identifier=t,this.from=i,this.tainted=!1,this.resolved=null,this.flag=n,this.isWrite()&&(this.writeExpr=r,this.partial=s,this.init=l),this.__maybeImplicitGlobal=a}return _createClass(e,[{key:"isStatic",value:function(){return!this.tainted&&this.resolved&&this.resolved.scope.isStatic()}},{key:"isWrite",value:function(){return!!(this.flag&e.WRITE)}},{key:"isRead",value:function(){return!!(this.flag&e.READ)}},{key:"isReadOnly",value:function(){return this.flag===e.READ}},{key:"isWriteOnly",value:function(){return this.flag===e.WRITE}},{key:"isReadWrite",value:function(){return this.flag===e.RW}}]),e}();exports["default"]=Reference,Reference.READ=READ,Reference.WRITE=WRITE,Reference.RW=RW;

/***/ },

/***/ "./node_modules/escope/lib/variable.js":
/***/ function(module, exports) {

	"use strict";function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var Variable=function a(e,i){_classCallCheck(this,a),this.name=e,this.identifiers=[],this.references=[],this.defs=[],this.tainted=!1,this.stack=!0,this.scope=i};exports["default"]=Variable,Variable.CatchClause="CatchClause",Variable.Parameter="Parameter",Variable.FunctionName="FunctionName",Variable.ClassName="ClassName",Variable.Variable="Variable",Variable.ImportBinding="ImportBinding",Variable.TDZ="TDZ",Variable.ImplicitGlobalVariable="ImplicitGlobalVariable";

/***/ },

/***/ "./node_modules/escope/lib/definition.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Definition=exports.ParameterDefinition=void 0;var _variable=__webpack_require__("./node_modules/escope/lib/variable.js"),_variable2=_interopRequireDefault(_variable),Definition=function e(t,i,n,r,o,a){_classCallCheck(this,e),this.type=t,this.name=i,this.node=n,this.parent=r,this.index=o,this.kind=a};exports["default"]=Definition;var ParameterDefinition=function(e){function t(e,i,n,r){_classCallCheck(this,t);var o=_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,_variable2["default"].Parameter,e,i,null,n,null));return o.rest=r,o}return _inherits(t,e),t}(Definition);exports.ParameterDefinition=ParameterDefinition,exports.Definition=Definition;

/***/ },

/***/ "./node_modules/escope/lib/referencer.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function traverseIdentifierInPattern(e,t,i,n){var r=new _patternVisitor2["default"](e,t,n);r.visit(t),null!=i&&r.rightHandNodes.forEach(i.visit,i)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),_estraverse=__webpack_require__("./node_modules/escope/node_modules/estraverse/estraverse.js"),_esrecurse=__webpack_require__("./node_modules/esrecurse/esrecurse.js"),_esrecurse2=_interopRequireDefault(_esrecurse),_reference=__webpack_require__("./node_modules/escope/lib/reference.js"),_reference2=_interopRequireDefault(_reference),_variable=__webpack_require__("./node_modules/escope/lib/variable.js"),_variable2=_interopRequireDefault(_variable),_patternVisitor=__webpack_require__("./node_modules/escope/lib/pattern-visitor.js"),_patternVisitor2=_interopRequireDefault(_patternVisitor),_definition=__webpack_require__("./node_modules/escope/lib/definition.js"),_assert=__webpack_require__("./node_modules/assert/assert.js"),_assert2=_interopRequireDefault(_assert),Importer=function(e){function t(e,i){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,null,i.options));return n.declaration=e,n.referencer=i,n}return _inherits(t,e),_createClass(t,[{key:"visitImport",value:function(e,t){var i=this;this.referencer.visitPattern(e,function(e){i.referencer.currentScope().__define(e,new _definition.Definition(_variable2["default"].ImportBinding,e,t,i.declaration,null,null))})}},{key:"ImportNamespaceSpecifier",value:function(e){var t=e.local||e.id;t&&this.visitImport(t,e)}},{key:"ImportDefaultSpecifier",value:function(e){var t=e.local||e.id;this.visitImport(t,e)}},{key:"ImportSpecifier",value:function(e){var t=e.local||e.id;e.name?this.visitImport(e.name,e):this.visitImport(t,e)}}]),t}(_esrecurse2["default"].Visitor),Referencer=function(e){function t(e,i){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,null,e));return n.options=e,n.scopeManager=i,n.parent=null,n.isInnerMethodDefinition=!1,n}return _inherits(t,e),_createClass(t,[{key:"currentScope",value:function(){return this.scopeManager.__currentScope}},{key:"close",value:function(e){for(;this.currentScope()&&e===this.currentScope().block;)this.scopeManager.__currentScope=this.currentScope().__close(this.scopeManager)}},{key:"pushInnerMethodDefinition",value:function(e){var t=this.isInnerMethodDefinition;return this.isInnerMethodDefinition=e,t}},{key:"popInnerMethodDefinition",value:function(e){this.isInnerMethodDefinition=e}},{key:"materializeTDZScope",value:function(e,t){this.scopeManager.__nestTDZScope(e,t),this.visitVariableDeclaration(this.currentScope(),_variable2["default"].TDZ,t.left,0,!0)}},{key:"materializeIterationScope",value:function(e){var t,i=this;this.scopeManager.__nestForScope(e),t=e.left,this.visitVariableDeclaration(this.currentScope(),_variable2["default"].Variable,t,0),this.visitPattern(t.declarations[0].id,function(t){i.currentScope().__referencing(t,_reference2["default"].WRITE,e.right,null,!0,!0)})}},{key:"referencingDefaultValue",value:function(e,t,i,n){var r=this.currentScope();t.forEach(function(t){r.__referencing(e,_reference2["default"].WRITE,t.right,i,e!==t.left,n)})}},{key:"visitPattern",value:function(e,t,i){"function"==typeof t&&(i=t,t={processRightHandNodes:!1}),traverseIdentifierInPattern(this.options,e,t.processRightHandNodes?this:null,i)}},{key:"visitFunction",value:function(e){var t,i,n=this;for(e.type===_estraverse.Syntax.FunctionDeclaration&&this.currentScope().__define(e.id,new _definition.Definition(_variable2["default"].FunctionName,e.id,e,null,null,null)),e.type===_estraverse.Syntax.FunctionExpression&&e.id&&this.scopeManager.__nestFunctionExpressionNameScope(e),this.scopeManager.__nestFunctionScope(e,this.isInnerMethodDefinition),t=0,i=e.params.length;t<i;++t)this.visitPattern(e.params[t],{processRightHandNodes:!0},function(i,r){n.currentScope().__define(i,new _definition.ParameterDefinition(i,e,t,r.rest)),n.referencingDefaultValue(i,r.assignments,null,!0)});e.rest&&this.visitPattern({type:"RestElement",argument:e.rest},function(t){n.currentScope().__define(t,new _definition.ParameterDefinition(t,e,e.params.length,(!0)))}),e.body.type===_estraverse.Syntax.BlockStatement?this.visitChildren(e.body):this.visit(e.body),this.close(e)}},{key:"visitClass",value:function(e){e.type===_estraverse.Syntax.ClassDeclaration&&this.currentScope().__define(e.id,new _definition.Definition(_variable2["default"].ClassName,e.id,e,null,null,null)),this.visit(e.superClass),this.scopeManager.__nestClassScope(e),e.id&&this.currentScope().__define(e.id,new _definition.Definition(_variable2["default"].ClassName,e.id,e)),this.visit(e.body),this.close(e)}},{key:"visitProperty",value:function(e){var t,i;e.computed&&this.visit(e.key),i=e.type===_estraverse.Syntax.MethodDefinition,i&&(t=this.pushInnerMethodDefinition(!0)),this.visit(e.value),i&&this.popInnerMethodDefinition(t)}},{key:"visitForIn",value:function(e){var t=this;e.left.type===_estraverse.Syntax.VariableDeclaration&&"var"!==e.left.kind?(this.materializeTDZScope(e.right,e),this.visit(e.right),this.close(e.right),this.materializeIterationScope(e),this.visit(e.body),this.close(e)):(e.left.type===_estraverse.Syntax.VariableDeclaration?(this.visit(e.left),this.visitPattern(e.left.declarations[0].id,function(i){t.currentScope().__referencing(i,_reference2["default"].WRITE,e.right,null,!0,!0)})):this.visitPattern(e.left,{processRightHandNodes:!0},function(i,n){var r=null;t.currentScope().isStrict||(r={pattern:i,node:e}),t.referencingDefaultValue(i,n.assignments,r,!1),t.currentScope().__referencing(i,_reference2["default"].WRITE,e.right,r,!0,!1)}),this.visit(e.right),this.visit(e.body))}},{key:"visitVariableDeclaration",value:function(e,t,i,n,r){var s,a,o=this;s=i.declarations[n],a=s.init,this.visitPattern(s.id,{processRightHandNodes:!r},function(c,l){e.__define(c,new _definition.Definition(t,c,s,i,n,i.kind)),r||o.referencingDefaultValue(c,l.assignments,null,!0),a&&o.currentScope().__referencing(c,_reference2["default"].WRITE,a,null,!l.topLevel,!0)})}},{key:"AssignmentExpression",value:function(e){var t=this;_patternVisitor2["default"].isPattern(e.left)?"="===e.operator?this.visitPattern(e.left,{processRightHandNodes:!0},function(i,n){var r=null;t.currentScope().isStrict||(r={pattern:i,node:e}),t.referencingDefaultValue(i,n.assignments,r,!1),t.currentScope().__referencing(i,_reference2["default"].WRITE,e.right,r,!n.topLevel,!1)}):this.currentScope().__referencing(e.left,_reference2["default"].RW,e.right):this.visit(e.left),this.visit(e.right)}},{key:"CatchClause",value:function(e){var t=this;this.scopeManager.__nestCatchScope(e),this.visitPattern(e.param,{processRightHandNodes:!0},function(i,n){t.currentScope().__define(i,new _definition.Definition(_variable2["default"].CatchClause,e.param,e,null,null,null)),t.referencingDefaultValue(i,n.assignments,null,!0)}),this.visit(e.body),this.close(e)}},{key:"Program",value:function(e){this.scopeManager.__nestGlobalScope(e),this.scopeManager.__isNodejsScope()&&(this.currentScope().isStrict=!1,this.scopeManager.__nestFunctionScope(e,!1)),this.scopeManager.__isES6()&&this.scopeManager.isModule()&&this.scopeManager.__nestModuleScope(e),this.scopeManager.isStrictModeSupported()&&this.scopeManager.isImpliedStrict()&&(this.currentScope().isStrict=!0),this.visitChildren(e),this.close(e)}},{key:"Identifier",value:function(e){this.currentScope().__referencing(e)}},{key:"UpdateExpression",value:function(e){_patternVisitor2["default"].isPattern(e.argument)?this.currentScope().__referencing(e.argument,_reference2["default"].RW,null):this.visitChildren(e)}},{key:"MemberExpression",value:function(e){this.visit(e.object),e.computed&&this.visit(e.property)}},{key:"Property",value:function(e){this.visitProperty(e)}},{key:"MethodDefinition",value:function(e){this.visitProperty(e)}},{key:"BreakStatement",value:function(){}},{key:"ContinueStatement",value:function(){}},{key:"LabeledStatement",value:function(e){this.visit(e.body)}},{key:"ForStatement",value:function(e){e.init&&e.init.type===_estraverse.Syntax.VariableDeclaration&&"var"!==e.init.kind&&this.scopeManager.__nestForScope(e),this.visitChildren(e),this.close(e)}},{key:"ClassExpression",value:function(e){this.visitClass(e)}},{key:"ClassDeclaration",value:function(e){this.visitClass(e)}},{key:"CallExpression",value:function(e){this.scopeManager.__ignoreEval()||e.callee.type!==_estraverse.Syntax.Identifier||"eval"!==e.callee.name||this.currentScope().variableScope.__detectEval(),this.visitChildren(e)}},{key:"BlockStatement",value:function(e){this.scopeManager.__isES6()&&this.scopeManager.__nestBlockScope(e),this.visitChildren(e),this.close(e)}},{key:"ThisExpression",value:function(){this.currentScope().variableScope.__detectThis()}},{key:"WithStatement",value:function(e){this.visit(e.object),this.scopeManager.__nestWithScope(e),this.visit(e.body),this.close(e)}},{key:"VariableDeclaration",value:function(e){var t,i,n,r;for(t="var"===e.kind?this.currentScope().variableScope:this.currentScope(),i=0,n=e.declarations.length;i<n;++i)r=e.declarations[i],this.visitVariableDeclaration(t,_variable2["default"].Variable,e,i),r.init&&this.visit(r.init)}},{key:"SwitchStatement",value:function(e){var t,i;for(this.visit(e.discriminant),this.scopeManager.__isES6()&&this.scopeManager.__nestSwitchScope(e),t=0,i=e.cases.length;t<i;++t)this.visit(e.cases[t]);this.close(e)}},{key:"FunctionDeclaration",value:function(e){this.visitFunction(e)}},{key:"FunctionExpression",value:function(e){this.visitFunction(e)}},{key:"ForOfStatement",value:function(e){this.visitForIn(e)}},{key:"ForInStatement",value:function(e){this.visitForIn(e)}},{key:"ArrowFunctionExpression",value:function(e){this.visitFunction(e)}},{key:"ImportDeclaration",value:function(e){var t;(0,_assert2["default"])(this.scopeManager.__isES6()&&this.scopeManager.isModule(),"ImportDeclaration should appear when the mode is ES6 and in the module context."),t=new Importer(e,this),t.visit(e)}},{key:"visitExportDeclaration",value:function(e){if(!e.source)return e.declaration?void this.visit(e.declaration):void this.visitChildren(e)}},{key:"ExportDeclaration",value:function(e){this.visitExportDeclaration(e)}},{key:"ExportNamedDeclaration",value:function(e){this.visitExportDeclaration(e)}},{key:"ExportSpecifier",value:function(e){var t=e.id||e.local;this.visit(t)}},{key:"MetaProperty",value:function(){}}]),t}(_esrecurse2["default"].Visitor);exports["default"]=Referencer;

/***/ },

/***/ "./node_modules/esrecurse/esrecurse.js":
/***/ function(module, exports, __webpack_require__) {

	!function(){"use strict";function t(t){return null!=t&&("object"==typeof t&&"string"==typeof t.type)}function i(t,i){return(t===s.Syntax.ObjectExpression||t===s.Syntax.ObjectPattern)&&"properties"===i}function r(t,i){i=i||{},this.__visitor=t||this,this.__childVisitorKeys=i.childVisitorKeys?e({},s.VisitorKeys,i.childVisitorKeys):s.VisitorKeys,"iteration"===i.fallback?this.__fallback=n:"function"==typeof i.fallback&&(this.__fallback=i.fallback)}var e,s,o,n;e=__webpack_require__("./node_modules/object-assign/index.js"),s=__webpack_require__("./node_modules/esrecurse/node_modules/estraverse/estraverse.js"),o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},n=Object.keys||function(t){var i,r=[];for(i in t)r.push(i);return r},r.prototype.visitChildren=function(r){var e,n,a,l,c,f,y;if(null!=r){if(e=r.type||s.Syntax.Property,n=this.__childVisitorKeys[e],!n){if(!this.__fallback)throw new Error("Unknown node type "+e+".");n=this.__fallback(r)}for(a=0,l=n.length;a<l;++a)if(y=r[n[a]])if(o(y))for(c=0,f=y.length;c<f;++c)y[c]&&(t(y[c])||i(e,n[a]))&&this.visit(y[c]);else t(y)&&this.visit(y)}},r.prototype.visit=function(t){var i;if(null!=t)return i=t.type||s.Syntax.Property,this.__visitor[i]?void this.__visitor[i].call(this,t):void this.visitChildren(t)},exports.version=__webpack_require__("./node_modules/esrecurse/package.json").version,exports.Visitor=r,exports.visit=function(t,i,e){var s=new r(i,e);s.visit(t)}}();

/***/ },

/***/ "./node_modules/esrecurse/node_modules/estraverse/estraverse.js":
/***/ function(module, exports, __webpack_require__) {

	!function e(t){"use strict";function n(){}function r(e){var t,n,i={};for(t in e)e.hasOwnProperty(t)&&(n=e[t],"object"==typeof n&&null!==n?i[t]=r(n):i[t]=n);return i}function i(e){var t,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}function o(e,t){var n,r,i,o;for(r=e.length,i=0;r;)n=r>>>1,o=i+n,t(e[o])?r=n:(i=o+1,r-=n+1);return i}function a(e,t){var n,r,i,o;for(r=e.length,i=0;r;)n=r>>>1,o=i+n,t(e[o])?(i=o+1,r-=n+1):r=n;return i}function s(e,t){var n,r,i,o=b(t);for(r=0,i=o.length;r<i;r+=1)n=o[r],e[n]=t[n];return e}function l(e,t){this.parent=e,this.key=t}function p(e,t,n,r){this.node=e,this.path=t,this.wrap=n,this.ref=r}function u(){}function c(e){return null!=e&&("object"==typeof e&&"string"==typeof e.type)}function h(e,t){return(e===g.ObjectExpression||e===g.ObjectPattern)&&"properties"===t}function f(e,t){var n=new u;return n.traverse(e,t)}function m(e,t){var n=new u;return n.replace(e,t)}function d(e,t){var n;return n=o(t,function(t){return t.range[0]>e.range[0]}),e.extendedRange=[e.range[0],e.range[1]],n!==t.length&&(e.extendedRange[1]=t[n].range[0]),n-=1,n>=0&&(e.extendedRange[0]=t[n].range[1]),e}function y(e,t,n){var i,o,a,s,l=[];if(!e.range)throw new Error("attachComments needs range information");if(!n.length){if(t.length){for(a=0,o=t.length;a<o;a+=1)i=r(t[a]),i.extendedRange=[0,e.range[0]],l.push(i);e.leadingComments=l}return e}for(a=0,o=t.length;a<o;a+=1)l.push(d(r(t[a]),n));return s=0,f(e,{enter:function(e){for(var t;s<l.length&&(t=l[s],!(t.extendedRange[1]>e.range[0]));)t.extendedRange[1]===e.range[0]?(e.leadingComments||(e.leadingComments=[]),e.leadingComments.push(t),l.splice(s,1)):s+=1;return s===l.length?E.Break:l[s].extendedRange[0]>e.range[1]?E.Skip:void 0}}),s=0,f(e,{leave:function(e){for(var t;s<l.length&&(t=l[s],!(e.range[1]<t.extendedRange[0]));)e.range[1]===t.extendedRange[0]?(e.trailingComments||(e.trailingComments=[]),e.trailingComments.push(t),l.splice(s,1)):s+=1;return s===l.length?E.Break:l[s].extendedRange[0]>e.range[1]?E.Skip:void 0}}),e}var g,x,E,_,S,b,v,w,k;return x=Array.isArray,x||(x=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),n(i),n(a),S=Object.create||function(){function e(){}return function(t){return e.prototype=t,new e}}(),b=Object.keys||function(e){var t,n=[];for(t in e)n.push(t);return n},g={AssignmentExpression:"AssignmentExpression",AssignmentPattern:"AssignmentPattern",ArrayExpression:"ArrayExpression",ArrayPattern:"ArrayPattern",ArrowFunctionExpression:"ArrowFunctionExpression",AwaitExpression:"AwaitExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ClassBody:"ClassBody",ClassDeclaration:"ClassDeclaration",ClassExpression:"ClassExpression",ComprehensionBlock:"ComprehensionBlock",ComprehensionExpression:"ComprehensionExpression",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DebuggerStatement:"DebuggerStatement",DirectiveStatement:"DirectiveStatement",DoWhileStatement:"DoWhileStatement",EmptyStatement:"EmptyStatement",ExportAllDeclaration:"ExportAllDeclaration",ExportDefaultDeclaration:"ExportDefaultDeclaration",ExportNamedDeclaration:"ExportNamedDeclaration",ExportSpecifier:"ExportSpecifier",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForInStatement:"ForInStatement",ForOfStatement:"ForOfStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",GeneratorExpression:"GeneratorExpression",Identifier:"Identifier",IfStatement:"IfStatement",ImportDeclaration:"ImportDeclaration",ImportDefaultSpecifier:"ImportDefaultSpecifier",ImportNamespaceSpecifier:"ImportNamespaceSpecifier",ImportSpecifier:"ImportSpecifier",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",MetaProperty:"MetaProperty",MethodDefinition:"MethodDefinition",ModuleSpecifier:"ModuleSpecifier",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",ObjectPattern:"ObjectPattern",Program:"Program",Property:"Property",RestElement:"RestElement",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SpreadElement:"SpreadElement",Super:"Super",SwitchStatement:"SwitchStatement",SwitchCase:"SwitchCase",TaggedTemplateExpression:"TaggedTemplateExpression",TemplateElement:"TemplateElement",TemplateLiteral:"TemplateLiteral",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement",YieldExpression:"YieldExpression"},_={AssignmentExpression:["left","right"],AssignmentPattern:["left","right"],ArrayExpression:["elements"],ArrayPattern:["elements"],ArrowFunctionExpression:["params","body"],AwaitExpression:["argument"],BlockStatement:["body"],BinaryExpression:["left","right"],BreakStatement:["label"],CallExpression:["callee","arguments"],CatchClause:["param","body"],ClassBody:["body"],ClassDeclaration:["id","superClass","body"],ClassExpression:["id","superClass","body"],ComprehensionBlock:["left","right"],ComprehensionExpression:["blocks","filter","body"],ConditionalExpression:["test","consequent","alternate"],ContinueStatement:["label"],DebuggerStatement:[],DirectiveStatement:[],DoWhileStatement:["body","test"],EmptyStatement:[],ExportAllDeclaration:["source"],ExportDefaultDeclaration:["declaration"],ExportNamedDeclaration:["declaration","specifiers","source"],ExportSpecifier:["exported","local"],ExpressionStatement:["expression"],ForStatement:["init","test","update","body"],ForInStatement:["left","right","body"],ForOfStatement:["left","right","body"],FunctionDeclaration:["id","params","body"],FunctionExpression:["id","params","body"],GeneratorExpression:["blocks","filter","body"],Identifier:[],IfStatement:["test","consequent","alternate"],ImportDeclaration:["specifiers","source"],ImportDefaultSpecifier:["local"],ImportNamespaceSpecifier:["local"],ImportSpecifier:["imported","local"],Literal:[],LabeledStatement:["label","body"],LogicalExpression:["left","right"],MemberExpression:["object","property"],MetaProperty:["meta","property"],MethodDefinition:["key","value"],ModuleSpecifier:[],NewExpression:["callee","arguments"],ObjectExpression:["properties"],ObjectPattern:["properties"],Program:["body"],Property:["key","value"],RestElement:["argument"],ReturnStatement:["argument"],SequenceExpression:["expressions"],SpreadElement:["argument"],Super:[],SwitchStatement:["discriminant","cases"],SwitchCase:["test","consequent"],TaggedTemplateExpression:["tag","quasi"],TemplateElement:[],TemplateLiteral:["quasis","expressions"],ThisExpression:[],ThrowStatement:["argument"],TryStatement:["block","handler","finalizer"],UnaryExpression:["argument"],UpdateExpression:["argument"],VariableDeclaration:["declarations"],VariableDeclarator:["id","init"],WhileStatement:["test","body"],WithStatement:["object","body"],YieldExpression:["argument"]},v={},w={},k={},E={Break:v,Skip:w,Remove:k},l.prototype.replace=function(e){this.parent[this.key]=e},l.prototype.remove=function(){return x(this.parent)?(this.parent.splice(this.key,1),!0):(this.replace(null),!1)},u.prototype.path=function(){function e(e,t){if(x(t))for(r=0,i=t.length;r<i;++r)e.push(t[r]);else e.push(t)}var t,n,r,i,o,a;if(!this.__current.path)return null;for(o=[],t=2,n=this.__leavelist.length;t<n;++t)a=this.__leavelist[t],e(o,a.path);return e(o,this.__current.path),o},u.prototype.type=function(){var e=this.current();return e.type||this.__current.wrap},u.prototype.parents=function(){var e,t,n;for(n=[],e=1,t=this.__leavelist.length;e<t;++e)n.push(this.__leavelist[e].node);return n},u.prototype.current=function(){return this.__current.node},u.prototype.__execute=function(e,t){var n,r;return r=void 0,n=this.__current,this.__current=t,this.__state=null,e&&(r=e.call(this,t.node,this.__leavelist[this.__leavelist.length-1].node)),this.__current=n,r},u.prototype.notify=function(e){this.__state=e},u.prototype.skip=function(){this.notify(w)},u.prototype["break"]=function(){this.notify(v)},u.prototype.remove=function(){this.notify(k)},u.prototype.__initialize=function(e,t){this.visitor=t,this.root=e,this.__worklist=[],this.__leavelist=[],this.__current=null,this.__state=null,this.__fallback="iteration"===t.fallback,this.__keys=_,t.keys&&(this.__keys=s(S(this.__keys),t.keys))},u.prototype.traverse=function(e,t){var n,r,i,o,a,s,l,u,f,m,d,y;for(this.__initialize(e,t),y={},n=this.__worklist,r=this.__leavelist,n.push(new p(e,null,null,null)),r.push(new p(null,null,null,null));n.length;)if(i=n.pop(),i!==y){if(i.node){if(s=this.__execute(t.enter,i),this.__state===v||s===v)return;if(n.push(y),r.push(i),this.__state===w||s===w)continue;if(o=i.node,a=o.type||i.wrap,m=this.__keys[a],!m){if(!this.__fallback)throw new Error("Unknown node type "+a+".");m=b(o)}for(u=m.length;(u-=1)>=0;)if(l=m[u],d=o[l])if(x(d)){for(f=d.length;(f-=1)>=0;)if(d[f]){if(h(a,m[u]))i=new p(d[f],[l,f],"Property",null);else{if(!c(d[f]))continue;i=new p(d[f],[l,f],null,null)}n.push(i)}}else c(d)&&n.push(new p(d,l,null,null))}}else if(i=r.pop(),s=this.__execute(t.leave,i),this.__state===v||s===v)return},u.prototype.replace=function(e,t){function n(e){var t,n,i,o;if(e.ref.remove())for(n=e.ref.key,o=e.ref.parent,t=r.length;t--;)if(i=r[t],i.ref&&i.ref.parent===o){if(i.ref.key<n)break;--i.ref.key}}var r,i,o,a,s,u,f,m,d,y,g,E,_;for(this.__initialize(e,t),g={},r=this.__worklist,i=this.__leavelist,E={root:e},u=new p(e,null,null,new l(E,"root")),r.push(u),i.push(u);r.length;)if(u=r.pop(),u!==g){if(s=this.__execute(t.enter,u),void 0!==s&&s!==v&&s!==w&&s!==k&&(u.ref.replace(s),u.node=s),this.__state!==k&&s!==k||(n(u),u.node=null),this.__state===v||s===v)return E.root;if(o=u.node,o&&(r.push(g),i.push(u),this.__state!==w&&s!==w)){if(a=o.type||u.wrap,d=this.__keys[a],!d){if(!this.__fallback)throw new Error("Unknown node type "+a+".");d=b(o)}for(f=d.length;(f-=1)>=0;)if(_=d[f],y=o[_])if(x(y)){for(m=y.length;(m-=1)>=0;)if(y[m]){if(h(a,d[f]))u=new p(y[m],[_,m],"Property",new l(y,m));else{if(!c(y[m]))continue;u=new p(y[m],[_,m],null,new l(y,m))}r.push(u)}}else c(y)&&r.push(new p(y,_,null,new l(o,_)))}}else if(u=i.pop(),s=this.__execute(t.leave,u),void 0!==s&&s!==v&&s!==w&&s!==k&&u.ref.replace(s),this.__state!==k&&s!==k||n(u),this.__state===v||s===v)return E.root;return E.root},t.version=__webpack_require__("./node_modules/esrecurse/node_modules/estraverse/package.json").version,t.Syntax=g,t.traverse=f,t.replace=m,t.attachComments=y,t.VisitorKeys=_,t.VisitorOption=E,t.Controller=u,t.cloneEnvironment=function(){return e({})},t}(exports);

/***/ },

/***/ "./node_modules/esrecurse/node_modules/estraverse/package.json":
/***/ function(module, exports) {

	module.exports = {
		"_args": [
			[
				"estraverse@~4.1.0",
				"/Users/fkling/git/astexplorer/node_modules/esrecurse"
			]
		],
		"_from": "estraverse@>=4.1.0 <4.2.0",
		"_id": "estraverse@4.1.1",
		"_inCache": true,
		"_installable": true,
		"_location": "/esrecurse/estraverse",
		"_nodeVersion": "4.1.1",
		"_npmUser": {
			"email": "utatane.tea@gmail.com",
			"name": "constellation"
		},
		"_npmVersion": "2.14.4",
		"_phantomChildren": {},
		"_requested": {
			"name": "estraverse",
			"raw": "estraverse@~4.1.0",
			"rawSpec": "~4.1.0",
			"scope": null,
			"spec": ">=4.1.0 <4.2.0",
			"type": "range"
		},
		"_requiredBy": [
			"/esrecurse"
		],
		"_resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.1.1.tgz",
		"_shasum": "f6caca728933a850ef90661d0e17982ba47111a2",
		"_shrinkwrap": null,
		"_spec": "estraverse@~4.1.0",
		"_where": "/Users/fkling/git/astexplorer/node_modules/esrecurse",
		"bugs": {
			"url": "https://github.com/estools/estraverse/issues"
		},
		"dependencies": {},
		"description": "ECMAScript JS AST traversal functions",
		"devDependencies": {
			"chai": "^2.1.1",
			"coffee-script": "^1.8.0",
			"espree": "^1.11.0",
			"gulp": "^3.8.10",
			"gulp-bump": "^0.2.2",
			"gulp-filter": "^2.0.0",
			"gulp-git": "^1.0.1",
			"gulp-tag-version": "^1.2.1",
			"jshint": "^2.5.6",
			"mocha": "^2.1.0"
		},
		"directories": {},
		"dist": {
			"shasum": "f6caca728933a850ef90661d0e17982ba47111a2",
			"tarball": "https://registry.npmjs.org/estraverse/-/estraverse-4.1.1.tgz"
		},
		"engines": {
			"node": ">=0.10.0"
		},
		"gitHead": "bbcccbfe98296585e4311c8755e1d00dcd581e3c",
		"homepage": "https://github.com/estools/estraverse",
		"license": "BSD-2-Clause",
		"main": "estraverse.js",
		"maintainers": [
			{
				"email": "utatane.tea@gmail.com",
				"name": "constellation"
			},
			{
				"email": "npm@michael.ficarra.me",
				"name": "michaelficarra"
			},
			{
				"email": "nicholas@nczconsulting.com",
				"name": "nzakas"
			}
		],
		"name": "estraverse",
		"optionalDependencies": {},
		"readme": "ERROR: No README data found!",
		"repository": {
			"type": "git",
			"url": "git+ssh://git@github.com/estools/estraverse.git"
		},
		"scripts": {
			"lint": "jshint estraverse.js",
			"test": "npm run-script lint && npm run-script unit-test",
			"unit-test": "mocha --compilers coffee:coffee-script/register"
		},
		"version": "4.1.1"
	};

/***/ },

/***/ "./node_modules/esrecurse/package.json":
/***/ function(module, exports) {

	module.exports = {
		"_args": [
			[
				"esrecurse@^4.1.0",
				"/Users/fkling/git/astexplorer/node_modules/escope"
			]
		],
		"_from": "esrecurse@>=4.1.0 <5.0.0",
		"_id": "esrecurse@4.1.0",
		"_inCache": true,
		"_installable": true,
		"_location": "/esrecurse",
		"_nodeVersion": "0.12.9",
		"_npmOperationalInternal": {
			"host": "packages-13-west.internal.npmjs.com",
			"tmp": "tmp/esrecurse-4.1.0.tgz_1457712782215_0.15950557170435786"
		},
		"_npmUser": {
			"email": "nicholas@nczconsulting.com",
			"name": "nzakas"
		},
		"_npmVersion": "2.14.9",
		"_phantomChildren": {},
		"_requested": {
			"name": "esrecurse",
			"raw": "esrecurse@^4.1.0",
			"rawSpec": "^4.1.0",
			"scope": null,
			"spec": ">=4.1.0 <5.0.0",
			"type": "range"
		},
		"_requiredBy": [
			"/escope"
		],
		"_resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.1.0.tgz",
		"_shasum": "4713b6536adf7f2ac4f327d559e7756bff648220",
		"_shrinkwrap": null,
		"_spec": "esrecurse@^4.1.0",
		"_where": "/Users/fkling/git/astexplorer/node_modules/escope",
		"bugs": {
			"url": "https://github.com/estools/esrecurse/issues"
		},
		"dependencies": {
			"estraverse": "~4.1.0",
			"object-assign": "^4.0.1"
		},
		"description": "ECMAScript AST recursive visitor",
		"devDependencies": {
			"chai": "^3.3.0",
			"coffee-script": "^1.9.1",
			"esprima": "^2.1.0",
			"gulp": "^3.9.0",
			"gulp-bump": "^1.0.0",
			"gulp-eslint": "^1.0.0",
			"gulp-filter": "^3.0.1",
			"gulp-git": "^1.1.0",
			"gulp-mocha": "^2.1.3",
			"gulp-tag-version": "^1.2.1",
			"jsdoc": "^3.3.0-alpha10",
			"minimist": "^1.1.0"
		},
		"directories": {},
		"dist": {
			"shasum": "4713b6536adf7f2ac4f327d559e7756bff648220",
			"tarball": "http://registry.npmjs.org/esrecurse/-/esrecurse-4.1.0.tgz"
		},
		"engines": {
			"node": ">=0.10.0"
		},
		"gitHead": "63a34714834bd7ad2063054bd4abb24fb82ca667",
		"homepage": "https://github.com/estools/esrecurse",
		"license": "BSD-2-Clause",
		"main": "esrecurse.js",
		"maintainers": [
			{
				"email": "utatane.tea@gmail.com",
				"name": "constellation"
			},
			{
				"email": "npm@michael.ficarra.me",
				"name": "michaelficarra"
			},
			{
				"email": "nicholas@nczconsulting.com",
				"name": "nzakas"
			}
		],
		"name": "esrecurse",
		"optionalDependencies": {},
		"readme": "ERROR: No README data found!",
		"repository": {
			"type": "git",
			"url": "git+https://github.com/estools/esrecurse.git"
		},
		"scripts": {
			"lint": "gulp lint",
			"test": "gulp travis",
			"unit-test": "gulp test"
		},
		"version": "4.1.0"
	};

/***/ },

/***/ "./node_modules/escope/lib/pattern-visitor.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function getLast(e){return e[e.length-1]||null}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,s,r){return s&&e(t.prototype,s),r&&e(t,r),t}}(),_estraverse=__webpack_require__("./node_modules/escope/node_modules/estraverse/estraverse.js"),_esrecurse=__webpack_require__("./node_modules/esrecurse/esrecurse.js"),_esrecurse2=_interopRequireDefault(_esrecurse),PatternVisitor=function(e){function t(e,s,r){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this,null,e));return n.rootPattern=s,n.callback=r,n.assignments=[],n.rightHandNodes=[],n.restElements=[],n}return _inherits(t,e),_createClass(t,null,[{key:"isPattern",value:function(e){var t=e.type;return t===_estraverse.Syntax.Identifier||t===_estraverse.Syntax.ObjectPattern||t===_estraverse.Syntax.ArrayPattern||t===_estraverse.Syntax.SpreadElement||t===_estraverse.Syntax.RestElement||t===_estraverse.Syntax.AssignmentPattern}}]),_createClass(t,[{key:"Identifier",value:function(e){var t=getLast(this.restElements);this.callback(e,{topLevel:e===this.rootPattern,rest:null!=t&&t.argument===e,assignments:this.assignments})}},{key:"Property",value:function(e){e.computed&&this.rightHandNodes.push(e.key),this.visit(e.value)}},{key:"ArrayPattern",value:function(e){var t,s,r;for(t=0,s=e.elements.length;t<s;++t)r=e.elements[t],this.visit(r)}},{key:"AssignmentPattern",value:function(e){this.assignments.push(e),this.visit(e.left),this.rightHandNodes.push(e.right),this.assignments.pop()}},{key:"RestElement",value:function(e){this.restElements.push(e),this.visit(e.argument),this.restElements.pop()}},{key:"MemberExpression",value:function(e){e.computed&&this.rightHandNodes.push(e.property),this.rightHandNodes.push(e.object)}},{key:"SpreadElement",value:function(e){this.visit(e.argument)}},{key:"ArrayExpression",value:function(e){e.elements.forEach(this.visit,this)}},{key:"AssignmentExpression",value:function(e){this.assignments.push(e),this.visit(e.left),this.rightHandNodes.push(e.right),this.assignments.pop()}},{key:"CallExpression",value:function(e){var t=this;e.arguments.forEach(function(e){t.rightHandNodes.push(e)}),this.visit(e.callee)}}]),t}(_esrecurse2["default"].Visitor);exports["default"]=PatternVisitor;

/***/ },

/***/ "./node_modules/escope/package.json":
/***/ function(module, exports) {

	module.exports = {
		"_args": [
			[
				"escope@^3.3.0",
				"/Users/fkling/git/astexplorer/node_modules/eslint"
			]
		],
		"_from": "escope@>=3.3.0 <4.0.0",
		"_id": "escope@3.6.0",
		"_inCache": true,
		"_installable": true,
		"_location": "/escope",
		"_nodeVersion": "0.12.9",
		"_npmOperationalInternal": {
			"host": "packages-12-west.internal.npmjs.com",
			"tmp": "tmp/escope-3.6.0.tgz_1457720018969_0.025237560039386153"
		},
		"_npmUser": {
			"email": "nicholas@nczconsulting.com",
			"name": "nzakas"
		},
		"_npmVersion": "2.14.9",
		"_phantomChildren": {},
		"_requested": {
			"name": "escope",
			"raw": "escope@^3.3.0",
			"rawSpec": "^3.3.0",
			"scope": null,
			"spec": ">=3.3.0 <4.0.0",
			"type": "range"
		},
		"_requiredBy": [
			"/eslint",
			"/eslint2/eslint"
		],
		"_resolved": "https://registry.npmjs.org/escope/-/escope-3.6.0.tgz",
		"_shasum": "e01975e812781a163a6dadfdd80398dc64c889c3",
		"_shrinkwrap": null,
		"_spec": "escope@^3.3.0",
		"_where": "/Users/fkling/git/astexplorer/node_modules/eslint",
		"bugs": {
			"url": "https://github.com/estools/escope/issues"
		},
		"dependencies": {
			"es6-map": "^0.1.3",
			"es6-weak-map": "^2.0.1",
			"esrecurse": "^4.1.0",
			"estraverse": "^4.1.1"
		},
		"description": "ECMAScript scope analyzer",
		"devDependencies": {
			"babel": "^6.3.26",
			"babel-preset-es2015": "^6.3.13",
			"babel-register": "^6.3.13",
			"browserify": "^13.0.0",
			"chai": "^3.4.1",
			"espree": "^3.1.1",
			"esprima": "^2.7.1",
			"gulp": "^3.9.0",
			"gulp-babel": "^6.1.1",
			"gulp-bump": "^1.0.0",
			"gulp-eslint": "^1.1.1",
			"gulp-espower": "^1.0.2",
			"gulp-filter": "^3.0.1",
			"gulp-git": "^1.6.1",
			"gulp-mocha": "^2.2.0",
			"gulp-plumber": "^1.0.1",
			"gulp-sourcemaps": "^1.6.0",
			"gulp-tag-version": "^1.3.0",
			"jsdoc": "^3.4.0",
			"lazypipe": "^1.0.1",
			"vinyl-source-stream": "^1.1.0"
		},
		"directories": {},
		"dist": {
			"shasum": "e01975e812781a163a6dadfdd80398dc64c889c3",
			"tarball": "http://registry.npmjs.org/escope/-/escope-3.6.0.tgz"
		},
		"engines": {
			"node": ">=0.4.0"
		},
		"gitHead": "aa35861faa76a09f01203dee3497a939d70b463c",
		"homepage": "http://github.com/estools/escope",
		"license": "BSD-2-Clause",
		"main": "lib/index.js",
		"maintainers": [
			{
				"email": "utatane.tea@gmail.com",
				"name": "constellation"
			},
			{
				"email": "npm@michael.ficarra.me",
				"name": "michaelficarra"
			},
			{
				"email": "nicholas@nczconsulting.com",
				"name": "nzakas"
			}
		],
		"name": "escope",
		"optionalDependencies": {},
		"readme": "ERROR: No README data found!",
		"repository": {
			"type": "git",
			"url": "git+https://github.com/estools/escope.git"
		},
		"scripts": {
			"jsdoc": "jsdoc src/*.js README.md",
			"lint": "gulp lint",
			"test": "gulp travis",
			"unit-test": "gulp test"
		},
		"version": "3.6.0"
	};

/***/ },

/***/ "./node_modules/levn/lib/index.js":
/***/ function(module, exports, __webpack_require__) {

	(function(){var e,r,t,u,s,i;e=__webpack_require__("./node_modules/levn/lib/parse-string.js"),r=__webpack_require__("./node_modules/levn/lib/cast.js"),t=__webpack_require__("./node_modules/type-check/lib/index.js").parseType,u="0.3.0",s=function(t,u,s){return null==s&&(s={}),null==s.explicit&&(s.explicit=!1),null==s.customTypes&&(s.customTypes={}),r(e(t,u,s),t,s)},i=function(e,r,u){return s(t(e),r,u)},module.exports={VERSION:u,parse:i,parsedTypeParse:s}}).call(this);

/***/ },

/***/ "./node_modules/levn/lib/parse-string.js":
/***/ function(module, exports, __webpack_require__) {

	(function(){function r(r,t){if(r[0]===t)return r.shift();throw new Error("Expected '"+t+"', but got '"+r[0]+"' instead in "+JSON.stringify(r)+".")}function t(r,t){if(r[0]===t)return r.shift()}function n(n,e,u){var i,c,o,s;for(i=e[0],c=e[1],u&&r(n,i),o=[],s=","+(u?c:"");n.length&&u&&n[0]!==c;)o.push(f(n,s)),t(n,",");return u&&r(n,c),o}function e(r,t){return n(r,["[","]"],t)}function u(r,t){return n(r,["(",")"],t)}function i(n,e){var u,i,o;for(e&&r(n,"{"),u={},i=","+(e?"}":"");n.length&&(!e||"}"!==n[0]);)o=c(n,":"),r(n,":"),u[o]=f(n,i),t(n,",");return e&&r(n,"}"),u}function c(r,t){var n;for(null==t&&(t=""),n="";r.length&&-1===t.indexOf(r[0]);)n+=r.shift();return n}function f(r,t){switch(r[0]){case"[":return e(r,!0);case"(":return u(r,!0);case"{":return i(r,!0);default:return c(r,t)}}function o(r,t,n){var c,o,s,a,l,h,p,g;return c=t[0],o=c.type,s=c.structure,a=r.concat(),n.explicit||1!==t.length||(o||!s)&&"Array"!==o&&"Object"!==o?h=f(r):(l="array"===s||"Array"===o?e(r,"["===r[0]):"tuple"===s?u(r,"("===r[0]):i(r,"{"===r[0]),h=r.length?f("array"===s||"Array"===o?(p=a,p.unshift("["),p.push("]"),p):(g=a,g.unshift("("),g.push(")"),g)):l),h}function s(r){return!r}var a,l,h;a=__webpack_require__("./node_modules/prelude-ls/lib/index.js").reject,l=/\[\]\(\)}{:,/.source,h=RegExp("(\"(?:\\\\\"|[^\"])*\")|('(?:\\\\'|[^'])*')|(/(?:\\\\/|[^/])*/[a-zA-Z]*)|(#.*#)|(["+l+"])|([^\\s"+l+"](?:\\s*[^\\s"+l+"]+)*)|\\s*"),module.exports=function(r,t,n){var e,u;if(null==n&&(n={}),!n.explicit&&1===r.length&&"String"===r[0].type)return"'"+t.replace(/\\'/g,"\\\\'")+"'";if(e=a(s,t.split(h)),u=o(e,r,n),!u)throw new Error("Error parsing '"+t+"'.");return u}}).call(this);

/***/ },

/***/ "./node_modules/prelude-ls/lib/index.js":
/***/ function(module, exports, __webpack_require__) {

	function curry$(e,r){var i,u=function(t){return e.length>1?function(){var l=t?t.concat():[];return i=r?i||this:this,l.push.apply(l,arguments)<e.length&&arguments.length?u.call(i,l):e.apply(i,l)}:e};return u()}var Func,List,Obj,Str,Num,id,isType,replicate,prelude,toString$={}.toString;Func=__webpack_require__("./node_modules/prelude-ls/lib/Func.js"),List=__webpack_require__("./node_modules/prelude-ls/lib/List.js"),Obj=__webpack_require__("./node_modules/prelude-ls/lib/Obj.js"),Str=__webpack_require__("./node_modules/prelude-ls/lib/Str.js"),Num=__webpack_require__("./node_modules/prelude-ls/lib/Num.js"),id=function(e){return e},isType=curry$(function(e,r){return toString$.call(r).slice(8,-1)===e}),replicate=curry$(function(e,r){var i,u=[];for(i=0;i<e;++i)u.push(r);return u}),Str.empty=List.empty,Str.slice=List.slice,Str.take=List.take,Str.drop=List.drop,Str.splitAt=List.splitAt,Str.takeWhile=List.takeWhile,Str.dropWhile=List.dropWhile,Str.span=List.span,Str.breakStr=List.breakList,prelude={Func:Func,List:List,Obj:Obj,Str:Str,Num:Num,id:id,isType:isType,replicate:replicate},prelude.each=List.each,prelude.map=List.map,prelude.filter=List.filter,prelude.compact=List.compact,prelude.reject=List.reject,prelude.partition=List.partition,prelude.find=List.find,prelude.head=List.head,prelude.first=List.first,prelude.tail=List.tail,prelude.last=List.last,prelude.initial=List.initial,prelude.empty=List.empty,prelude.reverse=List.reverse,prelude.difference=List.difference,prelude.intersection=List.intersection,prelude.union=List.union,prelude.countBy=List.countBy,prelude.groupBy=List.groupBy,prelude.fold=List.fold,prelude.foldl=List.foldl,prelude.fold1=List.fold1,prelude.foldl1=List.foldl1,prelude.foldr=List.foldr,prelude.foldr1=List.foldr1,prelude.unfoldr=List.unfoldr,prelude.andList=List.andList,prelude.orList=List.orList,prelude.any=List.any,prelude.all=List.all,prelude.unique=List.unique,prelude.uniqueBy=List.uniqueBy,prelude.sort=List.sort,prelude.sortWith=List.sortWith,prelude.sortBy=List.sortBy,prelude.sum=List.sum,prelude.product=List.product,prelude.mean=List.mean,prelude.average=List.average,prelude.concat=List.concat,prelude.concatMap=List.concatMap,prelude.flatten=List.flatten,prelude.maximum=List.maximum,prelude.minimum=List.minimum,prelude.maximumBy=List.maximumBy,prelude.minimumBy=List.minimumBy,prelude.scan=List.scan,prelude.scanl=List.scanl,prelude.scan1=List.scan1,prelude.scanl1=List.scanl1,prelude.scanr=List.scanr,prelude.scanr1=List.scanr1,prelude.slice=List.slice,prelude.take=List.take,prelude.drop=List.drop,prelude.splitAt=List.splitAt,prelude.takeWhile=List.takeWhile,prelude.dropWhile=List.dropWhile,prelude.span=List.span,prelude.breakList=List.breakList,prelude.zip=List.zip,prelude.zipWith=List.zipWith,prelude.zipAll=List.zipAll,prelude.zipAllWith=List.zipAllWith,prelude.at=List.at,prelude.elemIndex=List.elemIndex,prelude.elemIndices=List.elemIndices,prelude.findIndex=List.findIndex,prelude.findIndices=List.findIndices,prelude.apply=Func.apply,prelude.curry=Func.curry,prelude.flip=Func.flip,prelude.fix=Func.fix,prelude.over=Func.over,prelude.split=Str.split,prelude.join=Str.join,prelude.lines=Str.lines,prelude.unlines=Str.unlines,prelude.words=Str.words,prelude.unwords=Str.unwords,prelude.chars=Str.chars,prelude.unchars=Str.unchars,prelude.repeat=Str.repeat,prelude.capitalize=Str.capitalize,prelude.camelize=Str.camelize,prelude.dasherize=Str.dasherize,prelude.values=Obj.values,prelude.keys=Obj.keys,prelude.pairsToObj=Obj.pairsToObj,prelude.objToPairs=Obj.objToPairs,prelude.listsToObj=Obj.listsToObj,prelude.objToLists=Obj.objToLists,prelude.max=Num.max,prelude.min=Num.min,prelude.negate=Num.negate,prelude.abs=Num.abs,prelude.signum=Num.signum,prelude.quot=Num.quot,prelude.rem=Num.rem,prelude.div=Num.div,prelude.mod=Num.mod,prelude.recip=Num.recip,prelude.pi=Num.pi,prelude.tau=Num.tau,prelude.exp=Num.exp,prelude.sqrt=Num.sqrt,prelude.ln=Num.ln,prelude.pow=Num.pow,prelude.sin=Num.sin,prelude.tan=Num.tan,prelude.cos=Num.cos,prelude.acos=Num.acos,prelude.asin=Num.asin,prelude.atan=Num.atan,prelude.atan2=Num.atan2,prelude.truncate=Num.truncate,prelude.round=Num.round,prelude.ceiling=Num.ceiling,prelude.floor=Num.floor,prelude.isItNaN=Num.isItNaN,prelude.even=Num.even,prelude.odd=Num.odd,prelude.gcd=Num.gcd,prelude.lcm=Num.lcm,prelude.VERSION="1.1.2",module.exports=prelude;

/***/ },

/***/ "./node_modules/prelude-ls/lib/Func.js":
/***/ function(module, exports) {

	function curry$(r,n){var u,t=function(i){return r.length>1?function(){var e=i?i.concat():[];return u=n?u||this:this,e.push.apply(e,arguments)<r.length&&arguments.length?t.call(u,e):r.apply(u,e)}:r};return t()}var apply,curry,flip,fix,over,memoize,slice$=[].slice,toString$={}.toString;apply=curry$(function(r,n){return r.apply(null,n)}),curry=function(r){return curry$(r)},flip=curry$(function(r,n,u){return r(u,n)}),fix=function(r){return function(n){return function(){return r(n(n)).apply(null,arguments)}}(function(n){return function(){return r(n(n)).apply(null,arguments)}})},over=curry$(function(r,n,u,t){return r(n(u),n(t))}),memoize=function(r){var n;return n={},function(){var u,t,i;return u=slice$.call(arguments),t=function(){var r,n,t,e=[];for(r=0,t=(n=u).length;r<t;++r)i=n[r],e.push(i+toString$.call(i).slice(8,-1));return e}().join(""),n[t]=t in n?n[t]:r.apply(null,u)}},module.exports={curry:curry,flip:flip,fix:fix,apply:apply,over:over,memoize:memoize};

/***/ },

/***/ "./node_modules/prelude-ls/lib/List.js":
/***/ function(module, exports) {

	function curry$(n,r){var t,e=function(i){return n.length>1?function(){var u=i?i.concat():[];return t=r?t||this:this,u.push.apply(u,arguments)<n.length&&arguments.length?e.call(t,u):n.apply(t,u)}:n};return e()}function in$(n,r){for(var t=-1,e=r.length>>>0;++t<e;)if(n===r[t])return!0;return!1}function compose$(){var n=arguments;return function(){var r,t;for(t=n[0].apply(this,arguments),r=1;r<n.length;++r)t=n[r](t);return t}}function not$(n){return!n}var each,map,compact,filter,reject,partition,find,head,first,tail,last,initial,empty,reverse,unique,uniqueBy,fold,foldl,fold1,foldl1,foldr,foldr1,unfoldr,concat,concatMap,flatten,difference,intersection,union,countBy,groupBy,andList,orList,any,all,sort,sortWith,sortBy,sum,product,mean,average,maximum,minimum,maximumBy,minimumBy,scan,scanl,scan1,scanl1,scanr,scanr1,slice,take,drop,splitAt,takeWhile,dropWhile,span,breakList,zip,zipWith,zipAll,zipAllWith,at,elemIndex,elemIndices,findIndex,findIndices,toString$={}.toString,slice$=[].slice;each=curry$(function(n,r){var t,e,i;for(t=0,e=r.length;t<e;++t)i=r[t],n(i);return r}),map=curry$(function(n,r){var t,e,i,u=[];for(t=0,e=r.length;t<e;++t)i=r[t],u.push(n(i));return u}),compact=function(n){var r,t,e,i=[];for(r=0,t=n.length;r<t;++r)e=n[r],e&&i.push(e);return i},filter=curry$(function(n,r){var t,e,i,u=[];for(t=0,e=r.length;t<e;++t)i=r[t],n(i)&&u.push(i);return u}),reject=curry$(function(n,r){var t,e,i,u=[];for(t=0,e=r.length;t<e;++t)i=r[t],n(i)||u.push(i);return u}),partition=curry$(function(n,r){var t,e,i,u,c;for(t=[],e=[],i=0,u=r.length;i<u;++i)c=r[i],(n(c)?t:e).push(c);return[t,e]}),find=curry$(function(n,r){var t,e,i;for(t=0,e=r.length;t<e;++t)if(i=r[t],n(i))return i}),head=first=function(n){return n[0]},tail=function(n){if(n.length)return n.slice(1)},last=function(n){return n[n.length-1]},initial=function(n){if(n.length)return n.slice(0,-1)},empty=function(n){return!n.length},reverse=function(n){return n.concat().reverse()},unique=function(n){var r,t,e,i;for(r=[],t=0,e=n.length;t<e;++t)i=n[t],in$(i,r)||r.push(i);return r},uniqueBy=curry$(function(n,r){var t,e,i,u,c,o=[];for(t=[],e=0,i=r.length;e<i;++e)u=r[e],c=n(u),in$(c,t)||(t.push(c),o.push(u));return o}),fold=foldl=curry$(function(n,r,t){var e,i,u;for(e=0,i=t.length;e<i;++e)u=t[e],r=n(r,u);return r}),fold1=foldl1=curry$(function(n,r){return fold(n,r[0],r.slice(1))}),foldr=curry$(function(n,r,t){var e,i;for(e=t.length-1;e>=0;--e)i=t[e],r=n(i,r);return r}),foldr1=curry$(function(n,r){return foldr(n,r[r.length-1],r.slice(0,-1))}),unfoldr=curry$(function(n,r){var t,e,i;for(t=[],e=r;null!=(i=n(e));)t.push(i[0]),e=i[1];return t}),concat=function(n){return[].concat.apply([],n)},concatMap=curry$(function(n,r){var t;return[].concat.apply([],function(){var e,i,u,c=[];for(e=0,u=(i=r).length;e<u;++e)t=i[e],c.push(n(t));return c}())}),flatten=function(n){var r;return[].concat.apply([],function(){var t,e,i,u=[];for(t=0,i=(e=n).length;t<i;++t)r=e[t],"Array"===toString$.call(r).slice(8,-1)?u.push(flatten(r)):u.push(r);return u}())},difference=function(n){var r,t,e,i,u,c,o,l;r=slice$.call(arguments,1),t=[];n:for(e=0,i=n.length;e<i;++e){for(u=n[e],c=0,o=r.length;c<o;++c)if(l=r[c],in$(u,l))continue n;t.push(u)}return t},intersection=function(n){var r,t,e,i,u,c,o,l;r=slice$.call(arguments,1),t=[];n:for(e=0,i=n.length;e<i;++e){for(u=n[e],c=0,o=r.length;c<o;++c)if(l=r[c],!in$(u,l))continue n;t.push(u)}return t},union=function(){var n,r,t,e,i,u,c,o;for(n=slice$.call(arguments),r=[],t=0,e=n.length;t<e;++t)for(i=n[t],u=0,c=i.length;u<c;++u)o=i[u],in$(o,r)||r.push(o);return r},countBy=curry$(function(n,r){var t,e,i,u,c;for(t={},e=0,i=r.length;e<i;++e)u=r[e],c=n(u),c in t?t[c]+=1:t[c]=1;return t}),groupBy=curry$(function(n,r){var t,e,i,u,c;for(t={},e=0,i=r.length;e<i;++e)u=r[e],c=n(u),c in t?t[c].push(u):t[c]=[u];return t}),andList=function(n){var r,t,e;for(r=0,t=n.length;r<t;++r)if(e=n[r],!e)return!1;return!0},orList=function(n){var r,t,e;for(r=0,t=n.length;r<t;++r)if(e=n[r])return!0;return!1},any=curry$(function(n,r){var t,e,i;for(t=0,e=r.length;t<e;++t)if(i=r[t],n(i))return!0;return!1}),all=curry$(function(n,r){var t,e,i;for(t=0,e=r.length;t<e;++t)if(i=r[t],!n(i))return!1;return!0}),sort=function(n){return n.concat().sort(function(n,r){return n>r?1:n<r?-1:0})},sortWith=curry$(function(n,r){return r.concat().sort(n)}),sortBy=curry$(function(n,r){return r.concat().sort(function(r,t){return n(r)>n(t)?1:n(r)<n(t)?-1:0})}),sum=function(n){var r,t,e,i;for(r=0,t=0,e=n.length;t<e;++t)i=n[t],r+=i;return r},product=function(n){var r,t,e,i;for(r=1,t=0,e=n.length;t<e;++t)i=n[t],r*=i;return r},mean=average=function(n){var r,t,e,i;for(r=0,t=0,e=n.length;t<e;++t)i=n[t],r+=i;return r/n.length},maximum=function(n){var r,t,e,i,u;for(r=n[0],t=0,i=(e=n.slice(1)).length;t<i;++t)u=e[t],u>r&&(r=u);return r},minimum=function(n){var r,t,e,i,u;for(r=n[0],t=0,i=(e=n.slice(1)).length;t<i;++t)u=e[t],u<r&&(r=u);return r},maximumBy=curry$(function(n,r){var t,e,i,u,c;for(t=r[0],e=0,u=(i=r.slice(1)).length;e<u;++e)c=i[e],n(c)>n(t)&&(t=c);return t}),minimumBy=curry$(function(n,r){var t,e,i,u,c;for(t=r[0],e=0,u=(i=r.slice(1)).length;e<u;++e)c=i[e],n(c)<n(t)&&(t=c);return t}),scan=scanl=curry$(function(n,r,t){var e,i;return e=r,[r].concat(function(){var r,u,c,o=[];for(r=0,c=(u=t).length;r<c;++r)i=u[r],o.push(e=n(e,i));return o}())}),scan1=scanl1=curry$(function(n,r){if(r.length)return scan(n,r[0],r.slice(1))}),scanr=curry$(function(n,r,t){return t=t.concat().reverse(),scan(n,r,t).reverse()}),scanr1=curry$(function(n,r){if(r.length)return r=r.concat().reverse(),scan(n,r[0],r.slice(1)).reverse()}),slice=curry$(function(n,r,t){return t.slice(n,r)}),take=curry$(function(n,r){return n<=0?r.slice(0,0):r.slice(0,n)}),drop=curry$(function(n,r){return n<=0?r:r.slice(n)}),splitAt=curry$(function(n,r){return[take(n,r),drop(n,r)]}),takeWhile=curry$(function(n,r){var t,e;if(t=r.length,!t)return r;for(e=0;e<t&&n(r[e]);)e+=1;return r.slice(0,e)}),dropWhile=curry$(function(n,r){var t,e;if(t=r.length,!t)return r;for(e=0;e<t&&n(r[e]);)e+=1;return r.slice(e)}),span=curry$(function(n,r){return[takeWhile(n,r),dropWhile(n,r)]}),breakList=curry$(function(n,r){return span(compose$(n,not$),r)}),zip=curry$(function(n,r){var t,e,i,u,c,o;for(t=[],e=r.length,i=0,u=n.length;i<u&&(c=i,o=n[i],c!==e);++i)t.push([o,r[c]]);return t}),zipWith=curry$(function(n,r,t){var e,i,u,c,o,l;for(e=[],i=t.length,u=0,c=r.length;u<c&&(o=u,l=r[u],o!==i);++u)e.push(n(l,t[o]));return e}),zipAll=function(){var n,r,t,e,i,u,c,o,l,a=[];for(n=slice$.call(arguments),r=void 0,t=0,e=n.length;t<e;++t)i=n[t],r<=(u=i.length)||(r=u);for(t=0;t<r;++t){for(c=t,o=[],l=0,e=n.length;l<e;++l)i=n[l],o.push(i[c]);a.push(o)}return a},zipAllWith=function(n){function r(){var n,r,e,i=[];for(n=0,e=(r=t).length;n<e;++n)c=r[n],i.push(c[l]);return i}var t,e,i,u,c,o,l,a=[];for(t=slice$.call(arguments,1),e=void 0,i=0,u=t.length;i<u;++i)c=t[i],e<=(o=c.length)||(e=o);for(i=0;i<e;++i)l=i,a.push(n.apply(null,r()));return a},at=curry$(function(n,r){return n<0?r[r.length+n]:r[n]}),elemIndex=curry$(function(n,r){var t,e,i,u;for(t=0,e=r.length;t<e;++t)if(i=t,u=r[t],u===n)return i}),elemIndices=curry$(function(n,r){var t,e,i,u,c=[];for(t=0,e=r.length;t<e;++t)i=t,u=r[t],u===n&&c.push(i);return c}),findIndex=curry$(function(n,r){var t,e,i,u;for(t=0,e=r.length;t<e;++t)if(i=t,u=r[t],n(u))return i}),findIndices=curry$(function(n,r){var t,e,i,u,c=[];for(t=0,e=r.length;t<e;++t)i=t,u=r[t],n(u)&&c.push(i);return c}),module.exports={each:each,map:map,filter:filter,compact:compact,reject:reject,partition:partition,find:find,head:head,first:first,tail:tail,last:last,initial:initial,empty:empty,reverse:reverse,difference:difference,intersection:intersection,union:union,countBy:countBy,groupBy:groupBy,fold:fold,fold1:fold1,foldl:foldl,foldl1:foldl1,foldr:foldr,foldr1:foldr1,unfoldr:unfoldr,andList:andList,orList:orList,any:any,all:all,unique:unique,uniqueBy:uniqueBy,sort:sort,sortWith:sortWith,sortBy:sortBy,sum:sum,product:product,mean:mean,average:average,concat:concat,concatMap:concatMap,flatten:flatten,maximum:maximum,minimum:minimum,maximumBy:maximumBy,minimumBy:minimumBy,scan:scan,scan1:scan1,scanl:scanl,scanl1:scanl1,scanr:scanr,scanr1:scanr1,slice:slice,take:take,drop:drop,splitAt:splitAt,takeWhile:takeWhile,dropWhile:dropWhile,span:span,breakList:breakList,zip:zip,zipWith:zipWith,zipAll:zipAll,zipAllWith:zipAllWith,at:at,elemIndex:elemIndex,elemIndices:elemIndices,findIndex:findIndex,findIndices:findIndices};

/***/ },

/***/ "./node_modules/prelude-ls/lib/Obj.js":
/***/ function(module, exports) {

	function curry$(r,n){var t,o=function(i){return r.length>1?function(){var u=i?i.concat():[];return t=n?t||this:this,u.push.apply(u,arguments)<r.length&&arguments.length?o.call(t,u):r.apply(t,u)}:r};return o()}var values,keys,pairsToObj,objToPairs,listsToObj,objToLists,empty,each,map,compact,filter,reject,partition,find;values=function(r){var n,t,o=[];for(n in r)t=r[n],o.push(t);return o},keys=function(r){var n,t=[];for(n in r)t.push(n);return t},pairsToObj=function(r){var n,t,o,i={};for(n=0,t=r.length;n<t;++n)o=r[n],i[o[0]]=o[1];return i},objToPairs=function(r){var n,t,o=[];for(n in r)t=r[n],o.push([n,t]);return o},listsToObj=curry$(function(r,n){var t,o,i,u,e={};for(t=0,o=r.length;t<o;++t)i=t,u=r[t],e[u]=n[i];return e}),objToLists=function(r){var n,t,o,i;n=[],t=[];for(o in r)i=r[o],n.push(o),t.push(i);return[n,t]},empty=function(r){var n;for(n in r)return!1;return!0},each=curry$(function(r,n){var t,o;for(t in n)o=n[t],r(o);return n}),map=curry$(function(r,n){var t,o,i={};for(t in n)o=n[t],i[t]=r(o);return i}),compact=function(r){var n,t,o={};for(n in r)t=r[n],t&&(o[n]=t);return o},filter=curry$(function(r,n){var t,o,i={};for(t in n)o=n[t],r(o)&&(i[t]=o);return i}),reject=curry$(function(r,n){var t,o,i={};for(t in n)o=n[t],r(o)||(i[t]=o);return i}),partition=curry$(function(r,n){var t,o,i,u;t={},o={};for(i in n)u=n[i],(r(u)?t:o)[i]=u;return[t,o]}),find=curry$(function(r,n){var t,o;for(t in n)if(o=n[t],r(o))return o}),module.exports={values:values,keys:keys,pairsToObj:pairsToObj,objToPairs:objToPairs,listsToObj:listsToObj,objToLists:objToLists,empty:empty,each:each,map:map,filter:filter,compact:compact,reject:reject,partition:partition,find:find};

/***/ },

/***/ "./node_modules/prelude-ls/lib/Str.js":
/***/ function(module, exports) {

	function curry$(n,e){var r,t=function(i){return n.length>1?function(){var u=i?i.concat():[];return r=e?r||this:this,u.push.apply(u,arguments)<n.length&&arguments.length?t.call(r,u):n.apply(r,u)}:n};return t()}var split,join,lines,unlines,words,unwords,chars,unchars,reverse,repeat,capitalize,camelize,dasherize;split=curry$(function(n,e){return e.split(n)}),join=curry$(function(n,e){return e.join(n)}),lines=function(n){return n.length?n.split("\n"):[]},unlines=function(n){return n.join("\n")},words=function(n){return n.length?n.split(/[ ]+/):[]},unwords=function(n){return n.join(" ")},chars=function(n){return n.split("")},unchars=function(n){return n.join("")},reverse=function(n){return n.split("").reverse().join("")},repeat=curry$(function(n,e){var r,t;for(r="",t=0;t<n;++t)r+=e;return r}),capitalize=function(n){return n.charAt(0).toUpperCase()+n.slice(1)},camelize=function(n){return n.replace(/[-_]+(.)?/g,function(n,e){return(null!=e?e:"").toUpperCase()})},dasherize=function(n){return n.replace(/([^-A-Z])([A-Z]+)/g,function(n,e,r){return e+"-"+(r.length>1?r:r.toLowerCase())}).replace(/^([A-Z]+)/,function(n,e){return e.length>1?e+"-":e.toLowerCase()})},module.exports={split:split,join:join,lines:lines,unlines:unlines,words:words,unwords:unwords,chars:chars,unchars:unchars,reverse:reverse,repeat:repeat,capitalize:capitalize,camelize:camelize,dasherize:dasherize};

/***/ },

/***/ "./node_modules/prelude-ls/lib/Num.js":
/***/ function(module, exports) {

	function curry$(n,t){var r,a=function(u){return n.length>1?function(){var o=u?u.concat():[];return r=t?r||this:this,o.push.apply(o,arguments)<n.length&&arguments.length?a.call(r,o):n.apply(r,o)}:n};return a()}var max,min,negate,abs,signum,quot,rem,div,mod,recip,pi,tau,exp,sqrt,ln,pow,sin,tan,cos,asin,acos,atan,atan2,truncate,round,ceiling,floor,isItNaN,even,odd,gcd,lcm;max=curry$(function(n,t){return n>t?n:t}),min=curry$(function(n,t){return n<t?n:t}),negate=function(n){return-n},abs=Math.abs,signum=function(n){return n<0?-1:n>0?1:0},quot=curry$(function(n,t){return~~(n/t)}),rem=curry$(function(n,t){return n%t}),div=curry$(function(n,t){return Math.floor(n/t)}),mod=curry$(function(n,t){var r;return(n%(r=t)+r)%r}),recip=function(n){return 1/n},pi=Math.PI,tau=2*pi,exp=Math.exp,sqrt=Math.sqrt,ln=Math.log,pow=curry$(function(n,t){return Math.pow(n,t)}),sin=Math.sin,tan=Math.tan,cos=Math.cos,asin=Math.asin,acos=Math.acos,atan=Math.atan,atan2=curry$(function(n,t){return Math.atan2(n,t)}),truncate=function(n){return~~n},round=Math.round,ceiling=Math.ceil,floor=Math.floor,isItNaN=function(n){return n!==n},even=function(n){return n%2===0},odd=function(n){return n%2!==0},gcd=curry$(function(n,t){var r;for(n=Math.abs(n),t=Math.abs(t);0!==t;)r=n%t,n=t,t=r;return n}),lcm=curry$(function(n,t){return Math.abs(Math.floor(n/gcd(n,t)*t))}),module.exports={max:max,min:min,negate:negate,abs:abs,signum:signum,quot:quot,rem:rem,div:div,mod:mod,recip:recip,pi:pi,tau:tau,exp:exp,sqrt:sqrt,ln:ln,pow:pow,sin:sin,tan:tan,cos:cos,acos:acos,asin:asin,atan:atan,atan2:atan2,truncate:truncate,round:round,ceiling:ceiling,floor:floor,isItNaN:isItNaN,even:even,odd:odd,gcd:gcd,lcm:lcm};

/***/ },

/***/ "./node_modules/levn/lib/cast.js":
/***/ function(module, exports, __webpack_require__) {

	(function(){function e(e,t,n){var r,i;return"Array"!==l.call(e).slice(8,-1)?{type:"Nothing"}:(r=t.of,{type:"Just",value:function(){var t,a,l,p=[];for(t=0,l=(a=e).length;t<l;++t)i=a[t],p.push(u(i,r,n));return p}()})}function t(e,t,n){var r,i,a,p,c,y,o;if("Array"!==l.call(e).slice(8,-1))return{type:"Nothing"};for(r=[],i=0,a=0,c=(p=t.of).length;a<c;++a)y=p[a],o=u(e[i],y,n),"Undefined"!==l.call(o).slice(8,-1)&&r.push(o),i++;return e.length<=i?{type:"Just",value:r}:{type:"Nothing"}}function n(e,t,n){var r,i,a;return"Object"!==l.call(e).slice(8,-1)?{type:"Nothing"}:(r=t.of,{type:"Just",value:function(){var t,l={};for(i in t=e)a=t[i],l[u(i,[{type:"String"}],n)]=u(a,r[i]||[{type:"*"}],n);return l}()})}function r(r,i,l){var p,c,y,o;if(p=i.type,c=i.structure,p){if(y=(null!=(o=l.customTypes[p])?o.cast:void 0)||a[p],!y)throw new Error("Type not defined: "+p+".");return y(r,l,u)}switch(c){case"array":return e(r,i,l);case"tuple":return t(r,i,l);case"fields":return n(r,i,l)}}function u(e,t,n){var u,a,l,p,c,y;for(u=0,a=t.length;u<a;++u)if(l=t[u],p=r(e,l,n),c=p.type,y=p.value,"Nothing"!==c&&i([l],y,{customTypes:n.customTypes}))return y;throw new Error("Value "+JSON.stringify(e)+" does not type check against "+JSON.stringify(t)+".")}var i,a,l={}.toString;i=__webpack_require__("./node_modules/type-check/lib/index.js").parsedTypeCheck,a={"*":function(e,t){switch(l.call(e).slice(8,-1)){case"Array":return r(e,{type:"Array"},t);case"Object":return r(e,{type:"Object"},t);default:return{type:"Just",value:u(e,[{type:"Undefined"},{type:"Null"},{type:"NaN"},{type:"Boolean"},{type:"Number"},{type:"Date"},{type:"RegExp"},{type:"Array"},{type:"Object"},{type:"String"}],(t.explicit=!0,t))}}},Undefined:function(e){return"undefined"===e||void 0===e?{type:"Just",value:void 0}:{type:"Nothing"}},Null:function(e){return"null"===e?{type:"Just",value:null}:{type:"Nothing"}},NaN:function(e){return"NaN"===e?{type:"Just",value:NaN}:{type:"Nothing"}},Boolean:function(e){return"true"===e?{type:"Just",value:!0}:"false"===e?{type:"Just",value:!1}:{type:"Nothing"}},Number:function(e){return{type:"Just",value:+e}},Int:function(e){return{type:"Just",value:+e}},Float:function(e){return{type:"Just",value:+e}},Date:function(e,t){var n;return(n=/^\#([\s\S]*)\#$/.exec(e))?{type:"Just",value:new Date(+n[1]||n[1])}:t.explicit?{type:"Nothing"}:{type:"Just",value:new Date(+e||e)}},RegExp:function(e,t){var n;return(n=/^\/([\s\S]*)\/([gimy]*)$/.exec(e))?{type:"Just",value:new RegExp(n[1],n[2])}:t.explicit?{type:"Nothing"}:{type:"Just",value:new RegExp(e)}},Array:function(t,n){return e(t,{of:[{type:"*"}]},n)},Object:function(e,t){return n(e,{of:{}},t)},String:function(e){var t;return"String"!==l.call(e).slice(8,-1)?{type:"Nothing"}:(t=e.match(/^'([\s\S]*)'$/))?{type:"Just",value:t[1].replace(/\\'/g,"'")}:(t=e.match(/^"([\s\S]*)"$/))?{type:"Just",value:t[1].replace(/\\"/g,'"')}:{type:"Just",value:e}}},module.exports=u}).call(this);

/***/ },

/***/ "./node_modules/type-check/lib/index.js":
/***/ function(module, exports, __webpack_require__) {

	(function(){var e,r,p,c;e="0.3.2",r=__webpack_require__("./node_modules/type-check/lib/parse-type.js"),p=__webpack_require__("./node_modules/type-check/lib/check.js"),c=function(e,c,t){return p(r(e),c,t)},module.exports={VERSION:e,typeCheck:c,parsedTypeCheck:p,parseType:r}}).call(this);

/***/ },

/***/ "./node_modules/type-check/lib/parse-type.js":
/***/ function(module, exports) {

	(function(){function r(r){var t;if(t=r[0],null==t)throw new Error("Unexpected end of input.");return t}function t(t){var e;if(e=r(t),!p.test(e))throw new Error("Expected text, got '"+e+"' instead.");return t.shift()}function e(t,e){var n;if(n=r(t),n!==e)throw new Error("Expected '"+e+"', got '"+n+"' instead.");return t.shift()}function n(r,t){var e;return e=r[0],e===t?r.shift():null}function o(t){var n;if(e(t,"["),"]"===r(t))throw new Error("Must specify type of Array - eg. [Type], got [] instead.");return n=c(t),e(t,"]"),{structure:"array",of:n}}function u(t){var o;if(o=[],e(t,"("),")"===r(t))throw new Error("Tuple must be of at least length 1 - eg. (Type), got () instead.");for(;o.push(c(t)),n(t,","),")"!==r(t););return e(t,")"),{structure:"tuple",of:o}}function i(t){var o,u,i,a,s;for(o={},e(t,"{"),u=!1;;){if(n(t,"...")){u=!0;break}if(i=f(t),a=i[0],s=i[1],o[a]=s,n(t,","),"}"===r(t))break}return e(t,"}"),{structure:"fields",of:o,subset:u}}function f(r){var n,o;return n=t(r),e(r,":"),o=c(r),[n,o]}function a(r){switch(r[0]){case"[":return o(r);case"(":return u(r);case"{":return i(r)}}function s(n){var o,u,i,f;if(o=r(n),u="*"===o,u||p.test(o))return i=u?e(n,"*"):t(n),f=a(n),f?(f.type=i,f):{type:i};if(f=a(n),!f)throw new Error("Unexpected character: "+o);return f}function c(t){var e,o,u,i,f;if("::"===r(t))throw new Error("No comment before comment separator '::' found.");for(e=t[1],null!=e&&"::"===e&&(t.shift(),t.shift()),o=[],u={},"Maybe"===r(t)&&(t.shift(),o=[{type:"Undefined"},{type:"Null"}],u={Undefined:!0,Null:!0});i=s(t),f=i.type,u[f]||o.push(i),u[f]=!0,n(t,"|"););return o}function h(r,t){for(var e=-1,n=t.length>>>0;++e<n;)if(r===t[e])return!0;return!1}var p,l;p=/[\$\w]+/,l=RegExp("\\.\\.\\.|::|->|"+p.source+"|\\S","g"),module.exports=function(r){var t,e;if(!r.length)throw new Error("No type specified.");if(t=r.match(l)||[],h("->",t))throw new Error("Function types are not supported. To validate that something is a function, you may use 'Function'.");try{return c(t)}catch(n){throw e=n,new Error(e.message+" - Remaining tokens: "+JSON.stringify(t)+" - Initial input: '"+r+"'")}}}).call(this);

/***/ },

/***/ "./node_modules/type-check/lib/check.js":
/***/ function(module, exports, __webpack_require__) {

	(function(){function r(r,t){return l(function(r){return a(r,t.of)},r)}function t(r,t){var e,n,u,i,f;for(e=0,n=0,i=(u=t.of).length;n<i;++n){if(f=u[n],!a(r[e],f))return!1;e++}return r.length<=e}function e(r,t){var e,n,u,i,f,l,c;e={},n=0;for(u in r)e[u]=!0,n++;i=0;for(f in l=t.of){if(c=l[f],!a(r[f],c))return!1;e[f]&&i++}return t.subset||n===i}function n(n,u){if(!(n instanceof Object))return!1;switch(u.structure){case"fields":return e(n,u);case"array":return r(n,u);case"tuple":return t(n,u)}}function u(r,t){var e,u,a,i;if(e=t.type,u=t.structure,e)return"*"===e||(a=y[e]||o[e],a?a.typeOf===p.call(r).slice(8,-1)&&a.validate(r):e===p.call(r).slice(8,-1)&&(!u||n(r,t)));if(u)return(!(i=s[u])||i===p.call(r).slice(8,-1))&&n(r,t);throw new Error("No type defined. Input: "+r+".")}function a(r,t){if("Array"!==p.call(t).slice(8,-1))throw new Error("Types must be in an array. Input: "+r+".");return f(function(t){return u(r,t)},t)}var i,f,l,c,o,s,y,p={}.toString;i=__webpack_require__("./node_modules/prelude-ls/lib/index.js"),f=i.any,l=i.all,c=i.isItNaN,o={Number:{typeOf:"Number",validate:function(r){return!c(r)}},NaN:{typeOf:"Number",validate:c},Int:{typeOf:"Number",validate:function(r){return!c(r)&&r%1===0}},Float:{typeOf:"Number",validate:function(r){return!c(r)}},Date:{typeOf:"Date",validate:function(r){return!c(r.getTime())}}},s={array:"Array",tuple:"Array"},module.exports=function(r,t,e){return null==e&&(e={}),y=e.customTypes||{},a(t,r)}}).call(this);

/***/ },

/***/ "./node_modules/lodash/lodash.js":
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, module) {(function(){function n(n,t){return n.set(t[0],t[1]),n}function t(n,t){return n.add(t),n}function r(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function e(n,t,r,e){for(var u=-1,i=n?n.length:0;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function u(n,t){for(var r=-1,e=n?n.length:0;++r<e&&t(n[r],r,n)!==!1;);return n}function i(n,t){for(var r=n?n.length:0;r--&&t(n[r],r,n)!==!1;);return n}function o(n,t){for(var r=-1,e=n?n.length:0;++r<e;)if(!t(n[r],r,n))return!1;return!0}function f(n,t){for(var r=-1,e=n?n.length:0,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function a(n,t){var r=n?n.length:0;return!!r&&b(n,t,0)>-1}function c(n,t,r){for(var e=-1,u=n?n.length:0;++e<u;)if(r(t,n[e]))return!0;return!1}function l(n,t){for(var r=-1,e=n?n.length:0,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function s(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function h(n,t,r,e){var u=-1,i=n?n.length:0;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);return r}function p(n,t,r,e){var u=n?n.length:0;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function v(n,t){for(var r=-1,e=n?n.length:0;++r<e;)if(t(n[r],r,n))return!0;return!1}function _(n){return n.split("")}function g(n){return n.match(St)||[]}function y(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,!1}),e}function d(n,t,r,e){for(var u=n.length,i=r+(e?1:-1);e?i--:++i<u;)if(t(n[i],i,n))return i;return-1}function b(n,t,r){return t===t?K(n,t,r):d(n,m,r)}function w(n,t,r,e){for(var u=r-1,i=n.length;++u<i;)if(e(n[u],t))return u;return-1}function m(n){return n!==n}function x(n,t){var r=n?n.length:0;return r?O(n,t)/r:En}function j(n){return function(t){return null==t?nn:t[n]}}function A(n){return function(t){return null==n?nn:n[t]}}function k(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=!1,n):t(r,n,u,i)}),r}function I(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}function O(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==nn&&(r=r===nn?i:r+i)}return r}function R(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function z(n,t){return l(t,function(t){return[t,n[t]]})}function E(n){return function(t){return n(t)}}function S(n,t){return l(t,function(t){return n[t]})}function W(n,t){return n.has(t)}function L(n,t){for(var r=-1,e=n.length;++r<e&&b(t,n[r],0)>-1;);return r}function C(n,t){for(var r=n.length;r--&&b(t,n[r],0)>-1;);return r}function B(n,t){for(var r=n.length,e=0;r--;)n[r]===t&&++e;return e}function U(n){return"\\"+Dr[n]}function T(n,t){return null==n?nn:n[t]}function $(n){return Er.test(n)}function D(n){return Sr.test(n)}function M(n){for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}function F(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n]}),r}function N(n,t){return function(r){return n(t(r))}}function P(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&o!==fn||(n[r]=fn,i[u++]=r)}return i}function q(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function Z(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function K(n,t,r){for(var e=r-1,u=n.length;++e<u;)if(n[e]===t)return e;return-1}function V(n,t,r){for(var e=r+1;e--;)if(n[e]===t)return e;return e}function G(n){return $(n)?Y(n):re(n)}function J(n){return $(n)?H(n):_(n)}function Y(n){for(var t=Rr.lastIndex=0;Rr.test(n);)++t;return t}function H(n){return n.match(Rr)||[]}function Q(n){return n.match(zr)||[]}function X(_){function A(n){if(Gf(n)&&!rh(n)&&!(n instanceof H)){if(n instanceof Y)return n;if(ol.call(n,"__wrapped__"))return Ni(n)}return new Y(n)}function K(){}function Y(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=nn}function H(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Sn,this.__views__=[]}function St(){var n=new H(this.__wrapped__);return n.__actions__=Ru(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Ru(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Ru(this.__views__),n}function Pt(){if(this.__filtered__){var n=new H(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function qt(){var n=this.__wrapped__.value(),t=this.__dir__,r=rh(n),e=t<0,u=r?n.length:0,i=hi(0,u,this.__views__),o=i.start,f=i.end,a=f-o,c=e?f:o-1,l=this.__iteratees__,s=l.length,h=0,p=Ll(a,this.__takeCount__);if(!r||u<rn||u==a&&p==a)return cu(n,this.__actions__);var v=[];n:for(;a--&&h<p;){c+=t;for(var _=-1,g=n[c];++_<s;){var y=l[_],d=y.iteratee,b=y.type,w=d(g);if(b==kn)g=w;else if(!w){if(b==An)continue n;break n}}v[h++]=g}return v}function Zt(n){var t=-1,r=n?n.length:0;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Kt(){this.__data__=Pl?Pl(null):{},this.size=0}function Vt(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}function Gt(n){var t=this.__data__;if(Pl){var r=t[n];return r===un?nn:r}return ol.call(t,n)?t[n]:nn}function Jt(n){var t=this.__data__;return Pl?t[n]!==nn:ol.call(t,n)}function Yt(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=Pl&&t===nn?un:t,this}function Ht(n){var t=-1,r=n?n.length:0;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Qt(){this.__data__=[],this.size=0}function Xt(n){var t=this.__data__,r=kr(t,n);if(r<0)return!1;var e=t.length-1;return r==e?t.pop():wl.call(t,r,1),--this.size,!0}function nr(n){var t=this.__data__,r=kr(t,n);return r<0?nn:t[r][1]}function tr(n){return kr(this.__data__,n)>-1}function rr(n,t){var r=this.__data__,e=kr(r,n);return e<0?(++this.size,r.push([n,t])):r[e][1]=t,this}function er(n){var t=-1,r=n?n.length:0;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function ur(){this.size=0,this.__data__={hash:new Zt,map:new(Dl||Ht),string:new Zt}}function ir(n){var t=ci(this,n)["delete"](n);return this.size-=t?1:0,t}function or(n){return ci(this,n).get(n)}function fr(n){return ci(this,n).has(n)}function ar(n,t){var r=ci(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this}function cr(n){var t=-1,r=n?n.length:0;for(this.__data__=new er;++t<r;)this.add(n[t])}function lr(n){return this.__data__.set(n,un),this}function sr(n){return this.__data__.has(n)}function hr(n){var t=this.__data__=new Ht(n);this.size=t.size}function pr(){this.__data__=new Ht,this.size=0}function vr(n){var t=this.__data__,r=t["delete"](n);return this.size=t.size,r}function _r(n){return this.__data__.get(n)}function gr(n){return this.__data__.has(n)}function yr(n,t){var r=this.__data__;if(r instanceof Ht){var e=r.__data__;if(!Dl||e.length<rn-1)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new er(e)}return r.set(n,t),this.size=r.size,this}function dr(n,t){var r=rh(n)||Cf(n)?R(n.length,Qc):[],e=r.length,u=!!e;for(var i in n)!t&&!ol.call(n,i)||u&&("length"==i||wi(i,e))||r.push(i);return r}function br(n){var t=n.length;return t?n[Ve(0,t-1)]:nn}function wr(n,t){var r=mr(n);return r.length=Ur(t,0,r.length),r}function mr(n){return $i(Ru(n))}function xr(n,t,r,e){return n===nn||Lf(n,rl[r])&&!ol.call(e,r)?t:n}function jr(n,t,r){(r===nn||Lf(n[t],r))&&("number"!=typeof t||r!==nn||t in n)||Er(n,t,r)}function Ar(n,t,r){var e=n[t];ol.call(n,t)&&Lf(e,r)&&(r!==nn||t in n)||Er(n,t,r)}function kr(n,t){for(var r=n.length;r--;)if(Lf(n[r][0],t))return r;return-1}function Rr(n,t,r,e){return ts(n,function(n,u,i){t(e,n,r(n),i)}),e}function zr(n,t){return n&&zu(t,za(t),n)}function Er(n,t,r){"__proto__"==t&&_l?_l(n,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):n[t]=r}function Sr(n,t){for(var r=-1,e=null==n,u=t.length,i=Zc(u);++r<u;)i[r]=e?nn:Ia(n,t[r]);return i}function Ur(n,t,r){return n===n&&(r!==nn&&(n=n<=r?n:r),t!==nn&&(n=n>=t?n:t)),n}function Tr(n,t,r,e,i,o,f){var a;if(e&&(a=o?e(n,i,o,f):e(n)),a!==nn)return a;if(!Vf(n))return n;var c=rh(n);if(c){if(a=_i(n),!t)return Ru(n,a)}else{var l=ps(n),s=l==Mn||l==Fn;if(uh(n))return gu(n,t);if(l==qn||l==Bn||s&&!o){if(a=gi(s?{}:n),!t)return Eu(n,zr(a,n))}else{if(!Br[l])return o?n:{};a=yi(n,l,Tr,t)}}f||(f=new hr);var h=f.get(n);if(h)return h;if(f.set(n,a),!c)var p=r?ui(n):za(n);return u(p||n,function(u,i){p&&(i=u,u=n[i]),Ar(a,i,Tr(u,t,r,e,i,n,f))}),a}function $r(n){var t=za(n);return function(r){return Dr(r,n,t)}}function Dr(n,t,r){var e=r.length;if(null==n)return!e;for(n=Yc(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===nn&&!(u in n)||!i(o))return!1}return!0}function Nr(n){return Vf(n)?dl(n):{}}function Pr(n,t,r){if("function"!=typeof n)throw new Xc(en);return gs(function(){n.apply(nn,r)},t)}function Zr(n,t,r,e){var u=-1,i=a,o=!0,f=n.length,s=[],h=t.length;if(!f)return s;r&&(t=l(t,E(r))),e?(i=c,o=!1):t.length>=rn&&(i=W,o=!1,t=new cr(t));n:for(;++u<f;){var p=n[u],v=r?r(p):p;if(p=e||0!==p?p:0,o&&v===v){for(var _=h;_--;)if(t[_]===v)continue n;s.push(p)}else i(t,v,e)||s.push(p)}return s}function Kr(n,t){var r=!0;return ts(n,function(n,e,u){return r=!!t(n,e,u)}),r}function Gr(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===nn?o===o&&!ia(o):r(o,f)))var f=o,a=i}return a}function Jr(n,t,r,e){var u=n.length;for(r=sa(r),r<0&&(r=-r>u?0:u+r),e=e===nn||e>u?u:sa(e),e<0&&(e+=u),e=r>e?0:ha(e);r<e;)n[r++]=t;return n}function re(n,t){var r=[];return ts(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function fe(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=bi),u||(u=[]);++i<o;){var f=n[i];t>0&&r(f)?t>1?fe(f,t-1,r,e,u):s(u,f):e||(u[u.length]=f)}return u}function ae(n,t){return n&&es(n,t,za)}function ce(n,t){return n&&us(n,t,za)}function le(n,t){return f(t,function(t){return qf(n[t])})}function se(n,t){t=xi(t,n)?[t]:vu(t);for(var r=0,e=t.length;null!=n&&r<e;)n=n[Di(t[r++])];return r&&r==e?n:nn}function he(n,t,r){var e=t(n);return rh(n)?e:s(e,r(n))}function pe(n){return cl.call(n)}function ve(n,t){return n>t}function _e(n,t){return null!=n&&ol.call(n,t)}function ge(n,t){return null!=n&&t in Yc(n)}function ye(n,t,r){return n>=Ll(t,r)&&n<Wl(t,r)}function de(n,t,r){for(var e=r?c:a,u=n[0].length,i=n.length,o=i,f=Zc(i),s=1/0,h=[];o--;){var p=n[o];o&&t&&(p=l(p,E(t))),s=Ll(p.length,s),f[o]=!r&&(t||u>=120&&p.length>=120)?new cr(o&&p):nn}p=n[0];var v=-1,_=f[0];n:for(;++v<u&&h.length<s;){var g=p[v],y=t?t(g):g;if(g=r||0!==g?g:0,!(_?W(_,y):e(h,y,r))){for(o=i;--o;){var d=f[o];if(!(d?W(d,y):e(n[o],y,r)))continue n}_&&_.push(y),h.push(g)}}return h}function be(n,t,r,e){return ae(n,function(n,u,i){t(e,r(n),u,i)}),e}function we(n,t,e){xi(t,n)||(t=vu(t),n=Ci(n,t),t=fo(t));var u=null==n?n:n[Di(t)];return null==u?nn:r(u,n,e)}function me(n){return Gf(n)&&cl.call(n)==Qn}function xe(n){return Gf(n)&&cl.call(n)==$n}function je(n,t,r,e,u){return n===t||(null==n||null==t||!Vf(n)&&!Gf(t)?n!==n&&t!==t:Ae(n,t,je,r,e,u))}function Ae(n,t,r,e,u,i){var o=rh(n),f=rh(t),a=Un,c=Un;o||(a=ps(n),a=a==Bn?qn:a),f||(c=ps(t),c=c==Bn?qn:c);var l=a==qn,s=c==qn,h=a==c;if(h&&!l)return i||(i=new hr),o||ch(n)?ni(n,t,r,e,u,i):ti(n,t,a,r,e,u,i);if(!(u&bn)){var p=l&&ol.call(n,"__wrapped__"),v=s&&ol.call(t,"__wrapped__");if(p||v){var _=p?n.value():n,g=v?t.value():t;return i||(i=new hr),r(_,g,e,u,i)}}return!!h&&(i||(i=new hr),ri(n,t,r,e,u,i))}function ke(n){return Gf(n)&&ps(n)==Nn}function Ie(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=Yc(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++u<i;){f=r[u];var a=f[0],c=n[a],l=f[1];if(o&&f[2]){if(c===nn&&!(a in n))return!1}else{var s=new hr;if(e)var h=e(c,l,a,n,t,s);if(!(h===nn?je(l,c,e,dn|bn,s):h))return!1}}return!0}function Oe(n){if(!Vf(n)||ki(n))return!1;var t=qf(n)?sl:Tt;return t.test(Mi(n))}function Re(n){return Vf(n)&&cl.call(n)==Kn}function ze(n){return Gf(n)&&ps(n)==Vn}function Ee(n){return Gf(n)&&Kf(n.length)&&!!Cr[cl.call(n)]}function Se(n){return"function"==typeof n?n:null==n?bc:"object"==typeof n?rh(n)?Te(n[0],n[1]):Ue(n):Oc(n)}function We(n){if(!Ii(n))return Sl(n);var t=[];for(var r in Yc(n))ol.call(n,r)&&"constructor"!=r&&t.push(r);return t}function Le(n){if(!Vf(n))return Wi(n);var t=Ii(n),r=[];for(var e in n)("constructor"!=e||!t&&ol.call(n,e))&&r.push(e);return r}function Ce(n,t){return n<t}function Be(n,t){var r=-1,e=Bf(n)?Zc(n.length):[];return ts(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function Ue(n){var t=li(n);return 1==t.length&&t[0][2]?Ri(t[0][0],t[0][1]):function(r){return r===n||Ie(r,n,t)}}function Te(n,t){return xi(n)&&Oi(t)?Ri(Di(n),t):function(r){var e=Ia(r,n);return e===nn&&e===t?Ra(r,n):je(t,e,nn,dn|bn)}}function $e(n,t,r,e,i){if(n!==t){if(!rh(t)&&!ch(t))var o=Le(t);u(o||t,function(u,f){if(o&&(f=u,u=t[f]),Vf(u))i||(i=new hr),De(n,t,f,r,$e,e,i);else{var a=e?e(n[f],u,f+"",n,t,i):nn;a===nn&&(a=u),jr(n,f,a)}})}}function De(n,t,r,e,u,i,o){var f=n[r],a=t[r],c=o.get(a);if(c)return void jr(n,r,c);var l=i?i(f,a,r+"",n,t,o):nn,s=l===nn;s&&(l=a,rh(a)||ch(a)?rh(f)?l=f:Uf(f)?l=Ru(f):(s=!1,l=Tr(a,!0)):ra(a)||Cf(a)?Cf(f)?l=va(f):!Vf(f)||e&&qf(f)?(s=!1,l=Tr(a,!0)):l=f:s=!1),s&&(o.set(a,l),u(l,a,e,i,o),o["delete"](a)),jr(n,r,l)}function Me(n,t){var r=n.length;if(r)return t+=t<0?r:0,wi(t,r)?n[t]:nn}function Fe(n,t,r){var e=-1;t=l(t.length?t:[bc],E(ai()));var u=Be(n,function(n,r,u){var i=l(t,function(t){return t(n)});return{criteria:i,index:++e,value:n}});return I(u,function(n,t){return ku(n,t,r)})}function Ne(n,t){return n=Yc(n),Pe(n,t,function(t,r){return r in n})}function Pe(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=n[o];r(f,o)&&Er(i,o,f)}return i}function qe(n){return function(t){return se(t,n)}}function Ze(n,t,r,e){var u=e?w:b,i=-1,o=t.length,f=n;for(n===t&&(t=Ru(t)),r&&(f=l(n,E(r)));++i<o;)for(var a=0,c=t[i],s=r?r(c):c;(a=u(f,s,a,e))>-1;)f!==n&&wl.call(f,a,1),wl.call(n,a,1);return n}function Ke(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];if(r==e||u!==i){var i=u;if(wi(u))wl.call(n,u,1);else if(xi(u,n))delete n[Di(u)];else{var o=vu(u),f=Ci(n,o);null!=f&&delete f[Di(fo(o))]}}}return n}function Ve(n,t){return n+Il(Ul()*(t-n+1))}function Ge(n,t,r,e){for(var u=-1,i=Wl(kl((t-n)/(r||1)),0),o=Zc(i);i--;)o[e?i:++u]=n,n+=r;return o}function Je(n,t){var r="";if(!n||t<1||t>Rn)return r;do t%2&&(r+=n),t=Il(t/2),t&&(n+=n);while(t);return r}function Ye(n,t){return ys(Li(n,t,bc),n+"")}function He(n,t,r,e){if(!Vf(n))return n;t=xi(t,n)?[t]:vu(t);for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){var a=Di(t[u]),c=r;if(u!=o){var l=f[a];c=e?e(l,a,f):nn,c===nn&&(c=Vf(l)?l:wi(t[u+1])?[]:{})}Ar(f,a,c),f=f[a]}return n}function Qe(n,t,r){var e=-1,u=n.length;t<0&&(t=-t>u?0:u+t),r=r>u?u:r,r<0&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0;for(var i=Zc(u);++e<u;)i[e]=n[e+t];return i}function Xe(n,t){var r;return ts(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function nu(n,t,r){var e=0,u=n?n.length:e;if("number"==typeof t&&t===t&&u<=Ln){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!ia(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return tu(n,t,bc,r)}function tu(n,t,r,e){t=r(t);for(var u=0,i=n?n.length:0,o=t!==t,f=null===t,a=ia(t),c=t===nn;u<i;){var l=Il((u+i)/2),s=r(n[l]),h=s!==nn,p=null===s,v=s===s,_=ia(s);if(o)var g=e||v;else g=c?v&&(e||h):f?v&&h&&(e||!p):a?v&&h&&!p&&(e||!_):!p&&!_&&(e?s<=t:s<t);g?u=l+1:i=l}return Ll(i,Wn)}function ru(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r],f=t?t(o):o;if(!r||!Lf(f,a)){var a=f;i[u++]=0===o?0:o}}return i}function eu(n){return"number"==typeof n?n:ia(n)?En:+n}function uu(n){if("string"==typeof n)return n;if(ia(n))return ns?ns.call(n):"";var t=n+"";return"0"==t&&1/n==-On?"-0":t}function iu(n,t,r){var e=-1,u=a,i=n.length,o=!0,f=[],l=f;if(r)o=!1,u=c;else if(i>=rn){var s=t?null:cs(n);if(s)return q(s);o=!1,u=W,l=new cr}else l=t?[]:f;n:for(;++e<i;){var h=n[e],p=t?t(h):h;if(h=r||0!==h?h:0,o&&p===p){for(var v=l.length;v--;)if(l[v]===p)continue n;t&&l.push(p),f.push(h)}else u(l,p,r)||(l!==f&&l.push(p),f.push(h))}return f}function ou(n,t){t=xi(t,n)?[t]:vu(t),n=Ci(n,t);var r=Di(fo(t));return!(null!=n&&ol.call(n,r))||delete n[r]}function fu(n,t,r,e){return He(n,t,r(se(n,t)),e)}function au(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?Qe(n,e?0:i,e?i+1:u):Qe(n,e?i+1:0,e?u:i)}function cu(n,t){var r=n;return r instanceof H&&(r=r.value()),h(t,function(n,t){return t.func.apply(t.thisArg,s([n],t.args))},r)}function lu(n,t,r){for(var e=-1,u=n.length;++e<u;)var i=i?s(Zr(i,n[e],t,r),Zr(n[e],i,t,r)):n[e];return i&&i.length?iu(i,t,r):[]}function su(n,t,r){for(var e=-1,u=n.length,i=t.length,o={};++e<u;){var f=e<i?t[e]:nn;r(o,n[e],f)}return o}function hu(n){return Uf(n)?n:[]}function pu(n){return"function"==typeof n?n:bc}function vu(n){return rh(n)?n:ds(n)}function _u(n,t,r){var e=n.length;return r=r===nn?e:r,!t&&r>=e?n:Qe(n,t,r)}function gu(n,t){if(t)return n.slice();var r=new n.constructor(n.length);return n.copy(r),r}function yu(n){var t=new n.constructor(n.byteLength);return new vl(t).set(new vl(n)),t}function du(n,t){var r=t?yu(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.byteLength)}function bu(t,r,e){var u=r?e(F(t),!0):F(t);return h(u,n,new t.constructor)}function wu(n){var t=new n.constructor(n.source,Ct.exec(n));return t.lastIndex=n.lastIndex,t}function mu(n,r,e){var u=r?e(q(n),!0):q(n);return h(u,t,new n.constructor)}function xu(n){return Xl?Yc(Xl.call(n)):{}}function ju(n,t){var r=t?yu(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.length)}function Au(n,t){if(n!==t){var r=n!==nn,e=null===n,u=n===n,i=ia(n),o=t!==nn,f=null===t,a=t===t,c=ia(t);if(!f&&!c&&!i&&n>t||i&&o&&a&&!f&&!c||e&&o&&a||!r&&a||!u)return 1;if(!e&&!i&&!c&&n<t||c&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!a)return-1}return 0}function ku(n,t,r){for(var e=-1,u=n.criteria,i=t.criteria,o=u.length,f=r.length;++e<o;){var a=Au(u[e],i[e]);if(a){if(e>=f)return a;var c=r[e];return a*("desc"==c?-1:1)}}return n.index-t.index}function Iu(n,t,r,e){for(var u=-1,i=n.length,o=r.length,f=-1,a=t.length,c=Wl(i-o,0),l=Zc(a+c),s=!e;++f<a;)l[f]=t[f];for(;++u<o;)(s||u<i)&&(l[r[u]]=n[u]);for(;c--;)l[f++]=n[u++];return l}function Ou(n,t,r,e){for(var u=-1,i=n.length,o=-1,f=r.length,a=-1,c=t.length,l=Wl(i-f,0),s=Zc(l+c),h=!e;++u<l;)s[u]=n[u];for(var p=u;++a<c;)s[p+a]=t[a];for(;++o<f;)(h||u<i)&&(s[p+r[o]]=n[u++]);return s}function Ru(n,t){var r=-1,e=n.length;for(t||(t=Zc(e));++r<e;)t[r]=n[r];return t}function zu(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],a=e?e(r[f],n[f],f,r,n):nn;a===nn&&(a=n[f]),u?Er(r,f,a):Ar(r,f,a)}return r}function Eu(n,t){return zu(n,ss(n),t)}function Su(n,t){return function(r,u){var i=rh(r)?e:Rr,o=t?t():{};return i(r,n,ai(u,2),o)}}function Wu(n){return Ye(function(t,r){var e=-1,u=r.length,i=u>1?r[u-1]:nn,o=u>2?r[2]:nn;for(i=n.length>3&&"function"==typeof i?(u--,i):nn,o&&mi(r[0],r[1],o)&&(i=u<3?nn:i,u=1),t=Yc(t);++e<u;){var f=r[e];f&&n(t,f,e,i)}return t})}function Lu(n,t){return function(r,e){if(null==r)return r;if(!Bf(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=Yc(r);(t?i--:++i<u)&&e(o[i],i,o)!==!1;);return r}}function Cu(n){return function(t,r,e){for(var u=-1,i=Yc(t),o=e(t),f=o.length;f--;){var a=o[n?f:++u];if(r(i[a],a,i)===!1)break}return t}}function Bu(n,t,r){function e(){var t=this&&this!==qr&&this instanceof e?i:n;return t.apply(u?r:this,arguments)}var u=t&an,i=$u(n);return e}function Uu(n){return function(t){t=ga(t);var r=$(t)?J(t):nn,e=r?r[0]:t.charAt(0),u=r?_u(r,1).join(""):t.slice(1);return e[n]()+u}}function Tu(n){return function(t){return h(vc(Ga(t).replace(Ir,"")),n,"")}}function $u(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Nr(n.prototype),e=n.apply(r,t);return Vf(e)?e:r}}function Du(n,t,e){function u(){for(var o=arguments.length,f=Zc(o),a=o,c=fi(u);a--;)f[a]=arguments[a];var l=o<3&&f[0]!==c&&f[o-1]!==c?[]:P(f,c);if(o-=l.length,o<e)return Yu(n,t,Nu,u.placeholder,nn,f,l,nn,nn,e-o);var s=this&&this!==qr&&this instanceof u?i:n;return r(s,this,f)}var i=$u(n);return u}function Mu(n){return function(t,r,e){var u=Yc(t);if(!Bf(t)){var i=ai(r,3);t=za(t),r=function(n){return i(u[n],n,u)}}var o=n(t,r,e);return o>-1?u[i?t[o]:o]:nn}}function Fu(n){return ei(function(t){var r=t.length,e=r,u=Y.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if("function"!=typeof i)throw new Xc(en);if(u&&!o&&"wrapper"==oi(i))var o=new Y([],(!0))}for(e=o?e:r;++e<r;){i=t[e];var f=oi(i),a="wrapper"==f?ls(i):nn;o=a&&Ai(a[0])&&a[1]==(_n|sn|pn|gn)&&!a[4].length&&1==a[9]?o[oi(a[0])].apply(o,a[3]):1==i.length&&Ai(i)?o[f]():o.thru(i)}return function(){var n=arguments,e=n[0];if(o&&1==n.length&&rh(e)&&e.length>=rn)return o.plant(e).value();for(var u=0,i=r?t[u].apply(this,n):e;++u<r;)i=t[u].call(this,i);return i}})}function Nu(n,t,r,e,u,i,o,f,a,c){function l(){for(var y=arguments.length,d=Zc(y),b=y;b--;)d[b]=arguments[b];if(v)var w=fi(l),m=B(d,w);if(e&&(d=Iu(d,e,u,v)),i&&(d=Ou(d,i,o,v)),y-=m,v&&y<c){var x=P(d,w);return Yu(n,t,Nu,l.placeholder,r,d,x,f,a,c-y)}var j=h?r:this,A=p?j[n]:n;return y=d.length,f?d=Bi(d,f):_&&y>1&&d.reverse(),s&&a<y&&(d.length=a),this&&this!==qr&&this instanceof l&&(A=g||$u(A)),A.apply(j,d)}var s=t&_n,h=t&an,p=t&cn,v=t&(sn|hn),_=t&yn,g=p?nn:$u(n);return l}function Pu(n,t){return function(r,e){return be(r,n,t(e),{})}}function qu(n,t){return function(r,e){var u;if(r===nn&&e===nn)return t;if(r!==nn&&(u=r),e!==nn){if(u===nn)return e;"string"==typeof r||"string"==typeof e?(r=uu(r),e=uu(e)):(r=eu(r),e=eu(e)),u=n(r,e)}return u}}function Zu(n){return ei(function(t){return t=l(t,E(ai())),Ye(function(e){var u=this;return n(t,function(n){return r(n,u,e)})})})}function Ku(n,t){t=t===nn?" ":uu(t);var r=t.length;if(r<2)return r?Je(t,n):t;var e=Je(t,kl(n/G(t)));return $(t)?_u(J(e),0,n).join(""):e.slice(0,n)}function Vu(n,t,e,u){function i(){for(var t=-1,a=arguments.length,c=-1,l=u.length,s=Zc(l+a),h=this&&this!==qr&&this instanceof i?f:n;++c<l;)s[c]=u[c];for(;a--;)s[c++]=arguments[++t];return r(h,o?e:this,s)}var o=t&an,f=$u(n);return i}function Gu(n){return function(t,r,e){return e&&"number"!=typeof e&&mi(t,r,e)&&(r=e=nn),t=la(t),r===nn?(r=t,t=0):r=la(r),e=e===nn?t<r?1:-1:la(e),Ge(t,r,e,n)}}function Ju(n){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=pa(t),r=pa(r)),n(t,r)}}function Yu(n,t,r,e,u,i,o,f,a,c){var l=t&sn,s=l?o:nn,h=l?nn:o,p=l?i:nn,v=l?nn:i;t|=l?pn:vn,t&=~(l?vn:pn),t&ln||(t&=~(an|cn));var _=[n,t,u,p,s,v,h,f,a,c],g=r.apply(nn,_);return Ai(n)&&_s(g,_),g.placeholder=e,Ui(g,n,t)}function Hu(n){var t=Jc[n];return function(n,r){if(n=pa(n),r=Ll(sa(r),292)){var e=(ga(n)+"e").split("e"),u=t(e[0]+"e"+(+e[1]+r));return e=(ga(u)+"e").split("e"),+(e[0]+"e"+(+e[1]-r))}return t(n)}}function Qu(n){return function(t){var r=ps(t);return r==Nn?F(t):r==Vn?Z(t):z(t,n(t))}}function Xu(n,t,r,e,u,i,o,f){var a=t&cn;if(!a&&"function"!=typeof n)throw new Xc(en);var c=e?e.length:0;if(c||(t&=~(pn|vn),e=u=nn),o=o===nn?o:Wl(sa(o),0),f=f===nn?f:sa(f),c-=u?u.length:0,t&vn){var l=e,s=u;e=u=nn}var h=a?nn:ls(n),p=[n,t,r,e,u,l,s,i,o,f];if(h&&Ei(p,h),n=p[0],t=p[1],r=p[2],e=p[3],u=p[4],f=p[9]=null==p[9]?a?0:n.length:Wl(p[9]-c,0),!f&&t&(sn|hn)&&(t&=~(sn|hn)),t&&t!=an)v=t==sn||t==hn?Du(n,t,f):t!=pn&&t!=(an|pn)||u.length?Nu.apply(nn,p):Vu(n,t,r,e);else var v=Bu(n,t,r);var _=h?is:_s;return Ui(_(v,p),n,t)}function ni(n,t,r,e,u,i){var o=u&bn,f=n.length,a=t.length;if(f!=a&&!(o&&a>f))return!1;var c=i.get(n);if(c&&i.get(t))return c==t;var l=-1,s=!0,h=u&dn?new cr:nn;for(i.set(n,t),i.set(t,n);++l<f;){var p=n[l],_=t[l];if(e)var g=o?e(_,p,l,t,n,i):e(p,_,l,n,t,i);if(g!==nn){if(g)continue;s=!1;break}if(h){if(!v(t,function(n,t){if(!W(h,t)&&(p===n||r(p,n,e,u,i)))return h.push(t)})){s=!1;break}}else if(p!==_&&!r(p,_,e,u,i)){s=!1;break}}return i["delete"](n),i["delete"](t),s}function ti(n,t,r,e,u,i,o){switch(r){case Xn:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case Qn:return!(n.byteLength!=t.byteLength||!e(new vl(n),new vl(t)));case Tn:case $n:case Pn:return Lf(+n,+t);case Dn:return n.name==t.name&&n.message==t.message;case Kn:case Gn:return n==t+"";case Nn:var f=F;case Vn:var a=i&bn;if(f||(f=q),n.size!=t.size&&!a)return!1;var c=o.get(n);if(c)return c==t;i|=dn,o.set(n,t);var l=ni(f(n),f(t),e,u,i,o);return o["delete"](n),l;case Jn:if(Xl)return Xl.call(n)==Xl.call(t)}return!1}function ri(n,t,r,e,u,i){var o=u&bn,f=za(n),a=f.length,c=za(t),l=c.length;if(a!=l&&!o)return!1;for(var s=a;s--;){var h=f[s];if(!(o?h in t:ol.call(t,h)))return!1}var p=i.get(n);if(p&&i.get(t))return p==t;var v=!0;i.set(n,t),i.set(t,n);for(var _=o;++s<a;){h=f[s];var g=n[h],y=t[h];if(e)var d=o?e(y,g,h,t,n,i):e(g,y,h,n,t,i);if(!(d===nn?g===y||r(g,y,e,u,i):d)){v=!1;break}_||(_="constructor"==h)}if(v&&!_){var b=n.constructor,w=t.constructor;b!=w&&"constructor"in n&&"constructor"in t&&!("function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w)&&(v=!1)}return i["delete"](n),i["delete"](t),v}function ei(n){return ys(Li(n,nn,Xi),n+"")}function ui(n){return he(n,za,ss)}function ii(n){return he(n,Ea,hs)}function oi(n){for(var t=n.name+"",r=Kl[t],e=ol.call(Kl,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function fi(n){var t=ol.call(A,"placeholder")?A:n;return t.placeholder}function ai(){var n=A.iteratee||wc;return n=n===wc?Se:n,arguments.length?n(arguments[0],arguments[1]):n}function ci(n,t){var r=n.__data__;return ji(t)?r["string"==typeof t?"string":"hash"]:r.map}function li(n){for(var t=za(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,Oi(u)]}return t}function si(n,t){var r=T(n,t);return Oe(r)?r:nn}function hi(n,t,r){for(var e=-1,u=r.length;++e<u;){var i=r[e],o=i.size;switch(i.type){case"drop":n+=o;break;case"dropRight":t-=o;break;case"take":t=Ll(t,n+o);break;case"takeRight":n=Wl(n,t-o)}}return{start:n,end:t}}function pi(n){var t=n.match(zt);return t?t[1].split(Et):[]}function vi(n,t,r){t=xi(t,n)?[t]:vu(t);for(var e=-1,u=t.length,i=!1;++e<u;){var o=Di(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=n?n.length:0,!!u&&Kf(u)&&wi(o,u)&&(rh(n)||Cf(n)))}function _i(n){var t=n.length,r=n.constructor(t);return t&&"string"==typeof n[0]&&ol.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function gi(n){return"function"!=typeof n.constructor||Ii(n)?{}:Nr(gl(n))}function yi(n,t,r,e){var u=n.constructor;switch(t){case Qn:return yu(n);case Tn:case $n:return new u((+n));case Xn:return du(n,e);case nt:case tt:case rt:case et:case ut:case it:case ot:case ft:case at:return ju(n,e);case Nn:return bu(n,e,r);case Pn:case Gn:return new u(n);case Kn:return wu(n);case Vn:return mu(n,e,r);case Jn:return xu(n)}}function di(n,t){var r=t.length;if(!r)return n;var e=r-1;return t[e]=(r>1?"& ":"")+t[e],t=t.join(r>2?", ":" "),n.replace(Rt,"{\n/* [wrapped with "+t+"] */\n")}function bi(n){return rh(n)||Cf(n)||!!(ml&&n&&n[ml])}function wi(n,t){return t=null==t?Rn:t,!!t&&("number"==typeof n||Dt.test(n))&&n>-1&&n%1==0&&n<t}function mi(n,t,r){if(!Vf(r))return!1;var e=typeof t;return!!("number"==e?Bf(r)&&wi(t,r.length):"string"==e&&t in r)&&Lf(r[t],n)}function xi(n,t){if(rh(n))return!1;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!ia(n))||(wt.test(n)||!bt.test(n)||null!=t&&n in Yc(t))}function ji(n){var t=typeof n;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==n:null===n}function Ai(n){var t=oi(n),r=A[t];if("function"!=typeof r||!(t in H.prototype))return!1;if(n===r)return!0;var e=ls(r);return!!e&&n===e[0]}function ki(n){return!!ul&&ul in n}function Ii(n){var t=n&&n.constructor,r="function"==typeof t&&t.prototype||rl;return n===r}function Oi(n){return n===n&&!Vf(n)}function Ri(n,t){return function(r){return null!=r&&(r[n]===t&&(t!==nn||n in Yc(r)))}}function zi(n){var t=bf(n,function(n){return r.size===on&&r.clear(),n}),r=t.cache;return t}function Ei(n,t){var r=n[1],e=t[1],u=r|e,i=u<(an|cn|_n),o=e==_n&&r==sn||e==_n&&r==gn&&n[7].length<=t[8]||e==(_n|gn)&&t[7].length<=t[8]&&r==sn;if(!i&&!o)return n;e&an&&(n[2]=t[2],u|=r&an?0:ln);var f=t[3];if(f){var a=n[3];n[3]=a?Iu(a,f,t[4]):f,n[4]=a?P(n[3],fn):t[4]}return f=t[5],f&&(a=n[5],n[5]=a?Ou(a,f,t[6]):f,n[6]=a?P(n[5],fn):t[6]),f=t[7],f&&(n[7]=f),e&_n&&(n[8]=null==n[8]?t[8]:Ll(n[8],t[8])),null==n[9]&&(n[9]=t[9]),n[0]=t[0],n[1]=u,n}function Si(n,t,r,e,u,i){return Vf(n)&&Vf(t)&&(i.set(t,n),$e(n,t,nn,Si,i),i["delete"](t)),n}function Wi(n){var t=[];if(null!=n)for(var r in Yc(n))t.push(r);return t}function Li(n,t,e){return t=Wl(t===nn?n.length-1:t,0),function(){for(var u=arguments,i=-1,o=Wl(u.length-t,0),f=Zc(o);++i<o;)f[i]=u[t+i];i=-1;for(var a=Zc(t+1);++i<t;)a[i]=u[i];return a[t]=e(f),r(n,this,a)}}function Ci(n,t){return 1==t.length?n:se(n,Qe(t,0,-1))}function Bi(n,t){for(var r=n.length,e=Ll(t.length,r),u=Ru(n);e--;){var i=t[e];n[e]=wi(i,r)?u[i]:nn}return n}function Ui(n,t,r){var e=t+"";return ys(n,di(e,Fi(pi(e),r)))}function Ti(n){var t=0,r=0;return function(){var e=Cl(),u=jn-(e-r);if(r=e,u>0){if(++t>=xn)return arguments[0]}else t=0;return n.apply(nn,arguments)}}function $i(n){for(var t=-1,r=n.length,e=r-1;++t<r;){var u=Ve(t,e),i=n[u];n[u]=n[t],n[t]=i}return n}function Di(n){if("string"==typeof n||ia(n))return n;var t=n+"";return"0"==t&&1/n==-On?"-0":t}function Mi(n){if(null!=n){try{return il.call(n)}catch(t){}try{return n+""}catch(t){}}return""}function Fi(n,t){return u(Cn,function(r){var e="_."+r[0];t&r[1]&&!a(n,e)&&n.push(e)}),n.sort()}function Ni(n){if(n instanceof H)return n.clone();var t=new Y(n.__wrapped__,n.__chain__);return t.__actions__=Ru(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function Pi(n,t,r){t=(r?mi(n,t,r):t===nn)?1:Wl(sa(t),0);var e=n?n.length:0;if(!e||t<1)return[];for(var u=0,i=0,o=Zc(kl(e/t));u<e;)o[i++]=Qe(n,u,u+=t);return o}function qi(n){for(var t=-1,r=n?n.length:0,e=0,u=[];++t<r;){var i=n[t];i&&(u[e++]=i)}return u}function Zi(){var n=arguments.length;if(!n)return[];for(var t=Zc(n-1),r=arguments[0],e=n;e--;)t[e-1]=arguments[e];return s(rh(r)?Ru(r):[r],fe(t,1))}function Ki(n,t,r){var e=n?n.length:0;return e?(t=r||t===nn?1:sa(t),Qe(n,t<0?0:t,e)):[]}function Vi(n,t,r){var e=n?n.length:0;return e?(t=r||t===nn?1:sa(t),t=e-t,Qe(n,0,t<0?0:t)):[]}function Gi(n,t){return n&&n.length?au(n,ai(t,3),!0,!0):[]}function Ji(n,t){return n&&n.length?au(n,ai(t,3),!0):[]}function Yi(n,t,r,e){var u=n?n.length:0;return u?(r&&"number"!=typeof r&&mi(n,t,r)&&(r=0,e=u),Jr(n,t,r,e)):[]}function Hi(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=null==r?0:sa(r);return u<0&&(u=Wl(e+u,0)),d(n,ai(t,3),u)}function Qi(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e-1;return r!==nn&&(u=sa(r),u=r<0?Wl(e+u,0):Ll(u,e-1)),d(n,ai(t,3),u,!0)}function Xi(n){var t=n?n.length:0;return t?fe(n,1):[]}function no(n){var t=n?n.length:0;return t?fe(n,On):[]}function to(n,t){var r=n?n.length:0;return r?(t=t===nn?1:sa(t),fe(n,t)):[]}function ro(n){for(var t=-1,r=n?n.length:0,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e}function eo(n){return n&&n.length?n[0]:nn}function uo(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=null==r?0:sa(r);return u<0&&(u=Wl(e+u,0)),b(n,t,u)}function io(n){var t=n?n.length:0;return t?Qe(n,0,-1):[]}function oo(n,t){return n?El.call(n,t):""}function fo(n){var t=n?n.length:0;return t?n[t-1]:nn}function ao(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;return r!==nn&&(u=sa(r),u=u<0?Wl(e+u,0):Ll(u,e-1)),t===t?V(n,t,u):d(n,m,u,!0)}function co(n,t){return n&&n.length?Me(n,sa(t)):nn}function lo(n,t){return n&&n.length&&t&&t.length?Ze(n,t):n}function so(n,t,r){return n&&n.length&&t&&t.length?Ze(n,t,ai(r,2)):n}function ho(n,t,r){return n&&n.length&&t&&t.length?Ze(n,t,nn,r):n}function po(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=ai(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),u.push(e))}return Ke(n,u),r}function vo(n){return n?Tl.call(n):n}function _o(n,t,r){var e=n?n.length:0;return e?(r&&"number"!=typeof r&&mi(n,t,r)?(t=0,r=e):(t=null==t?0:sa(t),r=r===nn?e:sa(r)),Qe(n,t,r)):[]}function go(n,t){return nu(n,t)}function yo(n,t,r){return tu(n,t,ai(r,2))}function bo(n,t){
	var r=n?n.length:0;if(r){var e=nu(n,t);if(e<r&&Lf(n[e],t))return e}return-1}function wo(n,t){return nu(n,t,!0)}function mo(n,t,r){return tu(n,t,ai(r,2),!0)}function xo(n,t){var r=n?n.length:0;if(r){var e=nu(n,t,!0)-1;if(Lf(n[e],t))return e}return-1}function jo(n){return n&&n.length?ru(n):[]}function Ao(n,t){return n&&n.length?ru(n,ai(t,2)):[]}function ko(n){var t=n?n.length:0;return t?Qe(n,1,t):[]}function Io(n,t,r){return n&&n.length?(t=r||t===nn?1:sa(t),Qe(n,0,t<0?0:t)):[]}function Oo(n,t,r){var e=n?n.length:0;return e?(t=r||t===nn?1:sa(t),t=e-t,Qe(n,t<0?0:t,e)):[]}function Ro(n,t){return n&&n.length?au(n,ai(t,3),!1,!0):[]}function zo(n,t){return n&&n.length?au(n,ai(t,3)):[]}function Eo(n){return n&&n.length?iu(n):[]}function So(n,t){return n&&n.length?iu(n,ai(t,2)):[]}function Wo(n,t){return n&&n.length?iu(n,nn,t):[]}function Lo(n){if(!n||!n.length)return[];var t=0;return n=f(n,function(n){if(Uf(n))return t=Wl(n.length,t),!0}),R(t,function(t){return l(n,j(t))})}function Co(n,t){if(!n||!n.length)return[];var e=Lo(n);return null==t?e:l(e,function(n){return r(t,nn,n)})}function Bo(n,t){return su(n||[],t||[],Ar)}function Uo(n,t){return su(n||[],t||[],He)}function To(n){var t=A(n);return t.__chain__=!0,t}function $o(n,t){return t(n),n}function Do(n,t){return t(n)}function Mo(){return To(this)}function Fo(){return new Y(this.value(),this.__chain__)}function No(){this.__values__===nn&&(this.__values__=ca(this.value()));var n=this.__index__>=this.__values__.length,t=n?nn:this.__values__[this.__index__++];return{done:n,value:t}}function Po(){return this}function qo(n){for(var t,r=this;r instanceof K;){var e=Ni(r);e.__index__=0,e.__values__=nn,t?u.__wrapped__=e:t=e;var u=e;r=r.__wrapped__}return u.__wrapped__=n,t}function Zo(){var n=this.__wrapped__;if(n instanceof H){var t=n;return this.__actions__.length&&(t=new H(this)),t=t.reverse(),t.__actions__.push({func:Do,args:[vo],thisArg:nn}),new Y(t,this.__chain__)}return this.thru(vo)}function Ko(){return cu(this.__wrapped__,this.__actions__)}function Vo(n,t,r){var e=rh(n)?o:Kr;return r&&mi(n,t,r)&&(t=nn),e(n,ai(t,3))}function Go(n,t){var r=rh(n)?f:re;return r(n,ai(t,3))}function Jo(n,t){return fe(tf(n,t),1)}function Yo(n,t){return fe(tf(n,t),On)}function Ho(n,t,r){return r=r===nn?1:sa(r),fe(tf(n,t),r)}function Qo(n,t){var r=rh(n)?u:ts;return r(n,ai(t,3))}function Xo(n,t){var r=rh(n)?i:rs;return r(n,ai(t,3))}function nf(n,t,r,e){n=Bf(n)?n:Na(n),r=r&&!e?sa(r):0;var u=n.length;return r<0&&(r=Wl(u+r,0)),ua(n)?r<=u&&n.indexOf(t,r)>-1:!!u&&b(n,t,r)>-1}function tf(n,t){var r=rh(n)?l:Be;return r(n,ai(t,3))}function rf(n,t,r,e){return null==n?[]:(rh(t)||(t=null==t?[]:[t]),r=e?nn:r,rh(r)||(r=null==r?[]:[r]),Fe(n,t,r))}function ef(n,t,r){var e=rh(n)?h:k,u=arguments.length<3;return e(n,ai(t,4),r,u,ts)}function uf(n,t,r){var e=rh(n)?p:k,u=arguments.length<3;return e(n,ai(t,4),r,u,rs)}function of(n,t){var r=rh(n)?f:re;return r(n,wf(ai(t,3)))}function ff(n){return br(Bf(n)?n:Na(n))}function af(n,t,r){return t=(r?mi(n,t,r):t===nn)?1:sa(t),wr(Bf(n)?n:Na(n),t)}function cf(n){return $i(Bf(n)?Ru(n):Na(n))}function lf(n){if(null==n)return 0;if(Bf(n))return ua(n)?G(n):n.length;var t=ps(n);return t==Nn||t==Vn?n.size:We(n).length}function sf(n,t,r){var e=rh(n)?v:Xe;return r&&mi(n,t,r)&&(t=nn),e(n,ai(t,3))}function hf(n,t){if("function"!=typeof t)throw new Xc(en);return n=sa(n),function(){if(--n<1)return t.apply(this,arguments)}}function pf(n,t,r){return t=r?nn:t,t=n&&null==t?n.length:t,Xu(n,_n,nn,nn,nn,nn,t)}function vf(n,t){var r;if("function"!=typeof t)throw new Xc(en);return n=sa(n),function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=nn),r}}function _f(n,t,r){t=r?nn:t;var e=Xu(n,sn,nn,nn,nn,nn,nn,t);return e.placeholder=_f.placeholder,e}function gf(n,t,r){t=r?nn:t;var e=Xu(n,hn,nn,nn,nn,nn,nn,t);return e.placeholder=gf.placeholder,e}function yf(n,t,r){function e(t){var r=h,e=p;return h=p=nn,d=t,_=n.apply(e,r)}function u(n){return d=n,g=gs(f,t),b?e(n):_}function i(n){var r=n-y,e=n-d,u=t-r;return w?Ll(u,v-e):u}function o(n){var r=n-y,e=n-d;return y===nn||r>=t||r<0||w&&e>=v}function f(){var n=Zs();return o(n)?a(n):void(g=gs(f,i(n)))}function a(n){return g=nn,m&&h?e(n):(h=p=nn,_)}function c(){g!==nn&&as(g),d=0,h=y=p=g=nn}function l(){return g===nn?_:a(Zs())}function s(){var n=Zs(),r=o(n);if(h=arguments,p=this,y=n,r){if(g===nn)return u(y);if(w)return g=gs(f,t),e(y)}return g===nn&&(g=gs(f,t)),_}var h,p,v,_,g,y,d=0,b=!1,w=!1,m=!0;if("function"!=typeof n)throw new Xc(en);return t=pa(t)||0,Vf(r)&&(b=!!r.leading,w="maxWait"in r,v=w?Wl(pa(r.maxWait)||0,t):v,m="trailing"in r?!!r.trailing:m),s.cancel=c,s.flush=l,s}function df(n){return Xu(n,yn)}function bf(n,t){if("function"!=typeof n||t&&"function"!=typeof t)throw new Xc(en);var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;if(i.has(u))return i.get(u);var o=n.apply(this,e);return r.cache=i.set(u,o)||i,o};return r.cache=new(bf.Cache||er),r}function wf(n){if("function"!=typeof n)throw new Xc(en);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function mf(n){return vf(2,n)}function xf(n,t){if("function"!=typeof n)throw new Xc(en);return t=t===nn?t:sa(t),Ye(n,t)}function jf(n,t){if("function"!=typeof n)throw new Xc(en);return t=t===nn?0:Wl(sa(t),0),Ye(function(e){var u=e[t],i=_u(e,0,t);return u&&s(i,u),r(n,this,i)})}function Af(n,t,r){var e=!0,u=!0;if("function"!=typeof n)throw new Xc(en);return Vf(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),yf(n,t,{leading:e,maxWait:t,trailing:u})}function kf(n){return pf(n,1)}function If(n,t){return t=null==t?bc:t,Hs(t,n)}function Of(){if(!arguments.length)return[];var n=arguments[0];return rh(n)?n:[n]}function Rf(n){return Tr(n,!1,!0)}function zf(n,t){return Tr(n,!1,!0,t)}function Ef(n){return Tr(n,!0,!0)}function Sf(n,t){return Tr(n,!0,!0,t)}function Wf(n,t){return null==t||Dr(n,t,za(t))}function Lf(n,t){return n===t||n!==n&&t!==t}function Cf(n){return Uf(n)&&ol.call(n,"callee")&&(!bl.call(n,"callee")||cl.call(n)==Bn)}function Bf(n){return null!=n&&Kf(n.length)&&!qf(n)}function Uf(n){return Gf(n)&&Bf(n)}function Tf(n){return n===!0||n===!1||Gf(n)&&cl.call(n)==Tn}function $f(n){return null!=n&&1===n.nodeType&&Gf(n)&&!ra(n)}function Df(n){if(Bf(n)&&(rh(n)||"string"==typeof n||"function"==typeof n.splice||uh(n)||Cf(n)))return!n.length;var t=ps(n);if(t==Nn||t==Vn)return!n.size;if(Ii(n))return!Sl(n).length;for(var r in n)if(ol.call(n,r))return!1;return!0}function Mf(n,t){return je(n,t)}function Ff(n,t,r){r="function"==typeof r?r:nn;var e=r?r(n,t):nn;return e===nn?je(n,t,r):!!e}function Nf(n){return!!Gf(n)&&(cl.call(n)==Dn||"string"==typeof n.message&&"string"==typeof n.name)}function Pf(n){return"number"==typeof n&&zl(n)}function qf(n){var t=Vf(n)?cl.call(n):"";return t==Mn||t==Fn}function Zf(n){return"number"==typeof n&&n==sa(n)}function Kf(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=Rn}function Vf(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function Gf(n){return null!=n&&"object"==typeof n}function Jf(n,t){return n===t||Ie(n,t,li(t))}function Yf(n,t,r){return r="function"==typeof r?r:nn,Ie(n,t,li(t),r)}function Hf(n){return ta(n)&&n!=+n}function Qf(n){if(vs(n))throw new Vc("This method is not supported with core-js. Try https://github.com/es-shims.");return Oe(n)}function Xf(n){return null===n}function na(n){return null==n}function ta(n){return"number"==typeof n||Gf(n)&&cl.call(n)==Pn}function ra(n){if(!Gf(n)||cl.call(n)!=qn)return!1;var t=gl(n);if(null===t)return!0;var r=ol.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&il.call(r)==al}function ea(n){return Zf(n)&&n>=-Rn&&n<=Rn}function ua(n){return"string"==typeof n||!rh(n)&&Gf(n)&&cl.call(n)==Gn}function ia(n){return"symbol"==typeof n||Gf(n)&&cl.call(n)==Jn}function oa(n){return n===nn}function fa(n){return Gf(n)&&ps(n)==Yn}function aa(n){return Gf(n)&&cl.call(n)==Hn}function ca(n){if(!n)return[];if(Bf(n))return ua(n)?J(n):Ru(n);if(yl&&n[yl])return M(n[yl]());var t=ps(n),r=t==Nn?F:t==Vn?q:Na;return r(n)}function la(n){if(!n)return 0===n?n:0;if(n=pa(n),n===On||n===-On){var t=n<0?-1:1;return t*zn}return n===n?n:0}function sa(n){var t=la(n),r=t%1;return t===t?r?t-r:t:0}function ha(n){return n?Ur(sa(n),0,Sn):0}function pa(n){if("number"==typeof n)return n;if(ia(n))return En;if(Vf(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=Vf(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(kt,"");var r=Ut.test(n);return r||$t.test(n)?Fr(n.slice(2),r?2:8):Bt.test(n)?En:+n}function va(n){return zu(n,Ea(n))}function _a(n){return Ur(sa(n),-Rn,Rn)}function ga(n){return null==n?"":uu(n)}function ya(n,t){var r=Nr(n);return t?zr(r,t):r}function da(n,t){return y(n,ai(t,3),ae)}function ba(n,t){return y(n,ai(t,3),ce)}function wa(n,t){return null==n?n:es(n,ai(t,3),Ea)}function ma(n,t){return null==n?n:us(n,ai(t,3),Ea)}function xa(n,t){return n&&ae(n,ai(t,3))}function ja(n,t){return n&&ce(n,ai(t,3))}function Aa(n){return null==n?[]:le(n,za(n))}function ka(n){return null==n?[]:le(n,Ea(n))}function Ia(n,t,r){var e=null==n?nn:se(n,t);return e===nn?r:e}function Oa(n,t){return null!=n&&vi(n,t,_e)}function Ra(n,t){return null!=n&&vi(n,t,ge)}function za(n){return Bf(n)?dr(n):We(n)}function Ea(n){return Bf(n)?dr(n,!0):Le(n)}function Sa(n,t){var r={};return t=ai(t,3),ae(n,function(n,e,u){Er(r,t(n,e,u),n)}),r}function Wa(n,t){var r={};return t=ai(t,3),ae(n,function(n,e,u){Er(r,e,t(n,e,u))}),r}function La(n,t){return Ca(n,wf(ai(t)))}function Ca(n,t){return null==n?{}:Pe(n,ii(n),ai(t))}function Ba(n,t,r){t=xi(t,n)?[t]:vu(t);var e=-1,u=t.length;for(u||(n=nn,u=1);++e<u;){var i=null==n?nn:n[Di(t[e])];i===nn&&(e=u,i=r),n=qf(i)?i.call(n):i}return n}function Ua(n,t,r){return null==n?n:He(n,t,r)}function Ta(n,t,r,e){return e="function"==typeof e?e:nn,null==n?n:He(n,t,r,e)}function $a(n,t,r){var e=rh(n)||ch(n);if(t=ai(t,4),null==r)if(e||Vf(n)){var i=n.constructor;r=e?rh(n)?new i:[]:qf(i)?Nr(gl(n)):{}}else r={};return(e?u:ae)(n,function(n,e,u){return t(r,n,e,u)}),r}function Da(n,t){return null==n||ou(n,t)}function Ma(n,t,r){return null==n?n:fu(n,t,pu(r))}function Fa(n,t,r,e){return e="function"==typeof e?e:nn,null==n?n:fu(n,t,pu(r),e)}function Na(n){return n?S(n,za(n)):[]}function Pa(n){return null==n?[]:S(n,Ea(n))}function qa(n,t,r){return r===nn&&(r=t,t=nn),r!==nn&&(r=pa(r),r=r===r?r:0),t!==nn&&(t=pa(t),t=t===t?t:0),Ur(pa(n),t,r)}function Za(n,t,r){return t=la(t),r===nn?(r=t,t=0):r=la(r),n=pa(n),ye(n,t,r)}function Ka(n,t,r){if(r&&"boolean"!=typeof r&&mi(n,t,r)&&(t=r=nn),r===nn&&("boolean"==typeof t?(r=t,t=nn):"boolean"==typeof n&&(r=n,n=nn)),n===nn&&t===nn?(n=0,t=1):(n=la(n),t===nn?(t=n,n=0):t=la(t)),n>t){var e=n;n=t,t=e}if(r||n%1||t%1){var u=Ul();return Ll(n+u*(t-n+Mr("1e-"+((u+"").length-1))),t)}return Ve(n,t)}function Va(n){return Bh(ga(n).toLowerCase())}function Ga(n){return n=ga(n),n&&n.replace(Mt,ee).replace(Or,"")}function Ja(n,t,r){n=ga(n),t=uu(t);var e=n.length;r=r===nn?e:Ur(sa(r),0,e);var u=r;return r-=t.length,r>=0&&n.slice(r,u)==t}function Ya(n){return n=ga(n),n&&_t.test(n)?n.replace(pt,ue):n}function Ha(n){return n=ga(n),n&&At.test(n)?n.replace(jt,"\\$&"):n}function Qa(n,t,r){n=ga(n),t=sa(t);var e=t?G(n):0;if(!t||e>=t)return n;var u=(t-e)/2;return Ku(Il(u),r)+n+Ku(kl(u),r)}function Xa(n,t,r){n=ga(n),t=sa(t);var e=t?G(n):0;return t&&e<t?n+Ku(t-e,r):n}function nc(n,t,r){n=ga(n),t=sa(t);var e=t?G(n):0;return t&&e<t?Ku(t-e,r)+n:n}function tc(n,t,r){return r||null==t?t=0:t&&(t=+t),Bl(ga(n),t||0)}function rc(n,t,r){return t=(r?mi(n,t,r):t===nn)?1:sa(t),Je(ga(n),t)}function ec(){var n=arguments,t=ga(n[0]);return n.length<3?t:t.replace(n[1],n[2])}function uc(n,t,r){return r&&"number"!=typeof r&&mi(n,t,r)&&(t=r=nn),(r=r===nn?Sn:r>>>0)?(n=ga(n),n&&("string"==typeof t||null!=t&&!fh(t))&&(t=uu(t),!t&&$(n))?_u(J(n),0,r):n.split(t,r)):[]}function ic(n,t,r){return n=ga(n),r=Ur(sa(r),0,n.length),t=uu(t),n.slice(r,r+t.length)==t}function oc(n,t,r){var e=A.templateSettings;r&&mi(n,t,r)&&(t=nn),n=ga(n),t=vh({},t,e,xr);var u,i,o=vh({},t.imports,e.imports,xr),f=za(o),a=S(o,f),c=0,l=t.interpolate||Ft,s="__p += '",h=Hc((t.escape||Ft).source+"|"+l.source+"|"+(l===dt?Lt:Ft).source+"|"+(t.evaluate||Ft).source+"|$","g"),p="//# sourceURL="+("sourceURL"in t?t.sourceURL:"lodash.templateSources["+ ++Lr+"]")+"\n";n.replace(h,function(t,r,e,o,f,a){return e||(e=o),s+=n.slice(c,a).replace(Nt,U),r&&(u=!0,s+="' +\n__e("+r+") +\n'"),f&&(i=!0,s+="';\n"+f+";\n__p += '"),e&&(s+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),c=a+t.length,t}),s+="';\n";var v=t.variable;v||(s="with (obj) {\n"+s+"\n}\n"),s=(i?s.replace(ct,""):s).replace(lt,"$1").replace(st,"$1;"),s="function("+(v||"obj")+") {\n"+(v?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(u?", __e = _.escape":"")+(i?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+s+"return __p\n}";var _=Uh(function(){return Gc(f,p+"return "+s).apply(nn,a)});if(_.source=s,Nf(_))throw _;return _}function fc(n){return ga(n).toLowerCase()}function ac(n){return ga(n).toUpperCase()}function cc(n,t,r){if(n=ga(n),n&&(r||t===nn))return n.replace(kt,"");if(!n||!(t=uu(t)))return n;var e=J(n),u=J(t),i=L(e,u),o=C(e,u)+1;return _u(e,i,o).join("")}function lc(n,t,r){if(n=ga(n),n&&(r||t===nn))return n.replace(Ot,"");if(!n||!(t=uu(t)))return n;var e=J(n),u=C(e,J(t))+1;return _u(e,0,u).join("")}function sc(n,t,r){if(n=ga(n),n&&(r||t===nn))return n.replace(It,"");if(!n||!(t=uu(t)))return n;var e=J(n),u=L(e,J(t));return _u(e,u).join("")}function hc(n,t){var r=wn,e=mn;if(Vf(t)){var u="separator"in t?t.separator:u;r="length"in t?sa(t.length):r,e="omission"in t?uu(t.omission):e}n=ga(n);var i=n.length;if($(n)){var o=J(n);i=o.length}if(r>=i)return n;var f=r-G(e);if(f<1)return e;var a=o?_u(o,0,f).join(""):n.slice(0,f);if(u===nn)return a+e;if(o&&(f+=a.length-f),fh(u)){if(n.slice(f).search(u)){var c,l=a;for(u.global||(u=Hc(u.source,ga(Ct.exec(u))+"g")),u.lastIndex=0;c=u.exec(l);)var s=c.index;a=a.slice(0,s===nn?f:s)}}else if(n.indexOf(uu(u),f)!=f){var h=a.lastIndexOf(u);h>-1&&(a=a.slice(0,h))}return a+e}function pc(n){return n=ga(n),n&&vt.test(n)?n.replace(ht,ie):n}function vc(n,t,r){return n=ga(n),t=r?nn:t,t===nn?D(n)?Q(n):g(n):n.match(t)||[]}function _c(n){var t=n?n.length:0,e=ai();return n=t?l(n,function(n){if("function"!=typeof n[1])throw new Xc(en);return[e(n[0]),n[1]]}):[],Ye(function(e){for(var u=-1;++u<t;){var i=n[u];if(r(i[0],this,e))return r(i[1],this,e)}})}function gc(n){return $r(Tr(n,!0))}function yc(n){return function(){return n}}function dc(n,t){return null==n||n!==n?t:n}function bc(n){return n}function wc(n){return Se("function"==typeof n?n:Tr(n,!0))}function mc(n){return Ue(Tr(n,!0))}function xc(n,t){return Te(n,Tr(t,!0))}function jc(n,t,r){var e=za(t),i=le(t,e);null!=r||Vf(t)&&(i.length||!e.length)||(r=t,t=n,n=this,i=le(t,za(t)));var o=!(Vf(r)&&"chain"in r&&!r.chain),f=qf(n);return u(i,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=n(this.__wrapped__),u=r.__actions__=Ru(this.__actions__);return u.push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,s([this.value()],arguments))})}),n}function Ac(){return qr._===this&&(qr._=ll),this}function kc(){}function Ic(n){return n=sa(n),Ye(function(t){return Me(t,n)})}function Oc(n){return xi(n)?j(Di(n)):qe(n)}function Rc(n){return function(t){return null==n?nn:se(n,t)}}function zc(){return[]}function Ec(){return!1}function Sc(){return{}}function Wc(){return""}function Lc(){return!0}function Cc(n,t){if(n=sa(n),n<1||n>Rn)return[];var r=Sn,e=Ll(n,Sn);t=ai(t),n-=Sn;for(var u=R(e,t);++r<n;)t(r);return u}function Bc(n){return rh(n)?l(n,Di):ia(n)?[n]:Ru(ds(n))}function Uc(n){var t=++fl;return ga(n)+t}function Tc(n){return n&&n.length?Gr(n,bc,ve):nn}function $c(n,t){return n&&n.length?Gr(n,ai(t,2),ve):nn}function Dc(n){return x(n,bc)}function Mc(n,t){return x(n,ai(t,2))}function Fc(n){return n&&n.length?Gr(n,bc,Ce):nn}function Nc(n,t){return n&&n.length?Gr(n,ai(t,2),Ce):nn}function Pc(n){return n&&n.length?O(n,bc):0}function qc(n,t){return n&&n.length?O(n,ai(t,2)):0}_=_?oe.defaults(qr.Object(),_,oe.pick(qr,Wr)):qr;var Zc=_.Array,Kc=_.Date,Vc=_.Error,Gc=_.Function,Jc=_.Math,Yc=_.Object,Hc=_.RegExp,Qc=_.String,Xc=_.TypeError,nl=Zc.prototype,tl=Gc.prototype,rl=Yc.prototype,el=_["__core-js_shared__"],ul=function(){var n=/[^.]+$/.exec(el&&el.keys&&el.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),il=tl.toString,ol=rl.hasOwnProperty,fl=0,al=il.call(Yc),cl=rl.toString,ll=qr._,sl=Hc("^"+il.call(ol).replace(jt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),hl=Vr?_.Buffer:nn,pl=_.Symbol,vl=_.Uint8Array,_l=Yc.defineProperty,gl=N(Yc.getPrototypeOf,Yc),yl=pl?pl.iterator:nn,dl=Yc.create,bl=rl.propertyIsEnumerable,wl=nl.splice,ml=pl?pl.isConcatSpreadable:nn,xl=_.clearTimeout!==qr.clearTimeout&&_.clearTimeout,jl=Kc&&Kc.now!==qr.Date.now&&Kc.now,Al=_.setTimeout!==qr.setTimeout&&_.setTimeout,kl=Jc.ceil,Il=Jc.floor,Ol=Yc.getOwnPropertySymbols,Rl=hl?hl.isBuffer:nn,zl=_.isFinite,El=nl.join,Sl=N(Yc.keys,Yc),Wl=Jc.max,Ll=Jc.min,Cl=Kc.now,Bl=_.parseInt,Ul=Jc.random,Tl=nl.reverse,$l=si(_,"DataView"),Dl=si(_,"Map"),Ml=si(_,"Promise"),Fl=si(_,"Set"),Nl=si(_,"WeakMap"),Pl=si(Yc,"create"),ql=si(Yc,"defineProperty"),Zl=Nl&&new Nl,Kl={},Vl=Mi($l),Gl=Mi(Dl),Jl=Mi(Ml),Yl=Mi(Fl),Hl=Mi(Nl),Ql=pl?pl.prototype:nn,Xl=Ql?Ql.valueOf:nn,ns=Ql?Ql.toString:nn;A.templateSettings={escape:gt,evaluate:yt,interpolate:dt,variable:"",imports:{_:A}},A.prototype=K.prototype,A.prototype.constructor=A,Y.prototype=Nr(K.prototype),Y.prototype.constructor=Y,H.prototype=Nr(K.prototype),H.prototype.constructor=H,Zt.prototype.clear=Kt,Zt.prototype["delete"]=Vt,Zt.prototype.get=Gt,Zt.prototype.has=Jt,Zt.prototype.set=Yt,Ht.prototype.clear=Qt,Ht.prototype["delete"]=Xt,Ht.prototype.get=nr,Ht.prototype.has=tr,Ht.prototype.set=rr,er.prototype.clear=ur,er.prototype["delete"]=ir,er.prototype.get=or,er.prototype.has=fr,er.prototype.set=ar,cr.prototype.add=cr.prototype.push=lr,cr.prototype.has=sr,hr.prototype.clear=pr,hr.prototype["delete"]=vr,hr.prototype.get=_r,hr.prototype.has=gr,hr.prototype.set=yr;var ts=Lu(ae),rs=Lu(ce,!0),es=Cu(),us=Cu(!0),is=Zl?function(n,t){return Zl.set(n,t),n}:bc,os=ql?function(n,t){return ql(n,"toString",{configurable:!0,enumerable:!1,value:yc(t),writable:!0})}:bc,fs=Ye,as=xl||function(n){return qr.clearTimeout(n)},cs=Fl&&1/q(new Fl([,-0]))[1]==On?function(n){return new Fl(n)}:kc,ls=Zl?function(n){return Zl.get(n)}:kc,ss=Ol?N(Ol,Yc):zc,hs=Ol?function(n){for(var t=[];n;)s(t,ss(n)),n=gl(n);return t}:zc,ps=pe;($l&&ps(new $l(new ArrayBuffer(1)))!=Xn||Dl&&ps(new Dl)!=Nn||Ml&&ps(Ml.resolve())!=Zn||Fl&&ps(new Fl)!=Vn||Nl&&ps(new Nl)!=Yn)&&(ps=function(n){var t=cl.call(n),r=t==qn?n.constructor:nn,e=r?Mi(r):nn;if(e)switch(e){case Vl:return Xn;case Gl:return Nn;case Jl:return Zn;case Yl:return Vn;case Hl:return Yn}return t});var vs=el?qf:Ec,_s=Ti(is),gs=Al||function(n,t){return qr.setTimeout(n,t)},ys=Ti(os),ds=zi(function(n){n=ga(n);var t=[];return mt.test(n)&&t.push(""),n.replace(xt,function(n,r,e,u){t.push(e?u.replace(Wt,"$1"):r||n)}),t}),bs=Ye(function(n,t){return Uf(n)?Zr(n,fe(t,1,Uf,!0)):[]}),ws=Ye(function(n,t){var r=fo(t);return Uf(r)&&(r=nn),Uf(n)?Zr(n,fe(t,1,Uf,!0),ai(r,2)):[]}),ms=Ye(function(n,t){var r=fo(t);return Uf(r)&&(r=nn),Uf(n)?Zr(n,fe(t,1,Uf,!0),nn,r):[]}),xs=Ye(function(n){var t=l(n,hu);return t.length&&t[0]===n[0]?de(t):[]}),js=Ye(function(n){var t=fo(n),r=l(n,hu);return t===fo(r)?t=nn:r.pop(),r.length&&r[0]===n[0]?de(r,ai(t,2)):[]}),As=Ye(function(n){var t=fo(n),r=l(n,hu);return t===fo(r)?t=nn:r.pop(),r.length&&r[0]===n[0]?de(r,nn,t):[]}),ks=Ye(lo),Is=ei(function(n,t){var r=n?n.length:0,e=Sr(n,t);return Ke(n,l(t,function(n){return wi(n,r)?+n:n}).sort(Au)),e}),Os=Ye(function(n){return iu(fe(n,1,Uf,!0))}),Rs=Ye(function(n){var t=fo(n);return Uf(t)&&(t=nn),iu(fe(n,1,Uf,!0),ai(t,2))}),zs=Ye(function(n){var t=fo(n);return Uf(t)&&(t=nn),iu(fe(n,1,Uf,!0),nn,t)}),Es=Ye(function(n,t){return Uf(n)?Zr(n,t):[]}),Ss=Ye(function(n){return lu(f(n,Uf))}),Ws=Ye(function(n){var t=fo(n);return Uf(t)&&(t=nn),lu(f(n,Uf),ai(t,2))}),Ls=Ye(function(n){var t=fo(n);return Uf(t)&&(t=nn),lu(f(n,Uf),nn,t)}),Cs=Ye(Lo),Bs=Ye(function(n){var t=n.length,r=t>1?n[t-1]:nn;return r="function"==typeof r?(n.pop(),r):nn,Co(n,r)}),Us=ei(function(n){var t=n.length,r=t?n[0]:0,e=this.__wrapped__,u=function(t){return Sr(t,n)};return!(t>1||this.__actions__.length)&&e instanceof H&&wi(r)?(e=e.slice(r,+r+(t?1:0)),e.__actions__.push({func:Do,args:[u],thisArg:nn}),new Y(e,this.__chain__).thru(function(n){return t&&!n.length&&n.push(nn),n})):this.thru(u)}),Ts=Su(function(n,t,r){ol.call(n,r)?++n[r]:Er(n,r,1)}),$s=Mu(Hi),Ds=Mu(Qi),Ms=Su(function(n,t,r){ol.call(n,r)?n[r].push(t):Er(n,r,[t])}),Fs=Ye(function(n,t,e){var u=-1,i="function"==typeof t,o=xi(t),f=Bf(n)?Zc(n.length):[];return ts(n,function(n){var a=i?t:o&&null!=n?n[t]:nn;f[++u]=a?r(a,n,e):we(n,t,e)}),f}),Ns=Su(function(n,t,r){Er(n,r,t)}),Ps=Su(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),qs=Ye(function(n,t){if(null==n)return[];var r=t.length;return r>1&&mi(n,t[0],t[1])?t=[]:r>2&&mi(t[0],t[1],t[2])&&(t=[t[0]]),Fe(n,fe(t,1),[])}),Zs=jl||function(){return qr.Date.now()},Ks=Ye(function(n,t,r){var e=an;if(r.length){var u=P(r,fi(Ks));e|=pn}return Xu(n,e,t,r,u)}),Vs=Ye(function(n,t,r){var e=an|cn;if(r.length){var u=P(r,fi(Vs));e|=pn}return Xu(t,e,n,r,u)}),Gs=Ye(function(n,t){return Pr(n,1,t)}),Js=Ye(function(n,t,r){return Pr(n,pa(t)||0,r)});bf.Cache=er;var Ys=fs(function(n,t){t=1==t.length&&rh(t[0])?l(t[0],E(ai())):l(fe(t,1),E(ai()));var e=t.length;return Ye(function(u){for(var i=-1,o=Ll(u.length,e);++i<o;)u[i]=t[i].call(this,u[i]);return r(n,this,u)})}),Hs=Ye(function(n,t){var r=P(t,fi(Hs));return Xu(n,pn,nn,t,r)}),Qs=Ye(function(n,t){var r=P(t,fi(Qs));return Xu(n,vn,nn,t,r)}),Xs=ei(function(n,t){return Xu(n,gn,nn,nn,nn,t)}),nh=Ju(ve),th=Ju(function(n,t){return n>=t}),rh=Zc.isArray,eh=Yr?E(Yr):me,uh=Rl||Ec,ih=Hr?E(Hr):xe,oh=Qr?E(Qr):ke,fh=Xr?E(Xr):Re,ah=ne?E(ne):ze,ch=te?E(te):Ee,lh=Ju(Ce),sh=Ju(function(n,t){return n<=t}),hh=Wu(function(n,t){if(Ii(t)||Bf(t))return void zu(t,za(t),n);for(var r in t)ol.call(t,r)&&Ar(n,r,t[r])}),ph=Wu(function(n,t){zu(t,Ea(t),n)}),vh=Wu(function(n,t,r,e){zu(t,Ea(t),n,e)}),_h=Wu(function(n,t,r,e){zu(t,za(t),n,e)}),gh=ei(Sr),yh=Ye(function(n){return n.push(nn,xr),r(vh,nn,n)}),dh=Ye(function(n){return n.push(nn,Si),r(jh,nn,n)}),bh=Pu(function(n,t,r){n[t]=r},yc(bc)),wh=Pu(function(n,t,r){ol.call(n,t)?n[t].push(r):n[t]=[r]},ai),mh=Ye(we),xh=Wu(function(n,t,r){$e(n,t,r)}),jh=Wu(function(n,t,r,e){$e(n,t,r,e)}),Ah=ei(function(n,t){return null==n?{}:(t=l(t,Di),Ne(n,Zr(ii(n),t)))}),kh=ei(function(n,t){return null==n?{}:Ne(n,l(t,Di))}),Ih=Qu(za),Oh=Qu(Ea),Rh=Tu(function(n,t,r){return t=t.toLowerCase(),n+(r?Va(t):t)}),zh=Tu(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Eh=Tu(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Sh=Uu("toLowerCase"),Wh=Tu(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Lh=Tu(function(n,t,r){return n+(r?" ":"")+Bh(t)}),Ch=Tu(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),Bh=Uu("toUpperCase"),Uh=Ye(function(n,t){try{return r(n,nn,t)}catch(e){return Nf(e)?e:new Vc(e)}}),Th=ei(function(n,t){return u(t,function(t){t=Di(t),Er(n,t,Ks(n[t],n))}),n}),$h=Fu(),Dh=Fu(!0),Mh=Ye(function(n,t){return function(r){return we(r,n,t)}}),Fh=Ye(function(n,t){return function(r){return we(n,r,t)}}),Nh=Zu(l),Ph=Zu(o),qh=Zu(v),Zh=Gu(),Kh=Gu(!0),Vh=qu(function(n,t){return n+t},0),Gh=Hu("ceil"),Jh=qu(function(n,t){return n/t},1),Yh=Hu("floor"),Hh=qu(function(n,t){return n*t},1),Qh=Hu("round"),Xh=qu(function(n,t){return n-t},0);return A.after=hf,A.ary=pf,A.assign=hh,A.assignIn=ph,A.assignInWith=vh,A.assignWith=_h,A.at=gh,A.before=vf,A.bind=Ks,A.bindAll=Th,A.bindKey=Vs,A.castArray=Of,A.chain=To,A.chunk=Pi,A.compact=qi,A.concat=Zi,A.cond=_c,A.conforms=gc,A.constant=yc,A.countBy=Ts,A.create=ya,A.curry=_f,A.curryRight=gf,A.debounce=yf,A.defaults=yh,A.defaultsDeep=dh,A.defer=Gs,A.delay=Js,A.difference=bs,A.differenceBy=ws,A.differenceWith=ms,A.drop=Ki,A.dropRight=Vi,A.dropRightWhile=Gi,A.dropWhile=Ji,A.fill=Yi,A.filter=Go,A.flatMap=Jo,A.flatMapDeep=Yo,A.flatMapDepth=Ho,A.flatten=Xi,A.flattenDeep=no,A.flattenDepth=to,A.flip=df,A.flow=$h,A.flowRight=Dh,A.fromPairs=ro,A.functions=Aa,A.functionsIn=ka,A.groupBy=Ms,A.initial=io,A.intersection=xs,A.intersectionBy=js,A.intersectionWith=As,A.invert=bh,A.invertBy=wh,A.invokeMap=Fs,A.iteratee=wc,A.keyBy=Ns,A.keys=za,A.keysIn=Ea,A.map=tf,A.mapKeys=Sa,A.mapValues=Wa,A.matches=mc,A.matchesProperty=xc,A.memoize=bf,A.merge=xh,A.mergeWith=jh,A.method=Mh,A.methodOf=Fh,A.mixin=jc,A.negate=wf,A.nthArg=Ic,A.omit=Ah,A.omitBy=La,A.once=mf,A.orderBy=rf,A.over=Nh,A.overArgs=Ys,A.overEvery=Ph,A.overSome=qh,A.partial=Hs,A.partialRight=Qs,A.partition=Ps,A.pick=kh,A.pickBy=Ca,A.property=Oc,A.propertyOf=Rc,A.pull=ks,A.pullAll=lo,A.pullAllBy=so,A.pullAllWith=ho,A.pullAt=Is,A.range=Zh,A.rangeRight=Kh,A.rearg=Xs,A.reject=of,A.remove=po,A.rest=xf,A.reverse=vo,A.sampleSize=af,A.set=Ua,A.setWith=Ta,A.shuffle=cf,A.slice=_o,A.sortBy=qs,A.sortedUniq=jo,A.sortedUniqBy=Ao,A.split=uc,A.spread=jf,A.tail=ko,A.take=Io,A.takeRight=Oo,A.takeRightWhile=Ro,A.takeWhile=zo,A.tap=$o,A.throttle=Af,A.thru=Do,A.toArray=ca,A.toPairs=Ih,A.toPairsIn=Oh,A.toPath=Bc,A.toPlainObject=va,A.transform=$a,A.unary=kf,A.union=Os,A.unionBy=Rs,A.unionWith=zs,A.uniq=Eo,A.uniqBy=So,A.uniqWith=Wo,A.unset=Da,A.unzip=Lo,A.unzipWith=Co,A.update=Ma,A.updateWith=Fa,A.values=Na,A.valuesIn=Pa,A.without=Es,A.words=vc,A.wrap=If,A.xor=Ss,A.xorBy=Ws,A.xorWith=Ls,A.zip=Cs,A.zipObject=Bo,A.zipObjectDeep=Uo,A.zipWith=Bs,A.entries=Ih,A.entriesIn=Oh,A.extend=ph,A.extendWith=vh,jc(A,A),A.add=Vh,A.attempt=Uh,A.camelCase=Rh,A.capitalize=Va,A.ceil=Gh,A.clamp=qa,A.clone=Rf,A.cloneDeep=Ef,A.cloneDeepWith=Sf,A.cloneWith=zf,A.conformsTo=Wf,A.deburr=Ga,A.defaultTo=dc,A.divide=Jh,A.endsWith=Ja,A.eq=Lf,A.escape=Ya,A.escapeRegExp=Ha,A.every=Vo,A.find=$s,A.findIndex=Hi,A.findKey=da,A.findLast=Ds,A.findLastIndex=Qi,A.findLastKey=ba,A.floor=Yh,A.forEach=Qo,A.forEachRight=Xo,A.forIn=wa,A.forInRight=ma,A.forOwn=xa,A.forOwnRight=ja,A.get=Ia,A.gt=nh,A.gte=th,A.has=Oa,A.hasIn=Ra,A.head=eo,A.identity=bc,A.includes=nf,A.indexOf=uo,A.inRange=Za,A.invoke=mh,A.isArguments=Cf,A.isArray=rh,A.isArrayBuffer=eh,A.isArrayLike=Bf,A.isArrayLikeObject=Uf,A.isBoolean=Tf,A.isBuffer=uh,A.isDate=ih,A.isElement=$f,A.isEmpty=Df,A.isEqual=Mf,A.isEqualWith=Ff,A.isError=Nf,A.isFinite=Pf,A.isFunction=qf,A.isInteger=Zf,A.isLength=Kf,A.isMap=oh,A.isMatch=Jf,A.isMatchWith=Yf,A.isNaN=Hf,A.isNative=Qf,A.isNil=na,A.isNull=Xf,A.isNumber=ta,A.isObject=Vf,A.isObjectLike=Gf,A.isPlainObject=ra,A.isRegExp=fh,A.isSafeInteger=ea,A.isSet=ah,A.isString=ua,A.isSymbol=ia,A.isTypedArray=ch,A.isUndefined=oa,A.isWeakMap=fa,A.isWeakSet=aa,A.join=oo,A.kebabCase=zh,A.last=fo,A.lastIndexOf=ao,A.lowerCase=Eh,A.lowerFirst=Sh,A.lt=lh,A.lte=sh,A.max=Tc,A.maxBy=$c,A.mean=Dc,A.meanBy=Mc,A.min=Fc,A.minBy=Nc,A.stubArray=zc,A.stubFalse=Ec,A.stubObject=Sc,A.stubString=Wc,A.stubTrue=Lc,A.multiply=Hh,A.nth=co,A.noConflict=Ac,A.noop=kc,A.now=Zs,A.pad=Qa,A.padEnd=Xa,A.padStart=nc,A.parseInt=tc,A.random=Ka,A.reduce=ef,A.reduceRight=uf,A.repeat=rc,A.replace=ec,A.result=Ba,A.round=Qh,A.runInContext=X,A.sample=ff,A.size=lf,A.snakeCase=Wh,A.some=sf,A.sortedIndex=go,A.sortedIndexBy=yo,A.sortedIndexOf=bo,A.sortedLastIndex=wo,A.sortedLastIndexBy=mo,A.sortedLastIndexOf=xo,A.startCase=Lh,A.startsWith=ic,A.subtract=Xh,A.sum=Pc,A.sumBy=qc,A.template=oc,A.times=Cc,A.toFinite=la,A.toInteger=sa,A.toLength=ha,A.toLower=fc,A.toNumber=pa,A.toSafeInteger=_a,A.toString=ga,A.toUpper=ac,A.trim=cc,A.trimEnd=lc,A.trimStart=sc,A.truncate=hc,A.unescape=pc,A.uniqueId=Uc,A.upperCase=Ch,A.upperFirst=Bh,A.each=Qo,A.eachRight=Xo,A.first=eo,jc(A,function(){var n={};return ae(A,function(t,r){ol.call(A.prototype,r)||(n[r]=t)}),n}(),{chain:!1}),A.VERSION=tn,u(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){A[n].placeholder=A}),u(["drop","take"],function(n,t){H.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new H(this);r=r===nn?1:Wl(sa(r),0);var u=this.clone();return e?u.__takeCount__=Ll(r,u.__takeCount__):u.__views__.push({size:Ll(r,Sn),type:n+(u.__dir__<0?"Right":"")}),u},H.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),u(["filter","map","takeWhile"],function(n,t){var r=t+1,e=r==An||r==In;H.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:ai(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),u(["head","last"],function(n,t){var r="take"+(t?"Right":"");H.prototype[n]=function(){return this[r](1).value()[0]}}),u(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");H.prototype[n]=function(){return this.__filtered__?new H(this):this[r](1)}}),H.prototype.compact=function(){return this.filter(bc)},H.prototype.find=function(n){return this.filter(n).head()},H.prototype.findLast=function(n){return this.reverse().find(n)},H.prototype.invokeMap=Ye(function(n,t){return"function"==typeof n?new H(this):this.map(function(r){return we(r,n,t)})}),H.prototype.reject=function(n){return this.filter(wf(ai(n)))},H.prototype.slice=function(n,t){n=sa(n);var r=this;return r.__filtered__&&(n>0||t<0)?new H(r):(n<0?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==nn&&(t=sa(t),r=t<0?r.dropRight(-t):r.take(t-n)),r)},H.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},H.prototype.toArray=function(){return this.take(Sn)},ae(H.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=A[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);u&&(A.prototype[t]=function(){var t=this.__wrapped__,o=e?[1]:arguments,f=t instanceof H,a=o[0],c=f||rh(t),l=function(n){var t=u.apply(A,s([n],o));return e&&h?t[0]:t};c&&r&&"function"==typeof a&&1!=a.length&&(f=c=!1);var h=this.__chain__,p=!!this.__actions__.length,v=i&&!h,_=f&&!p;if(!i&&c){t=_?t:new H(this);var g=n.apply(t,o);return g.__actions__.push({func:Do,args:[l],thisArg:nn}),new Y(g,h)}return v&&_?n.apply(this,o):(g=this.thru(l),v?e?g.value()[0]:g.value():g)})}),u(["pop","push","shift","sort","splice","unshift"],function(n){var t=nl[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);A.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(rh(u)?u:[],n)}return this[r](function(r){return t.apply(rh(r)?r:[],n)})}}),ae(H.prototype,function(n,t){var r=A[t];if(r){var e=r.name+"",u=Kl[e]||(Kl[e]=[]);u.push({name:t,func:r})}}),Kl[Nu(nn,cn).name]=[{name:"wrapper",func:nn}],H.prototype.clone=St,H.prototype.reverse=Pt,H.prototype.value=qt,A.prototype.at=Us,A.prototype.chain=Mo,A.prototype.commit=Fo,A.prototype.next=No,A.prototype.plant=qo,A.prototype.reverse=Zo,A.prototype.toJSON=A.prototype.valueOf=A.prototype.value=Ko,A.prototype.first=A.prototype.head,yl&&(A.prototype[yl]=Po),A}var nn,tn="4.16.0",rn=200,en="Expected a function",un="__lodash_hash_undefined__",on=500,fn="__lodash_placeholder__",an=1,cn=2,ln=4,sn=8,hn=16,pn=32,vn=64,_n=128,gn=256,yn=512,dn=1,bn=2,wn=30,mn="...",xn=500,jn=16,An=1,kn=2,In=3,On=1/0,Rn=9007199254740991,zn=1.7976931348623157e308,En=NaN,Sn=4294967295,Wn=Sn-1,Ln=Sn>>>1,Cn=[["ary",_n],["bind",an],["bindKey",cn],["curry",sn],["curryRight",hn],["flip",yn],["partial",pn],["partialRight",vn],["rearg",gn]],Bn="[object Arguments]",Un="[object Array]",Tn="[object Boolean]",$n="[object Date]",Dn="[object Error]",Mn="[object Function]",Fn="[object GeneratorFunction]",Nn="[object Map]",Pn="[object Number]",qn="[object Object]",Zn="[object Promise]",Kn="[object RegExp]",Vn="[object Set]",Gn="[object String]",Jn="[object Symbol]",Yn="[object WeakMap]",Hn="[object WeakSet]",Qn="[object ArrayBuffer]",Xn="[object DataView]",nt="[object Float32Array]",tt="[object Float64Array]",rt="[object Int8Array]",et="[object Int16Array]",ut="[object Int32Array]",it="[object Uint8Array]",ot="[object Uint8ClampedArray]",ft="[object Uint16Array]",at="[object Uint32Array]",ct=/\b__p \+= '';/g,lt=/\b(__p \+=) '' \+/g,st=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ht=/&(?:amp|lt|gt|quot|#39|#96);/g,pt=/[&<>"'`]/g,vt=RegExp(ht.source),_t=RegExp(pt.source),gt=/<%-([\s\S]+?)%>/g,yt=/<%([\s\S]+?)%>/g,dt=/<%=([\s\S]+?)%>/g,bt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,wt=/^\w*$/,mt=/^\./,xt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,jt=/[\\^$.*+?()[\]{}|]/g,At=RegExp(jt.source),kt=/^\s+|\s+$/g,It=/^\s+/,Ot=/\s+$/,Rt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,zt=/\{\n\/\* \[wrapped with (.+)\] \*/,Et=/,? & /,St=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Wt=/\\(\\)?/g,Lt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ct=/\w*$/,Bt=/^[-+]0x[0-9a-f]+$/i,Ut=/^0b[01]+$/i,Tt=/^\[object .+?Constructor\]$/,$t=/^0o[0-7]+$/i,Dt=/^(?:0|[1-9]\d*)$/,Mt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ft=/($^)/,Nt=/['\n\r\u2028\u2029\\]/g,Pt="\\ud800-\\udfff",qt="\\u0300-\\u036f\\ufe20-\\ufe23",Zt="\\u20d0-\\u20f0",Kt="\\u2700-\\u27bf",Vt="a-z\\xdf-\\xf6\\xf8-\\xff",Gt="\\xac\\xb1\\xd7\\xf7",Jt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Yt="\\u2000-\\u206f",Ht=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Qt="A-Z\\xc0-\\xd6\\xd8-\\xde",Xt="\\ufe0e\\ufe0f",nr=Gt+Jt+Yt+Ht,tr="['’]",rr="["+Pt+"]",er="["+nr+"]",ur="["+qt+Zt+"]",ir="\\d+",or="["+Kt+"]",fr="["+Vt+"]",ar="[^"+Pt+nr+ir+Kt+Vt+Qt+"]",cr="\\ud83c[\\udffb-\\udfff]",lr="(?:"+ur+"|"+cr+")",sr="[^"+Pt+"]",hr="(?:\\ud83c[\\udde6-\\uddff]){2}",pr="[\\ud800-\\udbff][\\udc00-\\udfff]",vr="["+Qt+"]",_r="\\u200d",gr="(?:"+fr+"|"+ar+")",yr="(?:"+vr+"|"+ar+")",dr="(?:"+tr+"(?:d|ll|m|re|s|t|ve))?",br="(?:"+tr+"(?:D|LL|M|RE|S|T|VE))?",wr=lr+"?",mr="["+Xt+"]?",xr="(?:"+_r+"(?:"+[sr,hr,pr].join("|")+")"+mr+wr+")*",jr=mr+wr+xr,Ar="(?:"+[or,hr,pr].join("|")+")"+jr,kr="(?:"+[sr+ur+"?",ur,hr,pr,rr].join("|")+")",Ir=RegExp(tr,"g"),Or=RegExp(ur,"g"),Rr=RegExp(cr+"(?="+cr+")|"+kr+jr,"g"),zr=RegExp([vr+"?"+fr+"+"+dr+"(?="+[er,vr,"$"].join("|")+")",yr+"+"+br+"(?="+[er,vr+gr,"$"].join("|")+")",vr+"?"+gr+"+"+dr,vr+"+"+br,ir,Ar].join("|"),"g"),Er=RegExp("["+_r+Pt+qt+Zt+Xt+"]"),Sr=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Wr=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Lr=-1,Cr={};
	Cr[nt]=Cr[tt]=Cr[rt]=Cr[et]=Cr[ut]=Cr[it]=Cr[ot]=Cr[ft]=Cr[at]=!0,Cr[Bn]=Cr[Un]=Cr[Qn]=Cr[Tn]=Cr[Xn]=Cr[$n]=Cr[Dn]=Cr[Mn]=Cr[Nn]=Cr[Pn]=Cr[qn]=Cr[Kn]=Cr[Vn]=Cr[Gn]=Cr[Yn]=!1;var Br={};Br[Bn]=Br[Un]=Br[Qn]=Br[Xn]=Br[Tn]=Br[$n]=Br[nt]=Br[tt]=Br[rt]=Br[et]=Br[ut]=Br[Nn]=Br[Pn]=Br[qn]=Br[Kn]=Br[Vn]=Br[Gn]=Br[Jn]=Br[it]=Br[ot]=Br[ft]=Br[at]=!0,Br[Dn]=Br[Mn]=Br[Yn]=!1;var Ur={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},Tr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},$r={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Dr={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Mr=parseFloat,Fr=parseInt,Nr="object"==typeof global&&global&&global.Object===Object&&global,Pr="object"==typeof self&&self&&self.Object===Object&&self,qr=Nr||Pr||Function("return this")(),Zr="object"==typeof exports&&exports&&!exports.nodeType&&exports,Kr=Zr&&"object"==typeof module&&module&&!module.nodeType&&module,Vr=Kr&&Kr.exports===Zr,Gr=Vr&&Nr.process,Jr=function(){try{return Gr&&Gr.binding("util")}catch(n){}}(),Yr=Jr&&Jr.isArrayBuffer,Hr=Jr&&Jr.isDate,Qr=Jr&&Jr.isMap,Xr=Jr&&Jr.isRegExp,ne=Jr&&Jr.isSet,te=Jr&&Jr.isTypedArray,re=j("length"),ee=A(Ur),ue=A(Tr),ie=A($r),oe=X(); true?(qr._=oe,!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return oe}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))):Kr?((Kr.exports=oe)._=oe,Zr._=oe):qr._=oe}).call(this);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ },

/***/ "./node_modules/webpack/buildin/module.js":
/***/ function(module, exports) {

	module.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e};

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/conf/blank-script.json":
/***/ function(module, exports) {

	module.exports = {
		"type": "Program",
		"body": [],
		"sourceType": "script",
		"range": [
			0,
			0
		],
		"loc": {
			"start": {
				"line": 0,
				"column": 0
			},
			"end": {
				"line": 0,
				"column": 0
			}
		},
		"comments": [],
		"tokens": []
	};

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/conf/eslint.json":
/***/ function(module, exports) {

	module.exports = {
		"parser": "espree",
		"ecmaFeatures": {},
		"rules": {
			"no-alert": "off",
			"no-array-constructor": "off",
			"no-bitwise": "off",
			"no-caller": "off",
			"no-case-declarations": "error",
			"no-catch-shadow": "off",
			"no-class-assign": "error",
			"no-cond-assign": "error",
			"no-confusing-arrow": "off",
			"no-console": "error",
			"no-const-assign": "error",
			"no-constant-condition": "error",
			"no-continue": "off",
			"no-control-regex": "error",
			"no-debugger": "error",
			"no-delete-var": "error",
			"no-div-regex": "off",
			"no-dupe-args": "error",
			"no-dupe-class-members": "error",
			"no-dupe-keys": "error",
			"no-duplicate-case": "error",
			"no-duplicate-imports": "off",
			"no-else-return": "off",
			"no-empty": "error",
			"no-empty-character-class": "error",
			"no-empty-function": "off",
			"no-empty-pattern": "error",
			"no-eq-null": "off",
			"no-eval": "off",
			"no-ex-assign": "error",
			"no-extend-native": "off",
			"no-extra-bind": "off",
			"no-extra-boolean-cast": "error",
			"no-extra-label": "off",
			"no-extra-parens": "off",
			"no-extra-semi": "error",
			"no-fallthrough": "error",
			"no-floating-decimal": "off",
			"no-func-assign": "error",
			"no-implicit-coercion": "off",
			"no-implicit-globals": "off",
			"no-implied-eval": "off",
			"no-inline-comments": "off",
			"no-inner-declarations": "error",
			"no-invalid-regexp": "error",
			"no-invalid-this": "off",
			"no-irregular-whitespace": "error",
			"no-iterator": "off",
			"no-label-var": "off",
			"no-labels": "off",
			"no-lone-blocks": "off",
			"no-lonely-if": "off",
			"no-loop-func": "off",
			"no-magic-numbers": "off",
			"no-mixed-operators": "off",
			"no-mixed-requires": "off",
			"no-mixed-spaces-and-tabs": "error",
			"no-multi-spaces": "off",
			"no-multi-str": "off",
			"no-multiple-empty-lines": "off",
			"no-native-reassign": "off",
			"no-negated-condition": "off",
			"no-negated-in-lhs": "error",
			"no-nested-ternary": "off",
			"no-new": "off",
			"no-new-func": "off",
			"no-new-object": "off",
			"no-new-require": "off",
			"no-new-symbol": "error",
			"no-new-wrappers": "off",
			"no-obj-calls": "error",
			"no-octal": "error",
			"no-octal-escape": "off",
			"no-param-reassign": "off",
			"no-path-concat": "off",
			"no-plusplus": "off",
			"no-process-env": "off",
			"no-process-exit": "off",
			"no-proto": "off",
			"no-prototype-builtins": "off",
			"no-redeclare": "error",
			"no-regex-spaces": "error",
			"no-restricted-globals": "off",
			"no-restricted-imports": "off",
			"no-restricted-modules": "off",
			"no-restricted-syntax": "off",
			"no-return-assign": "off",
			"no-script-url": "off",
			"no-self-assign": "error",
			"no-self-compare": "off",
			"no-sequences": "off",
			"no-shadow": "off",
			"no-shadow-restricted-names": "off",
			"no-whitespace-before-property": "off",
			"no-spaced-func": "off",
			"no-sparse-arrays": "error",
			"no-sync": "off",
			"no-ternary": "off",
			"no-trailing-spaces": "off",
			"no-this-before-super": "error",
			"no-throw-literal": "off",
			"no-undef": "error",
			"no-undef-init": "off",
			"no-undefined": "off",
			"no-unexpected-multiline": "error",
			"no-underscore-dangle": "off",
			"no-unmodified-loop-condition": "off",
			"no-unneeded-ternary": "off",
			"no-unreachable": "error",
			"no-unsafe-finally": "off",
			"no-unused-expressions": "off",
			"no-unused-labels": "error",
			"no-unused-vars": "error",
			"no-use-before-define": "off",
			"no-useless-call": "off",
			"no-useless-computed-key": "off",
			"no-useless-concat": "off",
			"no-useless-constructor": "off",
			"no-useless-escape": "off",
			"no-useless-rename": "off",
			"no-void": "off",
			"no-var": "off",
			"no-warning-comments": "off",
			"no-with": "off",
			"array-bracket-spacing": "off",
			"array-callback-return": "off",
			"arrow-body-style": "off",
			"arrow-parens": "off",
			"arrow-spacing": "off",
			"accessor-pairs": "off",
			"block-scoped-var": "off",
			"block-spacing": "off",
			"brace-style": "off",
			"callback-return": "off",
			"camelcase": "off",
			"comma-dangle": "error",
			"comma-spacing": "off",
			"comma-style": "off",
			"complexity": [
				"off",
				11
			],
			"computed-property-spacing": "off",
			"consistent-return": "off",
			"consistent-this": "off",
			"constructor-super": "error",
			"curly": "off",
			"default-case": "off",
			"dot-location": "off",
			"dot-notation": "off",
			"eol-last": "off",
			"eqeqeq": "off",
			"func-names": "off",
			"func-style": "off",
			"generator-star-spacing": "off",
			"global-require": "off",
			"guard-for-in": "off",
			"handle-callback-err": "off",
			"id-blacklist": "off",
			"id-length": "off",
			"id-match": "off",
			"indent": "off",
			"init-declarations": "off",
			"jsx-quotes": "off",
			"key-spacing": "off",
			"keyword-spacing": "off",
			"linebreak-style": "off",
			"lines-around-comment": "off",
			"max-depth": "off",
			"max-len": "off",
			"max-lines": "off",
			"max-nested-callbacks": "off",
			"max-params": "off",
			"max-statements": "off",
			"max-statements-per-line": "off",
			"new-cap": "off",
			"new-parens": "off",
			"newline-after-var": "off",
			"newline-before-return": "off",
			"newline-per-chained-call": "off",
			"object-curly-newline": "off",
			"object-curly-spacing": [
				"off",
				"never"
			],
			"object-property-newline": "off",
			"object-shorthand": "off",
			"one-var": "off",
			"one-var-declaration-per-line": "off",
			"operator-assignment": "off",
			"operator-linebreak": "off",
			"padded-blocks": "off",
			"prefer-arrow-callback": "off",
			"prefer-const": "off",
			"prefer-reflect": "off",
			"prefer-rest-params": "off",
			"prefer-spread": "off",
			"prefer-template": "off",
			"quote-props": "off",
			"quotes": "off",
			"radix": "off",
			"require-jsdoc": "off",
			"require-yield": "off",
			"rest-spread-spacing": "off",
			"semi": "off",
			"semi-spacing": "off",
			"sort-imports": "off",
			"sort-vars": "off",
			"space-before-blocks": "off",
			"space-before-function-paren": "off",
			"space-in-parens": "off",
			"space-infix-ops": "off",
			"space-unary-ops": "off",
			"spaced-comment": "off",
			"strict": "off",
			"template-curly-spacing": "off",
			"unicode-bom": "off",
			"use-isnan": "error",
			"valid-jsdoc": "off",
			"valid-typeof": "error",
			"vars-on-top": "off",
			"wrap-iife": "off",
			"wrap-regex": "off",
			"yield-star-spacing": "off",
			"yoda": "off"
		}
	};

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/conf/replacements.json":
/***/ function(module, exports) {

	module.exports = {
		"rules": {
			"generator-star": [
				"generator-star-spacing"
			],
			"global-strict": [
				"strict"
			],
			"no-arrow-condition": [
				"no-confusing-arrow",
				"no-constant-condition"
			],
			"no-comma-dangle": [
				"comma-dangle"
			],
			"no-empty-class": [
				"no-empty-character-class"
			],
			"no-empty-label": [
				"no-labels"
			],
			"no-extra-strict": [
				"strict"
			],
			"no-reserved-keys": [
				"quote-props"
			],
			"no-space-before-semi": [
				"semi-spacing"
			],
			"no-wrap-func": [
				"no-extra-parens"
			],
			"space-after-function-name": [
				"space-before-function-paren"
			],
			"space-after-keywords": [
				"keyword-spacing"
			],
			"space-before-function-parentheses": [
				"space-before-function-paren"
			],
			"space-before-keywords": [
				"keyword-spacing"
			],
			"space-in-brackets": [
				"object-curly-spacing",
				"array-bracket-spacing",
				"computed-property-spacing"
			],
			"space-return-throw-case": [
				"keyword-spacing"
			],
			"space-unary-word-ops": [
				"space-unary-ops"
			],
			"spaced-line-comment": [
				"spaced-comment"
			]
		}
	};

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/lib/code-path-analysis/code-path-analyzer.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function isCaseNode(e){return Boolean(e.test)}function isForkingByTrueOrFalse(e){var t=e.parent;switch(t.type){case"ConditionalExpression":case"IfStatement":case"WhileStatement":case"DoWhileStatement":case"ForStatement":return t.test===e;case"LogicalExpression":return!0;default:return!1}}function getBooleanValueIfSimpleConstant(e){if("Literal"===e.type)return Boolean(e.value)}function isIdentifierReference(e){var t=e.parent;switch(t.type){case"LabeledStatement":case"BreakStatement":case"ContinueStatement":case"ArrayPattern":case"RestElement":case"ImportSpecifier":case"ImportDefaultSpecifier":case"ImportNamespaceSpecifier":case"CatchClause":return!1;case"FunctionDeclaration":case"FunctionExpression":case"ArrowFunctionExpression":case"ClassDeclaration":case"ClassExpression":case"VariableDeclarator":return t.id!==e;case"Property":case"MethodDefinition":return t.key!==e||t.computed||t.shorthand;case"AssignmentPattern":return t.key!==e;default:return!0}}function forwardCurrentToHead(e,t){var a,r,o,n=e.codePath,s=CodePath.getState(n),i=s.currentSegments,c=s.headSegments,d=Math.max(i.length,c.length);for(a=0;a<d;++a)r=i[a],o=c[a],r!==o&&r&&(debug.dump("onCodePathSegmentEnd "+r.id),r.reachable&&e.emitter.emit("onCodePathSegmentEnd",r,t));for(s.currentSegments=c,a=0;a<d;++a)r=i[a],o=c[a],r!==o&&o&&(debug.dump("onCodePathSegmentStart "+o.id),CodePathSegment.markUsed(o),o.reachable&&e.emitter.emit("onCodePathSegmentStart",o,t))}function leaveFromCurrentSegment(e,t){for(var a=CodePath.getState(e.codePath),r=a.currentSegments,o=0;o<r.length;++o){var n=r[o];debug.dump("onCodePathSegmentEnd "+n.id),n.reachable&&e.emitter.emit("onCodePathSegmentEnd",n,t)}a.currentSegments=[]}function preprocess(e,t){var a=e.codePath,r=CodePath.getState(a),o=t.parent;switch(o.type){case"LogicalExpression":o.right===t&&r.makeLogicalRight();break;case"ConditionalExpression":case"IfStatement":o.consequent===t?r.makeIfConsequent():o.alternate===t&&r.makeIfAlternate();break;case"SwitchCase":o.consequent[0]===t&&r.makeSwitchCaseBody(!1,!o.test);break;case"TryStatement":o.handler===t?r.makeCatchBlock():o.finalizer===t&&r.makeFinallyBlock();break;case"WhileStatement":o.test===t?r.makeWhileTest(getBooleanValueIfSimpleConstant(t)):(assert(o.body===t),r.makeWhileBody());break;case"DoWhileStatement":o.body===t?r.makeDoWhileBody():(assert(o.test===t),r.makeDoWhileTest(getBooleanValueIfSimpleConstant(t)));break;case"ForStatement":o.test===t?r.makeForTest(getBooleanValueIfSimpleConstant(t)):o.update===t?r.makeForUpdate():o.body===t&&r.makeForBody();break;case"ForInStatement":case"ForOfStatement":o.left===t?r.makeForInOfLeft():o.right===t?r.makeForInOfRight():(assert(o.body===t),r.makeForInOfBody());break;case"AssignmentPattern":o.right===t&&(r.pushForkContext(),r.forkBypassPath(),r.forkPath())}}function processCodePathToEnter(e,t){var a=e.codePath,r=a&&CodePath.getState(a),o=t.parent;switch(t.type){case"Program":case"FunctionDeclaration":case"FunctionExpression":case"ArrowFunctionExpression":a&&(forwardCurrentToHead(e,t),debug.dumpState(t,r,!1)),a=e.codePath=new CodePath(e.idGenerator.next(),a,e.onLooped),r=CodePath.getState(a),debug.dump("onCodePathStart "+a.id),e.emitter.emit("onCodePathStart",a,t);break;case"LogicalExpression":r.pushChoiceContext(t.operator,isForkingByTrueOrFalse(t));break;case"ConditionalExpression":case"IfStatement":r.pushChoiceContext("test",!1);break;case"SwitchStatement":r.pushSwitchContext(t.cases.some(isCaseNode),astUtils.getLabel(t));break;case"TryStatement":r.pushTryContext(Boolean(t.finalizer));break;case"SwitchCase":o.discriminant!==t&&o.cases[0]!==t&&r.forkPath();break;case"WhileStatement":case"DoWhileStatement":case"ForStatement":case"ForInStatement":case"ForOfStatement":r.pushLoopContext(t.type,astUtils.getLabel(t));break;case"LabeledStatement":astUtils.isBreakableStatement(t.body)||r.pushBreakContext(!1,t.label.name)}forwardCurrentToHead(e,t),debug.dumpState(t,r,!1)}function processCodePathToExit(e,t){var a=e.codePath,r=CodePath.getState(a),o=!1;switch(t.type){case"IfStatement":case"ConditionalExpression":case"LogicalExpression":r.popChoiceContext();break;case"SwitchStatement":r.popSwitchContext();break;case"SwitchCase":0===t.consequent.length&&r.makeSwitchCaseBody(!0,!t.test),r.forkContext.reachable&&(o=!0);break;case"TryStatement":r.popTryContext();break;case"BreakStatement":forwardCurrentToHead(e,t),r.makeBreak(t.label&&t.label.name),o=!0;break;case"ContinueStatement":forwardCurrentToHead(e,t),r.makeContinue(t.label&&t.label.name),o=!0;break;case"ReturnStatement":forwardCurrentToHead(e,t),r.makeReturn(),o=!0;break;case"ThrowStatement":forwardCurrentToHead(e,t),r.makeThrow(),o=!0;break;case"Identifier":isIdentifierReference(t)&&(r.makeFirstThrowablePathInTryBlock(),o=!0);break;case"CallExpression":case"MemberExpression":case"NewExpression":r.makeFirstThrowablePathInTryBlock();break;case"WhileStatement":case"DoWhileStatement":case"ForStatement":case"ForInStatement":case"ForOfStatement":r.popLoopContext();break;case"AssignmentPattern":r.popForkContext();break;case"LabeledStatement":astUtils.isBreakableStatement(t.body)||r.popBreakContext()}o||t.parent&&t.type===t.parent.type||forwardCurrentToHead(e,t),debug.dumpState(t,r,!0)}function postprocess(e,t){switch(t.type){case"Program":case"FunctionDeclaration":case"FunctionExpression":case"ArrowFunctionExpression":var a=e.codePath;CodePath.getState(a).makeFinal(),leaveFromCurrentSegment(e,t),debug.dump("onCodePathEnd "+a.id),e.emitter.emit("onCodePathEnd",a,t),debug.dumpDot(a),a=e.codePath=e.codePath.upper,a&&debug.dumpState(t,CodePath.getState(a),!0)}}function CodePathAnalyzer(e){this.original=e,this.emitter=e.emitter,this.codePath=null,this.idGenerator=new IdGenerator("s"),this.currentNode=null,this.onLooped=this.onLooped.bind(this)}var assert=__webpack_require__("./node_modules/assert/assert.js"),CodePath=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/code-path-analysis/code-path.js"),CodePathSegment=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/code-path-analysis/code-path-segment.js"),IdGenerator=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/code-path-analysis/id-generator.js"),debug=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/code-path-analysis/debug-helpers.js"),astUtils=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/ast-utils.js");CodePathAnalyzer.prototype={constructor:CodePathAnalyzer,enterNode:function(e){this.currentNode=e,e.parent&&preprocess(this,e),processCodePathToEnter(this,e),this.original.enterNode(e),this.currentNode=null},leaveNode:function(e){this.currentNode=e,processCodePathToExit(this,e),this.original.leaveNode(e),postprocess(this,e),this.currentNode=null},onLooped:function(e,t){e.reachable&&t.reachable&&(debug.dump("onCodePathSegmentLoop "+e.id+" -> "+t.id),this.emitter.emit("onCodePathSegmentLoop",e,t,this.currentNode))}},module.exports=CodePathAnalyzer;

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/lib/code-path-analysis/code-path.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function CodePath(e,t,n){this.id=e,this.upper=t,this.childCodePaths=[],Object.defineProperty(this,"internal",{value:new CodePathState(new IdGenerator(e+"_"),n)}),t&&t.childCodePaths.push(this)}var CodePathState=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/code-path-analysis/code-path-state.js"),IdGenerator=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/code-path-analysis/id-generator.js");CodePath.prototype={constructor:CodePath,get initialSegment(){return this.internal.initialSegment},get finalSegments(){return this.internal.finalSegments},get returnedSegments(){return this.internal.returnedForkContext},get thrownSegments(){return this.internal.thrownForkContext},get currentSegments(){return this.internal.currentSegments},traverseSegments:function(e,t){function n(e){return s[e.id]||l.isLoopedPrevSegment(e)}"function"==typeof e&&(t=e,e=null),e=e||{};for(var i=e.first||this.internal.initialSegment,r=e.last,o=null,u=0,a=0,l=null,s=Object.create(null),c=[[i,0]],h=null,g=!1,d={skip:function(){c.length<=1?g=!0:h=c[c.length-2][0]},"break":function(){g=!0}};c.length>0;){if(o=c[c.length-1],l=o[0],u=o[1],0===u){if(s[l.id]){c.pop();continue}if(l!==i&&l.prevSegments.length>0&&!l.prevSegments.every(n)){c.pop();continue}if(h&&l.prevSegments.indexOf(h)!==-1&&(h=null),s[l.id]=!0,!h&&(t.call(this,l,d),l===r&&d.skip(),g))break}a=l.nextSegments.length-1,u<a?(o[1]+=1,c.push([l.nextSegments[u],0])):u===a?(o[0]=l.nextSegments[u],o[1]=0):c.pop()}}},CodePath.getState=function(e){return e.internal},module.exports=CodePath;

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/lib/code-path-analysis/code-path-state.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function addToReturnedOrThrown(e,t,o,n){for(var r=0;r<n.length;++r){var a=n[r];e.push(a),t.indexOf(a)===-1&&o.push(a)}}function getContinueContext(e,t){if(!t)return e.loopContext;for(var o=e.loopContext;o;){if(o.label===t)return o;o=o.upper}return null}function getBreakContext(e,t){for(var o=e.breakContext;o;){if(t?o.label===t:o.breakable)return o;o=o.upper}return null}function getReturnContext(e){for(var t=e.tryContext;t;){if(t.hasFinalizer&&"finally"!==t.position)return t;t=t.upper}return e}function getThrowContext(e){for(var t=e.tryContext;t;){if("try"===t.position||t.hasFinalizer&&"catch"===t.position)return t;t=t.upper}return e}function remove(e,t){e.splice(e.indexOf(t),1)}function removeConnection(e,t){for(var o=0;o<e.length;++o){var n=e[o],r=t[o];remove(n.nextSegments,r),remove(n.allNextSegments,r),remove(r.prevSegments,n),remove(r.allPrevSegments,n)}}function makeLooped(e,t,o){for(var n=Math.min(t.length,o.length),r=0;r<n;++r){var a=t[r],s=o[r];s.reachable&&a.nextSegments.push(s),a.reachable&&s.prevSegments.push(a),a.allNextSegments.push(s),s.allPrevSegments.push(a),s.allPrevSegments.length>=2&&CodePathSegment.markPrevSegmentAsLooped(s,a),e.notifyLooped(a,s)}}function finalizeTestSegmentsOfFor(e,t,o){t.processed||(t.trueForkContext.add(o),t.falseForkContext.add(o)),e.test!==!0&&e.brokenForkContext.addAll(t.falseForkContext),e.endOfTestSegments=t.trueForkContext.makeNext(0,-1)}function CodePathState(e,t){this.idGenerator=e,this.notifyLooped=t,this.forkContext=ForkContext.newRoot(e),this.choiceContext=null,this.switchContext=null,this.tryContext=null,this.loopContext=null,this.breakContext=null,this.currentSegments=[],this.initialSegment=this.forkContext.head[0];var o=this.finalSegments=[],n=this.returnedForkContext=[],r=this.thrownForkContext=[];n.add=addToReturnedOrThrown.bind(null,n,r,o),r.add=addToReturnedOrThrown.bind(null,r,n,o)}var CodePathSegment=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/code-path-analysis/code-path-segment.js"),ForkContext=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/code-path-analysis/fork-context.js");CodePathState.prototype={constructor:CodePathState,get headSegments(){return this.forkContext.head},get parentForkContext(){var e=this.forkContext;return e&&e.upper},pushForkContext:function(e){return this.forkContext=ForkContext.newEmpty(this.forkContext,e),this.forkContext},popForkContext:function(){var e=this.forkContext;return this.forkContext=e.upper,this.forkContext.replaceHead(e.makeNext(0,-1)),e},forkPath:function(){this.forkContext.add(this.parentForkContext.makeNext(-1,-1))},forkBypassPath:function(){this.forkContext.add(this.parentForkContext.head)},pushChoiceContext:function(e,t){this.choiceContext={upper:this.choiceContext,kind:e,isForkingAsResult:t,trueForkContext:ForkContext.newEmpty(this.forkContext),falseForkContext:ForkContext.newEmpty(this.forkContext),processed:!1}},popChoiceContext:function(){var e=this.choiceContext;this.choiceContext=e.upper;var t=this.forkContext,o=t.head;switch(e.kind){case"&&":case"||":if(e.processed||(e.trueForkContext.add(o),e.falseForkContext.add(o)),e.isForkingAsResult){var n=this.choiceContext;return n.trueForkContext.addAll(e.trueForkContext),n.falseForkContext.addAll(e.falseForkContext),n.processed=!0,e}break;case"test":e.processed?(e.falseForkContext.clear(),e.falseForkContext.add(o)):(e.trueForkContext.clear(),e.trueForkContext.add(o));break;case"loop":return e;default:throw new Error("unreachable")}var r=e.trueForkContext;return r.addAll(e.falseForkContext),t.replaceHead(r.makeNext(0,-1)),e},makeLogicalRight:function(){var e=this.choiceContext,t=this.forkContext;if(e.processed){var o="&&"===e.kind?e.trueForkContext:e.falseForkContext;t.replaceHead(o.makeNext(0,-1)),o.clear(),e.processed=!1}else"&&"===e.kind?e.falseForkContext.add(t.head):e.trueForkContext.add(t.head),t.replaceHead(t.makeNext(-1,-1))},makeIfConsequent:function(){var e=this.choiceContext,t=this.forkContext;e.processed||(e.trueForkContext.add(t.head),e.falseForkContext.add(t.head)),e.processed=!1,t.replaceHead(e.trueForkContext.makeNext(0,-1))},makeIfAlternate:function(){var e=this.choiceContext,t=this.forkContext;e.trueForkContext.clear(),e.trueForkContext.add(t.head),e.processed=!0,t.replaceHead(e.falseForkContext.makeNext(0,-1))},pushSwitchContext:function(e,t){this.switchContext={upper:this.switchContext,hasCase:e,defaultSegments:null,defaultBodySegments:null,foundDefault:!1,lastIsDefault:!1,countForks:0},this.pushBreakContext(!0,t)},popSwitchContext:function(){var e=this.switchContext;this.switchContext=e.upper;var t=this.forkContext,o=this.popBreakContext().brokenForkContext;if(0===e.countForks)return void(o.empty||(o.add(t.makeNext(-1,-1)),t.replaceHead(o.makeNext(0,-1))));var n=t.head;this.forkBypassPath();var r=t.head;o.add(n),e.lastIsDefault||(e.defaultBodySegments?(removeConnection(e.defaultSegments,e.defaultBodySegments),makeLooped(this,r,e.defaultBodySegments)):o.add(r));for(var a=0;a<e.countForks;++a)this.forkContext=this.forkContext.upper;this.forkContext.replaceHead(o.makeNext(0,-1))},makeSwitchCaseBody:function(e,t){var o=this.switchContext;if(o.hasCase){var n=this.forkContext,r=this.pushForkContext();r.add(n.makeNext(0,-1)),t?(o.defaultSegments=n.head,e?o.foundDefault=!0:o.defaultBodySegments=r.head):!e&&o.foundDefault&&(o.foundDefault=!1,o.defaultBodySegments=r.head),o.lastIsDefault=t,o.countForks+=1}},pushTryContext:function(e){this.tryContext={upper:this.tryContext,position:"try",hasFinalizer:e,returnedForkContext:e?ForkContext.newEmpty(this.forkContext):null,thrownForkContext:ForkContext.newEmpty(this.forkContext),lastOfTryIsReachable:!1,lastOfCatchIsReachable:!1}},popTryContext:function(){var e=this.tryContext;if(this.tryContext=e.upper,"catch"===e.position)return void this.popForkContext();var t=e.returnedForkContext,o=e.thrownForkContext;if(!t.empty||!o.empty){var n=this.forkContext.head;this.forkContext=this.forkContext.upper;var r=n.slice(0,n.length/2|0),a=n.slice(n.length/2|0);t.empty||getReturnContext(this).returnedForkContext.add(a),o.empty||getThrowContext(this).thrownForkContext.add(a),this.forkContext.replaceHead(r),e.lastOfTryIsReachable||e.lastOfCatchIsReachable||this.forkContext.makeUnreachable()}},makeCatchBlock:function(){var e=this.tryContext,t=this.forkContext,o=e.thrownForkContext;e.position="catch",e.thrownForkContext=ForkContext.newEmpty(t),e.lastOfTryIsReachable=t.reachable,o.add(t.head);var n=o.makeNext(0,-1);this.pushForkContext(),this.forkBypassPath(),this.forkContext.add(n)},makeFinallyBlock:function(){var e=this.tryContext,t=this.forkContext,o=e.returnedForkContext,n=e.thrownForkContext,r=t.head;if("catch"===e.position?(this.popForkContext(),t=this.forkContext,e.lastOfCatchIsReachable=t.reachable):e.lastOfTryIsReachable=t.reachable,e.position="finally",!o.empty||!n.empty){for(var a,s=t.makeNext(-1,-1),i=0;i<t.count;++i){var h=[r[i]];for(a=0;a<o.segmentsList.length;++a)h.push(o.segmentsList[a][i]);for(a=0;a<n.segmentsList.length;++a)h.push(n.segmentsList[a][i]);s.push(CodePathSegment.newNext(this.idGenerator.next(),h))}this.pushForkContext(!0),this.forkContext.add(s)}},makeFirstThrowablePathInTryBlock:function(){var e=this.forkContext;if(e.reachable){var t=getThrowContext(this);t!==this&&"try"===t.position&&t.thrownForkContext.empty&&(t.thrownForkContext.add(e.head),e.replaceHead(e.makeNext(-1,-1)))}},pushLoopContext:function(e,t){var o=this.forkContext,n=this.pushBreakContext(!0,t);switch(e){case"WhileStatement":this.pushChoiceContext("loop",!1),this.loopContext={upper:this.loopContext,type:e,label:t,test:void 0,continueDestSegments:null,brokenForkContext:n.brokenForkContext};break;case"DoWhileStatement":this.pushChoiceContext("loop",!1),this.loopContext={upper:this.loopContext,type:e,label:t,test:void 0,entrySegments:null,continueForkContext:ForkContext.newEmpty(o),brokenForkContext:n.brokenForkContext};break;case"ForStatement":this.pushChoiceContext("loop",!1),this.loopContext={upper:this.loopContext,type:e,label:t,test:void 0,endOfInitSegments:null,testSegments:null,endOfTestSegments:null,updateSegments:null,endOfUpdateSegments:null,continueDestSegments:null,brokenForkContext:n.brokenForkContext};break;case"ForInStatement":case"ForOfStatement":this.loopContext={upper:this.loopContext,type:e,label:t,prevSegments:null,leftSegments:null,endOfLeftSegments:null,continueDestSegments:null,brokenForkContext:n.brokenForkContext};break;default:throw new Error('unknown type: "'+e+'"')}},popLoopContext:function(){var e=this.loopContext;this.loopContext=e.upper;var t,o=this.forkContext,n=this.popBreakContext().brokenForkContext;switch(e.type){case"WhileStatement":case"ForStatement":t=this.popChoiceContext(),makeLooped(this,o.head,e.continueDestSegments);break;case"DoWhileStatement":t=this.popChoiceContext(),t.processed||(t.trueForkContext.add(o.head),t.falseForkContext.add(o.head)),e.test!==!0&&n.addAll(t.falseForkContext);for(var r=t.trueForkContext.segmentsList,a=0;a<r.length;++a)makeLooped(this,r[a],e.entrySegments);break;case"ForInStatement":case"ForOfStatement":n.add(o.head),makeLooped(this,o.head,e.leftSegments);break;default:throw new Error("unreachable")}n.empty?o.replaceHead(o.makeUnreachable(-1,-1)):o.replaceHead(n.makeNext(0,-1))},makeWhileTest:function(e){var t=this.loopContext,o=this.forkContext,n=o.makeNext(0,-1);t.test=e,t.continueDestSegments=n,o.replaceHead(n)},makeWhileBody:function(){var e=this.loopContext,t=this.choiceContext,o=this.forkContext;t.processed||(t.trueForkContext.add(o.head),t.falseForkContext.add(o.head)),e.test!==!0&&e.brokenForkContext.addAll(t.falseForkContext),o.replaceHead(t.trueForkContext.makeNext(0,-1))},makeDoWhileBody:function(){var e=this.loopContext,t=this.forkContext,o=t.makeNext(-1,-1);e.entrySegments=o,t.replaceHead(o)},makeDoWhileTest:function(e){var t=this.loopContext,o=this.forkContext;if(t.test=e,!t.continueForkContext.empty){t.continueForkContext.add(o.head);var n=t.continueForkContext.makeNext(0,-1);o.replaceHead(n)}},makeForTest:function(e){var t=this.loopContext,o=this.forkContext,n=o.head,r=o.makeNext(-1,-1);t.test=e,t.endOfInitSegments=n,t.continueDestSegments=t.testSegments=r,o.replaceHead(r)},makeForUpdate:function(){var e=this.loopContext,t=this.choiceContext,o=this.forkContext;e.testSegments?finalizeTestSegmentsOfFor(e,t,o.head):e.endOfInitSegments=o.head;var n=o.makeDisconnected(-1,-1);e.continueDestSegments=e.updateSegments=n,o.replaceHead(n)},makeForBody:function(){var e=this.loopContext,t=this.choiceContext,o=this.forkContext;e.updateSegments?(e.endOfUpdateSegments=o.head,e.testSegments&&makeLooped(this,e.endOfUpdateSegments,e.testSegments)):e.testSegments?finalizeTestSegmentsOfFor(e,t,o.head):e.endOfInitSegments=o.head;var n=e.endOfTestSegments;if(!n){var r=ForkContext.newEmpty(o);r.add(e.endOfInitSegments),e.endOfUpdateSegments&&r.add(e.endOfUpdateSegments),n=r.makeNext(0,-1)}e.continueDestSegments=e.continueDestSegments||n,o.replaceHead(n)},makeForInOfLeft:function(){var e=this.loopContext,t=this.forkContext,o=t.makeDisconnected(-1,-1);e.prevSegments=t.head,e.leftSegments=e.continueDestSegments=o,t.replaceHead(o)},makeForInOfRight:function(){var e=this.loopContext,t=this.forkContext,o=ForkContext.newEmpty(t);o.add(e.prevSegments);var n=o.makeNext(-1,-1);e.endOfLeftSegments=t.head,t.replaceHead(n)},makeForInOfBody:function(){var e=this.loopContext,t=this.forkContext,o=ForkContext.newEmpty(t);o.add(e.endOfLeftSegments);var n=o.makeNext(-1,-1);makeLooped(this,t.head,e.leftSegments),e.brokenForkContext.add(t.head),t.replaceHead(n)},pushBreakContext:function(e,t){return this.breakContext={upper:this.breakContext,breakable:e,label:t,brokenForkContext:ForkContext.newEmpty(this.forkContext)},this.breakContext},popBreakContext:function(){var e=this.breakContext,t=this.forkContext;if(this.breakContext=e.upper,!e.breakable){var o=e.brokenForkContext;o.empty||(o.add(t.head),t.replaceHead(o.makeNext(0,-1)))}return e},makeBreak:function(e){var t=this.forkContext;if(t.reachable){var o=getBreakContext(this,e);o&&o.brokenForkContext.add(t.head),t.replaceHead(t.makeUnreachable(-1,-1))}},makeContinue:function(e){var t=this.forkContext;if(t.reachable){var o=getContinueContext(this,e);o&&(o.continueDestSegments?(makeLooped(this,t.head,o.continueDestSegments),"ForInStatement"!==o.type&&"ForOfStatement"!==o.type||o.brokenForkContext.add(t.head)):o.continueForkContext.add(t.head)),t.replaceHead(t.makeUnreachable(-1,-1))}},makeReturn:function(){var e=this.forkContext;e.reachable&&(getReturnContext(this).returnedForkContext.add(e.head),e.replaceHead(e.makeUnreachable(-1,-1)))},makeThrow:function(){var e=this.forkContext;e.reachable&&(getThrowContext(this).thrownForkContext.add(e.head),e.replaceHead(e.makeUnreachable(-1,-1)))},makeFinal:function(){var e=this.currentSegments;e.length>0&&e[0].reachable&&this.returnedForkContext.add(e)}},module.exports=CodePathState;

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/lib/code-path-analysis/code-path-segment.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function flattenUnusedSegments(e){for(var t=Object.create(null),n=[],a=0;a<e.length;++a){var r=e[a];if(!t[r.id])if(r.internal.used)t[r.id]=!0,n.push(r);else for(var s=0;s<r.allPrevSegments.length;++s){var l=r.allPrevSegments[s];t[l.id]||(t[l.id]=!0,n.push(l))}}return n}function isReachable(e){return e.reachable}function CodePathSegment(e,t,n){this.id=e,this.nextSegments=[],this.prevSegments=t.filter(isReachable),this.allNextSegments=[],this.allPrevSegments=t,this.reachable=n,Object.defineProperty(this,"internal",{value:{used:!1,loopedPrevSegments:[]}}),debug.enabled&&(this.internal.nodes=[],this.internal.exitNodes=[])}var debug=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/code-path-analysis/debug-helpers.js");CodePathSegment.prototype={constructor:CodePathSegment,isLoopedPrevSegment:function(e){return this.internal.loopedPrevSegments.indexOf(e)!==-1}},CodePathSegment.newRoot=function(e){return new CodePathSegment(e,[],(!0))},CodePathSegment.newNext=function(e,t){return new CodePathSegment(e,flattenUnusedSegments(t),t.some(isReachable))},CodePathSegment.newUnreachable=function(e,t){var n=new CodePathSegment(e,flattenUnusedSegments(t),(!1));return CodePathSegment.markUsed(n),n},CodePathSegment.newDisconnected=function(e,t){return new CodePathSegment(e,[],t.some(isReachable))},CodePathSegment.markUsed=function(e){if(!e.internal.used){e.internal.used=!0;var t;if(e.reachable)for(t=0;t<e.allPrevSegments.length;++t){var n=e.allPrevSegments[t];n.allNextSegments.push(e),n.nextSegments.push(e)}else for(t=0;t<e.allPrevSegments.length;++t)e.allPrevSegments[t].allNextSegments.push(e)}},CodePathSegment.markPrevSegmentAsLooped=function(e,t){e.internal.loopedPrevSegments.push(t)},module.exports=CodePathSegment;

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/lib/code-path-analysis/debug-helpers.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function getId(e){return e.id+(e.reachable?"":"!")}var debug=__webpack_require__("./node_modules/debug/browser.js")("eslint:code-path");module.exports={enabled:debug.enabled,dump:debug,dumpState:debug.enabled?function(e,n,t){for(var i=0;i<n.currentSegments.length;++i){var l=n.currentSegments[i].internal;t?l.exitNodes.push(e):l.nodes.push(e)}debug(n.currentSegments.map(getId).join(",")+") "+e.type+(t?":exit":""))}:debug,dumpDot:debug.enabled?function(e){var n='\ndigraph {\nnode[shape=box,style="rounded,filled",fillcolor=white];\ninitial[label="",shape=circle,style=filled,fillcolor=black,width=0.25,height=0.25];\n';e.returnedSegments.length>0&&(n+='final[label="",shape=doublecircle,style=filled,fillcolor=black,width=0.25,height=0.25];\n'),e.thrownSegments.length>0&&(n+='thrown[label="✘",shape=circle,width=0.3,height=0.3,fixedsize];\n');var t=Object.create(null),i=this.makeDotArrows(e,t);for(var l in t){var r=t[l];n+=l+"[",n+=r.reachable?'label="':'style="rounded,dashed,filled",fillcolor="#FF9800",label="<<unreachable>>\\n',n+=r.internal.nodes.length>0?r.internal.nodes.map(function(e){switch(e.type){case"Identifier":return e.type+" ("+e.name+")";case"Literal":return e.type+" ("+e.value+")";default:return e.type}}).join("\\n"):r.internal.exitNodes.length>0?r.internal.exitNodes.map(function(e){switch(e.type){case"Identifier":return e.type+":exit ("+e.name+")";case"Literal":return e.type+":exit ("+e.value+")";default:return e.type+":exit"}}).join("\\n"):"????",n+='"];\n'}n+=i+"\n",n+="}",debug("DOT",n)}:debug,makeDotArrows:function(e,n){for(var t=[[e.initialSegment,0]],i=n||Object.create(null),l=e.initialSegment.id,r="initial->"+e.initialSegment.id;t.length>0;){var a=t.pop(),d=a[0],u=a[1];if(!i[d.id]||0!==u){i[d.id]=d;var o=d.allNextSegments[u];o&&(r+=l===d.id?"->"+o.id:";\n"+d.id+"->"+o.id,l=o.id,t.unshift([d,1+u]),t.push([o,0]))}}return e.returnedSegments.forEach(function(e){r+=l===e.id?"->final":";\n"+e.id+"->final",l=null}),e.thrownSegments.forEach(function(e){r+=l===e.id?"->thrown":";\n"+e.id+"->thrown",l=null}),r+";"}};

/***/ },

/***/ "./node_modules/debug/browser.js":
/***/ function(module, exports, __webpack_require__) {

	function useColors(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function formatArgs(){var o=arguments,e=this.useColors;if(o[0]=(e?"%c":"")+this.namespace+(e?" %c":" ")+o[0]+(e?"%c ":" ")+"+"+exports.humanize(this.diff),!e)return o;var r="color: "+this.color;o=[o[0],r,"color: inherit"].concat(Array.prototype.slice.call(o,1));var t=0,s=0;return o[0].replace(/%[a-z%]/g,function(o){"%%"!==o&&(t++,"%c"===o&&(s=t))}),o.splice(s,0,r),o}function log(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function save(o){try{null==o?exports.storage.removeItem("debug"):exports.storage.debug=o}catch(e){}}function load(){var o;try{o=exports.storage.debug}catch(e){}return o}function localstorage(){try{return window.localStorage}catch(o){}}exports=module.exports=__webpack_require__("./node_modules/debug/debug.js"),exports.log=log,exports.formatArgs=formatArgs,exports.save=save,exports.load=load,exports.useColors=useColors,exports.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:localstorage(),exports.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],exports.formatters.j=function(o){return JSON.stringify(o)},exports.enable(load());

/***/ },

/***/ "./node_modules/debug/debug.js":
/***/ function(module, exports, __webpack_require__) {

	function selectColor(){return exports.colors[prevColor++%exports.colors.length]}function debug(e){function r(){}function o(){var e=o,r=+new Date,s=r-(prevTime||r);e.diff=s,e.prev=prevTime,e.curr=r,prevTime=r,null==e.useColors&&(e.useColors=exports.useColors()),null==e.color&&e.useColors&&(e.color=selectColor());var t=Array.prototype.slice.call(arguments);t[0]=exports.coerce(t[0]),"string"!=typeof t[0]&&(t=["%o"].concat(t));var n=0;t[0]=t[0].replace(/%([a-z%])/g,function(r,o){if("%%"===r)return r;n++;var s=exports.formatters[o];if("function"==typeof s){var p=t[n];r=s.call(e,p),t.splice(n,1),n--}return r}),"function"==typeof exports.formatArgs&&(t=exports.formatArgs.apply(e,t));var p=o.log||exports.log||console.log.bind(console);p.apply(e,t)}r.enabled=!1,o.enabled=!0;var s=exports.enabled(e)?o:r;return s.namespace=e,s}function enable(e){exports.save(e);for(var r=(e||"").split(/[\s,]+/),o=r.length,s=0;s<o;s++)r[s]&&(e=r[s].replace(/\*/g,".*?"),"-"===e[0]?exports.skips.push(new RegExp("^"+e.substr(1)+"$")):exports.names.push(new RegExp("^"+e+"$")))}function disable(){exports.enable("")}function enabled(e){var r,o;for(r=0,o=exports.skips.length;r<o;r++)if(exports.skips[r].test(e))return!1;for(r=0,o=exports.names.length;r<o;r++)if(exports.names[r].test(e))return!0;return!1}function coerce(e){return e instanceof Error?e.stack||e.message:e}exports=module.exports=debug,exports.coerce=coerce,exports.disable=disable,exports.enable=enable,exports.enabled=enabled,exports.humanize=__webpack_require__("./node_modules/ms/index.js"),exports.names=[],exports.skips=[],exports.formatters={};var prevColor=0,prevTime;

/***/ },

/***/ "./node_modules/ms/index.js":
/***/ function(module, exports) {

	function parse(e){if(e=""+e,!(e.length>1e4)){var a=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(a){var r=parseFloat(a[1]),c=(a[2]||"ms").toLowerCase();switch(c){case"years":case"year":case"yrs":case"yr":case"y":return r*y;case"days":case"day":case"d":return r*d;case"hours":case"hour":case"hrs":case"hr":case"h":return r*h;case"minutes":case"minute":case"mins":case"min":case"m":return r*m;case"seconds":case"second":case"secs":case"sec":case"s":return r*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r}}}}function short(e){return e>=d?Math.round(e/d)+"d":e>=h?Math.round(e/h)+"h":e>=m?Math.round(e/m)+"m":e>=s?Math.round(e/s)+"s":e+"ms"}function long(e){return plural(e,d,"day")||plural(e,h,"hour")||plural(e,m,"minute")||plural(e,s,"second")||e+" ms"}function plural(s,e,a){if(!(s<e))return s<1.5*e?Math.floor(s/e)+" "+a:Math.ceil(s/e)+" "+a+"s"}var s=1e3,m=60*s,h=60*m,d=24*h,y=365.25*d;module.exports=function(s,e){return e=e||{},"string"==typeof s?parse(s):e["long"]?long(s):short(s)};

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/lib/code-path-analysis/fork-context.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function isReachable(e){return e.reachable}function makeSegments(e,t,n,s){var r=e.segmentsList;t<0&&(t=r.length+t),n<0&&(n=r.length+n);for(var o=[],i=0;i<e.count;++i){for(var a=[],h=t;h<=n;++h)a.push(r[h][i]);o.push(s(e.idGenerator.next(),a))}return o}function mergeExtraSegments(e,t){for(;t.length>e.count;){for(var n=[],s=0,r=t.length/2|0;s<r;++s)n.push(CodePathSegment.newNext(e.idGenerator.next(),[t[s],t[s+r]]));t=n}return t}function ForkContext(e,t,n){this.idGenerator=e,this.upper=t,this.count=n,this.segmentsList=[]}var assert=__webpack_require__("./node_modules/assert/assert.js"),CodePathSegment=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/code-path-analysis/code-path-segment.js");ForkContext.prototype={constructor:ForkContext,get head(){var e=this.segmentsList;return 0===e.length?[]:e[e.length-1]},get empty(){return 0===this.segmentsList.length},get reachable(){var e=this.head;return e.length>0&&e.some(isReachable)},makeNext:function(e,t){return makeSegments(this,e,t,CodePathSegment.newNext)},makeUnreachable:function(e,t){return makeSegments(this,e,t,CodePathSegment.newUnreachable)},makeDisconnected:function(e,t){return makeSegments(this,e,t,CodePathSegment.newDisconnected)},add:function(e){assert(e.length>=this.count,e.length+" >= "+this.count),this.segmentsList.push(mergeExtraSegments(this,e))},replaceHead:function(e){assert(e.length>=this.count,e.length+" >= "+this.count),this.segmentsList.splice(-1,1,mergeExtraSegments(this,e))},addAll:function(e){assert(e.count===this.count);for(var t=e.segmentsList,n=0;n<t.length;++n)this.segmentsList.push(t[n])},clear:function(){this.segmentsList=[]}},ForkContext.newRoot=function(e){var t=new ForkContext(e,null,1);return t.add([CodePathSegment.newRoot(e.next())]),t},ForkContext.newEmpty=function(e,t){return new ForkContext(e.idGenerator,e,(t?2:1)*e.count)},module.exports=ForkContext;

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/lib/code-path-analysis/id-generator.js":
/***/ function(module, exports) {

	"use strict";function IdGenerator(t){this.prefix=String(t),this.n=0}IdGenerator.prototype.next=function(){return this.n=1+this.n|0,this.n<0&&(this.n=1),this.prefix+this.n},module.exports=IdGenerator;

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/lib/ast-utils.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function isModifyingReference(e,r,t){var n,i=e.identifier;return n=0===r||t[r-1].identifier!==i,i&&e.init===!1&&e.isWrite()&&n}function isES5Constructor(e){return e.id&&e.id.name[0]!==e.id.name[0].toLocaleLowerCase()}function getUpperFunction(e){for(;e;){if(anyFunctionPattern.test(e.type))return e;e=e.parent}return null}function isNullOrUndefined(e){return"Literal"===e.type&&null===e.value||"Identifier"===e.type&&"undefined"===e.name||"UnaryExpression"===e.type&&"void"===e.operator}function isCallee(e){return"CallExpression"===e.parent.type&&e.parent.callee===e}function isReflectApply(e){return"MemberExpression"===e.type&&"Identifier"===e.object.type&&"Reflect"===e.object.name&&"Identifier"===e.property.type&&"apply"===e.property.name&&e.computed===!1}function isArrayFromMethod(e){return"MemberExpression"===e.type&&"Identifier"===e.object.type&&arrayOrTypedArrayPattern.test(e.object.name)&&"Identifier"===e.property.type&&"from"===e.property.name&&e.computed===!1}function isMethodWhichHasThisArg(e){for(;e;){if("Identifier"===e.type)return arrayMethodPattern.test(e.name);{if("MemberExpression"!==e.type||e.computed)break;e=e.property}}return!1}function hasJSDocThisTag(e,r){var t=r.getJSDocComment(e);return!(!t||!thisTagPattern.test(t.value))||r.getComments(e).leading.some(function(e){return thisTagPattern.test(e.value)})}function isParenthesised(e,r){var t=e.getTokenBefore(r),n=e.getTokenAfter(r);return Boolean(t&&n)&&"("===t.value&&t.range[1]<=r.range[0]&&")"===n.value&&n.range[0]>=r.range[1]}var esutils=__webpack_require__("./node_modules/esutils/lib/utils.js"),anyFunctionPattern=/^(?:Function(?:Declaration|Expression)|ArrowFunctionExpression)$/,arrayOrTypedArrayPattern=/Array$/,arrayMethodPattern=/^(?:every|filter|find|findIndex|forEach|map|some)$/,bindOrCallOrApplyPattern=/^(?:bind|call|apply)$/,breakableTypePattern=/^(?:(?:Do)?While|For(?:In|Of)?|Switch)Statement$/,thisTagPattern=/^[\s\*]*@this/m;module.exports={isTokenOnSameLine:function(e,r){return e.loc.end.line===r.loc.start.line},isNullOrUndefined:isNullOrUndefined,isCallee:isCallee,isES5Constructor:isES5Constructor,getUpperFunction:getUpperFunction,isArrayFromMethod:isArrayFromMethod,isParenthesised:isParenthesised,isStringLiteral:function(e){return"Literal"===e.type&&"string"==typeof e.value||"TemplateLiteral"===e.type},isBreakableStatement:function(e){return breakableTypePattern.test(e.type)},getLabel:function(e){return"LabeledStatement"===e.parent.type?e.parent.label.name:null},getModifyingReferences:function(e){return e.filter(isModifyingReference)},isSurroundedBy:function(e,r){return e[0]===r&&e[e.length-1]===r},isDirectiveComment:function(e){var r=e.value.trim();return"Line"===e.type&&0===r.indexOf("eslint-")||"Block"===e.type&&(0===r.indexOf("global ")||0===r.indexOf("eslint ")||0===r.indexOf("eslint-"))},getTrailingStatement:esutils.ast.trailingStatement,getVariableByName:function(e,r){for(var t=e;t;){var n=t.set.get(r);if(n)return n;t=t.upper}return null},isDefaultThisBinding:function(e,r){if(isES5Constructor(e)||hasJSDocThisTag(e,r))return!1;for(;e;){var t=e.parent;switch(t.type){case"LogicalExpression":case"ConditionalExpression":e=t;break;case"ReturnStatement":var n=getUpperFunction(t);if(null===n||!isCallee(n))return!0;e=n.parent;break;case"Property":return!1;case"AssignmentExpression":return t.right!==e||"MemberExpression"!==t.left.type;case"MethodDefinition":return!1;case"MemberExpression":return t.object!==e||"Identifier"!==t.property.type||!bindOrCallOrApplyPattern.test(t.property.name)||!isCallee(t)||0===t.parent.arguments.length||isNullOrUndefined(t.parent.arguments[0]);case"CallExpression":return isReflectApply(t.callee)?3!==t.arguments.length||t.arguments[0]!==e||isNullOrUndefined(t.arguments[1]):isArrayFromMethod(t.callee)?3!==t.arguments.length||t.arguments[1]!==e||isNullOrUndefined(t.arguments[2]):!isMethodWhichHasThisArg(t.callee)||(2!==t.arguments.length||t.arguments[0]!==e||isNullOrUndefined(t.arguments[1]));default:return!0}}return!0},getPrecedence:function(e){switch(e.type){case"SequenceExpression":return 0;case"AssignmentExpression":case"ArrowFunctionExpression":case"YieldExpression":return 1;case"ConditionalExpression":return 3;case"LogicalExpression":switch(e.operator){case"||":return 4;case"&&":return 5}case"BinaryExpression":switch(e.operator){case"|":return 6;case"^":return 7;case"&":return 8;case"==":case"!=":case"===":case"!==":return 9;case"<":case"<=":case">":case">=":case"in":case"instanceof":return 10;case"<<":case">>":case">>>":return 11;case"+":case"-":return 12;case"*":case"/":case"%":return 13}case"UnaryExpression":return 14;case"UpdateExpression":return 15;case"CallExpression":return"FunctionExpression"===e.callee.type?-1:16;case"NewExpression":return 17}return 18}};

/***/ },

/***/ "./node_modules/esutils/lib/utils.js":
/***/ function(module, exports, __webpack_require__) {

	!function(){"use strict";exports.ast=__webpack_require__("./node_modules/esutils/lib/ast.js"),exports.code=__webpack_require__("./node_modules/esutils/lib/code.js"),exports.keyword=__webpack_require__("./node_modules/esutils/lib/keyword.js")}();

/***/ },

/***/ "./node_modules/esutils/lib/ast.js":
/***/ function(module, exports) {

	!function(){"use strict";function e(e){if(null==e)return!1;switch(e.type){case"ArrayExpression":case"AssignmentExpression":case"BinaryExpression":case"CallExpression":case"ConditionalExpression":case"FunctionExpression":case"Identifier":case"Literal":case"LogicalExpression":case"MemberExpression":case"NewExpression":case"ObjectExpression":case"SequenceExpression":case"ThisExpression":case"UnaryExpression":case"UpdateExpression":return!0}return!1}function t(e){if(null==e)return!1;switch(e.type){case"DoWhileStatement":case"ForInStatement":case"ForStatement":case"WhileStatement":return!0}return!1}function n(e){if(null==e)return!1;switch(e.type){case"BlockStatement":case"BreakStatement":case"ContinueStatement":case"DebuggerStatement":case"DoWhileStatement":case"EmptyStatement":case"ExpressionStatement":case"ForInStatement":case"ForStatement":case"IfStatement":case"LabeledStatement":case"ReturnStatement":case"SwitchStatement":case"ThrowStatement":case"TryStatement":case"VariableDeclaration":case"WhileStatement":case"WithStatement":return!0}return!1}function a(e){return n(e)||null!=e&&"FunctionDeclaration"===e.type}function s(e){switch(e.type){case"IfStatement":return null!=e.alternate?e.alternate:e.consequent;case"LabeledStatement":case"ForStatement":case"ForInStatement":case"WhileStatement":case"WithStatement":return e.body}return null}function r(e){var t;if("IfStatement"!==e.type)return!1;if(null==e.alternate)return!1;t=e.consequent;do{if("IfStatement"===t.type&&null==t.alternate)return!0;t=s(t)}while(t);return!1}module.exports={isExpression:e,isStatement:n,isIterationStatement:t,isSourceElement:a,isProblematicIfStatement:r,trailingStatement:s}}();

/***/ },

/***/ "./node_modules/esutils/lib/code.js":
/***/ function(module, exports) {

	!function(){"use strict";function u(u){return 48<=u&&u<=57}function D(u){return 48<=u&&u<=57||97<=u&&u<=102||65<=u&&u<=70}function A(u){return u>=48&&u<=55}function F(u){return 32===u||9===u||11===u||12===u||160===u||u>=5760&&x.indexOf(u)>=0}function C(u){return 10===u||13===u||8232===u||8233===u}function E(u){if(u<=65535)return String.fromCharCode(u);var D=String.fromCharCode(Math.floor((u-65536)/1024)+55296),A=String.fromCharCode((u-65536)%1024+56320);return D+A}function B(u){return u<128?o[u]:e.NonAsciiIdentifierStart.test(E(u))}function i(u){return u<128?f[u]:e.NonAsciiIdentifierPart.test(E(u))}function t(u){return u<128?o[u]:n.NonAsciiIdentifierStart.test(E(u))}function r(u){return u<128?f[u]:n.NonAsciiIdentifierPart.test(E(u))}var n,e,x,o,f,a;for(e={NonAsciiIdentifierStart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,NonAsciiIdentifierPart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/},n={NonAsciiIdentifierStart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDE00-\uDE11\uDE13-\uDE2B\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDE00-\uDE2F\uDE44\uDE80-\uDEAA]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/,NonAsciiIdentifierPart:/[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDD0-\uDDDA\uDE00-\uDE11\uDE13-\uDE37\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF01-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/},x=[5760,6158,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279],o=new Array(128),a=0;a<128;++a)o[a]=a>=97&&a<=122||a>=65&&a<=90||36===a||95===a;for(f=new Array(128),a=0;a<128;++a)f[a]=a>=97&&a<=122||a>=65&&a<=90||a>=48&&a<=57||36===a||95===a;module.exports={isDecimalDigit:u,isHexDigit:D,isOctalDigit:A,isWhiteSpace:F,isLineTerminator:C,isIdentifierStartES5:B,isIdentifierPartES5:i,isIdentifierStartES6:t,isIdentifierPartES6:r}}();

/***/ },

/***/ "./node_modules/esutils/lib/keyword.js":
/***/ function(module, exports, __webpack_require__) {

	!function(){"use strict";function e(e){switch(e){case"implements":case"interface":case"package":case"private":case"protected":case"public":case"static":case"let":return!0;default:return!1}}function r(e,r){return!(!r&&"yield"===e)&&t(e,r)}function t(r,t){if(t&&e(r))return!0;switch(r.length){case 2:return"if"===r||"in"===r||"do"===r;case 3:return"var"===r||"for"===r||"new"===r||"try"===r;case 4:return"this"===r||"else"===r||"case"===r||"void"===r||"with"===r||"enum"===r;case 5:return"while"===r||"break"===r||"catch"===r||"throw"===r||"const"===r||"yield"===r||"class"===r||"super"===r;case 6:return"return"===r||"typeof"===r||"delete"===r||"switch"===r||"export"===r||"import"===r;case 7:return"default"===r||"finally"===r||"extends"===r;case 8:return"function"===r||"continue"===r||"debugger"===r;case 10:return"instanceof"===r;default:return!1}}function n(e,t){return"null"===e||"true"===e||"false"===e||r(e,t)}function i(e,r){return"null"===e||"true"===e||"false"===e||t(e,r)}function u(e){return"eval"===e||"arguments"===e}function s(e){var r,t,n;if(0===e.length)return!1;if(n=e.charCodeAt(0),!d.isIdentifierStartES5(n))return!1;for(r=1,t=e.length;r<t;++r)if(n=e.charCodeAt(r),!d.isIdentifierPartES5(n))return!1;return!0}function c(e,r){return 1024*(e-55296)+(r-56320)+65536}function a(e){var r,t,n,i,u;if(0===e.length)return!1;for(u=d.isIdentifierStartES6,r=0,t=e.length;r<t;++r){if(n=e.charCodeAt(r),55296<=n&&n<=56319){if(++r,r>=t)return!1;if(i=e.charCodeAt(r),!(56320<=i&&i<=57343))return!1;n=c(n,i)}if(!u(n))return!1;u=d.isIdentifierPartES6}return!0}function f(e,r){return s(e)&&!n(e,r)}function o(e,r){return a(e)&&!i(e,r)}var d=__webpack_require__("./node_modules/esutils/lib/code.js");module.exports={isKeywordES5:r,isKeywordES6:t,isReservedWordES5:n,isReservedWordES6:i,isRestrictedWord:u,isIdentifierNameES5:s,isIdentifierNameES6:a,isIdentifierES5:f,isIdentifierES6:o}}();

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/lib/config/config-ops.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var lodash=__webpack_require__("./node_modules/lodash/lodash.js"),debug=__webpack_require__("./node_modules/debug/browser.js"),Environments=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/config/environments.js");debug=debug("eslint:config-ops");var RULE_SEVERITY_STRINGS=["off","warn","error"],RULE_SEVERITY=RULE_SEVERITY_STRINGS.reduce(function(r,e,n){return r[e]=n,r},{}),VALID_SEVERITIES=[0,1,2,"off","warn","error"];module.exports={createEmptyConfig:function(){return{globals:{},env:{},rules:{},parserOptions:{}}},createEnvironmentConfig:function(r){var e=this.createEmptyConfig();return r&&(e.env=r,Object.keys(r).filter(function(e){return r[e]}).forEach(function(r){var n=Environments.get(r);n&&(debug("Creating config for environment "+r),n.globals&&lodash.assign(e.globals,n.globals),n.parserOptions&&lodash.assign(e.parserOptions,n.parserOptions))})),e},applyEnvironments:function(r){return r.env&&"object"==typeof r.env?(debug("Apply environment settings to config"),this.merge(this.createEnvironmentConfig(r.env),r)):r},merge:function r(e,n,t,o){var i=Array.isArray(n)||Array.isArray(e),s=i&&[]||{};return t=!!t,o=!!o,i?(e=e||[],s=o&&Array.isArray(n)&&n.length>1?s.concat(n):s.concat(e),"object"==typeof n||Array.isArray(n)||(n=[n]),Object.keys(n).forEach(function(i,a){i=n[a],"undefined"==typeof s[a]?s[a]=i:"object"==typeof i?o?s[a]=i:s[a]=r(e[a],i,t,o):t?s.indexOf(i)===-1&&s.push(i):s[a]=i})):(e&&"object"==typeof e&&Object.keys(e).forEach(function(r){s[r]=e[r]}),Object.keys(n).forEach(function(i){Array.isArray(n[i])||Array.isArray(e[i])?s[i]=r(e[i],n[i],"plugins"===i,o):"object"==typeof n[i]&&n[i]&&"exported"!==i&&"astGlobals"!==i?s[i]=r(e[i]||{},n[i],t,"rules"===i):s[i]=n[i]})),s},normalize:function(r){r.rules&&Object.keys(r.rules).forEach(function(e){var n=r.rules[e];"string"==typeof n?r.rules[e]=RULE_SEVERITY[n.toLowerCase()]||0:Array.isArray(n)&&"string"==typeof n[0]&&(n[0]=RULE_SEVERITY[n[0].toLowerCase()]||0)})},normalizeToStrings:function(r){r.rules&&Object.keys(r.rules).forEach(function(e){var n=r.rules[e];"number"==typeof n?r.rules[e]=RULE_SEVERITY_STRINGS[n]||RULE_SEVERITY_STRINGS[0]:Array.isArray(n)&&"number"==typeof n[0]&&(n[0]=RULE_SEVERITY_STRINGS[n[0]]||RULE_SEVERITY_STRINGS[0])})},isErrorSeverity:function(r){var e=Array.isArray(r)?r[0]:r;return"string"==typeof e&&(e=RULE_SEVERITY[e.toLowerCase()]||0),"number"==typeof e&&2===e},isValidSeverity:function(r){var e=Array.isArray(r)?r[0]:r;return"string"==typeof e&&(e=e.toLowerCase()),VALID_SEVERITIES.indexOf(e)!==-1},isEverySeverityValid:function(r){return Object.keys(r).every(function(e){return this.isValidSeverity(r[e])},this)}};

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/lib/config/environments.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function load(){Object.keys(envs).forEach(function(n){environments[n]=envs[n]})}var debug=__webpack_require__("./node_modules/debug/browser.js"),envs=__webpack_require__("./node_modules/eslint2/node_modules/eslint/conf/environments.js");debug=debug("eslint:enviroments");var environments=Object.create(null);load(),module.exports={load:load,get:function(n){return environments[n]||null},define:function(n,e){environments[n]=e},importPlugin:function(n,e){n.environments&&Object.keys(n.environments).forEach(function(t){this.define(e+"/"+t,n.environments[t])},this)},testReset:function(){environments=Object.create(null),load()}};

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/conf/environments.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var globals=__webpack_require__("./node_modules/eslint2/node_modules/globals/index.js");module.exports={builtin:globals.es5,browser:{globals:globals.browser},node:{globals:globals.node,parserOptions:{ecmaFeatures:{globalReturn:!0}}},commonjs:{globals:globals.commonjs,parserOptions:{ecmaFeatures:{globalReturn:!0}}},"shared-node-browser":{globals:globals["shared-node-browser"]},worker:{globals:globals.worker},amd:{globals:globals.amd},mocha:{globals:globals.mocha},jasmine:{globals:globals.jasmine},jest:{globals:globals.jest},phantomjs:{globals:globals.phantomjs},jquery:{globals:globals.jquery},qunit:{globals:globals.qunit},prototypejs:{globals:globals.prototypejs},shelljs:{globals:globals.shelljs},meteor:{globals:globals.meteor},mongo:{globals:globals.mongo},protractor:{globals:globals.protractor},applescript:{globals:globals.applescript},nashorn:{globals:globals.nashorn},serviceworker:{globals:globals.serviceworker},atomtest:{globals:globals.atomtest},embertest:{globals:globals.embertest},webextensions:{globals:globals.webextensions},es6:{globals:globals.es6,parserOptions:{ecmaVersion:6}},greasemonkey:{globals:globals.greasemonkey}};

/***/ },

/***/ "./node_modules/eslint2/node_modules/globals/index.js":
/***/ function(module, exports, __webpack_require__) {

	module.exports=__webpack_require__("./node_modules/eslint2/node_modules/globals/globals.json");

/***/ },

/***/ "./node_modules/eslint2/node_modules/globals/globals.json":
/***/ function(module, exports) {

	module.exports = {
		"builtin": {
			"Array": false,
			"ArrayBuffer": false,
			"Boolean": false,
			"constructor": false,
			"DataView": false,
			"Date": false,
			"decodeURI": false,
			"decodeURIComponent": false,
			"encodeURI": false,
			"encodeURIComponent": false,
			"Error": false,
			"escape": false,
			"eval": false,
			"EvalError": false,
			"Float32Array": false,
			"Float64Array": false,
			"Function": false,
			"hasOwnProperty": false,
			"Infinity": false,
			"Int16Array": false,
			"Int32Array": false,
			"Int8Array": false,
			"isFinite": false,
			"isNaN": false,
			"isPrototypeOf": false,
			"JSON": false,
			"Map": false,
			"Math": false,
			"NaN": false,
			"Number": false,
			"Object": false,
			"parseFloat": false,
			"parseInt": false,
			"Promise": false,
			"propertyIsEnumerable": false,
			"Proxy": false,
			"RangeError": false,
			"ReferenceError": false,
			"Reflect": false,
			"RegExp": false,
			"Set": false,
			"String": false,
			"Symbol": false,
			"SyntaxError": false,
			"System": false,
			"toLocaleString": false,
			"toString": false,
			"TypeError": false,
			"Uint16Array": false,
			"Uint32Array": false,
			"Uint8Array": false,
			"Uint8ClampedArray": false,
			"undefined": false,
			"unescape": false,
			"URIError": false,
			"valueOf": false,
			"WeakMap": false,
			"WeakSet": false
		},
		"es5": {
			"Array": false,
			"Boolean": false,
			"constructor": false,
			"Date": false,
			"decodeURI": false,
			"decodeURIComponent": false,
			"encodeURI": false,
			"encodeURIComponent": false,
			"Error": false,
			"escape": false,
			"eval": false,
			"EvalError": false,
			"Function": false,
			"hasOwnProperty": false,
			"Infinity": false,
			"isFinite": false,
			"isNaN": false,
			"isPrototypeOf": false,
			"JSON": false,
			"Math": false,
			"NaN": false,
			"Number": false,
			"Object": false,
			"parseFloat": false,
			"parseInt": false,
			"propertyIsEnumerable": false,
			"RangeError": false,
			"ReferenceError": false,
			"RegExp": false,
			"String": false,
			"SyntaxError": false,
			"toLocaleString": false,
			"toString": false,
			"TypeError": false,
			"undefined": false,
			"unescape": false,
			"URIError": false,
			"valueOf": false
		},
		"es6": {
			"Array": false,
			"ArrayBuffer": false,
			"Boolean": false,
			"constructor": false,
			"DataView": false,
			"Date": false,
			"decodeURI": false,
			"decodeURIComponent": false,
			"encodeURI": false,
			"encodeURIComponent": false,
			"Error": false,
			"escape": false,
			"eval": false,
			"EvalError": false,
			"Float32Array": false,
			"Float64Array": false,
			"Function": false,
			"hasOwnProperty": false,
			"Infinity": false,
			"Int16Array": false,
			"Int32Array": false,
			"Int8Array": false,
			"isFinite": false,
			"isNaN": false,
			"isPrototypeOf": false,
			"JSON": false,
			"Map": false,
			"Math": false,
			"NaN": false,
			"Number": false,
			"Object": false,
			"parseFloat": false,
			"parseInt": false,
			"Promise": false,
			"propertyIsEnumerable": false,
			"Proxy": false,
			"RangeError": false,
			"ReferenceError": false,
			"Reflect": false,
			"RegExp": false,
			"Set": false,
			"String": false,
			"Symbol": false,
			"SyntaxError": false,
			"System": false,
			"toLocaleString": false,
			"toString": false,
			"TypeError": false,
			"Uint16Array": false,
			"Uint32Array": false,
			"Uint8Array": false,
			"Uint8ClampedArray": false,
			"undefined": false,
			"unescape": false,
			"URIError": false,
			"valueOf": false,
			"WeakMap": false,
			"WeakSet": false
		},
		"browser": {
			"addEventListener": false,
			"alert": false,
			"AnalyserNode": false,
			"Animation": false,
			"AnimationEffectReadOnly": false,
			"AnimationEffectTiming": false,
			"AnimationEffectTimingReadOnly": false,
			"AnimationEvent": false,
			"AnimationPlaybackEvent": false,
			"AnimationTimeline": false,
			"applicationCache": false,
			"ApplicationCache": false,
			"ApplicationCacheErrorEvent": false,
			"atob": false,
			"Attr": false,
			"Audio": false,
			"AudioBuffer": false,
			"AudioBufferSourceNode": false,
			"AudioContext": false,
			"AudioDestinationNode": false,
			"AudioListener": false,
			"AudioNode": false,
			"AudioParam": false,
			"AudioProcessingEvent": false,
			"AutocompleteErrorEvent": false,
			"BarProp": false,
			"BatteryManager": false,
			"BeforeUnloadEvent": false,
			"BiquadFilterNode": false,
			"Blob": false,
			"blur": false,
			"btoa": false,
			"Cache": false,
			"caches": false,
			"CacheStorage": false,
			"cancelAnimationFrame": false,
			"CanvasGradient": false,
			"CanvasPattern": false,
			"CanvasRenderingContext2D": false,
			"CDATASection": false,
			"ChannelMergerNode": false,
			"ChannelSplitterNode": false,
			"CharacterData": false,
			"clearInterval": false,
			"clearTimeout": false,
			"clientInformation": false,
			"ClientRect": false,
			"ClientRectList": false,
			"ClipboardEvent": false,
			"close": false,
			"closed": false,
			"CloseEvent": false,
			"Comment": false,
			"CompositionEvent": false,
			"confirm": false,
			"console": false,
			"ConvolverNode": false,
			"Credential": false,
			"CredentialsContainer": false,
			"crypto": false,
			"Crypto": false,
			"CryptoKey": false,
			"CSS": false,
			"CSSAnimation": false,
			"CSSFontFaceRule": false,
			"CSSImportRule": false,
			"CSSKeyframeRule": false,
			"CSSKeyframesRule": false,
			"CSSMediaRule": false,
			"CSSPageRule": false,
			"CSSRule": false,
			"CSSRuleList": false,
			"CSSStyleDeclaration": false,
			"CSSStyleRule": false,
			"CSSStyleSheet": false,
			"CSSSupportsRule": false,
			"CSSTransition": false,
			"CSSUnknownRule": false,
			"CSSViewportRule": false,
			"CustomEvent": false,
			"DataTransfer": false,
			"DataTransferItem": false,
			"DataTransferItemList": false,
			"Debug": false,
			"defaultStatus": false,
			"defaultstatus": false,
			"DelayNode": false,
			"DeviceMotionEvent": false,
			"DeviceOrientationEvent": false,
			"devicePixelRatio": false,
			"dispatchEvent": false,
			"document": false,
			"Document": false,
			"DocumentFragment": false,
			"DocumentTimeline": false,
			"DocumentType": false,
			"DOMError": false,
			"DOMException": false,
			"DOMImplementation": false,
			"DOMParser": false,
			"DOMSettableTokenList": false,
			"DOMStringList": false,
			"DOMStringMap": false,
			"DOMTokenList": false,
			"DragEvent": false,
			"DynamicsCompressorNode": false,
			"Element": false,
			"ElementTimeControl": false,
			"ErrorEvent": false,
			"event": false,
			"Event": false,
			"EventSource": false,
			"EventTarget": false,
			"external": false,
			"FederatedCredential": false,
			"fetch": false,
			"File": false,
			"FileError": false,
			"FileList": false,
			"FileReader": false,
			"find": false,
			"focus": false,
			"FocusEvent": false,
			"FontFace": false,
			"FormData": false,
			"frameElement": false,
			"frames": false,
			"GainNode": false,
			"Gamepad": false,
			"GamepadButton": false,
			"GamepadEvent": false,
			"getComputedStyle": false,
			"getSelection": false,
			"HashChangeEvent": false,
			"Headers": false,
			"history": false,
			"History": false,
			"HTMLAllCollection": false,
			"HTMLAnchorElement": false,
			"HTMLAppletElement": false,
			"HTMLAreaElement": false,
			"HTMLAudioElement": false,
			"HTMLBaseElement": false,
			"HTMLBlockquoteElement": false,
			"HTMLBodyElement": false,
			"HTMLBRElement": false,
			"HTMLButtonElement": false,
			"HTMLCanvasElement": false,
			"HTMLCollection": false,
			"HTMLContentElement": false,
			"HTMLDataListElement": false,
			"HTMLDetailsElement": false,
			"HTMLDialogElement": false,
			"HTMLDirectoryElement": false,
			"HTMLDivElement": false,
			"HTMLDListElement": false,
			"HTMLDocument": false,
			"HTMLElement": false,
			"HTMLEmbedElement": false,
			"HTMLFieldSetElement": false,
			"HTMLFontElement": false,
			"HTMLFormControlsCollection": false,
			"HTMLFormElement": false,
			"HTMLFrameElement": false,
			"HTMLFrameSetElement": false,
			"HTMLHeadElement": false,
			"HTMLHeadingElement": false,
			"HTMLHRElement": false,
			"HTMLHtmlElement": false,
			"HTMLIFrameElement": false,
			"HTMLImageElement": false,
			"HTMLInputElement": false,
			"HTMLIsIndexElement": false,
			"HTMLKeygenElement": false,
			"HTMLLabelElement": false,
			"HTMLLayerElement": false,
			"HTMLLegendElement": false,
			"HTMLLIElement": false,
			"HTMLLinkElement": false,
			"HTMLMapElement": false,
			"HTMLMarqueeElement": false,
			"HTMLMediaElement": false,
			"HTMLMenuElement": false,
			"HTMLMetaElement": false,
			"HTMLMeterElement": false,
			"HTMLModElement": false,
			"HTMLObjectElement": false,
			"HTMLOListElement": false,
			"HTMLOptGroupElement": false,
			"HTMLOptionElement": false,
			"HTMLOptionsCollection": false,
			"HTMLOutputElement": false,
			"HTMLParagraphElement": false,
			"HTMLParamElement": false,
			"HTMLPictureElement": false,
			"HTMLPreElement": false,
			"HTMLProgressElement": false,
			"HTMLQuoteElement": false,
			"HTMLScriptElement": false,
			"HTMLSelectElement": false,
			"HTMLShadowElement": false,
			"HTMLSourceElement": false,
			"HTMLSpanElement": false,
			"HTMLStyleElement": false,
			"HTMLTableCaptionElement": false,
			"HTMLTableCellElement": false,
			"HTMLTableColElement": false,
			"HTMLTableElement": false,
			"HTMLTableRowElement": false,
			"HTMLTableSectionElement": false,
			"HTMLTemplateElement": false,
			"HTMLTextAreaElement": false,
			"HTMLTitleElement": false,
			"HTMLTrackElement": false,
			"HTMLUListElement": false,
			"HTMLUnknownElement": false,
			"HTMLVideoElement": false,
			"IDBCursor": false,
			"IDBCursorWithValue": false,
			"IDBDatabase": false,
			"IDBEnvironment": false,
			"IDBFactory": false,
			"IDBIndex": false,
			"IDBKeyRange": false,
			"IDBObjectStore": false,
			"IDBOpenDBRequest": false,
			"IDBRequest": false,
			"IDBTransaction": false,
			"IDBVersionChangeEvent": false,
			"Image": false,
			"ImageBitmap": false,
			"ImageData": false,
			"indexedDB": false,
			"innerHeight": false,
			"innerWidth": false,
			"InputEvent": false,
			"InputMethodContext": false,
			"IntersectionObserver": false,
			"IntersectionObserverEntry": false,
			"Intl": false,
			"KeyboardEvent": false,
			"KeyframeEffect": false,
			"KeyframeEffectReadOnly": false,
			"length": false,
			"localStorage": false,
			"location": false,
			"Location": false,
			"locationbar": false,
			"matchMedia": false,
			"MediaElementAudioSourceNode": false,
			"MediaEncryptedEvent": false,
			"MediaError": false,
			"MediaKeyError": false,
			"MediaKeyEvent": false,
			"MediaKeyMessageEvent": false,
			"MediaKeys": false,
			"MediaKeySession": false,
			"MediaKeyStatusMap": false,
			"MediaKeySystemAccess": false,
			"MediaList": false,
			"MediaQueryList": false,
			"MediaQueryListEvent": false,
			"MediaSource": false,
			"MediaStream": false,
			"MediaStreamAudioDestinationNode": false,
			"MediaStreamAudioSourceNode": false,
			"MediaStreamEvent": false,
			"MediaStreamTrack": false,
			"menubar": false,
			"MessageChannel": false,
			"MessageEvent": false,
			"MessagePort": false,
			"MIDIAccess": false,
			"MIDIConnectionEvent": false,
			"MIDIInput": false,
			"MIDIInputMap": false,
			"MIDIMessageEvent": false,
			"MIDIOutput": false,
			"MIDIOutputMap": false,
			"MIDIPort": false,
			"MimeType": false,
			"MimeTypeArray": false,
			"MouseEvent": false,
			"moveBy": false,
			"moveTo": false,
			"MutationEvent": false,
			"MutationObserver": false,
			"MutationRecord": false,
			"name": false,
			"NamedNodeMap": false,
			"navigator": false,
			"Navigator": false,
			"Node": false,
			"NodeFilter": false,
			"NodeIterator": false,
			"NodeList": false,
			"Notification": false,
			"OfflineAudioCompletionEvent": false,
			"OfflineAudioContext": false,
			"offscreenBuffering": false,
			"onbeforeunload": true,
			"onblur": true,
			"onerror": true,
			"onfocus": true,
			"onload": true,
			"onresize": true,
			"onunload": true,
			"open": false,
			"openDatabase": false,
			"opener": false,
			"opera": false,
			"Option": false,
			"OscillatorNode": false,
			"outerHeight": false,
			"outerWidth": false,
			"PageTransitionEvent": false,
			"pageXOffset": false,
			"pageYOffset": false,
			"parent": false,
			"PasswordCredential": false,
			"Path2D": false,
			"performance": false,
			"Performance": false,
			"PerformanceEntry": false,
			"PerformanceMark": false,
			"PerformanceMeasure": false,
			"PerformanceNavigation": false,
			"PerformanceResourceTiming": false,
			"PerformanceTiming": false,
			"PeriodicWave": false,
			"Permissions": false,
			"PermissionStatus": false,
			"personalbar": false,
			"Plugin": false,
			"PluginArray": false,
			"PopStateEvent": false,
			"postMessage": false,
			"print": false,
			"ProcessingInstruction": false,
			"ProgressEvent": false,
			"prompt": false,
			"PushManager": false,
			"PushSubscription": false,
			"RadioNodeList": false,
			"Range": false,
			"ReadableByteStream": false,
			"ReadableStream": false,
			"removeEventListener": false,
			"Request": false,
			"requestAnimationFrame": false,
			"resizeBy": false,
			"resizeTo": false,
			"Response": false,
			"RTCIceCandidate": false,
			"RTCSessionDescription": false,
			"RTCPeerConnection": false,
			"screen": false,
			"Screen": false,
			"screenLeft": false,
			"ScreenOrientation": false,
			"screenTop": false,
			"screenX": false,
			"screenY": false,
			"ScriptProcessorNode": false,
			"scroll": false,
			"scrollbars": false,
			"scrollBy": false,
			"scrollTo": false,
			"scrollX": false,
			"scrollY": false,
			"SecurityPolicyViolationEvent": false,
			"Selection": false,
			"self": false,
			"ServiceWorker": false,
			"ServiceWorkerContainer": false,
			"ServiceWorkerRegistration": false,
			"sessionStorage": false,
			"setInterval": false,
			"setTimeout": false,
			"ShadowRoot": false,
			"SharedKeyframeList": false,
			"SharedWorker": false,
			"showModalDialog": false,
			"SiteBoundCredential": false,
			"speechSynthesis": false,
			"SpeechSynthesisEvent": false,
			"SpeechSynthesisUtterance": false,
			"status": false,
			"statusbar": false,
			"stop": false,
			"Storage": false,
			"StorageEvent": false,
			"styleMedia": false,
			"StyleSheet": false,
			"StyleSheetList": false,
			"SubtleCrypto": false,
			"SVGAElement": false,
			"SVGAltGlyphDefElement": false,
			"SVGAltGlyphElement": false,
			"SVGAltGlyphItemElement": false,
			"SVGAngle": false,
			"SVGAnimateColorElement": false,
			"SVGAnimatedAngle": false,
			"SVGAnimatedBoolean": false,
			"SVGAnimatedEnumeration": false,
			"SVGAnimatedInteger": false,
			"SVGAnimatedLength": false,
			"SVGAnimatedLengthList": false,
			"SVGAnimatedNumber": false,
			"SVGAnimatedNumberList": false,
			"SVGAnimatedPathData": false,
			"SVGAnimatedPoints": false,
			"SVGAnimatedPreserveAspectRatio": false,
			"SVGAnimatedRect": false,
			"SVGAnimatedString": false,
			"SVGAnimatedTransformList": false,
			"SVGAnimateElement": false,
			"SVGAnimateMotionElement": false,
			"SVGAnimateTransformElement": false,
			"SVGAnimationElement": false,
			"SVGCircleElement": false,
			"SVGClipPathElement": false,
			"SVGColor": false,
			"SVGColorProfileElement": false,
			"SVGColorProfileRule": false,
			"SVGComponentTransferFunctionElement": false,
			"SVGCSSRule": false,
			"SVGCursorElement": false,
			"SVGDefsElement": false,
			"SVGDescElement": false,
			"SVGDiscardElement": false,
			"SVGDocument": false,
			"SVGElement": false,
			"SVGElementInstance": false,
			"SVGElementInstanceList": false,
			"SVGEllipseElement": false,
			"SVGEvent": false,
			"SVGExternalResourcesRequired": false,
			"SVGFEBlendElement": false,
			"SVGFEColorMatrixElement": false,
			"SVGFEComponentTransferElement": false,
			"SVGFECompositeElement": false,
			"SVGFEConvolveMatrixElement": false,
			"SVGFEDiffuseLightingElement": false,
			"SVGFEDisplacementMapElement": false,
			"SVGFEDistantLightElement": false,
			"SVGFEDropShadowElement": false,
			"SVGFEFloodElement": false,
			"SVGFEFuncAElement": false,
			"SVGFEFuncBElement": false,
			"SVGFEFuncGElement": false,
			"SVGFEFuncRElement": false,
			"SVGFEGaussianBlurElement": false,
			"SVGFEImageElement": false,
			"SVGFEMergeElement": false,
			"SVGFEMergeNodeElement": false,
			"SVGFEMorphologyElement": false,
			"SVGFEOffsetElement": false,
			"SVGFEPointLightElement": false,
			"SVGFESpecularLightingElement": false,
			"SVGFESpotLightElement": false,
			"SVGFETileElement": false,
			"SVGFETurbulenceElement": false,
			"SVGFilterElement": false,
			"SVGFilterPrimitiveStandardAttributes": false,
			"SVGFitToViewBox": false,
			"SVGFontElement": false,
			"SVGFontFaceElement": false,
			"SVGFontFaceFormatElement": false,
			"SVGFontFaceNameElement": false,
			"SVGFontFaceSrcElement": false,
			"SVGFontFaceUriElement": false,
			"SVGForeignObjectElement": false,
			"SVGGElement": false,
			"SVGGeometryElement": false,
			"SVGGlyphElement": false,
			"SVGGlyphRefElement": false,
			"SVGGradientElement": false,
			"SVGGraphicsElement": false,
			"SVGHKernElement": false,
			"SVGICCColor": false,
			"SVGImageElement": false,
			"SVGLangSpace": false,
			"SVGLength": false,
			"SVGLengthList": false,
			"SVGLinearGradientElement": false,
			"SVGLineElement": false,
			"SVGLocatable": false,
			"SVGMarkerElement": false,
			"SVGMaskElement": false,
			"SVGMatrix": false,
			"SVGMetadataElement": false,
			"SVGMissingGlyphElement": false,
			"SVGMPathElement": false,
			"SVGNumber": false,
			"SVGNumberList": false,
			"SVGPaint": false,
			"SVGPathElement": false,
			"SVGPathSeg": false,
			"SVGPathSegArcAbs": false,
			"SVGPathSegArcRel": false,
			"SVGPathSegClosePath": false,
			"SVGPathSegCurvetoCubicAbs": false,
			"SVGPathSegCurvetoCubicRel": false,
			"SVGPathSegCurvetoCubicSmoothAbs": false,
			"SVGPathSegCurvetoCubicSmoothRel": false,
			"SVGPathSegCurvetoQuadraticAbs": false,
			"SVGPathSegCurvetoQuadraticRel": false,
			"SVGPathSegCurvetoQuadraticSmoothAbs": false,
			"SVGPathSegCurvetoQuadraticSmoothRel": false,
			"SVGPathSegLinetoAbs": false,
			"SVGPathSegLinetoHorizontalAbs": false,
			"SVGPathSegLinetoHorizontalRel": false,
			"SVGPathSegLinetoRel": false,
			"SVGPathSegLinetoVerticalAbs": false,
			"SVGPathSegLinetoVerticalRel": false,
			"SVGPathSegList": false,
			"SVGPathSegMovetoAbs": false,
			"SVGPathSegMovetoRel": false,
			"SVGPatternElement": false,
			"SVGPoint": false,
			"SVGPointList": false,
			"SVGPolygonElement": false,
			"SVGPolylineElement": false,
			"SVGPreserveAspectRatio": false,
			"SVGRadialGradientElement": false,
			"SVGRect": false,
			"SVGRectElement": false,
			"SVGRenderingIntent": false,
			"SVGScriptElement": false,
			"SVGSetElement": false,
			"SVGStopElement": false,
			"SVGStringList": false,
			"SVGStylable": false,
			"SVGStyleElement": false,
			"SVGSVGElement": false,
			"SVGSwitchElement": false,
			"SVGSymbolElement": false,
			"SVGTests": false,
			"SVGTextContentElement": false,
			"SVGTextElement": false,
			"SVGTextPathElement": false,
			"SVGTextPositioningElement": false,
			"SVGTitleElement": false,
			"SVGTransform": false,
			"SVGTransformable": false,
			"SVGTransformList": false,
			"SVGTRefElement": false,
			"SVGTSpanElement": false,
			"SVGUnitTypes": false,
			"SVGURIReference": false,
			"SVGUseElement": false,
			"SVGViewElement": false,
			"SVGViewSpec": false,
			"SVGVKernElement": false,
			"SVGZoomAndPan": false,
			"SVGZoomEvent": false,
			"Text": false,
			"TextDecoder": false,
			"TextEncoder": false,
			"TextEvent": false,
			"TextMetrics": false,
			"TextTrack": false,
			"TextTrackCue": false,
			"TextTrackCueList": false,
			"TextTrackList": false,
			"TimeEvent": false,
			"TimeRanges": false,
			"toolbar": false,
			"top": false,
			"Touch": false,
			"TouchEvent": false,
			"TouchList": false,
			"TrackEvent": false,
			"TransitionEvent": false,
			"TreeWalker": false,
			"UIEvent": false,
			"URL": false,
			"URLSearchParams": false,
			"ValidityState": false,
			"VTTCue": false,
			"WaveShaperNode": false,
			"WebGLActiveInfo": false,
			"WebGLBuffer": false,
			"WebGLContextEvent": false,
			"WebGLFramebuffer": false,
			"WebGLProgram": false,
			"WebGLRenderbuffer": false,
			"WebGLRenderingContext": false,
			"WebGLShader": false,
			"WebGLShaderPrecisionFormat": false,
			"WebGLTexture": false,
			"WebGLUniformLocation": false,
			"WebSocket": false,
			"WheelEvent": false,
			"window": false,
			"Window": false,
			"Worker": false,
			"XDomainRequest": false,
			"XMLDocument": false,
			"XMLHttpRequest": false,
			"XMLHttpRequestEventTarget": false,
			"XMLHttpRequestProgressEvent": false,
			"XMLHttpRequestUpload": false,
			"XMLSerializer": false,
			"XPathEvaluator": false,
			"XPathException": false,
			"XPathExpression": false,
			"XPathNamespace": false,
			"XPathNSResolver": false,
			"XPathResult": false,
			"XSLTProcessor": false
		},
		"worker": {
			"applicationCache": false,
			"atob": false,
			"Blob": false,
			"BroadcastChannel": false,
			"btoa": false,
			"Cache": false,
			"caches": false,
			"clearInterval": false,
			"clearTimeout": false,
			"close": true,
			"console": false,
			"fetch": false,
			"FileReaderSync": false,
			"FormData": false,
			"Headers": false,
			"IDBCursor": false,
			"IDBCursorWithValue": false,
			"IDBDatabase": false,
			"IDBFactory": false,
			"IDBIndex": false,
			"IDBKeyRange": false,
			"IDBObjectStore": false,
			"IDBOpenDBRequest": false,
			"IDBRequest": false,
			"IDBTransaction": false,
			"IDBVersionChangeEvent": false,
			"ImageData": false,
			"importScripts": true,
			"indexedDB": false,
			"location": false,
			"MessageChannel": false,
			"MessagePort": false,
			"name": false,
			"navigator": false,
			"Notification": false,
			"onclose": true,
			"onconnect": true,
			"onerror": true,
			"onlanguagechange": true,
			"onmessage": true,
			"onoffline": true,
			"ononline": true,
			"onrejectionhandled": true,
			"onunhandledrejection": true,
			"performance": false,
			"Performance": false,
			"PerformanceEntry": false,
			"PerformanceMark": false,
			"PerformanceMeasure": false,
			"PerformanceNavigation": false,
			"PerformanceResourceTiming": false,
			"PerformanceTiming": false,
			"postMessage": true,
			"Promise": false,
			"Request": false,
			"Response": false,
			"self": true,
			"ServiceWorkerRegistration": false,
			"setInterval": false,
			"setTimeout": false,
			"TextDecoder": false,
			"TextEncoder": false,
			"URL": false,
			"URLSearchParams": false,
			"WebSocket": false,
			"Worker": false,
			"XMLHttpRequest": false
		},
		"node": {
			"__dirname": false,
			"__filename": false,
			"arguments": false,
			"Buffer": false,
			"clearImmediate": false,
			"clearInterval": false,
			"clearTimeout": false,
			"console": false,
			"exports": true,
			"GLOBAL": false,
			"global": false,
			"Intl": false,
			"module": false,
			"process": false,
			"require": false,
			"root": false,
			"setImmediate": false,
			"setInterval": false,
			"setTimeout": false
		},
		"commonjs": {
			"exports": true,
			"module": false,
			"require": false,
			"global": false
		},
		"amd": {
			"define": false,
			"require": false
		},
		"mocha": {
			"after": false,
			"afterEach": false,
			"before": false,
			"beforeEach": false,
			"context": false,
			"describe": false,
			"it": false,
			"mocha": false,
			"setup": false,
			"specify": false,
			"suite": false,
			"suiteSetup": false,
			"suiteTeardown": false,
			"teardown": false,
			"test": false,
			"xcontext": false,
			"xdescribe": false,
			"xit": false,
			"xspecify": false
		},
		"jasmine": {
			"afterAll": false,
			"afterEach": false,
			"beforeAll": false,
			"beforeEach": false,
			"describe": false,
			"expect": false,
			"fail": false,
			"fdescribe": false,
			"fit": false,
			"it": false,
			"jasmine": false,
			"pending": false,
			"runs": false,
			"spyOn": false,
			"waits": false,
			"waitsFor": false,
			"xdescribe": false,
			"xit": false
		},
		"jest": {
			"afterAll": false,
			"afterEach": false,
			"beforeAll": false,
			"beforeEach": false,
			"check": false,
			"describe": false,
			"expect": false,
			"gen": false,
			"it": false,
			"fit": false,
			"jest": false,
			"pit": false,
			"require": false,
			"test": false,
			"xdescribe": false,
			"xit": false,
			"xtest": false
		},
		"qunit": {
			"asyncTest": false,
			"deepEqual": false,
			"equal": false,
			"expect": false,
			"module": false,
			"notDeepEqual": false,
			"notEqual": false,
			"notOk": false,
			"notPropEqual": false,
			"notStrictEqual": false,
			"ok": false,
			"propEqual": false,
			"QUnit": false,
			"raises": false,
			"start": false,
			"stop": false,
			"strictEqual": false,
			"test": false,
			"throws": false
		},
		"phantomjs": {
			"console": true,
			"exports": true,
			"phantom": true,
			"require": true,
			"WebPage": true
		},
		"couch": {
			"emit": false,
			"exports": false,
			"getRow": false,
			"log": false,
			"module": false,
			"provides": false,
			"require": false,
			"respond": false,
			"send": false,
			"start": false,
			"sum": false
		},
		"rhino": {
			"defineClass": false,
			"deserialize": false,
			"gc": false,
			"help": false,
			"importClass": false,
			"importPackage": false,
			"java": false,
			"load": false,
			"loadClass": false,
			"Packages": false,
			"print": false,
			"quit": false,
			"readFile": false,
			"readUrl": false,
			"runCommand": false,
			"seal": false,
			"serialize": false,
			"spawn": false,
			"sync": false,
			"toint32": false,
			"version": false
		},
		"nashorn": {
			"__DIR__": false,
			"__FILE__": false,
			"__LINE__": false,
			"com": false,
			"edu": false,
			"exit": false,
			"Java": false,
			"java": false,
			"javafx": false,
			"JavaImporter": false,
			"javax": false,
			"JSAdapter": false,
			"load": false,
			"loadWithNewGlobal": false,
			"org": false,
			"Packages": false,
			"print": false,
			"quit": false
		},
		"wsh": {
			"ActiveXObject": true,
			"Enumerator": true,
			"GetObject": true,
			"ScriptEngine": true,
			"ScriptEngineBuildVersion": true,
			"ScriptEngineMajorVersion": true,
			"ScriptEngineMinorVersion": true,
			"VBArray": true,
			"WScript": true,
			"WSH": true,
			"XDomainRequest": true
		},
		"jquery": {
			"$": false,
			"jQuery": false
		},
		"yui": {
			"Y": false,
			"YUI": false,
			"YUI_config": false
		},
		"shelljs": {
			"cat": false,
			"cd": false,
			"chmod": false,
			"config": false,
			"cp": false,
			"dirs": false,
			"echo": false,
			"env": false,
			"error": false,
			"exec": false,
			"exit": false,
			"find": false,
			"grep": false,
			"ls": false,
			"ln": false,
			"mkdir": false,
			"mv": false,
			"popd": false,
			"pushd": false,
			"pwd": false,
			"rm": false,
			"sed": false,
			"set": false,
			"target": false,
			"tempdir": false,
			"test": false,
			"touch": false,
			"which": false
		},
		"prototypejs": {
			"$": false,
			"$$": false,
			"$A": false,
			"$break": false,
			"$continue": false,
			"$F": false,
			"$H": false,
			"$R": false,
			"$w": false,
			"Abstract": false,
			"Ajax": false,
			"Autocompleter": false,
			"Builder": false,
			"Class": false,
			"Control": false,
			"Draggable": false,
			"Draggables": false,
			"Droppables": false,
			"Effect": false,
			"Element": false,
			"Enumerable": false,
			"Event": false,
			"Field": false,
			"Form": false,
			"Hash": false,
			"Insertion": false,
			"ObjectRange": false,
			"PeriodicalExecuter": false,
			"Position": false,
			"Prototype": false,
			"Scriptaculous": false,
			"Selector": false,
			"Sortable": false,
			"SortableObserver": false,
			"Sound": false,
			"Template": false,
			"Toggle": false,
			"Try": false
		},
		"meteor": {
			"$": false,
			"_": false,
			"Accounts": false,
			"AccountsClient": false,
			"AccountsServer": false,
			"AccountsCommon": false,
			"App": false,
			"Assets": false,
			"Blaze": false,
			"check": false,
			"Cordova": false,
			"DDP": false,
			"DDPServer": false,
			"DDPRateLimiter": false,
			"Deps": false,
			"EJSON": false,
			"Email": false,
			"HTTP": false,
			"Log": false,
			"Match": false,
			"Meteor": false,
			"Mongo": false,
			"MongoInternals": false,
			"Npm": false,
			"Package": false,
			"Plugin": false,
			"process": false,
			"Random": false,
			"ReactiveDict": false,
			"ReactiveVar": false,
			"Router": false,
			"ServiceConfiguration": false,
			"Session": false,
			"share": false,
			"Spacebars": false,
			"Template": false,
			"Tinytest": false,
			"Tracker": false,
			"UI": false,
			"Utils": false,
			"WebApp": false,
			"WebAppInternals": false
		},
		"mongo": {
			"_isWindows": false,
			"_rand": false,
			"BulkWriteResult": false,
			"cat": false,
			"cd": false,
			"connect": false,
			"db": false,
			"getHostName": false,
			"getMemInfo": false,
			"hostname": false,
			"ISODate": false,
			"listFiles": false,
			"load": false,
			"ls": false,
			"md5sumFile": false,
			"mkdir": false,
			"Mongo": false,
			"NumberInt": false,
			"NumberLong": false,
			"ObjectId": false,
			"PlanCache": false,
			"print": false,
			"printjson": false,
			"pwd": false,
			"quit": false,
			"removeFile": false,
			"rs": false,
			"sh": false,
			"UUID": false,
			"version": false,
			"WriteResult": false
		},
		"applescript": {
			"$": false,
			"Application": false,
			"Automation": false,
			"console": false,
			"delay": false,
			"Library": false,
			"ObjC": false,
			"ObjectSpecifier": false,
			"Path": false,
			"Progress": false,
			"Ref": false
		},
		"serviceworker": {
			"caches": false,
			"Cache": false,
			"CacheStorage": false,
			"Client": false,
			"clients": false,
			"Clients": false,
			"ExtendableEvent": false,
			"ExtendableMessageEvent": false,
			"FetchEvent": false,
			"importScripts": false,
			"registration": false,
			"self": false,
			"ServiceWorker": false,
			"ServiceWorkerContainer": false,
			"ServiceWorkerGlobalScope": false,
			"ServiceWorkerMessageEvent": false,
			"ServiceWorkerRegistration": false,
			"skipWaiting": false,
			"WindowClient": false
		},
		"atomtest": {
			"advanceClock": false,
			"fakeClearInterval": false,
			"fakeClearTimeout": false,
			"fakeSetInterval": false,
			"fakeSetTimeout": false,
			"resetTimeouts": false,
			"waitsForPromise": false
		},
		"embertest": {
			"andThen": false,
			"click": false,
			"currentPath": false,
			"currentRouteName": false,
			"currentURL": false,
			"fillIn": false,
			"find": false,
			"findWithAssert": false,
			"keyEvent": false,
			"pauseTest": false,
			"triggerEvent": false,
			"visit": false
		},
		"protractor": {
			"$": false,
			"$$": false,
			"browser": false,
			"By": false,
			"by": false,
			"DartObject": false,
			"element": false,
			"protractor": false
		},
		"shared-node-browser": {
			"clearInterval": false,
			"clearTimeout": false,
			"console": false,
			"setInterval": false,
			"setTimeout": false
		},
		"webextensions": {
			"browser": false,
			"chrome": false,
			"opr": false
		},
		"greasemonkey": {
			"GM_addStyle": false,
			"GM_deleteValue": false,
			"GM_getResourceText": false,
			"GM_getResourceURL": false,
			"GM_getValue": false,
			"GM_info": false,
			"GM_listValues": false,
			"GM_log": false,
			"GM_openInTab": false,
			"GM_registerMenuCommand": false,
			"GM_setClipboard": false,
			"GM_setValue": false,
			"GM_xmlhttpRequest": false,
			"unsafeWindow": false
		}
	};

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/lib/config/config-validator.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function getRuleOptionsSchema(e){var r=rules.get(e),t=r&&r.schema||r&&r.meta&&r.meta.schema;return Array.isArray(t)?t.length?{type:"array",items:t,minItems:0,maxItems:t.length}:{type:"array",minItems:0,maxItems:0}:t||null}function validateRuleOptions(e,r,t){var n,a,i,o=validators.rules[e],s=getRuleOptionsSchema(e),l=!0;if(!o&&s&&(o=schemaValidator(s,{verbose:!0}),validators.rules[e]=o),Array.isArray(r)?(i=r.concat(),a=i.shift()):(a=r,i=[]),l=0===a||1===a||2===a||"string"==typeof a&&/^(?:off|warn|error)$/i.test(a),o&&o(i),o&&o.errors||!l)throw n=[t,":\n",'\tConfiguration for rule "',e,'" is invalid:\n'],l||n.push("\tSeverity should be one of the following: 0 = off, 1 = warn, 2 = error (you passed '",util.inspect(a).replace(/'/g,'"').replace(/\n/g,""),"').\n"),o&&o.errors&&o.errors.forEach(function(e){n.push('\tValue "',e.value,'" ',e.message,".\n")}),new Error(n.join(""))}function validateEnvironment(e,r){if(e){if(Array.isArray(e))throw new Error("Environment must not be an array");if("object"!=typeof e)throw new Error("Environment must be an object");Object.keys(e).forEach(function(e){if(!Environments.get(e)){var t=[r,":\n",'\tEnvironment key "',e,'" is unknown\n'];throw new Error(t.join(""))}})}}function validate(e,r){"object"==typeof e.rules&&Object.keys(e.rules).forEach(function(t){validateRuleOptions(t,e.rules[t],r)}),validateEnvironment(e.env,r)}var rules=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/rules.js"),Environments=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/config/environments.js"),schemaValidator=__webpack_require__("./node_modules/is-my-json-valid/index.js"),util=__webpack_require__("./node_modules/util/util.js"),validators={rules:Object.create(null)};module.exports={getRuleOptionsSchema:getRuleOptionsSchema,validate:validate,validateRuleOptions:validateRuleOptions};

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/lib/rules.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function define(e,t){rules[e]=t}function load(e,t){var r=loadRules(e,t);Object.keys(r).forEach(function(e){define(e,r[e])})}function importPlugin(e,t){Object.keys(e).forEach(function(r){var l=t+"/"+r,n=e[r];define(l,n)})}function get(e){return"string"==typeof rules[e]?!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()):rules[e]}function testClear(){rules=Object.create(null)}var loadRules=__webpack_require__("./src/parsers/js/transformers/eslint1/loadRulesShim.js"),rules=Object.create(null);module.exports={define:define,load:load,"import":importPlugin,get:get,testClear:testClear,testReset:function(){testClear(),load()}},load();

/***/ },

/***/ 9:
/***/ function(module, exports) {

	function webpackContext(req) {
		throw new Error("Cannot find module '" + req + "'.");
	}
	webpackContext.keys = function() { return []; };
	webpackContext.resolve = webpackContext;
	module.exports = webpackContext;
	webpackContext.id = 9;


/***/ },

/***/ "./node_modules/is-my-json-valid/index.js":
/***/ function(module, exports, __webpack_require__) {

	var genobj=__webpack_require__("./node_modules/generate-object-property/index.js"),genfun=__webpack_require__("./node_modules/generate-function/index.js"),jsonpointer=__webpack_require__("./node_modules/jsonpointer/jsonpointer.js"),xtend=__webpack_require__("./node_modules/xtend/immutable.js"),formats=__webpack_require__("./node_modules/is-my-json-valid/formats.js"),get=function(e,r,t){var n=function(e){return e&&e.id===t?e:"object"==typeof e&&e?Object.keys(e).reduce(function(r,t){return r||n(e[t])},null):null},i=n(e);if(i)return i;t=t.replace(/^#/,""),t=t.replace(/\/$/,"");try{return jsonpointer.get(e,decodeURI(t))}catch(s){var a,o=t.indexOf("#");if(0!==o)if(o===-1)a=r[t];else{var f=t.slice(0,o);a=r[f];var u=t.slice(o).replace(/^#/,"");try{return jsonpointer.get(a,u)}catch(s){}}else a=r[t];return a||null}},formatName=function(e){e=JSON.stringify(e);for(var r=/\[([^\[\]"]+)\]/;r.test(e);)e=e.replace(r,'."+$1+"');return e},types={};types.any=function(){return"true"},types["null"]=function(e){return e+" === null"},types["boolean"]=function(e){return"typeof "+e+' === "boolean"'},types.array=function(e){return"Array.isArray("+e+")"},types.object=function(e){return"typeof "+e+' === "object" && '+e+" && !Array.isArray("+e+")"},types.number=function(e){return"typeof "+e+' === "number"'},types.integer=function(e){return"typeof "+e+' === "number" && (Math.floor('+e+") === "+e+" || "+e+" > 9007199254740992 || "+e+" < -9007199254740992)"},types.string=function(e){return"typeof "+e+' === "string"'};var unique=function(e){for(var r=[],t=0;t<e.length;t++)r.push("object"==typeof e[t]?JSON.stringify(e[t]):e[t]);for(var t=1;t<r.length;t++)if(r.indexOf(r[t])!==t)return!1;return!0},isMultipleOf=function(e,r){var t,n=(0|r)!==r?Math.pow(10,r.toString().split(".").pop().length):1;if(n>1){var i=(0|e)!==e?Math.pow(10,e.toString().split(".").pop().length):1;t=i>n||Math.round(n*e)%(n*r)}else t=e%r;return!t},toType=function(e){return e.type},compile=function(e,r,t,n,i){var s=i?xtend(formats,i.formats):formats,a={unique:unique,formats:s,isMultipleOf:isMultipleOf},o=!!i&&!!i.verbose,f=!(!i||void 0===i.greedy)&&i.greedy,u={},l=function(e){return e+(u[e]=(u[e]||0)+1)},m={},c=function(e){if(m[e])return m[e];var r=l("pattern");return a[r]=new RegExp(e),m[e]=r,r},p=["i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"],d=function(){var e=p.shift();return p.push(e+e[0]),e},y=function(e,n,u,m){var p=n.properties,v=n.type,h=!1;Array.isArray(n.items)&&(p={},n.items.forEach(function(e,r){p[r]=e}),v="array",h=!0);var b=0,j=function(r,t,n){g("errors++"),u===!0&&(g("if (validate.errors === null) validate.errors = []"),o?g("validate.errors.push({field:%s,message:%s,value:%s,type:%s})",formatName(t||e),JSON.stringify(r),n||e,JSON.stringify(v)):g("validate.errors.push({field:%s,message:%s})",formatName(t||e),JSON.stringify(r)))};n.required===!0?(b++,g("if (%s === undefined) {",e),j("is required"),g("} else {")):(b++,g("if (%s !== undefined) {",e));var O=[].concat(v).map(function(r){return types[r||"any"](e)}).join(" || ")||"true";if("true"!==O&&(b++,g("if (!(%s)) {",O),j("is the wrong type"),g("} else {")),h)if(n.additionalItems===!1)g("if (%s.length > %d) {",e,n.items.length),j("has additional items"),g("}");else if(n.additionalItems){var x=d();g("for (var %s = %d; %s < %s.length; %s++) {",x,n.items.length,x,e,x),y(e+"["+x+"]",n.additionalItems,u,m),g("}")}if(n.format&&s[n.format]){"string"!==v&&formats[n.format]&&g("if (%s) {",types.string(e));var q=l("format");a[q]=s[n.format],"function"==typeof a[q]?g("if (!%s(%s)) {",q,e):g("if (!%s.test(%s)) {",q,e),j("must be "+n.format+" format"),g("}"),"string"!==v&&formats[n.format]&&g("}")}if(Array.isArray(n.required)){var N=function(r){var t=genobj(e,r);g("if (%s === undefined) {",t),j("is required",t),g("missing++"),g("}")};g("if ((%s)) {","object"!==v?types.object(e):"true"),g("var missing = 0"),n.required.map(N),g("}"),f||(g("if (missing === 0) {"),b++)}if(n.uniqueItems&&("array"!==v&&g("if (%s) {",types.array(e)),g("if (!(unique(%s))) {",e),j("must be unique"),g("}"),"array"!==v&&g("}")),n["enum"]){var S=n["enum"].some(function(e){return"object"==typeof e}),A=S?function(r){return"JSON.stringify("+e+") !== JSON.stringify("+JSON.stringify(r)+")"}:function(r){return e+" !== "+JSON.stringify(r)};g("if (%s) {",n["enum"].map(A).join(" && ")||"false"),j("must be an enum value"),g("}")}if(n.dependencies&&("object"!==v&&g("if (%s) {",types.object(e)),Object.keys(n.dependencies).forEach(function(r){var t=n.dependencies[r];"string"==typeof t&&(t=[t]);var i=function(r){return genobj(e,r)+" !== undefined"};Array.isArray(t)&&(g("if (%s !== undefined && !(%s)) {",genobj(e,r),t.map(i).join(" && ")||"true"),j("dependencies not set"),g("}")),"object"==typeof t&&(g("if (%s !== undefined) {",genobj(e,r)),y(e,t,u,m),g("}"))}),"object"!==v&&g("}")),n.additionalProperties||n.additionalProperties===!1){"object"!==v&&g("if (%s) {",types.object(e));var x=d(),P=l("keys"),k=function(e){return P+"["+x+"] !== "+JSON.stringify(e)},J=function(e){return"!"+c(e)+".test("+P+"["+x+"])"},w=Object.keys(p||{}).map(k).concat(Object.keys(n.patternProperties||{}).map(J)).join(" && ")||"true";g("var %s = Object.keys(%s)",P,e)("for (var %s = 0; %s < %s.length; %s++) {",x,x,P,x)("if (%s) {",w),n.additionalProperties===!1?(m&&g("delete %s",e+"["+P+"["+x+"]]"),j("has additional properties",null,JSON.stringify(e+".")+" + "+P+"["+x+"]")):y(e+"["+P+"["+x+"]]",n.additionalProperties,u,m),g("}")("}"),"object"!==v&&g("}")}if(n.$ref){var M=get(t,i&&i.schemas||{},n.$ref);if(M){var E=r[n.$ref];E||(r[n.$ref]=function(e){return E(e)},E=compile(M,r,t,!1,i));var q=l("ref");a[q]=E,g("if (!(%s(%s))) {",q,e),j("referenced schema does not match"),g("}")}}if(n.not){var I=l("prev");g("var %s = errors",I),y(e,n.not,!1,m),g("if (%s === errors) {",I),j("negative schema matches"),g("} else {")("errors = %s",I)("}")}if(n.items&&!h){"array"!==v&&g("if (%s) {",types.array(e));var x=d();g("for (var %s = 0; %s < %s.length; %s++) {",x,x,e,x),y(e+"["+x+"]",n.items,u,m),g("}"),"array"!==v&&g("}")}if(n.patternProperties){"object"!==v&&g("if (%s) {",types.object(e));var P=l("keys"),x=d();g("var %s = Object.keys(%s)",P,e)("for (var %s = 0; %s < %s.length; %s++) {",x,x,P,x),Object.keys(n.patternProperties).forEach(function(r){var t=c(r);g("if (%s.test(%s)) {",t,P+"["+x+"]"),y(e+"["+P+"["+x+"]]",n.patternProperties[r],u,m),g("}")}),g("}"),"object"!==v&&g("}")}if(n.pattern){var $=c(n.pattern);"string"!==v&&g("if (%s) {",types.string(e)),g("if (!(%s.test(%s))) {",$,e),j("pattern mismatch"),g("}"),"string"!==v&&g("}")}if(n.allOf&&n.allOf.forEach(function(r){y(e,r,u,m)}),n.anyOf&&n.anyOf.length){var I=l("prev");n.anyOf.forEach(function(r,t){0===t?g("var %s = errors",I):g("if (errors !== %s) {",I)("errors = %s",I),y(e,r,!1,!1)}),n.anyOf.forEach(function(e,r){r&&g("}")}),g("if (%s !== errors) {",I),j("no schemas match"),g("}")}if(n.oneOf&&n.oneOf.length){var I=l("prev"),L=l("passes");g("var %s = errors",I)("var %s = 0",L),n.oneOf.forEach(function(r,t){y(e,r,!1,!1),g("if (%s === errors) {",I)("%s++",L)("} else {")("errors = %s",I)("}")}),g("if (%s !== 1) {",L),j("no (or more than one) schemas match"),g("}")}for(void 0!==n.multipleOf&&("number"!==v&&"integer"!==v&&g("if (%s) {",types.number(e)),g("if (!isMultipleOf(%s, %d)) {",e,n.multipleOf),j("has a remainder"),g("}"),"number"!==v&&"integer"!==v&&g("}")),void 0!==n.maxProperties&&("object"!==v&&g("if (%s) {",types.object(e)),g("if (Object.keys(%s).length > %d) {",e,n.maxProperties),j("has more properties than allowed"),g("}"),"object"!==v&&g("}")),void 0!==n.minProperties&&("object"!==v&&g("if (%s) {",types.object(e)),g("if (Object.keys(%s).length < %d) {",e,n.minProperties),j("has less properties than allowed"),g("}"),"object"!==v&&g("}")),void 0!==n.maxItems&&("array"!==v&&g("if (%s) {",types.array(e)),g("if (%s.length > %d) {",e,n.maxItems),j("has more items than allowed"),g("}"),"array"!==v&&g("}")),void 0!==n.minItems&&("array"!==v&&g("if (%s) {",types.array(e)),g("if (%s.length < %d) {",e,n.minItems),j("has less items than allowed"),g("}"),"array"!==v&&g("}")),void 0!==n.maxLength&&("string"!==v&&g("if (%s) {",types.string(e)),g("if (%s.length > %d) {",e,n.maxLength),j("has longer length than allowed"),g("}"),"string"!==v&&g("}")),void 0!==n.minLength&&("string"!==v&&g("if (%s) {",types.string(e)),g("if (%s.length < %d) {",e,n.minLength),j("has less length than allowed"),g("}"),"string"!==v&&g("}")),void 0!==n.minimum&&("number"!==v&&"integer"!==v&&g("if (%s) {",types.number(e)),g("if (%s %s %d) {",e,n.exclusiveMinimum?"<=":"<",n.minimum),j("is less than minimum"),g("}"),"number"!==v&&"integer"!==v&&g("}")),void 0!==n.maximum&&("number"!==v&&"integer"!==v&&g("if (%s) {",types.number(e)),g("if (%s %s %d) {",e,n.exclusiveMaximum?">=":">",n.maximum),j("is more than maximum"),g("}"),"number"!==v&&"integer"!==v&&g("}")),p&&Object.keys(p).forEach(function(r){Array.isArray(v)&&v.indexOf("null")!==-1&&g("if (%s !== null) {",e),y(genobj(e,r),p[r],u,m),Array.isArray(v)&&v.indexOf("null")!==-1&&g("}")});b--;)g("}")},g=genfun("function validate(data) {")("if (data === undefined) data = null")("validate.errors = null")("var errors = 0");return y("data",e,n,i&&i.filter),g("return errors === 0")("}"),g=g.toFunction(a),g.errors=null,Object.defineProperty&&Object.defineProperty(g,"error",{get:function(){return g.errors?g.errors.map(function(e){return e.field+" "+e.message}).join("\n"):""}}),g.toJSON=function(){return e},g};module.exports=function(e,r){return"string"==typeof e&&(e=JSON.parse(e)),compile(e,{},e,!0,r)},module.exports.filter=function(e,r){var t=module.exports(e,xtend(r,{filter:!0}));return function(e){return t(e),e}};

/***/ },

/***/ "./node_modules/generate-object-property/index.js":
/***/ function(module, exports, __webpack_require__) {

	var isProperty=__webpack_require__("./node_modules/is-property/is-property.js"),gen=function(r,e){return isProperty(e)?r+"."+e:r+"["+JSON.stringify(e)+"]"};gen.valid=isProperty,gen.property=function(r){return isProperty(r)?r:JSON.stringify(r)},module.exports=gen;

/***/ },

/***/ "./node_modules/is-property/is-property.js":
/***/ function(module, exports) {

	"use strict";function isProperty(u){return/^[$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc][$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc0-9\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19b0-\u19c0\u19c8\u19c9\u19d0-\u19d9\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1dc0-\u1de6\u1dfc-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f1\ua900-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]*$/.test(u)}module.exports=isProperty;

/***/ },

/***/ "./node_modules/generate-function/index.js":
/***/ function(module, exports, __webpack_require__) {

	var util=__webpack_require__("./node_modules/util/util.js"),INDENT_START=/[\{\[]/,INDENT_END=/[\}\]]/;module.exports=function(){var t=[],n=0,u=function(u){for(var r="";r.length<2*n;)r+="  ";t.push(r+u)},r=function(t){return t?INDENT_END.test(t.trim()[0])&&INDENT_START.test(t[t.length-1])?(n--,u(util.format.apply(util,arguments)),n++,r):INDENT_START.test(t[t.length-1])?(u(util.format.apply(util,arguments)),n++,r):INDENT_END.test(t.trim()[0])?(n--,u(util.format.apply(util,arguments)),r):(u(util.format.apply(util,arguments)),r):r};return r.toString=function(){return t.join("\n")},r.toFunction=function(t){var n="return ("+r.toString()+")",u=Object.keys(t||{}).map(function(t){return t}),l=u.map(function(n){return t[n]});return Function.apply(null,u.concat(n)).apply(null,l)},arguments.length&&r.apply(null,arguments),r};

/***/ },

/***/ "./node_modules/jsonpointer/jsonpointer.js":
/***/ function(module, exports) {

	var untilde=function(r){return r.replace(/~./g,function(r){switch(r){case"~0":return"~";case"~1":return"/"}throw new Error("Invalid tilde escape: "+r)})},traverse=function(r,e,t){var n=untilde(e.shift());if(!r.hasOwnProperty(n))return null;if(0!==e.length)return traverse(r[n],e,t);if("undefined"==typeof t)return r[n];var i=r[n];return null===t?delete r[n]:r[n]=t,i},validate_input=function(r,e){if("object"!=typeof r)throw new Error("Invalid input object.");if(""===e)return[];if(!e)throw new Error("Invalid JSON pointer.");e=e.split("/");var t=e.shift();if(""!==t)throw new Error("Invalid JSON pointer.");return e},get=function(r,e){return e=validate_input(r,e),0===e.length?r:traverse(r,e)},set=function(r,e,t){if(e=validate_input(r,e),0===e.length)throw new Error("Invalid JSON pointer for set.");return traverse(r,e,t)};exports.get=get,exports.set=set;

/***/ },

/***/ "./node_modules/xtend/immutable.js":
/***/ function(module, exports) {

	function extend(){for(var r={},e=0;e<arguments.length;e++){var t=arguments[e];for(var n in t)hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}module.exports=extend;var hasOwnProperty=Object.prototype.hasOwnProperty;

/***/ },

/***/ "./node_modules/is-my-json-valid/formats.js":
/***/ function(module, exports) {

	exports["date-time"]=/^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-[0-9]{2}[tT ]\d{2}:\d{2}:\d{2}(\.\d+)?([zZ]|[+-]\d{2}:\d{2})$/,exports.date=/^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-[0-9]{2}$/,exports.time=/^\d{2}:\d{2}:\d{2}$/,exports.email=/^\S+@\S+$/,exports["ip-address"]=exports.ipv4=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,exports.ipv6=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,exports.uri=/^[a-zA-Z][a-zA-Z0-9+-.]*:[^\s]*$/,exports.color=/(#?([0-9A-Fa-f]{3,6})\b)|(aqua)|(black)|(blue)|(fuchsia)|(gray)|(green)|(lime)|(maroon)|(navy)|(olive)|(orange)|(purple)|(red)|(silver)|(teal)|(white)|(yellow)|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\))/,exports.hostname=/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])(\.([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]))*$/,exports.alpha=/^[a-zA-Z]+$/,exports.alphanumeric=/^[a-zA-Z0-9]+$/,exports.style=/\s*(.+?):\s*([^;]+);?/g,exports.phone=/^\+(?:[0-9] ?){6,14}[0-9]$/,exports["utc-millisec"]=/^[0-9]{1,15}\.?[0-9]{0,15}$/;

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/lib/util/comment-event-generator.js":
/***/ function(module, exports) {

	"use strict";function emitComments(t,e,n,o){t.length>0&&t.forEach(function(t){var m=n.indexOf(t.loc);m>=0?n.splice(m,1):(n.push(t.loc),e.emit(t.type+o,t))})}function emitCommentsEnter(t,e){emitComments(e,t.emitter,t.commentLocsEnter,"Comment")}function emitCommentsExit(t,e){emitComments(e,t.emitter,t.commentLocsExit,"Comment:exit")}function CommentEventGenerator(t,e){this.original=t,this.emitter=t.emitter,this.sourceCode=e,this.commentLocsEnter=[],this.commentLocsExit=[]}CommentEventGenerator.prototype={constructor:CommentEventGenerator,enterNode:function(t){var e=this.sourceCode.getComments(t);emitCommentsEnter(this,e.leading),this.original.enterNode(t),emitCommentsEnter(this,e.trailing)},leaveNode:function(t){var e=this.sourceCode.getComments(t);emitCommentsExit(this,e.trailing),this.original.leaveNode(t),emitCommentsExit(this,e.leading)}},module.exports=CommentEventGenerator;

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/lib/util/node-event-generator.js":
/***/ function(module, exports) {

	"use strict";function NodeEventGenerator(e){this.emitter=e}NodeEventGenerator.prototype={constructor:NodeEventGenerator,enterNode:function(e){this.emitter.emit(e.type,e)},leaveNode:function(e){this.emitter.emit(e.type+":exit",e)}},module.exports=NodeEventGenerator;

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/lib/util/source-code.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function validate(e){if(!e.tokens)throw new Error("AST is missing the tokens array.");if(!e.comments)throw new Error("AST is missing the comments array.");if(!e.loc)throw new Error("AST is missing location information.");if(!e.range)throw new Error("AST is missing range information")}function findJSDocComment(e,t){if(e)for(var n=e.length-1;n>=0;n--)if("Block"===e[n].type&&"*"===e[n].value.charAt(0)){if(t-e[n].loc.end.line<=1)return e[n];break}return null}function looksLikeExport(e){return"ExportDefaultDeclaration"===e.type||"ExportNamedDeclaration"===e.type||"ExportAllDeclaration"===e.type||"ExportSpecifier"===e.type}function SourceCode(e,t){validate(t),this.hasBOM=65279===e.charCodeAt(0),this.text=this.hasBOM?e.slice(1):e,this.ast=t,this.lines=SourceCode.splitLines(this.text),this.tokensAndComments=t.tokens.concat(t.comments).sort(function(e,t){return e.range[0]-t.range[0]});var n=createTokenStore(t.tokens);Object.keys(n).forEach(function(e){this[e]=n[e]},this);var r=createTokenStore(this.tokensAndComments);this.getTokenOrCommentBefore=r.getTokenBefore,this.getTokenOrCommentAfter=r.getTokenAfter,Object.freeze(this),Object.freeze(this.lines)}var lodash=__webpack_require__("./node_modules/lodash/lodash.js"),createTokenStore=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/token-store.js"),Traverser=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/util/traverser.js");SourceCode.splitLines=function(e){return e.split(/\r\n|\r|\n|\u2028|\u2029/g)},SourceCode.prototype={constructor:SourceCode,getText:function(e,t,n){return e?this.text.slice(Math.max(e.range[0]-(t||0),0),e.range[1]+(n||0)):this.text},getLines:function(){return this.lines},getAllComments:function(){return this.ast.comments},getComments:function(e){var t=e.leadingComments||[],n=e.trailingComments||[];return"Program"===e.type&&0===e.body.length&&(t=e.comments),{leading:t,trailing:n}},getJSDocComment:function(e){var t=e.parent;switch(e.type){case"ClassDeclaration":case"FunctionDeclaration":return looksLikeExport(t)?findJSDocComment(t.leadingComments,t.loc.start.line):findJSDocComment(e.leadingComments,e.loc.start.line);case"ClassExpression":return findJSDocComment(t.parent.leadingComments,t.parent.loc.start.line);case"ArrowFunctionExpression":case"FunctionExpression":if("CallExpression"!==t.type&&"NewExpression"!==t.type){for(;t&&!t.leadingComments&&!/Function/.test(t.type)&&"MethodDefinition"!==t.type&&"Property"!==t.type;)t=t.parent;return t&&"FunctionDeclaration"!==t.type?findJSDocComment(t.leadingComments,t.loc.start.line):null}if(e.leadingComments)return findJSDocComment(e.leadingComments,e.loc.start.line);default:return null}},getNodeByRangeIndex:function(e){var t=null,n=null,r=new Traverser;return r.traverse(this.ast,{enter:function(r,o){r.range[0]<=e&&e<r.range[1]?(t=r,n=o):this.skip()},leave:function(e){e===t&&this["break"]()}}),t?lodash.assign({parent:n},t):null},isSpaceBetweenTokens:function(e,t){var n=this.text.slice(e.range[1],t.range[0]);return/\s/.test(n.replace(/\/\*.*?\*\//g,""))}},module.exports=SourceCode;

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/lib/token-store.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(n){function e(e,t){var r,o=[];for(r=Math.max(0,e);r<t&&r<u;r++)o.push(n[r]);return o}function t(n){var e=n.range[1],t=g[e];return"undefined"==typeof t&&(t=f[e]-1),isNaN(t)&&(t=u-1),t}var r,u,o,a={},f=Object.create(null),g=Object.create(null);for(r=0,u=n.length;r<u;r++)o=n[r].range,f[o[0]]=r,g[o[1]]=r;return a.getTokensBefore=function(n,t){var r=f[n.range[0]];return e(r-(t||0),r)},a.getTokenBefore=function(e,t){return n[f[e.range[0]]-(t||0)-1]},a.getTokensAfter=function(n,r){var u=t(n)+1;return e(u,u+(r||0))},a.getTokenAfter=function(e,r){return n[t(e)+(r||0)+1]},a.getTokens=function(n,r,u){return e(f[n.range[0]]-(r||0),t(n)+(u||0)+1)},a.getFirstTokens=function(n,r){var u=f[n.range[0]];return e(u,Math.min(t(n)+1,u+(r||0)))},a.getFirstToken=function(e,t){return n[f[e.range[0]]+(t||0)]},a.getLastTokens=function(n,r){var u=t(n)+1;return e(Math.max(f[n.range[0]],u-(r||0)),u)},a.getLastToken=function(e,r){return n[t(e)-(r||0)]},a.getTokensBetween=function(n,r,u){return u=u||0,e(t(n)+1-u,f[r.range[0]]+u)},a.getTokenByRangeStart=function(e){return n[f[e]]||null},a};

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/lib/util/traverser.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function Traverser(){var e=Object.create(new estraverse.Controller),r=e.traverse;return e.traverse=function(e,t){return t.fallback=Traverser.getKeys,r.call(this,e,t)},e}var estraverse=__webpack_require__("./node_modules/eslint2/node_modules/estraverse/estraverse.js"),KEY_BLACKLIST=["parent","leadingComments","trailingComments"];Traverser.getKeys=function(e){return Object.keys(e).filter(function(e){return KEY_BLACKLIST.indexOf(e)===-1})},module.exports=Traverser;

/***/ },

/***/ "./node_modules/eslint2/node_modules/estraverse/estraverse.js":
/***/ function(module, exports, __webpack_require__) {

	!function e(t){"use strict";function n(){}function r(e){var t,n,i={};for(t in e)e.hasOwnProperty(t)&&(n=e[t],"object"==typeof n&&null!==n?i[t]=r(n):i[t]=n);return i}function i(e){var t,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}function o(e,t){var n,r,i,o;for(r=e.length,i=0;r;)n=r>>>1,o=i+n,t(e[o])?r=n:(i=o+1,r-=n+1);return i}function a(e,t){var n,r,i,o;for(r=e.length,i=0;r;)n=r>>>1,o=i+n,t(e[o])?(i=o+1,r-=n+1):r=n;return i}function s(e,t){var n,r,i,o=b(t);for(r=0,i=o.length;r<i;r+=1)n=o[r],e[n]=t[n];return e}function l(e,t){this.parent=e,this.key=t}function p(e,t,n,r){this.node=e,this.path=t,this.wrap=n,this.ref=r}function c(){}function u(e){return null!=e&&("object"==typeof e&&"string"==typeof e.type)}function f(e,t){return(e===_.ObjectExpression||e===_.ObjectPattern)&&"properties"===t}function h(e,t){var n=new c;return n.traverse(e,t)}function m(e,t){var n=new c;return n.replace(e,t)}function d(e,t){var n;return n=o(t,function(t){return t.range[0]>e.range[0]}),e.extendedRange=[e.range[0],e.range[1]],n!==t.length&&(e.extendedRange[1]=t[n].range[0]),n-=1,n>=0&&(e.extendedRange[0]=t[n].range[1]),e}function y(e,t,n){var i,o,a,s,l=[];if(!e.range)throw new Error("attachComments needs range information");if(!n.length){if(t.length){for(a=0,o=t.length;a<o;a+=1)i=r(t[a]),i.extendedRange=[0,e.range[0]],l.push(i);e.leadingComments=l}return e}for(a=0,o=t.length;a<o;a+=1)l.push(d(r(t[a]),n));return s=0,h(e,{enter:function(e){for(var t;s<l.length&&(t=l[s],!(t.extendedRange[1]>e.range[0]));)t.extendedRange[1]===e.range[0]?(e.leadingComments||(e.leadingComments=[]),e.leadingComments.push(t),l.splice(s,1)):s+=1;return s===l.length?x.Break:l[s].extendedRange[0]>e.range[1]?x.Skip:void 0}}),s=0,h(e,{leave:function(e){for(var t;s<l.length&&(t=l[s],!(e.range[1]<t.extendedRange[0]));)e.range[1]===t.extendedRange[0]?(e.trailingComments||(e.trailingComments=[]),e.trailingComments.push(t),l.splice(s,1)):s+=1;return s===l.length?x.Break:l[s].extendedRange[0]>e.range[1]?x.Skip:void 0}}),e}var _,g,x,E,S,b,k,v,w;return g=Array.isArray,g||(g=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),n(i),n(a),S=Object.create||function(){function e(){}return function(t){return e.prototype=t,new e}}(),b=Object.keys||function(e){var t,n=[];for(t in e)n.push(t);return n},_={AssignmentExpression:"AssignmentExpression",AssignmentPattern:"AssignmentPattern",ArrayExpression:"ArrayExpression",ArrayPattern:"ArrayPattern",ArrowFunctionExpression:"ArrowFunctionExpression",AwaitExpression:"AwaitExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ClassBody:"ClassBody",ClassDeclaration:"ClassDeclaration",ClassExpression:"ClassExpression",ComprehensionBlock:"ComprehensionBlock",ComprehensionExpression:"ComprehensionExpression",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DebuggerStatement:"DebuggerStatement",DirectiveStatement:"DirectiveStatement",DoWhileStatement:"DoWhileStatement",EmptyStatement:"EmptyStatement",ExportAllDeclaration:"ExportAllDeclaration",ExportDefaultDeclaration:"ExportDefaultDeclaration",ExportNamedDeclaration:"ExportNamedDeclaration",ExportSpecifier:"ExportSpecifier",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForInStatement:"ForInStatement",ForOfStatement:"ForOfStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",GeneratorExpression:"GeneratorExpression",Identifier:"Identifier",IfStatement:"IfStatement",ImportDeclaration:"ImportDeclaration",ImportDefaultSpecifier:"ImportDefaultSpecifier",ImportNamespaceSpecifier:"ImportNamespaceSpecifier",ImportSpecifier:"ImportSpecifier",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",MetaProperty:"MetaProperty",MethodDefinition:"MethodDefinition",ModuleSpecifier:"ModuleSpecifier",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",ObjectPattern:"ObjectPattern",Program:"Program",Property:"Property",RestElement:"RestElement",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SpreadElement:"SpreadElement",Super:"Super",SwitchStatement:"SwitchStatement",SwitchCase:"SwitchCase",TaggedTemplateExpression:"TaggedTemplateExpression",TemplateElement:"TemplateElement",TemplateLiteral:"TemplateLiteral",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement",YieldExpression:"YieldExpression"},E={AssignmentExpression:["left","right"],AssignmentPattern:["left","right"],ArrayExpression:["elements"],ArrayPattern:["elements"],ArrowFunctionExpression:["params","body"],AwaitExpression:["argument"],BlockStatement:["body"],BinaryExpression:["left","right"],BreakStatement:["label"],CallExpression:["callee","arguments"],CatchClause:["param","body"],ClassBody:["body"],ClassDeclaration:["id","superClass","body"],ClassExpression:["id","superClass","body"],ComprehensionBlock:["left","right"],ComprehensionExpression:["blocks","filter","body"],ConditionalExpression:["test","consequent","alternate"],ContinueStatement:["label"],DebuggerStatement:[],DirectiveStatement:[],DoWhileStatement:["body","test"],EmptyStatement:[],ExportAllDeclaration:["source"],ExportDefaultDeclaration:["declaration"],ExportNamedDeclaration:["declaration","specifiers","source"],ExportSpecifier:["exported","local"],ExpressionStatement:["expression"],ForStatement:["init","test","update","body"],ForInStatement:["left","right","body"],ForOfStatement:["left","right","body"],FunctionDeclaration:["id","params","body"],FunctionExpression:["id","params","body"],GeneratorExpression:["blocks","filter","body"],Identifier:[],IfStatement:["test","consequent","alternate"],ImportDeclaration:["specifiers","source"],ImportDefaultSpecifier:["local"],ImportNamespaceSpecifier:["local"],ImportSpecifier:["imported","local"],Literal:[],LabeledStatement:["label","body"],LogicalExpression:["left","right"],MemberExpression:["object","property"],MetaProperty:["meta","property"],MethodDefinition:["key","value"],ModuleSpecifier:[],NewExpression:["callee","arguments"],ObjectExpression:["properties"],ObjectPattern:["properties"],Program:["body"],Property:["key","value"],RestElement:["argument"],ReturnStatement:["argument"],SequenceExpression:["expressions"],SpreadElement:["argument"],Super:[],SwitchStatement:["discriminant","cases"],SwitchCase:["test","consequent"],TaggedTemplateExpression:["tag","quasi"],TemplateElement:[],TemplateLiteral:["quasis","expressions"],ThisExpression:[],ThrowStatement:["argument"],TryStatement:["block","handler","finalizer"],UnaryExpression:["argument"],UpdateExpression:["argument"],VariableDeclaration:["declarations"],VariableDeclarator:["id","init"],WhileStatement:["test","body"],WithStatement:["object","body"],YieldExpression:["argument"]},k={},v={},w={},x={Break:k,Skip:v,Remove:w},l.prototype.replace=function(e){this.parent[this.key]=e},l.prototype.remove=function(){return g(this.parent)?(this.parent.splice(this.key,1),!0):(this.replace(null),!1)},c.prototype.path=function(){function e(e,t){if(g(t))for(r=0,i=t.length;r<i;++r)e.push(t[r]);else e.push(t)}var t,n,r,i,o,a;if(!this.__current.path)return null;for(o=[],t=2,n=this.__leavelist.length;t<n;++t)a=this.__leavelist[t],e(o,a.path);return e(o,this.__current.path),o},c.prototype.type=function(){var e=this.current();return e.type||this.__current.wrap},c.prototype.parents=function(){var e,t,n;for(n=[],e=1,t=this.__leavelist.length;e<t;++e)n.push(this.__leavelist[e].node);return n},c.prototype.current=function(){return this.__current.node},c.prototype.__execute=function(e,t){var n,r;return r=void 0,n=this.__current,this.__current=t,this.__state=null,e&&(r=e.call(this,t.node,this.__leavelist[this.__leavelist.length-1].node)),this.__current=n,r},c.prototype.notify=function(e){this.__state=e},c.prototype.skip=function(){this.notify(v)},c.prototype["break"]=function(){this.notify(k)},c.prototype.remove=function(){this.notify(w)},c.prototype.__initialize=function(e,t){this.visitor=t,this.root=e,this.__worklist=[],this.__leavelist=[],this.__current=null,this.__state=null,this.__fallback=null,"iteration"===t.fallback?this.__fallback=b:"function"==typeof t.fallback&&(this.__fallback=t.fallback),this.__keys=E,t.keys&&(this.__keys=s(S(this.__keys),t.keys))},c.prototype.traverse=function(e,t){var n,r,i,o,a,s,l,c,h,m,d,y;for(this.__initialize(e,t),y={},n=this.__worklist,r=this.__leavelist,n.push(new p(e,null,null,null)),r.push(new p(null,null,null,null));n.length;)if(i=n.pop(),i!==y){if(i.node){if(s=this.__execute(t.enter,i),this.__state===k||s===k)return;if(n.push(y),r.push(i),this.__state===v||s===v)continue;if(o=i.node,a=o.type||i.wrap,m=this.__keys[a],!m){if(!this.__fallback)throw new Error("Unknown node type "+a+".");m=this.__fallback(o)}for(c=m.length;(c-=1)>=0;)if(l=m[c],d=o[l])if(g(d)){for(h=d.length;(h-=1)>=0;)if(d[h]){if(f(a,m[c]))i=new p(d[h],[l,h],"Property",null);else{if(!u(d[h]))continue;i=new p(d[h],[l,h],null,null)}n.push(i)}}else u(d)&&n.push(new p(d,l,null,null))}}else if(i=r.pop(),s=this.__execute(t.leave,i),this.__state===k||s===k)return},c.prototype.replace=function(e,t){function n(e){var t,n,i,o;if(e.ref.remove())for(n=e.ref.key,o=e.ref.parent,t=r.length;t--;)if(i=r[t],i.ref&&i.ref.parent===o){if(i.ref.key<n)break;--i.ref.key}}var r,i,o,a,s,c,h,m,d,y,_,x,E;for(this.__initialize(e,t),_={},r=this.__worklist,i=this.__leavelist,x={root:e},c=new p(e,null,null,new l(x,"root")),r.push(c),i.push(c);r.length;)if(c=r.pop(),c!==_){if(s=this.__execute(t.enter,c),void 0!==s&&s!==k&&s!==v&&s!==w&&(c.ref.replace(s),c.node=s),this.__state!==w&&s!==w||(n(c),c.node=null),this.__state===k||s===k)return x.root;if(o=c.node,o&&(r.push(_),i.push(c),this.__state!==v&&s!==v)){if(a=o.type||c.wrap,d=this.__keys[a],!d){if(!this.__fallback)throw new Error("Unknown node type "+a+".");d=this.__fallback(o)}for(h=d.length;(h-=1)>=0;)if(E=d[h],y=o[E])if(g(y)){for(m=y.length;(m-=1)>=0;)if(y[m]){if(f(a,d[h]))c=new p(y[m],[E,m],"Property",new l(y,m));else{if(!u(y[m]))continue;c=new p(y[m],[E,m],null,new l(y,m))}r.push(c)}}else u(y)&&r.push(new p(y,E,null,new l(o,E)))}}else if(c=i.pop(),s=this.__execute(t.leave,c),void 0!==s&&s!==k&&s!==v&&s!==w&&c.ref.replace(s),this.__state!==w&&s!==w||n(c),this.__state===k||s===k)return x.root;return x.root},t.version=__webpack_require__("./node_modules/eslint2/node_modules/estraverse/package.json").version,t.Syntax=_,t.traverse=h,t.replace=m,t.attachComments=y,t.VisitorKeys=E,t.VisitorOption=x,t.Controller=c,t.cloneEnvironment=function(){return e({})},t}(exports);

/***/ },

/***/ "./node_modules/eslint2/node_modules/estraverse/package.json":
/***/ function(module, exports) {

	module.exports = {
		"_args": [
			[
				"estraverse@^4.2.0",
				"/Users/fkling/git/astexplorer/node_modules/eslint2/node_modules/eslint"
			]
		],
		"_from": "estraverse@>=4.2.0 <5.0.0",
		"_id": "estraverse@4.2.0",
		"_inCache": true,
		"_installable": true,
		"_location": "/eslint2/estraverse",
		"_nodeVersion": "0.12.9",
		"_npmOperationalInternal": {
			"host": "packages-12-west.internal.npmjs.com",
			"tmp": "tmp/estraverse-4.2.0.tgz_1457646738925_0.7118953282479197"
		},
		"_npmUser": {
			"email": "nicholas@nczconsulting.com",
			"name": "nzakas"
		},
		"_npmVersion": "2.14.9",
		"_phantomChildren": {},
		"_requested": {
			"name": "estraverse",
			"raw": "estraverse@^4.2.0",
			"rawSpec": "^4.2.0",
			"scope": null,
			"spec": ">=4.2.0 <5.0.0",
			"type": "range"
		},
		"_requiredBy": [
			"/eslint2/eslint"
		],
		"_resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.2.0.tgz",
		"_shasum": "0dee3fed31fcd469618ce7342099fc1afa0bdb13",
		"_shrinkwrap": null,
		"_spec": "estraverse@^4.2.0",
		"_where": "/Users/fkling/git/astexplorer/node_modules/eslint2/node_modules/eslint",
		"bugs": {
			"url": "https://github.com/estools/estraverse/issues"
		},
		"dependencies": {},
		"description": "ECMAScript JS AST traversal functions",
		"devDependencies": {
			"babel-preset-es2015": "^6.3.13",
			"babel-register": "^6.3.13",
			"chai": "^2.1.1",
			"espree": "^1.11.0",
			"gulp": "^3.8.10",
			"gulp-bump": "^0.2.2",
			"gulp-filter": "^2.0.0",
			"gulp-git": "^1.0.1",
			"gulp-tag-version": "^1.2.1",
			"jshint": "^2.5.6",
			"mocha": "^2.1.0"
		},
		"directories": {},
		"dist": {
			"shasum": "0dee3fed31fcd469618ce7342099fc1afa0bdb13",
			"tarball": "https://registry.npmjs.org/estraverse/-/estraverse-4.2.0.tgz"
		},
		"engines": {
			"node": ">=0.10.0"
		},
		"gitHead": "6f6a4e99653908e859c7c10d04d9518bf4844ede",
		"homepage": "https://github.com/estools/estraverse",
		"license": "BSD-2-Clause",
		"main": "estraverse.js",
		"maintainers": [
			{
				"email": "utatane.tea@gmail.com",
				"name": "constellation"
			},
			{
				"email": "npm@michael.ficarra.me",
				"name": "michaelficarra"
			},
			{
				"email": "nicholas@nczconsulting.com",
				"name": "nzakas"
			}
		],
		"name": "estraverse",
		"optionalDependencies": {},
		"readme": "ERROR: No README data found!",
		"repository": {
			"type": "git",
			"url": "git+ssh://git@github.com/estools/estraverse.git"
		},
		"scripts": {
			"lint": "jshint estraverse.js",
			"test": "npm run-script lint && npm run-script unit-test",
			"unit-test": "mocha --compilers js:babel-register"
		},
		"version": "4.2.0"
	};

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/lib/rule-context.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function RuleContext(e,t,o,s,i,n,r,g){this.id=e,this.options=s,this.settings=i,this.parserOptions=n,this.parserPath=r,this.meta=g,this.eslint=t,this.severity=o,Object.freeze(this)}var RuleFixer=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/util/rule-fixer.js"),PASSTHROUGHS=["getAncestors","getDeclaredVariables","getFilename","getScope","markVariableAsUsed","getAllComments","getComments","getFirstToken","getFirstTokens","getJSDocComment","getLastToken","getLastTokens","getNodeByRangeIndex","getSource","getSourceLines","getTokenAfter","getTokenBefore","getTokenByRangeStart","getTokens","getTokensAfter","getTokensBefore","getTokensBetween"];RuleContext.prototype={constructor:RuleContext,getSourceCode:function(){return this.eslint.getSourceCode()},report:function(e,t,o,s){var i,n=null;return 1===arguments.length?(i=e,"function"==typeof i.fix&&(n=i.fix(new RuleFixer)),void this.eslint.report(this.id,this.severity,i.node,i.loc||i.node.loc.start,i.message,i.data,n,this.meta)):void this.eslint.report(this.id,this.severity,e,t,o,s,this.meta)}},PASSTHROUGHS.forEach(function(e){this[e]=function(t,o,s,i,n){return this.eslint[e](t,o,s,i,n)}},RuleContext.prototype),module.exports=RuleContext;

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/lib/util/rule-fixer.js":
/***/ function(module, exports) {

	"use strict";function insertTextAt(e,t){return{range:[e,e],text:t}}function RuleFixer(){Object.freeze(this)}RuleFixer.prototype={constructor:RuleFixer,insertTextAfter:function(e,t){return this.insertTextAfterRange(e.range,t)},insertTextAfterRange:function(e,t){return insertTextAt(e[1],t)},insertTextBefore:function(e,t){return this.insertTextBeforeRange(e.range,t)},insertTextBeforeRange:function(e,t){return insertTextAt(e[0],t)},replaceText:function(e,t){return this.replaceTextRange(e.range,t)},replaceTextRange:function(e,t){return{range:e,text:t}},remove:function(e){return this.removeRange(e.range)},removeRange:function(e){return{range:e,text:""}}},module.exports=RuleFixer;

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/lib/timing.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";function alignLeft(n,e,t){return n+new Array(e-n.length+1).join(t||" ")}function alignRight(n,e,t){return new Array(e-n.length+1).join(t||" ")+n}function display(n){var e=0,t=Object.keys(n).map(function(t){var r=n[t];return e+=r,[t,r]}).sort(function(n,e){return e[1]-n[1]}).slice(0,10);t.forEach(function(n){n.push((100*n[1]/e).toFixed(1)+"%"),n[1]=n[1].toFixed(3)}),t.unshift(HEADERS);var r=[];t.forEach(function(n){var e,t,i=n.length;for(e=0;e<i;e++)t=n[e].length,(!r[e]||t>r[e])&&(r[e]=t)});var i=t.map(function(n){return n.map(function(n,e){return ALIGN[e](n,r[e])}).join(" | ")});i.splice(1,0,r.map(function(n,e){return 0!==e&&e!==r.length-1&&n++,ALIGN[e](":",n+1,"-")}).join("|")),console.log(i.join("\n"))}var enabled=!!process.env.TIMING,HEADERS=["Rule","Time (ms)","Relative"],ALIGN=[alignLeft,alignRight,alignRight];module.exports=function(){function n(n,t){return"undefined"==typeof e[n]&&(e[n]=0),function(){var r=process.hrtime();t.apply(null,Array.prototype.slice.call(arguments)),r=process.hrtime(r),e[n]+=1e3*r[0]+r[1]/1e6}}var e=Object.create(null);return enabled&&process.on("exit",function(){display(e)}),{time:n,enabled:enabled}}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ },

/***/ "./src/parsers/js/utils/eslintUtils.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function formatResults(e){return 0===e.length?"Lint rule not fired.":e.map(formatResult).join("").trim()}function formatResult(e){var t="-".repeat(e.column-1)+"^";return"\n// "+e.message+" (at "+e.line+":"+e.column+")\n   "+e.source+"\n// "+t+"\n"}function defineRule(e,t){var u=(0,_compileModule2["default"])(t);e.define("astExplorerRule",u["default"]||u)}function runRule(e,t,u){var r=(0,_babelEslint.parseNoPatch)(e,{}),l=t.verify(new u(e,r),{rules:{astExplorerRule:2}});return formatResults(l)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.formatResults=formatResults,exports.formatResult=formatResult,exports.defineRule=defineRule,exports.runRule=runRule;var _compileModule=__webpack_require__("./src/parsers/utils/compileModule.js"),_compileModule2=_interopRequireDefault(_compileModule),_babelEslint=__webpack_require__("./node_modules/babel-eslint/index.js");

/***/ },

/***/ "./node_modules/babel-eslint/index.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, process) {function createModule(e){var t=new Module(e);return t.filename=e,t.paths=Module._nodeModulePaths(path.dirname(e)),t}function monkeypatch(){function e(e){if(e.decorators)for(var t=0;t<e.decorators.length;t++)e.decorators[t].expression&&this.visit(e.decorators[t])}function r(e){var t=_[e.type];if(t)for(var o=0;o<t.length;o++){var s=t[o],n=w[s],i=e[s];if(null!=n&&null!=i)if("loop"===n.type)for(var l=0;l<i.length;l++)if(Array.isArray(n.values))for(var p=0;p<n.values.length;p++)a.call(this,i[l][n.values[p]]);else a.call(this,i[l]);else if("single"===n.type)a.call(this,i);else if("typeAnnotation"===n.type)r.call(this,e.typeAnnotation);else if("typeParameters"===n.type)for(var c=0;c<e.typeParameters.params.length;c++)a.call(this,e.typeParameters.params[c]);else"id"===n.type&&("Identifier"===e.id.type?a.call(this,e.id):r.call(this,e.id))}}function a(e){e.typeAnnotation?r.call(this,e.typeAnnotation):"Identifier"===e.type?this.visit(e):r.call(this,e)}function o(e,t){var r=e.__currentScope,a=new m.Scope(e,"type-parameters",r,t,(!1));e.__nestScope(a);for(var o=0;o<t.typeParameters.params.length;o++){var s=t.typeParameters.params[o];a.__define(s,new T("TypeParameter",s,s))}return a.__define=function(){return r.__define.apply(r,arguments)},a}function s(e,t){this.currentScope().variableScope.__define(t,new T("Variable",t,e,null,null,null))}if(!hasPatched){hasPatched=!0;var n;try{n=Module._resolveFilename("eslint",module.parent)}catch(i){try{n=/*require.resolve*/(!(function webpackMissingModule() { var e = new Error("Cannot find module \"eslint\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))}catch(i){throw new ReferenceError("couldn't resolve eslint")}}var l=createModule(n),p=Module._resolveFilename("escope",l),c=createModule(p),u=c;try{var y=Module._resolveFilename("esrecurse",l);u=createModule(y)}catch(i){}var h=[];estraverse=u.require("estraverse"),h.push(estraverse),assign(estraverse.VisitorKeys,t.VISITOR_KEYS);try{var v=l.require("estraverse-fb");h.push(v),assign(v.VisitorKeys,t.VISITOR_KEYS)}catch(i){}var d=l.require("estraverse");d!==v&&(h.push(d),assign(d.VisitorKeys,t.VISITOR_KEYS)),h.forEach(function(e){e.VisitorKeys.MethodDefinition.push("decorators"),e.VisitorKeys.Property.push("decorators")});var m=!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),f=m.analyze;m.analyze=function(e,t){t.ecmaVersion=eslintOptions.ecmaVersion,t.sourceType=eslintOptions.sourceType,void 0!==eslintOptions.globalReturn&&(t.nodejsScope=eslintOptions.globalReturn);var r=f.call(this,e,t);return r};var g;try{g=Module._resolveFilename("./referencer",c)}catch(i){throw new ReferenceError("couldn't resolve escope/referencer")}var b=createModule(g),P=!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());P.__esModule&&(P=P["default"]);var E;try{E=Module._resolveFilename("./definition",b)}catch(i){throw new ReferenceError("couldn't resolve escope/definition")}var T=!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Definition,_=pick(t.VISITOR_KEYS,function(e){return t.FLIPPED_ALIAS_KEYS.Flow.concat(["ArrayPattern","ClassDeclaration","ClassExpression","FunctionDeclaration","FunctionExpression","Identifier","ObjectPattern","RestElement"]).indexOf(e)===-1}),w={callProperties:{type:"loop",values:["value"]},indexers:{type:"loop",values:["key","value"]},properties:{type:"loop",values:["value"]},types:{type:"loop"},params:{type:"loop"},argument:{type:"single"},elementType:{type:"single"},qualification:{type:"single"},rest:{type:"single"},returnType:{type:"single"},typeAnnotation:{type:"typeAnnotation"},typeParameters:{type:"typeParameters"},id:{type:"id"}},S=P.prototype.visitClass;P.prototype.visitClass=function(t){e.call(this,t);var r;if(t.typeParameters&&(r=o(this.scopeManager,t)),t["implements"])for(var s=0;s<t["implements"].length;s++)a.call(this,t["implements"][s]);if(t.superTypeParameters)for(var n=0;n<t.superTypeParameters.params.length;n++)a.call(this,t.superTypeParameters.params[n]);S.call(this,t),r&&this.close(t)};var O=P.prototype.visitProperty;P.prototype.visitProperty=function(t){t.value&&"TypeCastExpression"===t.value.type&&r.call(this,t.value),e.call(this,t),O.call(this,t)},P.prototype.ClassProperty=function(e){e.typeAnnotation&&r.call(this,e.typeAnnotation),this.visitProperty(e)};var V=P.prototype.visitFunction;P.prototype.visitFunction=function(e){var r;if(e.typeParameters&&(r=o(this.scopeManager,e)),e.returnType&&a.call(this,e.returnType),e.params)for(var s=0;s<e.params.length;s++){var n=e.params[s];n.typeAnnotation?a.call(this,n):t.isAssignmentPattern(n)&&n.left.typeAnnotation&&a.call(this,n.left)}h.forEach(function(e){e.VisitorKeys.ObjectPattern=["properties"],e.VisitorKeys.ArrayPattern=["elements"]}),V.call(this,e),h.forEach(function(e){e.VisitorKeys.ObjectPattern=t.VISITOR_KEYS.ObjectPattern,e.VisitorKeys.ArrayPattern=t.VISITOR_KEYS.ArrayPattern}),r&&this.close(e)};var A=P.prototype.VariableDeclaration;P.prototype.VariableDeclaration=function(e){if(e.declarations)for(var t=0;t<e.declarations.length;t++){var r=e.declarations[t].id,o=r.typeAnnotation;o&&a.call(this,o)}A.call(this,e)},P.prototype.TypeAlias=function(e){s.call(this,e,e.id);var t;e.typeParameters&&(t=o(this.scopeManager,e)),e.right&&r.call(this,e.right),t&&this.close(e)},P.prototype.DeclareModule=P.prototype.DeclareFunction=P.prototype.DeclareVariable=P.prototype.DeclareClass=function(e){e.id&&s.call(this,e,e.id);var t;e.typeParameters&&(t=o(this.scopeManager,e)),t&&this.close(e)}}}var babylonToEspree=__webpack_require__("./node_modules/babel-eslint/babylon-to-espree/index.js"),assign=__webpack_require__("./node_modules/lodash.assign/index.js"),pick=__webpack_require__("./node_modules/lodash.pickby/index.js"),Module=__webpack_require__("./node_modules/webpack/node_modules/node-libs-browser/mock/empty.js"),path=__webpack_require__("./node_modules/path-browserify/index.js"),parse=__webpack_require__("./node_modules/babylon/lib/index.js").parse,t=__webpack_require__("./node_modules/babel-types/lib/index.js"),tt=__webpack_require__("./node_modules/babylon/lib/index.js").tokTypes,traverse=__webpack_require__("./node_modules/babel-traverse/lib/index.js")["default"],estraverse,hasPatched=!1,eslintOptions={};exports.parse=function(e,t){t=t||{},eslintOptions.ecmaVersion=t.ecmaVersion=t.ecmaVersion||6,eslintOptions.sourceType=t.sourceType=t.sourceType||"module",eslintOptions.allowImportExportEverywhere=t.allowImportExportEverywhere=t.allowImportExportEverywhere||!1,"module"===t.sourceType?eslintOptions.globalReturn=!1:delete eslintOptions.globalReturn;try{monkeypatch()}catch(r){console.error(r.stack),process.exit(1)}return exports.parseNoPatch(e,t)},exports.parseNoPatch=function(e,t){var r,a={sourceType:t.sourceType,allowImportExportEverywhere:t.allowImportExportEverywhere,allowReturnOutsideFunction:!0,allowSuperOutsideMethod:!0,plugins:["flow","jsx","asyncFunctions","asyncGenerators","classConstructorCall","classProperties","decorators","doExpressions","exponentiationOperator","exportExtensions","functionBind","functionSent","objectRestSpread","trailingFunctionCommas"]};try{r=parse(e,a)}catch(o){throw o instanceof SyntaxError&&(o.lineNumber=o.loc.line,o.column=o.loc.column+1,o.message="Line "+o.lineNumber+": "+o.message.replace(/ \((\d+):(\d+)\)$/,"")),o}return r.tokens.pop(),r.tokens=babylonToEspree.toTokens(r.tokens,tt,e),babylonToEspree.convertComments(r.comments),babylonToEspree.toAST(r,traverse,e),r.type="Program",r.sourceType=r.program.sourceType,r.directives=r.program.directives,r.body=r.program.body,delete r.program,delete r._paths,babylonToEspree.attachComments(r,r.comments,r.tokens),r};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module), __webpack_require__("./node_modules/process/browser.js")))

/***/ },

/***/ 8:
/***/ function(module, exports) {

	function webpackContext(req) {
		throw new Error("Cannot find module '" + req + "'.");
	}
	webpackContext.keys = function() { return []; };
	webpackContext.resolve = webpackContext;
	module.exports = webpackContext;
	webpackContext.id = 8;


/***/ },

/***/ "./node_modules/babel-eslint/babylon-to-espree/index.js":
/***/ function(module, exports, __webpack_require__) {

	exports.attachComments=__webpack_require__("./node_modules/babel-eslint/babylon-to-espree/attachComments.js"),exports.toTokens=__webpack_require__("./node_modules/babel-eslint/babylon-to-espree/toTokens.js"),exports.toAST=__webpack_require__("./node_modules/babel-eslint/babylon-to-espree/toAST.js"),exports.convertComments=function(e){for(var t=0;t<e.length;t++){var o=e[t];"CommentBlock"===o.type?o.type="Block":"CommentLine"===o.type&&(o.type="Line"),o.range||(o.range=[o.start,o.end])}};

/***/ },

/***/ "./node_modules/babel-eslint/babylon-to-espree/attachComments.js":
/***/ function(module, exports) {

	module.exports=function(n,e,l){if(e.length){var t=e[0],o=e[e.length-1];if(l.length){if(t.start<l[0].start){var a=l[0];if(n.body.length){var d=n.body[0];d.leadingComments=[];for(var r=a.start,s=e.length,i=0;i<s&&e[i].start<r;i++)d.leadingComments.push(e[i])}}}else n.start=o.end,n.loc.start.line=o.loc.end.line,n.loc.start.column=o.loc.end.column,null===n.leadingComments&&n.innerComments.length&&(n.leadingComments=n.innerComments);if(l.length){var c=l[l.length-1];o.end>c.end&&(n.range[1]=c.end,n.loc.end.line=c.loc.end.line,n.loc.end.column=c.loc.end.column)}}else l.length||(n.loc.start.line=1,n.loc.end.line=1);n.body&&n.body.length>0&&(n.loc.start.line=n.body[0].loc.start.line,n.range[0]=n.body[0].start)};

/***/ },

/***/ "./node_modules/babel-eslint/babylon-to-espree/toTokens.js":
/***/ function(module, exports, __webpack_require__) {

	var convertTemplateType=__webpack_require__("./node_modules/babel-eslint/babylon-to-espree/convertTemplateType.js"),toToken=__webpack_require__("./node_modules/babel-eslint/babylon-to-espree/toToken.js");module.exports=function(e,t,o){convertTemplateType(e,t);for(var n=e.filter(function(e){return"CommentLine"!==e.type&&"CommentBlock"!==e.type}),r=0,p=n.length;r<p;r++)n[r]=toToken(n[r],t,o);return n};

/***/ },

/***/ "./node_modules/babel-eslint/babylon-to-espree/convertTemplateType.js":
/***/ function(module, exports) {

	module.exports=function(e,t){function n(n){return e[n].type===t.backQuote}function r(r){return n(r)||e[r].type===t.braceR&&i>0}function a(r){return n(r)||e[r].type===t.dollarBraceL}function l(n,r){for(var a="";n<=r;)e[n].value?a+=e[n].value:e[n].type!==t.template&&(a+=e[n].type.label),n++;return a}function o(t,n){var r={type:"Template",value:l(t,n),start:e[t].start,end:e[n].end,loc:{start:e[t].loc.start,end:e[n].loc.end}};e.splice(t,n-t+1,r)}function c(n){e[n].type===t.braceL?f++:e[n].type===t.braceR&&f--}for(var u=0,p=0,f=0,i=0;u<e.length;){if(r(u)&&0===f){if(n(u)&&i++,p=u+1,p>=e.length-1||e[p].type!==t.template)break;for(;!(a(p)||p>=e.length-1);)p++;n(p)&&i--,o(u,p)}else i>0&&c(u);u++}};

/***/ },

/***/ "./node_modules/babel-eslint/babylon-to-espree/toToken.js":
/***/ function(module, exports) {

	module.exports=function(e,t,a){var l=e.type;if(e.range=[e.start,e.end],l===t.name)e.type="Identifier";else if(l===t.semi||l===t.comma||l===t.parenL||l===t.parenR||l===t.braceL||l===t.braceR||l===t.slash||l===t.dot||l===t.bracketL||l===t.bracketR||l===t.ellipsis||l===t.arrow||l===t.star||l===t.incDec||l===t.colon||l===t.question||l===t.template||l===t.backQuote||l===t.dollarBraceL||l===t.at||l===t.logicalOR||l===t.logicalAND||l===t.bitwiseOR||l===t.bitwiseXOR||l===t.bitwiseAND||l===t.equality||l===t.relational||l===t.bitShift||l===t.plusMin||l===t.modulo||l===t.exponent||l===t.prefix||l===t.doubleColon||l.isAssign)e.type="Punctuator",e.value||(e.value=l.label);else if(l===t.jsxTagStart)e.type="Punctuator",e.value="<";else if(l===t.jsxTagEnd)e.type="Punctuator",e.value=">";else if(l===t.jsxName)e.type="JSXIdentifier";else if(l===t.jsxText)e.type="JSXText";else if("null"===l.keyword)e.type="Null";else if("false"===l.keyword||"true"===l.keyword)e.type="Boolean";else if(l.keyword)e.type="Keyword";else if(l===t.num)e.type="Numeric",e.value=a.slice(e.start,e.end);else if(l===t.string)e.type="String",e.value=a.slice(e.start,e.end);else if(l===t.regexp){e.type="RegularExpression";var i=e.value;e.regex={pattern:i.pattern,flags:i.flags},e.value="/"+i.pattern+"/"+i.flags}return e};

/***/ },

/***/ "./node_modules/babel-eslint/babylon-to-espree/toAST.js":
/***/ function(module, exports) {

	function changeToLiteral(e){e.type="Literal",e.raw||(e.extra&&e.extra.raw?e.raw=e.extra.raw:e.raw=source.slice(e.start,e.end))}function fixDirectives(e){if(e.isProgram()||e.isFunction()){var t=e.node,r=t,a=t.body;"Program"!==t.type&&(r=a,a=a.body),r.directives&&(r.directives.reverse().forEach(function(e){e.type="ExpressionStatement",e.expression=e.value,delete e.value,e.expression.type="Literal",changeToLiteral(e.expression),a.unshift(e)}),delete r.directives)}}var source;module.exports=function(e,t,r){source=r,e.range=[e.start,e.end],t(e,astTransformVisitor)};var astTransformVisitor={noScope:!0,enter:function(e){var t=e.node;if(t.range=[t.start,t.end],t._babelType=t.type,t.innerComments&&(t.trailingComments=t.innerComments,delete t.innerComments),t.trailingComments)for(var r=0;r<t.trailingComments.length;r++){var a=t.trailingComments[r];"CommentLine"===a.type?a.type="Line":"CommentBlock"===a.type&&(a.type="Block"),a.range=[a.start,a.end]}if(t.leadingComments)for(var r=0;r<t.leadingComments.length;r++){var a=t.leadingComments[r];"CommentLine"===a.type?a.type="Line":"CommentBlock"===a.type&&(a.type="Block"),a.range=[a.start,a.end]}Object.defineProperty(t,"_paths",{value:t._paths,writable:!0})},exit:function(e){var t=e.node;if([fixDirectives].forEach(function(t){t(e)}),e.isJSXText()&&(t.type="Literal",t.raw=t.value),(e.isNumericLiteral()||e.isStringLiteral())&&changeToLiteral(t),e.isBooleanLiteral()&&(t.type="Literal",t.raw=String(t.value)),e.isNullLiteral()&&(t.type="Literal",t.raw="null",t.value=null),e.isRegExpLiteral()&&(t.type="Literal",t.raw=t.extra.raw,t.value={},t.regex={pattern:t.pattern,flags:t.flags},delete t.extra,delete t.pattern,delete t.flags),e.isObjectProperty()&&(t.type="Property",t.kind="init"),e.isClassMethod()||e.isObjectMethod()){var r=source.slice(t.key.end,t.body.start),a=r.indexOf("(");t.value={type:"FunctionExpression",id:t.id,params:t.params,body:t.body,async:t.async,generator:t.generator,expression:t.expression,defaults:[],loc:{start:{line:t.key.loc.start.line,column:t.key.loc.end.column+a},end:t.body.loc.end}},t.value.range=[t.key.end+a,t.body.end],t.value.start=t.value.range&&t.value.range[0]||t.value.loc.start.column,t.value.end=t.value.range&&t.value.range[1]||t.value.loc.end.column,t.returnType&&(t.value.returnType=t.returnType),t.typeParameters&&(t.value.typeParameters=t.typeParameters),e.isClassMethod()&&(t.type="MethodDefinition"),e.isObjectMethod()&&(t.type="Property","method"===t.kind&&(t.kind="init")),delete t.body,delete t.id,delete t.async,delete t.generator,delete t.expression,delete t.params,delete t.returnType,delete t.typeParameters}if((e.isRestProperty()||e.isSpreadProperty())&&(t.type="Experimental"+t.type),e.isTypeParameter&&e.isTypeParameter()&&(t.type="Identifier",t.typeAnnotation=t.bound,delete t.bound),e.isQualifiedTypeIdentifier()&&delete t.id,e.isObjectTypeProperty()&&delete t.key,e.isObjectTypeIndexer()&&delete t.id,e.isFunctionTypeParam()&&delete t.name,e.isImportDeclaration()&&delete t.isType,e.isExportDeclaration()){var n=e.get("declaration");n.isClassExpression()?t.declaration.type="ClassDeclaration":n.isFunctionExpression()&&(t.declaration.type="FunctionDeclaration")}e.isFunction()&&t.async&&(t.generator=!0),e.isFunction()&&(t.defaults||(t.defaults=[])),e.isAwaitExpression()&&(t.type="YieldExpression",t.delegate=t.all,delete t.all),e.isTemplateLiteral()&&t.quasis.forEach(function(e){e.range[0]-=1,e.tail?e.range[1]+=1:e.range[1]+=2,e.loc.start.column-=1,e.tail?e.loc.end.column+=1:e.loc.end.column+=2})}};

/***/ },

/***/ "./node_modules/lodash.assign/index.js":
/***/ function(module, exports) {

	function apply(r,e,t){switch(t.length){case 0:return r.call(e);case 1:return r.call(e,t[0]);case 2:return r.call(e,t[0],t[1]);case 3:return r.call(e,t[0],t[1],t[2])}return r.apply(e,t)}function baseTimes(r,e){for(var t=-1,n=Array(r);++t<r;)n[t]=e(t);return n}function overArg(r,e){return function(t){return r(e(t))}}function arrayLikeKeys(r,e){var t=isArray(r)||isArguments(r)?baseTimes(r.length,String):[],n=t.length,o=!!n;for(var i in r)!e&&!hasOwnProperty.call(r,i)||o&&("length"==i||isIndex(i,n))||t.push(i);return t}function assignValue(r,e,t){var n=r[e];hasOwnProperty.call(r,e)&&eq(n,t)&&(void 0!==t||e in r)||(r[e]=t)}function baseKeys(r){if(!isPrototype(r))return nativeKeys(r);var e=[];for(var t in Object(r))hasOwnProperty.call(r,t)&&"constructor"!=t&&e.push(t);return e}function baseRest(r,e){return e=nativeMax(void 0===e?r.length-1:e,0),function(){for(var t=arguments,n=-1,o=nativeMax(t.length-e,0),i=Array(o);++n<o;)i[n]=t[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=t[n];return a[e]=i,apply(r,this,a)}}function copyObject(r,e,t,n){t||(t={});for(var o=-1,i=e.length;++o<i;){var a=e[o],s=n?n(t[a],r[a],a,t,r):void 0;assignValue(t,a,void 0===s?r[a]:s)}return t}function createAssigner(r){return baseRest(function(e,t){var n=-1,o=t.length,i=o>1?t[o-1]:void 0,a=o>2?t[2]:void 0;for(i=r.length>3&&"function"==typeof i?(o--,i):void 0,a&&isIterateeCall(t[0],t[1],a)&&(i=o<3?void 0:i,o=1),e=Object(e);++n<o;){var s=t[n];s&&r(e,s,n,i)}return e})}function isIndex(r,e){return e=null==e?MAX_SAFE_INTEGER:e,!!e&&("number"==typeof r||reIsUint.test(r))&&r>-1&&r%1==0&&r<e}function isIterateeCall(r,e,t){if(!isObject(t))return!1;var n=typeof e;return!!("number"==n?isArrayLike(t)&&isIndex(e,t.length):"string"==n&&e in t)&&eq(t[e],r)}function isPrototype(r){var e=r&&r.constructor,t="function"==typeof e&&e.prototype||objectProto;return r===t}function eq(r,e){return r===e||r!==r&&e!==e}function isArguments(r){return isArrayLikeObject(r)&&hasOwnProperty.call(r,"callee")&&(!propertyIsEnumerable.call(r,"callee")||objectToString.call(r)==argsTag)}function isArrayLike(r){return null!=r&&isLength(r.length)&&!isFunction(r)}function isArrayLikeObject(r){return isObjectLike(r)&&isArrayLike(r)}function isFunction(r){var e=isObject(r)?objectToString.call(r):"";return e==funcTag||e==genTag}function isLength(r){return"number"==typeof r&&r>-1&&r%1==0&&r<=MAX_SAFE_INTEGER}function isObject(r){var e=typeof r;return!!r&&("object"==e||"function"==e)}function isObjectLike(r){return!!r&&"object"==typeof r}function keys(r){return isArrayLike(r)?arrayLikeKeys(r):baseKeys(r)}var MAX_SAFE_INTEGER=9007199254740991,argsTag="[object Arguments]",funcTag="[object Function]",genTag="[object GeneratorFunction]",reIsUint=/^(?:0|[1-9]\d*)$/,objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,objectToString=objectProto.toString,propertyIsEnumerable=objectProto.propertyIsEnumerable,nativeKeys=overArg(Object.keys,Object),nativeMax=Math.max,nonEnumShadows=!propertyIsEnumerable.call({valueOf:1},"valueOf"),isArray=Array.isArray,assign=createAssigner(function(r,e){if(nonEnumShadows||isPrototype(e)||isArrayLike(e))return void copyObject(e,keys(e),r);for(var t in e)hasOwnProperty.call(e,t)&&assignValue(r,t,e[t])});module.exports=assign;

/***/ },

/***/ "./node_modules/lodash.pickby/index.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {function arrayPush(e,t){for(var r=-1,a=t.length,n=e.length;++r<a;)e[n+r]=t[r];return e}function arraySome(e,t){for(var r=-1,a=e?e.length:0;++r<a;)if(t(e[r],r,e))return!0;return!1}function baseProperty(e){return function(t){return null==t?void 0:t[e]}}function baseTimes(e,t){for(var r=-1,a=Array(e);++r<e;)a[r]=t(r);return a}function baseUnary(e){return function(t){return e(t)}}function getValue(e,t){return null==e?void 0:e[t]}function isHostObject(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(r){}return t}function mapToArray(e){var t=-1,r=Array(e.size);return e.forEach(function(e,a){r[++t]=[a,e]}),r}function overArg(e,t){return function(r){return e(t(r))}}function setToArray(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}function Hash(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{}}function hashDelete(e){return this.has(e)&&delete this.__data__[e]}function hashGet(e){var t=this.__data__;if(nativeCreate){var r=t[e];return r===HASH_UNDEFINED?void 0:r}return hasOwnProperty.call(t,e)?t[e]:void 0}function hashHas(e){var t=this.__data__;return nativeCreate?void 0!==t[e]:hasOwnProperty.call(t,e)}function hashSet(e,t){var r=this.__data__;return r[e]=nativeCreate&&void 0===t?HASH_UNDEFINED:t,this}function ListCache(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function listCacheClear(){this.__data__=[]}function listCacheDelete(e){var t=this.__data__,r=assocIndexOf(t,e);if(r<0)return!1;var a=t.length-1;return r==a?t.pop():splice.call(t,r,1),!0}function listCacheGet(e){var t=this.__data__,r=assocIndexOf(t,e);return r<0?void 0:t[r][1]}function listCacheHas(e){return assocIndexOf(this.__data__,e)>-1}function listCacheSet(e,t){var r=this.__data__,a=assocIndexOf(r,e);return a<0?r.push([e,t]):r[a][1]=t,this}function MapCache(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function mapCacheClear(){this.__data__={hash:new Hash,map:new(Map||ListCache),string:new Hash}}function mapCacheDelete(e){return getMapData(this,e)["delete"](e)}function mapCacheGet(e){return getMapData(this,e).get(e)}function mapCacheHas(e){return getMapData(this,e).has(e)}function mapCacheSet(e,t){return getMapData(this,e).set(e,t),this}function SetCache(e){var t=-1,r=e?e.length:0;for(this.__data__=new MapCache;++t<r;)this.add(e[t])}function setCacheAdd(e){return this.__data__.set(e,HASH_UNDEFINED),this}function setCacheHas(e){return this.__data__.has(e)}function Stack(e){this.__data__=new ListCache(e)}function stackClear(){this.__data__=new ListCache}function stackDelete(e){return this.__data__["delete"](e)}function stackGet(e){return this.__data__.get(e)}function stackHas(e){return this.__data__.has(e)}function stackSet(e,t){var r=this.__data__;if(r instanceof ListCache){var a=r.__data__;if(!Map||a.length<LARGE_ARRAY_SIZE-1)return a.push([e,t]),this;r=this.__data__=new MapCache(a)}return r.set(e,t),this}function arrayLikeKeys(e,t){var r=isArray(e)||isArguments(e)?baseTimes(e.length,String):[],a=r.length,n=!!a;for(var o in e)!t&&!hasOwnProperty.call(e,o)||n&&("length"==o||isIndex(o,a))||r.push(o);return r}function assocIndexOf(e,t){for(var r=e.length;r--;)if(eq(e[r][0],t))return r;return-1}function baseGet(e,t){t=isKey(t,e)?[t]:castPath(t);for(var r=0,a=t.length;null!=e&&r<a;)e=e[toKey(t[r++])];return r&&r==a?e:void 0}function baseGetAllKeys(e,t,r){var a=t(e);return isArray(e)?a:arrayPush(a,r(e))}function baseGetTag(e){return objectToString.call(e)}function baseHasIn(e,t){return null!=e&&t in Object(e)}function baseIsEqual(e,t,r,a,n){return e===t||(null==e||null==t||!isObject(e)&&!isObjectLike(t)?e!==e&&t!==t:baseIsEqualDeep(e,t,baseIsEqual,r,a,n))}function baseIsEqualDeep(e,t,r,a,n,o){var s=isArray(e),i=isArray(t),c=arrayTag,u=arrayTag;s||(c=getTag(e),c=c==argsTag?objectTag:c),i||(u=getTag(t),u=u==argsTag?objectTag:u);var y=c==objectTag&&!isHostObject(e),l=u==objectTag&&!isHostObject(t),g=c==u;if(g&&!y)return o||(o=new Stack),s||isTypedArray(e)?equalArrays(e,t,r,a,n,o):equalByTag(e,t,c,r,a,n,o);if(!(n&PARTIAL_COMPARE_FLAG)){var p=y&&hasOwnProperty.call(e,"__wrapped__"),f=l&&hasOwnProperty.call(t,"__wrapped__");if(p||f){var h=p?e.value():e,b=f?t.value():t;return o||(o=new Stack),r(h,b,a,n,o)}}return!!g&&(o||(o=new Stack),equalObjects(e,t,r,a,n,o))}function baseIsMatch(e,t,r,a){var n=r.length,o=n,s=!a;if(null==e)return!o;for(e=Object(e);n--;){var i=r[n];if(s&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++n<o;){i=r[n];var c=i[0],u=e[c],y=i[1];if(s&&i[2]){if(void 0===u&&!(c in e))return!1}else{var l=new Stack;if(a)var g=a(u,y,c,e,t,l);if(!(void 0===g?baseIsEqual(y,u,a,UNORDERED_COMPARE_FLAG|PARTIAL_COMPARE_FLAG,l):g))return!1}}return!0}function baseIsNative(e){if(!isObject(e)||isMasked(e))return!1;var t=isFunction(e)||isHostObject(e)?reIsNative:reIsHostCtor;return t.test(toSource(e))}function baseIsTypedArray(e){return isObjectLike(e)&&isLength(e.length)&&!!typedArrayTags[objectToString.call(e)]}function baseIteratee(e){return"function"==typeof e?e:null==e?identity:"object"==typeof e?isArray(e)?baseMatchesProperty(e[0],e[1]):baseMatches(e):property(e)}function baseKeys(e){if(!isPrototype(e))return nativeKeys(e);var t=[];for(var r in Object(e))hasOwnProperty.call(e,r)&&"constructor"!=r&&t.push(r);return t}function baseKeysIn(e){if(!isObject(e))return nativeKeysIn(e);var t=isPrototype(e),r=[];for(var a in e)("constructor"!=a||!t&&hasOwnProperty.call(e,a))&&r.push(a);return r}function baseMatches(e){var t=getMatchData(e);return 1==t.length&&t[0][2]?matchesStrictComparable(t[0][0],t[0][1]):function(r){return r===e||baseIsMatch(r,e,t)}}function baseMatchesProperty(e,t){return isKey(e)&&isStrictComparable(t)?matchesStrictComparable(toKey(e),t):function(r){var a=get(r,e);return void 0===a&&a===t?hasIn(r,e):baseIsEqual(t,a,void 0,UNORDERED_COMPARE_FLAG|PARTIAL_COMPARE_FLAG)}}function basePickBy(e,t,r){for(var a=-1,n=t.length,o={};++a<n;){var s=t[a],i=e[s];r(i,s)&&(o[s]=i)}return o}function basePropertyDeep(e){return function(t){return baseGet(t,e)}}function baseToString(e){if("string"==typeof e)return e;if(isSymbol(e))return symbolToString?symbolToString.call(e):"";var t=e+"";return"0"==t&&1/e==-INFINITY?"-0":t}function castPath(e){return isArray(e)?e:stringToPath(e)}function equalArrays(e,t,r,a,n,o){var s=n&PARTIAL_COMPARE_FLAG,i=e.length,c=t.length;if(i!=c&&!(s&&c>i))return!1;var u=o.get(e);if(u&&o.get(t))return u==t;var y=-1,l=!0,g=n&UNORDERED_COMPARE_FLAG?new SetCache:void 0;for(o.set(e,t),o.set(t,e);++y<i;){var p=e[y],f=t[y];if(a)var h=s?a(f,p,y,t,e,o):a(p,f,y,e,t,o);if(void 0!==h){if(h)continue;l=!1;break}if(g){if(!arraySome(t,function(e,t){if(!g.has(t)&&(p===e||r(p,e,a,n,o)))return g.add(t)})){l=!1;break}}else if(p!==f&&!r(p,f,a,n,o)){l=!1;break}}return o["delete"](e),o["delete"](t),l}function equalByTag(e,t,r,a,n,o,s){switch(r){case dataViewTag:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case arrayBufferTag:return!(e.byteLength!=t.byteLength||!a(new Uint8Array(e),new Uint8Array(t)));case boolTag:case dateTag:case numberTag:return eq(+e,+t);case errorTag:return e.name==t.name&&e.message==t.message;case regexpTag:case stringTag:return e==t+"";case mapTag:var i=mapToArray;case setTag:var c=o&PARTIAL_COMPARE_FLAG;if(i||(i=setToArray),e.size!=t.size&&!c)return!1;var u=s.get(e);if(u)return u==t;o|=UNORDERED_COMPARE_FLAG,s.set(e,t);var y=equalArrays(i(e),i(t),a,n,o,s);return s["delete"](e),y;case symbolTag:if(symbolValueOf)return symbolValueOf.call(e)==symbolValueOf.call(t)}return!1}function equalObjects(e,t,r,a,n,o){var s=n&PARTIAL_COMPARE_FLAG,i=keys(e),c=i.length,u=keys(t),y=u.length;if(c!=y&&!s)return!1;for(var l=c;l--;){var g=i[l];if(!(s?g in t:hasOwnProperty.call(t,g)))return!1}var p=o.get(e);if(p&&o.get(t))return p==t;var f=!0;o.set(e,t),o.set(t,e);for(var h=s;++l<c;){g=i[l];var b=e[g],T=t[g];if(a)var d=s?a(T,b,g,t,e,o):a(b,T,g,e,t,o);if(!(void 0===d?b===T||r(b,T,a,n,o):d)){f=!1;break}h||(h="constructor"==g)}if(f&&!h){var _=e.constructor,v=t.constructor;_!=v&&"constructor"in e&&"constructor"in t&&!("function"==typeof _&&_ instanceof _&&"function"==typeof v&&v instanceof v)&&(f=!1)}return o["delete"](e),o["delete"](t),f}function getAllKeysIn(e){return baseGetAllKeys(e,keysIn,getSymbolsIn)}function getMapData(e,t){var r=e.__data__;return isKeyable(t)?r["string"==typeof t?"string":"hash"]:r.map}function getMatchData(e){for(var t=keys(e),r=t.length;r--;){var a=t[r],n=e[a];t[r]=[a,n,isStrictComparable(n)]}return t}function getNative(e,t){var r=getValue(e,t);return baseIsNative(r)?r:void 0}function hasPath(e,t,r){t=isKey(t,e)?[t]:castPath(t);for(var a,n=-1,o=t.length;++n<o;){var s=toKey(t[n]);if(!(a=null!=e&&r(e,s)))break;e=e[s]}if(a)return a;var o=e?e.length:0;return!!o&&isLength(o)&&isIndex(s,o)&&(isArray(e)||isArguments(e))}function isIndex(e,t){return t=null==t?MAX_SAFE_INTEGER:t,!!t&&("number"==typeof e||reIsUint.test(e))&&e>-1&&e%1==0&&e<t}function isKey(e,t){if(isArray(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!isSymbol(e))||(reIsPlainProp.test(e)||!reIsDeepProp.test(e)||null!=t&&e in Object(t))}function isKeyable(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}function isMasked(e){return!!maskSrcKey&&maskSrcKey in e}function isPrototype(e){var t=e&&e.constructor,r="function"==typeof t&&t.prototype||objectProto;return e===r}function isStrictComparable(e){return e===e&&!isObject(e)}function matchesStrictComparable(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}}function nativeKeysIn(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}function toKey(e){if("string"==typeof e||isSymbol(e))return e;var t=e+"";return"0"==t&&1/e==-INFINITY?"-0":t}function toSource(e){if(null!=e){try{return funcToString.call(e)}catch(t){}try{return e+""}catch(t){}}return""}function memoize(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);var r=function(){var a=arguments,n=t?t.apply(this,a):a[0],o=r.cache;if(o.has(n))return o.get(n);var s=e.apply(this,a);return r.cache=o.set(n,s),s};return r.cache=new(memoize.Cache||MapCache),r}function eq(e,t){return e===t||e!==e&&t!==t}function isArguments(e){return isArrayLikeObject(e)&&hasOwnProperty.call(e,"callee")&&(!propertyIsEnumerable.call(e,"callee")||objectToString.call(e)==argsTag)}function isArrayLike(e){return null!=e&&isLength(e.length)&&!isFunction(e)}function isArrayLikeObject(e){return isObjectLike(e)&&isArrayLike(e)}function isFunction(e){var t=isObject(e)?objectToString.call(e):"";return t==funcTag||t==genTag}function isLength(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=MAX_SAFE_INTEGER}function isObject(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function isObjectLike(e){return!!e&&"object"==typeof e}function isSymbol(e){return"symbol"==typeof e||isObjectLike(e)&&objectToString.call(e)==symbolTag}function toString(e){return null==e?"":baseToString(e)}function get(e,t,r){var a=null==e?void 0:baseGet(e,t);return void 0===a?r:a}function hasIn(e,t){return null!=e&&hasPath(e,t,baseHasIn)}function keys(e){return isArrayLike(e)?arrayLikeKeys(e):baseKeys(e)}function keysIn(e){return isArrayLike(e)?arrayLikeKeys(e,!0):baseKeysIn(e)}function pickBy(e,t){return null==e?{}:basePickBy(e,getAllKeysIn(e),baseIteratee(t))}function identity(e){return e}function property(e){return isKey(e)?baseProperty(toKey(e)):basePropertyDeep(e)}function stubArray(){return[]}var LARGE_ARRAY_SIZE=200,FUNC_ERROR_TEXT="Expected a function",HASH_UNDEFINED="__lodash_hash_undefined__",UNORDERED_COMPARE_FLAG=1,PARTIAL_COMPARE_FLAG=2,INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991,argsTag="[object Arguments]",arrayTag="[object Array]",boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",funcTag="[object Function]",genTag="[object GeneratorFunction]",mapTag="[object Map]",numberTag="[object Number]",objectTag="[object Object]",promiseTag="[object Promise]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",symbolTag="[object Symbol]",weakMapTag="[object WeakMap]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,reLeadingDot=/^\./,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reEscapeChar=/\\(\\)?/g,reIsHostCtor=/^\[object .+?Constructor\]$/,reIsUint=/^(?:0|[1-9]\d*)$/,typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=!0,typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=!1;var freeGlobal="object"==typeof global&&global&&global.Object===Object&&global,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")(),freeExports="object"==typeof exports&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&"object"==typeof module&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,freeProcess=moduleExports&&freeGlobal.process,nodeUtil=function(){try{return freeProcess&&freeProcess.binding("util")}catch(e){}}(),nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray,arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype,coreJsData=root["__core-js_shared__"],maskSrcKey=function(){var e=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),funcToString=funcProto.toString,hasOwnProperty=objectProto.hasOwnProperty,objectToString=objectProto.toString,reIsNative=RegExp("^"+funcToString.call(hasOwnProperty).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Symbol=root.Symbol,Uint8Array=root.Uint8Array,getPrototype=overArg(Object.getPrototypeOf,Object),propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice,nativeGetSymbols=Object.getOwnPropertySymbols,nativeKeys=overArg(Object.keys,Object),DataView=getNative(root,"DataView"),Map=getNative(root,"Map"),Promise=getNative(root,"Promise"),Set=getNative(root,"Set"),WeakMap=getNative(root,"WeakMap"),nativeCreate=getNative(Object,"create"),dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap),symbolProto=Symbol?Symbol.prototype:void 0,symbolValueOf=symbolProto?symbolProto.valueOf:void 0,symbolToString=symbolProto?symbolProto.toString:void 0;Hash.prototype.clear=hashClear,Hash.prototype["delete"]=hashDelete,Hash.prototype.get=hashGet,Hash.prototype.has=hashHas,Hash.prototype.set=hashSet,ListCache.prototype.clear=listCacheClear,ListCache.prototype["delete"]=listCacheDelete,ListCache.prototype.get=listCacheGet,ListCache.prototype.has=listCacheHas,ListCache.prototype.set=listCacheSet,MapCache.prototype.clear=mapCacheClear,MapCache.prototype["delete"]=mapCacheDelete,MapCache.prototype.get=mapCacheGet,MapCache.prototype.has=mapCacheHas,MapCache.prototype.set=mapCacheSet,SetCache.prototype.add=SetCache.prototype.push=setCacheAdd,SetCache.prototype.has=setCacheHas,Stack.prototype.clear=stackClear,Stack.prototype["delete"]=stackDelete,Stack.prototype.get=stackGet,Stack.prototype.has=stackHas,Stack.prototype.set=stackSet;var getSymbols=nativeGetSymbols?overArg(nativeGetSymbols,Object):stubArray,getSymbolsIn=nativeGetSymbols?function(e){for(var t=[];e;)arrayPush(t,getSymbols(e)),e=getPrototype(e);return t}:stubArray,getTag=baseGetTag;(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map)!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set)!=setTag||WeakMap&&getTag(new WeakMap)!=weakMapTag)&&(getTag=function(e){var t=objectToString.call(e),r=t==objectTag?e.constructor:void 0,a=r?toSource(r):void 0;if(a)switch(a){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag}return t});var stringToPath=memoize(function(e){e=toString(e);var t=[];return reLeadingDot.test(e)&&t.push(""),e.replace(rePropName,function(e,r,a,n){t.push(a?n.replace(reEscapeChar,"$1"):r||e)}),t});memoize.Cache=MapCache;var isArray=Array.isArray,isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;module.exports=pickBy;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ },

/***/ "./node_modules/webpack/node_modules/node-libs-browser/mock/empty.js":
/***/ function(module, exports) {

	

/***/ },

/***/ "./node_modules/path-browserify/index.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {function normalizeArray(r,t){for(var e=0,n=r.length-1;n>=0;n--){var s=r[n];"."===s?r.splice(n,1):".."===s?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}function filter(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,splitPath=function(r){return splitPathRe.exec(r).slice(1)};exports.resolve=function(){for(var r="",t=!1,e=arguments.length-1;e>=-1&&!t;e--){var n=e>=0?arguments[e]:process.cwd();if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,t="/"===n.charAt(0))}return r=normalizeArray(filter(r.split("/"),function(r){return!!r}),!t).join("/"),(t?"/":"")+r||"."},exports.normalize=function(r){var t=exports.isAbsolute(r),e="/"===substr(r,-1);return r=normalizeArray(filter(r.split("/"),function(r){return!!r}),!t).join("/"),r||t||(r="."),r&&e&&(r+="/"),(t?"/":"")+r},exports.isAbsolute=function(r){return"/"===r.charAt(0)},exports.join=function(){var r=Array.prototype.slice.call(arguments,0);return exports.normalize(filter(r,function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r}).join("/"))},exports.relative=function(r,t){function e(r){for(var t=0;t<r.length&&""===r[t];t++);for(var e=r.length-1;e>=0&&""===r[e];e--);return t>e?[]:r.slice(t,e-t+1)}r=exports.resolve(r).substr(1),t=exports.resolve(t).substr(1);for(var n=e(r.split("/")),s=e(t.split("/")),i=Math.min(n.length,s.length),o=i,u=0;u<i;u++)if(n[u]!==s[u]){o=u;break}for(var l=[],u=o;u<n.length;u++)l.push("..");return l=l.concat(s.slice(o)),l.join("/")},exports.sep="/",exports.delimiter=":",exports.dirname=function(r){var t=splitPath(r),e=t[0],n=t[1];return e||n?(n&&(n=n.substr(0,n.length-1)),e+n):"."},exports.basename=function(r,t){var e=splitPath(r)[2];return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e},exports.extname=function(r){return splitPath(r)[3]};var substr="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ },

/***/ "./node_modules/babylon/lib/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function parse(e,r){return new _parser2["default"](r,e).parse()}exports.__esModule=!0,exports.tokTypes=void 0,exports.parse=parse;var _parser=__webpack_require__("./node_modules/babylon/lib/parser/index.js"),_parser2=_interopRequireDefault(_parser);__webpack_require__("./node_modules/babylon/lib/parser/util.js"),__webpack_require__("./node_modules/babylon/lib/parser/statement.js"),__webpack_require__("./node_modules/babylon/lib/parser/lval.js"),__webpack_require__("./node_modules/babylon/lib/parser/expression.js"),__webpack_require__("./node_modules/babylon/lib/parser/node.js"),__webpack_require__("./node_modules/babylon/lib/parser/location.js"),__webpack_require__("./node_modules/babylon/lib/parser/comments.js");var _types=__webpack_require__("./node_modules/babylon/lib/tokenizer/types.js");__webpack_require__("./node_modules/babylon/lib/tokenizer/index.js"),__webpack_require__("./node_modules/babylon/lib/tokenizer/context.js");var _flow=__webpack_require__("./node_modules/babylon/lib/plugins/flow.js"),_flow2=_interopRequireDefault(_flow),_jsx=__webpack_require__("./node_modules/babylon/lib/plugins/jsx/index.js"),_jsx2=_interopRequireDefault(_jsx);_parser.plugins.flow=_flow2["default"],_parser.plugins.jsx=_jsx2["default"],exports.tokTypes=_types.types;

/***/ },

/***/ "./node_modules/babylon/lib/parser/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}exports.__esModule=!0,exports.plugins=void 0;var _identifier=__webpack_require__("./node_modules/babylon/lib/util/identifier.js"),_options=__webpack_require__("./node_modules/babylon/lib/options.js"),_tokenizer=__webpack_require__("./node_modules/babylon/lib/tokenizer/index.js"),_tokenizer2=_interopRequireDefault(_tokenizer),plugins=exports.plugins={},Parser=function(e){function t(r,n){_classCallCheck(this,t),r=(0,_options.getOptions)(r);var o=_possibleConstructorReturn(this,e.call(this,r,n));return o.options=r,o.inModule="module"===o.options.sourceType,o.isReservedWord=_identifier.reservedWords[6],o.input=n,o.plugins=o.loadPlugins(o.options.plugins),o.filename=r.sourceFilename,0===o.state.pos&&"#"===o.input[0]&&"!"===o.input[1]&&o.skipLineComment(2),o}return _inherits(t,e),t.prototype.hasPlugin=function(e){return!(!this.plugins["*"]&&!this.plugins[e])},t.prototype.extend=function(e,t){this[e]=t(this[e])},t.prototype.loadPlugins=function(e){var t={};e.indexOf("flow")>=0&&(e=e.filter(function(e){return"flow"!==e}),e.push("flow"));for(var r=e,n=Array.isArray(r),o=0,r=n?r:r[Symbol.iterator]();;){var i;if(n){if(o>=r.length)break;i=r[o++]}else{if(o=r.next(),o.done)break;i=o.value}var s=i;if(!t[s]){t[s]=!0;var u=exports.plugins[s];u&&u(this)}}return t},t.prototype.parse=function(){var e=this.startNode(),t=this.startNode();return this.nextToken(),this.parseTopLevel(e,t)},t}(_tokenizer2["default"]);exports["default"]=Parser;

/***/ },

/***/ "./node_modules/babylon/lib/util/identifier.js":
/***/ function(module, exports) {

	"use strict";function makePredicate(e){return e=e.split(" "),function(t){return e.indexOf(t)>=0}}function isInAstralSet(e,t){for(var r=65536,i=0;i<t.length;i+=2){if(r+=t[i],r>e)return!1;if(r+=t[i+1],r>=e)return!0}}function isIdentifierStart(e){return e<65?36===e:e<91||(e<97?95===e:e<123||(e<=65535?e>=170&&nonASCIIidentifierStart.test(String.fromCharCode(e)):isInAstralSet(e,astralIdentifierStartCodes)))}function isIdentifierChar(e){return e<48?36===e:e<58||!(e<65)&&(e<91||(e<97?95===e:e<123||(e<=65535?e>=170&&nonASCIIidentifier.test(String.fromCharCode(e)):isInAstralSet(e,astralIdentifierStartCodes)||isInAstralSet(e,astralIdentifierCodes))))}exports.__esModule=!0,exports.isIdentifierStart=isIdentifierStart,exports.isIdentifierChar=isIdentifierChar;var reservedWords=exports.reservedWords={6:makePredicate("enum await"),strict:makePredicate("implements interface let package private protected public static yield"),strictBind:makePredicate("eval arguments")},isKeyword=exports.isKeyword=makePredicate("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this let const class extends export import yield super"),nonASCIIidentifierStartChars="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞮꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",nonASCIIidentifierChars="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣔ-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఃా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഁ-ഃാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ູົຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭ᳲ-᳴᳸᳹᷀-᷵᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱꤀-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",nonASCIIidentifierStart=new RegExp("["+nonASCIIidentifierStartChars+"]"),nonASCIIidentifier=new RegExp("["+nonASCIIidentifierStartChars+nonASCIIidentifierChars+"]");nonASCIIidentifierStartChars=nonASCIIidentifierChars=null;var astralIdentifierStartCodes=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,17,26,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,26,45,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,785,52,76,44,33,24,27,35,42,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,54,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,86,25,391,63,32,0,449,56,264,8,2,36,18,0,50,29,881,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,881,68,12,0,67,12,65,0,32,6124,20,754,9486,1,3071,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,4149,196,60,67,1213,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,3,5761,10591,541],astralIdentifierCodes=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,1306,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,52,0,13,2,49,13,10,2,4,9,83,11,7,0,161,11,6,9,7,3,57,0,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,87,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,423,9,838,7,2,7,17,9,57,21,2,13,19882,9,135,4,60,6,26,9,1016,45,17,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,2214,6,110,6,6,9,792487,239];

/***/ },

/***/ "./node_modules/babylon/lib/options.js":
/***/ function(module, exports) {

	"use strict";function getOptions(t){var e={};for(var o in defaultOptions)e[o]=t&&o in t?t[o]:defaultOptions[o];return e}exports.__esModule=!0,exports.getOptions=getOptions;var defaultOptions=exports.defaultOptions={sourceType:"script",sourceFilename:void 0,allowReturnOutsideFunction:!1,allowImportExportEverywhere:!1,allowSuperOutsideMethod:!1,plugins:[],strictMode:null};

/***/ },

/***/ "./node_modules/babylon/lib/tokenizer/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}function codePointToString(t){return t<=65535?String.fromCharCode(t):String.fromCharCode((t-65536>>10)+55296,(t-65536&1023)+56320)}exports.__esModule=!0,exports.Token=void 0;var _identifier=__webpack_require__("./node_modules/babylon/lib/util/identifier.js"),_types=__webpack_require__("./node_modules/babylon/lib/tokenizer/types.js"),_context=__webpack_require__("./node_modules/babylon/lib/tokenizer/context.js"),_location=__webpack_require__("./node_modules/babylon/lib/util/location.js"),_whitespace=__webpack_require__("./node_modules/babylon/lib/util/whitespace.js"),_state=__webpack_require__("./node_modules/babylon/lib/tokenizer/state.js"),_state2=_interopRequireDefault(_state),Token=exports.Token=function t(s){_classCallCheck(this,t),this.type=s.type,this.value=s.value,this.start=s.start,this.end=s.end,this.loc=new _location.SourceLocation(s.startLoc,s.endLoc)},Tokenizer=function(){function t(s,e){_classCallCheck(this,t),this.state=new _state2["default"],this.state.init(s,e)}return t.prototype.next=function(){this.isLookahead||this.state.tokens.push(new Token(this.state)),this.state.lastTokEnd=this.state.end,this.state.lastTokStart=this.state.start,this.state.lastTokEndLoc=this.state.endLoc,this.state.lastTokStartLoc=this.state.startLoc,this.nextToken()},t.prototype.eat=function(t){return!!this.match(t)&&(this.next(),!0)},t.prototype.match=function(t){return this.state.type===t},t.prototype.isKeyword=function(t){return(0,_identifier.isKeyword)(t)},t.prototype.lookahead=function(){var t=this.state;this.state=t.clone(!0),this.isLookahead=!0,this.next(),this.isLookahead=!1;var s=this.state.clone(!0);return this.state=t,s},t.prototype.setStrict=function(t){if(this.state.strict=t,this.match(_types.types.num)||this.match(_types.types.string)){for(this.state.pos=this.state.start;this.state.pos<this.state.lineStart;)this.state.lineStart=this.input.lastIndexOf("\n",this.state.lineStart-2)+1,--this.state.curLine;this.nextToken()}},t.prototype.curContext=function(){return this.state.context[this.state.context.length-1]},t.prototype.nextToken=function(){var t=this.curContext();return t&&t.preserveSpace||this.skipSpace(),this.state.containsOctal=!1,this.state.octalPosition=null,this.state.start=this.state.pos,this.state.startLoc=this.state.curPosition(),this.state.pos>=this.input.length?this.finishToken(_types.types.eof):t.override?t.override(this):this.readToken(this.fullCharCodeAtPos())},t.prototype.readToken=function(t){return(0,_identifier.isIdentifierStart)(t)||92===t?this.readWord():this.getTokenFromCode(t)},t.prototype.fullCharCodeAtPos=function(){var t=this.input.charCodeAt(this.state.pos);if(t<=55295||t>=57344)return t;var s=this.input.charCodeAt(this.state.pos+1);return(t<<10)+s-56613888},t.prototype.pushComment=function(t,s,e,i,a,r){var n={type:t?"CommentBlock":"CommentLine",value:s,start:e,end:i,loc:new _location.SourceLocation(a,r)};this.isLookahead||(this.state.tokens.push(n),this.state.comments.push(n),this.addComment(n))},t.prototype.skipBlockComment=function(){var t=this.state.curPosition(),s=this.state.pos,e=this.input.indexOf("*/",this.state.pos+=2);e===-1&&this.raise(this.state.pos-2,"Unterminated comment"),this.state.pos=e+2,_whitespace.lineBreakG.lastIndex=s;for(var i=void 0;(i=_whitespace.lineBreakG.exec(this.input))&&i.index<this.state.pos;)++this.state.curLine,this.state.lineStart=i.index+i[0].length;this.pushComment(!0,this.input.slice(s+2,e),s,this.state.pos,t,this.state.curPosition())},t.prototype.skipLineComment=function(t){for(var s=this.state.pos,e=this.state.curPosition(),i=this.input.charCodeAt(this.state.pos+=t);this.state.pos<this.input.length&&10!==i&&13!==i&&8232!==i&&8233!==i;)++this.state.pos,i=this.input.charCodeAt(this.state.pos);this.pushComment(!1,this.input.slice(s+t,this.state.pos),s,this.state.pos,e,this.state.curPosition())},t.prototype.skipSpace=function(){t:for(;this.state.pos<this.input.length;){var t=this.input.charCodeAt(this.state.pos);switch(t){case 32:case 160:++this.state.pos;break;case 13:10===this.input.charCodeAt(this.state.pos+1)&&++this.state.pos;case 10:case 8232:case 8233:++this.state.pos,++this.state.curLine,this.state.lineStart=this.state.pos;break;case 47:switch(this.input.charCodeAt(this.state.pos+1)){case 42:this.skipBlockComment();break;case 47:this.skipLineComment(2);break;default:break t}break;default:if(!(t>8&&t<14||t>=5760&&_whitespace.nonASCIIwhitespace.test(String.fromCharCode(t))))break t;++this.state.pos}}},t.prototype.finishToken=function(t,s){this.state.end=this.state.pos,this.state.endLoc=this.state.curPosition();var e=this.state.type;this.state.type=t,this.state.value=s,this.updateContext(e)},t.prototype.readToken_dot=function(){var t=this.input.charCodeAt(this.state.pos+1);if(t>=48&&t<=57)return this.readNumber(!0);var s=this.input.charCodeAt(this.state.pos+2);return 46===t&&46===s?(this.state.pos+=3,this.finishToken(_types.types.ellipsis)):(++this.state.pos,this.finishToken(_types.types.dot))},t.prototype.readToken_slash=function(){if(this.state.exprAllowed)return++this.state.pos,this.readRegexp();var t=this.input.charCodeAt(this.state.pos+1);return 61===t?this.finishOp(_types.types.assign,2):this.finishOp(_types.types.slash,1)},t.prototype.readToken_mult_modulo=function(t){var s=42===t?_types.types.star:_types.types.modulo,e=1,i=this.input.charCodeAt(this.state.pos+1);return 42===i&&(e++,i=this.input.charCodeAt(this.state.pos+2),s=_types.types.exponent),61===i&&(e++,s=_types.types.assign),this.finishOp(s,e)},t.prototype.readToken_pipe_amp=function(t){var s=this.input.charCodeAt(this.state.pos+1);return s===t?this.finishOp(124===t?_types.types.logicalOR:_types.types.logicalAND,2):61===s?this.finishOp(_types.types.assign,2):124===t&&125===s&&this.hasPlugin("flow")?this.finishOp(_types.types.braceBarR,2):this.finishOp(124===t?_types.types.bitwiseOR:_types.types.bitwiseAND,1)},t.prototype.readToken_caret=function(){var t=this.input.charCodeAt(this.state.pos+1);return 61===t?this.finishOp(_types.types.assign,2):this.finishOp(_types.types.bitwiseXOR,1)},t.prototype.readToken_plus_min=function(t){var s=this.input.charCodeAt(this.state.pos+1);return s===t?45===s&&62===this.input.charCodeAt(this.state.pos+2)&&_whitespace.lineBreak.test(this.input.slice(this.state.lastTokEnd,this.state.pos))?(this.skipLineComment(3),this.skipSpace(),this.nextToken()):this.finishOp(_types.types.incDec,2):61===s?this.finishOp(_types.types.assign,2):this.finishOp(_types.types.plusMin,1)},t.prototype.readToken_lt_gt=function(t){var s=this.input.charCodeAt(this.state.pos+1),e=1;return s===t?(e=62===t&&62===this.input.charCodeAt(this.state.pos+2)?3:2,61===this.input.charCodeAt(this.state.pos+e)?this.finishOp(_types.types.assign,e+1):this.finishOp(_types.types.bitShift,e)):33===s&&60===t&&45===this.input.charCodeAt(this.state.pos+2)&&45===this.input.charCodeAt(this.state.pos+3)?(this.inModule&&this.unexpected(),this.skipLineComment(4),this.skipSpace(),this.nextToken()):(61===s&&(e=2),this.finishOp(_types.types.relational,e))},t.prototype.readToken_eq_excl=function(t){var s=this.input.charCodeAt(this.state.pos+1);return 61===s?this.finishOp(_types.types.equality,61===this.input.charCodeAt(this.state.pos+2)?3:2):61===t&&62===s?(this.state.pos+=2,this.finishToken(_types.types.arrow)):this.finishOp(61===t?_types.types.eq:_types.types.prefix,1)},t.prototype.getTokenFromCode=function(t){switch(t){case 46:return this.readToken_dot();case 40:return++this.state.pos,this.finishToken(_types.types.parenL);case 41:return++this.state.pos,this.finishToken(_types.types.parenR);case 59:return++this.state.pos,this.finishToken(_types.types.semi);case 44:return++this.state.pos,this.finishToken(_types.types.comma);case 91:return++this.state.pos,this.finishToken(_types.types.bracketL);case 93:return++this.state.pos,this.finishToken(_types.types.bracketR);case 123:return this.hasPlugin("flow")&&124===this.input.charCodeAt(this.state.pos+1)?this.finishOp(_types.types.braceBarL,2):(++this.state.pos,this.finishToken(_types.types.braceL));case 125:return++this.state.pos,this.finishToken(_types.types.braceR);case 58:return this.hasPlugin("functionBind")&&58===this.input.charCodeAt(this.state.pos+1)?this.finishOp(_types.types.doubleColon,2):(++this.state.pos,this.finishToken(_types.types.colon));case 63:return++this.state.pos,this.finishToken(_types.types.question);case 64:return++this.state.pos,this.finishToken(_types.types.at);case 96:return++this.state.pos,this.finishToken(_types.types.backQuote);case 48:var s=this.input.charCodeAt(this.state.pos+1);if(120===s||88===s)return this.readRadixNumber(16);if(111===s||79===s)return this.readRadixNumber(8);if(98===s||66===s)return this.readRadixNumber(2);case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return this.readNumber(!1);case 34:case 39:return this.readString(t);case 47:return this.readToken_slash();case 37:case 42:return this.readToken_mult_modulo(t);case 124:case 38:return this.readToken_pipe_amp(t);case 94:return this.readToken_caret();case 43:case 45:return this.readToken_plus_min(t);case 60:case 62:return this.readToken_lt_gt(t);case 61:case 33:return this.readToken_eq_excl(t);case 126:return this.finishOp(_types.types.prefix,1)}this.raise(this.state.pos,"Unexpected character '"+codePointToString(t)+"'")},t.prototype.finishOp=function(t,s){var e=this.input.slice(this.state.pos,this.state.pos+s);return this.state.pos+=s,this.finishToken(t,e)},t.prototype.readRegexp=function(){for(var t=void 0,s=void 0,e=this.state.pos;;){this.state.pos>=this.input.length&&this.raise(e,"Unterminated regular expression");var i=this.input.charAt(this.state.pos);if(_whitespace.lineBreak.test(i)&&this.raise(e,"Unterminated regular expression"),t)t=!1;else{if("["===i)s=!0;else if("]"===i&&s)s=!1;else if("/"===i&&!s)break;t="\\"===i}++this.state.pos}var a=this.input.slice(e,this.state.pos);++this.state.pos;var r=this.readWord1();if(r){var n=/^[gmsiyu]*$/;n.test(r)||this.raise(e,"Invalid regular expression flag")}return this.finishToken(_types.types.regexp,{pattern:a,flags:r})},t.prototype.readInt=function(t,s){for(var e=this.state.pos,i=0,a=0,r=null==s?1/0:s;a<r;++a){var n=this.input.charCodeAt(this.state.pos),o=void 0;if(o=n>=97?n-97+10:n>=65?n-65+10:n>=48&&n<=57?n-48:1/0,o>=t)break;++this.state.pos,i=i*t+o}return this.state.pos===e||null!=s&&this.state.pos-e!==s?null:i},t.prototype.readRadixNumber=function(t){this.state.pos+=2;var s=this.readInt(t);return null==s&&this.raise(this.state.start+2,"Expected number in radix "+t),(0,_identifier.isIdentifierStart)(this.fullCharCodeAtPos())&&this.raise(this.state.pos,"Identifier directly after number"),this.finishToken(_types.types.num,s)},t.prototype.readNumber=function(t){var s=this.state.pos,e=!1,i=48===this.input.charCodeAt(this.state.pos);t||null!==this.readInt(10)||this.raise(s,"Invalid number");var a=this.input.charCodeAt(this.state.pos);46===a&&(++this.state.pos,this.readInt(10),e=!0,a=this.input.charCodeAt(this.state.pos)),69!==a&&101!==a||(a=this.input.charCodeAt(++this.state.pos),43!==a&&45!==a||++this.state.pos,null===this.readInt(10)&&this.raise(s,"Invalid number"),e=!0),(0,_identifier.isIdentifierStart)(this.fullCharCodeAtPos())&&this.raise(this.state.pos,"Identifier directly after number");var r=this.input.slice(s,this.state.pos),n=void 0;return e?n=parseFloat(r):i&&1!==r.length?/[89]/.test(r)||this.state.strict?this.raise(s,"Invalid number"):n=parseInt(r,8):n=parseInt(r,10),this.finishToken(_types.types.num,n)},t.prototype.readCodePoint=function(){var t=this.input.charCodeAt(this.state.pos),s=void 0;if(123===t){var e=++this.state.pos;s=this.readHexChar(this.input.indexOf("}",this.state.pos)-this.state.pos),++this.state.pos,s>1114111&&this.raise(e,"Code point out of bounds")}else s=this.readHexChar(4);return s},t.prototype.readString=function(t){for(var s="",e=++this.state.pos;;){this.state.pos>=this.input.length&&this.raise(this.state.start,"Unterminated string constant");var i=this.input.charCodeAt(this.state.pos);if(i===t)break;92===i?(s+=this.input.slice(e,this.state.pos),s+=this.readEscapedChar(!1),e=this.state.pos):((0,_whitespace.isNewLine)(i)&&this.raise(this.state.start,"Unterminated string constant"),++this.state.pos)}return s+=this.input.slice(e,this.state.pos++),this.finishToken(_types.types.string,s)},t.prototype.readTmplToken=function(){for(var t="",s=this.state.pos;;){this.state.pos>=this.input.length&&this.raise(this.state.start,"Unterminated template");var e=this.input.charCodeAt(this.state.pos);if(96===e||36===e&&123===this.input.charCodeAt(this.state.pos+1))return this.state.pos===this.state.start&&this.match(_types.types.template)?36===e?(this.state.pos+=2,this.finishToken(_types.types.dollarBraceL)):(++this.state.pos,this.finishToken(_types.types.backQuote)):(t+=this.input.slice(s,this.state.pos),this.finishToken(_types.types.template,t));if(92===e)t+=this.input.slice(s,this.state.pos),t+=this.readEscapedChar(!0),s=this.state.pos;else if((0,_whitespace.isNewLine)(e)){switch(t+=this.input.slice(s,this.state.pos),++this.state.pos,e){case 13:10===this.input.charCodeAt(this.state.pos)&&++this.state.pos;case 10:t+="\n";break;default:t+=String.fromCharCode(e)}++this.state.curLine,this.state.lineStart=this.state.pos,s=this.state.pos}else++this.state.pos}},t.prototype.readEscapedChar=function(t){var s=this.input.charCodeAt(++this.state.pos);switch(++this.state.pos,s){case 110:return"\n";case 114:return"\r";case 120:return String.fromCharCode(this.readHexChar(2));case 117:return codePointToString(this.readCodePoint());case 116:return"\t";case 98:return"\b";case 118:return"\x0B";case 102:return"\f";case 13:10===this.input.charCodeAt(this.state.pos)&&++this.state.pos;case 10:return this.state.lineStart=this.state.pos,++this.state.curLine,"";default:if(s>=48&&s<=55){var e=this.input.substr(this.state.pos-1,3).match(/^[0-7]+/)[0],i=parseInt(e,8);return i>255&&(e=e.slice(0,-1),i=parseInt(e,8)),i>0&&(this.state.containsOctal||(this.state.containsOctal=!0,this.state.octalPosition=this.state.pos-2),(this.state.strict||t)&&this.raise(this.state.pos-2,"Octal literal in strict mode")),this.state.pos+=e.length-1,String.fromCharCode(i)}return String.fromCharCode(s)}},t.prototype.readHexChar=function(t){var s=this.state.pos,e=this.readInt(16,t);return null===e&&this.raise(s,"Bad character escape sequence"),e},t.prototype.readWord1=function(){this.state.containsEsc=!1;for(var t="",s=!0,e=this.state.pos;this.state.pos<this.input.length;){var i=this.fullCharCodeAtPos();if((0,_identifier.isIdentifierChar)(i))this.state.pos+=i<=65535?1:2;else{if(92!==i)break;this.state.containsEsc=!0,t+=this.input.slice(e,this.state.pos);var a=this.state.pos;117!==this.input.charCodeAt(++this.state.pos)&&this.raise(this.state.pos,"Expecting Unicode escape sequence \\uXXXX"),++this.state.pos;var r=this.readCodePoint();(s?_identifier.isIdentifierStart:_identifier.isIdentifierChar)(r,!0)||this.raise(a,"Invalid Unicode escape"),t+=codePointToString(r),e=this.state.pos}s=!1}return t+this.input.slice(e,this.state.pos)},t.prototype.readWord=function(){var t=this.readWord1(),s=_types.types.name;return!this.state.containsEsc&&this.isKeyword(t)&&(s=_types.keywords[t]),this.finishToken(s,t)},t.prototype.braceIsBlock=function(t){if(t===_types.types.colon){var s=this.curContext();if(s===_context.types.braceStatement||s===_context.types.braceExpression)return!s.isExpr}return t===_types.types._return?_whitespace.lineBreak.test(this.input.slice(this.state.lastTokEnd,this.state.start)):t===_types.types._else||t===_types.types.semi||t===_types.types.eof||t===_types.types.parenR||(t===_types.types.braceL?this.curContext()===_context.types.braceStatement:!this.state.exprAllowed)},t.prototype.updateContext=function(t){var s=void 0,e=this.state.type;e.keyword&&t===_types.types.dot?this.state.exprAllowed=!1:(s=e.updateContext)?s.call(this,t):this.state.exprAllowed=e.beforeExpr},t}();exports["default"]=Tokenizer;

/***/ },

/***/ "./node_modules/babylon/lib/tokenizer/types.js":
/***/ function(module, exports) {

	"use strict";function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function binop(e,r){return new TokenType(e,{beforeExpr:!0,binop:r})}function kw(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];r.keyword=e,keywords[e]=types["_"+e]=new TokenType(e,r)}exports.__esModule=!0;var TokenType=exports.TokenType=function e(r){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];_classCallCheck(this,e),this.label=r,this.keyword=o.keyword,this.beforeExpr=!!o.beforeExpr,this.startsExpr=!!o.startsExpr,this.rightAssociative=!!o.rightAssociative,this.isLoop=!!o.isLoop,this.isAssign=!!o.isAssign,this.prefix=!!o.prefix,this.postfix=!!o.postfix,this.binop=o.binop||null,this.updateContext=null},beforeExpr={beforeExpr:!0},startsExpr={startsExpr:!0},types=exports.types={num:new TokenType("num",startsExpr),regexp:new TokenType("regexp",startsExpr),string:new TokenType("string",startsExpr),name:new TokenType("name",startsExpr),eof:new TokenType("eof"),bracketL:new TokenType("[",{beforeExpr:!0,startsExpr:!0}),bracketR:new TokenType("]"),braceL:new TokenType("{",{beforeExpr:!0,startsExpr:!0}),braceBarL:new TokenType("{|",{beforeExpr:!0,startsExpr:!0}),braceR:new TokenType("}"),braceBarR:new TokenType("|}"),parenL:new TokenType("(",{beforeExpr:!0,startsExpr:!0}),parenR:new TokenType(")"),comma:new TokenType(",",beforeExpr),semi:new TokenType(";",beforeExpr),colon:new TokenType(":",beforeExpr),doubleColon:new TokenType("::",beforeExpr),dot:new TokenType("."),question:new TokenType("?",beforeExpr),arrow:new TokenType("=>",beforeExpr),template:new TokenType("template"),ellipsis:new TokenType("...",beforeExpr),backQuote:new TokenType("`",startsExpr),dollarBraceL:new TokenType("${",{beforeExpr:!0,startsExpr:!0}),at:new TokenType("@"),eq:new TokenType("=",{beforeExpr:!0,isAssign:!0}),assign:new TokenType("_=",{beforeExpr:!0,isAssign:!0}),incDec:new TokenType("++/--",{prefix:!0,postfix:!0,startsExpr:!0}),prefix:new TokenType("prefix",{beforeExpr:!0,prefix:!0,startsExpr:!0}),logicalOR:binop("||",1),logicalAND:binop("&&",2),bitwiseOR:binop("|",3),bitwiseXOR:binop("^",4),bitwiseAND:binop("&",5),equality:binop("==/!=",6),relational:binop("</>",7),bitShift:binop("<</>>",8),plusMin:new TokenType("+/-",{beforeExpr:!0,binop:9,prefix:!0,startsExpr:!0}),modulo:binop("%",10),star:binop("*",10),slash:binop("/",10),exponent:new TokenType("**",{beforeExpr:!0,binop:11,rightAssociative:!0})},keywords=exports.keywords={};kw("break"),kw("case",beforeExpr),kw("catch"),kw("continue"),kw("debugger"),kw("default",beforeExpr),kw("do",{isLoop:!0,beforeExpr:!0}),kw("else",beforeExpr),kw("finally"),kw("for",{isLoop:!0}),kw("function",startsExpr),kw("if"),kw("return",beforeExpr),kw("switch"),kw("throw",beforeExpr),kw("try"),kw("var"),kw("let"),kw("const"),kw("while",{isLoop:!0}),kw("with"),kw("new",{beforeExpr:!0,startsExpr:!0}),kw("this",startsExpr),kw("super",startsExpr),kw("class"),kw("extends",beforeExpr),kw("export"),kw("import"),kw("yield",{beforeExpr:!0,startsExpr:!0}),kw("null",startsExpr),kw("true",startsExpr),kw("false",startsExpr),kw("in",{beforeExpr:!0,binop:7}),kw("instanceof",{beforeExpr:!0,binop:7}),kw("typeof",{beforeExpr:!0,prefix:!0,startsExpr:!0}),kw("void",{beforeExpr:!0,prefix:!0,startsExpr:!0}),kw("delete",{beforeExpr:!0,prefix:!0,startsExpr:!0});

/***/ },

/***/ "./node_modules/babylon/lib/tokenizer/context.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}exports.__esModule=!0,exports.types=exports.TokContext=void 0;var _types=__webpack_require__("./node_modules/babylon/lib/tokenizer/types.js"),_whitespace=__webpack_require__("./node_modules/babylon/lib/util/whitespace.js"),TokContext=exports.TokContext=function t(e,s,p,n){_classCallCheck(this,t),this.token=e,this.isExpr=!!s,this.preserveSpace=!!p,this.override=n},types=exports.types={braceStatement:new TokContext("{",(!1)),braceExpression:new TokContext("{",(!0)),templateQuasi:new TokContext("${",(!0)),parenStatement:new TokContext("(",(!1)),parenExpression:new TokContext("(",(!0)),template:new TokContext("`",(!0),(!0),function(t){return t.readTmplToken()}),functionExpression:new TokContext("function",(!0))};_types.types.parenR.updateContext=_types.types.braceR.updateContext=function(){if(1===this.state.context.length)return void(this.state.exprAllowed=!0);var t=this.state.context.pop();t===types.braceStatement&&this.curContext()===types.functionExpression?(this.state.context.pop(),this.state.exprAllowed=!1):t===types.templateQuasi?this.state.exprAllowed=!0:this.state.exprAllowed=!t.isExpr},_types.types.name.updateContext=function(t){this.state.exprAllowed=!1,t!==_types.types._let&&t!==_types.types._const&&t!==_types.types._var||_whitespace.lineBreak.test(this.input.slice(this.state.end))&&(this.state.exprAllowed=!0)},_types.types.braceL.updateContext=function(t){this.state.context.push(this.braceIsBlock(t)?types.braceStatement:types.braceExpression),this.state.exprAllowed=!0},_types.types.dollarBraceL.updateContext=function(){this.state.context.push(types.templateQuasi),this.state.exprAllowed=!0},_types.types.parenL.updateContext=function(t){var e=t===_types.types._if||t===_types.types._for||t===_types.types._with||t===_types.types._while;this.state.context.push(e?types.parenStatement:types.parenExpression),this.state.exprAllowed=!0},_types.types.incDec.updateContext=function(){},_types.types._function.updateContext=function(){this.curContext()!==types.braceStatement&&this.state.context.push(types.functionExpression),this.state.exprAllowed=!1},_types.types.backQuote.updateContext=function(){this.curContext()===types.template?this.state.context.pop():this.state.context.push(types.template),this.state.exprAllowed=!1};

/***/ },

/***/ "./node_modules/babylon/lib/util/whitespace.js":
/***/ function(module, exports) {

	"use strict";function isNewLine(e){return 10===e||13===e||8232===e||8233===e}exports.__esModule=!0,exports.isNewLine=isNewLine;var lineBreak=exports.lineBreak=/\r\n?|\n|\u2028|\u2029/,lineBreakG=exports.lineBreakG=new RegExp(lineBreak.source,"g"),nonASCIIwhitespace=exports.nonASCIIwhitespace=/[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;

/***/ },

/***/ "./node_modules/babylon/lib/util/location.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function getLineInfo(e,t){for(var i=1,n=0;;){_whitespace.lineBreakG.lastIndex=n;var o=_whitespace.lineBreakG.exec(e);if(!(o&&o.index<t))return new Position(i,t-n);++i,n=o.index+o[0].length}}exports.__esModule=!0,exports.SourceLocation=exports.Position=void 0,exports.getLineInfo=getLineInfo;var _whitespace=__webpack_require__("./node_modules/babylon/lib/util/whitespace.js"),Position=exports.Position=function e(t,i){_classCallCheck(this,e),this.line=t,this.column=i},SourceLocation=exports.SourceLocation=function t(e,i){_classCallCheck(this,t),this.start=e,this.end=i};

/***/ },

/***/ "./node_modules/babylon/lib/tokenizer/state.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}exports.__esModule=!0;var _location=__webpack_require__("./node_modules/babylon/lib/util/location.js"),_context=__webpack_require__("./node_modules/babylon/lib/tokenizer/context.js"),_types=__webpack_require__("./node_modules/babylon/lib/tokenizer/types.js"),State=function(){function t(){_classCallCheck(this,t)}return t.prototype.init=function(t,i){return this.strict=t.strictMode!==!1&&"module"===t.sourceType,this.input=i,this.potentialArrowAt=-1,this.inMethod=this.inFunction=this.inGenerator=this.inAsync=!1,this.labels=[],this.decorators=[],this.tokens=[],this.comments=[],this.trailingComments=[],this.leadingComments=[],this.commentStack=[],this.pos=this.lineStart=0,this.curLine=1,this.type=_types.types.eof,this.value=null,this.start=this.end=this.pos,this.startLoc=this.endLoc=this.curPosition(),this.lastTokEndLoc=this.lastTokStartLoc=null,this.lastTokStart=this.lastTokEnd=this.pos,this.context=[_context.types.braceStatement],this.exprAllowed=!0,this.containsEsc=this.containsOctal=!1,this.octalPosition=null,this},t.prototype.curPosition=function(){return new _location.Position(this.curLine,this.pos-this.lineStart)},t.prototype.clone=function(i){var s=new t;for(var n in this){var o=this[n];i&&"context"!==n||!Array.isArray(o)||(o=o.slice()),s[n]=o}return s},t}();exports["default"]=State;

/***/ },

/***/ "./node_modules/babylon/lib/parser/util.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}var _types=__webpack_require__("./node_modules/babylon/lib/tokenizer/types.js"),_index=__webpack_require__("./node_modules/babylon/lib/parser/index.js"),_index2=_interopRequireDefault(_index),_whitespace=__webpack_require__("./node_modules/babylon/lib/util/whitespace.js"),pp=_index2["default"].prototype;pp.addExtra=function(t,e,i){if(t){var n=t.extra=t.extra||{};n[e]=i}},pp.isRelational=function(t){return this.match(_types.types.relational)&&this.state.value===t},pp.expectRelational=function(t){this.isRelational(t)?this.next():this.unexpected()},pp.isContextual=function(t){return this.match(_types.types.name)&&this.state.value===t},pp.eatContextual=function(t){return this.state.value===t&&this.eat(_types.types.name)},pp.expectContextual=function(t,e){this.eatContextual(t)||this.unexpected(null,e)},pp.canInsertSemicolon=function(){return this.match(_types.types.eof)||this.match(_types.types.braceR)||_whitespace.lineBreak.test(this.input.slice(this.state.lastTokEnd,this.state.start))},pp.isLineTerminator=function(){return this.eat(_types.types.semi)||this.canInsertSemicolon()},pp.semicolon=function(){this.isLineTerminator()||this.unexpected()},pp.expect=function(t,e){return this.eat(t)||this.unexpected(e)},pp.unexpected=function(t){var e=arguments.length<=1||void 0===arguments[1]?"Unexpected token":arguments[1];this.raise(null!=t?t:this.state.start,e)};

/***/ },

/***/ "./node_modules/babylon/lib/parser/statement.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}var _types=__webpack_require__("./node_modules/babylon/lib/tokenizer/types.js"),_index=__webpack_require__("./node_modules/babylon/lib/parser/index.js"),_index2=_interopRequireDefault(_index),_whitespace=__webpack_require__("./node_modules/babylon/lib/util/whitespace.js"),pp=_index2["default"].prototype;pp.parseTopLevel=function(t,e){return e.sourceType=this.options.sourceType,this.parseBlockBody(e,!0,!0,_types.types.eof),t.program=this.finishNode(e,"Program"),t.comments=this.state.comments,t.tokens=this.state.tokens,this.finishNode(t,"File")};var loopLabel={kind:"loop"},switchLabel={kind:"switch"};pp.stmtToDirective=function(t){var e=t.expression,s=this.startNodeAt(e.start,e.loc.start),i=this.startNodeAt(t.start,t.loc.start),a=this.input.slice(e.start,e.end),r=s.value=a.slice(1,-1);return this.addExtra(s,"raw",a),this.addExtra(s,"rawValue",r),i.value=this.finishNodeAt(s,"DirectiveLiteral",e.end,e.loc.end),this.finishNodeAt(i,"Directive",t.end,t.loc.end)},pp.parseStatement=function(t,e){this.match(_types.types.at)&&this.parseDecorators(!0);var s=this.state.type,i=this.startNode();switch(s){case _types.types._break:case _types.types._continue:return this.parseBreakContinueStatement(i,s.keyword);case _types.types._debugger:return this.parseDebuggerStatement(i);case _types.types._do:return this.parseDoStatement(i);case _types.types._for:return this.parseForStatement(i);case _types.types._function:return t||this.unexpected(),this.parseFunctionStatement(i);case _types.types._class:return t||this.unexpected(),this.takeDecorators(i),this.parseClass(i,!0);case _types.types._if:return this.parseIfStatement(i);case _types.types._return:return this.parseReturnStatement(i);case _types.types._switch:return this.parseSwitchStatement(i);case _types.types._throw:return this.parseThrowStatement(i);case _types.types._try:return this.parseTryStatement(i);case _types.types._let:case _types.types._const:t||this.unexpected();case _types.types._var:return this.parseVarStatement(i,s);case _types.types._while:return this.parseWhileStatement(i);case _types.types._with:return this.parseWithStatement(i);case _types.types.braceL:return this.parseBlock();case _types.types.semi:return this.parseEmptyStatement(i);case _types.types._export:case _types.types._import:return this.options.allowImportExportEverywhere||(e||this.raise(this.state.start,"'import' and 'export' may only appear at the top level"),this.inModule||this.raise(this.state.start,"'import' and 'export' may appear only with 'sourceType: module'")),s===_types.types._import?this.parseImport(i):this.parseExport(i);case _types.types.name:if("async"===this.state.value){var a=this.state.clone();if(this.next(),this.match(_types.types._function)&&!this.canInsertSemicolon())return this.expect(_types.types._function),this.parseFunction(i,!0,!1,!0);this.state=a}}var r=this.state.value,p=this.parseExpression();return s===_types.types.name&&"Identifier"===p.type&&this.eat(_types.types.colon)?this.parseLabeledStatement(i,r,p):this.parseExpressionStatement(i,p)},pp.takeDecorators=function(t){this.state.decorators.length&&(t.decorators=this.state.decorators,this.state.decorators=[])},pp.parseDecorators=function(t){for(;this.match(_types.types.at);)this.state.decorators.push(this.parseDecorator());t&&this.match(_types.types._export)||this.match(_types.types._class)||this.raise(this.state.start,"Leading decorators must be attached to a class declaration")},pp.parseDecorator=function(){this.hasPlugin("decorators")||this.unexpected();var t=this.startNode();return this.next(),t.expression=this.parseMaybeAssign(),this.finishNode(t,"Decorator")},pp.parseBreakContinueStatement=function(t,e){var s="break"===e;this.next(),this.isLineTerminator()?t.label=null:this.match(_types.types.name)?(t.label=this.parseIdentifier(),this.semicolon()):this.unexpected();var i=void 0;for(i=0;i<this.state.labels.length;++i){var a=this.state.labels[i];if(null==t.label||a.name===t.label.name){if(null!=a.kind&&(s||"loop"===a.kind))break;if(t.label&&s)break}}return i===this.state.labels.length&&this.raise(t.start,"Unsyntactic "+e),this.finishNode(t,s?"BreakStatement":"ContinueStatement")},pp.parseDebuggerStatement=function(t){return this.next(),this.semicolon(),this.finishNode(t,"DebuggerStatement")},pp.parseDoStatement=function(t){return this.next(),this.state.labels.push(loopLabel),t.body=this.parseStatement(!1),this.state.labels.pop(),this.expect(_types.types._while),t.test=this.parseParenExpression(),this.eat(_types.types.semi),this.finishNode(t,"DoWhileStatement")},pp.parseForStatement=function(t){this.next(),this.state.labels.push(loopLabel);var e=!1;if(this.hasPlugin("asyncGenerators")&&this.state.inAsync&&this.isContextual("await")&&(e=!0,this.next()),this.expect(_types.types.parenL),this.match(_types.types.semi))return e&&this.unexpected(),this.parseFor(t,null);if(this.match(_types.types._var)||this.match(_types.types._let)||this.match(_types.types._const)){var s=this.startNode(),i=this.state.type;return this.next(),this.parseVar(s,!0,i),this.finishNode(s,"VariableDeclaration"),!this.match(_types.types._in)&&!this.isContextual("of")||1!==s.declarations.length||s.declarations[0].init?(e&&this.unexpected(),this.parseFor(t,s)):this.parseForIn(t,s,e)}var a={start:0},r=this.parseExpression(!0,a);return this.match(_types.types._in)||this.isContextual("of")?(this.toAssignable(r),this.checkLVal(r),this.parseForIn(t,r,e)):(a.start&&this.unexpected(a.start),e&&this.unexpected(),this.parseFor(t,r))},pp.parseFunctionStatement=function(t){return this.next(),this.parseFunction(t,!0)},pp.parseIfStatement=function(t){return this.next(),t.test=this.parseParenExpression(),t.consequent=this.parseStatement(!1),t.alternate=this.eat(_types.types._else)?this.parseStatement(!1):null,this.finishNode(t,"IfStatement")},pp.parseReturnStatement=function(t){return this.state.inFunction||this.options.allowReturnOutsideFunction||this.raise(this.state.start,"'return' outside of function"),this.next(),this.isLineTerminator()?t.argument=null:(t.argument=this.parseExpression(),this.semicolon()),this.finishNode(t,"ReturnStatement")},pp.parseSwitchStatement=function(t){this.next(),t.discriminant=this.parseParenExpression(),t.cases=[],this.expect(_types.types.braceL),this.state.labels.push(switchLabel);for(var e,s=void 0;!this.match(_types.types.braceR);)if(this.match(_types.types._case)||this.match(_types.types._default)){var i=this.match(_types.types._case);s&&this.finishNode(s,"SwitchCase"),t.cases.push(s=this.startNode()),s.consequent=[],this.next(),i?s.test=this.parseExpression():(e&&this.raise(this.state.lastTokStart,"Multiple default clauses"),e=!0,s.test=null),this.expect(_types.types.colon)}else s?s.consequent.push(this.parseStatement(!0)):this.unexpected();return s&&this.finishNode(s,"SwitchCase"),this.next(),this.state.labels.pop(),this.finishNode(t,"SwitchStatement")},pp.parseThrowStatement=function(t){return this.next(),_whitespace.lineBreak.test(this.input.slice(this.state.lastTokEnd,this.state.start))&&this.raise(this.state.lastTokEnd,"Illegal newline after throw"),t.argument=this.parseExpression(),this.semicolon(),this.finishNode(t,"ThrowStatement")};var empty=[];pp.parseTryStatement=function(t){if(this.next(),t.block=this.parseBlock(),t.handler=null,this.match(_types.types._catch)){var e=this.startNode();this.next(),this.expect(_types.types.parenL),e.param=this.parseBindingAtom(),this.checkLVal(e.param,!0,Object.create(null)),this.expect(_types.types.parenR),e.body=this.parseBlock(),t.handler=this.finishNode(e,"CatchClause")}return t.guardedHandlers=empty,t.finalizer=this.eat(_types.types._finally)?this.parseBlock():null,t.handler||t.finalizer||this.raise(t.start,"Missing catch or finally clause"),this.finishNode(t,"TryStatement")},pp.parseVarStatement=function(t,e){return this.next(),this.parseVar(t,!1,e),this.semicolon(),this.finishNode(t,"VariableDeclaration")},pp.parseWhileStatement=function(t){return this.next(),t.test=this.parseParenExpression(),this.state.labels.push(loopLabel),t.body=this.parseStatement(!1),this.state.labels.pop(),this.finishNode(t,"WhileStatement")},pp.parseWithStatement=function(t){return this.state.strict&&this.raise(this.state.start,"'with' in strict mode"),this.next(),t.object=this.parseParenExpression(),t.body=this.parseStatement(!1),this.finishNode(t,"WithStatement")},pp.parseEmptyStatement=function(t){return this.next(),this.finishNode(t,"EmptyStatement")},pp.parseLabeledStatement=function(t,e,s){for(var i=this.state.labels,a=Array.isArray(i),r=0,i=a?i:i[Symbol.iterator]();;){var p;if(a){if(r>=i.length)break;p=i[r++]}else{if(r=i.next(),r.done)break;p=r.value}var n=p;n.name===e&&this.raise(s.start,"Label '"+e+"' is already declared")}for(var h=this.state.type.isLoop?"loop":this.match(_types.types._switch)?"switch":null,o=this.state.labels.length-1;o>=0;o--){var c=this.state.labels[o];if(c.statementStart!==t.start)break;c.statementStart=this.state.start,c.kind=h}return this.state.labels.push({name:e,kind:h,statementStart:this.state.start}),t.body=this.parseStatement(!0),this.state.labels.pop(),t.label=s,this.finishNode(t,"LabeledStatement")},pp.parseExpressionStatement=function(t,e){return t.expression=e,this.semicolon(),this.finishNode(t,"ExpressionStatement")},pp.parseBlock=function(t){var e=this.startNode();return this.expect(_types.types.braceL),this.parseBlockBody(e,t,!1,_types.types.braceR),this.finishNode(e,"BlockStatement")},pp.parseBlockBody=function(t,e,s,i){t.body=[],t.directives=[];for(var a=!1,r=void 0,p=void 0;!this.eat(i);){a||!this.state.containsOctal||p||(p=this.state.octalPosition);var n=this.parseStatement(!0,s);if(!e||a||"ExpressionStatement"!==n.type||"StringLiteral"!==n.expression.type||n.expression.extra.parenthesized)a=!0,t.body.push(n);else{var h=this.stmtToDirective(n);t.directives.push(h),void 0===r&&"use strict"===h.value.value&&(r=this.state.strict,this.setStrict(!0),p&&this.raise(p,"Octal literal in strict mode"))}}r===!1&&this.setStrict(!1)},pp.parseFor=function(t,e){return t.init=e,this.expect(_types.types.semi),t.test=this.match(_types.types.semi)?null:this.parseExpression(),this.expect(_types.types.semi),t.update=this.match(_types.types.parenR)?null:this.parseExpression(),this.expect(_types.types.parenR),t.body=this.parseStatement(!1),this.state.labels.pop(),this.finishNode(t,"ForStatement")},pp.parseForIn=function(t,e,s){var i=void 0;return s?(this.eatContextual("of"),i="ForAwaitStatement"):(i=this.match(_types.types._in)?"ForInStatement":"ForOfStatement",this.next()),t.left=e,t.right=this.parseExpression(),this.expect(_types.types.parenR),t.body=this.parseStatement(!1),this.state.labels.pop(),this.finishNode(t,i)},pp.parseVar=function(t,e,s){for(t.declarations=[],t.kind=s.keyword;;){var i=this.startNode();if(this.parseVarHead(i),this.eat(_types.types.eq)?i.init=this.parseMaybeAssign(e):s!==_types.types._const||this.match(_types.types._in)||this.isContextual("of")?"Identifier"===i.id.type||e&&(this.match(_types.types._in)||this.isContextual("of"))?i.init=null:this.raise(this.state.lastTokEnd,"Complex binding patterns require an initialization value"):this.unexpected(),t.declarations.push(this.finishNode(i,"VariableDeclarator")),!this.eat(_types.types.comma))break}return t},pp.parseVarHead=function(t){t.id=this.parseBindingAtom(),this.checkLVal(t.id,!0)},pp.parseFunction=function(t,e,s,i,a){var r=this.state.inMethod;return this.state.inMethod=!1,this.initFunction(t,i),this.match(_types.types.star)&&(t.async&&!this.hasPlugin("asyncGenerators")?this.unexpected():(t.generator=!0,this.next())),!e||a||this.match(_types.types.name)||this.match(_types.types._yield)||this.unexpected(),(this.match(_types.types.name)||this.match(_types.types._yield))&&(t.id=this.parseBindingIdentifier()),this.parseFunctionParams(t),this.parseFunctionBody(t,s),this.state.inMethod=r,this.finishNode(t,e?"FunctionDeclaration":"FunctionExpression")},pp.parseFunctionParams=function(t){this.expect(_types.types.parenL),t.params=this.parseBindingList(_types.types.parenR)},pp.parseClass=function(t,e,s){return this.next(),this.parseClassId(t,e,s),this.parseClassSuper(t),this.parseClassBody(t),this.finishNode(t,e?"ClassDeclaration":"ClassExpression")},pp.isClassProperty=function(){return this.match(_types.types.eq)||this.isLineTerminator()},pp.isClassMutatorStarter=function(){return!1},pp.parseClassBody=function(t){var e=this.state.strict;this.state.strict=!0;var s=!1,i=!1,a=[],r=this.startNode();for(r.body=[],this.expect(_types.types.braceL);!this.eat(_types.types.braceR);)if(!this.eat(_types.types.semi))if(this.match(_types.types.at))a.push(this.parseDecorator());else{var p=this.startNode();a.length&&(p.decorators=a,a=[]);var n=!1,h=this.match(_types.types.name)&&"static"===this.state.value,o=this.eat(_types.types.star),c=!1,l=!1;if(this.parsePropertyName(p),p["static"]=h&&!this.match(_types.types.parenL),p["static"]&&(o&&this.unexpected(),o=this.eat(_types.types.star),this.parsePropertyName(p)),!o&&"Identifier"===p.key.type&&!p.computed){if(this.isClassProperty()){r.body.push(this.parseClassProperty(p));continue}this.hasPlugin("classConstructorCall")&&"call"===p.key.name&&this.match(_types.types.name)&&"constructor"===this.state.value&&(n=!0,this.parsePropertyName(p))}var y=!this.match(_types.types.parenL)&&!p.computed&&"Identifier"===p.key.type&&"async"===p.key.name;if(y&&(this.hasPlugin("asyncGenerators")&&this.eat(_types.types.star)&&(o=!0),l=!0,this.parsePropertyName(p)),p.kind="method",!p.computed){var u=p.key;l||o||this.isClassMutatorStarter()||"Identifier"!==u.type||this.match(_types.types.parenL)||"get"!==u.name&&"set"!==u.name||(c=!0,p.kind=u.name,u=this.parsePropertyName(p));var d=!n&&!p["static"]&&("Identifier"===u.type&&"constructor"===u.name||"StringLiteral"===u.type&&"constructor"===u.value);d&&(i&&this.raise(u.start,"Duplicate constructor in the same class"),c&&this.raise(u.start,"Constructor can't have get/set modifier"),o&&this.raise(u.start,"Constructor can't be a generator"),l&&this.raise(u.start,"Constructor can't be an async function"),p.kind="constructor",i=!0);var m=p["static"]&&("Identifier"===u.type&&"prototype"===u.name||"StringLiteral"===u.type&&"prototype"===u.value);m&&this.raise(u.start,"Classes may not have static property named prototype")}if(n&&(s&&this.raise(p.start,"Duplicate constructor call in the same class"),p.kind="constructorCall",s=!0),"constructor"!==p.kind&&"constructorCall"!==p.kind||!p.decorators||this.raise(p.start,"You can't attach decorators to a class constructor"),this.parseClassMethod(r,p,o,l),c){var f="get"===p.kind?0:1;if(p.params.length!==f){var _=p.start;"get"===p.kind?this.raise(_,"getter should have no params"):this.raise(_,"setter should have exactly one param")}}}a.length&&this.raise(this.state.start,"You have trailing decorators with no method"),t.body=this.finishNode(r,"ClassBody"),this.state.strict=e},pp.parseClassProperty=function(t){return this.match(_types.types.eq)?(this.hasPlugin("classProperties")||this.unexpected(),this.next(),t.value=this.parseMaybeAssign()):t.value=null,this.semicolon(),this.finishNode(t,"ClassProperty")},pp.parseClassMethod=function(t,e,s,i){this.parseMethod(e,s,i),t.body.push(this.finishNode(e,"ClassMethod"))},pp.parseClassId=function(t,e,s){this.match(_types.types.name)?t.id=this.parseIdentifier():s||!e?t.id=null:this.unexpected()},pp.parseClassSuper=function(t){t.superClass=this.eat(_types.types._extends)?this.parseExprSubscripts():null},pp.parseExport=function(t){if(this.next(),this.match(_types.types.star)){var e=this.startNode();if(this.next(),!this.hasPlugin("exportExtensions")||!this.eatContextual("as"))return this.parseExportFrom(t,!0),this.finishNode(t,"ExportAllDeclaration");e.exported=this.parseIdentifier(),t.specifiers=[this.finishNode(e,"ExportNamespaceSpecifier")],this.parseExportSpecifiersMaybe(t),this.parseExportFrom(t,!0)}else if(this.hasPlugin("exportExtensions")&&this.isExportDefaultSpecifier()){var s=this.startNode();if(s.exported=this.parseIdentifier(!0),t.specifiers=[this.finishNode(s,"ExportDefaultSpecifier")],this.match(_types.types.comma)&&this.lookahead().type===_types.types.star){this.expect(_types.types.comma);var i=this.startNode();this.expect(_types.types.star),this.expectContextual("as"),i.exported=this.parseIdentifier(),t.specifiers.push(this.finishNode(i,"ExportNamespaceSpecifier"))}else this.parseExportSpecifiersMaybe(t);this.parseExportFrom(t,!0)}else{if(this.eat(_types.types._default)){var a=this.startNode(),r=!1;return this.eat(_types.types._function)?a=this.parseFunction(a,!0,!1,!1,!0):this.match(_types.types._class)?a=this.parseClass(a,!0,!0):(r=!0,a=this.parseMaybeAssign()),t.declaration=a,r&&this.semicolon(),this.checkExport(t),this.finishNode(t,"ExportDefaultDeclaration")}this.state.type.keyword||this.shouldParseExportDeclaration()?(t.specifiers=[],t.source=null,t.declaration=this.parseExportDeclaration(t)):(t.declaration=null,t.specifiers=this.parseExportSpecifiers(),this.parseExportFrom(t))}return this.checkExport(t),this.finishNode(t,"ExportNamedDeclaration")},pp.parseExportDeclaration=function(){return this.parseStatement(!0)},pp.isExportDefaultSpecifier=function(){if(this.match(_types.types.name))return"type"!==this.state.value&&"async"!==this.state.value&&"interface"!==this.state.value;if(!this.match(_types.types._default))return!1;var t=this.lookahead();return t.type===_types.types.comma||t.type===_types.types.name&&"from"===t.value},pp.parseExportSpecifiersMaybe=function(t){this.eat(_types.types.comma)&&(t.specifiers=t.specifiers.concat(this.parseExportSpecifiers()))},pp.parseExportFrom=function(t,e){this.eatContextual("from")?(t.source=this.match(_types.types.string)?this.parseExprAtom():this.unexpected(),this.checkExport(t)):e?this.unexpected():t.source=null,this.semicolon()},pp.shouldParseExportDeclaration=function(){return this.isContextual("async")},pp.checkExport=function(t){if(this.state.decorators.length){var e=t.declaration&&("ClassDeclaration"===t.declaration.type||"ClassExpression"===t.declaration.type);t.declaration&&e||this.raise(t.start,"You can only use decorators on an export when exporting a class"),this.takeDecorators(t.declaration)}},pp.parseExportSpecifiers=function(){var t=[],e=!0,s=void 0;for(this.expect(_types.types.braceL);!this.eat(_types.types.braceR);){if(e)e=!1;else if(this.expect(_types.types.comma),this.eat(_types.types.braceR))break;var i=this.match(_types.types._default);i&&!s&&(s=!0);var a=this.startNode();a.local=this.parseIdentifier(i),a.exported=this.eatContextual("as")?this.parseIdentifier(!0):a.local.__clone(),t.push(this.finishNode(a,"ExportSpecifier"))}return s&&!this.isContextual("from")&&this.unexpected(),t},pp.parseImport=function(t){return this.next(),this.match(_types.types.string)?(t.specifiers=[],t.source=this.parseExprAtom()):(t.specifiers=[],this.parseImportSpecifiers(t),this.expectContextual("from"),t.source=this.match(_types.types.string)?this.parseExprAtom():this.unexpected()),this.semicolon(),this.finishNode(t,"ImportDeclaration")},pp.parseImportSpecifiers=function(t){var e=!0;if(this.match(_types.types.name)){var s=this.state.start,i=this.state.startLoc;if(t.specifiers.push(this.parseImportSpecifierDefault(this.parseIdentifier(),s,i)),!this.eat(_types.types.comma))return}if(this.match(_types.types.star)){var a=this.startNode();return this.next(),this.expectContextual("as"),a.local=this.parseIdentifier(),this.checkLVal(a.local,!0),void t.specifiers.push(this.finishNode(a,"ImportNamespaceSpecifier"))}for(this.expect(_types.types.braceL);!this.eat(_types.types.braceR);){if(e)e=!1;else if(this.expect(_types.types.comma),this.eat(_types.types.braceR))break;var r=this.startNode();r.imported=this.parseIdentifier(!0),r.local=this.eatContextual("as")?this.parseIdentifier():r.imported.__clone(),this.checkLVal(r.local,!0),t.specifiers.push(this.finishNode(r,"ImportSpecifier"))}},pp.parseImportSpecifierDefault=function(t,e,s){var i=this.startNodeAt(e,s);return i.local=t,this.checkLVal(i.local,!0),this.finishNode(i,"ImportDefaultSpecifier")};

/***/ },

/***/ "./node_modules/babylon/lib/parser/lval.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _types=__webpack_require__("./node_modules/babylon/lib/tokenizer/types.js"),_index=__webpack_require__("./node_modules/babylon/lib/parser/index.js"),_index2=_interopRequireDefault(_index),_identifier=__webpack_require__("./node_modules/babylon/lib/util/identifier.js"),pp=_index2["default"].prototype;pp.toAssignable=function(e,t){if(e)switch(e.type){case"Identifier":case"ObjectPattern":case"ArrayPattern":case"AssignmentPattern":break;case"ObjectExpression":e.type="ObjectPattern";for(var s=e.properties,r=Array.isArray(s),i=0,s=r?s:s[Symbol.iterator]();;){var a;if(r){if(i>=s.length)break;a=s[i++]}else{if(i=s.next(),i.done)break;a=i.value}var n=a;"ObjectMethod"===n.type?"get"===n.kind||"set"===n.kind?this.raise(n.key.start,"Object pattern can't contain getter or setter"):this.raise(n.key.start,"Object pattern can't contain methods"):this.toAssignable(n,t)}break;case"ObjectProperty":this.toAssignable(e.value,t);break;case"SpreadProperty":e.type="RestProperty";break;case"ArrayExpression":e.type="ArrayPattern",this.toAssignableList(e.elements,t);break;case"AssignmentExpression":"="===e.operator?(e.type="AssignmentPattern",delete e.operator):this.raise(e.left.end,"Only '=' operator can be used for specifying default value.");break;case"MemberExpression":if(!t)break;default:this.raise(e.start,"Assigning to rvalue")}return e},pp.toAssignableList=function(e,t){var s=e.length;if(s){var r=e[s-1];if(r&&"RestElement"===r.type)--s;else if(r&&"SpreadElement"===r.type){r.type="RestElement";var i=r.argument;this.toAssignable(i,t),"Identifier"!==i.type&&"MemberExpression"!==i.type&&"ArrayPattern"!==i.type&&this.unexpected(i.start),--s}}for(var a=0;a<s;a++){var n=e[a];n&&this.toAssignable(n,t)}return e},pp.toReferencedList=function(e){return e},pp.parseSpread=function(e){var t=this.startNode();return this.next(),t.argument=this.parseMaybeAssign(e),this.finishNode(t,"SpreadElement")},pp.parseRest=function(){var e=this.startNode();return this.next(),e.argument=this.parseBindingIdentifier(),this.finishNode(e,"RestElement")},pp.shouldAllowYieldIdentifier=function(){return this.match(_types.types._yield)&&!this.state.strict&&!this.state.inGenerator},pp.parseBindingIdentifier=function(){return this.parseIdentifier(this.shouldAllowYieldIdentifier())},pp.parseBindingAtom=function(){switch(this.state.type){case _types.types._yield:(this.state.strict||this.state.inGenerator)&&this.unexpected();case _types.types.name:return this.parseIdentifier(!0);case _types.types.bracketL:var e=this.startNode();return this.next(),e.elements=this.parseBindingList(_types.types.bracketR,!0),this.finishNode(e,"ArrayPattern");case _types.types.braceL:return this.parseObj(!0);default:this.unexpected()}},pp.parseBindingList=function(e,t){for(var s=[],r=!0;!this.eat(e);)if(r?r=!1:this.expect(_types.types.comma),t&&this.match(_types.types.comma))s.push(null);else{if(this.eat(e))break;if(this.match(_types.types.ellipsis)){s.push(this.parseAssignableListItemTypes(this.parseRest())),this.expect(e);break}for(var i=[];this.match(_types.types.at);)i.push(this.parseDecorator());var a=this.parseMaybeDefault();i.length&&(a.decorators=i),this.parseAssignableListItemTypes(a),s.push(this.parseMaybeDefault(a.start,a.loc.start,a))}return s},pp.parseAssignableListItemTypes=function(e){return e},pp.parseMaybeDefault=function(e,t,s){if(t=t||this.state.startLoc,e=e||this.state.start,s=s||this.parseBindingAtom(),!this.eat(_types.types.eq))return s;var r=this.startNodeAt(e,t);return r.left=s,r.right=this.parseMaybeAssign(),this.finishNode(r,"AssignmentPattern")},pp.checkLVal=function(e,t,s){switch(e.type){case"Identifier":if(this.state.strict&&(_identifier.reservedWords.strictBind(e.name)||_identifier.reservedWords.strict(e.name))&&this.raise(e.start,(t?"Binding ":"Assigning to ")+e.name+" in strict mode"),s){var r="_"+e.name;s[r]?this.raise(e.start,"Argument name clash in strict mode"):s[r]=!0}break;case"MemberExpression":t&&this.raise(e.start,(t?"Binding":"Assigning to")+" member expression");break;case"ObjectPattern":for(var i=e.properties,a=Array.isArray(i),n=0,i=a?i:i[Symbol.iterator]();;){var p;if(a){if(n>=i.length)break;p=i[n++]}else{if(n=i.next(),n.done)break;p=n.value}var o=p;"ObjectProperty"===o.type&&(o=o.value),this.checkLVal(o,t,s)}break;case"ArrayPattern":for(var h=e.elements,c=Array.isArray(h),l=0,h=c?h:h[Symbol.iterator]();;){var d;if(c){if(l>=h.length)break;d=h[l++]}else{if(l=h.next(),l.done)break;d=l.value}var y=d;y&&this.checkLVal(y,t,s)}break;case"AssignmentPattern":this.checkLVal(e.left,t,s);break;case"RestProperty":case"RestElement":this.checkLVal(e.argument,t,s);break;default:this.raise(e.start,(t?"Binding":"Assigning to")+" rvalue")}};

/***/ },

/***/ "./node_modules/babylon/lib/parser/expression.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}var _types=__webpack_require__("./node_modules/babylon/lib/tokenizer/types.js"),_index=__webpack_require__("./node_modules/babylon/lib/parser/index.js"),_index2=_interopRequireDefault(_index),_identifier=__webpack_require__("./node_modules/babylon/lib/util/identifier.js"),pp=_index2["default"].prototype;pp.checkPropClash=function(t,e){if(!t.computed){var s=t.key,i=void 0;switch(s.type){case"Identifier":i=s.name;break;case"StringLiteral":case"NumericLiteral":i=String(s.value);break;default:return}"__proto__"===i&&"init"===t.kind&&(e.proto&&this.raise(s.start,"Redefinition of __proto__ property"),e.proto=!0)}},pp.parseExpression=function(t,e){var s=this.state.start,i=this.state.startLoc,r=this.parseMaybeAssign(t,e);if(this.match(_types.types.comma)){var a=this.startNodeAt(s,i);for(a.expressions=[r];this.eat(_types.types.comma);)a.expressions.push(this.parseMaybeAssign(t,e));return this.toReferencedList(a.expressions),this.finishNode(a,"SequenceExpression")}return r},pp.parseMaybeAssign=function(t,e,s,i){if(this.match(_types.types._yield)&&this.state.inGenerator)return this.parseYield();var r=void 0;e?r=!1:(e={start:0},r=!0);var a=this.state.start,p=this.state.startLoc;(this.match(_types.types.parenL)||this.match(_types.types.name))&&(this.state.potentialArrowAt=this.state.start);var n=this.parseMaybeConditional(t,e,i);if(s&&(n=s.call(this,n,a,p)),this.state.type.isAssign){var h=this.startNodeAt(a,p);if(h.operator=this.state.value,h.left=this.match(_types.types.eq)?this.toAssignable(n):n,e.start=0,this.checkLVal(n),n.extra&&n.extra.parenthesized){var o=void 0;"ObjectPattern"===n.type?o="`({a}) = 0` use `({a} = 0)`":"ArrayPattern"===n.type&&(o="`([a]) = 0` use `([a] = 0)`"),o&&this.raise(n.start,"You're trying to assign to a parenthesized expression, eg. instead of "+o)}return this.next(),h.right=this.parseMaybeAssign(t),this.finishNode(h,"AssignmentExpression")}return r&&e.start&&this.unexpected(e.start),n},pp.parseMaybeConditional=function(t,e,s){var i=this.state.start,r=this.state.startLoc,a=this.parseExprOps(t,e);return e&&e.start?a:this.parseConditional(a,t,i,r,s)},pp.parseConditional=function(t,e,s,i){if(this.eat(_types.types.question)){var r=this.startNodeAt(s,i);return r.test=t,r.consequent=this.parseMaybeAssign(),this.expect(_types.types.colon),r.alternate=this.parseMaybeAssign(e),this.finishNode(r,"ConditionalExpression")}return t},pp.parseExprOps=function(t,e){var s=this.state.start,i=this.state.startLoc,r=this.parseMaybeUnary(e);return e&&e.start?r:this.parseExprOp(r,s,i,-1,t)},pp.parseExprOp=function(t,e,s,i,r){var a=this.state.type.binop;if(!(null==a||r&&this.match(_types.types._in))&&a>i){var p=this.startNodeAt(e,s);p.left=t,p.operator=this.state.value,"**"!==p.operator||"UnaryExpression"!==t.type||!t.extra||t.extra.parenthesizedArgument||t.extra.parenthesized||this.raise(t.argument.start,"Illegal expression. Wrap left hand side or entire exponentiation in parentheses.");var n=this.state.type;this.next();var h=this.state.start,o=this.state.startLoc;return p.right=this.parseExprOp(this.parseMaybeUnary(),h,o,n.rightAssociative?a-1:a,r),this.finishNode(p,n===_types.types.logicalOR||n===_types.types.logicalAND?"LogicalExpression":"BinaryExpression"),this.parseExprOp(p,e,s,i,r)}return t},pp.parseMaybeUnary=function(t){if(this.state.type.prefix){var e=this.startNode(),s=this.match(_types.types.incDec);e.operator=this.state.value,e.prefix=!0,this.next();var i=this.state.type;return e.argument=this.parseMaybeUnary(),this.addExtra(e,"parenthesizedArgument",!(i!==_types.types.parenL||e.argument.extra&&e.argument.extra.parenthesized)),t&&t.start&&this.unexpected(t.start),s?this.checkLVal(e.argument):this.state.strict&&"delete"===e.operator&&"Identifier"===e.argument.type&&this.raise(e.start,"Deleting local variable in strict mode"),this.finishNode(e,s?"UpdateExpression":"UnaryExpression")}var r=this.state.start,a=this.state.startLoc,p=this.parseExprSubscripts(t);if(t&&t.start)return p;for(;this.state.type.postfix&&!this.canInsertSemicolon();){var n=this.startNodeAt(r,a);n.operator=this.state.value,n.prefix=!1,n.argument=p,this.checkLVal(p),this.next(),p=this.finishNode(n,"UpdateExpression")}return p},pp.parseExprSubscripts=function(t){var e=this.state.start,s=this.state.startLoc,i=this.state.potentialArrowAt,r=this.parseExprAtom(t);return"ArrowFunctionExpression"===r.type&&r.start===i?r:t&&t.start?r:this.parseSubscripts(r,e,s)},pp.parseSubscripts=function(t,e,s,i){for(;;){if(!i&&this.eat(_types.types.doubleColon)){var r=this.startNodeAt(e,s);return r.object=t,r.callee=this.parseNoCallExpr(),this.parseSubscripts(this.finishNode(r,"BindExpression"),e,s,i)}if(this.eat(_types.types.dot)){var a=this.startNodeAt(e,s);a.object=t,a.property=this.parseIdentifier(!0),a.computed=!1,t=this.finishNode(a,"MemberExpression")}else if(this.eat(_types.types.bracketL)){var p=this.startNodeAt(e,s);p.object=t,p.property=this.parseExpression(),p.computed=!0,this.expect(_types.types.bracketR),t=this.finishNode(p,"MemberExpression")}else if(!i&&this.match(_types.types.parenL)){var n=this.state.potentialArrowAt===t.start&&"Identifier"===t.type&&"async"===t.name&&!this.canInsertSemicolon();this.next();var h=this.startNodeAt(e,s);if(h.callee=t,h.arguments=this.parseCallExpressionArguments(_types.types.parenR,n),t=this.finishNode(h,"CallExpression"),n&&this.shouldParseAsyncArrow())return this.parseAsyncArrowFromCallExpression(this.startNodeAt(e,s),h);this.toReferencedList(h.arguments)}else{if(!this.match(_types.types.backQuote))return t;var o=this.startNodeAt(e,s);o.tag=t,o.quasi=this.parseTemplate(),t=this.finishNode(o,"TaggedTemplateExpression")}}},pp.parseCallExpressionArguments=function(t,e){for(var s=void 0,i=[],r=!0;!this.eat(t);){if(r)r=!1;else if(this.expect(_types.types.comma),this.eat(t))break;this.match(_types.types.parenL)&&!s&&(s=this.state.start),i.push(this.parseExprListItem(void 0,e?{start:0}:void 0))}return e&&s&&this.shouldParseAsyncArrow()&&this.unexpected(),i},pp.shouldParseAsyncArrow=function(){return this.match(_types.types.arrow)},pp.parseAsyncArrowFromCallExpression=function(t,e){return this.expect(_types.types.arrow),this.parseArrowExpression(t,e.arguments,!0)},pp.parseNoCallExpr=function(){var t=this.state.start,e=this.state.startLoc;return this.parseSubscripts(this.parseExprAtom(),t,e,!0)},pp.parseExprAtom=function(t){var e=void 0,s=this.state.potentialArrowAt===this.state.start;switch(this.state.type){case _types.types._super:return this.state.inMethod||this.options.allowSuperOutsideMethod||this.raise(this.state.start,"'super' outside of function or class"),e=this.startNode(),this.next(),this.match(_types.types.parenL)||this.match(_types.types.bracketL)||this.match(_types.types.dot)||this.unexpected(),this.match(_types.types.parenL)&&"constructor"!==this.state.inMethod&&!this.options.allowSuperOutsideMethod&&this.raise(e.start,"super() outside of class constructor"),this.finishNode(e,"Super");case _types.types._this:return e=this.startNode(),this.next(),this.finishNode(e,"ThisExpression");case _types.types._yield:this.state.inGenerator&&this.unexpected();case _types.types.name:e=this.startNode();var i="await"===this.state.value&&this.state.inAsync,r=this.shouldAllowYieldIdentifier(),a=this.parseIdentifier(i||r);if("await"===a.name){if(this.state.inAsync||this.inModule)return this.parseAwait(e)}else{if("async"===a.name&&this.match(_types.types._function)&&!this.canInsertSemicolon())return this.next(),this.parseFunction(e,!1,!1,!0);if(s&&"async"===a.name&&this.match(_types.types.name)){var p=[this.parseIdentifier()];return this.expect(_types.types.arrow),this.parseArrowExpression(e,p,!0)}}return s&&!this.canInsertSemicolon()&&this.eat(_types.types.arrow)?this.parseArrowExpression(e,[a]):a;case _types.types._do:if(this.hasPlugin("doExpressions")){var n=this.startNode();this.next();var h=this.state.inFunction,o=this.state.labels;return this.state.labels=[],this.state.inFunction=!1,n.body=this.parseBlock(!1,!0),this.state.inFunction=h,this.state.labels=o,this.finishNode(n,"DoExpression")}case _types.types.regexp:var y=this.state.value;return e=this.parseLiteral(y.value,"RegExpLiteral"),e.pattern=y.pattern,e.flags=y.flags,e;case _types.types.num:return this.parseLiteral(this.state.value,"NumericLiteral");case _types.types.string:return this.parseLiteral(this.state.value,"StringLiteral");case _types.types._null:return e=this.startNode(),this.next(),this.finishNode(e,"NullLiteral");case _types.types._true:case _types.types._false:return e=this.startNode(),e.value=this.match(_types.types._true),this.next(),this.finishNode(e,"BooleanLiteral");case _types.types.parenL:return this.parseParenAndDistinguishExpression(null,null,s);case _types.types.bracketL:return e=this.startNode(),this.next(),e.elements=this.parseExprList(_types.types.bracketR,!0,t),this.toReferencedList(e.elements),this.finishNode(e,"ArrayExpression");case _types.types.braceL:return this.parseObj(!1,t);case _types.types._function:return this.parseFunctionExpression();case _types.types.at:this.parseDecorators();case _types.types._class:return e=this.startNode(),this.takeDecorators(e),this.parseClass(e,!1);case _types.types._new:return this.parseNew();case _types.types.backQuote:return this.parseTemplate();case _types.types.doubleColon:e=this.startNode(),this.next(),e.object=null;var c=e.callee=this.parseNoCallExpr();if("MemberExpression"===c.type)return this.finishNode(e,"BindExpression");this.raise(c.start,"Binding should be performed on object property.");default:this.unexpected()}},pp.parseFunctionExpression=function(){var t=this.startNode(),e=this.parseIdentifier(!0);return this.state.inGenerator&&this.eat(_types.types.dot)&&this.hasPlugin("functionSent")?this.parseMetaProperty(t,e,"sent"):this.parseFunction(t,!1)},pp.parseMetaProperty=function(t,e,s){return t.meta=e,t.property=this.parseIdentifier(!0),t.property.name!==s&&this.raise(t.property.start,"The only valid meta property for new is "+e.name+"."+s),this.finishNode(t,"MetaProperty")},pp.parseLiteral=function(t,e){var s=this.startNode();return this.addExtra(s,"rawValue",t),this.addExtra(s,"raw",this.input.slice(this.state.start,this.state.end)),s.value=t,this.next(),this.finishNode(s,e)},pp.parseParenExpression=function(){this.expect(_types.types.parenL);var t=this.parseExpression();return this.expect(_types.types.parenR),t},pp.parseParenAndDistinguishExpression=function(t,e,s,i){t=t||this.state.start,e=e||this.state.startLoc;var r=void 0;this.expect(_types.types.parenL);for(var a=this.state.start,p=this.state.startLoc,n=[],h=!0,o={start:0},y=void 0,c=void 0,u={start:0};!this.match(_types.types.parenR);){if(h)h=!1;else if(this.expect(_types.types.comma,u.start||null),this.match(_types.types.parenR)){c=this.state.start;break}if(this.match(_types.types.ellipsis)){var d=this.state.start,l=this.state.startLoc;y=this.state.start,n.push(this.parseParenItem(this.parseRest(),l,d));break}n.push(this.parseMaybeAssign(!1,o,this.parseParenItem,u))}var f=this.state.start,m=this.state.startLoc;this.expect(_types.types.parenR);var x=this.startNodeAt(t,e);if(s&&this.shouldParseArrow()&&(x=this.parseArrow(x))){for(var _=n,v=Array.isArray(_),b=0,_=v?_:_[Symbol.iterator]();;){var g;if(v){if(b>=_.length)break;g=_[b++]}else{if(b=_.next(),b.done)break;g=b.value}var A=g;A.extra&&A.extra.parenthesized&&this.unexpected(A.extra.parenStart)}return this.parseArrowExpression(x,n,i)}if(!n.length){if(i)return;this.unexpected(this.state.lastTokStart)}return c&&this.unexpected(c),y&&this.unexpected(y),o.start&&this.unexpected(o.start),u.start&&this.unexpected(u.start),n.length>1?(r=this.startNodeAt(a,p),r.expressions=n,this.toReferencedList(r.expressions),this.finishNodeAt(r,"SequenceExpression",f,m)):r=n[0],this.addExtra(r,"parenthesized",!0),this.addExtra(r,"parenStart",t),r},pp.shouldParseArrow=function(){return!this.canInsertSemicolon()},pp.parseArrow=function(t){if(this.eat(_types.types.arrow))return t},pp.parseParenItem=function(t){return t},pp.parseNew=function(){var t=this.startNode(),e=this.parseIdentifier(!0);return this.eat(_types.types.dot)?this.parseMetaProperty(t,e,"target"):(t.callee=this.parseNoCallExpr(),this.eat(_types.types.parenL)?(t.arguments=this.parseExprList(_types.types.parenR),this.toReferencedList(t.arguments)):t.arguments=[],this.finishNode(t,"NewExpression"))},pp.parseTemplateElement=function(){var t=this.startNode();return t.value={raw:this.input.slice(this.state.start,this.state.end).replace(/\r\n?/g,"\n"),cooked:this.state.value},this.next(),t.tail=this.match(_types.types.backQuote),this.finishNode(t,"TemplateElement")},pp.parseTemplate=function(){var t=this.startNode();this.next(),t.expressions=[];var e=this.parseTemplateElement();for(t.quasis=[e];!e.tail;)this.expect(_types.types.dollarBraceL),t.expressions.push(this.parseExpression()),this.expect(_types.types.braceR),t.quasis.push(e=this.parseTemplateElement());return this.next(),this.finishNode(t,"TemplateLiteral")},pp.parseObj=function(t,e){var s=[],i=Object.create(null),r=!0,a=this.startNode();for(a.properties=[],this.next();!this.eat(_types.types.braceR);){if(r)r=!1;else if(this.expect(_types.types.comma),this.eat(_types.types.braceR))break;for(;this.match(_types.types.at);)s.push(this.parseDecorator());var p=this.startNode(),n=!1,h=!1,o=void 0,y=void 0;if(s.length&&(p.decorators=s,s=[]),this.hasPlugin("objectRestSpread")&&this.match(_types.types.ellipsis))p=this.parseSpread(),p.type=t?"RestProperty":"SpreadProperty",a.properties.push(p);else{if(p.method=!1,p.shorthand=!1,(t||e)&&(o=this.state.start,y=this.state.startLoc),t||(n=this.eat(_types.types.star)),!t&&this.isContextual("async")){n&&this.unexpected();var c=this.parseIdentifier();this.match(_types.types.colon)||this.match(_types.types.parenL)||this.match(_types.types.braceR)?p.key=c:(h=!0,this.hasPlugin("asyncGenerators")&&(n=this.eat(_types.types.star)),this.parsePropertyName(p))}else this.parsePropertyName(p);this.parseObjPropValue(p,o,y,n,h,t,e),this.checkPropClash(p,i),p.shorthand&&this.addExtra(p,"shorthand",!0),a.properties.push(p)}}return s.length&&this.raise(this.state.start,"You have trailing decorators with no property"),this.finishNode(a,t?"ObjectPattern":"ObjectExpression")},pp.parseObjPropValue=function(t,e,s,i,r,a,p){if(r||i||this.match(_types.types.parenL))return a&&this.unexpected(),t.kind="method",t.method=!0,this.parseMethod(t,i,r),this.finishNode(t,"ObjectMethod");if(this.eat(_types.types.colon))return t.value=a?this.parseMaybeDefault(this.state.start,this.state.startLoc):this.parseMaybeAssign(!1,p),this.finishNode(t,"ObjectProperty");if(!(t.computed||"Identifier"!==t.key.type||"get"!==t.key.name&&"set"!==t.key.name||this.match(_types.types.comma)||this.match(_types.types.braceR))){(i||r||a)&&this.unexpected(),t.kind=t.key.name,this.parsePropertyName(t),this.parseMethod(t,!1);var n="get"===t.kind?0:1;if(t.params.length!==n){var h=t.start;"get"===t.kind?this.raise(h,"getter should have no params"):this.raise(h,"setter should have exactly one param")}return this.finishNode(t,"ObjectMethod")}if(!t.computed&&"Identifier"===t.key.type){if(a){var o=this.isKeyword(t.key.name);!o&&this.state.strict&&(o=_identifier.reservedWords.strictBind(t.key.name)||_identifier.reservedWords.strict(t.key.name)),o&&this.raise(t.key.start,"Binding "+t.key.name),t.value=this.parseMaybeDefault(e,s,t.key.__clone())}else this.match(_types.types.eq)&&p?(p.start||(p.start=this.state.start),t.value=this.parseMaybeDefault(e,s,t.key.__clone())):t.value=t.key.__clone();return t.shorthand=!0,this.finishNode(t,"ObjectProperty")}this.unexpected()},pp.parsePropertyName=function(t){return this.eat(_types.types.bracketL)?(t.computed=!0,t.key=this.parseMaybeAssign(),this.expect(_types.types.bracketR),t.key):(t.computed=!1,t.key=this.match(_types.types.num)||this.match(_types.types.string)?this.parseExprAtom():this.parseIdentifier(!0))},pp.initFunction=function(t,e){t.id=null,t.generator=!1,t.expression=!1,t.async=!!e},pp.parseMethod=function(t,e,s){var i=this.state.inMethod;return this.state.inMethod=t.kind||!0,this.initFunction(t,s),this.expect(_types.types.parenL),t.params=this.parseBindingList(_types.types.parenR),t.generator=e,this.parseFunctionBody(t),this.state.inMethod=i,t},pp.parseArrowExpression=function(t,e,s){return this.initFunction(t,s),t.params=this.toAssignableList(e,!0),this.parseFunctionBody(t,!0),this.finishNode(t,"ArrowFunctionExpression")},pp.parseFunctionBody=function(t,e){var s=e&&!this.match(_types.types.braceL),i=this.state.inAsync;if(this.state.inAsync=t.async,s)t.body=this.parseMaybeAssign(),t.expression=!0;else{var r=this.state.inFunction,a=this.state.inGenerator,p=this.state.labels;this.state.inFunction=!0,this.state.inGenerator=t.generator,this.state.labels=[],t.body=this.parseBlock(!0),t.expression=!1,this.state.inFunction=r,this.state.inGenerator=a,this.state.labels=p}this.state.inAsync=i;var n=this.state.strict,h=!1;if(e&&(n=!0),!s&&t.body.directives.length)for(var o=t.body.directives,y=Array.isArray(o),c=0,o=y?o:o[Symbol.iterator]();;){var u;if(y){if(c>=o.length)break;u=o[c++]}else{if(c=o.next(),c.done)break;u=c.value}var d=u;if("use strict"===d.value.value){h=!0,n=!0;break}}if(h&&t.id&&"Identifier"===t.id.type&&"yield"===t.id.name&&this.raise(t.id.start,"Binding yield in strict mode"),n){var l=Object.create(null),f=this.state.strict;h&&(this.state.strict=!0),t.id&&this.checkLVal(t.id,!0);for(var m=t.params,x=Array.isArray(m),_=0,m=x?m:m[Symbol.iterator]();;){var v;if(x){if(_>=m.length)break;v=m[_++]}else{if(_=m.next(),_.done)break;v=_.value}var b=v;h&&"Identifier"!==b.type&&this.raise(b.start,"Non-simple parameter in strict mode"),this.checkLVal(b,!0,l)}this.state.strict=f}},pp.parseExprList=function(t,e,s){for(var i=[],r=!0;!this.eat(t);){if(r)r=!1;else if(this.expect(_types.types.comma),this.eat(t))break;i.push(this.parseExprListItem(e,s))}return i},pp.parseExprListItem=function(t,e){var s=void 0;return s=t&&this.match(_types.types.comma)?null:this.match(_types.types.ellipsis)?this.parseSpread(e):this.parseMaybeAssign(!1,e,this.parseParenItem)},pp.parseIdentifier=function(t){var e=this.startNode();return this.match(_types.types.name)?(!t&&this.state.strict&&_identifier.reservedWords.strict(this.state.value)&&this.raise(this.state.start,"The keyword '"+this.state.value+"' is reserved"),e.name=this.state.value):t&&this.state.type.keyword?e.name=this.state.type.keyword:this.unexpected(),!t&&"await"===e.name&&this.state.inAsync&&this.raise(e.start,"invalid use of await inside of an async function"),e.loc.identifierName=e.name,this.next(),this.finishNode(e,"Identifier")},pp.parseAwait=function(t){return this.state.inAsync||this.unexpected(),this.match(_types.types.star)&&this.raise(t.start,"await* has been removed from the async functions proposal. Use Promise.all() instead."),t.argument=this.parseMaybeUnary(),this.finishNode(t,"AwaitExpression")},pp.parseYield=function(){var t=this.startNode();return this.next(),this.match(_types.types.semi)||this.canInsertSemicolon()||!this.match(_types.types.star)&&!this.state.type.startsExpr?(t.delegate=!1,t.argument=null):(t.delegate=this.eat(_types.types.star),t.argument=this.parseMaybeAssign()),this.finishNode(t,"YieldExpression")};

/***/ },

/***/ "./node_modules/babylon/lib/parser/node.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function finishNodeAt(t,e,n,i){return t.type=e,t.end=n,t.loc.end=i,this.processComment(t),t}var _index=__webpack_require__("./node_modules/babylon/lib/parser/index.js"),_index2=_interopRequireDefault(_index),_location=__webpack_require__("./node_modules/babylon/lib/util/location.js"),pp=_index2["default"].prototype,commentKeys=["leadingComments","trailingComments","innerComments"],Node=function(){function t(e,n,i){_classCallCheck(this,t),this.type="",this.start=e,this.end=0,this.loc=new _location.SourceLocation(n),i&&(this.loc.filename=i)}return t.prototype.__clone=function(){var e=new t;for(var n in this)commentKeys.indexOf(n)<0&&(e[n]=this[n]);return e},t}();pp.startNode=function(){return new Node(this.state.start,this.state.startLoc,this.filename)},pp.startNodeAt=function(t,e){return new Node(t,e,this.filename)},pp.finishNode=function(t,e){return finishNodeAt.call(this,t,e,this.state.lastTokEnd,this.state.lastTokEndLoc)},pp.finishNodeAt=function(t,e,n,i){return finishNodeAt.call(this,t,e,n,i)};

/***/ },

/***/ "./node_modules/babylon/lib/parser/location.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _location=__webpack_require__("./node_modules/babylon/lib/util/location.js"),_index=__webpack_require__("./node_modules/babylon/lib/parser/index.js"),_index2=_interopRequireDefault(_index),pp=_index2["default"].prototype;pp.raise=function(e,i){var n=(0,_location.getLineInfo)(this.input,e);i+=" ("+n.line+":"+n.column+")";var t=new SyntaxError(i);throw t.pos=e,t.loc=n,t};

/***/ },

/***/ "./node_modules/babylon/lib/parser/comments.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function last(t){return t[t.length-1]}var _index=__webpack_require__("./node_modules/babylon/lib/parser/index.js"),_index2=_interopRequireDefault(_index),pp=_index2["default"].prototype;pp.addComment=function(t){this.filename&&(t.loc.filename=this.filename),this.state.trailingComments.push(t),this.state.leadingComments.push(t)},pp.processComment=function(t){if(!("Program"===t.type&&t.body.length>0)){var e=this.state.commentStack,n=void 0,s=void 0,i=void 0,m=void 0;if(this.state.trailingComments.length>0)this.state.trailingComments[0].start>=t.end?(s=this.state.trailingComments,this.state.trailingComments=[]):this.state.trailingComments.length=0;else{var a=last(e);e.length>0&&a.trailingComments&&a.trailingComments[0].start>=t.end&&(s=a.trailingComments,a.trailingComments=null)}for(;e.length>0&&last(e).start>=t.start;)n=e.pop();if(n){if(n.leadingComments)if(n!==t&&last(n.leadingComments).end<=t.start)t.leadingComments=n.leadingComments,n.leadingComments=null;else for(i=n.leadingComments.length-2;i>=0;--i)if(n.leadingComments[i].end<=t.start){t.leadingComments=n.leadingComments.splice(0,i+1);break}}else if(this.state.leadingComments.length>0)if(last(this.state.leadingComments).end<=t.start){if(this.state.commentPreviousNode)for(m=0;m<this.state.leadingComments.length;m++)this.state.leadingComments[m].end<this.state.commentPreviousNode.end&&(this.state.leadingComments.splice(m,1),m--);this.state.leadingComments.length>0&&(t.leadingComments=this.state.leadingComments,this.state.leadingComments=[])}else{for(i=0;i<this.state.leadingComments.length&&!(this.state.leadingComments[i].end>t.start);i++);t.leadingComments=this.state.leadingComments.slice(0,i),0===t.leadingComments.length&&(t.leadingComments=null),s=this.state.leadingComments.slice(i),0===s.length&&(s=null)}this.state.commentPreviousNode=t,s&&(s.length&&s[0].start>=t.start&&last(s).end<=t.end?t.innerComments=s:t.trailingComments=s),e.push(t)}};

/***/ },

/***/ "./node_modules/babylon/lib/plugins/flow.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}exports.__esModule=!0,exports["default"]=function(t){t.extend("parseFunctionBody",function(t){return function(e,s){return this.match(_types.types.colon)&&!s&&(e.returnType=this.flowParseTypeAnnotation()),t.call(this,e,s)}}),t.extend("parseStatement",function(t){return function(e,s){if(this.state.strict&&this.match(_types.types.name)&&"interface"===this.state.value){var i=this.startNode();return this.next(),this.flowParseInterface(i)}return t.call(this,e,s)}}),t.extend("parseExpressionStatement",function(t){return function(e,s){if("Identifier"===s.type)if("declare"===s.name){if(this.match(_types.types._class)||this.match(_types.types.name)||this.match(_types.types._function)||this.match(_types.types._var))return this.flowParseDeclare(e)}else if(this.match(_types.types.name)){if("interface"===s.name)return this.flowParseInterface(e);if("type"===s.name)return this.flowParseTypeAlias(e)}return t.call(this,e,s)}}),t.extend("shouldParseExportDeclaration",function(t){return function(){return this.isContextual("type")||this.isContextual("interface")||t.call(this)}}),t.extend("parseConditional",function(t){return function(e,s,i,a,n){if(n&&this.match(_types.types.question)){var r=this.state.clone();try{return t.call(this,e,s,i,a)}catch(p){if(p instanceof SyntaxError)return this.state=r,n.start=p.pos||this.state.start,e;throw p}}return t.call(this,e,s,i,a)}}),t.extend("parseParenItem",function(t){return function(e,s,i){if(e=t.call(this,e,s,i),this.eat(_types.types.question)&&(e.optional=!0),this.match(_types.types.colon)){var a=this.startNodeAt(s,i);return a.expression=e,a.typeAnnotation=this.flowParseTypeAnnotation(),this.finishNode(a,"TypeCastExpression")}return e}}),t.extend("parseExport",function(t){return function(e){return e=t.call(this,e),"ExportNamedDeclaration"===e.type&&(e.exportKind=e.exportKind||"value"),e}}),t.extend("parseExportDeclaration",function(t){return function(e){if(this.isContextual("type")){e.exportKind="type";var s=this.startNode();return this.next(),this.match(_types.types.braceL)?(e.specifiers=this.parseExportSpecifiers(),this.parseExportFrom(e),null):this.flowParseTypeAlias(s)}if(this.isContextual("interface")){e.exportKind="type";var i=this.startNode();return this.next(),this.flowParseInterface(i)}return t.call(this,e)}}),t.extend("parseClassId",function(t){return function(e){t.apply(this,arguments),this.isRelational("<")&&(e.typeParameters=this.flowParseTypeParameterDeclaration())}}),t.extend("isKeyword",function(t){return function(e){return(!this.state.inType||"void"!==e)&&t.call(this,e)}}),t.extend("readToken",function(t){return function(e){return!this.state.inType||62!==e&&60!==e?t.call(this,e):this.finishOp(_types.types.relational,1)}}),t.extend("jsx_readToken",function(t){return function(){if(!this.state.inType)return t.call(this)}}),t.extend("toAssignable",function(t){return function(e,s){return"TypeCastExpression"===e.type?t.call(this,this.typeCastToParameter(e),s):t.call(this,e,s)}}),t.extend("toAssignableList",function(t){return function(e,s){for(var i=0;i<e.length;i++){var a=e[i];a&&"TypeCastExpression"===a.type&&(e[i]=this.typeCastToParameter(a))}return t.call(this,e,s)}}),t.extend("toReferencedList",function(){return function(t){for(var e=0;e<t.length;e++){var s=t[e];s&&s._exprListItem&&"TypeCastExpression"===s.type&&this.raise(s.start,"Unexpected type cast")}return t}}),t.extend("parseExprListItem",function(t){return function(e,s){var i=this.startNode(),a=t.call(this,e,s);return this.match(_types.types.colon)?(i._exprListItem=!0,i.expression=a,i.typeAnnotation=this.flowParseTypeAnnotation(),this.finishNode(i,"TypeCastExpression")):a}}),t.extend("checkLVal",function(t){return function(e){if("TypeCastExpression"!==e.type)return t.apply(this,arguments)}}),t.extend("parseClassProperty",function(t){return function(e){return this.match(_types.types.colon)&&(e.typeAnnotation=this.flowParseTypeAnnotation()),t.call(this,e)}}),t.extend("isClassProperty",function(t){return function(){return this.match(_types.types.colon)||t.call(this)}}),t.extend("parseClassMethod",function(){return function(t,e,s,i){this.isRelational("<")&&(e.typeParameters=this.flowParseTypeParameterDeclaration()),this.parseMethod(e,s,i),t.body.push(this.finishNode(e,"ClassMethod"))}}),t.extend("parseClassSuper",function(t){return function(e,s){if(t.call(this,e,s),e.superClass&&this.isRelational("<")&&(e.superTypeParameters=this.flowParseTypeParameterInstantiation()),this.isContextual("implements")){this.next();var i=e["implements"]=[];do{var a=this.startNode();a.id=this.parseIdentifier(),this.isRelational("<")?a.typeParameters=this.flowParseTypeParameterInstantiation():a.typeParameters=null,i.push(this.finishNode(a,"ClassImplements"))}while(this.eat(_types.types.comma))}}}),t.extend("parseObjPropValue",function(t){return function(e){var s=void 0;this.isRelational("<")&&(s=this.flowParseTypeParameterDeclaration(),this.match(_types.types.parenL)||this.unexpected()),t.apply(this,arguments),s&&((e.value||e).typeParameters=s)}}),t.extend("parseAssignableListItemTypes",function(){return function(t){return this.eat(_types.types.question)&&(t.optional=!0),this.match(_types.types.colon)&&(t.typeAnnotation=this.flowParseTypeAnnotation()),this.finishNode(t,t.type),t}}),t.extend("parseMaybeDefault",function(t){return function(){for(var e=arguments.length,s=Array(e),i=0;i<e;i++)s[i]=arguments[i];var a=t.apply(this,s);return"AssignmentPattern"===a.type&&a.typeAnnotation&&a.right.start<a.typeAnnotation.start&&this.raise(a.typeAnnotation.start,"Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`"),a}}),t.extend("parseImportSpecifiers",function(t){return function(e){e.importKind="value";var s=null;if(this.match(_types.types._typeof)?s="typeof":this.isContextual("type")&&(s="type"),s){var i=this.lookahead();(i.type===_types.types.name&&"from"!==i.value||i.type===_types.types.braceL||i.type===_types.types.star)&&(this.next(),e.importKind=s)}t.call(this,e)}}),t.extend("parseFunctionParams",function(t){return function(e){this.isRelational("<")&&(e.typeParameters=this.flowParseTypeParameterDeclaration()),t.call(this,e)}}),t.extend("parseVarHead",function(t){return function(e){t.call(this,e),this.match(_types.types.colon)&&(e.id.typeAnnotation=this.flowParseTypeAnnotation(),this.finishNode(e.id,e.id.type))}}),t.extend("parseAsyncArrowFromCallExpression",function(t){return function(e,s){return this.match(_types.types.colon)&&(e.returnType=this.flowParseTypeAnnotation()),t.call(this,e,s)}}),t.extend("shouldParseAsyncArrow",function(t){return function(){return this.match(_types.types.colon)||t.call(this)}}),t.extend("parseMaybeAssign",function(t){return function(){for(var e=null,s=arguments.length,i=Array(s),a=0;a<s;a++)i[a]=arguments[a];if(_types.types.jsxTagStart&&this.match(_types.types.jsxTagStart)){var n=this.state.clone();try{return t.apply(this,i)}catch(r){if(!(r instanceof SyntaxError))throw r;this.state=n,e=r}}if(this.state.context.push(_context.types.parenExpression),null!=e||this.isRelational("<")){var p=void 0,o=void 0;try{o=this.flowParseTypeParameterDeclaration(),p=t.apply(this,i),p.typeParameters=o,p.start=o.start,p.loc.start=o.loc.start}catch(r){throw e||r}if("ArrowFunctionExpression"===p.type)return p;if(null!=e)throw e;this.raise(o.start,"Expected an arrow function after this type parameter declaration")}return this.state.context.pop(),t.apply(this,i)}}),t.extend("parseArrow",function(t){return function(e){if(this.match(_types.types.colon)){var s=this.state.clone();try{var i=this.flowParseTypeAnnotation();this.canInsertSemicolon()&&this.unexpected(),this.match(_types.types.arrow)||this.unexpected(),e.returnType=i}catch(a){if(!(a instanceof SyntaxError))throw a;this.state=s}}return t.call(this,e)}}),t.extend("shouldParseArrow",function(t){return function(){return this.match(_types.types.colon)||t.call(this)}}),t.extend("isClassMutatorStarter",function(t){return function(){return!!this.isRelational("<")||t.call(this)}})};var _types=__webpack_require__("./node_modules/babylon/lib/tokenizer/types.js"),_context=__webpack_require__("./node_modules/babylon/lib/tokenizer/context.js"),_parser=__webpack_require__("./node_modules/babylon/lib/parser/index.js"),_parser2=_interopRequireDefault(_parser),pp=_parser2["default"].prototype;pp.flowParseTypeInitialiser=function(t,e){var s=this.state.inType;this.state.inType=!0,this.expect(t||_types.types.colon),e&&(this.match(_types.types.bitwiseAND)||this.match(_types.types.bitwiseOR))&&this.next();var i=this.flowParseType();return this.state.inType=s,i},pp.flowParseDeclareClass=function(t){return this.next(),this.flowParseInterfaceish(t,!0),this.finishNode(t,"DeclareClass")},pp.flowParseDeclareFunction=function(t){this.next();var e=t.id=this.parseIdentifier(),s=this.startNode(),i=this.startNode();this.isRelational("<")?s.typeParameters=this.flowParseTypeParameterDeclaration():s.typeParameters=null,this.expect(_types.types.parenL);var a=this.flowParseFunctionTypeParams();return s.params=a.params,s.rest=a.rest,this.expect(_types.types.parenR),s.returnType=this.flowParseTypeInitialiser(),i.typeAnnotation=this.finishNode(s,"FunctionTypeAnnotation"),e.typeAnnotation=this.finishNode(i,"TypeAnnotation"),this.finishNode(e,e.type),this.semicolon(),this.finishNode(t,"DeclareFunction")},pp.flowParseDeclare=function(t){return this.match(_types.types._class)?this.flowParseDeclareClass(t):this.match(_types.types._function)?this.flowParseDeclareFunction(t):this.match(_types.types._var)?this.flowParseDeclareVariable(t):this.isContextual("module")?this.lookahead().type===_types.types.dot?this.flowParseDeclareModuleExports(t):this.flowParseDeclareModule(t):this.isContextual("type")?this.flowParseDeclareTypeAlias(t):this.isContextual("interface")?this.flowParseDeclareInterface(t):void this.unexpected()},pp.flowParseDeclareVariable=function(t){return this.next(),t.id=this.flowParseTypeAnnotatableIdentifier(),this.semicolon(),this.finishNode(t,"DeclareVariable")},pp.flowParseDeclareModule=function(t){this.next(),this.match(_types.types.string)?t.id=this.parseExprAtom():t.id=this.parseIdentifier();var e=t.body=this.startNode(),s=e.body=[];for(this.expect(_types.types.braceL);!this.match(_types.types.braceR);){var i=this.startNode();this.expectContextual("declare","Unexpected token. Only declares are allowed inside declare module"),s.push(this.flowParseDeclare(i))}return this.expect(_types.types.braceR),this.finishNode(e,"BlockStatement"),this.finishNode(t,"DeclareModule")},pp.flowParseDeclareModuleExports=function(t){return this.expectContextual("module"),this.expect(_types.types.dot),this.expectContextual("exports"),t.typeAnnotation=this.flowParseTypeAnnotation(),this.finishNode(t,"DeclareModuleExports")},pp.flowParseDeclareTypeAlias=function(t){return this.next(),this.flowParseTypeAlias(t),this.finishNode(t,"DeclareTypeAlias")},pp.flowParseDeclareInterface=function(t){return this.next(),this.flowParseInterfaceish(t),this.finishNode(t,"DeclareInterface")},pp.flowParseInterfaceish=function(t,e){if(t.id=this.parseIdentifier(),this.isRelational("<")?t.typeParameters=this.flowParseTypeParameterDeclaration():t.typeParameters=null,t["extends"]=[],t.mixins=[],this.eat(_types.types._extends))do t["extends"].push(this.flowParseInterfaceExtends());while(this.eat(_types.types.comma));if(this.isContextual("mixins")){this.next();do t.mixins.push(this.flowParseInterfaceExtends());while(this.eat(_types.types.comma))}t.body=this.flowParseObjectType(e)},pp.flowParseInterfaceExtends=function(){var t=this.startNode();return t.id=this.flowParseQualifiedTypeIdentifier(),this.isRelational("<")?t.typeParameters=this.flowParseTypeParameterInstantiation():t.typeParameters=null,this.finishNode(t,"InterfaceExtends")},pp.flowParseInterface=function(t){return this.flowParseInterfaceish(t,!1),this.finishNode(t,"InterfaceDeclaration")},pp.flowParseTypeAlias=function(t){return t.id=this.parseIdentifier(),this.isRelational("<")?t.typeParameters=this.flowParseTypeParameterDeclaration():t.typeParameters=null,t.right=this.flowParseTypeInitialiser(_types.types.eq,!0),this.semicolon(),this.finishNode(t,"TypeAlias")},pp.flowParseTypeParameter=function(){var t=this.startNode(),e=void 0;this.match(_types.types.plusMin)&&("+"===this.state.value?e="plus":"-"===this.state.value&&(e="minus"),this.eat(_types.types.plusMin));var s=this.flowParseTypeAnnotatableIdentifier(!1,!1);return t.name=s.name,t.variance=e,t.bound=s.typeAnnotation,this.match(_types.types.eq)&&(this.eat(_types.types.eq),t["default"]=this.flowParseType()),this.finishNode(t,"TypeParameter")},pp.flowParseTypeParameterDeclaration=function(){var t=this.state.inType,e=this.startNode();e.params=[],this.state.inType=!0,this.isRelational("<")||this.match(_types.types.jsxTagStart)?this.next():this.unexpected();do e.params.push(this.flowParseTypeParameter()),this.isRelational(">")||this.expect(_types.types.comma);while(!this.isRelational(">"));return this.expectRelational(">"),this.state.inType=t,this.finishNode(e,"TypeParameterDeclaration")},pp.flowParseTypeParameterInstantiation=function(){var t=this.startNode(),e=this.state.inType;for(t.params=[],this.state.inType=!0,this.expectRelational("<");!this.isRelational(">");)t.params.push(this.flowParseType()),this.isRelational(">")||this.expect(_types.types.comma);return this.expectRelational(">"),this.state.inType=e,this.finishNode(t,"TypeParameterInstantiation")},pp.flowParseObjectPropertyKey=function(){return this.match(_types.types.num)||this.match(_types.types.string)?this.parseExprAtom():this.parseIdentifier(!0)},pp.flowParseObjectTypeIndexer=function(t,e){return t["static"]=e,this.expect(_types.types.bracketL),t.id=this.flowParseObjectPropertyKey(),t.key=this.flowParseTypeInitialiser(),this.expect(_types.types.bracketR),t.value=this.flowParseTypeInitialiser(),this.flowObjectTypeSemicolon(),this.finishNode(t,"ObjectTypeIndexer")},pp.flowParseObjectTypeMethodish=function(t){for(t.params=[],t.rest=null,t.typeParameters=null,this.isRelational("<")&&(t.typeParameters=this.flowParseTypeParameterDeclaration()),this.expect(_types.types.parenL);this.match(_types.types.name);)t.params.push(this.flowParseFunctionTypeParam()),this.match(_types.types.parenR)||this.expect(_types.types.comma);return this.eat(_types.types.ellipsis)&&(t.rest=this.flowParseFunctionTypeParam()),this.expect(_types.types.parenR),t.returnType=this.flowParseTypeInitialiser(),this.finishNode(t,"FunctionTypeAnnotation")},pp.flowParseObjectTypeMethod=function(t,e,s,i){var a=this.startNodeAt(t,e);return a.value=this.flowParseObjectTypeMethodish(this.startNodeAt(t,e)),a["static"]=s,a.key=i,a.optional=!1,this.flowObjectTypeSemicolon(),this.finishNode(a,"ObjectTypeProperty")},pp.flowParseObjectTypeCallProperty=function(t,e){var s=this.startNode();return t["static"]=e,t.value=this.flowParseObjectTypeMethodish(s),this.flowObjectTypeSemicolon(),this.finishNode(t,"ObjectTypeCallProperty")},pp.flowParseObjectType=function(t,e){var s=this.startNode(),i=void 0,a=void 0,n=void 0;s.callProperties=[],s.properties=[],s.indexers=[];var r=void 0,p=void 0;for(e&&this.match(_types.types.braceBarL)?(this.expect(_types.types.braceBarL),r=_types.types.braceBarR,p=!0):(this.expect(_types.types.braceL),r=_types.types.braceR,p=!1),s.exact=p;!this.match(r);){var o=!1,h=this.state.start,y=this.state.startLoc;i=this.startNode(),t&&this.isContextual("static")&&(this.next(),n=!0),this.match(_types.types.bracketL)?s.indexers.push(this.flowParseObjectTypeIndexer(i,n)):this.match(_types.types.parenL)||this.isRelational("<")?s.callProperties.push(this.flowParseObjectTypeCallProperty(i,t)):(a=n&&this.match(_types.types.colon)?this.parseIdentifier():this.flowParseObjectPropertyKey(),this.isRelational("<")||this.match(_types.types.parenL)?s.properties.push(this.flowParseObjectTypeMethod(h,y,n,a)):(this.eat(_types.types.question)&&(o=!0),i.key=a,i.value=this.flowParseTypeInitialiser(),i.optional=o,i["static"]=n,this.flowObjectTypeSemicolon(),s.properties.push(this.finishNode(i,"ObjectTypeProperty"))))}return this.expect(r),this.finishNode(s,"ObjectTypeAnnotation")},pp.flowObjectTypeSemicolon=function(){this.eat(_types.types.semi)||this.eat(_types.types.comma)||this.match(_types.types.braceR)||this.match(_types.types.braceBarR)||this.unexpected()},pp.flowParseQualifiedTypeIdentifier=function(t,e,s){t=t||this.state.start,e=e||this.state.startLoc;for(var i=s||this.parseIdentifier();this.eat(_types.types.dot);){var a=this.startNodeAt(t,e);a.qualification=i,a.id=this.parseIdentifier(),i=this.finishNode(a,"QualifiedTypeIdentifier")}return i},pp.flowParseGenericType=function(t,e,s){var i=this.startNodeAt(t,e);return i.typeParameters=null,i.id=this.flowParseQualifiedTypeIdentifier(t,e,s),this.isRelational("<")&&(i.typeParameters=this.flowParseTypeParameterInstantiation()),this.finishNode(i,"GenericTypeAnnotation")},pp.flowParseTypeofType=function(){var t=this.startNode();return this.expect(_types.types._typeof),t.argument=this.flowParsePrimaryType(),this.finishNode(t,"TypeofTypeAnnotation")},pp.flowParseTupleType=function(){var t=this.startNode();for(t.types=[],this.expect(_types.types.bracketL);this.state.pos<this.input.length&&!this.match(_types.types.bracketR)&&(t.types.push(this.flowParseType()),!this.match(_types.types.bracketR));)this.expect(_types.types.comma);return this.expect(_types.types.bracketR),this.finishNode(t,"TupleTypeAnnotation")},pp.flowParseFunctionTypeParam=function(){var t=!1,e=this.startNode();return e.name=this.parseIdentifier(),this.eat(_types.types.question)&&(t=!0),e.optional=t,e.typeAnnotation=this.flowParseTypeInitialiser(),this.finishNode(e,"FunctionTypeParam")},pp.flowParseFunctionTypeParams=function(){for(var t={params:[],rest:null};this.match(_types.types.name);)t.params.push(this.flowParseFunctionTypeParam()),this.match(_types.types.parenR)||this.expect(_types.types.comma);return this.eat(_types.types.ellipsis)&&(t.rest=this.flowParseFunctionTypeParam()),t},pp.flowIdentToTypeAnnotation=function(t,e,s,i){switch(i.name){case"any":return this.finishNode(s,"AnyTypeAnnotation");case"void":return this.finishNode(s,"VoidTypeAnnotation");case"bool":case"boolean":return this.finishNode(s,"BooleanTypeAnnotation");case"mixed":return this.finishNode(s,"MixedTypeAnnotation");case"number":return this.finishNode(s,"NumberTypeAnnotation");case"string":return this.finishNode(s,"StringTypeAnnotation");default:return this.flowParseGenericType(t,e,i)}},pp.flowParsePrimaryType=function(){var t=this.state.start,e=this.state.startLoc,s=this.startNode(),i=void 0,a=void 0,n=!1;switch(this.state.type){case _types.types.name:return this.flowIdentToTypeAnnotation(t,e,s,this.parseIdentifier());case _types.types.braceL:return this.flowParseObjectType(!1,!1);case _types.types.braceBarL:return this.flowParseObjectType(!1,!0);case _types.types.bracketL:return this.flowParseTupleType();case _types.types.relational:if("<"===this.state.value)return s.typeParameters=this.flowParseTypeParameterDeclaration(),this.expect(_types.types.parenL),i=this.flowParseFunctionTypeParams(),s.params=i.params,s.rest=i.rest,this.expect(_types.types.parenR),this.expect(_types.types.arrow),s.returnType=this.flowParseType(),this.finishNode(s,"FunctionTypeAnnotation");break;case _types.types.parenL:if(this.next(),!this.match(_types.types.parenR)&&!this.match(_types.types.ellipsis))if(this.match(_types.types.name)){var r=this.lookahead().type;n=r!==_types.types.question&&r!==_types.types.colon}else n=!0;return n?(a=this.flowParseType(),this.expect(_types.types.parenR),a):(i=this.flowParseFunctionTypeParams(),s.params=i.params,s.rest=i.rest,this.expect(_types.types.parenR),this.expect(_types.types.arrow),s.returnType=this.flowParseType(),s.typeParameters=null,this.finishNode(s,"FunctionTypeAnnotation"));case _types.types.string:return s.value=this.state.value,this.addExtra(s,"rawValue",s.value),this.addExtra(s,"raw",this.input.slice(this.state.start,this.state.end)),this.next(),this.finishNode(s,"StringLiteralTypeAnnotation");case _types.types._true:case _types.types._false:return s.value=this.match(_types.types._true),this.next(),this.finishNode(s,"BooleanLiteralTypeAnnotation");case _types.types.plusMin:if("-"===this.state.value)return this.next(),this.match(_types.types.num)||this.unexpected(),s.value=-this.state.value,this.addExtra(s,"rawValue",s.value),this.addExtra(s,"raw",this.input.slice(this.state.start,this.state.end)),this.next(),this.finishNode(s,"NumericLiteralTypeAnnotation");case _types.types.num:return s.value=this.state.value,this.addExtra(s,"rawValue",s.value),this.addExtra(s,"raw",this.input.slice(this.state.start,this.state.end)),this.next(),this.finishNode(s,"NumericLiteralTypeAnnotation");case _types.types._null:return s.value=this.match(_types.types._null),this.next(),this.finishNode(s,"NullLiteralTypeAnnotation");case _types.types._this:return s.value=this.match(_types.types._this),this.next(),this.finishNode(s,"ThisTypeAnnotation");case _types.types.star:return this.next(),this.finishNode(s,"ExistentialTypeParam");default:if("typeof"===this.state.type.keyword)return this.flowParseTypeofType()}this.unexpected()},pp.flowParsePostfixType=function(){var t=this.startNode(),e=t.elementType=this.flowParsePrimaryType();return this.match(_types.types.bracketL)?(this.expect(_types.types.bracketL),this.expect(_types.types.bracketR),this.finishNode(t,"ArrayTypeAnnotation")):e},pp.flowParsePrefixType=function(){var t=this.startNode();return this.eat(_types.types.question)?(t.typeAnnotation=this.flowParsePrefixType(),this.finishNode(t,"NullableTypeAnnotation")):this.flowParsePostfixType()},pp.flowParseIntersectionType=function(){var t=this.startNode(),e=this.flowParsePrefixType();for(t.types=[e];this.eat(_types.types.bitwiseAND);)t.types.push(this.flowParsePrefixType());return 1===t.types.length?e:this.finishNode(t,"IntersectionTypeAnnotation")},pp.flowParseUnionType=function(){var t=this.startNode(),e=this.flowParseIntersectionType();for(t.types=[e];this.eat(_types.types.bitwiseOR);)t.types.push(this.flowParseIntersectionType());return 1===t.types.length?e:this.finishNode(t,"UnionTypeAnnotation")},pp.flowParseType=function(){var t=this.state.inType;this.state.inType=!0;var e=this.flowParseUnionType();return this.state.inType=t,e},pp.flowParseTypeAnnotation=function(){var t=this.startNode();return t.typeAnnotation=this.flowParseTypeInitialiser(),this.finishNode(t,"TypeAnnotation")},pp.flowParseTypeAnnotatableIdentifier=function(t,e){var s=this.parseIdentifier(),i=!1;return e&&this.eat(_types.types.question)&&(this.expect(_types.types.question),i=!0),(t||this.match(_types.types.colon))&&(s.typeAnnotation=this.flowParseTypeAnnotation(),this.finishNode(s,s.type)),i&&(s.optional=!0,this.finishNode(s,s.type)),s},pp.typeCastToParameter=function(t){return t.expression.typeAnnotation=t.typeAnnotation,this.finishNodeAt(t.expression,t.expression.type,t.typeAnnotation.end,t.typeAnnotation.loc.end)};

/***/ },

/***/ "./node_modules/babylon/lib/plugins/jsx/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function getQualifiedJSXName(t){return"JSXIdentifier"===t.type?t.name:"JSXNamespacedName"===t.type?t.namespace.name+":"+t.name.name:"JSXMemberExpression"===t.type?getQualifiedJSXName(t.object)+"."+getQualifiedJSXName(t.property):void 0}exports.__esModule=!0,exports["default"]=function(t){t.extend("parseExprAtom",function(t){return function(e){if(this.match(_types.types.jsxText)){var s=this.parseLiteral(this.state.value,"JSXText");return s.extra=null,s}return this.match(_types.types.jsxTagStart)?this.jsxParseElement():t.call(this,e)}}),t.extend("readToken",function(t){return function(e){var s=this.curContext();if(s===_context.types.j_expr)return this.jsxReadToken();if(s===_context.types.j_oTag||s===_context.types.j_cTag){if((0,_identifier.isIdentifierStart)(e))return this.jsxReadWord();if(62===e)return++this.state.pos,this.finishToken(_types.types.jsxTagEnd);if((34===e||39===e)&&s===_context.types.j_oTag)return this.jsxReadString(e)}return 60===e&&this.state.exprAllowed?(++this.state.pos,this.finishToken(_types.types.jsxTagStart)):t.call(this,e)}}),t.extend("updateContext",function(t){return function(e){if(this.match(_types.types.braceL)){var s=this.curContext();s===_context.types.j_oTag?this.state.context.push(_context.types.braceExpression):s===_context.types.j_expr?this.state.context.push(_context.types.templateQuasi):t.call(this,e),this.state.exprAllowed=!0}else{if(!this.match(_types.types.slash)||e!==_types.types.jsxTagStart)return t.call(this,e);this.state.context.length-=2,this.state.context.push(_context.types.j_cTag),this.state.exprAllowed=!1}}})};var _xhtml=__webpack_require__("./node_modules/babylon/lib/plugins/jsx/xhtml.js"),_xhtml2=_interopRequireDefault(_xhtml),_types=__webpack_require__("./node_modules/babylon/lib/tokenizer/types.js"),_context=__webpack_require__("./node_modules/babylon/lib/tokenizer/context.js"),_parser=__webpack_require__("./node_modules/babylon/lib/parser/index.js"),_parser2=_interopRequireDefault(_parser),_identifier=__webpack_require__("./node_modules/babylon/lib/util/identifier.js"),_whitespace=__webpack_require__("./node_modules/babylon/lib/util/whitespace.js"),HEX_NUMBER=/^[\da-fA-F]+$/,DECIMAL_NUMBER=/^\d+$/;_context.types.j_oTag=new _context.TokContext("<tag",(!1)),_context.types.j_cTag=new _context.TokContext("</tag",(!1)),_context.types.j_expr=new _context.TokContext("<tag>...</tag>",(!0),(!0)),_types.types.jsxName=new _types.TokenType("jsxName"),_types.types.jsxText=new _types.TokenType("jsxText",{beforeExpr:!0}),_types.types.jsxTagStart=new _types.TokenType("jsxTagStart",{startsExpr:!0}),_types.types.jsxTagEnd=new _types.TokenType("jsxTagEnd"),_types.types.jsxTagStart.updateContext=function(){this.state.context.push(_context.types.j_expr),this.state.context.push(_context.types.j_oTag),this.state.exprAllowed=!1},_types.types.jsxTagEnd.updateContext=function(t){var e=this.state.context.pop();e===_context.types.j_oTag&&t===_types.types.slash||e===_context.types.j_cTag?(this.state.context.pop(),this.state.exprAllowed=this.curContext()===_context.types.j_expr):this.state.exprAllowed=!0};var pp=_parser2["default"].prototype;pp.jsxReadToken=function(){for(var t="",e=this.state.pos;;){this.state.pos>=this.input.length&&this.raise(this.state.start,"Unterminated JSX contents");var s=this.input.charCodeAt(this.state.pos);switch(s){case 60:case 123:return this.state.pos===this.state.start?60===s&&this.state.exprAllowed?(++this.state.pos,this.finishToken(_types.types.jsxTagStart)):this.getTokenFromCode(s):(t+=this.input.slice(e,this.state.pos),this.finishToken(_types.types.jsxText,t));case 38:t+=this.input.slice(e,this.state.pos),t+=this.jsxReadEntity(),e=this.state.pos;break;default:(0,_whitespace.isNewLine)(s)?(t+=this.input.slice(e,this.state.pos),t+=this.jsxReadNewLine(!0),e=this.state.pos):++this.state.pos}}},pp.jsxReadNewLine=function(t){var e=this.input.charCodeAt(this.state.pos),s=void 0;return++this.state.pos,13===e&&10===this.input.charCodeAt(this.state.pos)?(++this.state.pos,s=t?"\n":"\r\n"):s=String.fromCharCode(e),++this.state.curLine,this.state.lineStart=this.state.pos,s},pp.jsxReadString=function(t){for(var e="",s=++this.state.pos;;){this.state.pos>=this.input.length&&this.raise(this.state.start,"Unterminated string constant");var i=this.input.charCodeAt(this.state.pos);if(i===t)break;38===i?(e+=this.input.slice(s,this.state.pos),e+=this.jsxReadEntity(),s=this.state.pos):(0,_whitespace.isNewLine)(i)?(e+=this.input.slice(s,this.state.pos),e+=this.jsxReadNewLine(!1),s=this.state.pos):++this.state.pos}return e+=this.input.slice(s,this.state.pos++),this.finishToken(_types.types.string,e)},pp.jsxReadEntity=function(){for(var t="",e=0,s=void 0,i=this.input[this.state.pos],a=++this.state.pos;this.state.pos<this.input.length&&e++<10;){if(i=this.input[this.state.pos++],";"===i){"#"===t[0]?"x"===t[1]?(t=t.substr(2),HEX_NUMBER.test(t)&&(s=String.fromCharCode(parseInt(t,16)))):(t=t.substr(1),DECIMAL_NUMBER.test(t)&&(s=String.fromCharCode(parseInt(t,10)))):s=_xhtml2["default"][t];break}t+=i}return s?s:(this.state.pos=a,"&")},pp.jsxReadWord=function(){var t=void 0,e=this.state.pos;do t=this.input.charCodeAt(++this.state.pos);while((0,_identifier.isIdentifierChar)(t)||45===t);return this.finishToken(_types.types.jsxName,this.input.slice(e,this.state.pos))},pp.jsxParseIdentifier=function(){var t=this.startNode();return this.match(_types.types.jsxName)?t.name=this.state.value:this.state.type.keyword?t.name=this.state.type.keyword:this.unexpected(),this.next(),this.finishNode(t,"JSXIdentifier")},pp.jsxParseNamespacedName=function(){var t=this.state.start,e=this.state.startLoc,s=this.jsxParseIdentifier();if(!this.eat(_types.types.colon))return s;var i=this.startNodeAt(t,e);return i.namespace=s,i.name=this.jsxParseIdentifier(),this.finishNode(i,"JSXNamespacedName")},pp.jsxParseElementName=function(){for(var t=this.state.start,e=this.state.startLoc,s=this.jsxParseNamespacedName();this.eat(_types.types.dot);){var i=this.startNodeAt(t,e);i.object=s,i.property=this.jsxParseIdentifier(),s=this.finishNode(i,"JSXMemberExpression")}return s},pp.jsxParseAttributeValue=function(){var t=void 0;switch(this.state.type){case _types.types.braceL:if(t=this.jsxParseExpressionContainer(),"JSXEmptyExpression"!==t.expression.type)return t;this.raise(t.start,"JSX attributes must only be assigned a non-empty expression");case _types.types.jsxTagStart:case _types.types.string:return t=this.parseExprAtom(),t.extra=null,t;default:this.raise(this.state.start,"JSX value should be either an expression or a quoted JSX text")}},pp.jsxParseEmptyExpression=function(){var t=this.startNodeAt(this.lastTokEnd,this.lastTokEndLoc);return this.finishNodeAt(t,"JSXEmptyExpression",this.start,this.startLoc)},pp.jsxParseSpreadChild=function(){var t=this.startNode();return this.expect(_types.types.braceL),this.expect(_types.types.ellipsis),t.expression=this.parseExpression(),this.expect(_types.types.braceR),this.finishNode(t,"JSXSpreadChild")},pp.jsxParseExpressionContainer=function(){var t=this.startNode();return this.next(),this.match(_types.types.braceR)?t.expression=this.jsxParseEmptyExpression():t.expression=this.parseExpression(),this.expect(_types.types.braceR),this.finishNode(t,"JSXExpressionContainer")},pp.jsxParseAttribute=function(){var t=this.startNode();return this.eat(_types.types.braceL)?(this.expect(_types.types.ellipsis),t.argument=this.parseMaybeAssign(),this.expect(_types.types.braceR),this.finishNode(t,"JSXSpreadAttribute")):(t.name=this.jsxParseNamespacedName(),t.value=this.eat(_types.types.eq)?this.jsxParseAttributeValue():null,this.finishNode(t,"JSXAttribute"))},pp.jsxParseOpeningElementAt=function(t,e){var s=this.startNodeAt(t,e);for(s.attributes=[],s.name=this.jsxParseElementName();!this.match(_types.types.slash)&&!this.match(_types.types.jsxTagEnd);)s.attributes.push(this.jsxParseAttribute());return s.selfClosing=this.eat(_types.types.slash),this.expect(_types.types.jsxTagEnd),this.finishNode(s,"JSXOpeningElement")},pp.jsxParseClosingElementAt=function(t,e){var s=this.startNodeAt(t,e);return s.name=this.jsxParseElementName(),this.expect(_types.types.jsxTagEnd),this.finishNode(s,"JSXClosingElement")},pp.jsxParseElementAt=function(t,e){var s=this.startNodeAt(t,e),i=[],a=this.jsxParseOpeningElementAt(t,e),r=null;if(!a.selfClosing){t:for(;;)switch(this.state.type){case _types.types.jsxTagStart:if(t=this.state.start,e=this.state.startLoc,this.next(),this.eat(_types.types.slash)){r=this.jsxParseClosingElementAt(t,e);break t}i.push(this.jsxParseElementAt(t,e));break;case _types.types.jsxText:i.push(this.parseExprAtom());break;case _types.types.braceL:this.lookahead().type===_types.types.ellipsis?i.push(this.jsxParseSpreadChild()):i.push(this.jsxParseExpressionContainer());break;default:this.unexpected()}getQualifiedJSXName(r.name)!==getQualifiedJSXName(a.name)&&this.raise(r.start,"Expected corresponding JSX closing tag for <"+getQualifiedJSXName(a.name)+">")}return s.openingElement=a,s.closingElement=r,s.children=i,this.match(_types.types.relational)&&"<"===this.state.value&&this.raise(this.state.start,"Adjacent JSX elements must be wrapped in an enclosing tag"),this.finishNode(s,"JSXElement")},pp.jsxParseElement=function(){var t=this.state.start,e=this.state.startLoc;return this.next(),this.jsxParseElementAt(t,e)};

/***/ },

/***/ "./node_modules/babylon/lib/plugins/jsx/xhtml.js":
/***/ function(module, exports) {

	"use strict";exports.__esModule=!0,exports["default"]={quot:'"',amp:"&",apos:"'",lt:"<",gt:">",nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",fnof:"ƒ",circ:"ˆ",tilde:"˜",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",bull:"•",hellip:"…",permil:"‰",prime:"′",Prime:"″",lsaquo:"‹",rsaquo:"›",oline:"‾",frasl:"⁄",euro:"€",image:"ℑ",weierp:"℘",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪","int":"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦"};

/***/ },

/***/ "./node_modules/babel-types/lib/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function registerType(e){var r=t["is"+e];r||(r=t["is"+e]=function(r,n){return t.is(e,r,n)}),t["assert"+e]=function(t,n){if(n=n||{},!r(t,n))throw new Error("Expected type "+(0,_stringify2["default"])(e)+" with option "+(0,_stringify2["default"])(n))}}function is(e,r,n){if(!r)return!1;var o=isType(r.type,e);return!!o&&("undefined"==typeof n||t.shallowEqual(r,n))}function isType(e,r){if(e===r)return!0;if(t.ALIAS_KEYS[r])return!1;var n=t.FLIPPED_ALIAS_KEYS[r];if(n){if(n[0]===e)return!0;for(var o=n,i=Array.isArray(o),s=0,o=i?o:(0,_getIterator3["default"])(o);;){var a;if(i){if(s>=o.length)break;a=o[s++]}else{if(s=o.next(),s.done)break;a=s.value}var u=a;if(e===u)return!0}}return!1}function validate(e,r,n){if(e){var o=t.NODE_FIELDS[e.type];if(o){var i=o[r];i&&i.validate&&(i.optional&&null==n||i.validate(e,r,n))}}}function shallowEqual(e,t){for(var r=(0,_keys2["default"])(t),n=r,o=Array.isArray(n),i=0,n=o?n:(0,_getIterator3["default"])(n);;){var s;if(o){if(i>=n.length)break;s=n[i++]}else{if(i=n.next(),i.done)break;s=i.value}var a=s;if(e[a]!==t[a])return!1}return!0}function appendToMemberExpression(e,r,n){return e.object=t.memberExpression(e.object,e.property,e.computed),e.property=r,e.computed=!!n,e}function prependToMemberExpression(e,r){return e.object=t.memberExpression(r,e.object),e}function ensureBlock(e){var r=arguments.length<=1||void 0===arguments[1]?"body":arguments[1];return e[r]=t.toBlock(e[r],e)}function clone(e){var t={};for(var r in e)"_"!==r[0]&&(t[r]=e[r]);return t}function cloneWithoutLoc(e){var t=clone(e);return delete t.loc,t}function cloneDeep(e){var r={};for(var n in e)if("_"!==n[0]){var o=e[n];o&&(o.type?o=t.cloneDeep(o):Array.isArray(o)&&(o=o.map(t.cloneDeep))),r[n]=o}return r}function buildMatchMemberExpression(e,r){var n=e.split(".");return function(e){if(!t.isMemberExpression(e))return!1;for(var o=[e],i=0;o.length;){var s=o.shift();if(r&&i===n.length)return!0;if(t.isIdentifier(s)){if(n[i]!==s.name)return!1}else{if(!t.isStringLiteral(s)){if(t.isMemberExpression(s)){if(s.computed&&!t.isStringLiteral(s.property))return!1;o.push(s.object),o.push(s.property);continue}return!1}if(n[i]!==s.value)return!1}if(++i>n.length)return!1}return!0}}function removeComments(e){for(var r=t.COMMENT_KEYS,n=Array.isArray(r),o=0,r=n?r:(0,_getIterator3["default"])(r);;){var i;if(n){if(o>=r.length)break;i=r[o++]}else{if(o=r.next(),o.done)break;i=o.value}var s=i;delete e[s]}return e}function inheritsComments(e,t){return inheritTrailingComments(e,t),inheritLeadingComments(e,t),inheritInnerComments(e,t),e}function inheritTrailingComments(e,t){_inheritComments("trailingComments",e,t)}function inheritLeadingComments(e,t){_inheritComments("leadingComments",e,t)}function inheritInnerComments(e,t){_inheritComments("innerComments",e,t)}function _inheritComments(e,t,r){t&&r&&(t[e]=(0,_uniq2["default"])((0,_compact2["default"])([].concat(t[e],r[e]))))}function inherits(e,r){if(!e||!r)return e;for(var n=t.INHERIT_KEYS.optional,o=Array.isArray(n),i=0,n=o?n:(0,_getIterator3["default"])(n);;){var s;if(o){if(i>=n.length)break;s=n[i++]}else{if(i=n.next(),i.done)break;s=i.value}var a=s;null==e[a]&&(e[a]=r[a])}for(var u in r)"_"===u[0]&&(e[u]=r[u]);for(var p=t.INHERIT_KEYS.force,_=Array.isArray(p),f=0,p=_?p:(0,_getIterator3["default"])(p);;){var c;if(_){if(f>=p.length)break;c=p[f++]}else{if(f=p.next(),f.done)break;c=f.value}var l=c;e[l]=r[l]}return t.inheritsComments(e,r),e}function assertNode(e){if(!isNode(e))throw new TypeError("Not a valid node "+(e&&e.type))}function isNode(e){return!(!e||!_definitions.VISITOR_KEYS[e.type])}function traverseFast(e,r,n){if(e){var o=t.VISITOR_KEYS[e.type];if(o){n=n||{},r(e,n);for(var i=o,s=Array.isArray(i),a=0,i=s?i:(0,_getIterator3["default"])(i);;){var u;if(s){if(a>=i.length)break;u=i[a++]}else{if(a=i.next(),a.done)break;u=a.value}var p=u,_=e[p];if(Array.isArray(_))for(var f=_,c=Array.isArray(f),l=0,f=c?f:(0,_getIterator3["default"])(f);;){var E;if(c){if(l>=f.length)break;E=f[l++]}else{if(l=f.next(),l.done)break;E=l.value}var d=E;traverseFast(d,r,n)}else traverseFast(_,r,n)}}}}function removeProperties(e,t){t=t||{};for(var r=t.preserveComments?CLEAR_KEYS:CLEAR_KEYS_PLUS_COMMENTS,n=r,o=Array.isArray(n),i=0,n=o?n:(0,_getIterator3["default"])(n);;){var s;if(o){if(i>=n.length)break;s=n[i++]}else{if(i=n.next(),i.done)break;s=i.value}var a=s;null!=e[a]&&(e[a]=void 0)}for(var u in e)"_"===u[0]&&null!=e[u]&&(e[u]=void 0);for(var p=(0,_getOwnPropertySymbols2["default"])(e),_=p,f=Array.isArray(_),c=0,_=f?_:(0,_getIterator3["default"])(_);;){var l;if(f){if(c>=_.length)break;l=_[c++]}else{if(c=_.next(),c.done)break;l=c.value}var E=l;e[E]=null}}function removePropertiesDeep(e,t){return traverseFast(e,removeProperties,t),e}exports.__esModule=!0,exports.createTypeAnnotationBasedOnTypeof=exports.removeTypeDuplicates=exports.createUnionTypeAnnotation=exports.valueToNode=exports.toBlock=exports.toExpression=exports.toStatement=exports.toBindingIdentifierName=exports.toIdentifier=exports.toKeyAlias=exports.toSequenceExpression=exports.toComputedKey=exports.isImmutable=exports.isScope=exports.isSpecifierDefault=exports.isVar=exports.isBlockScoped=exports.isLet=exports.isValidIdentifier=exports.isReferenced=exports.isBinding=exports.getOuterBindingIdentifiers=exports.getBindingIdentifiers=exports.TYPES=exports.react=exports.DEPRECATED_KEYS=exports.BUILDER_KEYS=exports.NODE_FIELDS=exports.ALIAS_KEYS=exports.VISITOR_KEYS=exports.NOT_LOCAL_BINDING=exports.BLOCK_SCOPED_SYMBOL=exports.INHERIT_KEYS=exports.UNARY_OPERATORS=exports.STRING_UNARY_OPERATORS=exports.NUMBER_UNARY_OPERATORS=exports.BOOLEAN_UNARY_OPERATORS=exports.BINARY_OPERATORS=exports.NUMBER_BINARY_OPERATORS=exports.BOOLEAN_BINARY_OPERATORS=exports.COMPARISON_BINARY_OPERATORS=exports.EQUALITY_BINARY_OPERATORS=exports.BOOLEAN_NUMBER_BINARY_OPERATORS=exports.UPDATE_OPERATORS=exports.LOGICAL_OPERATORS=exports.COMMENT_KEYS=exports.FOR_INIT_KEYS=exports.FLATTENABLE_KEYS=exports.STATEMENT_OR_BLOCK_KEYS=void 0;var _getOwnPropertySymbols=__webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-symbols.js"),_getOwnPropertySymbols2=_interopRequireDefault(_getOwnPropertySymbols),_getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2),_keys=__webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js"),_keys2=_interopRequireDefault(_keys),_stringify=__webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js"),_stringify2=_interopRequireDefault(_stringify),_constants=__webpack_require__("./node_modules/babel-types/lib/constants.js");Object.defineProperty(exports,"STATEMENT_OR_BLOCK_KEYS",{enumerable:!0,get:function(){return _constants.STATEMENT_OR_BLOCK_KEYS}}),Object.defineProperty(exports,"FLATTENABLE_KEYS",{enumerable:!0,get:function(){return _constants.FLATTENABLE_KEYS}}),Object.defineProperty(exports,"FOR_INIT_KEYS",{enumerable:!0,get:function(){return _constants.FOR_INIT_KEYS}}),Object.defineProperty(exports,"COMMENT_KEYS",{enumerable:!0,get:function(){return _constants.COMMENT_KEYS}}),Object.defineProperty(exports,"LOGICAL_OPERATORS",{enumerable:!0,get:function(){return _constants.LOGICAL_OPERATORS}}),Object.defineProperty(exports,"UPDATE_OPERATORS",{enumerable:!0,get:function(){return _constants.UPDATE_OPERATORS}}),Object.defineProperty(exports,"BOOLEAN_NUMBER_BINARY_OPERATORS",{enumerable:!0,get:function(){return _constants.BOOLEAN_NUMBER_BINARY_OPERATORS}}),Object.defineProperty(exports,"EQUALITY_BINARY_OPERATORS",{enumerable:!0,get:function(){return _constants.EQUALITY_BINARY_OPERATORS}}),Object.defineProperty(exports,"COMPARISON_BINARY_OPERATORS",{enumerable:!0,get:function(){return _constants.COMPARISON_BINARY_OPERATORS}}),Object.defineProperty(exports,"BOOLEAN_BINARY_OPERATORS",{enumerable:!0,get:function(){return _constants.BOOLEAN_BINARY_OPERATORS}}),Object.defineProperty(exports,"NUMBER_BINARY_OPERATORS",{enumerable:!0,get:function(){return _constants.NUMBER_BINARY_OPERATORS}}),Object.defineProperty(exports,"BINARY_OPERATORS",{enumerable:!0,get:function(){return _constants.BINARY_OPERATORS}}),Object.defineProperty(exports,"BOOLEAN_UNARY_OPERATORS",{enumerable:!0,get:function(){return _constants.BOOLEAN_UNARY_OPERATORS}}),Object.defineProperty(exports,"NUMBER_UNARY_OPERATORS",{enumerable:!0,get:function(){return _constants.NUMBER_UNARY_OPERATORS}}),Object.defineProperty(exports,"STRING_UNARY_OPERATORS",{enumerable:!0,get:function(){return _constants.STRING_UNARY_OPERATORS}}),Object.defineProperty(exports,"UNARY_OPERATORS",{enumerable:!0,get:function(){return _constants.UNARY_OPERATORS}}),Object.defineProperty(exports,"INHERIT_KEYS",{enumerable:!0,get:function(){return _constants.INHERIT_KEYS}}),Object.defineProperty(exports,"BLOCK_SCOPED_SYMBOL",{enumerable:!0,get:function(){return _constants.BLOCK_SCOPED_SYMBOL}}),Object.defineProperty(exports,"NOT_LOCAL_BINDING",{enumerable:!0,get:function(){return _constants.NOT_LOCAL_BINDING}}),exports.is=is,exports.isType=isType,exports.validate=validate,exports.shallowEqual=shallowEqual,exports.appendToMemberExpression=appendToMemberExpression,exports.prependToMemberExpression=prependToMemberExpression,exports.ensureBlock=ensureBlock,exports.clone=clone,exports.cloneWithoutLoc=cloneWithoutLoc,exports.cloneDeep=cloneDeep,exports.buildMatchMemberExpression=buildMatchMemberExpression,exports.removeComments=removeComments,exports.inheritsComments=inheritsComments,exports.inheritTrailingComments=inheritTrailingComments,exports.inheritLeadingComments=inheritLeadingComments,exports.inheritInnerComments=inheritInnerComments,exports.inherits=inherits,exports.assertNode=assertNode,exports.isNode=isNode,exports.traverseFast=traverseFast,exports.removeProperties=removeProperties,exports.removePropertiesDeep=removePropertiesDeep;var _retrievers=__webpack_require__("./node_modules/babel-types/lib/retrievers.js");Object.defineProperty(exports,"getBindingIdentifiers",{enumerable:!0,get:function(){return _retrievers.getBindingIdentifiers}}),Object.defineProperty(exports,"getOuterBindingIdentifiers",{enumerable:!0,get:function(){return _retrievers.getOuterBindingIdentifiers}});var _validators=__webpack_require__("./node_modules/babel-types/lib/validators.js");Object.defineProperty(exports,"isBinding",{enumerable:!0,get:function(){return _validators.isBinding}}),Object.defineProperty(exports,"isReferenced",{enumerable:!0,get:function(){return _validators.isReferenced}}),Object.defineProperty(exports,"isValidIdentifier",{enumerable:!0,get:function(){return _validators.isValidIdentifier}}),Object.defineProperty(exports,"isLet",{enumerable:!0,get:function(){return _validators.isLet}}),Object.defineProperty(exports,"isBlockScoped",{enumerable:!0,get:function(){return _validators.isBlockScoped}}),Object.defineProperty(exports,"isVar",{enumerable:!0,get:function(){return _validators.isVar}}),Object.defineProperty(exports,"isSpecifierDefault",{enumerable:!0,get:function(){return _validators.isSpecifierDefault}}),Object.defineProperty(exports,"isScope",{enumerable:!0,get:function(){return _validators.isScope}}),Object.defineProperty(exports,"isImmutable",{enumerable:!0,get:function(){return _validators.isImmutable}});var _converters=__webpack_require__("./node_modules/babel-types/lib/converters.js");Object.defineProperty(exports,"toComputedKey",{enumerable:!0,get:function(){return _converters.toComputedKey}}),Object.defineProperty(exports,"toSequenceExpression",{enumerable:!0,get:function(){return _converters.toSequenceExpression}}),Object.defineProperty(exports,"toKeyAlias",{enumerable:!0,get:function(){return _converters.toKeyAlias}}),Object.defineProperty(exports,"toIdentifier",{enumerable:!0,get:function(){return _converters.toIdentifier}}),Object.defineProperty(exports,"toBindingIdentifierName",{enumerable:!0,get:function(){return _converters.toBindingIdentifierName}}),Object.defineProperty(exports,"toStatement",{enumerable:!0,get:function(){return _converters.toStatement}}),Object.defineProperty(exports,"toExpression",{enumerable:!0,get:function(){return _converters.toExpression}}),Object.defineProperty(exports,"toBlock",{enumerable:!0,get:function(){return _converters.toBlock}}),Object.defineProperty(exports,"valueToNode",{enumerable:!0,get:function(){return _converters.valueToNode}});var _flow=__webpack_require__("./node_modules/babel-types/lib/flow.js");Object.defineProperty(exports,"createUnionTypeAnnotation",{enumerable:!0,get:function(){return _flow.createUnionTypeAnnotation}}),Object.defineProperty(exports,"removeTypeDuplicates",{enumerable:!0,get:function(){return _flow.removeTypeDuplicates}}),Object.defineProperty(exports,"createTypeAnnotationBasedOnTypeof",{enumerable:!0,get:function(){return _flow.createTypeAnnotationBasedOnTypeof}});var _toFastProperties=__webpack_require__("./node_modules/to-fast-properties/index.js"),_toFastProperties2=_interopRequireDefault(_toFastProperties),_compact=__webpack_require__("./node_modules/lodash/compact.js"),_compact2=_interopRequireDefault(_compact),_clone=__webpack_require__("./node_modules/lodash/clone.js"),_clone2=_interopRequireDefault(_clone),_each=__webpack_require__("./node_modules/lodash/each.js"),_each2=_interopRequireDefault(_each),_uniq=__webpack_require__("./node_modules/lodash/uniq.js"),_uniq2=_interopRequireDefault(_uniq);__webpack_require__("./node_modules/babel-types/lib/definitions/init.js");var _definitions=__webpack_require__("./node_modules/babel-types/lib/definitions/index.js"),_react2=__webpack_require__("./node_modules/babel-types/lib/react.js"),_react=_interopRequireWildcard(_react2),t=exports;exports.VISITOR_KEYS=_definitions.VISITOR_KEYS,exports.ALIAS_KEYS=_definitions.ALIAS_KEYS,exports.NODE_FIELDS=_definitions.NODE_FIELDS,exports.BUILDER_KEYS=_definitions.BUILDER_KEYS,exports.DEPRECATED_KEYS=_definitions.DEPRECATED_KEYS,exports.react=_react;for(var type in t.VISITOR_KEYS)registerType(type);t.FLIPPED_ALIAS_KEYS={},(0,_each2["default"])(t.ALIAS_KEYS,function(e,r){(0,_each2["default"])(e,function(e){var n=t.FLIPPED_ALIAS_KEYS[e]=t.FLIPPED_ALIAS_KEYS[e]||[];n.push(r)})}),(0,_each2["default"])(t.FLIPPED_ALIAS_KEYS,function(e,r){t[r.toUpperCase()+"_TYPES"]=e,registerType(r)});var TYPES=exports.TYPES=(0,_keys2["default"])(t.VISITOR_KEYS).concat((0,_keys2["default"])(t.FLIPPED_ALIAS_KEYS)).concat((0,_keys2["default"])(t.DEPRECATED_KEYS));(0,_each2["default"])(t.BUILDER_KEYS,function(e,r){function n(){if(arguments.length>e.length)throw new Error("t."+r+": Too many arguments passed. Received "+arguments.length+" but can receive no more than "+e.length);var n={};n.type=r;for(var o=0,i=e,s=Array.isArray(i),a=0,i=s?i:(0,_getIterator3["default"])(i);;){var u;if(s){if(a>=i.length)break;u=i[a++]}else{if(a=i.next(),a.done)break;u=a.value}var p=u,_=t.NODE_FIELDS[r][p],f=arguments[o++];void 0===f&&(f=(0,_clone2["default"])(_["default"])),n[p]=f}for(var c in n)validate(n,c,n[c]);return n}t[r]=n,t[r[0].toLowerCase()+r.slice(1)]=n});var _loop=function(e){function r(t){return function(){return console.trace("The node type "+e+" has been renamed to "+n),t.apply(this,arguments)}}var n=t.DEPRECATED_KEYS[e];t[e]=t[e[0].toLowerCase()+e.slice(1)]=r(t[n]),t["is"+e]=r(t["is"+n]),t["assert"+e]=r(t["assert"+n])};for(var _type in t.DEPRECATED_KEYS)_loop(_type);(0,_toFastProperties2["default"])(t),(0,_toFastProperties2["default"])(t.VISITOR_KEYS);var CLEAR_KEYS=["tokens","start","end","loc","raw","rawValue"],CLEAR_KEYS_PLUS_COMMENTS=t.COMMENT_KEYS.concat(["comments"]).concat(CLEAR_KEYS);

/***/ },

/***/ "./node_modules/babel-runtime/core-js/object/get-own-property-symbols.js":
/***/ function(module, exports, __webpack_require__) {

	module.exports={"default":__webpack_require__("./node_modules/core-js/library/fn/object/get-own-property-symbols.js"),__esModule:!0};

/***/ },

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__("./node_modules/core-js/library/modules/es6.symbol.js"),module.exports=__webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.getOwnPropertySymbols;

/***/ },

/***/ "./node_modules/babel-types/lib/constants.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(R){return R&&R.__esModule?R:{"default":R}}exports.__esModule=!0,exports.NOT_LOCAL_BINDING=exports.BLOCK_SCOPED_SYMBOL=exports.INHERIT_KEYS=exports.UNARY_OPERATORS=exports.STRING_UNARY_OPERATORS=exports.NUMBER_UNARY_OPERATORS=exports.BOOLEAN_UNARY_OPERATORS=exports.BINARY_OPERATORS=exports.NUMBER_BINARY_OPERATORS=exports.BOOLEAN_BINARY_OPERATORS=exports.COMPARISON_BINARY_OPERATORS=exports.EQUALITY_BINARY_OPERATORS=exports.BOOLEAN_NUMBER_BINARY_OPERATORS=exports.UPDATE_OPERATORS=exports.LOGICAL_OPERATORS=exports.COMMENT_KEYS=exports.FOR_INIT_KEYS=exports.FLATTENABLE_KEYS=exports.STATEMENT_OR_BLOCK_KEYS=void 0;var _for=__webpack_require__("./node_modules/babel-runtime/core-js/symbol/for.js"),_for2=_interopRequireDefault(_for),STATEMENT_OR_BLOCK_KEYS=exports.STATEMENT_OR_BLOCK_KEYS=["consequent","body","alternate"],FLATTENABLE_KEYS=exports.FLATTENABLE_KEYS=["body","expressions"],FOR_INIT_KEYS=exports.FOR_INIT_KEYS=["left","init"],COMMENT_KEYS=exports.COMMENT_KEYS=["leadingComments","trailingComments","innerComments"],LOGICAL_OPERATORS=exports.LOGICAL_OPERATORS=["||","&&"],UPDATE_OPERATORS=exports.UPDATE_OPERATORS=["++","--"],BOOLEAN_NUMBER_BINARY_OPERATORS=exports.BOOLEAN_NUMBER_BINARY_OPERATORS=[">","<",">=","<="],EQUALITY_BINARY_OPERATORS=exports.EQUALITY_BINARY_OPERATORS=["==","===","!=","!=="],COMPARISON_BINARY_OPERATORS=exports.COMPARISON_BINARY_OPERATORS=[].concat(EQUALITY_BINARY_OPERATORS,["in","instanceof"]),BOOLEAN_BINARY_OPERATORS=exports.BOOLEAN_BINARY_OPERATORS=[].concat(COMPARISON_BINARY_OPERATORS,BOOLEAN_NUMBER_BINARY_OPERATORS),NUMBER_BINARY_OPERATORS=exports.NUMBER_BINARY_OPERATORS=["-","/","%","*","**","&","|",">>",">>>","<<","^"],BINARY_OPERATORS=exports.BINARY_OPERATORS=["+"].concat(NUMBER_BINARY_OPERATORS,BOOLEAN_BINARY_OPERATORS),BOOLEAN_UNARY_OPERATORS=exports.BOOLEAN_UNARY_OPERATORS=["delete","!"],NUMBER_UNARY_OPERATORS=exports.NUMBER_UNARY_OPERATORS=["+","-","++","--","~"],STRING_UNARY_OPERATORS=exports.STRING_UNARY_OPERATORS=["typeof"],UNARY_OPERATORS=exports.UNARY_OPERATORS=["void"].concat(BOOLEAN_UNARY_OPERATORS,NUMBER_UNARY_OPERATORS,STRING_UNARY_OPERATORS),INHERIT_KEYS=exports.INHERIT_KEYS={optional:["typeAnnotation","typeParameters","returnType"],force:["start","loc","end"]},BLOCK_SCOPED_SYMBOL=exports.BLOCK_SCOPED_SYMBOL=(0,_for2["default"])("var used to be block scoped"),NOT_LOCAL_BINDING=exports.NOT_LOCAL_BINDING=(0,_for2["default"])("should not be considered a local binding");

/***/ },

/***/ "./node_modules/babel-runtime/core-js/symbol/for.js":
/***/ function(module, exports, __webpack_require__) {

	module.exports={"default":__webpack_require__("./node_modules/core-js/library/fn/symbol/for.js"),__esModule:!0};

/***/ },

/***/ "./node_modules/core-js/library/fn/symbol/for.js":
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__("./node_modules/core-js/library/modules/es6.symbol.js"),module.exports=__webpack_require__("./node_modules/core-js/library/modules/_core.js").Symbol["for"];

/***/ },

/***/ "./node_modules/babel-types/lib/retrievers.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var i={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t]);return i["default"]=e,i}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function getBindingIdentifiers(e,i,r){for(var n=[].concat(e),a=(0,_create2["default"])(null);n.length;){var s=n.shift();if(s){var o=t.getBindingIdentifiers.keys[s.type];if(t.isIdentifier(s))if(i){var l=a[s.name]=a[s.name]||[];l.push(s)}else a[s.name]=s;else if(t.isExportDeclaration(s))t.isDeclaration(e.declaration)&&n.push(e.declaration);else{if(r){if(t.isFunctionDeclaration(s)){n.push(s.id);continue}if(t.isFunctionExpression(s))continue}if(o)for(var c=0;c<o.length;c++){var d=o[c];s[d]&&(n=n.concat(s[d]))}}}}return a}function getOuterBindingIdentifiers(e,i){return getBindingIdentifiers(e,i,!0)}exports.__esModule=!0;var _create=__webpack_require__("./node_modules/babel-runtime/core-js/object/create.js"),_create2=_interopRequireDefault(_create);exports.getBindingIdentifiers=getBindingIdentifiers,exports.getOuterBindingIdentifiers=getOuterBindingIdentifiers;var _index=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_index);getBindingIdentifiers.keys={DeclareClass:["id"],DeclareFunction:["id"],DeclareModule:["id"],DeclareVariable:["id"],InterfaceDeclaration:["id"],TypeAlias:["id"],CatchClause:["param"],LabeledStatement:["label"],UnaryExpression:["argument"],AssignmentExpression:["left"],ImportSpecifier:["local"],ImportNamespaceSpecifier:["local"],ImportDefaultSpecifier:["local"],ImportDeclaration:["specifiers"],ExportSpecifier:["exported"],ExportNamespaceSpecifier:["exported"],ExportDefaultSpecifier:["exported"],FunctionDeclaration:["id","params"],FunctionExpression:["id","params"],ClassDeclaration:["id"],ClassExpression:["id"],RestElement:["argument"],UpdateExpression:["argument"],RestProperty:["argument"],ObjectProperty:["value"],AssignmentPattern:["left"],ArrayPattern:["elements"],ObjectPattern:["properties"],VariableDeclaration:["declarations"],VariableDeclarator:["id"]};

/***/ },

/***/ "./node_modules/babel-types/lib/validators.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r["default"]=e,r}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function isBinding(e,r){var t=_retrievers.getBindingIdentifiers.keys[r.type];if(t)for(var i=0;i<t.length;i++){var s=t[i],n=r[s];if(Array.isArray(n)){if(n.indexOf(e)>=0)return!0}else if(n===e)return!0}return!1}function isReferenced(e,r){switch(r.type){case"BindExpression":return r.object===e||r.callee===e;case"MemberExpression":case"JSXMemberExpression":return!(r.property!==e||!r.computed)||r.object===e;case"MetaProperty":return!1;case"ObjectProperty":if(r.key===e)return r.computed;case"VariableDeclarator":return r.id!==e;case"ArrowFunctionExpression":case"FunctionDeclaration":case"FunctionExpression":for(var t=r.params,i=Array.isArray(t),s=0,t=i?t:(0,_getIterator3["default"])(t);;){var n;if(i){if(s>=t.length)break;n=t[s++]}else{if(s=t.next(),s.done)break;n=s.value}var a=n;if(a===e)return!1}return r.id!==e;case"ExportSpecifier":return!r.source&&r.local===e;case"ExportNamespaceSpecifier":case"ExportDefaultSpecifier":return!1;case"JSXAttribute":return r.name!==e;case"ClassProperty":return r.value===e;case"ImportDefaultSpecifier":case"ImportNamespaceSpecifier":case"ImportSpecifier":return!1;case"ClassDeclaration":case"ClassExpression":return r.id!==e;case"ClassMethod":case"ObjectMethod":return r.key===e&&r.computed;case"LabeledStatement":return!1;case"CatchClause":return r.param!==e;case"RestElement":return!1;case"AssignmentExpression":return r.right===e;case"AssignmentPattern":return r.right===e;case"ObjectPattern":case"ArrayPattern":return!1}return!0}function isValidIdentifier(e){return"string"==typeof e&&!_esutils2["default"].keyword.isReservedWordES6(e,!0)&&_esutils2["default"].keyword.isIdentifierNameES6(e)}function isLet(e){return t.isVariableDeclaration(e)&&("var"!==e.kind||e[_constants.BLOCK_SCOPED_SYMBOL])}function isBlockScoped(e){return t.isFunctionDeclaration(e)||t.isClassDeclaration(e)||t.isLet(e)}function isVar(e){return t.isVariableDeclaration(e,{kind:"var"})&&!e[_constants.BLOCK_SCOPED_SYMBOL]}function isSpecifierDefault(e){return t.isImportDefaultSpecifier(e)||t.isIdentifier(e.imported||e.exported,{name:"default"})}function isScope(e,r){return(!t.isBlockStatement(e)||!t.isFunction(r,{body:e}))&&t.isScopable(e)}function isImmutable(e){return!!t.isType(e.type,"Immutable")||!!t.isIdentifier(e)&&"undefined"===e.name}exports.__esModule=!0;var _getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports.isBinding=isBinding,exports.isReferenced=isReferenced,exports.isValidIdentifier=isValidIdentifier,exports.isLet=isLet,exports.isBlockScoped=isBlockScoped,exports.isVar=isVar,exports.isSpecifierDefault=isSpecifierDefault,exports.isScope=isScope,exports.isImmutable=isImmutable;var _retrievers=__webpack_require__("./node_modules/babel-types/lib/retrievers.js"),_esutils=__webpack_require__("./node_modules/esutils/lib/utils.js"),_esutils2=_interopRequireDefault(_esutils),_index=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_index),_constants=__webpack_require__("./node_modules/babel-types/lib/constants.js");

/***/ },

/***/ "./node_modules/babel-types/lib/converters.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t["default"]=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function toComputedKey(e){var i=arguments.length<=1||void 0===arguments[1]?e.key||e.property:arguments[1];return e.computed||t.isIdentifier(i)&&(i=t.stringLiteral(i.name)),i}function toSequenceExpression(e,i){function r(e){for(var s=!1,a=[],u=e,l=Array.isArray(u),f=0,u=l?u:(0,_getIterator3["default"])(u);;){var d;if(l){if(f>=u.length)break;d=u[f++]}else{if(f=u.next(),f.done)break;d=f.value}var p=d;if(t.isExpression(p))a.push(p);else if(t.isExpressionStatement(p))a.push(p.expression);else{if(t.isVariableDeclaration(p)){if("var"!==p.kind)return o=!0;for(var c=p.declarations,m=Array.isArray(c),_=0,c=m?c:(0,_getIterator3["default"])(c);;){var g;if(m){if(_>=c.length)break;g=c[_++]}else{if(_=c.next(),_.done)break;g=_.value}var x=g,y=t.getBindingIdentifiers(x);for(var v in y)n.push({kind:p.kind,id:y[v]});x.init&&a.push(t.assignmentExpression("=",x.id,x.init))}s=!0;continue}if(t.isIfStatement(p)){var b=p.consequent?r([p.consequent]):i.buildUndefinedNode(),E=p.alternate?r([p.alternate]):i.buildUndefinedNode();if(!b||!E)return o=!0;a.push(t.conditionalExpression(p.test,b,E))}else{if(!t.isBlockStatement(p)){if(t.isEmptyStatement(p)){s=!0;continue}return o=!0}a.push(r(p.body))}}s=!1}return(s||0===a.length)&&a.push(i.buildUndefinedNode()),1===a.length?a[0]:t.sequenceExpression(a)}if(e&&e.length){var n=[],o=!1,s=r(e);if(!o){for(var a=0;a<n.length;a++)i.push(n[a]);return s}}}function toKeyAlias(e){var i=arguments.length<=1||void 0===arguments[1]?e.key:arguments[1],r=void 0;return"method"===e.kind?toKeyAlias.increment()+"":(r=t.isIdentifier(i)?i.name:t.isStringLiteral(i)?(0,_stringify2["default"])(i.value):(0,_stringify2["default"])(t.removePropertiesDeep(t.cloneDeep(i))),e.computed&&(r="["+r+"]"),e["static"]&&(r="static:"+r),r)}function toIdentifier(e){return e+="",e=e.replace(/[^a-zA-Z0-9$_]/g,"-"),e=e.replace(/^[-0-9]+/,""),e=e.replace(/[-\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),t.isValidIdentifier(e)||(e="_"+e),e||"_"}function toBindingIdentifierName(e){return e=toIdentifier(e),"eval"!==e&&"arguments"!==e||(e="_"+e),e}function toStatement(e,i){if(t.isStatement(e))return e;var r=!1,n=void 0;if(t.isClass(e))r=!0,n="ClassDeclaration";else if(t.isFunction(e))r=!0,n="FunctionDeclaration";else if(t.isAssignmentExpression(e))return t.expressionStatement(e);if(r&&!e.id&&(n=!1),!n){if(i)return!1;throw new Error("cannot turn "+e.type+" to a statement")}return e.type=n,e}function toExpression(e){if(t.isExpressionStatement(e)&&(e=e.expression),t.isExpression(e))return e;if(t.isClass(e)?e.type="ClassExpression":t.isFunction(e)&&(e.type="FunctionExpression"),!t.isExpression(e))throw new Error("cannot turn "+e.type+" to an expression");return e}function toBlock(e,i){return t.isBlockStatement(e)?e:(t.isEmptyStatement(e)&&(e=[]),Array.isArray(e)||(t.isStatement(e)||(e=t.isFunction(i)?t.returnStatement(e):t.expressionStatement(e)),e=[e]),t.blockStatement(e))}function valueToNode(e){if(void 0===e)return t.identifier("undefined");if(e===!0||e===!1)return t.booleanLiteral(e);if(null===e)return t.nullLiteral();if((0,_isString2["default"])(e))return t.stringLiteral(e);if((0,_isNumber2["default"])(e))return t.numericLiteral(e);if((0,_isRegExp2["default"])(e)){var i=e.source,r=e.toString().match(/\/([a-z]+|)$/)[1];return t.regExpLiteral(i,r)}if(Array.isArray(e))return t.arrayExpression(e.map(t.valueToNode));if((0,_isPlainObject2["default"])(e)){var n=[];for(var o in e){var s=void 0;s=t.isValidIdentifier(o)?t.identifier(o):t.stringLiteral(o),n.push(t.objectProperty(s,t.valueToNode(e[o])))}return t.objectExpression(n)}throw new Error("don't know how to turn this value into a node")}exports.__esModule=!0;var _maxSafeInteger=__webpack_require__("./node_modules/babel-runtime/core-js/number/max-safe-integer.js"),_maxSafeInteger2=_interopRequireDefault(_maxSafeInteger),_stringify=__webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js"),_stringify2=_interopRequireDefault(_stringify),_getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports.toComputedKey=toComputedKey,exports.toSequenceExpression=toSequenceExpression,exports.toKeyAlias=toKeyAlias,exports.toIdentifier=toIdentifier,exports.toBindingIdentifierName=toBindingIdentifierName,exports.toStatement=toStatement,exports.toExpression=toExpression,exports.toBlock=toBlock,exports.valueToNode=valueToNode;var _isPlainObject=__webpack_require__("./node_modules/lodash/isPlainObject.js"),_isPlainObject2=_interopRequireDefault(_isPlainObject),_isNumber=__webpack_require__("./node_modules/lodash/isNumber.js"),_isNumber2=_interopRequireDefault(_isNumber),_isRegExp=__webpack_require__("./node_modules/lodash/isRegExp.js"),_isRegExp2=_interopRequireDefault(_isRegExp),_isString=__webpack_require__("./node_modules/lodash/isString.js"),_isString2=_interopRequireDefault(_isString),_index=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_index);toKeyAlias.uid=0,toKeyAlias.increment=function(){return toKeyAlias.uid>=_maxSafeInteger2["default"]?toKeyAlias.uid=0:toKeyAlias.uid++};

/***/ },

/***/ "./node_modules/babel-runtime/core-js/number/max-safe-integer.js":
/***/ function(module, exports, __webpack_require__) {

	module.exports={"default":__webpack_require__("./node_modules/core-js/library/fn/number/max-safe-integer.js"),__esModule:!0};

/***/ },

/***/ "./node_modules/core-js/library/fn/number/max-safe-integer.js":
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__("./node_modules/core-js/library/modules/es6.number.max-safe-integer.js"),module.exports=9007199254740991;

/***/ },

/***/ "./node_modules/core-js/library/modules/es6.number.max-safe-integer.js":
/***/ function(module, exports, __webpack_require__) {

	var $export=__webpack_require__("./node_modules/core-js/library/modules/_export.js");$export($export.S,"Number",{MAX_SAFE_INTEGER:9007199254740991});

/***/ },

/***/ "./node_modules/lodash/isNumber.js":
/***/ function(module, exports, __webpack_require__) {

	function isNumber(e){return"number"==typeof e||isObjectLike(e)&&objectToString.call(e)==numberTag}var isObjectLike=__webpack_require__("./node_modules/lodash/isObjectLike.js"),numberTag="[object Number]",objectProto=Object.prototype,objectToString=objectProto.toString;module.exports=isNumber;

/***/ },

/***/ "./node_modules/lodash/isRegExp.js":
/***/ function(module, exports, __webpack_require__) {

	var baseIsRegExp=__webpack_require__("./node_modules/lodash/_baseIsRegExp.js"),baseUnary=__webpack_require__("./node_modules/lodash/_baseUnary.js"),nodeUtil=__webpack_require__("./node_modules/lodash/_nodeUtil.js"),nodeIsRegExp=nodeUtil&&nodeUtil.isRegExp,isRegExp=nodeIsRegExp?baseUnary(nodeIsRegExp):baseIsRegExp;module.exports=isRegExp;

/***/ },

/***/ "./node_modules/lodash/_baseIsRegExp.js":
/***/ function(module, exports, __webpack_require__) {

	function baseIsRegExp(e){return isObject(e)&&objectToString.call(e)==regexpTag}var isObject=__webpack_require__("./node_modules/lodash/isObject.js"),regexpTag="[object RegExp]",objectProto=Object.prototype,objectToString=objectProto.toString;module.exports=baseIsRegExp;

/***/ },

/***/ "./node_modules/lodash/isObject.js":
/***/ function(module, exports) {

	function isObject(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}module.exports=isObject;

/***/ },

/***/ "./node_modules/lodash/_baseUnary.js":
/***/ function(module, exports) {

	function baseUnary(n){return function(r){return n(r)}}module.exports=baseUnary;

/***/ },

/***/ "./node_modules/lodash/_nodeUtil.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal=__webpack_require__("./node_modules/lodash/_freeGlobal.js"),freeExports="object"==typeof exports&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&"object"==typeof module&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,freeProcess=moduleExports&&freeGlobal.process,nodeUtil=function(){try{return freeProcess&&freeProcess.binding("util")}catch(e){}}();module.exports=nodeUtil;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ },

/***/ "./node_modules/lodash/_freeGlobal.js":
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {var freeGlobal="object"==typeof global&&global&&global.Object===Object&&global;module.exports=freeGlobal;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ "./node_modules/lodash/isString.js":
/***/ function(module, exports, __webpack_require__) {

	function isString(t){return"string"==typeof t||!isArray(t)&&isObjectLike(t)&&objectToString.call(t)==stringTag}var isArray=__webpack_require__("./node_modules/lodash/isArray.js"),isObjectLike=__webpack_require__("./node_modules/lodash/isObjectLike.js"),stringTag="[object String]",objectProto=Object.prototype,objectToString=objectProto.toString;module.exports=isString;

/***/ },

/***/ "./node_modules/lodash/isArray.js":
/***/ function(module, exports) {

	var isArray=Array.isArray;module.exports=isArray;

/***/ },

/***/ "./node_modules/babel-types/lib/flow.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n["default"]=e,n}function createUnionTypeAnnotation(e){var n=removeTypeDuplicates(e);return 1===n.length?n[0]:t.unionTypeAnnotation(n)}function removeTypeDuplicates(e){for(var n={},r={},i=[],o=[],a=0;a<e.length;a++){var p=e[a];if(p&&!(o.indexOf(p)>=0)){if(t.isAnyTypeAnnotation(p))return[p];if(t.isFlowBaseAnnotation(p))r[p.type]=p;else if(t.isUnionTypeAnnotation(p))i.indexOf(p.types)<0&&(e=e.concat(p.types),i.push(p.types));else if(t.isGenericTypeAnnotation(p)){var s=p.id.name;if(n[s]){var y=n[s];y.typeParameters?p.typeParameters&&(y.typeParameters.params=removeTypeDuplicates(y.typeParameters.params.concat(p.typeParameters.params))):y=p.typeParameters}else n[s]=p}else o.push(p)}}for(var u in r)o.push(r[u]);for(var f in n)o.push(n[f]);return o}function createTypeAnnotationBasedOnTypeof(e){if("string"===e)return t.stringTypeAnnotation();if("number"===e)return t.numberTypeAnnotation();if("undefined"===e)return t.voidTypeAnnotation();if("boolean"===e)return t.booleanTypeAnnotation();if("function"===e)return t.genericTypeAnnotation(t.identifier("Function"));if("object"===e)return t.genericTypeAnnotation(t.identifier("Object"));if("symbol"===e)return t.genericTypeAnnotation(t.identifier("Symbol"));throw new Error("Invalid typeof value")}exports.__esModule=!0,exports.createUnionTypeAnnotation=createUnionTypeAnnotation,exports.removeTypeDuplicates=removeTypeDuplicates,exports.createTypeAnnotationBasedOnTypeof=createTypeAnnotationBasedOnTypeof;var _index=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_index);

/***/ },

/***/ "./node_modules/to-fast-properties/index.js":
/***/ function(module, exports) {

	"use strict";module.exports=function t(o){function e(){}e.prototype=o,new e};

/***/ },

/***/ "./node_modules/lodash/compact.js":
/***/ function(module, exports) {

	function compact(o){for(var r=-1,t=o?o.length:0,c=0,a=[];++r<t;){var e=o[r];e&&(a[c++]=e)}return a}module.exports=compact;

/***/ },

/***/ "./node_modules/lodash/clone.js":
/***/ function(module, exports, __webpack_require__) {

	function clone(e){return baseClone(e,!1,!0)}var baseClone=__webpack_require__("./node_modules/lodash/_baseClone.js");module.exports=clone;

/***/ },

/***/ "./node_modules/lodash/_baseClone.js":
/***/ function(module, exports, __webpack_require__) {

	function baseClone(e,a,r,g,t,n,o){var l;if(g&&(l=n?g(e,t,n,o):g(e)),void 0!==l)return l;if(!isObject(e))return e;var i=isArray(e);if(i){if(l=initCloneArray(e),!a)return copyArray(e,l)}else{var T=getTag(e),c=T==funcTag||T==genTag;if(isBuffer(e))return cloneBuffer(e,a);if(T==objectTag||T==argsTag||c&&!n){if(l=initCloneObject(c?{}:e),!a)return copySymbols(e,baseAssign(l,e))}else{if(!cloneableTags[T])return n?e:{};l=initCloneByTag(e,T,baseClone,a)}}o||(o=new Stack);var b=o.get(e);if(b)return b;if(o.set(e,l),!i)var s=r?getAllKeys(e):keys(e);return arrayEach(s||e,function(t,n){s&&(n=t,t=e[n]),assignValue(l,n,baseClone(t,a,r,g,n,e,o))}),l}var Stack=__webpack_require__("./node_modules/lodash/_Stack.js"),arrayEach=__webpack_require__("./node_modules/lodash/_arrayEach.js"),assignValue=__webpack_require__("./node_modules/lodash/_assignValue.js"),baseAssign=__webpack_require__("./node_modules/lodash/_baseAssign.js"),cloneBuffer=__webpack_require__("./node_modules/lodash/_cloneBuffer.js"),copyArray=__webpack_require__("./node_modules/lodash/_copyArray.js"),copySymbols=__webpack_require__("./node_modules/lodash/_copySymbols.js"),getAllKeys=__webpack_require__("./node_modules/lodash/_getAllKeys.js"),getTag=__webpack_require__("./node_modules/lodash/_getTag.js"),initCloneArray=__webpack_require__("./node_modules/lodash/_initCloneArray.js"),initCloneByTag=__webpack_require__("./node_modules/lodash/_initCloneByTag.js"),initCloneObject=__webpack_require__("./node_modules/lodash/_initCloneObject.js"),isArray=__webpack_require__("./node_modules/lodash/isArray.js"),isBuffer=__webpack_require__("./node_modules/lodash/isBuffer.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),keys=__webpack_require__("./node_modules/lodash/keys.js"),argsTag="[object Arguments]",arrayTag="[object Array]",boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",funcTag="[object Function]",genTag="[object GeneratorFunction]",mapTag="[object Map]",numberTag="[object Number]",objectTag="[object Object]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",symbolTag="[object Symbol]",weakMapTag="[object WeakMap]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=!0,cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=!1,module.exports=baseClone;

/***/ },

/***/ "./node_modules/lodash/_Stack.js":
/***/ function(module, exports, __webpack_require__) {

	function Stack(t){var e=this.__data__=new ListCache(t);this.size=e.size}var ListCache=__webpack_require__("./node_modules/lodash/_ListCache.js"),stackClear=__webpack_require__("./node_modules/lodash/_stackClear.js"),stackDelete=__webpack_require__("./node_modules/lodash/_stackDelete.js"),stackGet=__webpack_require__("./node_modules/lodash/_stackGet.js"),stackHas=__webpack_require__("./node_modules/lodash/_stackHas.js"),stackSet=__webpack_require__("./node_modules/lodash/_stackSet.js");Stack.prototype.clear=stackClear,Stack.prototype["delete"]=stackDelete,Stack.prototype.get=stackGet,Stack.prototype.has=stackHas,Stack.prototype.set=stackSet,module.exports=Stack;

/***/ },

/***/ "./node_modules/lodash/_ListCache.js":
/***/ function(module, exports, __webpack_require__) {

	function ListCache(e){var t=-1,a=e?e.length:0;for(this.clear();++t<a;){var s=e[t];this.set(s[0],s[1])}}var listCacheClear=__webpack_require__("./node_modules/lodash/_listCacheClear.js"),listCacheDelete=__webpack_require__("./node_modules/lodash/_listCacheDelete.js"),listCacheGet=__webpack_require__("./node_modules/lodash/_listCacheGet.js"),listCacheHas=__webpack_require__("./node_modules/lodash/_listCacheHas.js"),listCacheSet=__webpack_require__("./node_modules/lodash/_listCacheSet.js");ListCache.prototype.clear=listCacheClear,ListCache.prototype["delete"]=listCacheDelete,ListCache.prototype.get=listCacheGet,ListCache.prototype.has=listCacheHas,ListCache.prototype.set=listCacheSet,module.exports=ListCache;

/***/ },

/***/ "./node_modules/lodash/_listCacheClear.js":
/***/ function(module, exports) {

	function listCacheClear(){this.__data__=[],this.size=0}module.exports=listCacheClear;

/***/ },

/***/ "./node_modules/lodash/_listCacheDelete.js":
/***/ function(module, exports, __webpack_require__) {

	function listCacheDelete(e){var r=this.__data__,a=assocIndexOf(r,e);if(a<0)return!1;var t=r.length-1;return a==t?r.pop():splice.call(r,a,1),--this.size,!0}var assocIndexOf=__webpack_require__("./node_modules/lodash/_assocIndexOf.js"),arrayProto=Array.prototype,splice=arrayProto.splice;module.exports=listCacheDelete;

/***/ },

/***/ "./node_modules/lodash/_assocIndexOf.js":
/***/ function(module, exports, __webpack_require__) {

	function assocIndexOf(e,r){for(var n=e.length;n--;)if(eq(e[n][0],r))return n;return-1}var eq=__webpack_require__("./node_modules/lodash/eq.js");module.exports=assocIndexOf;

/***/ },

/***/ "./node_modules/lodash/eq.js":
/***/ function(module, exports) {

	function eq(e,n){return e===n||e!==e&&n!==n}module.exports=eq;

/***/ },

/***/ "./node_modules/lodash/_listCacheGet.js":
/***/ function(module, exports, __webpack_require__) {

	function listCacheGet(e){var s=this.__data__,a=assocIndexOf(s,e);return a<0?void 0:s[a][1]}var assocIndexOf=__webpack_require__("./node_modules/lodash/_assocIndexOf.js");module.exports=listCacheGet;

/***/ },

/***/ "./node_modules/lodash/_listCacheHas.js":
/***/ function(module, exports, __webpack_require__) {

	function listCacheHas(s){return assocIndexOf(this.__data__,s)>-1}var assocIndexOf=__webpack_require__("./node_modules/lodash/_assocIndexOf.js");module.exports=listCacheHas;

/***/ },

/***/ "./node_modules/lodash/_listCacheSet.js":
/***/ function(module, exports, __webpack_require__) {

	function listCacheSet(s,e){var t=this.__data__,a=assocIndexOf(t,s);return a<0?(++this.size,t.push([s,e])):t[a][1]=e,this}var assocIndexOf=__webpack_require__("./node_modules/lodash/_assocIndexOf.js");module.exports=listCacheSet;

/***/ },

/***/ "./node_modules/eslint2/node_modules/eslint/lib/eslint.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function parseBooleanConfig(e,n){var r={};return e=e.replace(/\s*:\s*/g,":"),e=e.replace(/\s*,\s*/g,","),e.split(/\s|,+/).forEach(function(e){if(e){var t,s=e.indexOf(":");s!==-1&&(t=e.substring(s+1,e.length),e=e.substring(0,s)),r[e]={value:"true"===t,comment:n}}}),r}function parseJsonConfig(e,n,r){var t={};try{if(t=levn.parse("Object",e)||{},ConfigOps.isEverySeverityValid(t))return t}catch(s){}t={},e=e.replace(/([a-zA-Z0-9\-\/]+):/g,'"$1":').replace(/(\]|[0-9])\s+(?=")/,"$1,");try{t=JSON.parse("{"+e+"}")}catch(s){r.push({ruleId:null,fatal:!0,severity:2,source:null,message:"Failed to parse JSON from '"+e+"': "+s.message,line:n.start.line,column:n.start.column+1})}return t}function parseListConfig(e){var n={};return e=e.replace(/\s*,\s*/g,","),e.split(/,+/).forEach(function(e){e=e.trim(),e&&(n[e]=!0)}),n}function addDeclaredGlobals(e,n,r){var t={},s={},o={},i=Environments.get("builtin");lodash.assign(t,i),Object.keys(r.env).forEach(function(e){if(r.env[e]){var n=Environments.get(e),s=n&&n.globals;s&&lodash.assign(t,s)}}),lodash.assign(s,r.exported),lodash.assign(t,r.globals),lodash.assign(o,r.astGlobals),Object.keys(t).forEach(function(e){var r=n.set.get(e);r||(r=new escope.Variable(e,n),r.eslintExplicitGlobal=!1,n.variables.push(r),n.set.set(e,r)),r.writeable=t[e]}),Object.keys(o).forEach(function(e){var r=n.set.get(e);r||(r=new escope.Variable(e,n),r.eslintExplicitGlobal=!0,r.eslintExplicitGlobalComment=o[e].comment,n.variables.push(r),n.set.set(e,r)),r.writeable=o[e].value}),Object.keys(s).forEach(function(e){var r=n.set.get(e);r&&(r.eslintUsed=!0)}),n.through=n.through.filter(function(e){var r=e.identifier.name,t=n.set.get(r);return!t||(e.resolved=t,t.references.push(e),!1)})}function disableReporting(e,n,r){r.length?r.forEach(function(r){e.push({start:n,end:null,rule:r})}):e.push({start:n,end:null,rule:null})}function enableReporting(e,n,r){var t;if(r.length)r.forEach(function(r){for(t=e.length-1;t>=0;t--)if(!e[t].end&&e[t].rule===r){e[t].end=n;break}});else{var s;for(t=e.length-1;t>=0&&(!s||s===e[t].start);t--)e[t].end||(e[t].end=n,s=e[t].start)}}function modifyConfigsFromComments(e,n,r,t,s){var o={exported:{},astGlobals:{},rules:{},env:{}},i={};return n.comments.forEach(function(n){var r=n.value.trim(),a=/^(eslint(-\w+){0,3}|exported|globals?)(\s|$)/.exec(r);if(a)if(r=r.substring(a.index+a[1].length),"Block"===n.type)switch(a[1]){case"exported":lodash.assign(o.exported,parseBooleanConfig(r,n));break;case"globals":case"global":lodash.assign(o.astGlobals,parseBooleanConfig(r,n));break;case"eslint-env":lodash.assign(o.env,parseListConfig(r));break;case"eslint-disable":disableReporting(t,n.loc.start,Object.keys(parseListConfig(r)));break;case"eslint-enable":enableReporting(t,n.loc.start,Object.keys(parseListConfig(r)));break;case"eslint":var l=parseJsonConfig(r,n.loc,s);Object.keys(l).forEach(function(r){var t=l[r];validator.validateRuleOptions(r,t,e+" line "+n.loc.start.line),i[r]=t})}else"eslint-disable-line"===a[1]?(disableReporting(t,{line:n.loc.start.line,column:0},Object.keys(parseListConfig(r))),enableReporting(t,n.loc.end,Object.keys(parseListConfig(r)))):"eslint-disable-next-line"===a[1]&&(disableReporting(t,n.loc.start,Object.keys(parseListConfig(r))),enableReporting(t,{line:n.loc.start.line+2},Object.keys(parseListConfig(r))))}),Object.keys(o.env).forEach(function(e){var n=Environments.get(e);n&&(o=ConfigOps.merge(o,n))}),lodash.assign(o.rules,i),ConfigOps.merge(r,o)}function isDisabledByReportingConfig(e,n,r){for(var t=0,s=e.length;t<s;t++){var o=e[t];if((!o.rule||o.rule===n)&&(r.line>o.start.line||r.line===o.start.line&&r.column>=o.start.column)&&(!o.end||r.line<o.end.line||r.line===o.end.line&&r.column<=o.end.column))return!0}return!1}function prepareConfig(e){e.globals=e.globals||e.global||{},delete e.global;var n,r={},t={};return"object"==typeof e.rules&&Object.keys(e.rules).forEach(function(n){var t=e.rules[n];if(null===t)throw new Error("Invalid config for rule '"+n+"'.");Array.isArray(t)?r[n]=t.slice():r[n]=t}),"object"==typeof e.env&&Object.keys(e.env).forEach(function(n){var r=Environments.get(n);e.env[n]&&r&&r.parserOptions&&(t=ConfigOps.merge(t,r.parserOptions))}),n={rules:r,parser:e.parser||DEFAULT_PARSER,globals:ConfigOps.merge({},e.globals),env:ConfigOps.merge({},e.env||{}),settings:ConfigOps.merge({},e.settings||{}),parserOptions:ConfigOps.merge(t,e.parserOptions||{})},"module"===n.parserOptions.sourceType&&(n.parserOptions.ecmaFeatures||(n.parserOptions.ecmaFeatures={}),n.parserOptions.ecmaFeatures.globalReturn=!1,(!n.parserOptions.ecmaVersion||n.parserOptions.ecmaVersion<6)&&(n.parserOptions.ecmaVersion=6)),n}function createStubRule(e){function n(n){return{Program:function(r){n.report(r,e)}}}if(e)return n;throw new Error("No message passed to stub rule")}function getRuleReplacementMessage(e){if(e in replacements.rules){var n=replacements.rules[e];return"Rule '"+e+"' was removed and replaced by: "+n.join(", ")}return null}function findEslintEnv(e){var n,r;for(eslintEnvPattern.lastIndex=0;n=eslintEnvPattern.exec(e);)r=lodash.assign(r||{},parseListConfig(n[1]));return r}function stripUnicodeBOM(e){return 65279===e.charCodeAt(0)?e.slice(1):e}var assert=__webpack_require__("./node_modules/assert/assert.js"),EventEmitter=__webpack_require__("./node_modules/events/events.js").EventEmitter,escope=__webpack_require__("./node_modules/escope/lib/index.js"),levn=__webpack_require__("./node_modules/levn/lib/index.js"),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),blankScriptAST=__webpack_require__("./node_modules/eslint2/node_modules/eslint/conf/blank-script.json"),DEFAULT_PARSER=__webpack_require__("./node_modules/eslint2/node_modules/eslint/conf/eslint.json").parser,replacements=__webpack_require__("./node_modules/eslint2/node_modules/eslint/conf/replacements.json"),CodePathAnalyzer=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/code-path-analysis/code-path-analyzer.js"),ConfigOps=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/config/config-ops.js"),validator=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/config/config-validator.js"),Environments=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/config/environments.js"),CommentEventGenerator=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/util/comment-event-generator.js"),NodeEventGenerator=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/util/node-event-generator.js"),SourceCode=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/util/source-code.js"),Traverser=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/util/traverser.js"),RuleContext=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/rule-context.js"),rules=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/rules.js"),timing=__webpack_require__("./node_modules/eslint2/node_modules/eslint/lib/timing.js"),eslintEnvPattern=/\/\*\s*eslint-env\s(.+?)\*\//g;module.exports=function(){function e(e,n){var r,t={loc:!0,range:!0,raw:!0,tokens:!0,comment:!0,attachComment:!0};try{r=!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())}catch(o){return s.push({ruleId:null,fatal:!0,severity:2,source:null,message:o.message,line:0,column:0}),null}n.parserOptions&&(t=lodash.assign({},n.parserOptions,t));try{return r.parse(e,t)}catch(o){var i=o.message.replace(/^line \d+:/i,"").trim(),a=o.lineNumber?SourceCode.splitLines(e)[o.lineNumber-1]:null;return s.push({ruleId:null,fatal:!0,severity:2,source:a,message:"Parsing error: "+i,line:o.lineNumber,column:o.column}),null}}function n(e){return"number"==typeof e?e:Array.isArray(e)?e[0]:0}function r(e){return Array.isArray(e)?e.slice(1):[]}var t=Object.create(new EventEmitter),s=[],o=null,i=null,a=null,l=null,u=null,c=null,g=[],p=null;t.setMaxListeners(0),t.reset=function(){this.removeAllListeners(),s=[],o=null,i=null,a=null,l=null,c=null,g=[],p=null},t.verify=function(f,m,d,v){var b,h,y,O,C,E="string"==typeof f?f:null;"object"==typeof d?(u=d.filename,C=d.allowInlineConfig,v=d.saveState):u=d,v||this.reset();var k=findEslintEnv(E||f.text);if(k&&(m&&m.env?(m=lodash.assign({},m),m.env=lodash.assign({},m.env,k)):m=lodash.assign({},m||{},{env:k})),m=prepareConfig(m||{}),null!==E){if(0===E.trim().length)return p=new SourceCode(E,blankScriptAST),s;b=e(stripUnicodeBOM(E).replace(/^#!([^\r\n]+)/,function(e,n){return h=n,"//"+n}),m),b&&(p=new SourceCode(E,b))}else p=f,b=p.ast;if(b){C!==!1&&(m=modifyConfigsFromComments(u,b,m,g,s)),ConfigOps.normalize(m),Object.keys(m.rules).filter(function(e){return n(m.rules[e])>0}).forEach(function(e){var s,o,i,a;if(s=rules.get(e),!s){var l=getRuleReplacementMessage(e);s=createStubRule(l?l:"Definition for rule '"+e+"' was not found"),rules.define(e,s)}o=n(m.rules[e]),i=r(m.rules[e]);try{var u=new RuleContext(e,t,o,i,m.settings,m.parserOptions,m.parser,s.meta);a=s.create?s.create(u):s(u),Object.keys(a).forEach(function(n){t.on(n,timing.enabled?timing.time(e,a[n]):a[n])})}catch(c){throw c.message="Error while loading rule '"+e+"': "+c.message,c}}),o=m,c=new Traverser,y=o.parserOptions.ecmaFeatures||{},O=o.parserOptions.ecmaVersion||5,l=escope.analyze(b,{ignoreEval:!0,nodejsScope:y.globalReturn,impliedStrict:y.impliedStrict,ecmaVersion:O,sourceType:o.parserOptions.sourceType||"script",fallback:Traverser.getKeys}),i=l.scopes,a=[],i.forEach(function(e,n){var r=e.block.range[0];a[r]||(a[r]=n)}),addDeclaredGlobals(b,i[0],o),h&&b.comments.length&&b.comments[0].value===h&&(b.comments.splice(0,1),b.body.length&&b.body[0].leadingComments&&b.body[0].leadingComments[0].value===h&&b.body[0].leadingComments.splice(0,1));var x=new NodeEventGenerator(t);x=new CodePathAnalyzer(x),x=new CommentEventGenerator(x,p),c.traverse(b,{enter:function(e,n){e.parent=n,x.enterNode(e)},leave:function(e){x.leaveNode(e)}})}return s.sort(function(e,n){var r=e.line-n.line;return 0===r?e.column-n.column:r}),s},t.report=function(e,n,r,t,o,i,a,l){if(r&&assert.strictEqual(typeof r,"object","Node must be an object"),"string"==typeof t&&(assert.ok(r,"Node must be provided when reporting error if location is not provided"),l=a,a=i,i=o,o=t,t=r.loc.start),!isDisabledByReportingConfig(g,e,t)){i&&(o=o.replace(/\{\{\s*(.+?)\s*\}\}/g,function(e,n){return n in i?i[n]:e}));var u={ruleId:e,severity:n,message:o,line:t.line,column:t.column+1,nodeType:r&&r.type,source:p.lines[t.line-1]||""};if(a&&Array.isArray(a.range)&&"string"==typeof a.text){if(l&&!l.fixable)throw new Error("Fixable rules should export a `meta.fixable` property.");u.fix=a}s.push(u)}},t.getSourceCode=function(){return p};var f={getSource:"getText",getSourceLines:"getLines",getAllComments:"getAllComments",getNodeByRangeIndex:"getNodeByRangeIndex",getComments:"getComments",getJSDocComment:"getJSDocComment",getFirstToken:"getFirstToken",getFirstTokens:"getFirstTokens",getLastToken:"getLastToken",getLastTokens:"getLastTokens",getTokenAfter:"getTokenAfter",getTokenBefore:"getTokenBefore",getTokenByRangeStart:"getTokenByRangeStart",getTokens:"getTokens",getTokensAfter:"getTokensAfter",getTokensBefore:"getTokensBefore",getTokensBetween:"getTokensBetween"};Object.keys(f).forEach(function(e){var n=f[e];t[e]=function(e,r,t,s,o){return p?p[n](e,r,t,s,o):null}}),t.getAncestors=function(){return c.parents()},t.getScope=function(){var e=c.parents(),n=i[0];if(e.length){var r=c.current();o.parserOptions.ecmaVersion>=6?["BlockStatement","SwitchStatement","CatchClause","FunctionDeclaration","FunctionExpression","ArrowFunctionExpression"].indexOf(r.type)>=0&&e.push(r):["FunctionDeclaration","FunctionExpression","ArrowFunctionExpression"].indexOf(r.type)>=0&&e.push(r);for(var t=e.length-1;t>=0;--t)if(n=l.acquire(e[t],!0))return"function-expression-name"===n.type?n.childScopes[0]:n}return i[0]},t.markVariableAsUsed=function(e){var n,r,t,s=this.getScope(),i=o.parserOptions.ecmaFeatures&&o.parserOptions.ecmaFeatures.globalReturn,a=i||"module"===o.parserOptions.sourceType;"global"===s.type&&a&&(s=s.childScopes[0]);do for(n=s.variables,r=0,t=n.length;r<t;r++)if(n[r].name===e)return n[r].eslintUsed=!0,!0;while(s=s.upper);return!1},t.getFilename=function(){return"string"==typeof u?u:"<input>"};var m=t.defineRule=function(e,n){rules.define(e,n)};return t.defineRules=function(e){Object.getOwnPropertyNames(e).forEach(function(n){m(n,e[n])})},t.defaults=function(){return __webpack_require__("./node_modules/eslint2/node_modules/eslint/conf/eslint.json")},t.getDeclaredVariables=function(e){return l&&l.getDeclaredVariables(e)||[]},t}();

/***/ },

/***/ "./node_modules/lodash/_stackDelete.js":
/***/ function(module, exports) {

	function stackDelete(e){var t=this.__data__,s=t["delete"](e);return this.size=t.size,s}module.exports=stackDelete;

/***/ },

/***/ "./node_modules/lodash/_stackGet.js":
/***/ function(module, exports) {

	function stackGet(t){return this.__data__.get(t)}module.exports=stackGet;

/***/ },

/***/ "./node_modules/lodash/_stackHas.js":
/***/ function(module, exports) {

	function stackHas(a){return this.__data__.has(a)}module.exports=stackHas;

/***/ },

/***/ "./node_modules/lodash/_stackSet.js":
/***/ function(module, exports, __webpack_require__) {

	function stackSet(e,a){var t=this.__data__;if(t instanceof ListCache){var i=t.__data__;if(!Map||i.length<LARGE_ARRAY_SIZE-1)return i.push([e,a]),this.size=++t.size,this;t=this.__data__=new MapCache(i)}return t.set(e,a),this.size=t.size,this}var ListCache=__webpack_require__("./node_modules/lodash/_ListCache.js"),Map=__webpack_require__("./node_modules/lodash/_Map.js"),MapCache=__webpack_require__("./node_modules/lodash/_MapCache.js"),LARGE_ARRAY_SIZE=200;module.exports=stackSet;

/***/ },

/***/ "./node_modules/lodash/_Map.js":
/***/ function(module, exports, __webpack_require__) {

	var getNative=__webpack_require__("./node_modules/lodash/_getNative.js"),root=__webpack_require__("./node_modules/lodash/_root.js"),Map=getNative(root,"Map");module.exports=Map;

/***/ },

/***/ "./node_modules/lodash/_getNative.js":
/***/ function(module, exports, __webpack_require__) {

	function getNative(e,a){var t=getValue(e,a);return baseIsNative(t)?t:void 0}var baseIsNative=__webpack_require__("./node_modules/lodash/_baseIsNative.js"),getValue=__webpack_require__("./node_modules/lodash/_getValue.js");module.exports=getNative;

/***/ },

/***/ "./node_modules/lodash/_baseIsNative.js":
/***/ function(module, exports, __webpack_require__) {

	function baseIsNative(e){if(!isObject(e)||isMasked(e))return!1;var r=isFunction(e)?reIsNative:reIsHostCtor;return r.test(toSource(e))}var isFunction=__webpack_require__("./node_modules/lodash/isFunction.js"),isMasked=__webpack_require__("./node_modules/lodash/_isMasked.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),toSource=__webpack_require__("./node_modules/lodash/_toSource.js"),reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reIsHostCtor=/^\[object .+?Constructor\]$/,funcProto=Function.prototype,objectProto=Object.prototype,funcToString=funcProto.toString,hasOwnProperty=objectProto.hasOwnProperty,reIsNative=RegExp("^"+funcToString.call(hasOwnProperty).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");module.exports=baseIsNative;

/***/ },

/***/ "./node_modules/lodash/isFunction.js":
/***/ function(module, exports, __webpack_require__) {

	function isFunction(t){var o=isObject(t)?objectToString.call(t):"";return o==funcTag||o==genTag}var isObject=__webpack_require__("./node_modules/lodash/isObject.js"),funcTag="[object Function]",genTag="[object GeneratorFunction]",objectProto=Object.prototype,objectToString=objectProto.toString;module.exports=isFunction;

/***/ },

/***/ "./node_modules/lodash/_isMasked.js":
/***/ function(module, exports, __webpack_require__) {

	function isMasked(e){return!!maskSrcKey&&maskSrcKey in e}var coreJsData=__webpack_require__("./node_modules/lodash/_coreJsData.js"),maskSrcKey=function(){var e=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();module.exports=isMasked;

/***/ },

/***/ "./node_modules/lodash/_coreJsData.js":
/***/ function(module, exports, __webpack_require__) {

	var root=__webpack_require__("./node_modules/lodash/_root.js"),coreJsData=root["__core-js_shared__"];module.exports=coreJsData;

/***/ },

/***/ "./node_modules/lodash/_root.js":
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal=__webpack_require__("./node_modules/lodash/_freeGlobal.js"),freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")();module.exports=root;

/***/ },

/***/ "./node_modules/lodash/_toSource.js":
/***/ function(module, exports) {

	function toSource(t){if(null!=t){try{return funcToString.call(t)}catch(r){}try{return t+""}catch(r){}}return""}var funcProto=Function.prototype,funcToString=funcProto.toString;module.exports=toSource;

/***/ },

/***/ "./node_modules/lodash/_getValue.js":
/***/ function(module, exports) {

	function getValue(e,u){return null==e?void 0:e[u]}module.exports=getValue;

/***/ },

/***/ "./node_modules/lodash/_MapCache.js":
/***/ function(module, exports, __webpack_require__) {

	function MapCache(e){var a=-1,p=e?e.length:0;for(this.clear();++a<p;){var t=e[a];this.set(t[0],t[1])}}var mapCacheClear=__webpack_require__("./node_modules/lodash/_mapCacheClear.js"),mapCacheDelete=__webpack_require__("./node_modules/lodash/_mapCacheDelete.js"),mapCacheGet=__webpack_require__("./node_modules/lodash/_mapCacheGet.js"),mapCacheHas=__webpack_require__("./node_modules/lodash/_mapCacheHas.js"),mapCacheSet=__webpack_require__("./node_modules/lodash/_mapCacheSet.js");MapCache.prototype.clear=mapCacheClear,MapCache.prototype["delete"]=mapCacheDelete,MapCache.prototype.get=mapCacheGet,MapCache.prototype.has=mapCacheHas,MapCache.prototype.set=mapCacheSet,module.exports=MapCache;

/***/ },

/***/ "./node_modules/lodash/_mapCacheClear.js":
/***/ function(module, exports, __webpack_require__) {

	function mapCacheClear(){this.size=0,this.__data__={hash:new Hash,map:new(Map||ListCache),string:new Hash}}var Hash=__webpack_require__("./node_modules/lodash/_Hash.js"),ListCache=__webpack_require__("./node_modules/lodash/_ListCache.js"),Map=__webpack_require__("./node_modules/lodash/_Map.js");module.exports=mapCacheClear;

/***/ },

/***/ "./node_modules/lodash/_Hash.js":
/***/ function(module, exports, __webpack_require__) {

	function Hash(e){var h=-1,a=e?e.length:0;for(this.clear();++h<a;){var s=e[h];this.set(s[0],s[1])}}var hashClear=__webpack_require__("./node_modules/lodash/_hashClear.js"),hashDelete=__webpack_require__("./node_modules/lodash/_hashDelete.js"),hashGet=__webpack_require__("./node_modules/lodash/_hashGet.js"),hashHas=__webpack_require__("./node_modules/lodash/_hashHas.js"),hashSet=__webpack_require__("./node_modules/lodash/_hashSet.js");Hash.prototype.clear=hashClear,Hash.prototype["delete"]=hashDelete,Hash.prototype.get=hashGet,Hash.prototype.has=hashHas,Hash.prototype.set=hashSet,module.exports=Hash;

/***/ },

/***/ "./node_modules/lodash/_hashClear.js":
/***/ function(module, exports, __webpack_require__) {

	function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{},this.size=0}var nativeCreate=__webpack_require__("./node_modules/lodash/_nativeCreate.js");module.exports=hashClear;

/***/ },

/***/ "./node_modules/lodash/_nativeCreate.js":
/***/ function(module, exports, __webpack_require__) {

	var getNative=__webpack_require__("./node_modules/lodash/_getNative.js"),nativeCreate=getNative(Object,"create");module.exports=nativeCreate;

/***/ },

/***/ "./node_modules/lodash/_hashDelete.js":
/***/ function(module, exports) {

	function hashDelete(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}module.exports=hashDelete;

/***/ },

/***/ "./node_modules/lodash/_hashGet.js":
/***/ function(module, exports, __webpack_require__) {

	function hashGet(e){var t=this.__data__;if(nativeCreate){var r=t[e];return r===HASH_UNDEFINED?void 0:r}return hasOwnProperty.call(t,e)?t[e]:void 0}var nativeCreate=__webpack_require__("./node_modules/lodash/_nativeCreate.js"),HASH_UNDEFINED="__lodash_hash_undefined__",objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=hashGet;

/***/ },

/***/ "./node_modules/lodash/_hashHas.js":
/***/ function(module, exports, __webpack_require__) {

	function hashHas(e){var t=this.__data__;return nativeCreate?void 0!==t[e]:hasOwnProperty.call(t,e)}var nativeCreate=__webpack_require__("./node_modules/lodash/_nativeCreate.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=hashHas;

/***/ },

/***/ "./node_modules/lodash/_hashSet.js":
/***/ function(module, exports, __webpack_require__) {

	function hashSet(e,t){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=nativeCreate&&void 0===t?HASH_UNDEFINED:t,this}var nativeCreate=__webpack_require__("./node_modules/lodash/_nativeCreate.js"),HASH_UNDEFINED="__lodash_hash_undefined__";module.exports=hashSet;

/***/ },

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/***/ function(module, exports, __webpack_require__) {

	function mapCacheDelete(e){var a=getMapData(this,e)["delete"](e);return this.size-=a?1:0,a}var getMapData=__webpack_require__("./node_modules/lodash/_getMapData.js");module.exports=mapCacheDelete;

/***/ },

/***/ "./node_modules/lodash/_getMapData.js":
/***/ function(module, exports, __webpack_require__) {

	function getMapData(a,e){var t=a.__data__;return isKeyable(e)?t["string"==typeof e?"string":"hash"]:t.map}var isKeyable=__webpack_require__("./node_modules/lodash/_isKeyable.js");module.exports=getMapData;

/***/ },

/***/ "./node_modules/lodash/_isKeyable.js":
/***/ function(module, exports) {

	function isKeyable(e){var o=typeof e;return"string"==o||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==e:null===e}module.exports=isKeyable;

/***/ },

/***/ "./node_modules/lodash/_mapCacheGet.js":
/***/ function(module, exports, __webpack_require__) {

	function mapCacheGet(a){return getMapData(this,a).get(a)}var getMapData=__webpack_require__("./node_modules/lodash/_getMapData.js");module.exports=mapCacheGet;

/***/ },

/***/ "./node_modules/lodash/_mapCacheHas.js":
/***/ function(module, exports, __webpack_require__) {

	function mapCacheHas(a){return getMapData(this,a).has(a)}var getMapData=__webpack_require__("./node_modules/lodash/_getMapData.js");module.exports=mapCacheHas;

/***/ },

/***/ "./node_modules/lodash/_mapCacheSet.js":
/***/ function(module, exports, __webpack_require__) {

	function mapCacheSet(e,a){var t=getMapData(this,e),i=t.size;return t.set(e,a),this.size+=t.size==i?0:1,this}var getMapData=__webpack_require__("./node_modules/lodash/_getMapData.js");module.exports=mapCacheSet;

/***/ },

/***/ "./node_modules/lodash/_arrayEach.js":
/***/ function(module, exports) {

	function arrayEach(r,a){for(var e=-1,n=r?r.length:0;++e<n&&a(r[e],e,r)!==!1;);return r}module.exports=arrayEach;

/***/ },

/***/ "./node_modules/lodash/_assignValue.js":
/***/ function(module, exports, __webpack_require__) {

	function assignValue(e,s,a){var r=e[s];hasOwnProperty.call(e,s)&&eq(r,a)&&(void 0!==a||s in e)||baseAssignValue(e,s,a)}var baseAssignValue=__webpack_require__("./node_modules/lodash/_baseAssignValue.js"),eq=__webpack_require__("./node_modules/lodash/eq.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=assignValue;

/***/ },

/***/ "./node_modules/lodash/_baseAssignValue.js":
/***/ function(module, exports) {

	function baseAssignValue(e,r,n){"__proto__"==r&&defineProperty?defineProperty(e,r,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[r]=n}var defineProperty=Object.defineProperty;module.exports=baseAssignValue;

/***/ },

/***/ "./node_modules/lodash/_baseAssign.js":
/***/ function(module, exports, __webpack_require__) {

	function baseAssign(e,s){return e&&copyObject(s,keys(s),e)}var copyObject=__webpack_require__("./node_modules/lodash/_copyObject.js"),keys=__webpack_require__("./node_modules/lodash/keys.js");module.exports=baseAssign;

/***/ },

/***/ "./node_modules/lodash/_copyObject.js":
/***/ function(module, exports, __webpack_require__) {

	function copyObject(e,a,s,r){var i=!s;s||(s={});for(var u=-1,n=a.length;++u<n;){var l=a[u],o=r?r(s[l],e[l],l,s,e):void 0;void 0===o&&(o=e[l]),i?baseAssignValue(s,l,o):assignValue(s,l,o)}return s}var assignValue=__webpack_require__("./node_modules/lodash/_assignValue.js"),baseAssignValue=__webpack_require__("./node_modules/lodash/_baseAssignValue.js");module.exports=copyObject;

/***/ },

/***/ "./node_modules/lodash/keys.js":
/***/ function(module, exports, __webpack_require__) {

	function keys(e){return isArrayLike(e)?arrayLikeKeys(e):baseKeys(e)}var arrayLikeKeys=__webpack_require__("./node_modules/lodash/_arrayLikeKeys.js"),baseKeys=__webpack_require__("./node_modules/lodash/_baseKeys.js"),isArrayLike=__webpack_require__("./node_modules/lodash/isArrayLike.js");module.exports=keys;

/***/ },

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/***/ function(module, exports, __webpack_require__) {

	function arrayLikeKeys(r,e){var s=isArray(r)||isArguments(r)?baseTimes(r.length,String):[],i=s.length,t=!!i;for(var a in r)!e&&!hasOwnProperty.call(r,a)||t&&("length"==a||isIndex(a,i))||s.push(a);return s}var baseTimes=__webpack_require__("./node_modules/lodash/_baseTimes.js"),isArguments=__webpack_require__("./node_modules/lodash/isArguments.js"),isArray=__webpack_require__("./node_modules/lodash/isArray.js"),isIndex=__webpack_require__("./node_modules/lodash/_isIndex.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=arrayLikeKeys;

/***/ },

/***/ "./node_modules/lodash/_baseTimes.js":
/***/ function(module, exports) {

	function baseTimes(e,r){for(var s=-1,a=Array(e);++s<e;)a[s]=r(s);return a}module.exports=baseTimes;

/***/ },

/***/ "./node_modules/lodash/isArguments.js":
/***/ function(module, exports, __webpack_require__) {

	function isArguments(r){return isArrayLikeObject(r)&&hasOwnProperty.call(r,"callee")&&(!propertyIsEnumerable.call(r,"callee")||objectToString.call(r)==argsTag)}var isArrayLikeObject=__webpack_require__("./node_modules/lodash/isArrayLikeObject.js"),argsTag="[object Arguments]",objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,objectToString=objectProto.toString,propertyIsEnumerable=objectProto.propertyIsEnumerable;module.exports=isArguments;

/***/ },

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/***/ function(module, exports, __webpack_require__) {

	function isArrayLikeObject(e){return isObjectLike(e)&&isArrayLike(e)}var isArrayLike=__webpack_require__("./node_modules/lodash/isArrayLike.js"),isObjectLike=__webpack_require__("./node_modules/lodash/isObjectLike.js");module.exports=isArrayLikeObject;

/***/ },

/***/ "./node_modules/lodash/isArrayLike.js":
/***/ function(module, exports, __webpack_require__) {

	function isArrayLike(i){return null!=i&&isLength(i.length)&&!isFunction(i)}var isFunction=__webpack_require__("./node_modules/lodash/isFunction.js"),isLength=__webpack_require__("./node_modules/lodash/isLength.js");module.exports=isArrayLike;

/***/ },

/***/ "./node_modules/lodash/isLength.js":
/***/ function(module, exports) {

	function isLength(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=MAX_SAFE_INTEGER}var MAX_SAFE_INTEGER=9007199254740991;module.exports=isLength;

/***/ },

/***/ "./node_modules/lodash/_isIndex.js":
/***/ function(module, exports) {

	function isIndex(e,n){return n=null==n?MAX_SAFE_INTEGER:n,!!n&&("number"==typeof e||reIsUint.test(e))&&e>-1&&e%1==0&&e<n}var MAX_SAFE_INTEGER=9007199254740991,reIsUint=/^(?:0|[1-9]\d*)$/;module.exports=isIndex;

/***/ },

/***/ "./node_modules/lodash/_baseKeys.js":
/***/ function(module, exports, __webpack_require__) {

	function baseKeys(e){if(!isPrototype(e))return nativeKeys(e);var r=[];for(var t in Object(e))hasOwnProperty.call(e,t)&&"constructor"!=t&&r.push(t);return r}var isPrototype=__webpack_require__("./node_modules/lodash/_isPrototype.js"),nativeKeys=__webpack_require__("./node_modules/lodash/_nativeKeys.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=baseKeys;

/***/ },

/***/ "./node_modules/lodash/_isPrototype.js":
/***/ function(module, exports) {

	function isPrototype(o){var t=o&&o.constructor,r="function"==typeof t&&t.prototype||objectProto;return o===r}var objectProto=Object.prototype;module.exports=isPrototype;

/***/ },

/***/ "./node_modules/lodash/_nativeKeys.js":
/***/ function(module, exports, __webpack_require__) {

	var overArg=__webpack_require__("./node_modules/lodash/_overArg.js"),nativeKeys=overArg(Object.keys,Object);module.exports=nativeKeys;

/***/ },

/***/ "./node_modules/lodash/_cloneBuffer.js":
/***/ function(module, exports) {

	function cloneBuffer(e,r){if(r)return e.slice();var n=new e.constructor(e.length);return e.copy(n),n}module.exports=cloneBuffer;

/***/ },

/***/ "./node_modules/lodash/_copyArray.js":
/***/ function(module, exports) {

	function copyArray(r,o){var y=-1,a=r.length;for(o||(o=Array(a));++y<a;)o[y]=r[y];return o}module.exports=copyArray;

/***/ },

/***/ "./node_modules/lodash/_copySymbols.js":
/***/ function(module, exports, __webpack_require__) {

	function copySymbols(e,o){return copyObject(e,getSymbols(e),o)}var copyObject=__webpack_require__("./node_modules/lodash/_copyObject.js"),getSymbols=__webpack_require__("./node_modules/lodash/_getSymbols.js");module.exports=copySymbols;

/***/ },

/***/ "./node_modules/lodash/_getSymbols.js":
/***/ function(module, exports, __webpack_require__) {

	var overArg=__webpack_require__("./node_modules/lodash/_overArg.js"),stubArray=__webpack_require__("./node_modules/lodash/stubArray.js"),nativeGetSymbols=Object.getOwnPropertySymbols,getSymbols=nativeGetSymbols?overArg(nativeGetSymbols,Object):stubArray;module.exports=getSymbols;

/***/ },

/***/ "./node_modules/lodash/stubArray.js":
/***/ function(module, exports) {

	function stubArray(){return[]}module.exports=stubArray;

/***/ },

/***/ "./node_modules/lodash/_getAllKeys.js":
/***/ function(module, exports, __webpack_require__) {

	function getAllKeys(e){return baseGetAllKeys(e,keys,getSymbols)}var baseGetAllKeys=__webpack_require__("./node_modules/lodash/_baseGetAllKeys.js"),getSymbols=__webpack_require__("./node_modules/lodash/_getSymbols.js"),keys=__webpack_require__("./node_modules/lodash/keys.js");module.exports=getAllKeys;

/***/ },

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/***/ function(module, exports, __webpack_require__) {

	function baseGetAllKeys(r,a,e){var s=a(r);return isArray(r)?s:arrayPush(s,e(r))}var arrayPush=__webpack_require__("./node_modules/lodash/_arrayPush.js"),isArray=__webpack_require__("./node_modules/lodash/isArray.js");module.exports=baseGetAllKeys;

/***/ },

/***/ "./node_modules/lodash/_arrayPush.js":
/***/ function(module, exports) {

	function arrayPush(r,a){for(var e=-1,n=a.length,t=r.length;++e<n;)r[t+e]=a[e];return r}module.exports=arrayPush;

/***/ },

/***/ "./node_modules/lodash/_getTag.js":
/***/ function(module, exports, __webpack_require__) {

	var DataView=__webpack_require__("./node_modules/lodash/_DataView.js"),Map=__webpack_require__("./node_modules/lodash/_Map.js"),Promise=__webpack_require__("./node_modules/lodash/_Promise.js"),Set=__webpack_require__("./node_modules/lodash/_Set.js"),WeakMap=__webpack_require__("./node_modules/lodash/_WeakMap.js"),baseGetTag=__webpack_require__("./node_modules/lodash/_baseGetTag.js"),toSource=__webpack_require__("./node_modules/lodash/_toSource.js"),mapTag="[object Map]",objectTag="[object Object]",promiseTag="[object Promise]",setTag="[object Set]",weakMapTag="[object WeakMap]",dataViewTag="[object DataView]",objectProto=Object.prototype,objectToString=objectProto.toString,dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap),getTag=baseGetTag;(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map)!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set)!=setTag||WeakMap&&getTag(new WeakMap)!=weakMapTag)&&(getTag=function(e){var a=objectToString.call(e),t=a==objectTag?e.constructor:void 0,r=t?toSource(t):void 0;if(r)switch(r){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag}return a}),module.exports=getTag;

/***/ },

/***/ "./node_modules/lodash/_DataView.js":
/***/ function(module, exports, __webpack_require__) {

	var getNative=__webpack_require__("./node_modules/lodash/_getNative.js"),root=__webpack_require__("./node_modules/lodash/_root.js"),DataView=getNative(root,"DataView");module.exports=DataView;

/***/ },

/***/ "./node_modules/lodash/_Promise.js":
/***/ function(module, exports, __webpack_require__) {

	var getNative=__webpack_require__("./node_modules/lodash/_getNative.js"),root=__webpack_require__("./node_modules/lodash/_root.js"),Promise=getNative(root,"Promise");module.exports=Promise;

/***/ },

/***/ "./node_modules/lodash/_Set.js":
/***/ function(module, exports, __webpack_require__) {

	var getNative=__webpack_require__("./node_modules/lodash/_getNative.js"),root=__webpack_require__("./node_modules/lodash/_root.js"),Set=getNative(root,"Set");module.exports=Set;

/***/ },

/***/ "./node_modules/lodash/_WeakMap.js":
/***/ function(module, exports, __webpack_require__) {

	var getNative=__webpack_require__("./node_modules/lodash/_getNative.js"),root=__webpack_require__("./node_modules/lodash/_root.js"),WeakMap=getNative(root,"WeakMap");module.exports=WeakMap;

/***/ },

/***/ "./node_modules/lodash/_baseGetTag.js":
/***/ function(module, exports) {

	function baseGetTag(t){return objectToString.call(t)}var objectProto=Object.prototype,objectToString=objectProto.toString;module.exports=baseGetTag;

/***/ },

/***/ "./node_modules/lodash/_initCloneArray.js":
/***/ function(module, exports) {

	function initCloneArray(t){var r=t.length,o=t.constructor(r);return r&&"string"==typeof t[0]&&hasOwnProperty.call(t,"index")&&(o.index=t.index,o.input=t.input),o}var objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=initCloneArray;

/***/ },

/***/ "./node_modules/lodash/_initCloneByTag.js":
/***/ function(module, exports, __webpack_require__) {

	function initCloneByTag(e,a,r,t){var n=e.constructor;switch(a){case arrayBufferTag:return cloneArrayBuffer(e);case boolTag:case dateTag:return new n((+e));case dataViewTag:return cloneDataView(e,t);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(e,t);case mapTag:return cloneMap(e,t,r);case numberTag:case stringTag:return new n(e);case regexpTag:return cloneRegExp(e);case setTag:return cloneSet(e,t,r);case symbolTag:return cloneSymbol(e)}}var cloneArrayBuffer=__webpack_require__("./node_modules/lodash/_cloneArrayBuffer.js"),cloneDataView=__webpack_require__("./node_modules/lodash/_cloneDataView.js"),cloneMap=__webpack_require__("./node_modules/lodash/_cloneMap.js"),cloneRegExp=__webpack_require__("./node_modules/lodash/_cloneRegExp.js"),cloneSet=__webpack_require__("./node_modules/lodash/_cloneSet.js"),cloneSymbol=__webpack_require__("./node_modules/lodash/_cloneSymbol.js"),cloneTypedArray=__webpack_require__("./node_modules/lodash/_cloneTypedArray.js"),boolTag="[object Boolean]",dateTag="[object Date]",mapTag="[object Map]",numberTag="[object Number]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",symbolTag="[object Symbol]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]";module.exports=initCloneByTag;

/***/ },

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/***/ function(module, exports, __webpack_require__) {

	function cloneArrayBuffer(r){var e=new r.constructor(r.byteLength);return new Uint8Array(e).set(new Uint8Array(r)),e}var Uint8Array=__webpack_require__("./node_modules/lodash/_Uint8Array.js");module.exports=cloneArrayBuffer;

/***/ },

/***/ "./node_modules/lodash/_Uint8Array.js":
/***/ function(module, exports, __webpack_require__) {

	var root=__webpack_require__("./node_modules/lodash/_root.js"),Uint8Array=root.Uint8Array;module.exports=Uint8Array;

/***/ },

/***/ "./node_modules/lodash/_cloneDataView.js":
/***/ function(module, exports, __webpack_require__) {

	function cloneDataView(e,r){var f=r?cloneArrayBuffer(e.buffer):e.buffer;return new e.constructor(f,e.byteOffset,e.byteLength)}var cloneArrayBuffer=__webpack_require__("./node_modules/lodash/_cloneArrayBuffer.js");module.exports=cloneDataView;

/***/ },

/***/ "./node_modules/lodash/_cloneMap.js":
/***/ function(module, exports, __webpack_require__) {

	function cloneMap(r,a,e){var o=a?e(mapToArray(r),!0):mapToArray(r);return arrayReduce(o,addMapEntry,new r.constructor)}var addMapEntry=__webpack_require__("./node_modules/lodash/_addMapEntry.js"),arrayReduce=__webpack_require__("./node_modules/lodash/_arrayReduce.js"),mapToArray=__webpack_require__("./node_modules/lodash/_mapToArray.js");module.exports=cloneMap;

/***/ },

/***/ "./node_modules/lodash/_addMapEntry.js":
/***/ function(module, exports) {

	function addMapEntry(t,d){return t.set(d[0],d[1]),t}module.exports=addMapEntry;

/***/ },

/***/ "./node_modules/lodash/_arrayReduce.js":
/***/ function(module, exports) {

	function arrayReduce(r,e,a,u){var n=-1,o=r?r.length:0;for(u&&o&&(a=r[++n]);++n<o;)a=e(a,r[n],n,r);return a}module.exports=arrayReduce;

/***/ },

/***/ "./node_modules/lodash/_mapToArray.js":
/***/ function(module, exports) {

	function mapToArray(r){var a=-1,o=Array(r.size);return r.forEach(function(r,n){o[++a]=[n,r]}),o}module.exports=mapToArray;

/***/ },

/***/ "./node_modules/lodash/_cloneRegExp.js":
/***/ function(module, exports) {

	function cloneRegExp(e){var r=new e.constructor(e.source,reFlags.exec(e));return r.lastIndex=e.lastIndex,r}var reFlags=/\w*$/;module.exports=cloneRegExp;

/***/ },

/***/ "./node_modules/lodash/_cloneSet.js":
/***/ function(module, exports, __webpack_require__) {

	function cloneSet(r,e,t){var a=e?t(setToArray(r),!0):setToArray(r);return arrayReduce(a,addSetEntry,new r.constructor)}var addSetEntry=__webpack_require__("./node_modules/lodash/_addSetEntry.js"),arrayReduce=__webpack_require__("./node_modules/lodash/_arrayReduce.js"),setToArray=__webpack_require__("./node_modules/lodash/_setToArray.js");module.exports=cloneSet;

/***/ },

/***/ "./node_modules/lodash/_addSetEntry.js":
/***/ function(module, exports) {

	function addSetEntry(d,t){return d.add(t),d}module.exports=addSetEntry;

/***/ },

/***/ "./node_modules/lodash/_setToArray.js":
/***/ function(module, exports) {

	function setToArray(r){var o=-1,e=Array(r.size);return r.forEach(function(r){e[++o]=r}),e}module.exports=setToArray;

/***/ },

/***/ "./node_modules/lodash/_cloneSymbol.js":
/***/ function(module, exports, __webpack_require__) {

	function cloneSymbol(o){return symbolValueOf?Object(symbolValueOf.call(o)):{}}var Symbol=__webpack_require__("./node_modules/lodash/_Symbol.js"),symbolProto=Symbol?Symbol.prototype:void 0,symbolValueOf=symbolProto?symbolProto.valueOf:void 0;module.exports=cloneSymbol;

/***/ },

/***/ "./node_modules/lodash/_Symbol.js":
/***/ function(module, exports, __webpack_require__) {

	var root=__webpack_require__("./node_modules/lodash/_root.js"),Symbol=root.Symbol;module.exports=Symbol;

/***/ },

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/***/ function(module, exports, __webpack_require__) {

	function cloneTypedArray(r,e){var f=e?cloneArrayBuffer(r.buffer):r.buffer;return new r.constructor(f,r.byteOffset,r.length)}var cloneArrayBuffer=__webpack_require__("./node_modules/lodash/_cloneArrayBuffer.js");module.exports=cloneTypedArray;

/***/ },

/***/ "./node_modules/lodash/_initCloneObject.js":
/***/ function(module, exports, __webpack_require__) {

	function initCloneObject(e){return"function"!=typeof e.constructor||isPrototype(e)?{}:baseCreate(getPrototype(e))}var baseCreate=__webpack_require__("./node_modules/lodash/_baseCreate.js"),getPrototype=__webpack_require__("./node_modules/lodash/_getPrototype.js"),isPrototype=__webpack_require__("./node_modules/lodash/_isPrototype.js");module.exports=initCloneObject;

/***/ },

/***/ "./node_modules/lodash/_baseCreate.js":
/***/ function(module, exports, __webpack_require__) {

	function baseCreate(e){return isObject(e)?objectCreate(e):{}}var isObject=__webpack_require__("./node_modules/lodash/isObject.js"),objectCreate=Object.create;module.exports=baseCreate;

/***/ },

/***/ "./node_modules/lodash/isBuffer.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root=__webpack_require__("./node_modules/lodash/_root.js"),stubFalse=__webpack_require__("./node_modules/lodash/stubFalse.js"),freeExports="object"==typeof exports&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&"object"==typeof module&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,Buffer=moduleExports?root.Buffer:void 0,nativeIsBuffer=Buffer?Buffer.isBuffer:void 0,isBuffer=nativeIsBuffer||stubFalse;module.exports=isBuffer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ },

/***/ "./node_modules/lodash/stubFalse.js":
/***/ function(module, exports) {

	function stubFalse(){return!1}module.exports=stubFalse;

/***/ },

/***/ "./node_modules/lodash/each.js":
/***/ function(module, exports, __webpack_require__) {

	module.exports=__webpack_require__("./node_modules/lodash/forEach.js");

/***/ },

/***/ "./node_modules/lodash/forEach.js":
/***/ function(module, exports, __webpack_require__) {

	function forEach(r,a){var e=isArray(r)?arrayEach:baseEach;return e(r,baseIteratee(a,3))}var arrayEach=__webpack_require__("./node_modules/lodash/_arrayEach.js"),baseEach=__webpack_require__("./node_modules/lodash/_baseEach.js"),baseIteratee=__webpack_require__("./node_modules/lodash/_baseIteratee.js"),isArray=__webpack_require__("./node_modules/lodash/isArray.js");module.exports=forEach;

/***/ },

/***/ "./node_modules/lodash/_baseEach.js":
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn=__webpack_require__("./node_modules/lodash/_baseForOwn.js"),createBaseEach=__webpack_require__("./node_modules/lodash/_createBaseEach.js"),baseEach=createBaseEach(baseForOwn);module.exports=baseEach;

/***/ },

/***/ "./node_modules/lodash/_baseForOwn.js":
/***/ function(module, exports, __webpack_require__) {

	function baseForOwn(e,r){return e&&baseFor(e,r,keys)}var baseFor=__webpack_require__("./node_modules/lodash/_baseFor.js"),keys=__webpack_require__("./node_modules/lodash/keys.js");module.exports=baseForOwn;

/***/ },

/***/ "./node_modules/lodash/_baseFor.js":
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor=__webpack_require__("./node_modules/lodash/_createBaseFor.js"),baseFor=createBaseFor();module.exports=baseFor;

/***/ },

/***/ "./node_modules/lodash/_createBaseFor.js":
/***/ function(module, exports) {

	function createBaseFor(e){return function(r,t,a){for(var n=-1,o=Object(r),c=a(r),u=c.length;u--;){var f=c[e?u:++n];if(t(o[f],f,o)===!1)break}return r}}module.exports=createBaseFor;

/***/ },

/***/ "./node_modules/lodash/_createBaseEach.js":
/***/ function(module, exports, __webpack_require__) {

	function createBaseEach(r,e){return function(a,i){if(null==a)return a;if(!isArrayLike(a))return r(a,i);for(var t=a.length,n=e?t:-1,u=Object(a);(e?n--:++n<t)&&i(u[n],n,u)!==!1;);return a}}var isArrayLike=__webpack_require__("./node_modules/lodash/isArrayLike.js");module.exports=createBaseEach;

/***/ },

/***/ "./node_modules/lodash/_baseIteratee.js":
/***/ function(module, exports, __webpack_require__) {

	function baseIteratee(e){return"function"==typeof e?e:null==e?identity:"object"==typeof e?isArray(e)?baseMatchesProperty(e[0],e[1]):baseMatches(e):property(e)}var baseMatches=__webpack_require__("./node_modules/lodash/_baseMatches.js"),baseMatchesProperty=__webpack_require__("./node_modules/lodash/_baseMatchesProperty.js"),identity=__webpack_require__("./node_modules/lodash/identity.js"),isArray=__webpack_require__("./node_modules/lodash/isArray.js"),property=__webpack_require__("./node_modules/lodash/property.js");module.exports=baseIteratee;

/***/ },

/***/ "./node_modules/lodash/_baseMatches.js":
/***/ function(module, exports, __webpack_require__) {

	function baseMatches(a){var t=getMatchData(a);return 1==t.length&&t[0][2]?matchesStrictComparable(t[0][0],t[0][1]):function(e){return e===a||baseIsMatch(e,a,t)}}var baseIsMatch=__webpack_require__("./node_modules/lodash/_baseIsMatch.js"),getMatchData=__webpack_require__("./node_modules/lodash/_getMatchData.js"),matchesStrictComparable=__webpack_require__("./node_modules/lodash/_matchesStrictComparable.js");module.exports=baseMatches;

/***/ },

/***/ "./node_modules/lodash/_baseIsMatch.js":
/***/ function(module, exports, __webpack_require__) {

	function baseIsMatch(r,e,a,t){var i=a.length,u=i,n=!t;if(null==r)return!u;for(r=Object(r);i--;){var s=a[i];if(n&&s[2]?s[1]!==r[s[0]]:!(s[0]in r))return!1}for(;++i<u;){s=a[i];var A=s[0],E=r[A],R=s[1];if(n&&s[2]){if(void 0===E&&!(A in r))return!1}else{var _=new Stack;if(t)var f=t(E,R,A,r,e,_);if(!(void 0===f?baseIsEqual(R,E,t,UNORDERED_COMPARE_FLAG|PARTIAL_COMPARE_FLAG,_):f))return!1}}return!0}var Stack=__webpack_require__("./node_modules/lodash/_Stack.js"),baseIsEqual=__webpack_require__("./node_modules/lodash/_baseIsEqual.js"),UNORDERED_COMPARE_FLAG=1,PARTIAL_COMPARE_FLAG=2;module.exports=baseIsMatch;

/***/ },

/***/ "./node_modules/lodash/_baseIsEqual.js":
/***/ function(module, exports, __webpack_require__) {

	function baseIsEqual(e,s,u,a,i){return e===s||(null==e||null==s||!isObject(e)&&!isObjectLike(s)?e!==e&&s!==s:baseIsEqualDeep(e,s,baseIsEqual,u,a,i))}var baseIsEqualDeep=__webpack_require__("./node_modules/lodash/_baseIsEqualDeep.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),isObjectLike=__webpack_require__("./node_modules/lodash/isObjectLike.js");module.exports=baseIsEqual;

/***/ },

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/***/ function(module, exports, __webpack_require__) {

	function baseIsEqualDeep(a,r,e,t,g,s){var u=isArray(a),y=isArray(r),c=arrayTag,o=arrayTag;u||(c=getTag(a),c=c==argsTag?objectTag:c),y||(o=getTag(r),o=o==argsTag?objectTag:o);var T=c==objectTag,A=o==objectTag,i=c==o;if(i&&!T)return s||(s=new Stack),u||isTypedArray(a)?equalArrays(a,r,e,t,g,s):equalByTag(a,r,c,e,t,g,s);if(!(g&PARTIAL_COMPARE_FLAG)){var l=T&&hasOwnProperty.call(a,"__wrapped__"),q=A&&hasOwnProperty.call(r,"__wrapped__");if(l||q){var b=l?a.value():a,_=q?r.value():r;return s||(s=new Stack),e(b,_,t,g,s)}}return!!i&&(s||(s=new Stack),equalObjects(a,r,e,t,g,s))}var Stack=__webpack_require__("./node_modules/lodash/_Stack.js"),equalArrays=__webpack_require__("./node_modules/lodash/_equalArrays.js"),equalByTag=__webpack_require__("./node_modules/lodash/_equalByTag.js"),equalObjects=__webpack_require__("./node_modules/lodash/_equalObjects.js"),getTag=__webpack_require__("./node_modules/lodash/_getTag.js"),isArray=__webpack_require__("./node_modules/lodash/isArray.js"),isTypedArray=__webpack_require__("./node_modules/lodash/isTypedArray.js"),PARTIAL_COMPARE_FLAG=2,argsTag="[object Arguments]",arrayTag="[object Array]",objectTag="[object Object]",objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=baseIsEqualDeep;

/***/ },

/***/ "./node_modules/lodash/_equalArrays.js":
/***/ function(module, exports, __webpack_require__) {

	function equalArrays(e,r,a,t,i,u){var A=i&PARTIAL_COMPARE_FLAG,n=e.length,c=r.length;if(n!=c&&!(A&&c>n))return!1;var f=u.get(e);if(f&&u.get(r))return f==r;var o=-1,_=!0,s=i&UNORDERED_COMPARE_FLAG?new SetCache:void 0;for(u.set(e,r),u.set(r,e);++o<n;){var R=e[o],h=r[o];if(t)var l=A?t(h,R,o,r,e,u):t(R,h,o,e,r,u);if(void 0!==l){if(l)continue;_=!1;break}if(s){if(!arraySome(r,function(e,r){if(!cacheHas(s,r)&&(R===e||a(R,e,t,i,u)))return s.push(r)})){_=!1;break}}else if(R!==h&&!a(R,h,t,i,u)){_=!1;break}}return u["delete"](e),u["delete"](r),_}var SetCache=__webpack_require__("./node_modules/lodash/_SetCache.js"),arraySome=__webpack_require__("./node_modules/lodash/_arraySome.js"),cacheHas=__webpack_require__("./node_modules/lodash/_cacheHas.js"),UNORDERED_COMPARE_FLAG=1,PARTIAL_COMPARE_FLAG=2;module.exports=equalArrays;

/***/ },

/***/ "./node_modules/lodash/_SetCache.js":
/***/ function(module, exports, __webpack_require__) {

	function SetCache(e){var a=-1,t=e?e.length:0;for(this.__data__=new MapCache;++a<t;)this.add(e[a])}var MapCache=__webpack_require__("./node_modules/lodash/_MapCache.js"),setCacheAdd=__webpack_require__("./node_modules/lodash/_setCacheAdd.js"),setCacheHas=__webpack_require__("./node_modules/lodash/_setCacheHas.js");SetCache.prototype.add=SetCache.prototype.push=setCacheAdd,SetCache.prototype.has=setCacheHas,module.exports=SetCache;

/***/ },

/***/ "./node_modules/lodash/_setCacheAdd.js":
/***/ function(module, exports) {

	function setCacheAdd(_){return this.__data__.set(_,HASH_UNDEFINED),this}var HASH_UNDEFINED="__lodash_hash_undefined__";module.exports=setCacheAdd;

/***/ },

/***/ "./node_modules/lodash/_setCacheHas.js":
/***/ function(module, exports) {

	function setCacheHas(a){return this.__data__.has(a)}module.exports=setCacheHas;

/***/ },

/***/ "./node_modules/lodash/_arraySome.js":
/***/ function(module, exports) {

	function arraySome(r,e){for(var o=-1,a=r?r.length:0;++o<a;)if(e(r[o],o,r))return!0;return!1}module.exports=arraySome;

/***/ },

/***/ "./node_modules/lodash/_cacheHas.js":
/***/ function(module, exports) {

	function cacheHas(a,c){return a.has(c)}module.exports=cacheHas;

/***/ },

/***/ "./node_modules/lodash/_equalByTag.js":
/***/ function(module, exports, __webpack_require__) {

	function equalByTag(e,r,a,t,o,s,y){switch(a){case dataViewTag:if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case arrayBufferTag:return!(e.byteLength!=r.byteLength||!t(new Uint8Array(e),new Uint8Array(r)));case boolTag:case dateTag:case numberTag:return eq(+e,+r);case errorTag:return e.name==r.name&&e.message==r.message;case regexpTag:case stringTag:return e==r+"";case mapTag:var b=mapToArray;case setTag:var g=s&PARTIAL_COMPARE_FLAG;if(b||(b=setToArray),e.size!=r.size&&!g)return!1;var u=y.get(e);if(u)return u==r;s|=UNORDERED_COMPARE_FLAG,y.set(e,r);var l=equalArrays(b(e),b(r),t,o,s,y);return y["delete"](e),l;case symbolTag:if(symbolValueOf)return symbolValueOf.call(e)==symbolValueOf.call(r)}return!1}var Symbol=__webpack_require__("./node_modules/lodash/_Symbol.js"),Uint8Array=__webpack_require__("./node_modules/lodash/_Uint8Array.js"),eq=__webpack_require__("./node_modules/lodash/eq.js"),equalArrays=__webpack_require__("./node_modules/lodash/_equalArrays.js"),mapToArray=__webpack_require__("./node_modules/lodash/_mapToArray.js"),setToArray=__webpack_require__("./node_modules/lodash/_setToArray.js"),UNORDERED_COMPARE_FLAG=1,PARTIAL_COMPARE_FLAG=2,boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",mapTag="[object Map]",numberTag="[object Number]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",symbolTag="[object Symbol]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",symbolProto=Symbol?Symbol.prototype:void 0,symbolValueOf=symbolProto?symbolProto.valueOf:void 0;module.exports=equalByTag;

/***/ },

/***/ "./node_modules/lodash/_equalObjects.js":
/***/ function(module, exports, __webpack_require__) {

	function equalObjects(r,t,e,o,n,c){var a=n&PARTIAL_COMPARE_FLAG,s=keys(r),i=s.length,u=keys(t),f=u.length;if(i!=f&&!a)return!1;for(var v=i;v--;){var y=s[v];if(!(a?y in t:hasOwnProperty.call(t,y)))return!1}var l=c.get(r);if(l&&c.get(t))return l==t;var P=!0;c.set(r,t),c.set(t,r);for(var p=a;++v<i;){y=s[v];var A=r[y],O=t[y];if(o)var b=a?o(O,A,y,t,r,c):o(A,O,y,r,t,c);if(!(void 0===b?A===O||e(A,O,o,n,c):b)){P=!1;break}p||(p="constructor"==y)}if(P&&!p){var h=r.constructor,j=t.constructor;h!=j&&"constructor"in r&&"constructor"in t&&!("function"==typeof h&&h instanceof h&&"function"==typeof j&&j instanceof j)&&(P=!1)}return c["delete"](r),c["delete"](t),P}var keys=__webpack_require__("./node_modules/lodash/keys.js"),PARTIAL_COMPARE_FLAG=2,objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=equalObjects;

/***/ },

/***/ "./node_modules/lodash/isTypedArray.js":
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray=__webpack_require__("./node_modules/lodash/_baseIsTypedArray.js"),baseUnary=__webpack_require__("./node_modules/lodash/_baseUnary.js"),nodeUtil=__webpack_require__("./node_modules/lodash/_nodeUtil.js"),nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray,isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;module.exports=isTypedArray;

/***/ },

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/***/ function(module, exports, __webpack_require__) {

	function baseIsTypedArray(a){return isObjectLike(a)&&isLength(a.length)&&!!typedArrayTags[objectToString.call(a)]}var isLength=__webpack_require__("./node_modules/lodash/isLength.js"),isObjectLike=__webpack_require__("./node_modules/lodash/isObjectLike.js"),argsTag="[object Arguments]",arrayTag="[object Array]",boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",funcTag="[object Function]",mapTag="[object Map]",numberTag="[object Number]",objectTag="[object Object]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",weakMapTag="[object WeakMap]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=!0,typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=!1;var objectProto=Object.prototype,objectToString=objectProto.toString;module.exports=baseIsTypedArray;

/***/ },

/***/ "./node_modules/lodash/_getMatchData.js":
/***/ function(module, exports, __webpack_require__) {

	function getMatchData(r){for(var e=keys(r),t=e.length;t--;){var a=e[t],i=r[a];e[t]=[a,i,isStrictComparable(i)]}return e}var isStrictComparable=__webpack_require__("./node_modules/lodash/_isStrictComparable.js"),keys=__webpack_require__("./node_modules/lodash/keys.js");module.exports=getMatchData;

/***/ },

/***/ "./node_modules/lodash/_isStrictComparable.js":
/***/ function(module, exports, __webpack_require__) {

	function isStrictComparable(e){return e===e&&!isObject(e)}var isObject=__webpack_require__("./node_modules/lodash/isObject.js");module.exports=isStrictComparable;

/***/ },

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/***/ function(module, exports) {

	function matchesStrictComparable(t,e){return function(r){return null!=r&&(r[t]===e&&(void 0!==e||t in Object(r)))}}module.exports=matchesStrictComparable;

/***/ },

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/***/ function(module, exports, __webpack_require__) {

	function baseMatchesProperty(e,r){return isKey(e)&&isStrictComparable(r)?matchesStrictComparable(toKey(e),r):function(a){var t=get(a,e);return void 0===t&&t===r?hasIn(a,e):baseIsEqual(r,t,void 0,UNORDERED_COMPARE_FLAG|PARTIAL_COMPARE_FLAG)}}var baseIsEqual=__webpack_require__("./node_modules/lodash/_baseIsEqual.js"),get=__webpack_require__("./node_modules/lodash/get.js"),hasIn=__webpack_require__("./node_modules/lodash/hasIn.js"),isKey=__webpack_require__("./node_modules/lodash/_isKey.js"),isStrictComparable=__webpack_require__("./node_modules/lodash/_isStrictComparable.js"),matchesStrictComparable=__webpack_require__("./node_modules/lodash/_matchesStrictComparable.js"),toKey=__webpack_require__("./node_modules/lodash/_toKey.js"),UNORDERED_COMPARE_FLAG=1,PARTIAL_COMPARE_FLAG=2;module.exports=baseMatchesProperty;

/***/ },

/***/ "./node_modules/lodash/get.js":
/***/ function(module, exports, __webpack_require__) {

	function get(e,t,r){var a=null==e?void 0:baseGet(e,t);return void 0===a?r:a}var baseGet=__webpack_require__("./node_modules/lodash/_baseGet.js");module.exports=get;

/***/ },

/***/ "./node_modules/lodash/_baseGet.js":
/***/ function(module, exports, __webpack_require__) {

	function baseGet(e,t){t=isKey(t,e)?[t]:castPath(t);for(var r=0,a=t.length;null!=e&&r<a;)e=e[toKey(t[r++])];return r&&r==a?e:void 0}var castPath=__webpack_require__("./node_modules/lodash/_castPath.js"),isKey=__webpack_require__("./node_modules/lodash/_isKey.js"),toKey=__webpack_require__("./node_modules/lodash/_toKey.js");module.exports=baseGet;

/***/ },

/***/ "./node_modules/lodash/_castPath.js":
/***/ function(module, exports, __webpack_require__) {

	function castPath(r){return isArray(r)?r:stringToPath(r)}var isArray=__webpack_require__("./node_modules/lodash/isArray.js"),stringToPath=__webpack_require__("./node_modules/lodash/_stringToPath.js");module.exports=castPath;

/***/ },

/***/ "./node_modules/lodash/_stringToPath.js":
/***/ function(module, exports, __webpack_require__) {

	var memoizeCapped=__webpack_require__("./node_modules/lodash/_memoizeCapped.js"),toString=__webpack_require__("./node_modules/lodash/toString.js"),reLeadingDot=/^\./,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,reEscapeChar=/\\(\\)?/g,stringToPath=memoizeCapped(function(e){e=toString(e);var r=[];return reLeadingDot.test(e)&&r.push(""),e.replace(rePropName,function(e,t,a,o){r.push(a?o.replace(reEscapeChar,"$1"):t||e)}),r});module.exports=stringToPath;

/***/ },

/***/ "./node_modules/lodash/_memoizeCapped.js":
/***/ function(module, exports, __webpack_require__) {

	function memoizeCapped(e){var m=memoize(e,function(e){return r.size===MAX_MEMOIZE_SIZE&&r.clear(),e}),r=m.cache;return m}var memoize=__webpack_require__("./node_modules/lodash/memoize.js"),MAX_MEMOIZE_SIZE=500;module.exports=memoizeCapped;

/***/ },

/***/ "./node_modules/lodash/memoize.js":
/***/ function(module, exports, __webpack_require__) {

	function memoize(e,a){if("function"!=typeof e||a&&"function"!=typeof a)throw new TypeError(FUNC_ERROR_TEXT);var c=function(){var r=arguments,t=a?a.apply(this,r):r[0],n=c.cache;if(n.has(t))return n.get(t);var o=e.apply(this,r);return c.cache=n.set(t,o)||n,o};return c.cache=new(memoize.Cache||MapCache),c}var MapCache=__webpack_require__("./node_modules/lodash/_MapCache.js"),FUNC_ERROR_TEXT="Expected a function";memoize.Cache=MapCache,module.exports=memoize;

/***/ },

/***/ "./node_modules/lodash/toString.js":
/***/ function(module, exports, __webpack_require__) {

	function toString(r){return null==r?"":baseToString(r)}var baseToString=__webpack_require__("./node_modules/lodash/_baseToString.js");module.exports=toString;

/***/ },

/***/ "./node_modules/lodash/_baseToString.js":
/***/ function(module, exports, __webpack_require__) {

	function baseToString(o){if("string"==typeof o)return o;if(isSymbol(o))return symbolToString?symbolToString.call(o):"";var r=o+"";return"0"==r&&1/o==-INFINITY?"-0":r}var Symbol=__webpack_require__("./node_modules/lodash/_Symbol.js"),isSymbol=__webpack_require__("./node_modules/lodash/isSymbol.js"),INFINITY=1/0,symbolProto=Symbol?Symbol.prototype:void 0,symbolToString=symbolProto?symbolProto.toString:void 0;module.exports=baseToString;

/***/ },

/***/ "./node_modules/lodash/isSymbol.js":
/***/ function(module, exports, __webpack_require__) {

	function isSymbol(o){return"symbol"==typeof o||isObjectLike(o)&&objectToString.call(o)==symbolTag}var isObjectLike=__webpack_require__("./node_modules/lodash/isObjectLike.js"),symbolTag="[object Symbol]",objectProto=Object.prototype,objectToString=objectProto.toString;module.exports=isSymbol;

/***/ },

/***/ "./node_modules/lodash/_isKey.js":
/***/ function(module, exports, __webpack_require__) {

	function isKey(r,e){if(isArray(r))return!1;var s=typeof r;return!("number"!=s&&"symbol"!=s&&"boolean"!=s&&null!=r&&!isSymbol(r))||(reIsPlainProp.test(r)||!reIsDeepProp.test(r)||null!=e&&r in Object(e))}var isArray=__webpack_require__("./node_modules/lodash/isArray.js"),isSymbol=__webpack_require__("./node_modules/lodash/isSymbol.js"),reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/;module.exports=isKey;

/***/ },

/***/ "./node_modules/lodash/_toKey.js":
/***/ function(module, exports, __webpack_require__) {

	function toKey(r){if("string"==typeof r||isSymbol(r))return r;var e=r+"";return"0"==e&&1/r==-INFINITY?"-0":e}var isSymbol=__webpack_require__("./node_modules/lodash/isSymbol.js"),INFINITY=1/0;module.exports=toKey;

/***/ },

/***/ "./node_modules/lodash/hasIn.js":
/***/ function(module, exports, __webpack_require__) {

	function hasIn(a,s){return null!=a&&hasPath(a,s,baseHasIn)}var baseHasIn=__webpack_require__("./node_modules/lodash/_baseHasIn.js"),hasPath=__webpack_require__("./node_modules/lodash/_hasPath.js");module.exports=hasIn;

/***/ },

/***/ "./node_modules/lodash/_baseHasIn.js":
/***/ function(module, exports) {

	function baseHasIn(n,e){return null!=n&&e in Object(n)}module.exports=baseHasIn;

/***/ },

/***/ "./node_modules/lodash/_hasPath.js":
/***/ function(module, exports, __webpack_require__) {

	function hasPath(e,r,i){r=isKey(r,e)?[r]:castPath(r);for(var s=-1,t=r.length,a=!1;++s<t;){var n=toKey(r[s]);if(!(a=null!=e&&i(e,n)))break;e=e[n]}return a||++s!=t?a:(t=e?e.length:0,!!t&&isLength(t)&&isIndex(n,t)&&(isArray(e)||isArguments(e)))}var castPath=__webpack_require__("./node_modules/lodash/_castPath.js"),isArguments=__webpack_require__("./node_modules/lodash/isArguments.js"),isArray=__webpack_require__("./node_modules/lodash/isArray.js"),isIndex=__webpack_require__("./node_modules/lodash/_isIndex.js"),isKey=__webpack_require__("./node_modules/lodash/_isKey.js"),isLength=__webpack_require__("./node_modules/lodash/isLength.js"),toKey=__webpack_require__("./node_modules/lodash/_toKey.js");module.exports=hasPath;

/***/ },

/***/ "./node_modules/lodash/identity.js":
/***/ function(module, exports) {

	function identity(t){return t}module.exports=identity;

/***/ },

/***/ "./node_modules/lodash/property.js":
/***/ function(module, exports, __webpack_require__) {

	function property(e){return isKey(e)?baseProperty(toKey(e)):basePropertyDeep(e)}var baseProperty=__webpack_require__("./node_modules/lodash/_baseProperty.js"),basePropertyDeep=__webpack_require__("./node_modules/lodash/_basePropertyDeep.js"),isKey=__webpack_require__("./node_modules/lodash/_isKey.js"),toKey=__webpack_require__("./node_modules/lodash/_toKey.js");module.exports=property;

/***/ },

/***/ "./node_modules/lodash/_baseProperty.js":
/***/ function(module, exports) {

	function baseProperty(r){return function(e){return null==e?void 0:e[r]}}module.exports=baseProperty;

/***/ },

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/***/ function(module, exports, __webpack_require__) {

	function basePropertyDeep(e){return function(r){return baseGet(r,e)}}var baseGet=__webpack_require__("./node_modules/lodash/_baseGet.js");module.exports=basePropertyDeep;

/***/ },

/***/ "./node_modules/lodash/uniq.js":
/***/ function(module, exports, __webpack_require__) {

	function uniq(e){return e&&e.length?baseUniq(e):[]}var baseUniq=__webpack_require__("./node_modules/lodash/_baseUniq.js");module.exports=uniq;

/***/ },

/***/ "./node_modules/lodash/_baseUniq.js":
/***/ function(module, exports, __webpack_require__) {

	function baseUniq(e,r,a){var s=-1,t=arrayIncludes,u=e.length,c=!0,i=[],n=i;if(a)c=!1,t=arrayIncludesWith;else if(u>=LARGE_ARRAY_SIZE){var h=r?null:createSet(e);if(h)return setToArray(h);c=!1,t=cacheHas,n=new SetCache}else n=r?[]:i;e:for(;++s<u;){var l=e[s],_=r?r(l):l;if(l=a||0!==l?l:0,c&&_===_){for(var o=n.length;o--;)if(n[o]===_)continue e;r&&n.push(_),i.push(l)}else t(n,_,a)||(n!==i&&n.push(_),i.push(l))}return i}var SetCache=__webpack_require__("./node_modules/lodash/_SetCache.js"),arrayIncludes=__webpack_require__("./node_modules/lodash/_arrayIncludes.js"),arrayIncludesWith=__webpack_require__("./node_modules/lodash/_arrayIncludesWith.js"),cacheHas=__webpack_require__("./node_modules/lodash/_cacheHas.js"),createSet=__webpack_require__("./node_modules/lodash/_createSet.js"),setToArray=__webpack_require__("./node_modules/lodash/_setToArray.js"),LARGE_ARRAY_SIZE=200;module.exports=baseUniq;

/***/ },

/***/ "./node_modules/lodash/_arrayIncludes.js":
/***/ function(module, exports, __webpack_require__) {

	function arrayIncludes(e,r){var a=e?e.length:0;return!!a&&baseIndexOf(e,r,0)>-1}var baseIndexOf=__webpack_require__("./node_modules/lodash/_baseIndexOf.js");module.exports=arrayIncludes;

/***/ },

/***/ "./node_modules/lodash/_baseIndexOf.js":
/***/ function(module, exports, __webpack_require__) {

	function baseIndexOf(e,s,n){return s===s?strictIndexOf(e,s,n):baseFindIndex(e,baseIsNaN,n)}var baseFindIndex=__webpack_require__("./node_modules/lodash/_baseFindIndex.js"),baseIsNaN=__webpack_require__("./node_modules/lodash/_baseIsNaN.js"),strictIndexOf=__webpack_require__("./node_modules/lodash/_strictIndexOf.js");module.exports=baseIndexOf;

/***/ },

/***/ "./node_modules/lodash/_baseFindIndex.js":
/***/ function(module, exports) {

	function baseFindIndex(e,n,r,d){for(var t=e.length,i=r+(d?1:-1);d?i--:++i<t;)if(n(e[i],i,e))return i;return-1}module.exports=baseFindIndex;

/***/ },

/***/ "./node_modules/lodash/_baseIsNaN.js":
/***/ function(module, exports) {

	function baseIsNaN(e){return e!==e}module.exports=baseIsNaN;

/***/ },

/***/ "./node_modules/lodash/_strictIndexOf.js":
/***/ function(module, exports) {

	function strictIndexOf(r,t,e){for(var n=e-1,f=r.length;++n<f;)if(r[n]===t)return n;return-1}module.exports=strictIndexOf;

/***/ },

/***/ "./node_modules/lodash/_arrayIncludesWith.js":
/***/ function(module, exports) {

	function arrayIncludesWith(r,e,n){for(var t=-1,u=r?r.length:0;++t<u;)if(n(e,r[t]))return!0;return!1}module.exports=arrayIncludesWith;

/***/ },

/***/ "./node_modules/lodash/_createSet.js":
/***/ function(module, exports, __webpack_require__) {

	var Set=__webpack_require__("./node_modules/lodash/_Set.js"),noop=__webpack_require__("./node_modules/lodash/noop.js"),setToArray=__webpack_require__("./node_modules/lodash/_setToArray.js"),INFINITY=1/0,createSet=Set&&1/setToArray(new Set([,-0]))[1]==INFINITY?function(e){return new Set(e)}:noop;module.exports=createSet;

/***/ },

/***/ "./node_modules/lodash/noop.js":
/***/ function(module, exports) {

	function noop(){}module.exports=noop;

/***/ },

/***/ "./node_modules/babel-types/lib/definitions/init.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";__webpack_require__("./node_modules/babel-types/lib/definitions/index.js"),__webpack_require__("./node_modules/babel-types/lib/definitions/core.js"),__webpack_require__("./node_modules/babel-types/lib/definitions/es2015.js"),__webpack_require__("./node_modules/babel-types/lib/definitions/flow.js"),__webpack_require__("./node_modules/babel-types/lib/definitions/jsx.js"),__webpack_require__("./node_modules/babel-types/lib/definitions/misc.js"),__webpack_require__("./node_modules/babel-types/lib/definitions/experimental.js");

/***/ },

/***/ "./node_modules/babel-types/lib/definitions/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r["default"]=e,r}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function getType(e){return Array.isArray(e)?"array":null===e?"null":void 0===e?"undefined":"undefined"==typeof e?"undefined":(0,_typeof3["default"])(e)}function assertEach(e){function r(r,t,i){if(Array.isArray(i))for(var a=0;a<i.length;a++)e(r,t+"["+a+"]",i[a])}return r.each=e,r}function assertOneOf(){function e(e,r,i){if(t.indexOf(i)<0)throw new TypeError("Property "+r+" expected value to be one of "+(0,_stringify2["default"])(t)+" but got "+(0,_stringify2["default"])(i))}for(var r=arguments.length,t=Array(r),i=0;i<r;i++)t[i]=arguments[i];return e.oneOf=t,e}function assertNodeType(){function e(e,r,a){for(var o=!1,n=i,s=Array.isArray(n),f=0,n=s?n:(0,_getIterator3["default"])(n);;){var u;if(s){if(f>=n.length)break;u=n[f++]}else{if(f=n.next(),f.done)break;u=f.value}var l=u;if(t.is(l,a)){o=!0;break}}if(!o)throw new TypeError("Property "+r+" of "+e.type+" expected node to be of a type "+(0,_stringify2["default"])(i)+" but instead got "+(0,_stringify2["default"])(a&&a.type))}for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return e.oneOfNodeTypes=i,e}function assertNodeOrValueType(){function e(e,r,a){for(var o=!1,n=i,s=Array.isArray(n),f=0,n=s?n:(0,_getIterator3["default"])(n);;){var u;if(s){if(f>=n.length)break;u=n[f++]}else{if(f=n.next(),f.done)break;u=f.value}var l=u;if(getType(a)===l||t.is(l,a)){o=!0;break}}if(!o)throw new TypeError("Property "+r+" of "+e.type+" expected node to be of a type "+(0,_stringify2["default"])(i)+" but instead got "+(0,_stringify2["default"])(a&&a.type))}for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return e.oneOfNodeOrValueTypes=i,e}function assertValueType(e){function r(r,t,i){var a=getType(i)===e;if(!a)throw new TypeError("Property "+t+" expected type of "+e+" but got "+getType(i))}return r.type=e,r}function chain(){function e(){for(var e=t,r=Array.isArray(e),i=0,e=r?e:(0,_getIterator3["default"])(e);;){var a;if(r){if(i>=e.length)break;a=e[i++]}else{if(i=e.next(),i.done)break;a=i.value}var o=a;o.apply(void 0,arguments)}}for(var r=arguments.length,t=Array(r),i=0;i<r;i++)t[i]=arguments[i];return e.chainOf=t,e}function defineType(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],t=r.inherits&&store[r.inherits]||{};r.fields=r.fields||t.fields||{},r.visitor=r.visitor||t.visitor||[],r.aliases=r.aliases||t.aliases||[],r.builder=r.builder||t.builder||r.visitor||[],r.deprecatedAlias&&(DEPRECATED_KEYS[r.deprecatedAlias]=e);for(var i=r.visitor.concat(r.builder),a=Array.isArray(i),o=0,i=a?i:(0,_getIterator3["default"])(i);;){var n;if(a){if(o>=i.length)break;n=i[o++]}else{if(o=i.next(),o.done)break;n=o.value}var s=n;r.fields[s]=r.fields[s]||{}}for(var f in r.fields){var u=r.fields[f];r.builder.indexOf(f)===-1&&(u.optional=!0),void 0===u["default"]?u["default"]=null:u.validate||(u.validate=assertValueType(getType(u["default"])))}VISITOR_KEYS[e]=r.visitor,BUILDER_KEYS[e]=r.builder,NODE_FIELDS[e]=r.fields,ALIAS_KEYS[e]=r.aliases,store[e]=r}exports.__esModule=!0,exports.DEPRECATED_KEYS=exports.BUILDER_KEYS=exports.NODE_FIELDS=exports.ALIAS_KEYS=exports.VISITOR_KEYS=void 0;var _getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2),_stringify=__webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js"),_stringify2=_interopRequireDefault(_stringify),_typeof2=__webpack_require__("./node_modules/babel-runtime/helpers/typeof.js"),_typeof3=_interopRequireDefault(_typeof2);exports.assertEach=assertEach,exports.assertOneOf=assertOneOf,exports.assertNodeType=assertNodeType,exports.assertNodeOrValueType=assertNodeOrValueType,exports.assertValueType=assertValueType,exports.chain=chain,exports["default"]=defineType;var _index=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_index),VISITOR_KEYS=exports.VISITOR_KEYS={},ALIAS_KEYS=exports.ALIAS_KEYS={},NODE_FIELDS=exports.NODE_FIELDS={},BUILDER_KEYS=exports.BUILDER_KEYS={},DEPRECATED_KEYS=exports.DEPRECATED_KEYS={},store={};

/***/ },

/***/ "./node_modules/babel-types/lib/definitions/core.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t]);return a["default"]=e,a}var _index=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_index),_constants=__webpack_require__("./node_modules/babel-types/lib/constants.js"),_index2=__webpack_require__("./node_modules/babel-types/lib/definitions/index.js"),_index3=_interopRequireDefault(_index2);(0,_index3["default"])("ArrayExpression",{fields:{elements:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeOrValueType)("null","Expression","SpreadElement"))),"default":[]}},visitor:["elements"],aliases:["Expression"]}),(0,_index3["default"])("AssignmentExpression",{fields:{operator:{validate:(0,_index2.assertValueType)("string")},left:{validate:(0,_index2.assertNodeType)("LVal")},right:{validate:(0,_index2.assertNodeType)("Expression")}},builder:["operator","left","right"],visitor:["left","right"],aliases:["Expression"]}),(0,_index3["default"])("BinaryExpression",{builder:["operator","left","right"],fields:{operator:{validate:_index2.assertOneOf.apply(void 0,_constants.BINARY_OPERATORS)},left:{validate:(0,_index2.assertNodeType)("Expression")},right:{validate:(0,_index2.assertNodeType)("Expression")}},visitor:["left","right"],aliases:["Binary","Expression"]}),(0,_index3["default"])("Directive",{visitor:["value"],fields:{value:{validate:(0,_index2.assertNodeType)("DirectiveLiteral")}}}),(0,_index3["default"])("DirectiveLiteral",{builder:["value"],fields:{value:{validate:(0,_index2.assertValueType)("string")}}}),(0,_index3["default"])("BlockStatement",{builder:["body","directives"],visitor:["directives","body"],fields:{directives:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Directive"))),"default":[]},body:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Statement")))}},aliases:["Scopable","BlockParent","Block","Statement"]}),(0,_index3["default"])("BreakStatement",{visitor:["label"],fields:{label:{validate:(0,_index2.assertNodeType)("Identifier"),optional:!0}},aliases:["Statement","Terminatorless","CompletionStatement"]}),(0,_index3["default"])("CallExpression",{visitor:["callee","arguments"],fields:{callee:{validate:(0,_index2.assertNodeType)("Expression")},arguments:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Expression","SpreadElement")))}},aliases:["Expression"]}),(0,_index3["default"])("CatchClause",{visitor:["param","body"],fields:{param:{validate:(0,_index2.assertNodeType)("Identifier")},body:{validate:(0,_index2.assertNodeType)("BlockStatement")}},aliases:["Scopable"]}),(0,_index3["default"])("ConditionalExpression",{visitor:["test","consequent","alternate"],fields:{test:{validate:(0,_index2.assertNodeType)("Expression")},consequent:{validate:(0,_index2.assertNodeType)("Expression")},alternate:{validate:(0,_index2.assertNodeType)("Expression")}},aliases:["Expression","Conditional"]}),(0,_index3["default"])("ContinueStatement",{visitor:["label"],fields:{label:{validate:(0,_index2.assertNodeType)("Identifier"),optional:!0}},aliases:["Statement","Terminatorless","CompletionStatement"]}),(0,_index3["default"])("DebuggerStatement",{aliases:["Statement"]}),(0,_index3["default"])("DoWhileStatement",{visitor:["test","body"],fields:{test:{validate:(0,_index2.assertNodeType)("Expression")},body:{validate:(0,_index2.assertNodeType)("Statement")}},aliases:["Statement","BlockParent","Loop","While","Scopable"]}),(0,_index3["default"])("EmptyStatement",{aliases:["Statement"]}),(0,_index3["default"])("ExpressionStatement",{visitor:["expression"],fields:{expression:{validate:(0,_index2.assertNodeType)("Expression")}},aliases:["Statement","ExpressionWrapper"]}),(0,_index3["default"])("File",{builder:["program","comments","tokens"],visitor:["program"],fields:{program:{validate:(0,_index2.assertNodeType)("Program")}}}),(0,_index3["default"])("ForInStatement",{visitor:["left","right","body"],aliases:["Scopable","Statement","For","BlockParent","Loop","ForXStatement"],fields:{left:{validate:(0,_index2.assertNodeType)("VariableDeclaration","LVal")},right:{validate:(0,_index2.assertNodeType)("Expression")},body:{validate:(0,_index2.assertNodeType)("Statement")}}}),(0,_index3["default"])("ForStatement",{visitor:["init","test","update","body"],aliases:["Scopable","Statement","For","BlockParent","Loop"],fields:{init:{validate:(0,_index2.assertNodeType)("VariableDeclaration","Expression"),optional:!0},test:{validate:(0,_index2.assertNodeType)("Expression"),optional:!0},update:{validate:(0,_index2.assertNodeType)("Expression"),optional:!0},body:{validate:(0,_index2.assertNodeType)("Statement")}}}),(0,_index3["default"])("FunctionDeclaration",{builder:["id","params","body","generator","async"],visitor:["id","params","body","returnType","typeParameters"],fields:{id:{validate:(0,_index2.assertNodeType)("Identifier")},params:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("LVal")))},body:{validate:(0,_index2.assertNodeType)("BlockStatement")},generator:{"default":!1,validate:(0,_index2.assertValueType)("boolean")},async:{"default":!1,validate:(0,_index2.assertValueType)("boolean")}},aliases:["Scopable","Function","BlockParent","FunctionParent","Statement","Pureish","Declaration"]}),(0,_index3["default"])("FunctionExpression",{inherits:"FunctionDeclaration",aliases:["Scopable","Function","BlockParent","FunctionParent","Expression","Pureish"],fields:{id:{validate:(0,_index2.assertNodeType)("Identifier"),optional:!0},params:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("LVal")))},body:{validate:(0,_index2.assertNodeType)("BlockStatement")},generator:{"default":!1,validate:(0,_index2.assertValueType)("boolean")},async:{"default":!1,validate:(0,_index2.assertValueType)("boolean")}}}),(0,_index3["default"])("Identifier",{builder:["name"],visitor:["typeAnnotation"],aliases:["Expression","LVal"],fields:{name:{validate:function(e,a,i){!t.isValidIdentifier(i)}},decorators:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Decorator")))}}}),(0,_index3["default"])("IfStatement",{visitor:["test","consequent","alternate"],aliases:["Statement","Conditional"],fields:{test:{validate:(0,_index2.assertNodeType)("Expression")},consequent:{validate:(0,_index2.assertNodeType)("Statement")},alternate:{optional:!0,validate:(0,_index2.assertNodeType)("Statement")}}}),(0,_index3["default"])("LabeledStatement",{visitor:["label","body"],aliases:["Statement"],fields:{label:{validate:(0,_index2.assertNodeType)("Identifier")},body:{validate:(0,_index2.assertNodeType)("Statement")}}}),(0,_index3["default"])("StringLiteral",{builder:["value"],fields:{value:{validate:(0,_index2.assertValueType)("string")}},aliases:["Expression","Pureish","Literal","Immutable"]}),(0,_index3["default"])("NumericLiteral",{builder:["value"],deprecatedAlias:"NumberLiteral",fields:{value:{validate:(0,_index2.assertValueType)("number")}},aliases:["Expression","Pureish","Literal","Immutable"]}),(0,_index3["default"])("NullLiteral",{aliases:["Expression","Pureish","Literal","Immutable"]}),(0,_index3["default"])("BooleanLiteral",{builder:["value"],fields:{value:{validate:(0,_index2.assertValueType)("boolean")}},aliases:["Expression","Pureish","Literal","Immutable"]}),(0,_index3["default"])("RegExpLiteral",{builder:["pattern","flags"],deprecatedAlias:"RegexLiteral",aliases:["Expression","Literal"],fields:{pattern:{validate:(0,_index2.assertValueType)("string")},flags:{validate:(0,_index2.assertValueType)("string"),"default":""}}}),(0,_index3["default"])("LogicalExpression",{builder:["operator","left","right"],visitor:["left","right"],aliases:["Binary","Expression"],fields:{operator:{validate:_index2.assertOneOf.apply(void 0,_constants.LOGICAL_OPERATORS)},left:{validate:(0,_index2.assertNodeType)("Expression")},right:{validate:(0,_index2.assertNodeType)("Expression")}}}),(0,_index3["default"])("MemberExpression",{builder:["object","property","computed"],visitor:["object","property"],aliases:["Expression","LVal"],fields:{object:{validate:(0,_index2.assertNodeType)("Expression")},property:{validate:function(e,a,t){var i=e.computed?"Expression":"Identifier";(0,_index2.assertNodeType)(i)(e,a,t)}},computed:{"default":!1}}}),(0,_index3["default"])("NewExpression",{visitor:["callee","arguments"],aliases:["Expression"],fields:{callee:{validate:(0,_index2.assertNodeType)("Expression")},arguments:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Expression","SpreadElement")))}}}),(0,_index3["default"])("Program",{visitor:["directives","body"],builder:["body","directives"],fields:{directives:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Directive"))),"default":[]},body:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Statement")))}},aliases:["Scopable","BlockParent","Block","FunctionParent"]}),(0,_index3["default"])("ObjectExpression",{visitor:["properties"],aliases:["Expression"],fields:{properties:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("ObjectMethod","ObjectProperty","SpreadProperty")))}}}),(0,_index3["default"])("ObjectMethod",{builder:["kind","key","params","body","computed"],fields:{kind:{validate:(0,_index2.chain)((0,_index2.assertValueType)("string"),(0,_index2.assertOneOf)("method","get","set")),"default":"method"},computed:{validate:(0,_index2.assertValueType)("boolean"),"default":!1},key:{validate:function(e,a,t){var i=e.computed?["Expression"]:["Identifier","StringLiteral","NumericLiteral"];_index2.assertNodeType.apply(void 0,i)(e,a,t)}},decorators:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Decorator")))},body:{validate:(0,_index2.assertNodeType)("BlockStatement")},generator:{"default":!1,validate:(0,_index2.assertValueType)("boolean")},async:{"default":!1,validate:(0,_index2.assertValueType)("boolean")}},visitor:["key","params","body","decorators","returnType","typeParameters"],aliases:["UserWhitespacable","Function","Scopable","BlockParent","FunctionParent","Method","ObjectMember"]}),(0,_index3["default"])("ObjectProperty",{builder:["key","value","computed","shorthand","decorators"],fields:{computed:{validate:(0,_index2.assertValueType)("boolean"),"default":!1},key:{validate:function(e,a,t){var i=e.computed?["Expression"]:["Identifier","StringLiteral","NumericLiteral"];_index2.assertNodeType.apply(void 0,i)(e,a,t)}},value:{validate:(0,_index2.assertNodeType)("Expression")},shorthand:{validate:(0,_index2.assertValueType)("boolean"),"default":!1},decorators:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Decorator"))),optional:!0}},visitor:["key","value","decorators"],aliases:["UserWhitespacable","Property","ObjectMember"]}),(0,_index3["default"])("RestElement",{visitor:["argument","typeAnnotation"],aliases:["LVal"],fields:{argument:{validate:(0,_index2.assertNodeType)("LVal")},decorators:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Decorator")))}}}),(0,_index3["default"])("ReturnStatement",{visitor:["argument"],aliases:["Statement","Terminatorless","CompletionStatement"],fields:{argument:{validate:(0,_index2.assertNodeType)("Expression"),optional:!0}}}),(0,_index3["default"])("SequenceExpression",{visitor:["expressions"],fields:{expressions:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Expression")))}},aliases:["Expression"]}),(0,_index3["default"])("SwitchCase",{visitor:["test","consequent"],fields:{test:{validate:(0,_index2.assertNodeType)("Expression"),optional:!0},consequent:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("Statement")))}}}),(0,_index3["default"])("SwitchStatement",{visitor:["discriminant","cases"],aliases:["Statement","BlockParent","Scopable"],fields:{discriminant:{validate:(0,_index2.assertNodeType)("Expression")},cases:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("SwitchCase")))}}}),(0,_index3["default"])("ThisExpression",{aliases:["Expression"]}),(0,_index3["default"])("ThrowStatement",{visitor:["argument"],aliases:["Statement","Terminatorless","CompletionStatement"],fields:{argument:{validate:(0,_index2.assertNodeType)("Expression")}}}),(0,_index3["default"])("TryStatement",{visitor:["block","handler","finalizer"],aliases:["Statement"],fields:{body:{validate:(0,_index2.assertNodeType)("BlockStatement")},handler:{optional:!0,handler:(0,_index2.assertNodeType)("BlockStatement")},finalizer:{optional:!0,validate:(0,_index2.assertNodeType)("BlockStatement")}}}),(0,_index3["default"])("UnaryExpression",{builder:["operator","argument","prefix"],fields:{prefix:{"default":!0},argument:{validate:(0,_index2.assertNodeType)("Expression")},operator:{validate:_index2.assertOneOf.apply(void 0,_constants.UNARY_OPERATORS)}},visitor:["argument"],aliases:["UnaryLike","Expression"]}),(0,_index3["default"])("UpdateExpression",{builder:["operator","argument","prefix"],fields:{prefix:{"default":!1},argument:{validate:(0,_index2.assertNodeType)("Expression")},operator:{validate:_index2.assertOneOf.apply(void 0,_constants.UPDATE_OPERATORS)}},visitor:["argument"],aliases:["Expression"]}),(0,_index3["default"])("VariableDeclaration",{builder:["kind","declarations"],visitor:["declarations"],aliases:["Statement","Declaration"],fields:{kind:{validate:(0,_index2.chain)((0,_index2.assertValueType)("string"),(0,_index2.assertOneOf)("var","let","const"))},declarations:{validate:(0,_index2.chain)((0,_index2.assertValueType)("array"),(0,_index2.assertEach)((0,_index2.assertNodeType)("VariableDeclarator")))}}}),(0,_index3["default"])("VariableDeclarator",{visitor:["id","init"],fields:{id:{validate:(0,_index2.assertNodeType)("LVal")},init:{optional:!0,validate:(0,_index2.assertNodeType)("Expression")}}}),(0,_index3["default"])("WhileStatement",{visitor:["test","body"],aliases:["Statement","BlockParent","Loop","While","Scopable"],fields:{test:{validate:(0,_index2.assertNodeType)("Expression")},body:{validate:(0,_index2.assertNodeType)("BlockStatement","Statement")}}}),(0,_index3["default"])("WithStatement",{visitor:["object","body"],aliases:["Statement"],fields:{object:{object:(0,_index2.assertNodeType)("Expression")},body:{validate:(0,_index2.assertNodeType)("BlockStatement","Statement")}}});

/***/ },

/***/ "./node_modules/babel-types/lib/definitions/es2015.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _index=__webpack_require__("./node_modules/babel-types/lib/definitions/index.js"),_index2=_interopRequireDefault(_index);(0,_index2["default"])("AssignmentPattern",{visitor:["left","right"],aliases:["Pattern","LVal"],fields:{left:{validate:(0,_index.assertNodeType)("Identifier")},right:{validate:(0,_index.assertNodeType)("Expression")},decorators:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("Decorator")))}}}),(0,_index2["default"])("ArrayPattern",{visitor:["elements","typeAnnotation"],aliases:["Pattern","LVal"],fields:{elements:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("Expression")))},decorators:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("Decorator")))}}}),(0,_index2["default"])("ArrowFunctionExpression",{builder:["params","body","async"],visitor:["params","body","returnType"],aliases:["Scopable","Function","BlockParent","FunctionParent","Expression","Pureish"],fields:{params:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("LVal")))},body:{validate:(0,_index.assertNodeType)("BlockStatement","Expression")},async:{validate:(0,_index.assertValueType)("boolean"),"default":!1}}}),(0,_index2["default"])("ClassBody",{visitor:["body"],fields:{body:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("ClassMethod","ClassProperty")))}}}),(0,_index2["default"])("ClassDeclaration",{builder:["id","superClass","body","decorators"],visitor:["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],aliases:["Scopable","Class","Statement","Declaration","Pureish"],fields:{id:{validate:(0,_index.assertNodeType)("Identifier")},body:{validate:(0,_index.assertNodeType)("ClassBody")},superClass:{optional:!0,validate:(0,_index.assertNodeType)("Expression")},decorators:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("Decorator")))}}}),(0,_index2["default"])("ClassExpression",{inherits:"ClassDeclaration",aliases:["Scopable","Class","Expression","Pureish"],fields:{id:{optional:!0,validate:(0,_index.assertNodeType)("Identifier")},body:{validate:(0,_index.assertNodeType)("ClassBody")},superClass:{optional:!0,validate:(0,_index.assertNodeType)("Expression")},decorators:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("Decorator")))}}}),(0,_index2["default"])("ExportAllDeclaration",{visitor:["source"],aliases:["Statement","Declaration","ModuleDeclaration","ExportDeclaration"],fields:{source:{validate:(0,_index.assertNodeType)("StringLiteral")}}}),(0,_index2["default"])("ExportDefaultDeclaration",{visitor:["declaration"],aliases:["Statement","Declaration","ModuleDeclaration","ExportDeclaration"],fields:{declaration:{validate:(0,_index.assertNodeType)("FunctionDeclaration","ClassDeclaration","Expression")}}}),(0,_index2["default"])("ExportNamedDeclaration",{visitor:["declaration","specifiers","source"],aliases:["Statement","Declaration","ModuleDeclaration","ExportDeclaration"],fields:{declaration:{validate:(0,_index.assertNodeType)("Declaration"),optional:!0},specifiers:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("ExportSpecifier")))},source:{validate:(0,_index.assertNodeType)("StringLiteral"),optional:!0}}}),(0,_index2["default"])("ExportSpecifier",{visitor:["local","exported"],aliases:["ModuleSpecifier"],fields:{local:{validate:(0,_index.assertNodeType)("Identifier")},exported:{validate:(0,_index.assertNodeType)("Identifier")}}}),(0,_index2["default"])("ForOfStatement",{visitor:["left","right","body"],aliases:["Scopable","Statement","For","BlockParent","Loop","ForXStatement"],fields:{left:{validate:(0,_index.assertNodeType)("VariableDeclaration","LVal")},right:{validate:(0,_index.assertNodeType)("Expression")},body:{validate:(0,_index.assertNodeType)("Statement")}}}),(0,_index2["default"])("ImportDeclaration",{visitor:["specifiers","source"],aliases:["Statement","Declaration","ModuleDeclaration"],fields:{specifiers:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("ImportSpecifier","ImportDefaultSpecifier","ImportNamespaceSpecifier")))},source:{validate:(0,_index.assertNodeType)("StringLiteral")}}}),(0,_index2["default"])("ImportDefaultSpecifier",{visitor:["local"],aliases:["ModuleSpecifier"],fields:{local:{validate:(0,_index.assertNodeType)("Identifier")}}}),(0,_index2["default"])("ImportNamespaceSpecifier",{visitor:["local"],aliases:["ModuleSpecifier"],fields:{local:{validate:(0,_index.assertNodeType)("Identifier")}}}),(0,_index2["default"])("ImportSpecifier",{visitor:["local","imported"],aliases:["ModuleSpecifier"],fields:{local:{validate:(0,_index.assertNodeType)("Identifier")},imported:{validate:(0,_index.assertNodeType)("Identifier")}}}),(0,_index2["default"])("MetaProperty",{visitor:["meta","property"],aliases:["Expression"],fields:{meta:{validate:(0,_index.assertValueType)("string")},property:{validate:(0,_index.assertValueType)("string")}}}),(0,_index2["default"])("ClassMethod",{aliases:["Function","Scopable","BlockParent","FunctionParent","Method"],builder:["kind","key","params","body","computed","static"],visitor:["key","params","body","decorators","returnType","typeParameters"],fields:{kind:{validate:(0,_index.chain)((0,_index.assertValueType)("string"),(0,_index.assertOneOf)("get","set","method","constructor")),"default":"method"},computed:{"default":!1,validate:(0,_index.assertValueType)("boolean")},"static":{"default":!1,validate:(0,_index.assertValueType)("boolean")},key:{validate:function(e,a,i){var t=e.computed?["Expression"]:["Identifier","StringLiteral","NumericLiteral"];_index.assertNodeType.apply(void 0,t)(e,a,i)}},params:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("LVal")))},body:{validate:(0,_index.assertNodeType)("BlockStatement")},generator:{"default":!1,validate:(0,_index.assertValueType)("boolean")},async:{"default":!1,validate:(0,_index.assertValueType)("boolean")}}}),(0,_index2["default"])("ObjectPattern",{visitor:["properties","typeAnnotation"],aliases:["Pattern","LVal"],fields:{properties:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("RestProperty","Property")))},decorators:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("Decorator")))}}}),(0,_index2["default"])("SpreadElement",{visitor:["argument"],aliases:["UnaryLike"],fields:{argument:{validate:(0,_index.assertNodeType)("Expression")}}}),(0,_index2["default"])("Super",{aliases:["Expression"]}),(0,_index2["default"])("TaggedTemplateExpression",{visitor:["tag","quasi"],aliases:["Expression"],fields:{tag:{validate:(0,_index.assertNodeType)("Expression")},quasi:{validate:(0,_index.assertNodeType)("TemplateLiteral")}}}),(0,_index2["default"])("TemplateElement",{builder:["value","tail"],fields:{value:{},tail:{validate:(0,_index.assertValueType)("boolean"),"default":!1}}}),(0,_index2["default"])("TemplateLiteral",{visitor:["quasis","expressions"],aliases:["Expression","Literal"],fields:{quasis:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("TemplateElement")))},expressions:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("Expression")))}}}),(0,_index2["default"])("YieldExpression",{builder:["argument","delegate"],visitor:["argument"],aliases:["Expression","Terminatorless"],fields:{delegate:{validate:(0,_index.assertValueType)("boolean"),"default":!1},argument:{optional:!0,validate:(0,_index.assertNodeType)("Expression")}}});

/***/ },

/***/ "./node_modules/babel-types/lib/definitions/flow.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _index=__webpack_require__("./node_modules/babel-types/lib/definitions/index.js"),_index2=_interopRequireDefault(_index);(0,_index2["default"])("AnyTypeAnnotation",{aliases:["Flow","FlowBaseAnnotation"],fields:{}}),(0,_index2["default"])("ArrayTypeAnnotation",{visitor:["elementType"],aliases:["Flow"],fields:{}}),(0,_index2["default"])("BooleanTypeAnnotation",{aliases:["Flow","FlowBaseAnnotation"],fields:{}}),(0,_index2["default"])("BooleanLiteralTypeAnnotation",{aliases:["Flow"],fields:{}}),(0,_index2["default"])("NullLiteralTypeAnnotation",{aliases:["Flow","FlowBaseAnnotation"],fields:{}}),(0,_index2["default"])("ClassImplements",{visitor:["id","typeParameters"],aliases:["Flow"],fields:{}}),(0,_index2["default"])("ClassProperty",{visitor:["key","value","typeAnnotation","decorators"],aliases:["Flow","Property"],fields:{}}),(0,_index2["default"])("DeclareClass",{visitor:["id","typeParameters","extends","body"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{}}),(0,_index2["default"])("DeclareFunction",{visitor:["id"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{}}),(0,_index2["default"])("DeclareInterface",{visitor:["id","typeParameters","extends","body"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{}}),(0,_index2["default"])("DeclareModule",{visitor:["id","body"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{}}),(0,_index2["default"])("DeclareModuleExports",{visitor:["typeAnnotation"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{}}),(0,_index2["default"])("DeclareTypeAlias",{visitor:["id","typeParameters","right"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{}}),(0,_index2["default"])("DeclareVariable",{visitor:["id"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{}}),(0,_index2["default"])("ExistentialTypeParam",{aliases:["Flow"]}),(0,_index2["default"])("FunctionTypeAnnotation",{visitor:["typeParameters","params","rest","returnType"],aliases:["Flow"],fields:{}}),(0,_index2["default"])("FunctionTypeParam",{visitor:["name","typeAnnotation"],aliases:["Flow"],fields:{}}),(0,_index2["default"])("GenericTypeAnnotation",{visitor:["id","typeParameters"],aliases:["Flow"],fields:{}}),(0,_index2["default"])("InterfaceExtends",{visitor:["id","typeParameters"],aliases:["Flow"],fields:{}}),(0,_index2["default"])("InterfaceDeclaration",{visitor:["id","typeParameters","extends","body"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{}}),(0,_index2["default"])("IntersectionTypeAnnotation",{visitor:["types"],aliases:["Flow"],fields:{}}),(0,_index2["default"])("MixedTypeAnnotation",{aliases:["Flow","FlowBaseAnnotation"]}),(0,_index2["default"])("NullableTypeAnnotation",{visitor:["typeAnnotation"],aliases:["Flow"],fields:{}}),(0,_index2["default"])("NumericLiteralTypeAnnotation",{aliases:["Flow"],fields:{}}),(0,_index2["default"])("NumberTypeAnnotation",{aliases:["Flow","FlowBaseAnnotation"],fields:{}}),(0,_index2["default"])("StringLiteralTypeAnnotation",{aliases:["Flow"],fields:{}}),(0,_index2["default"])("StringTypeAnnotation",{aliases:["Flow","FlowBaseAnnotation"],fields:{}}),(0,_index2["default"])("ThisTypeAnnotation",{aliases:["Flow","FlowBaseAnnotation"],fields:{}}),(0,_index2["default"])("TupleTypeAnnotation",{visitor:["types"],aliases:["Flow"],fields:{}}),(0,_index2["default"])("TypeofTypeAnnotation",{visitor:["argument"],aliases:["Flow"],fields:{}}),(0,_index2["default"])("TypeAlias",{visitor:["id","typeParameters","right"],aliases:["Flow","FlowDeclaration","Statement","Declaration"],fields:{}}),(0,_index2["default"])("TypeAnnotation",{visitor:["typeAnnotation"],aliases:["Flow"],fields:{}}),(0,_index2["default"])("TypeCastExpression",{visitor:["expression","typeAnnotation"],aliases:["Flow","ExpressionWrapper","Expression"],fields:{}}),(0,_index2["default"])("TypeParameter",{visitor:["bound"],aliases:["Flow"],fields:{}}),(0,_index2["default"])("TypeParameterDeclaration",{visitor:["params"],aliases:["Flow"],fields:{}}),(0,_index2["default"])("TypeParameterInstantiation",{visitor:["params"],aliases:["Flow"],fields:{}}),(0,_index2["default"])("ObjectTypeAnnotation",{visitor:["properties","indexers","callProperties"],aliases:["Flow"],fields:{}}),(0,_index2["default"])("ObjectTypeCallProperty",{visitor:["value"],aliases:["Flow","UserWhitespacable"],fields:{}}),(0,_index2["default"])("ObjectTypeIndexer",{visitor:["id","key","value"],aliases:["Flow","UserWhitespacable"],fields:{}}),(0,_index2["default"])("ObjectTypeProperty",{visitor:["key","value"],aliases:["Flow","UserWhitespacable"],fields:{}}),(0,_index2["default"])("QualifiedTypeIdentifier",{visitor:["id","qualification"],aliases:["Flow"],fields:{}}),(0,_index2["default"])("UnionTypeAnnotation",{visitor:["types"],aliases:["Flow"],fields:{}}),(0,_index2["default"])("VoidTypeAnnotation",{aliases:["Flow","FlowBaseAnnotation"],fields:{}});

/***/ },

/***/ "./node_modules/babel-types/lib/definitions/jsx.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _index=__webpack_require__("./node_modules/babel-types/lib/definitions/index.js"),_index2=_interopRequireDefault(_index);(0,_index2["default"])("JSXAttribute",{visitor:["name","value"],aliases:["JSX","Immutable"],fields:{name:{validate:(0,_index.assertNodeType)("JSXIdentifier","JSXNamespacedName")},value:{optional:!0,validate:(0,_index.assertNodeType)("JSXElement","StringLiteral","JSXExpressionContainer")}}}),(0,_index2["default"])("JSXClosingElement",{visitor:["name"],aliases:["JSX","Immutable"],fields:{name:{validate:(0,_index.assertNodeType)("JSXIdentifier","JSXMemberExpression")}}}),(0,_index2["default"])("JSXElement",{builder:["openingElement","closingElement","children","selfClosing"],visitor:["openingElement","children","closingElement"],aliases:["JSX","Immutable","Expression"],fields:{openingElement:{validate:(0,_index.assertNodeType)("JSXOpeningElement")},closingElement:{optional:!0,validate:(0,_index.assertNodeType)("JSXClosingElement")},children:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("JSXText","JSXExpressionContainer","JSXElement")))}}}),(0,_index2["default"])("JSXEmptyExpression",{aliases:["JSX","Expression"]}),(0,_index2["default"])("JSXExpressionContainer",{visitor:["expression"],aliases:["JSX","Immutable"],fields:{expression:{validate:(0,_index.assertNodeType)("Expression")}}}),(0,_index2["default"])("JSXIdentifier",{builder:["name"],aliases:["JSX","Expression"],fields:{name:{validate:(0,_index.assertValueType)("string")}}}),(0,_index2["default"])("JSXMemberExpression",{visitor:["object","property"],aliases:["JSX","Expression"],fields:{object:{validate:(0,_index.assertNodeType)("JSXMemberExpression","JSXIdentifier")},property:{validate:(0,_index.assertNodeType)("JSXIdentifier")}}}),(0,_index2["default"])("JSXNamespacedName",{visitor:["namespace","name"],aliases:["JSX"],fields:{namespace:{validate:(0,_index.assertNodeType)("JSXIdentifier")},name:{validate:(0,_index.assertNodeType)("JSXIdentifier")}}}),(0,_index2["default"])("JSXOpeningElement",{builder:["name","attributes","selfClosing"],visitor:["name","attributes"],aliases:["JSX","Immutable"],fields:{name:{validate:(0,_index.assertNodeType)("JSXIdentifier","JSXMemberExpression")},selfClosing:{"default":!1,validate:(0,_index.assertValueType)("boolean")},attributes:{validate:(0,_index.chain)((0,_index.assertValueType)("array"),(0,_index.assertEach)((0,_index.assertNodeType)("JSXAttribute","JSXSpreadAttribute")))}}}),(0,_index2["default"])("JSXSpreadAttribute",{visitor:["argument"],aliases:["JSX"],fields:{argument:{validate:(0,_index.assertNodeType)("Expression")}}}),(0,_index2["default"])("JSXText",{aliases:["JSX","Immutable"],builder:["value"],fields:{value:{validate:(0,_index.assertValueType)("string")}}});

/***/ },

/***/ "./node_modules/babel-types/lib/definitions/misc.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _index=__webpack_require__("./node_modules/babel-types/lib/definitions/index.js"),_index2=_interopRequireDefault(_index);(0,_index2["default"])("Noop",{visitor:[]}),(0,_index2["default"])("ParenthesizedExpression",{visitor:["expression"],aliases:["Expression","ExpressionWrapper"],fields:{expression:{validate:(0,_index.assertNodeType)("Expression")}}});

/***/ },

/***/ "./node_modules/babel-types/lib/definitions/experimental.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _index=__webpack_require__("./node_modules/babel-types/lib/definitions/index.js"),_index2=_interopRequireDefault(_index);(0,_index2["default"])("AwaitExpression",{builder:["argument"],visitor:["argument"],aliases:["Expression","Terminatorless"],fields:{argument:{validate:(0,_index.assertNodeType)("Expression")}}}),(0,_index2["default"])("BindExpression",{visitor:["object","callee"],aliases:["Expression"],fields:{}}),(0,_index2["default"])("Decorator",{visitor:["expression"],fields:{expression:{validate:(0,_index.assertNodeType)("Expression")}}}),(0,_index2["default"])("DoExpression",{visitor:["body"],aliases:["Expression"],fields:{body:{validate:(0,_index.assertNodeType)("BlockStatement")}}}),(0,_index2["default"])("ExportDefaultSpecifier",{visitor:["exported"],aliases:["ModuleSpecifier"],fields:{exported:{validate:(0,_index.assertNodeType)("Identifier")}}}),(0,_index2["default"])("ExportNamespaceSpecifier",{visitor:["exported"],aliases:["ModuleSpecifier"],fields:{exported:{validate:(0,_index.assertNodeType)("Identifier")}}}),(0,_index2["default"])("RestProperty",{visitor:["argument"],aliases:["UnaryLike"],fields:{argument:{validate:(0,_index.assertNodeType)("LVal")}}}),(0,_index2["default"])("SpreadProperty",{visitor:["argument"],aliases:["UnaryLike"],fields:{argument:{validate:(0,_index.assertNodeType)("Expression")}}});

/***/ },

/***/ "./node_modules/babel-types/lib/react.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function isCompatTag(e){return!!e&&/^[a-z]|\-/.test(e)}function cleanJSXElementLiteralChild(e,r){for(var n=e.value.split(/\r\n|\n|\r/),i=0,o=0;o<n.length;o++)n[o].match(/[^ \t]/)&&(i=o);for(var a="",l=0;l<n.length;l++){var s=n[l],p=0===l,u=l===n.length-1,c=l===i,d=s.replace(/\t/g," ");p||(d=d.replace(/^[ ]+/,"")),u||(d=d.replace(/[ ]+$/,"")),d&&(c||(d+=" "),a+=d)}a&&r.push(t.stringLiteral(a))}function buildChildren(e){for(var r=[],n=0;n<e.children.length;n++){var i=e.children[n];t.isJSXText(i)?cleanJSXElementLiteralChild(i,r):(t.isJSXExpressionContainer(i)&&(i=i.expression),t.isJSXEmptyExpression(i)||r.push(i))}return r}exports.__esModule=!0,exports.isReactComponent=void 0,exports.isCompatTag=isCompatTag,exports.buildChildren=buildChildren;var _index=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_index),isReactComponent=exports.isReactComponent=t.buildMatchMemberExpression("React.Component");

/***/ },

/***/ "./node_modules/babel-traverse/lib/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r["default"]=e,r}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function traverse(e,r,t,a,i){if(e){if(r||(r={}),!r.noScope&&!t&&"Program"!==e.type&&"File"!==e.type)throw new Error(messages.get("traverseNeedsParent",e.type));visitors.explode(r),traverse.node(e,r,t,a,i)}}function hasBlacklistedType(e,r){e.node.type===r.type&&(r.has=!0,e.stop())}exports.__esModule=!0,exports.visitors=exports.Hub=exports.Scope=exports.NodePath=void 0;var _getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2),_path=__webpack_require__("./node_modules/babel-traverse/lib/path/index.js");Object.defineProperty(exports,"NodePath",{enumerable:!0,get:function(){return _interopRequireDefault(_path)["default"]}});var _scope=__webpack_require__("./node_modules/babel-traverse/lib/scope/index.js");Object.defineProperty(exports,"Scope",{enumerable:!0,get:function(){return _interopRequireDefault(_scope)["default"]}});var _hub=__webpack_require__("./node_modules/babel-traverse/lib/hub.js");Object.defineProperty(exports,"Hub",{enumerable:!0,get:function(){return _interopRequireDefault(_hub)["default"]}}),exports["default"]=traverse;var _context=__webpack_require__("./node_modules/babel-traverse/lib/context.js"),_context2=_interopRequireDefault(_context),_visitors=__webpack_require__("./node_modules/babel-traverse/lib/visitors.js"),visitors=_interopRequireWildcard(_visitors),_babelMessages=__webpack_require__("./node_modules/babel-messages/lib/index.js"),messages=_interopRequireWildcard(_babelMessages),_includes=__webpack_require__("./node_modules/lodash/includes.js"),_includes2=_interopRequireDefault(_includes),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes),_cache=__webpack_require__("./node_modules/babel-traverse/lib/cache.js"),cache=_interopRequireWildcard(_cache);exports.visitors=visitors,traverse.visitors=visitors,traverse.verify=visitors.verify,traverse.explode=visitors.explode,traverse.NodePath=__webpack_require__("./node_modules/babel-traverse/lib/path/index.js"),traverse.Scope=__webpack_require__("./node_modules/babel-traverse/lib/scope/index.js"),traverse.Hub=__webpack_require__("./node_modules/babel-traverse/lib/hub.js"),traverse.cheap=function(e,r){return t.traverseFast(e,r)},traverse.node=function(e,r,a,i,s,o){var u=t.VISITOR_KEYS[e.type];if(u)for(var n=new _context2["default"](a,r,i,s),c=u,p=Array.isArray(c),l=0,c=p?c:(0,_getIterator3["default"])(c);;){var v;if(p){if(l>=c.length)break;v=c[l++]}else{if(l=c.next(),l.done)break;v=l.value}var d=v;if((!o||!o[d])&&n.visit(e,d))return}},traverse.clearNode=function(e,r){t.removeProperties(e,r),cache.path["delete"](e)},traverse.removeProperties=function(e,r){return t.traverseFast(e,traverse.clearNode,r),e},traverse.hasType=function(e,r,t,a){if((0,_includes2["default"])(a,e.type))return!1;if(e.type===t)return!0;var i={has:!1,type:t};return traverse(e,{blacklist:a,enter:hasBlacklistedType},r,i),i.has},traverse.clearCache=function(){cache.clear()},traverse.copyCache=function(e,r){cache.path.has(e)&&cache.path.set(r,cache.path.get(e))};

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}exports.__esModule=!0;var _getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2),_classCallCheck2=__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_virtualTypes=__webpack_require__("./node_modules/babel-traverse/lib/path/lib/virtual-types.js"),virtualTypes=_interopRequireWildcard(_virtualTypes),_debug2=__webpack_require__("./node_modules/debug/browser.js"),_debug3=_interopRequireDefault(_debug2),_invariant=__webpack_require__("./node_modules/invariant/browser.js"),_invariant2=_interopRequireDefault(_invariant),_index=__webpack_require__("./node_modules/babel-traverse/lib/index.js"),_index2=_interopRequireDefault(_index),_assign=__webpack_require__("./node_modules/lodash/assign.js"),_assign2=_interopRequireDefault(_assign),_scope=__webpack_require__("./node_modules/babel-traverse/lib/scope/index.js"),_scope2=_interopRequireDefault(_scope),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes),_cache=__webpack_require__("./node_modules/babel-traverse/lib/cache.js"),_debug=(0,_debug3["default"])("babel"),NodePath=function(){function e(t,r){(0,_classCallCheck3["default"])(this,e),this.parent=r,this.hub=t,this.contexts=[],this.data={},this.shouldSkip=!1,this.shouldStop=!1,this.removed=!1,this.state=null,this.opts=null,this.skipKeys=null,this.parentPath=null,this.context=null,this.container=null,this.listKey=null,this.inList=!1,this.parentKey=null,this.key=null,this.node=null,this.scope=null,this.type=null,this.typeAnnotation=null}return e.get=function(t){var r=t.hub,i=t.parentPath,a=t.parent,o=t.container,n=t.listKey,s=t.key;!r&&i&&(r=i.hub),(0,_invariant2["default"])(a,"To get a node path the parent needs to exist");var u=o[s],l=_cache.path.get(a)||[];_cache.path.has(a)||_cache.path.set(a,l);for(var p=void 0,h=0;h<l.length;h++){var d=l[h];if(d.node===u){p=d;break}}return p||(p=new e(r,a),l.push(p)),p.setup(i,o,n,s),p},e.prototype.getScope=function(e){var t=e;return this.isScope()&&(t=new _scope2["default"](this,e)),t},e.prototype.setData=function(e,t){return this.data[e]=t},e.prototype.getData=function(e,t){var r=this.data[e];return!r&&t&&(r=this.data[e]=t),r},e.prototype.buildCodeFrameError=function(e){var t=arguments.length<=1||void 0===arguments[1]?SyntaxError:arguments[1];return this.hub.file.buildCodeFrameError(this.node,e,t)},e.prototype.traverse=function(e,t){(0,_index2["default"])(this.node,e,this.scope,t,this)},e.prototype.mark=function(e,t){this.hub.file.metadata.marked.push({type:e,message:t,loc:this.node.loc})},e.prototype.set=function(e,r){t.validate(this.node,e,r),this.node[e]=r},e.prototype.getPathLocation=function(){var e=[],t=this;do{var r=t.key;t.inList&&(r=t.listKey+"["+r+"]"),e.unshift(r)}while(t=t.parentPath);return e.join(".")},e.prototype.debug=function(e){_debug.enabled&&_debug(this.getPathLocation()+" "+this.type+": "+e())},e}();exports["default"]=NodePath,(0,_assign2["default"])(NodePath.prototype,__webpack_require__("./node_modules/babel-traverse/lib/path/ancestry.js")),(0,_assign2["default"])(NodePath.prototype,__webpack_require__("./node_modules/babel-traverse/lib/path/inference/index.js")),(0,_assign2["default"])(NodePath.prototype,__webpack_require__("./node_modules/babel-traverse/lib/path/replacement.js")),(0,_assign2["default"])(NodePath.prototype,__webpack_require__("./node_modules/babel-traverse/lib/path/evaluation.js")),(0,_assign2["default"])(NodePath.prototype,__webpack_require__("./node_modules/babel-traverse/lib/path/conversion.js")),(0,_assign2["default"])(NodePath.prototype,__webpack_require__("./node_modules/babel-traverse/lib/path/introspection.js")),(0,_assign2["default"])(NodePath.prototype,__webpack_require__("./node_modules/babel-traverse/lib/path/context.js")),(0,_assign2["default"])(NodePath.prototype,__webpack_require__("./node_modules/babel-traverse/lib/path/removal.js")),(0,_assign2["default"])(NodePath.prototype,__webpack_require__("./node_modules/babel-traverse/lib/path/modification.js")),(0,_assign2["default"])(NodePath.prototype,__webpack_require__("./node_modules/babel-traverse/lib/path/family.js")),(0,_assign2["default"])(NodePath.prototype,__webpack_require__("./node_modules/babel-traverse/lib/path/comments.js"));for(var _loop2=function(){if(_isArray){if(_i>=_iterator.length)return"break";_ref2=_iterator[_i++]}else{if(_i=_iterator.next(),_i.done)return"break";_ref2=_i.value}var e=_ref2,r="is"+e;NodePath.prototype[r]=function(e){return t[r](this.node,e)},NodePath.prototype["assert"+e]=function(t){if(!this[r](t))throw new TypeError("Expected node path of type "+e)}},_iterator=t.TYPES,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:(0,_getIterator3["default"])(_iterator);;){var _ref2,_ret2=_loop2();if("break"===_ret2)break}var _loop=function(e){if("_"===e[0])return"continue";t.TYPES.indexOf(e)<0&&t.TYPES.push(e);var r=virtualTypes[e];NodePath.prototype["is"+e]=function(e){return r.checkPath(this,e)}};for(var type in virtualTypes){var _ret=_loop(type)}module.exports=exports["default"];

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/lib/virtual-types.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}exports.__esModule=!0,exports.Flow=exports.Pure=exports.Generated=exports.User=exports.Var=exports.BlockScoped=exports.Referenced=exports.Scope=exports.Expression=exports.Statement=exports.BindingIdentifier=exports.ReferencedMemberExpression=exports.ReferencedIdentifier=void 0;var _babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes),ReferencedIdentifier=exports.ReferencedIdentifier={types:["Identifier","JSXIdentifier"],checkPath:function(e,r){var n=e.node,i=e.parent;if(!t.isIdentifier(n,r)){if(!t.isJSXIdentifier(n,r))return!1;if(_babelTypes.react.isCompatTag(n.name))return!1}return t.isReferenced(n,i)}},ReferencedMemberExpression=exports.ReferencedMemberExpression={types:["MemberExpression"],checkPath:function(e){var r=e.node,n=e.parent;return t.isMemberExpression(r)&&t.isReferenced(r,n)}},BindingIdentifier=exports.BindingIdentifier={types:["Identifier"],checkPath:function(e){var r=e.node,n=e.parent;return t.isIdentifier(r)&&t.isBinding(r,n)}},Statement=exports.Statement={types:["Statement"],checkPath:function(e){var r=e.node,n=e.parent;if(t.isStatement(r)){if(t.isVariableDeclaration(r)){if(t.isForXStatement(n,{left:r}))return!1;if(t.isForStatement(n,{init:r}))return!1}return!0}return!1}},Expression=exports.Expression={types:["Expression"],checkPath:function(e){return e.isIdentifier()?e.isReferencedIdentifier():t.isExpression(e.node)}},Scope=exports.Scope={types:["Scopable"],checkPath:function(e){return t.isScope(e.node,e.parent)}},Referenced=exports.Referenced={checkPath:function(e){return t.isReferenced(e.node,e.parent)}},BlockScoped=exports.BlockScoped={checkPath:function(e){return t.isBlockScoped(e.node)}},Var=exports.Var={types:["VariableDeclaration"],checkPath:function(e){return t.isVar(e.node)}},User=exports.User={checkPath:function(e){return e.node&&!!e.node.loc}},Generated=exports.Generated={checkPath:function(e){return!e.isUser()}},Pure=exports.Pure={checkPath:function(e,t){return e.scope.isPure(e.node,t)}},Flow=exports.Flow={types:["Flow","ImportDeclaration","ExportDeclaration"],checkPath:function(e){var r=e.node;return!!t.isFlow(r)||(t.isImportDeclaration(r)?"type"===r.importKind||"typeof"===r.importKind:!!t.isExportDeclaration(r)&&"type"===r.exportKind)}};

/***/ },

/***/ "./node_modules/lodash/assign.js":
/***/ function(module, exports, __webpack_require__) {

	var assignValue=__webpack_require__("./node_modules/lodash/_assignValue.js"),copyObject=__webpack_require__("./node_modules/lodash/_copyObject.js"),createAssigner=__webpack_require__("./node_modules/lodash/_createAssigner.js"),isArrayLike=__webpack_require__("./node_modules/lodash/isArrayLike.js"),isPrototype=__webpack_require__("./node_modules/lodash/_isPrototype.js"),keys=__webpack_require__("./node_modules/lodash/keys.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,assign=createAssigner(function(e,r){if(isPrototype(r)||isArrayLike(r))return void copyObject(r,keys(r),e);for(var s in r)hasOwnProperty.call(r,s)&&assignValue(e,s,r[s])});module.exports=assign;

/***/ },

/***/ "./node_modules/lodash/_createAssigner.js":
/***/ function(module, exports, __webpack_require__) {

	function createAssigner(e){return baseRest(function(t,r){var a=-1,i=r.length,s=i>1?r[i-1]:void 0,n=i>2?r[2]:void 0;for(s=e.length>3&&"function"==typeof s?(i--,s):void 0,n&&isIterateeCall(r[0],r[1],n)&&(s=i<3?void 0:s,i=1),t=Object(t);++a<i;){var o=r[a];o&&e(t,o,a,s)}return t})}var baseRest=__webpack_require__("./node_modules/lodash/_baseRest.js"),isIterateeCall=__webpack_require__("./node_modules/lodash/_isIterateeCall.js");module.exports=createAssigner;

/***/ },

/***/ "./node_modules/lodash/_baseRest.js":
/***/ function(module, exports, __webpack_require__) {

	function baseRest(e,t){return setToString(overRest(e,t,identity),e+"")}var identity=__webpack_require__("./node_modules/lodash/identity.js"),overRest=__webpack_require__("./node_modules/lodash/_overRest.js"),setToString=__webpack_require__("./node_modules/lodash/_setToString.js");module.exports=baseRest;

/***/ },

/***/ "./node_modules/lodash/_overRest.js":
/***/ function(module, exports, __webpack_require__) {

	function overRest(r,a,e){return a=nativeMax(void 0===a?r.length-1:a,0),function(){for(var t=arguments,n=-1,o=nativeMax(t.length-a,0),v=Array(o);++n<o;)v[n]=t[a+n];n=-1;for(var i=Array(a+1);++n<a;)i[n]=t[n];return i[a]=e(v),apply(r,this,i)}}var apply=__webpack_require__("./node_modules/lodash/_apply.js"),nativeMax=Math.max;module.exports=overRest;

/***/ },

/***/ "./node_modules/lodash/_apply.js":
/***/ function(module, exports) {

	function apply(l,e,a){switch(a.length){case 0:return l.call(e);case 1:return l.call(e,a[0]);case 2:return l.call(e,a[0],a[1]);case 3:return l.call(e,a[0],a[1],a[2])}return l.apply(e,a)}module.exports=apply;

/***/ },

/***/ "./node_modules/lodash/_setToString.js":
/***/ function(module, exports, __webpack_require__) {

	var baseSetToString=__webpack_require__("./node_modules/lodash/_baseSetToString.js"),shortOut=__webpack_require__("./node_modules/lodash/_shortOut.js"),setToString=shortOut(baseSetToString);module.exports=setToString;

/***/ },

/***/ "./node_modules/lodash/_baseSetToString.js":
/***/ function(module, exports, __webpack_require__) {

	var constant=__webpack_require__("./node_modules/lodash/constant.js"),identity=__webpack_require__("./node_modules/lodash/identity.js"),nativeDefineProperty=__webpack_require__("./node_modules/lodash/_nativeDefineProperty.js"),baseSetToString=nativeDefineProperty?function(e,t){return nativeDefineProperty(e,"toString",{configurable:!0,enumerable:!1,value:constant(t),writable:!0})}:identity;module.exports=baseSetToString;

/***/ },

/***/ "./node_modules/lodash/constant.js":
/***/ function(module, exports) {

	function constant(n){return function(){return n}}module.exports=constant;

/***/ },

/***/ "./node_modules/lodash/_nativeDefineProperty.js":
/***/ function(module, exports, __webpack_require__) {

	var getNative=__webpack_require__("./node_modules/lodash/_getNative.js"),nativeDefineProperty=getNative(Object,"defineProperty");module.exports=nativeDefineProperty;

/***/ },

/***/ "./node_modules/lodash/_shortOut.js":
/***/ function(module, exports) {

	function shortOut(t){var r=0,e=0;return function(){var n=nativeNow(),o=HOT_SPAN-(n-e);if(e=n,o>0){if(++r>=HOT_COUNT)return arguments[0]}else r=0;return t.apply(void 0,arguments)}}var HOT_COUNT=500,HOT_SPAN=16,nativeNow=Date.now;module.exports=shortOut;

/***/ },

/***/ "./node_modules/lodash/_isIterateeCall.js":
/***/ function(module, exports, __webpack_require__) {

	function isIterateeCall(e,r,i){if(!isObject(i))return!1;var t=typeof r;return!!("number"==t?isArrayLike(i)&&isIndex(r,i.length):"string"==t&&r in i)&&eq(i[r],e)}var eq=__webpack_require__("./node_modules/lodash/eq.js"),isArrayLike=__webpack_require__("./node_modules/lodash/isArrayLike.js"),isIndex=__webpack_require__("./node_modules/lodash/_isIndex.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js");module.exports=isIterateeCall;

/***/ },

/***/ "./node_modules/babel-traverse/lib/scope/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function getCache(e,t,r){for(var i=_cache.scope.get(e.node)||[],n=i,a=Array.isArray(n),o=0,n=a?n:(0,_getIterator3["default"])(n);;){var s;if(a){if(o>=n.length)break;s=n[o++]}else{if(o=n.next(),o.done)break;s=o.value}var l=s;if(l.parent===t&&l.path===e)return l}i.push(r),_cache.scope.has(e.node)||_cache.scope.set(e.node,i)}exports.__esModule=!0;var _keys=__webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js"),_keys2=_interopRequireDefault(_keys),_create=__webpack_require__("./node_modules/babel-runtime/core-js/object/create.js"),_create2=_interopRequireDefault(_create),_classCallCheck2=__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2),_includes=__webpack_require__("./node_modules/lodash/includes.js"),_includes2=_interopRequireDefault(_includes),_repeat=__webpack_require__("./node_modules/lodash/repeat.js"),_repeat2=_interopRequireDefault(_repeat),_renamer=__webpack_require__("./node_modules/babel-traverse/lib/scope/lib/renamer.js"),_renamer2=_interopRequireDefault(_renamer),_index=__webpack_require__("./node_modules/babel-traverse/lib/index.js"),_index2=_interopRequireDefault(_index),_defaults=__webpack_require__("./node_modules/lodash/defaults.js"),_defaults2=_interopRequireDefault(_defaults),_babelMessages=__webpack_require__("./node_modules/babel-messages/lib/index.js"),messages=_interopRequireWildcard(_babelMessages),_binding2=__webpack_require__("./node_modules/babel-traverse/lib/scope/binding.js"),_binding3=_interopRequireDefault(_binding2),_globals=__webpack_require__("./node_modules/globals/index.js"),_globals2=_interopRequireDefault(_globals),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes),_cache=__webpack_require__("./node_modules/babel-traverse/lib/cache.js"),_crawlCallsCount=0,collectorVisitor={For:function(e){for(var r=t.FOR_INIT_KEYS,i=Array.isArray(r),n=0,r=i?r:(0,_getIterator3["default"])(r);;){var a;if(i){if(n>=r.length)break;a=r[n++]}else{if(n=r.next(),n.done)break;a=n.value}var o=a,s=e.get(o);s.isVar()&&e.scope.getFunctionParent().registerBinding("var",s)}},Declaration:function(e){e.isBlockScoped()||e.isExportDeclaration()&&e.get("declaration").isDeclaration()||e.scope.getFunctionParent().registerDeclaration(e)},ReferencedIdentifier:function(e,t){t.references.push(e)},ForXStatement:function(e,t){var r=e.get("left");(r.isPattern()||r.isIdentifier())&&t.constantViolations.push(r)},ExportDeclaration:{exit:function(e){var r=e.node,i=e.scope,n=r.declaration;if(t.isClassDeclaration(n)||t.isFunctionDeclaration(n)){var a=n.id;if(!a)return;var o=i.getBinding(a.name);o&&o.reference(e)}else if(t.isVariableDeclaration(n))for(var s=n.declarations,l=Array.isArray(s),d=0,s=l?s:(0,_getIterator3["default"])(s);;){var u;if(l){if(d>=s.length)break;u=s[d++]}else{if(d=s.next(),d.done)break;u=d.value}var f=u,c=t.getBindingIdentifiers(f);for(var g in c){var p=i.getBinding(g);p&&p.reference(e)}}}},LabeledStatement:function(e){e.scope.getProgramParent().addGlobal(e.node),e.scope.getBlockParent().registerDeclaration(e)},AssignmentExpression:function(e,t){t.assignments.push(e)},UpdateExpression:function(e,t){t.constantViolations.push(e.get("argument"))},UnaryExpression:function(e,t){"delete"===e.node.operator&&t.constantViolations.push(e.get("argument"))},BlockScoped:function(e){var t=e.scope;t.path===e&&(t=t.parent),t.getBlockParent().registerDeclaration(e)},ClassDeclaration:function(e){var t=e.node.id;if(t){var r=t.name;e.scope.bindings[r]=e.scope.getBinding(r)}},Block:function(e){for(var t=e.get("body"),r=t,i=Array.isArray(r),n=0,r=i?r:(0,_getIterator3["default"])(r);;){var a;if(i){if(n>=r.length)break;a=r[n++]}else{if(n=r.next(),n.done)break;a=n.value}var o=a;o.isFunctionDeclaration()&&e.scope.getBlockParent().registerDeclaration(o)}}},uid=0,Scope=function(){function e(t,r){if((0,_classCallCheck3["default"])(this,e),r&&r.block===t.node)return r;var i=getCache(t,r,this);return i?i:(this.uid=uid++,this.parent=r,this.hub=t.hub,this.parentBlock=t.parent,this.block=t.node,void(this.path=t))}return e.prototype.traverse=function(e,t,r){(0,_index2["default"])(e,t,this,r,this.path)},e.prototype.generateDeclaredUidIdentifier=function(){var e=arguments.length<=0||void 0===arguments[0]?"temp":arguments[0],t=this.generateUidIdentifier(e);return this.push({id:t}),t},e.prototype.generateUidIdentifier=function(){var e=arguments.length<=0||void 0===arguments[0]?"temp":arguments[0];return t.identifier(this.generateUid(e))},e.prototype.generateUid=function(){var e=arguments.length<=0||void 0===arguments[0]?"temp":arguments[0];e=t.toIdentifier(e).replace(/^_+/,"").replace(/[0-9]+$/g,"");var r=void 0,i=0;do r=this._generateUid(e,i),i++;while(this.hasBinding(r)||this.hasGlobal(r)||this.hasReference(r));var n=this.getProgramParent();return n.references[r]=!0,n.uids[r]=!0,r},e.prototype._generateUid=function(e,t){var r=e;return t>1&&(r+=t),"_"+r},e.prototype.generateUidIdentifierBasedOnNode=function(e,r){var i=e;t.isAssignmentExpression(e)?i=e.left:t.isVariableDeclarator(e)?i=e.id:(t.isObjectProperty(i)||t.isObjectMethod(i))&&(i=i.key);var n=[],a=function s(e){if(t.isModuleDeclaration(e))if(e.source)s(e.source);else if(e.specifiers&&e.specifiers.length)for(var r=e.specifiers,i=Array.isArray(r),a=0,r=i?r:(0,_getIterator3["default"])(r);;){var o;if(i){if(a>=r.length)break;o=r[a++]}else{if(a=r.next(),a.done)break;o=a.value}var l=o;s(l)}else e.declaration&&s(e.declaration);else if(t.isModuleSpecifier(e))s(e.local);else if(t.isMemberExpression(e))s(e.object),s(e.property);else if(t.isIdentifier(e))n.push(e.name);else if(t.isLiteral(e))n.push(e.value);else if(t.isCallExpression(e))s(e.callee);else if(t.isObjectExpression(e)||t.isObjectPattern(e))for(var d=e.properties,u=Array.isArray(d),f=0,d=u?d:(0,_getIterator3["default"])(d);;){var c;if(u){if(f>=d.length)break;c=d[f++]}else{if(f=d.next(),f.done)break;c=f.value}var g=c;s(g.key||g.argument)}};a(i);var o=n.join("$");return o=o.replace(/^_/,"")||r||"ref",this.generateUidIdentifier(o.slice(0,20))},e.prototype.isStatic=function(e){if(t.isThisExpression(e)||t.isSuper(e))return!0;if(t.isIdentifier(e)){var r=this.getBinding(e.name);return r?r.constant:this.hasBinding(e.name)}return!1},e.prototype.maybeGenerateMemoised=function(e,t){if(this.isStatic(e))return null;var r=this.generateUidIdentifierBasedOnNode(e);return t||this.push({id:r}),r},e.prototype.checkBlockScopedCollisions=function(e,t,r,i){if("param"!==t&&("hoisted"!==t||"let"!==e.kind)){var n=!1;if(n||(n="let"===t||"let"===e.kind||"const"===e.kind||"module"===e.kind),n||(n="param"===e.kind&&("let"===t||"const"===t)),n)throw this.hub.file.buildCodeFrameError(i,messages.get("scopeDuplicateDeclaration",r),TypeError)}},e.prototype.rename=function(e,t,r){var i=this.getBinding(e);if(i)return t=t||this.generateUidIdentifier(e).name,new _renamer2["default"](i,e,t).rename(r)},e.prototype._renameFromMap=function(e,t,r,i){e[t]&&(e[r]=i,e[t]=null)},e.prototype.dump=function(){var e=(0,_repeat2["default"])("-",60);console.log(e);var t=this;do{console.log("#",t.block.type);for(var r in t.bindings){var i=t.bindings[r];console.log(" -",r,{constant:i.constant,references:i.references,violations:i.constantViolations.length,kind:i.kind})}}while(t=t.parent);console.log(e)},e.prototype.toArray=function(e,r){var i=this.hub.file;if(t.isIdentifier(e)){var n=this.getBinding(e.name);if(n&&n.constant&&n.path.isGenericType("Array"))return e}if(t.isArrayExpression(e))return e;if(t.isIdentifier(e,{name:"arguments"}))return t.callExpression(t.memberExpression(t.memberExpression(t.memberExpression(t.identifier("Array"),t.identifier("prototype")),t.identifier("slice")),t.identifier("call")),[e]);var a="toArray",o=[e];return r===!0?a="toConsumableArray":r&&(o.push(t.numericLiteral(r)),a="slicedToArray"),t.callExpression(i.addHelper(a),o)},e.prototype.registerDeclaration=function(e){if(e.isLabeledStatement())this.registerBinding("label",e);else if(e.isFunctionDeclaration())this.registerBinding("hoisted",e.get("id"),e);else if(e.isVariableDeclaration())for(var t=e.get("declarations"),r=t,i=Array.isArray(r),n=0,r=i?r:(0,_getIterator3["default"])(r);;){var a;if(i){if(n>=r.length)break;a=r[n++]}else{if(n=r.next(),n.done)break;a=n.value}var o=a;this.registerBinding(e.node.kind,o)}else if(e.isClassDeclaration())this.registerBinding("let",e);else if(e.isImportDeclaration())for(var s=e.get("specifiers"),l=s,d=Array.isArray(l),u=0,l=d?l:(0,_getIterator3["default"])(l);;){var f;if(d){if(u>=l.length)break;f=l[u++]}else{if(u=l.next(),u.done)break;f=u.value}var c=f;this.registerBinding("module",c)}else if(e.isExportDeclaration()){var g=e.get("declaration");(g.isClassDeclaration()||g.isFunctionDeclaration()||g.isVariableDeclaration())&&this.registerDeclaration(g)}else this.registerBinding("unknown",e)},e.prototype.buildUndefinedNode=function(){return this.hasBinding("undefined")?t.unaryExpression("void",t.numericLiteral(0),!0):t.identifier("undefined")},e.prototype.registerConstantViolation=function(e){var t=e.getBindingIdentifiers();for(var r in t){var i=this.getBinding(r);i&&i.reassign(e)}},e.prototype.registerBinding=function(e,t){var r=arguments.length<=2||void 0===arguments[2]?t:arguments[2];if(!e)throw new ReferenceError("no `kind`");if(t.isVariableDeclaration())for(var i=t.get("declarations"),n=i,a=Array.isArray(n),o=0,n=a?n:(0,_getIterator3["default"])(n);;){var s;if(a){if(o>=n.length)break;s=n[o++]}else{if(o=n.next(),o.done)break;s=o.value}var l=s;this.registerBinding(e,l)}else{var d=this.getProgramParent(),u=t.getBindingIdentifiers(!0);for(var f in u)for(var c=u[f],g=Array.isArray(c),p=0,c=g?c:(0,_getIterator3["default"])(c);;){var h;if(g){if(p>=c.length)break;h=c[p++]}else{if(p=c.next(),p.done)break;h=p.value}var v=h,b=this.getOwnBinding(f);if(b){if(b.identifier===v)continue;this.checkBlockScopedCollisions(b,e,f,v)}b&&b.path.isFlow()&&(b=null),d.references[f]=!0,this.bindings[f]=new _binding3["default"]({identifier:v,existing:b,scope:this,path:r,kind:e})}}},e.prototype.addGlobal=function(e){this.globals[e.name]=e},e.prototype.hasUid=function(e){var t=this;do if(t.uids[e])return!0;while(t=t.parent);return!1},e.prototype.hasGlobal=function(e){var t=this;do if(t.globals[e])return!0;while(t=t.parent);return!1},e.prototype.hasReference=function(e){var t=this;do if(t.references[e])return!0;while(t=t.parent);return!1},e.prototype.isPure=function(e,r){if(t.isIdentifier(e)){var i=this.getBinding(e.name);return!!i&&(!r||i.constant)}if(t.isClass(e))return!(e.superClass&&!this.isPure(e.superClass,r))&&this.isPure(e.body,r);if(t.isClassBody(e)){for(var n=e.body,a=Array.isArray(n),o=0,n=a?n:(0,_getIterator3["default"])(n);;){var s;if(a){if(o>=n.length)break;s=n[o++]}else{if(o=n.next(),o.done)break;s=o.value}var l=s;if(!this.isPure(l,r))return!1}return!0}if(t.isBinary(e))return this.isPure(e.left,r)&&this.isPure(e.right,r);if(t.isArrayExpression(e)){for(var d=e.elements,u=Array.isArray(d),f=0,d=u?d:(0,_getIterator3["default"])(d);;){var c;if(u){if(f>=d.length)break;c=d[f++]}else{if(f=d.next(),f.done)break;c=f.value}var g=c;if(!this.isPure(g,r))return!1}return!0}if(t.isObjectExpression(e)){for(var p=e.properties,h=Array.isArray(p),v=0,p=h?p:(0,_getIterator3["default"])(p);;){var b;if(h){if(v>=p.length)break;b=p[v++]}else{if(v=p.next(),v.done)break;b=v.value}var y=b;if(!this.isPure(y,r))return!1}return!0}return t.isClassMethod(e)?!(e.computed&&!this.isPure(e.key,r))&&("get"!==e.kind&&"set"!==e.kind):t.isClassProperty(e)||t.isObjectProperty(e)?!(e.computed&&!this.isPure(e.key,r))&&this.isPure(e.value,r):t.isUnaryExpression(e)?this.isPure(e.argument,r):t.isPureish(e)},e.prototype.setData=function(e,t){return this.data[e]=t},e.prototype.getData=function(e){var t=this;do{var r=t.data[e];if(null!=r)return r}while(t=t.parent)},e.prototype.removeData=function(e){var t=this;do{var r=t.data[e];null!=r&&(t.data[e]=null)}while(t=t.parent)},e.prototype.init=function(){this.references||this.crawl()},e.prototype.crawl=function(){_crawlCallsCount++,this._crawl(),_crawlCallsCount--},e.prototype._crawl=function(){var e=this.path;if(this.references=(0,_create2["default"])(null),this.bindings=(0,_create2["default"])(null),this.globals=(0,_create2["default"])(null),this.uids=(0,_create2["default"])(null),this.data=(0,_create2["default"])(null),e.isLoop())for(var r=t.FOR_INIT_KEYS,i=Array.isArray(r),n=0,r=i?r:(0,_getIterator3["default"])(r);;){var a;if(i){if(n>=r.length)break;a=r[n++]}else{if(n=r.next(),n.done)break;a=n.value}var o=a,s=e.get(o);s.isBlockScoped()&&this.registerBinding(s.node.kind,s)}if(e.isFunctionExpression()&&e.has("id")&&(e.get("id").node[t.NOT_LOCAL_BINDING]||this.registerBinding("local",e.get("id"),e)),e.isClassExpression()&&e.has("id")&&(e.get("id").node[t.NOT_LOCAL_BINDING]||this.registerBinding("local",e)),e.isFunction())for(var l=e.get("params"),d=l,u=Array.isArray(d),f=0,d=u?d:(0,_getIterator3["default"])(d);;){var c;if(u){if(f>=d.length)break;c=d[f++]}else{if(f=d.next(),f.done)break;c=f.value}var g=c;this.registerBinding("param",g)}e.isCatchClause()&&this.registerBinding("let",e);var p=this.getProgramParent();if(!p.crawling){var h={references:[],constantViolations:[],assignments:[]};this.crawling=!0,e.traverse(collectorVisitor,h),this.crawling=!1;for(var v=h.assignments,b=Array.isArray(v),y=0,v=b?v:(0,_getIterator3["default"])(v);;){var _;if(b){if(y>=v.length)break;_=v[y++]}else{if(y=v.next(),y.done)break;_=y.value}var k=_,m=k.getBindingIdentifiers(),B=void 0;for(var w in m)k.scope.getBinding(w)||(B=B||k.scope.getProgramParent(),B.addGlobal(m[w]));k.scope.registerConstantViolation(k)}for(var x=h.references,I=Array.isArray(x),A=0,x=I?x:(0,_getIterator3["default"])(x);;){var D;if(I){if(A>=x.length)break;D=x[A++]}else{if(A=x.next(),A.done)break;D=A.value}var P=D,C=P.scope.getBinding(P.node.name);C?C.reference(P):P.scope.getProgramParent().addGlobal(P.node)}for(var E=h.constantViolations,q=Array.isArray(E),O=0,E=q?E:(0,_getIterator3["default"])(E);;){var F;if(q){if(O>=E.length)break;F=E[O++]}else{if(O=E.next(),O.done)break;F=O.value}var S=F;S.scope.registerConstantViolation(S)}}},e.prototype.push=function(e){var r=this.path;r.isBlockStatement()||r.isProgram()||(r=this.getBlockParent().path),r.isSwitchStatement()&&(r=this.getFunctionParent().path),(r.isLoop()||r.isCatchClause()||r.isFunction())&&(t.ensureBlock(r.node),r=r.get("body"));var i=e.unique,n=e.kind||"var",a=null==e._blockHoist?2:e._blockHoist,o="declaration:"+n+":"+a,s=!i&&r.getData(o);if(!s){var l=t.variableDeclaration(n,[]);l._generated=!0,l._blockHoist=a;var d=r.unshiftContainer("body",[l]);s=d[0],i||r.setData(o,s)}var u=t.variableDeclarator(e.id,e.init);s.node.declarations.push(u),this.registerBinding(n,s.get("declarations").pop())},e.prototype.getProgramParent=function(){var e=this;do if(e.path.isProgram())return e;while(e=e.parent);throw new Error("We couldn't find a Function or Program...")},e.prototype.getFunctionParent=function(){var e=this;do if(e.path.isFunctionParent())return e;while(e=e.parent);throw new Error("We couldn't find a Function or Program...")},e.prototype.getBlockParent=function(){var e=this;do if(e.path.isBlockParent())return e;while(e=e.parent);throw new Error("We couldn't find a BlockStatement, For, Switch, Function, Loop or Program...")},e.prototype.getAllBindings=function(){var e=(0,_create2["default"])(null),t=this;do(0,_defaults2["default"])(e,t.bindings),t=t.parent;while(t);return e},e.prototype.getAllBindingsOfKind=function(){for(var e=(0,_create2["default"])(null),t=arguments,r=Array.isArray(t),i=0,t=r?t:(0,_getIterator3["default"])(t);;){var n;if(r){if(i>=t.length)break;n=t[i++]}else{if(i=t.next(),i.done)break;n=i.value}var a=n,o=this;do{for(var s in o.bindings){var l=o.bindings[s];l.kind===a&&(e[s]=l)}o=o.parent}while(o)}return e},e.prototype.bindingIdentifierEquals=function(e,t){return this.getBindingIdentifier(e)===t},e.prototype.warnOnFlowBinding=function(e){return 0===_crawlCallsCount&&e&&e.path.isFlow()&&console.warn("\n        You or one of the Babel plugins you are using are using Flow declarations as bindings.\n        Support for this will be removed in version 6.8. To find out the caller, grep for this\n        message and change it to a `console.trace()`.\n      "),e},e.prototype.getBinding=function(e){var t=this;do{var r=t.getOwnBinding(e);if(r)return this.warnOnFlowBinding(r)}while(t=t.parent)},e.prototype.getOwnBinding=function(e){return this.warnOnFlowBinding(this.bindings[e])},e.prototype.getBindingIdentifier=function(e){var t=this.getBinding(e);return t&&t.identifier},e.prototype.getOwnBindingIdentifier=function(e){var t=this.bindings[e];return t&&t.identifier},e.prototype.hasOwnBinding=function(e){return!!this.getOwnBinding(e)},e.prototype.hasBinding=function(t,r){return!!t&&(!!this.hasOwnBinding(t)||(!!this.parentHasBinding(t,r)||(!!this.hasUid(t)||(!(r||!(0,_includes2["default"])(e.globals,t))||!(r||!(0,_includes2["default"])(e.contextVariables,t))))))},e.prototype.parentHasBinding=function(e,t){return this.parent&&this.parent.hasBinding(e,t)},e.prototype.moveBindingTo=function(e,t){var r=this.getBinding(e);r&&(r.scope.removeOwnBinding(e),r.scope=t,t.bindings[e]=r)},e.prototype.removeOwnBinding=function(e){delete this.bindings[e]},e.prototype.removeBinding=function(e){var t=this.getBinding(e);t&&t.scope.removeOwnBinding(e);var r=this;do r.uids[e]&&(r.uids[e]=!1);while(r=r.parent)},e}();Scope.globals=(0,_keys2["default"])(_globals2["default"].builtin),Scope.contextVariables=["arguments","undefined","Infinity","NaN"],exports["default"]=Scope,module.exports=exports["default"];

/***/ },

/***/ "./node_modules/lodash/includes.js":
/***/ function(module, exports, __webpack_require__) {

	function includes(e,r,i,n){e=isArrayLike(e)?e:values(e),i=i&&!n?toInteger(i):0;var a=e.length;return i<0&&(i=nativeMax(a+i,0)),isString(e)?i<=a&&e.indexOf(r,i)>-1:!!a&&baseIndexOf(e,r,i)>-1}var baseIndexOf=__webpack_require__("./node_modules/lodash/_baseIndexOf.js"),isArrayLike=__webpack_require__("./node_modules/lodash/isArrayLike.js"),isString=__webpack_require__("./node_modules/lodash/isString.js"),toInteger=__webpack_require__("./node_modules/lodash/toInteger.js"),values=__webpack_require__("./node_modules/lodash/values.js"),nativeMax=Math.max;module.exports=includes;

/***/ },

/***/ "./node_modules/lodash/toInteger.js":
/***/ function(module, exports, __webpack_require__) {

	function toInteger(t){var e=toFinite(t),r=e%1;return e===e?r?e-r:e:0}var toFinite=__webpack_require__("./node_modules/lodash/toFinite.js");module.exports=toInteger;

/***/ },

/***/ "./node_modules/lodash/toFinite.js":
/***/ function(module, exports, __webpack_require__) {

	function toFinite(r){if(!r)return 0===r?r:0;if(r=toNumber(r),r===INFINITY||r===-INFINITY){var e=r<0?-1:1;return e*MAX_INTEGER}return r===r?r:0}var toNumber=__webpack_require__("./node_modules/lodash/toNumber.js"),INFINITY=1/0,MAX_INTEGER=1.7976931348623157e308;module.exports=toFinite;

/***/ },

/***/ "./node_modules/lodash/toNumber.js":
/***/ function(module, exports, __webpack_require__) {

	function toNumber(e){if("number"==typeof e)return e;if(isSymbol(e))return NAN;if(isObject(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=isObject(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(reTrim,"");var t=reIsBinary.test(e);return t||reIsOctal.test(e)?freeParseInt(e.slice(2),t?2:8):reIsBadHex.test(e)?NAN:+e}var isObject=__webpack_require__("./node_modules/lodash/isObject.js"),isSymbol=__webpack_require__("./node_modules/lodash/isSymbol.js"),NAN=NaN,reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;module.exports=toNumber;

/***/ },

/***/ "./node_modules/lodash/values.js":
/***/ function(module, exports, __webpack_require__) {

	function values(e){return e?baseValues(e,keys(e)):[]}var baseValues=__webpack_require__("./node_modules/lodash/_baseValues.js"),keys=__webpack_require__("./node_modules/lodash/keys.js");module.exports=values;

/***/ },

/***/ "./node_modules/lodash/_baseValues.js":
/***/ function(module, exports, __webpack_require__) {

	function baseValues(a,r){return arrayMap(r,function(r){return a[r]})}var arrayMap=__webpack_require__("./node_modules/lodash/_arrayMap.js");module.exports=baseValues;

/***/ },

/***/ "./node_modules/lodash/_arrayMap.js":
/***/ function(module, exports) {

	function arrayMap(r,a){for(var e=-1,n=r?r.length:0,o=Array(n);++e<n;)o[e]=a(r[e],e,r);return o}module.exports=arrayMap;

/***/ },

/***/ "./node_modules/lodash/repeat.js":
/***/ function(module, exports, __webpack_require__) {

	function repeat(e,t,r){return t=(r?isIterateeCall(e,t,r):void 0===t)?1:toInteger(t),baseRepeat(toString(e),t)}var baseRepeat=__webpack_require__("./node_modules/lodash/_baseRepeat.js"),isIterateeCall=__webpack_require__("./node_modules/lodash/_isIterateeCall.js"),toInteger=__webpack_require__("./node_modules/lodash/toInteger.js"),toString=__webpack_require__("./node_modules/lodash/toString.js");module.exports=repeat;

/***/ },

/***/ "./node_modules/lodash/_baseRepeat.js":
/***/ function(module, exports) {

	function baseRepeat(e,o){var r="";if(!e||o<1||o>MAX_SAFE_INTEGER)return r;do o%2&&(r+=e),o=nativeFloor(o/2),o&&(e+=e);while(o);return r}var MAX_SAFE_INTEGER=9007199254740991,nativeFloor=Math.floor;module.exports=baseRepeat;

/***/ },

/***/ "./node_modules/babel-traverse/lib/scope/lib/renamer.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var i={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i["default"]=e,i}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}exports.__esModule=!0;var _classCallCheck2=__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_binding=__webpack_require__("./node_modules/babel-traverse/lib/scope/binding.js"),_binding2=_interopRequireDefault(_binding),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes),renameVisitor={ReferencedIdentifier:function(e,i){var n=e.node;n.name===i.oldName&&(n.name=i.newName)},Scope:function(e,i){e.scope.bindingIdentifierEquals(i.oldName,i.binding.identifier)||e.skip()},"AssignmentExpression|Declaration":function(e,i){var n=e.getOuterBindingIdentifiers();for(var t in n)t===i.oldName&&(n[t].name=i.newName)}},Renamer=function(){function e(i,n,t){(0,_classCallCheck3["default"])(this,e),this.newName=t,this.oldName=n,this.binding=i}return e.prototype.maybeConvertFromExportDeclaration=function(e){var i=e.parentPath.isExportDeclaration()&&e.parentPath;if(i){var n=i.isExportDefaultDeclaration();n&&(e.isFunctionDeclaration()||e.isClassDeclaration())&&!e.node.id&&(e.node.id=e.scope.generateUidIdentifier("default"));var r=e.getOuterBindingIdentifiers(),a=[];for(var o in r){var s=o===this.oldName?this.newName:o,l=n?"default":o;a.push(t.exportSpecifier(t.identifier(s),t.identifier(l)))}var c=t.exportNamedDeclaration(null,a);e.isFunctionDeclaration()&&(c._blockHoist=3),i.insertAfter(c),i.replaceWith(e.node)}},e.prototype.maybeConvertFromClassFunctionDeclaration=function(e){},e.prototype.maybeConvertFromClassFunctionExpression=function(e){},e.prototype.rename=function(e){var i=this.binding,n=this.oldName,t=this.newName,r=i.scope,a=i.path,o=a.find(function(e){return e.isDeclaration()||e.isFunctionExpression()});o&&this.maybeConvertFromExportDeclaration(o),r.traverse(e||r.block,renameVisitor,this),e||(r.removeOwnBinding(n),r.bindings[t]=i,this.binding.identifier.name=t),"hoisted"===i.type,o&&(this.maybeConvertFromClassFunctionDeclaration(o),this.maybeConvertFromClassFunctionExpression(o))},e}();exports["default"]=Renamer,module.exports=exports["default"];

/***/ },

/***/ "./node_modules/babel-traverse/lib/scope/binding.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}exports.__esModule=!0;var _classCallCheck2=__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),Binding=function(){function e(t){var s=t.existing,i=t.identifier,n=t.scope,a=t.path,o=t.kind;(0,_classCallCheck3["default"])(this,e),this.identifier=i,this.scope=n,this.path=a,this.kind=o,this.constantViolations=[],this.constant=!0,this.referencePaths=[],this.referenced=!1,this.references=0,this.clearValue(),s&&(this.constantViolations=[].concat(s.path,s.constantViolations,this.constantViolations))}return e.prototype.deoptValue=function(){this.clearValue(),this.hasDeoptedValue=!0},e.prototype.setValue=function(e){this.hasDeoptedValue||(this.hasValue=!0,this.value=e)},e.prototype.clearValue=function(){this.hasDeoptedValue=!1,this.hasValue=!1,this.value=null},e.prototype.reassign=function(e){this.constant=!1,this.constantViolations.indexOf(e)===-1&&this.constantViolations.push(e)},e.prototype.reference=function(e){this.referencePaths.indexOf(e)===-1&&(this.referenced=!0,this.references++,this.referencePaths.push(e))},e.prototype.dereference=function(){this.references--,this.referenced=!!this.references},e}();exports["default"]=Binding,module.exports=exports["default"];

/***/ },

/***/ "./node_modules/lodash/defaults.js":
/***/ function(module, exports, __webpack_require__) {

	var apply=__webpack_require__("./node_modules/lodash/_apply.js"),assignInDefaults=__webpack_require__("./node_modules/lodash/_assignInDefaults.js"),assignInWith=__webpack_require__("./node_modules/lodash/assignInWith.js"),baseRest=__webpack_require__("./node_modules/lodash/_baseRest.js"),defaults=baseRest(function(s){return s.push(void 0,assignInDefaults),apply(assignInWith,void 0,s)});module.exports=defaults;

/***/ },

/***/ "./node_modules/lodash/_assignInDefaults.js":
/***/ function(module, exports, __webpack_require__) {

	function assignInDefaults(e,o,t,r){return void 0===e||eq(e,objectProto[t])&&!hasOwnProperty.call(r,t)?o:e}var eq=__webpack_require__("./node_modules/lodash/eq.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=assignInDefaults;

/***/ },

/***/ "./node_modules/lodash/assignInWith.js":
/***/ function(module, exports, __webpack_require__) {

	var copyObject=__webpack_require__("./node_modules/lodash/_copyObject.js"),createAssigner=__webpack_require__("./node_modules/lodash/_createAssigner.js"),keysIn=__webpack_require__("./node_modules/lodash/keysIn.js"),assignInWith=createAssigner(function(e,r,s,n){copyObject(r,keysIn(r),e,n)});module.exports=assignInWith;

/***/ },

/***/ "./node_modules/lodash/keysIn.js":
/***/ function(module, exports, __webpack_require__) {

	function keysIn(e){return isArrayLike(e)?arrayLikeKeys(e,!0):baseKeysIn(e)}var arrayLikeKeys=__webpack_require__("./node_modules/lodash/_arrayLikeKeys.js"),baseKeysIn=__webpack_require__("./node_modules/lodash/_baseKeysIn.js"),isArrayLike=__webpack_require__("./node_modules/lodash/isArrayLike.js");module.exports=keysIn;

/***/ },

/***/ "./node_modules/lodash/_baseKeysIn.js":
/***/ function(module, exports, __webpack_require__) {

	function baseKeysIn(e){if(!isObject(e))return nativeKeysIn(e);var r=isPrototype(e),t=[];for(var o in e)("constructor"!=o||!r&&hasOwnProperty.call(e,o))&&t.push(o);return t}var isObject=__webpack_require__("./node_modules/lodash/isObject.js"),isPrototype=__webpack_require__("./node_modules/lodash/_isPrototype.js"),nativeKeysIn=__webpack_require__("./node_modules/lodash/_nativeKeysIn.js"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=baseKeysIn;

/***/ },

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/***/ function(module, exports) {

	function nativeKeysIn(n){var e=[];if(null!=n)for(var r in Object(n))e.push(r);return e}module.exports=nativeKeysIn;

/***/ },

/***/ "./node_modules/babel-messages/lib/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function get(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=MESSAGES[e];if(!i)throw new ReferenceError("Unknown message "+(0,_stringify2["default"])(e));return r=parseArgs(r),i.replace(/\$(\d+)/g,function(e,t){return r[t-1]})}function parseArgs(e){return e.map(function(e){if(null!=e&&e.inspect)return e.inspect();try{return(0,_stringify2["default"])(e)||e+""}catch(t){return util.inspect(e)}})}exports.__esModule=!0,exports.MESSAGES=void 0;var _stringify=__webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js"),_stringify2=_interopRequireDefault(_stringify);exports.get=get,exports.parseArgs=parseArgs;var _util=__webpack_require__("./node_modules/util/util.js"),util=_interopRequireWildcard(_util),MESSAGES=exports.MESSAGES={tailCallReassignmentDeopt:"Function reference has been reassigned, so it will probably be dereferenced, therefore we can't optimise this with confidence",classesIllegalBareSuper:"Illegal use of bare super",classesIllegalSuperCall:"Direct super call is illegal in non-constructor, use super.$1() instead",scopeDuplicateDeclaration:"Duplicate declaration $1",settersNoRest:"Setters aren't allowed to have a rest",noAssignmentsInForHead:"No assignments allowed in for-in/of head",expectedMemberExpressionOrIdentifier:"Expected type MemberExpression or Identifier",invalidParentForThisNode:"We don't know how to handle this node within the current parent - please open an issue",readOnly:"$1 is read-only",unknownForHead:"Unknown node type $1 in ForStatement",didYouMean:"Did you mean $1?",codeGeneratorDeopt:"Note: The code generator has deoptimised the styling of $1 as it exceeds the max of $2.",missingTemplatesDirectory:"no templates directory - this is most likely the result of a broken `npm publish`. Please report to https://github.com/babel/babel/issues",unsupportedOutputType:"Unsupported output type $1",illegalMethodName:"Illegal method name $1",lostTrackNodePath:"We lost track of this node's position, likely because the AST was directly manipulated",modulesIllegalExportName:"Illegal export $1",modulesDuplicateDeclarations:"Duplicate module declarations with the same source but in different scopes",undeclaredVariable:"Reference to undeclared variable $1",undeclaredVariableType:"Referencing a type alias outside of a type annotation",undeclaredVariableSuggestion:"Reference to undeclared variable $1 - did you mean $2?",traverseNeedsParent:"You must pass a scope and parentPath unless traversing a Program/File. Instead of that you tried to traverse a $1 node without passing scope and parentPath.",traverseVerifyRootFunction:"You passed `traverse()` a function when it expected a visitor object, are you sure you didn't mean `{ enter: Function }`?",traverseVerifyVisitorProperty:"You passed `traverse()` a visitor object with the property $1 that has the invalid property $2",traverseVerifyNodeType:"You gave us a visitor for the node type $1 but it's not a valid type",pluginNotObject:"Plugin $2 specified in $1 was expected to return an object when invoked but returned $3",pluginNotFunction:"Plugin $2 specified in $1 was expected to return a function but returned $3",pluginUnknown:"Unknown plugin $1 specified in $2 at $3, attempted to resolve relative to $4",pluginInvalidProperty:"Plugin $2 specified in $1 provided an invalid property of $3"};

/***/ },

/***/ "./node_modules/globals/index.js":
/***/ function(module, exports, __webpack_require__) {

	module.exports=__webpack_require__("./node_modules/globals/globals.json");

/***/ },

/***/ "./node_modules/globals/globals.json":
/***/ function(module, exports) {

	module.exports = {
		"builtin": {
			"Array": false,
			"ArrayBuffer": false,
			"Boolean": false,
			"constructor": false,
			"DataView": false,
			"Date": false,
			"decodeURI": false,
			"decodeURIComponent": false,
			"encodeURI": false,
			"encodeURIComponent": false,
			"Error": false,
			"escape": false,
			"eval": false,
			"EvalError": false,
			"Float32Array": false,
			"Float64Array": false,
			"Function": false,
			"hasOwnProperty": false,
			"Infinity": false,
			"Int16Array": false,
			"Int32Array": false,
			"Int8Array": false,
			"isFinite": false,
			"isNaN": false,
			"isPrototypeOf": false,
			"JSON": false,
			"Map": false,
			"Math": false,
			"NaN": false,
			"Number": false,
			"Object": false,
			"parseFloat": false,
			"parseInt": false,
			"Promise": false,
			"propertyIsEnumerable": false,
			"Proxy": false,
			"RangeError": false,
			"ReferenceError": false,
			"Reflect": false,
			"RegExp": false,
			"Set": false,
			"String": false,
			"Symbol": false,
			"SyntaxError": false,
			"System": false,
			"toLocaleString": false,
			"toString": false,
			"TypeError": false,
			"Uint16Array": false,
			"Uint32Array": false,
			"Uint8Array": false,
			"Uint8ClampedArray": false,
			"undefined": false,
			"unescape": false,
			"URIError": false,
			"valueOf": false,
			"WeakMap": false,
			"WeakSet": false
		},
		"es5": {
			"Array": false,
			"Boolean": false,
			"constructor": false,
			"Date": false,
			"decodeURI": false,
			"decodeURIComponent": false,
			"encodeURI": false,
			"encodeURIComponent": false,
			"Error": false,
			"escape": false,
			"eval": false,
			"EvalError": false,
			"Float32Array": false,
			"Float64Array": false,
			"Function": false,
			"hasOwnProperty": false,
			"Infinity": false,
			"isFinite": false,
			"isNaN": false,
			"isPrototypeOf": false,
			"JSON": false,
			"Math": false,
			"NaN": false,
			"Number": false,
			"Object": false,
			"parseFloat": false,
			"parseInt": false,
			"propertyIsEnumerable": false,
			"RangeError": false,
			"ReferenceError": false,
			"RegExp": false,
			"String": false,
			"SyntaxError": false,
			"toLocaleString": false,
			"toString": false,
			"TypeError": false,
			"undefined": false,
			"unescape": false,
			"URIError": false,
			"valueOf": false
		},
		"es6": {
			"Array": false,
			"ArrayBuffer": false,
			"Boolean": false,
			"constructor": false,
			"DataView": false,
			"Date": false,
			"decodeURI": false,
			"decodeURIComponent": false,
			"encodeURI": false,
			"encodeURIComponent": false,
			"Error": false,
			"escape": false,
			"eval": false,
			"EvalError": false,
			"Float32Array": false,
			"Float64Array": false,
			"Function": false,
			"hasOwnProperty": false,
			"Infinity": false,
			"Int16Array": false,
			"Int32Array": false,
			"Int8Array": false,
			"isFinite": false,
			"isNaN": false,
			"isPrototypeOf": false,
			"JSON": false,
			"Map": false,
			"Math": false,
			"NaN": false,
			"Number": false,
			"Object": false,
			"parseFloat": false,
			"parseInt": false,
			"Promise": false,
			"propertyIsEnumerable": false,
			"Proxy": false,
			"RangeError": false,
			"ReferenceError": false,
			"Reflect": false,
			"RegExp": false,
			"Set": false,
			"String": false,
			"Symbol": false,
			"SyntaxError": false,
			"System": false,
			"toLocaleString": false,
			"toString": false,
			"TypeError": false,
			"Uint16Array": false,
			"Uint32Array": false,
			"Uint8Array": false,
			"Uint8ClampedArray": false,
			"undefined": false,
			"unescape": false,
			"URIError": false,
			"valueOf": false,
			"WeakMap": false,
			"WeakSet": false
		},
		"browser": {
			"addEventListener": false,
			"alert": false,
			"AnalyserNode": false,
			"AnimationEvent": false,
			"applicationCache": false,
			"ApplicationCache": false,
			"ApplicationCacheErrorEvent": false,
			"atob": false,
			"Attr": false,
			"Audio": false,
			"AudioBuffer": false,
			"AudioBufferSourceNode": false,
			"AudioContext": false,
			"AudioDestinationNode": false,
			"AudioListener": false,
			"AudioNode": false,
			"AudioParam": false,
			"AudioProcessingEvent": false,
			"AutocompleteErrorEvent": false,
			"BarProp": false,
			"BatteryManager": false,
			"BeforeUnloadEvent": false,
			"BiquadFilterNode": false,
			"Blob": false,
			"blur": false,
			"btoa": false,
			"Cache": false,
			"caches": false,
			"CacheStorage": false,
			"cancelAnimationFrame": false,
			"CanvasGradient": false,
			"CanvasPattern": false,
			"CanvasRenderingContext2D": false,
			"CDATASection": false,
			"ChannelMergerNode": false,
			"ChannelSplitterNode": false,
			"CharacterData": false,
			"clearInterval": false,
			"clearTimeout": false,
			"clientInformation": false,
			"ClientRect": false,
			"ClientRectList": false,
			"ClipboardEvent": false,
			"close": false,
			"closed": false,
			"CloseEvent": false,
			"Comment": false,
			"CompositionEvent": false,
			"confirm": false,
			"console": false,
			"ConvolverNode": false,
			"crypto": false,
			"Crypto": false,
			"CryptoKey": false,
			"CSS": false,
			"CSSFontFaceRule": false,
			"CSSImportRule": false,
			"CSSKeyframeRule": false,
			"CSSKeyframesRule": false,
			"CSSMediaRule": false,
			"CSSPageRule": false,
			"CSSRule": false,
			"CSSRuleList": false,
			"CSSStyleDeclaration": false,
			"CSSStyleRule": false,
			"CSSStyleSheet": false,
			"CSSSupportsRule": false,
			"CSSUnknownRule": false,
			"CSSViewportRule": false,
			"CustomEvent": false,
			"DataTransfer": false,
			"DataTransferItem": false,
			"DataTransferItemList": false,
			"Debug": false,
			"defaultStatus": false,
			"defaultstatus": false,
			"DelayNode": false,
			"DeviceMotionEvent": false,
			"DeviceOrientationEvent": false,
			"devicePixelRatio": false,
			"dispatchEvent": false,
			"document": false,
			"Document": false,
			"DocumentFragment": false,
			"DocumentType": false,
			"DOMError": false,
			"DOMException": false,
			"DOMImplementation": false,
			"DOMParser": false,
			"DOMSettableTokenList": false,
			"DOMStringList": false,
			"DOMStringMap": false,
			"DOMTokenList": false,
			"DragEvent": false,
			"DynamicsCompressorNode": false,
			"Element": false,
			"ElementTimeControl": false,
			"ErrorEvent": false,
			"event": false,
			"Event": false,
			"EventSource": false,
			"EventTarget": false,
			"external": false,
			"fetch": false,
			"File": false,
			"FileError": false,
			"FileList": false,
			"FileReader": false,
			"find": false,
			"focus": false,
			"FocusEvent": false,
			"FontFace": false,
			"FormData": false,
			"frameElement": false,
			"frames": false,
			"GainNode": false,
			"Gamepad": false,
			"GamepadButton": false,
			"GamepadEvent": false,
			"getComputedStyle": false,
			"getSelection": false,
			"HashChangeEvent": false,
			"Headers": false,
			"history": false,
			"History": false,
			"HTMLAllCollection": false,
			"HTMLAnchorElement": false,
			"HTMLAppletElement": false,
			"HTMLAreaElement": false,
			"HTMLAudioElement": false,
			"HTMLBaseElement": false,
			"HTMLBlockquoteElement": false,
			"HTMLBodyElement": false,
			"HTMLBRElement": false,
			"HTMLButtonElement": false,
			"HTMLCanvasElement": false,
			"HTMLCollection": false,
			"HTMLContentElement": false,
			"HTMLDataListElement": false,
			"HTMLDetailsElement": false,
			"HTMLDialogElement": false,
			"HTMLDirectoryElement": false,
			"HTMLDivElement": false,
			"HTMLDListElement": false,
			"HTMLDocument": false,
			"HTMLElement": false,
			"HTMLEmbedElement": false,
			"HTMLFieldSetElement": false,
			"HTMLFontElement": false,
			"HTMLFormControlsCollection": false,
			"HTMLFormElement": false,
			"HTMLFrameElement": false,
			"HTMLFrameSetElement": false,
			"HTMLHeadElement": false,
			"HTMLHeadingElement": false,
			"HTMLHRElement": false,
			"HTMLHtmlElement": false,
			"HTMLIFrameElement": false,
			"HTMLImageElement": false,
			"HTMLInputElement": false,
			"HTMLIsIndexElement": false,
			"HTMLKeygenElement": false,
			"HTMLLabelElement": false,
			"HTMLLayerElement": false,
			"HTMLLegendElement": false,
			"HTMLLIElement": false,
			"HTMLLinkElement": false,
			"HTMLMapElement": false,
			"HTMLMarqueeElement": false,
			"HTMLMediaElement": false,
			"HTMLMenuElement": false,
			"HTMLMetaElement": false,
			"HTMLMeterElement": false,
			"HTMLModElement": false,
			"HTMLObjectElement": false,
			"HTMLOListElement": false,
			"HTMLOptGroupElement": false,
			"HTMLOptionElement": false,
			"HTMLOptionsCollection": false,
			"HTMLOutputElement": false,
			"HTMLParagraphElement": false,
			"HTMLParamElement": false,
			"HTMLPictureElement": false,
			"HTMLPreElement": false,
			"HTMLProgressElement": false,
			"HTMLQuoteElement": false,
			"HTMLScriptElement": false,
			"HTMLSelectElement": false,
			"HTMLShadowElement": false,
			"HTMLSourceElement": false,
			"HTMLSpanElement": false,
			"HTMLStyleElement": false,
			"HTMLTableCaptionElement": false,
			"HTMLTableCellElement": false,
			"HTMLTableColElement": false,
			"HTMLTableElement": false,
			"HTMLTableRowElement": false,
			"HTMLTableSectionElement": false,
			"HTMLTemplateElement": false,
			"HTMLTextAreaElement": false,
			"HTMLTitleElement": false,
			"HTMLTrackElement": false,
			"HTMLUListElement": false,
			"HTMLUnknownElement": false,
			"HTMLVideoElement": false,
			"IDBCursor": false,
			"IDBCursorWithValue": false,
			"IDBDatabase": false,
			"IDBEnvironment": false,
			"IDBFactory": false,
			"IDBIndex": false,
			"IDBKeyRange": false,
			"IDBObjectStore": false,
			"IDBOpenDBRequest": false,
			"IDBRequest": false,
			"IDBTransaction": false,
			"IDBVersionChangeEvent": false,
			"Image": false,
			"ImageBitmap": false,
			"ImageData": false,
			"indexedDB": false,
			"innerHeight": false,
			"innerWidth": false,
			"InputEvent": false,
			"InputMethodContext": false,
			"Intl": false,
			"KeyboardEvent": false,
			"length": false,
			"localStorage": false,
			"location": false,
			"Location": false,
			"locationbar": false,
			"matchMedia": false,
			"MediaElementAudioSourceNode": false,
			"MediaEncryptedEvent": false,
			"MediaError": false,
			"MediaKeyError": false,
			"MediaKeyEvent": false,
			"MediaKeyMessageEvent": false,
			"MediaKeys": false,
			"MediaKeySession": false,
			"MediaKeyStatusMap": false,
			"MediaKeySystemAccess": false,
			"MediaList": false,
			"MediaQueryList": false,
			"MediaQueryListEvent": false,
			"MediaSource": false,
			"MediaStreamAudioDestinationNode": false,
			"MediaStreamAudioSourceNode": false,
			"MediaStreamEvent": false,
			"MediaStreamTrack": false,
			"menubar": false,
			"MessageChannel": false,
			"MessageEvent": false,
			"MessagePort": false,
			"MIDIAccess": false,
			"MIDIConnectionEvent": false,
			"MIDIInput": false,
			"MIDIInputMap": false,
			"MIDIMessageEvent": false,
			"MIDIOutput": false,
			"MIDIOutputMap": false,
			"MIDIPort": false,
			"MimeType": false,
			"MimeTypeArray": false,
			"MouseEvent": false,
			"moveBy": false,
			"moveTo": false,
			"MutationEvent": false,
			"MutationObserver": false,
			"MutationRecord": false,
			"name": false,
			"NamedNodeMap": false,
			"navigator": false,
			"Navigator": false,
			"Node": false,
			"NodeFilter": false,
			"NodeIterator": false,
			"NodeList": false,
			"Notification": false,
			"OfflineAudioCompletionEvent": false,
			"OfflineAudioContext": false,
			"offscreenBuffering": false,
			"onbeforeunload": true,
			"onblur": true,
			"onerror": true,
			"onfocus": true,
			"onload": true,
			"onresize": true,
			"onunload": true,
			"open": false,
			"openDatabase": false,
			"opener": false,
			"opera": false,
			"Option": false,
			"OscillatorNode": false,
			"outerHeight": false,
			"outerWidth": false,
			"PageTransitionEvent": false,
			"pageXOffset": false,
			"pageYOffset": false,
			"parent": false,
			"Path2D": false,
			"performance": false,
			"Performance": false,
			"PerformanceEntry": false,
			"PerformanceMark": false,
			"PerformanceMeasure": false,
			"PerformanceNavigation": false,
			"PerformanceResourceTiming": false,
			"PerformanceTiming": false,
			"PeriodicWave": false,
			"Permissions": false,
			"PermissionStatus": false,
			"personalbar": false,
			"Plugin": false,
			"PluginArray": false,
			"PopStateEvent": false,
			"postMessage": false,
			"print": false,
			"ProcessingInstruction": false,
			"ProgressEvent": false,
			"prompt": false,
			"PushManager": false,
			"PushSubscription": false,
			"RadioNodeList": false,
			"Range": false,
			"ReadableByteStream": false,
			"ReadableStream": false,
			"removeEventListener": false,
			"Request": false,
			"requestAnimationFrame": false,
			"resizeBy": false,
			"resizeTo": false,
			"Response": false,
			"RTCIceCandidate": false,
			"RTCSessionDescription": false,
			"screen": false,
			"Screen": false,
			"screenLeft": false,
			"ScreenOrientation": false,
			"screenTop": false,
			"screenX": false,
			"screenY": false,
			"ScriptProcessorNode": false,
			"scroll": false,
			"scrollbars": false,
			"scrollBy": false,
			"scrollTo": false,
			"scrollX": false,
			"scrollY": false,
			"SecurityPolicyViolationEvent": false,
			"Selection": false,
			"self": false,
			"ServiceWorker": false,
			"ServiceWorkerContainer": false,
			"ServiceWorkerRegistration": false,
			"sessionStorage": false,
			"setInterval": false,
			"setTimeout": false,
			"ShadowRoot": false,
			"SharedWorker": false,
			"showModalDialog": false,
			"speechSynthesis": false,
			"SpeechSynthesisEvent": false,
			"SpeechSynthesisUtterance": false,
			"status": false,
			"statusbar": false,
			"stop": false,
			"Storage": false,
			"StorageEvent": false,
			"styleMedia": false,
			"StyleSheet": false,
			"StyleSheetList": false,
			"SubtleCrypto": false,
			"SVGAElement": false,
			"SVGAltGlyphDefElement": false,
			"SVGAltGlyphElement": false,
			"SVGAltGlyphItemElement": false,
			"SVGAngle": false,
			"SVGAnimateColorElement": false,
			"SVGAnimatedAngle": false,
			"SVGAnimatedBoolean": false,
			"SVGAnimatedEnumeration": false,
			"SVGAnimatedInteger": false,
			"SVGAnimatedLength": false,
			"SVGAnimatedLengthList": false,
			"SVGAnimatedNumber": false,
			"SVGAnimatedNumberList": false,
			"SVGAnimatedPathData": false,
			"SVGAnimatedPoints": false,
			"SVGAnimatedPreserveAspectRatio": false,
			"SVGAnimatedRect": false,
			"SVGAnimatedString": false,
			"SVGAnimatedTransformList": false,
			"SVGAnimateElement": false,
			"SVGAnimateMotionElement": false,
			"SVGAnimateTransformElement": false,
			"SVGAnimationElement": false,
			"SVGCircleElement": false,
			"SVGClipPathElement": false,
			"SVGColor": false,
			"SVGColorProfileElement": false,
			"SVGColorProfileRule": false,
			"SVGComponentTransferFunctionElement": false,
			"SVGCSSRule": false,
			"SVGCursorElement": false,
			"SVGDefsElement": false,
			"SVGDescElement": false,
			"SVGDiscardElement": false,
			"SVGDocument": false,
			"SVGElement": false,
			"SVGElementInstance": false,
			"SVGElementInstanceList": false,
			"SVGEllipseElement": false,
			"SVGEvent": false,
			"SVGExternalResourcesRequired": false,
			"SVGFEBlendElement": false,
			"SVGFEColorMatrixElement": false,
			"SVGFEComponentTransferElement": false,
			"SVGFECompositeElement": false,
			"SVGFEConvolveMatrixElement": false,
			"SVGFEDiffuseLightingElement": false,
			"SVGFEDisplacementMapElement": false,
			"SVGFEDistantLightElement": false,
			"SVGFEDropShadowElement": false,
			"SVGFEFloodElement": false,
			"SVGFEFuncAElement": false,
			"SVGFEFuncBElement": false,
			"SVGFEFuncGElement": false,
			"SVGFEFuncRElement": false,
			"SVGFEGaussianBlurElement": false,
			"SVGFEImageElement": false,
			"SVGFEMergeElement": false,
			"SVGFEMergeNodeElement": false,
			"SVGFEMorphologyElement": false,
			"SVGFEOffsetElement": false,
			"SVGFEPointLightElement": false,
			"SVGFESpecularLightingElement": false,
			"SVGFESpotLightElement": false,
			"SVGFETileElement": false,
			"SVGFETurbulenceElement": false,
			"SVGFilterElement": false,
			"SVGFilterPrimitiveStandardAttributes": false,
			"SVGFitToViewBox": false,
			"SVGFontElement": false,
			"SVGFontFaceElement": false,
			"SVGFontFaceFormatElement": false,
			"SVGFontFaceNameElement": false,
			"SVGFontFaceSrcElement": false,
			"SVGFontFaceUriElement": false,
			"SVGForeignObjectElement": false,
			"SVGGElement": false,
			"SVGGeometryElement": false,
			"SVGGlyphElement": false,
			"SVGGlyphRefElement": false,
			"SVGGradientElement": false,
			"SVGGraphicsElement": false,
			"SVGHKernElement": false,
			"SVGICCColor": false,
			"SVGImageElement": false,
			"SVGLangSpace": false,
			"SVGLength": false,
			"SVGLengthList": false,
			"SVGLinearGradientElement": false,
			"SVGLineElement": false,
			"SVGLocatable": false,
			"SVGMarkerElement": false,
			"SVGMaskElement": false,
			"SVGMatrix": false,
			"SVGMetadataElement": false,
			"SVGMissingGlyphElement": false,
			"SVGMPathElement": false,
			"SVGNumber": false,
			"SVGNumberList": false,
			"SVGPaint": false,
			"SVGPathElement": false,
			"SVGPathSeg": false,
			"SVGPathSegArcAbs": false,
			"SVGPathSegArcRel": false,
			"SVGPathSegClosePath": false,
			"SVGPathSegCurvetoCubicAbs": false,
			"SVGPathSegCurvetoCubicRel": false,
			"SVGPathSegCurvetoCubicSmoothAbs": false,
			"SVGPathSegCurvetoCubicSmoothRel": false,
			"SVGPathSegCurvetoQuadraticAbs": false,
			"SVGPathSegCurvetoQuadraticRel": false,
			"SVGPathSegCurvetoQuadraticSmoothAbs": false,
			"SVGPathSegCurvetoQuadraticSmoothRel": false,
			"SVGPathSegLinetoAbs": false,
			"SVGPathSegLinetoHorizontalAbs": false,
			"SVGPathSegLinetoHorizontalRel": false,
			"SVGPathSegLinetoRel": false,
			"SVGPathSegLinetoVerticalAbs": false,
			"SVGPathSegLinetoVerticalRel": false,
			"SVGPathSegList": false,
			"SVGPathSegMovetoAbs": false,
			"SVGPathSegMovetoRel": false,
			"SVGPatternElement": false,
			"SVGPoint": false,
			"SVGPointList": false,
			"SVGPolygonElement": false,
			"SVGPolylineElement": false,
			"SVGPreserveAspectRatio": false,
			"SVGRadialGradientElement": false,
			"SVGRect": false,
			"SVGRectElement": false,
			"SVGRenderingIntent": false,
			"SVGScriptElement": false,
			"SVGSetElement": false,
			"SVGStopElement": false,
			"SVGStringList": false,
			"SVGStylable": false,
			"SVGStyleElement": false,
			"SVGSVGElement": false,
			"SVGSwitchElement": false,
			"SVGSymbolElement": false,
			"SVGTests": false,
			"SVGTextContentElement": false,
			"SVGTextElement": false,
			"SVGTextPathElement": false,
			"SVGTextPositioningElement": false,
			"SVGTitleElement": false,
			"SVGTransform": false,
			"SVGTransformable": false,
			"SVGTransformList": false,
			"SVGTRefElement": false,
			"SVGTSpanElement": false,
			"SVGUnitTypes": false,
			"SVGURIReference": false,
			"SVGUseElement": false,
			"SVGViewElement": false,
			"SVGViewSpec": false,
			"SVGVKernElement": false,
			"SVGZoomAndPan": false,
			"SVGZoomEvent": false,
			"Text": false,
			"TextDecoder": false,
			"TextEncoder": false,
			"TextEvent": false,
			"TextMetrics": false,
			"TextTrack": false,
			"TextTrackCue": false,
			"TextTrackCueList": false,
			"TextTrackList": false,
			"TimeEvent": false,
			"TimeRanges": false,
			"toolbar": false,
			"top": false,
			"Touch": false,
			"TouchEvent": false,
			"TouchList": false,
			"TrackEvent": false,
			"TransitionEvent": false,
			"TreeWalker": false,
			"UIEvent": false,
			"URL": false,
			"ValidityState": false,
			"VTTCue": false,
			"WaveShaperNode": false,
			"WebGLActiveInfo": false,
			"WebGLBuffer": false,
			"WebGLContextEvent": false,
			"WebGLFramebuffer": false,
			"WebGLProgram": false,
			"WebGLRenderbuffer": false,
			"WebGLRenderingContext": false,
			"WebGLShader": false,
			"WebGLShaderPrecisionFormat": false,
			"WebGLTexture": false,
			"WebGLUniformLocation": false,
			"WebSocket": false,
			"WheelEvent": false,
			"window": false,
			"Window": false,
			"Worker": false,
			"XDomainRequest": false,
			"XMLDocument": false,
			"XMLHttpRequest": false,
			"XMLHttpRequestEventTarget": false,
			"XMLHttpRequestProgressEvent": false,
			"XMLHttpRequestUpload": false,
			"XMLSerializer": false,
			"XPathEvaluator": false,
			"XPathException": false,
			"XPathExpression": false,
			"XPathNamespace": false,
			"XPathNSResolver": false,
			"XPathResult": false,
			"XSLTProcessor": false
		},
		"worker": {
			"applicationCache": false,
			"atob": false,
			"Blob": false,
			"BroadcastChannel": false,
			"btoa": false,
			"Cache": false,
			"caches": false,
			"clearInterval": false,
			"clearTimeout": false,
			"close": true,
			"console": false,
			"fetch": false,
			"FileReaderSync": false,
			"FormData": false,
			"Headers": false,
			"IDBCursor": false,
			"IDBCursorWithValue": false,
			"IDBDatabase": false,
			"IDBFactory": false,
			"IDBIndex": false,
			"IDBKeyRange": false,
			"IDBObjectStore": false,
			"IDBOpenDBRequest": false,
			"IDBRequest": false,
			"IDBTransaction": false,
			"IDBVersionChangeEvent": false,
			"ImageData": false,
			"importScripts": true,
			"indexedDB": false,
			"location": false,
			"MessageChannel": false,
			"MessagePort": false,
			"name": false,
			"navigator": false,
			"Notification": false,
			"onclose": true,
			"onconnect": true,
			"onerror": true,
			"onlanguagechange": true,
			"onmessage": true,
			"onoffline": true,
			"ononline": true,
			"onrejectionhandled": true,
			"onunhandledrejection": true,
			"performance": false,
			"Performance": false,
			"PerformanceEntry": false,
			"PerformanceMark": false,
			"PerformanceMeasure": false,
			"PerformanceNavigation": false,
			"PerformanceResourceTiming": false,
			"PerformanceTiming": false,
			"postMessage": true,
			"Promise": false,
			"Request": false,
			"Response": false,
			"self": true,
			"ServiceWorkerRegistration": false,
			"setInterval": false,
			"setTimeout": false,
			"TextDecoder": false,
			"TextEncoder": false,
			"URL": false,
			"WebSocket": false,
			"Worker": false,
			"XMLHttpRequest": false
		},
		"node": {
			"__dirname": false,
			"__filename": false,
			"arguments": false,
			"Buffer": false,
			"clearImmediate": false,
			"clearInterval": false,
			"clearTimeout": false,
			"console": false,
			"exports": true,
			"GLOBAL": false,
			"global": false,
			"module": false,
			"process": false,
			"require": false,
			"root": false,
			"setImmediate": false,
			"setInterval": false,
			"setTimeout": false
		},
		"commonjs": {
			"exports": true,
			"module": false,
			"require": false,
			"global": false
		},
		"amd": {
			"define": false,
			"require": false
		},
		"mocha": {
			"after": false,
			"afterEach": false,
			"before": false,
			"beforeEach": false,
			"context": false,
			"describe": false,
			"it": false,
			"mocha": false,
			"setup": false,
			"specify": false,
			"suite": false,
			"suiteSetup": false,
			"suiteTeardown": false,
			"teardown": false,
			"test": false,
			"xcontext": false,
			"xdescribe": false,
			"xit": false,
			"xspecify": false
		},
		"jasmine": {
			"afterAll": false,
			"afterEach": false,
			"beforeAll": false,
			"beforeEach": false,
			"describe": false,
			"expect": false,
			"fail": false,
			"fdescribe": false,
			"fit": false,
			"it": false,
			"jasmine": false,
			"pending": false,
			"runs": false,
			"spyOn": false,
			"waits": false,
			"waitsFor": false,
			"xdescribe": false,
			"xit": false
		},
		"jest": {
			"afterEach": false,
			"beforeEach": false,
			"describe": false,
			"expect": false,
			"it": false,
			"jest": false,
			"pit": false,
			"require": false,
			"xdescribe": false,
			"xit": false
		},
		"qunit": {
			"asyncTest": false,
			"deepEqual": false,
			"equal": false,
			"expect": false,
			"module": false,
			"notDeepEqual": false,
			"notEqual": false,
			"notOk": false,
			"notPropEqual": false,
			"notStrictEqual": false,
			"ok": false,
			"propEqual": false,
			"QUnit": false,
			"raises": false,
			"start": false,
			"stop": false,
			"strictEqual": false,
			"test": false,
			"throws": false
		},
		"phantomjs": {
			"console": true,
			"exports": true,
			"phantom": true,
			"require": true,
			"WebPage": true
		},
		"couch": {
			"emit": false,
			"exports": false,
			"getRow": false,
			"log": false,
			"module": false,
			"provides": false,
			"require": false,
			"respond": false,
			"send": false,
			"start": false,
			"sum": false
		},
		"rhino": {
			"defineClass": false,
			"deserialize": false,
			"gc": false,
			"help": false,
			"importClass": false,
			"importPackage": false,
			"java": false,
			"load": false,
			"loadClass": false,
			"Packages": false,
			"print": false,
			"quit": false,
			"readFile": false,
			"readUrl": false,
			"runCommand": false,
			"seal": false,
			"serialize": false,
			"spawn": false,
			"sync": false,
			"toint32": false,
			"version": false
		},
		"nashorn": {
			"__DIR__": false,
			"__FILE__": false,
			"__LINE__": false,
			"com": false,
			"edu": false,
			"exit": false,
			"Java": false,
			"java": false,
			"javafx": false,
			"JavaImporter": false,
			"javax": false,
			"JSAdapter": false,
			"load": false,
			"loadWithNewGlobal": false,
			"org": false,
			"Packages": false,
			"print": false,
			"quit": false
		},
		"wsh": {
			"ActiveXObject": true,
			"Enumerator": true,
			"GetObject": true,
			"ScriptEngine": true,
			"ScriptEngineBuildVersion": true,
			"ScriptEngineMajorVersion": true,
			"ScriptEngineMinorVersion": true,
			"VBArray": true,
			"WScript": true,
			"WSH": true,
			"XDomainRequest": true
		},
		"jquery": {
			"$": false,
			"jQuery": false
		},
		"yui": {
			"Y": false,
			"YUI": false,
			"YUI_config": false
		},
		"shelljs": {
			"cat": false,
			"cd": false,
			"chmod": false,
			"config": false,
			"cp": false,
			"dirs": false,
			"echo": false,
			"env": false,
			"error": false,
			"exec": false,
			"exit": false,
			"find": false,
			"grep": false,
			"ls": false,
			"ln": false,
			"mkdir": false,
			"mv": false,
			"popd": false,
			"pushd": false,
			"pwd": false,
			"rm": false,
			"sed": false,
			"target": false,
			"tempdir": false,
			"test": false,
			"which": false
		},
		"prototypejs": {
			"$": false,
			"$$": false,
			"$A": false,
			"$break": false,
			"$continue": false,
			"$F": false,
			"$H": false,
			"$R": false,
			"$w": false,
			"Abstract": false,
			"Ajax": false,
			"Autocompleter": false,
			"Builder": false,
			"Class": false,
			"Control": false,
			"Draggable": false,
			"Draggables": false,
			"Droppables": false,
			"Effect": false,
			"Element": false,
			"Enumerable": false,
			"Event": false,
			"Field": false,
			"Form": false,
			"Hash": false,
			"Insertion": false,
			"ObjectRange": false,
			"PeriodicalExecuter": false,
			"Position": false,
			"Prototype": false,
			"Scriptaculous": false,
			"Selector": false,
			"Sortable": false,
			"SortableObserver": false,
			"Sound": false,
			"Template": false,
			"Toggle": false,
			"Try": false
		},
		"meteor": {
			"$": false,
			"_": false,
			"Accounts": false,
			"App": false,
			"Assets": false,
			"Blaze": false,
			"check": false,
			"Cordova": false,
			"DDP": false,
			"DDPServer": false,
			"Deps": false,
			"EJSON": false,
			"Email": false,
			"HTTP": false,
			"Log": false,
			"Match": false,
			"Meteor": false,
			"Mongo": false,
			"MongoInternals": false,
			"Npm": false,
			"Package": false,
			"Plugin": false,
			"process": false,
			"Random": false,
			"ReactiveDict": false,
			"ReactiveVar": false,
			"Router": false,
			"Session": false,
			"share": false,
			"Spacebars": false,
			"Template": false,
			"Tinytest": false,
			"Tracker": false,
			"UI": false,
			"Utils": false,
			"WebApp": false,
			"WebAppInternals": false
		},
		"mongo": {
			"_isWindows": false,
			"_rand": false,
			"BulkWriteResult": false,
			"cat": false,
			"cd": false,
			"connect": false,
			"db": false,
			"getHostName": false,
			"getMemInfo": false,
			"hostname": false,
			"listFiles": false,
			"load": false,
			"ls": false,
			"md5sumFile": false,
			"mkdir": false,
			"Mongo": false,
			"ObjectId": false,
			"PlanCache": false,
			"print": false,
			"printjson": false,
			"pwd": false,
			"quit": false,
			"removeFile": false,
			"rs": false,
			"sh": false,
			"UUID": false,
			"version": false,
			"WriteResult": false
		},
		"applescript": {
			"$": false,
			"Application": false,
			"Automation": false,
			"console": false,
			"delay": false,
			"Library": false,
			"ObjC": false,
			"ObjectSpecifier": false,
			"Path": false,
			"Progress": false,
			"Ref": false
		},
		"serviceworker": {
			"caches": false,
			"Cache": false,
			"CacheStorage": false,
			"Client": false,
			"clients": false,
			"Clients": false,
			"ExtendableEvent": false,
			"ExtendableMessageEvent": false,
			"FetchEvent": false,
			"importScripts": false,
			"registration": false,
			"self": false,
			"ServiceWorker": false,
			"ServiceWorkerContainer": false,
			"ServiceWorkerGlobalScope": false,
			"ServiceWorkerMessageEvent": false,
			"ServiceWorkerRegistration": false,
			"skipWaiting": false,
			"WindowClient": false
		},
		"atomtest": {
			"advanceClock": false,
			"fakeClearInterval": false,
			"fakeClearTimeout": false,
			"fakeSetInterval": false,
			"fakeSetTimeout": false,
			"resetTimeouts": false,
			"waitsForPromise": false
		},
		"embertest": {
			"andThen": false,
			"click": false,
			"currentPath": false,
			"currentRouteName": false,
			"currentURL": false,
			"fillIn": false,
			"find": false,
			"findWithAssert": false,
			"keyEvent": false,
			"pauseTest": false,
			"triggerEvent": false,
			"visit": false
		},
		"protractor": {
			"$": false,
			"$$": false,
			"browser": false,
			"By": false,
			"by": false,
			"DartObject": false,
			"element": false,
			"protractor": false
		},
		"shared-node-browser": {
			"clearInterval": false,
			"clearTimeout": false,
			"console": false,
			"setInterval": false,
			"setTimeout": false
		},
		"webextensions": {
			"browser": false,
			"chrome": false,
			"opr": false
		},
		"greasemonkey": {
			"GM_addStyle": false,
			"GM_deleteValue": false,
			"GM_getResourceText": false,
			"GM_getResourceURL": false,
			"GM_getValue": false,
			"GM_info": false,
			"GM_listValues": false,
			"GM_log": false,
			"GM_openInTab": false,
			"GM_registerMenuCommand": false,
			"GM_setClipboard": false,
			"GM_setValue": false,
			"GM_xmlhttpRequest": false,
			"unsafeWindow": false
		}
	};

/***/ },

/***/ "./node_modules/babel-traverse/lib/cache.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function clear(){exports.path=path=new _weakMap2["default"],exports.scope=scope=new _weakMap2["default"]}exports.__esModule=!0,exports.scope=exports.path=void 0;var _weakMap=__webpack_require__("./node_modules/babel-runtime/core-js/weak-map.js"),_weakMap2=_interopRequireDefault(_weakMap);exports.clear=clear;var path=exports.path=new _weakMap2["default"],scope=exports.scope=new _weakMap2["default"];

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/ancestry.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function findParent(e){for(var t=this;t=t.parentPath;)if(e(t))return t;return null}function find(e){var t=this;do if(e(t))return t;while(t=t.parentPath);return null}function getFunctionParent(){return this.findParent(function(e){return e.isFunction()||e.isProgram()})}function getStatementParent(){var e=this;do if(Array.isArray(e.container))return e;while(e=e.parentPath)}function getEarliestCommonAncestorFrom(e){return this.getDeepestCommonAncestorFrom(e,function(e,r,n){for(var i=void 0,o=t.VISITOR_KEYS[e.type],a=n,u=Array.isArray(a),s=0,a=u?a:(0,_getIterator3["default"])(a);;){var f;if(u){if(s>=a.length)break;f=a[s++]}else{if(s=a.next(),s.done)break;f=s.value}var l=f,d=l[r+1];if(i)if(d.listKey&&i.listKey===d.listKey&&d.key<i.key)i=d;else{var c=o.indexOf(i.parentKey),p=o.indexOf(d.parentKey);c>p&&(i=d)}else i=d}return i})}function getDeepestCommonAncestorFrom(e,t){var r=this;if(!e.length)return this;if(1===e.length)return e[0];var n=1/0,i=void 0,o=void 0,a=e.map(function(e){var t=[];do t.unshift(e);while((e=e.parentPath)&&e!==r);return t.length<n&&(n=t.length),t}),u=a[0];e:for(var s=0;s<n;s++){for(var f=u[s],l=a,d=Array.isArray(l),c=0,l=d?l:(0,_getIterator3["default"])(l);;){var p;if(d){if(c>=l.length)break;p=l[c++]}else{if(c=l.next(),c.done)break;p=c.value}var h=p;if(h[s]!==f)break e}i=s,o=f}if(o)return t?t(o,i,a):o;throw new Error("Couldn't find intersection")}function getAncestry(){var e=this,t=[];do t.push(e);while(e=e.parentPath);return t}function inType(){for(var e=this;e;){for(var t=arguments,r=Array.isArray(t),n=0,t=r?t:(0,_getIterator3["default"])(t);;){var i;if(r){if(n>=t.length)break;i=t[n++]}else{if(n=t.next(),n.done)break;i=n.value}var o=i;if(e.node.type===o)return!0}e=e.parentPath}return!1}function inShadow(e){var t=this.isFunction()?this:this.findParent(function(e){return e.isFunction()});if(t){if(t.isFunctionExpression()||t.isFunctionDeclaration()){var r=t.node.shadow;if(r&&(!e||r[e]!==!1))return t}else if(t.isArrowFunctionExpression())return t;return null}}exports.__esModule=!0;var _getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports.findParent=findParent,exports.find=find,exports.getFunctionParent=getFunctionParent,exports.getStatementParent=getStatementParent,exports.getEarliestCommonAncestorFrom=getEarliestCommonAncestorFrom,exports.getDeepestCommonAncestorFrom=getDeepestCommonAncestorFrom,exports.getAncestry=getAncestry,exports.inType=inType,exports.inShadow=inShadow;var _babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes),_index=__webpack_require__("./node_modules/babel-traverse/lib/path/index.js"),_index2=_interopRequireDefault(_index);

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/inference/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function getTypeAnnotation(){if(this.typeAnnotation)return this.typeAnnotation;var e=this._getTypeAnnotation()||t.anyTypeAnnotation();return t.isTypeAnnotation(e)&&(e=e.typeAnnotation),this.typeAnnotation=e}function _getTypeAnnotation(){var e=this.node;{if(e){if(e.typeAnnotation)return e.typeAnnotation;var n=inferers[e.type];return n?n.call(this,e):(n=inferers[this.parentPath.type],n&&n.validParent?this.parentPath.getTypeAnnotation():void 0)}if("init"===this.key&&this.parentPath.isVariableDeclarator()){var i=this.parentPath.parentPath,r=i.parentPath;return"left"===i.key&&r.isForInStatement()?t.stringTypeAnnotation():"left"===i.key&&r.isForOfStatement()?t.anyTypeAnnotation():t.voidTypeAnnotation()}}}function isBaseType(t,e){return _isBaseType(t,this.getTypeAnnotation(),e)}function _isBaseType(e,n,i){if("string"===e)return t.isStringTypeAnnotation(n);if("number"===e)return t.isNumberTypeAnnotation(n);if("boolean"===e)return t.isBooleanTypeAnnotation(n);if("any"===e)return t.isAnyTypeAnnotation(n);if("mixed"===e)return t.isMixedTypeAnnotation(n);if("void"===e)return t.isVoidTypeAnnotation(n);if(i)return!1;throw new Error("Unknown base type "+e)}function couldBeBaseType(e){var n=this.getTypeAnnotation();if(t.isAnyTypeAnnotation(n))return!0;if(t.isUnionTypeAnnotation(n)){for(var i=n.types,r=Array.isArray(i),o=0,i=r?i:(0,_getIterator3["default"])(i);;){var a;if(r){if(o>=i.length)break;a=i[o++]}else{if(o=i.next(),o.done)break;a=o.value}var s=a;if(t.isAnyTypeAnnotation(s)||_isBaseType(e,s,!0))return!0}return!1}return _isBaseType(e,n,!0)}function baseTypeStrictlyMatches(e){var n=this.getTypeAnnotation();if(e=e.getTypeAnnotation(),!t.isAnyTypeAnnotation(n)&&t.isFlowBaseAnnotation(n))return e.type===n.type}function isGenericType(e){var n=this.getTypeAnnotation();return t.isGenericTypeAnnotation(n)&&t.isIdentifier(n.id,{name:e})}exports.__esModule=!0;var _getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports.getTypeAnnotation=getTypeAnnotation,exports._getTypeAnnotation=_getTypeAnnotation,exports.isBaseType=isBaseType,exports.couldBeBaseType=couldBeBaseType,exports.baseTypeStrictlyMatches=baseTypeStrictlyMatches,exports.isGenericType=isGenericType;var _inferers=__webpack_require__("./node_modules/babel-traverse/lib/path/inference/inferers.js"),inferers=_interopRequireWildcard(_inferers),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes);

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/inference/inferers.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n["default"]=e,n}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function VariableDeclarator(){var e=this.get("id");return e.isIdentifier()?this.get("init").getTypeAnnotation():void 0}function TypeCastExpression(e){return e.typeAnnotation}function NewExpression(e){if(this.get("callee").isIdentifier())return t.genericTypeAnnotation(e.callee)}function TemplateLiteral(){return t.stringTypeAnnotation()}function UnaryExpression(e){var n=e.operator;return"void"===n?t.voidTypeAnnotation():t.NUMBER_UNARY_OPERATORS.indexOf(n)>=0?t.numberTypeAnnotation():t.STRING_UNARY_OPERATORS.indexOf(n)>=0?t.stringTypeAnnotation():t.BOOLEAN_UNARY_OPERATORS.indexOf(n)>=0?t.booleanTypeAnnotation():void 0}function BinaryExpression(e){var n=e.operator;if(t.NUMBER_BINARY_OPERATORS.indexOf(n)>=0)return t.numberTypeAnnotation();if(t.BOOLEAN_BINARY_OPERATORS.indexOf(n)>=0)return t.booleanTypeAnnotation();if("+"===n){var r=this.get("right"),i=this.get("left");return i.isBaseType("number")&&r.isBaseType("number")?t.numberTypeAnnotation():i.isBaseType("string")||r.isBaseType("string")?t.stringTypeAnnotation():t.unionTypeAnnotation([t.stringTypeAnnotation(),t.numberTypeAnnotation()])}}function LogicalExpression(){return t.createUnionTypeAnnotation([this.get("left").getTypeAnnotation(),this.get("right").getTypeAnnotation()])}function ConditionalExpression(){return t.createUnionTypeAnnotation([this.get("consequent").getTypeAnnotation(),this.get("alternate").getTypeAnnotation()])}function SequenceExpression(){return this.get("expressions").pop().getTypeAnnotation()}function AssignmentExpression(){return this.get("right").getTypeAnnotation()}function UpdateExpression(e){var n=e.operator;if("++"===n||"--"===n)return t.numberTypeAnnotation()}function StringLiteral(){return t.stringTypeAnnotation()}function NumericLiteral(){return t.numberTypeAnnotation()}function BooleanLiteral(){return t.booleanTypeAnnotation()}function NullLiteral(){return t.nullLiteralTypeAnnotation()}function RegExpLiteral(){return t.genericTypeAnnotation(t.identifier("RegExp"))}function ObjectExpression(){return t.genericTypeAnnotation(t.identifier("Object"))}function ArrayExpression(){return t.genericTypeAnnotation(t.identifier("Array"))}function RestElement(){return ArrayExpression()}function Func(){return t.genericTypeAnnotation(t.identifier("Function"))}function CallExpression(){return resolveCall(this.get("callee"))}function TaggedTemplateExpression(){return resolveCall(this.get("tag"))}function resolveCall(e){if(e=e.resolve(),e.isFunction()){if(e.is("async"))return e.is("generator")?t.genericTypeAnnotation(t.identifier("AsyncIterator")):t.genericTypeAnnotation(t.identifier("Promise"));if(e.node.returnType)return e.node.returnType}}exports.__esModule=!0,exports.Class=exports.Function=exports.Identifier=void 0;var _infererReference=__webpack_require__("./node_modules/babel-traverse/lib/path/inference/inferer-reference.js");Object.defineProperty(exports,"Identifier",{enumerable:!0,get:function(){return _interopRequireDefault(_infererReference)["default"]}}),exports.VariableDeclarator=VariableDeclarator,exports.TypeCastExpression=TypeCastExpression,exports.NewExpression=NewExpression,exports.TemplateLiteral=TemplateLiteral,exports.UnaryExpression=UnaryExpression,exports.BinaryExpression=BinaryExpression,exports.LogicalExpression=LogicalExpression,exports.ConditionalExpression=ConditionalExpression,exports.SequenceExpression=SequenceExpression,exports.AssignmentExpression=AssignmentExpression,exports.UpdateExpression=UpdateExpression,exports.StringLiteral=StringLiteral,exports.NumericLiteral=NumericLiteral,exports.BooleanLiteral=BooleanLiteral,exports.NullLiteral=NullLiteral,exports.RegExpLiteral=RegExpLiteral,exports.ObjectExpression=ObjectExpression,exports.ArrayExpression=ArrayExpression,exports.RestElement=RestElement,exports.CallExpression=CallExpression,exports.TaggedTemplateExpression=TaggedTemplateExpression;var _babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes);TypeCastExpression.validParent=!0,RestElement.validParent=!0,exports.Function=Func,exports.Class=Func;

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/inference/inferer-reference.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function getTypeAnnotationBindingConstantViolations(e,n){var i=e.scope.getBinding(n),o=[];e.typeAnnotation=t.unionTypeAnnotation(o);var r=[],a=getConstantViolationsBefore(i,e,r),s=getConditionalAnnotation(e,n);if(s&&!function(){var t=getConstantViolationsBefore(i,s.ifStatement);a=a.filter(function(e){return t.indexOf(e)<0}),o.push(s.typeAnnotation)}(),a.length){a=a.concat(r);for(var f=a,u=Array.isArray(f),l=0,f=u?f:(0,_getIterator3["default"])(f);;){var p;if(u){if(l>=f.length)break;p=f[l++]}else{if(l=f.next(),l.done)break;p=l.value}var d=p;o.push(d.getTypeAnnotation())}}if(o.length)return t.createUnionTypeAnnotation(o)}function getConstantViolationsBefore(t,e,n){var i=t.constantViolations.slice();return i.unshift(t.path),i.filter(function(t){t=t.resolve();var i=t._guessExecutionStatusRelativeTo(e);return n&&"function"===i&&n.push(t),"before"===i})}function inferAnnotationFromBinaryExpression(e,n){var i=n.node.operator,o=n.get("right").resolve(),r=n.get("left").resolve(),a=void 0;if(r.isIdentifier({name:e})?a=o:o.isIdentifier({name:e})&&(a=r),a)return"==="===i?a.getTypeAnnotation():t.BOOLEAN_NUMBER_BINARY_OPERATORS.indexOf(i)>=0?t.numberTypeAnnotation():void 0;if("==="===i){var s=void 0,f=void 0;if(r.isUnaryExpression({operator:"typeof"})?(s=r,f=o):o.isUnaryExpression({operator:"typeof"})&&(s=o,f=r),(f||s)&&(f=f.resolve(),f.isLiteral())){var u=f.node.value;if("string"==typeof u&&s.get("argument").isIdentifier({name:e}))return t.createTypeAnnotationBasedOnTypeof(f.node.value)}}}function getParentConditionalPath(t){for(var e=void 0;e=t.parentPath;){if(e.isIfStatement()||e.isConditionalExpression())return"test"===t.key?void 0:e;t=e}}function getConditionalAnnotation(e,n){var i=getParentConditionalPath(e);if(i){var o=i.get("test"),r=[o],a=[];do{var s=r.shift().resolve();if(s.isLogicalExpression()&&(r.push(s.get("left")),r.push(s.get("right"))),s.isBinaryExpression()){var f=inferAnnotationFromBinaryExpression(n,s);f&&a.push(f)}}while(r.length);return a.length?{typeAnnotation:t.createUnionTypeAnnotation(a),ifStatement:i}:getConditionalAnnotation(i,n)}}exports.__esModule=!0;var _getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports["default"]=function(e){if(this.isReferenced()){var n=this.scope.getBinding(e.name);return n?n.identifier.typeAnnotation?n.identifier.typeAnnotation:getTypeAnnotationBindingConstantViolations(this,e.name):"undefined"===e.name?t.voidTypeAnnotation():"NaN"===e.name||"Infinity"===e.name?t.numberTypeAnnotation():void("arguments"===e.name)}};var _babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes);module.exports=exports["default"];

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/replacement.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function replaceWithMultiple(e){this.resync(),e=this._verifyNodeList(e),t.inheritLeadingComments(e[0],this.node),t.inheritTrailingComments(e[e.length-1],this.node),this.node=this.container[this.key]=null,this.insertAfter(e),this.node?this.requeue():this.remove()}function replaceWithSourceString(e){this.resync();try{e="("+e+")",e=(0,_babylon.parse)(e)}catch(t){var r=t.loc;throw r&&(t.message+=" - make sure this is an expression.",t.message+="\n"+(0,_babelCodeFrame2["default"])(e,r.line,r.column+1)),t}return e=e.program.body[0].expression,_index2["default"].removeProperties(e),this.replaceWith(e)}function replaceWith(e){if(this.resync(),this.removed)throw new Error("You can't replace this node, we've already removed it");if(e instanceof _index4["default"]&&(e=e.node),!e)throw new Error("You passed `path.replaceWith()` a falsy node, use `path.remove()` instead");if(this.node!==e){if(this.isProgram()&&!t.isProgram(e))throw new Error("You can only replace a Program root node with another Program node");if(Array.isArray(e))throw new Error("Don't use `path.replaceWith()` with an array of nodes, use `path.replaceWithMultiple()`");if("string"==typeof e)throw new Error("Don't use `path.replaceWith()` with a source string, use `path.replaceWithSourceString()`");if(this.isNodeType("Statement")&&t.isExpression(e)&&(this.canHaveVariableDeclarationOrExpression()||this.canSwapBetweenExpressionAndStatement(e)||(e=t.expressionStatement(e))),this.isNodeType("Expression")&&t.isStatement(e)&&!this.canHaveVariableDeclarationOrExpression()&&!this.canSwapBetweenExpressionAndStatement(e))return this.replaceExpressionWithStatements([e]);var r=this.node;r&&(t.inheritsComments(e,r),t.removeComments(r)),this._replaceWith(e),this.type=e.type,this.setScope(),this.requeue()}}function _replaceWith(e){if(!this.container)throw new ReferenceError("Container is falsy");this.inList?t.validate(this.parent,this.key,[e]):t.validate(this.parent,this.key,e),this.debug(function(){return"Replace with "+(e&&e.type)}),this.node=this.container[this.key]=e}function replaceExpressionWithStatements(e){this.resync();var r=t.toSequenceExpression(e,this.scope);if(t.isSequenceExpression(r)){var i=r.expressions;i.length>=2&&this.parentPath.isExpressionStatement()&&this._maybePopFromStatements(i),1===i.length?this.replaceWith(i[0]):this.replaceWith(r)}else{if(!r){var n=t.functionExpression(null,[],t.blockStatement(e));n.shadow=!0,this.replaceWith(t.callExpression(n,[])),this.traverse(hoistVariablesVisitor);for(var a=this.get("callee").getCompletionRecords(),s=a,o=Array.isArray(s),l=0,s=o?s:(0,_getIterator3["default"])(s);;){var h;if(o){if(l>=s.length)break;h=s[l++]}else{if(l=s.next(),l.done)break;h=l.value}var p=h;if(p.isExpressionStatement()){var c=p.findParent(function(e){return e.isLoop()});if(c){var u=this.get("callee"),d=u.scope.generateDeclaredUidIdentifier("ret");u.get("body").pushContainer("body",t.returnStatement(d)),p.get("expression").replaceWith(t.assignmentExpression("=",d,p.node.expression))}else p.replaceWith(t.returnStatement(p.node.expression))}}return this.node}this.replaceWith(r)}}function replaceInline(e){return this.resync(),Array.isArray(e)?Array.isArray(this.container)?(e=this._verifyNodeList(e),this._containerInsertAfter(e),this.remove()):this.replaceWithMultiple(e):this.replaceWith(e)}exports.__esModule=!0;var _getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports.replaceWithMultiple=replaceWithMultiple,exports.replaceWithSourceString=replaceWithSourceString,exports.replaceWith=replaceWith,exports._replaceWith=_replaceWith,exports.replaceExpressionWithStatements=replaceExpressionWithStatements,exports.replaceInline=replaceInline;var _babelCodeFrame=__webpack_require__("./node_modules/babel-code-frame/lib/index.js"),_babelCodeFrame2=_interopRequireDefault(_babelCodeFrame),_index=__webpack_require__("./node_modules/babel-traverse/lib/index.js"),_index2=_interopRequireDefault(_index),_index3=__webpack_require__("./node_modules/babel-traverse/lib/path/index.js"),_index4=_interopRequireDefault(_index3),_babylon=__webpack_require__("./node_modules/babylon/lib/index.js"),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes),hoistVariablesVisitor={Function:function(e){e.skip()},VariableDeclaration:function(e){if("var"===e.node.kind){var r=e.getBindingIdentifiers();for(var i in r)e.scope.push({id:r[i]});for(var n=[],a=e.node.declarations,s=Array.isArray(a),o=0,a=s?a:(0,_getIterator3["default"])(a);;){var l;if(s){if(o>=a.length)break;l=a[o++]}else{if(o=a.next(),o.done)break;l=o.value}var h=l;h.init&&n.push(t.expressionStatement(t.assignmentExpression("=",h.id,h.init)))}e.replaceWithMultiple(n)}}};

/***/ },

/***/ "./node_modules/babel-code-frame/lib/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function getTokenType(e){var t=_jsTokens2["default"].matchToToken(e);if("name"===t.type&&_esutils2["default"].keyword.isReservedWordES6(t.value))return"keyword";if("punctuator"===t.type)switch(t.value){case"{":case"}":return"curly";case"(":case")":return"parens";case"[":case"]":return"square"}return t.type}function highlight(e){return e.replace(_jsTokens2["default"],function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=getTokenType(t),l=defs[a];return l?t[0].split(NEWLINE).map(function(e){return l(e)}).join("\n"):t[0]})}exports.__esModule=!0,exports["default"]=function(e,t,r){var a=arguments.length<=3||void 0===arguments[3]?{}:arguments[3];r=Math.max(r,0);var l=a.highlightCode&&_chalk2["default"].supportsColor;l&&(e=highlight(e));var u=e.split(NEWLINE),n=Math.max(t-3,0),s=Math.min(u.length,t+3);t||r||(n=0,s=u.length);var i=String(s).length,o=u.slice(n,s).map(function(e,a){var l=n+1+a,u=(" "+l).slice(-i),s=" "+u+" | ";if(l===t){var o="";if(r){var c=e.slice(0,r-1).replace(/[^\t]/g," ");o="\n "+s.replace(/\d/g," ")+c+"^"}return">"+s+e+o}return" "+s+e}).join("\n");return l?_chalk2["default"].reset(o):o};var _jsTokens=__webpack_require__("./node_modules/js-tokens/index.js"),_jsTokens2=_interopRequireDefault(_jsTokens),_esutils=__webpack_require__("./node_modules/esutils/lib/utils.js"),_esutils2=_interopRequireDefault(_esutils),_chalk=__webpack_require__("./node_modules/chalk/index.js"),_chalk2=_interopRequireDefault(_chalk),defs={string:_chalk2["default"].red,punctuator:_chalk2["default"].bold,curly:_chalk2["default"].green,parens:_chalk2["default"].blue.bold,square:_chalk2["default"].yellow,keyword:_chalk2["default"].cyan,number:_chalk2["default"].magenta,regex:_chalk2["default"].magenta,comment:_chalk2["default"].grey,invalid:_chalk2["default"].inverse},NEWLINE=/\r\n|[\n\r\u2028\u2029]/;module.exports=exports["default"];

/***/ },

/***/ "./node_modules/js-tokens/index.js":
/***/ function(module, exports) {

	module.exports=/((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyu]{1,5}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]{1,6}\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g,module.exports.matchToToken=function(e){var t={type:"invalid",value:e[0]};return e[1]?(t.type="string",t.closed=!(!e[3]&&!e[4])):e[5]?t.type="comment":e[6]?(t.type="comment",t.closed=!!e[7]):e[8]?t.type="regex":e[9]?t.type="number":e[10]?t.type="name":e[11]?t.type="punctuator":e[12]&&(t.type="whitespace"),t};

/***/ },

/***/ "./node_modules/chalk/index.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";function Chalk(e){this.enabled=e&&void 0!==e.enabled?e.enabled:supportsColor}function build(e){var s=function(){return applyStyle.apply(s,arguments)};return s._styles=e,s.enabled=this.enabled,s.__proto__=proto,s}function applyStyle(){var e=arguments,s=e.length,t=0!==s&&String(arguments[0]);if(s>1)for(var r=1;r<s;r++)t+=" "+e[r];if(!this.enabled||!t)return t;var n=this._styles,i=n.length,o=ansiStyles.dim.open;for(!isSimpleWindowsTerm||n.indexOf("gray")===-1&&n.indexOf("grey")===-1||(ansiStyles.dim.open="");i--;){var l=ansiStyles[n[i]];t=l.open+t.replace(l.closeRe,l.open)+l.close}return ansiStyles.dim.open=o,t}function init(){var e={};return Object.keys(styles).forEach(function(s){e[s]={get:function(){return build.call(this,[s])}}}),e}var escapeStringRegexp=__webpack_require__("./node_modules/escape-string-regexp/index.js"),ansiStyles=__webpack_require__("./node_modules/ansi-styles/index.js"),stripAnsi=__webpack_require__("./node_modules/strip-ansi/index.js"),hasAnsi=__webpack_require__("./node_modules/has-ansi/index.js"),supportsColor=__webpack_require__("./node_modules/supports-color/index.js"),defineProps=Object.defineProperties,isSimpleWindowsTerm="win32"===process.platform&&!/^xterm/i.test(process.env.TERM);isSimpleWindowsTerm&&(ansiStyles.blue.open="[94m");var styles=function(){var e={};return Object.keys(ansiStyles).forEach(function(s){ansiStyles[s].closeRe=new RegExp(escapeStringRegexp(ansiStyles[s].close),"g"),e[s]={get:function(){return build.call(this,this._styles.concat(s))}}}),e}(),proto=defineProps(function(){},styles);defineProps(Chalk.prototype,init()),module.exports=new Chalk,module.exports.styles=ansiStyles,module.exports.hasColor=hasAnsi,module.exports.stripColor=stripAnsi,module.exports.supportsColor=supportsColor;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ },

/***/ "./node_modules/escape-string-regexp/index.js":
/***/ function(module, exports) {

	"use strict";var matchOperatorsRe=/[|\\{}()[\]^$+*?.]/g;module.exports=function(r){if("string"!=typeof r)throw new TypeError("Expected a string");return r.replace(matchOperatorsRe,"\\$&")};

/***/ },

/***/ "./node_modules/ansi-styles/index.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";function assembleStyles(){var e={modifiers:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},colors:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39]},bgColors:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49]}};return e.colors.grey=e.colors.gray,Object.keys(e).forEach(function(r){var l=e[r];Object.keys(l).forEach(function(r){var o=l[r];e[r]=l[r]={open:"["+o[0]+"m",close:"["+o[1]+"m"}}),Object.defineProperty(e,r,{value:l,enumerable:!1})}),e}Object.defineProperty(module,"exports",{enumerable:!0,get:assembleStyles});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ },

/***/ "./node_modules/strip-ansi/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var ansiRegex=__webpack_require__("./node_modules/ansi-regex/index.js")();module.exports=function(e){return"string"==typeof e?e.replace(ansiRegex,""):e};

/***/ },

/***/ "./node_modules/ansi-regex/index.js":
/***/ function(module, exports) {

	"use strict";module.exports=function(){return/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g};

/***/ },

/***/ "./node_modules/has-ansi/index.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";var ansiRegex=__webpack_require__("./node_modules/ansi-regex/index.js"),re=new RegExp(ansiRegex().source);module.exports=re.test.bind(re);

/***/ },

/***/ "./node_modules/supports-color/index.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";var argv=process.argv,terminator=argv.indexOf("--"),hasFlag=function(r){r="--"+r;var s=argv.indexOf(r);return s!==-1&&(terminator===-1||s<terminator)};module.exports=function(){return"FORCE_COLOR"in process.env||!(hasFlag("no-color")||hasFlag("no-colors")||hasFlag("color=false"))&&(!!(hasFlag("color")||hasFlag("colors")||hasFlag("color=true")||hasFlag("color=always"))||!(process.stdout&&!process.stdout.isTTY)&&("win32"===process.platform||("COLORTERM"in process.env||"dumb"!==process.env.TERM&&!!/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM))))}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/evaluation.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function evaluateTruthy(){var e=this.evaluate();if(e.confident)return!!e.value}function evaluate(){function e(e){n&&(a=e,n=!1)}function r(r){var a=r.node;if(i.has(a)){var u=i.get(a);return u.resolved?u.value:void e(r)}var s={resolved:!1};i.set(a,s);var o=t(r);return n&&(s.resolved=!0,s.value=o),o}function t(t){if(n){var a=t.node;if(t.isSequenceExpression()){var i=t.get("expressions");return r(i[i.length-1])}if(t.isStringLiteral()||t.isNumericLiteral()||t.isBooleanLiteral())return a.value;if(t.isNullLiteral())return null;if(t.isTemplateLiteral()){for(var u="",s=0,o=t.get("expressions"),f=a.quasis,l=Array.isArray(f),v=0,f=l?f:(0,_getIterator3["default"])(f);;){var d;if(l){if(v>=f.length)break;d=f[v++]}else{if(v=f.next(),v.done)break;d=v.value}var p=d;if(!n)break;u+=p.value.cooked;var c=o[s++];c&&(u+=String(r(c)))}if(!n)return;return u}if(t.isConditionalExpression()){var g=r(t.get("test"));if(!n)return;return r(g?t.get("consequent"):t.get("alternate"))}if(t.isExpressionWrapper())return r(t.get("expression"));if(t.isMemberExpression()&&!t.parentPath.isCallExpression({callee:a})){var m=t.get("property"),_=t.get("object");if(_.isLiteral()&&m.isIdentifier()){var y=_.node.value,x="undefined"==typeof y?"undefined":(0,_typeof3["default"])(y);if("number"===x||"string"===x)return y[m.node.name]}}if(t.isReferencedIdentifier()){var h=t.scope.getBinding(a.name);if(h&&h.constantViolations.length>0)return e(h.path);if(h&&h.hasValue)return h.value;if("undefined"===a.name)return;if("Infinity"===a.name)return 1/0;if("NaN"===a.name)return NaN;var b=t.resolve();return b===t?e(t):r(b)}if(t.isUnaryExpression({prefix:!0})){if("void"===a.operator)return;var E=t.get("argument");if("typeof"===a.operator&&(E.isFunction()||E.isClass()))return"function";var I=r(E);if(!n)return;switch(a.operator){case"!":return!I;case"+":return+I;case"-":return-I;case"~":return~I;case"typeof":return"undefined"==typeof I?"undefined":(0,_typeof3["default"])(I)}}if(t.isArrayExpression()){for(var L=[],A=t.get("elements"),D=A,q=Array.isArray(D),N=0,D=q?D:(0,_getIterator3["default"])(D);;){var S;if(q){if(N>=D.length)break;S=D[N++]}else{if(N=D.next(),N.done)break;S=N.value}var M=S;if(M=M.evaluate(),!M.confident)return e(M);L.push(M.value)}return L}if(t.isObjectExpression(),t.isLogicalExpression()){var C=n,V=r(t.get("left")),k=n;n=C;var O=r(t.get("right")),T=n;switch(n=k&&T,a.operator){case"||":if(V&&k)return n=!0,V;if(!n)return;return V||O;case"&&":if((!V&&k||!O&&T)&&(n=!0),!n)return;return V&&O}}if(t.isBinaryExpression()){var j=r(t.get("left"));if(!n)return;var w=r(t.get("right"));if(!n)return;switch(a.operator){case"-":return j-w;case"+":return j+w;case"/":return j/w;case"*":return j*w;case"%":return j%w;case"**":return Math.pow(j,w);case"<":return j<w;case">":return j>w;case"<=":return j<=w;case">=":return j>=w;case"==":return j==w;case"!=":return j!=w;case"===":return j===w;case"!==":return j!==w;case"|":return j|w;case"&":return j&w;case"^":return j^w;case"<<":return j<<w;case">>":return j>>w;case">>>":return j>>>w}}if(t.isCallExpression()){var R=t.get("callee"),B=void 0,H=void 0;if(R.isIdentifier()&&!t.scope.getBinding(R.node.name,!0)&&VALID_CALLEES.indexOf(R.node.name)>=0&&(H=global[a.callee.name]),R.isMemberExpression()){var F=R.get("object"),P=R.get("property");if(F.isIdentifier()&&P.isIdentifier()&&VALID_CALLEES.indexOf(F.node.name)>=0&&INVALID_METHODS.indexOf(P.node.name)<0&&(B=global[F.node.name],H=B[P.node.name]),F.isLiteral()&&P.isIdentifier()){var U=(0,_typeof3["default"])(F.node.value);"string"!==U&&"number"!==U||(B=F.node.value,H=B[P.node.name])}}if(H){var W=t.get("arguments").map(r);if(!n)return;return H.apply(B,W)}}e(t)}}var n=!0,a=void 0,i=new _map2["default"],u=r(this);return n||(u=void 0),{confident:n,deopt:a,value:u}}exports.__esModule=!0;var _typeof2=__webpack_require__("./node_modules/babel-runtime/helpers/typeof.js"),_typeof3=_interopRequireDefault(_typeof2),_getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2),_map=__webpack_require__("./node_modules/babel-runtime/core-js/map.js"),_map2=_interopRequireDefault(_map);exports.evaluateTruthy=evaluateTruthy,exports.evaluate=evaluate;var VALID_CALLEES=["String","Number","Math"],INVALID_METHODS=["random"];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/conversion.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r]);return o["default"]=e,o}function toComputedKey(){var e=this.node,o=void 0;if(this.isMemberExpression())o=e.property;else{if(!this.isProperty()&&!this.isMethod())throw new ReferenceError("todo");o=e.key}return e.computed||t.isIdentifier(o)&&(o=t.stringLiteral(o.name)),o}function ensureBlock(){return t.ensureBlock(this.node)}function arrowFunctionToShadowed(){if(this.isArrowFunctionExpression()){this.ensureBlock();var e=this.node;e.expression=!1,e.type="FunctionExpression",e.shadow=e.shadow||!0}}exports.__esModule=!0,exports.toComputedKey=toComputedKey,exports.ensureBlock=ensureBlock,exports.arrowFunctionToShadowed=arrowFunctionToShadowed;var _babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes);

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/introspection.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function matchesPattern(e,r){function i(e){var t=n[o];return"*"===t||e===t}if(!this.isMemberExpression())return!1;for(var n=e.split("."),s=[this.node],o=0;s.length;){var a=s.shift();if(r&&o===n.length)return!0;if(t.isIdentifier(a)){if(!i(a.name))return!1}else if(t.isLiteral(a)){if(!i(a.value))return!1}else{if(t.isMemberExpression(a)){if(a.computed&&!t.isLiteral(a.property))return!1;s.unshift(a.property),s.unshift(a.object);continue}if(!t.isThisExpression(a))return!1;if(!i("this"))return!1}if(++o>n.length)return!1}return o===n.length}function has(e){var t=this.node&&this.node[e];return t&&Array.isArray(t)?!!t.length:!!t}function isStatic(){return this.scope.isStatic(this.node)}function isnt(e){return!this.has(e)}function equals(e,t){return this.node[e]===t}function isNodeType(e){return t.isType(this.type,e)}function canHaveVariableDeclarationOrExpression(){return("init"===this.key||"left"===this.key)&&this.parentPath.isFor()}function canSwapBetweenExpressionAndStatement(e){return!("body"!==this.key||!this.parentPath.isArrowFunctionExpression())&&(this.isExpression()?t.isBlockStatement(e):!!this.isBlockStatement()&&t.isExpression(e))}function isCompletionRecord(e){var t=this,r=!0;do{var i=t.container;if(t.isFunction()&&!r)return!!e;if(r=!1,Array.isArray(i)&&t.key!==i.length-1)return!1}while((t=t.parentPath)&&!t.isProgram());return!0}function isStatementOrBlock(){return!this.parentPath.isLabeledStatement()&&!t.isBlockStatement(this.container)&&(0,_includes2["default"])(t.STATEMENT_OR_BLOCK_KEYS,this.key)}function referencesImport(e,t){if(!this.isReferencedIdentifier())return!1;var r=this.scope.getBinding(this.node.name);if(!r||"module"!==r.kind)return!1;var i=r.path,n=i.parentPath;return!!n.isImportDeclaration()&&(n.node.source.value===e&&(!t||(!(!i.isImportDefaultSpecifier()||"default"!==t)||(!(!i.isImportNamespaceSpecifier()||"*"!==t)||!(!i.isImportSpecifier()||i.node.imported.name!==t)))))}function getSource(){var e=this.node;return e.end?this.hub.file.code.slice(e.start,e.end):""}function willIMaybeExecuteBefore(e){return"after"!==this._guessExecutionStatusRelativeTo(e)}function _guessExecutionStatusRelativeTo(e){var r=e.scope.getFunctionParent(),i=this.scope.getFunctionParent();if(r.node!==i.node){var n=this._guessExecutionStatusRelativeToDifferentFunctions(r);if(n)return n;e=r.path}var s=e.getAncestry();if(s.indexOf(this)>=0)return"after";var o=this.getAncestry(),a=void 0,u=void 0,f=void 0;for(f=0;f<o.length;f++){var l=o[f];if(u=s.indexOf(l),u>=0){a=l;break}}if(!a)return"before";var c=s[u-1],p=o[f-1];if(!c||!p)return"before";if(c.listKey&&c.container===p.container)return c.key>p.key?"before":"after";var d=t.VISITOR_KEYS[c.type].indexOf(c.key),h=t.VISITOR_KEYS[p.type].indexOf(p.key);return d>h?"before":"after"}function _guessExecutionStatusRelativeToDifferentFunctions(e){var t=e.path;if(t.isFunctionDeclaration()){var r=t.scope.getBinding(t.node.id.name);if(!r.references)return"before";for(var i=r.referencePaths,n=i,s=Array.isArray(n),o=0,n=s?n:(0,_getIterator3["default"])(n);;){var a;if(s){if(o>=n.length)break;a=n[o++]}else{if(o=n.next(),o.done)break;a=o.value}var u=a;if("callee"!==u.key||!u.parentPath.isCallExpression())return}for(var f=void 0,l=i,c=Array.isArray(l),p=0,l=c?l:(0,_getIterator3["default"])(l);;){var d;if(c){if(p>=l.length)break;d=l[p++]}else{if(p=l.next(),p.done)break;d=p.value}var h=d,v=!!h.find(function(e){return e.node===t.node});if(!v){var x=this._guessExecutionStatusRelativeTo(h);if(f){if(f!==x)return}else f=x}}return f}}function resolve(e,t){return this._resolve(e,t)||this}function _resolve(e,r){var i=this;if(!(r&&r.indexOf(this)>=0))if(r=r||[],r.push(this),this.isVariableDeclarator()){if(this.get("id").isIdentifier())return this.get("init").resolve(e,r)}else if(this.isReferencedIdentifier()){var n=this.scope.getBinding(this.node.name);if(!n)return;if(!n.constant)return;if("module"===n.kind)return;if(n.path!==this){var s=function(){var t=n.path.resolve(e,r);return i.find(function(e){return e.node===t.node})?{v:void 0}:{v:t}}();if("object"===("undefined"==typeof s?"undefined":(0,_typeof3["default"])(s)))return s.v}}else{if(this.isTypeCastExpression())return this.get("expression").resolve(e,r);if(e&&this.isMemberExpression()){var o=this.toComputedKey();if(!t.isLiteral(o))return;var a=o.value,u=this.get("object").resolve(e,r);if(u.isObjectExpression())for(var f=u.get("properties"),l=f,c=Array.isArray(l),p=0,l=c?l:(0,_getIterator3["default"])(l);;){var d;if(c){if(p>=l.length)break;d=l[p++]}else{if(p=l.next(),p.done)break;d=p.value}var h=d;if(h.isProperty()){var v=h.get("key"),x=h.isnt("computed")&&v.isIdentifier({name:a});if(x=x||v.isLiteral({value:a}))return h.get("value").resolve(e,r)}}else if(u.isArrayExpression()&&!isNaN(+a)){var y=u.get("elements"),g=y[a];if(g)return g.resolve(e,r)}}}}exports.__esModule=!0,exports.is=void 0;var _typeof2=__webpack_require__("./node_modules/babel-runtime/helpers/typeof.js"),_typeof3=_interopRequireDefault(_typeof2),_getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports.matchesPattern=matchesPattern,exports.has=has,exports.isStatic=isStatic,exports.isnt=isnt,exports.equals=equals,exports.isNodeType=isNodeType,exports.canHaveVariableDeclarationOrExpression=canHaveVariableDeclarationOrExpression,exports.canSwapBetweenExpressionAndStatement=canSwapBetweenExpressionAndStatement,exports.isCompletionRecord=isCompletionRecord,exports.isStatementOrBlock=isStatementOrBlock,exports.referencesImport=referencesImport,exports.getSource=getSource,exports.willIMaybeExecuteBefore=willIMaybeExecuteBefore,exports._guessExecutionStatusRelativeTo=_guessExecutionStatusRelativeTo,exports._guessExecutionStatusRelativeToDifferentFunctions=_guessExecutionStatusRelativeToDifferentFunctions,exports.resolve=resolve,exports._resolve=_resolve;var _includes=__webpack_require__("./node_modules/lodash/includes.js"),_includes2=_interopRequireDefault(_includes),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes),is=exports.is=has;

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/context.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function call(t){var e=this.opts;return this.debug(function(){return t}),!(!this.node||!this._call(e[t]))||!!this.node&&this._call(e[this.node.type]&&e[this.node.type][t])}function _call(t){if(!t)return!1;for(var e=t,s=Array.isArray(e),i=0,e=s?e:(0,_getIterator3["default"])(e);;){var n;if(s){if(i>=e.length)break;n=e[i++]}else{if(i=e.next(),i.done)break;n=i.value}var o=n;if(o){var r=this.node;if(!r)return!0;var h=o.call(this.state,this,this.state);if(h)throw new Error("Unexpected return value from visitor method "+o);if(this.node!==r)return!0;if(this.shouldStop||this.shouldSkip||this.removed)return!0}}return!1}function isBlacklisted(){var t=this.opts.blacklist;return t&&t.indexOf(this.node.type)>-1}function visit(){return!!this.node&&(!this.isBlacklisted()&&((!this.opts.shouldSkip||!this.opts.shouldSkip(this))&&(this.call("enter")||this.shouldSkip?(this.debug(function(){return"Skip..."}),this.shouldStop):(this.debug(function(){return"Recursing into..."}),_index2["default"].node(this.node,this.opts,this.scope,this.state,this,this.skipKeys),this.call("exit"),this.shouldStop))))}function skip(){this.shouldSkip=!0}function skipKey(t){this.skipKeys[t]=!0}function stop(){this.shouldStop=!0,this.shouldSkip=!0}function setScope(){if(!this.opts||!this.opts.noScope){var t=this.context&&this.context.scope;if(!t)for(var e=this.parentPath;e&&!t;){if(e.opts&&e.opts.noScope)return;t=e.scope,e=e.parentPath}this.scope=this.getScope(t),this.scope&&this.scope.init()}}function setContext(t){return this.shouldSkip=!1,this.shouldStop=!1,this.removed=!1,this.skipKeys={},t&&(this.context=t,this.state=t.state,this.opts=t.opts),this.setScope(),this}function resync(){this.removed||(this._resyncParent(),this._resyncList(),this._resyncKey())}function _resyncParent(){this.parentPath&&(this.parent=this.parentPath.node)}function _resyncKey(){if(this.container&&this.node!==this.container[this.key]){if(Array.isArray(this.container)){for(var t=0;t<this.container.length;t++)if(this.container[t]===this.node)return this.setKey(t)}else for(var e in this.container)if(this.container[e]===this.node)return this.setKey(e);this.key=null}}function _resyncList(){if(this.parent&&this.inList){var t=this.parent[this.listKey];this.container!==t&&(this.container=t||null)}}function _resyncRemoved(){null!=this.key&&this.container&&this.container[this.key]===this.node||this._markRemoved()}function popContext(){this.contexts.pop(),this.setContext(this.contexts[this.contexts.length-1])}function pushContext(t){this.contexts.push(t),this.setContext(t)}function setup(t,e,s,i){this.inList=!!s,this.listKey=s,this.parentKey=s||i,this.container=e,this.parentPath=t||this.parentPath,this.setKey(i)}function setKey(t){this.key=t,this.node=this.container[this.key],this.type=this.node&&this.node.type}function requeue(){var t=arguments.length<=0||void 0===arguments[0]?this:arguments[0];if(!t.removed)for(var e=this.contexts,s=e,i=Array.isArray(s),n=0,s=i?s:(0,_getIterator3["default"])(s);;){var o;if(i){if(n>=s.length)break;o=s[n++]}else{if(n=s.next(),n.done)break;o=n.value}var r=o;r.maybeQueue(t)}}function _getQueueContexts(){for(var t=this,e=this.contexts;!e.length;)t=t.parentPath,e=t.contexts;return e}exports.__esModule=!0;var _getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports.call=call,exports._call=_call,exports.isBlacklisted=isBlacklisted,exports.visit=visit,exports.skip=skip,exports.skipKey=skipKey,exports.stop=stop,exports.setScope=setScope,exports.setContext=setContext,exports.resync=resync,exports._resyncParent=_resyncParent,exports._resyncKey=_resyncKey,exports._resyncList=_resyncList,exports._resyncRemoved=_resyncRemoved,exports.popContext=popContext,exports.pushContext=pushContext,exports.setup=setup,exports.setKey=setKey,exports.requeue=requeue,exports._getQueueContexts=_getQueueContexts;var _index=__webpack_require__("./node_modules/babel-traverse/lib/index.js"),_index2=_interopRequireDefault(_index);

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/removal.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function remove(){return this._assertUnremoved(),this.resync(),this._callRemovalHooks()?void this._markRemoved():(this.shareCommentsWithSiblings(),this._remove(),void this._markRemoved())}function _callRemovalHooks(){for(var e=_removalHooks.hooks,r=Array.isArray(e),o=0,e=r?e:(0,_getIterator3["default"])(e);;){var t;if(r){if(o>=e.length)break;t=e[o++]}else{if(o=e.next(),o.done)break;t=o.value}var s=t;if(s(this,this.parentPath))return!0}}function _remove(){Array.isArray(this.container)?(this.container.splice(this.key,1),this.updateSiblingKeys(this.key,-1)):this._replaceWith(null)}function _markRemoved(){this.shouldSkip=!0,this.removed=!0,this.node=null}function _assertUnremoved(){if(this.removed)throw this.buildCodeFrameError("NodePath has been removed so is read-only.")}exports.__esModule=!0;var _getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports.remove=remove,exports._callRemovalHooks=_callRemovalHooks,exports._remove=_remove,exports._markRemoved=_markRemoved,exports._assertUnremoved=_assertUnremoved;var _removalHooks=__webpack_require__("./node_modules/babel-traverse/lib/path/lib/removal-hooks.js");

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/lib/removal-hooks.js":
/***/ function(module, exports) {

	"use strict";exports.__esModule=!0;var hooks=exports.hooks=[function(e,t){if("body"===e.key&&t.isArrowFunctionExpression())return e.replaceWith(e.scope.buildUndefinedNode()),!0},function(e,t){var i=!1;if(i=i||"test"===e.key&&(t.isWhile()||t.isSwitchCase()),i=i||"declaration"===e.key&&t.isExportDeclaration(),i=i||"body"===e.key&&t.isLabeledStatement(),i=i||"declarations"===e.listKey&&t.isVariableDeclaration()&&1===t.node.declarations.length,i=i||"expression"===e.key&&t.isExpressionStatement())return t.remove(),!0},function(e,t){if(t.isSequenceExpression()&&1===t.node.expressions.length)return t.replaceWith(t.node.expressions[0]),!0},function(e,t){if(t.isBinary())return"left"===e.key?t.replaceWith(t.node.right):t.replaceWith(t.node.left),!0},function(e,t){if(t.isIfStatement()&&("consequent"===e.key||"alternate"===e.key)||t.isLoop()&&"body"===e.key)return e.replaceWith({type:"BlockStatement",body:[]}),!0}];

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/modification.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function insertBefore(e){if(this._assertUnremoved(),e=this._verifyNodeList(e),this.parentPath.isExpressionStatement()||this.parentPath.isLabeledStatement())return this.parentPath.insertBefore(e);if(this.isNodeType("Expression")||this.parentPath.isForStatement()&&"init"===this.key)this.node&&e.push(this.node),this.replaceExpressionWithStatements(e);else{if(this._maybePopFromStatements(e),Array.isArray(this.container))return this._containerInsertBefore(e);if(!this.isStatementOrBlock())throw new Error("We don't know what to do with this node type. We were previously a Statement but we can't fit in here?");this.node&&e.push(this.node),this._replaceWith(t.blockStatement(e))}return[this]}function _containerInsert(e,t){this.updateSiblingKeys(e,t.length);for(var r=[],i=0;i<t.length;i++){var n=e+i,s=t[i];if(this.container.splice(n,0,s),this.context){var o=this.context.create(this.parent,this.container,n,this.listKey);this.context.queue&&o.pushContext(this.context),r.push(o)}else r.push(_index2["default"].get({parentPath:this.parentPath,parent:this.parent,container:this.container,listKey:this.listKey,key:n}))}for(var a=this._getQueueContexts(),h=r,f=Array.isArray(h),u=0,h=f?h:(0,_getIterator3["default"])(h);;){var p;if(f){if(u>=h.length)break;p=h[u++]}else{if(u=h.next(),u.done)break;p=u.value}var d=p;d.setScope(),d.debug(function(){return"Inserted."});for(var c=a,l=Array.isArray(c),_=0,c=l?c:(0,_getIterator3["default"])(c);;){var y;if(l){if(_>=c.length)break;y=c[_++]}else{if(_=c.next(),_.done)break;y=_.value}var m=y;m.maybeQueue(d,!0)}}return r}function _containerInsertBefore(e){return this._containerInsert(this.key,e)}function _containerInsertAfter(e){return this._containerInsert(this.key+1,e)}function _maybePopFromStatements(e){var r=e[e.length-1],i=t.isIdentifier(r)||t.isExpressionStatement(r)&&t.isIdentifier(r.expression);i&&!this.isCompletionRecord()&&e.pop()}function insertAfter(e){if(this._assertUnremoved(),e=this._verifyNodeList(e),this.parentPath.isExpressionStatement()||this.parentPath.isLabeledStatement())return this.parentPath.insertAfter(e);if(this.isNodeType("Expression")||this.parentPath.isForStatement()&&"init"===this.key){if(this.node){var r=this.scope.generateDeclaredUidIdentifier();e.unshift(t.expressionStatement(t.assignmentExpression("=",r,this.node))),e.push(t.expressionStatement(r))}this.replaceExpressionWithStatements(e)}else{if(this._maybePopFromStatements(e),Array.isArray(this.container))return this._containerInsertAfter(e);if(!this.isStatementOrBlock())throw new Error("We don't know what to do with this node type. We were previously a Statement but we can't fit in here?");this.node&&e.unshift(this.node),this._replaceWith(t.blockStatement(e))}return[this]}function updateSiblingKeys(e,t){if(this.parent)for(var r=_cache.path.get(this.parent),i=0;i<r.length;i++){var n=r[i];n.key>=e&&(n.key+=t)}}function _verifyNodeList(e){if(!e)return[];e.constructor!==Array&&(e=[e]);for(var t=0;t<e.length;t++){var r=e[t],i=void 0;if(r?"object"!==("undefined"==typeof r?"undefined":(0,_typeof3["default"])(r))?i="contains a non-object node":r.type?r instanceof _index2["default"]&&(i="has a NodePath when it expected a raw object"):i="without a type":i="has falsy node",i){var n=Array.isArray(r)?"array":"undefined"==typeof r?"undefined":(0,_typeof3["default"])(r);throw new Error("Node list "+i+" with the index of "+t+" and type of "+n)}}return e}function unshiftContainer(e,t){this._assertUnremoved(),t=this._verifyNodeList(t);var r=_index2["default"].get({parentPath:this,parent:this.node,container:this.node[e],listKey:e,key:0});return r.insertBefore(t)}function pushContainer(e,t){this._assertUnremoved(),t=this._verifyNodeList(t);var r=this.node[e],i=_index2["default"].get({parentPath:this,parent:this.node,container:r,listKey:e,key:r.length});return i.replaceWithMultiple(t)}function hoist(){var e=arguments.length<=0||void 0===arguments[0]?this.scope:arguments[0],t=new _hoister2["default"](this,e);return t.run()}exports.__esModule=!0;var _typeof2=__webpack_require__("./node_modules/babel-runtime/helpers/typeof.js"),_typeof3=_interopRequireDefault(_typeof2),_getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports.insertBefore=insertBefore,exports._containerInsert=_containerInsert,exports._containerInsertBefore=_containerInsertBefore,exports._containerInsertAfter=_containerInsertAfter,exports._maybePopFromStatements=_maybePopFromStatements,exports.insertAfter=insertAfter,exports.updateSiblingKeys=updateSiblingKeys,exports._verifyNodeList=_verifyNodeList,exports.unshiftContainer=unshiftContainer,exports.pushContainer=pushContainer,exports.hoist=hoist;var _cache=__webpack_require__("./node_modules/babel-traverse/lib/cache.js"),_hoister=__webpack_require__("./node_modules/babel-traverse/lib/path/lib/hoister.js"),_hoister2=_interopRequireDefault(_hoister),_index=__webpack_require__("./node_modules/babel-traverse/lib/path/index.js"),_index2=_interopRequireDefault(_index),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes);

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/lib/hoister.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t["default"]=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}exports.__esModule=!0;var _classCallCheck2=__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes),referenceVisitor={ReferencedIdentifier:function(e,t){if(!e.isJSXIdentifier()||!_babelTypes.react.isCompatTag(e.node.name)){var i=e.scope.getBinding(e.node.name);if(i&&i===t.scope.getBinding(e.node.name))if(i.constant)t.bindings[e.node.name]=i;else for(var r=i.constantViolations,n=Array.isArray(r),a=0,r=n?r:(0,_getIterator3["default"])(r);;){var s;if(n){if(a>=r.length)break;s=r[a++]}else{if(a=r.next(),a.done)break;s=a.value}var o=s;t.breakOnScopePaths=t.breakOnScopePaths.concat(o.getAncestry())}}}},PathHoister=function(){function e(t,i){(0,_classCallCheck3["default"])(this,e),this.breakOnScopePaths=[],this.bindings={},this.scopes=[],this.scope=i,this.path=t}return e.prototype.isCompatibleScope=function(e){for(var t in this.bindings){var i=this.bindings[t];if(!e.bindingIdentifierEquals(t,i.identifier))return!1}return!0},e.prototype.getCompatibleScopes=function(){var e=this.path.scope;do{if(!this.isCompatibleScope(e))break;if(this.scopes.push(e),this.breakOnScopePaths.indexOf(e.path)>=0)break}while(e=e.parent)},e.prototype.getAttachmentPath=function(){var e=this._getAttachmentPath();if(e){var t=e.scope;if(t.path===e&&(t=e.scope.parent),t.path.isProgram()||t.path.isFunction())for(var i in this.bindings)if(t.hasOwnBinding(i)){var r=this.bindings[i];if("param"!==r.kind&&r.path.getStatementParent().key>e.key)return}return e}},e.prototype._getAttachmentPath=function(){var e=this.scopes,t=e.pop();if(t){if(t.path.isFunction()){if(this.hasOwnParamBindings(t)){if(this.scope===t)return;return t.path.get("body").get("body")[0]}return this.getNextScopeStatementParent()}return t.path.isProgram()?this.getNextScopeStatementParent():void 0}},e.prototype.getNextScopeStatementParent=function(){var e=this.scopes.pop();if(e)return e.path.getStatementParent()},e.prototype.hasOwnParamBindings=function(e){for(var t in this.bindings)if(e.hasOwnBinding(t)){var i=this.bindings[t];if("param"===i.kind)return!0}return!1},e.prototype.run=function(){var e=this.path.node;if(!e._hoisted){e._hoisted=!0,this.path.traverse(referenceVisitor,this),this.getCompatibleScopes();var i=this.getAttachmentPath();if(i&&i.getFunctionParent()!==this.path.getFunctionParent()){var r=i.scope.generateUidIdentifier("ref");i.insertBefore([t.variableDeclaration("var",[t.variableDeclarator(r,this.path.node)])]);var n=this.path.parentPath;n.isJSXElement()&&this.path.container===n.node.children&&(r=t.JSXExpressionContainer(r)),this.path.replaceWith(r)}}},e}();exports["default"]=PathHoister,module.exports=exports["default"];

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/family.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e["default"]=t,e}function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function getStatementParent(){var t=this;do{if(!t.parentPath||Array.isArray(t.container)&&t.isStatement())break;t=t.parentPath}while(t);if(t&&(t.isProgram()||t.isFile()))throw new Error("File/Program node, we can't possibly find a statement parent to this");return t}function getOpposite(){return"left"===this.key?this.getSibling("right"):"right"===this.key?this.getSibling("left"):void 0}function getCompletionRecords(){var t=[],e=function(e){e&&(t=t.concat(e.getCompletionRecords()))};if(this.isIfStatement())e(this.get("consequent")),e(this.get("alternate"));else if(this.isDoExpression()||this.isFor()||this.isWhile())e(this.get("body"));else if(this.isProgram()||this.isBlockStatement())e(this.get("body").pop());else{if(this.isFunction())return this.get("body").getCompletionRecords();this.isTryStatement()?(e(this.get("block")),e(this.get("handler")),e(this.get("finalizer"))):t.push(this)}return t}function getSibling(t){return _index2["default"].get({parentPath:this.parentPath,parent:this.parent,container:this.container,listKey:this.listKey,key:t})}function get(t,e){e===!0&&(e=this.context);var i=t.split(".");return 1===i.length?this._getKey(t,e):this._getPattern(i,e)}function _getKey(t,e){var i=this,r=this.node,n=r[t];return Array.isArray(n)?n.map(function(s,a){return _index2["default"].get({listKey:t,parentPath:i,parent:r,container:n,key:a}).setContext(e)}):_index2["default"].get({parentPath:this,parent:r,container:r,key:t}).setContext(e)}function _getPattern(t,e){for(var i=this,r=t,n=Array.isArray(r),s=0,r=n?r:(0,_getIterator3["default"])(r);;){var a;if(n){if(s>=r.length)break;a=r[s++]}else{if(s=r.next(),s.done)break;a=s.value}var o=a;i="."===o?i.parentPath:Array.isArray(i)?i[o]:i.get(o,e)}return i}function getBindingIdentifiers(e){return t.getBindingIdentifiers(this.node,e)}function getOuterBindingIdentifiers(e){return t.getOuterBindingIdentifiers(this.node,e)}exports.__esModule=!0;var _getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2);exports.getStatementParent=getStatementParent,exports.getOpposite=getOpposite,exports.getCompletionRecords=getCompletionRecords,exports.getSibling=getSibling,exports.get=get,exports._getKey=_getKey,exports._getPattern=_getPattern,exports.getBindingIdentifiers=getBindingIdentifiers,exports.getOuterBindingIdentifiers=getOuterBindingIdentifiers;var _index=__webpack_require__("./node_modules/babel-traverse/lib/path/index.js"),_index2=_interopRequireDefault(_index),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes);

/***/ },

/***/ "./node_modules/babel-traverse/lib/path/comments.js":
/***/ function(module, exports) {

	"use strict";function shareCommentsWithSiblings(){var t=this.node;if(t){var e=t.trailingComments,n=t.leadingComments;if(e||n){var i=this.getSibling(this.key-1),m=this.getSibling(this.key+1);i.node||(i=m),m.node||(m=i),i.addComments("trailing",n),m.addComments("leading",e)}}}function addComment(t,e,n){this.addComments(t,[{type:n?"CommentLine":"CommentBlock",value:e}])}function addComments(t,e){if(e){var n=this.node;if(n){var i=t+"Comments";n[i]?n[i]=n[i].concat(e):n[i]=e}}}exports.__esModule=!0,exports.shareCommentsWithSiblings=shareCommentsWithSiblings,exports.addComment=addComment,exports.addComments=addComments;

/***/ },

/***/ "./node_modules/babel-traverse/lib/hub.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}exports.__esModule=!0;var _classCallCheck2=__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),Hub=function e(l,s){(0,_classCallCheck3["default"])(this,e),this.file=l,this.options=s};exports["default"]=Hub,module.exports=exports["default"];

/***/ },

/***/ "./node_modules/babel-traverse/lib/context.js":
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}exports.__esModule=!0;var _getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js"),_getIterator3=_interopRequireDefault(_getIterator2),_classCallCheck2=__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_path2=__webpack_require__("./node_modules/babel-traverse/lib/path/index.js"),_path3=_interopRequireDefault(_path2),_babelTypes=__webpack_require__("./node_modules/babel-types/lib/index.js"),t=_interopRequireWildcard(_babelTypes),testing="test"===("production"),TraversalContext=function(){function e(t,r,i,u){(0,_classCallCheck3["default"])(this,e),this.queue=null,this.parentPath=u,this.scope=t,this.state=i,this.opts=r}return e.prototype.shouldVisit=function(e){var r=this.opts;if(r.enter||r.exit)return!0;if(r[e.type])return!0;var i=t.VISITOR_KEYS[e.type];if(!i||!i.length)return!1;for(var u=i,s=Array.isArray(u),a=0,u=s?u:(0,_getIterator3["default"])(u);;){var n;if(s){if(a>=u.length)break;n=u[a++]}else{if(a=u.next(),a.done)break;n=a.value}var o=n;if(e[o])return!0}return!1},e.prototype.create=function(e,t,r,i){return _path3["default"].get({parentPath:this.parentPath,parent:e,container:t,key:r,listKey:i})},e.prototype.maybeQueue=function(e,t){if(this.trap)throw new Error("Infinite cycle detected");this.queue&&(t?this.queue.push(e):this.priorityQueue.push(e))},e.prototype.visitMultiple=function(e,t,r){if(0===e.length)return!1;for(var i=[],u=0;u<e.length;u++){var s=e[u];s&&this.shouldVisit(s)&&i.push(this.create(t,e,u,r))}return this.visitQueue(i)},e.prototype.visitSingle=function(e,t){return!!this.shouldVisit(e[t])&&this.visitQueue([this.create(e,e,t)])},e.prototype.visitQueue=function(e){this.queue=e,this.priorityQueue=[];for(var t=[],r=!1,i=e,u=Array.isArray(i),s=0,i=u?i:(0,_getIterator3["default"])(i);;){var a;if(u){if(s>=i.length)break;a=i[s++]}else{if(s=i.next(),s.done)break;a=s.value}var n=a;if(n.resync(),0!==n.contexts.length&&n.contexts[n.contexts.length-1]===this||n.pushContext(this),null!==n.key&&(testing&&e.length>=1e3&&(this.trap=!0),!(t.indexOf(n.node)>=0))){if(t.push(n.node),n.visit()){r=!0;break}if(this.priorityQueue.length&&(r=this.visitQueue(this.priorityQueue),this.priorityQueue=[],this.queue=e,r))break}}for(var o=e,l=Array.isArray(o),h=0,o=l?o:(0,_getIterator3["default"])(o);;){var p;if(l){if(h>=o.length)break;p=o[h++]}else{if(h=o.next(),h.done)break;p=h.value}var f=p;f.popContext()}return this.queue=null,r},e.prototype.visit=function(e,t){var r=e[t];return!!r&&(Array.isArray(r)?this.visitMultiple(r,e,t):this.visitSingle(e,t))},e}();exports["default"]=TraversalContext,module.exports=exports["default"];

/***/ },

/***/ "./node_modules/lodash/_stackClear.js":
/***/ function(module, exports, __webpack_require__) {

	function stackClear(){this.__data__=new ListCache,this.size=0}var ListCache=__webpack_require__("./node_modules/lodash/_ListCache.js");module.exports=stackClear;

/***/ }

});