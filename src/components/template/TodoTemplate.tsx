/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/react'
import Board from '../atom/Board'
import PageTitle from '../atom/PageTitle'
import Divider from '../atom/Divider'
import TaskInput from '../organism/TaskInput'
import TaskList from '../organism/TaskList'
import { getFadeInStyle } from './templateAnimation'

const fadeInStyle = getFadeInStyle(0.6)

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

  const taskInputStyle = css`
    margin-top: 20px;
  `

  return (
    <div>
      <div css={headerStyle} />
      <div css={bodyStyle}>
        <div css={containerStyle}>
          <Board styleProp={boardStyle}>
            <div css={fadeInStyle(0)}>
              <PageTitle>TodoList</PageTitle>
            </div>
            <div css={[taskInputStyle, fadeInStyle(0.1)]}>
              <TaskInput />
            </div>
            <div css={fadeInStyle(0.2)}>
              <Divider />
            </div>
            <TaskList />
          </Board>
        </div>
      </div>
    </div>
  )
}

export default TodoTemplate
