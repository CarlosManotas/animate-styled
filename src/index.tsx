import * as React from "react";
import { ReactNode } from "react";
import styled, { css } from "styled-components";
import * as allAnimate from "./animations";

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

type AttentionSeekers =
  | "bounce"
  | "flash"
  | "headShake"
  | "heartBeat"
  | "jello"
  | "pulse"
  | "rubberBand"
  | "shake"
  | "shakeX"
  | "shakeY"
  | "swing"
  | "tada"
  | "wobble";

type BackEntrances = "backInDown" | "backInLeft" | "backInRight" | "backInUp";

type BackExits = "backOutDown" | "backOutLeft" | "backOutRight" | "backOutUp";

type BouncingEntrances =
  | "bounceIn"
  | "bounceInDown"
  | "bounceInLeft"
  | "bounceInRight"
  | "bounceInUp";

type BouncingExits =
  | "bounceOut"
  | "bounceOutDown"
  | "bounceOutLeft"
  | "bounceOutRight"
  | "bounceOutUp";

type FadingEntrances =
  | "fadeIn"
  | "fadeInBottomLeft"
  | "fadeInBottomRight"
  | "fadeInDown"
  | "fadeInDownBig"
  | "fadeInLeft"
  | "fadeInLeftBig"
  | "fadeInRight"
  | "fadeInRightBig"
  | "fadeInTopLeft"
  | "fadeInTopRight"
  | "fadeInUp"
  | "fadeInUpBig";

type FadingExits =
  | "fadeOut"
  | "fadeOutBottomLeft"
  | "fadeOutBottomRight"
  | "fadeOutDown"
  | "fadeOutDownBig"
  | "fadeOutLeft"
  | "fadeOutLeftBig"
  | "fadeOutRight"
  | "fadeOutRightBig"
  | "fadeOutTopLeft"
  | "fadeOutTopRight"
  | "fadeOutUp"
  | "fadeOutUpBig";

type Flippers = "flip" | "flipInX" | "flipInY" | "flipOutX" | "flipOutY";

type LightSpeed =
  | "lightSpeedInLeft"
  | "lightSpeedInRight"
  | "lightSpeedOutLeft"
  | "lightSpeedOutRight";

type RotatingEntrances =
  | "rotateIn"
  | "rotateInDownLeft"
  | "rotateInDownRight"
  | "rotateInUpLeft"
  | "rotateInUpRight";

type RotatingExits =
  | "rotateOut"
  | "rotateOutDownLeft"
  | "rotateOutDownRight"
  | "rotateOutUpLeft"
  | "rotateOutUpRight";

type SlidingEntrances =
  | "slideInDown"
  | "slideInLeft"
  | "slideInRight"
  | "slideInUp";

type SlidingExits =
  | "slideOutDown"
  | "slideOutLeft"
  | "slideOutRight"
  | "slideOutUp";

type Specials = "hinge" | "jackInTheBox" | "rollIn" | "rollOut";

type ZoomingEntrances =
  | "zoomIn"
  | "zoomInDown"
  | "zoomInLeft"
  | "zoomInRight"
  | "zoomInUp";

type ZoomingExits =
  | "zoomOut"
  | "zoomOutDown"
  | "zoomOutLeft"
  | "zoomOutRight"
  | "zoomOutUp";

type NamesAnimation =
  | AttentionSeekers
  | BackEntrances
  | BackExits
  | BouncingEntrances
  | BouncingExits
  | FadingEntrances
  | FadingExits
  | Flippers
  | LightSpeed
  | RotatingEntrances
  | RotatingExits
  | SlidingEntrances
  | SlidingExits
  | Specials
  | ZoomingEntrances
  | ZoomingExits;

const setAnimation = (props: AnimationProps) =>
  css`
    animation: ${props.duration} ${props.timingFunction} ${props.delay}
      ${props.iterationCount} ${props.direction} ${props.fillMode}
      ${props.playState} ${allAnimate[props.name]};
  `;

const AnimationFlow = styled.div<AnimateStyledProps>`
  transform-origin: ${(props) => props.transformOrigin};
  backface-visibility: ${(props) => props.backfaceVisibility};
  opacity: ${(props) => props.opacity};
  ${(props) => props.name && setAnimation};
`;

type TimingFuctionValues =
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "linear"
  | "step-start"
  | "step-end";

interface AnimationProps {
  name: NamesAnimation;
  duration?: string;
  timingFunction?: TimingFuctionValues | string;
  delay?: string;
  iterationCount?: number | "infinite";
  direction?: string;
  fillMode?: string;
  playState?: string;
}

interface AnimateStyledProps extends AnimationProps {
  transformOrigin?: string;
  backfaceVisibility?: string;
  opacity?: number;
}

interface AllAnimateProps extends AnimateStyledProps {
  style?: React.CSSProperties;
  children: ReactNode;
}

export default function AnimateStyled({
  name = "shake",
  duration = "2s",
  timingFunction = "linear",
  delay = "0s",
  iterationCount = "infinite",
  direction = "normal",
  fillMode = "none",
  playState = "running",
  transformOrigin = "center",
  backfaceVisibility = "hidden",
  opacity = 1,
  children = <h1>Hello World</h1>,
}: AllAnimateProps) {
  return (
    <AnimationFlow
      name={name}
      duration={duration}
      timingFunction={timingFunction}
      delay={delay}
      iterationCount={iterationCount}
      direction={direction}
      fillMode={fillMode}
      playState={playState}
      transformOrigin={transformOrigin}
      backfaceVisibility={backfaceVisibility}
      opacity={opacity}
    >
      {children}
    </AnimationFlow>
  );
}
