/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/react'
import CheckIcon from '../molecule/CheckIcon'
import TaskEditableText from '../molecule/TaskText'
import Spacer from '../atom/Spacer'

export interface Task {
  id: string
  title: string
  isDone: boolean
}

const TaskItem: FC<{ task: Task; onCheckTask: () => void }> = ({
  task,
  onCheckTask,
}) => {
  const style = css`
    display: flex;
    align-items: center;
  `

  return (
    <div css={style}>
      <CheckIcon isChecked={task.isDone} onClick={onCheckTask} />
      <Spacer width="10px" />
      <TaskEditableText text={task.title} isChecked={task.isDone} />
    </div>
  )
}

export default TaskItem
