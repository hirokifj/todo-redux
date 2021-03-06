/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx, keyframes } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import TaskItem from './TaskItem'
import { Task } from '../../types/todo'
import { todoSlice, TodoState } from '../../ducks/todo'

const TaskList: FC<{
  tasks: Task[]
  onCheckTask: (id: Task['id']) => void
  onClickTrashIcon: (id: Task['id']) => void
}> = ({ tasks, onCheckTask, onClickTrashIcon }) => {
  const itemAnimation = keyframes`
    from {
      transform: translateY(16px);
    }

    to {
      transform: translateY(0);
    }
  `

  const listStyle = css`
    list-style: none;

    li {
      animation: ${itemAnimation} 0.4s ease-out;
    }

    li:not(:first-of-type) {
      margin-top: 16px;
    }
  `

  return (
    <ul css={listStyle}>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem
            task={task}
            onCheckTask={() => {
              onCheckTask(task.id)
            }}
            onClickTrashIcon={() => {
              onClickTrashIcon(task.id)
            }}
          />
        </li>
      ))}
    </ul>
  )
}

const TaskListContainer: FC = () => {
  const tasks = useSelector<TodoState, Task[]>((state) => state.tasks)
  const dispatch = useDispatch()
  const { taskStatusToggled, taskDeleted } = todoSlice.actions

  const checkTask = (id: Task['id']) => {
    dispatch(taskStatusToggled({ id }))
  }

  const removeTask = (id: Task['id']) => {
    dispatch(taskDeleted({ id }))
  }

  return TaskList({
    tasks,
    onCheckTask: checkTask,
    onClickTrashIcon: removeTask,
  })
}

export default TaskListContainer
