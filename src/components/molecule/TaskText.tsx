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
    line-height: 1.4;
  `

  const checkedTextStyle = css`
    color: #bbbab9;
    text-decoration: line-through;
  `

  return <span css={[textStyle, isChecked && checkedTextStyle]}>{text}</span>
}

export default TaskText
