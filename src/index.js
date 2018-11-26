import styled, { css } from "styled-components";
import React from "react";
import allAnimate from "./animations";

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

const animation = props =>
  css`
    ${props.duration} ${props.timingFunction} ${props.delay} ${props.iterationCount} ${props.direction} ${props.fillMode} ${props.playState} ${allAnimate[props.name]}
  `;

const AnimationFlow = styled.div`
  animation: ${animation};
  transform-origin: ${props => props.transformOrigin};
  backface-visibility: ${props => props.backfaceVisibility};
  opacity: ${props => props.opacity}
`;

export default function AnimateStyled(props) {
  return <AnimationFlow {...props} >{props.children}</AnimationFlow>
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
  opacity: 1,
};
