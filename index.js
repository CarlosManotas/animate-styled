import styled, {keyframes} from 'styled-components';
import React from 'react';

export const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0, -4px, 0);
  }
`
export const flash = keyframes`
  from, 50%, to {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
`
export const headShake = keyframes`
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
`
export const jello = keyframes`
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
`

export const pulse = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`

export const rubberBand = keyframes`
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
`
export const shake = keyframes`
  from, to {
    transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    transform: translate3d(10px, 0, 0);
  }
`
export const swing = keyframes`
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
`

export const tada = keyframes`
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
`

export const wobble = keyframes`
  from {
  transform: none;
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
  transform: none;
  }
`
export const bounceIn = keyframes`
  from, 20%, 40%, 60%, 80%, to {
  animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
  opacity: 0;
  transform: scale3d(.3, .3, .3);
  }

  20% {
  transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
  transform: scale3d(.9, .9, .9);
  }

  60% {
  opacity: 1;
  transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
  transform: scale3d(.97, .97, .97);
  }

  to {
  opacity: 1;
  transform: scale3d(1, 1, 1);
  }
`

export const bounceInDown = keyframes`
  from, 60%, 75%, 90%, to {
  animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
  opacity: 0;
  transform: translate3d(0, -3000px, 0);
  }

  60% {
  opacity: 1;
  transform: translate3d(0, 25px, 0);
  }

  75% {
  transform: translate3d(0, -10px, 0);
  }

  90% {
  transform: translate3d(0, 5px, 0);
  }

  to {
  transform: none;
  }
`

export const bounceInLeft = keyframes`
  from, 60%, 75%, 90%, to {
  animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
  opacity: 0;
  transform: translate3d(-3000px, 0, 0);
  }

  60% {
  opacity: 1;
  transform: translate3d(25px, 0, 0);
  }

  75% {
  transform: translate3d(-10px, 0, 0);
  }

  90% {
  transform: translate3d(5px, 0, 0);
  }

  to {
  transform: none;
  }
`

export const bounceInRight = keyframes`
  from, 60%, 75%, 90%, to {
  animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
  opacity: 0;
  transform: translate3d(3000px, 0, 0);
  }

  60% {
  opacity: 1;
  transform: translate3d(-25px, 0, 0);
  }

  75% {
  transform: translate3d(10px, 0, 0);
  }

  90% {
  transform: translate3d(-5px, 0, 0);
  }

  to {
  transform: none;
  }
`

export const bounceInUp = keyframes`
  from, 60%, 75%, 90%, to {
  animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
  opacity: 0;
  transform: translate3d(0, 3000px, 0);
  }

  60% {
  opacity: 1;
  transform: translate3d(0, -20px, 0);
  }

  75% {
  transform: translate3d(0, 10px, 0);
  }

  90% {
  transform: translate3d(0, -5px, 0);
  }

  to {
  transform: translate3d(0, 0, 0);
  }
`

export const bounceOut = keyframes`
  20% {
  transform: scale3d(.9, .9, .9);
  }

  50%, 55% {
  opacity: 1;
  transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
  opacity: 0;
  transform: scale3d(.3, .3, .3);
  }
`

export const bounceOutDown = keyframes`
  20% {
  transform: translate3d(0, 10px, 0);
  }

  40%, 45% {
  opacity: 1;
  transform: translate3d(0, -20px, 0);
  }

  to {
  opacity: 0;
  transform: translate3d(0, 2000px, 0);
  }
`

export const bounceOutLeft = keyframes`
  20% {
  opacity: 1;
  transform: translate3d(20px, 0, 0);
  }

  to {
  opacity: 0;
  transform: translate3d(-2000px, 0, 0);
  }
`

export const bounceOutRight = keyframes`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`

export const bounceOutUp = keyframes`
  20% {
  transform: translate3d(0, -10px, 0);
  }

  40%, 45% {
  opacity: 1;
  transform: translate3d(0, 20px, 0);
  }

  to {
  opacity: 0;
  transform: translate3d(0, -2000px, 0);
  }
`

export const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`

export const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`

export const fadeInDownBig = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`
export const fadeInLeftBig = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`

export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`
export const fadeInRightBig = keyframes`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`
export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`
export const fadeInUpBig = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`
export const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`
export const fadeOutDown = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`
export const fadeOutDownBig = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`
export const fadeOutLeft = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`
export const fadeOutLeftBig = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`
export const fadeOutRight = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`
export const fadeOutRightBig = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`
export const fadeOutUp = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`
export const fadeOutUpBig = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`
export const flip = keyframes`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(.95, .95, .95);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px);
    animation-timing-function: ease-in;
  }
`
export const flipInX = keyframes`
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
`
export const flipInY = keyframes`
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
`
export const flipOutX = keyframes`
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
`
export const flipOutY = keyframes`
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
`
export const lightSpeedIn = keyframes`
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
    opacity: 1;
  }

  to {
    transform: none;
    opacity: 1;
  }
`
export const lightSpeedOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
`
export const rotateIn = keyframes`
  from {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform-origin: center;
    transform: none;
    opacity: 1;
  }
`
export const rotateInDownLeft = keyframes`
  from {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform-origin: left bottom;
    transform: none;
    opacity: 1;
  }
`
export const rotateInDownRight = keyframes`
  from {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform-origin: right bottom;
    transform: none;
    opacity: 1;
  }
`
export const rotateInUpLeft = keyframes`
  from {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform-origin: left bottom;
    transform: none;
    opacity: 1;
  }
`
export const rotateInUpRight = keyframes`
  from {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform-origin: right bottom;
    transform: none;
    opacity: 1;
  }
`
export const rotateOut = keyframes`
  from {
    transform-origin: center;
    opacity: 1;
  }

  to {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`
export const rotateOutDownLeft = keyframes`
  from {
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`
export const rotateOutDownRight = keyframes`
  from {
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`
export const rotateOutUpLeft = keyframes`
  from {
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`
export const rotateOutUpRight = keyframes`
  from {
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`
export const slideInDown = keyframes`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`
export const slideInLeft = keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`
export const slideInRight = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`
export const slideInUp = keyframes`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`
export const slideOutDown = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`
export const slideOutLeft = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`
export const slideOutRight = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`
export const slideOutUp = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`
export const hinge = keyframes`
  0% {
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }

  20%, 60% {
    transform: rotate3d(0, 0, 1, 80deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }

  40%, 80% {
    transform: rotate3d(0, 0, 1, 60deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`
export const jackInTheBox = keyframes`
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
`
export const rollIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: none;
  }
`
export const rollOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`
export const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
`
export const zoomInDown = keyframes`
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
`
export const zoomInLeft = keyframes`
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
`
export const zoomInRight = keyframes`
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
`
export const zoomInUp = keyframes`
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
`
export const zoomOut = keyframes`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  to {
    opacity: 0;
  }
`
export const zoomOutDown = keyframes`
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  to {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
    transform-origin: center bottom;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
`
export const zoomOutLeft = keyframes`
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(.1) translate3d(-2000px, 0, 0);
    transform-origin: left center;
  }
`
export const zoomOutRight = keyframes`
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(.1) translate3d(2000px, 0, 0);
    transform-origin: right center;
  }
`
export const zoomOutUp = keyframes`
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  to {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
    transform-origin: center bottom;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
`

const AnimationFlow =styled.div`
  animation-name: ${props=>props.name?props.name:flash};
  animation-duration: ${props=>props.duration?props.duration:'2s'};
  animation-timing-function: ${props=>props.timingFunction?props.timingFunction:'linear'};
  animation-delay: ${props=>props.delay?props.delay:'0s'};
  animation-iteration-count: ${props=>props.iterationCount?props.iterationCount:'infinite'};
  animation-direction: ${props=>props.direction?props.direction:'normal'};
  animation-fill-mode: ${props=>props.fillMode?props.fillMode:'none'};
  animation-play-state: ${props=>props.playState?props.playState:'running'};
  transform-origin: ${props=>props.transformOrigin?props.transformOrigin:'center'};
  backface-visibility: ${props=>props.backfaceVisibility?props.backfaceVisibility:'hidden'}
`
export default (props) => <AnimationFlow {...props} >{props.children}</AnimationFlow>
