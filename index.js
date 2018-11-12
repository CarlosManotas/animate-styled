"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    ", " ", " ", " ", " ", " ", " ", " ", "\n  "], ["\n    ", " ", " ", " ", " ", " ", " ", " ", "\n  "]),
    _templateObject2 = _taggedTemplateLiteral(["\n  animation: ", ";\n  transform-origin: ", ";\n  backface-visibility: ", ";\n  opacity: ", "\n"], ["\n  animation: ", ";\n  transform-origin: ", ";\n  backface-visibility: ", ";\n  opacity: ", "\n"]);

exports.default = AnimateStyled;

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _animations = require("./animations");

var _animations2 = _interopRequireDefault(_animations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *  @keyframes duration 
 * | timing-function 
 * | delay 
 * | iteration-count 
 * | direction 
 * | fill-mode 
 * | play-state 
 * | name 
*/

var animation = function animation(props) {
  return (0, _styledComponents.css)(_templateObject, props.duration, props.timingFunction, props.delay, props.iterationCount, props.direction, props.fillMode, props.playState, _animations2.default[props.name]);
};

var AnimationFlow = _styledComponents2.default.div(_templateObject2, animation, function (props) {
  return props.transformOrigin;
}, function (props) {
  return props.backfaceVisibility;
}, function (props) {
  return props.opacity;
});

function AnimateStyled(props) {
  return _react2.default.createElement(
    AnimationFlow,
    props,
    props.children
  );
};

AnimateStyled.defaultProps = {
  name: "shake",
  duration: "2s",
  timingFunction: "linear",
  delay: "0s",
  iterationCount: "infinite",
  direction: "normal",
  fillMode: "none",
  playState: "running",
  transformOrigin: "center",
  backfaceVisibility: "hidden",
  opacity: 1
};
