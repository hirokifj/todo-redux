/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/react'

const TaskText: FC<{
  text: string
  isChecked: boolean
}> = ({ text, isChecked }) => {
  const textStyle = css`
    display: inline-block;
    transform: translate3d(0, 0, 0);

    ::before {
      position: absolute;
      top: 15px;
      left: 0;
      width: 100%;
      height: 1px;
      content: '';
      background: #bbbab9;
      transform: scaleX(0);
      transform-origin: 0 0;
    }
  `

  const checkedTextStyle = css`
    color: #bbbab9;
    transition: all 0.3s ease;

    ::before {
      transition: all 0.3s ease;
      transform: scaleX(1);
    }
  `

  return <span css={[textStyle, isChecked && checkedTextStyle]}>{text}</span>
}

export default TaskText
