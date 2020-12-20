/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/react'

const Input: FC<{
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}> = ({ value = '', onChange }) => {
  const style = css`
    width: 100%;
    padding: 14px 16px;
    font-size: 16px;
    background-color: #f6f6f6;
    border: none;
    border: 1px solid transparent;
    border-radius: 5px;
    transition: background-color 0.2s;

    :focus {
      background-color: white;
      outline: none;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    }
  `

  return <input type="text" value={value} onChange={onChange} css={style} />
}

export default Input
