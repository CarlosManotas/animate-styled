(function(h,r){typeof exports=="object"&&typeof module<"u"?module.exports=r(require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["react","styled-components"],r):(h=typeof globalThis<"u"?globalThis:h||self,h.AnimateStyled=r(h.React,h.styled))})(this,function(h,r){"use strict";var V={exports:{}},D={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rt;function It(){if(rt)return D;rt=1;var c=h,_=Symbol.for("react.element"),A=Symbol.for("react.fragment"),R=Object.prototype.hasOwnProperty,I=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y={key:!0,ref:!0,__self:!0,__source:!0};function E(x,u,O){var d,b={},w=null,$=null;O!==void 0&&(w=""+O),u.key!==void 0&&(w=""+u.key),u.ref!==void 0&&($=u.ref);for(d in u)R.call(u,d)&&!Y.hasOwnProperty(d)&&(b[d]=u[d]);if(x&&x.defaultProps)for(d in u=x.defaultProps,u)b[d]===void 0&&(b[d]=u[d]);return{$$typeof:_,type:x,key:w,ref:$,props:b,_owner:I.current}}return D.Fragment=A,D.jsx=E,D.jsxs=E,D}var X={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var at;function Yt(){return at||(at=1,process.env.NODE_ENV!=="production"&&function(){var c=h,_=Symbol.for("react.element"),A=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),x=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),b=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),nt=Symbol.iterator,Ea="@@iterator";function wa(t){if(t===null||typeof t!="object")return null;var a=nt&&t[nt]||t[Ea];return typeof a=="function"?a:null}var j=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function p(t){{for(var a=arguments.length,e=new Array(a>1?a-1:0),n=1;n<a;n++)e[n-1]=arguments[n];Ta("error",t,e)}}function Ta(t,a,e){{var n=j.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(a+="%s",e=e.concat([i]));var f=e.map(function(s){return String(s)});f.unshift("Warning: "+a),Function.prototype.apply.call(console[t],console,f)}}var Sa=!1,Ia=!1,Ya=!1,ja=!1,Ca=!1,ot;ot=Symbol.for("react.module.reference");function Pa(t){return!!(typeof t=="string"||typeof t=="function"||t===R||t===Y||Ca||t===I||t===O||t===d||ja||t===$||Sa||Ia||Ya||typeof t=="object"&&t!==null&&(t.$$typeof===w||t.$$typeof===b||t.$$typeof===E||t.$$typeof===x||t.$$typeof===u||t.$$typeof===ot||t.getModuleId!==void 0))}function Da(t,a,e){var n=t.displayName;if(n)return n;var i=a.displayName||a.name||"";return i!==""?e+"("+i+")":e}function st(t){return t.displayName||"Context"}function k(t){if(t==null)return null;if(typeof t.tag=="number"&&p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case A:return"Portal";case Y:return"Profiler";case I:return"StrictMode";case O:return"Suspense";case d:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case x:var a=t;return st(a)+".Consumer";case E:var e=t;return st(e._context)+".Provider";case u:return Da(t,t.render,"ForwardRef");case b:var n=t.displayName||null;return n!==null?n:k(t.type)||"Memo";case w:{var i=t,f=i._payload,s=i._init;try{return k(s(f))}catch{return null}}}return null}var T=Object.assign,L=0,it,ft,ct,mt,lt,ut,pt;function dt(){}dt.__reactDisabledLog=!0;function Xa(){{if(L===0){it=console.log,ft=console.info,ct=console.warn,mt=console.error,lt=console.group,ut=console.groupCollapsed,pt=console.groupEnd;var t={configurable:!0,enumerable:!0,value:dt,writable:!0};Object.defineProperties(console,{info:t,log:t,warn:t,error:t,group:t,groupCollapsed:t,groupEnd:t})}L++}}function Aa(){{if(L--,L===0){var t={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:T({},t,{value:it}),info:T({},t,{value:ft}),warn:T({},t,{value:ct}),error:T({},t,{value:mt}),group:T({},t,{value:lt}),groupCollapsed:T({},t,{value:ut}),groupEnd:T({},t,{value:pt})})}L<0&&p("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var N=j.ReactCurrentDispatcher,J;function U(t,a,e){{if(J===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);J=n&&n[1]||""}return`
`+J+t}}var q=!1,W;{var La=typeof WeakMap=="function"?WeakMap:Map;W=new La}function yt(t,a){if(!t||q)return"";{var e=W.get(t);if(e!==void 0)return e}var n;q=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var f;f=N.current,N.current=null,Xa();try{if(a){var s=function(){throw Error()};if(Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(g){n=g}Reflect.construct(t,[],s)}else{try{s.call()}catch(g){n=g}t.call(s.prototype)}}else{try{throw Error()}catch(g){n=g}t()}}catch(g){if(g&&n&&typeof g.stack=="string"){for(var o=g.stack.split(`
`),y=n.stack.split(`
`),m=o.length-1,l=y.length-1;m>=1&&l>=0&&o[m]!==y[l];)l--;for(;m>=1&&l>=0;m--,l--)if(o[m]!==y[l]){if(m!==1||l!==1)do if(m--,l--,l<0||o[m]!==y[l]){var v=`
`+o[m].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),typeof t=="function"&&W.set(t,v),v}while(m>=1&&l>=0);break}}}finally{q=!1,N.current=f,Aa(),Error.prepareStackTrace=i}var P=t?t.displayName||t.name:"",S=P?U(P):"";return typeof t=="function"&&W.set(t,S),S}function Fa(t,a,e){return yt(t,!1)}function za(t){var a=t.prototype;return!!(a&&a.isReactComponent)}function B(t,a,e){if(t==null)return"";if(typeof t=="function")return yt(t,za(t));if(typeof t=="string")return U(t);switch(t){case O:return U("Suspense");case d:return U("SuspenseList")}if(typeof t=="object")switch(t.$$typeof){case u:return Fa(t.render);case b:return B(t.type,a,e);case w:{var n=t,i=n._payload,f=n._init;try{return B(f(i),a,e)}catch{}}}return""}var F=Object.prototype.hasOwnProperty,gt={},vt=j.ReactDebugCurrentFrame;function M(t){if(t){var a=t._owner,e=B(t.type,t._source,a?a.type:null);vt.setExtraStackFrame(e)}else vt.setExtraStackFrame(null)}function $a(t,a,e,n,i){{var f=Function.call.bind(F);for(var s in t)if(f(t,s)){var o=void 0;try{if(typeof t[s]!="function"){var y=Error((n||"React class")+": "+e+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof t[s]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw y.name="Invariant Violation",y}o=t[s](a,s,n,e,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(m){o=m}o&&!(o instanceof Error)&&(M(i),p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",e,s,typeof o),M(null)),o instanceof Error&&!(o.message in gt)&&(gt[o.message]=!0,M(i),p("Failed %s type: %s",e,o.message),M(null))}}}var Ua=Array.isArray;function K(t){return Ua(t)}function Wa(t){{var a=typeof Symbol=="function"&&Symbol.toStringTag,e=a&&t[Symbol.toStringTag]||t.constructor.name||"Object";return e}}function Ba(t){try{return bt(t),!1}catch{return!0}}function bt(t){return""+t}function kt(t){if(Ba(t))return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Wa(t)),bt(t)}var z=j.ReactCurrentOwner,Ma={key:!0,ref:!0,__self:!0,__source:!0},xt,ht,G;G={};function Va(t){if(F.call(t,"ref")){var a=Object.getOwnPropertyDescriptor(t,"ref").get;if(a&&a.isReactWarning)return!1}return t.ref!==void 0}function Na(t){if(F.call(t,"key")){var a=Object.getOwnPropertyDescriptor(t,"key").get;if(a&&a.isReactWarning)return!1}return t.key!==void 0}function Ja(t,a){if(typeof t.ref=="string"&&z.current&&a&&z.current.stateNode!==a){var e=k(z.current.type);G[e]||(p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',k(z.current.type),t.ref),G[e]=!0)}}function qa(t,a){{var e=function(){xt||(xt=!0,p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",a))};e.isReactWarning=!0,Object.defineProperty(t,"key",{get:e,configurable:!0})}}function Ka(t,a){{var e=function(){ht||(ht=!0,p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",a))};e.isReactWarning=!0,Object.defineProperty(t,"ref",{get:e,configurable:!0})}}var Ga=function(t,a,e,n,i,f,s){var o={$$typeof:_,type:t,key:a,ref:e,props:s,_owner:f};return o._store={},Object.defineProperty(o._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(o,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(o,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(o.props),Object.freeze(o)),o};function Ha(t,a,e,n,i){{var f,s={},o=null,y=null;e!==void 0&&(kt(e),o=""+e),Na(a)&&(kt(a.key),o=""+a.key),Va(a)&&(y=a.ref,Ja(a,i));for(f in a)F.call(a,f)&&!Ma.hasOwnProperty(f)&&(s[f]=a[f]);if(t&&t.defaultProps){var m=t.defaultProps;for(f in m)s[f]===void 0&&(s[f]=m[f])}if(o||y){var l=typeof t=="function"?t.displayName||t.name||"Unknown":t;o&&qa(s,l),y&&Ka(s,l)}return Ga(t,o,y,i,n,z.current,s)}}var H=j.ReactCurrentOwner,Rt=j.ReactDebugCurrentFrame;function C(t){if(t){var a=t._owner,e=B(t.type,t._source,a?a.type:null);Rt.setExtraStackFrame(e)}else Rt.setExtraStackFrame(null)}var Z;Z=!1;function Q(t){return typeof t=="object"&&t!==null&&t.$$typeof===_}function Ot(){{if(H.current){var t=k(H.current.type);if(t)return`

Check the render method of \``+t+"`."}return""}}function Za(t){return""}var _t={};function Qa(t){{var a=Ot();if(!a){var e=typeof t=="string"?t:t.displayName||t.name;e&&(a=`

Check the top-level render call using <`+e+">.")}return a}}function Et(t,a){{if(!t._store||t._store.validated||t.key!=null)return;t._store.validated=!0;var e=Qa(a);if(_t[e])return;_t[e]=!0;var n="";t&&t._owner&&t._owner!==H.current&&(n=" It was passed a child from "+k(t._owner.type)+"."),C(t),p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',e,n),C(null)}}function wt(t,a){{if(typeof t!="object")return;if(K(t))for(var e=0;e<t.length;e++){var n=t[e];Q(n)&&Et(n,a)}else if(Q(t))t._store&&(t._store.validated=!0);else if(t){var i=wa(t);if(typeof i=="function"&&i!==t.entries)for(var f=i.call(t),s;!(s=f.next()).done;)Q(s.value)&&Et(s.value,a)}}}function te(t){{var a=t.type;if(a==null||typeof a=="string")return;var e;if(typeof a=="function")e=a.propTypes;else if(typeof a=="object"&&(a.$$typeof===u||a.$$typeof===b))e=a.propTypes;else return;if(e){var n=k(a);$a(e,t.props,"prop",n,t)}else if(a.PropTypes!==void 0&&!Z){Z=!0;var i=k(a);p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof a.getDefaultProps=="function"&&!a.getDefaultProps.isReactClassApproved&&p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function re(t){{for(var a=Object.keys(t.props),e=0;e<a.length;e++){var n=a[e];if(n!=="children"&&n!=="key"){C(t),p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),C(null);break}}t.ref!==null&&(C(t),p("Invalid attribute `ref` supplied to `React.Fragment`."),C(null))}}var Tt={};function St(t,a,e,n,i,f){{var s=Pa(t);if(!s){var o="";(t===void 0||typeof t=="object"&&t!==null&&Object.keys(t).length===0)&&(o+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var y=Za();y?o+=y:o+=Ot();var m;t===null?m="null":K(t)?m="array":t!==void 0&&t.$$typeof===_?(m="<"+(k(t.type)||"Unknown")+" />",o=" Did you accidentally export a JSX literal instead of a component?"):m=typeof t,p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",m,o)}var l=Ha(t,a,e,i,f);if(l==null)return l;if(s){var v=a.children;if(v!==void 0)if(n)if(K(v)){for(var P=0;P<v.length;P++)wt(v[P],t);Object.freeze&&Object.freeze(v)}else p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else wt(v,t)}if(F.call(a,"key")){var S=k(t),g=Object.keys(a).filter(function(ie){return ie!=="key"}),tt=g.length>0?"{key: someKey, "+g.join(": ..., ")+": ...}":"{key: someKey}";if(!Tt[S+tt]){var se=g.length>0?"{"+g.join(": ..., ")+": ...}":"{}";p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,tt,S,se,S),Tt[S+tt]=!0}}return t===R?re(l):te(l),l}}function ae(t,a,e){return St(t,a,e,!0)}function ee(t,a,e){return St(t,a,e,!1)}var ne=ee,oe=ae;X.Fragment=R,X.jsx=ne,X.jsxs=oe}()),X}process.env.NODE_ENV==="production"?V.exports=It():V.exports=Yt();var et=V.exports;const jt=r.keyframes`
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

`,Ct=r.keyframes`
  from, 50%, to {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
`,Pt=r.keyframes`
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
`,Dt=r.keyframes`
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
`,Xt=r.keyframes`
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
`,At=r.keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Lt=r.keyframes`
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
`,Ft=r.keyframes`
  from, to {
    transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    transform: translate3d(10px, 0, 0);
  }
`,zt=r.keyframes`
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
`,$t=r.keyframes`
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
`,Ut=r.keyframes`
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
`,Wt=r.keyframes`
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
`,Bt=r.keyframes`
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
`,Mt=r.keyframes`
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
`,Vt=r.keyframes`
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
`,Nt=r.keyframes`
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
`,Jt=r.keyframes`
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
`,qt=r.keyframes`
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
`,Kt=r.keyframes`
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
`,Gt=r.keyframes`
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
`,Ht=r.keyframes`
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
`,Zt=r.keyframes`
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
`,Qt=r.keyframes`
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
`,tr=r.keyframes`
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
`,rr=r.keyframes`
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
`,ar=r.keyframes`
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
`,er=r.keyframes`
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
`,nr=r.keyframes`
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
`,or=r.keyframes`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,sr=r.keyframes`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,ir=r.keyframes`
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
`,fr=r.keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,cr=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,mr=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,lr=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ur=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,pr=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,dr=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,yr=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,gr=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vr=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,br=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,kr=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xr=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,hr=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Rr=r.keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Or=r.keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,_r=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Er=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,wr=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Tr=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Sr=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Ir=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Yr=r.keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,jr=r.keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Cr=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Pr=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
  `,Dr=r.keyframes`
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
`,Xr=r.keyframes`
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
`,Ar=r.keyframes`
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
`,Lr=r.keyframes`
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
`,Fr=r.keyframes`
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
`,zr=r.keyframes`
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
`,$r=r.keyframes`
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
`,Ur=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: translate3d(-100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
`,Wr=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
`,Br=r.keyframes`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Mr=r.keyframes`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Vr=r.keyframes`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Nr=r.keyframes`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Jr=r.keyframes`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,qr=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,Kr=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,Gr=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Hr=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Zr=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`,Qr=r.keyframes`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ta=r.keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ra=r.keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,aa=r.keyframes`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ea=r.keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,na=r.keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,oa=r.keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,sa=r.keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`,ia=r.keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,fa=r.keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,ca=r.keyframes`
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
`,ma=r.keyframes`
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
`,la=r.keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,ua=r.keyframes`
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
`,pa=r.keyframes`
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
`,da=r.keyframes`
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
`,ya=r.keyframes`
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
`,ga=r.keyframes`
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
`,va=r.keyframes`
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
`,ba=r.keyframes`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,ka=r.keyframes`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,xa=r.keyframes`
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
`,ha=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Mt,backInLeft:Vt,backInRight:Nt,backInUp:Jt,backOutDown:qt,backOutLeft:Kt,backOutRight:Gt,backOutUp:Ht,bounce:jt,bounceIn:Zt,bounceInDown:Qt,bounceInLeft:tr,bounceInRight:rr,bounceInUp:ar,bounceOut:er,bounceOutDown:nr,bounceOutLeft:or,bounceOutRight:sr,bounceOutUp:ir,fadeIn:fr,fadeInBottomLeft:cr,fadeInBottomRight:mr,fadeInDown:lr,fadeInDownBig:ur,fadeInLeft:pr,fadeInLeftBig:dr,fadeInRight:yr,fadeInRightBig:gr,fadeInTopLeft:vr,fadeInTopRight:br,fadeInUp:kr,fadeInUpBig:xr,fadeOut:hr,fadeOutBottomLeft:Rr,fadeOutBottomRight:Or,fadeOutDown:_r,fadeOutDownBig:Er,fadeOutLeft:wr,fadeOutLeftBig:Tr,fadeOutRight:Sr,fadeOutRightBig:Ir,fadeOutTopLeft:Yr,fadeOutTopRight:jr,fadeOutUp:Cr,fadeOutUpBig:Pr,flash:Ct,flip:Dr,flipInX:Xr,flipInY:Ar,flipOutX:Lr,flipOutY:Fr,headShake:Pt,heartBeat:Dt,hinge:ca,jackInTheBox:ma,jello:Xt,lightSpeedInLeft:zr,lightSpeedInRight:$r,lightSpeedOutLeft:Ur,lightSpeedOutRight:Wr,pulse:At,rollIn:ia,rollOut:fa,rotateIn:Br,rotateInDownLeft:Mr,rotateInDownRight:Vr,rotateInUpLeft:Nr,rotateInUpRight:Jr,rotateOut:qr,rotateOutDownLeft:Kr,rotateOutDownRight:Gr,rotateOutUpLeft:Hr,rotateOutUpRight:Zr,rubberBand:Lt,shake:Ft,shakeX:zt,shakeY:$t,slideInDown:Qr,slideInLeft:ta,slideInRight:ra,slideInUp:aa,slideOutDown:ea,slideOutLeft:na,slideOutRight:oa,slideOutUp:sa,swing:Ut,tada:Wt,wobble:Bt,zoomIn:la,zoomInDown:ua,zoomInLeft:pa,zoomInRight:da,zoomInUp:ya,zoomOut:ga,zoomOutDown:va,zoomOutLeft:ba,zoomOutRight:ka,zoomOutUp:xa},Symbol.toStringTag,{value:"Module"})),Ra=c=>r.css`
    animation: ${c.duration} ${c.timingFunction} ${c.delay}
      ${c.iterationCount} ${c.direction} ${c.fillMode}
      ${c.playState} ${ha[c.name]};
  `,Oa=r.div`
  transform-origin: ${c=>c.transformOrigin};
  backface-visibility: ${c=>c.backfaceVisibility};
  opacity: ${c=>c.opacity};
  ${c=>c.name&&Ra};
`;function _a({name:c="shake",duration:_="2s",timingFunction:A="linear",delay:R="0s",iterationCount:I="infinite",direction:Y="normal",fillMode:E="none",playState:x="running",transformOrigin:u="center",backfaceVisibility:O="hidden",opacity:d=1,children:b=et.jsx("h1",{children:"Hello World"})}){return et.jsx(Oa,{name:c,duration:_,timingFunction:A,delay:R,iterationCount:I,direction:Y,fillMode:E,playState:x,transformOrigin:u,backfaceVisibility:O,opacity:d,children:b})}return _a});
