import { keyframes } from "styled-components";

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
`;

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
`;

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
`;

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
`;

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
`;

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
`;

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
`;

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
`;

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
`;

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
`;
