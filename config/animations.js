import { keyframes } from 'styled-components';

export const wipe = keyframes`
  from { width: 100%; }
  to { width: 0%; }
`;

export const reveal = keyframes`
  from { transform: scale(0.9); }
  to { transform: scale(1); }
`;

export const move = keyframes`
  47% {
    transform-origin: left;
    animation-mode: forwards;
    transform: scaleX(1);
  }
  50% {
    transform-origin: right;
    transform: scaleX(1);
  }
  100% {
    transform-origin: right;
    transform: scaleX(0);
  }
`;

export const fadeIn = keyframes`
  from { opacity: 0;}
  to { opacity: 1;}
`;
