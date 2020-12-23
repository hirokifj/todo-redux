/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/react'
import CheckIcon from '../molecule/CheckIcon'
import TaskText from '../molecule/TaskText'
import { Task } from '../../types/todo'

const TaskItem: FC<{ task: Task; onCheckTask: () => void }> = ({
  task,
  onCheckTask,
}) => {
  const style = css`
    display: flex;
    align-items: center;
  `

  const checkIconStyle = css`
    display: flex;
    align-items: center;
    margin-right: 16px;
  `

  return (
    <div css={style}>
      <div css={checkIconStyle}>
        <CheckIcon isChecked={task.isDone} onClick={onCheckTask} />
      </div>
      <div>
        <TaskText text={task.title} isChecked={task.isDone} />
      </div>
    </div>
  )
}

export default TaskItem
