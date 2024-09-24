import { jsx as _jsx } from "react/jsx-runtime";
import styled, { css } from "styled-components";
import * as allAnimate from "./animations";
const setAnimation = (props) => css `
    animation: ${props.duration} ${props.timingFunction} ${props.delay}
      ${props.iterationCount} ${props.direction} ${props.fillMode}
      ${props.playState} ${allAnimate[props.name]};
  `;
const AnimationFlow = styled.div `
  transform-origin: ${(props) => props.transformOrigin};
  backface-visibility: ${(props) => props.backfaceVisibility};
  opacity: ${(props) => props.opacity};
  ${(props) => props.name && setAnimation};
`;
export default function AnimateStyled({ name = "shake", duration = "2s", timingFunction = "linear", delay = "0s", iterationCount = "infinite", direction = "normal", fillMode = "none", playState = "running", transformOrigin = "center", backfaceVisibility = "hidden", opacity = 1, children = _jsx("h1", { children: "Hello World" }), }) {
    return (_jsx(AnimationFlow, { name: name, duration: duration, timingFunction: timingFunction, delay: delay, iterationCount: iterationCount, direction: direction, fillMode: fillMode, playState: playState, transformOrigin: transformOrigin, backfaceVisibility: backfaceVisibility, opacity: opacity, children: children }));
}
//# sourceMappingURL=index.js.map