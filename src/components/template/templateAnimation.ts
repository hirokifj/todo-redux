import { css, keyframes } from '@emotion/react'

const fadeInAnimation = keyframes`
  0% {
    opacity: 0.4;
    transform: translateX(-40px);
  }

  60% {
    opacity: 1;
    transform: translateX(10px);    
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`
export const getFadeInStyle = (duration: number) => (delay: number) => css`
  animation: ${fadeInAnimation} ${duration}s both ease-out ${delay}s;
`
