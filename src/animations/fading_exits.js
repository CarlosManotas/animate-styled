import { keyframes } from 'styled-components';
export const fadeOut = keyframes `
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;
export const fadeOutBottomLeft = keyframes `
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`;
export const fadeOutBottomRight = keyframes `
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`;
export const fadeOutDown = keyframes `
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;
export const fadeOutDownBig = keyframes `
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`;
export const fadeOutLeft = keyframes `
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`;
export const fadeOutLeftBig = keyframes `
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`;
export const fadeOutRight = keyframes `
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`;
export const fadeOutRightBig = keyframes `
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;
export const fadeOutTopLeft = keyframes `
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`;
export const fadeOutTopRight = keyframes `
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`;
export const fadeOutUp = keyframes `
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`;
export const fadeOutUpBig = keyframes `
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
  `;
//# sourceMappingURL=fading_exits.js.map