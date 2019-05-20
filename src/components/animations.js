import { keyframes } from 'styled-components';

export const wipe = keyframes`
  from { width: 100%; }
  to { width: 0%; }
`;

export const reveal = keyframes`
  from { transform: scale(0.9); }
  to { transform: scale(1); }
`;
