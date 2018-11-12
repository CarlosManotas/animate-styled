import{ keyframes } from "styled-components";

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
`;

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
`;

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
`;

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
`;

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
`;

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
`;

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
`;

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
`;

export const bounceOutLeft = keyframes`
  20% {
  opacity: 1;
  transform: translate3d(20px, 0, 0);
  }

  to {
  opacity: 0;
  transform: translate3d(-2000px, 0, 0);
  }
`;

export const bounceOutRight = keyframes`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;

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
`;