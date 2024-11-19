import St from "react";
import { keyframes as r, styled as ur, css as mr } from "styled-components";
var Q = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wt;
function pr() {
  if (wt) return L;
  wt = 1;
  var f = St, _ = Symbol.for("react.element"), j = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, S = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(h, u, O) {
    var p, b = {}, w = null, z = null;
    O !== void 0 && (w = "" + O), u.key !== void 0 && (w = "" + u.key), u.ref !== void 0 && (z = u.ref);
    for (p in u) R.call(u, p) && !I.hasOwnProperty(p) && (b[p] = u[p]);
    if (h && h.defaultProps) for (p in u = h.defaultProps, u) b[p] === void 0 && (b[p] = u[p]);
    return { $$typeof: _, type: h, key: w, ref: z, props: b, _owner: S.current };
  }
  return L.Fragment = j, L.jsx = E, L.jsxs = E, L;
}
var A = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kt;
function yr() {
  return kt || (kt = 1, process.env.NODE_ENV !== "production" && function() {
    var f = St, _ = Symbol.for("react.element"), j = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), h = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), tt = Symbol.iterator, It = "@@iterator";
    function Ct(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = tt && t[tt] || t[It];
      return typeof a == "function" ? a : null;
    }
    var C = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(t) {
      {
        for (var a = arguments.length, e = new Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++)
          e[n - 1] = arguments[n];
        Pt("error", t, e);
      }
    }
    function Pt(t, a, e) {
      {
        var n = C.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (a += "%s", e = e.concat([i]));
        var c = e.map(function(s) {
          return String(s);
        });
        c.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, c);
      }
    }
    var Yt = !1, jt = !1, Dt = !1, Xt = !1, Ft = !1, rt;
    rt = Symbol.for("react.module.reference");
    function Lt(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === R || t === I || Ft || t === S || t === O || t === p || Xt || t === z || Yt || jt || Dt || typeof t == "object" && t !== null && (t.$$typeof === w || t.$$typeof === b || t.$$typeof === E || t.$$typeof === h || t.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === rt || t.getModuleId !== void 0));
    }
    function At(t, a, e) {
      var n = t.displayName;
      if (n)
        return n;
      var i = a.displayName || a.name || "";
      return i !== "" ? e + "(" + i + ")" : e;
    }
    function at(t) {
      return t.displayName || "Context";
    }
    function x(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case R:
          return "Fragment";
        case j:
          return "Portal";
        case I:
          return "Profiler";
        case S:
          return "StrictMode";
        case O:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case h:
            var a = t;
            return at(a) + ".Consumer";
          case E:
            var e = t;
            return at(e._context) + ".Provider";
          case u:
            return At(t, t.render, "ForwardRef");
          case b:
            var n = t.displayName || null;
            return n !== null ? n : x(t.type) || "Memo";
          case w: {
            var i = t, c = i._payload, s = i._init;
            try {
              return x(s(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, D = 0, et, nt, ot, st, it, ct, ft;
    function lt() {
    }
    lt.__reactDisabledLog = !0;
    function zt() {
      {
        if (D === 0) {
          et = console.log, nt = console.info, ot = console.warn, st = console.error, it = console.group, ct = console.groupCollapsed, ft = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: lt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        D++;
      }
    }
    function $t() {
      {
        if (D--, D === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, t, {
              value: et
            }),
            info: k({}, t, {
              value: nt
            }),
            warn: k({}, t, {
              value: ot
            }),
            error: k({}, t, {
              value: st
            }),
            group: k({}, t, {
              value: it
            }),
            groupCollapsed: k({}, t, {
              value: ct
            }),
            groupEnd: k({}, t, {
              value: ft
            })
          });
        }
        D < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = C.ReactCurrentDispatcher, V;
    function $(t, a, e) {
      {
        if (V === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            V = n && n[1] || "";
          }
        return `
` + V + t;
      }
    }
    var N = !1, U;
    {
      var Ut = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Ut();
    }
    function dt(t, a) {
      if (!t || N)
        return "";
      {
        var e = U.get(t);
        if (e !== void 0)
          return e;
      }
      var n;
      N = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = M.current, M.current = null, zt();
      try {
        if (a) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (g) {
              n = g;
            }
            Reflect.construct(t, [], s);
          } else {
            try {
              s.call();
            } catch (g) {
              n = g;
            }
            t.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            n = g;
          }
          t();
        }
      } catch (g) {
        if (g && n && typeof g.stack == "string") {
          for (var o = g.stack.split(`
`), y = n.stack.split(`
`), l = o.length - 1, d = y.length - 1; l >= 1 && d >= 0 && o[l] !== y[d]; )
            d--;
          for (; l >= 1 && d >= 0; l--, d--)
            if (o[l] !== y[d]) {
              if (l !== 1 || d !== 1)
                do
                  if (l--, d--, d < 0 || o[l] !== y[d]) {
                    var v = `
` + o[l].replace(" at new ", " at ");
                    return t.displayName && v.includes("<anonymous>") && (v = v.replace("<anonymous>", t.displayName)), typeof t == "function" && U.set(t, v), v;
                  }
                while (l >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        N = !1, M.current = c, $t(), Error.prepareStackTrace = i;
      }
      var Y = t ? t.displayName || t.name : "", T = Y ? $(Y) : "";
      return typeof t == "function" && U.set(t, T), T;
    }
    function Wt(t, a, e) {
      return dt(t, !1);
    }
    function Bt(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function W(t, a, e) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return dt(t, Bt(t));
      if (typeof t == "string")
        return $(t);
      switch (t) {
        case O:
          return $("Suspense");
        case p:
          return $("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case u:
            return Wt(t.render);
          case b:
            return W(t.type, a, e);
          case w: {
            var n = t, i = n._payload, c = n._init;
            try {
              return W(c(i), a, e);
            } catch {
            }
          }
        }
      return "";
    }
    var X = Object.prototype.hasOwnProperty, ut = {}, mt = C.ReactDebugCurrentFrame;
    function B(t) {
      if (t) {
        var a = t._owner, e = W(t.type, t._source, a ? a.type : null);
        mt.setExtraStackFrame(e);
      } else
        mt.setExtraStackFrame(null);
    }
    function Mt(t, a, e, n, i) {
      {
        var c = Function.call.bind(X);
        for (var s in t)
          if (c(t, s)) {
            var o = void 0;
            try {
              if (typeof t[s] != "function") {
                var y = Error((n || "React class") + ": " + e + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              o = t[s](a, s, n, e, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              o = l;
            }
            o && !(o instanceof Error) && (B(i), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", e, s, typeof o), B(null)), o instanceof Error && !(o.message in ut) && (ut[o.message] = !0, B(i), m("Failed %s type: %s", e, o.message), B(null));
          }
      }
    }
    var Vt = Array.isArray;
    function J(t) {
      return Vt(t);
    }
    function Nt(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, e = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return e;
      }
    }
    function Jt(t) {
      try {
        return pt(t), !1;
      } catch {
        return !0;
      }
    }
    function pt(t) {
      return "" + t;
    }
    function yt(t) {
      if (Jt(t))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nt(t)), pt(t);
    }
    var F = C.ReactCurrentOwner, qt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, gt, vt, q;
    q = {};
    function Kt(t) {
      if (X.call(t, "ref")) {
        var a = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Gt(t) {
      if (X.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Ht(t, a) {
      if (typeof t.ref == "string" && F.current && a && F.current.stateNode !== a) {
        var e = x(F.current.type);
        q[e] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(F.current.type), t.ref), q[e] = !0);
      }
    }
    function Zt(t, a) {
      {
        var e = function() {
          gt || (gt = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        e.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: e,
          configurable: !0
        });
      }
    }
    function Qt(t, a) {
      {
        var e = function() {
          vt || (vt = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        e.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: e,
          configurable: !0
        });
      }
    }
    var tr = function(t, a, e, n, i, c, s) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: _,
        // Built-in properties that belong on the element
        type: t,
        key: a,
        ref: e,
        props: s,
        // Record the component responsible for creating this element.
        _owner: c
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function rr(t, a, e, n, i) {
      {
        var c, s = {}, o = null, y = null;
        e !== void 0 && (yt(e), o = "" + e), Gt(a) && (yt(a.key), o = "" + a.key), Kt(a) && (y = a.ref, Ht(a, i));
        for (c in a)
          X.call(a, c) && !qt.hasOwnProperty(c) && (s[c] = a[c]);
        if (t && t.defaultProps) {
          var l = t.defaultProps;
          for (c in l)
            s[c] === void 0 && (s[c] = l[c]);
        }
        if (o || y) {
          var d = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          o && Zt(s, d), y && Qt(s, d);
        }
        return tr(t, o, y, i, n, F.current, s);
      }
    }
    var K = C.ReactCurrentOwner, bt = C.ReactDebugCurrentFrame;
    function P(t) {
      if (t) {
        var a = t._owner, e = W(t.type, t._source, a ? a.type : null);
        bt.setExtraStackFrame(e);
      } else
        bt.setExtraStackFrame(null);
    }
    var G;
    G = !1;
    function H(t) {
      return typeof t == "object" && t !== null && t.$$typeof === _;
    }
    function xt() {
      {
        if (K.current) {
          var t = x(K.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function ar(t) {
      return "";
    }
    var ht = {};
    function er(t) {
      {
        var a = xt();
        if (!a) {
          var e = typeof t == "string" ? t : t.displayName || t.name;
          e && (a = `

Check the top-level render call using <` + e + ">.");
        }
        return a;
      }
    }
    function Rt(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var e = er(a);
        if (ht[e])
          return;
        ht[e] = !0;
        var n = "";
        t && t._owner && t._owner !== K.current && (n = " It was passed a child from " + x(t._owner.type) + "."), P(t), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', e, n), P(null);
      }
    }
    function Ot(t, a) {
      {
        if (typeof t != "object")
          return;
        if (J(t))
          for (var e = 0; e < t.length; e++) {
            var n = t[e];
            H(n) && Rt(n, a);
          }
        else if (H(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var i = Ct(t);
          if (typeof i == "function" && i !== t.entries)
            for (var c = i.call(t), s; !(s = c.next()).done; )
              H(s.value) && Rt(s.value, a);
        }
      }
    }
    function nr(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var e;
        if (typeof a == "function")
          e = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === b))
          e = a.propTypes;
        else
          return;
        if (e) {
          var n = x(a);
          Mt(e, t.props, "prop", n, t);
        } else if (a.PropTypes !== void 0 && !G) {
          G = !0;
          var i = x(a);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(t) {
      {
        for (var a = Object.keys(t.props), e = 0; e < a.length; e++) {
          var n = a[e];
          if (n !== "children" && n !== "key") {
            P(t), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), P(null);
            break;
          }
        }
        t.ref !== null && (P(t), m("Invalid attribute `ref` supplied to `React.Fragment`."), P(null));
      }
    }
    var _t = {};
    function Et(t, a, e, n, i, c) {
      {
        var s = Lt(t);
        if (!s) {
          var o = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = ar();
          y ? o += y : o += xt();
          var l;
          t === null ? l = "null" : J(t) ? l = "array" : t !== void 0 && t.$$typeof === _ ? (l = "<" + (x(t.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : l = typeof t, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, o);
        }
        var d = rr(t, a, e, i, c);
        if (d == null)
          return d;
        if (s) {
          var v = a.children;
          if (v !== void 0)
            if (n)
              if (J(v)) {
                for (var Y = 0; Y < v.length; Y++)
                  Ot(v[Y], t);
                Object.freeze && Object.freeze(v);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ot(v, t);
        }
        if (X.call(a, "key")) {
          var T = x(t), g = Object.keys(a).filter(function(dr) {
            return dr !== "key";
          }), Z = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_t[T + Z]) {
            var lr = g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Z, T, lr, T), _t[T + Z] = !0;
          }
        }
        return t === R ? or(d) : nr(d), d;
      }
    }
    function sr(t, a, e) {
      return Et(t, a, e, !0);
    }
    function ir(t, a, e) {
      return Et(t, a, e, !1);
    }
    var cr = ir, fr = sr;
    A.Fragment = R, A.jsx = cr, A.jsxs = fr;
  }()), A;
}
process.env.NODE_ENV === "production" ? Q.exports = pr() : Q.exports = yr();
var Tt = Q.exports;
const gr = r`
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

`, vr = r`
  from, 50%, to {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
`, br = r`
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
`, xr = r`
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
`, hr = r`
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
`, Rr = r`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`, Or = r`
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
`, _r = r`
  from, to {
    transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    transform: translate3d(10px, 0, 0);
  }
`, Er = r`
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
`, wr = r`
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
`, kr = r`
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
`, Tr = r`
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
`, Sr = r`
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
`, Ir = r`
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
`, Cr = r`
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
`, Pr = r`
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
`, Yr = r`
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
`, jr = r`
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
`, Dr = r`
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
`, Xr = r`
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
`, Fr = r`
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
`, Lr = r`
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
`, Ar = r`
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
`, zr = r`
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
`, $r = r`
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
`, Ur = r`
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
`, Wr = r`
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
`, Br = r`
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
`, Mr = r`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`, Vr = r`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`, Nr = r`
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
`, Jr = r`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`, qr = r`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`, Kr = r`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`, Gr = r`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`, Hr = r`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`, Zr = r`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`, Qr = r`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`, ta = r`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`, ra = r`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`, aa = r`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`, ea = r`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`, na = r`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`, oa = r`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`, sa = r`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`, ia = r`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`, ca = r`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`, fa = r`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`, la = r`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`, da = r`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`, ua = r`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`, ma = r`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`, pa = r`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`, ya = r`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`, ga = r`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`, va = r`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`, ba = r`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
  `, xa = r`
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
`, ha = r`
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
`, Ra = r`
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
`, Oa = r`
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
`, _a = r`
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
`, Ea = r`
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
`, wa = r`
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
`, ka = r`
  from {
    opacity: 1;
  }

  to {
    transform: translate3d(-100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
`, Ta = r`
  from {
    opacity: 1;
  }

  to {
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
`, Sa = r`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`, Ia = r`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`, Ca = r`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`, Pa = r`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`, Ya = r`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`, ja = r`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`, Da = r`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`, Xa = r`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`, Fa = r`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`, La = r`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`, Aa = r`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`, za = r`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`, $a = r`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`, Ua = r`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`, Wa = r`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`, Ba = r`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`, Ma = r`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`, Va = r`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`, Na = r`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`, Ja = r`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`, qa = r`
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
`, Ka = r`
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
`, Ga = r`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`, Ha = r`
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
`, Za = r`
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
`, Qa = r`
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
`, te = r`
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
`, re = r`
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
`, ae = r`
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
`, ee = r`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`, ne = r`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`, oe = r`
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
`, se = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  backInDown: Ir,
  backInLeft: Cr,
  backInRight: Pr,
  backInUp: Yr,
  backOutDown: jr,
  backOutLeft: Dr,
  backOutRight: Xr,
  backOutUp: Fr,
  bounce: gr,
  bounceIn: Lr,
  bounceInDown: Ar,
  bounceInLeft: zr,
  bounceInRight: $r,
  bounceInUp: Ur,
  bounceOut: Wr,
  bounceOutDown: Br,
  bounceOutLeft: Mr,
  bounceOutRight: Vr,
  bounceOutUp: Nr,
  fadeIn: Jr,
  fadeInBottomLeft: qr,
  fadeInBottomRight: Kr,
  fadeInDown: Gr,
  fadeInDownBig: Hr,
  fadeInLeft: Zr,
  fadeInLeftBig: Qr,
  fadeInRight: ta,
  fadeInRightBig: ra,
  fadeInTopLeft: aa,
  fadeInTopRight: ea,
  fadeInUp: na,
  fadeInUpBig: oa,
  fadeOut: sa,
  fadeOutBottomLeft: ia,
  fadeOutBottomRight: ca,
  fadeOutDown: fa,
  fadeOutDownBig: la,
  fadeOutLeft: da,
  fadeOutLeftBig: ua,
  fadeOutRight: ma,
  fadeOutRightBig: pa,
  fadeOutTopLeft: ya,
  fadeOutTopRight: ga,
  fadeOutUp: va,
  fadeOutUpBig: ba,
  flash: vr,
  flip: xa,
  flipInX: ha,
  flipInY: Ra,
  flipOutX: Oa,
  flipOutY: _a,
  headShake: br,
  heartBeat: xr,
  hinge: qa,
  jackInTheBox: Ka,
  jello: hr,
  lightSpeedInLeft: Ea,
  lightSpeedInRight: wa,
  lightSpeedOutLeft: ka,
  lightSpeedOutRight: Ta,
  pulse: Rr,
  rollIn: Na,
  rollOut: Ja,
  rotateIn: Sa,
  rotateInDownLeft: Ia,
  rotateInDownRight: Ca,
  rotateInUpLeft: Pa,
  rotateInUpRight: Ya,
  rotateOut: ja,
  rotateOutDownLeft: Da,
  rotateOutDownRight: Xa,
  rotateOutUpLeft: Fa,
  rotateOutUpRight: La,
  rubberBand: Or,
  shake: _r,
  shakeX: Er,
  shakeY: wr,
  slideInDown: Aa,
  slideInLeft: za,
  slideInRight: $a,
  slideInUp: Ua,
  slideOutDown: Wa,
  slideOutLeft: Ba,
  slideOutRight: Ma,
  slideOutUp: Va,
  swing: kr,
  tada: Tr,
  wobble: Sr,
  zoomIn: Ga,
  zoomInDown: Ha,
  zoomInLeft: Za,
  zoomInRight: Qa,
  zoomInUp: te,
  zoomOut: re,
  zoomOutDown: ae,
  zoomOutLeft: ee,
  zoomOutRight: ne,
  zoomOutUp: oe
}, Symbol.toStringTag, { value: "Module" })), ie = /* @__PURE__ */ new Set([
  "backfaceVisibility",
  "transformOrigin",
  "opacity",
  "playState",
  "fillMode",
  "iterationCount",
  "timingFunction",
  "delay",
  "duration",
  "direction",
  "name"
]), ce = (f) => mr`
    animation: ${f.duration} ${f.timingFunction} ${f.delay}
      ${f.iterationCount} ${f.direction} ${f.fillMode}
      ${f.playState} ${se[f.name]};
  `, fe = ur.div.withConfig({
  shouldForwardProp: (f) => !ie.has(f)
})`
  transform-origin: ${(f) => f.transformOrigin};
  backface-visibility: ${(f) => f.backfaceVisibility};
  opacity: ${(f) => f.opacity};
  ${(f) => f.name && ce};
`;
function ue({
  name: f = "shake",
  duration: _ = "2s",
  timingFunction: j = "linear",
  delay: R = "0s",
  iterationCount: S = "infinite",
  direction: I = "normal",
  fillMode: E = "none",
  playState: h = "running",
  transformOrigin: u = "center",
  backfaceVisibility: O = "hidden",
  opacity: p = 1,
  children: b = /* @__PURE__ */ Tt.jsx("h1", { children: "Hello World" })
}) {
  return /* @__PURE__ */ Tt.jsx(
    fe,
    {
      name: f,
      duration: _,
      timingFunction: j,
      delay: R,
      iterationCount: S,
      direction: I,
      fillMode: E,
      playState: h,
      transformOrigin: u,
      backfaceVisibility: O,
      opacity: p,
      children: b
    }
  );
}
export {
  ue as AnimateStyled
};
