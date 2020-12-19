/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/react'

const Button: FC<{ onClick: () => void }> = ({ children, onClick }) => {
  const style = css`
    width: 160px;
    padding: 12px;
    color: white;
    text-align: center;
    background-color: #f96060;
    border: none;
    border-radius: 5px;
    outline: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: background-color 0.2s;

    :hover {
      cursor: pointer;
      background-color: #fa8181;
    }

    :active {
      box-shadow: none;
      transform: translateY(2px);
    }
  `

  return (
    <button type="button" onClick={onClick} css={style}>
      {children}
    </button>
  )
}

export default Button
