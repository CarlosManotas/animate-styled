'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zoomOutUp = exports.zoomOutRight = exports.zoomOutLeft = exports.zoomOutDown = exports.zoomOut = exports.zoomInUp = exports.zoomInRight = exports.zoomInLeft = exports.zoomInDown = exports.zoomIn = exports.rollOut = exports.rollIn = exports.jackInTheBox = exports.hinge = exports.slideOutUp = exports.slideOutRight = exports.slideOutLeft = exports.slideOutDown = exports.slideInUp = exports.slideInRight = exports.slideInLeft = exports.slideInDown = exports.rotateOutUpRight = exports.rotateOutUpLeft = exports.rotateOutDownRight = exports.rotateOutDownLeft = exports.rotateOut = exports.rotateInUpRight = exports.rotateInUpLeft = exports.rotateInDownRight = exports.rotateInDownLeft = exports.rotateIn = exports.lightSpeedOut = exports.lightSpeedIn = exports.flipOutY = exports.flipOutX = exports.flipInY = exports.flipInX = exports.flip = exports.fadeOutUpBig = exports.fadeOutUp = exports.fadeOutRightBig = exports.fadeOutRight = exports.fadeOutLeftBig = exports.fadeOutLeft = exports.fadeOutDownBig = exports.fadeOutDown = exports.fadeOut = exports.fadeInUpBig = exports.fadeInUp = exports.fadeInRightBig = exports.fadeInRight = exports.fadeInLeftBig = exports.fadeInLeft = exports.fadeInDownBig = exports.fadeInDown = exports.fadeIn = exports.bounceOutUp = exports.bounceOutRight = exports.bounceOutLeft = exports.bounceOutDown = exports.bounceOut = exports.bounceInUp = exports.bounceInRight = exports.bounceInLeft = exports.bounceInDown = exports.bounceIn = exports.wobble = exports.tada = exports.swing = exports.shake = exports.rubberBand = exports.pulse = exports.jello = exports.headShake = exports.flash = exports.bounce = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  from, 20%, 53%, 80%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, -4px, 0);\n  }\n'], ['\n  from, 20%, 53%, 80%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, -4px, 0);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  from, 50%, to {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n'], ['\n  from, 50%, to {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  0% {\n    transform: translateX(0);\n  }\n\n  6.5% {\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    transform: translateX(0);\n  }\n'], ['\n  0% {\n    transform: translateX(0);\n  }\n\n  6.5% {\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    transform: translateX(0);\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  from, 11.1%, to {\n  transform: none;\n  }\n\n  22.2% {\n  transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n  transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n  transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n  transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n  transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n  transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n  transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n'], ['\n  from, 11.1%, to {\n  transform: none;\n  }\n\n  22.2% {\n  transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n  transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n  transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n  transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n  transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n  transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n  transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n'], ['\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n'], ['\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  from, to {\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    transform: translate3d(10px, 0, 0);\n  }\n'], ['\n  from, to {\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    transform: translate3d(10px, 0, 0);\n  }\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  20% {\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n'], ['\n  20% {\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n'], ['\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  from {\n  transform: none;\n  }\n\n  15% {\n  transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n  transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n  transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n  transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n  transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n  transform: none;\n  }\n'], ['\n  from {\n  transform: none;\n  }\n\n  15% {\n  transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n  transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n  transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n  transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n  transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n  transform: none;\n  }\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  from, 20%, 40%, 60%, 80%, to {\n  animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n  opacity: 0;\n  transform: scale3d(.3, .3, .3);\n  }\n\n  20% {\n  transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n  transform: scale3d(.9, .9, .9);\n  }\n\n  60% {\n  opacity: 1;\n  transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n  transform: scale3d(.97, .97, .97);\n  }\n\n  to {\n  opacity: 1;\n  transform: scale3d(1, 1, 1);\n  }\n'], ['\n  from, 20%, 40%, 60%, 80%, to {\n  animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n  opacity: 0;\n  transform: scale3d(.3, .3, .3);\n  }\n\n  20% {\n  transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n  transform: scale3d(.9, .9, .9);\n  }\n\n  60% {\n  opacity: 1;\n  transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n  transform: scale3d(.97, .97, .97);\n  }\n\n  to {\n  opacity: 1;\n  transform: scale3d(1, 1, 1);\n  }\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n  from, 60%, 75%, 90%, to {\n  animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n  opacity: 0;\n  transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n  opacity: 1;\n  transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n  transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n  transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n  transform: none;\n  }\n'], ['\n  from, 60%, 75%, 90%, to {\n  animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n  opacity: 0;\n  transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n  opacity: 1;\n  transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n  transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n  transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n  transform: none;\n  }\n']),
    _templateObject13 = _taggedTemplateLiteral(['\n  from, 60%, 75%, 90%, to {\n  animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n  opacity: 0;\n  transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n  opacity: 1;\n  transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n  transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n  transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n  transform: none;\n  }\n'], ['\n  from, 60%, 75%, 90%, to {\n  animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n  opacity: 0;\n  transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n  opacity: 1;\n  transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n  transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n  transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n  transform: none;\n  }\n']),
    _templateObject14 = _taggedTemplateLiteral(['\n  from, 60%, 75%, 90%, to {\n  animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n  opacity: 0;\n  transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n  opacity: 1;\n  transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n  transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n  transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n  transform: none;\n  }\n'], ['\n  from, 60%, 75%, 90%, to {\n  animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n  opacity: 0;\n  transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n  opacity: 1;\n  transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n  transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n  transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n  transform: none;\n  }\n']),
    _templateObject15 = _taggedTemplateLiteral(['\n  from, 60%, 75%, 90%, to {\n  animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n  opacity: 0;\n  transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n  opacity: 1;\n  transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n  transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n  transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n  transform: translate3d(0, 0, 0);\n  }\n'], ['\n  from, 60%, 75%, 90%, to {\n  animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n  opacity: 0;\n  transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n  opacity: 1;\n  transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n  transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n  transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n  transform: translate3d(0, 0, 0);\n  }\n']),
    _templateObject16 = _taggedTemplateLiteral(['\n  20% {\n  transform: scale3d(.9, .9, .9);\n  }\n\n  50%, 55% {\n  opacity: 1;\n  transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n  opacity: 0;\n  transform: scale3d(.3, .3, .3);\n  }\n'], ['\n  20% {\n  transform: scale3d(.9, .9, .9);\n  }\n\n  50%, 55% {\n  opacity: 1;\n  transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n  opacity: 0;\n  transform: scale3d(.3, .3, .3);\n  }\n']),
    _templateObject17 = _taggedTemplateLiteral(['\n  20% {\n  transform: translate3d(0, 10px, 0);\n  }\n\n  40%, 45% {\n  opacity: 1;\n  transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n  opacity: 0;\n  transform: translate3d(0, 2000px, 0);\n  }\n'], ['\n  20% {\n  transform: translate3d(0, 10px, 0);\n  }\n\n  40%, 45% {\n  opacity: 1;\n  transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n  opacity: 0;\n  transform: translate3d(0, 2000px, 0);\n  }\n']),
    _templateObject18 = _taggedTemplateLiteral(['\n  20% {\n  opacity: 1;\n  transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n  opacity: 0;\n  transform: translate3d(-2000px, 0, 0);\n  }\n'], ['\n  20% {\n  opacity: 1;\n  transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n  opacity: 0;\n  transform: translate3d(-2000px, 0, 0);\n  }\n']),
    _templateObject19 = _taggedTemplateLiteral(['\n  20% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n'], ['\n  20% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n']),
    _templateObject20 = _taggedTemplateLiteral(['\n  20% {\n  transform: translate3d(0, -10px, 0);\n  }\n\n  40%, 45% {\n  opacity: 1;\n  transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n  opacity: 0;\n  transform: translate3d(0, -2000px, 0);\n  }\n'], ['\n  20% {\n  transform: translate3d(0, -10px, 0);\n  }\n\n  40%, 45% {\n  opacity: 1;\n  transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n  opacity: 0;\n  transform: translate3d(0, -2000px, 0);\n  }\n']),
    _templateObject21 = _taggedTemplateLiteral(['\n  from {opacity: 0;}\n  to {opacity: 1;}\n'], ['\n  from {opacity: 0;}\n  to {opacity: 1;}\n']),
    _templateObject22 = _taggedTemplateLiteral(['\n  from {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n'], ['\n  from {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n']),
    _templateObject23 = _taggedTemplateLiteral(['\n  from {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n'], ['\n  from {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n']),
    _templateObject24 = _taggedTemplateLiteral(['\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n'], ['\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n']),
    _templateObject25 = _taggedTemplateLiteral(['\n  from {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n'], ['\n  from {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n']),
    _templateObject26 = _taggedTemplateLiteral(['\n  from {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n'], ['\n  from {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n']),
    _templateObject27 = _taggedTemplateLiteral(['\n  from {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n'], ['\n  from {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n']),
    _templateObject28 = _taggedTemplateLiteral(['\n  from {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n'], ['\n  from {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n']),
    _templateObject29 = _taggedTemplateLiteral(['\n  from {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n'], ['\n  from {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n']),
    _templateObject30 = _taggedTemplateLiteral(['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n'], ['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n']),
    _templateObject31 = _taggedTemplateLiteral(['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n'], ['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n']),
    _templateObject32 = _taggedTemplateLiteral(['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n'], ['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n']),
    _templateObject33 = _taggedTemplateLiteral(['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n'], ['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n']),
    _templateObject34 = _taggedTemplateLiteral(['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n'], ['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n']),
    _templateObject35 = _taggedTemplateLiteral(['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n'], ['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n']),
    _templateObject36 = _taggedTemplateLiteral(['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n'], ['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n']),
    _templateObject37 = _taggedTemplateLiteral(['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n'], ['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n']),
    _templateObject38 = _taggedTemplateLiteral(['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n'], ['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n']),
    _templateObject39 = _taggedTemplateLiteral(['\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    transform: perspective(400px) scale3d(.95, .95, .95);\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    transform: perspective(400px);\n    animation-timing-function: ease-in;\n  }\n'], ['\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    transform: perspective(400px) scale3d(.95, .95, .95);\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    transform: perspective(400px);\n    animation-timing-function: ease-in;\n  }\n']),
    _templateObject40 = _taggedTemplateLiteral(['\n  from {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n'], ['\n  from {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n']),
    _templateObject41 = _taggedTemplateLiteral(['\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n'], ['\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n']),
    _templateObject42 = _taggedTemplateLiteral(['\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n'], ['\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n']),
    _templateObject43 = _taggedTemplateLiteral(['\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n'], ['\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n']),
    _templateObject44 = _taggedTemplateLiteral(['\n  from {\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: none;\n    opacity: 1;\n  }\n'], ['\n  from {\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: none;\n    opacity: 1;\n  }\n']),
    _templateObject45 = _taggedTemplateLiteral(['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n'], ['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n']),
    _templateObject46 = _taggedTemplateLiteral(['\n  from {\n    transform-origin: center;\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: center;\n    transform: none;\n    opacity: 1;\n  }\n'], ['\n  from {\n    transform-origin: center;\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: center;\n    transform: none;\n    opacity: 1;\n  }\n']),
    _templateObject47 = _taggedTemplateLiteral(['\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n'], ['\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n']),
    _templateObject48 = _taggedTemplateLiteral(['\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n'], ['\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n']),
    _templateObject49 = _taggedTemplateLiteral(['\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n'], ['\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n']),
    _templateObject50 = _taggedTemplateLiteral(['\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n'], ['\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n']),
    _templateObject51 = _taggedTemplateLiteral(['\n  from {\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: center;\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n'], ['\n  from {\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: center;\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n']),
    _templateObject52 = _taggedTemplateLiteral(['\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n'], ['\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n']),
    _templateObject53 = _taggedTemplateLiteral(['\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n'], ['\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n']),
    _templateObject54 = _taggedTemplateLiteral(['\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n'], ['\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n']),
    _templateObject55 = _taggedTemplateLiteral(['\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n'], ['\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n']),
    _templateObject56 = _taggedTemplateLiteral(['\n  from {\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n'], ['\n  from {\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n']),
    _templateObject57 = _taggedTemplateLiteral(['\n  from {\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n'], ['\n  from {\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n']),
    _templateObject58 = _taggedTemplateLiteral(['\n  from {\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n'], ['\n  from {\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n']),
    _templateObject59 = _taggedTemplateLiteral(['\n  from {\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n'], ['\n  from {\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n']),
    _templateObject60 = _taggedTemplateLiteral(['\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, 100%, 0);\n  }\n'], ['\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, 100%, 0);\n  }\n']),
    _templateObject61 = _taggedTemplateLiteral(['\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(-100%, 0, 0);\n  }\n'], ['\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(-100%, 0, 0);\n  }\n']),
    _templateObject62 = _taggedTemplateLiteral(['\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(100%, 0, 0);\n  }\n'], ['\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(100%, 0, 0);\n  }\n']),
    _templateObject63 = _taggedTemplateLiteral(['\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, -100%, 0);\n  }\n'], ['\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, -100%, 0);\n  }\n']),
    _templateObject64 = _taggedTemplateLiteral(['\n  0% {\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    transform: rotate3d(0, 0, 1, 80deg);\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%, 80% {\n    transform: rotate3d(0, 0, 1, 60deg);\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n'], ['\n  0% {\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    transform: rotate3d(0, 0, 1, 80deg);\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%, 80% {\n    transform: rotate3d(0, 0, 1, 60deg);\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n']),
    _templateObject65 = _taggedTemplateLiteral(['\n  from {\n    opacity: 0;\n    transform: scale(0.1) rotate(30deg);\n    transform-origin: center bottom;\n  }\n\n  50% {\n    transform: rotate(-10deg);\n  }\n\n  70% {\n    transform: rotate(3deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n'], ['\n  from {\n    opacity: 0;\n    transform: scale(0.1) rotate(30deg);\n    transform-origin: center bottom;\n  }\n\n  50% {\n    transform: rotate(-10deg);\n  }\n\n  70% {\n    transform: rotate(3deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n']),
    _templateObject66 = _taggedTemplateLiteral(['\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n'], ['\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n']),
    _templateObject67 = _taggedTemplateLiteral(['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n'], ['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n']),
    _templateObject68 = _taggedTemplateLiteral(['\n  from {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n'], ['\n  from {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n']),
    _templateObject69 = _taggedTemplateLiteral(['\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n'], ['\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n']),
    _templateObject70 = _taggedTemplateLiteral(['\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n'], ['\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n']),
    _templateObject71 = _taggedTemplateLiteral(['\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n'], ['\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n']),
    _templateObject72 = _taggedTemplateLiteral(['\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n'], ['\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n']),
    _templateObject73 = _taggedTemplateLiteral(['\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n\n  to {\n    opacity: 0;\n  }\n'], ['\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n\n  to {\n    opacity: 0;\n  }\n']),
    _templateObject74 = _taggedTemplateLiteral(['\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n'], ['\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n']),
    _templateObject75 = _taggedTemplateLiteral(['\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(.1) translate3d(-2000px, 0, 0);\n    transform-origin: left center;\n  }\n'], ['\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(.1) translate3d(-2000px, 0, 0);\n    transform-origin: left center;\n  }\n']),
    _templateObject76 = _taggedTemplateLiteral(['\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(.1) translate3d(2000px, 0, 0);\n    transform-origin: right center;\n  }\n'], ['\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(.1) translate3d(2000px, 0, 0);\n    transform-origin: right center;\n  }\n']),
    _templateObject77 = _taggedTemplateLiteral(['\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n'], ['\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n']),
    _templateObject78 = _taggedTemplateLiteral(['\n  animation-name: ', ';\n  animation-duration: ', ';\n  animation-timing-function: ', ';\n  animation-delay: ', ';\n  animation-iteration-count: ', ';\n  animation-direction: ', ';\n  animation-fill-mode: ', ';\n  animation-play-state: ', ';\n  transform-origin: ', ';\n  backface-visibility: ', ';\n  opacity: ', '\n'], ['\n  animation-name: ', ';\n  animation-duration: ', ';\n  animation-timing-function: ', ';\n  animation-delay: ', ';\n  animation-iteration-count: ', ';\n  animation-direction: ', ';\n  animation-fill-mode: ', ';\n  animation-play-state: ', ';\n  transform-origin: ', ';\n  backface-visibility: ', ';\n  opacity: ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var bounce = exports.bounce = (0, _styledComponents.keyframes)(_templateObject);
var flash = exports.flash = (0, _styledComponents.keyframes)(_templateObject2);
var headShake = exports.headShake = (0, _styledComponents.keyframes)(_templateObject3);
var jello = exports.jello = (0, _styledComponents.keyframes)(_templateObject4);

var pulse = exports.pulse = (0, _styledComponents.keyframes)(_templateObject5);

var rubberBand = exports.rubberBand = (0, _styledComponents.keyframes)(_templateObject6);
var shake = exports.shake = (0, _styledComponents.keyframes)(_templateObject7);
var swing = exports.swing = (0, _styledComponents.keyframes)(_templateObject8);

var tada = exports.tada = (0, _styledComponents.keyframes)(_templateObject9);

var wobble = exports.wobble = (0, _styledComponents.keyframes)(_templateObject10);
var bounceIn = exports.bounceIn = (0, _styledComponents.keyframes)(_templateObject11);

var bounceInDown = exports.bounceInDown = (0, _styledComponents.keyframes)(_templateObject12);

var bounceInLeft = exports.bounceInLeft = (0, _styledComponents.keyframes)(_templateObject13);

var bounceInRight = exports.bounceInRight = (0, _styledComponents.keyframes)(_templateObject14);

var bounceInUp = exports.bounceInUp = (0, _styledComponents.keyframes)(_templateObject15);

var bounceOut = exports.bounceOut = (0, _styledComponents.keyframes)(_templateObject16);

var bounceOutDown = exports.bounceOutDown = (0, _styledComponents.keyframes)(_templateObject17);

var bounceOutLeft = exports.bounceOutLeft = (0, _styledComponents.keyframes)(_templateObject18);

var bounceOutRight = exports.bounceOutRight = (0, _styledComponents.keyframes)(_templateObject19);

var bounceOutUp = exports.bounceOutUp = (0, _styledComponents.keyframes)(_templateObject20);

var fadeIn = exports.fadeIn = (0, _styledComponents.keyframes)(_templateObject21);

var fadeInDown = exports.fadeInDown = (0, _styledComponents.keyframes)(_templateObject22);

var fadeInDownBig = exports.fadeInDownBig = (0, _styledComponents.keyframes)(_templateObject23);

var fadeInLeft = exports.fadeInLeft = (0, _styledComponents.keyframes)(_templateObject24);
var fadeInLeftBig = exports.fadeInLeftBig = (0, _styledComponents.keyframes)(_templateObject25);

var fadeInRight = exports.fadeInRight = (0, _styledComponents.keyframes)(_templateObject26);
var fadeInRightBig = exports.fadeInRightBig = (0, _styledComponents.keyframes)(_templateObject27);
var fadeInUp = exports.fadeInUp = (0, _styledComponents.keyframes)(_templateObject28);
var fadeInUpBig = exports.fadeInUpBig = (0, _styledComponents.keyframes)(_templateObject29);
var fadeOut = exports.fadeOut = (0, _styledComponents.keyframes)(_templateObject30);
var fadeOutDown = exports.fadeOutDown = (0, _styledComponents.keyframes)(_templateObject31);
var fadeOutDownBig = exports.fadeOutDownBig = (0, _styledComponents.keyframes)(_templateObject32);
var fadeOutLeft = exports.fadeOutLeft = (0, _styledComponents.keyframes)(_templateObject33);
var fadeOutLeftBig = exports.fadeOutLeftBig = (0, _styledComponents.keyframes)(_templateObject34);
var fadeOutRight = exports.fadeOutRight = (0, _styledComponents.keyframes)(_templateObject35);
var fadeOutRightBig = exports.fadeOutRightBig = (0, _styledComponents.keyframes)(_templateObject36);
var fadeOutUp = exports.fadeOutUp = (0, _styledComponents.keyframes)(_templateObject37);
var fadeOutUpBig = exports.fadeOutUpBig = (0, _styledComponents.keyframes)(_templateObject38);
var flip = exports.flip = (0, _styledComponents.keyframes)(_templateObject39);
var flipInX = exports.flipInX = (0, _styledComponents.keyframes)(_templateObject40);
var flipInY = exports.flipInY = (0, _styledComponents.keyframes)(_templateObject41);
var flipOutX = exports.flipOutX = (0, _styledComponents.keyframes)(_templateObject42);
var flipOutY = exports.flipOutY = (0, _styledComponents.keyframes)(_templateObject43);
var lightSpeedIn = exports.lightSpeedIn = (0, _styledComponents.keyframes)(_templateObject44);
var lightSpeedOut = exports.lightSpeedOut = (0, _styledComponents.keyframes)(_templateObject45);
var rotateIn = exports.rotateIn = (0, _styledComponents.keyframes)(_templateObject46);
var rotateInDownLeft = exports.rotateInDownLeft = (0, _styledComponents.keyframes)(_templateObject47);
var rotateInDownRight = exports.rotateInDownRight = (0, _styledComponents.keyframes)(_templateObject48);
var rotateInUpLeft = exports.rotateInUpLeft = (0, _styledComponents.keyframes)(_templateObject49);
var rotateInUpRight = exports.rotateInUpRight = (0, _styledComponents.keyframes)(_templateObject50);
var rotateOut = exports.rotateOut = (0, _styledComponents.keyframes)(_templateObject51);
var rotateOutDownLeft = exports.rotateOutDownLeft = (0, _styledComponents.keyframes)(_templateObject52);
var rotateOutDownRight = exports.rotateOutDownRight = (0, _styledComponents.keyframes)(_templateObject53);
var rotateOutUpLeft = exports.rotateOutUpLeft = (0, _styledComponents.keyframes)(_templateObject54);
var rotateOutUpRight = exports.rotateOutUpRight = (0, _styledComponents.keyframes)(_templateObject55);
var slideInDown = exports.slideInDown = (0, _styledComponents.keyframes)(_templateObject56);
var slideInLeft = exports.slideInLeft = (0, _styledComponents.keyframes)(_templateObject57);
var slideInRight = exports.slideInRight = (0, _styledComponents.keyframes)(_templateObject58);
var slideInUp = exports.slideInUp = (0, _styledComponents.keyframes)(_templateObject59);
var slideOutDown = exports.slideOutDown = (0, _styledComponents.keyframes)(_templateObject60);
var slideOutLeft = exports.slideOutLeft = (0, _styledComponents.keyframes)(_templateObject61);
var slideOutRight = exports.slideOutRight = (0, _styledComponents.keyframes)(_templateObject62);
var slideOutUp = exports.slideOutUp = (0, _styledComponents.keyframes)(_templateObject63);
var hinge = exports.hinge = (0, _styledComponents.keyframes)(_templateObject64);
var jackInTheBox = exports.jackInTheBox = (0, _styledComponents.keyframes)(_templateObject65);
var rollIn = exports.rollIn = (0, _styledComponents.keyframes)(_templateObject66);
var rollOut = exports.rollOut = (0, _styledComponents.keyframes)(_templateObject67);
var zoomIn = exports.zoomIn = (0, _styledComponents.keyframes)(_templateObject68);
var zoomInDown = exports.zoomInDown = (0, _styledComponents.keyframes)(_templateObject69);
var zoomInLeft = exports.zoomInLeft = (0, _styledComponents.keyframes)(_templateObject70);
var zoomInRight = exports.zoomInRight = (0, _styledComponents.keyframes)(_templateObject71);
var zoomInUp = exports.zoomInUp = (0, _styledComponents.keyframes)(_templateObject72);
var zoomOut = exports.zoomOut = (0, _styledComponents.keyframes)(_templateObject73);
var zoomOutDown = exports.zoomOutDown = (0, _styledComponents.keyframes)(_templateObject74);
var zoomOutLeft = exports.zoomOutLeft = (0, _styledComponents.keyframes)(_templateObject75);
var zoomOutRight = exports.zoomOutRight = (0, _styledComponents.keyframes)(_templateObject76);
var zoomOutUp = exports.zoomOutUp = (0, _styledComponents.keyframes)(_templateObject77);

var AnimationFlow = _styledComponents2.default.div(_templateObject78, function (props) {
  return props.name;
}, function (props) {
  return props.duration;
}, function (props) {
  return props.timingFunction;
}, function (props) {
  return props.delay;
}, function (props) {
  return props.iterationCount;
}, function (props) {
  return props.direction;
}, function (props) {
  return props.fillMode;
}, function (props) {
  return props.playState;
}, function (props) {
  return props.transformOrigin;
}, function (props) {
  return props.backfaceVisibility;
}, function (props) {
  return props.opacity;
});

var AnimateStyled = function (_React$Component) {
  _inherits(AnimateStyled, _React$Component);

  function AnimateStyled(props) {
    _classCallCheck(this, AnimateStyled);

    return _possibleConstructorReturn(this, (AnimateStyled.__proto__ || Object.getPrototypeOf(AnimateStyled)).call(this, props));
  }

  _createClass(AnimateStyled, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        AnimationFlow,
        this.props,
        this.props.children
      );
    }
  }]);

  return AnimateStyled;
}(_react2.default.Component);

exports.default = AnimateStyled;


AnimateStyled.defaultProps = {
  name: flash,
  duration: '2s',
  timingFunction: 'linear',
  delay: '0s',
  iterationCount: 'infinite',
  direction: 'normal',
  fillMode: 'none',
  playState: 'running',
  transformOrigin: 'center',
  backfaceVisibility: 'hidden',
  opacity: 1
};
