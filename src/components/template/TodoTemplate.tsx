/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/react'
import Board from '../atom/Board'
import Divider from '../atom/Divider'
import TaskInput from '../organism/TaskInput'
import TaskList from '../organism/TaskList'

const TodoTemplate: FC = () => {
  const headerStyle = css`
    width: 100vw;
    height: 10vh;
    background-color: #f96060;
  `

  const bodyStyle = css`
    width: 100vw;
    min-height: 90vh;
    background-color: #f4f4f4;
  `

  const containerStyle = css`
    position: relative;
    top: -5vh;
  `

  const boardStyle = css`
    width: 540px;
    min-height: 600px;
    padding: 48px 52px;
    margin: 0 auto;
  `

  return (
    <div>
      <div css={headerStyle} />
      <div css={bodyStyle}>
        <div css={containerStyle}>
          <Board styleProp={boardStyle}>
            <TaskInput />
            <Divider />
            <TaskList />
          </Board>
        </div>
      </div>
    </div>
  )
}

export default TodoTemplate
