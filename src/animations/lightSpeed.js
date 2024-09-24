import { keyframes } from 'styled-components';
export const lightSpeedInLeft = keyframes `
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
`;
export const lightSpeedInRight = keyframes `
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
`;
export const lightSpeedOutLeft = keyframes `
  from {
    opacity: 1;
  }

  to {
    transform: translate3d(-100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
`;
export const lightSpeedOutRight = keyframes `
  from {
    opacity: 1;
  }

  to {
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
`;
//# sourceMappingURL=lightSpeed.js.map