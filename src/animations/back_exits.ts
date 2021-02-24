import { keyframes } from 'styled-components';

export const backOutDown = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }

  20% {
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    transform: translateY(700px) scale(0.7);
    opacity: 0.7;
  }
`;

export const backOutLeft = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }

  20% {
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }
`;

export const backOutRight = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }

  20% {
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }
`;

export const backOutUp = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }

  20% {
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    transform: translateY(-700px) scale(0.7);
    opacity: 0.7;
  }
`;
