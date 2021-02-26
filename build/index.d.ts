import * as React from 'react';
import { ReactNode } from 'react';
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
declare type AttentionSeekers = 'bounce' | 'flash' | 'headShake' | 'heartBeat' | 'jello' | 'pulse' | 'rubberBand' | 'shake' | 'shakeX' | 'shakeY' | 'swing' | 'tada' | 'wobble';
declare type BackEntrances = 'backInDown' | 'backInLeft' | 'backInRight' | 'backInUp';
declare type BackExits = 'backOutDown' | 'backOutLeft' | 'backOutRight' | 'backOutUp';
declare type BouncingEntrances = 'bounceIn' | 'bounceInDown' | 'bounceInLeft' | 'bounceInRight' | 'bounceInUp';
declare type BouncingExits = 'bounceOut' | 'bounceOutDown' | 'bounceOutLeft' | 'bounceOutRight' | 'bounceOutUp';
declare type FadingEntrances = 'fadeIn' | 'fadeInBottomLeft' | 'fadeInBottomRight' | 'fadeInDown' | 'fadeInDownBig' | 'fadeInLeft' | 'fadeInLeftBig' | 'fadeInRight' | 'fadeInRightBig' | 'fadeInTopLeft' | 'fadeInTopRight' | 'fadeInUp' | 'fadeInUpBig';
declare type FadingExits = 'fadeOut' | 'fadeOutBottomLeft' | 'fadeOutBottomRight' | 'fadeOutDown' | 'fadeOutDownBig' | 'fadeOutLeft' | 'fadeOutLeftBig' | 'fadeOutRight' | 'fadeOutRightBig' | 'fadeOutTopLeft' | 'fadeOutTopRight' | 'fadeOutUp' | 'fadeOutUpBig';
declare type Flippers = 'flip' | 'flipInX' | 'flipInY' | 'flipOutX' | 'flipOutY';
declare type LightSpeed = 'lightSpeedInLeft' | 'lightSpeedInRight' | 'lightSpeedOutLeft' | 'lightSpeedOutRight';
declare type RotatingEntrances = 'rotateIn' | 'rotateInDownLeft' | 'rotateInDownRight' | 'rotateInUpLeft' | 'rotateInUpRight';
declare type RotatingExits = 'rotateOut' | 'rotateOutDownLeft' | 'rotateOutDownRight' | 'rotateOutUpLeft' | 'rotateOutUpRight';
declare type SlidingEntrances = 'slideInDown' | 'slideInLeft' | 'slideInRight' | 'slideInUp';
declare type SlidingExits = 'slideOutDown' | 'slideOutLeft' | 'slideOutRight' | 'slideOutUp';
declare type Specials = 'hinge' | 'jackInTheBox' | 'rollIn' | 'rollOut';
declare type ZoomingEntrances = 'zoomIn' | 'zoomInDown' | 'zoomInLeft' | 'zoomInRight' | 'zoomInUp';
declare type ZoomingExits = 'zoomOut' | 'zoomOutDown' | 'zoomOutLeft' | 'zoomOutRight' | 'zoomOutUp';
declare type NamesAnimation = AttentionSeekers | BackEntrances | BackExits | BouncingEntrances | BouncingExits | FadingEntrances | FadingExits | Flippers | LightSpeed | RotatingEntrances | RotatingExits | SlidingEntrances | SlidingExits | Specials | ZoomingEntrances | ZoomingExits;
declare type TimingFuctionValues = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | 'step-start' | 'step-end';
interface AnimationProps {
    name: NamesAnimation;
    duration: string;
    timingFunction: TimingFuctionValues | string;
    delay: string;
    iterationCount: number | 'infinite';
    direction: string;
    fillMode: string;
    playState: string;
}
interface AnimateStyledProps extends AnimationProps {
    transformOrigin: string;
    backfaceVisibility: string;
    opacity: number;
}
interface AllAnimateProps extends AnimateStyledProps {
    style?: React.CSSProperties;
    children: ReactNode;
}
declare function AnimateStyled(props: AllAnimateProps): JSX.Element;
declare namespace AnimateStyled {
    var defaultProps: {
        name: string;
        duration: string;
        timingFunction: string;
        delay: string;
        iterationCount: string;
        direction: string;
        fillMode: string;
        playState: string;
        transformOrigin: string;
        backfaceVisibility: string;
        opacity: number;
        children: string;
    };
}
export default AnimateStyled;
