import styled, { keyframes, css } from "styled-components";
import React from "react";

const bounce = keyframes`
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
`;

const flash = keyframes`
  from, 50%, to {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
`;

const headShake = keyframes`
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
`;

const jello = keyframes`
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
`;

const pulse = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;

const rubberBand = keyframes`
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
`;

const shake = keyframes`
  from, to {
    transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    transform: translate3d(10px, 0, 0);
  }
`;

const swing = keyframes`
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
`;

const tada = keyframes`
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
`;

const wobble = keyframes`
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
`;

const bounceIn = keyframes`
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
`;

const bounceInDown = keyframes`
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
`;

const bounceInLeft = keyframes`
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
`;

const bounceInRight = keyframes`
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
`;

const bounceInUp = keyframes`
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
`;

const bounceOut = keyframes`
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
`;

const bounceOutDown = keyframes`
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
`;

const bounceOutLeft = keyframes`
  20% {
  opacity: 1;
  transform: translate3d(20px, 0, 0);
  }

  to {
  opacity: 0;
  transform: translate3d(-2000px, 0, 0);
  }
`;

const bounceOutRight = keyframes`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;

const bounceOutUp = keyframes`
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
`;

const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

const fadeInDownBig = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

const fadeInLeftBig = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

const fadeInRightBig = keyframes`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

const fadeInUpBig = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const fadeOutDown = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;

const fadeOutDownBig = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`;

const fadeOutLeft = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`;

const fadeOutLeftBig = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`;

const fadeOutRight = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`;

const fadeOutRightBig = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;

const fadeOutUp = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`;

const fadeOutUpBig = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;

const flip = keyframes`
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
`;

const flipInX = keyframes`
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
`;

const flipInY = keyframes`
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
`;

const flipOutX = keyframes`
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
`;

const flipOutY = keyframes`
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
`;

const lightSpeedIn = keyframes`
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
`;

const lightSpeedOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
`;

const rotateIn = keyframes`
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
`;

const rotateInDownLeft = keyframes`
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
`;

const rotateInDownRight = keyframes`
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
`;

const rotateInUpLeft = keyframes`
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
`;

const rotateInUpRight = keyframes`
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
`;

const rotateOut = keyframes`
  from {
    transform-origin: center;
    opacity: 1;
  }

  to {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;

const rotateOutDownLeft = keyframes`
  from {
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;

const rotateOutDownRight = keyframes`
  from {
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;

const rotateOutUpLeft = keyframes`
  from {
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;

const rotateOutUpRight = keyframes`
  from {
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;

const slideInDown = keyframes`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const slideInLeft = keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const slideInRight = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const slideInUp = keyframes`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const slideOutDown = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;

const slideOutLeft = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;

const slideOutRight = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;

const slideOutUp = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;

const hinge = keyframes`
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
`;

const jackInTheBox = keyframes`
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
`;

const rollIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

const rollOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
`;

const zoomInDown = keyframes`
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
`;

const zoomInLeft = keyframes`
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
`;

const zoomInRight = keyframes`
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
`;

const zoomInUp = keyframes`
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
`;

const zoomOut = keyframes`
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
`;

const zoomOutDown = keyframes`
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
`;

const zoomOutLeft = keyframes`
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(.1) translate3d(-2000px, 0, 0);
    transform-origin: left center;
  }
`;

const zoomOutRight = keyframes`
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(.1) translate3d(2000px, 0, 0);
    transform-origin: right center;
  }
`;

const zoomOutUp = keyframes`
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
`;

const allAnimate = {
  bounce,
  flash,
  headShake,
  jello,
  pulse,
  rubberBand,
  shake,
  swing,
  tada,
  wobble,
  bounceIn,
  bounceInDown,
  bounceInLeft,
  bounceInRight,
  bounceInUp,
  bounceOut,
  bounceOutDown,
  bounceOutLeft,
  bounceOutRight,
  bounceOutUp,
  fadeIn,
  fadeInDown,
  fadeInDownBig,
  fadeInLeft,
  fadeInLeftBig,
  fadeInRight,
  fadeInRightBig,
  fadeInUp,
  fadeInUpBig,
  fadeOut,
  fadeOutDown,
  fadeOutDownBig,
  fadeOutLeft,
  fadeOutLeftBig,
  fadeOutRight,
  fadeOutRightBig,
  fadeOutUp,
  fadeOutUpBig,
  flip,
  flipInX,
  flipInY,
  flipOutX,
  flipOutY,
  lightSpeedIn,
  lightSpeedOut,
  rotateIn,
  rotateInDownLeft,
  rotateInDownRight,
  rotateInUpLeft,
  rotateInUpRight,
  rotateOut,
  rotateOutDownLeft,
  rotateOutDownRight,
  rotateOutUpLeft,
  rotateOutUpRight,
  slideInDown,
  slideInLeft,
  slideInRight,
  slideInUp,
  slideOutDown,
  slideOutLeft,
  slideOutRight,
  slideOutUp,
  hinge,
  jackInTheBox,
  rollIn,
  rollOut,
  zoomIn,
  zoomInDown,
  zoomInLeft,
  zoomInRight,
  zoomInUp,
  zoomOut,
  zoomOutDown,
  zoomOutLeft,
  zoomOutRight,
  zoomOutUp
};

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

const AnimationFlow =styled.div`
  animation: ${props => animation(props)};
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
