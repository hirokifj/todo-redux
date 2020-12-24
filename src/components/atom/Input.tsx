/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, ChangeEvent, KeyboardEvent } from 'react'
import { css, jsx } from '@emotion/react'

const Input: FC<{
  value?: string
  placeholder?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void
}> = ({ value = '', placeholder = '', onChange, onKeyPress }) => {
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

    ::placeholder {
      color: #c0c0c0;
    }
  `

  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyPress={onKeyPress}
      css={style}
    />
  )
}

export default Input
