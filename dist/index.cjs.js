"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const St=require("react"),r=require("styled-components");var Q={exports:{}},F={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Et;function dr(){if(Et)return F;Et=1;var c=St,O=Symbol.for("react.element"),j=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,S=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I={key:!0,ref:!0,__self:!0,__source:!0};function _(x,d,R){var p,b={},E=null,z=null;R!==void 0&&(E=""+R),d.key!==void 0&&(E=""+d.key),d.ref!==void 0&&(z=d.ref);for(p in d)h.call(d,p)&&!I.hasOwnProperty(p)&&(b[p]=d[p]);if(x&&x.defaultProps)for(p in d=x.defaultProps,d)b[p]===void 0&&(b[p]=d[p]);return{$$typeof:O,type:x,key:E,ref:z,props:b,_owner:S.current}}return F.Fragment=j,F.jsx=_,F.jsxs=_,F}var L={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wt;function ur(){return wt||(wt=1,process.env.NODE_ENV!=="production"&&function(){var c=St,O=Symbol.for("react.element"),j=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),x=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),b=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),z=Symbol.for("react.offscreen"),tt=Symbol.iterator,It="@@iterator";function Ct(t){if(t===null||typeof t!="object")return null;var e=tt&&t[tt]||t[It];return typeof e=="function"?e:null}var C=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function u(t){{for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];Pt("error",t,a)}}function Pt(t,e,a){{var n=C.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(e+="%s",a=a.concat([i]));var f=a.map(function(s){return String(s)});f.unshift("Warning: "+e),Function.prototype.apply.call(console[t],console,f)}}var Yt=!1,jt=!1,Dt=!1,Xt=!1,At=!1,rt;rt=Symbol.for("react.module.reference");function Ft(t){return!!(typeof t=="string"||typeof t=="function"||t===h||t===I||At||t===S||t===R||t===p||Xt||t===z||Yt||jt||Dt||typeof t=="object"&&t!==null&&(t.$$typeof===E||t.$$typeof===b||t.$$typeof===_||t.$$typeof===x||t.$$typeof===d||t.$$typeof===rt||t.getModuleId!==void 0))}function Lt(t,e,a){var n=t.displayName;if(n)return n;var i=e.displayName||e.name||"";return i!==""?a+"("+i+")":a}function et(t){return t.displayName||"Context"}function k(t){if(t==null)return null;if(typeof t.tag=="number"&&u("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case h:return"Fragment";case j:return"Portal";case I:return"Profiler";case S:return"StrictMode";case R:return"Suspense";case p:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case x:var e=t;return et(e)+".Consumer";case _:var a=t;return et(a._context)+".Provider";case d:return Lt(t,t.render,"ForwardRef");case b:var n=t.displayName||null;return n!==null?n:k(t.type)||"Memo";case E:{var i=t,f=i._payload,s=i._init;try{return k(s(f))}catch{return null}}}return null}var w=Object.assign,D=0,at,nt,ot,st,it,ft,ct;function lt(){}lt.__reactDisabledLog=!0;function zt(){{if(D===0){at=console.log,nt=console.info,ot=console.warn,st=console.error,it=console.group,ft=console.groupCollapsed,ct=console.groupEnd;var t={configurable:!0,enumerable:!0,value:lt,writable:!0};Object.defineProperties(console,{info:t,log:t,warn:t,error:t,group:t,groupCollapsed:t,groupEnd:t})}D++}}function $t(){{if(D--,D===0){var t={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:w({},t,{value:at}),info:w({},t,{value:nt}),warn:w({},t,{value:ot}),error:w({},t,{value:st}),group:w({},t,{value:it}),groupCollapsed:w({},t,{value:ft}),groupEnd:w({},t,{value:ct})})}D<0&&u("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var M=C.ReactCurrentDispatcher,V;function $(t,e,a){{if(V===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);V=n&&n[1]||""}return`
`+V+t}}var N=!1,U;{var Ut=typeof WeakMap=="function"?WeakMap:Map;U=new Ut}function mt(t,e){if(!t||N)return"";{var a=U.get(t);if(a!==void 0)return a}var n;N=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var f;f=M.current,M.current=null,zt();try{if(e){var s=function(){throw Error()};if(Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(g){n=g}Reflect.construct(t,[],s)}else{try{s.call()}catch(g){n=g}t.call(s.prototype)}}else{try{throw Error()}catch(g){n=g}t()}}catch(g){if(g&&n&&typeof g.stack=="string"){for(var o=g.stack.split(`
`),y=n.stack.split(`
`),l=o.length-1,m=y.length-1;l>=1&&m>=0&&o[l]!==y[m];)m--;for(;l>=1&&m>=0;l--,m--)if(o[l]!==y[m]){if(l!==1||m!==1)do if(l--,m--,m<0||o[l]!==y[m]){var v=`
`+o[l].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),typeof t=="function"&&U.set(t,v),v}while(l>=1&&m>=0);break}}}finally{N=!1,M.current=f,$t(),Error.prepareStackTrace=i}var Y=t?t.displayName||t.name:"",T=Y?$(Y):"";return typeof t=="function"&&U.set(t,T),T}function Wt(t,e,a){return mt(t,!1)}function Bt(t){var e=t.prototype;return!!(e&&e.isReactComponent)}function W(t,e,a){if(t==null)return"";if(typeof t=="function")return mt(t,Bt(t));if(typeof t=="string")return $(t);switch(t){case R:return $("Suspense");case p:return $("SuspenseList")}if(typeof t=="object")switch(t.$$typeof){case d:return Wt(t.render);case b:return W(t.type,e,a);case E:{var n=t,i=n._payload,f=n._init;try{return W(f(i),e,a)}catch{}}}return""}var X=Object.prototype.hasOwnProperty,dt={},ut=C.ReactDebugCurrentFrame;function B(t){if(t){var e=t._owner,a=W(t.type,t._source,e?e.type:null);ut.setExtraStackFrame(a)}else ut.setExtraStackFrame(null)}function Mt(t,e,a,n,i){{var f=Function.call.bind(X);for(var s in t)if(f(t,s)){var o=void 0;try{if(typeof t[s]!="function"){var y=Error((n||"React class")+": "+a+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof t[s]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw y.name="Invariant Violation",y}o=t[s](e,s,n,a,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(l){o=l}o&&!(o instanceof Error)&&(B(i),u("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",a,s,typeof o),B(null)),o instanceof Error&&!(o.message in dt)&&(dt[o.message]=!0,B(i),u("Failed %s type: %s",a,o.message),B(null))}}}var Vt=Array.isArray;function q(t){return Vt(t)}function Nt(t){{var e=typeof Symbol=="function"&&Symbol.toStringTag,a=e&&t[Symbol.toStringTag]||t.constructor.name||"Object";return a}}function qt(t){try{return pt(t),!1}catch{return!0}}function pt(t){return""+t}function yt(t){if(qt(t))return u("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Nt(t)),pt(t)}var A=C.ReactCurrentOwner,Jt={key:!0,ref:!0,__self:!0,__source:!0},gt,vt,J;J={};function Kt(t){if(X.call(t,"ref")){var e=Object.getOwnPropertyDescriptor(t,"ref").get;if(e&&e.isReactWarning)return!1}return t.ref!==void 0}function Gt(t){if(X.call(t,"key")){var e=Object.getOwnPropertyDescriptor(t,"key").get;if(e&&e.isReactWarning)return!1}return t.key!==void 0}function Ht(t,e){if(typeof t.ref=="string"&&A.current&&e&&A.current.stateNode!==e){var a=k(A.current.type);J[a]||(u('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',k(A.current.type),t.ref),J[a]=!0)}}function Zt(t,e){{var a=function(){gt||(gt=!0,u("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",e))};a.isReactWarning=!0,Object.defineProperty(t,"key",{get:a,configurable:!0})}}function Qt(t,e){{var a=function(){vt||(vt=!0,u("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",e))};a.isReactWarning=!0,Object.defineProperty(t,"ref",{get:a,configurable:!0})}}var tr=function(t,e,a,n,i,f,s){var o={$$typeof:O,type:t,key:e,ref:a,props:s,_owner:f};return o._store={},Object.defineProperty(o._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(o,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(o,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(o.props),Object.freeze(o)),o};function rr(t,e,a,n,i){{var f,s={},o=null,y=null;a!==void 0&&(yt(a),o=""+a),Gt(e)&&(yt(e.key),o=""+e.key),Kt(e)&&(y=e.ref,Ht(e,i));for(f in e)X.call(e,f)&&!Jt.hasOwnProperty(f)&&(s[f]=e[f]);if(t&&t.defaultProps){var l=t.defaultProps;for(f in l)s[f]===void 0&&(s[f]=l[f])}if(o||y){var m=typeof t=="function"?t.displayName||t.name||"Unknown":t;o&&Zt(s,m),y&&Qt(s,m)}return tr(t,o,y,i,n,A.current,s)}}var K=C.ReactCurrentOwner,bt=C.ReactDebugCurrentFrame;function P(t){if(t){var e=t._owner,a=W(t.type,t._source,e?e.type:null);bt.setExtraStackFrame(a)}else bt.setExtraStackFrame(null)}var G;G=!1;function H(t){return typeof t=="object"&&t!==null&&t.$$typeof===O}function kt(){{if(K.current){var t=k(K.current.type);if(t)return`

Check the render method of \``+t+"`."}return""}}function er(t){return""}var xt={};function ar(t){{var e=kt();if(!e){var a=typeof t=="string"?t:t.displayName||t.name;a&&(e=`

Check the top-level render call using <`+a+">.")}return e}}function ht(t,e){{if(!t._store||t._store.validated||t.key!=null)return;t._store.validated=!0;var a=ar(e);if(xt[a])return;xt[a]=!0;var n="";t&&t._owner&&t._owner!==K.current&&(n=" It was passed a child from "+k(t._owner.type)+"."),P(t),u('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',a,n),P(null)}}function Rt(t,e){{if(typeof t!="object")return;if(q(t))for(var a=0;a<t.length;a++){var n=t[a];H(n)&&ht(n,e)}else if(H(t))t._store&&(t._store.validated=!0);else if(t){var i=Ct(t);if(typeof i=="function"&&i!==t.entries)for(var f=i.call(t),s;!(s=f.next()).done;)H(s.value)&&ht(s.value,e)}}}function nr(t){{var e=t.type;if(e==null||typeof e=="string")return;var a;if(typeof e=="function")a=e.propTypes;else if(typeof e=="object"&&(e.$$typeof===d||e.$$typeof===b))a=e.propTypes;else return;if(a){var n=k(e);Mt(a,t.props,"prop",n,t)}else if(e.PropTypes!==void 0&&!G){G=!0;var i=k(e);u("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof e.getDefaultProps=="function"&&!e.getDefaultProps.isReactClassApproved&&u("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function or(t){{for(var e=Object.keys(t.props),a=0;a<e.length;a++){var n=e[a];if(n!=="children"&&n!=="key"){P(t),u("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),P(null);break}}t.ref!==null&&(P(t),u("Invalid attribute `ref` supplied to `React.Fragment`."),P(null))}}var Ot={};function _t(t,e,a,n,i,f){{var s=Ft(t);if(!s){var o="";(t===void 0||typeof t=="object"&&t!==null&&Object.keys(t).length===0)&&(o+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var y=er();y?o+=y:o+=kt();var l;t===null?l="null":q(t)?l="array":t!==void 0&&t.$$typeof===O?(l="<"+(k(t.type)||"Unknown")+" />",o=" Did you accidentally export a JSX literal instead of a component?"):l=typeof t,u("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",l,o)}var m=rr(t,e,a,i,f);if(m==null)return m;if(s){var v=e.children;if(v!==void 0)if(n)if(q(v)){for(var Y=0;Y<v.length;Y++)Rt(v[Y],t);Object.freeze&&Object.freeze(v)}else u("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Rt(v,t)}if(X.call(e,"key")){var T=k(t),g=Object.keys(e).filter(function(mr){return mr!=="key"}),Z=g.length>0?"{key: someKey, "+g.join(": ..., ")+": ...}":"{key: someKey}";if(!Ot[T+Z]){var lr=g.length>0?"{"+g.join(": ..., ")+": ...}":"{}";u(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Z,T,lr,T),Ot[T+Z]=!0}}return t===h?or(m):nr(m),m}}function sr(t,e,a){return _t(t,e,a,!0)}function ir(t,e,a){return _t(t,e,a,!1)}var fr=ir,cr=sr;L.Fragment=h,L.jsx=fr,L.jsxs=cr}()),L}process.env.NODE_ENV==="production"?Q.exports=dr():Q.exports=ur();var Tt=Q.exports;const pr=r.keyframes`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }

`,yr=r.keyframes`
  from, 50%, to {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
`,gr=r.keyframes`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,vr=r.keyframes`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,br=r.keyframes`
  from, 11.1%, to {
  transform: none;
  }

  22.2% {
  transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
  transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
  transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
  transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
  transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
  transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
  transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,kr=r.keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,xr=r.keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,hr=r.keyframes`
  from, to {
    transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    transform: translate3d(10px, 0, 0);
  }
`,Rr=r.keyframes`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,Or=r.keyframes`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,_r=r.keyframes`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,Er=r.keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%, 20% {
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }

  30%, 50%, 70%, 90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%, 60%, 80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,wr=r.keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Tr=r.keyframes`
  0% {
    transform: translateY(-1200px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`,Sr=r.keyframes`
  0% {
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`,Ir=r.keyframes`
  0% {
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`,Cr=r.keyframes`
  0% {
    transform: translateY(1200px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`,Pr=r.keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }

  20% {
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    transform: translateY(700px) scale(0.7);
    opacity: 0.7;
  }
`,Yr=r.keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }

  20% {
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }
`,jr=r.keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }

  20% {
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }
`,Dr=r.keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }

  20% {
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    transform: translateY(-700px) scale(0.7);
    opacity: 0.7;
  }
`,Xr=r.keyframes`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,Ar=r.keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Fr=r.keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Lr=r.keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,zr=r.keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$r=r.keyframes`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,Ur=r.keyframes`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,Wr=r.keyframes`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,Br=r.keyframes`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,Mr=r.keyframes`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`,Vr=r.keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Nr=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,qr=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Jr=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Kr=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Gr=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Hr=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Zr=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Qr=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,te=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,re=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ee=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ae=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ne=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,oe=r.keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,se=r.keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,ie=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,fe=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,ce=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,le=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,me=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,de=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,ue=r.keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,pe=r.keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,ye=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,ge=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
  `,ve=r.keyframes`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,be=r.keyframes`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,ke=r.keyframes`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,xe=r.keyframes`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,he=r.keyframes`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`,Re=r.keyframes`
  from {
    transform: translate3d(-100%, 0, 0) skewX(30deg);
    opacity: 0;
  }

  60% {
    transform: skewX(-20deg);
    opacity: 1;
  }

  80% {
    transform: skewX(5deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Oe=r.keyframes`
  from {
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    transform: skewX(-5deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,_e=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: translate3d(-100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
`,Ee=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
`,we=r.keyframes`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Te=r.keyframes`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Se=r.keyframes`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Ie=r.keyframes`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Ce=r.keyframes`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Pe=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,Ye=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,je=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,De=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Xe=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`,Ae=r.keyframes`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Fe=r.keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Le=r.keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ze=r.keyframes`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,$e=r.keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,Ue=r.keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,We=r.keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,Be=r.keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`,Me=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ve=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,Ne=r.keyframes`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,qe=r.keyframes`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,Je=r.keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,Ke=r.keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Ge=r.keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,He=r.keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Ze=r.keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Qe=r.keyframes`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,ta=r.keyframes`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,ra=r.keyframes`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,ea=r.keyframes`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,aa=r.keyframes`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,na=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Tr,backInLeft:Sr,backInRight:Ir,backInUp:Cr,backOutDown:Pr,backOutLeft:Yr,backOutRight:jr,backOutUp:Dr,bounce:pr,bounceIn:Xr,bounceInDown:Ar,bounceInLeft:Fr,bounceInRight:Lr,bounceInUp:zr,bounceOut:$r,bounceOutDown:Ur,bounceOutLeft:Wr,bounceOutRight:Br,bounceOutUp:Mr,fadeIn:Vr,fadeInBottomLeft:Nr,fadeInBottomRight:qr,fadeInDown:Jr,fadeInDownBig:Kr,fadeInLeft:Gr,fadeInLeftBig:Hr,fadeInRight:Zr,fadeInRightBig:Qr,fadeInTopLeft:te,fadeInTopRight:re,fadeInUp:ee,fadeInUpBig:ae,fadeOut:ne,fadeOutBottomLeft:oe,fadeOutBottomRight:se,fadeOutDown:ie,fadeOutDownBig:fe,fadeOutLeft:ce,fadeOutLeftBig:le,fadeOutRight:me,fadeOutRightBig:de,fadeOutTopLeft:ue,fadeOutTopRight:pe,fadeOutUp:ye,fadeOutUpBig:ge,flash:yr,flip:ve,flipInX:be,flipInY:ke,flipOutX:xe,flipOutY:he,headShake:gr,heartBeat:vr,hinge:Ne,jackInTheBox:qe,jello:br,lightSpeedInLeft:Re,lightSpeedInRight:Oe,lightSpeedOutLeft:_e,lightSpeedOutRight:Ee,pulse:kr,rollIn:Me,rollOut:Ve,rotateIn:we,rotateInDownLeft:Te,rotateInDownRight:Se,rotateInUpLeft:Ie,rotateInUpRight:Ce,rotateOut:Pe,rotateOutDownLeft:Ye,rotateOutDownRight:je,rotateOutUpLeft:De,rotateOutUpRight:Xe,rubberBand:xr,shake:hr,shakeX:Rr,shakeY:Or,slideInDown:Ae,slideInLeft:Fe,slideInRight:Le,slideInUp:ze,slideOutDown:$e,slideOutLeft:Ue,slideOutRight:We,slideOutUp:Be,swing:_r,tada:Er,wobble:wr,zoomIn:Je,zoomInDown:Ke,zoomInLeft:Ge,zoomInRight:He,zoomInUp:Ze,zoomOut:Qe,zoomOutDown:ta,zoomOutLeft:ra,zoomOutRight:ea,zoomOutUp:aa},Symbol.toStringTag,{value:"Module"})),oa=c=>r.css`
    animation: ${c.duration} ${c.timingFunction} ${c.delay}
      ${c.iterationCount} ${c.direction} ${c.fillMode}
      ${c.playState} ${na[c.name]};
  `,sa=r.div.withConfig({shouldForwardProp:c=>!["backfaceVisibility","transformOrigin","opacity","playState","fillMode","iterationCount","timingFunction","delay","duration","direction","name"].includes(c)})`
  transform-origin: ${c=>c.transformOrigin};
  backface-visibility: ${c=>c.backfaceVisibility};
  opacity: ${c=>c.opacity};
  ${c=>c.name&&oa};
`;function ia({name:c="shake",duration:O="2s",timingFunction:j="linear",delay:h="0s",iterationCount:S="infinite",direction:I="normal",fillMode:_="none",playState:x="running",transformOrigin:d="center",backfaceVisibility:R="hidden",opacity:p=1,children:b=Tt.jsx("h1",{children:"Hello World"})}){return Tt.jsx(sa,{name:c,duration:O,timingFunction:j,delay:h,iterationCount:S,direction:I,fillMode:_,playState:x,transformOrigin:d,backfaceVisibility:R,opacity:p,children:b})}exports.AnimateStyled=ia;
