/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/react'
import CheckIcon from '../molecule/CheckIcon'
import TaskText from '../molecule/TaskText'
import { Task } from '../../types/todo'
import TrashIcon from '../atom/TrashIcon'

const TaskItem: FC<{
  task: Task
  onCheckTask: () => void
  onClickTrashIcon: () => void
}> = ({ task, onCheckTask, onClickTrashIcon }) => {
  const style = css`
    display: flex;
    align-items: center;
  `

  const checkIconStyle = css`
    display: flex;
    align-items: center;
    margin-right: 16px;
  `

  const textStyle = css`
    flex: 0 0 75%;
    margin-right: auto;
  `

  const trashStyle = css`
    display: flex;
    align-items: center;
  `

  const trashIconStyle = css`
    color: #363e62;
    cursor: pointer;
    transition: color 0.4s;

    &:hover {
      color: #4e5a8e;
    }
  `

  return (
    <div css={style}>
      <div css={checkIconStyle}>
        <CheckIcon isChecked={task.isDone} onClick={onCheckTask} />
      </div>
      <div css={textStyle}>
        <TaskText text={task.title} isChecked={task.isDone} />
      </div>
      <div css={trashStyle}>
        <TrashIcon onClick={onClickTrashIcon} styleProp={trashIconStyle} />
      </div>
    </div>
  )
}

export default TaskItem
