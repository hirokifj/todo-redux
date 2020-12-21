/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx, keyframes } from '@emotion/react'

const CheckIcon: FC<{ isChecked: boolean; onClick: () => void }> = ({
  isChecked,
  onClick,
}) => {
  const iconStyle = css`
    position: relative;
    display: inline-block;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid #b9b8c3;
    border-radius: 50%;
    transition: all 0.2s ease;
    transform: scale(1);

    :hover {
      border: 1px solid #6074f9;
    }

    svg {
      position: absolute;
      top: 7px;
      left: 5px;
      z-index: 1;
      fill: none;
      stroke: white;
      stroke-dasharray: 16px;
      stroke-dashoffset: 16px;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 2;
      transition: all 0.3s ease;
      transition-delay: 0.1s;
      transform: translate3d(0, 0, 0);
    }

    ::before {
      display: block;
      width: 100%;
      height: 100%;
      content: '';
      background-color: #6074f9;
      border-radius: 50%;
      opacity: 1;
      transition-delay: 0.2s;
      transform: scale(0);
    }
  `

  const checkAnimation = keyframes`
    50% {
      transform: scale(1.2)
    }
  `

  const checkedIconStyle = css`
    background-color: #6074f9;
    border-color: #6074f9;
    animation: ${checkAnimation} 0.6s ease;

    svg {
      stroke-dashoffset: 0;
    }

    ::before {
      opacity: 0;
      transition: all 0.6s ease;
      transform: scale(2.2);
    }
  `

  return (
    <span css={[iconStyle, isChecked && checkedIconStyle]} onClick={onClick}>
      <svg width="12px" height="9px" viewBox="0 0 12 9">
        <polyline points="1 5 4 8 11 1" />
      </svg>
    </span>
  )
}

export default CheckIcon
